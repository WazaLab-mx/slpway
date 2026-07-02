// Publishes "Real de Catorce: The Complete Guide (2026)" — deep-dive #3 of
// the EN editorial plan. Facts from the verified dossier of 2026-07-02 (INAH
// chronology, El Universal SLP prices, UNESCO 2025 Wixárika inscription).
// Editorial cautions applied: name origin told as legend, peak population
// "15,000 (lore says 40,000)", mint "roughly three years in the 1860s",
// tunnel toll as a range, peyote covered as legal/conservation warning only,
// Treasure of the Sierra Madre omitted (unverifiable).
require('dotenv').config({ path: '.env' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const SLUG = 'real-de-catorce-guide-2026';

const IMG = {
  hero: '/images/outdoors/real-de-catorce-main.jpg',
  church: '/images/outdoors/real-de-catorce-church.jpg',
  street: '/images/outdoors/real-de-catorce-street.jpg',
  pano: '/images/outdoors/real-catorce.jpg',
};

const faqEN = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is Real de Catorce worth visiting?', acceptedAnswer: { '@type': 'Answer', text: "Yes — it's one of Mexico's most atmospheric destinations: a semi-abandoned silver town at ~2,730 m in the Sierra de Catorce, entered through a 2.3 km one-lane mining tunnel. Count on one full day minimum; an overnight lets you catch the ghost-town ruins at sunrise and the high-desert stars. It pairs naturally with a San Luis Potosí city trip (260 km away)." } },
    { '@type': 'Question', name: 'How do you get to Real de Catorce from San Luis Potosí?', acceptedAnswer: { '@type': 'Answer', text: 'Drive Highway 57 north to Matehuala (about 2 hours), head west through Cedral, then climb roughly 25 km of cobblestone road to the Ogarrio Tunnel — about 4 hours total in practice. By public transport: bus to Matehuala, then combis to the town from Altamirano 104 (departures around 8 AM, 2 PM and 5 PM).' } },
    { '@type': 'Question', name: 'Is there an ATM in Real de Catorce?', acceptedAnswer: { '@type': 'Answer', text: 'There is exactly one ATM, inside the municipal building, and it is famously unreliable. Treat the town as cash-only: bring all the pesos you need for lodging, food, the tunnel toll and willys rides from Matehuala or San Luis Potosí.' } },
    { '@type': 'Question', name: 'What is the tunnel into Real de Catorce?', acceptedAnswer: { '@type': 'Answer', text: "The Ogarrio Tunnel is a 2.3 km (1.5-mile) former mining tunnel — dug 1897–1901 — and the town's main entrance. It fits one lane of traffic, so staff with radios alternate the direction. Expect a small toll (roughly MX$30–60 per vehicle plus a per-person fee, cash). During the October fiesta and Semana Santa, cars park outside at Dolores Trompeta and shuttles take you through." } },
    { '@type': 'Question', name: 'When is the best time to visit Real de Catorce?', acceptedAnswer: { '@type': 'Answer', text: 'October to April brings cool, sunny high-desert days — but nights drop near freezing year-round, so always pack a jacket. Avoid (or embrace) the Fiesta de San Francisco from late September to October 12: tens of thousands of pilgrims arrive, hotels sell out, and in 2026 — the 800th anniversary of St. Francis of Assisi — crowds are expected to break records.' } },
    { '@type': 'Question', name: 'Is peyote legal in Real de Catorce?', acceptedAnswer: { '@type': 'Answer', text: 'No. For anyone who is not a member of a recognized Indigenous people, picking, possessing, transporting or consuming peyote is a federal crime in Mexico (penalties run 5–20 years), and the cactus is also environmentally protected under NOM-059 — it grows painfully slowly and is threatened by extraction. The desert around town, Wirikuta, is sacred Wixárika territory whose pilgrimage route was inscribed by UNESCO in 2025. Enjoy the landscape; leave the peyote alone.' } },
  ],
};

const faqES = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: '¿Vale la pena visitar Real de Catorce?', acceptedAnswer: { '@type': 'Answer', text: 'Sí — es uno de los destinos con más atmósfera de México: un pueblo minero semiabandonado a ~2,730 m en la Sierra de Catorce, al que se entra por un túnel minero de 2.3 km de un solo carril. Cuenta mínimo un día completo; con una noche alcanzas las ruinas del Pueblo Fantasma al amanecer y las estrellas del semidesierto. Combina natural con un viaje a la capital potosina (260 km).' } },
    { '@type': 'Question', name: '¿Cómo llegar a Real de Catorce desde San Luis Potosí?', acceptedAnswer: { '@type': 'Answer', text: 'Por la 57 al norte hasta Matehuala (~2 horas), luego al poniente por Cedral y ~25 km de camino empedrado subiendo la sierra hasta el Túnel de Ogarrio — en la práctica unas 4 horas en total. En transporte público: autobús a Matehuala y combis desde Altamirano 104 (salidas ~8 AM, 2 PM y 5 PM).' } },
    { '@type': 'Question', name: '¿Hay cajero en Real de Catorce?', acceptedAnswer: { '@type': 'Answer', text: 'Hay exactamente un cajero, dentro de la presidencia municipal, y es famosamente poco confiable. Trata al pueblo como solo-efectivo: lleva todos los pesos que necesites para hotel, comida, el peaje del túnel y los willys desde Matehuala o San Luis.' } },
    { '@type': 'Question', name: '¿Qué es el túnel de Real de Catorce?', acceptedAnswer: { '@type': 'Answer', text: 'El Túnel de Ogarrio es un antiguo túnel minero de 2.3 km — excavado entre 1897 y 1901 — y la entrada principal del pueblo. Cabe un solo carril, así que personal con radios alterna el sentido. Hay un peaje pequeño (aprox. $30–60 MXN por vehículo más cuota por persona, en efectivo). En la fiesta de octubre y Semana Santa los coches se quedan en Dolores Trompeta y entras en transporte colectivo.' } },
    { '@type': 'Question', name: '¿Cuándo es la mejor época para ir?', acceptedAnswer: { '@type': 'Answer', text: 'De octubre a abril hay días frescos y soleados de semidesierto alto — pero las noches rondan el cero todo el año: siempre lleva chamarra. Evita (o abraza) la Fiesta de San Francisco de fines de septiembre al 12 de octubre: llegan decenas de miles de peregrinos, los hoteles se agotan, y en 2026 — el 800 aniversario de San Francisco de Asís — se esperan multitudes récord.' } },
    { '@type': 'Question', name: '¿El peyote es legal en Real de Catorce?', acceptedAnswer: { '@type': 'Answer', text: 'No. Para quien no pertenece a un pueblo indígena reconocido, cortar, poseer, transportar o consumir peyote es delito federal en México (penas de 5 a 20 años), y el cactus además está protegido ambientalmente por la NOM-059 — crece lentísimo y está amenazado por la extracción. El desierto que rodea al pueblo, Wirikuta, es territorio sagrado wixárika cuya ruta de peregrinación fue inscrita por la UNESCO en 2025. Disfruta el paisaje; deja el peyote en paz.' } },
  ],
};

