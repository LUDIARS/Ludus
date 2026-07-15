#!/usr/bin/env node

/**
 * Convert game-knowledge-graph JSON into an OKF bundle owned by Ludus.
 *
 * The source corpus keeps the original Notion-derived system descriptions.
 * This importer preserves them and adds a small, explicit Ludus taxonomy for
 * UX outcomes, domain elements, and Pictor-facing implementation candidates.
 */

import { createHash } from "node:crypto";
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const ludusRoot = path.resolve(scriptDirectory, "..");
const defaultOutput = path.join(ludusRoot, "spec", "data", "okf", "ludus-play");
const defaultSupplement = path.join(ludusRoot, "spec", "data", "okf", "ludus-play-supplement.json");

const domainElements = [
  {
    id: "actors",
    title: "アクターと役割",
    description: "プレイヤー、敵、ユニット、NPC、乗り物など、ふるまいを持つ主体。",
  },
  {
    id: "input-and-control",
    title: "入力と操作",
    description: "プレイヤーの意図をゲーム内の行動へ変換する入力、照準、コマンド、移動制御。",
  },
  {
    id: "space-and-navigation",
    title: "空間と移動",
    description: "地形、マップ、ステージ、位置、カメラ、経路、障害物による行動可能性。",
  },
  {
    id: "conflict-and-resolution",
    title: "対立と解決",
    description: "攻撃、防御、照準、命中、ダメージ、衝突、勝敗判定などの相互作用。",
  },
  {
    id: "rules-and-state",
    title: "ルールと状態",
    description: "ゲーム状態、ターン、時間、フレーム、判定、クールダウンなど、遊びの制約を定義する状態。",
  },
  {
    id: "resources-and-economy",
    title: "リソースと経済",
    description: "スタミナ、HP、通貨、アイテム、カード、所持品など、選択にコストを与える有限資源。",
  },
  {
    id: "objectives-and-progression",
    title: "目的と成長",
    description: "ゴール、クエスト、スコア、レベル、強化、解放など、継続と達成を構成する仕組み。",
  },
  {
    id: "content-and-pacing",
    title: "コンテンツとペーシング",
    description: "ステージ、出現、譜面、ウェーブ、生成、遭遇など、体験の順序と密度を制御する要素。",
  },
  {
    id: "information-and-ui",
    title: "情報とUI",
    description: "HUD、ゲージ、メニュー、表示、通知など、プレイヤーの判断に必要な情報を伝える境界。",
  },
  {
    id: "social-and-session",
    title: "対人関係とセッション",
    description: "チーム、クラン、協力、対戦、マッチ、ランキングなど、他者との関係を扱う要素。",
  },
  {
    id: "audio-and-rhythm",
    title: "音とリズム",
    description: "楽曲、拍、ノーツ、タイミング、音声同期など、時間的な感覚を成立させる要素。",
  },
  {
    id: "presentation-and-feedback",
    title: "演出とフィードバック",
    description: "カメラ、アニメーション、画面効果、シェイク、視認性など、遊びの結果を知覚可能にする表現。",
  },
  {
    id: "meta-and-live-operations",
    title: "メタゲームと運用",
    description: "保存、収集、ガチャ、継続報酬、ライブ運用など、1プレイを越えた関係を作る要素。",
  },
  {
    id: "narrative-and-knowledge",
    title: "物語と知識",
    description: "会話、選択肢、手がかり、クエスト、世界設定など、理解と意味づけを前進させる要素。",
  },
  {
    id: "network-and-synchronization",
    title: "ネットワークと同期",
    description: "マッチメイク、権威サーバー、状態同期、観戦、リプレイなど、複数参加者の一貫性を支える要素。",
  },
  {
    id: "accessibility-and-assistance",
    title: "アクセシビリティと支援",
    description: "チュートリアル、入力補助、字幕、色覚配慮、難易度支援など、より多くの人が遊べるようにする要素。",
  },
];

