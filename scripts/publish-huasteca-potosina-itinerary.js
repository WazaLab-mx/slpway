// Publishes "Huasteca Potosina Itinerary: 3, 5 or 7 Days (2026 Guide)".
// Every fact comes from the verified dossier (research 2026-07-02): official
// Las Pozas pricing/reservation system, El Universal SLP entry fees, INAH
// (Tamtoc), driving times from route calculators. Unverified figures are
// published as ranges with a "confirm locally" note.
require('dotenv').config({ path: '.env' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const SLUG = 'huasteca-potosina-itinerary-2026';

const IMG = {
  hero: '/images/outdoors/tamul-waterfall.jpg',
  jungle: '/images/outdoors/huasteca-jungle.jpg',
  waterfall: '/images/outdoors/huasteca-waterfall.jpg',
  xilitla: '/images/outdoors/xilitla.webp',
};

// ── Prices table data (single source of truth) ──────────────────────────────
const PRICES = [
  ['Las Pozas (Xilitla)', '$180 + $30 guía obligatorio', '$180 + $30 mandatory guide (ES) / $60 (EN)', 'Cerrado martes · reserva con horario', 'Closed Tuesdays · timed entry'],
  ['Cascada de Tamul (lancha)', '≈ $150–250 por persona', '≈ $150–250 per person', 'Efectivo · embarcaderos La Morena y Tanchachín', 'Cash only · La Morena & Tanchachín piers'],
  ['Cascadas de Micos', '$100 (chaleco incluido)', '$100 (life jacket included)', 'Circuito de saltos ≈ $180', 'Waterfall-jump circuit ≈ $180'],
  ['Cascadas de Tamasopo', '$200 + $100 estacionamiento', '$200 + $100 parking', 'Sin cajero — lleva efectivo', 'No ATM — bring cash'],
  ['Puente de Dios', '≈ $70 + chaleco $30–50', '≈ $70 + life jacket $30–50', 'Mar–Dom 8:00–16:00', 'Tue–Sun 8 AM–4 PM'],
  ['Sótano de las Golondrinas', '≈ $100–150', '≈ $100–150', 'Confirma en sitio', 'Confirm on arrival'],
  ['Media Luna (Rioverde)', '$100 · camping $150', '$100 · camping $150/tent', 'Buceo con permiso ≈ $1,300', 'Diving permit ≈ $1,300'],
  ['Tamtoc (zona arqueológica)', '$145', '$145', 'Solo domingos por ahora — verifica antes de ir', 'Currently Sundays only — verify before going'],
];

function pricesTable(isEs) {
  const rows = PRICES.map(
    ([name, priceEs, priceEn, noteEs, noteEn], i) => `
      <tr class="${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}">
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">${name}</td>
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">${isEs ? priceEs : priceEn} MXN</td>
        <td class="px-4 py-3 text-sm text-gray-600">${isEs ? noteEs : noteEn}</td>
      </tr>`
  ).join('');
  return `
<div class="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-4">
  <table class="min-w-full divide-y divide-gray-200">
    <caption class="sr-only">${isEs ? 'Precios de entrada Huasteca Potosina 2026' : 'Huasteca Potosina entry prices 2026'}</caption>
    <thead class="bg-emerald-700">
      <tr>
        <th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">${isEs ? 'Lugar' : 'Place'}</th>
        <th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">${isEs ? 'Precio 2026' : '2026 price'}</th>
        <th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">${isEs ? 'Nota' : 'Note'}</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-100">${rows}
    </tbody>
  </table>
</div>
<p class="text-xs text-gray-500 italic mb-8">${
    isEs
      ? 'Precios verificados a julio 2026 (Las Pozas: sitio oficial; entradas: El Universal SLP, INAH). Los marcados con ≈ son rangos reportados — confirma en sitio.'
      : 'Prices verified as of July 2026 (Las Pozas: official site; entries: El Universal SLP, INAH). Figures marked ≈ are reported ranges — confirm locally.'
  }</p>`;
}

function dayCard(day, title, body, accent = 'emerald') {
  return `
  <div class="bg-white border-l-4 border-${accent}-500 rounded-r-xl shadow-sm p-6 mb-4">
    <p class="text-xs font-bold text-${accent}-600 uppercase tracking-wide mb-1">${day}</p>
    <h4 class="font-bold text-lg text-gray-900 mb-2">${title}</h4>
    <p class="text-sm text-gray-700 leading-relaxed">${body}</p>
  </div>`;
}

// ── FAQ ─────────────────────────────────────────────────────────────────────
const faqEN = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How many days do you need for Huasteca Potosina?', acceptedAnswer: { '@type': 'Answer', text: 'Three days covers the essentials (Tamul, Cascadas de Micos and Xilitla/Las Pozas) at a fast pace. Five days lets you add the Sótano de las Golondrinas at sunrise and the Tamasopo waterfalls comfortably. Seven days covers everything including the northern waterfalls, rafting on the Tampaón and Media Luna.' } },
    { '@type': 'Question', name: 'When is the water turquoise in Huasteca Potosina?', acceptedAnswer: { '@type': 'Answer', text: 'Roughly November through April. During the rainy season (about June to October) the rivers run high and brown with sediment. January to March is the sweet spot: turquoise water, dry weather and moderate crowds.' } },
    { '@type': 'Question', name: 'Can you visit Huasteca Potosina without a car?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Take a bus from San Luis Potosí to Ciudad Valles (about 4h15, from ~MX$598) and book day tours locally (roughly MX$1,000–2,100 per person per day) or through Viator and GetYourGuide (from about USD $72). A rental car gives more freedom but is not required.' } },
    { '@type': 'Question', name: 'Do I need to book Las Pozas in Xilitla in advance?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Las Pozas uses timed-entry reservations made online between 24 hours and 60 days ahead; you pay at the box office on the day (MX$180 adults + MX$30 mandatory guide, MX$60 for English). It is closed on Tuesdays and last entry is 4 PM. Visits are guided groups only.' } },
    { '@type': 'Question', name: 'Is Huasteca Potosina safe for tourists?', acceptedAnswer: { '@type': 'Answer', text: 'The Huasteca is widely regarded as one of the safer rural travel regions in Mexico, and sites are family-oriented. The practical risks are logistical: avoid driving at night (unlit roads, fog, potholes), carry cash because most sites have no ATMs or card payments, and fill your tank in Ciudad Valles before excursions.' } },
    { '@type': 'Question', name: 'How far is Huasteca Potosina from San Luis Potosí city?', acceptedAnswer: { '@type': 'Answer', text: 'Ciudad Valles, the gateway hub, is about 251 km from San Luis Potosí city via highway MEX-70 — roughly 3.5 hours by car with one toll booth, or about 4h15 by bus.' } },
  ],
};

