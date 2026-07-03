// Publishes the FENAPO 2026 family guide (kids, rides, Tierra Ganadera, logistics).
// EDITORIAL RULE: only facts confirmed for the 2026 edition — no prior-year data.
// Verified sources (all 2026 announcements): slp.gob.mx (gratuidad, 12-ene-2026),
// Potosinoticias (60 juegos mecánicos, 06-jun-2026), Punto de Vista / Plano
// Informativo (expo agroalimentaria + Tierra Ganadera, 05-jun-2026), Plano
// Informativo (Estrellitas Potosinas, 21-may-2026), Excélsior (27-may-2026).
// Lineup mirrors scripts/publish-fenapo-2026-artistas.js (already verified).
require('dotenv').config({ path: '.env' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const SLUG = 'fenapo-2026-con-ninos-guia-familias';

const IMG = {
  hero: '/images/event-categories/kids-family.jpeg',
};

// ── Family-friendly free nights (subset of the verified Foro lineup) ────────
// Source of truth: scripts/publish-fenapo-2026-artistas.js. The "why" column
// is San Luis Way editorial guidance, not an official designation.
const FAMILY_NIGHTS = [
  ['2026-08-07', 'Gloria Trevi', { es: 'Noche inaugural: ambientazo de apertura para toda la familia.', en: 'Opening night: a festive kickoff the whole family can enjoy.' }],
  ['2026-08-09', 'Lila Downs', { es: 'Folclor mexicano en domingo — de las noches más tranquilas y culturales.', en: 'Mexican folk on a Sunday — one of the calmest, most cultural nights.' }],
  ['2026-08-11', 'Influencers más grandes de México', { es: 'Evento pensado para el público joven; ideal si tus hijos siguen creadores de contenido.', en: 'Aimed at younger audiences; ideal if your kids follow content creators.' }],
  ['2026-08-16', 'Chihuahua Fest', { es: 'Domingo de fiesta con sabor de estado invitado.', en: 'A Sunday celebration with guest-state flavor.' }],
  ['2026-08-20', 'Kenia Os', { es: 'Una de las favoritas de niñas, niños y adolescentes.', en: 'A favorite with kids and teens.' }],
  ['2026-08-23', 'Los Acosta', { es: 'Cumbia para bailar en familia, en domingo.', en: 'Cumbia for family dancing, on a Sunday.' }],
  ['2026-08-25', 'Katy Perry', { es: 'Pop internacional apto para todas las edades — pero será la noche más llena de la feria: con niños pequeños, llega con muchas horas de anticipación o valora verla otra noche.', en: 'All-ages international pop — but it will be the fair’s most crowded night: with small kids, arrive many hours early or consider another night.' }],
  ['2026-08-27', 'Potosinazo', { es: 'Talento local en un ambiente relajado de jueves.', en: 'Local talent in a relaxed Thursday atmosphere.' }],
  ['2026-08-30', 'Los Tigres del Norte', { es: 'La clausura: cierre de feria multigeneracional.', en: 'The closing night: a multigenerational farewell.' }],
];

function fmtDate(iso, locale) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString(locale, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  });
}

function familyTable(locale, headers) {
  const lang = locale.startsWith('es') ? 'es' : 'en';
  const rows = FAMILY_NIGHTS.map(
    ([date, name, why], i) => `
      <tr class="${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">${fmtDate(date, locale)}</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900 whitespace-nowrap">${name}</td>
        <td class="px-4 py-3 text-sm text-gray-600">${why[lang]}</td>
      </tr>`
  ).join('');
  return `
<div class="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-8">
  <table class="min-w-full divide-y divide-gray-200">
    <caption class="sr-only">${headers.caption}</caption>
    <thead class="bg-emerald-700">
      <tr>
        <th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">${headers.date}</th>
        <th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">${headers.artist}</th>
        <th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">${headers.why}</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-100">${rows}
    </tbody>
  </table>
</div>`;
}

const familyTableES = familyTable('es-MX', { caption: 'Noches gratuitas más familiares del Foro de las Estrellas, FENAPO 2026', date: 'Fecha', artist: 'Artista', why: 'Por qué ir en familia' });
const familyTableEN = familyTable('en-US', { caption: 'Most family-friendly free nights at the Foro de las Estrellas, FENAPO 2026', date: 'Date', artist: 'Artist', why: 'Why go as a family' });

// ── FAQ JSON-LD ─────────────────────────────────────────────────────────────
const faqES = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿La FENAPO 2026 es gratis para las familias?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sí. Según el Gobierno del Estado y el Patronato de la Feria, en la FENAPO 2026 la entrada, el estacionamiento, los juegos mecánicos y los conciertos del Foro de las Estrellas son gratuitos. Solo el Palenque requiere boleto.' },
    },
    {
      '@type': 'Question',
      name: '¿Los juegos mecánicos de la FENAPO 2026 son gratis?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sí. El gobernador Ricardo Gallardo anunció en junio de 2026 que habrá 60 juegos mecánicos gratuitos (15 más que la edición anterior), con capacitación de operadores, inspecciones aleatorias y verificación de antecedentes del personal.' },
    },
    {
      '@type': 'Question',
      name: '¿Hay animales o zona ganadera en la FENAPO 2026?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sí. La SEDARH confirmó que la FENAPO 2026 integra la tradicional Tierra Ganadera dentro de una expo agroalimentaria con exhibición de razas de ganado bovino y caballos, maquinaria agrícola, drones y el Festival del Cabrito. El programa infantil detallado de esta zona aún no se publica.' },
    },
    {
      '@type': 'Question',
      name: '¿Qué conciertos gratis de la FENAPO 2026 convienen para ir con niños?',
      acceptedAnswer: { '@type': 'Answer', text: 'En el Foro de las Estrellas (gratis) destacan como noches familiares: Lila Downs (9 de agosto), el evento de influencers (11 de agosto), Kenia Os (20 de agosto), Los Acosta (23 de agosto), Katy Perry (25 de agosto, con multitudes récord esperadas) y Los Tigres del Norte en la clausura (30 de agosto).' },
    },
    {
      '@type': 'Question',
      name: '¿Los niños pueden participar en la FENAPO 2026?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sí. El Patronato lanzó la convocatoria "Estrellitas Potosinas" para niñas, niños y jóvenes que cantan, bailan o tocan un instrumento, en dos categorías: de 3 a 15 años y de 16 a 19 años. Informes al 444 129 0999, extensión 510.' },
    },
    {
      '@type': 'Question',
      name: '¿Cuáles son los horarios de la FENAPO 2026?',
      acceptedAnswer: { '@type': 'Answer', text: 'Los horarios oficiales de la edición 2026 (apertura del recinto, juegos mecánicos y pabellones) aún no se publican. Consulta los canales oficiales de la FENAPO antes de tu visita; actualizaremos esta guía cuando se anuncien.' },
    },
  ],
};