const pictorCandidates = [
  {
    id: "scene-rendering",
    title: "シーン描画",
    description: "メッシュ、マテリアル、可視性、LOD、描画パスを共通化するPictorの中核。",
    scope: "空間・地形・アクターの可視化。ゲームルールは所有しない。",
  },
  {
    id: "camera-presentation",
    title: "カメラ表現アダプター",
    description: "PictorのCameraへ、追従・ロックオン・シェイク等の結果を反映する共通境界。",
    scope: "追従先の選択や衝突回避のゲームロジックはErgo/Ars側が所有する。",
  },
  {
    id: "ui-rendering",
    title: "UI描画",
    description: "HUD、ゲージ、ラベル、ボタン、パネルを描画する共通UI基盤。",
    scope: "UIの状態遷移とゲームルールは上位層が所有する。",
  },
  {
    id: "text-vector-motion",
    title: "テキスト・ベクター・モーショングラフィックス",
    description: "スコア、コンボ、通知、チュートリアルを解像度非依存で表現する基盤。",
    scope: "表示文言と発火条件はLudus/Arsの仕様から与える。",
  },
  {
    id: "animation-presentation",
    title: "アニメーション表現",
    description: "スケルトン、2D、Rive/Lottie等の再生をゲーム共通の描画機能として扱う。",
    scope: "ステートマシンとゲーム上の遷移規則は上位層が所有する。",
  },
  {
    id: "impact-and-postprocess",
    title: "インパクト・ポストプロセス",
    description: "命中、危機、成功を強める画面効果・残像・色調・ブルーム等の表現アダプター。",
    scope: "ヒットストップやバレットタイムの時間制御そのものはPictorの責務外。",
  },
];

function usage() {
  return [
    "Usage:",
    "  node tools/import-game-knowledge-graph.mjs --source <game-knowledge-graph-dir> [--supplement <json-file>] [--output <dir>] [--timestamp <ISO-8601>]",
  ].join("\n");
}

function parseArgs(argv) {
  const result = { output: defaultOutput, supplement: defaultSupplement, timestamp: new Date().toISOString() };
  for (let index = 0; index < argv.length; index += 1) {
    const argument = argv[index];
    if (argument === "--source" || argument === "--supplement" || argument === "--output" || argument === "--timestamp") {
      const value = argv[index + 1];
      if (!value) throw new Error(`Missing value for ${argument}`);
      result[argument.slice(2)] = value;
      index += 1;
    } else if (argument === "--help" || argument === "-h") {
      result.help = true;
    } else {
      throw new Error(`Unknown argument: ${argument}`);
    }
  }
  return result;
}

function yaml(value) {
  return JSON.stringify(String(value));
}

function frontmatter({ type, title, description, tags, timestamp, extra = {} }) {
  const lines = [
    "---",
    `type: ${yaml(type)}`,
    `title: ${yaml(title)}`,
    `description: ${yaml(description)}`,
    "tags:",
    ...tags.map((tag) => `  - ${yaml(tag)}`),
    `timestamp: ${yaml(timestamp)}`,
  ];
  for (const [key, value] of Object.entries(extra)) {
    lines.push(`${key}: ${yaml(value)}`);
  }
  lines.push("---", "");
  return lines.join("\n");
}

function stableSlug(value) {
  return createHash("sha256").update(value).digest("hex").slice(0, 16);
}

function relativeLink(fromFile, toFile, label) {
  const relative = path.relative(path.dirname(fromFile), toFile).split(path.sep).join("/");
  return `[${label}](${relative.startsWith(".") ? relative : `./${relative}`})`;
}

function unique(values) {
  return [...new Set(values)];
}

