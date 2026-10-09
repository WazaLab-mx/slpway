// Builds the family-camping deep dive from a locale's copy (same shape as content.en.mjs).
import {
  quickAnswer, toc, hook, p, section, figure, factCard, callout, table, divider,
  proTips, takeaways, faq, related, sources, photoCredit, wrap,
} from '../../lib/deep-dive-html.mjs';
import { HERO, PHOTOS } from './photos.mjs';

const SOURCES = [
  ['Plano Informativo — Media Luna 2026 prices and hours', 'https://planoinformativo.com/1128665/la-media-luna-se-prepara-para-recibir-a-visitantes-'],
  ['El Universal San Luis — Media Luna entry prices and rules (2025)', 'https://sanluis.eluniversal.com.mx/mas-de-san-luis/cuanto-cuesta-la-entrada-a-la-laguna-de-la-media-luna-en-san-luis-potosi/'],
  ['Milenio — Media Luna activities and facilities (2025)', 'https://www.milenio.com/estilo/media-luna-rio-verde-san-luis-potosi-ubicacion-actividades'],
  ['CONANP — Sierra de Álvarez Flora and Fauna Protection Area', 'https://descubreanp.conanp.gob.mx/es/conanp/ANP?suri=151'],
  ['El Universal San Luis — Valle de los Fantasmas', 'https://sanluis.eluniversal.com.mx/mas-de-san-luis/misterio-en-slp-el-valle-de-los-fantasmas-y-su-fama-como-paraje-sobrenatural/'],
  ['Cráter Encantado Ecoparque — official prices', 'https://www.craterencantado.com/'],
  ['El Universal San Luis — El Realejo, Guadalcázar (2026)', 'https://sanluis.eluniversal.com.mx/mas-de-san-luis/el-realejo-un-oasis-en-medio-del-desierto-del-altiplano-de-san-luis-potosi/'],
  ['Corazón de Xoconostle — guided camping', 'http://www.corazondexoconostle.com/'],
  ['La Brecha — SLP highways needing more policing (April 2026)', 'https://labrecha.me/especiales/2026/04/01/peligrosas-las-carreteras-de-san-luis-potosi/'],
  ['Infobae — Highway 57 at Matehuala (March 2026)', 'https://www.infobae.com/mexico/2026/03/25/carretera-57-de-matehuala-el-corredor-clave-para-el-control-del-narco-en-san-luis-potosi/'],
  ['US Department of State — Mexico travel advisory', 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/mexico-travel-advisory.html'],
];

const fig = (t, key) => figure({ src: PHOTOS[key].src, alt: t.captions[key], caption: t.captions[key], credit: photoCredit(t.ui.photo, PHOTOS[key]) });

const place = (t, id, key, { figures = [], extra = '' } = {}) => {
  const pl = t.places[key];
  const card = pl.fact ? factCard(pl.title.replace(/^\d+\.\s*/, ''), pl.fact.map(([k, v]) => [t.ui.factLabels[k], v])) : '';
  const contact = pl.contact ? callout('📞', '', pl.contact, 'blue') : '';
  return section(id, pl.title, pl.subtitle, [
    ...pl.paragraphs.map(p).slice(0, 1),
    ...figures.slice(0, 1).map((f) => fig(t, f)),
    ...pl.paragraphs.map(p).slice(1),
    ...figures.slice(1).map((f) => fig(t, f)),
    card, contact, extra,
  ].join('\n'));
};

export function render(t) {
  const pl = t.places;
  return wrap(
    quickAnswer(t.ui.quickAnswerLabel, t.quickAnswer),
    toc(t.ui.tocTitle, t.toc, t.ui.readingTime),
    hook(t.hook),
    ...t.intro.map(p),
    section('how-we-chose', t.howWeChose.title, t.howWeChose.subtitle,
      t.howWeChose.paragraphs.map(p).join('\n') + callout('🧭', '', t.howWeChose.callout, 'blue')),
    section('at-a-glance', t.atAGlance.title, t.atAGlance.subtitle, table(t.ui.tableHeaders, t.atAGlance.rows)),
    place(t, 'media-luna', 'mediaLuna', { figures: ['mediaLunaLagoon', 'mediaLunaPool'], extra: callout('⚠️', '', pl.mediaLuna.grillCallout) }),
    place(t, 'shamballa', 'shamballa'),
    place(t, 'crater-encantado', 'crater', { figures: ['armadillo'] }),
    place(t, 'colibri', 'colibri'),
    place(t, 'valle-fantasmas', 'valle', { figures: ['valle', 'valleRocks'] }),
    place(t, 'realejo', 'realejo', { figures: ['guadalcazar', 'guadalcazarWater'], extra: callout('🚗', '', pl.realejo.safetyCallout, 'red') }),
    place(t, 'la-mision', 'mision'),
    place(t, 'guided', 'guided'),
    place(t, 'puente-de-dios', 'puente'),
    divider(),
    section('left-out', t.leftOut.title, t.leftOut.subtitle, table(t.ui.leftOutHeaders, t.leftOut.rows) + p(t.leftOut.note)),
    section('seasons', t.seasons.title, t.seasons.subtitle, t.seasons.paragraphs.map(p).join('\n') + fig(t, 'cold')),
    section('safety', t.safety.title, t.safety.subtitle, t.safety.paragraphs.map(p).join('\n')),
    section('fire', t.fire.title, t.fire.subtitle, t.fire.paragraphs.map(p).join('\n')),
    `<section id="packing" class="mb-16 scroll-mt-24">${proTips(t.ui.proTipsTitle, t.proTips)}</section>`,
    takeaways(t.ui.takeawaysTitle, t.takeaways),
    `<section id="faq" class="scroll-mt-24">${faq(t.ui.faqTitle, t.faq)}</section>`,
    related(t.ui.relatedTitle, t.related),
    `<p class="text-sm text-gray-500 mt-8">${photoCredit(t.ui.coverPhoto, HERO)}</p>`,
    sources(t.ui.sourcesTitle, SOURCES),
  );
}

export const HERO_IMAGE = HERO.src;