const faqEN = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is FENAPO 2026 free for families?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. According to the state government and the fair board, entrance, parking, the mechanical rides and the Foro de las Estrellas concerts are all free at FENAPO 2026. Only the Palenque requires a ticket.' },
    },
    {
      '@type': 'Question',
      name: 'Are the rides free at FENAPO 2026?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. In June 2026 Governor Ricardo Gallardo announced 60 free mechanical rides for the 2026 edition (15 more than the previous one), with operator training, random inspections and staff background checks.' },
    },
    {
      '@type': 'Question',
      name: 'Are there animals at FENAPO 2026?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. The state agriculture ministry (SEDARH) confirmed that FENAPO 2026 integrates the traditional Tierra Ganadera area into an agri-food expo with cattle and horse breed exhibitions, farm machinery, drones and the Festival del Cabrito. The detailed kids’ program for this area has not been published yet.' },
    },
    {
      '@type': 'Question',
      name: 'Which free FENAPO 2026 concerts are best with kids?',
      acceptedAnswer: { '@type': 'Answer', text: 'At the free Foro de las Estrellas, the most family-friendly nights are Lila Downs (Aug 9), the influencers event (Aug 11), Kenia Os (Aug 20), Los Acosta (Aug 23), Katy Perry (Aug 25 — expect record crowds) and Los Tigres del Norte closing the fair (Aug 30).' },
    },
    {
      '@type': 'Question',
      name: 'What are FENAPO 2026 opening hours?',
      acceptedAnswer: { '@type': 'Answer', text: 'Official 2026 hours (fairgrounds, rides and pavilions) have not been published yet. Check FENAPO’s official channels before visiting; we will update this guide when they are announced.' },
    },
  ],
};

