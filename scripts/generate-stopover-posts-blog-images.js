require('dotenv').config({ path: '.env' });
const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
const MODEL = 'gemini-3-pro-image-preview';

const posts = [
  {
    slug: 'direct-flights-from-texas-to-san-luis-potosi',
    name: 'hero',
    prompt: 'Photorealistic cinematic 16:9 wide shot of an Aeromexico jet taxiing on the runway at San Luis Potosí International Airport (SLP) at golden hour. Modern narrow-body aircraft, soft warm light hitting the fuselage, mountains of central Mexico visible in the distance. Clear blue sky transitioning to orange/pink dusk. Cinematic, editorial travel magazine aesthetic, sense of arrival and discovery. No visible airline branding logos beyond generic, no readable text on the aircraft. 4K high detail.',
  },
  {
    slug: '10-underrated-mexican-cities-to-visit-summer-2026',
    name: 'hero',
    prompt: 'Photorealistic cinematic wide shot 16:9 of a stunning lesser-known Mexican colonial city plaza at golden hour. Pink and ochre baroque colonial architecture, cobblestone streets, a few elegantly dressed locals walking, palm trees and fountains, mountains in the distance. Warm late afternoon sunlight, dramatic shadows, vibrant Mexican colors (terracotta, golden yellow, deep blue sky). Editorial travel photography aesthetic — National Geographic / Condé Nast Traveler style. No visible signage or text. 4K high detail.',
  },
  {
    slug: 'mexico-city-to-guadalajara-road-trip-via-san-luis-potosi-2026',
    name: 'hero',
    prompt: 'Photorealistic cinematic 16:9 wide shot of a Mexican federal highway at sunset, winding through the high-altitude semi-desert landscape of central Mexico. Yucca plants and agave, distant mountains, the asphalt road curving toward the horizon. A modern SUV in the middle distance. Warm magic-hour lighting with long shadows, dust kicked up softly. Sense of an epic Mexican road trip. Travel photography style, editorial. No visible road signs with readable text, no logos. 4K high detail.',
  },
  {
    slug: 'mexico-2026-stopover-san-luis-potosi',
    name: 'hero',
    prompt: 'Photorealistic cinematic 16:9 wide shot of the historic Plaza de Armas in San Luis Potosí, Mexico at twilight. Iconic pink limestone Cathedral with twin towers illuminated against a deep blue sky, colonial buildings around the plaza, scattered groups of well-dressed locals strolling, lit-up gazebo (kiosko) in the center, warm street lamps glowing. Sense of a mystic colonial UNESCO heritage city at night. Editorial travel magazine aesthetic. No readable signage, no text. 4K high detail.',
  },
];

async function generate(cfg) {
  console.log(`Generating: ${cfg.slug}/${cfg.name}...`);
  const r = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${process.env.GOOGLE_API_KEY}`,
    { method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: [{ parts: [{ text: cfg.prompt }] }], generationConfig: { responseModalities: ['IMAGE'] } }) }
  );
  const data = await r.json();
  if (data.error) { console.error('  Error:', data.error.message); return null; }
  const parts = data.candidates?.[0]?.content?.parts || [];
  for (const p of parts) {
    if (p.inlineData) {
      const buf = Buffer.from(p.inlineData.data, 'base64');
      const fn = `${cfg.slug}-${cfg.name}.png`;
      const lp = path.join('public', 'images', 'blog', fn);
      fs.mkdirSync(path.dirname(lp), { recursive: true });
      fs.writeFileSync(lp, buf);
      console.log(`  Saved: ${lp} (${buf.length}b)`);
      return { buffer: buf, filename: fn };
    }
  }
  return null;
}

async function upload(r) {
  const sp = `posts/${r.filename}`;
  const { error } = await supabase.storage.from('blog-images').upload(sp, r.buffer, { contentType: 'image/png', upsert: true });
  if (error) { console.error('  Upload error:', error.message); return null; }
  const { data } = supabase.storage.from('blog-images').getPublicUrl(sp);
  console.log(`  URL: ${data.publicUrl}`);
  return data.publicUrl;
}

async function updatePost(slug, oldImageUrl, newImageUrl) {
  const { data } = await supabase.from('blog_posts').select('id,content,content_es,content_de,content_ja').eq('slug', slug).single();
  if (!data) { console.warn(`  Post not found: ${slug}`); return; }

  const fix = (s) => (s || '').replaceAll(oldImageUrl, newImageUrl);
  const updates = {
    image_url: newImageUrl,
    content: fix(data.content),
    content_es: fix(data.content_es),
    content_de: fix(data.content_de),
    content_ja: fix(data.content_ja),
  };
  const { error } = await supabase.from('blog_posts').update(updates).eq('id', data.id);
  if (error) { console.error('  DB update error:', error.message); return; }
  console.log(`  ✅ DB updated for ${slug}`);
}

(async () => {
  for (const post of posts) {
    const { data: row } = await supabase.from('blog_posts').select('image_url').eq('slug', post.slug).single();
    const oldUrl = row?.image_url;
    const r = await generate(post);
    if (!r) { console.error(`Failed ${post.slug}, continuing`); continue; }
    const url = await upload(r);
    if (!url) { console.error(`Failed upload ${post.slug}, continuing`); continue; }
    await updatePost(post.slug, oldUrl, url);
  }
  console.log('\nDone.');
})().catch(e => { console.error('Fatal:', e); process.exit(1); });
