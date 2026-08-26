#!/usr/bin/env node
// Fills per-locale copy for events (title_es/de/ja, description_es/de/ja).
// English is the base stored in title/description; rows that were captured in
// Spanish get their Spanish moved to *_es and an English translation written
// to the base columns. Idempotent: rows with every locale filled are skipped.
//
// Usage: node scripts/translate-events.mjs [--all] [--dry-run]
//   --all      include past events (default: only end_date >= today)
//   --dry-run  print the plan without writing
import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

const MODEL = 'gpt-5.6-terra';
const LOCALES = ['es', 'de', 'ja'];
const args = new Set(process.argv.slice(2));
const dryRun = args.has('--dry-run');

const { NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, OPENAI_API_KEY } = process.env;
if (!NEXT_PUBLIC_SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY || !OPENAI_API_KEY) {
  console.error('Missing NEXT_PUBLIC_SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY / OPENAI_API_KEY');
  process.exit(1);
}
const supabase = createClient(NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

const filled = (v) => typeof v === 'string' && v.trim().length > 0;
const needsWork = (e) => LOCALES.some((l) => !filled(e[`title_${l}`]) || !filled(e[`description_${l}`]));

async function translate(event) {
  const prompt = `You localize event listings for San Luis Way, a guide to San Luis Potosí, México.

SOURCE EVENT (may be in English or Spanish):
Title: ${event.title}
Description: ${event.description || '(none)'}

Return the same event in four languages. Rules:
- Keep proper nouns, venue names, artist/tour names, dates, prices and codes exactly as written.
- Titles stay short; descriptions keep every concrete detail from the source (do not add facts).
- If the source is already in a language, reuse it verbatim for that language.
- German: natural, not literal. Japanese: natural, katakana for foreign names.

Return ONLY JSON, no markdown:
{"en":{"title":"...","description":"..."},"es":{"title":"...","description":"..."},"de":{"title":"...","description":"..."},"ja":{"title":"...","description":"..."}}`;

  const res = await fetch('https://api.openai.com/v1/responses', {
    method: 'POST',
    headers: { Authorization: `Bearer ${OPENAI_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ model: MODEL, input: prompt, max_output_tokens: 3000 }),
  });
  const json = await res.json();
  if (json.error) throw new Error(json.error.message);
  const text = json.output_text || (json.output || []).filter((o) => o.type === 'message')
    .map((o) => o.content.map((c) => c.text || '').join('')).join('');
  const match = text.match(/\{[\s\S]*\}/);
  if (!match) throw new Error(`No JSON in model output: ${text.slice(0, 200)}`);
  const out = JSON.parse(match[0]);
  for (const l of ['en', ...LOCALES]) {
    if (!filled(out[l]?.title)) throw new Error(`Missing ${l} title for ${event.id}`);
  }
  return out;
}

async function main() {
  let query = supabase.from('events').select('*').order('start_date');
  if (!args.has('--all')) query = query.gte('end_date', new Date().toISOString());
  const { data: events, error } = await query;
  if (error) throw error;
  if (events.length && !('title_es' in events[0])) {
    console.error('events.title_es column missing — run supabase/migrations/20260826_add_event_translations.sql first.');
    process.exit(1);
  }

  const todo = events.filter(needsWork);
  console.log(`${events.length} events, ${todo.length} need translations${dryRun ? ' (dry run)' : ''}`);

  let done = 0;
  for (const event of todo) {
    try {
      const t = await translate(event);
      const update = {
        title: t.en.title,
        description: t.en.description || event.description,
        title_es: t.es.title, description_es: t.es.description,
        title_de: t.de.title, description_de: t.de.description,
        title_ja: t.ja.title, description_ja: t.ja.description,
      };
      const changedBase = update.title !== event.title;
      console.log(`${changedBase ? '↻' : '+'} ${event.id.slice(0, 8)} | ${event.title.slice(0, 50)}${changedBase ? ` → ${update.title.slice(0, 50)}` : ''}`);
      if (dryRun) continue;
      const { error: upErr } = await supabase.from('events').update(update).eq('id', event.id);
      if (upErr) throw upErr;
      done++;
    } catch (err) {
      console.error(`✗ ${event.id.slice(0, 8)} ${event.title.slice(0, 50)}: ${err.message}`);
    }
  }
  console.log(`Updated ${done}/${todo.length}. Note: events whose English title changed get a new slug; old URLs 301 via the id prefix.`);
}

main().catch((err) => { console.error(err); process.exit(1); });
