// Publishes the FENAPO 2026 artist deep-dive — the "second guide" promised by
// fenapo-2026-guia-preparacion when the full cartel was released (May 27, 2026).
// Lineup data mirrors src/pages/events/fenapo-2026.tsx (verified: Infobae,
// El Universal SLP, Milenio, feriafenapo.com).
require('dotenv').config({ path: '.env' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const SLUG = 'fenapo-2026-artistas-cartel-completo';

const IMG = {
  hero: '/images/blog/fenapo-2026-cartel-guia-completa-hero.png',
  palenque: '/images/blog/fenapo-2026-cartel-guia-completa-palenque.png',
  fairgrounds: '/images/blog/fenapo-2026-cartel-guia-completa-fairgrounds.png',
};

// ── Lineup (single source of truth for this script) ────────────────────────
const FORO = [
  ['2026-08-07', 'Gloria Trevi'],
  ['2026-08-08', 'Mötley Crüe'],
  ['2026-08-09', 'Lila Downs'],
  ['2026-08-10', 'Yandel Sinfónico'],
  ['2026-08-11', 'Influencers más grandes de México'],
  ['2026-08-12', 'El Bogueto'],
  ['2026-08-13', 'Xavi'],
  ['2026-08-14', 'Ramón Ayala'],
  ['2026-08-15', 'Óscar Maydon'],
  ['2026-08-16', 'Chihuahua Fest'],
  ['2026-08-18', 'Bizarrap'],
  ['2026-08-19', 'Sin Bandera'],
  ['2026-08-20', 'Kenia Os'],
  ['2026-08-21', 'Laberinto y los Herederos de Nuevo León'],
  ['2026-08-22', 'Los Huracanes del Norte'],
  ['2026-08-23', 'Los Acosta'],
  ['2026-08-25', 'Katy Perry'],
  ['2026-08-26', 'Santa Fe Klan'],
  ['2026-08-27', 'Potosinazo'],
  ['2026-08-28', 'Alameños de la Sierra'],
  ['2026-08-30', 'Los Tigres del Norte'],
];

const PALENQUE = [
  ['2026-08-07', 'Remmy Valenzuela'],
  ['2026-08-08', 'Luis R. Conríquez'],
  ['2026-08-09', 'Conjunto Primavera'],
  ['2026-08-13', 'María José'],
  ['2026-08-14', 'Matute'],
  ['2026-08-15', 'Pesado e Invasores'],
  ['2026-08-16', 'Cornelio Vega Jr.'],
  ['2026-08-20', 'Horóscopos de Durango'],
  ['2026-08-21', 'Grupo Firme'],
  ['2026-08-23', 'Ha*Ash'],
  ['2026-08-27', 'Emmanuel & Mijares'],
  ['2026-08-28', 'Marca Registrada'],
  ['2026-08-29', 'Edén Muñoz'],
  ['2026-08-30', 'Julión Álvarez'],
];

function fmtDate(iso, locale) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString(locale, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  });
}

function calendarTable(acts, locale, headers, accent) {
  const rows = acts
    .map(
      ([date, name], i) => `
      <tr class="${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">${fmtDate(date, locale)}</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">${name}</td>
      </tr>`
    )
    .join('');
  return `
<div class="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-8">
  <table class="min-w-full divide-y divide-gray-200">
    <caption class="sr-only">${headers.caption}</caption>
    <thead class="${accent}">
      <tr>
        <th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">${headers.date}</th>
        <th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">${headers.artist}</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-100">${rows}
    </tbody>
  </table>
</div>`;
}

const foroTableES = calendarTable(FORO, 'es-MX', { caption: 'Calendario completo Foro de las Estrellas FENAPO 2026', date: 'Fecha', artist: 'Artista' }, 'bg-purple-700');
const palenqueTableES = calendarTable(PALENQUE, 'es-MX', { caption: 'Calendario completo Palenque FENAPO 2026', date: 'Fecha', artist: 'Artista' }, 'bg-amber-600');
const foroTableEN = calendarTable(FORO, 'en-US', { caption: 'Full Foro de las Estrellas calendar, FENAPO 2026', date: 'Date', artist: 'Artist' }, 'bg-purple-700');
const palenqueTableEN = calendarTable(PALENQUE, 'en-US', { caption: 'Full Palenque calendar, FENAPO 2026', date: 'Date', artist: 'Artist' }, 'bg-amber-600');

