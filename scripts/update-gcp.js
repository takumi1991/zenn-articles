import fs from 'fs';
import fetch from 'node-fetch';

const TOKEN = process.env.APIFY_TOKEN;
const ACTOR_ID = process.env.APIFY_ACTOR_ID_GCP;
const DATASET_ID = "Lvnyi6fUL1M1mHB2N";   // ← 固定でOK

async function run() {
  console.log("Fetching GCP Always Free data...");

  // 1) Actor 実行
  const runRes = await fetch(
    `https://api.apify.com/v2/acts/${ACTOR_ID}/runs?token=${TOKEN}`,
    { method: "POST" }
  );
  const runJson = await runRes.json();
  const runId = runJson.data.id;

  // 2) 完了待ち
  let status = "RUNNING";
  while (status !== "SUCCEEDED") {
    const st = await fetch(
      `https://api.apify.com/v2/actor-runs/${runId}?token=${TOKEN}`
    );
    const stJson = await st.json();
    status = stJson.data.status;
    console.log("STATUS:", status);
    if (status !== "SUCCEEDED") await new Promise(r => setTimeout(r, 5000));
  }

  // 3) Dataset 取得
  const dsRes = await fetch(
    `https://api.apify.com/v2/datasets/${DATASET_ID}/items?token=${TOKEN}`
  );

  if (!dsRes.ok) {
    throw new Error(`Failed dataset fetch: ${dsRes.status}`);
  }

  const items = await dsRes.json();

  const data = {
    fetchedAt: new Date().toISOString(),
    total: items.length,
    items,
  };

  // 4) data.json として保存
  fs.writeFileSync("data.json", JSON.stringify(data, null, 2));
  console.log("DONE. data.json created.");
}

run();
