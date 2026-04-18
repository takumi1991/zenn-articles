import fs from "fs";
import path from "path";

const INPUT = "./data.json";
const OUTPUT = "./articles/azure-always-free.md";
const CATEGORY_MAP = "./data/azure-jp-category-map.json";

// =========================
// カテゴリ絵文字
// =========================
const CATEGORY_META = {
  "AI + 機械学習": "🧠",
  "分析": "📊",
  "コンピューティング": "🖥️",
  "コンテナー": "📦",
  "データベース": "🗄️",
  "開発者ツール": "🛠️",
  "DevOps": "⚙️",
  "ハイブリッド + マルチクラウド": "🌐",
  "ID": "🔐",
  "統合": "🔗",
  "モノのインターネット (IoT)": "📡",
  "管理とガバナンス": "📋",
  "移行": "✈️",
  "ネットワーク": "🌍",
  "セキュリティ": "🛡️",
  "ストレージ": "💾",
  "仮想デスクトップ インフラストラクチャ": "🖥️",
  "Web": "🌎"
};

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
  return t === "無料" ? "なし" : text;
};

// =========================
// フォーマット
// =========================
function formatItem(item) {
  const title = normalizeTitle(item.title);
  const freeTier = normalizeFreeTier(item.free_tier);

  return `### ${title}

${item.description}

**毎月の上限：** ${freeTier}

🔗 ${item.link}
`;
}

// =========================
// メイン
// =========================
async function main() {
  const raw = fs.readFileSync(INPUT, "utf8");
  const data = JSON.parse(raw);

  const categoryMap = JSON.parse(
    fs.readFileSync(CATEGORY_MAP, "utf8")
  );

  if (!Array.isArray(data) || data.length === 0) {
    console.error("❌ data empty");
    process.exit(1);
  }

  // =========================
  // alwaysのみ
  // =========================
  const filtered = data.filter(d => d.period === "always");

  // =========================
  // タイトル→データ辞書
  // =========================
  const itemMap = {};
  for (const item of filtered) {
    itemMap[item.title] = item;
  }

  // =========================
  // 日本時間
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

👉 English version: https://zenn.dev/good_sleeper/articles/azure-always-free-en
`;

  // =========================
  // body
  // =========================
  let body = "";

  for (const [category, services] of Object.entries(categoryMap)) {

    // ← ここが今回のバグ対策
    if (!Array.isArray(services)) continue;

    const validItems = services
      .map(name => itemMap[name])
      .filter(Boolean);

    if (validItems.length === 0) continue;

    const emoji = CATEGORY_META[category] || "📁";

    // SEO用の1文も追加
    body += `\n## ${emoji} ${category}（${validItems.length}件）\n\n`;
    body += `Azureの「${category}」カテゴリに属する常時無料サービス一覧です。\n\n`;

    for (const item of validItems) {
      body += formatItem(item) + "\n";
    }
  }

  // =========================
  // footer
  // =========================
  const footer = `
---

## 注意

常時無料枠にも利用上限があります。  
超過すると課金されるため、必ず公式ドキュメントを確認してください。

## 関連リンク

AWS 常時無料サービス一覧
👉 https://zenn.dev/good_sleeper/articles/aws-always-free

Google Cloud Platform 常時無料サービス一覧
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
