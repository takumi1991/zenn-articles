import fs from 'fs';
import { v2 } from '@google-cloud/translate';

const { Translate } = v2;

/* ======================================
   ▼ Google 翻訳クライアントの初期化（JSON 直接パース版）
   ====================================== */

function loadCredentials() {
  const raw = process.env.GCP_SA_KEY_JSON;

  if (!raw) {
    console.error("❌ Environment variable GCP_SA_KEY_JSON is not set.");
    process.exit(1);
  }

  try {
    return JSON.parse(raw);
  } catch (err) {
    console.error("❌ Failed to parse GCP_SA_KEY_JSON:", err.message);
    process.exit(1);
  }
}

const credentials = loadCredentials();

const translate = new Translate({
  projectId: credentials.project_id,
  credentials: {
    client_email: credentials.client_email,
    private_key: credentials.private_key,
  }
});

console.log("✅ Google Translation client initialized");

/* ======================================
   ▼ 翻訳関数
   ====================================== */

async function translateToJapanese(text) {
  try {
    const [result] = await translate.translate(text, 'ja');
    return result;
  } catch (err) {
    console.error("❌ Translation failed:", err.message);
    return null;
  }
}

/* ======================================
   ▼ メイン処理
   ====================================== */

async function main() {
  try {
    // GitHub Actions の前ステップで必ず data.json が作られている
    const raw = fs.readFileSync('data.json', 'utf8');
    const json = JSON.parse(raw);

    const items = json.items || [];
    console.log(`📦 Loaded items from KV Store: ${items.length}`);

    /* ================================
       ▼ Markdown 組み立て開始
       ================================ */

    let md = `---
title: "AWSの常時無料一覧 (Always Free Services)"
emoji: "😊"
type: "tech"
topics: ["aws", "free-tier", "cloud"]
published: true
---

# AWS 常時無料サービス（Always Free Services） 一覧

AWS の常時無料サービス（Always Free Services）はアカウント作成後の 12 か月間だけ利用できる無料利用枠（Free Tier）とは異なり、12 ヶ月を超えても **特定の使用量まではずっと無料で使えるサービス群** です。

完全に無制限で無料というわけではなく、各サービスの無料枠（リクエスト数、GB、クォータなど）を超えた部分は通常の従量課金が発生します。

本記事では AWS が公式に公開している Always Free 対象サービスを一覧でまとめています。  
クラウド学習、個人開発、コスト最適化の参考にぜひご活用ください。


`;

    // 各サービス（英語 + 日本語訳）
    for (const item of items) {
      md += `## ${item.title}\n\n`;

      if (!item.body) {
        md += '_No description_\n\n';
        continue;
      }

      const text = item.body.replace(/<[^>]+>/g, '').trim();
      console.log("📝 Body content sample:", text.slice(0, 80));
      md += `${text}\n\n`;

      const translated = await translateToJapanese(text);

      if (translated) {
        md += `${translated}\n\n`;
      } else {
        md += `_Translation failed_\n\n`;
      }
    }

    /* ================================
       ▼ あとがき
       ================================ */
    md += `
---

## あとがき

AWS の Always Free は、学習や個人開発で非常に役立つ仕組みです。  
ただし、無料枠には上限があり、超過した場合は課金が発生します。

利用前には必ず AWS 公式の最新情報をチェックしてください。  
本記事が AWS を活用する際の参考になれば幸いです。
`;

    /* ================================
       ▼ 追記：GCP リンク
       ================================ */
    md += `
---

## 関連リンク：Google Cloud の無料枠まとめ

AWS だけでなく **Google Cloud の無料枠** も記事にまとめています。  
用途に応じてクラウドを使い分けたい方はこちらもどうぞ。

👉 **Google Cloud Always Free（無料枠プロダクト一覧）**  
https://zenn.dev/good_sleeper/articles/gcp-always-free
`;

    fs.writeFileSync("articles/aws-always-free.md", md);
    console.log("📄 Markdown updated successfully!");

  } catch (err) {
    console.error("❌ ERROR:", err);
    process.exit(1);
  }
}

main();
