// Publishes "San Luis Potosí Airport (SLP) Guide: Flights, Taxis & Getting
// Downtown" — SEO audit gap #5 (zero airport queries captured). Facts verified
// July 2026: OMA official pages (routes, taxis, rentals), OMA/Volaris press
// release (5 new routes June 2026), airline route pages re-verified in the
// mexico-2026-stopover factcheck, MX$275 taxi fare from the where-to-stay
// factcheck (Astrolabio 2026 fare table). Uber airport status labeled as
// legally contested — do not simplify to "legal" or "illegal".
require('dotenv').config({ path: '.env' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const SLUG = 'san-luis-potosi-airport-guide';

// [airline, routes EN, routes ES, note EN, note ES]
const AIRLINES = [
  ['Aeroméxico',
    'Mexico City (MEX) — ~5 daily, 1 h 20 m',
    'Ciudad de México (MEX) — ~5 diarios, 1 h 20 m',
    'Connects to the full Aeroméxico/SkyTeam network through its MEX hub.',
    'Conecta con toda la red Aeroméxico/SkyTeam vía su hub en MEX.'],
  ['American Airlines',
    'Dallas/Fort Worth (DFW) — daily nonstop',
    'Dallas/Fort Worth (DFW) — diario sin escalas',
    'One-stop access to the entire AA network via DFW.',
    'Acceso a toda la red de AA con una escala en DFW.'],
  ['United Airlines',
    'Houston (IAH) — ~14 weekly, ~2 h',
    'Houston (IAH) — ~14 semanales, ~2 h',
    'The classic business route, roughly twice daily.',
    'La ruta de negocios clásica, aproximadamente dos veces al día.'],
  ['Volaris',
    'Tijuana, Cancún, Dallas (DFW), Houston (IAH), San Antonio (SAT) + new from June 2026: Chicago (MDW), Monterrey, Guadalajara, Puebla, Puerto Vallarta',
    'Tijuana, Cancún, Dallas (DFW), Houston (IAH), San Antonio (SAT) + nuevas desde junio 2026: Chicago (MDW), Monterrey, Guadalajara, Puebla, Puerto Vallarta',
    'The biggest operator at SLP: 10 destinations (6 domestic, 4 US) after its June 2026 expansion announced with OMA.',
    'El mayor operador en SLP: 10 destinos (6 nacionales, 4 en EUA) tras su expansión de junio 2026 anunciada con OMA.'],
  ['Aerus / VivaAerobus',
    'Monterrey (MTY) and Mexico City–Felipe Ángeles (NLU/AIFA)',
    'Monterrey (MTY) y Ciudad de México–Felipe Ángeles (NLU/AIFA)',
    'Regional links; route databases differ on which carrier flies which leg — check both when booking.',
    'Enlaces regionales; las bases de rutas difieren sobre qué aerolínea vuela cada tramo — revisa ambas al reservar.'],
];

function airlineCards(isEs) {
  return AIRLINES.map(
    ([name, routesEn, routesEs, noteEn, noteEs]) => `
  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2">${name}</h3>
    <p class="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">${isEs ? routesEs : routesEn}</p>
    <p class="text-sm text-gray-700 leading-relaxed">${isEs ? noteEs : noteEn}</p>
  </div>`
  ).join('\n');
}

const faqEN = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Which airlines fly to San Luis Potosí (SLP)?', acceptedAnswer: { '@type': 'Answer', text: 'As of mid-2026, six airlines serve Ponciano Arriaga International Airport with ~12 nonstop destinations: Aeroméxico (Mexico City, ~5x daily), American (Dallas/DFW daily), United (Houston/IAH, ~14 weekly), Volaris (Tijuana, Cancún, Dallas, Houston, San Antonio, plus Chicago Midway, Monterrey, Guadalajara, Puebla and Puerto Vallarta added June 2026), and regional carriers Aerus and VivaAerobus (Monterrey, Mexico City–AIFA).' } },
    { '@type': 'Question', name: 'How much is a taxi from SLP airport to downtown San Luis Potosí?', acceptedAnswer: { '@type': 'Answer', text: 'MX$275 to the Centro Histórico in 2026 at the authorized fixed-rate taxi counter in arrivals (up from MX$255 in 2024 and MX$266 in 2025, per the official fare table reported by local outlet Astrolabio). Pay at the counter, not the driver. The ride takes roughly 20–30 minutes.' } },
    { '@type': 'Question', name: 'Is there Uber at San Luis Potosí airport?', acceptedAnswer: { '@type': 'Answer', text: "Uber officially lists SLP airport pickups and dropoffs (average trip to the city ~MX$299, ~24 minutes per Uber's own airport page), and an October 2025 federal court suspension allows app pickups at Mexico's airports — but the ruling remained legally contested into 2026, with enforcement disputes between Uber and federal authorities. The friction-free arrival option is the authorized taxi counter; dropoffs by Uber are routine." } },
    { '@type': 'Question', name: 'How far is SLP airport from the city center?', acceptedAnswer: { '@type': 'Answer', text: 'The airport sits at Km 9.5 of the Matehuala highway, on the Soledad de Graciano Sánchez side of the metro area. Mapping sources put the drive to the Centro Histórico at 15–20 km and roughly 20–30 minutes depending on traffic; Uber\'s airport page averages it at 20 km / 24 minutes.' } },
    { '@type': 'Question', name: 'Should I fly into SLP, Querétaro (QRO), León (BJX) or Mexico City (MEX)?', acceptedAnswer: { '@type': 'Answer', text: 'If a route serves SLP, use it — you land 20–30 minutes from downtown. Querétaro Intercontinental (2.4M passengers in 2025, including Madrid nonstops) is ~2.5 h away by road, León/BJX ~2 h 15 m, and Mexico City ~402 km / 4.5+ h via Highway 57D — or a 1 h 20 m Aeroméxico feeder flight. QRO/BJX make sense only when fares or schedules beat SLP by a wide margin.' } },
  ],
};