function domainIdsFor(system) {
  const text = [system.name, system.purpose, system.design_principle, ...(system.features ?? [])].join(" ").toLowerCase();
  const matches = [];
  const add = (id, pattern) => {
    if (pattern.test(text)) matches.push(id);
  };
  add("actors", /プレイヤー|キャラクター|敵|ユニット|npc|ヒーロー|仲間|車|乗り物/);
  add("input-and-control", /入力|操作|コントローラー|照準|コマンド|移動|ジャンプ|回避|スティック/);
  add("space-and-navigation", /地形|マップ|ステージ|ワールド|位置|カメラ|経路|障害物|ダンジョン|グリッド|レーン|フィールド/);
  add("conflict-and-resolution", /戦闘|攻撃|防御|命中|ダメージ|被弾|衝突|ロックオン|弾|射撃|勝敗|ヒット/);
  add("rules-and-state", /状態|判定|ターン|時間|フレーム|クールダウン|ルール|タイマー|無敵/);
  add("resources-and-economy", /スタミナ|リソース|通貨|お金|コイン|アイテム|インベントリ|カード|デッキ|ガチャ|hp|体力/);
  add("objectives-and-progression", /ゴール|目標|クエスト|スコア|レベル|強化|進化|成長|解放|クリア|ミッション/);
  add("content-and-pacing", /出現|ウェーブ|譜面|生成|遭遇|ステージ|ダンジョン|難易度|チャート/);
  add("information-and-ui", /ui|hud|ゲージ|メニュー|表示|通知|インジケーター|スコア|コンボ/);
  add("social-and-session", /対戦|協力|チーム|クラン|マッチ|ランキング|pvp|マルチ/);
  add("audio-and-rhythm", /音楽|楽曲|リズム|ノーツ|タイミング|音声|拍/);
  add("presentation-and-feedback", /カメラ|演出|視覚|アニメーション|シェイク|フィードバック|エフェクト|恐怖|没入/);
  add("meta-and-live-operations", /セーブ|ロード|ガチャ|収集|継続|ログイン|運用/);
  add("narrative-and-knowledge", /物語|会話|対話|台詞|選択肢|分岐|手がかり|調査|シナリオ|ストーリー|クエスト/);
  add("network-and-synchronization", /ネットワーク|同期|サーバー|マッチメイク|リプレイ|観戦|オンライン|権威|マルチプレイヤー/);
  add("accessibility-and-assistance", /アクセシビリティ|チュートリアル|補助|リマップ|色覚|字幕|スキップ|難易度支援/);
  return matches.length > 0 ? unique(matches) : ["rules-and-state"];
}

function pictorCandidateIdsFor(system) {
  const text = [system.name, system.purpose, ...(system.features ?? []), ...(system.ux_effects ?? [])].join(" ").toLowerCase();
  const matches = [];
  const add = (id, pattern) => {
    if (pattern.test(text)) matches.push(id);
  };
  add("camera-presentation", /カメラ|視点|ロックオン|シェイク/);
  add("ui-rendering", /ui|hud|ゲージ|メニュー|表示|通知|インジケーター/);
  add("text-vector-motion", /スコア|コンボ|テキスト|通知|チュートリアル|字幕|会話|対話|選択肢|バックログ|リプレイ/);
  add("animation-presentation", /アニメーション|モーション|ダンス|演技|カットシーン/);
  add("impact-and-postprocess", /ヒットストップ|バレットタイム|画面|演出|視覚|シェイク|恐怖|フィードバック|命中|残像/);
  add("scene-rendering", /地形|マップ|ワールド|ステージ|ダンジョン|レーン|グリッド|フィールド|障害物/);
  return unique(matches);
}

function implementationAssessment(system, candidateIds) {
  const text = [system.name, system.purpose, ...(system.features ?? [])].join(" ").toLowerCase();
  const sharedLogic = /入力|操作|カメラ|戦闘|攻撃|ダメージ|判定|状態|リソース|スタミナ|スコア|コンボ|セーブ|ロード|音楽|リズム|ターン|カード|デッキ|移動|衝突/.test(text);
  if (candidateIds.length > 0 && sharedLogic) {
    return {
      status: "split",
      owner: "Ergo/Ars + Pictor",
      summary: "ゲーム規則はErgo/Ars、再利用可能な視覚出力はPictorへ分離する候補。",
    };
  }
  if (candidateIds.length > 0) {
    return {
      status: "pictor-visual",
      owner: "Pictor",
      summary: "ゲーム固有の意味付けを持たない視覚表現としてPictorに集約する候補。",
    };
  }
  if (sharedLogic) {
    return {
      status: "shared-logic",
      owner: "Ergo/Ars",
      summary: "複数ジャンルで再利用しうるが、描画専用のPictorではなく上位のゲームロジック層が所有する。",
    };
  }
  return {
    status: "game-specific",
    owner: "Game project",
    summary: "現時点ではジャンル固有の設計として保持し、横断利用の実例が増えた時点で共通化を再評価する。",
  };
}

async function readJson(file) {
  return JSON.parse(await readFile(file, "utf8"));
}

