// Builds the mining-history deep dive from a locale's copy (same shape as content.en.mjs).
import {
  quickAnswer, toc, hook, p, h3, section, figure, factCard, callout, citation, table, divider,
  takeaways, faq, sources, wrap,
} from '../../lib/deep-dive-html.mjs';

const IMG = 'https://omxporaecrqsqhzjzvnx.supabase.co/storage/v1/object/public/blog-images';
const PHOTOS = {
  teatro: `${IMG}/teatro-paz-plaza-carmen-slp.jpg`,
  street: `${IMG}/villa-imperial-potosi.jpg`,
  cathedral: `${IMG}/catedral-slp-barroco.jpeg`,
  carmen: `${IMG}/templo-del-carmen-slp.jpg`,
};

const SOURCES = [
  ['UNESCO — Camino Real de Tierra Adentro (2010)', 'https://whc.unesco.org/en/list/1351'],
  ['UNAM — Lecturas históricas de México: founding of San Luis Potosí', 'https://historicas.unam.mx/publicaciones/publicadigital/libros/lecturas/T5/LHMT5_036.pdf'],
  ['INAH — Centro Histórico de San Luis Potosí', 'https://lugares.inah.gob.mx/en/node/4813'],
  ['INAH — Boletín 126 (2024): Zona de Monumentos Históricos', 'https://inah.gob.mx/images/boletines/2024/126/Boletin%20126.pdf'],
  ['Redalyc — Cerro de San Pedro study (distance to the city)', 'https://www.redalyc.org/pdf/102/10214692007.pdf'],
  ['Wikipedia — Cerro de San Pedro', 'https://en.wikipedia.org/wiki/Cerro_de_San_Pedro'],
  ['Herrera Canales — Potosino mining bonanzas', 'https://ihtc.orex.es/1621.pdf'],
  ['Wikipedia — Coat of arms of San Luis Potosí (city title, 1656)', 'https://en.wikipedia.org/wiki/Coat_of_arms_of_San_Luis_Potos%C3%AD'],
  ['Wikipedia — San Luis Potosí Cathedral', 'https://en.wikipedia.org/wiki/San_Luis_Potos%C3%AD_Cathedral'],
  ['INAH — Capilla de Aranzazú', 'https://lugares.inah.gob.mx/en/pagina-de-elemento/2387'],
  ['Lonely Planet — Templo del Carmen', 'https://www.lonelyplanet.com/pois/496696'],
  ['México Desconocido — Real de Catorce', 'https://www.mexicodesconocido.com.mx/real-de-catorce-pueblos-magicos-de-mexico.html'],
];

const fig = (t, key) => figure({ src: PHOTOS[key], alt: t.captions[key], caption: t.captions[key] });
const sub = (block) => [h3(block.title), ...block.paragraphs.map(p)].join('\n');

export function render(t) {
  const { origin, cerro, baroque, mining, legacy, visit } = t;
  return wrap(
    quickAnswer(t.ui.quickAnswerLabel, t.quickAnswer),
    toc(t.ui.tocTitle, t.toc, t.ui.readingTime),
    hook(t.hook),
    ...t.intro.map(p),
    section('origin', origin.title, origin.subtitle, [
      p(origin.legend), fig(t, 'teatro'), p(origin.documented),
      citation(origin.name.title, origin.name.text, origin.name.source, SOURCES[1][1]),
      p(origin.firstMine),
    ].join('\n')),
    section('cerro-san-pedro', cerro.title, cerro.subtitle, [
      callout('📍', cerro.distance.title, cerro.distance.text, 'green'),
      sub(cerro.water), fig(t, 'street'),
      h3(cerro.timelineTitle), table(t.ui.timelineHeaders, cerro.timeline),
    ].join('\n')),
    divider(),
    section('baroque', baroque.title, baroque.subtitle, [
      p(baroque.intro), fig(t, 'cathedral'), sub(baroque.cathedral), sub(baroque.carmen), fig(t, 'carmen'),
      table(t.ui.templeHeaders, baroque.temples),
      callout('💡', baroque.tip.title, baroque.tip.text),
    ].join('\n')),
    section('mining-towns', mining.title, mining.subtitle, [
      p(mining.intro),
      factCard(mining.sanPedro.title, mining.sanPedro.facts), p(mining.sanPedro.text),
      factCard(mining.catorce.title, mining.catorce.facts), p(mining.catorce.text),
      p(mining.shaped),
    ].join('\n')),
    section('legacy', legacy.title, legacy.subtitle, legacy.items.map(sub).join('\n')),
    section('visit', visit.title, visit.subtitle, visit.tips.map(([title, text]) => callout('🧭', title, text, 'blue')).join('\n')),
    takeaways(t.ui.takeawaysTitle, t.takeaways),
    `<section id="faq" class="scroll-mt-24">${faq(t.ui.faqTitle, t.faq)}</section>`,
    `<p class="text-sm text-gray-500 mt-8 italic">${t.ui.correctionNote}</p>`,
    sources(t.ui.sourcesTitle, SOURCES),
  );
}

export const HERO_IMAGE = `${IMG}/posts/san-luis-potosi-mining-history-baroque-architecture-cultural-legacy-hero.jpg`;
