import { ApifyClient } from 'apify-client';
import fs from 'fs';

async function main() {
  try {
    const client = new ApifyClient({
      token: process.env.APIFY_TOKEN,
    });

    const DATASET_ID = "I06GDgrFBvXQ5zP2o";
    const dataset = await client.dataset(DATASET_ID).listItems();
    const items = dataset.items;

    console.log(`Fetched items: ${items.length}`);

    // ★ Zenn の Front Matter を追加 ★
    let md = `---
title: "AWS Always Free 一覧"
emoji: "🌐"
type: "tech"
topics: ["aws", "free-tier", "cloud"]
published: true
---

# AWS Always Free 一覧

更新日: ${new Date().toISOString().slice(0,10)}

`;

    // 本文生成
    for (const item of items) {
      md += `## ${item.title}\n\n`;
      if (item.body) {
        const text = item.body.replace(/<[^>]+>/g, '').trim();
        md += `${text}\n\n`;
      } else {
        md += '_No description_\n\n';
      }
    }

    fs.writeFileSync("articles/aws-always-free.md", md);
    console.log("Markdown updated!");
  } catch (err) {
    console.error("ERROR:", err);
    process.exit(1);
  }
}

main();
