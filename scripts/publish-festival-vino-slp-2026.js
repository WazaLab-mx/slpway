require('dotenv').config({ path: '.env' });
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
const IMG = JSON.parse(fs.readFileSync(path.join(__dirname, 'festival-vino-2026-image-urls.json'), 'utf-8'));
const SLUG = 'festival-internacional-vino-slp-2026';
const PUBLISHED = '2026-04-28';

const buildContentES = require('./festival-vino-2026-content-es');
const buildContentEN = require('./festival-vino-2026-content-en');
const buildContentDE = require('./festival-vino-2026-content-de');
const buildContentJA = require('./festival-vino-2026-content-ja');

const jsonLd = `<script type="application/ld+json">${JSON.stringify({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Event',
      '@id': `https://www.sanluisway.com/blog/${SLUG}#event`,
      name: '14° Festival Internacional del Vino San Luis Potosí',
      startDate: '2026-05-29T15:00:00-06:00',
      endDate: '2026-05-30T21:00:00-06:00',
      location: {
        '@type': 'Place',
        name: 'Centro de las Artes de San Luis Potosí',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Calzada de Guadalupe 705',
          addressLocality: 'San Luis Potosí',
          addressRegion: 'SLP',
          addressCountry: 'MX',
        },
      },
      organizer: { '@type': 'Organization', name: 'Festival Internacional del Vino', url: 'https://festivaldelvino.mx/' },
      offers: [
        { '@type': 'Offer', name: 'Silver', price: '1199', priceCurrency: 'MXN', availability: 'https://schema.org/InStock', url: 'https://festivaldelvino.mx/' },
        { '@type': 'Offer', name: 'VIP', price: '1799', priceCurrency: 'MXN', availability: 'https://schema.org/InStock', url: 'https://festivaldelvino.mx/' },
        { '@type': 'Offer', name: 'Cena Maridaje', price: '1349', priceCurrency: 'MXN', availability: 'https://schema.org/InStock', url: 'https://festivaldelvino.mx/' },
      ],
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      url: 'https://festivaldelvino.mx/',
      image: IMG.hero,
    },
    {
      '@type': 'FAQPage',
      '@id': `https://www.sanluisway.com/blog/${SLUG}#faq`,
      mainEntity: [
        { '@type': 'Question', name: '¿Cuándo es el Festival Internacional del Vino SLP 2026?', acceptedAnswer: { '@type': 'Answer', text: 'Viernes 29 y sábado 30 de mayo de 2026 en el Centro de las Artes de San Luis Potosí (Calzada de Guadalupe 705). Viernes de 15:00 a 23:00, sábado de 13:00 a 21:00.' } },
        { '@type': 'Question', name: '¿Cuánto cuestan los boletos?', acceptedAnswer: { '@type': 'Answer', text: 'Silver desde $1,199 MXN, VIP desde $1,799 MXN. Las cenas maridaje son un add-on de $1,349 MXN. Compra exclusiva en festivaldelvino.mx.' } },
        { '@type': 'Question', name: '¿Cuántas bodegas y vinos participan?', acceptedAnswer: { '@type': 'Answer', text: '159 bodegas con más de 500 etiquetas de vino de México, Argentina, Francia, Italia, España, Estados Unidos y Portugal.' } },
        { '@type': 'Question', name: '¿Qué incluye el acceso Silver?', acceptedAnswer: { '@type': 'Answer', text: 'Acceso al recinto, copa de cristal, degustación libre de 500+ vinos, cervezas y mezcales, música en vivo de 15 grupos y catas básicas sujetas a cupo.' } },
        { '@type': 'Question', name: '¿Vale la pena el VIP?', acceptedAnswer: { '@type': 'Answer', text: 'Sí si te interesan las catas premium con cupo prioritario, una zona menos saturada y bocadillos de cortesía. La zona VIP del viernes es patrocinada por BMW, la del sábado por Heineken.' } },
        { '@type': 'Question', name: '¿Hay accesibilidad para personas con discapacidad?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. La 14ª edición ofrece chalecos sensoriales, material en Braille y rampas para sillas de ruedas. Coordina por WhatsApp +52 444 654 4121 con 48 horas de anticipación.' } },
        { '@type': 'Question', name: '¿Hay opción para familias con niños?', acceptedAnswer: { '@type': 'Answer', text: 'El festival es 18+, pero ofrece ludoteca con costo adicional para que adultos disfruten el evento. Coordina por WhatsApp del festival.' } },
        { '@type': 'Question', name: '¿Cómo llegar al recinto desde el Centro Histórico?', acceptedAnswer: { '@type': 'Answer', text: 'A 1.5 km del Centro Histórico — 20 minutos caminando, o $80 MXN en Uber/DiDi. Ambas apps funcionan toda la noche en SLP.' } },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.sanluisway.com' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.sanluisway.com/blog' },
        { '@type': 'ListItem', position: 3, name: 'Festival Internacional del Vino SLP 2026', item: `https://www.sanluisway.com/blog/${SLUG}` },
      ],
    },
    {
      '@type': 'Article',
      '@id': `https://www.sanluisway.com/blog/${SLUG}#article`,
      headline: 'Festival Internacional del Vino SLP 2026: Guía Completa de la 14ª Edición',
      datePublished: PUBLISHED,
      dateModified: PUBLISHED,
      author: { '@type': 'Organization', name: 'San Luis Way', url: 'https://www.sanluisway.com' },
      publisher: { '@type': 'Organization', name: 'San Luis Way', url: 'https://www.sanluisway.com' },
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.speakable', '#quick-summary', '#faq-heading'] },
      image: IMG.hero,
      citation: [
        { '@type': 'CreativeWork', name: 'Festival Internacional del Vino — sitio oficial', url: 'https://festivaldelvino.mx/' },
        { '@type': 'CreativeWork', name: 'Visit Mexico — Festival del Vino 2026', url: 'https://visitmexico.com/actividad/640/festival-del-vino-2026' },
        { '@type': 'CreativeWork', name: 'Plano Informativo — 14ª edición y derrama económica', url: 'https://planoinformativo.com/1139566/14-festival-internacional-del-vino-san-luis-potosi-2026-500-vinos-del-mundo-y-una-gran-derrama-economica-para-el-estado' },
        { '@type': 'CreativeWork', name: 'LíderLife — Precios de boletos y actividades', url: 'https://liderlife.liderempresarial.com/festival-internacional-del-vino-2026-en-slp-fechas-actividades-y-precios-de-boletos/' },
        { '@type': 'CreativeWork', name: 'Secretaría de Turismo SLP', url: 'https://turismo.slp.gob.mx/noticias/2025/4/22/todo-listo-para-el-13-festival-internacional-del-vino/' },
      ],
    },
  ],
}, null, 0)}</script>
`;

const post = {
  slug: SLUG,
  status: 'published',
  published_at: new Date(PUBLISHED).toISOString(),
  image_url: IMG.hero,
  category: 'Events',
  tags: [
    'festival-del-vino', 'wine-festival', 'festival-2026', 'san-luis-potosi',
    'wine', 'vino', 'centro-de-las-artes', 'gourmet', 'gastronomy', 'tourism',
    'events-may-2026', 'malbec', 'mexican-wine', 'tastings', 'pairing'
  ],

  title: 'SLP International Wine Festival 2026: Complete Guide to the 14th Edition',
  excerpt: '14th edition: May 29–30 at Centro de las Artes. 500+ wines from 159 wineries, 40 guided tastings, 6 pairing dinners. Tickets, logistics, and how to combine it with a weekend in SLP.',
  content: jsonLd + buildContentEN(IMG),
  meta_title: 'SLP Wine Festival 2026: 14th Edition Complete Guide',
  meta_description: 'Festival Internacional del Vino SLP 2026 — May 29–30 at Centro de las Artes. 500+ wines, 159 wineries, tickets from $1,199 MXN. Full guide with tastings, pairings, lodging, transport.',

  title_es: 'Festival Internacional del Vino SLP 2026: Guía Completa de la 14ª Edición',
  excerpt_es: '14ª edición: 29 y 30 de mayo en el Centro de las Artes. 500+ vinos de 159 bodegas, 40 catas, 6 cenas maridaje. Boletos, logística y cómo combinarlo con un fin de semana en SLP.',
  content_es: jsonLd + buildContentES(IMG),
  meta_title_es: 'Festival del Vino SLP 2026: Guía Completa 14ª Edición',
  meta_description_es: 'Festival Internacional del Vino SLP 2026 — 29 y 30 de mayo en Centro de las Artes. 500+ vinos, 159 bodegas, boletos desde $1,199 MXN. Guía completa con catas, maridajes, hospedaje y traslados.',

  title_de: 'Internationales Weinfestival SLP 2026: Kompletter Guide zur 14. Ausgabe',
  excerpt_de: '14. Ausgabe: 29.–30. Mai im Centro de las Artes. 500+ Weine von 159 Weingütern, 40 Verkostungen, 6 Pairing-Dinner. Tickets, Logistik und wie du es mit einem Wochenende in SLP kombinierst.',
  content_de: jsonLd + buildContentDE(IMG),
  meta_title_de: 'Weinfestival SLP 2026 — 14. Ausgabe Guide',
  meta_description_de: 'Internationales Weinfestival SLP 2026 — 29.–30. Mai im Centro de las Artes. 500+ Weine, 159 Weingüter, Tickets ab 1.199 MXN. Kompletter Guide mit Verkostungen, Pairings, Unterkunft.',

  title_ja: 'フェスティバル・インテルナシオナル・デル・ヴィノ SLP 2026：第14回完全ガイド',
  excerpt_ja: '第14回：5月29日・30日、セントロ・デ・ラス・アルテスにて開催。159のワイナリーから500種以上のワイン、40の専門テイスティング、6つのペアリング・ディナー。チケット、ロジスティクス、SLPでの週末の過ごし方まで網羅。',
  content_ja: jsonLd + buildContentJA(IMG),
  meta_title_ja: 'SLPワインフェスティバル2026：第14回完全ガイド',
  meta_description_ja: '国際ワインフェスティバルSLP 2026 — 5月29日・30日、セントロ・デ・ラス・アルテスにて。500種以上のワイン、159のワイナリー、チケット1,199 MXNから。テイスティング、ペアリング、宿泊、交通まで完全網羅。',
};

(async () => {
  const { data: existing } = await supabase.from('blog_posts').select('id').eq('slug', SLUG).maybeSingle();
  if (existing) {
    const { error } = await supabase.from('blog_posts').update(post).eq('id', existing.id);
    if (error) { console.error('Update error:', error); process.exit(1); }
    console.log('✅ Updated existing post:', existing.id);
  } else {
    const { data, error } = await supabase.from('blog_posts').insert(post).select().single();
    if (error) { console.error('Insert error:', error); process.exit(1); }
    console.log('✅ Inserted:', data.id);
  }
  console.log(`📰 https://sanluisway.com/blog/${SLUG}`);
})();