// ── Content ES ──────────────────────────────────────────────────────────────
const contentES = `<div class="max-w-none">

<div class="bg-emerald-50 border-l-4 border-emerald-500 rounded-r-xl p-6 mb-10">
  <p class="font-bold text-emerald-900 mb-3">En esta guía</p>
  <nav class="grid sm:grid-cols-2 gap-2 text-emerald-800 text-sm">
    <a href="#resumen" class="hover:underline">→ Lo confirmado para familias en 2026</a>
    <a href="#juegos" class="hover:underline">→ Juegos mecánicos: 60 y gratis</a>
    <a href="#animales" class="hover:underline">→ Tierra Ganadera y animales</a>
    <a href="#estrellitas" class="hover:underline">→ Estrellitas Potosinas: tus hijos al escenario</a>
    <a href="#conciertos" class="hover:underline">→ Conciertos gratis para ir con niños</a>
    <a href="#tips" class="hover:underline">→ Tips prácticos de San Luis Way</a>
    <a href="#costos" class="hover:underline">→ ¿Cuánto gasta realmente una familia?</a>
    <a href="#pendientes" class="hover:underline">→ Lo que aún no se anuncia</a>
    <a href="#faq" class="hover:underline">→ Preguntas frecuentes</a>
    <a href="#fuentes" class="hover:underline">→ Fuentes</a>
  </nav>
  <p class="mt-4 text-sm text-emerald-700 italic">Guía basada únicamente en anuncios oficiales de la edición 2026 · Última actualización: 3 de julio de 2026</p>
</div>

<p class="text-xl leading-relaxed text-gray-800 mb-8 font-medium">
  <strong>La FENAPO 2026 (del 7 al 30 de agosto) se presume como una feria hecha para familias: entrada, estacionamiento y juegos mecánicos gratis.</strong> Aquí reunimos todo lo que ya está confirmado oficialmente para llevar niños a la edición 2026 — los 60 juegos gratuitos, la zona ganadera con animales, el concurso infantil Estrellitas Potosinas y qué noches del cartel gratuito funcionan mejor con niños — sin rellenar con datos de otros años.
</p>

<section id="resumen" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">Lo confirmado para familias en 2026</h2>
</div>
<div class="speakable bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200 rounded-2xl p-6 md:p-8 mb-6">
  <p class="text-base md:text-lg text-gray-800 leading-relaxed mb-5">
    <strong>La FENAPO 2026 se celebra del 7 al 30 de agosto</strong> en el Recinto Ferial de San Luis Potosí. Para una familia, lo esencial ya está anunciado: <strong>entrada, estacionamiento, juegos mecánicos y conciertos del Foro de las Estrellas gratuitos</strong>, según el Gobierno del Estado y el Patronato de la Feria.
  </p>
  <ul class="space-y-2">
    <li class="flex items-start gap-2 text-gray-800"><span class="text-emerald-600 mt-1">•</span><span><strong>Fechas:</strong> viernes 7 — domingo 30 de agosto de 2026 (<a href="/events/fenapo-2026" class="text-emerald-700 underline font-semibold">ficha del evento</a>)</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-emerald-600 mt-1">•</span><span><strong>Gratis:</strong> entrada, estacionamiento, 60 juegos mecánicos y las 21 noches del Foro de las Estrellas</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-emerald-600 mt-1">•</span><span><strong>Con costo:</strong> solo el Palenque (espectáculo nocturno con boleto — no pensado para niños pequeños). Detalles en nuestra <a href="/blog/fenapo-2026-boletos-precios-como-llegar" class="text-emerald-700 underline font-semibold">guía de boletos, precios y cómo llegar</a></span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-emerald-600 mt-1">•</span><span><strong>Para niños:</strong> juegos mecánicos, Tierra Ganadera con exhibiciones de animales, concurso Estrellitas Potosinas, pabellones artesanales y zonas gastronómicas anunciados para 2026</span></li>
  </ul>
</div>
<p class="text-gray-800 leading-relaxed">Según el presidente del Patronato, Fernando Rojo Ocejo, la gratuidad significa que una familia se ahorra <strong>más de 500 pesos</strong> frente a lo que pagaría en otras ferias del país por estacionamiento, entradas y juegos.</p>
</section>

<section id="juegos" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">Juegos mecánicos: 60 atracciones y todas gratis</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">Es el anuncio más importante para quien va con niños: el gobernador Ricardo Gallardo confirmó en junio de 2026 que la feria pasará de unas 45 a <strong>60 atracciones mecánicas, todas gratuitas</strong>. El objetivo declarado: <em>"Van a instalarse 60 juegos para que las filas se hagan más pequeñas"</em>.</p>
<div class="grid md:grid-cols-3 gap-4 mb-6">
  <div class="bg-white border-2 border-emerald-200 rounded-xl p-5"><p class="text-3xl font-bold text-emerald-700 mb-1">60</p><p class="text-sm text-gray-600">juegos mecánicos gratuitos anunciados para 2026 (15 más que la edición anterior)</p></div>
  <div class="bg-white border-2 border-emerald-200 rounded-xl p-5"><p class="text-3xl font-bold text-emerald-700 mb-1">$0</p><p class="text-sm text-gray-600">costo por subirse: no hay boletos ni fichas para los juegos</p></div>
  <div class="bg-white border-2 border-emerald-200 rounded-xl p-5"><p class="text-3xl font-bold text-emerald-700 mb-1">✓</p><p class="text-sm text-gray-600">seguridad anunciada: capacitación de operadores, inspecciones aleatorias y verificación de antecedentes del personal</p></div>
</div>
<p class="text-gray-800 leading-relaxed">El desglose de qué atracciones serán infantiles, familiares o extremas aún no se publica; en cuanto salga el mapa oficial de la zona de juegos 2026, actualizaremos esta guía.</p>
</section>

<section id="animales" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-amber-500 pb-3 inline-block">Tierra Ganadera y animales: lo confirmado por SEDARH</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">La FENAPO es una feria <em>nacional</em> con raíz agropecuaria, y para 2026 la Secretaría de Desarrollo Agropecuario (SEDARH) confirmó que la tradicional <strong>Tierra Ganadera</strong> se integra a una gran expo agroalimentaria. Para los niños, lo interesante anunciado:</p>
<ul class="space-y-3 mb-6">
  <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">🐄</span><span><strong>Exhibición de razas de ganado bovino y caballos</strong> — la oportunidad clásica de la feria para que los niños vean animales de granja de cerca.</span></li>
  <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">🚜</span><span><strong>Maquinaria agrícola en exhibición:</strong> tractores, camiones de trabajo especializados y drones — un imán para niñas y niños curiosos.</span></li>
  <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">🍽️</span><span><strong>Festival del Cabrito</strong> dentro de la misma zona, para el lado gastronómico del paseo.</span></li>
</ul>
<div class="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-5 mb-4">
  <p class="text-sm text-gray-800 leading-relaxed"><strong>Importante:</strong> el programa infantil detallado de esta zona para 2026 (talleres, granja didáctica, actividades interactivas) <strong>aún no se anuncia</strong>. Consulta los canales oficiales de la FENAPO y la SEDARH antes de tu visita; actualizaremos esta sección cuando haya información oficial.</p>
</div>
</section>

<section id="estrellitas" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">Estrellitas Potosinas: tus hijos pueden subir al escenario</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">La FENAPO 2026 no solo tiene espectáculos <em>para</em> niños: tiene un espacio <em>de</em> niños. El Patronato lanzó en mayo de 2026 la convocatoria <strong>"Estrellitas Potosinas"</strong>, un concurso de talento infantil y juvenil dentro de la feria.</p>
<div class="bg-white border-2 border-emerald-200 rounded-2xl p-6 mb-4">
  <ul class="space-y-2">
    <li class="flex items-start gap-2 text-gray-800"><span class="text-emerald-600 mt-1">•</span><span><strong>Categorías:</strong> de 3 a 15 años y de 16 a 19 años</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-emerald-600 mt-1">•</span><span><strong>Disciplinas:</strong> canto, baile o interpretación de un instrumento musical</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-emerald-600 mt-1">•</span><span><strong>Informes:</strong> 444 129 0999, extensión 510</span></li>
  </ul>
</div>
<p class="text-gray-800 leading-relaxed">Las fechas y el escenario de las presentaciones dentro de la feria no se han publicado todavía.</p>
</section>

<section id="conciertos" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">Conciertos gratis para ir con niños</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">Las 21 noches del Foro de las Estrellas son gratuitas y el acceso es por orden de llegada. Ninguna está catalogada oficialmente como "infantil", pero estas son, a criterio de San Luis Way, las que mejor funcionan en familia (el <a href="/blog/fenapo-2026-artistas-cartel-completo" class="text-emerald-700 underline font-semibold">cartel completo, fecha por fecha, está aquí</a>):</p>
${familyTableES}
<div class="bg-emerald-50 border-l-4 border-emerald-400 rounded-r-xl p-5">
  <p class="text-sm text-gray-800 leading-relaxed"><strong>Nuestro consejo con niños:</strong> las noches de saturación previsible (Katy Perry el 25, Mötley Crüe el 8, Bizarrap el 18) implican multitudes enormes y horas de espera de pie; con niños pequeños suelen disfrutarse más las noches de domingo o entre semana. El Palenque es un espectáculo nocturno con boleto y venta de alcohol — para el plan con niños, quédate con el Foro y la zona de juegos.</p>
</div>
</section>

<section id="tips" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">Tips prácticos de San Luis Way</h2>
</div>
<p class="text-sm text-gray-500 italic mb-4">Recomendaciones nuestras como guía local — no reglas oficiales de la feria.</p>
<div class="grid md:grid-cols-2 gap-4">
  <div class="bg-gray-50 rounded-xl p-5"><h3 class="font-bold text-gray-900 mb-2">🕐 Ve temprano y entre semana</h3><p class="text-sm text-gray-700 leading-relaxed">Con 60 juegos gratis, las filas serán el tema. Nuestro criterio local: las primeras horas de la tarde y los días sin headliner internacional son la apuesta más tranquila con niños.</p></div>
  <div class="bg-gray-50 rounded-xl p-5"><h3 class="font-bold text-gray-900 mb-2">📍 Punto de encuentro</h3><p class="text-sm text-gray-700 leading-relaxed">Acuerda con tus hijos un punto de reunión visible al entrar y enséñales a acudir al personal de seguridad uniformado si se separan. Anota tu teléfono en una pulsera o tarjeta en el bolsillo del niño.</p></div>
  <div class="bg-gray-50 rounded-xl p-5"><h3 class="font-bold text-gray-900 mb-2">💧 Agosto = calor y lluvia</h3><p class="text-sm text-gray-700 leading-relaxed">Lleva agua, gorra y bloqueador para la tarde, y un impermeable ligero: en agosto las tormentas vespertinas son comunes en San Luis Potosí.</p></div>
  <div class="bg-gray-50 rounded-xl p-5"><h3 class="font-bold text-gray-900 mb-2">🎒 Viaja ligero</h3><p class="text-sm text-gray-700 leading-relaxed">Revisa la lista oficial de objetos permitidos antes de ir (la edición 2026 aún no publica la suya). Una mochila pequeña con lo esencial agiliza los filtros de entrada.</p></div>
  <div class="bg-gray-50 rounded-xl p-5"><h3 class="font-bold text-gray-900 mb-2">🚗 Estacionamiento gratis, pero llega antes</h3><p class="text-sm text-gray-700 leading-relaxed">El estacionamiento es gratuito en 2026; en noches fuertes se llena. Cómo llegar en transporte público y opciones de acceso: <a href="/blog/fenapo-2026-boletos-precios-como-llegar" class="text-emerald-700 underline font-semibold">nuestra guía de logística</a>.</p></div>
  <div class="bg-gray-50 rounded-xl p-5"><h3 class="font-bold text-gray-900 mb-2">🏨 ¿Vienes de fuera?</h3><p class="text-sm text-gray-700 leading-relaxed">Agosto es temporada alta en la ciudad. Zonas y hoteles que funcionan con niños: <a href="/blog/where-to-stay-san-luis-potosi-2026" class="text-emerald-700 underline font-semibold">dónde hospedarse en San Luis Potosí</a>.</p></div>
</div>
</section>

<section id="costos" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-amber-500 pb-3 inline-block">¿Cuánto gasta realmente una familia?</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">Lo estructural es gratis en 2026: <strong>entrada $0, estacionamiento $0, juegos mecánicos $0, conciertos del Foro $0</strong>. El gasto real de una familia queda en tres rubros:</p>
<ul class="space-y-3 mb-6">
  <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">1.</span><span><strong>Comida y antojitos:</strong> la feria anuncia zonas gastronómicas y pabellones con comida típica potosina. No hay lista oficial de precios 2026, así que presupuesta como en cualquier feria grande mexicana: es donde se va la mayor parte del gasto.</span></li>
  <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">2.</span><span><strong>Recuerdos y artesanías:</strong> los pabellones artesanales anunciados para 2026 son compra opcional — y buen souvenir educativo.</span></li>
  <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">3.</span><span><strong>Palenque (solo adultos/plan aparte):</strong> es lo único con boleto. Precios y canales oficiales en la <a href="/blog/fenapo-2026-boletos-precios-como-llegar" class="text-emerald-700 underline font-semibold">guía de boletos y precios</a>.</span></li>
</ul>
<p class="text-gray-800 leading-relaxed">En corto: una tarde de feria con niños puede costarte únicamente lo que decidan comer.</p>
</section>

<section id="pendientes" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-gray-400 pb-3 inline-block">Lo que aún no se anuncia para 2026</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">Para que no llegues con expectativas sin confirmar, esto es lo que al cierre de esta guía <strong>no tiene anuncio oficial para la edición 2026</strong>:</p>
<ul class="space-y-2 mb-4">
  <li class="flex items-start gap-2 text-gray-700"><span class="text-gray-400 mt-1">○</span><span>Horarios oficiales del recinto, de los juegos mecánicos y de los pabellones</span></li>
  <li class="flex items-start gap-2 text-gray-700"><span class="text-gray-400 mt-1">○</span><span>Programa infantil detallado de Tierra Ganadera (talleres o granja didáctica)</span></li>
  <li class="flex items-start gap-2 text-gray-700"><span class="text-gray-400 mt-1">○</span><span>Mapa de zonas 2026, módulos de atención (niños extraviados, lactancia) y política de carriolas</span></li>
  <li class="flex items-start gap-2 text-gray-700"><span class="text-gray-400 mt-1">○</span><span>Fechas y escenario de las presentaciones de Estrellitas Potosinas</span></li>
</ul>
<p class="text-gray-800 leading-relaxed">Revisa los canales oficiales (fenapo.mx y fenapo.slp.gob.mx) antes de tu visita. Actualizaremos esta guía conforme se publiquen — y cada semana de la feria tendremos el plan en <a href="/events/this-week" class="text-emerald-700 underline font-semibold">eventos de la semana</a>.</p>
</section>

<section id="faq" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">Preguntas frecuentes</h2>
</div>
<div class="space-y-4">
  ${faqES.mainEntity
    .map(
      (q) => `<details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">${q.name}<span class="text-emerald-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">${q.acceptedAnswer.text}</p></details>`
    )
    .join('\n  ')}
