require('dotenv').config({ path: '.env' });
const OpenAI = require('openai');
const sharp = require('sharp');
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const V = '20260713b';

// Each entry: match event by exact title, replace the SAME storage file with an
// accurate, thematically-correct image. No text/logos, no year/lineup specifics.
const fixes = [
  {
    title: 'Festival de la Huasteca 2026',
    file: 'events/festival-de-la-huasteca.jpg',
    prompt:
      'Photorealistic cinematic wide shot of a traditional Huasteca huapango folk music performance in Mexico. A trío huasteco of three Mexican musicians playing a violin, a small jarana huasteca guitar, and a large huapanguera guitar, wearing white traditional guayabera shirts and palm hats. In front, a couple dancing zapateado on a raised wooden platform (tarima); the woman in a colorful embroidered Huasteca dress with ribbons and flowers in her hair, the man in white with a red bandana. Warm festive daylight, lush green Huasteca Potosina countryside and a village plaza in the background, papel picado banners overhead. Vibrant, authentic Mexican regional folklore. No text, no logos, no watermarks.',
  },
  {
    title: 'Fiesta de la Virgen de la Asunción - Santa María del Río',
    file: 'events/fiesta-virgen-de-la-asuncion.jpg',
    prompt:
      'Photorealistic warm shot of a Mexican Catholic patronal religious procession honoring the Virgin of the Assumption in a small colonial town. Devotees carrying a flower-adorned platform with a statue of the Virgin Mary through cobblestone streets, women wearing colorful traditional silk rebozos over their shoulders, marigold and white flower garlands, a pink colonial church facade in the background, papel picado banners across the street. Golden late-afternoon light, reverent festive atmosphere. Authentic Mexican town fiesta. No text, no logos, no watermarks.',
  },
  {
    title: 'Fiesta Patronal de San Luis Rey de Francia',
    file: 'events/fiesta-patronal-san-luis-rey.jpg',
    prompt:
      'Photorealistic evening shot of a Mexican patronal saint festival in a historic city plaza. The illuminated baroque twin-tower stone cathedral facade at dusk, a religious procession with devotees carrying candles under a decorated canopy, marigold flowers and colorful papel picado banners strung across the square, families gathered. Warm glowing string lights, deep blue dusk sky. Festive yet reverent Catholic town fiesta atmosphere. No text, no logos, no watermarks.',
  },
  {
    title: 'Fiesta de San Miguel Arcángel',
    file: 'events/fiesta-san-miguel-arcangel.jpg',
    prompt:
      'Photorealistic shot of a Mexican neighborhood patronal fiesta honoring Saint Michael the Archangel at dusk. A traditional Mexican church facade decorated with flowers and colorful lights, a statue of the winged archangel Michael holding a sword adorned with white and gold flowers carried in procession, devotees holding candles, papel picado banners, food stalls with warm glowing lights along a historic barrio street. Festive Catholic celebration, warm evening ambience. No text, no logos, no watermarks.',
  },
  {
    title: 'Fiesta de San Francisco de Asís - Real de Catorce',
    file: 'events/fiesta-san-francisco-real-de-catorce.jpg',
    prompt:
      'Photorealistic cinematic shot of a Catholic pilgrimage in the historic desert mining town of Real de Catorce, Mexico. Pilgrims walking along a rugged cobblestone street lined with weathered stone and adobe colonial buildings, high in the arid Sierra mountains with cactus and desert scrub, heading toward a modest stone parish church. Some carry flowers and religious images of Saint Francis of Assisi. Dramatic high-altitude daylight, dusty warm earth tones, distant desert mountains. Authentic Mexican religious pilgrimage. No text, no logos, no watermarks.',
  },
];

async function run(f) {
  console.log(`\n=== ${f.title} ===`);
  const { data: rows, error: qErr } = await supabase
    .from('events')
    .select('id, title, image_url')
    .eq('title', f.title);
  if (qErr) throw qErr;
  if (!rows || rows.length === 0) {
    console.error('  ⚠️ No event matched this title, skipping');
    return;
  }
  console.log(`  Matched ${rows.length} row(s): ${rows.map((r) => r.id).join(', ')}`);

  console.log('  🎨 Generating image (gpt-image-1)...');
  const img = await openai.images.generate({
    model: 'gpt-image-1',
    prompt: f.prompt,
    size: '1536x1024',
    quality: 'high',
    n: 1,
  });
  const b64 = img.data[0].b64_json;
  const raw = Buffer.from(b64, 'base64');
  console.log(`  Raw: ${raw.length}b`);

  const optimized = await sharp(raw)
    .resize(1280, 853, { fit: 'cover' })
    .jpeg({ quality: 82 })
    .toBuffer();
  console.log(`  Optimized: ${optimized.length}b`);

  const { error: upErr } = await supabase.storage
    .from('blog-images')
    .upload(f.file, optimized, { contentType: 'image/jpeg', upsert: true });
  if (upErr) throw upErr;
  const { data: pub } = supabase.storage.from('blog-images').getPublicUrl(f.file);
  const newUrl = `${pub.publicUrl}?v=${V}`;
  console.log(`  Uploaded: ${newUrl}`);

  const { error: updErr } = await supabase
    .from('events')
    .update({ image_url: newUrl })
    .eq('title', f.title);
  if (updErr) throw updErr;
  console.log('  ✅ events.image_url updated');
}

(async () => {
  for (const f of fixes) {
    await run(f);
  }
  console.log('\nDone.');
})().catch((e) => {
  console.error('Fatal:', e);
  process.exit(1);
});
