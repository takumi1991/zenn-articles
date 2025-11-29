import { ApifyClient } from 'apify-client';
import fs from 'fs';

async function main() {
  const client = new ApifyClient({
    token: process.env.APIFY_TOKEN,
  });

  // ★ ここに固定の Dataset ID を使う（GCP 版）
  const DATASET_ID = "Lvnyi6fUL1M1mHB2N";

  console.log("📦 Fetching Dataset:", DATASET_ID);

  const dataset = await client.dataset(DATASET_ID).listItems();
  const items = dataset.items;

  console.log(`📦 Items: ${items.length}`);

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
    md += `## 🌟 ${item.title}\n\n`;
    md += `${item.description}\n\n`;
    md += `**無料枠**：${item.free_tier}\n\n`;
    md += `${item.link}\n\n`;
    md += `---\n\n`;
  }

  fs.writeFileSync("articles/gcp-always-free.md", md);
  console.log("📄 Markdown updated!");
}

main();