function faqDetails(faq) {
  return faq.mainEntity
    .map(
      (q) => `<details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">${q.name}<span class="text-amber-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">${q.acceptedAnswer.text}</p></details>`
    )
    .join('\n  ');
}

// ── EN content ──────────────────────────────────────────────────────────────
const contentEN = `<div class="max-w-none">

<div class="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-6 mb-10">
  <p class="font-bold text-amber-900 mb-3">In this guide</p>
  <nav class="grid sm:grid-cols-2 gap-2 text-amber-800 text-sm">
    <a href="#overview" class="hover:underline">→ Real de Catorce at a glance</a>
    <a href="#history" class="hover:underline">→ Silver, a mint, and a collapse</a>
    <a href="#tunnel" class="hover:underline">→ The Ogarrio Tunnel</a>
    <a href="#town" class="hover:underline">→ What to see in town</a>
    <a href="#beyond" class="hover:underline">→ Willys, horses & the ghost town</a>
    <a href="#wirikuta" class="hover:underline">→ Wirikuta & the Wixárika (read this)</a>
    <a href="#practical" class="hover:underline">→ Getting there, weather, hotels</a>
    <a href="#fiesta" class="hover:underline">→ The San Francisco fiesta — huge in 2026</a>
    <a href="#film" class="hover:underline">→ Hollywood in Catorce</a>
    <a href="#faq" class="hover:underline">→ FAQ</a>
  </nav>
  <p class="mt-4 text-sm text-amber-700 italic">Facts verified July 2026 · Sources at the end · Pairs with our <a href="/weekend-getaways" class="underline">weekend getaways from SLP</a></p>
</div>

<p class="text-xl leading-relaxed text-gray-800 mb-8 font-medium">
  <strong>To reach Real de Catorce you drive 25 km of cobblestone up a desert mountain, then pass through a 2.3-kilometer mining tunnel barely wide enough for your car.</strong> On the other side: a half-abandoned silver town at 2,730 meters where Brad Pitt filmed a movie, pilgrims arrive by the tens of thousands each October, and the surrounding desert is UNESCO-recognized sacred ground. This is the complete 2026 guide.
</p>

<section id="overview" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-amber-500 pb-3 inline-block">Real de Catorce at a glance</h2>
</div>
<div class="speakable bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl p-6 md:p-8 mb-6">
  <p class="text-base md:text-lg text-gray-800 leading-relaxed mb-5">
    <strong>Real de Catorce</strong> is a former silver boomtown in the Sierra de Catorce, ~260 km north of San Luis Potosí city, at about <strong>2,730 m (9,000 ft)</strong>. Once home to some 15,000 people and its own mint, it nearly emptied after silver collapsed around 1900 — and was reborn as one of Mexico's first <strong>Pueblos Mágicos (2001)</strong>.
  </p>
  <ul class="space-y-2">
    <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">•</span><span><strong>The entrance is the experience:</strong> the one-lane, 2.3 km Ogarrio Tunnel (small cash toll, ~MX$30–60/vehicle)</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">•</span><span><strong>Cash only:</strong> one famously unreliable ATM in the municipal building — bring all the pesos you need</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">•</span><span><strong>Cold nights year-round</strong> (0–10°C): pack a jacket even in summer</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">•</span><span><strong>2026 alert:</strong> October's Fiesta de San Francisco marks the saint's 800th anniversary — expect record crowds</span></li>
  </ul>
</div>
</section>

<section id="history" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-amber-500 pb-3 inline-block">Silver, a mint, and a collapse</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">Silver was struck in these mountains in the early 1770s, and the town was formally constituted around 1779–1780. Then came the frenzy: in <strong>1782, forty-eight mines were registered in less than a month</strong>. By the late 19th century Real de Catorce held some of Mexico's richest silver mines, its own <strong>Casa de Moneda</strong> (which coined silver reales for roughly three years in the 1860s before Emperor Maximilian ordered it shut in 1866), and around 15,000 residents — local lore inflates that to 40,000. Mexico's first dynamite blast was set off here, at the La Purísima mine, in 1873.</p>
<p class="text-gray-800 leading-relaxed mb-4">And the name? Nobody actually knows. The two competing legends — fourteen Spanish soldiers ambushed by Chichimeca warriors, or fourteen bandits who robbed silver convoys — are both just that: legends. The only documented anchor is a seam discovered in 1773 at a site already called "Los Catorce."</p>
<p class="text-gray-800 leading-relaxed">When silver prices collapsed after 1900, the town emptied within a generation. The 2010 census counted 1,392 people among mansions, mine works and a cockfighting arena built for a city ten times the size — the "ghost town" texture that makes it unforgettable today.</p>
</section>

<img src="${IMG.street}" alt="Cobblestone street in Real de Catorce" class="w-full rounded-2xl shadow-lg mb-12" loading="lazy" />

<section id="tunnel" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-amber-500 pb-3 inline-block">The Ogarrio Tunnel</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">Two crews digging from opposite sides of the mountain met in the middle in 1901, after four years of work — and gave the town the strangest front door in Mexico. The <strong>Túnel de Ogarrio</strong> (named for engineer Vicente Irizar's hometown in Spain) runs <strong>about 2.3 km</strong> through the rock, fits a single lane, and is managed the old way: staff with radios at each end alternate the direction of traffic.</p>
<div class="bg-gray-50 rounded-xl p-6 mb-4">
  <ul class="space-y-2 text-gray-800 text-sm">
    <li>• <strong>Toll:</strong> roughly MX$30–60 per vehicle plus a small per-person fee — cash.</li>
    <li>• <strong>Hours:</strong> staffed roughly 7 AM–11 PM; crossing after hours is at your own risk.</li>
    <li>• <strong>High season:</strong> during the October fiesta and Semana Santa, private cars park outside at Dolores Trompeta and shuttle vans carry visitors through.</li>
    <li>• <strong>RVs and oversized vehicles</strong> always park outside.</li>
  </ul>
</div>
<p class="text-gray-800 leading-relaxed">The state has announced plans to make the tunnel entry-only with a new exit road on the far side — but as of mid-2026 the alternate route remains pending, so expect the classic alternating system.</p>
</section>

<section id="town" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-amber-500 pb-3 inline-block">What to see in town</h2>
</div>
<div class="space-y-4 mb-6">
  <div class="bg-white border-l-4 border-amber-500 rounded-r-xl shadow-sm p-5"><h3 class="font-bold text-gray-900 mb-1">Parroquia de la Purísima Concepción — and "Panchito"</h3><p class="text-sm text-gray-700">Built between the 1790s and 1817, with a rare floor of broad pine planks. It houses the miracle-credited image of St. Francis of Assisi — <em>Panchito</em> — whom devotees swear walks the hills at night, wearing out his sandals. The walls of ex-votos, many painted on metal sheet by 19th-century miners giving thanks for surviving cave-ins, are reason enough to come.</p></div>
  <div class="bg-white border-l-4 border-amber-500 rounded-r-xl shadow-sm p-5"><h3 class="font-bold text-gray-900 mb-1">Casa de Moneda</h3><p class="text-sm text-gray-700">The 1860s mint, today the town's cultural center (museum entry ~MX$20). A mint this far up a mule track tells you everything about how much silver came out of these mountains.</p></div>
  <div class="bg-white border-l-4 border-amber-500 rounded-r-xl shadow-sm p-5"><h3 class="font-bold text-gray-900 mb-1">Palenque de Gallos & Plaza Hidalgo</h3><p class="text-sm text-gray-700">A 19th-century stone cockfighting arena — Rome-in-miniature — and the tree-lined main square where the willys drivers wait.</p></div>
  <div class="bg-white border-l-4 border-amber-500 rounded-r-xl shadow-sm p-5"><h3 class="font-bold text-gray-900 mb-1">The cemetery & Capilla de Guadalupe</h3><p class="text-sm text-gray-700">The panteón dates to 1775 and surrounds an 18th-century chapel that predates the parish church — the oldest corner of town, and its most photogenic at golden hour.</p></div>
</div>
</section>

<img src="${IMG.church}" alt="Church in Real de Catorce" class="w-full rounded-2xl shadow-lg mb-12" loading="lazy" />

<section id="beyond" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-amber-500 pb-3 inline-block">Willys, horses & the ghost town</h2>
</div>
<div class="grid md:grid-cols-2 gap-4 mb-6">
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">🚙 The willys</h3><p class="text-sm text-gray-700 leading-relaxed">Vintage WWII-style Willys jeeps — once pilgrim transport from the rail station below — now run from Plaza Hidalgo: shared rides down to Estación Catorce and the desert (~MX$50/person collective; ~MX$250/person for 3–4 h shared tours; private jeeps MX$500–1,500 by route). Confirm prices on the plaza.</p></div>
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">🐎 On horseback</h3><p class="text-sm text-gray-700 leading-relaxed">Local guides run rides to the <strong>Pueblo Fantasma</strong> mine ruins (~MX$250, ~100 min) and to <strong>Cerro del Quemado</strong> (~MX$300, ~3 h) — prices from published 2023 guides; expect somewhat more in 2026.</p></div>
</div>
<p class="text-gray-800 leading-relaxed">The <strong>Pueblo Fantasma</strong> — ruined mine works and processing haciendas scattered up the sierra, including the Socavón de la Purísima — is the picture that sells the town: roofless stone walls against 100-km desert views. Go early for the light; wear real shoes.</p>
</section>

<section id="wirikuta" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-teal-500 pb-3 inline-block">Wirikuta & the Wixárika — read this before you go</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">The desert below town is not scenery. It is <strong>Wirikuta</strong> — the sacred territory where, in Wixárika (Huichol) cosmology, the world was created and the Sun was born. Each year Wixárika pilgrims walk hundreds of kilometers to <strong>Cerro del Quemado</strong>, the mountain above Real de Catorce, at the climax of a route that in <strong>July 2025 was inscribed on the UNESCO World Heritage List</strong> — the first living Indigenous tradition in Latin America to receive that recognition.</p>
<div class="bg-teal-50 border-2 border-teal-200 rounded-2xl p-6 md:p-8 mb-4">
  <h3 class="font-bold text-teal-900 mb-3">Visitor etiquette</h3>
  <ul class="space-y-2 text-gray-800 text-sm">
    <li>• Don't photograph ceremonies or pilgrims without explicit permission.</li>
    <li>• Stay out of ritual spaces on El Quemado unless invited; ask your guide what's appropriate.</li>
    <li>• Never handle, collect or buy peyote — see below.</li>
  </ul>
</div>
<div class="bg-red-50 border-2 border-red-200 rounded-2xl p-6 md:p-8 mb-4">
  <h3 class="font-bold text-red-900 mb-3">⚠️ Peyote: the law, plainly</h3>
  <p class="text-sm text-gray-800 leading-relaxed">For anyone who is not a member of a recognized Indigenous people, peyote is <strong>illegal to pick, possess, transport or consume</strong> in Mexico (General Health Law art. 245; Federal Penal Code arts. 194–195, with penalties of 5–20 years). It is also <strong>environmentally protected (NOM-059)</strong>: the cactus takes decades to mature and is being wiped out by extraction — wildlife fines run to millions of pesos. "Peyote tourism" damages a slow-growing plant, a living culture, and potentially your future. Experience the desert's silence instead; it's the real thing.</p>
</div>
<p class="text-gray-800 leading-relaxed text-sm text-gray-600">Context worth knowing: mining concessions still cover much of the Wirikuta reserve, and the Wixárika have fought them for years — the UNESCO listing strengthens that defense.</p>
</section>

<img src="${IMG.pano}" alt="High desert panorama around Real de Catorce" class="w-full rounded-2xl shadow-lg mb-12" loading="lazy" />

<section id="practical" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-amber-500 pb-3 inline-block">Getting there, weather & where to stay</h2>
</div>
<div class="grid md:grid-cols-2 gap-4 mb-6">
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">🚗 From San Luis Potosí city</h3><p class="text-sm text-gray-700 leading-relaxed">~260 km: Hwy 57 north to Matehuala (~2 h), west via Cedral, then ~25 km of cobblestone climbing to the tunnel. Budget <strong>4 hours in practice</strong> — the cobblestone is slow. By bus: SLP → Matehuala, then combis from Altamirano 104 (~8 AM, 2 PM, 5 PM; ~MX$121).</p></div>
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">🌡️ Weather at 2,730 m</h3><p class="text-sm text-gray-700 leading-relaxed">High-desert: sunny days (21°C in January, ~30°C in May) and <strong>cold nights all year</strong> (0–10°C). Jacket always. Best months: October–April.</p></div>
</div>
<div class="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-4">
  <table class="min-w-full divide-y divide-gray-200">
    <caption class="sr-only">Where to stay in Real de Catorce, 2026 indicative prices</caption>
    <thead class="bg-amber-600">
      <tr><th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase">Hotel</th><th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase">Style</th><th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase">From (MXN/night)</th></tr>
    </thead>
    <tbody class="divide-y divide-gray-100">
      <tr class="bg-white"><td class="px-4 py-3 text-sm font-semibold text-gray-900">Mesón de la Abundancia</td><td class="px-4 py-3 text-sm text-gray-600">Boutique in an 1863 stone building; the town's classic</td><td class="px-4 py-3 text-sm text-gray-700">~$1,450–1,900</td></tr>
      <tr class="bg-gray-50"><td class="px-4 py-3 text-sm font-semibold text-gray-900">Villas Alcazaba</td><td class="px-4 py-3 text-sm text-gray-600">Rustic hillside cabins</td><td class="px-4 py-3 text-sm text-gray-700">~$1,800</td></tr>
      <tr class="bg-white"><td class="px-4 py-3 text-sm font-semibold text-gray-900">Mesón del Refugio</td><td class="px-4 py-3 text-sm text-gray-600">By the parish church</td><td class="px-4 py-3 text-sm text-gray-700">~$950–1,500</td></tr>
      <tr class="bg-gray-50"><td class="px-4 py-3 text-sm font-semibold text-gray-900">Hotel El Real</td><td class="px-4 py-3 text-sm text-gray-600">28 rooms, dependable mid-range</td><td class="px-4 py-3 text-sm text-gray-700">~$1,100</td></tr>
    </tbody>
  </table>
</div>
<p class="text-xs text-gray-500 italic mb-6">Published 2023–2026 figures — confirm when booking; weekends and holidays sell out early.</p>
<p class="text-gray-800 leading-relaxed"><strong>Eating:</strong> Mesón de la Abundancia's restaurant and La Porfiriana (mains ~MX$250), La Migaja for Mexican-Italian (~MX$200), street gorditas everywhere — plus a curious cluster of Italian restaurants, a legacy locals trace to the Italian film crews and expats of the 1990s.</p>
</section>

<section id="fiesta" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-amber-500 pb-3 inline-block">The Fiesta de San Francisco — and why 2026 is enormous</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">From the third week of September to about October 12 — peaking on <strong>October 4</strong> — tens of thousands of pilgrims pour through the tunnel to touch Panchito's glass case. Recent editions projected up to 80,000 visitors across the season; hotels run past 90% and the tunnel switches to park-outside-and-shuttle mode.</p>
<div class="bg-amber-100 border-l-4 border-amber-500 rounded-r-xl p-6 mb-4">
  <p class="text-gray-800 leading-relaxed"><strong>2026 is the 800th anniversary of the death of St. Francis of Assisi</strong> (d. October 3, 1226), and Real de Catorce expects amplified religious tourism all season. The municipality has even announced a monumental pink-stone statue of the saint — though as of mid-2026 it remains announced rather than built. If you want the spectacle, book months ahead; if you want the ghost town, come any other month.</p>
</div>
</section>

<section id="film" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-amber-500 pb-3 inline-block">Hollywood in Catorce</h2>
</div>
<p class="text-gray-800 leading-relaxed">The town's ruined-grandeur look has a filmography: <strong>The Mexican (2001)</strong> put Brad Pitt and Julia Roberts on these streets (and through the Ogarrio Tunnel), <strong>Bandidas (2006)</strong> brought Salma Hayek and Penélope Cruz, and the Italian film <strong>Puerto Escondido (1992)</strong> is often credited with starting the town's Italian love affair. Even alt-J shot a music video here ("3WW", 2017).</p>
</section>

<section id="faq" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-amber-500 pb-3 inline-block">FAQ</h2>
</div>
<div class="space-y-4">
  ${faqDetails(faqEN)}
</div>
</section>

<section id="sources" class="mb-8 scroll-mt-8">
<div class="not-prose mb-4">
  <h2 class="text-2xl font-bold text-gray-900 mb-3">Sources</h2>
</div>
<p class="text-sm text-gray-600 leading-relaxed">Verified July 2026 against: INAH (founding chronology, mint, first dynamite use), realdecatorce.info (tunnel construction, parish church, Casa de Moneda), UNESCO World Heritage Centre (Wixárika Route inscription, ref. 1704), Mexico's General Health Law art. 245 and Federal Penal Code arts. 194–195 plus NOM-059-SEMARNAT (peyote legal/conservation status), El Universal SLP (fiesta crowds, tunnel protocol, willys and horseback prices), Wikivoyage 2026 edits (hotels, tunnel toll, combi schedules), El Sol de San Luis and Potosinoticias (2026 tourism agenda, statue announcement, road works), Wikipedia/IMDb (film locations). Where sources conflict — peak population, tunnel toll, the town's name — we present ranges or label legends as legends.</p>
</section>

<div class="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-8 text-center">
  <p class="text-white text-lg font-bold mb-2">Planning more escapes from San Luis Potosí?</p>
  <p class="text-amber-100 text-sm mb-4">See our <a href="/weekend-getaways" class="underline font-semibold text-white">weekend getaways guide</a> and the <a href="/blog/huasteca-potosina-itinerary-2026" class="underline font-semibold text-white">Huasteca Potosina itinerary</a> — or get the weekly agenda free.</p>
  <a href="/subscribe" class="inline-block bg-white text-amber-700 font-bold px-6 py-3 rounded-full hover:bg-amber-50 transition-colors">Subscribe to San Luis Way Weekly</a>
</div>

<script type="application/ld+json">
${JSON.stringify(faqEN, null, 2)}
</script>

</div>`;

