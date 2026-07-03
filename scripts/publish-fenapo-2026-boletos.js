// Publishes "FENAPO 2026: Boletos, Precios y Cómo Llegar" — ES-first service
// guide targeting "fenapo 2026 boletos" / "palenque fenapo 2026" queries.
// Facts verified July 2026 against: fenapo.slp.gob.mx (official announcements
// June 3 & 5, 2026 — slpfastticket.com is THE official ticketing platform),
// El Universal SLP (Palenque zone prices + Foro Terrazas prices), FM Globo
// (showtimes), Moovit (current transit routes near the fairgrounds).
// EDITORIAL RULE (2026-07-03): no prior-year FENAPO data anywhere in this
// post — every FENAPO fact must be confirmed for the 2026 edition.
// NOTE: eticket.mx is NOT a sales channel for FENAPO 2026 — our earlier
// artistas post's fact-check flagged that claim FALSE; this post corrects it.
require('dotenv').config({ path: '.env' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const SLUG = 'fenapo-2026-boletos-precios-como-llegar';

const IMG = {
  hero: '/images/events/fenapo-fair.jpg',
};

// ── Palenque prices by zone (El Universal SLP, July 3, 2026) ────────────────
const PALENQUE_PRICES = [
  ['General', '$700 – $900 MXN', 'Grupo Firme: $1,200 · Emmanuel & Mijares: $1,300'],
  ['Dorada', '$1,100 – $3,600 MXN', 'Tope: Julión Álvarez (clausura, 30 ago)'],
  ['VIP', '$1,700 – $4,600 MXN', ''],
  ['Diamante', '$1,900 – $5,500 MXN', 'Tope: Julión Álvarez (clausura, 30 ago)'],
];

// ── Foro Terrazas sample prices (El Universal SLP, June 2026) ───────────────
const TERRAZAS = [
  ['Katy Perry (25 ago)', '$4,500 MXN', '$6,500 MXN'],
  ['Mötley Crüe (8 ago)', '$3,500 MXN', '$4,500 MXN'],
  ['Yandel Sinfónico (10 ago)', '$2,500 MXN', '$3,900 MXN'],
  ['Kenia Os (20 ago)', '$2,000 MXN', '$3,000 MXN'],
  ['Bizarrap (18 ago)', '$2,000 MXN', '$2,900 MXN'],
];

function priceTable(rows, headers, accent) {
  const body = rows
    .map(
      (cols, i) => `
      <tr class="${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}">${cols
        .map((c, j) => `
        <td class="px-4 py-3 text-sm ${j === 0 ? 'font-semibold text-gray-900' : 'text-gray-700'}">${c}</td>`)
        .join('')}
      </tr>`
    )
    .join('');
  return `
<div class="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-4">
  <table class="min-w-full divide-y divide-gray-200">
    <caption class="sr-only">${headers.caption}</caption>
    <thead class="${accent}">
      <tr>${headers.cols
        .map((h) => `
        <th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">${h}</th>`)
        .join('')}
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-100">${body}
    </tbody>
  </table>
</div>`;
}

const palenqueTableES = priceTable(PALENQUE_PRICES, { caption: 'Precios por zona del Palenque FENAPO 2026', cols: ['Zona', 'Rango de precio', 'Excepciones / notas'] }, 'bg-amber-600');
const palenqueTableEN = priceTable(PALENQUE_PRICES.map(([z, p, n]) => [z, p.replace('MXN', 'MXN'), n.replace('Tope:', 'Top price:').replace('clausura, 30 ago', 'closing night, Aug 30').replace('Grupo Firme: $1,200 · Emmanuel & Mijares: $1,300', 'Grupo Firme: $1,200 · Emmanuel & Mijares: $1,300')]), { caption: 'FENAPO 2026 Palenque prices by zone', cols: ['Zone', 'Price range', 'Exceptions / notes'] }, 'bg-amber-600');
const terrazasTableES = priceTable(TERRAZAS, { caption: 'Precios de Terrazas del Foro de las Estrellas FENAPO 2026', cols: ['Concierto', 'Terraza Verde', 'Terraza Blanca'] }, 'bg-purple-700');
const terrazasTableEN = priceTable(TERRAZAS.map(([a, v, b]) => [a.replace('ago', 'Aug'), v, b]), { caption: 'FENAPO 2026 Foro de las Estrellas Terraza prices', cols: ['Concert', 'Terraza Verde', 'Terraza Blanca'] }, 'bg-purple-700');

// ── FAQ JSON-LD ─────────────────────────────────────────────────────────────
const faqES = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cuánto cuesta la entrada a la FENAPO 2026?',
      acceptedAnswer: { '@type': 'Answer', text: 'Nada. Por anuncio del Gobierno del Estado, la entrada al recinto, los juegos mecánicos, el estacionamiento y los 21 conciertos del Foro de las Estrellas son gratuitos del 7 al 30 de agosto de 2026. Solo el Palenque y las Terrazas opcionales del Foro requieren boleto.' },
    },
    {
      '@type': 'Question',
      name: '¿Dónde se compran los boletos del Palenque de la FENAPO 2026?',
      acceptedAnswer: { '@type': 'Answer', text: 'Únicamente en slpfastticket.com (la plataforma oficial anunciada por el Gobierno del Estado el 3 de junio de 2026) o en la taquilla del Palenque, abierta de 10:00 a 18:00 horas. Hay un límite de 4 boletos por persona. El Gobierno advirtió que se han detectado páginas piratas: no compres en reventa ni en otras boleteras.' },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto cuestan los boletos del Palenque de la FENAPO 2026?',
      acceptedAnswer: { '@type': 'Answer', text: 'Según El Universal San Luis Potosí, la zona General va de $700 a $900 MXN (con excepciones: Grupo Firme $1,200 y Emmanuel & Mijares $1,300), Dorada de $1,100 a $3,600, VIP de $1,700 a $4,600 y Diamante de $1,900 a $5,500. El precio exacto depende del artista.' },
    },
    {
      '@type': 'Question',
      name: '¿El concierto de Katy Perry en la FENAPO 2026 es gratis?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sí. El acceso general al Foro de las Estrellas es gratuito y por orden de llegada, incluido Katy Perry (25 de agosto). Opcionalmente puedes pagar una Terraza con asiento numerado: Terraza Verde $4,500 MXN o Terraza Blanca $6,500 MXN para esa fecha, en venta en slpfastticket.com.' },
    },
    {
      '@type': 'Question',
      name: '¿Dónde está el recinto ferial de la FENAPO y cómo llego?',
      acceptedAnswer: { '@type': 'Answer', text: 'En Av. Fco. Martínez de la Vega No. 255, C.P. 78384, a unos 8 km del Centro Histórico de San Luis Potosí. En Uber/DiDi desde el Centro el viaje ronda $80–$150 MXN. El estacionamiento del recinto es gratuito. En transporte público, la Línea 3 de MetroRed y varias rutas urbanas tienen parada cerca del recinto; el esquema especial de rutas para la feria 2026 aún no se publica.' },
    },
    {
      '@type': 'Question',
      name: '¿Hay hoteles cerca de la FENAPO?',
      acceptedAnswer: { '@type': 'Answer', text: 'Los más cercanos están en el corredor industrial/carretera 57: TRYP by Wyndham e ibis San Luis Potosí (7–8 minutos en auto) y City Express by Marriott Zona Industrial. Holiday Inn Express, sobre el corredor de Av. Juárez, es otra base práctica. La zona inmediata al recinto no es para caminar de noche: mejor hospédate en estos corredores o en el Centro y muévete en DiDi/Uber.' },
    },
  ],
};

const faqEN = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does FENAPO 2026 admission cost?',
      acceptedAnswer: { '@type': 'Answer', text: 'Nothing. By state government announcement, fairground entry, mechanical rides, parking and all 21 Foro de las Estrellas concerts are free from August 7–30, 2026. Only the Palenque and the optional Foro Terrazas require a ticket.' },
    },
    {
      '@type': 'Question',
      name: 'Where do I buy FENAPO 2026 Palenque tickets?',
      acceptedAnswer: { '@type': 'Answer', text: 'Only at slpfastticket.com — the official platform named by the SLP state government on June 3, 2026 — or at the Palenque box office, open 10:00–18:00, limit 4 tickets per person. The government has warned about pirate pages: do not buy from resellers or any other ticketing site.' },
    },
    {
      '@type': 'Question',
      name: 'How much are FENAPO 2026 Palenque tickets?',
      acceptedAnswer: { '@type': 'Answer', text: 'Per El Universal San Luis Potosí: General runs $700–$900 MXN (exceptions: Grupo Firme $1,200, Emmanuel & Mijares $1,300), Dorada $1,100–$3,600, VIP $1,700–$4,600 and Diamante $1,900–$5,500. Exact pricing depends on the artist.' },
    },
    {
      '@type': 'Question',
      name: 'Is Katy Perry at FENAPO 2026 really free?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. General access to the Foro de las Estrellas is free, first come first served — including Katy Perry on August 25. Optional paid Terraza seating exists: Terraza Verde $4,500 MXN or Terraza Blanca $6,500 MXN for that night, sold at slpfastticket.com.' },
    },
    {
      '@type': 'Question',
      name: 'Where is the FENAPO fairgrounds and how do I get there?',
      acceptedAnswer: { '@type': 'Answer', text: 'At Av. Fco. Martínez de la Vega No. 255, C.P. 78384, about 8 km from the Centro Histórico of San Luis Potosí. Uber/DiDi from the Centro runs roughly $80–$150 MXN, and fairground parking is free. By public transit, MetroRed Line 3 and several city bus routes stop near the fairgrounds; the special fair-season route scheme for 2026 has not been published yet.' },
    },
  ],
};

// ── Content ES (primary) ────────────────────────────────────────────────────
const contentES = `<div class="max-w-none">

<div class="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-6 mb-10">
  <p class="font-bold text-amber-900 mb-3">En esta guía</p>
  <nav class="grid sm:grid-cols-2 gap-2 text-amber-800 text-sm">
    <a href="#resumen" class="hover:underline">→ Lo esencial en 60 segundos</a>
    <a href="#gratis" class="hover:underline">→ Qué es gratis (casi todo)</a>
    <a href="#palenque-boletos" class="hover:underline">→ Boletos del Palenque: dónde y cuánto</a>
    <a href="#terrazas" class="hover:underline">→ Terrazas del Foro (opcional, de pago)</a>
    <a href="#como-llegar" class="hover:underline">→ Cómo llegar al recinto</a>
    <a href="#horarios" class="hover:underline">→ Horarios</a>
    <a href="#hoteles" class="hover:underline">→ Hoteles cerca de la FENAPO</a>
    <a href="#faq" class="hover:underline">→ Preguntas frecuentes</a>
  </nav>
  <p class="mt-4 text-sm text-amber-700 italic">Última actualización: 3 de julio de 2026 · Precios verificados contra anuncios oficiales y prensa de junio–julio 2026</p>
</div>

<p class="text-xl leading-relaxed text-gray-800 mb-8 font-medium">
  <strong>La FENAPO 2026 (7–30 de agosto) es gratis en casi todo</strong>: entrada, juegos mecánicos, estacionamiento y los 21 conciertos del Foro de las Estrellas — sí, incluidos Katy Perry y Mötley Crüe. Lo único que se paga es el Palenque (y, si quieres asiento numerado en el Foro, las Terrazas opcionales). Aquí está todo lo verificado: dónde comprar sin caer en páginas piratas, cuánto cuesta cada zona y cómo llegar al recinto. Para el calendario completo de artistas, ve a <a href="/blog/fenapo-2026-artistas-cartel-completo" class="text-purple-700 underline font-semibold">nuestra guía del cartel, fecha por fecha</a>.
</p>

<section id="resumen" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-amber-500 pb-3 inline-block">Lo esencial en 60 segundos</h2>
</div>
<div class="speakable bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl p-6 md:p-8 mb-6">
  <ul class="space-y-3">
    <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">•</span><span><strong>Entrada, juegos y estacionamiento:</strong> gratis del 7 al 30 de agosto, por anuncio del Gobierno del Estado.</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">•</span><span><strong>Foro de las Estrellas:</strong> gratis, sin boleto, por orden de llegada (21 conciertos).</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">•</span><span><strong>Palenque:</strong> boleto solo en <strong>slpfastticket.com</strong> o en la taquilla del Palenque (10:00–18:00). Límite: 4 boletos por persona.</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">•</span><span><strong>Precios Palenque:</strong> General $700–$900 · Dorada $1,100–$3,600 · VIP $1,700–$4,600 · Diamante $1,900–$5,500 MXN, según el artista.</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">•</span><span><strong>Recinto:</strong> Av. Fco. Martínez de la Vega No. 255, a ~8 km del Centro. Uber/DiDi desde el Centro: ~$80–$150 MXN.</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-red-600 mt-1">⚠</span><span><strong>Ojo:</strong> el Gobierno ya detectó <strong>páginas piratas</strong> vendiendo boletos falsos. La única boletera oficial es SLP Fast Ticket.</span></li>
  </ul>
</div>
</section>

<section id="gratis" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-green-500 pb-3 inline-block">Qué es gratis (casi todo)</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-6">El Gobierno del Estado confirmó el esquema de gratuidad para la FENAPO 2026: no se cobra la entrada al recinto, los juegos mecánicos tienen acceso gratuito durante toda la feria y el estacionamiento tampoco cuesta. Los conciertos del Foro de las Estrellas (el escenario antes conocido como Teatro del Pueblo) son gratuitos y sin boleto: el acceso general es por orden de llegada.</p>
<div class="bg-green-50 border-2 border-green-200 rounded-2xl p-6 mb-6">
  <ul class="space-y-2 text-green-900">
    <li>✓ Entrada al recinto ferial</li>
    <li>✓ Juegos mecánicos (toda la feria)</li>
    <li>✓ Estacionamiento</li>
    <li>✓ Los 21 conciertos del Foro de las Estrellas — Katy Perry (25 ago), Mötley Crüe (8 ago), Bizarrap (18 ago), Los Tigres del Norte (30 ago) y más</li>
  </ul>
  <p class="text-sm text-green-800 mt-4">Lo único con costo: el <a href="#palenque-boletos" class="underline font-semibold">Palenque</a> y las <a href="#terrazas" class="underline font-semibold">Terrazas opcionales del Foro</a>.</p>
</div>
<p class="text-gray-800 leading-relaxed">Para los headliners fuertes (Katy Perry, Mötley Crüe, Bizarrap) conviene llegar con varias horas de anticipación: sin boletos, el aforo se llena por orden de llegada.</p>
</section>

<section id="palenque-boletos" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-amber-500 pb-3 inline-block">Boletos del Palenque: dónde comprar y cuánto cuestan</h2>
</div>
<div class="bg-red-50 border-l-4 border-red-500 rounded-r-xl p-6 mb-6">
  <p class="text-red-900 leading-relaxed"><strong>⚠️ Solo hay una boletera oficial: slpfastticket.com.</strong> Así lo anunció el Gobierno del Estado el 3 de junio de 2026 al arrancar la venta, y lo reiteró el 5 de junio advirtiendo que <em>"se han detectado páginas piratas que buscan cometer fraudes"</em>. No compres en reventa, perfiles de redes sociales ni en otras boleteras — ninguna otra plataforma tiene inventario oficial de FENAPO 2026.</p>
</div>
<p class="text-gray-800 leading-relaxed mb-6">La venta arrancó el 3 de junio de 2026 con estas reglas oficiales:</p>
<ul class="space-y-3 mb-8">
  <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">✓</span><span><strong>En línea:</strong> <a href="https://slpfastticket.com" target="_blank" rel="noopener nofollow" class="text-purple-700 underline font-semibold">slpfastticket.com</a> — los boletos se liberan de manera escalonada, con disponibilidad desde la fila A.</span></li>
  <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">✓</span><span><strong>En taquilla:</strong> la taquilla del Palenque, en el recinto ferial, abre de <strong>10:00 a 18:00 horas</strong>, con vigilancia de la Guardia Civil Estatal.</span></li>
  <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">✓</span><span><strong>Límite:</strong> 4 boletos por persona.</span></li>
</ul>
<h3 class="text-xl font-bold text-gray-900 mb-3">Precios por zona</h3>
<p class="text-gray-800 leading-relaxed mb-4">El costo depende del artista y de la zona. Estos son los rangos publicados por El Universal San Luis Potosí (julio 2026):</p>
${palenqueTableES}
<p class="text-sm text-gray-600 italic mb-6">Rangos según El Universal SLP; el precio exacto de cada noche aparece al seleccionar el evento en slpfastticket.com. Las 14 fechas del Palenque (Grupo Firme 21 ago, Julión Álvarez 30 ago, Ha*Ash 23 ago…) están en <a href="/blog/fenapo-2026-artistas-cartel-completo" class="text-purple-700 underline">nuestro calendario completo</a>.</p>
</section>

<img src="${IMG.hero}" alt="Recinto Ferial de la FENAPO en San Luis Potosí de noche" class="w-full rounded-2xl shadow-lg mb-12" loading="lazy" />

<section id="terrazas" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-purple-500 pb-3 inline-block">Terrazas del Foro: asiento pagado en conciertos gratis</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-6">El acceso general al Foro de las Estrellas es y seguirá siendo gratuito. Pero si prefieres no formarte horas antes, la feria vende dos zonas de <strong>Terrazas</strong> con asiento numerado, baños exclusivos, servicio de meseros, entrada independiente, área techada y —en general— acceso al after party, según El Universal SLP. Se venden en slpfastticket.com y en la taquilla del Palenque. Precios de las noches más fuertes:</p>
${terrazasTableES}
<p class="text-sm text-gray-600 italic">Precios publicados por El Universal SLP (junio 2026); para el resto del cartel las terrazas van de ~$200 a $600 MXN por sección según la misma fuente. Sujetos a cambio — verifica en slpfastticket.com.</p>
</section>

<section id="como-llegar" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-blue-500 pb-3 inline-block">Cómo llegar al recinto ferial</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-6">La dirección oficial es <strong>Av. Fco. Martínez de la Vega No. 255, C.P. 78384, San Luis Potosí</strong> — unos 8 km al oriente del Centro Histórico, en la zona de la colonia Satélite.</p>
<div class="space-y-4 mb-6">
  <div class="bg-blue-50 rounded-xl p-5"><h3 class="font-bold text-gray-900 mb-1">🚗 En auto</h3><p class="text-sm text-gray-700 leading-relaxed">El estacionamiento del recinto es gratuito, pero los fines de semana se llena temprano — nuestra recomendación (de la <a href="/blog/fenapo-2026-guia-preparacion" class="text-blue-700 underline">guía de preparación</a>): llega antes de las 7 PM y cuenta con 30–45 minutos de fila para salir después del concierto estelar.</p></div>
  <div class="bg-blue-50 rounded-xl p-5"><h3 class="font-bold text-gray-900 mb-1">📱 Uber / DiDi</h3><p class="text-sm text-gray-700 leading-relaxed">La opción más práctica de noche. Desde el Centro Histórico el viaje ronda <strong>$80–$150 MXN</strong> (estimado de nuestra guía de preparación; sube con tarifa dinámica al salir los conciertos).</p></div>
  <div class="bg-blue-50 rounded-xl p-5"><h3 class="font-bold text-gray-900 mb-1">🚌 Transporte público</h3><p class="text-sm text-gray-700 leading-relaxed">La <strong>Línea 3 de MetroRed</strong> tiene parada en las inmediaciones del recinto (cruce de Av. de las Torres con Circuito Potosí) y varias rutas urbanas —entre ellas las rutas 7, 8 y 21— pasan cerca, con parada sobre Fco. Martínez de la Vega, según los datos de tránsito de Moovit. El Gobierno del Estado suele publicar un esquema especial de rutas para la temporada de feria; el de 2026 aún no se anuncia — actualizaremos esta guía cuando salga.</p></div>
</div>
</section>

<section id="horarios" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-blue-500 pb-3 inline-block">Horarios</h2>
</div>
<ul class="space-y-3 mb-6">
  <li class="flex items-start gap-2 text-gray-800"><span class="text-blue-600 mt-1">•</span><span><strong>Feria:</strong> del viernes 7 al domingo 30 de agosto de 2026. El horario oficial del recinto para 2026 no se ha publicado; lo agregaremos cuando el Gobierno lo confirme.</span></li>
  <li class="flex items-start gap-2 text-gray-800"><span class="text-blue-600 mt-1">•</span><span><strong>Foro de las Estrellas:</strong> los conciertos suelen comenzar entre las 20:00 y 22:00 horas, según FM Globo (horarios sujetos a ajuste).</span></li>
  <li class="flex items-start gap-2 text-gray-800"><span class="text-blue-600 mt-1">•</span><span><strong>Palenque:</strong> los shows arrancan generalmente después de las 23:00 horas, según la misma fuente.</span></li>
  <li class="flex items-start gap-2 text-gray-800"><span class="text-blue-600 mt-1">•</span><span><strong>Taquilla del Palenque:</strong> 10:00 a 18:00 horas.</span></li>
</ul>
<p class="text-gray-800 leading-relaxed">¿Quieres saber qué más pasa en la ciudad esa semana? Revisa <a href="/events/this-week" class="text-purple-700 underline font-semibold">los eventos de esta semana en SLP</a>.</p>
</section>

<section id="hoteles" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-sky-500 pb-3 inline-block">Hoteles cerca de la FENAPO</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-6">Un matiz importante: la zona inmediata al recinto no es para caminar de noche. La jugada correcta es hospedarte en el corredor industrial/carretera 57 (lo más cercano en auto) o en el Centro Histórico y moverte en DiDi/Uber. Los más cercanos:</p>
<ul class="space-y-3 mb-6">
  <li class="flex items-start gap-2 text-gray-800"><span class="text-sky-600 mt-1">•</span><span><strong>TRYP by Wyndham San Luis Potosí</strong> — a unos 7 minutos en auto del recinto, corredor industrial.</span></li>
  <li class="flex items-start gap-2 text-gray-800"><span class="text-sky-600 mt-1">•</span><span><strong>ibis San Luis Potosí</strong> — a unos 8 minutos, en la orilla de la Zona Industrial.</span></li>
  <li class="flex items-start gap-2 text-gray-800"><span class="text-sky-600 mt-1">•</span><span><strong>City Express by Marriott Zona Industrial</strong> — mismo corredor 57, a 7–8 minutos.</span></li>
  <li class="flex items-start gap-2 text-gray-800"><span class="text-sky-600 mt-1">•</span><span><strong>Holiday Inn Express</strong> — corredor de Av. Juárez, base práctica clásica para la feria.</span></li>
</ul>
<p class="text-gray-800 leading-relaxed">Precios por zona, opciones en el Centro y todo el panorama de hospedaje están en nuestra guía <a href="/blog/where-to-stay-san-luis-potosi-2026" class="text-purple-700 underline font-semibold">Dónde hospedarte en San Luis Potosí (2026)</a>.</p>
</section>

<section id="faq" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-amber-500 pb-3 inline-block">Preguntas frecuentes</h2>
</div>
<div class="space-y-4">
  ${faqES.mainEntity
    .map(
      (q) => `<details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">${q.name}<span class="text-amber-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">${q.acceptedAnswer.text}</p></details>`
    )
    .join('\n  ')}
</div>
</section>

<section id="fuentes" class="mb-8 scroll-mt-8">
<div class="not-prose mb-4">
  <h2 class="text-2xl font-bold text-gray-900 mb-3">Fuentes</h2>
</div>
<ul class="text-sm text-gray-600 leading-relaxed space-y-1 list-disc pl-5">
  <li><a href="https://fenapo.slp.gob.mx/noticias/2026/6/3/arranca-venta-de-boletos-para-el-palenque-fenapo-2026/" target="_blank" rel="noopener" class="underline">Gobierno del Estado de SLP — Arranca venta de boletos para el Palenque FENAPO 2026 (3 jun 2026)</a>: slpfastticket.com como plataforma oficial, taquilla 10:00–18:00, límite de 4 boletos, liberación escalonada.</li>
  <li><a href="https://fenapo.slp.gob.mx/noticias/2026/6/5/gobierno-estatal-mantiene-disponibles-boletos-para-el-palenque-fenapo-2026/" target="_blank" rel="noopener" class="underline">Gobierno del Estado de SLP — Boletos disponibles para el Palenque (5 jun 2026)</a>: advertencia de páginas piratas, taquilla vigilada por la Guardia Civil Estatal.</li>
  <li><a href="https://sanluis.eluniversal.com.mx/mas-de-san-luis/palenque-fenapo-2026-lista-completa-de-artistas-fechas-y-costo-de-boletos/" target="_blank" rel="noopener" class="underline">El Universal SLP — Palenque FENAPO 2026: artistas, fechas y costo de boletos (jul 2026)</a>: rangos de precio por zona.</li>
  <li><a href="https://sanluis.eluniversal.com.mx/mas-de-san-luis/katy-perry-y-motley-crue-en-slp-costo-de-las-terrazas-en-la-fenapo-2026-para-los-conciertos/" target="_blank" rel="noopener" class="underline">El Universal SLP — Costo de las Terrazas del Foro (jun 2026)</a>: precios y amenidades de Terraza Verde y Blanca.</li>
  <li><a href="https://fenapo.slp.gob.mx/" target="_blank" rel="noopener" class="underline">fenapo.slp.gob.mx</a>: fechas 7–30 de agosto, dirección oficial del recinto, gratuidad de entrada, juegos y estacionamiento.</li>
  <li><a href="https://fmglobo.com/news/2026/5/27/fenapo-2026-horarios-oficiales-escenarios-cartel-completo-por-dia-katy-perry-kenia-os-bizarrap-mas-24190.html" target="_blank" rel="noopener" class="underline">FM Globo (27 may 2026)</a>: horarios aproximados de Foro (20:00–22:00) y Palenque (después de 23:00).</li>
  <li><a href="https://moovitapp.com/index/es-419/transporte_p%C3%BAblico-FENAPO-San_Luis_Potos%C3%AD-site_18756415-3742" target="_blank" rel="noopener nofollow" class="underline">Moovit — Cómo llegar a FENAPO en transporte público</a>: rutas urbanas y parada de MetroRed Línea 3 cerca del recinto (datos de tránsito vigentes).</li>
</ul>
<p class="text-sm text-gray-600 leading-relaxed mt-3">Si el Gobierno del Estado publica el horario del recinto, las rutas 2026 o cambios de precios, actualizaremos esta guía.</p>
</section>

<div class="bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl p-8 text-center">
  <p class="text-white text-lg font-bold mb-2">¿Quieres el plan de cada semana de la feria en tu correo?</p>
  <p class="text-amber-100 text-sm mb-4">Cada lunes mandamos los eventos de la semana en SLP — gratis.</p>
  <a href="/subscribe" class="inline-block bg-white text-orange-700 font-bold px-6 py-3 rounded-full hover:bg-amber-50 transition-colors">Suscríbete a San Luis Way Weekly</a>
</div>

<script type="application/ld+json">
${JSON.stringify(faqES, null, 2)}
</script>

</div>`;

// ── Content EN (adaptation) ─────────────────────────────────────────────────
const contentEN = `<div class="max-w-none">

<div class="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-6 mb-10">
  <p class="font-bold text-amber-900 mb-3">In this guide</p>
  <nav class="grid sm:grid-cols-2 gap-2 text-amber-800 text-sm">
    <a href="#overview" class="hover:underline">→ The essentials in 60 seconds</a>
    <a href="#free" class="hover:underline">→ What's free (almost everything)</a>
    <a href="#palenque-tickets" class="hover:underline">→ Palenque tickets: where & how much</a>
    <a href="#terrazas" class="hover:underline">→ Foro Terrazas (optional paid seating)</a>
    <a href="#getting-there" class="hover:underline">→ Getting to the fairgrounds</a>
    <a href="#hours" class="hover:underline">→ Hours</a>
    <a href="#hotels" class="hover:underline">→ Hotels near FENAPO</a>
    <a href="#faq" class="hover:underline">→ FAQ</a>
  </nav>
  <p class="mt-4 text-sm text-amber-700 italic">Last updated: July 3, 2026 · Prices verified against official announcements and June–July 2026 press</p>
</div>

<p class="text-xl leading-relaxed text-gray-800 mb-8 font-medium">
  <strong>FENAPO 2026 (August 7–30) is free for almost everything</strong>: entry, mechanical rides, parking and all 21 Foro de las Estrellas concerts — yes, including Katy Perry and Mötley Crüe. The only things you pay for are the Palenque and, if you want a numbered seat at the Foro, the optional Terrazas. Here is everything verified: where to buy without landing on a pirate page, what each zone costs, and how to reach the fairgrounds. For the full artist calendar, see <a href="/blog/fenapo-2026-artistas-cartel-completo" class="text-purple-700 underline font-semibold">our date-by-date lineup guide</a>.
</p>

<section id="overview" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-amber-500 pb-3 inline-block">The essentials in 60 seconds</h2>
</div>
<div class="speakable bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl p-6 md:p-8 mb-6">
  <ul class="space-y-3">
    <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">•</span><span><strong>Entry, rides and parking:</strong> free August 7–30, by state government announcement.</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">•</span><span><strong>Foro de las Estrellas:</strong> free, no ticket, first come first served (21 concerts).</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">•</span><span><strong>Palenque:</strong> tickets only at <strong>slpfastticket.com</strong> or the Palenque box office (10:00–18:00). Limit: 4 tickets per person.</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">•</span><span><strong>Palenque prices:</strong> General $700–$900 · Dorada $1,100–$3,600 · VIP $1,700–$4,600 · Diamante $1,900–$5,500 MXN, depending on the artist.</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">•</span><span><strong>Fairgrounds:</strong> Av. Fco. Martínez de la Vega No. 255, ~8 km from the Centro. Uber/DiDi from the Centro: ~$80–$150 MXN.</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-red-600 mt-1">⚠</span><span><strong>Warning:</strong> the government has already detected <strong>pirate pages</strong> selling fake tickets. SLP Fast Ticket is the only official seller.</span></li>
  </ul>
</div>
</section>

<section id="free" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-green-500 pb-3 inline-block">What's free (almost everything)</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-6">The state government confirmed the free-access scheme for FENAPO 2026: no charge to enter the fairgrounds, mechanical rides are free for the entire fair, and parking costs nothing either. Concerts at the Foro de las Estrellas (the stage formerly known as Teatro del Pueblo) are free and unticketed — general access is first come, first served.</p>
<div class="bg-green-50 border-2 border-green-200 rounded-2xl p-6 mb-6">
  <ul class="space-y-2 text-green-900">
    <li>✓ Fairground entry</li>
    <li>✓ Mechanical rides (all fair long)</li>
    <li>✓ Parking</li>
    <li>✓ All 21 Foro de las Estrellas concerts — Katy Perry (Aug 25), Mötley Crüe (Aug 8), Bizarrap (Aug 18), Los Tigres del Norte (Aug 30) and more</li>
  </ul>
  <p class="text-sm text-green-800 mt-4">The only paid parts: the <a href="#palenque-tickets" class="underline font-semibold">Palenque</a> and the <a href="#terrazas" class="underline font-semibold">optional Foro Terrazas</a>.</p>
</div>
<p class="text-gray-800 leading-relaxed">For the biggest headliners (Katy Perry, Mötley Crüe, Bizarrap) plan to arrive several hours early — with no tickets, capacity fills strictly by arrival order.</p>
</section>

<section id="palenque-tickets" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-amber-500 pb-3 inline-block">Palenque tickets: where to buy and what they cost</h2>
</div>
<div class="bg-red-50 border-l-4 border-red-500 rounded-r-xl p-6 mb-6">
  <p class="text-red-900 leading-relaxed"><strong>⚠️ There is only one official ticketing platform: slpfastticket.com.</strong> The SLP state government named it when sales opened on June 3, 2026, and repeated it on June 5 with an explicit warning that <em>"pirate pages attempting fraud have been detected"</em>. Do not buy from resellers, social media profiles or any other ticketing site — no other platform carries official FENAPO 2026 inventory.</p>
</div>
<p class="text-gray-800 leading-relaxed mb-6">Sales opened June 3, 2026 under these official rules:</p>
<ul class="space-y-3 mb-8">
  <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">✓</span><span><strong>Online:</strong> <a href="https://slpfastticket.com" target="_blank" rel="noopener nofollow" class="text-purple-700 underline font-semibold">slpfastticket.com</a> — tickets are released in stages, with availability from row A.</span></li>
  <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">✓</span><span><strong>In person:</strong> the Palenque box office at the fairgrounds, open <strong>10:00–18:00</strong>, with Guardia Civil Estatal security on site.</span></li>
  <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">✓</span><span><strong>Limit:</strong> 4 tickets per person.</span></li>
</ul>
<h3 class="text-xl font-bold text-gray-900 mb-3">Prices by zone</h3>
<p class="text-gray-800 leading-relaxed mb-4">Cost depends on the artist and the zone. These are the ranges published by El Universal San Luis Potosí (July 2026):</p>
${palenqueTableEN}
<p class="text-sm text-gray-600 italic mb-6">Ranges per El Universal SLP; each night's exact price shows when you select the event on slpfastticket.com. All 14 Palenque dates (Grupo Firme Aug 21, Julión Álvarez Aug 30, Ha*Ash Aug 23…) are in <a href="/blog/fenapo-2026-artistas-cartel-completo" class="text-purple-700 underline">our full calendar</a>.</p>
</section>

<img src="${IMG.hero}" alt="FENAPO fairgrounds in San Luis Potosí at night" class="w-full rounded-2xl shadow-lg mb-12" loading="lazy" />

<section id="terrazas" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-purple-500 pb-3 inline-block">Foro Terrazas: paid seating at free concerts</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-6">General access to the Foro de las Estrellas is and remains free. But if you'd rather not line up hours ahead, the fair sells two <strong>Terraza</strong> zones with numbered seats, exclusive bathrooms, waiter service, a separate entrance, covered seating and — generally — after-party access, per El Universal SLP. They're sold at slpfastticket.com and the Palenque box office. Prices for the biggest nights:</p>
${terrazasTableEN}
<p class="text-sm text-gray-600 italic">Prices published by El Universal SLP (June 2026); for the rest of the lineup terrazas run roughly $200–$600 MXN per section according to the same source. Subject to change — verify on slpfastticket.com.</p>
</section>

<section id="getting-there" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-blue-500 pb-3 inline-block">Getting to the fairgrounds</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-6">The official address is <strong>Av. Fco. Martínez de la Vega No. 255, C.P. 78384, San Luis Potosí</strong> — about 8 km east of the Centro Histórico, in the Satélite area.</p>
<div class="space-y-4 mb-6">
  <div class="bg-blue-50 rounded-xl p-5"><h3 class="font-bold text-gray-900 mb-1">🚗 By car</h3><p class="text-sm text-gray-700 leading-relaxed">Fairground parking is free, but it fills early on weekends — our advice (from the <a href="/blog/fenapo-2026-guia-preparacion" class="text-blue-700 underline">prep guide</a>): arrive before 7 PM and budget 30–45 minutes to exit after the headline show.</p></div>
  <div class="bg-blue-50 rounded-xl p-5"><h3 class="font-bold text-gray-900 mb-1">📱 Uber / DiDi</h3><p class="text-sm text-gray-700 leading-relaxed">The most practical option at night. From the Centro Histórico a ride runs about <strong>$80–$150 MXN</strong> (our prep-guide estimate; expect surge pricing when concerts let out).</p></div>
  <div class="bg-blue-50 rounded-xl p-5"><h3 class="font-bold text-gray-900 mb-1">🚌 Public transit</h3><p class="text-sm text-gray-700 leading-relaxed"><strong>MetroRed Line 3</strong> has a stop next to the fairgrounds (Av. de las Torres at Circuito Potosí) and several city bus routes — including routes 7, 8 and 21 — pass nearby, with a stop on Fco. Martínez de la Vega, per Moovit transit data. The state government usually publishes a special fair-season route scheme; the 2026 one hasn't been announced yet — we'll update this guide when it is.</p></div>
</div>
</section>

<section id="hours" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-blue-500 pb-3 inline-block">Hours</h2>
</div>
<ul class="space-y-3 mb-6">
  <li class="flex items-start gap-2 text-gray-800"><span class="text-blue-600 mt-1">•</span><span><strong>Fair:</strong> Friday, August 7 through Sunday, August 30, 2026. Official 2026 fairground hours haven't been published; we'll add them once the government confirms.</span></li>
  <li class="flex items-start gap-2 text-gray-800"><span class="text-blue-600 mt-1">•</span><span><strong>Foro de las Estrellas:</strong> concerts typically start between 8:00 and 10:00 PM, per FM Globo (times subject to adjustment).</span></li>
  <li class="flex items-start gap-2 text-gray-800"><span class="text-blue-600 mt-1">•</span><span><strong>Palenque:</strong> shows generally start after 11:00 PM, per the same source.</span></li>
  <li class="flex items-start gap-2 text-gray-800"><span class="text-blue-600 mt-1">•</span><span><strong>Palenque box office:</strong> 10:00 AM – 6:00 PM.</span></li>
</ul>
<p class="text-gray-800 leading-relaxed">Wondering what else is on in the city that week? Check <a href="/events/this-week" class="text-purple-700 underline font-semibold">this week's events in SLP</a>.</p>
</section>

<section id="hotels" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-sky-500 pb-3 inline-block">Hotels near FENAPO</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-6">One important nuance: the area immediately around the fairgrounds is not for walking at night. The right move is to stay on the industrial/Highway 57 corridor (closest by car) or in the Centro Histórico and ride DiDi/Uber. The closest options:</p>
<ul class="space-y-3 mb-6">
  <li class="flex items-start gap-2 text-gray-800"><span class="text-sky-600 mt-1">•</span><span><strong>TRYP by Wyndham San Luis Potosí</strong> — about 7 minutes by car from the fairgrounds, industrial corridor.</span></li>
  <li class="flex items-start gap-2 text-gray-800"><span class="text-sky-600 mt-1">•</span><span><strong>ibis San Luis Potosí</strong> — about 8 minutes, on the edge of the Zona Industrial.</span></li>
  <li class="flex items-start gap-2 text-gray-800"><span class="text-sky-600 mt-1">•</span><span><strong>City Express by Marriott Zona Industrial</strong> — same Highway 57 corridor, 7–8 minutes.</span></li>
  <li class="flex items-start gap-2 text-gray-800"><span class="text-sky-600 mt-1">•</span><span><strong>Holiday Inn Express</strong> — Av. Juárez corridor, the classic practical base for the fair.</span></li>
</ul>
<p class="text-gray-800 leading-relaxed">Prices by area, Centro options and the full lodging picture are in our guide <a href="/blog/where-to-stay-san-luis-potosi-2026" class="text-purple-700 underline font-semibold">Where to Stay in San Luis Potosí (2026)</a>.</p>
</section>

<section id="faq" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-amber-500 pb-3 inline-block">FAQ</h2>
</div>
<div class="space-y-4">
  ${faqEN.mainEntity
    .map(
      (q) => `<details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">${q.name}<span class="text-amber-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">${q.acceptedAnswer.text}</p></details>`
    )
    .join('\n  ')}
</div>
</section>

<section id="sources" class="mb-8 scroll-mt-8">
<div class="not-prose mb-4">
  <h2 class="text-2xl font-bold text-gray-900 mb-3">Sources</h2>
</div>
<ul class="text-sm text-gray-600 leading-relaxed space-y-1 list-disc pl-5">
  <li><a href="https://fenapo.slp.gob.mx/noticias/2026/6/3/arranca-venta-de-boletos-para-el-palenque-fenapo-2026/" target="_blank" rel="noopener" class="underline">SLP State Government — Palenque FENAPO 2026 ticket sales open (Jun 3, 2026)</a>: slpfastticket.com as the official platform, box office 10:00–18:00, 4-ticket limit, staggered release.</li>
  <li><a href="https://fenapo.slp.gob.mx/noticias/2026/6/5/gobierno-estatal-mantiene-disponibles-boletos-para-el-palenque-fenapo-2026/" target="_blank" rel="noopener" class="underline">SLP State Government — Palenque tickets still available (Jun 5, 2026)</a>: pirate-page fraud warning, Guardia Civil Estatal at the box office.</li>
  <li><a href="https://sanluis.eluniversal.com.mx/mas-de-san-luis/palenque-fenapo-2026-lista-completa-de-artistas-fechas-y-costo-de-boletos/" target="_blank" rel="noopener" class="underline">El Universal SLP — Palenque FENAPO 2026: artists, dates and ticket costs (Jul 2026)</a>: price ranges by zone.</li>
  <li><a href="https://sanluis.eluniversal.com.mx/mas-de-san-luis/katy-perry-y-motley-crue-en-slp-costo-de-las-terrazas-en-la-fenapo-2026-para-los-conciertos/" target="_blank" rel="noopener" class="underline">El Universal SLP — Foro Terraza costs (Jun 2026)</a>: Terraza Verde and Blanca prices and amenities.</li>
  <li><a href="https://fenapo.slp.gob.mx/" target="_blank" rel="noopener" class="underline">fenapo.slp.gob.mx</a>: August 7–30 dates, official fairgrounds address, free entry, rides and parking.</li>
  <li><a href="https://fmglobo.com/news/2026/5/27/fenapo-2026-horarios-oficiales-escenarios-cartel-completo-por-dia-katy-perry-kenia-os-bizarrap-mas-24190.html" target="_blank" rel="noopener" class="underline">FM Globo (May 27, 2026)</a>: approximate showtimes for the Foro (8–10 PM) and Palenque (after 11 PM).</li>
  <li><a href="https://moovitapp.com/index/en/public_transit-Fenapo-San_Luis_Potos%C3%AD-site_50887121-3742" target="_blank" rel="noopener nofollow" class="underline">Moovit — How to get to FENAPO by public transit</a>: city bus routes and the MetroRed Line 3 stop near the fairgrounds (current transit data).</li>
</ul>
<p class="text-sm text-gray-600 leading-relaxed mt-3">If the state government publishes fairground hours, the 2026 transit routes or price changes, we'll update this guide.</p>
</section>

<div class="bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl p-8 text-center">
  <p class="text-white text-lg font-bold mb-2">Want each week's fair plan in your inbox?</p>
  <p class="text-amber-100 text-sm mb-4">Every Monday we send the week's best events in SLP — free.</p>
  <a href="/subscribe" class="inline-block bg-white text-orange-700 font-bold px-6 py-3 rounded-full hover:bg-amber-50 transition-colors">Subscribe to San Luis Way Weekly</a>
</div>

<script type="application/ld+json">
${JSON.stringify(faqEN, null, 2)}
</script>

</div>`;

// ── Post record ─────────────────────────────────────────────────────────────
// ES-first post: content_es carries the primary Spanish guide; content (EN)
// is the English adaptation; de/ja get translated metas + the ES content
// (mirrors the artistas script's locale-fallback approach, ES as base here).
const post = {
  slug: SLUG,
  status: 'published',
  published_at: new Date().toISOString(),
  image_url: IMG.hero,
  category: 'Events',
  tags: ['fenapo', 'fenapo-2026', 'boletos', 'palenque', 'precios', 'como-llegar', 'events', 'san-luis-potosi', 'slpfastticket', 'feria'],

  title: 'FENAPO 2026: Tickets, Prices & How to Get There — Complete Guide',
  excerpt: 'FENAPO 2026 is free — entry, rides, parking and all 21 Foro concerts. Only the Palenque is ticketed: slpfastticket.com is the ONLY official seller ($700–$5,500 MXN by zone). Plus optional Foro Terrazas, directions, transit and hotels near the fairgrounds.',
  content: contentEN,
  meta_title: 'FENAPO 2026 Tickets & Prices: Palenque, Free Concerts, Directions',
  meta_description: 'FENAPO 2026 ticket guide: entry is free; Palenque tickets only at slpfastticket.com ($700–$5,500 MXN by zone), Foro Terrazas from $2,000, box office hours, how to get there and hotels nearby.',

  title_es: 'FENAPO 2026: Boletos, Precios y Cómo Llegar — Guía Completa',
  excerpt_es: 'La FENAPO 2026 es gratis: entrada, juegos, estacionamiento y los 21 conciertos del Foro. Solo el Palenque se paga: slpfastticket.com es la ÚNICA boletera oficial ($700–$5,500 MXN por zona). Además: Terrazas del Foro, cómo llegar, transporte y hoteles cerca del recinto.',
  content_es: contentES,
  meta_title_es: 'FENAPO 2026: Boletos y Precios del Palenque + Cómo Llegar',
  meta_description_es: 'Guía de boletos FENAPO 2026: la entrada es gratis; boletos del Palenque solo en slpfastticket.com ($700–$5,500 MXN por zona), Terrazas del Foro desde $2,000, taquilla, cómo llegar y hoteles cerca.',

  title_de: 'FENAPO 2026: Tickets, Preise & Anfahrt — Der komplette Guide',
  excerpt_de: 'FENAPO 2026 ist gratis — Eintritt, Fahrgeschäfte, Parken und alle 21 Foro-Konzerte. Nur der Palenque kostet: slpfastticket.com ist die EINZIGE offizielle Ticketplattform ($700–$5,500 MXN je Zone). Dazu: Foro-Terrazas, Anfahrt und Hotels am Festgelände.',
  content_de: contentES,
  meta_title_de: 'FENAPO 2026 Tickets & Preise: Palenque, Gratis-Konzerte, Anfahrt',
  meta_description_de: 'FENAPO 2026 Ticket-Guide: Eintritt gratis; Palenque-Tickets nur auf slpfastticket.com ($700–$5,500 MXN je Zone), Foro-Terrazas ab $2,000, Kassenzeiten, Anfahrt und Hotels in der Nähe.',

  title_ja: 'FENAPO 2026：チケット・料金・アクセス — 完全ガイド',
  excerpt_ja: 'FENAPO 2026は入場・遊具・駐車場・フォロの全21公演が無料。有料はパレンケのみで、公式チケットはslpfastticket.comだけ（ゾーン別$700–$5,500 MXN）。フォロの有料テラス席、会場へのアクセス、周辺ホテル情報も。',
  content_ja: contentES,
  meta_title_ja: 'FENAPO 2026 チケット・料金：パレンケ、無料コンサート、アクセス',
  meta_description_ja: 'FENAPO 2026チケットガイド：入場無料。パレンケのチケットはslpfastticket.comのみ（ゾーン別$700–$5,500 MXN）、テラス席$2,000から、窓口営業時間、アクセスと周辺ホテル。',
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