const faqES = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: '¿Qué aerolíneas vuelan a San Luis Potosí (SLP)?', acceptedAnswer: { '@type': 'Answer', text: 'A mediados de 2026, seis aerolíneas operan en el Aeropuerto Internacional Ponciano Arriaga con ~12 destinos directos: Aeroméxico (Ciudad de México, ~5 diarios), American (Dallas/DFW diario), United (Houston/IAH, ~14 semanales), Volaris (Tijuana, Cancún, Dallas, Houston, San Antonio, más Chicago Midway, Monterrey, Guadalajara, Puebla y Puerto Vallarta desde junio 2026), y las regionales Aerus y VivaAerobus (Monterrey, CDMX–AIFA).' } },
    { '@type': 'Question', name: '¿Cuánto cuesta el taxi del aeropuerto al centro de San Luis Potosí?', acceptedAnswer: { '@type': 'Answer', text: '$275 MXN al Centro Histórico en 2026 en el mostrador de taxi autorizado de tarifa fija en llegadas (subió de $255 en 2024 y $266 en 2025, según la tabla tarifaria reportada por el medio local Astrolabio). Paga en el mostrador, no al conductor. El trayecto toma unos 20–30 minutos.' } },
    { '@type': 'Question', name: '¿Hay Uber en el aeropuerto de San Luis Potosí?', acceptedAnswer: { '@type': 'Answer', text: 'Uber lista oficialmente recogidas y llegadas en el aeropuerto SLP (viaje promedio a la ciudad ~$299 MXN, ~24 minutos según la propia página de Uber), y una suspensión judicial federal de octubre 2025 permite recoger pasajeros en los aeropuertos del país — pero el fallo seguía legalmente disputado en 2026, con conflictos de aplicación entre Uber y autoridades federales. La opción sin fricción al llegar es el mostrador de taxi autorizado; dejar pasajeros en Uber es rutinario.' } },
    { '@type': 'Question', name: '¿A qué distancia está el aeropuerto del centro?', acceptedAnswer: { '@type': 'Answer', text: 'El aeropuerto está en el Km 9.5 de la carretera a Matehuala, del lado de Soledad de Graciano Sánchez. Las fuentes de mapas ubican el trayecto al Centro Histórico en 15–20 km y unos 20–30 minutos según el tráfico; la página de Uber lo promedia en 20 km / 24 minutos.' } },
    { '@type': 'Question', name: '¿Conviene volar a SLP, Querétaro (QRO), León (BJX) o CDMX (MEX)?', acceptedAnswer: { '@type': 'Answer', text: 'Si una ruta llega a SLP, úsala — aterrizas a 20–30 minutos del centro. El Intercontinental de Querétaro (2.4M de pasajeros en 2025, con vuelos a Madrid) queda a ~2.5 h por carretera, León/BJX a ~2 h 15 m, y CDMX a ~402 km / 4.5+ h por la 57D — o un vuelo alimentador de Aeroméxico de 1 h 20 m. QRO/BJX solo convienen cuando la tarifa o el horario superan a SLP por mucho.' } },
  ],
};