// ── FAQ JSON-LD ─────────────────────────────────────────────────────────────
const faqES = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cuándo es la FENAPO 2026?',
      acceptedAnswer: { '@type': 'Answer', text: 'La FENAPO 2026 (edición 77 de la Feria Nacional Potosina) se celebra del viernes 7 al domingo 30 de agosto de 2026 en el Recinto Ferial de San Luis Potosí, sobre Av. Fco. Martínez de la Vega.' },
    },
    {
      '@type': 'Question',
      name: '¿Los conciertos de la FENAPO 2026 son gratis?',
      acceptedAnswer: { '@type': 'Answer', text: 'Los 21 conciertos del Foro de las Estrellas (antes Teatro del Pueblo) son gratuitos, incluidos Katy Perry, Mötley Crüe, Bizarrap y Los Tigres del Norte. La entrada a la feria, los juegos mecánicos y el estacionamiento también son gratis. Solo el Palenque requiere boleto.' },
    },
    {
      '@type': 'Question',
      name: '¿Qué día se presenta Katy Perry en la FENAPO 2026?',
      acceptedAnswer: { '@type': 'Answer', text: 'Katy Perry se presenta el martes 25 de agosto de 2026 en el Foro de las Estrellas de la FENAPO, con entrada gratuita.' },
    },
    {
      '@type': 'Question',
      name: '¿Dónde comprar boletos para el Palenque de la FENAPO 2026?',
      acceptedAnswer: { '@type': 'Answer', text: 'Los boletos del Palenque se venden únicamente por los canales oficiales: fenapo.mx y eticket.mx. Los precios varían según el artista y la ubicación. Evita la reventa: los accesos tienen validación electrónica.' },
    },
    {
      '@type': 'Question',
      name: '¿Quién cierra la FENAPO 2026?',
      acceptedAnswer: { '@type': 'Answer', text: 'La clausura es el domingo 30 de agosto de 2026 con Los Tigres del Norte gratis en el Foro de las Estrellas y Julión Álvarez en el Palenque.' },
    },
    {
      '@type': 'Question',
      name: '¿Qué artistas de corridos tumbados van a la FENAPO 2026?',
      acceptedAnswer: { '@type': 'Answer', text: 'En el Foro de las Estrellas (gratis): Xavi (13 de agosto), Óscar Maydon (15 de agosto) y Santa Fe Klan (26 de agosto). En el Palenque: Luis R. Conríquez (8 de agosto) y Edén Muñoz (29 de agosto).' },
    },
  ],
};

const faqEN = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'When is FENAPO 2026?',
      acceptedAnswer: { '@type': 'Answer', text: 'FENAPO 2026 (the 77th Feria Nacional Potosina) runs from Friday, August 7 through Sunday, August 30, 2026 at the Recinto Ferial in San Luis Potosí, Mexico.' },
    },
    {
      '@type': 'Question',
      name: 'Are FENAPO 2026 concerts free?',
      acceptedAnswer: { '@type': 'Answer', text: 'All 21 concerts at the Foro de las Estrellas (formerly Teatro del Pueblo) are free, including Katy Perry, Mötley Crüe, Bizarrap and Los Tigres del Norte. Fair entrance, rides and parking are also free. Only the Palenque requires a ticket.' },
    },
    {
      '@type': 'Question',
      name: 'When does Katy Perry play FENAPO 2026?',
      acceptedAnswer: { '@type': 'Answer', text: 'Katy Perry performs on Tuesday, August 25, 2026 at the FENAPO Foro de las Estrellas — admission is free.' },
    },
    {
      '@type': 'Question',
      name: 'Where do I buy FENAPO 2026 Palenque tickets?',
      acceptedAnswer: { '@type': 'Answer', text: 'Palenque tickets are sold only through the official channels: fenapo.mx and eticket.mx. Prices vary by artist and seat location. Avoid resellers — entry uses electronic validation.' },
    },
  ],
};