</div>
</section>

<section id="fuentes" class="mb-8 scroll-mt-8">
<div class="not-prose mb-4">
  <h2 class="text-2xl font-bold text-gray-900 mb-3">Fuentes</h2>
</div>
<p class="text-sm text-gray-600 leading-relaxed">Todos los datos corresponden a anuncios oficiales de la edición 2026: Gobierno del Estado de San Luis Potosí (slp.gob.mx, gratuidad de entrada, estacionamiento y juegos, 12 de enero de 2026), declaraciones del gobernador Ricardo Gallardo sobre los 60 juegos mecánicos gratuitos (Potosinoticias, 6 de junio de 2026), SEDARH sobre la expo agroalimentaria y Tierra Ganadera 2026 (Revista Punto de Vista y Plano Informativo, 5 de junio de 2026), convocatoria Estrellitas Potosinas del Patronato de la Feria (Plano Informativo, 21 de mayo de 2026) y Excélsior (27 de mayo de 2026). El cartel del Foro de las Estrellas está verificado en nuestra <a href="/blog/fenapo-2026-artistas-cartel-completo" class="text-emerald-700 underline">guía del cartel completo</a>. Si hay nuevos anuncios oficiales, actualizaremos esta guía.</p>
</section>

<div class="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-center mb-6">
  <p class="text-white text-lg font-bold mb-2">¿Más planes con niños en San Luis Potosí?</p>
  <p class="text-emerald-100 text-sm mb-4">Parques, museos y actividades familiares todo el año — no solo en agosto.</p>
  <a href="/family-friendly-activities" class="inline-block bg-white text-emerald-700 font-bold px-6 py-3 rounded-full hover:bg-emerald-50 transition-colors">Ver actividades familiares en SLP</a>
