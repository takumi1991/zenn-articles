import fs from 'fs';

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

# AWS 常時無料サービス 一覧 (Always Free Services)

AWS Always Free offers selected services at no cost within defined usage limits, with no expiration. This article summarizes these services to support learning, development, and cost optimization. Note: This article covers the Japan region.

Amazon Web Services の常時無料枠(Always Free Services) はアカウント作成後の12ヵ月間だけ利用できる無料利用枠(Free Tier)とは異なり、12ヶ月を超えても **特定の使用量まではずっと無料で使えるサービス群** です。

完全に無制限で無料というわけではなく、各サービスの無料枠（リクエスト数、GB、クォータなど）を超えた部分は通常の従量課金が発生します。

本記事では AWS が公開している Always Free 対象サービスを一覧でまとめています。  
クラウドサービスの学習、個人開発、コスト最適化の参考にぜひご活用ください。
※なお、リージョンごとに常時無料対象のサービスが異なることがあります。本記事は日本リージョンを対象としています。


`;

    for (const item of items) {
      md += `## ${item.title_ja}\n\n`;

      // ★ここだけ修正（body → description）
      md += `${item.description_ja || ""}\n\n`;

      if (item.link) {
        md += `🔗 ${item.link}\n\n`;
      }
    }

    md += `
---

## あとがき

AWS の常時無料サービス(Always Free Services) は、個人開発や学習に役立つと思います。  
ただ、無料枠には毎月の上限があり、超過した場合は課金が発生しますのでご注意を。

**※利用前には必ずAWS公式の最新情報をあたってください。** 


---

## 関連リンク：他クラウドの常時無料枠まとめ

Google Cloud の上限付きの永久無料枠
👉 https://zenn.dev/good_sleeper/articles/gcp-always-free

Azure の上限付きの常時無料枠 (Always Free Services)
👉 https://zenn.dev/good_sleeper/articles/azure-always-free
`;

    fs.writeFileSync("articles/aws-always-free.md", md);
    console.log("📄 Markdown updated!");

  } catch (err) {
    console.error("❌ ERROR:", err);
    process.exit(1);
  }
}

main();