function faqDetails(faq) {
  return faq.mainEntity
    .map(
      (q) => `<details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">${q.name}<span class="text-orange-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">${q.acceptedAnswer.text}</p></details>`
    )
    .join('\n  ');
}

function buildContent(isEs) {
  const faq = isEs ? faqES : faqEN;
  const t = (en, es) => (isEs ? es : en);

  return `<div class="max-w-none">

<p class="text-xl leading-relaxed text-gray-800 mb-8 font-medium">
  ${t(
    "<strong>San Luis Potosí International Airport — officially Aeropuerto Internacional Ponciano Arriaga (IATA: SLP)</strong> — is one of Mexico's easiest airports: 834,795 passengers in all of 2025, six airlines, ~12 nonstop destinations, and a fixed-rate taxi that puts you in the Centro Histórico in about 25 minutes for MX$275. Here's everything verified: flights, ground transport, rentals, and when it beats flying into Querétaro or Mexico City.",
    '<strong>El Aeropuerto Internacional de San Luis Potosí — oficialmente Aeropuerto Internacional Ponciano Arriaga (IATA: SLP)</strong> — es uno de los aeropuertos más fáciles de México: 834,795 pasajeros en todo 2025, seis aerolíneas, ~12 destinos directos y un taxi de tarifa fija que te deja en el Centro Histórico en unos 25 minutos por $275. Aquí todo verificado: vuelos, transporte terrestre, rentas de auto y cuándo conviene más que volar a Querétaro o CDMX.'
  )}
</p>

<div class="speakable bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-200 rounded-2xl p-6 md:p-8 mb-10">
  <p class="text-base md:text-lg text-gray-800 leading-relaxed">
    ${t(
      '<strong>The essentials:</strong> SLP airport is at Km 9.5 of the Matehuala highway, 15–20 km (~20–30 min) from downtown. On arrival, pay MX$275 at the authorized taxi counter for the Centro. Nonstops as of mid-2026: Mexico City, Dallas, Houston, San Antonio, Chicago, Tijuana, Cancún, Monterrey, Guadalajara, Puebla, Puerto Vallarta and Mexico City–AIFA.',
      '<strong>Lo esencial:</strong> el aeropuerto está en el Km 9.5 de la carretera a Matehuala, a 15–20 km (~20–30 min) del centro. Al llegar, paga $275 en el mostrador de taxi autorizado para ir al Centro. Vuelos directos a mediados de 2026: CDMX, Dallas, Houston, San Antonio, Chicago, Tijuana, Cancún, Monterrey, Guadalajara, Puebla, Puerto Vallarta y CDMX–AIFA.'
    )}
  </p>
</div>

<section class="mb-12">
<h2 class="text-3xl font-bold text-gray-900 mb-4 border-b-4 border-orange-500 pb-3 inline-block">${t('The airport in one card', 'El aeropuerto en una tarjeta')}</h2>
<div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
  <ul class="text-sm text-gray-700 leading-relaxed space-y-2">
    <li><strong>${t('Official name', 'Nombre oficial')}:</strong> Aeropuerto Internacional Ponciano Arriaga ${t('(named for the San Luis-born liberal constitutionalist)', '(en honor al constitucionalista liberal potosino)')} · IATA: <strong>SLP</strong> · ICAO: MMSP</li>
    <li><strong>${t('Operator', 'Operador')}:</strong> OMA — Grupo Aeroportuario Centro Norte</li>
    <li><strong>${t('Location', 'Ubicación')}:</strong> Carretera a Matehuala Km 9.5, ${t('on the Soledad de Graciano Sánchez side of the metro area', 'del lado de Soledad de Graciano Sánchez de la zona metropolitana')}</li>
    <li><strong>${t('Traffic', 'Tráfico')}:</strong> 834,795 ${t('passengers in 2025, +13.4% vs 2024 (OMA figures)', 'pasajeros en 2025, +13.4% vs 2024 (cifras de OMA)')}</li>
    <li><strong>${t('Terminal services', 'Servicios en terminal')}:</strong> ${t('WiFi, VIP lounge, currency exchange, luggage wrapping, shops, restaurants, duty free and paid parking (per OMA)', 'WiFi, sala VIP, casa de cambio, emplayado de equipaje, tiendas, restaurantes, duty free y estacionamiento de paga (según OMA)')}</li>
  </ul>
</div>
</section>

<section class="mb-12">
<h2 class="text-3xl font-bold text-gray-900 mb-4 border-b-4 border-orange-500 pb-3 inline-block">${t('Who flies to SLP (mid-2026)', 'Quién vuela a SLP (mediados de 2026)')}</h2>
<p class="text-gray-700 leading-relaxed mb-6">${t(
    'Route info reflects the OMA airport route page and airline pages as of July 2026 — always confirm schedules when booking, since regional routes rotate. The June 2026 Volaris expansion (Chicago Midway, Monterrey, Guadalajara, Puebla, Puerto Vallarta) was announced jointly with OMA. Flying in from Texas? We have a whole guide to the <a href="/blog/direct-flights-from-texas-to-san-luis-potosi" class="text-orange-600 underline font-semibold">direct flights from Texas</a>.',
    'Las rutas reflejan la página oficial de rutas de OMA y las páginas de las aerolíneas a julio de 2026 — confirma horarios al reservar, porque las rutas regionales rotan. La expansión de Volaris de junio 2026 (Chicago Midway, Monterrey, Guadalajara, Puebla, Puerto Vallarta) se anunció junto con OMA. ¿Vienes de Texas? Tenemos guía completa de los <a href="/blog/direct-flights-from-texas-to-san-luis-potosi" class="text-orange-600 underline font-semibold">vuelos directos desde Texas</a>.'
  )}</p>
<div class="space-y-6">
${airlineCards(isEs)}
</div>
</section>

<section class="mb-12">
<h2 class="text-3xl font-bold text-gray-900 mb-4 border-b-4 border-orange-500 pb-3 inline-block">${t('Getting downtown', 'Cómo llegar al centro')}</h2>

<div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 mb-6">
  <h3 class="font-bold text-xl text-gray-900 mb-2">${t('Authorized taxi — the default', 'Taxi autorizado — la opción estándar')}</h3>
  <p class="text-sm text-gray-700 leading-relaxed">${t(
    "Airport pickups run through licensed taxis with a fixed-rate counter in arrivals: <strong>MX$275 to the Centro Histórico in 2026</strong> — a fare that has climbed in official annual steps from MX$255 (2024) and MX$266 (2025), per the fare table published by local outlet Astrolabio and confirmed against OMA's taxi page (verified in our July 2026 fact-check). Pay at the counter, get a ticket, skip any negotiation. Budget 20–30 minutes to the Centro. Deciding where that taxi should drop you? Start with our <a href='/blog/where-to-stay-san-luis-potosi-2026' class='text-orange-600 underline font-semibold'>where-to-stay guide</a>.",
    "Las recogidas en el aeropuerto son de taxis concesionados con mostrador de tarifa fija en llegadas: <strong>$275 MXN al Centro Histórico en 2026</strong> — tarifa que ha subido en escalones anuales oficiales desde $255 (2024) y $266 (2025), según la tabla publicada por el medio local Astrolabio y confirmada contra la página de taxis de OMA (verificado en nuestro fact-check de julio 2026). Paga en el mostrador, recibe tu boleto y evita cualquier regateo. Calcula 20–30 minutos al Centro. ¿Aún no sabes dónde bajarte? Empieza por nuestra <a href='/blog/where-to-stay-san-luis-potosi-2026' class='text-orange-600 underline font-semibold'>guía de dónde hospedarte</a>."
  )}</p>
</div>

<div class="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6 mb-6">
  <h3 class="font-bold text-xl text-gray-900 mb-2">${t('Uber — works, but legally contested', 'Uber — funciona, pero está en disputa legal')}</h3>
  <p class="text-sm text-gray-700 leading-relaxed">${t(
    "Uber's own airport page lists SLP pickups and dropoffs (average ~MX$299 and ~24 minutes to the city). Nationally, an October 2025 federal court suspension allows app-based pickups at 70+ Mexican airports — but the ruling remained contested into 2026, with Uber publicly demanding that the National Guard respect the order (El Financiero, March 2026) and taxi concessions still holding the official airport contract. In practice: dropoffs are routine; for pickups, the taxi counter is the zero-friction option, and if you do request an Uber, expect the meeting point outside the terminal curb.",
    'La propia página de aeropuertos de Uber lista recogidas y llegadas en SLP (promedio ~$299 y ~24 minutos a la ciudad). A nivel nacional, una suspensión judicial federal de octubre 2025 permite recoger pasajeros por app en 70+ aeropuertos — pero el fallo seguía disputado en 2026, con Uber exigiendo públicamente que la Guardia Nacional respete la orden (El Financiero, marzo 2026) y los taxis concesionados conservando el contrato oficial del aeropuerto. En la práctica: dejar pasajeros es rutina; para que te recojan, el mostrador de taxi es la opción sin fricción, y si pides Uber, espera el punto de encuentro fuera del andén de la terminal.'
  )}</p>
</div>

<div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 mb-6">
  <h3 class="font-bold text-xl text-gray-900 mb-2">${t('Rental cars — 8 agencies in the terminal', 'Renta de autos — 8 agencias en la terminal')}</h3>
  <p class="text-sm text-gray-700 leading-relaxed">${t(
    "Per OMA's official page: Avis, Budget, Dollar, Hertz, National/Enterprise, Sixt, Alamo and Europcar, with counters open roughly 7:00–23:00 (Dollar and Hertz from 5:00). A car is the right call if your plan includes <a href='/blog/day-trips-from-san-luis-potosi-2026' class='text-orange-600 underline font-semibold'>day trips</a> — most of the best ones are car-only.",
    "Según la página oficial de OMA: Avis, Budget, Dollar, Hertz, National/Enterprise, Sixt, Alamo y Europcar, con mostradores abiertos aproximadamente de 7:00 a 23:00 (Dollar y Hertz desde las 5:00). El coche es la jugada correcta si tu plan incluye <a href='/blog/day-trips-from-san-luis-potosi-2026' class='text-orange-600 underline font-semibold'>escapadas de un día</a> — la mayoría de las mejores son solo en coche."
  )}</p>
</div>

<div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
  <h3 class="font-bold text-xl text-gray-900 mb-2">${t('Public transport — effectively none', 'Transporte público — en la práctica, ninguno')}</h3>
  <p class="text-sm text-gray-700 leading-relaxed">${t(
    "OMA's ground-transport pages list taxis, parking and car rental — there is no scheduled public bus into the airport. Plan on the taxi counter. (Once you're downtown, the city is walkable and the MetroRed BRT is free; and yes, <a href='/blog/is-san-luis-potosi-safe-2026' class='text-orange-600 underline font-semibold'>SLP is one of central Mexico's safer capitals</a>.)",
    "Las páginas de transporte de OMA listan taxis, estacionamiento y renta de autos — no hay ruta de camión urbano programada al aeropuerto. Cuenta con el mostrador de taxis. (Ya en el centro, la ciudad se camina y el BRT MetroRed es gratuito; y sí, <a href='/blog/is-san-luis-potosi-safe-2026' class='text-orange-600 underline font-semibold'>SLP es de las capitales más seguras del centro de México</a>.)"
  )}</p>
</div>
</section>

<section class="mb-12">
<h2 class="text-3xl font-bold text-gray-900 mb-4 border-b-4 border-orange-500 pb-3 inline-block">${t('SLP vs. flying into QRO, BJX or MEX', 'SLP vs. volar a QRO, BJX o MEX')}</h2>
<p class="text-gray-700 leading-relaxed mb-6">${t(
    "International travelers often assume they must route through Mexico City. Compare honestly:",
    'Muchos viajeros internacionales asumen que deben entrar por CDMX. Compara con honestidad:'
  )}</p>
<div class="overflow-x-auto mb-4">
<table class="min-w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
  <thead class="bg-orange-50"><tr>
    <th class="px-4 py-3 text-left font-bold text-gray-900">${t('Airport', 'Aeropuerto')}</th>
    <th class="px-4 py-3 text-left font-bold text-gray-900">${t('Road distance / time to SLP city', 'Distancia / tiempo por carretera a SLP')}</th>
    <th class="px-4 py-3 text-left font-bold text-gray-900">${t('Why choose it', 'Cuándo elegirlo')}</th>
  </tr></thead>
  <tbody class="divide-y divide-gray-200 bg-white">
    <tr><td class="px-4 py-3 font-semibold">SLP (Ponciano Arriaga)</td><td class="px-4 py-3">15–20 km · 20–30 min</td><td class="px-4 py-3">${t('Always, if a route exists — Dallas, Houston, San Antonio, Chicago and 8 Mexican cities nonstop', 'Siempre que exista la ruta — Dallas, Houston, San Antonio, Chicago y 8 ciudades mexicanas sin escala')}</td></tr>
    <tr><td class="px-4 py-3 font-semibold">Querétaro (QRO)</td><td class="px-4 py-3">~210 km · ~2.5 h</td><td class="px-4 py-3">${t('Bigger network (2.4M passengers 2025, Madrid nonstop, 11 new Volaris routes June 2026) when SLP fares/schedules fail you', 'Red mayor (2.4M pasajeros 2025, vuelo a Madrid, 11 rutas nuevas de Volaris en junio 2026) cuando SLP no te da tarifa u horario')}</td></tr>
    <tr><td class="px-4 py-3 font-semibold">León/Guanajuato (BJX)</td><td class="px-4 py-3">~177 km · ~2 h 15 m</td><td class="px-4 py-3">${t('Broad US route map; closest big alternative by road', 'Amplio mapa de rutas a EUA; la alternativa grande más cercana por carretera')}</td></tr>
    <tr><td class="px-4 py-3 font-semibold">${t('Mexico City (MEX)', 'CDMX (MEX)')}</td><td class="px-4 py-3">~402 km · 4.5+ h ${t('via 57D', 'por la 57D')}</td><td class="px-4 py-3">${t('Long-haul international arrivals — then connect on the 1 h 20 m Aeroméxico feeder instead of driving', 'Llegadas internacionales de largo alcance — conecta con el vuelo alimentador de Aeroméxico de 1 h 20 m en lugar de manejar')}</td></tr>
  </tbody>
</table>
</div>
<p class="text-gray-700 leading-relaxed">${t(
    'Verdict: for anyone coming from Texas, Chicago or anywhere in Mexico, SLP itself wins on total door-to-door time. Route through MEX (plus the short feeder) for Europe/Asia/South America, or through QRO for its Madrid nonstop. Planning the trip itself? See our <a href="/visit-san-luis-potosi" class="text-orange-600 underline font-semibold">visit San Luis Potosí hub</a>.',
    'Veredicto: viniendo de Texas, Chicago o cualquier punto de México, SLP gana en tiempo total puerta a puerta. Entra por MEX (más el vuelo corto) desde Europa/Asia/Sudamérica, o por QRO por su directo a Madrid. ¿Planeando el viaje completo? Visita nuestro <a href="/visit-san-luis-potosi" class="text-orange-600 underline font-semibold">hub de visita a San Luis Potosí</a>.'
  )}</p>
</section>

<section id="faq" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-orange-500 pb-3 inline-block">FAQ</h2>
</div>
<div class="space-y-4">
  ${faqDetails(faq)}
</div>
</section>

<section id="sources" class="mb-8 scroll-mt-8">
<div class="not-prose mb-4">
  <h2 class="text-2xl font-bold text-gray-900 mb-3">${t('Sources', 'Fuentes')}</h2>
</div>
<p class="text-sm text-gray-600 leading-relaxed">${t(
    "Verified July 2026: OMA — official airport operator pages (airlines & routes, taxis, car rentals, terminal services) and OMA/Volaris press release on the five routes launching June 2026; airline route pages (Aeroméxico SLP–MEX ~5x daily, American SLP–DFW daily, United SLP–IAH ~14 weekly, Volaris SLP–DFW); OMA 2025 traffic (834,795 passengers, via Potosinoticias and Wikipedia's sourced statistics); Astrolabio (2024→2026 airport taxi fare table, MX$275); Uber's official SLP airport page; La Jornada / Mexico News Daily (October 2025 federal suspension on airport pickups) and El Financiero (March 2026 enforcement dispute); FlightConnections (12 nonstop destinations); distance calculators and DriveBestWay for QRO/BJX/MEX road times. Fares and routes change — confirm with the airline or at the taxi counter.",
    'Verificado en julio 2026: OMA — páginas oficiales del operador (aerolíneas y rutas, taxis, renta de autos, servicios) y comunicado OMA/Volaris sobre las cinco rutas que arrancan en junio 2026; páginas de rutas de las aerolíneas (Aeroméxico SLP–MEX ~5 diarios, American SLP–DFW diario, United SLP–IAH ~14 semanales, Volaris SLP–DFW); tráfico 2025 de OMA (834,795 pasajeros, vía Potosinoticias y estadísticas referenciadas de Wikipedia); Astrolabio (tabla de tarifas de taxi 2024→2026, $275); página oficial de aeropuertos de Uber para SLP; La Jornada / Mexico News Daily (suspensión federal de octubre 2025 sobre recogidas en aeropuertos) y El Financiero (disputa de aplicación, marzo 2026); FlightConnections (12 destinos directos); calculadoras de distancia y DriveBestWay para tiempos por carretera a QRO/BJX/MEX. Tarifas y rutas cambian — confirma con la aerolínea o en el mostrador de taxis.'
  )}</p>
</section>

<div class="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-8 text-center">
  <p class="text-white text-lg font-bold mb-2">${t('Landing soon?', '¿Aterrizas pronto?')}</p>
  <p class="text-orange-100 text-sm mb-4">${t('Sort your base with the <a href="/blog/where-to-stay-san-luis-potosi-2026" class="underline font-semibold text-white">where-to-stay guide</a> — or get the weekly agenda free.', 'Resuelve tu base con la <a href="/blog/where-to-stay-san-luis-potosi-2026" class="underline font-semibold text-white">guía de dónde hospedarte</a> — o recibe la agenda semanal gratis.')}</p>
  <a href="/subscribe" class="inline-block bg-white text-orange-600 font-bold px-6 py-3 rounded-full hover:bg-orange-50 transition-colors">${t('Subscribe to San Luis Way Weekly', 'Suscríbete a San Luis Way Weekly')}</a>
</div>

<script type="application/ld+json">
${JSON.stringify(faq, null, 2)}
</script>

</div>`;
}

