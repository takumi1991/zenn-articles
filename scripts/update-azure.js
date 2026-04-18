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
// 正規化
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
  return text.trim() === "無料" ? "なし" : text;
};

// =========================
// フォーマット
// =========================
function formatItem(item) {
  return `### ${normalizeTitle(item.title)}

${item.description}

**毎月の上限：** ${normalizeFreeTier(item.free_tier)}

🔗 ${item.link}
`;
}

// =========================
// メイン
// =========================
async function main() {
  const data = JSON.parse(fs.readFileSync(INPUT, "utf8"));
  const categoryMap = JSON.parse(fs.readFileSync(CATEGORY_MAP, "utf8"));

  if (!Array.isArray(data) || data.length === 0) {
    console.error("❌ data empty");
    process.exit(1);
  }

  // alwaysのみ
  const filtered = data.filter(d => d.period === "always");

  // 正規化マップ
  const itemMap = {};
  for (const item of filtered) {
    itemMap[normalize(item.title)] = item;
  }

  const used = new Set();

  const updatedAt = new Date().toLocaleString("ja-JP", {
    timeZone: "Asia/Tokyo",
  });

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

    body += `<br>\n## ${emoji} ${category}（${validItems.length}件）\n\n`;

    validItems.forEach((item, i) => {
      body += formatItem(item);

      if (i !== validItems.length - 1) {
        body += "\n---\n\n";
      } else {
        body += "\n";
      }
    });
  }

  // =========================
  // その他
  // =========================
  const others = filtered.filter(item => !used.has(item.title));

  if (others.length > 0) {
    body += `<br>\n## 🧩 その他（${others.length}件）\n\n`;

    others.forEach((item, i) => {
      body += formatItem(item);

      if (i !== others.length - 1) {
        body += "\n---\n\n";
      } else {
        body += "\n";
      }
    });

    console.log("⚠️ 未マッチ:");
    others.forEach(o => console.log("-", o.title));
  }

  // =========================
  // footer（注意削除済み）
  // =========================
  const footer = `
---

## 関連記事：他クラウドの常時無料枠まとめ

🌈 Google Cloud Platform の常時無料枠  
👉 https://zenn.dev/good_sleeper/articles/gcp-always-free

🟧 AWS の常時無料枠  
👉 https://zenn.dev/good_sleeper/articles/aws-always-free
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
