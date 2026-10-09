// Builds the best-hikes deep dive from a locale's copy (same shape as content.en.mjs).
import {
  quickAnswer, toc, hook, p, h3, section, figure, factCard, callout, table, divider,
  proTips, takeaways, faq, related, sources, photoCredit, wrap,
} from '../../lib/deep-dive-html.mjs';
import { HERO, PHOTOS } from './photos.mjs';

const SOURCES = [
  ['CONANP — APFF Sierra de San Miguelito', 'https://descubreanp.conanp.gob.mx/es/conanp/ANP?suri=156'],
  ['CONANP — APFF Sierra de Álvarez', 'https://descubreanp.conanp.gob.mx/es/conanp/ANP?suri=151'],
  ['DOF — Sierra de San Miguelito management programme (June 2024)', 'https://www.dof.gob.mx/nota_detalle.php?codigo=5731798&fecha=28/06/2024'],
  ['Cecurt — Parque Tangamanga hours', 'https://cecurt.slp.gob.mx/faq/'],
  ['Wikiloc — La Amapola to La Ventana', 'https://www.wikiloc.com/hiking-trails/la-amapola-la-ventana-93550863'],
  ['Wikiloc — Cerro del Potosí', 'https://www.wikiloc.com/hiking-trails/cerro-del-potosi-sierra-de-san-miguelito-16332171'],
  ['AllTrails — San Luis Potosí trails', 'https://www.alltrails.com/mexico/san-luis-potosi/san-luis-potosi'],
  ['Travesías — Sendero del Capitán', 'https://www.travesiasdigital.com/destinos/mexico/sendero-del-capital-san-luis-potosi/'],
  ['El Sol de San Luis — six lost hikers by March 2026', 'https://oem.com.mx/elsoldesanluis/local/al-menos-6-senderistas-se-han-extraviado-en-parajes-potosinos-en-lo-que-va-del-ano-28797524'],
  ['El Sol de San Luis — dog poisonings in the Sierra de San Miguelito (2025)', 'https://oem.com.mx/elsoldesanluis/local/no-vayan-sigue-el-envenenamiento-de-perros-en-la-sierra-de-san-miguelito-25094734'],
  ['El Sol de San Luis — Tangamanga entry is free (April 2026)', 'https://oem.com.mx/elsoldesanluis/local/la-entrada-es-gratis-pero-no-todo-asi-se-cobra-en-los-parques-tangamanga-i-y-ii-29455965'],
  ['El Hormiguero — Joya Honda access and fees (2024)', 'https://elhormiguero.com.mx/2024/02/04/joya-honda-en-soledad-como-llegar-y-que-hacer-en-el-crater-natural-de-slp/'],
  ['El Universal San Luis — Joya Honda crater', 'https://sanluis.eluniversal.com.mx/mas-de-san-luis/que-ver-y-hacer-en-la-joya-honda-el-crater-volcanico-de-san-luis-potosi/'],
  ['CONANP — puma recorded in the Sierra de Álvarez', 'https://www.gob.mx/conanp/prensa/registra-conanp-presencia-de-puma-en-sierra-de-alvarez'],
  ['US Department of State — Mexico travel advisory', 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/mexico-travel-advisory.html'],
];

const GROUPS = [
  ['easy', 'easy', [['tangamanga', ['tangamangaLake', 'tangamangaTrees']], ['canada', []], ['piedrota', []], ['original', ['santaMaria']]]],
  ['moderate', 'moderate', [['caballos', ['alvarez']], ['joya', []], ['capitan', ['sanPedroStreet', 'sanPedroMine']], ['cerroGrande', []]]],
  ['hard', 'hard', [['ventana', ['arch']], ['potosi', []], ['fraile', []]]],
  ['worth-the-trip', 'trip', [['quemado', ['quemado']]]],
];

const fig = (t, key) => figure({ src: PHOTOS[key].src, alt: t.captions[key], caption: t.captions[key], credit: photoCredit(t.ui.photo, PHOTOS[key]) });

const trail = (t, key, number, figures) => {
  const tr = t.trails[key];
  const [first, ...rest] = tr.paragraphs.map(p);
  return [
    h3(`${number}. ${tr.title}`),
    first,
    ...figures.slice(0, 1).map((f) => fig(t, f)),
    ...rest,
    ...figures.slice(1).map((f) => fig(t, f)),
    factCard(tr.title, tr.fact.map(([k, v]) => [t.ui.factLabels[k], v])),
  ].join('\n');
};

export function render(t) {
  let number = 0;
  const groups = GROUPS.map(([id, key, trails]) => section(id, t.groups[key].title, t.groups[key].subtitle,
    trails.map(([k, figs]) => trail(t, k, ++number, figs)).join('\n')));

  return wrap(
    quickAnswer(t.ui.quickAnswerLabel, t.quickAnswer),
    toc(t.ui.tocTitle, t.toc, t.ui.readingTime),
    hook(t.hook),
    ...t.intro.map(p),
    section('how-we-chose', t.howWeChose.title, t.howWeChose.subtitle,
      t.howWeChose.paragraphs.map(p).join('\n') + callout('⚠️', '', t.howWeChose.callout)),
    section('at-a-glance', t.atAGlance.title, t.atAGlance.subtitle, table(t.ui.tableHeaders, t.atAGlance.rows)),
    ...groups,
    divider(),
    section('left-out', t.leftOut.title, t.leftOut.subtitle, table(t.ui.leftOutHeaders, t.leftOut.rows)),
    section('seasons', t.seasons.title, t.seasons.subtitle, t.seasons.paragraphs.map(p).join('\n') + fig(t, 'snow')),
    section('safety', t.safety.title, t.safety.subtitle, t.safety.paragraphs.map(p).join('\n')),
    section('rules', t.rules.title, t.rules.subtitle, t.rules.paragraphs.map(p).join('\n')),
    section('guides', t.guides.title, t.guides.subtitle, t.guides.paragraphs.map(p).join('\n')),
    `<section id="tips" class="mb-16 scroll-mt-24">${proTips(t.ui.proTipsTitle, t.proTips)}</section>`,
    takeaways(t.ui.takeawaysTitle, t.takeaways),
    `<section id="faq" class="scroll-mt-24">${faq(t.ui.faqTitle, t.faq)}</section>`,
    related(t.ui.relatedTitle, t.related),
    `<p class="text-sm text-gray-500 mt-8">${photoCredit(t.ui.coverPhoto, HERO)}</p>`,
    sources(t.ui.sourcesTitle, SOURCES),
  );
}

export const HERO_IMAGE = HERO.src;