// ── Content ES ──────────────────────────────────────────────────────────────
const contentES = `<div class="max-w-none">

<div class="bg-purple-50 border-l-4 border-purple-500 rounded-r-xl p-6 mb-10">
  <p class="font-bold text-purple-900 mb-3">En esta guía</p>
  <nav class="grid sm:grid-cols-2 gap-2 text-purple-800 text-sm">
    <a href="#resumen" class="hover:underline">→ FENAPO 2026 en breve</a>
    <a href="#imperdibles" class="hover:underline">→ Las 6 noches imperdibles</a>
    <a href="#foro" class="hover:underline">→ Calendario Foro de las Estrellas (gratis)</a>
    <a href="#palenque" class="hover:underline">→ Calendario Palenque (con boleto)</a>
    <a href="#por-estilo" class="hover:underline">→ Elige tu noche por estilo</a>
    <a href="#boletos" class="hover:underline">→ Boletos y accesos</a>
    <a href="#faq" class="hover:underline">→ Preguntas frecuentes</a>
    <a href="#fuentes" class="hover:underline">→ Fuentes</a>
  </nav>
  <p class="mt-4 text-sm text-purple-700 italic">Cartel oficial completo publicado el 27 de mayo de 2026 · Última actualización: 1 de julio de 2026</p>
</div>

<p class="text-xl leading-relaxed text-gray-800 mb-8 font-medium">
  <strong>Ya está el cartel completo de la FENAPO 2026 — y es el más ambicioso en años.</strong> Katy Perry y Mötley Crüe gratis en el Foro de las Estrellas, Bizarrap, Los Tigres del Norte cerrando la feria, y un Palenque con Grupo Firme, Julión Álvarez y Edén Muñoz. En abril te dijimos que publicaríamos la guía de artistas cuando el cartel estuviera 100% confirmado: aquí está, con las 35 noches, fecha por fecha.
</p>

<section id="resumen" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-purple-500 pb-3 inline-block">FENAPO 2026 en breve</h2>
</div>
<div class="speakable bg-gradient-to-br from-purple-50 to-indigo-50 border-2 border-purple-200 rounded-2xl p-6 md:p-8 mb-6">
  <p class="text-base md:text-lg text-gray-800 leading-relaxed mb-5">
    <strong>La FENAPO 2026 se celebra del 7 al 30 de agosto</strong> en el Recinto Ferial de San Luis Potosí. Son <strong>21 conciertos gratuitos</strong> en el Foro de las Estrellas (antes Teatro del Pueblo) y <strong>14 noches de Palenque</strong> con boleto. La entrada a la feria, los juegos mecánicos y el estacionamiento son gratuitos.
  </p>
  <ul class="space-y-2">
    <li class="flex items-start gap-2 text-gray-800"><span class="text-purple-600 mt-1">•</span><span><strong>Fechas:</strong> viernes 7 — domingo 30 de agosto de 2026</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-purple-600 mt-1">•</span><span><strong>Foro de las Estrellas:</strong> gratis, 21 noches (Katy Perry, Mötley Crüe, Bizarrap, Los Tigres del Norte…)</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-purple-600 mt-1">•</span><span><strong>Palenque:</strong> boleto en fenapo.mx y eticket.mx (Grupo Firme, Julión Álvarez, Ha*Ash…)</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-purple-600 mt-1">•</span><span><strong>Logística completa</strong> (transporte, presupuesto, hospedaje): <a href="/blog/fenapo-2026-guia-preparacion" class="text-purple-700 underline font-semibold">nuestra guía de preparación</a></span></li>
  </ul>
</div>
</section>

<section id="imperdibles" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-purple-500 pb-3 inline-block">Las 6 noches imperdibles</h2>
</div>
<div class="grid md:grid-cols-2 gap-4 mb-6">
  <div class="bg-white border-2 border-purple-200 rounded-xl p-5"><p class="text-xs font-bold text-purple-600 uppercase mb-1">Martes 25 · Foro · Gratis</p><h3 class="font-bold text-lg text-gray-900 mb-1">Katy Perry</h3><p class="text-sm text-gray-600">La noche más grande de la feria: una superestrella pop internacional con entrada libre. Llega horas antes — el aforo se llenará como nunca.</p></div>
  <div class="bg-white border-2 border-purple-200 rounded-xl p-5"><p class="text-xs font-bold text-purple-600 uppercase mb-1">Sábado 8 · Foro · Gratis</p><h3 class="font-bold text-lg text-gray-900 mb-1">Mötley Crüe</h3><p class="text-sm text-gray-600">Leyendas del rock en un escenario de feria gratuito. Primer sábado: espera lleno total.</p></div>
  <div class="bg-white border-2 border-purple-200 rounded-xl p-5"><p class="text-xs font-bold text-purple-600 uppercase mb-1">Martes 18 · Foro · Gratis</p><h3 class="font-bold text-lg text-gray-900 mb-1">Bizarrap</h3><p class="text-sm text-gray-600">El productor argentino de las BZRP Music Sessions, en una de las fechas más esperadas por el público joven.</p></div>
  <div class="bg-white border-2 border-purple-200 rounded-xl p-5"><p class="text-xs font-bold text-purple-600 uppercase mb-1">Domingo 30 · Foro · Gratis</p><h3 class="font-bold text-lg text-gray-900 mb-1">Los Tigres del Norte</h3><p class="text-sm text-gray-600">La clausura: los jefes de jefes cierran la edición 77. Fin de fiesta garantizado.</p></div>
  <div class="bg-white border-2 border-amber-200 rounded-xl p-5"><p class="text-xs font-bold text-amber-600 uppercase mb-1">Viernes 21 · Palenque · Boleto</p><h3 class="font-bold text-lg text-gray-900 mb-1">Grupo Firme</h3><p class="text-sm text-gray-600">Una de las agrupaciones más taquilleras del regional mexicano en el formato íntimo del palenque.</p></div>
  <div class="bg-white border-2 border-amber-200 rounded-xl p-5"><p class="text-xs font-bold text-amber-600 uppercase mb-1">Domingo 30 · Palenque · Boleto</p><h3 class="font-bold text-lg text-gray-900 mb-1">Julión Álvarez</h3><p class="text-sm text-gray-600">El cierre del Palenque con una de las voces más queridas de la banda. Boletos que vuelan primero.</p></div>
</div>
</section>

<img src="${IMG.fairgrounds}" alt="Recinto Ferial de la FENAPO en San Luis Potosí" class="w-full rounded-2xl shadow-lg mb-12" loading="lazy" />

<section id="foro" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-purple-500 pb-3 inline-block">Foro de las Estrellas: las 21 noches gratis</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-6">El Foro de las Estrellas (el escenario que antes conocías como Teatro del Pueblo) concentra los conciertos masivos gratuitos. No hay boleto: el acceso es por orden de llegada, así que para los headliners internacionales conviene llegar temprano por la tarde. Los lunes 17 y 24, y el sábado 29, no hay concierto anunciado en el Foro.</p>
${foroTableES}
</section>

<section id="palenque" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-amber-500 pb-3 inline-block">Palenque: las 14 noches con boleto</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-6">El Palenque es el formato redondo e íntimo de la feria: el artista canta al centro, a metros del público. Es la experiencia premium de la FENAPO y la única parte que requiere boleto.</p>
${palenqueTableES}
<img src="${IMG.palenque}" alt="Palenque de la FENAPO en San Luis Potosí" class="w-full rounded-2xl shadow-lg mb-6" loading="lazy" />
</section>

<section id="por-estilo" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-purple-500 pb-3 inline-block">Elige tu noche por estilo</h2>
</div>
<div class="space-y-6">
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">🎤 Pop e internacional</h3><p class="text-gray-700 text-sm leading-relaxed">Gloria Trevi abre la feria (vie 7), Yandel Sinfónico (lun 10), Sin Bandera (mié 19), Kenia Os (jue 20), Katy Perry (mar 25) — todos gratis en el Foro. En el Palenque: María José (jue 13), Ha*Ash (dom 23) y Emmanuel & Mijares (jue 27).</p></div>
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">🎸 Rock y nostalgia</h3><p class="text-gray-700 text-sm leading-relaxed">Mötley Crüe (sáb 8, Foro, gratis) es el plato fuerte. En el Palenque, Matute (vie 14) pone la fiesta ochentera-noventera.</p></div>
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">🤠 Norteño, banda y regional</h3><p class="text-gray-700 text-sm leading-relaxed">En el Foro (gratis): Ramón Ayala (vie 14), Laberinto y los Herederos (vie 21), Los Huracanes del Norte (sáb 22), Alameños de la Sierra (vie 28) y Los Tigres del Norte en la clausura (dom 30). En el Palenque: Remmy Valenzuela (vie 7), Conjunto Primavera (dom 9), Pesado e Invasores (sáb 15), Cornelio Vega Jr. (dom 16), Horóscopos de Durango (jue 20), Grupo Firme (vie 21), Marca Registrada (vie 28), Edén Muñoz (sáb 29) y Julión Álvarez (dom 30).</p></div>
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">🔥 Corridos y urbano</h3><p class="text-gray-700 text-sm leading-relaxed">Gratis en el Foro: El Bogueto (mié 12), Xavi (jue 13), Óscar Maydon (sáb 15), Bizarrap (mar 18) y Santa Fe Klan (mié 26). En el Palenque: Luis R. Conríquez (sáb 8).</p></div>
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">🌎 Folclor, cumbia y noches especiales</h3><p class="text-gray-700 text-sm leading-relaxed">Lila Downs (dom 9) trae el folclor mexicano al Foro. Los Acosta (dom 23) para bailar cumbia. Y dos noches con sabor local: el Potosinazo (jue 27) con talento de casa y el Chihuahua Fest (dom 16). El martes 11 hay un evento con los "influencers más grandes de México".</p></div>
</div>
</section>

<section id="boletos" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-amber-500 pb-3 inline-block">Boletos y accesos</h2>
</div>
<div class="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6 md:p-8 mb-6">
  <ul class="space-y-3">
    <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">✓</span><span><strong>Foro de las Estrellas:</strong> gratis, sin boleto, por orden de llegada. Para Katy Perry, Mötley Crüe y Bizarrap llega con varias horas de anticipación.</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">✓</span><span><strong>Palenque:</strong> compra únicamente en <strong>fenapo.mx</strong> o <strong>eticket.mx</strong>. Los precios varían por artista y zona.</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">✓</span><span><strong>Evita la reventa:</strong> los accesos tienen validación electrónica y los boletos falsos son comunes en fechas fuertes.</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">✓</span><span><strong>Feria, juegos mecánicos y estacionamiento:</strong> gratuitos toda la edición 2026.</span></li>
  </ul>
</div>
<p class="text-gray-800 leading-relaxed">¿Vienes de fuera o quieres armar el plan completo (hospedaje, transporte, presupuesto por día)? Todo está en nuestra <a href="/blog/fenapo-2026-guia-preparacion" class="text-purple-700 underline font-semibold">guía de preparación FENAPO 2026</a>, y los detalles del recinto en la <a href="/events/fenapo-2026" class="text-purple-700 underline font-semibold">página del evento</a>.</p>
</section>

<section id="faq" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-purple-500 pb-3 inline-block">Preguntas frecuentes</h2>
</div>
<div class="space-y-4">
  ${faqES.mainEntity
    .map(
      (q) => `<details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">${q.name}<span class="text-purple-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">${q.acceptedAnswer.text}</p></details>`
    )
    .join('\n  ')}
