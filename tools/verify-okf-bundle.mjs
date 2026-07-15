#!/usr/bin/env node

import { existsSync, readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(process.argv[2] ?? path.join(scriptDirectory, "..", "spec", "data", "okf", "ludus-play"));

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => (
    entry.isDirectory() ? walk(path.join(directory, entry.name)) : [path.join(directory, entry.name)]
  ));
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const graph = JSON.parse(readFileSync(path.join(root, "exports", "property-graph.json"), "utf8"));
const nodeIds = new Set(graph.nodes.map((node) => node.id));
assert(nodeIds.size === graph.nodes.length, "Property Graph has duplicate node IDs.");

const danglingEdges = graph.edges.filter((edge) => !nodeIds.has(edge.from) || !nodeIds.has(edge.to));
assert(danglingEdges.length === 0, `Property Graph has ${danglingEdges.length} dangling edges.`);

const documents = walk(root).filter((file) => file.endsWith(".md"));
const missingType = documents.filter((file) => (
  path.basename(file) !== "index.md" && !/^---\r?\n[\s\S]*?^type:/m.test(readFileSync(file, "utf8"))
));
assert(missingType.length === 0, `OKF documents missing type: ${missingType.join(", ")}`);

const missingLinks = [];
for (const document of documents) {
  const content = readFileSync(document, "utf8");
  for (const match of content.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)) {
    const target = match[1];
    if (!/^(https?:|#)/.test(target) && !existsSync(path.resolve(path.dirname(document), target))) {
      missingLinks.push(`${path.relative(root, document)} -> ${target}`);
    }
  }
}
assert(missingLinks.length === 0, `OKF bundle has broken links:\n${missingLinks.join("\n")}`);

process.stdout.write(`${JSON.stringify({
  markdown_concepts: documents.length,
  okf_type_documents: documents.filter((file) => path.basename(file) !== "index.md").length,
  property_graph_nodes: graph.nodes.length,
  property_graph_edges: graph.edges.length,
}, null, 2)}\n`);
