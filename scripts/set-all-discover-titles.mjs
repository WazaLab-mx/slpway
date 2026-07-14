import 'dotenv/config';
import OpenAI from 'openai';
import { createClient } from '@supabase/supabase-js';

const s = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// EN + ES hooks crafted by hand (one emotion/one promise, ~40-60 chars, they
// deliver on the promise). DE + JA are adapted from these via the model.
const hooks = {
  'mexico-2026-stopover-san-luis-potosi': { en: "The Mexico 2026 stopover no one's booking yet", es: 'La escala del Mundial 2026 que nadie está reservando' },
  'direct-flights-from-texas-to-san-luis-potosi': { en: 'You can fly to San Luis Potosí direct from Texas', es: 'Sí hay vuelos directos de Texas a San Luis Potosí' },
  '10-underrated-mexican-cities-to-visit-summer-2026': { en: '10 Mexican cities to visit before everyone else', es: '10 ciudades de México que visitar antes que todos' },
  'real-de-catorce-guide-2026': { en: "Mexico's ghost town in the clouds: Real de Catorce", es: 'El pueblo fantasma en las nubes: Real de Catorce' },
  'huasteca-potosina-itinerary-2026': { en: 'Turquoise waterfalls: the Huasteca in 3, 5 or 7 days', es: 'Cascadas turquesa: la Huasteca en 3, 5 o 7 días' },
  'xilitla-las-pozas-guide-2026': { en: 'A surrealist castle in the Mexican jungle: Xilitla', es: 'Un castillo surrealista en la selva: Xilitla' },
  'san-luis-potosi-airport-guide': { en: 'Landing in San Luis Potosí? Read this first', es: '¿Aterrizas en San Luis Potosí? Lee esto antes' },
  'where-to-stay-san-luis-potosi-2026': { en: 'Where to actually stay in San Luis Potosí', es: 'Dónde conviene de verdad hospedarte en SLP' },
  'day-trips-from-san-luis-potosi-2026': { en: "7 day trips from SLP — and the one that isn't worth it", es: '7 escapadas de un día desde SLP (y la que no vale la pena)' },
  'mexico-city-to-guadalajara-road-trip-via-san-luis-potosi-2026': { en: 'The CDMX→Guadalajara road trip worth the detour', es: 'El road trip CDMX–Guadalajara que vale el desvío' },
  'san-luis-potosi-weather-best-time-to-visit': { en: "The altitude secret behind San Luis Potosí's weather", es: 'El secreto de altitud detrás del clima de SLP' },
  'things-to-do-san-luis-potosi-2026': { en: '50 things to do in San Luis Potosí, by a local', es: '50 cosas que hacer en San Luis Potosí, por un local' },
  'healthcare-san-luis-potosi-expats-2026': { en: 'What healthcare really costs expats in San Luis Potosí', es: 'Cuánto cuesta de verdad la salud para expats en SLP' },
  'navigating-mexican-immigration-system-slp': { en: "How to survive Mexico's immigration paperwork", es: 'Cómo sobrevivir a los trámites migratorios en México' },
  'ultimate-guide-living-san-luis-potosi-2026': { en: 'Everything I wish I knew before moving to SLP', es: 'Todo lo que ojalá supiera antes de mudarme a SLP' },
  'san-luis-potosi-vs-san-miguel-allende-expats-2026': { en: 'San Luis Potosí vs San Miguel: where should expats live?', es: 'San Luis vs San Miguel: ¿dónde vivir siendo expat?' },
  'is-san-luis-potosi-safe-2026': { en: 'Is San Luis Potosí safe? The honest, data-backed answer', es: '¿Es seguro San Luis Potosí? La respuesta honesta con datos' },
  'renting-in-san-luis-potosi-foreigner-2026': { en: "Renting in Mexico as a foreigner: the 'aval' problem", es: 'Rentar en México siendo extranjero: el problema del aval' },
  'cost-of-living-san-luis-potosi-2026': { en: 'What it really costs to live in San Luis Potosí', es: 'Cuánto cuesta realmente vivir en San Luis Potosí' },
  'san-luis-potosi-vs-queretaro-expats-2026': { en: "San Luis Potosí or Querétaro? An expat's honest take", es: '¿San Luis Potosí o Querétaro? La verdad para expats' },
  'foreign-direct-investment-slp-job-market-foreign-professionals': { en: 'The jobs bringing foreign professionals to SLP', es: 'Los empleos que atraen profesionistas extranjeros a SLP' },
  'top-5-cozy-cafes-winter-san-luis-potosi': { en: '5 cafés to warm up in this winter in San Luis Potosí', es: '5 cafés para entrar en calor este invierno en SLP' },
  'best-bars-nightlife-mezcal-san-luis-potosi-2026': { en: 'Where locals really drink in San Luis Potosí', es: 'Dónde toman de verdad los potosinos' },
  'best-brunch-spots-san-luis-potosi': { en: 'The 10 brunch spots locals actually pick in SLP', es: 'Los 10 lugares de brunch que eligen los locales' },
  'best-parks-for-kids-san-luis-potosi': { en: 'The best parks for kids in SLP, parent-tested', es: 'Los mejores parques para niños en SLP, probados' },
  'fin-de-semana-familiar-san-luis-potosi-parques-go-karts-ninos': { en: 'A weekend in San Luis Potosí the kids will love', es: 'Un fin de semana en SLP que los niños amarán' },
  'leonora-carrington-san-luis-potosi-museo-centro-artes-surrealism': { en: 'How surrealism found a home in San Luis Potosí', es: 'Cómo el surrealismo encontró casa en San Luis Potosí' },
  'potosino-art-history-artists-sculpture-painting-san-luis-potosi': { en: '3,000 years of art hidden in San Luis Potosí', es: '3,000 años de arte escondidos en San Luis Potosí' },
  'san-luis-potosi-mining-history-baroque-architecture-cultural-legacy': { en: "The silver that built San Luis Potosí's baroque city", es: 'La plata que construyó el San Luis Potosí barroco' },
  'corazon-de-xoconostle': { en: 'Rappel, hike, explore: adventure beyond the city', es: 'Rappel, senderismo y aventura más allá de la ciudad' },
  'checklist-mudanza-15-pasos-relocacion-slp': { en: 'Moving to San Luis Potosí? The 15-step checklist', es: '¿Te mudas a San Luis Potosí? El checklist de 15 pasos' },
  'la-gran-via': { en: "The Spanish restaurant that's fed SLP for decades", es: 'El restaurante español que alimenta a SLP desde hace décadas' },
  'san-luis-rey-tranvia': { en: 'See historic San Luis Potosí from the old tram', es: 'Recorre el San Luis histórico en el tranvía' },
  'ultimate-guide-living-san-luis-potosi-expat': { en: "The expat's guide to living in San Luis Potosí", es: 'La guía del expat para vivir en San Luis Potosí' },
};

