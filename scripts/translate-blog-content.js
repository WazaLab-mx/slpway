require('dotenv').config({ path: '.env' });
const { createClient } = require('@supabase/supabase-js');
const OpenAI = require('openai');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const TARGET_LOCALES = {
  de: {
    name: 'German',
    nativeName: 'Deutsch',
    instruction:
      'Translate to natural, fluent German for a German-speaking audience interested in San Luis Potosí, Mexico.',
  },
  ja: {
    name: 'Japanese',
    nativeName: '日本語',
    instruction:
      'Translate to natural, fluent Japanese (formal/polite だ・である is fine, but prefer です・ます style for tourist guides) for a Japanese audience interested in San Luis Potosí, Mexico.',
  },
};

const SYSTEM_PROMPT_TEMPLATE = (locale) => `You are a professional translator specializing in tourism and lifestyle content for San Luis Potosí, Mexico.

TARGET LANGUAGE: ${locale.name} (${locale.nativeName})

${locale.instruction}

CRITICAL RULES — VIOLATIONS WILL BREAK THE PAGE:
1. PRESERVE ALL HTML TAGS, ATTRIBUTES, CLASSES, AND IDS EXACTLY. Do not add, remove, or rename tags.
2. PRESERVE ALL URLS, image paths (/images/...), and internal links (href="/something") byte-for-byte.
3. DO NOT translate proper nouns, brand names, or place names: keep "Parque Tangamanga", "San Luis Potosí", "Cuatro Almas", "La Parroquia Potosina", "Hogaza", "Fork", "Refugio Tierra", "Oliva", "Croque La Vie", "Tres60", "Mesón de San Pascual", "Dos Amores", "Gorditas de Morales", "Calle Reforma", "Barrio de San Miguelito", "Av. Venustiano Carranza", "Centro Histórico", "Lomas", "Chapultepec", "Soledad", "INEGI", "CECURT", "BMW", "GM", "Volaris", "United", "American Airlines", "UNESCO", "Tangamanga I", "Tangamanga II", "Bicentenario", "Alameda Juan Sarabia", "Juan H. Sánchez", "Cri-Cri", "Zona Kids", "Dinoasis", "Splash", "Laberinto de las Ciencias", "Museo Laberinto", "Gogorrón", "Lourdes", "Ojo Caliente", "Huasteca Potosina", "Bosque de Chapultepec", "Plaza de Armas", "Plaza de los Fundadores", "Mercado República", "Hyatt Regency", "Hilton", "Plaza Sendero", "Altaria", "El Dorado".
4. Translate menu/dish names but parenthetically keep the Spanish (e.g., German: "Enchiladas Potosinas (eine traditionelle Spezialität)").
5. Keep currency formats: $200 MXN, $1,500 USD.
6. Preserve numbers, dates, hectares, kilometers, hours (e.g., "5:00 AM", "411 hectares").
7. Preserve phone numbers exactly (e.g., +52 444 481 1996).
8. Translate visible text only: heading text, paragraph text, list items, table cells, button labels, FAQ Q&A.
9. Output ONLY the translated HTML. No preamble, no explanation, no code fence.

If a phrase mixes Spanish and English (e.g., "the OG of brunch"), translate appropriately for the target language while keeping the place/dish name in original Spanish.`;

async function translateChunk(text, locale, chunkIndex, totalChunks) {
  const systemPrompt = SYSTEM_PROMPT_TEMPLATE(locale);
  const userPrompt =
    totalChunks > 1
      ? `[Chunk ${chunkIndex + 1} of ${totalChunks}] Translate the following HTML to ${locale.name}, following all rules. Output translated HTML only:\n\n${text}`
      : `Translate the following HTML to ${locale.name}, following all rules. Output translated HTML only:\n\n${text}`;

  const res = await openai.chat.completions.create({
    model: 'gpt-4o',
    temperature: 0.2,
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userPrompt },
    ],
  });
  let out = res.choices[0]?.message?.content || '';
  out = out.replace(/^```(?:html)?\s*/i, '').replace(/```\s*$/, '').trim();
  return out;
}

