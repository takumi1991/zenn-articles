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

# AWS 常時無料サービス（Always Free Services） 一覧

AWS の常時無料サービス（Always Free Services）はアカウント作成後の 12 か月間だけ利用できる無料利用枠（Free Tier）とは異なり、12 ヶ月を超えても **特定の使用量まではずっと無料で使えるサービス群** です。

完全に無制限で無料というわけではなく、各サービスの無料枠（リクエスト数、GB、クォータなど）を超えた部分は通常の従量課金が発生します。

本記事では AWS が公式に公開している Always Free 対象サービスを一覧でまとめています。  
クラウド学習、個人開発、コスト最適化の参考にぜひご活用ください。
※なお、リージョンごとに常時無料対象のサービスが異なることがあります。本記事は日本リージョンを対象としています。


`;

    for (const item of items) {
      md += `## ${item.title}\n\n`;

      // ★ここだけ修正（body → description）
      md += `${item.description_en || ""}\n\n`;
      md += `${item.description_ja || ""}\n\n`;

      if (item.link) {
        md += `🔗 ${item.link}\n\n`;
      }
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