</div>
</section>

<section id="fuentes" class="mb-8 scroll-mt-8">
<div class="not-prose mb-4">
  <h2 class="text-2xl font-bold text-gray-900 mb-3">Fuentes</h2>
</div>
<p class="text-sm text-gray-600 leading-relaxed">Cartel oficial completo publicado el 27 de mayo de 2026 y verificado contra: Infobae (Palenque y Foro de las Estrellas), El Universal San Luis Potosí, Milenio y feriafenapo.com. Si el Gobierno del Estado anuncia cambios de fecha o cancelaciones, actualizaremos esta guía.</p>
</section>

<div class="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-center">
  <p class="text-white text-lg font-bold mb-2">¿Quieres el plan de cada semana de la feria en tu correo?</p>
  <p class="text-purple-100 text-sm mb-4">Cada lunes mandamos los eventos de la semana en SLP — gratis.</p>
  <a href="/subscribe" class="inline-block bg-white text-purple-700 font-bold px-6 py-3 rounded-full hover:bg-purple-50 transition-colors">Suscríbete a San Luis Way Weekly</a>
</div>

<script type="application/ld+json">
${JSON.stringify(faqES, null, 2)}
</script>

</div>`;

// ── Content EN ──────────────────────────────────────────────────────────────
const contentEN = `<div class="max-w-none">