const faqES = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: '¿Cuántos días necesitas para la Huasteca Potosina?', acceptedAnswer: { '@type': 'Answer', text: 'Tres días cubren lo esencial (Tamul, Cascadas de Micos y Xilitla/Las Pozas) a paso rápido. Con cinco agregas el Sótano de las Golondrinas al amanecer y Tamasopo con calma. Siete días alcanzan para todo: cascadas del norte, rafting en el Tampaón y Media Luna.' } },
    { '@type': 'Question', name: '¿Cuándo está turquesa el agua en la Huasteca?', acceptedAnswer: { '@type': 'Answer', text: 'Aproximadamente de noviembre a abril. En temporada de lluvias (junio a octubre) los ríos bajan crecidos y cafés por el sedimento. De enero a marzo es el punto ideal: agua turquesa, clima seco y menos gente.' } },
    { '@type': 'Question', name: '¿Se puede visitar la Huasteca sin coche?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. Toma un autobús de San Luis Potosí a Ciudad Valles (≈4h15, desde ~$598 MXN) y contrata tours de día locales (≈$1,000–2,100 MXN por persona por día). Un coche rentado da más libertad, pero no es indispensable.' } },
    { '@type': 'Question', name: '¿Hay que reservar Las Pozas de Xilitla con anticipación?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. Las Pozas usa reservación en línea con horario, de 24 horas a 60 días de anticipación; pagas en taquilla el día de tu visita ($180 adultos + $30 de guía obligatorio). Cierra los martes y el último acceso es a las 4 PM. Solo se visita en grupos guiados.' } },
    { '@type': 'Question', name: '¿Es segura la Huasteca Potosina para turistas?', acceptedAnswer: { '@type': 'Answer', text: 'La Huasteca se considera una de las regiones rurales más seguras para viajar en México y los sitios son familiares. Los riesgos reales son logísticos: no manejes de noche (caminos sin luz, neblina, baches), lleva efectivo porque casi nada acepta tarjeta y carga gasolina en Ciudad Valles antes de las excursiones.' } },
    { '@type': 'Question', name: '¿Qué tan lejos está la Huasteca de la ciudad de San Luis Potosí?', acceptedAnswer: { '@type': 'Answer', text: 'Ciudad Valles, la ciudad base, está a unos 251 km de la capital potosina por la carretera MEX-70 — unas 3.5 horas en coche con una caseta, o ~4h15 en autobús.' } },
  ],
};

function faqDetails(faq) {
  return faq.mainEntity
    .map(
      (q) => `<details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">${q.name}<span class="text-emerald-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">${q.acceptedAnswer.text}</p></details>`
    )
    .join('\n  ');
}

