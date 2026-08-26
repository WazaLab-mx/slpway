#!/usr/bin/env node
// Imports curated events from a JSON file into Supabase `events`.
// Skips rows whose (title, start_date) already exist. Run
// scripts/translate-events.mjs afterwards to fill de/ja (and es when missing).
//
// Usage: node scripts/import-events.mjs <file.json> [--dry-run]
import 'dotenv/config';
import { readFileSync } from 'node:fs';
import { createClient } from '@supabase/supabase-js';

const [file, ...flags] = process.argv.slice(2);
const dryRun = flags.includes('--dry-run');
if (!file) { console.error('Usage: node scripts/import-events.mjs <file.json> [--dry-run]'); process.exit(1); }

const CATEGORIES = new Set(['sports', 'cultural', 'arts-culture', 'music', 'culinary', 'community-social', 'wellness', 'traditional', 'other']);
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

function validate(e, i) {
  const errors = [];
  if (!e.title?.trim()) errors.push('title');
  if (!e.description?.trim()) errors.push('description');
  if (!DATE_RE.test(e.start_date || '')) errors.push('start_date');
  if (!DATE_RE.test(e.end_date || '')) errors.push('end_date');
  if (e.start_date > e.end_date) errors.push('end_date < start_date');
  if (!e.location?.trim()) errors.push('location');
  if (!CATEGORIES.has(e.category)) errors.push(`category "${e.category}"`);
  if (errors.length) throw new Error(`row ${i} (${e.title || '?'}): invalid ${errors.join(', ')}`);
}

// Dates are stored as timestamps; anchor to local noon in Mexico City so the
// day never shifts when rendered with timeZone: 'America/Mexico_City'.
const toTs = (d, hhmm) => `${d}T${hhmm || '12:00'}:00-06:00`;

function toRow(e) {
  return {
    title: e.title.trim(),
    description: e.description.trim(),
    title_es: e.title_es?.trim() || null,
    description_es: e.description_es?.trim() || null,
    start_date: toTs(e.start_date, e.start_time),
    end_date: toTs(e.end_date, e.end_time || e.start_time),
    start_time: e.start_time || null,
    location: e.location.trim(),
    category: e.category,
    family_friendly: Boolean(e.family_friendly),
    featured: Boolean(e.featured),
    add_to_cultural_calendar: Boolean(e.add_to_cultural_calendar ?? e.featured),
    cost: e.cost || null,
    website: e.website || null,
    organizer: e.organizer || null,
    image_url: e.image_url || null,
  };
}

async function main() {
  const input = JSON.parse(readFileSync(file, 'utf8'));
  input.forEach(validate);

  const { data: existing, error } = await supabase.from('events').select('title, start_date');
  if (error) throw error;
  const seen = new Set(existing.map((e) => `${e.title.toLowerCase()}|${e.start_date.slice(0, 10)}`));

  let inserted = 0, skipped = 0;
  for (const e of input) {
    const key = `${e.title.toLowerCase()}|${e.start_date}`;
    if (seen.has(key)) { skipped++; console.log(`= skip (exists) ${e.start_date} ${e.title}`); continue; }
    const row = toRow(e);
    console.log(`+ ${e.start_date}${e.end_date !== e.start_date ? '→' + e.end_date : ''} | ${e.category}${row.family_friendly ? ' | family' : ''}${row.featured ? ' | featured' : ''} | ${e.title}`);
    if (dryRun) continue;
    const { error: insErr } = await supabase.from('events').insert(row);
    if (insErr) { console.error(`  ✗ ${insErr.message}`); continue; }
    seen.add(key);
    inserted++;
  }
  console.log(`${dryRun ? 'Would insert' : 'Inserted'} ${dryRun ? input.length - skipped : inserted}, skipped ${skipped}.`);
}

main().catch((err) => { console.error(err.message || err); process.exit(1); });