<div class="bg-purple-50 border-l-4 border-purple-500 rounded-r-xl p-6 mb-10">
  <p class="font-bold text-purple-900 mb-3">In this guide</p>
  <nav class="grid sm:grid-cols-2 gap-2 text-purple-800 text-sm">
    <a href="#overview" class="hover:underline">→ FENAPO 2026 at a glance</a>
    <a href="#top-picks" class="hover:underline">→ The 6 can't-miss nights</a>
    <a href="#foro" class="hover:underline">→ Foro de las Estrellas calendar (free)</a>
    <a href="#palenque" class="hover:underline">→ Palenque calendar (ticketed)</a>
    <a href="#by-style" class="hover:underline">→ Pick your night by style</a>
    <a href="#tickets" class="hover:underline">→ Tickets & access</a>
    <a href="#faq" class="hover:underline">→ FAQ</a>
  </nav>
  <p class="mt-4 text-sm text-purple-700 italic">Full official lineup released May 27, 2026 · Last updated: July 1, 2026</p>
</div>

<p class="text-xl leading-relaxed text-gray-800 mb-8 font-medium">
  <strong>The full FENAPO 2026 lineup is out — and it's the most ambitious in years.</strong> Katy Perry and Mötley Crüe playing for free at the Foro de las Estrellas, Bizarrap, Los Tigres del Norte closing the fair, and a Palenque run featuring Grupo Firme, Julión Álvarez and Edén Muñoz. Here are all 35 nights, date by date.
