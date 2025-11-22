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
emoji: "☁️"
type: "tech"
topics: ["aws", "free-tier", "cloud"]
published: true
---

# AWS Always Free 一覧

AWS の Always Free（永年無料枠）は、アカウント作成後の 12 か月間だけの Free Tier とは異なり、  
**特定の使用量まではずっと無料で利用できるサービス群** です。

**「完全に無制限で無料」ではありません**。  
各サービスごとに明確な無料枠（リクエスト数、GB、クォータなど）が設定されており、  
その上限を超えた分は通常の従量課金が発生します。

本記事では、現時点で AWS が公式に公開している Always Free 対象サービスを 
一覧にして表示しています。  

クラウド学習、コスト最適化、個人開発の基盤構築にご活用ください。
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
