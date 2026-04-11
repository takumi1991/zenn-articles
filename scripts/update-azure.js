import fs from "fs";
import path from "path";

const INPUT = "./data.json";
const OUTPUT = "./articles/azure-always-free.md";

// =========================
// フォーマット
// =========================
function formatItem(item) {
  return `## ${item.title}

${item.description}

${item.free_tier}

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
  // alwaysのみ
  // =========================
  const filtered = data.filter(d => d.period === "always");

  // =========================
  // ソート（英語優先の方が見やすい）
  // =========================
  filtered.sort((a, b) =>
    (a.description_en || "").localeCompare(b.description_en || "")
  );

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

---

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
`;

  const markdown = header + body + footer;

  // ディレクトリ作成
  const dir = path.dirname(OUTPUT);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(OUTPUT, markdown, "utf8");

  console.log("✅ Zenn記事生成:", OUTPUT);
  console.log(`件数: ${filtered.length}`);
}

main();
