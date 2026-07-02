// Publishes "Where to Stay in San Luis Potosí (2026)" — #4 of the EN
// editorial plan. Hotel names/prices from the verified dossier of 2026-07-02
// (official chain sites + Booking/KAYAK July 2026 "from" rates, non-event).
// Dossier cautions applied: no "Casa Grande" (unverifiable), Hyatt Regency
// history footnote (ex Hilton Tower), fairgrounds are in Col. Satélite (stay
// elsewhere, ride in), December is deal season, no invented hotels.
require('dotenv').config({ path: '.env' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const SLUG = 'where-to-stay-san-luis-potosi-2026';

const IMG = {
  hero: '/images/centro-historico/plaza-de-armas.jpg',
  fallbackHero: '/og-image.jpg',
};

// area, then hotels: [name, note EN, note ES, from-price]
const TIERS = [
  {
    id: 'luxury',
    en: 'Luxury & upper-scale',
    es: 'Lujo y gama alta',
    rows: [
      ['Hyatt Regency San Luis Potosí', 'Lomas — the city’s flagship tower (opened 2020, Hyatt since 2023)', 'Lomas — la torre insignia de la ciudad (abrió 2020, Hyatt desde 2023)', '~$116 USD'],
      ['Hilton San Luis Potosí', 'Lomas — the classic business-luxury standby', 'Lomas — el clásico de lujo ejecutivo', '~$86–104 USD'],
      ['Fiesta Americana', 'Av. Salvador Nava, next to Parque Tangamanga I and the Citadella complex', 'Av. Salvador Nava, junto al Parque Tangamanga I y Citadella', '~$76–122 USD'],
      ['Hotel Museo Palacio de San Agustín', 'Centro — adults-only suites in a museum-piece palace', 'Centro — suites solo-adultos en un palacio-museo', '~$122–215 USD'],
      ['Real Inn (Camino Real group)', 'La Loma, by the golf club — quiet upscale with a car', 'La Loma, junto al club de golf — gama alta tranquila si traes coche', '~$60–86 USD'],
    ],
  },
  {
    id: 'boutique',
    en: 'Boutique in the Centro',
    es: 'Boutique en el Centro',
    rows: [
      ['Casa Maka', '3-minute walk to the Cathedral', 'A 3 minutos a pie de Catedral', '~$96–137 USD'],
      ['City Centro by Marriott', 'Restored landmark with a rooftop pool (Aldama 405)', 'Edificio histórico restaurado con alberca en la azotea (Aldama 405)', '~$80–100 USD'],
      ['Gran Hotel Concordia', 'Renovated heritage grande dame, guest rating 9.2', 'La gran dama patrimonial renovada, calificación 9.2', '~$49 USD'],
    ],
  },
  {
    id: 'midrange',
    en: 'Mid-range chains',
    es: 'Cadenas de gama media',
    rows: [
      ['NH San Luis Potosí', '10-minute walk into the Centro from the Carranza edge', 'A 10 minutos a pie del Centro, en el borde de Carranza', '~$62 USD'],
      ['Hotel Panorama', 'On Av. Carranza facing the plazas — the location classic', 'Sobre Av. Carranza frente a las plazas — el clásico de ubicación', '~$48–54 USD'],
      ['Hampton Inn by Hilton', 'Av. Salvador Nava corridor (drive to Centro)', 'Corredor Av. Salvador Nava (al Centro en coche)', 'check current'],
      ['Holiday Inn Express', 'Av. Juárez corridor — practical FENAPO base', 'Corredor Av. Juárez — base práctica para FENAPO', '~$45 USD'],
      ['City Express by Marriott ZI / ibis / TRYP by Wyndham', 'Hwy 57 & industrial corridor — closest to the fairgrounds (7–8 min)', 'Corredor 57/industrial — los más cercanos al Recinto Ferial (7–8 min)', '~$50–74 USD'],
      ['Staybridge Suites', 'Extended-stay suites near the Convention Center and Arena Potosí', 'Suites de estancia larga junto al Centro de Convenciones y Arena Potosí', '~$75 USD'],
    ],
  },
  {
    id: 'budget',
    en: 'Budget & hostels (Centro)',
    es: 'Económicos y hostales (Centro)',
    rows: [
      ['Sukha Hostel', 'Dorms with breakfast, steps from the bar zone', 'Dormitorios con desayuno, a pasos de la zona de bares', '~$10–14 USD dorm'],
      ['Hostal San Pancho', '8-minute walk to the Cathedral', 'A 8 minutos a pie de Catedral', '~$17 USD'],
      ['Casa Morelos StayHouse', 'Private rooms with shared kitchen', 'Privados con cocina compartida', '~$20 USD'],
    ],
  },
];

function tierTable(tier, isEs) {
  const rows = tier.rows
    .map(
      ([name, noteEn, noteEs, price], i) => `
      <tr class="${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}">
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">${name}</td>
        <td class="px-4 py-3 text-sm text-gray-600">${isEs ? noteEs : noteEn}</td>
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">${price}</td>
      </tr>`
    )
    .join('');
  return `
<h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">${isEs ? tier.es : tier.en}</h3>
<div class="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-2">
  <table class="min-w-full divide-y divide-gray-200">
    <thead class="bg-sky-700">
      <tr>
        <th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Hotel</th>
        <th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">${isEs ? 'Dónde / por qué' : 'Where / why'}</th>
        <th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">${isEs ? 'Desde*' : 'From*'}</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-100">${rows}
    </tbody>
  </table>
</div>`;
}

function allTiers(isEs) {
  return (
    TIERS.map((t) => tierTable(t, isEs)).join('\n') +
    `\n<p class="text-xs text-gray-500 italic mb-8">${
      isEs
        ? '*Tarifas "desde" de julio 2026 (Booking/KAYAK/sitios oficiales), habitación doble en fechas sin evento — suben en FENAPO y Semana Santa. Verifica al reservar.'
        : '*July 2026 "from" rates (Booking/KAYAK/official sites), double room on non-event dates — they climb during FENAPO and Semana Santa. Verify when booking.'
    }</p>`
  );
}

const faqEN = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is the best area to stay in San Luis Potosí?', acceptedAnswer: { '@type': 'Answer', text: "For first-time visitors, the Centro Histórico: it's a walkable UNESCO-route colonial core threaded by one of the longest pedestrian networks in Latin America (~3 km via Calzada de Guadalupe, Zaragoza and Hidalgo). Business travelers and families usually prefer Lomas, where the Hyatt Regency and Hilton sit minutes from the convention center — quiet, but you'll ride DiDi/Uber everywhere." } },
    { '@type': 'Question', name: 'Where should I stay for FENAPO in August?', acceptedAnswer: { '@type': 'Answer', text: "Not next to the fairgrounds — the Recinto Ferial sits in Colonia Satélite, an area locals avoid walking at night. Stay on the Av. Juárez / Highway 57 corridor (Holiday Inn Express, TRYP, ibis, City Express — 7–10 minutes by car) or anywhere central and ride DiDi or the MetroRed Línea III to the gates. Citywide occupancy hits ~70% in August: book weekends 4–8 weeks ahead, and check the hotel association's discounted FENAPO rates." } },
    { '@type': 'Question', name: 'How much do hotels cost in San Luis Potosí?', acceptedAnswer: { '@type': 'Answer', text: 'On non-event dates (July 2026 rates): hostels $10–25 USD, budget hotels $30–50, mid-range chains $45–80, upscale $85–130, and top boutique/luxury suites $120–220+. December–January is the cheapest window for luxury properties; Semana Santa and August (FENAPO) are the most expensive.' } },
    { '@type': 'Question', name: 'How do I get from the airport to my hotel?', acceptedAnswer: { '@type': 'Answer', text: 'SLP airport (Ponciano Arriaga) is 17–19 km from the city — 25–40 minutes. Airport pickups are legally reserved for licensed taxis: use the fixed-rate counter in arrivals (~MX$275 to the Centro in 2026). Uber, DiDi and inDriver all operate normally everywhere else in the city, with short rides around MX$45–65.' } },
    { '@type': 'Question', name: 'Is the Centro Histórico noisy at night?', acceptedAnswer: { '@type': 'Answer', text: "Rooms facing the plazas or the Universidad/San Francisco bar streets get weekend noise — ask for an interior room. During Semana Santa the Procesión del Silencio route (Carranza, Universidad, Madero) is packed, and hotels along it sell out months ahead." } },
  ],
};

