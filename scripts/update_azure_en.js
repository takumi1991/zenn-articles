import fs from "fs";
import path from "path";

const INPUT = "./data.json";
const OUTPUT = "./articles/azure-always-free-en.md";

// =========================
// Free Tier補正（EN専用）
// =========================
const normalizeFreeTier = (text) => {
  if (!text) return text;
  const t = text.trim().toLowerCase();

  if (t === "free") return "Unlimited";

  return text;
};

// =========================
// フォーマット（EN）
// =========================
function formatItem(item) {
  const freeTier = normalizeFreeTier(item.free_tier);

  return `## ${item.title}

${item.description}

**Monthly limit:** ${freeTier}

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
  // UTC日時（英語記事用）
  // =========================
  const now = new Date();
  const updatedAt = now.toISOString().replace("T", " ").slice(0, 19) + " UTC";

  // =========================
  // header（EN）
  // =========================
  const header = `---
title: "Microsoft Azure Always Free Services"
emoji: "🟦"
type: "tech"
topics: ["azure", "free-tier", "cloud"]
published: true
---

# Microsoft Azure Always Free Services

Last updated: ${updatedAt}

Azure provides a set of "Always Free" services, similar to AWS and Google Cloud.  
These services allow you to build applications, run workloads, and experiment with cloud technologies at no cost within defined limits.

This article lists only the services that are available under the Always Free tier.
`;

  // =========================
  // body
  // =========================
  const body = filtered.map(formatItem).join("\n");

  // =========================
  // footer（EN）
  // =========================
  const footer = `
---

## Notes

Always Free services have usage limits.  
Charges may apply if you exceed these limits, so always check the official documentation.

## Related Articles

AWS Always Free Services  
👉 https://zenn.dev/good_sleeper/articles/aws-always-free-en

Google Cloud Always Free Services  
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

  console.log("✅ EN Zenn記事生成:", OUTPUT);
  console.log(`件数: ${filtered.length}`);
  console.log(`🕒 Updated: ${updatedAt}`);
}

main();
