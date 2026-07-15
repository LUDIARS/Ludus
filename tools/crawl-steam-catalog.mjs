#!/usr/bin/env node

import fs from "node:fs/promises";
import path from "node:path";

function fail(message) {
  throw new Error(message);
}

function parseArgs(argv) {
  const args = {};
  for (let index = 0; index < argv.length; index += 2) {
    const key = argv[index];
    const value = argv[index + 1];
    if (!key?.startsWith("--") || value === undefined) {
      fail(`Invalid argument near ${key ?? "<end>"}`);
    }
    args[key.slice(2)] = value;
  }
  for (const required of ["config", "output", "timestamp"]) {
    if (!args[required]) fail(`Missing --${required}`);
  }
  if (Number.isNaN(Date.parse(args.timestamp))) fail("--timestamp must be an ISO-8601 timestamp");
  return args;
}

function validateSteamUrl(value, label) {
  const url = new URL(value);
  if (url.protocol !== "https:" || url.hostname !== "store.steampowered.com") {
    fail(`${label} must use https://store.steampowered.com`);
  }
  return url;
}

async function fetchText(url) {
  const response = await fetch(url, {
    headers: { "user-agent": "Ludus Steam catalog snapshot/1.0" },
  });
  if (!response.ok) fail(`${url} returned HTTP ${response.status}`);
  return response.text();
}

function decodeHtml(value) {
  const named = { amp: "&", apos: "'", gt: ">", lt: "<", quot: '"' };
  return value.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (entity, code) => {
    if (code.startsWith("#x")) return String.fromCodePoint(Number.parseInt(code.slice(2), 16));
    if (code.startsWith("#")) return String.fromCodePoint(Number.parseInt(code.slice(1), 10));
    return named[code.toLowerCase()] ?? entity;
  });
}

function parsePopularTags(html, limit) {
  const values = [];
  const seen = new Set();
  const pattern = /class="tag_browse_tag[^>]*"[^>]*>([^<]+)</g;
  for (const match of html.matchAll(pattern)) {
    const name = decodeHtml(match[1]).trim();
    if (!name || seen.has(name)) continue;
    values.push(name);
    seen.add(name);
    if (values.length === limit) break;
  }
  if (values.length === 0) fail("Popular-tags page contained no recognizable tags");
  return values;
}

function parseTopSellerCandidates(html, limit) {
  const values = [];
  const seen = new Set();
  const pattern = /data-ds-appid="(\d+)"[\s\S]{0,1600}?<span class="title">([^<]+)<\/span>/g;
  for (const match of html.matchAll(pattern)) {
    const appid = Number.parseInt(match[1], 10);
    if (seen.has(appid)) continue;
    values.push({
      source_position: values.length + 1,
      appid,
      search_title: decodeHtml(match[2]).trim(),
    });
    seen.add(appid);
    if (values.length === limit) break;
  }
  if (values.length === 0) fail("Top-sellers page contained no recognizable app rows");
  return values;
}

async function fetchAppDetails(baseUrl, candidate, locale) {
  const url = new URL(baseUrl);
  url.searchParams.set("appids", String(candidate.appid));
  url.searchParams.set("l", locale.language);
  url.searchParams.set("cc", locale.country.toLowerCase());
  try {
    const payload = JSON.parse(await fetchText(url));
    const entry = payload[String(candidate.appid)];
    if (!entry?.success || !entry.data) {
      return { ...candidate, excluded_reason: "appdetails-unavailable" };
    }
    if (entry.data.type !== "game") {
      return { ...candidate, excluded_reason: `steam-type:${entry.data.type ?? "unknown"}` };
    }
    return {
      source_position: candidate.source_position,
      appid: candidate.appid,
      title: entry.data.name,
      steam_url: `https://store.steampowered.com/app/${candidate.appid}/`,
      short_description: entry.data.short_description,
      genres: (entry.data.genres ?? []).map((genre) => genre.description),
      categories: (entry.data.categories ?? []).map((category) => category.description),
    };
  } catch (error) {
    return { ...candidate, excluded_reason: `appdetails-error:${error.message}` };
  }
}

async function mapWithConcurrency(values, concurrency, mapper) {
  const results = new Array(values.length);
  let nextIndex = 0;
  async function worker() {
    while (nextIndex < values.length) {
      const index = nextIndex;
      nextIndex += 1;
      results[index] = await mapper(values[index]);
    }
  }
  await Promise.all(Array.from({ length: Math.min(concurrency, values.length) }, worker));
  return results;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const configPath = path.resolve(args.config);
  const outputPath = path.resolve(args.output);
  const config = JSON.parse(await fs.readFile(configPath, "utf8"));
  const popularTagsUrl = validateSteamUrl(config.popular_tags_url, "popular_tags_url");
  const topSellersUrl = validateSteamUrl(config.top_sellers_url, "top_sellers_url");
  const appdetailsUrl = validateSteamUrl(config.appdetails_url, "appdetails_url");
  if (!config.locale?.language || !config.locale?.country) fail("config.locale is required");
  if (!Number.isInteger(config.game_limit) || config.game_limit < 1) fail("game_limit must be positive");
  if (!Number.isInteger(config.candidate_limit) || config.candidate_limit < config.game_limit) {
    fail("candidate_limit must be an integer greater than or equal to game_limit");
  }

  const [tagHtml, sellerHtml] = await Promise.all([
    fetchText(popularTagsUrl),
    fetchText(topSellersUrl),
  ]);
  const popularTags = parsePopularTags(tagHtml, config.popular_tag_limit);
  const candidates = parseTopSellerCandidates(sellerHtml, config.candidate_limit);
  const detailed = await mapWithConcurrency(candidates, 4, (candidate) =>
    fetchAppDetails(appdetailsUrl, candidate, config.locale),
  );
  const topSellers = detailed
    .filter((entry) => !entry.excluded_reason)
    .slice(0, config.game_limit)
    .map((entry, index) => ({ game_rank: index + 1, ...entry }));
  if (topSellers.length !== config.game_limit) {
    fail(`Only ${topSellers.length} games resolved; expected ${config.game_limit}`);
  }

  const snapshot = {
    schema_version: "1.0.0",
    captured_at: new Date(args.timestamp).toISOString(),
    locale: config.locale,
    sources: {
      popular_tags_url: popularTagsUrl.toString(),
      top_sellers_url: topSellersUrl.toString(),
      appdetails_url: appdetailsUrl.toString(),
    },
    editorial_note: "Steam tags mix genres, themes, and attributes. Ludus promotes only reusable gameplay structures to genre entries.",
    popular_tags: popularTags,
    top_sellers: topSellers,
    excluded_candidates: detailed.filter((entry) => entry.excluded_reason),
  };
  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.writeFile(outputPath, `${JSON.stringify(snapshot, null, 2)}\n`, "utf8");
  process.stdout.write(`Wrote ${topSellers.length} games and ${popularTags.length} tags to ${outputPath}\n`);
}

main().catch((error) => {
  process.stderr.write(`${error.stack ?? error.message}\n`);
  process.exitCode = 1;
});
