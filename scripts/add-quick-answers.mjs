import 'dotenv/config';
import OpenAI from 'openai';
import { createClient } from '@supabase/supabase-js';

const s = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Quick Answer block: the first thing AI assistants/answer engines extract.
// Anchored (#quick-answer) so blog/[slug] emits SpeakableSpecification for it.
const LOCALES = [
  { col: 'content', lang: 'English', label: 'Quick Answer', min: 220, max: 340 },
  { col: 'content_es', lang: 'Spanish', label: 'Respuesta rápida', min: 220, max: 340 },
  { col: 'content_de', lang: 'German', label: 'Kurzantwort', min: 220, max: 340 },
  { col: 'content_ja', lang: 'Japanese', label: '早わかり', min: 100, max: 180 },
];

const block = (label, text) =>
  `<div id="quick-answer" class="not-prose bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-5 mb-8">` +
  `<p class="text-xs font-bold text-blue-700 uppercase tracking-wider mb-2">${label}</p>` +
  `<p class="text-gray-800 text-base leading-relaxed m-0">${text}</p></div>\n`;

const stripTags = (h) => h.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

async function gen(loc, title, contentText) {
  const res = await openai.responses.create({
    model: 'gpt-5.4',
    instructions:
      `You write the "${loc.label}" box for an article — the 2-3 sentence direct answer to the reader's core question, in ${loc.lang}. ` +
      `${loc.min}-${loc.max} characters. Front-load the single most useful fact; include concrete numbers/names/dates FROM THE TEXT. ` +
      `STRICT: use ONLY facts present in the provided article text — never add outside knowledge, never invent. ` +
      `Plain text only (no HTML, no markdown). Return ONLY the answer text.`,
    input: `TITLE: ${title}\n\nARTICLE TEXT (extract facts only from here):\n${contentText.slice(0, 6000)}`,
    max_output_tokens: 400,
  });
  return (res.output_text || '').trim().replace(/^"|"$/g, '');
}

const ONLY = process.argv[2];
let q = s.from('blog_posts').select('id, slug, title, title_es, title_de, title_ja, content, content_es, content_de, content_ja').eq('status', 'published');
if (ONLY) q = q.eq('slug', ONLY);
const { data, error } = await q;
if (error) throw error;

let done = 0;
for (const post of data) {
  const update = {};
  for (const loc of LOCALES) {
    const html = post[loc.col];
    if (!html) continue;
    if (html.includes('id="quick-answer"')) continue; // idempotent
    const title = post[loc.col === 'content' ? 'title' : 'title' + loc.col.slice(7)] || post.title;
    try {
      const text = await gen(loc, title, stripTags(html));
      if (!text || text.length < 80) { console.log(`  ! ${post.slug} ${loc.col}: too short, skipped`); continue; }
      const esc = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      update[loc.col] = block(loc.label, esc) + html;
    } catch (e) { console.log(`  ! ${post.slug} ${loc.col}: ${e.message.slice(0, 50)}`); }
  }
  if (Object.keys(update).length) {
    const { error: upErr } = await s.from('blog_posts').update(update).eq('id', post.id);
    if (upErr) { console.log(`  ✗ ${post.slug}: ${upErr.message}`); continue; }
  }
  done++;
  console.log(`  ✓ [${done}/${data.length}] ${post.slug} (${Object.keys(update).length} locales)`);
}
console.log('Done.');
