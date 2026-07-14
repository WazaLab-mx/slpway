import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

const s = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

// Discover hook headlines: one emotion / one promise, curiosity, ~40-60 chars,
// current-edition (2026) confirmed facts only, and they DELIVER on the promise.
const hooks = {
  'fenapo-2026-con-ninos-guia-familias': {
    en: '60 free rides: how to do FENAPO 2026 with the kids',
    es: '60 juegos gratis: cómo llevar a los niños a la FENAPO 2026',
    de: '60 Fahrgeschäfte gratis: FENAPO 2026 mit Kindern erleben',
    ja: '遊具60種が無料：子ども連れFENAPO 2026の楽しみ方',
  },
  'fenapo-2026-boletos-precios-como-llegar': {
    en: 'FENAPO 2026 is free — the one ticket you actually need',
    es: 'La FENAPO 2026 es gratis — el único boleto que sí necesitas',
    de: 'Die FENAPO 2026 ist gratis — das einzige Ticket, das zählt',
    ja: 'FENAPO 2026は入場無料——本当に要るチケットは1つだけ',
  },
  'fenapo-2026-artistas-cartel-completo': {
    en: 'Katy Perry, Mötley Crüe & Bizarrap — free at FENAPO 2026',
    es: 'Katy Perry, Mötley Crüe y Bizarrap — gratis en la FENAPO 2026',
    de: 'Katy Perry, Mötley Crüe & Bizarrap — gratis auf der FENAPO 2026',
    ja: 'ケイティ・ペリーもモトリー・クルーも無料：FENAPO 2026',
  },
  'festival-internacional-vino-slp-2026': {
    en: '500 wines in one weekend: SLP’s Wine Festival returns',
    es: '500 vinos en un fin de semana: vuelve el Festival del Vino',
    de: '500 Weine an einem Wochenende: das Weinfest von SLP',
    ja: '週末に500種のワイン：SLP国際ワイン祭が今年も',
  },
  'fenapo-2026-guia-preparacion': {
    en: 'Book hotels now, or miss FENAPO 2026 — the timeline',
    es: 'Reserva hotel ya o te quedas fuera de la FENAPO 2026',
    de: 'Jetzt Hotel buchen — sonst verpasst du die FENAPO 2026',
    ja: '今すぐ宿を予約——FENAPO 2026を逃さない準備術',
  },
  'semana-santa-san-luis-potosi-2026-guia-completa': {
    en: '100+ things to do in San Luis Potosí this Holy Week',
    es: 'Más de 100 cosas que hacer en Semana Santa en SLP',
    de: 'Über 100 Erlebnisse in der Karwoche in San Luis Potosí',
    ja: '聖週間のサン・ルイス・ポトシ：100以上の催し',
  },
  'procesion-del-silencio-2026-san-luis-potosi': {
    en: 'The night San Luis Potosí falls silent: the 2026 procession',
    es: 'La noche que San Luis Potosí enmudece: la Procesión 2026',
    de: 'Die Nacht, in der San Luis Potosí verstummt: Prozession 2026',
    ja: '街が沈黙する夜——2026年「沈黙の行列」',
  },
};

for (const [slug, h] of Object.entries(hooks)) {
  const { error, count } = await s
    .from('blog_posts')
    .update(
      { discover_title: h.en, discover_title_es: h.es, discover_title_de: h.de, discover_title_ja: h.ja },
      { count: 'exact' },
    )
    .eq('slug', slug);
  if (error) throw error;
  console.log(`${count ? '✓' : '⚠️ no match'} ${slug} → "${h.en}"`);
}
console.log('Done.');