async function writeConcept(file, content) {
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, content, "utf8");
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    process.stdout.write(`${usage()}\n`);
    return;
  }
  if (!args.source) throw new Error(`--source is required\n\n${usage()}`);

  const sourceRoot = path.resolve(args.source);
  const outputRoot = path.resolve(args.output);
  const supplementFile = args.supplement ? path.resolve(args.supplement) : null;
  const manifest = await readJson(path.join(sourceRoot, "manifest.json"));
  const sourceGenreEntries = manifest.genres ?? [];
  const supplement = supplementFile ? await readJson(supplementFile) : { genres: [] };
  const caseStudies = supplement.case_studies ?? [];
  const supplementalGenreEntries = (supplement.genres ?? []).map((graph) => ({
    file: `${path.basename(supplementFile)}#${graph.genre?.id ?? "unknown"}`,
    graph,
  }));
  const genreEntries = [...sourceGenreEntries, ...supplementalGenreEntries];
  if (!Array.isArray(genreEntries) || genreEntries.length === 0) {
    throw new Error("No genres found in manifest.json or the supplement file");
  }
  if (!Array.isArray(caseStudies)) {
    throw new Error("supplement.case_studies must be an array when present");
  }

  await rm(outputRoot, { recursive: true, force: true });

  const genres = [];
  const systems = [];
  for (const entry of genreEntries) {
    const graph = entry.graph ?? await readJson(path.join(sourceRoot, entry.file));
    if (!graph.genre?.id || !Array.isArray(graph.systems)) {
      throw new Error(`Invalid graph document: ${entry.file}`);
    }
    const genreSlug = graph.genre.id.replace(/^genre:/, "");
    const genreFile = path.join(outputRoot, "genres", `${genreSlug}.md`);
    genres.push({ ...graph, entry, slug: genreSlug, file: genreFile });
    for (const system of graph.systems) {
      const systemSlug = system.id.split(":").at(-1);
      systems.push({
        ...system,
        genre: graph.genre,
        genreSlug,
        sourceFile: entry.file,
        importId: graph.import_id ?? "unknown",
        sourcePageId: graph.source_page_id ?? "unknown",
        file: path.join(outputRoot, "systems", genreSlug, `${systemSlug}.md`),
      });
    }
  }

  if (new Set(genres.map((genre) => genre.genre.id)).size !== genres.length) {
    throw new Error("Duplicate genre IDs found across source and supplement data");
  }
  if (new Set(systems.map((system) => system.id)).size !== systems.length) {
    throw new Error("Duplicate system IDs found across source and supplement data");
  }
  if (new Set(caseStudies.map((caseStudy) => caseStudy.id)).size !== caseStudies.length) {
    throw new Error("Duplicate case study IDs found in supplement data");
  }

  const genresById = new Map(genres.map((genre) => [genre.genre.id, genre]));
  const systemsById = new Map(systems.map((system) => [system.id, system]));
  const uxByLabel = new Map();
  for (const system of systems) {
    for (const effect of system.ux_effects ?? []) {
      const label = effect.split(":", 1)[0].trim() || effect;
      if (!uxByLabel.has(label)) {
        uxByLabel.set(label, {
          id: `ux:${stableSlug(label)}`,
          label,
          effects: new Set(),
          systems: new Set(),
          file: path.join(outputRoot, "ux", `${stableSlug(label)}.md`),
        });
      }
      const ux = uxByLabel.get(label);
      ux.effects.add(effect);
      ux.systems.add(system.id);
    }
  }

  const domainById = new Map(domainElements.map((domain) => [domain.id, domain]));
  const pictorById = new Map(pictorCandidates.map((candidate) => [candidate.id, candidate]));

  const graphNodes = [];
  const graphEdges = [];
  const addNode = (node) => graphNodes.push(node);
  const addEdge = (type, from, to, properties = {}) => graphEdges.push({ type, from, to, ...properties });

  const serviceFile = path.join(outputRoot, "owners", "pictor.md");
  addNode({ id: "service:pictor", type: "Implementation Owner", title: "Pictor", path: path.relative(outputRoot, serviceFile).split(path.sep).join("/") });

  for (const domain of domainElements) {
    const file = path.join(outputRoot, "domains", `${domain.id}.md`);
    addNode({ id: `domain:${domain.id}`, type: "Ludus Domain Element", title: domain.title, path: path.relative(outputRoot, file).split(path.sep).join("/") });
    await writeConcept(file, [
      frontmatter({
        type: "Ludus Domain Element",
        title: domain.title,
        description: domain.description,
        tags: ["ludus", "domain", domain.id],
        timestamp: args.timestamp,
      }),
      "# 定義",
      "",
      domain.description,
      "",
      "# グラフ上の役割",
      "",
      "ゲームシステムから `USES_DOMAIN_ELEMENT` で参照される、ジャンル横断のドメイン要素。",
      "",
    ].join("\n"));
  }

  for (const candidate of pictorCandidates) {
    const file = path.join(outputRoot, "pictor", `${candidate.id}.md`);
    addNode({ id: `implementation:pictor:${candidate.id}`, type: "Pictor Implementation Candidate", title: candidate.title, path: path.relative(outputRoot, file).split(path.sep).join("/") });
    addEdge("OWNED_BY", `implementation:pictor:${candidate.id}`, "service:pictor");
    await writeConcept(file, [
      frontmatter({
        type: "Pictor Implementation Candidate",
        title: candidate.title,
        description: candidate.description,
        tags: ["ludus", "pictor", "implementation-candidate", candidate.id],
        timestamp: args.timestamp,
        extra: { owner: "Pictor" },
      }),
      "# 担当する共通表現",
      "",
      candidate.description,
      "",
      "# 境界",
      "",
      candidate.scope,
      "",
      `# 所有者`,
      "",
      relativeLink(file, serviceFile, "Pictor"),
      "",
    ].join("\n"));
  }

  await writeConcept(serviceFile, [
    frontmatter({
      type: "LUDIARS Service",
      title: "Pictor",
      description: "LUDIARSのデータ駆動レンダリングパイプライン。ゲームルールではなく、共通の視覚表現を所有する。",
      tags: ["ludiars", "pictor", "rendering"],
      timestamp: args.timestamp,
      extra: { resource: "https://github.com/LUDIARS/Pictor" },
    }),
    "# 責務",
    "",
    "Pictorは描画・カメラ入力・UI・テキスト・アニメーション・ポストプロセスを提供する。入力判定、ゲーム状態、勝敗、経済などのドメインロジックは所有しない。",
    "",
  ].join("\n"));

  for (const ux of uxByLabel.values()) {
    addNode({ id: ux.id, type: "Ludus UX Outcome", title: ux.label, path: path.relative(outputRoot, ux.file).split(path.sep).join("/") });
    await writeConcept(ux.file, [
      frontmatter({
        type: "Ludus UX Outcome",
        title: ux.label,
        description: `ゲームシステムが提供するUX効果「${ux.label}」。`,
        tags: ["ludus", "ux"],
        timestamp: args.timestamp,
      }),
      "# 原文由来の効果",
      "",
      ...[...ux.effects].sort().map((effect) => `- ${effect}`),
      "",
      "# 接続元",
      "",
      ...[...ux.systems].sort().map((systemId) => {
        const system = systemsById.get(systemId);
        return system ? `- ${relativeLink(ux.file, system.file, system.name)}` : `- ${systemId}`;
      }),
      "",
    ].join("\n"));
  }

  for (const genre of genres) {
    addNode({ id: genre.genre.id, type: "Ludus Game Genre", title: genre.genre.name, path: path.relative(outputRoot, genre.file).split(path.sep).join("/") });
    const genreSystems = systems.filter((system) => system.genre.id === genre.genre.id);
    await writeConcept(genre.file, [
      frontmatter({
        type: "Ludus Game Genre",
        title: genre.genre.name,
        description: genre.genre.summary,
        tags: ["ludus", "gameplay", "genre", genre.slug],
        timestamp: args.timestamp,
        extra: {
          source_import_id: genre.import_id ?? "unknown",
          source_page_id: genre.source_page_id ?? "unknown",
          source_graph: genre.entry.file,
        },
      }),
      "# コア体験",
      "",
      genre.genre.summary,
      "",
      "# 主要システム",
      "",
      ...genreSystems.map((system) => `- ${relativeLink(genre.file, system.file, system.name)}`),
      "",
      "# 実装順序",
      "",
      ...(genre.implementation_order ?? []).map((item, index) => `${index + 1}. ${item}`),
      "",
    ].join("\n"));
  }

  for (const system of systems) {
    const domainIds = domainIdsFor(system);
    const candidateIds = pictorCandidateIdsFor(system);
    const assessment = implementationAssessment(system, candidateIds);
    const uxLinks = (system.ux_effects ?? []).map((effect) => uxByLabel.get(effect.split(":", 1)[0].trim() || effect));
    const genre = genres.find((entry) => entry.genre.id === system.genre.id);

    addNode({ id: system.id, type: "Ludus Gameplay System", title: system.name, path: path.relative(outputRoot, system.file).split(path.sep).join("/") });
    addEdge("HAS_SYSTEM", system.genre.id, system.id, { order: system.order ?? null });
    for (const ux of uxLinks) {
      if (ux) addEdge("DELIVERS_UX", system.id, ux.id);
    }
    for (const domainId of domainIds) {
      addEdge("USES_DOMAIN_ELEMENT", system.id, `domain:${domainId}`);
    }
    for (const candidateId of candidateIds) {
      addEdge("HAS_PICTOR_VISUAL_CANDIDATE", system.id, `implementation:pictor:${candidateId}`, { assessment: assessment.status });
    }

    const predecessorLinks = [];
    for (const [from, to] of genre.edges?.PRECEDES ?? []) {
      if (to === system.id && systemsById.has(from)) predecessorLinks.push(systemsById.get(from));
      if (systemsById.has(from) && systemsById.has(to)) addEdge("PRECEDES", from, to);
    }

    await writeConcept(system.file, [
      frontmatter({
        type: "Ludus Gameplay System",
        title: system.name,
        description: system.purpose,
        tags: ["ludus", "gameplay-system", system.genreSlug, assessment.status],
        timestamp: args.timestamp,
        extra: {
          system_id: system.id,
          genre_id: system.genre.id,
          implementation_status: assessment.status,
          implementation_owner: assessment.owner,
          assessment_basis: "rule-based-v1; manual review required before implementation",
        },
      }),
      "# 目的",
      "",
      system.purpose,
      "",
      "# 設計思想",
      "",
      system.design_principle || "原典に設計思想の記載なし。",
      "",
      "# 主要機能",
      "",
      ...(system.features ?? []).map((feature) => `- ${feature}`),
      "",
      "# UXへの寄与",
      "",
      ...uxLinks.filter(Boolean).map((ux) => `- ${relativeLink(system.file, ux.file, ux.label)}`),
      "",
      "# ドメイン要素",
      "",
      ...domainIds.map((domainId) => {
        const domain = domainById.get(domainId);
        return `- ${relativeLink(system.file, path.join(outputRoot, "domains", `${domainId}.md`), domain.title)}`;
      }),
      "",
      "# 汎用実装の判定",
      "",
      `- **状態**: ${assessment.status}`,
      `- **所有**: ${assessment.owner}`,
      `- **判断**: ${assessment.summary}`,
      "",
      "# Pictor候補",
      "",
      ...(candidateIds.length > 0
        ? candidateIds.map((candidateId) => {
            const candidate = pictorById.get(candidateId);
            return `- ${relativeLink(system.file, path.join(outputRoot, "pictor", `${candidateId}.md`), candidate.title)}`;
          })
        : ["- なし。視覚表現に分離できる要求が具体化した時点で再評価する。"]),
      "",
      "# 実装上の前提",
      "",
      ...(predecessorLinks.length > 0
        ? predecessorLinks.map((predecessor) => `- ${relativeLink(system.file, predecessor.file, predecessor.name)} の後に実装する。`)
        : ["- このジャンル内で先行関係は定義されていない。"]),
      "",
    ].join("\n"));
  }

  const caseStudyFiles = [];
  for (const caseStudy of caseStudies) {
    if (!caseStudy.id || !caseStudy.slug || !caseStudy.title || !Array.isArray(caseStudy.classifications)) {
      throw new Error(`Invalid case study: ${caseStudy.id ?? "unknown"}`);
    }
    const file = path.join(outputRoot, "cases", `${caseStudy.slug}.md`);
    const classifications = caseStudy.classifications.map((classification) => {
      const genre = genresById.get(classification.genre_id);
      if (!genre) throw new Error(`Case study ${caseStudy.id} references unknown genre ${classification.genre_id}`);
      return { ...classification, genre };
    });
    const caseSystems = (caseStudy.system_ids ?? []).map((systemId) => {
      const system = systemsById.get(systemId);
      if (!system) throw new Error(`Case study ${caseStudy.id} references unknown system ${systemId}`);
      return system;
    });
    const caseDomains = (caseStudy.domain_ids ?? []).map((domainId) => {
      const domain = domainById.get(domainId);
      if (!domain) throw new Error(`Case study ${caseStudy.id} references unknown domain ${domainId}`);
      return domain;
    });
    const caseCandidates = (caseStudy.pictor_candidate_ids ?? []).map((candidateId) => {
      const candidate = pictorById.get(candidateId);
      if (!candidate) throw new Error(`Case study ${caseStudy.id} references unknown Pictor candidate ${candidateId}`);
      return candidate;
    });

    addNode({ id: caseStudy.id, type: "Ludus Game Case Study", title: caseStudy.title, path: path.relative(outputRoot, file).split(path.sep).join("/") });
    for (const classification of classifications) {
      addEdge("CLASSIFIED_AS", caseStudy.id, classification.genre_id, { role: classification.role ?? "related" });
    }
    for (const system of caseSystems) addEdge("EXEMPLIFIES_SYSTEM", caseStudy.id, system.id);
    for (const domain of caseDomains) addEdge("USES_DOMAIN_ELEMENT", caseStudy.id, `domain:${domain.id}`);
    for (const candidate of caseCandidates) addEdge("HAS_PICTOR_VISUAL_CANDIDATE", caseStudy.id, `implementation:pictor:${candidate.id}`, { assessment: "case-study" });

    await writeConcept(file, [
      frontmatter({
        type: "Ludus Game Case Study",
        title: caseStudy.title,
        description: caseStudy.summary,
        tags: ["ludus", "case-study", caseStudy.slug],
        timestamp: args.timestamp,
        extra: { case_study_id: caseStudy.id, source_kind: caseStudy.source_kind ?? "public-product-documentation" },
      }),
      "# 結論",
      "",
      caseStudy.summary,
      "",
      "# ジャンル分解",
      "",
      ...classifications.map((classification) => `- **${classification.role ?? "関連"}**: ${relativeLink(file, classification.genre.file, classification.genre.genre.name)} — ${classification.rationale ?? ""}`),
      "",
      "# 主要システム",
      "",
      ...caseSystems.map((system) => `- ${relativeLink(file, system.file, system.name)}`),
      "",
      "# UXの核",
      "",
      ...(caseStudy.ux_focus ?? []).map((item) => `- ${item}`),
      "",
      "# ドメイン要素",
      "",
      ...caseDomains.map((domain) => `- ${relativeLink(file, path.join(outputRoot, "domains", `${domain.id}.md`), domain.title)}`),
      "",
      "# 汎用実装とPictor境界",
      "",
      ...(caseStudy.implementation_boundaries ?? []).map((item) => `- ${item}`),
      "",
      "# Pictor候補",
      "",
      ...(caseCandidates.length > 0
        ? caseCandidates.map((candidate) => `- ${relativeLink(file, path.join(outputRoot, "pictor", `${candidate.id}.md`), candidate.title)}`)
        : ["- なし。視覚表現の要件が具体化した時点で再評価する。"]),
      "",
      "# 根拠",
      "",
      ...(caseStudy.sources ?? []).map((source) => `- [${source.title}](${source.url})${source.note ? ` — ${source.note}` : ""}`),
      "",
    ].join("\n"));
    caseStudyFiles.push({ ...caseStudy, file });
  }

  const schemaFile = path.join(outputRoot, "graph-schema.md");
  await writeConcept(schemaFile, [
    frontmatter({
      type: "Ludus Property Graph Schema",
      title: "Ludus 遊びグラフのスキーマ",
      description: "OKF概念文書をプロパティグラフへ投影するためのノード型・エッジ型の契約。",
      tags: ["ludus", "okf", "property-graph", "schema"],
      timestamp: args.timestamp,
    }),
    "# ノード型",
    "",
    "| 型 | 説明 |",
    "| --- | --- |",
    "| `Ludus Game Genre` | 遊びのジャンル。主要システムの根。 |",
    "| `Ludus Game Case Study` | 実在タイトルを辞書の概念へ対応付けた分析。 |",
    "| `Ludus Gameplay System` | ジャンルを構成する主要要素。 |",
    "| `Ludus UX Outcome` | システムが届ける体験上の効果。 |",
    "| `Ludus Domain Element` | システムが扱うドメインの横断的な構成要素。 |",
    "| `Pictor Implementation Candidate` | Pictorが担当できる共通の視覚表現。 |",
    "| `LUDIARS Service` | 実装責務を所有するサービス。 |",
    "",
    "# エッジ型",
    "",
    "| エッジ | 向き | 意味 |",
    "| --- | --- | --- |",
    "| `HAS_SYSTEM` | Genre → System | ジャンルがそのシステムを主要要素として持つ。 |",
    "| `CLASSIFIED_AS` | Case Study → Genre | タイトル事例をジャンルとして分類する。 |",
    "| `EXEMPLIFIES_SYSTEM` | Case Study → System | タイトル事例がシステムを具体例として持つ。 |",
    "| `DELIVERS_UX` | System → UX Outcome | システムが目標とする体験効果。 |",
    "| `USES_DOMAIN_ELEMENT` | System → Domain Element | システムが主に扱うドメイン要素。 |",
    "| `HAS_PICTOR_VISUAL_CANDIDATE` | System → Pictor Candidate | 視覚表現をPictorへ切り出せる候補。 |",
    "| `OWNED_BY` | Pictor Candidate → Service | 実装責務の所有者。 |",
    "| `PRECEDES` | System → System | 実装順序上の先行関係。 |",
    "",
    "# 投影データ",
    "",
    "[`exports/property-graph.json`](exports/property-graph.json) は、このOKF bundleをグラフDBへ投入するための損失のないノード・エッジ投影である。",
    "",
  ].join("\n"));

  const indexFile = path.join(outputRoot, "index.md");
  await writeConcept(indexFile, [
    "# Ludus あそびの辞書 — OKF bundle",
    "",
    "このbundleは、Notionの「ゲーム構造一覧 (テンプレート一覧)」から得たジャンル別の主要システムを、Ludusの辞書としてOKF化したものです。各Markdownファイルが1つの概念であり、通常のMarkdownリンクが知識グラフの辺になります。",
    "",
    "## 構成",
    "",
    `- ジャンル: ${genres.length}`,
    `- タイトル事例: ${caseStudyFiles.length}`,
    `- 主要システム: ${systems.length}`,
    `- UX成果: ${uxByLabel.size}`,
    `- ドメイン要素: ${domainElements.length}`,
    `- Pictor候補: ${pictorCandidates.length}`,
    "",
    "## 入口",
    "",
    `- ${relativeLink(indexFile, schemaFile, "グラフスキーマ")}`,
    `- ${relativeLink(indexFile, serviceFile, "Pictorの責務境界")}`,
    `- ${relativeLink(indexFile, path.join(outputRoot, "exports", "property-graph.json"), "グラフDB投入用のProperty Graph JSON")}`,
    "",
    "## ジャンル",
    "",
    ...genres.map((genre) => `- ${relativeLink(indexFile, genre.file, genre.genre.name)}`),
    "",
    "## タイトル事例",
    "",
    ...(caseStudyFiles.length > 0
      ? caseStudyFiles.map((caseStudy) => `- ${relativeLink(indexFile, caseStudy.file, caseStudy.title)}`)
      : ["- 登録なし。"]),
    "",
    "## 生成元",
    "",
    "- 原典: Notion「ゲーム構造一覧 (テンプレート一覧)」 (page id: `30453028-8e8d-805d-a922-f92949ebd575`)",
    "- 変換元: `game-knowledge-graph` の `manifest.json` と `graph/*.json`",
    `- Ludus補完: \`${path.relative(ludusRoot, supplementFile).split(path.sep).join("/")}\`（原典にない代表ジャンル・横断要素）`,
    "- 生成器: `tools/import-game-knowledge-graph.mjs`",
    "",
  ].join("\n"));

  await writeConcept(path.join(outputRoot, "exports", "property-graph.json"), `${JSON.stringify({
    version: "1.0.0",
    source: {
      format: "OKF v0.1 projection",
      generated_at: args.timestamp,
      source_graph_root: sourceRoot,
      source_page_id: "30453028-8e8d-805d-a922-f92949ebd575",
      supplemental_source: path.relative(ludusRoot, supplementFile).split(path.sep).join("/"),
    },
    nodes: graphNodes,
    edges: unique(graphEdges.map((edge) => JSON.stringify(edge))).map((edge) => JSON.parse(edge)),
  }, null, 2)}\n`);

  process.stdout.write(`Generated ${genres.length} genres, ${systems.length} systems, ${uxByLabel.size} UX outcomes in ${outputRoot}\n`);
}

main().catch((error) => {
  process.stderr.write(`${error.stack ?? error.message}\n`);
  process.exitCode = 1;
});