// ── EN content ──────────────────────────────────────────────────────────────
const contentEN = `<div class="max-w-none">

<div class="bg-emerald-50 border-l-4 border-emerald-500 rounded-r-xl p-6 mb-10">
  <p class="font-bold text-emerald-900 mb-3">In this guide</p>
  <nav class="grid sm:grid-cols-2 gap-2 text-emerald-800 text-sm">
    <a href="#overview" class="hover:underline">→ Huasteca at a glance</a>
    <a href="#when" class="hover:underline">→ When to go (turquoise season)</a>
    <a href="#getting-there" class="hover:underline">→ Getting there & around</a>
    <a href="#three-days" class="hover:underline">→ The 3-day itinerary</a>
    <a href="#five-days" class="hover:underline">→ 5 days: add the showstoppers</a>
    <a href="#seven-days" class="hover:underline">→ 7 days: the full circuit</a>
    <a href="#prices" class="hover:underline">→ 2026 prices table</a>
    <a href="#las-pozas" class="hover:underline">→ Las Pozas: how reservations work</a>
    <a href="#stay" class="hover:underline">→ Where to stay</a>
    <a href="#faq" class="hover:underline">→ FAQ</a>
  </nav>
  <p class="mt-4 text-sm text-emerald-700 italic">Facts and prices verified July 2026 · Sources cited at the end</p>
</div>

<p class="text-xl leading-relaxed text-gray-800 mb-8 font-medium">
  <strong>The Huasteca Potosina is Mexico's waterfall country</strong> — a jungle region in eastern San Luis Potosí where turquoise rivers pour over limestone: the 105-meter Tamul waterfall, the surrealist garden Edward James built at Las Pozas, and a cave so deep the Empire State Building would fit inside. Here's exactly how to see it in 3, 5 or 7 days, with verified 2026 prices.
</p>

<section id="overview" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">Huasteca at a glance</h2>
</div>
<div class="speakable bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200 rounded-2xl p-6 md:p-8 mb-6">
  <p class="text-base md:text-lg text-gray-800 leading-relaxed mb-5">
    <strong>The Huasteca Potosina</strong> is the tropical east of San Luis Potosí state. Its hub is <strong>Ciudad Valles</strong>, 251 km (~3.5 h) from San Luis Potosí city via highway MEX-70; nearly every attraction is within ~90 minutes of it. The best season is <strong>November–April</strong>, when the water turns turquoise.
  </p>
  <ul class="space-y-2">
    <li class="flex items-start gap-2 text-gray-800"><span class="text-emerald-600 mt-1">•</span><span><strong>The big five:</strong> Cascada de Tamul, Las Pozas (Xilitla), Sótano de las Golondrinas, Cascadas de Micos, Puente de Dios</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-emerald-600 mt-1">•</span><span><strong>Budget:</strong> entries run MX$70–250 per site; day tours from Ciudad Valles ≈ MX$1,000–2,100</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-emerald-600 mt-1">•</span><span><strong>Cash is king:</strong> almost no site takes cards, and there are no ATMs at the waterfalls</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-emerald-600 mt-1">•</span><span><strong>Cultural bonus:</strong> visit around Nov 1–2 for <a href="/cultural/festivals" class="text-emerald-700 underline">Xantolo</a>, the Huasteca's Day of the Dead</span></li>
  </ul>
</div>
</section>

<img src="${IMG.jungle}" alt="Jungle rivers of the Huasteca Potosina" class="w-full rounded-2xl shadow-lg mb-12" loading="lazy" />

<section id="when" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">When to go</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">The photos you've seen — impossibly blue water — are a <strong>dry-season phenomenon</strong>. During the rains (roughly June–October) the rivers run high, fast and brown with sediment. From <strong>November the water clears and turns turquoise</strong>, and stays that way through April:</p>
<ul class="space-y-2 mb-6 text-gray-800">
  <li><strong>November–December:</strong> full flow right after the rains, blue water — the most dramatic waterfalls.</li>
  <li><strong>January–March:</strong> the sweet spot. Turquoise water, dry days, moderate crowds. Rafting season on the Tampaón (Class III) runs November–March.</li>
  <li><strong>April–May:</strong> still blue but volume drops; in the 2024 drought Tamul briefly ran dry, so late-season visitors should temper expectations.</li>
  <li><strong>June–October:</strong> lush green jungle and fewer tourists, but brown water and some closed activities. Prices are lower.</li>
</ul>
<p class="text-gray-800 leading-relaxed">One timing tip beats all others: if you can travel <strong>Oct 30–Nov 2</strong>, you get early turquoise water plus <strong>Xantolo</strong> — the Huasteca's masked Day-of-the-Dead celebrations in Aquismón, Tancanhuitz, Xilitla and Ciudad Valles.</p>
</section>

<section id="getting-there" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">Getting there & around</h2>
</div>
<div class="grid md:grid-cols-2 gap-4 mb-6">
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">🚗 By car (recommended)</h3><p class="text-sm text-gray-700 leading-relaxed">SLP city → Ciudad Valles: 251 km on MEX-70, ~3.5 h, one toll booth (La Pitahaya). From Valles: Micos ~30 min, Tamul (Aquismón piers) ~45–60 min, Tamasopo ~50 min, Xilitla ~1 h 20 (Hwy 85 then 120). Never drive at night — unlit roads, fog and topes are the region's real hazard.</p></div>
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">🚌 Bus + tours</h3><p class="text-sm text-gray-700 leading-relaxed">Buses run SLP → Ciudad Valles in ~4 h 15 (from ~MX$598). From Valles, local operators sell day tours (≈MX$1,000–2,100 per person, transport + gear + guide included), and Viator/GetYourGuide list the same circuits from ~USD $72 — some even with pickup in San Luis Potosí city.</p></div>
</div>
<p class="text-gray-800 leading-relaxed">Base yourself in <strong>Ciudad Valles</strong> for days 1–2 (or the whole trip if you're touring), and consider one night in <strong>Xilitla</strong> — mornings at Las Pozas before the day-trippers arrive are magic.</p>
</section>

<section id="three-days" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">The 3-day itinerary (the essentials)</h2>
</div>
${dayCard('Day 1', 'Drive in + Cascadas de Micos', 'Leave San Luis Potosí early, arrive Ciudad Valles by midday (~3.5 h). Afternoon at Cascadas de Micos, 30 min away: swim, kayak, or do the famous 7-waterfall jumping circuit (≈MX$180) if you have the nerve. Night in Ciudad Valles.')}
${dayCard('Day 2', 'Cascada de Tamul by canoe + Tamasopo', 'The unmissable one. From the La Morena or Tanchachín piers (Aquismón, ~1 h from Valles), you paddle a wooden panga ~4 km upstream between 300-m canyon walls to the base of the 105-m falls — about 2–2.5 h up, 45 min back. Go early; it\'s cash only (≈MX$150–250/person). Afternoon: Puente de Dios or Cascadas de Tamasopo (~50 min away). Night in Valles or Xilitla.')}
${dayCard('Day 3', 'Xilitla: Las Pozas + the Pueblo Mágico', 'Reserve the earliest Las Pozas slot online before your trip (see the reservation box below). The 1.5-h guided walk through Edward James\' surrealist concrete garden in the jungle is unlike anything else in Mexico. Lunch in Xilitla\'s hillside center, coffee from the region, then drive back (Xilitla → SLP ~4.5 h) or overnight and return Day 4.')}
</section>

<section id="five-days" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-teal-500 pb-3 inline-block">5 days: add the showstoppers</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">Keep days 1–3 and slow them down (Tamul and Tamasopo each deserve a full day), then add:</p>
${dayCard('Day 4', 'Sótano de las Golondrinas at dawn', 'Wake at 4:30 AM. From Aquismón you drive toward Tamapatz, then walk ~15 min and descend ~586 steps to the rim of a 512-m-deep vertical cave. At sunrise, tens of thousands of white-collared swifts spiral out of the abyss around you — one of Mexico\'s great natural spectacles (entry ≈MX$100–150). Spend the rest of the day recovering at Puente de Dios.', 'teal')}
${dayCard('Day 5', 'Rafting the Tampaón — or Tamtoc + Media Luna', 'November–March: raft the Class III rapids of the Tampaón canyon (~7 h with lunch, from ~MX$1,890 or USD $115 on Viator). Alternatively, if it\'s a Sunday, visit Tamtoc — the Huastec archaeological city near Tamuín (MX$145; currently open Sundays only, verify before going) — then break the drive home at Media Luna, a crystal-clear thermal lagoon near Rioverde (MX$100).', 'teal')}
</section>

<img src="${IMG.waterfall}" alt="Turquoise waterfall in the Huasteca Potosina" class="w-full rounded-2xl shadow-lg mb-12" loading="lazy" />

<section id="seven-days" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-teal-500 pb-3 inline-block">7 days: the full circuit</h2>
</div>
${dayCard('Day 6', 'The northern waterfalls', 'Head north of Valles for the falls most tours skip: Minas Viejas, El Salto and El Meco (El Naranjo area). Sleep at a riverside eco-lodge like Huasteca Secreta, in bungalows below the Salto del Meco waterfall.', 'teal')}
${dayCard('Day 7', 'Slow Xilitla — or dive Media Luna', 'Option A: a second, unhurried Xilitla day — sleep at Posada El Castillo (the house where Edward James actually lived, ~MX$1,550–2,500/night), browse the coffee shops, day-hike to nearby sotanos. Option B: a full Media Luna day — its six thermal springs hold 27–30°C water with up to 30 m visibility, and PADI schools run dives among petrified trees (permit ≈MX$1,300).', 'teal')}
</section>

<section id="prices" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">2026 prices</h2>
</div>
${pricesTable(false)}
</section>

<section id="las-pozas" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">Las Pozas: how reservations actually work</h2>
</div>
<div class="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6 md:p-8 mb-6">
  <ul class="space-y-3">
    <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">1.</span><span><strong>Reserve online first</strong> at the official site (laspozasxilitla.org.mx) — between <strong>24 hours and 60 days</strong> before your visit. There is currently no online payment.</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">2.</span><span><strong>Pay at the box office</strong> on the day: MX$180 adults, MX$120 seniors/kids 6–12, + <strong>mandatory guide</strong> MX$30 (Spanish) or MX$60 (English). Bring your reservation confirmation and ID.</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">3.</span><span><strong>Your entry time is strict</strong> — miss it and there's no refund. Visits are guided groups of max 25, ~1.5 h; no free wandering.</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">4.</span><span><strong>Closed Tuesdays.</strong> Open Wed–Mon 9 AM–6 PM, last entry 4 PM. Box office from 8 AM (7 AM weekends).</span></li>
  </ul>
  <p class="text-sm text-gray-700 mt-4 pt-3 border-t border-amber-200">Want the full story — Edward James, Dalí, the 1962 frost — plus the town guide? Read our <a href="/blog/xilitla-las-pozas-guide-2026" class="text-emerald-700 underline font-semibold">complete Xilitla & Las Pozas deep-dive</a>.</p>
</div>
<img src="${IMG.xilitla}" alt="Las Pozas surrealist garden in Xilitla" class="w-full rounded-2xl shadow-lg mb-6" loading="lazy" />
</section>

<section id="stay" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">Where to stay</h2>
</div>
<div class="space-y-4">
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">Ciudad Valles (the practical base)</h3><p class="text-sm text-gray-700 leading-relaxed">Hotels with pools in town (Hotel Valles, Hotel San Fernando, Sierra Huasteca Inn), or — the characterful pick — <strong>Hotel Taninul</strong>, a hacienda built around a sulfurous thermal spring ~15 min east of town, doubles from ~MX$975.</p></div>
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">Xilitla (for the Las Pozas morning)</h3><p class="text-sm text-gray-700 leading-relaxed"><strong>Posada El Castillo</strong> is the eight-room house where Edward James lived for ~30 years, one block from the plaza (~MX$1,550–2,500 with breakfast). Budget options: Hostal Café in the center, or posadas near the Las Pozas entrance.</p></div>
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">Eco-lodges (for the full jungle effect)</h3><p class="text-sm text-gray-700 leading-relaxed"><strong>Huasteca Secreta</strong> — glamping and bungalows on the river below the Salto del Meco waterfall (El Naranjo). Aldea Huasteca outside Valles does cabins and camping; Casa Grande Río sits near the Tamul piers.</p></div>
</div>
</section>

<section id="faq" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">FAQ</h2>
</div>
<div class="space-y-4">
  ${faqDetails(faqEN)}
</div>
</section>

<section id="sources" class="mb-8 scroll-mt-8">
<div class="not-prose mb-4">
  <h2 class="text-2xl font-bold text-gray-900 mb-3">Sources</h2>
</div>
<p class="text-sm text-gray-600 leading-relaxed">Prices and rules verified July 2026 against: laspozasxilitla.org.mx (official pricing and reservation system), El Universal San Luis Potosí (Tamul, Micos, Media Luna, Golondrinas entry fees), INAH (Tamtoc hours and fees), SEGAM SLP (Sótano de las Golondrinas protected area), Wikipedia/Conagua reporting (Tamul dimensions and 2024 drought), and route calculators for driving distances. Tour prices from huaxteca.com, Viator and GetYourGuide listings. Where 2026 figures couldn't be confirmed we publish ranges — always carry extra cash.</p>
</section>

<div class="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-center">
  <p class="text-white text-lg font-bold mb-2">Planning a stop in San Luis Potosí city too?</p>
  <p class="text-emerald-100 text-sm mb-4">Get our weekly guide to events, food and life in SLP — free, every Monday.</p>
  <a href="/subscribe" class="inline-block bg-white text-emerald-700 font-bold px-6 py-3 rounded-full hover:bg-emerald-50 transition-colors">Subscribe to San Luis Way Weekly</a>
</div>

<script type="application/ld+json">
${JSON.stringify(faqEN, null, 2)}
</script>

</div>`;