</p>

<section id="overview" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-purple-500 pb-3 inline-block">FENAPO 2026 at a glance</h2>
</div>
<div class="speakable bg-gradient-to-br from-purple-50 to-indigo-50 border-2 border-purple-200 rounded-2xl p-6 md:p-8 mb-6">
  <p class="text-base md:text-lg text-gray-800 leading-relaxed mb-5">
    <strong>FENAPO 2026 — Mexico's Feria Nacional Potosina — runs August 7–30</strong> at the Recinto Ferial in San Luis Potosí. It features <strong>21 free concerts</strong> at the Foro de las Estrellas (formerly Teatro del Pueblo) and <strong>14 ticketed Palenque nights</strong>. Fair entrance, rides and parking are free.
  </p>
  <ul class="space-y-2">
    <li class="flex items-start gap-2 text-gray-800"><span class="text-purple-600 mt-1">•</span><span><strong>Dates:</strong> Friday, August 7 — Sunday, August 30, 2026</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-purple-600 mt-1">•</span><span><strong>Foro de las Estrellas:</strong> free, 21 nights (Katy Perry, Mötley Crüe, Bizarrap, Los Tigres del Norte…)</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-purple-600 mt-1">•</span><span><strong>Palenque:</strong> tickets at fenapo.mx and eticket.mx (Grupo Firme, Julión Álvarez, Ha*Ash…)</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-purple-600 mt-1">•</span><span><strong>Full logistics</strong> (transport, budget, where to stay): <a href="/blog/fenapo-2026-guia-preparacion" class="text-purple-700 underline font-semibold">our FENAPO prep guide</a></span></li>
  </ul>
</div>
</section>

<section id="top-picks" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-purple-500 pb-3 inline-block">The 6 can't-miss nights</h2>
</div>
<div class="grid md:grid-cols-2 gap-4 mb-6">
  <div class="bg-white border-2 border-purple-200 rounded-xl p-5"><p class="text-xs font-bold text-purple-600 uppercase mb-1">Tue Aug 25 · Foro · Free</p><h3 class="font-bold text-lg text-gray-900 mb-1">Katy Perry</h3><p class="text-sm text-gray-600">The biggest night of the fair: an international pop superstar, completely free. Arrive hours early.</p></div>
  <div class="bg-white border-2 border-purple-200 rounded-xl p-5"><p class="text-xs font-bold text-purple-600 uppercase mb-1">Sat Aug 8 · Foro · Free</p><h3 class="font-bold text-lg text-gray-900 mb-1">Mötley Crüe</h3><p class="text-sm text-gray-600">Rock legends on a free fairground stage. First Saturday — expect a packed house.</p></div>
  <div class="bg-white border-2 border-purple-200 rounded-xl p-5"><p class="text-xs font-bold text-purple-600 uppercase mb-1">Tue Aug 18 · Foro · Free</p><h3 class="font-bold text-lg text-gray-900 mb-1">Bizarrap</h3><p class="text-sm text-gray-600">The Argentine producer behind the BZRP Music Sessions — one of the most anticipated dates for younger crowds.</p></div>
  <div class="bg-white border-2 border-purple-200 rounded-xl p-5"><p class="text-xs font-bold text-purple-600 uppercase mb-1">Sun Aug 30 · Foro · Free</p><h3 class="font-bold text-lg text-gray-900 mb-1">Los Tigres del Norte</h3><p class="text-sm text-gray-600">The closing night: norteño's biggest institution wraps up the 77th edition.</p></div>
  <div class="bg-white border-2 border-amber-200 rounded-xl p-5"><p class="text-xs font-bold text-amber-600 uppercase mb-1">Fri Aug 21 · Palenque · Ticketed</p><h3 class="font-bold text-lg text-gray-900 mb-1">Grupo Firme</h3><p class="text-sm text-gray-600">One of regional Mexican music's biggest acts in the palenque's intimate in-the-round format.</p></div>
  <div class="bg-white border-2 border-amber-200 rounded-xl p-5"><p class="text-xs font-bold text-amber-600 uppercase mb-1">Sun Aug 30 · Palenque · Ticketed</p><h3 class="font-bold text-lg text-gray-900 mb-1">Julión Álvarez</h3><p class="text-sm text-gray-600">The Palenque's closing night with one of banda's most beloved voices. These tickets go first.</p></div>
</div>
</section>