const faqES = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: '¿Cuál es la mejor zona para hospedarse en San Luis Potosí?', acceptedAnswer: { '@type': 'Answer', text: 'Para primera visita, el Centro Histórico: un corazón colonial caminable en la ruta UNESCO, hilado por una de las redes peatonales más largas de América Latina (~3 km por la Calzada de Guadalupe, Zaragoza e Hidalgo). Viajeros de negocios y familias suelen preferir Lomas, donde el Hyatt Regency y el Hilton quedan a minutos del centro de convenciones — tranquilo, pero te moverás en DiDi/Uber.' } },
    { '@type': 'Question', name: '¿Dónde hospedarse para la FENAPO en agosto?', acceptedAnswer: { '@type': 'Answer', text: 'No junto al recinto — el Recinto Ferial está en la colonia Satélite, una zona que los locales evitan caminar de noche. Quédate en el corredor Av. Juárez / carretera 57 (Holiday Inn Express, TRYP, ibis, City Express — a 7–10 minutos en coche) o en cualquier punto céntrico y llega en DiDi o en la Línea III de MetroRed. La ocupación llega a ~70% en agosto: reserva los fines de semana con 4–8 semanas, y revisa las tarifas preferenciales de la asociación de hoteles.' } },
    { '@type': 'Question', name: '¿Cuánto cuestan los hoteles en San Luis Potosí?', acceptedAnswer: { '@type': 'Answer', text: 'En fechas sin evento (tarifas de julio 2026): hostales $10–25 USD, económicos $30–50, cadenas de gama media $45–80, gama alta $85–130 y suites boutique/lujo $120–220+. Diciembre–enero es la ventana más barata para el lujo; Semana Santa y agosto (FENAPO) son lo más caro.' } },
    { '@type': 'Question', name: '¿Cómo llego del aeropuerto a mi hotel?', acceptedAnswer: { '@type': 'Answer', text: 'El aeropuerto (Ponciano Arriaga) está a 17–19 km de la ciudad — 25–40 minutos. La salida del aeropuerto es legalmente de taxis autorizados: usa el mostrador de tarifa fija en llegadas (~$275 al Centro en 2026). Uber, DiDi e inDriver operan normal en el resto de la ciudad, con viajes cortos de ~$45–65.' } },
    { '@type': 'Question', name: '¿El Centro Histórico es ruidoso de noche?', acceptedAnswer: { '@type': 'Answer', text: 'Los cuartos que dan a las plazas o a las calles de bares (Universidad/San Francisco) tienen ruido de fin de semana — pide habitación interior. En Semana Santa la ruta de la Procesión del Silencio (Carranza, Universidad, Madero) se llena y sus hoteles se agotan con meses.' } },
  ],
};

