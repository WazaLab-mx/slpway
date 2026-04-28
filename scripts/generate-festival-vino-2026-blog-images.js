require('dotenv').config({ path: '.env' });
const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
const MODEL = 'gemini-3-pro-image-preview';
const SLUG = 'festival-internacional-vino-slp-2026';

const images = [
  {
    name: 'hero',
    prompt: 'Photorealistic cinematic 16:9 wide shot of an elegant outdoor evening wine festival in the courtyard of a colonial Mexican arts center. Long communal tables draped with white linen, hundreds of crystal wine glasses catching golden light, well-dressed adults in sophisticated cocktail attire mingling with wine bottles in their hands. Warm string lights overhead between historic stone arches and a dome roof in the background. Sommeliers pouring red wine into glasses at a tasting station. Soft purple-magenta dusk sky. Sophisticated, upscale, editorial travel photography. No visible text, no watermarks, no logos. 4K high detail.',
  },
  {
    name: 'tasting',
    prompt: 'Photorealistic close-up shot of a guided wine tasting masterclass. A professional sommelier in a black apron pouring deep ruby red wine from a bottle into a row of crystal Riedel wine glasses on a wooden tasting table. Five intent guests sitting at the table, tasting notes booklets and white napkins in front of them. Soft warm tungsten lighting, shallow depth of field with the wine being poured in sharp focus. Wine bottles labels blurred in the background. Mood is sophisticated, educational, intimate. Editorial wine magazine photography style. No readable labels.',
  },
  {
    name: 'pairing',
    prompt: 'Photorealistic overhead flat lay shot of an elegant gourmet wine pairing dinner table. Plated entrée of seared duck breast with cherry reduction next to a glass of Mexican red wine. Cheese board with aged manchego and Mexican goat cheeses, charcuterie, dried fruits, walnuts, fresh figs. Crystal wine glasses with red wine, candles, white linen tablecloth. Soft warm restaurant lighting, beautifully styled food photography. Sophisticated and inviting. No text, no logos.',
  },
  {
    name: 'venue',
    prompt: 'Photorealistic wide shot of the Centro de las Artes de San Luis Potosí (former penitentiary turned arts center) at golden hour. Historic 19th-century stone facade with arched windows and a central dome, palm trees in front, calzada de Guadalupe street with colonial architecture. Warm late afternoon golden sunlight on the limestone walls, dramatic long shadows. Travel architecture photography, editorial style, cinematic depth. Mexican colonial heritage building beauty. No people, no cars in foreground.',
  },
  {
    name: 'crowd',
    prompt: 'Photorealistic shot of a sophisticated wine festival crowd in the evening. Elegantly dressed adults holding stemmed wine glasses, smiling, conversing in small groups under string lights between historic stone arches. Mix of ages 30-60, well-dressed Mexican and international guests. A live string quartet visible playing in the background on a small stage. Warm bokeh lights, intimate atmosphere, festival ambience without being crowded. Editorial event photography, magazine quality. No visible text or logos.',
  },
];

async function generate(cfg) {
  console.log(`Generating: ${cfg.name}...`);
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
      const fn = `${SLUG}-${cfg.name}.png`;
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

(async () => {
  const urls = {};
  for (const img of images) {
    const r = await generate(img);
    if (!r) { console.error(`Failed ${img.name}, aborting`); process.exit(1); }
    const url = await upload(r);
    if (!url) { console.error(`Failed upload ${img.name}, aborting`); process.exit(1); }
    urls[img.name] = url;
  }
  fs.writeFileSync('scripts/festival-vino-2026-image-urls.json', JSON.stringify(urls, null, 2));
  console.log('\nDone. URLs saved.');
})().catch(e => { console.error('Fatal:', e); process.exit(1); });