</div>

<script type="application/ld+json">
${JSON.stringify(faqES, null, 2)}
</script>

</div>`;

// ── Content EN ──────────────────────────────────────────────────────────────
const contentEN = `<div class="max-w-none">

<div class="bg-emerald-50 border-l-4 border-emerald-500 rounded-r-xl p-6 mb-10">
  <p class="font-bold text-emerald-900 mb-3">In this guide</p>
  <nav class="grid sm:grid-cols-2 gap-2 text-emerald-800 text-sm">
    <a href="#overview" class="hover:underline">→ What's confirmed for families in 2026</a>
    <a href="#rides" class="hover:underline">→ Rides: 60 and all free</a>
    <a href="#animals" class="hover:underline">→ Tierra Ganadera & animals</a>
    <a href="#estrellitas" class="hover:underline">→ Estrellitas Potosinas: kids on stage</a>
    <a href="#concerts" class="hover:underline">→ Free concerts to attend with kids</a>
    <a href="#tips" class="hover:underline">→ Practical tips from San Luis Way</a>
    <a href="#costs" class="hover:underline">→ What a family actually spends</a>
    <a href="#pending" class="hover:underline">→ Not yet announced for 2026</a>
    <a href="#faq" class="hover:underline">→ FAQ</a>
    <a href="#sources" class="hover:underline">→ Sources</a>
  </nav>
  <p class="mt-4 text-sm text-emerald-700 italic">Based exclusively on official 2026-edition announcements · Last updated: July 3, 2026</p>
</div>

<p class="text-xl leading-relaxed text-gray-800 mb-8 font-medium">
  <strong>FENAPO 2026 (August 7–30) is pitched as a fair built for families: free entrance, free parking and free rides.</strong> Here is everything officially confirmed for taking kids to the 2026 edition — the 60 free rides, the livestock area with animals, the Estrellitas Potosinas kids' talent contest and which free-concert nights work best with children — with no padding from previous years.
</p>