function splitHtmlIntoChunks(html, maxChunkChars = 12000) {
  if (html.length <= maxChunkChars) return [html];
  const sections = html.split(/(?=<section\s)/i);
  const chunks = [];
  let current = '';
  for (const sec of sections) {
    if ((current + sec).length > maxChunkChars && current.length > 0) {
      chunks.push(current);
      current = sec;
    } else {
      current += sec;
    }
  }
  if (current) chunks.push(current);
  return chunks;
}

async function translateContent(html, locale) {
  const chunks = splitHtmlIntoChunks(html);
  console.log(`  Splitting into ${chunks.length} chunk(s) (${html.length} chars total)`);
  const translated = [];
  for (let i = 0; i < chunks.length; i++) {
    console.log(`  Translating chunk ${i + 1}/${chunks.length} (${chunks[i].length} chars)...`);
    const t = await translateChunk(chunks[i], locale, i, chunks.length);
    translated.push(t);
  }
  return translated.join('');
}

async function translatePost(slug, localeKeys) {
  console.log(`\n=== Translating post: ${slug} ===`);
  const { data, error } = await supabase
    .from('blog_posts')
    .select('id, content, content_de, content_ja')
    .eq('slug', slug)
    .single();

  if (error || !data) {
    console.error(`Failed to load post ${slug}:`, error?.message);
    return;
  }

  const enContent = data.content;
  if (!enContent) {
    console.error(`No EN content for ${slug}`);
    return;
  }

  for (const key of localeKeys) {
    const locale = TARGET_LOCALES[key];
    if (!locale) continue;
    const existing = data[`content_${key}`];
    if (existing && existing !== enContent) {
      console.log(`  [${key}] Already has localized content (${existing.length} chars). Skipping. Pass --force to retranslate.`);
      continue;
    }

    console.log(`\n[${key}] Translating ${enContent.length} chars to ${locale.name}...`);
    try {
      const translated = await translateContent(enContent, locale);
      console.log(`[${key}] Translated: ${translated.length} chars`);

      const { error: updateError } = await supabase
        .from('blog_posts')
        .update({ [`content_${key}`]: translated })
        .eq('id', data.id);

      if (updateError) {
        console.error(`[${key}] Update failed:`, updateError.message);
      } else {
        console.log(`[${key}] DB updated successfully`);
      }
    } catch (err) {
      console.error(`[${key}] Translation failed:`, err.message);
    }
  }
}

async function main() {
  const args = process.argv.slice(2);
  const force = args.includes('--force');
  const slugs = args.filter((a) => !a.startsWith('--'));
  const localeFilter = args.find((a) => a.startsWith('--locales='))?.split('=')[1];
  const localeKeys = localeFilter ? localeFilter.split(',') : Object.keys(TARGET_LOCALES);

  if (slugs.length === 0) {
    console.log('Usage: node scripts/translate-blog-content.js <slug1> [<slug2>...] [--locales=de,ja] [--force]');
    process.exit(1);
  }

  if (force) {
    console.log('--force flag set: existing translations will be overwritten.');
    for (const slug of slugs) {
      const { data } = await supabase
        .from('blog_posts')
        .select('content')
        .eq('slug', slug)
        .single();
      if (data) {
        const updates = {};
        for (const k of localeKeys) updates[`content_${k}`] = data.content;
        await supabase.from('blog_posts').update(updates).eq('slug', slug);
      }
    }
  }

  for (const slug of slugs) {
    await translatePost(slug, localeKeys);
  }
}

main()
  .then(() => {
    console.log('\nDone.');
    process.exit(0);
  })
  .catch((err) => {
    console.error('Fatal:', err);
    process.exit(1);
  });