// ── ES content ──────────────────────────────────────────────────────────────
const contentES = `<div class="max-w-none">

<div class="bg-emerald-50 border-l-4 border-emerald-500 rounded-r-xl p-6 mb-10">
  <p class="font-bold text-emerald-900 mb-3">En esta guía</p>
  <nav class="grid sm:grid-cols-2 gap-2 text-emerald-800 text-sm">
    <a href="#resumen" class="hover:underline">→ La Huasteca en breve</a>
    <a href="#cuando" class="hover:underline">→ Cuándo ir (temporada turquesa)</a>
    <a href="#como-llegar" class="hover:underline">→ Cómo llegar y moverte</a>
    <a href="#tres-dias" class="hover:underline">→ Itinerario de 3 días</a>
    <a href="#cinco-dias" class="hover:underline">→ 5 días: los platos fuertes</a>
    <a href="#siete-dias" class="hover:underline">→ 7 días: el circuito completo</a>
    <a href="#precios" class="hover:underline">→ Tabla de precios 2026</a>
    <a href="#las-pozas" class="hover:underline">→ Las Pozas: cómo reservar</a>
    <a href="#hospedaje" class="hover:underline">→ Dónde dormir</a>
    <a href="#faq" class="hover:underline">→ Preguntas frecuentes</a>
  </nav>
  <p class="mt-4 text-sm text-emerald-700 italic">Datos y precios verificados en julio 2026 · Fuentes al final</p>
</div>

<p class="text-xl leading-relaxed text-gray-800 mb-8 font-medium">
  <strong>La Huasteca Potosina es el país de las cascadas</strong>: la región selvática del oriente de San Luis Potosí donde ríos turquesa caen sobre piedra caliza — la cascada de Tamul de 105 metros, el jardín surrealista que Edward James construyó en Las Pozas, y una cueva tan profunda que adentro cabría el Empire State. Aquí está exactamente cómo verla en 3, 5 o 7 días, con precios 2026 verificados.
</p>

<section id="resumen" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">La Huasteca en breve</h2>
</div>
<div class="speakable bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200 rounded-2xl p-6 md:p-8 mb-6">
  <p class="text-base md:text-lg text-gray-800 leading-relaxed mb-5">
    <strong>La Huasteca Potosina</strong> es el oriente tropical del estado. Su base es <strong>Ciudad Valles</strong>, a 251 km (~3.5 h) de la capital por la MEX-70; casi todos los atractivos quedan a menos de 90 minutos. La mejor temporada es <strong>noviembre–abril</strong>, cuando el agua se pone turquesa.
  </p>
  <ul class="space-y-2">
    <li class="flex items-start gap-2 text-gray-800"><span class="text-emerald-600 mt-1">•</span><span><strong>Los 5 imperdibles:</strong> Cascada de Tamul, Las Pozas (Xilitla), Sótano de las Golondrinas, Cascadas de Micos, Puente de Dios</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-emerald-600 mt-1">•</span><span><strong>Presupuesto:</strong> entradas de $70–250 MXN por sitio; tours de día desde Valles ≈ $1,000–2,100</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-emerald-600 mt-1">•</span><span><strong>Todo es en efectivo:</strong> casi ningún sitio acepta tarjeta y no hay cajeros en las cascadas</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-emerald-600 mt-1">•</span><span><strong>Bonus cultural:</strong> del 30 oct al 2 nov se vive el <strong>Xantolo</strong>, el Día de Muertos huasteco</span></li>
  </ul>
</div>
</section>

<img src="${IMG.jungle}" alt="Ríos y selva de la Huasteca Potosina" class="w-full rounded-2xl shadow-lg mb-12" loading="lazy" />

<section id="cuando" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">Cuándo ir</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">Las fotos que has visto — agua azul imposible — son un <strong>fenómeno de secas</strong>. En lluvias (junio–octubre) los ríos bajan crecidos y cafés por el sedimento. Desde <strong>noviembre el agua se aclara y se pone turquesa</strong>, y así se queda hasta abril:</p>
<ul class="space-y-2 mb-6 text-gray-800">
  <li><strong>Noviembre–diciembre:</strong> caudal completo recién pasadas las lluvias y agua azul — las cascadas más dramáticas.</li>
  <li><strong>Enero–marzo:</strong> el punto ideal. Agua turquesa, días secos, gente moderada. El rafting en el Tampaón (clase III) corre de noviembre a marzo.</li>
  <li><strong>Abril–mayo:</strong> sigue azul pero baja el caudal; en la sequía de 2024 Tamul llegó a secarse, así que modera expectativas al final de la temporada.</li>
  <li><strong>Junio–octubre:</strong> selva verdísima y menos turistas, pero agua café y actividades cerradas. Precios más bajos.</li>
</ul>
<p class="text-gray-800 leading-relaxed">Un tip de calendario vale más que todos: si puedes viajar del <strong>30 de octubre al 2 de noviembre</strong>, combinas el inicio del agua turquesa con el <strong>Xantolo</strong> — las comparsas enmascaradas del Día de Muertos huasteco en Aquismón, Tancanhuitz, Xilitla y Ciudad Valles.</p>
</section>

<section id="como-llegar" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">Cómo llegar y moverte</h2>
</div>
<div class="grid md:grid-cols-2 gap-4 mb-6">
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">🚗 En coche (recomendado)</h3><p class="text-sm text-gray-700 leading-relaxed">SLP capital → Ciudad Valles: 251 km por la MEX-70, ~3.5 h, una caseta (La Pitahaya). Desde Valles: Micos ~30 min, Tamul (embarcaderos de Aquismón) ~45–60 min, Tamasopo ~50 min, Xilitla ~1 h 20 (carretera 85 y luego 120). No manejes de noche: caminos sin luz, neblina y topes son el riesgo real de la región.</p></div>
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">🚌 Autobús + tours</h3><p class="text-sm text-gray-700 leading-relaxed">Hay corridas SLP → Ciudad Valles en ~4 h 15 (desde ~$598 MXN). En Valles, los operadores locales venden tours de día (≈$1,000–2,100 por persona con transporte, equipo y guía) y en Viator/GetYourGuide están los mismos circuitos — algunos hasta con pickup en la capital potosina.</p></div>
</div>
<p class="text-gray-800 leading-relaxed">Usa <strong>Ciudad Valles</strong> como base los días 1–2 (o todo el viaje si vas en tours) y considera una noche en <strong>Xilitla</strong> — Las Pozas en la mañana, antes de que lleguen las excursiones, es otra cosa.</p>
</section>

<section id="tres-dias" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">Itinerario de 3 días (lo esencial)</h2>
</div>
${dayCard('Día 1', 'Carretera + Cascadas de Micos', 'Sal temprano de San Luis, llega a Ciudad Valles a mediodía (~3.5 h). Tarde en las Cascadas de Micos, a 30 min: nada, rema o avienta el famoso circuito de salto de 7 cascadas (≈$180) si te atreves. Noche en Ciudad Valles.')}
${dayCard('Día 2', 'Cascada de Tamul en panga + Tamasopo', 'El imperdible. Desde los embarcaderos La Morena o Tanchachín (Aquismón, ~1 h de Valles) remas una panga de madera ~4 km río arriba entre paredes de cañón de 300 m hasta la base de la cascada de 105 m — unas 2–2.5 h de subida, 45 min de regreso. Ve temprano; todo en efectivo (≈$150–250 por persona). Tarde: Puente de Dios o Cascadas de Tamasopo (~50 min). Noche en Valles o Xilitla.')}
${dayCard('Día 3', 'Xilitla: Las Pozas + el Pueblo Mágico', 'Reserva en línea el primer horario de Las Pozas antes del viaje (ve el recuadro de reservación). El recorrido guiado de 1.5 h por el jardín surrealista de concreto que Edward James sembró en la selva no se parece a nada en México. Come en el centro de Xilitla, café de la región, y regresa (Xilitla → SLP ~4.5 h) o quédate una noche más.')}
</section>

<section id="cinco-dias" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-teal-500 pb-3 inline-block">5 días: los platos fuertes</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">Mantén los días 1–3 con más calma (Tamul y Tamasopo merecen día completo cada uno) y agrega:</p>
${dayCard('Día 4', 'Sótano de las Golondrinas al amanecer', 'Despierta a las 4:30 AM. Desde Aquismón manejas rumbo a Tamapatz, caminas ~15 min y bajas ~586 escalones hasta el borde de una sima vertical de 512 m. Al amanecer, decenas de miles de vencejos salen en espiral del abismo a tu alrededor — uno de los grandes espectáculos naturales de México (entrada ≈$100–150). El resto del día, recupérate en Puente de Dios.', 'teal')}
${dayCard('Día 5', 'Rafting en el Tampaón — o Tamtoc + Media Luna', 'De noviembre a marzo: rafting clase III en el cañón del Tampaón (~7 h con comida, desde ~$1,890). Alternativa: si es domingo, visita Tamtoc — la ciudad arqueológica huasteca cerca de Tamuín ($145; por ahora abre solo domingos, verifica antes de ir) — y corta el regreso en la Media Luna, la laguna termal cristalina de Rioverde ($100).', 'teal')}
</section>

<img src="${IMG.waterfall}" alt="Cascada turquesa en la Huasteca Potosina" class="w-full rounded-2xl shadow-lg mb-12" loading="lazy" />

<section id="siete-dias" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-teal-500 pb-3 inline-block">7 días: el circuito completo</h2>
</div>
${dayCard('Día 6', 'Las cascadas del norte', 'Ve al norte de Valles por las cascadas que los tours se saltan: Minas Viejas, El Salto y El Meco (zona de El Naranjo). Duerme en un eco-lodge ribereño como Huasteca Secreta, en bungalows bajo la cascada del Salto del Meco.', 'teal')}
${dayCard('Día 7', 'Xilitla lento — o buceo en Media Luna', 'Opción A: un segundo día sin prisa en Xilitla — duerme en la Posada El Castillo (la casa donde vivió Edward James ~30 años, ~$1,550–2,500 la noche), cafés y caminatas a sótanos cercanos. Opción B: día completo en Media Luna — sus seis manantiales termales tienen agua de 27–30°C con hasta 30 m de visibilidad, y hay escuelas PADI para bucear entre árboles petrificados (permiso ≈$1,300).', 'teal')}
</section>

<section id="precios" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">Precios 2026</h2>
</div>
${pricesTable(true)}
</section>

<section id="las-pozas" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">Las Pozas: cómo funciona la reservación</h2>
</div>
<div class="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6 md:p-8 mb-6">
  <ul class="space-y-3">
    <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">1.</span><span><strong>Primero reserva en línea</strong> en el sitio oficial (laspozasxilitla.org.mx) — de <strong>24 horas a 60 días</strong> antes de tu visita. Por ahora no hay pago en línea.</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">2.</span><span><strong>Paga en taquilla</strong> el día de la visita: $180 adultos, $120 INAPAM/niños 6–12, + <strong>guía obligatorio</strong> $30 (español) o $60 (inglés). Lleva tu confirmación e identificación.</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">3.</span><span><strong>Tu horario de entrada es estricto</strong> — si lo pierdes no hay reembolso. Solo grupos guiados de máx. 25 personas, ~1.5 h; no puedes recorrerlo libre.</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">4.</span><span><strong>Cierra los martes.</strong> Abre mié–lun 9 AM–6 PM, último acceso 4 PM. Taquilla desde las 8 AM (7 AM en fin de semana).</span></li>
  </ul>
  <p class="text-sm text-gray-700 mt-4 pt-3 border-t border-amber-200">¿Quieres la historia completa — Edward James, Dalí, la helada del 62 — y la guía del pueblo? Lee nuestro <a href="/blog/xilitla-las-pozas-guide-2026" class="text-emerald-700 underline font-semibold">deep-dive completo de Xilitla y Las Pozas</a>.</p>
</div>
<img src="${IMG.xilitla}" alt="Jardín surrealista de Las Pozas en Xilitla" class="w-full rounded-2xl shadow-lg mb-6" loading="lazy" />
</section>

<section id="hospedaje" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">Dónde dormir</h2>
</div>
<div class="space-y-4">
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">Ciudad Valles (la base práctica)</h3><p class="text-sm text-gray-700 leading-relaxed">Hoteles con alberca en la ciudad (Hotel Valles, Hotel San Fernando, Sierra Huasteca Inn) o — el de carácter — el <strong>Hotel Taninul</strong>, una hacienda construida alrededor de un manantial termal sulfuroso a ~15 min al oriente, dobles desde ~$975.</p></div>
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">Xilitla (para madrugar en Las Pozas)</h3><p class="text-sm text-gray-700 leading-relaxed">La <strong>Posada El Castillo</strong> es la casa de ocho cuartos donde Edward James vivió ~30 años, a una cuadra de la plaza (~$1,550–2,500 con desayuno). Económicos: Hostal Café en el centro o posadas junto a la entrada de Las Pozas.</p></div>
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">Eco-lodges (efecto selva completo)</h3><p class="text-sm text-gray-700 leading-relaxed"><strong>Huasteca Secreta</strong> — glamping y bungalows sobre el río bajo la cascada del Salto del Meco (El Naranjo). Aldea Huasteca a las afueras de Valles tiene cabañas y camping; Casa Grande Río queda cerca de los embarcaderos de Tamul.</p></div>
</div>
</section>

<section id="faq" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">Preguntas frecuentes</h2>
</div>
<div class="space-y-4">
  ${faqDetails(faqES)}
</div>
</section>

<section id="fuentes" class="mb-8 scroll-mt-8">
<div class="not-prose mb-4">
  <h2 class="text-2xl font-bold text-gray-900 mb-3">Fuentes</h2>
</div>
<p class="text-sm text-gray-600 leading-relaxed">Precios y reglas verificados en julio de 2026 contra: laspozasxilitla.org.mx (precios y sistema de reservación oficiales), El Universal San Luis Potosí (entradas de Tamul, Micos, Media Luna y Golondrinas), INAH (horarios y tarifas de Tamtoc), SEGAM SLP (área natural protegida del Sótano), reportes de Conagua sobre la sequía de 2024 en Tamul, y calculadoras de ruta para distancias. Tours: huaxteca.com, Viator y GetYourGuide. Donde no pudimos confirmar cifras 2026 publicamos rangos — siempre lleva efectivo de sobra.</p>
</section>

<div class="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-center">
  <p class="text-white text-lg font-bold mb-2">¿También harás base en la capital potosina?</p>
  <p class="text-emerald-100 text-sm mb-4">Recibe cada lunes nuestra guía de eventos, comida y vida en SLP — gratis.</p>
  <a href="/subscribe" class="inline-block bg-white text-emerald-700 font-bold px-6 py-3 rounded-full hover:bg-emerald-50 transition-colors">Suscríbete a San Luis Way Weekly</a>
</div>

<script type="application/ld+json">
${JSON.stringify(faqES, null, 2)}
</script>

</div>`;

