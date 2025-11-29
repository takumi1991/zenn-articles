import fs from "fs";
import fetch from "node-fetch";

const TOKEN = process.env.APIFY_TOKEN;
const ACTOR_ID = process.env.APIFY_ACTOR_ID_GCP;

async function runActor() {
  const url = `https://api.apify.com/v2/actors/${ACTOR_ID}/runs?token=${TOKEN}`;
  const res = await fetch(url, { method: "POST" });
  const json = await res.json();
  return json.data.id; // runId
}

async function waitForFinish(runId) {
  while (true) {
    const url = `https://api.apify.com/v2/actor-runs/${runId}?token=${TOKEN}`;
    const res = await fetch(url);
    const json = await res.json();

    console.log("STATUS:", json.data.status);

    if (json.data.status === "SUCCEEDED") return;
    if (json.data.status === "FAILED") throw new Error("Actor failed");

    await new Promise((r) => setTimeout(r, 5000));
  }
}

async function fetchDataset() {
  const DATASET_ID = "Lvnyi6fUL1M1mHB2N";
  const url = `https://api.apify.com/v2/datasets/${DATASET_ID}/items?token=${TOKEN}`;
  const res = await fetch(url);
  return await res.json();
}

function buildMarkdown(items) {
  let md = `---
title: "Google Cloud Always Free"
emoji: "☁️"
type: "tech"
topics: ["gcp", "cloud"]
published: true
---

# Google Cloud Always Free

最終更新日: ${new Date().toISOString()}

`;

  for (const item of items) {
    md += `## ${item.title}\n`;
    md += `${item.description}\n\n`;
    md += `**Free Tier:** ${item.free_tier}\n\n`;
    md += `[公式リンク](${item.link})\n\n`;
  }

  return md;
}

async function main() {
  console.log("Fetching GCP Always Free data...");

  const runId = await runActor();
  await waitForFinish(runId);

  const items = await fetchDataset();

  const md = buildMarkdown(items);
  fs.writeFileSync("articles/gcp-always-free.md", md);

  console.log("DONE. Markdown updated.");
}

main();