const post = {
  slug: SLUG,
  status: 'published',
  published_at: new Date().toISOString(),
  image_url: '/images/heroes/slp-airport-guide.jpg',
  category: 'Travel',
  tags: ['airport', 'slp-airport', 'flights', 'taxis', 'travel', 'san-luis-potosi', 'ponciano-arriaga', 'transportation', 'mexico', '2026'],

  title: 'San Luis Potosí Airport (SLP) Guide: Flights, Taxis & Getting Downtown',
  excerpt: 'Everything about Ponciano Arriaga International (SLP) verified for 2026: six airlines, 12 nonstop destinations including Dallas, Houston, San Antonio and Chicago, the MX$275 fixed-rate taxi downtown, the real Uber situation, rental agencies — and when QRO or MEX beats it.',
  content: buildContent(false),
  meta_title: 'San Luis Potosí Airport (SLP) Guide 2026 | Flights, Taxis, Downtown',
  meta_description: 'SLP airport verified 2026: airlines & nonstop routes (Dallas, Houston, Chicago, CDMX+), MX$275 authorized taxi to the Centro, Uber status, 8 rental agencies, and SLP vs QRO/BJX/MEX.',

  title_es: 'Aeropuerto de San Luis Potosí (SLP): vuelos, taxis y cómo llegar al centro',
  excerpt_es: 'Todo sobre el Aeropuerto Internacional Ponciano Arriaga (SLP) verificado para 2026: seis aerolíneas, 12 destinos directos incluidos Dallas, Houston, San Antonio y Chicago, el taxi de tarifa fija de $275 al centro, la situación real de Uber, agencias de renta — y cuándo conviene QRO o MEX.',
  content_es: buildContent(true),
  meta_title_es: 'Aeropuerto de San Luis Potosí (SLP) 2026 | Vuelos, taxis, centro',
  meta_description_es: 'Aeropuerto SLP verificado 2026: aerolíneas y rutas directas (Dallas, Houston, Chicago, CDMX+), taxi autorizado de $275 al Centro, estatus de Uber, 8 rentadoras y SLP vs QRO/BJX/MEX.',

  title_de: 'Flughafen San Luis Potosí (SLP): Flüge, Taxis & Weg ins Zentrum',
  excerpt_de: 'Der Ponciano-Arriaga-Flughafen (SLP), verifiziert für 2026: sechs Airlines, 12 Nonstop-Ziele (Dallas, Houston, San Antonio, Chicago u.a.), das Festpreis-Taxi für 275 MXN ins Zentrum, die Uber-Lage, Mietwagen — und wann QRO oder MEX besser ist.',
  content_de: buildContent(false),
  meta_title_de: 'Flughafen San Luis Potosí (SLP) 2026 | Flüge, Taxis, Zentrum',
  meta_description_de: 'SLP-Flughafen 2026 verifiziert: Airlines & Nonstop-Routen, 275-MXN-Taxi ins Zentrum, Uber-Status, 8 Mietwagenfirmen und SLP vs. QRO/BJX/MEX.',

  title_ja: 'サン・ルイス・ポトシ空港（SLP）ガイド：フライト・タクシー・市内アクセス',
  excerpt_ja: 'ポンシアーノ・アリアガ国際空港（SLP）2026年検証版：6航空会社・直行12路線（ダラス、ヒューストン、シカゴほか）、市内まで定額275ペソのタクシー、Uberの実情、レンタカー8社、QRO/MEXとの比較。',
  content_ja: buildContent(false),
  meta_title_ja: 'サン・ルイス・ポトシ空港（SLP）ガイド2026 | フライト・タクシー',
  meta_description_ja: 'SLP空港2026年検証：就航航空会社と直行路線、定額275ペソの公認タクシー、Uberの状況、レンタカー8社、QRO/BJX/MEXとの使い分け。',
};

async function main() {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    console.error('Missing Supabase env vars. Aborting.');
    process.exit(1);
  }
  const { data: existing } = await supabase.from('blog_posts').select('id').eq('slug', SLUG).maybeSingle();
  if (existing) {
    const { error } = await supabase.from('blog_posts').update(post).eq('id', existing.id);
    if (error) { console.error('Update error:', error); process.exit(1); }
    console.log('Post updated:', existing.id);
  } else {
    const { data, error } = await supabase.from('blog_posts').insert(post).select().single();
    if (error) { console.error('Insert error:', error); process.exit(1); }
    console.log('Post published! ID:', data.id);
  }
  console.log(`\nView at: https://www.sanluisway.com/blog/${SLUG}`);
}

main();
