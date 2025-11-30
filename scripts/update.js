import fs from 'fs';
import { v2 } from '@google-cloud/translate';

const { Translate } = v2;

/* ======================================
   ▼ Google 翻訳クライアント初期化
   ====================================== */
function loadCredentials() {
  const raw = process.env.GCP_SA_KEY_JSON;
  if (!raw) {
    console.error("❌ GCP_SA_KEY_JSON not found");
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

console.log("✅ Translation client initialized");

/* ======================================
   ▼ 翻訳関数
   ====================================== */
async function translateToJapanese(text) {
  try {
    const [result] = await translate.translate(text, 'ja');
    return result;
  } catch (err) {
    console.error("❌ Translation failed:", err);
    return null;
  }
}

/* ======================================
   ▼ メイン処理
   ====================================== */
async function main() {
  try {
    const raw = fs.readFileSync('data.json', 'utf8');
    const items = JSON.parse(raw);

    console.log(`📦 Loaded items: ${items.length}`);

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

    for (const item of items) {
      md += `## ${item.title}\n\n`;

      const text = item.body ? item.body.replace(/<[^>]+>/g, '').trim() : '';
      md += `${text}\n\n`;

      const translated = await translateToJapanese(text || "");
      md += translated ? `${translated}\n\n` : `_Translation failed_\n\n`;
    }

    md += `
---

## あとがき

AWS の Always Free は、学習や個人開発で非常に役立つ仕組みです。  
ただし、無料枠には上限があり、超過した場合は課金が発生します。

利用前には必ず AWS 公式の最新情報をチェックしてください。  
本記事が AWS を活用する際の参考になれば幸いです。

---

## 関連リンク：Google Cloud の無料枠まとめ

GCPの上限付きの永久無料枠もまとめていますので一緒にどうぞ
👉 https://zenn.dev/good_sleeper/articles/gcp-always-free
`;

    fs.writeFileSync("articles/aws-always-free.md", md);
    console.log("📄 Markdown updated!");

  } catch (err) {
    console.error("❌ ERROR:", err);
    process.exit(1);
  }
}

main();
