/**
 * Imports the latest local Beehiiv backup into a NEW Beehiiv publication.
 * Use this after opening a fresh Beehiiv account to migrate your 908
 * subscribers without losing anyone.
 *
 * Required env vars (or CLI flags):
 *   BEEHIIV_API_KEY_NEW        — API key of the new publication
 *   BEEHIIV_PUBLICATION_ID_NEW — publication ID of the new publication
 *
 * Optional env vars:
 *   BEEHIIV_IMPORT_BACKUP_DIR  — path to specific backup (default: latest)
 *
 * Optional CLI flags:
 *   --dry-run           preview what would happen without hitting Beehiiv
 *   --include-inactive  also import unsubscribed subs (default: skip)
 *   --include-invalid   also import bounced / invalid-email subs (default: skip)
 *   --limit N           only process the first N records (for testing)
 *
 * Usage:
 *   BEEHIIV_API_KEY_NEW=... BEEHIIV_PUBLICATION_ID_NEW=pub_... \
 *     node scripts/import-beehiiv-backup-to-new-account.js --dry-run
 */

require('dotenv').config();
const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const DRY_RUN = args.includes('--dry-run');
const INCLUDE_INACTIVE = args.includes('--include-inactive');
const INCLUDE_INVALID = args.includes('--include-invalid');
const LIMIT = (() => {
  const i = args.indexOf('--limit');
  if (i === -1) return null;
  const n = parseInt(args[i + 1], 10);
  return Number.isFinite(n) && n > 0 ? n : null;
})();

const NEW_API_KEY = process.env.BEEHIIV_API_KEY_NEW;
const NEW_PUB_ID = process.env.BEEHIIV_PUBLICATION_ID_NEW;
const BACKUP_DIR = process.env.BEEHIIV_IMPORT_BACKUP_DIR;

if (!NEW_API_KEY || !NEW_PUB_ID) {
  console.error('Missing required env vars:');
  console.error('  BEEHIIV_API_KEY_NEW');
  console.error('  BEEHIIV_PUBLICATION_ID_NEW');
  console.error('\nExample:');
  console.error('  BEEHIIV_API_KEY_NEW=abc123 BEEHIIV_PUBLICATION_ID_NEW=pub_xxx \\');
  console.error('    node scripts/import-beehiiv-backup-to-new-account.js --dry-run');
  process.exit(1);
}

if (!NEW_PUB_ID.startsWith('pub_')) {
  console.error(`BEEHIIV_PUBLICATION_ID_NEW looks malformed: "${NEW_PUB_ID}" (expected to start with "pub_")`);
  process.exit(1);
}

function pickBackup() {
  if (BACKUP_DIR) {
    const p = path.resolve(BACKUP_DIR, 'subscribers-raw.json');
    if (!fs.existsSync(p)) throw new Error(`subscribers-raw.json not found under ${BACKUP_DIR}`);
    return p;
  }
  const root = path.join(__dirname, '..', 'backups', 'beehiiv');
  if (!fs.existsSync(root)) throw new Error(`No backups directory. Run backup-beehiiv-subscribers.js first.`);
  const dirs = fs.readdirSync(root)
    .filter((d) => fs.statSync(path.join(root, d)).isDirectory())
    .sort();
  if (!dirs.length) throw new Error(`No backups under ${root}.`);
  return path.join(root, dirs[dirs.length - 1], 'subscribers-raw.json');
}

function buildPayload(sub) {
  const customFields = (sub.custom_fields || [])
    .filter((cf) => cf && cf.name)
    .map((cf) => ({ name: cf.name, value: cf.value ?? '' }));

  // WARNING: do NOT add `double_opt_override: 'on'` here. Beehiiv's naming is
  // inverted — 'on' forces double opt-in to be REQUIRED for this subscriber,
  // even when the publication has DOI disabled. That's how we ended up with
  // 826 stuck-pending subs on 2026-04-21. With DOI off at the publication
  // level (the correct setting for migrations of already-confirmed lists),
  // omitting this field lets subs transition validating → active as expected.
  return {
    email: sub.email.toLowerCase().trim(),
    reactivate_existing: true,
    send_welcome_email: false,
    utm_source: sub.utm_source || 'beehiiv_migration',
    utm_medium: sub.utm_medium || '',
    utm_campaign: sub.utm_campaign || '',
    referring_site: sub.referring_site || '',
    custom_fields: customFields,
  };
}