function faqDetails(faq) {
  return faq.mainEntity
    .map(
      (q) => `<details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">${q.name}<span class="text-sky-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">${q.acceptedAnswer.text}</p></details>`
    )
    .join('\n  ');
}

function areaCards(isEs) {
  const cards = isEs
    ? [
        ['🏛️ Centro Histórico', 'Primera visita, cultura, presupuesto', 'Núcleo colonial caminable en la ruta UNESCO del Camino Real, con ~3 km de red peatonal (Calzada de Guadalupe–Zaragoza–Hidalgo). Todo a pie: catedral, museos, bares con música en la zona Universidad/San Francisco. Contras: ruido de fin de semana hacia las plazas y lleno total en Semana Santa.'],
        ['🍽️ Av. Carranza / Tequisquiapan', 'Foodies y vida nocturna', 'El corredor gastronómico de la ciudad: restaurantes, cantinas clásicas con rock en vivo y bares cuadra tras cuadra. Poca oferta hotelera (el ancla es el Hotel Panorama); caminable al Centro desde su extremo oriente.'],
        ['🏢 Lomas', 'Negocios, familias, lujo', 'La zona de cadenas de gama alta: Hyatt Regency y Hilton sobre la misma avenida, a minutos de Plaza San Luis y el centro de convenciones. Tranquilo y residencial — pero nada caminable: DiDi/Uber a todo (10–20 min al Centro). Entre semana sube por demanda corporativa; los fines de semana bajan.'],
        ['🌳 Av. Salvador Nava / Tangamanga', 'Familias híbridas', 'Fiesta Americana y Hampton Inn junto al Parque Tangamanga I y el complejo Citadella (cine, pista de hielo). Punto medio entre el Centro y el recinto de la feria.'],
        ['🎡 Para FENAPO (agosto)', 'Corredor Juárez / 57', 'El Recinto Ferial está en la colonia Satélite — no es zona para caminar de noche ni para hospedarse. La base práctica: Holiday Inn Express, TRYP, ibis y City Express sobre Juárez/57 (7–10 min en coche), o cualquier hotel céntrico + DiDi/MetroRed Línea III.'],
        ['🚉 Alameda / estación', 'Visítala, no te hospedes ahí', 'El parque histórico y el Museo del Ferrocarril valen la visita de día, pero es zona de transferencia que se vacía de noche — mejor duerme 3–5 cuadras al poniente, dentro del núcleo peatonal.'],
      ]
    : [
        ['🏛️ Centro Histórico', 'First-timers, culture, budget', "Walkable colonial core on the UNESCO Camino Real route, threaded by ~3 km of pedestrian streets (Calzada de Guadalupe–Zaragoza–Hidalgo). Everything on foot: cathedral, museums, live-music bars around Universidad/San Francisco. Cons: weekend noise toward the plazas and total sell-outs in Semana Santa."],
        ['🍽️ Av. Carranza / Tequisquiapan', 'Foodies & nightlife', "The city's restaurant corridor: block after block of dining, classic cantinas with live rock, and bars. Thin hotel stock (Hotel Panorama is the anchor); walkable into the Centro from its eastern end."],
        ['🏢 Lomas', 'Business, families, luxury', 'The upscale chain zone: Hyatt Regency and Hilton on the same avenue, minutes from Plaza San Luis mall and the convention center. Quiet and residential — but not walkable: DiDi/Uber everywhere (10–20 min to Centro). Tue–Thu prices rise with corporate demand; weekends drop.'],
        ['🌳 Av. Salvador Nava / Tangamanga', 'Hybrid families', 'Fiesta Americana and Hampton Inn beside Parque Tangamanga I and the Citadella complex (cinema, ice rink). A middle point between the Centro and the fairgrounds.'],
        ['🎡 For FENAPO (August)', 'Juárez / Hwy 57 corridor', "The fairgrounds sit in Colonia Satélite — not a walk-at-night or stay-there area. The practical base: Holiday Inn Express, TRYP, ibis and City Express along Juárez/57 (7–10 min by car), or any central hotel + DiDi / MetroRed Línea III."],
        ['🚉 Alameda / station edge', 'Visit, don’t base yourself', 'The historic park and Railway Museum are worth a daytime look, but it’s a transit zone that empties at night — sleep 3–5 blocks west inside the pedestrian core instead.'],
      ];
  return cards
    .map(
      ([title, tag, body]) => `
  <div class="bg-gray-50 rounded-xl p-6"><div class="flex items-center justify-between flex-wrap gap-2 mb-2"><h3 class="font-bold text-lg text-gray-900">${title}</h3><span class="text-xs font-semibold bg-sky-100 text-sky-800 rounded-full px-3 py-1">${tag}</span></div><p class="text-sm text-gray-700 leading-relaxed">${body}</p></div>`
    )
    .join('\n');
}