<img src="${IMG.fairgrounds}" alt="FENAPO fairgrounds in San Luis Potosí" class="w-full rounded-2xl shadow-lg mb-12" loading="lazy" />

<section id="foro" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-purple-500 pb-3 inline-block">Foro de las Estrellas: all 21 free nights</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-6">The Foro de las Estrellas (the stage formerly known as Teatro del Pueblo) hosts the big free concerts. There are no tickets — access is first come, first served, so for the international headliners plan to arrive early in the afternoon. No Foro concert is scheduled on Monday the 17th, Monday the 24th or Saturday the 29th.</p>
${foroTableEN}
</section>

<section id="palenque" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-amber-500 pb-3 inline-block">Palenque: all 14 ticketed nights</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-6">The Palenque is the fair's intimate in-the-round venue — the artist performs at the center, just meters from the crowd. It's FENAPO's premium experience and the only part that requires a ticket.</p>
${palenqueTableEN}
<img src="${IMG.palenque}" alt="FENAPO palenque venue in San Luis Potosí" class="w-full rounded-2xl shadow-lg mb-6" loading="lazy" />
</section>

<section id="by-style" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-purple-500 pb-3 inline-block">Pick your night by style</h2>
</div>
<div class="space-y-6">
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">🎤 Pop & international</h3><p class="text-gray-700 text-sm leading-relaxed">Gloria Trevi opens the fair (Fri 7), Yandel Sinfónico (Mon 10), Sin Bandera (Wed 19), Kenia Os (Thu 20) and Katy Perry (Tue 25) — all free at the Foro. At the Palenque: María José (Thu 13), Ha*Ash (Sun 23) and Emmanuel & Mijares (Thu 27).</p></div>
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">🎸 Rock & throwbacks</h3><p class="text-gray-700 text-sm leading-relaxed">Mötley Crüe (Sat 8, Foro, free) is the headline act. At the Palenque, Matute (Fri 14) brings the 80s-90s party.</p></div>
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">🤠 Norteño, banda & regional</h3><p class="text-gray-700 text-sm leading-relaxed">Free at the Foro: Ramón Ayala (Fri 14), Laberinto y los Herederos (Fri 21), Los Huracanes del Norte (Sat 22), Alameños de la Sierra (Fri 28) and Los Tigres del Norte closing the fair (Sun 30). At the Palenque: Remmy Valenzuela (Fri 7), Conjunto Primavera (Sun 9), Pesado e Invasores (Sat 15), Cornelio Vega Jr. (Sun 16), Horóscopos de Durango (Thu 20), Grupo Firme (Fri 21), Marca Registrada (Fri 28), Edén Muñoz (Sat 29) and Julión Álvarez (Sun 30).</p></div>
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">🔥 Corridos & urban</h3><p class="text-gray-700 text-sm leading-relaxed">Free at the Foro: El Bogueto (Wed 12), Xavi (Thu 13), Óscar Maydon (Sat 15), Bizarrap (Tue 18) and Santa Fe Klan (Wed 26). At the Palenque: Luis R. Conríquez (Sat 8).</p></div>
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">🌎 Folk, cumbia & special nights</h3><p class="text-gray-700 text-sm leading-relaxed">Lila Downs (Sun 9) brings Mexican folk to the Foro. Los Acosta (Sun 23) for cumbia dancing. Plus two local-flavor nights: the Potosinazo (Thu 27) featuring homegrown talent and Chihuahua Fest (Sun 16). Tuesday the 11th features an event with "Mexico's biggest influencers".</p></div>
</div>
</section>

<section id="tickets" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-amber-500 pb-3 inline-block">Tickets & access</h2>
</div>
<div class="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6 md:p-8 mb-6">
  <ul class="space-y-3">
    <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">✓</span><span><strong>Foro de las Estrellas:</strong> free, no ticket, first come first served. For Katy Perry, Mötley Crüe and Bizarrap arrive several hours early.</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">✓</span><span><strong>Palenque:</strong> buy only at <strong>fenapo.mx</strong> or <strong>eticket.mx</strong>. Prices vary by artist and section.</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">✓</span><span><strong>Avoid resellers:</strong> entry uses electronic validation and fake tickets are common on big nights.</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">✓</span><span><strong>Fair, rides and parking:</strong> free for the whole 2026 edition.</span></li>
  </ul>
</div>
<p class="text-gray-800 leading-relaxed">Coming from out of town? Hotels, transport and daily budgets are covered in our <a href="/blog/fenapo-2026-guia-preparacion" class="text-purple-700 underline font-semibold">FENAPO 2026 prep guide</a>, and venue details on the <a href="/events/fenapo-2026" class="text-purple-700 underline font-semibold">event page</a>.</p>
</section>

