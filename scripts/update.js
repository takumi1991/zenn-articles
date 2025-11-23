import { ApifyClient } from 'apify-client';
import fs from 'fs';
import { v2 } from '@google-cloud/translate';
const { Translate } = v2;

// ★ Google 翻訳クライアント
const translate = new Translate();

// ★ 翻訳関数（失敗したら null を返す）
async function translateToJapanese(text) {
  try {
    const [result] = await translate.translate(text, 'ja');
    return result;
  } catch (err) {
    console.error("Translation failed:", err.message);
    return null;  // 翻訳失敗 → 記載しない
  }
}

async function main() {
  try {
    const client = new ApifyClient({
      token: process.env.APIFY_TOKEN,
    });

    const DATASET_ID = "I06GDgrFBvXQ5zP2o";
    const dataset = await client.dataset(DATASET_ID).listItems();
    const items = dataset.items;

    console.log(`Fetched items: ${items.length}`);

    // ★ Zenn Front Matter + リード文
    let md = `---
title: "AWS 常時無料枠一覧 🆓"
emoji: "🉐"
type: "tech"
topics: ["aws", "free-tier", "cloud"]
published: true
---

# AWS 常時無料枠（Always Free） 一覧

AWS の 常時無料枠（Always Free）はアカウント作成後の 12 か月間だけ利用できる無料利用枠（Free Tier）とは異なり、12 ヶ月を超えても **特定の使用量まではずっと無料で使えるサービス群** です。

完全に無制限で無料というわけではなく、各サービスの無料枠（リクエスト数、GB、クォータなど）を超えた部分は通常の従量課金が発生します。

本記事では AWS が公式に公開している Always Free 対象サービスを一覧でまとめています。  
クラウド学習、個人開発、コスト最適化の参考にぜひご活用ください。

更新日: ${new Date().toISOString().slice(0,10)}

`;

    // ★ 各サービス（英語 + 日本語訳）を追加
    for (const item of items) {
      md += `## ${item.title}\n\n`;

      if (!item.body) {
        md += '_No description_\n\n';
        continue;
      }

      // 英語本文
      const text = item.body.replace(/<[^>]+>/g, '').trim();
      md += `${text}\n\n`;

      // 日本語訳
      const translated = await translateToJapanese(text);
      if (translated) {
        md += `**日本語訳：**\n\n${translated}\n\n`;
      }
    }

    // ★ あとがき
    md += `
---

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