async function createSubscriber(payload) {
  const url = `https://api.beehiiv.com/v2/publications/${NEW_PUB_ID}/subscriptions`;
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${NEW_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  const text = await res.text();
  return { ok: res.ok, status: res.status, body: text };
}

async function sleep(ms) { return new Promise((r) => setTimeout(r, ms)); }

async function main() {
  const jsonPath = pickBackup();
  console.log(`Backup: ${jsonPath}`);
  const all = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  console.log(`Loaded ${all.length} subscribers from backup`);

  // Filter by status
  const byStatus = all.reduce((acc, s) => {
    acc[s.status || 'unknown'] = (acc[s.status || 'unknown'] || 0) + 1;
    return acc;
  }, {});
  console.log('Status breakdown:', byStatus);

  let filtered = all.filter((s) => {
    if (!s.email) return false;
    if (s.status === 'active') return true;
    if (s.status === 'inactive' && INCLUDE_INACTIVE) return true;
    if (s.status === 'invalid' && INCLUDE_INVALID) return true;
    return false;
  });

  if (LIMIT) filtered = filtered.slice(0, LIMIT);

  console.log(`Will import: ${filtered.length} subscribers`);
  console.log(`  include-inactive: ${INCLUDE_INACTIVE}`);
  console.log(`  include-invalid:  ${INCLUDE_INVALID}`);
  console.log(`  dry-run:          ${DRY_RUN}`);
  console.log(`  target pub:       ${NEW_PUB_ID}\n`);

  if (DRY_RUN) {
    console.log('DRY RUN — showing first 5 payloads:');
    for (const s of filtered.slice(0, 5)) {
      console.log(JSON.stringify(buildPayload(s), null, 2));
    }
    console.log(`\nWould have POSTed ${filtered.length} subscribers. Re-run without --dry-run to execute.`);
    return;
  }

  // Log file for detailed per-row tracking
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
  const logDir = path.join(__dirname, '..', 'backups', 'beehiiv-import-logs');
  fs.mkdirSync(logDir, { recursive: true });
  const logPath = path.join(logDir, `import-${timestamp}.jsonl`);
  const logStream = fs.createWriteStream(logPath, { flags: 'a' });

  let succeeded = 0;
  let failed = 0;
  const failures = [];

  for (let i = 0; i < filtered.length; i++) {
    const sub = filtered[i];
    const payload = buildPayload(sub);
    try {
      const res = await createSubscriber(payload);
      logStream.write(JSON.stringify({
        i, email: sub.email, status: res.status, ok: res.ok,
        body: res.body.substring(0, 500),
      }) + '\n');

      if (res.ok) {
        succeeded += 1;
      } else {
        failed += 1;
        failures.push({ email: sub.email, status: res.status, body: res.body.substring(0, 200) });
      }
    } catch (e) {
      failed += 1;
      failures.push({ email: sub.email, error: e.message });
      logStream.write(JSON.stringify({ i, email: sub.email, error: e.message }) + '\n');
    }

    // Progress + rate limiting
    if ((i + 1) % 25 === 0 || i === filtered.length - 1) {
      process.stdout.write(`  ${i + 1}/${filtered.length}  ok=${succeeded} fail=${failed}\r`);
    }
    // Beehiiv: ~500 req/min — ~8/s. We do 5/s to leave headroom.
    await sleep(200);
  }

  logStream.end();

  console.log(`\n\n✅ Import finished`);
  console.log(`   Succeeded: ${succeeded}`);
  console.log(`   Failed:    ${failed}`);
  console.log(`   Log:       ${logPath}`);

  if (failures.length) {
    console.log('\n   First 10 failures:');
    failures.slice(0, 10).forEach((f) => {
      console.log(`     - ${f.email}  status=${f.status || 'err'}  ${(f.body || f.error || '').substring(0, 120)}`);
    });
  }
}

main().catch((e) => {
  console.error('\n❌', e.message);
  process.exit(1);
});
