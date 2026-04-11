import fs from "fs";
import path from "path";

const INPUT = "./data.json";
const OUTPUT = "./articles/azure-always-free.md";

// =========================
// タイトル補正（ピンポイント）
// =========================
const normalizeTitle = (title) => {
  if (!title) return title;
  return title.replace("、サービス カタログ", "");
};

// =========================
// Free Tier補正
// 「無料」「Free」→「なし」
// =========================
const normalizeFreeTier = (text) => {
  if (!text) return text;

  const t = text.trim();

  return (t === "無料" || t.toLowerCase() === "free")
    ? "なし"
    : text;
};

// =========================
// フォーマット
// =========================
function formatItem(item) {
  const title = normalizeTitle(item.title);
  const freeTier = normalizeFreeTier(item.free_tier);

  return `## ${title}

${item.description}
毎月の上限：${freeTier}

${item.description_en}
${item.free_tier_en}

🔗 ${item.link}

`;
}

// =========================
// メイン
// =========================
async function main() {
  const raw = fs.readFileSync(INPUT, "utf8");
  const data = JSON.parse(raw);

  if (!data.length) {
    console.error("❌ data empty");
    process.exit(1);
  }

  // =========================
  // alwaysのみ（順序維持）
  // =========================
  const filtered = data.filter(d => d.period === "always");

  // =========================
  // header
  // =========================
  const header = `---
title: "Azure 常時無料サービス一覧(Always Free Services)"
emoji: "🔵"
type: "tech"
topics: ["azure", "free-tier", "cloud"]
published: true
---

# Azure常時無料サービス一覧 (Always Free Services)

Azureには「常時無料枠（Always Free Services）」が存在します。  
この記事では、常時無料で使えるサービスのみをまとめています。
`;

  // =========================
  // body
  // =========================
  const body = filtered.map(formatItem).join("\n");

  // =========================
  // footer
  // =========================
  const footer = `
---

## 注意

無料枠には上限があります。  
超過すると課金されるため、必ず公式ドキュメントを確認してください。

## 関連リンク：AWSやGoogle Cloudの常時無料枠もまとめていますのでご一緒にどうぞ

AWS の上限付きの常時無料枠 (Always Free Services)  
👉 https://zenn.dev/good_sleeper/articles/aws-always-free

GCPの上限付きの永久無料枠  
👉 https://zenn.dev/good_sleeper/articles/gcp-always-free
`;

  const markdown = header + body + footer;

  // =========================
  // ディレクトリ作成
  // =========================
  const dir = path.dirname(OUTPUT);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(OUTPUT, markdown, "utf8");

  console.log("✅ Zenn記事生成:", OUTPUT);
  console.log(`件数: ${filtered.length}`);
}

main();