<section id="faq" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-purple-500 pb-3 inline-block">FAQ</h2>
</div>
<div class="space-y-4">
  ${faqEN.mainEntity
    .map(
      (q) => `<details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">${q.name}<span class="text-purple-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">${q.acceptedAnswer.text}</p></details>`
    )
    .join('\n  ')}
</div>
</section>

<div class="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-center">
  <p class="text-white text-lg font-bold mb-2">Want each week's fair plan in your inbox?</p>
  <p class="text-purple-100 text-sm mb-4">Every Monday we send the week's best events in SLP — free.</p>
  <a href="/subscribe" class="inline-block bg-white text-purple-700 font-bold px-6 py-3 rounded-full hover:bg-purple-50 transition-colors">Subscribe to San Luis Way Weekly</a>
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
  tags: ['fenapo', 'fenapo-2026', 'cartel', 'palenque', 'conciertos', 'events', 'san-luis-potosi', 'katy-perry', 'grupo-firme', 'feria'],

  title: 'FENAPO 2026 Full Lineup: Every Artist, Date by Date (Foro de las Estrellas + Palenque)',
  excerpt: 'All 35 nights of FENAPO 2026 confirmed: Katy Perry, Mötley Crüe and Bizarrap free at the Foro de las Estrellas; Grupo Firme, Julión Álvarez and Ha*Ash at the Palenque. Full calendars, ticket info and which nights to pick.',
  content: contentEN,
  meta_title: 'FENAPO 2026 Lineup: All Artists & Dates | Free Concerts + Palenque',
  meta_description: 'Complete FENAPO 2026 lineup: 21 free Foro de las Estrellas concerts (Katy Perry, Mötley Crüe, Bizarrap) + 14 Palenque nights (Grupo Firme, Julión Álvarez). Dates & tickets.',

  title_es: 'Cartel FENAPO 2026 Completo: Todos los Artistas y Fechas (Foro de las Estrellas + Palenque)',
  excerpt_es: 'Las 35 noches de la FENAPO 2026 confirmadas: Katy Perry, Mötley Crüe y Bizarrap gratis en el Foro de las Estrellas; Grupo Firme, Julión Álvarez y Ha*Ash en el Palenque. Calendarios completos, boletos y qué noches elegir.',
  content_es: contentES,
  meta_title_es: 'Cartel FENAPO 2026: Todos los Artistas y Fechas | Conciertos Gratis + Palenque',
  meta_description_es: 'Cartel completo FENAPO 2026: 21 conciertos gratis en el Foro de las Estrellas (Katy Perry, Mötley Crüe, Bizarrap) + 14 noches de Palenque (Grupo Firme, Julión Álvarez). Fechas y boletos.',

  title_de: 'FENAPO 2026: Das komplette Line-up — alle Künstler und Termine',
  excerpt_de: 'Alle 35 Nächte der FENAPO 2026: Katy Perry, Mötley Crüe und Bizarrap gratis im Foro de las Estrellas; Grupo Firme und Julión Álvarez im Palenque. Komplette Kalender und Ticket-Infos.',
  content_de: contentEN,
  meta_title_de: 'FENAPO 2026 Line-up: Alle Künstler & Termine | Gratis-Konzerte + Palenque',
  meta_description_de: 'Komplettes FENAPO-2026-Line-up: 21 Gratis-Konzerte im Foro de las Estrellas (Katy Perry, Mötley Crüe, Bizarrap) + 14 Palenque-Nächte. Termine & Tickets.',

  title_ja: 'FENAPO 2026 完全ラインナップ：全アーティストと日程（フォロ・デ・ラス・エストレージャス＋パレンケ）',
  excerpt_ja: 'FENAPO 2026の全35夜が確定：ケイティ・ペリー、モトリー・クルー、Bizarrapが無料のフォロ・デ・ラス・エストレージャスに登場。パレンケにはグルーポ・フィルメ、フリオン・アルバレスら。完全カレンダーとチケット情報。',
  content_ja: contentEN,
  meta_title_ja: 'FENAPO 2026 ラインナップ：全アーティスト・日程 | 無料コンサート＋パレンケ',
  meta_description_ja: 'FENAPO 2026完全ラインナップ：フォロ・デ・ラス・エストレージャス無料公演21夜（ケイティ・ペリー、モトリー・クルー、Bizarrap）＋パレンケ14夜。日程・チケット情報。',
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