async function adapt(en, es) {
  const res = await openai.responses.create({
    model: 'gpt-5.4',
    instructions:
      'You adapt short Google Discover "hook" headlines into German and Japanese. Keep the same emotion/curiosity and promise, ~40–60 chars, natural for a native reader (adapt, do not translate literally). Keep place names (San Luis Potosí, SLP, Querétaro, Huasteca, Real de Catorce, Xilitla). Return ONLY JSON: {"de":"...","ja":"..."}.',
    input: `EN: ${en}\nES: ${es}`,
    max_output_tokens: 300,
  });
  let t = (res.output_text || '').trim().replace(/^```json\s*/i, '').replace(/```$/i, '').trim();
  const m = t.match(/\{[\s\S]*\}/);
  return JSON.parse(m ? m[0] : t);
}

let done = 0;
for (const [slug, h] of Object.entries(hooks)) {
  const { de, ja } = await adapt(h.en, h.es);
  const { error, count } = await s
    .from('blog_posts')
    .update({ discover_title: h.en, discover_title_es: h.es, discover_title_de: de, discover_title_ja: ja }, { count: 'exact' })
    .eq('slug', slug);
  if (error) throw error;
  done++;
  console.log(`${count ? '✓' : '⚠️ NO MATCH'} [${done}/${Object.keys(hooks).length}] ${slug}\n     de: ${de}\n     ja: ${ja}`);
}
console.log('\nDone.');
