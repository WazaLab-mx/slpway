#!/usr/bin/env node
// Translates a deep-dive post's English copy into es/de/ja with OpenAI and saves
// content.<locale>.json next to it. Each chunk must come back with the same shape
// and the same HTML tags/links as the English, or it is retried once.
//
// Usage: node scripts/blog-posts/translate.mjs <post-folder> [locale...]
import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';

const MODEL = 'gpt-5.6-terra';
const LANGUAGES = {
  es: 'Mexican Spanish. Address the reader as "tú". Natural and warm, not literal (e.g. "regaderas" for showers, "casas de campaña" for tents).',
  de: 'German. Address the reader as "du". Natural, not literal.',
  ja: 'Japanese. Natural travel-guide style (です/ます not required; plain style is fine). Write foreign place names in katakana and keep the original Spanish name in parentheses the first time it appears in each string when helpful.',
};

const [folder, ...requested] = process.argv.slice(2);
if (!folder) throw new Error('Usage: translate.mjs <post-folder> [locale...]');
const dir = path.resolve('scripts/blog-posts', folder);
const { default: en } = await import(pathToFileURL(path.join(dir, 'content.en.mjs')));
const locales = requested.length ? requested : Object.keys(LANGUAGES);

const tagsOf = (s) => (s.match(/<\/?[a-z][^>]*>/gi) || []).map((t) => t.replace(/\s(class|alt|title)="[^"]*"/g, '')).join('');

// Throws if `b` doesn't mirror `a`: same keys, same array lengths, same tags in every string.
function assertSameShape(a, b, at = '') {
  if (typeof a === 'string') {
    if (typeof b !== 'string' || !b.trim()) throw new Error(`${at}: missing string`);
    if (tagsOf(a) !== tagsOf(b)) throw new Error(`${at}: HTML tags changed`);
    return;
  }
  if (Array.isArray(a)) {
    if (!Array.isArray(b) || a.length !== b.length) throw new Error(`${at}: array length changed`);
    a.forEach((v, i) => assertSameShape(v, b[i], `${at}[${i}]`));
    return;
  }
  const keys = Object.keys(a);
  if (!b || typeof b !== 'object' || keys.join() !== Object.keys(b).join()) throw new Error(`${at}: keys changed`);
  keys.forEach((k) => assertSameShape(a[k], b[k], `${at}.${k}`));
}

// toc entries and table/fact keys are [id, text] pairs: ids must not be translated.
function assertIdsKept(a, b, at = '') {
  if (at.match(/\.(toc|related)$/)) a.forEach((row, i) => { if (row[0] !== b[i][0]) throw new Error(`${at}[${i}]: id/link changed`); });
  if (at.match(/\.fact$/)) a.forEach((row, i) => { if (row[0] !== b[i][0]) throw new Error(`${at}[${i}]: fact key changed`); });
  if (a && typeof a === 'object') Object.keys(a).forEach((k) => assertIdsKept(a[k], b[k], `${at}.${k}`));
}

async function translateChunk(chunk, locale) {
  const prompt = `You translate a travel guide for San Luis Way (sanluisway.com), an English-first guide to San Luis Potosí, Mexico.
Target language: ${LANGUAGES[locale]}

Translate every string value in the JSON below. Rules:
- Return ONLY the JSON, same keys, same array lengths, same order. Never translate keys.
- Arrays whose first element is a short id such as "media-luna", "drive", "cost", "/blog/..." or "/parque-tangamanga": keep that first element exactly.
- Keep every HTML tag and attribute exactly (<strong>, <em>, <a href="...">). Translate only the visible text.
- Keep proper nouns (park, town, trail, company names), prices (MXN), phone numbers, distances, elevations, dates and ratings exactly. Convert nothing.
- Do not add or remove facts.

JSON:
${JSON.stringify(chunk)}`;
  const res = await fetch('https://api.openai.com/v1/responses', {
    method: 'POST',
    headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ model: MODEL, input: prompt, max_output_tokens: 16000 }),
  });
  const json = await res.json();
  if (json.error) throw new Error(json.error.message);
  const text = json.output_text || (json.output || []).filter((o) => o.type === 'message')
    .map((o) => o.content.map((c) => c.text || '').join('')).join('');
  return JSON.parse(text.slice(text.indexOf('{'), text.lastIndexOf('}') + 1));
}

// One request per top-level key; big objects (places/trails) one request per entry.
function chunks(content) {
  const out = [];
  for (const [key, value] of Object.entries(content)) {
    const big = value && typeof value === 'object' && !Array.isArray(value) && JSON.stringify(value).length > 6000;
    if (big) Object.entries(value).forEach(([sub, v]) => out.push([[key, sub], { [sub]: v }]));
    else out.push([[key], { [key]: value }]);
  }
  return out;
}

for (const locale of locales) {
  const result = {};
  for (const [keys, chunk] of chunks(en)) {
    let translated;
    for (let attempt = 1; ; attempt++) {
      try {
        translated = await translateChunk(chunk, locale);
        assertSameShape(chunk, translated, keys.join('.'));
        assertIdsKept(chunk, translated, '');
        break;
      } catch (err) {
        if (attempt >= 2) throw new Error(`${locale} ${keys.join('.')}: ${err.message}`);
        console.log(`  retry ${locale} ${keys.join('.')}: ${err.message}`);
      }
    }
    const [top, sub] = keys;
    if (sub) result[top] = { ...result[top], [sub]: translated[sub] };
    else result[top] = translated[top];
    console.log(`  ${locale} ${keys.join('.')} ✓`);
  }
  assertSameShape(en, result, locale);
  fs.writeFileSync(path.join(dir, `content.${locale}.json`), JSON.stringify(result, null, 1) + '\n');
  console.log(`✓ ${folder} → content.${locale}.json`);
}
