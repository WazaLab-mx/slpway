#!/usr/bin/env node
/**
 * Reactivate Beehiiv subscribers stuck in "pending" state.
 *
 * Root cause: the SLP Weekly publication has Double Opt-In enabled. When
 * the backup import happened, every subscriber was created in `pending`
 * and sent a confirmation email. Only ~30 of 826 clicked. The `double_opt_override`
 * parameter in the import payload was silently ignored by the Beehiiv API.
 *
 * Fix: disable DOI in the Beehiiv dashboard FIRST, then run this script.
 * Dashboard path: SLP Weekly → Settings → Subscribe Forms → Double Opt-In → OFF.
 *
 * The script:
 *   1. Pages through every subscriber
 *   2. For each one with status "pending", DELETEs then POSTs them fresh
 *   3. With DOI off, the re-created subscriber comes in as validating → active
 *
 * Run with --dry-run first to see what would happen:
 *   node scripts/reactivate-beehiiv-pending.js --dry-run
 *
 * Then execute:
 *   node scripts/reactivate-beehiiv-pending.js
 */

require('dotenv').config({ path: '.env' });

const API = 'https://api.beehiiv.com/v2';
const API_KEY = process.env.BEEHIIV_API_KEY;
const PUB = process.env.BEEHIIV_PUBLICATION_ID;
const DRY_RUN = process.argv.includes('--dry-run');
const LIMIT = (() => {
  const arg = process.argv.find(a => a.startsWith('--limit='));
  return arg ? parseInt(arg.split('=')[1], 10) : Infinity;
})();

if (!API_KEY || !PUB) {
  console.error('Missing BEEHIIV_API_KEY or BEEHIIV_PUBLICATION_ID in .env');
  process.exit(1);
}

const H = { Authorization: `Bearer ${API_KEY}`, 'Content-Type': 'application/json' };

async function fetchAllPending() {
  const pending = [];
  let page = 1;
  while (true) {
    const res = await fetch(`${API}/publications/${PUB}/subscriptions?limit=100&page=${page}`, { headers: H });
    if (!res.ok) throw new Error(`List subs failed: ${res.status}`);
    const data = await res.json();
    const subs = data.data || [];
    if (subs.length === 0) break;
    for (const s of subs) {
      if (s.status === 'pending') pending.push(s);
    }
    if (!data.total_pages || page >= data.total_pages) break;
    page++;
  }
  return pending;
}

async function deleteSub(id) {
  const res = await fetch(`${API}/publications/${PUB}/subscriptions/${id}`, { method: 'DELETE', headers: H });
  return res.status === 204;
}

async function createSub(sub) {
  // DO NOT pass `double_opt_override` — Beehiiv's naming is inverted:
  // 'on' forces DOI to be required for this subscriber even when the
  // publication has DOI disabled. Leaving it out uses the publication
  // default (DOI off), which lets the sub transition validating → active.
  const res = await fetch(`${API}/publications/${PUB}/subscriptions`, {
    method: 'POST',
    headers: H,
    body: JSON.stringify({
      email: sub.email,
      reactivate_existing: true,
      send_welcome_email: false,
      utm_source: sub.utm_source || 'reactivate_script',
      utm_medium: sub.utm_medium || '',
      utm_campaign: sub.utm_campaign || '',
      referring_site: sub.referring_site || '',
    }),
  });
  return { ok: res.ok, status: res.status, body: await res.text() };
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

(async () => {
  console.log(`Mode: ${DRY_RUN ? 'DRY RUN' : 'EXECUTE'}`);
  console.log('Fetching all pending subscribers...');
  const pending = await fetchAllPending();
  console.log(`Found ${pending.length} pending subscribers\n`);

  if (!pending.length) {
    console.log('Nothing to do.');
    return;
  }

  const targets = pending.slice(0, LIMIT);
  if (LIMIT < Infinity) console.log(`Processing first ${targets.length} (--limit)`);

  if (DRY_RUN) {
    console.log('Would delete and recreate:');
    targets.slice(0, 10).forEach((s) => console.log(`  - ${s.email}`));
    if (targets.length > 10) console.log(`  ... and ${targets.length - 10} more`);
    return;
  }

  let ok = 0, failed = 0;
  const failures = [];
  for (let i = 0; i < targets.length; i++) {
    const s = targets[i];
    try {
      const deleted = await deleteSub(s.id);
      if (!deleted) throw new Error('delete returned non-204');
      await sleep(150); // gentle rate limit
      const created = await createSub(s);
      if (!created.ok) throw new Error(`create ${created.status}: ${created.body.slice(0, 150)}`);
      ok++;
      if ((i + 1) % 25 === 0) console.log(`   ${i + 1}/${targets.length} done`);
    } catch (err) {
      failed++;
      failures.push({ email: s.email, error: err.message });
    }
    await sleep(200);
  }

  console.log('\n=== Done ===');
  console.log(`  Succeeded: ${ok}`);
  console.log(`  Failed:    ${failed}`);
  if (failures.length) {
    console.log('\nFirst 10 failures:');
    failures.slice(0, 10).forEach((f) => console.log(`  - ${f.email}: ${f.error}`));
  }
  console.log('\nVerify the state breakdown:');
  console.log('  node -e "require(\'dotenv\').config();fetch(\'https://api.beehiiv.com/v2/publications/\'+process.env.BEEHIIV_PUBLICATION_ID+\'?expand[]=stats\',{headers:{Authorization:\'Bearer \'+process.env.BEEHIIV_API_KEY}}).then(r=>r.json()).then(d=>console.log(d.data.stats))"');
})().catch((err) => {
  console.error('Fatal:', err);
  process.exit(1);
});
