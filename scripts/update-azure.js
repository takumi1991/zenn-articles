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
// 正規化（超重要）
// =========================
const normalize = (s) =>
  s
    ?.toLowerCase()
    .replace(/azure\s*/g, "")
    .replace(/[（）()]/g, "")
    .replace(/\s+/g, "")
    .trim();

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
  // 正規化マップ作成
  // =========================
  const itemMap = {};
  for (const item of filtered) {
    itemMap[normalize(item.title)] = item;
  }

  const used = new Set();

  // =========================
  // 日本時間
  // =========================
  const now = new Date();
  const updatedAt = now.toLocaleString("ja-JP", {
    timeZone: "Asia/Tokyo",
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

AzureにもAWSやGoogle Cloud同様に「常時無料枠（Always Free Services）」が用意されています。

👉 English version: https://zenn.dev/good_sleeper/articles/azure-always-free-en
`;

  let body = "";

  // =========================
  // カテゴリ描画
  // =========================
  for (const [category, services] of Object.entries(categoryMap)) {
    if (!Array.isArray(services)) continue;

    const validItems = services
      .map(name => {
        const item = itemMap[normalize(name)];
        if (item) used.add(item.title);
        return item;
      })
      .filter(Boolean);

    if (validItems.length === 0) continue;

    const emoji = CATEGORY_META[category] || "📁";

    body += `\n## ${emoji} ${category}（${validItems.length}件）\n\n`;
    body += `Azureの「${category}」カテゴリに属する常時無料サービス一覧です。\n\n`;

    for (const item of validItems) {
      body += formatItem(item) + "\n";
    }
  }

  // =========================
  // その他（未マッチ）
  // =========================
  const others = filtered.filter(item => !used.has(item.title));

  if (others.length > 0) {
    body += `\n## 🧩 その他（${others.length}件）\n\n`;
    body += `分類に含まれていないサービスです。\n\n`;

    for (const item of others) {
      body += formatItem(item) + "\n";
    }

    // デバッグログ
    console.log("⚠️ 未マッチ:");
    others.forEach(o => console.log("-", o.title));
  }

  // =========================
  // footer
  // =========================
  const footer = `
---

## 注意

常時無料枠には上限があります。超過すると課金されます。
`;

  const markdown = header + body + footer;

  const dir = path.dirname(OUTPUT);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(OUTPUT, markdown, "utf8");

  console.log("✅ Zenn記事生成:", OUTPUT);
  console.log(`総件数: ${filtered.length}`);
  console.log(`🧩 その他: ${others.length}`);
}

main();