// ── ES content ──────────────────────────────────────────────────────────────
const contentES = `<div class="max-w-none">

<div class="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-6 mb-10">
  <p class="font-bold text-amber-900 mb-3">En esta guía</p>
  <nav class="grid sm:grid-cols-2 gap-2 text-amber-800 text-sm">
    <a href="#resumen" class="hover:underline">→ Real de Catorce en breve</a>
    <a href="#historia" class="hover:underline">→ Plata, una casa de moneda y un colapso</a>
    <a href="#tunel" class="hover:underline">→ El Túnel de Ogarrio</a>
    <a href="#pueblo" class="hover:underline">→ Qué ver en el pueblo</a>
    <a href="#alrededores" class="hover:underline">→ Willys, caballos y el Pueblo Fantasma</a>
    <a href="#wirikuta" class="hover:underline">→ Wirikuta y los wixárika (lee esto)</a>
    <a href="#practico" class="hover:underline">→ Cómo llegar, clima y hoteles</a>
    <a href="#fiesta" class="hover:underline">→ La fiesta de San Francisco — enorme en 2026</a>
    <a href="#cine" class="hover:underline">→ Hollywood en Catorce</a>
    <a href="#faq" class="hover:underline">→ Preguntas frecuentes</a>
  </nav>
  <p class="mt-4 text-sm text-amber-700 italic">Datos verificados en julio 2026 · Fuentes al final</p>
</div>

<p class="text-xl leading-relaxed text-gray-800 mb-8 font-medium">
  <strong>Para llegar a Real de Catorce subes 25 km de empedrado por una montaña del desierto y luego cruzas un túnel minero de 2.3 kilómetros donde apenas cabe tu coche.</strong> Del otro lado: un pueblo de plata semiabandonado a 2,730 metros donde Brad Pitt filmó una película, cada octubre llegan decenas de miles de peregrinos, y el desierto que lo rodea es tierra sagrada reconocida por la UNESCO. Esta es la guía completa 2026.
</p>

<section id="resumen" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-amber-500 pb-3 inline-block">Real de Catorce en breve</h2>
</div>
<div class="speakable bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl p-6 md:p-8 mb-6">
  <p class="text-base md:text-lg text-gray-800 leading-relaxed mb-5">
    <strong>Real de Catorce</strong> es un antiguo emporio de plata en la Sierra de Catorce, a ~260 km al norte de la capital potosina y a unos <strong>2,730 m de altitud</strong>. Llegó a tener unos 15,000 habitantes y casa de moneda propia; se vació cuando la plata colapsó hacia 1900 — y renació como uno de los primeros <strong>Pueblos Mágicos (2001)</strong>.
  </p>
  <ul class="space-y-2">
    <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">•</span><span><strong>La entrada es la experiencia:</strong> el Túnel de Ogarrio de un carril y 2.3 km (peaje en efectivo, ~$30–60 por vehículo)</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">•</span><span><strong>Solo efectivo:</strong> hay un único cajero (famosamente fallido) en la presidencia — lleva todos tus pesos</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">•</span><span><strong>Noches frías todo el año</strong> (0–10°C): chamarra siempre, hasta en verano</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">•</span><span><strong>Alerta 2026:</strong> la Fiesta de San Francisco de octubre marca los 800 años del santo — se esperan multitudes récord</span></li>
  </ul>
</div>
</section>

<section id="historia" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-amber-500 pb-3 inline-block">Plata, una casa de moneda y un colapso</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">La plata apareció en estas montañas a principios de los 1770 y el pueblo se constituyó formalmente hacia 1779–1780. Luego vino el frenesí: en <strong>1782 se registraron cuarenta y ocho minas en menos de un mes</strong>. Para fines del siglo XIX Real de Catorce tenía algunas de las minas de plata más ricas de México, su propia <strong>Casa de Moneda</strong> (que acuñó reales de plata unos tres años en la década de 1860, hasta que Maximiliano ordenó cerrarla en 1866) y unos 15,000 habitantes — la leyenda local los infla a 40,000. Aquí tronó la primera dinamita de México, en la mina La Purísima, en 1873.</p>
<p class="text-gray-800 leading-relaxed mb-4">¿Y el nombre? Nadie lo sabe de verdad. Las dos leyendas que compiten — catorce soldados españoles emboscados por chichimecas, o catorce bandidos que asaltaban los cargamentos de plata — son eso: leyendas. Lo único documentado es una veta descubierta en 1773 en un paraje que ya se llamaba "Los Catorce".</p>
<p class="text-gray-800 leading-relaxed">Cuando el precio de la plata se desplomó después de 1900, el pueblo se vació en una generación. El censo de 2010 contó 1,392 personas entre mansiones, obras mineras y un palenque construidos para una ciudad diez veces mayor — la textura de "pueblo fantasma" que hoy lo hace inolvidable.</p>
</section>

<img src="${IMG.street}" alt="Calle empedrada de Real de Catorce" class="w-full rounded-2xl shadow-lg mb-12" loading="lazy" />

<section id="tunel" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-amber-500 pb-3 inline-block">El Túnel de Ogarrio</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">Dos cuadrillas excavando desde lados opuestos de la montaña se encontraron a la mitad en 1901, tras cuatro años de trabajo — y le dieron al pueblo la puerta de entrada más extraña de México. El <strong>Túnel de Ogarrio</strong> (bautizado por el ingeniero Vicente Irizar en honor a su pueblo natal en España) corre <strong>unos 2.3 km</strong> por la roca, cabe un solo carril y se administra a la antigua: personal con radios en cada boca alterna el sentido del tráfico.</p>
<div class="bg-gray-50 rounded-xl p-6 mb-4">
  <ul class="space-y-2 text-gray-800 text-sm">
    <li>• <strong>Peaje:</strong> aprox. $30–60 MXN por vehículo más una cuota pequeña por persona — efectivo.</li>
    <li>• <strong>Horario:</strong> con personal ~7 AM–11 PM; cruzar fuera de horario es bajo tu riesgo.</li>
    <li>• <strong>Temporada alta:</strong> en la fiesta de octubre y Semana Santa los coches se quedan en Dolores Trompeta y entras en camionetas colectivas.</li>
    <li>• <strong>Casas rodantes y vehículos grandes</strong> siempre se quedan afuera.</li>
  </ul>
</div>
<p class="text-gray-800 leading-relaxed">El estado ha anunciado planes para volver el túnel solo-entrada con una salida nueva del otro lado — pero a mediados de 2026 la ruta alterna sigue pendiente, así que espera el clásico sistema alternado.</p>
</section>

<section id="pueblo" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-amber-500 pb-3 inline-block">Qué ver en el pueblo</h2>
</div>
<div class="space-y-4 mb-6">
  <div class="bg-white border-l-4 border-amber-500 rounded-r-xl shadow-sm p-5"><h3 class="font-bold text-gray-900 mb-1">La Parroquia de la Purísima Concepción — y "Panchito"</h3><p class="text-sm text-gray-700">Construida entre los 1790 y 1817, con un raro piso de tablones de pino. Resguarda la imagen milagrosa de San Francisco de Asís — <em>Panchito</em> — de quien los devotos juran que camina los cerros de noche y gasta sus sandalias. Las paredes de exvotos, muchos pintados en lámina por mineros del XIX agradeciendo sobrevivir derrumbes, justifican solas el viaje.</p></div>
  <div class="bg-white border-l-4 border-amber-500 rounded-r-xl shadow-sm p-5"><h3 class="font-bold text-gray-900 mb-1">La Casa de Moneda</h3><p class="text-sm text-gray-700">La ceca de los 1860, hoy centro cultural del pueblo (museo ~$20). Una casa de moneda hasta arriba de un camino de mulas te dice todo sobre cuánta plata salía de estas montañas.</p></div>
  <div class="bg-white border-l-4 border-amber-500 rounded-r-xl shadow-sm p-5"><h3 class="font-bold text-gray-900 mb-1">El Palenque de Gallos y la Plaza Hidalgo</h3><p class="text-sm text-gray-700">Un palenque de piedra del siglo XIX — Roma en miniatura — y la plaza arbolada donde esperan los willys.</p></div>
  <div class="bg-white border-l-4 border-amber-500 rounded-r-xl shadow-sm p-5"><h3 class="font-bold text-gray-900 mb-1">El panteón y la Capilla de Guadalupe</h3><p class="text-sm text-gray-700">El cementerio data de 1775 y rodea una capilla del siglo XVIII anterior a la parroquia — el rincón más antiguo del pueblo, y el más fotogénico a la hora dorada.</p></div>
</div>
</section>

<img src="${IMG.church}" alt="Iglesia de Real de Catorce" class="w-full rounded-2xl shadow-lg mb-12" loading="lazy" />

<section id="alrededores" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-amber-500 pb-3 inline-block">Willys, caballos y el Pueblo Fantasma</h2>
</div>
<div class="grid md:grid-cols-2 gap-4 mb-6">
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">🚙 Los willys</h3><p class="text-sm text-gray-700 leading-relaxed">Jeeps Willys de época — antes transporte de peregrinos desde la estación de tren — salen de la Plaza Hidalgo: colectivo a Estación Catorce y el desierto (~$50 por persona; tours compartidos de 3–4 h ~$250; jeep privado $500–1,500 según ruta). Confirma precios en la plaza.</p></div>
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">🐎 A caballo</h3><p class="text-sm text-gray-700 leading-relaxed">Guías locales llevan al <strong>Pueblo Fantasma</strong> (~$250, ~100 min) y al <strong>Cerro del Quemado</strong> (~$300, ~3 h) — precios publicados en 2023; espera algo más en 2026.</p></div>
</div>
<p class="text-gray-800 leading-relaxed">El <strong>Pueblo Fantasma</strong> — obras mineras y haciendas de beneficio en ruinas sierra arriba, incluido el Socavón de la Purísima — es la postal que vende al pueblo: muros de piedra sin techo contra vistas de 100 km de desierto. Ve temprano por la luz; lleva buen calzado.</p>
</section>

<section id="wirikuta" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-teal-500 pb-3 inline-block">Wirikuta y los wixárika — lee esto antes de ir</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">El desierto bajo el pueblo no es paisaje. Es <strong>Wirikuta</strong> — el territorio sagrado donde, en la cosmovisión wixárika (huichola), se creó el mundo y nació el Sol. Cada año los peregrinos wixárika caminan cientos de kilómetros hasta el <strong>Cerro del Quemado</strong>, la montaña sobre Real de Catorce, culminación de una ruta que en <strong>julio de 2025 fue inscrita en la Lista del Patrimonio Mundial de la UNESCO</strong> — la primera tradición indígena viva de América Latina en recibir ese reconocimiento.</p>
<div class="bg-teal-50 border-2 border-teal-200 rounded-2xl p-6 md:p-8 mb-4">
  <h3 class="font-bold text-teal-900 mb-3">Etiqueta del visitante</h3>
  <ul class="space-y-2 text-gray-800 text-sm">
    <li>• No fotografíes ceremonias ni peregrinos sin permiso explícito.</li>
    <li>• No entres a los espacios rituales del Quemado sin invitación; pregunta a tu guía qué es apropiado.</li>
    <li>• Nunca toques, cortes ni compres peyote — ve abajo.</li>
  </ul>
</div>
<div class="bg-red-50 border-2 border-red-200 rounded-2xl p-6 md:p-8 mb-4">
  <h3 class="font-bold text-red-900 mb-3">⚠️ Peyote: la ley, sin rodeos</h3>
  <p class="text-sm text-gray-800 leading-relaxed">Para quien no pertenece a un pueblo indígena reconocido, el peyote es <strong>ilegal de cortar, poseer, transportar o consumir</strong> en México (art. 245 de la Ley General de Salud; arts. 194–195 del Código Penal Federal, con penas de 5 a 20 años). Además está <strong>protegido ambientalmente (NOM-059)</strong>: el cactus tarda décadas en madurar y la extracción lo está exterminando — las multas ambientales llegan a millones de pesos. El "turismo de peyote" daña una planta lentísima, una cultura viva y, potencialmente, tu futuro. Mejor experimenta el silencio del desierto; eso sí es real.</p>
</div>
<p class="text-gray-800 leading-relaxed text-sm text-gray-600">Contexto que vale saber: las concesiones mineras aún cubren buena parte de la reserva de Wirikuta y los wixárika llevan años defendiéndola — la inscripción de la UNESCO fortalece esa defensa.</p>
</section>

<img src="${IMG.pano}" alt="Panorámica del semidesierto en Real de Catorce" class="w-full rounded-2xl shadow-lg mb-12" loading="lazy" />

<section id="practico" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-amber-500 pb-3 inline-block">Cómo llegar, clima y dónde dormir</h2>
</div>
<div class="grid md:grid-cols-2 gap-4 mb-6">
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">🚗 Desde la capital potosina</h3><p class="text-sm text-gray-700 leading-relaxed">~260 km: carretera 57 al norte hasta Matehuala (~2 h), al poniente por Cedral y ~25 km de empedrado subiendo hasta el túnel. Calcula <strong>4 horas reales</strong> — el empedrado es lento. En transporte: autobús a Matehuala y combis desde Altamirano 104 (~8 AM, 2 PM y 5 PM; ~$121).</p></div>
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">🌡️ Clima a 2,730 m</h3><p class="text-sm text-gray-700 leading-relaxed">Semidesierto de altura: días soleados (21°C en enero, ~30°C en mayo) y <strong>noches frías todo el año</strong> (0–10°C). Chamarra siempre. Mejores meses: octubre–abril.</p></div>
</div>
<div class="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-4">
  <table class="min-w-full divide-y divide-gray-200">
    <caption class="sr-only">Dónde dormir en Real de Catorce, precios indicativos 2026</caption>
    <thead class="bg-amber-600">
      <tr><th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase">Hotel</th><th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase">Estilo</th><th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase">Desde (MXN/noche)</th></tr>
    </thead>
    <tbody class="divide-y divide-gray-100">
      <tr class="bg-white"><td class="px-4 py-3 text-sm font-semibold text-gray-900">Mesón de la Abundancia</td><td class="px-4 py-3 text-sm text-gray-600">Boutique en un edificio de piedra de 1863; el clásico del pueblo</td><td class="px-4 py-3 text-sm text-gray-700">~$1,450–1,900</td></tr>
      <tr class="bg-gray-50"><td class="px-4 py-3 text-sm font-semibold text-gray-900">Villas Alcazaba</td><td class="px-4 py-3 text-sm text-gray-600">Cabañas rústicas en la ladera</td><td class="px-4 py-3 text-sm text-gray-700">~$1,800</td></tr>
      <tr class="bg-white"><td class="px-4 py-3 text-sm font-semibold text-gray-900">Mesón del Refugio</td><td class="px-4 py-3 text-sm text-gray-600">Junto a la parroquia</td><td class="px-4 py-3 text-sm text-gray-700">~$950–1,500</td></tr>
      <tr class="bg-gray-50"><td class="px-4 py-3 text-sm font-semibold text-gray-900">Hotel El Real</td><td class="px-4 py-3 text-sm text-gray-600">28 cuartos, gama media confiable</td><td class="px-4 py-3 text-sm text-gray-700">~$1,100</td></tr>
    </tbody>
  </table>
</div>
<p class="text-xs text-gray-500 italic mb-6">Cifras publicadas 2023–2026 — confirma al reservar; los fines de semana y puentes se agotan pronto.</p>
<p class="text-gray-800 leading-relaxed"><strong>Para comer:</strong> el restaurante del Mesón de la Abundancia y La Porfiriana (platos ~$250), La Migaja para mexicano-italiano (~$200), gorditas de calle por todos lados — y un curioso grupo de restaurantes italianos, herencia que los locales atribuyen a los rodajes y expats italianos de los 90.</p>
</section>

<section id="fiesta" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-amber-500 pb-3 inline-block">La Fiesta de San Francisco — y por qué 2026 será enorme</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">De la tercera semana de septiembre al ~12 de octubre — con pico el <strong>4 de octubre</strong> — decenas de miles de peregrinos cruzan el túnel para tocar la urna de Panchito. Ediciones recientes proyectaron hasta 80,000 visitantes en la temporada; los hoteles pasan del 90% y el túnel cambia a estacionarse-afuera-y-entrar-en-colectivo.</p>
<div class="bg-amber-100 border-l-4 border-amber-500 rounded-r-xl p-6 mb-4">
  <p class="text-gray-800 leading-relaxed"><strong>2026 marca los 800 años de la muerte de San Francisco de Asís</strong> (3 de octubre de 1226), y Real de Catorce espera turismo religioso amplificado toda la temporada. El municipio hasta anunció una escultura monumental del santo en piedra rosa — aunque a mediados de 2026 sigue anunciada, no construida. Si quieres el espectáculo, reserva con meses; si quieres el pueblo fantasma, ve cualquier otro mes.</p>
</div>
</section>

<section id="cine" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-amber-500 pb-3 inline-block">Hollywood en Catorce</h2>
</div>
<p class="text-gray-800 leading-relaxed">La estampa de grandeza en ruinas tiene filmografía: <strong>The Mexican (2001)</strong> puso a Brad Pitt y Julia Roberts en estas calles (y dentro del Túnel de Ogarrio), <strong>Bandidas (2006)</strong> trajo a Salma Hayek y Penélope Cruz, y a la cinta italiana <strong>Puerto Escondido (1992)</strong> se le suele atribuir el romance italiano del pueblo. Hasta alt-J filmó aquí un video ("3WW", 2017).</p>
</section>

<section id="faq" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-amber-500 pb-3 inline-block">Preguntas frecuentes</h2>
</div>
<div class="space-y-4">
  ${faqDetails(faqES)}
</div>
</section>

<section id="fuentes" class="mb-8 scroll-mt-8">
<div class="not-prose mb-4">
  <h2 class="text-2xl font-bold text-gray-900 mb-3">Fuentes</h2>
</div>
<p class="text-sm text-gray-600 leading-relaxed">Verificado en julio de 2026 contra: INAH (cronología de fundación, casa de moneda, primera dinamita), realdecatorce.info (construcción del túnel, parroquia, Casa de Moneda), Centro del Patrimonio Mundial de la UNESCO (inscripción de la Ruta Wixárika, ref. 1704), Ley General de Salud art. 245 y Código Penal Federal arts. 194–195 más NOM-059-SEMARNAT (estatus legal y ambiental del peyote), El Universal SLP (multitudes de la fiesta, protocolo del túnel, precios de willys y caballos), Wikivoyage con ediciones 2026 (hoteles, peaje, combis), El Sol de San Luis y Potosinoticias (agenda turística 2026, escultura anunciada, caminos). Donde las fuentes difieren — población pico, peaje, el origen del nombre — publicamos rangos o presentamos las leyendas como leyendas.</p>
</section>

<div class="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-8 text-center">
  <p class="text-white text-lg font-bold mb-2">¿Planeando más escapadas desde San Luis Potosí?</p>
  <p class="text-amber-100 text-sm mb-4">Mira nuestra <a href="/weekend-getaways" class="underline font-semibold text-white">guía de escapadas de fin de semana</a> y el <a href="/blog/huasteca-potosina-itinerary-2026" class="underline font-semibold text-white">itinerario de la Huasteca</a> — o recibe la agenda semanal gratis.</p>
  <a href="/subscribe" class="inline-block bg-white text-amber-700 font-bold px-6 py-3 rounded-full hover:bg-amber-50 transition-colors">Suscríbete a San Luis Way Weekly</a>
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
  tags: ['real-de-catorce', 'pueblo-magico', 'ghost-town', 'wirikuta', 'wixarika', 'tunel-ogarrio', 'travel', 'san-luis-potosi', 'mexico', 'altiplano'],

  title: "Real de Catorce: The Complete Guide to Mexico's Ghost Town in the Clouds (2026)",
  excerpt: "A silver boomtown at 9,000 ft, entered through a 2.3 km mining tunnel: the verified history, the willys and the Pueblo Fantasma, the sacred Wixárika desert (UNESCO 2025), what peyote law actually says, and why October 2026 — St. Francis's 800th anniversary — will be enormous.",
  content: contentEN,
  meta_title: 'Real de Catorce Guide 2026: Tunnel, Ghost Town, Hotels & Tips',
  meta_description: "Complete 2026 guide to Real de Catorce, Mexico: the Ogarrio Tunnel, willys jeep rides, Pueblo Fantasma, verified hotel prices, Wirikuta etiquette and the huge Oct 2026 St. Francis fiesta. 260 km from San Luis Potosí.",

  title_es: 'Real de Catorce: La Guía Completa del Pueblo Fantasma entre las Nubes (2026)',
  excerpt_es: 'Un emporio de plata a 2,730 m al que se entra por un túnel minero de 2.3 km: la historia verificada, los willys y el Pueblo Fantasma, el desierto sagrado wixárika (UNESCO 2025), lo que de verdad dice la ley del peyote, y por qué octubre 2026 — los 800 años de San Francisco — será enorme.',
  content_es: contentES,
  meta_title_es: 'Real de Catorce 2026: Túnel, Pueblo Fantasma, Hoteles y Tips',
  meta_description_es: 'Guía completa 2026 de Real de Catorce: el Túnel de Ogarrio, paseos en willys, Pueblo Fantasma, hoteles con precios verificados, etiqueta en Wirikuta y la gran fiesta de San Francisco de octubre 2026. A 260 km de SLP.',

  title_de: 'Real de Catorce: Der komplette Guide zur Geisterstadt in den Wolken (2026)',
  excerpt_de: 'Eine Silberstadt auf 2.730 m, erreichbar nur durch einen 2,3-km-Minentunnel: verifizierte Geschichte, Willys-Jeeps, das Pueblo Fantasma, die heilige Wixárika-Wüste (UNESCO 2025) und die riesige San-Francisco-Fiesta im Oktober 2026.',
  content_de: contentEN,
  meta_title_de: 'Real de Catorce Guide 2026: Tunnel, Geisterstadt, Hotels & Tipps',
  meta_description_de: 'Kompletter 2026-Guide zu Real de Catorce, Mexiko: Ogarrio-Tunnel, Willys-Touren, Pueblo Fantasma, verifizierte Hotelpreise und Wirikuta-Etikette. 260 km von San Luis Potosí.',

  title_ja: 'レアル・デ・カトルセ：雲の上のゴーストタウン完全ガイド（2026年）',
  excerpt_ja: '標高2,730m、全長2.3kmの鉱山トンネルだけが入口の銀鉱の町。検証済みの歴史、ウィリスジープ、プエブロ・ファンタスマ、ウィシャリカの聖地ウィリクタ（2025年ユネスコ登録）、そして2026年10月の聖フランシスコ800年祭まで。',
  content_ja: contentEN,
  meta_title_ja: 'レアル・デ・カトルセ完全ガイド2026 | トンネル・ゴーストタウン・ホテル',
  meta_description_ja: 'レアル・デ・カトルセ2026年完全ガイド：オガリオ・トンネル、ウィリスジープ、プエブロ・ファンタスマ、検証済みホテル料金、ウィリクタのマナー。サン・ルイス・ポトシから260km。',
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
