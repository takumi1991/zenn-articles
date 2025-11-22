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

    // ★ Zenn の Front Matter + 導入文 ★
    let md = `---
title: "AWS 常時無料枠一覧 🆓"
emoji: "🉐"
type: "tech"
topics: ["aws", "free-tier", "cloud"]
published: true
---

# AWS 常時無料枠（Always Free） 一覧

AWS の 常時無料枠（Always Free）はアカウント作成後の 12 か月間だけ利用できる無料利用枠（Free Tier）とは異なり、１２ヶ月を超えても**特定の使用量まではずっと無料で使えるサービス群** です。

完全に無制限で無料というわけではありませんが、各サービスの無料枠（リクエスト数、GB、クォータなど）を超えた部分は通常の従量課金が発生します。

本記事では　AWS が公式に公開している Always Free 対象サービスを一覧でまとめています。  
クラウド学習、個人開発、コスト最適化の参考にぜひご活用ください。

更新日: ${new Date().toISOString().slice(0,10)}


`;

    // ★ 本文（各サービス） ★
    for (const item of items) {
      md += `## ${item.title}\n\n`;
      if (item.body) {
        const text = item.body.replace(/<[^>]+>/g, '').trim();
        md += `${text}\n\n`;
      } else {
        md += '_No description_\n\n';
      }
    }

    // ★ あとがき ★
    md += `---

## あとがき

AWS の Always Free は、学習や個人開発で非常に役立つ仕組みです。  
ただし、無料枠には上限があり、超過した場合は課金が発生します。

利用前には必ず AWS 公式の最新情報をチェックしてください。  
本記事が AWS を活用する際の参考になれば幸いです。

`;

    fs.writeFileSync("articles/aws-always-free.md", md);
    console.log("Markdown updated!");
  } catch (err) {
    console.error("ERROR:", err);
    process.exit(1);
  }
}

main();
