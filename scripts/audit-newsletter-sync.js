/**
 * Read-only audit: compare Beehiiv subscribers vs newsletter_subscribers in
 * Supabase. Reports counts, status breakdowns, recent activity, and any
 * Beehiiv subscribers missing from Supabase (which would mean the webhook
 * is not delivering).
 *
 * Does NOT write to Supabase or Beehiiv.
 */

require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

const BEEHIIV_KEY = process.env.BEEHIIV_API_KEY;
const BEEHIIV_PUB = process.env.BEEHIIV_PUBLICATION_ID;
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!BEEHIIV_KEY || !BEEHIIV_PUB || !SUPABASE_URL || !SUPABASE_KEY) {
  console.error('Missing env vars. Need BEEHIIV_API_KEY, BEEHIIV_PUBLICATION_ID, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY.');
  process.exit(1);
}

const API_BASE = 'https://api.beehiiv.com/v2';
const PAGE_LIMIT = 100;
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function fetchBeehiivPage(page) {
  const url = `${API_BASE}/publications/${BEEHIIV_PUB}/subscriptions?limit=${PAGE_LIMIT}&page=${page}`;
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${BEEHIIV_KEY}` },
  });
  const text = await res.text();
  if (!res.ok) throw new Error(`Beehiiv ${res.status}: ${text.slice(0, 300)}`);
  return JSON.parse(text);
}

async function fetchAllBeehiiv() {
  console.log('Paginating ALL Beehiiv subscribers...');
  const all = [];
  let page = 1;
  let totalPages = null;
  while (true) {
    const res = await fetchBeehiivPage(page);
    const rows = res.data || [];
    all.push(...rows);
    totalPages = res.total_pages ?? totalPages;
    process.stdout.write(`  page ${page}/${totalPages ?? '?'} — got ${all.length}\r`);
    if (!rows.length) break;
    if (totalPages && page >= totalPages) break;
    page += 1;
    await new Promise((r) => setTimeout(r, 150));
  }
  console.log('');
  return all;
}

async function fetchAllSupabase() {
  console.log('Fetching ALL newsletter_subscribers from Supabase...');
  const all = [];
  const PAGE = 1000;
  let from = 0;
  while (true) {
    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .select('email, status, source, subscribed_at, confirmed_at, unsubscribed_at')
      .range(from, from + PAGE - 1);
    if (error) throw new Error(`Supabase: ${error.message}`);
    if (!data || data.length === 0) break;
    all.push(...data);
    process.stdout.write(`  fetched ${all.length}\r`);
    if (data.length < PAGE) break;
    from += PAGE;
  }
  console.log('');
  return all;
}

function tally(rows, key) {
  const counts = {};
  for (const r of rows) {
    const k = r[key] || '(none)';
    counts[k] = (counts[k] || 0) + 1;
  }
  return counts;
}

function fmtTable(obj) {
  return Object.entries(obj)
    .sort((a, b) => b[1] - a[1])
    .map(([k, v]) => `    ${String(k).padEnd(20)} ${v}`)
    .join('\n');
}

async function main() {
  const [beehiiv, supa] = await Promise.all([fetchAllBeehiiv(), fetchAllSupabase()]);

  console.log('\n=== Counts ===');
  console.log(`Beehiiv:  ${beehiiv.length}`);
  console.log(`Supabase: ${supa.length}`);

  console.log('\n=== Beehiiv status breakdown ===');
  console.log(fmtTable(tally(beehiiv, 'status')));

  console.log('\n=== Supabase status breakdown ===');
  console.log(fmtTable(tally(supa, 'status')));

  const beehiivEmails = new Map(
    beehiiv.map((s) => [s.email.toLowerCase(), s])
  );
  const supaEmails = new Map(
    supa.map((s) => [s.email.toLowerCase(), s])
  );

  // Active in Beehiiv but missing in Supabase → webhook gap
  const activeMissing = [];
  for (const [email, sub] of beehiivEmails) {
    if (sub.status === 'active' && !supaEmails.has(email)) {
      activeMissing.push({ email, created: sub.created });
    }
  }
  activeMissing.sort((a, b) => (b.created || 0) - (a.created || 0));

  // Active in Beehiiv, present in Supabase but Supabase status != active
  const statusMismatch = [];
  for (const [email, sub] of beehiivEmails) {
    if (sub.status !== 'active') continue;
    const supaRow = supaEmails.get(email);
    if (supaRow && supaRow.status !== 'active') {
      statusMismatch.push({
        email,
        beehiiv: sub.status,
        supabase: supaRow.status,
        created: sub.created,
      });
    }
  }
  statusMismatch.sort((a, b) => (b.created || 0) - (a.created || 0));

  // Most recent Beehiiv subscribers (top 5) — to check webhook freshness
  const recent = [...beehiiv]
    .sort((a, b) => (b.created || 0) - (a.created || 0))
    .slice(0, 5)
    .map((s) => ({
      email: s.email,
      status: s.status,
      created: s.created ? new Date(s.created * 1000).toISOString() : null,
      in_supabase: supaEmails.has(s.email.toLowerCase()),
    }));

  console.log('\n=== 5 most recent Beehiiv subscribers (webhook freshness check) ===');
  for (const r of recent) {
    console.log(`  ${r.created || '(no date)'}  ${r.status.padEnd(10)} ${r.in_supabase ? 'IN SUPABASE  ' : 'MISSING IN SB'}  ${r.email}`);
  }

  console.log(`\n=== Beehiiv active but MISSING in Supabase: ${activeMissing.length} ===`);
  if (activeMissing.length > 0) {
    const sample = activeMissing.slice(0, 10);
    for (const m of sample) {
      const when = m.created ? new Date(m.created * 1000).toISOString() : '(no date)';
      console.log(`  ${when}  ${m.email}`);
    }
    if (activeMissing.length > sample.length) {
      console.log(`  ... and ${activeMissing.length - sample.length} more`);
    }
  }

  console.log(`\n=== Beehiiv active but Supabase status != active: ${statusMismatch.length} ===`);
  if (statusMismatch.length > 0) {
    const sample = statusMismatch.slice(0, 10);
    for (const m of sample) {
      const when = m.created ? new Date(m.created * 1000).toISOString() : '(no date)';
      console.log(`  ${when}  beehiiv=${m.beehiiv} supabase=${m.supabase}  ${m.email}`);
    }
    if (statusMismatch.length > sample.length) {
      console.log(`  ... and ${statusMismatch.length - sample.length} more`);
    }
  }

  // Quick diagnostic verdict
  console.log('\n=== Verdict ===');
  const newestBeehiiv = recent[0];
  if (newestBeehiiv && !newestBeehiiv.in_supabase && newestBeehiiv.status === 'active') {
    console.log('⚠️  Most recent active Beehiiv subscriber is NOT in Supabase — webhook may be broken or unregistered.');
  } else if (activeMissing.length === 0) {
    console.log('✅ All active Beehiiv subscribers are in Supabase.');
  } else {
    console.log(`⚠️  ${activeMissing.length} active Beehiiv subscribers are missing from Supabase.`);
    console.log('   This could mean: webhook never registered, webhook recently failed, or historical Beehiiv-side imports never fired webhooks.');
  }
}

main().catch((err) => {
  console.error('Fatal:', err.message);
  process.exit(1);
});