<section id="overview" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">What's confirmed for families in 2026</h2>
</div>
<div class="speakable bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200 rounded-2xl p-6 md:p-8 mb-6">
  <p class="text-base md:text-lg text-gray-800 leading-relaxed mb-5">
    <strong>FENAPO 2026 runs August 7–30</strong> at the Recinto Ferial in San Luis Potosí. For a family, the essentials are already announced: <strong>entrance, parking, mechanical rides and the Foro de las Estrellas concerts are all free</strong>, per the state government and the fair board.
  </p>
  <ul class="space-y-2">
    <li class="flex items-start gap-2 text-gray-800"><span class="text-emerald-600 mt-1">•</span><span><strong>Dates:</strong> Friday, August 7 — Sunday, August 30, 2026 (<a href="/events/fenapo-2026" class="text-emerald-700 underline font-semibold">event page</a>)</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-emerald-600 mt-1">•</span><span><strong>Free:</strong> entrance, parking, 60 mechanical rides and all 21 Foro de las Estrellas nights</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-emerald-600 mt-1">•</span><span><strong>Ticketed:</strong> only the Palenque (a late-night ticketed venue — not aimed at small kids). Details in our <a href="/blog/fenapo-2026-boletos-precios-como-llegar" class="text-emerald-700 underline font-semibold">tickets, prices & getting-there guide</a></span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-emerald-600 mt-1">•</span><span><strong>For kids:</strong> rides, Tierra Ganadera with animal exhibitions, the Estrellitas Potosinas contest, artisan pavilions and food zones announced for 2026</span></li>
  </ul>
</div>
<p class="text-gray-800 leading-relaxed">According to fair board president Fernando Rojo Ocejo, the free-access policy saves a family <strong>over 500 pesos</strong> compared with what parking, admission and rides cost at other Mexican fairs.</p>
</section>

<section id="rides" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">Rides: 60 attractions, all free</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">This is the headline for anyone bringing kids: in June 2026 Governor Ricardo Gallardo confirmed the fair will grow from about 45 to <strong>60 mechanical rides, all free</strong> — in his words, "60 rides will be installed so the lines get shorter."</p>
<div class="grid md:grid-cols-3 gap-4 mb-6">
  <div class="bg-white border-2 border-emerald-200 rounded-xl p-5"><p class="text-3xl font-bold text-emerald-700 mb-1">60</p><p class="text-sm text-gray-600">free rides announced for 2026 (15 more than the previous edition)</p></div>
  <div class="bg-white border-2 border-emerald-200 rounded-xl p-5"><p class="text-3xl font-bold text-emerald-700 mb-1">$0</p><p class="text-sm text-gray-600">cost per ride — no tickets or tokens</p></div>
  <div class="bg-white border-2 border-emerald-200 rounded-xl p-5"><p class="text-3xl font-bold text-emerald-700 mb-1">✓</p><p class="text-sm text-gray-600">announced safety measures: operator training, random inspections and staff background checks</p></div>
</div>
<p class="text-gray-800 leading-relaxed">A breakdown of which attractions are kiddie, family or thrill rides has not been published; we will update this guide when the official 2026 rides map is out.</p>
</section>

<section id="animals" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-amber-500 pb-3 inline-block">Tierra Ganadera & animals: what SEDARH confirmed</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">FENAPO is a <em>national</em> fair with agricultural roots, and for 2026 the state agriculture ministry (SEDARH) confirmed the traditional <strong>Tierra Ganadera</strong> area joins a large agri-food expo. What's announced that kids will care about:</p>
<ul class="space-y-3 mb-6">
  <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">🐄</span><span><strong>Cattle and horse breed exhibitions</strong> — the fair's classic chance for kids to see farm animals up close.</span></li>
  <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">🚜</span><span><strong>Farm machinery on display:</strong> tractors, specialized work trucks and drones — a magnet for curious kids.</span></li>
  <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">🍽️</span><span><strong>Festival del Cabrito</strong> in the same area for the food side of the visit.</span></li>
</ul>
<div class="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-5 mb-4">
  <p class="text-sm text-gray-800 leading-relaxed"><strong>Heads-up:</strong> the detailed 2026 kids' program for this area (workshops, petting-farm activities) <strong>has not been announced</strong>. Check FENAPO's and SEDARH's official channels before your visit; we'll update this section when official information is published.</p>
</div>
</section>

<section id="estrellitas" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">Estrellitas Potosinas: your kids can take the stage</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">FENAPO 2026 doesn't just have shows <em>for</em> kids — it has a stage <em>of</em> kids. In May 2026 the fair board opened the <strong>"Estrellitas Potosinas"</strong> call, a children's and youth talent contest inside the fair.</p>
<div class="bg-white border-2 border-emerald-200 rounded-2xl p-6 mb-4">
  <ul class="space-y-2">
    <li class="flex items-start gap-2 text-gray-800"><span class="text-emerald-600 mt-1">•</span><span><strong>Categories:</strong> ages 3–15 and 16–19</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-emerald-600 mt-1">•</span><span><strong>Disciplines:</strong> singing, dancing or playing a musical instrument</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-emerald-600 mt-1">•</span><span><strong>Info:</strong> +52 444 129 0999, ext. 510</span></li>
  </ul>
</div>
<p class="text-gray-800 leading-relaxed">Performance dates and the stage inside the fairgrounds have not been published yet.</p>
</section>

<section id="concerts" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">Free concerts to attend with kids</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">All 21 Foro de las Estrellas nights are free, first come, first served. None is officially billed as a children's show, but in San Luis Way's judgment these work best as family outings (the <a href="/blog/fenapo-2026-artistas-cartel-completo" class="text-emerald-700 underline font-semibold">full date-by-date lineup is here</a>):</p>
${familyTableEN}
<div class="bg-emerald-50 border-l-4 border-emerald-400 rounded-r-xl p-5">
  <p class="text-sm text-gray-800 leading-relaxed"><strong>Our advice with kids:</strong> the predictably packed nights (Katy Perry Aug 25, Mötley Crüe Aug 8, Bizarrap Aug 18) mean huge crowds and hours of standing; Sundays and weeknights are usually the better family bet. The Palenque is a late-night ticketed venue serving alcohol — with children, stick to the Foro and the rides zone.</p>
</div>
</section>

