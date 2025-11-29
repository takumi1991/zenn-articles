// scripts/update-gcp.js
import fs from 'fs';
import path from 'path';

const APIFY_TOKEN = process.env.APIFY_TOKEN;
const ACTOR_ID = process.env.APIFY_ACTOR_ID_GCP;

if (!APIFY_TOKEN || !ACTOR_ID) {
  console.error('APIFY_TOKEN or APIFY_ACTOR_ID_GCP is not set.');
  process.exit(1);
}

async function startRun() {
  const res = await fetch(
    `https://api.apify.com/v2/acts/${ACTOR_ID}/runs?token=${APIFY_TOKEN}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({}), // 今は特に入力不要
    }
  );

  if (!res.ok) {
    throw new Error(`Failed to start actor run: ${res.status} ${res.statusText}`);
  }

  const json = await res.json();
  const runId = json?.data?.id;
  if (!runId) {
    throw new Error('Could not get runId from Apify response.');
  }
  return runId;
}

async function waitForRun(runId) {
  console.log('Waiting for Apify run to finish...');

  for (let i = 0; i < 60; i++) {
    const res = await fetch(
      `https://api.apify.com/v2/actor-runs/${runId}?token=${APIFY_TOKEN}`
    );
    if (!res.ok) {
      throw new Error(`Failed to get run status: ${res.status} ${res.statusText}`);
    }
    const json = await res.json();
    const status = json?.data?.status;
    const storeId = json?.data?.defaultKeyValueStoreId;

    console.log(`Status: ${status}`);

    if (status === 'SUCCEEDED') {
      if (!storeId) {
        throw new Error('defaultKeyValueStoreId is missing in run data.');
      }
      return storeId;
    }

    if (['FAILED', 'ABORTED', 'TIMED-OUT'].includes(status)) {
      throw new Error(`Run finished with status: ${status}`);
    }

    await new Promise((r) => setTimeout(r, 5000)); // 5秒待つ
  }

  throw new Error('Run did not finish in time.');
}

async function downloadJson(storeId) {
  const url = `https://api.apify.com/v2/key-value-stores/${storeId}/records/GCP_ALWAYS_FREE?disableRedirect=true&token=${APIFY_TOKEN}`;

  console.log('Downloading JSON from:', url);

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to download JSON: ${res.status} ${res.statusText}`);
  }

  return await res.json();
}

function generateMarkdown(data) {
  const fetchedAt = data?.fetchedAt ?? '';
  const items = data?.items ?? [];

  const lines = [];
  lines.push('# Google Cloud Always Free', '');
  lines.push(`最終更新日: ${fetchedAt}`, '');
  for (const item of items) {
    const title = item.title ?? '';
    const desc = item.description ?? '';
    const free = item.free_tier ?? '';
    const link = item.link ?? '';

    lines.push(`## 🌟 ${title}`);
    if (desc) lines.push(desc);
    if (free) lines.push(`**無料枠**：${free}  `);
    if (link) lines.push(link);
    lines.push('', '---', '');
  }

  return lines.join('\n');
}

(async () => {
  try {
    console.log('Starting Apify actor run for GCP Always Free...');
    const runId = await startRun();
    console.log('Run ID:', runId);

    const storeId = await waitForRun(runId);
    console.log('Using KV store:', storeId);

    const json = await downloadJson(storeId);
    const markdown = generateMarkdown(json);

    const outPath = path.join('articles', 'gcp-always-free.md');
    fs.writeFileSync(outPath, markdown, 'utf8');

    console.log('Markdown written to', outPath);
  } catch (err) {
    console.error('Error in update-gcp.js:', err);
    process.exit(1);
  }
})();
