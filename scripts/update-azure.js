import fs from "fs";
import path from "path";

const INPUT = "./data.json";
const OUTPUT = "./articles/azure-always-free.md";

// =========================
// タイトル補正
// =========================
const normalizeTitle = (title) => {
  if (!title) return title;
  return title.replace("、サービス カタログ", "");
};

// =========================
// Free Tier補正
// =========================
const normalizeFreeTier = (text) => {
  if (!text) return text;
  const t = text.trim();
  return (t === "無料" || t.toLowerCase() === "free")
    ? "なし"
    : text;
};

// =========================
// Free Tier En補正
// =========================
const normalizeFreeTierEn = (text) => {
  if (!text) return text;
  const t = text.trim().toLowerCase();
  return t === "free" ? "Unlimited" : text;
};

// =========================
// フォーマット
// =========================
function formatItem(item) {
  const title = normalizeTitle(item.title);
  const freeTier = normalizeFreeTier(item.free_tier);
  const freeTierEn = normalizeFreeTierEn(item.free_tier_en);

  return `## ${title}

${item.description}
**毎月の上限：**${freeTier}

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
  // 日本時間（秒まで）
  // =========================
  const now = new Date();
  const updatedAt = now.toLocaleString("ja-JP", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  // =========================
  // header
  // =========================
  const header = `---
title: "Microsoft Azure 常時無料サービス一覧(Always Free Services)"
emoji: "🔵"
type: "tech"
topics: ["azure", "free-tier", "cloud"]
published: true
---

# Azure常時無料サービス一覧

最終更新日: ${updatedAt}

AzureにもAWSやGoogle Cloud同様に「常時無料枠（Always Free Services）」が用意されています。それらと比較して対象サービス数も多く、AI・データ・アプリ基盤まで幅広く常時無料枠が揃っているため、個人開発でも多様な構成をコストを抑えて実現できます。

この記事では、常時無料で利用できるAzureサービスのみをまとめています。
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

常時無料枠にも利用上限があります。  
超過すると課金されるため、必ず公式ドキュメントを確認してください。

## 関連リンク：AWSやGoogle Cloudの常時無料枠

AWS Always Free Tier List
👉 https://zenn.dev/good_sleeper/articles/aws-always-free

Google Cloud Platform Always Free Tier List
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
  console.log(`🕒 更新日時: ${updatedAt}`);
}

main();
