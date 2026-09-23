/**
 * Finds home-service providers in San Luis Potosí, checks them against a
 * second web source, has Jev judge their reviews, ranks them, and upserts
 * into public.home_service_providers.
 *
 *   node scripts/home-services/discover.js                  # all categories
 *   node scripts/home-services/discover.js --category=plumbing,painting --dry-run
 *
 * Re-running refreshes ratings (Google content must stay fresh) and keeps
 * the manual slw_verified_at badge untouched.
 */
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');
const { CATEGORIES, CATEGORY_KEYS } = require('../../src/lib/home-services-categories');
const { searchCategory } = require('./lib/places');
const { findPresence } = require('./lib/web-presence');
const { evaluateProvider } = require('./lib/jev-evaluate');
const { isAutoVerified, rankScore, isListable, EMERGENCY_THRESHOLD } = require('./lib/ranking');

const CONCURRENCY = 4;
const arg = name => process.argv.find(a => a.startsWith(`--${name}`))?.split('=')[1] ?? process.argv.includes(`--${name}`);

async function mapLimit(items, limit, fn) {
  const out = new Array(items.length);
  let next = 0;
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (next < items.length) {
      const i = next++;
      out[i] = await fn(items[i]).catch(err => ({ error: err.message, item: items[i] }));
    }
  }));
  return out;
}

async function assess(candidate, category, env, slwVerified) {
  const [presence, jev] = await Promise.all([
    findPresence(env.FIRECRAWL_API_KEY, candidate).catch(err => {
      console.warn(`  web check failed for ${candidate.name}: ${err.message}`);
      return { sources: [], phoneConfirmed: false, socialUrl: null };
    }),
    evaluateProvider(env.TYPESAFE_API_KEY, candidate, category),
  ]);
  const autoVerified = isAutoVerified(candidate, presence);
  return {
    google_place_id: candidate.googlePlaceId,
    name: candidate.name,
    category,
    phone: candidate.phone,
    website: candidate.website,
    social_url: presence.socialUrl,
    address: candidate.address,
    maps_url: candidate.mapsUrl,
    business_status: candidate.businessStatus,
    offers_emergency: jev.emergency >= EMERGENCY_THRESHOLD,
    google_rating: candidate.rating,
    google_review_count: candidate.reviewCount,
    rating_checked_at: new Date().toISOString(),
    auto_verified: autoVerified,
    verification: { operating: candidate.businessStatus === 'OPERATIONAL', phone: Boolean(candidate.phone), ...presence },
    jev_scores: jev,
    jev_evaluated_at: new Date().toISOString(),
    rank_score: rankScore({ rating: candidate.rating, reviewCount: candidate.reviewCount, jev, autoVerified, slwVerified }),
    active: isListable(candidate, jev),
    updated_at: new Date().toISOString(),
  };
}

async function main() {
  const env = process.env;
  for (const key of ['GOOGLE_PLACES_API_KEY', 'TYPESAFE_API_KEY', 'FIRECRAWL_API_KEY', 'NEXT_PUBLIC_SUPABASE_URL', 'SUPABASE_SERVICE_ROLE_KEY']) {
    if (!env[key]) throw new Error(`Missing ${key}`);
  }
  const only = arg('category') ? String(arg('category')).split(',') : null;
  const unknown = (only || []).filter(c => !CATEGORIES[c]);
  if (unknown.length) throw new Error(`Unknown category "${unknown}". Use: ${CATEGORY_KEYS.join(', ')}`);
  const dryRun = Boolean(arg('dry-run'));
  const supabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

  const { data: existing, error } = await supabase.from('home_service_providers').select('*');
  if (error) throw new Error(`Read providers: ${error.message}`);
  const backupDir = path.join('backups', `home-services-${new Date().toISOString().slice(0, 10)}`);
  fs.mkdirSync(backupDir, { recursive: true });
  fs.writeFileSync(path.join(backupDir, `before-${Date.now()}.json`), JSON.stringify(existing, null, 2));
  const slwVerified = new Set(existing.filter(r => r.slw_verified_at).map(r => r.google_place_id));

  const seen = new Set();
  const rows = [];
  for (const category of only || CATEGORY_KEYS) {
    const candidates = [];
    for (const query of CATEGORIES[category].queries) {
      for (const c of await searchCategory(env.GOOGLE_PLACES_API_KEY, query)) {
        if (!seen.has(c.googlePlaceId)) candidates.push(c);
        seen.add(c.googlePlaceId);
      }
    }
    console.log(`${category}: ${candidates.length} candidates`);
    const results = await mapLimit(candidates, CONCURRENCY, c => assess(c, category, env, slwVerified.has(c.googlePlaceId)));
    for (const r of results) {
      if (r.error) console.error(`  skipped ${r.item.name}: ${r.error}`);
      else rows.push(r);
    }
  }

  fs.writeFileSync(path.join(backupDir, `assessed-${Date.now()}.json`), JSON.stringify(rows, null, 2));
  console.log(`Assessed ${rows.length}; listable ${rows.filter(r => r.active).length}; auto-verified ${rows.filter(r => r.auto_verified).length}`);
  if (dryRun) return console.log(`Dry run — nothing written. See ${backupDir}`);

  const { error: upsertError } = await supabase.from('home_service_providers').upsert(rows, { onConflict: 'google_place_id' });
  if (upsertError) throw new Error(`Upsert providers: ${upsertError.message}`);
  const { count } = await supabase.from('home_service_providers').select('id', { count: 'exact', head: true }).eq('active', true);
  console.log(`Upserted ${rows.length}. Active providers in DB: ${count}`);
}

main().catch(err => {
  console.error(err.message);
  process.exit(1);
});