<section id="tips" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">Practical tips from San Luis Way</h2>
</div>
<p class="text-sm text-gray-500 italic mb-4">Our recommendations as a local guide — not official fair rules.</p>
<div class="grid md:grid-cols-2 gap-4">
  <div class="bg-gray-50 rounded-xl p-5"><h3 class="font-bold text-gray-900 mb-2">🕐 Go early, go midweek</h3><p class="text-sm text-gray-700 leading-relaxed">With 60 free rides, lines will be the story. Our local read: early afternoons and days without an international headliner are the calmest bet with kids.</p></div>
  <div class="bg-gray-50 rounded-xl p-5"><h3 class="font-bold text-gray-900 mb-2">📍 Meeting point</h3><p class="text-sm text-gray-700 leading-relaxed">Agree on a visible meeting spot as you enter and teach kids to approach uniformed security staff if you get separated. Write your phone number on a wristband or a card in their pocket.</p></div>
  <div class="bg-gray-50 rounded-xl p-5"><h3 class="font-bold text-gray-900 mb-2">💧 August = heat and rain</h3><p class="text-sm text-gray-700 leading-relaxed">Bring water, hats and sunscreen for the afternoon, plus a light rain jacket — August evening storms are common in San Luis Potosí.</p></div>
  <div class="bg-gray-50 rounded-xl p-5"><h3 class="font-bold text-gray-900 mb-2">🎒 Pack light</h3><p class="text-sm text-gray-700 leading-relaxed">Check the official list of allowed items before going (the 2026 edition hasn't published its own yet). A small backpack with essentials speeds up entry checks.</p></div>
  <div class="bg-gray-50 rounded-xl p-5"><h3 class="font-bold text-gray-900 mb-2">🚗 Parking is free — arrive early anyway</h3><p class="text-sm text-gray-700 leading-relaxed">Parking is free in 2026; it fills up on big nights. Public transport and access options: <a href="/blog/fenapo-2026-boletos-precios-como-llegar" class="text-emerald-700 underline font-semibold">our logistics guide</a>.</p></div>
  <div class="bg-gray-50 rounded-xl p-5"><h3 class="font-bold text-gray-900 mb-2">🏨 Visiting from out of town?</h3><p class="text-sm text-gray-700 leading-relaxed">August is high season in the city. Kid-friendly areas and hotels: <a href="/blog/where-to-stay-san-luis-potosi-2026" class="text-emerald-700 underline font-semibold">where to stay in San Luis Potosí</a>.</p></div>
</div>
</section>

<section id="costs" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-amber-500 pb-3 inline-block">What a family actually spends</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">The structural costs are zero in 2026: <strong>entrance $0, parking $0, rides $0, Foro concerts $0</strong>. A family's real spending comes down to three things:</p>
<ul class="space-y-3 mb-6">
  <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">1.</span><span><strong>Food and snacks:</strong> the fair announces food zones and pavilions with typical Potosí cuisine. No official 2026 price list exists, so budget as you would for any large Mexican fair — it's where most of the money goes.</span></li>
  <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">2.</span><span><strong>Souvenirs and crafts:</strong> the artisan pavilions announced for 2026 are optional spending — and a good educational souvenir.</span></li>
  <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">3.</span><span><strong>Palenque (adults-only side plan):</strong> the only ticketed part. Prices and official channels in the <a href="/blog/fenapo-2026-boletos-precios-como-llegar" class="text-emerald-700 underline font-semibold">tickets & prices guide</a>.</span></li>
</ul>
<p class="text-gray-800 leading-relaxed">In short: a fair afternoon with kids can cost you only what they decide to eat.</p>
</section>

<section id="pending" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-gray-400 pb-3 inline-block">Not yet announced for 2026</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">So you don't arrive with unconfirmed expectations, as of this guide's last update the following <strong>has no official 2026 announcement</strong>:</p>
<ul class="space-y-2 mb-4">
  <li class="flex items-start gap-2 text-gray-700"><span class="text-gray-400 mt-1">○</span><span>Official hours for the fairgrounds, rides and pavilions</span></li>
  <li class="flex items-start gap-2 text-gray-700"><span class="text-gray-400 mt-1">○</span><span>The detailed kids' program at Tierra Ganadera (workshops or petting farm)</span></li>
  <li class="flex items-start gap-2 text-gray-700"><span class="text-gray-400 mt-1">○</span><span>The 2026 zone map, service modules (lost children, nursing rooms) and stroller policy</span></li>
  <li class="flex items-start gap-2 text-gray-700"><span class="text-gray-400 mt-1">○</span><span>Dates and stage for the Estrellitas Potosinas performances</span></li>
</ul>
<p class="text-gray-800 leading-relaxed">Check the official channels (fenapo.mx and fenapo.slp.gob.mx) before your visit. We'll update this guide as announcements land — and during the fair we'll have each week's plan in <a href="/events/this-week" class="text-emerald-700 underline font-semibold">this week's events</a>.</p>
</section>

<section id="faq" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">FAQ</h2>
</div>
<div class="space-y-4">
  ${faqEN.mainEntity
    .map(
      (q) => `<details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">${q.name}<span class="text-emerald-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">${q.acceptedAnswer.text}</p></details>`
    )
    .join('\n  ')}
</div>
</section>

<section id="sources" class="mb-8 scroll-mt-8">
<div class="not-prose mb-4">
  <h2 class="text-2xl font-bold text-gray-900 mb-3">Sources</h2>
</div>
<p class="text-sm text-gray-600 leading-relaxed">Every fact comes from official 2026-edition announcements: the San Luis Potosí state government (slp.gob.mx — free entrance, parking and rides, Jan 12, 2026), Governor Ricardo Gallardo's statements on the 60 free rides (Potosinoticias, June 6, 2026), SEDARH on the 2026 agri-food expo and Tierra Ganadera (Revista Punto de Vista and Plano Informativo, June 5, 2026), the fair board's Estrellitas Potosinas call (Plano Informativo, May 21, 2026) and Excélsior (May 27, 2026). The Foro de las Estrellas lineup is verified in our <a href="/blog/fenapo-2026-artistas-cartel-completo" class="text-emerald-700 underline">full lineup guide</a>. We will update this guide as new official announcements are published.</p>
</section>

<div class="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-center mb-6">
  <p class="text-white text-lg font-bold mb-2">More kid-friendly plans in San Luis Potosí?</p>
  <p class="text-emerald-100 text-sm mb-4">Parks, museums and family activities year-round — not just in August.</p>
  <a href="/family-friendly-activities" class="inline-block bg-white text-emerald-700 font-bold px-6 py-3 rounded-full hover:bg-emerald-50 transition-colors">See family activities in SLP</a>
</div>

<script type="application/ld+json">
${JSON.stringify(faqEN, null, 2)}
</script>

</div>`;

// ── Post record ─────────────────────────────────────────────────────────────
const post = {
  slug: SLUG,
  status: 'published',
  published_at: new Date().toISOString(),
  image_url: IMG.hero,
  category: 'Events',
  tags: ['fenapo', 'fenapo-2026', 'familia', 'ninos', 'juegos-mecanicos', 'family', 'kids', 'events', 'san-luis-potosi', 'feria'],

  title: 'FENAPO 2026 with Kids: The Family Guide — Free Rides, Animals & Best Nights',
  excerpt: 'Taking kids to FENAPO 2026 (Aug 7–30)? Entrance, parking and all 60 rides are free. Here’s what’s officially confirmed for families: the Tierra Ganadera animal exhibits, the Estrellitas Potosinas kids’ contest and the best free-concert nights with children.',
  content: contentEN,
  meta_title: 'FENAPO 2026 with Kids: Family Guide | Free Rides, Animals & Tips',
  meta_description: 'Family guide to FENAPO 2026: free entrance, parking and 60 free rides, cattle & horse exhibits at Tierra Ganadera, the kids’ talent contest and the best free concerts for children.',

  title_es: 'FENAPO 2026 con Niños: Guía para Familias — Juegos Gratis, Animales y Mejores Noches',
  excerpt_es: '¿Vas a la FENAPO 2026 (7–30 de agosto) con niños? Entrada, estacionamiento y los 60 juegos mecánicos son gratis. Esto es lo confirmado oficialmente para familias: los animales de Tierra Ganadera, el concurso infantil Estrellitas Potosinas y las mejores noches de conciertos gratis con niños.',
  content_es: contentES,
  meta_title_es: 'FENAPO 2026 con Niños: Guía para Familias | Juegos Gratis y Animales',
  meta_description_es: 'Guía familiar FENAPO 2026: entrada, estacionamiento y 60 juegos mecánicos gratis, exhibición de ganado y caballos en Tierra Ganadera, concurso infantil y los mejores conciertos gratis para ir con niños.',

  title_de: 'FENAPO 2026 mit Kindern: Der Familien-Guide — Gratis-Fahrgeschäfte, Tiere und beste Abende',
  excerpt_de: 'FENAPO 2026 (7.–30. August) mit Kindern: Eintritt, Parken und alle 60 Fahrgeschäfte sind gratis. Offiziell bestätigt für Familien: Tierschauen in der Tierra Ganadera, der Kinder-Talentwettbewerb Estrellitas Potosinas und die besten Gratis-Konzertabende.',
  content_de: contentEN,
  meta_title_de: 'FENAPO 2026 mit Kindern: Familien-Guide | Gratis-Fahrgeschäfte & Tiere',
  meta_description_de: 'Familien-Guide FENAPO 2026: Eintritt, Parken und 60 Fahrgeschäfte gratis, Rinder- und Pferdeschauen in der Tierra Ganadera, Kinderwettbewerb und die besten Gratis-Konzerte mit Kindern.',

  title_ja: 'FENAPO 2026 子連れガイド：無料の遊具・動物・家族向けのおすすめの夜',
  excerpt_ja: 'FENAPO 2026（8月7日〜30日）に子連れで行くなら：入場・駐車場・60台の遊具はすべて無料。ティエラ・ガナデラの家畜展示、子ども向けタレントコンテスト「エストレジータス・ポトシーナス」、子連れに最適な無料コンサートの夜など、2026年版の公式発表のみをまとめた家族向けガイド。',
  content_ja: contentEN,
  meta_title_ja: 'FENAPO 2026 子連れ・家族ガイド | 無料の遊具と動物展示',
  meta_description_ja: 'FENAPO 2026家族ガイド：入場・駐車場・60台の遊具が無料。ティエラ・ガナデラの牛・馬の展示、子どもタレントコンテスト、子連れ向け無料コンサート情報。',
};

async function main() {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    console.error('Missing Supabase env vars. Aborting.');
    process.exit(1);
  }

  const { data: existing, error: selectErr } = await supabase
    .from('blog_posts')
    .select('id, slug')
    .eq('slug', SLUG)
    .maybeSingle();

  if (selectErr) {
    console.error('Select error:', selectErr);
    process.exit(1);
  }

  if (existing) {
    const { error } = await supabase.from('blog_posts').update(post).eq('id', existing.id);
    if (error) {
      console.error('Update error:', error);
      process.exit(1);
    }
    console.log('Post updated:', existing.id);
  } else {
    const { data, error } = await supabase.from('blog_posts').insert(post).select().single();
    if (error) {
      console.error('Insert error:', error);
      process.exit(1);
    }
    console.log('Post published! ID:', data.id);
  }

  console.log(`\nView at: https://www.sanluisway.com/blog/${SLUG}`);
}

main();