// ── Post record ─────────────────────────────────────────────────────────────
const post = {
  slug: SLUG,
  status: 'published',
  published_at: new Date().toISOString(),
  image_url: IMG.hero,
  category: 'Travel',
  tags: ['huasteca-potosina', 'itinerary', 'tamul', 'xilitla', 'las-pozas', 'waterfalls', 'travel', 'san-luis-potosi', 'mexico', 'sotano-de-las-golondrinas'],

  title: 'Huasteca Potosina Itinerary: 3, 5 or 7 Days (2026 Guide with Verified Prices)',
  excerpt: "Mexico's waterfall country, planned day by day: Tamul by canoe, Las Pozas' surrealist garden, the Sótano de las Golondrinas at dawn. Verified 2026 prices, the Las Pozas reservation system explained, and when the water actually turns turquoise.",
  content: contentEN,
  meta_title: 'Huasteca Potosina Itinerary 2026: 3, 5 or 7 Days | Prices & Tips',
  meta_description: 'Complete Huasteca Potosina itinerary for 3, 5 or 7 days: Tamul waterfall, Las Pozas Xilitla reservations, Sótano de las Golondrinas. Verified 2026 prices, turquoise-water season, where to stay.',

  title_es: 'Itinerario Huasteca Potosina: 3, 5 o 7 Días (Guía 2026 con Precios Verificados)',
  excerpt_es: 'El país de las cascadas planeado día por día: Tamul en panga, el jardín surrealista de Las Pozas, el Sótano de las Golondrinas al amanecer. Precios 2026 verificados, cómo funciona la reservación de Las Pozas y cuándo se pone turquesa el agua.',
  content_es: contentES,
  meta_title_es: 'Itinerario Huasteca Potosina 2026: 3, 5 o 7 Días | Precios y Tips',
  meta_description_es: 'Itinerario completo de la Huasteca Potosina en 3, 5 o 7 días: cascada de Tamul, reservación de Las Pozas Xilitla, Sótano de las Golondrinas. Precios 2026 verificados, temporada de agua turquesa y dónde dormir.',

  title_de: 'Huasteca Potosina Reiseroute: 3, 5 oder 7 Tage (Guide 2026)',
  excerpt_de: 'Mexikos Wasserfall-Region Tag für Tag geplant: Tamul im Kanu, der surrealistische Garten Las Pozas, der Sótano de las Golondrinas bei Sonnenaufgang. Verifizierte Preise 2026 und die beste Reisezeit für türkisfarbenes Wasser.',
  content_de: contentEN,
  meta_title_de: 'Huasteca Potosina Route 2026: 3, 5 oder 7 Tage | Preise & Tipps',
  meta_description_de: 'Komplette Huasteca-Potosina-Route für 3, 5 oder 7 Tage: Tamul-Wasserfall, Las-Pozas-Reservierung, Sótano de las Golondrinas. Verifizierte Preise 2026 und Unterkünfte.',

  title_ja: 'ワステカ・ポトシーナ旅程：3日・5日・7日（2026年ガイド）',
  excerpt_ja: 'メキシコの滝の王国を日程別にプラン：カヌーで行くタムル滝、シュルレアリスム庭園ラス・ポサス、夜明けのソタノ・デ・ラス・ゴロンドリナス。2026年の料金検証済み、ターコイズ色の水のベストシーズンも解説。',
  content_ja: contentEN,
  meta_title_ja: 'ワステカ・ポトシーナ 3・5・7日旅程 2026 | 料金・ベストシーズン',
  meta_description_ja: 'ワステカ・ポトシーナ完全旅程（3・5・7日）：タムル滝、ラス・ポサス予約方法、ソタノ・デ・ラス・ゴロンドリナス。2026年料金検証済み、宿泊情報付き。',
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