function buildContent(isEs) {
  const faq = isEs ? faqES : faqEN;
  const nav = isEs
    ? `<a href="#zonas" class="hover:underline">→ Las zonas, explicadas</a>
    <a href="#hoteles" class="hover:underline">→ Hoteles por presupuesto (tablas)</a>
    <a href="#temporadas" class="hover:underline">→ Cuándo suben los precios</a>
    <a href="#aeropuerto" class="hover:underline">→ Aeropuerto y cómo moverte</a>
    <a href="#faq" class="hover:underline">→ Preguntas frecuentes</a>`
    : `<a href="#areas" class="hover:underline">→ The areas, explained</a>
    <a href="#hotels" class="hover:underline">→ Hotels by budget (tables)</a>
    <a href="#seasons" class="hover:underline">→ When prices spike</a>
    <a href="#airport" class="hover:underline">→ Airport & getting around</a>
    <a href="#faq" class="hover:underline">→ FAQ</a>`;

  const intro = isEs
    ? `<strong>San Luis Potosí tiene una particularidad hotelera: su oferta de lujo es jovencísima</strong> (la torre insignia abrió en 2020) y sus precios siguen siendo de ciudad de paso — suites de palacio-museo por lo que cuesta un hotel de cadena en CDMX. Aquí está dónde quedarte según a qué vienes, con tarifas de julio 2026 verificadas.`
    : `<strong>San Luis Potosí has a hotel quirk: its luxury stock is brand new</strong> (the flagship tower opened in 2020) and prices still run like a pass-through city — museum-palace suites for what a chain hotel costs in Mexico City. Here's where to stay depending on what you're coming for, with verified July 2026 rates.`;

  const seasonBody = isEs
    ? `<div class="space-y-4 mb-6">
  <div class="bg-white border-l-4 border-red-400 rounded-r-xl shadow-sm p-5"><h3 class="font-bold text-gray-900 mb-1">Semana Santa (abr) — el pico del Centro</h3><p class="text-sm text-gray-700">La Procesión del Silencio (desde 1953, ~120,000 visitantes) llena el Centro a ocupación total y los precios suben. Los hoteles sobre la ruta (Carranza, Universidad, Madero) se agotan con 2–3 meses.</p></div>
  <div class="bg-white border-l-4 border-amber-400 rounded-r-xl shadow-sm p-5"><h3 class="font-bold text-gray-900 mb-1">FENAPO (todo agosto) — el pico ciudad-completa</h3><p class="text-sm text-gray-700">La feria (7–30 ago 2026, con conciertos gratis de Katy Perry, Mötley Crüe y más — <a href="/blog/fenapo-2026-artistas-cartel-completo" class="text-sky-700 underline">cartel completo aquí</a>) sube la ocupación a ~70%. Reserva fines de semana con 4–8 semanas; la asociación de hoteles publica tarifas preferenciales cada año.</p></div>
  <div class="bg-white border-l-4 border-emerald-400 rounded-r-xl shadow-sm p-5"><h3 class="font-bold text-gray-900 mb-1">Diciembre–enero — la temporada de gangas</h3><p class="text-sm text-gray-700">Contra la intuición, diciembre NO es pico en SLP (~53% de ocupación): es cuando aparecen las mejores tarifas de lujo. Un dato que casi nadie sabe.</p></div>
</div>`
    : `<div class="space-y-4 mb-6">
  <div class="bg-white border-l-4 border-red-400 rounded-r-xl shadow-sm p-5"><h3 class="font-bold text-gray-900 mb-1">Semana Santa (April) — the Centro peak</h3><p class="text-sm text-gray-700">The Procesión del Silencio (held since 1953, ~120,000 visitors) drives the Centro to full occupancy with raised prices. Hotels on the route (Carranza, Universidad, Madero) sell out 2–3 months ahead.</p></div>
  <div class="bg-white border-l-4 border-amber-400 rounded-r-xl shadow-sm p-5"><h3 class="font-bold text-gray-900 mb-1">FENAPO (all of August) — the citywide peak</h3><p class="text-sm text-gray-700">Mexico's national fair (Aug 7–30, 2026, with free concerts by Katy Perry, Mötley Crüe and more — <a href="/blog/fenapo-2026-artistas-cartel-completo" class="text-sky-700 underline">full lineup here</a>) pushes occupancy to ~70%. Book weekends 4–8 weeks out; the hotel association publishes discounted fair rates each year.</p></div>
  <div class="bg-white border-l-4 border-emerald-400 rounded-r-xl shadow-sm p-5"><h3 class="font-bold text-gray-900 mb-1">December–January — deal season</h3><p class="text-sm text-gray-700">Counterintuitively, December is NOT a crunch in SLP (~53% occupancy): it's when the best luxury rates appear. Almost nobody knows this.</p></div>
</div>`;

  const airport = isEs
    ? `<p class="text-gray-800 leading-relaxed mb-4">El aeropuerto <strong>Ponciano Arriaga (SLP)</strong> queda a 17–19 km — 25–40 minutos. La salida del aeropuerto es de <strong>taxis autorizados con tarifa fija</strong> (mostrador en llegadas, ~$275 MXN al Centro en 2026); Uber publica página del aeropuerto pero el marco legal sigue en disputa — lo seguro: taxi autorizado de salida, apps para todo lo demás. En la ciudad operan <strong>Uber, DiDi e inDriver</strong> (viajes cortos ~$45–65) y la <strong>MetroRed es gratuita</strong>.</p>`
    : `<p class="text-gray-800 leading-relaxed mb-4">The <strong>Ponciano Arriaga (SLP) airport</strong> sits 17–19 km out — 25–40 minutes. Airport pickups belong to <strong>licensed fixed-rate taxis</strong> (counter in arrivals, ~MX$275 to the Centro in 2026); Uber publishes an SLP airport page but the legal framework is still contested — the safe play: licensed taxi out, apps for everything else. In town, <strong>Uber, DiDi and inDriver</strong> all run (short rides ~MX$45–65) and the <strong>MetroRed BRT is free</strong>.</p>`;

  const ids = isEs
    ? { areas: 'zonas', hotels: 'hoteles', seasons: 'temporadas', airport: 'aeropuerto' }
    : { areas: 'areas', hotels: 'hotels', seasons: 'seasons', airport: 'airport' };

  return `<div class="max-w-none">

<div class="bg-sky-50 border-l-4 border-sky-500 rounded-r-xl p-6 mb-10">
  <p class="font-bold text-sky-900 mb-3">${isEs ? 'En esta guía' : 'In this guide'}</p>
  <nav class="grid sm:grid-cols-2 gap-2 text-sky-800 text-sm">
    ${nav}
  </nav>
  <p class="mt-4 text-sm text-sky-700 italic">${isEs ? 'Tarifas verificadas en julio 2026 · Fuentes al final' : 'Rates verified July 2026 · Sources at the end'}</p>
</div>

<p class="text-xl leading-relaxed text-gray-800 mb-8 font-medium">${intro}</p>

<section id="${ids.areas}" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-sky-500 pb-3 inline-block">${isEs ? 'Las zonas, explicadas' : 'The areas, explained'}</h2>
</div>
<div class="space-y-4">
${areaCards(isEs)}
</div>
</section>

<section id="${ids.hotels}" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-sky-500 pb-3 inline-block">${isEs ? 'Hoteles por presupuesto' : 'Hotels by budget'}</h2>
</div>
${allTiers(isEs)}
<div class="bg-gray-50 rounded-xl p-5 text-sm text-gray-700 leading-relaxed">
  ${isEs
    ? '<strong>Nota para no confundirte con reseñas viejas:</strong> la torre de Real de Lomas 290 abrió en 2020 como <em>Hilton Tower</em> y se convirtió en <strong>Hyatt Regency en 2023</strong> — los blogs que mencionan "Hilton Tower" o "Conrad" hablan del Hyatt actual. El Hilton clásico (Real de Lomas 1000) sigue operando aparte. Y el "Quinta Real Palacio de San Agustín" de las guías viejas es hoy el <strong>Hotel Museo Palacio de San Agustín</strong>.'
    : '<strong>A note so old reviews don’t confuse you:</strong> the tower at Real de Lomas 290 opened in 2020 as the <em>Hilton Tower</em> and became the <strong>Hyatt Regency in 2023</strong> — blogs mentioning "Hilton Tower" or "Conrad" mean today’s Hyatt. The classic Hilton (Real de Lomas 1000) still operates separately. And the "Quinta Real Palacio de San Agustín" of older guides is today’s <strong>Hotel Museo Palacio de San Agustín</strong>.'}
</div>
</section>

<section id="${ids.seasons}" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-sky-500 pb-3 inline-block">${isEs ? 'Cuándo suben los precios' : 'When prices spike'}</h2>
</div>
${seasonBody}
</section>

<section id="${ids.airport}" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-sky-500 pb-3 inline-block">${isEs ? 'Aeropuerto y cómo moverte' : 'Airport & getting around'}</h2>
</div>
${airport}
<p class="text-gray-800 leading-relaxed">${
    isEs
      ? 'Ya con hotel resuelto: nuestra <a href="/events/this-week" class="text-sky-700 underline font-semibold">agenda de esta semana</a>, los <a href="/blog/best-brunch-spots-san-luis-potosi" class="text-sky-700 underline font-semibold">mejores desayunos</a> y las <a href="/weekend-getaways" class="text-sky-700 underline font-semibold">escapadas de fin de semana</a> (Real de Catorce, la Huasteca) completan el viaje.'
      : 'Hotel sorted? Our <a href="/events/this-week" class="text-sky-700 underline font-semibold">this-week events agenda</a>, the <a href="/blog/best-brunch-spots-san-luis-potosi" class="text-sky-700 underline font-semibold">best breakfast spots</a> and our <a href="/weekend-getaways" class="text-sky-700 underline font-semibold">weekend getaways</a> (Real de Catorce, the Huasteca) round out the trip.'
  }</p>
</section>

<section id="faq" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-sky-500 pb-3 inline-block">${isEs ? 'Preguntas frecuentes' : 'FAQ'}</h2>
</div>
<div class="space-y-4">
  ${faqDetails(faq)}
</div>
</section>

<section id="sources" class="mb-8 scroll-mt-8">
<div class="not-prose mb-4">
  <h2 class="text-2xl font-bold text-gray-900 mb-3">${isEs ? 'Fuentes' : 'Sources'}</h2>
</div>
<p class="text-sm text-gray-600 leading-relaxed">${
    isEs
      ? 'Verificado en julio 2026: cada hotel contra su sitio oficial de cadena o su ficha de Booking/KAYAK (tarifas "desde", dobles, fechas sin evento); ocupación FENAPO ~70% y tarifas preferenciales (Líder Empresarial, fenapo.slp.gob.mx); ocupación total de Semana Santa (ANTENA San Luis); ocupación decembrina ~53% (El Universal SLP); tarifa fija de taxi del aeropuerto (OMA/Astrolabio); operación de Uber/DiDi/inDriver y gratuidad de MetroRed (El Universal SLP, Pulso). El Recinto Ferial está en Col. Satélite (Milenio). Los precios de hotel cambian a diario — trátalos como puntos de partida.'
      : 'Verified July 2026: every hotel against its official chain site or Booking/KAYAK listing ("from" rates, doubles, non-event dates); FENAPO ~70% occupancy and discounted fair rates (Líder Empresarial, fenapo.slp.gob.mx); Semana Santa full occupancy (ANTENA San Luis); December ~53% occupancy (El Universal SLP); airport fixed taxi rate (OMA/Astrolabio); Uber/DiDi/inDriver operation and free MetroRed (El Universal SLP, Pulso). The fairgrounds sit in Col. Satélite (Milenio). Hotel prices move daily — treat these as starting points.'
  }</p>
</section>

<div class="bg-gradient-to-r from-sky-600 to-blue-600 rounded-2xl p-8 text-center">
  <p class="text-white text-lg font-bold mb-2">${isEs ? '¿Ya sabes qué harás cada día del viaje?' : 'Know what you’ll do each day of the trip?'}</p>
  <p class="text-sky-100 text-sm mb-4">${isEs ? 'Cada lunes mandamos los mejores eventos, comida y planes de SLP — gratis.' : 'Every Monday we send the best events, food and plans in SLP — free.'}</p>
  <a href="/subscribe" class="inline-block bg-white text-sky-700 font-bold px-6 py-3 rounded-full hover:bg-sky-50 transition-colors">${isEs ? 'Suscríbete a San Luis Way Weekly' : 'Subscribe to San Luis Way Weekly'}</a>
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
  image_url: '/images/blog/centro-san-luis/hero-Centro-Historico.jpg',
  category: 'Travel',
  tags: ['where-to-stay', 'hotels', 'san-luis-potosi', 'centro-historico', 'lomas', 'fenapo', 'travel', 'accommodation', 'mexico'],

  title: 'Where to Stay in San Luis Potosí: Best Areas & Hotels for Every Budget (2026)',
  excerpt: "The areas explained (Centro's 3 km of pedestrian streets, Lomas' brand-new luxury towers, where NOT to stay for FENAPO), verified July 2026 rates from $10 hostel dorms to $215 palace suites, and the December deal-season secret.",
  content: buildContent(false),
  meta_title: 'Where to Stay in San Luis Potosí 2026: Best Areas & Hotels',
  meta_description: 'Best areas and hotels in San Luis Potosí, Mexico (2026): Centro Histórico vs Lomas vs Carranza, verified prices by budget, FENAPO booking strategy, airport taxi info.',

  title_es: 'Dónde Hospedarse en San Luis Potosí: Mejores Zonas y Hoteles por Presupuesto (2026)',
  excerpt_es: 'Las zonas explicadas (los 3 km peatonales del Centro, las torres de lujo nuevas de Lomas, dónde NO quedarte para FENAPO), tarifas verificadas de julio 2026 desde hostales de $10 hasta suites de palacio de $215, y el secreto de la temporada de gangas de diciembre.',
  content_es: buildContent(true),
  meta_title_es: 'Dónde Hospedarse en San Luis Potosí 2026: Zonas y Hoteles',
  meta_description_es: 'Mejores zonas y hoteles de San Luis Potosí (2026): Centro Histórico vs Lomas vs Carranza, precios verificados por presupuesto, estrategia para FENAPO y taxi del aeropuerto.',

  title_de: 'Übernachten in San Luis Potosí: Beste Viertel & Hotels für jedes Budget (2026)',
  excerpt_de: 'Die Viertel erklärt (3 km Fußgängerzone im Centro, neue Luxustürme in Lomas, wo man zur FENAPO NICHT wohnen sollte), verifizierte Preise Juli 2026 vom 10-Dollar-Hostel bis zur Palast-Suite.',
  content_de: buildContent(false),
  meta_title_de: 'Übernachten in San Luis Potosí 2026: Viertel & Hotels',
  meta_description_de: 'Beste Viertel und Hotels in San Luis Potosí (2026): Centro vs Lomas vs Carranza, verifizierte Preise, FENAPO-Buchungsstrategie, Flughafentaxi.',

  title_ja: 'サン・ルイス・ポトシの宿泊ガイド：エリア別おすすめホテル（2026年）',
  excerpt_ja: 'エリア徹底解説（セントロの3km歩行者天国、ロマスの新築ラグジュアリー、FENAPO期間に泊まるべきでない場所）、2026年7月検証済み料金（$10のホステルから$215のパレススイートまで）。',
  content_ja: buildContent(false),
  meta_title_ja: 'サン・ルイス・ポトシ宿泊ガイド2026 | エリア・ホテル・料金',
  meta_description_ja: 'サン・ルイス・ポトシのおすすめエリアとホテル（2026年）：セントロ、ロマス、カランサ比較、予算別検証済み料金、FENAPO予約戦略、空港タクシー情報。',
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
