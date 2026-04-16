import fs from 'fs';
import OpenAI from 'openai';

/* ======================================
   ▼ 設定
   ====================================== */
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const CACHE_PATH = 'scripts/cache/aws_cache.json';
const BATCH_SIZE = 5;

// TTL（30日）
const TTL_DAYS = 30;
const TTL_MS = TTL_DAYS * 24 * 60 * 60 * 1000;

/* ======================================
   ▼ キャッシュ処理
   ====================================== */
function loadCache() {
  if (!fs.existsSync(CACHE_PATH)) return {};
  return JSON.parse(fs.readFileSync(CACHE_PATH, 'utf8'));
}

function saveCache(cache) {
  fs.writeFileSync(CACHE_PATH, JSON.stringify(cache, null, 2));
}

function isExpired(entry) {
  if (!entry) return true;
  return Date.now() - entry.updatedAt > TTL_MS;
}

/* ======================================
   ▼ GPT生成
   ====================================== */
async function generateDescription(title, description) {
  const prompt = `
以下のAWSサービスについて、日本語で300文字程度の解説を書いてください。

# サービス名
${title}

# 概要
${description}

# 条件
・検索キーワード（例: AWS, サービス名, 用途）を自然に含める
・「何ができるサービスか」を最初の1文で明確に説明
・主な用途・ユースケースを具体的に含める
・他のAWSサービスとの違いや特徴を簡潔に触れる
・初心者にも理解できる表現にする
・冗長な前置きは禁止
・箇条書きは禁止（文章で書く）
`;

  const res = await client.responses.create({
    model: 'gpt-4.1-mini',
    input: prompt,
  });

  return res.output_text.trim();
}

/* ======================================
   ▼ メイン処理
   ====================================== */
async function main() {
  try {
    const raw = fs.readFileSync('data.json', 'utf8');
    const items = JSON.parse(raw);

    const cache = loadCache();

    console.log(`📦 Loaded items: ${items.length}`);

    /* ===== GPT生成（バッチ処理） ===== */
    for (let i = 0; i < items.length; i += BATCH_SIZE) {
      const batch = items.slice(i, i + BATCH_SIZE);

      console.log(`🚀 Batch ${i} - ${i + batch.length}`);

      await Promise.all(
        batch.map(async (item) => {
          const key = item.title_ja;
          const entry = cache[key];

          // TTLチェック
          if (entry && !isExpired(entry)) {
            console.log(`⚡ cache hit: ${key}`);
            return;
          }

          console.log(`🤖 generating: ${key}`);

          const text = await generateDescription(
            item.title_ja,
            item.description_ja
          );

          cache[key] = {
            text,
            updatedAt: Date.now(),
          };

          // 逐次保存（途中で落ちてもOK）
          saveCache(cache);
        })
      );
    }

    /* ===== Markdown生成 ===== */
    let md = `---
title: "AWSの常時無料一覧 (Always Free Services)"
emoji: "😊"
type: "tech"
topics: ["aws", "free-tier", "cloud"]
published: true
---

# AWS 常時無料サービス 一覧 (Always Free Services)

Amazon Web Services の常時無料枠(Always Free Services) はアカウント作成後の12ヵ月間だけ利用できる無料利用枠(Free Tier)とは異なり、12ヶ月を超えても **特定の使用量まではずっと無料で使えるサービス群** です。

完全に無制限で無料というわけではなく、各サービスの無料枠（リクエスト数、GB、クォータなど）を超えた部分は通常の従量課金が発生します。

本記事では AWS が公開している Always Free 対象サービスを一覧でまとめています。  
クラウドサービスの学習、個人開発、コスト最適化の参考にぜひご活用ください。
※なお、リージョンごとに常時無料対象のサービスが異なることがあります。本記事は日本リージョンを対象としています。


`;

    for (const item of items) {
      md += `## ${item.title_ja}\n\n`;

      const generated = cache[item.title_ja]?.text;
      md += `${generated || item.description_ja || ""}\n\n`;

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

    fs.writeFileSync('articles/aws-always-free.md', md);

    console.log('📄 Markdown updated!');

  } catch (err) {
    console.error('❌ ERROR:', err);
    process.exit(1);
  }
}

main();
