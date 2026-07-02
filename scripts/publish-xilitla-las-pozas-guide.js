// Publishes "Xilitla & Las Pozas: The Complete Guide (2026)" — deep-dive #2
// of the EN editorial plan. Facts from the verified dossiers of 2026-07-02
// (logistics + history). Known discrepancies handled per dossier notes:
// structure count attributed, butterfly story told as James's anecdote,
// "oldest building in the state" phrased as "often cited".
require('dotenv').config({ path: '.env' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const SLUG = 'xilitla-las-pozas-guide-2026';

const IMG = {
  hero: '/images/outdoors/xilitla.webp',
  pools: '/images/blog/xilitla-las-pozas-pools.webp',
  town: '/images/blog/xilitla-pueblo-magico.jpg',
};

const faqEN = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is Las Pozas in Xilitla?', acceptedAnswer: { '@type': 'Answer', text: "Las Pozas is a surrealist sculpture garden built in the jungle of Xilitla, San Luis Potosí, by British poet and arts patron Edward James — the man who bankrolled Salvador Dalí and was painted by Magritte. Between 1962 and his death in 1984 he poured over US$5 million into roughly three dozen concrete follies (the site officially catalogues 27) spread over 9 hectares of rainforest, waterfalls and pools." } },
    { '@type': 'Question', name: 'How much does Las Pozas cost and do I need a reservation?', acceptedAnswer: { '@type': 'Answer', text: 'Adults pay MX$180 at the box office (MX$120 seniors and kids 6–12) plus a mandatory guide fee of MX$30 in Spanish or MX$60 in English. You must reserve a timed entry online first — between 24 hours and 60 days ahead — then pay in person on the day. Closed Tuesdays; last entry 4 PM; English tours run at 10 AM and 3 PM.' } },
    { '@type': 'Question', name: 'Can you swim at Las Pozas?', acceptedAnswer: { '@type': 'Answer', text: 'No — not anymore. Swimming in the pools below the waterfalls used to be allowed, but the site now prohibits it to protect the aging concrete structures. Older guides still say otherwise; they are out of date. For swimming, head to Puente de Dios or the Tamasopo falls about an hour away.' } },
    { '@type': 'Question', name: 'How do you get to Xilitla?', acceptedAnswer: { '@type': 'Answer', text: 'Xilitla is 85 km (~1 h 20) from Ciudad Valles via highways 85 and 120, and roughly 4.5–5 hours from San Luis Potosí city. Most travelers combine it with a Huasteca Potosina circuit based in Ciudad Valles; day tours also run from there.' } },
    { '@type': 'Question', name: 'Is one day enough for Xilitla?', acceptedAnswer: { '@type': 'Answer', text: 'A day trip covers Las Pozas plus a quick look at town. One overnight is much better: you catch the garden at the 9 AM opening before the crowds, plus the 16th-century Augustinian ex-convent, the Leonora Carrington museum and coffee shops. Two nights adds the dusk bird spectacle at the Sótano de las Huahuas and the Sunday market.' } },
    { '@type': 'Question', name: 'Who was Edward James?', acceptedAnswer: { '@type': 'Answer', text: "Edward James (1907–1984) was a British poet and heir who became one of surrealism's great patrons: he contracted to buy Salvador Dalí's entire output for 1938, co-created the Lobster Telephone and Mae West Lips Sofa, and appears in Magritte's famous painting 'Not to Be Reproduced'. He arrived in Xilitla in 1945 with his guide and lifelong friend Plutarco Gastélum, bought a coffee plantation in 1947, and after a 1962 frost killed his orchids, spent two decades building concrete flowers that could never die." } },
  ],
};

const faqES = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: '¿Qué es Las Pozas de Xilitla?', acceptedAnswer: { '@type': 'Answer', text: 'Las Pozas es un jardín escultórico surrealista construido en la selva de Xilitla, San Luis Potosí, por el poeta y mecenas británico Edward James — el hombre que financió a Salvador Dalí y a quien Magritte retrató. Entre 1962 y su muerte en 1984 invirtió más de 5 millones de dólares en unas tres docenas de estructuras de concreto (el sitio cataloga oficialmente 27) repartidas en 9 hectáreas de selva, cascadas y pozas.' } },
    { '@type': 'Question', name: '¿Cuánto cuesta Las Pozas y necesito reservar?', acceptedAnswer: { '@type': 'Answer', text: 'Adultos $180 en taquilla ($120 INAPAM y niños de 6–12) más guía obligatorio: $30 en español o $60 en inglés. Primero debes reservar tu horario en línea — de 24 horas a 60 días antes — y pagar en persona el día de la visita. Cierra los martes; último acceso 4 PM.' } },
    { '@type': 'Question', name: '¿Se puede nadar en Las Pozas?', acceptedAnswer: { '@type': 'Answer', text: 'Ya no. Antes se permitía nadar en las pozas bajo las cascadas, pero hoy está prohibido para proteger las estructuras de concreto. Las guías viejas que dicen lo contrario están desactualizadas. Para nadar, ve a Puente de Dios o a las cascadas de Tamasopo, a una hora de ahí.' } },
    { '@type': 'Question', name: '¿Cómo llegar a Xilitla?', acceptedAnswer: { '@type': 'Answer', text: 'Xilitla está a 85 km (~1 h 20) de Ciudad Valles por las carreteras 85 y 120, y a unas 4.5–5 horas de la capital potosina. La mayoría lo combina con un circuito de la Huasteca con base en Ciudad Valles; también hay tours de día desde ahí.' } },
    { '@type': 'Question', name: '¿Alcanza un día para Xilitla?', acceptedAnswer: { '@type': 'Answer', text: 'En un día ves Las Pozas y un vistazo al pueblo. Con una noche es mucho mejor: entras al jardín a las 9 AM antes de las excursiones, y te da tiempo del exconvento agustino del siglo XVI, el museo Leonora Carrington y los cafés. Dos noches suman el vuelo de aves al atardecer en el Sótano de las Huahuas y el tianguis dominical.' } },
    { '@type': 'Question', name: '¿Quién fue Edward James?', acceptedAnswer: { '@type': 'Answer', text: "Edward James (1907–1984) fue un poeta y heredero británico que se volvió uno de los grandes mecenas del surrealismo: contrató la producción completa de Dalí de 1938, co-creó el Teléfono Langosta y el sofá de labios de Mae West, y aparece en el famoso cuadro de Magritte 'La reproducción prohibida'. Llegó a Xilitla en 1945 con su guía y amigo de por vida Plutarco Gastélum, compró una finca cafetalera en 1947 y, tras la helada de 1962 que mató sus orquídeas, pasó dos décadas construyendo flores de concreto que no pudieran morir." } },
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
    <a href="#overview" class="hover:underline">→ Las Pozas at a glance</a>
    <a href="#edward-james" class="hover:underline">→ Who was Edward James?</a>
    <a href="#the-garden" class="hover:underline">→ The garden: frost, concrete & $5 million</a>
    <a href="#structures" class="hover:underline">→ What you'll actually see</a>
    <a href="#after-james" class="hover:underline">→ Who runs Las Pozas today</a>
    <a href="#visiting" class="hover:underline">→ Visiting in practice (reservations)</a>
    <a href="#town" class="hover:underline">→ Xilitla beyond the garden</a>
    <a href="#nearby" class="hover:underline">→ Nearby: Huahuas & El Salitre</a>
    <a href="#logistics" class="hover:underline">→ Getting there, weather, where to stay</a>
    <a href="#faq" class="hover:underline">→ FAQ</a>
  </nav>
  <p class="mt-4 text-sm text-emerald-700 italic">Facts verified July 2026 · Sources at the end · Part of our <a href="/blog/huasteca-potosina-itinerary-2026" class="underline">Huasteca Potosina itinerary</a></p>
</div>

<p class="text-xl leading-relaxed text-gray-800 mb-8 font-medium">
  <strong>Deep in the cloud forest of eastern San Luis Potosí, a British aristocrat spent two decades and over five million dollars building a surrealist dream out of concrete.</strong> Las Pozas — staircases that climb into nothing, flowers taller than houses, a palace meant for no one — is the strangest, most photogenic place in Mexico you can still have nearly to yourself at 9 AM. This is the full story, plus everything you need to visit in 2026.
</p>

<section id="overview" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">Las Pozas at a glance</h2>
</div>
<div class="speakable bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200 rounded-2xl p-6 md:p-8 mb-6">
  <p class="text-base md:text-lg text-gray-800 leading-relaxed mb-5">
    <strong>Las Pozas</strong> is the surrealist sculpture garden Edward James built between 1962 and 1984 in the jungle above Xilitla, a Pueblo Mágico in the Huasteca Potosina. Roughly three dozen monumental concrete structures (the site officially catalogues 27) stand across <strong>9 hectares</strong> of rainforest, waterfalls and natural pools, at over 600 m of altitude.
  </p>
  <ul class="space-y-2">
    <li class="flex items-start gap-2 text-gray-800"><span class="text-emerald-600 mt-1">•</span><span><strong>Entry 2026:</strong> MX$180 adults + mandatory guide (MX$30 Spanish / MX$60 English) — timed reservation online, payment at the box office</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-emerald-600 mt-1">•</span><span><strong>Closed Tuesdays</strong> for conservation · open Wed–Mon 9 AM–6 PM, last entry 4 PM · English tours 10 AM & 3 PM</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-emerald-600 mt-1">•</span><span><strong>Swimming is no longer allowed</strong> in the pools — older guides are out of date</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-emerald-600 mt-1">•</span><span><strong>Getting there:</strong> 1 h 20 from Ciudad Valles; ~4.5–5 h from San Luis Potosí city</span></li>
  </ul>
</div>
</section>

<section id="edward-james" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">Who was Edward James?</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">Edward Frank Willis James (1907–1984) grew up on a 6,000-acre English estate, went to Eton and Oxford, and inherited a mining fortune young. Society gossip whispered — and James playfully never denied — that he was the illegitimate grandson of King Edward VII. What is documented is stranger than the rumor: he became <strong>one of the most important patrons surrealism ever had</strong>.</p>
<ul class="space-y-3 mb-6 text-gray-800">
  <li><strong>He bankrolled Dalí.</strong> Under a contract covering 1937–38, James agreed to buy Salvador Dalí's entire output — effectively funding the painter for a year — and collaborated on two icons of the movement: the <em>Lobster Telephone</em> and the <em>Mae West Lips Sofa</em>.</li>
  <li><strong>Magritte painted him — twice.</strong> During a 1937 stay at James's London house, René Magritte produced <em>Not to Be Reproduced</em>, the famous painting of a man facing a mirror that reflects the back of his own head. The man is Edward James.</li>
  <li><strong>He championed Leonora Carrington</strong> and assembled one of the greatest surrealist collections outside France — a detail that matters later in this story.</li>
</ul>
<p class="text-gray-800 leading-relaxed mb-4">In the mid-1940s James drifted from New Mexico into Mexico. In Cuernavaca he hired <strong>Plutarco Gastélum</strong>, a Yaqui guide from Sonora, and in November 1945 the two reached Xilitla chasing reports of spectacular wild orchids. As James loved to tell it, a cloud of butterflies engulfed his bathing companion at a jungle pool — and he took it as a sign. In 1947 he bought the coffee plantation at Las Pozas.</p>
<p class="text-gray-800 leading-relaxed">Gastélum became the project's foreman and James's lifelong anchor in Mexico. He raised his family in <strong>El Castillo</strong>, the gothic-fantasy house he built in town — where "Uncle Edward" kept rooms for decades, and where you can sleep today (it is now the Posada El Castillo).</p>
</section>

<img src="${IMG.pools}" alt="Waterfall pools at Las Pozas, Xilitla" class="w-full rounded-2xl shadow-lg mb-12" loading="lazy" />

<section id="the-garden" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">The frost that built a garden</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">For fifteen years Las Pozas was, above all, an orchid plantation — James grew thousands of them and kept exotic animals (deer, flamingos, and famously snakes). Then, in <strong>1962, an unprecedented frost killed the orchid collection overnight</strong>.</p>
<p class="text-gray-800 leading-relaxed mb-4">James's response defines the place: he resolved to build <strong>flowers that could never die — in concrete</strong>. From 1962 until his death in 1984, crews of local masons, carpenters and blacksmiths — more than 150 workers over the project's life, with carpenter José Aguilar carving the wooden molds — poured a fantasy of columns shaped like bamboo and orchids, gates, aqueducts, spiral stairs and towers among the waterfalls.</p>
<div class="bg-gray-50 rounded-xl p-6 mb-6">
  <p class="text-gray-800 leading-relaxed"><strong>The price of a dream:</strong> construction cost over <strong>US$5 million</strong>, which James raised largely by auctioning off his surrealist art collection — the Dalís and Magrittes traded, in effect, for concrete in the jungle. He called one tower "the Tower of Hope" and meant to live in it. He never finished it; when he died in 1984, construction stopped mid-pour, and several structures remain frozen exactly where the workers left them.</p>
</div>
</section>

<section id="structures" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">What you'll actually see</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">The guided circuit (~1.5 hours, groups of max 25) winds uphill past the essentials. Names matter here — James titled his follies like poems:</p>
<div class="space-y-4 mb-6">
  <div class="bg-white border-l-4 border-emerald-500 rounded-r-xl shadow-sm p-5"><h3 class="font-bold text-gray-900 mb-1">The House on Three Floors Which Will in Fact Have Five or Four or Six</h3><p class="text-sm text-gray-700">The signature structure — restored in 2012–2013 with help from the World Monuments Fund after decades of jungle humidity.</p></div>
  <div class="bg-white border-l-4 border-emerald-500 rounded-r-xl shadow-sm p-5"><h3 class="font-bold text-gray-900 mb-1">The Stairway to Heaven</h3><p class="text-sm text-gray-700">A 20-meter spiral of orchid-form columns that climbs into open air and simply… ends. The most photographed spot in the garden.</p></div>
  <div class="bg-white border-l-4 border-emerald-500 rounded-r-xl shadow-sm p-5"><h3 class="font-bold text-gray-900 mb-1">The Bamboo Palace ("Tower of Hope")</h3><p class="text-sm text-gray-700">On one of the highest points with the best views — the home James intended for himself and never occupied.</p></div>
  <div class="bg-white border-l-4 border-emerald-500 rounded-r-xl shadow-sm p-5"><h3 class="font-bold text-gray-900 mb-1">The House with a Roof like a Whale, St. Edward's Plaza, the Cinematographer…</h3><p class="text-sm text-gray-700">…and Don Eduardo's Cabin, the wood-and-bamboo hut where James actually lived among his pet snakes, restored by the World Monuments Fund.</p></div>
</div>
<p class="text-gray-800 leading-relaxed">Below it all run the <em>pozas</em> themselves — the nine stepped waterfall pools that gave the place its name. You can photograph them from the paths, but <strong>swimming is no longer permitted</strong>.</p>
</section>

<section id="after-james" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">Who runs Las Pozas today</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">When James died in 1984, the land passed to Plutarco Gastélum, who halted all construction. The garden opened informally to visitors in the early 1990s. In <strong>2007 the Fundación Pedro y Elena Hernández, CEMEX and the San Luis Potosí state government bought the site for about US$2.2 million</strong> and created <strong>Fondo Xilitla</strong>, the trust that manages it today.</p>
<p class="text-gray-800 leading-relaxed">The honors piled up: State Cultural Heritage (2006), Mexico's <strong>UNESCO World Heritage Tentative List (2009)</strong>, the World Monuments Fund Watch (2010) and <strong>Artistic Monument of the Nation (2012)</strong> — a designation rarely granted to 20th-century sites. Conservation is a permanent battle (concrete + jungle humidity + roots), which is exactly why the garden closes every Tuesday. Well over 100,000 people visit each year.</p>
</section>

<section id="visiting" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-amber-500 pb-3 inline-block">Visiting in practice</h2>
</div>
<div class="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6 md:p-8 mb-6">
  <h3 class="font-bold text-amber-900 mb-3">The reservation system (don't skip this)</h3>
  <ul class="space-y-3">
    <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">1.</span><span><strong>Reserve online first</strong> at laspozasxilitla.org.mx, between <strong>24 hours and 60 days</strong> ahead. There is no online payment.</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">2.</span><span><strong>Pay at the box office</strong> on the day: MX$180 adults, MX$120 seniors/kids 6–12, plus the <strong>mandatory guide</strong> (MX$30 Spanish / MX$60 English; English tours at 10 AM and 3 PM). Bring confirmation + ID.</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">3.</span><span><strong>Entry times are strict</strong> — no refund if you miss yours. Closed Tuesdays; last entry 4 PM.</span></li>
  </ul>
</div>
<div class="grid md:grid-cols-2 gap-4 mb-6">
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">📷 Photo rules</h3><p class="text-sm text-gray-700 leading-relaxed">Phones and handheld cameras are fine for personal use. <strong>No tripods, lighting rigs or pro kits, and drones are prohibited</strong> without a special production permit. Best light: right at the 9 AM opening, when mist still hangs in the canopy and the tour buses haven't arrived.</p></div>
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">⚠️ Know before you go</h3><p class="text-sm text-gray-700 leading-relaxed">The garden is a hillside of stairs and mossy, slippery concrete — officially not recommended for people with mobility or heart conditions; strollers are banned. Wear grippy shoes. Give it a full morning even though the tour is ~1.5 h.</p></div>
</div>
</section>

<img src="${IMG.town}" alt="Xilitla town in the Huasteca Potosina cloud forest" class="w-full rounded-2xl shadow-lg mb-12" loading="lazy" />

<section id="town" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">Xilitla beyond the garden</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">Most visitors treat Xilitla as a parking lot for Las Pozas. Give the town an afternoon and it repays you — a hillside Pueblo Mágico (since 2011) of coffee, fog and layered history, home to living Nahua and Teenek (Huastec) communities:</p>
<div class="space-y-4 mb-6">
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">⛪ The Augustinian ex-convent (1550s)</h3><p class="text-sm text-gray-700 leading-relaxed">Construction of this fortress-monastery began in 1553, and it's often cited as the oldest standing building in the state. It was literally built for war — Chichimeca raids burned its roof in the 1580s — and its plateresque bulk still dominates the plaza.</p></div>
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">🎨 Museo Leonora Carrington Xilitla</h3><p class="text-sm text-gray-700 leading-relaxed">Opened in 2018 with sculptures, drawings, tapestries and masks donated by the artist's son. The circle closes here: Carrington was Edward James's friend, and he championed her work decades before the world caught up. (Her larger museum is in <a href="/blog/leonora-carrington-san-luis-potosi-museo-centro-artes-surrealism" class="text-emerald-700 underline">San Luis Potosí city</a>.)</p></div>
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">☕ Coffee country</h3><p class="text-sm text-gray-700 leading-relaxed">Over 2,500 mm of rain a year makes Xilitla one of the wettest — and best coffee — corners of Mexico. Try locally grown cups around the plaza; there's a coffee fair every August. Sunday is market day, when the tianguis fills the center with Huasteca food and crafts.</p></div>
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">🏰 El Castillo</h3><p class="text-sm text-gray-700 leading-relaxed">Plutarco Gastélum's gothic-fantasy house in town, where James lived for long stretches. Today it's both a small museum and the Posada El Castillo (~MX$1,550–2,500/night) — sleeping in Edward James's house is the single best flex in the Huasteca.</p></div>
</div>
</section>

<section id="nearby" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-teal-500 pb-3 inline-block">Nearby: the local's add-ons</h2>
</div>
<div class="space-y-4 mb-6">
  <div class="bg-white border-l-4 border-teal-500 rounded-r-xl shadow-sm p-5"><h3 class="font-bold text-gray-900 mb-1">Sótano de las Huahuas (~1 h away)</h3><p class="text-sm text-gray-700">A ~480 m collapse pit near Aquismón where hundreds of thousands of swifts and green parakeets spiral out at dawn and dive back at dusk (~5:30–6:30 PM). Entry MX$30 plus a ~30–40 min stone-path hike — the quieter alternative to the famous Sótano de las Golondrinas.</p></div>
  <div class="bg-white border-l-4 border-teal-500 rounded-r-xl shadow-sm p-5"><h3 class="font-bold text-gray-900 mb-1">Cueva del Salitre</h3><p class="text-sm text-gray-700">A huge cave mouth just outside town (small cash fee, ~MX$25–50), reached by an easy ~3-mile round-trip trail. Bring a headlamp — and a guide if you want to go deep.</p></div>
</div>
<p class="text-gray-800 leading-relaxed">Building a longer trip? Xilitla is Day 3 of our <a href="/blog/huasteca-potosina-itinerary-2026" class="text-emerald-700 underline font-semibold">Huasteca Potosina 3/5/7-day itinerary</a>, which covers Tamul, the waterfalls and all 2026 prices.</p>
</section>

<section id="logistics" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">Getting there, weather & where to stay</h2>
</div>
<div class="grid md:grid-cols-2 gap-4 mb-6">
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">🚗 Getting there</h3><p class="text-sm text-gray-700 leading-relaxed">From Ciudad Valles: 85 km, ~1 h 20 (Hwy 85 south, then Hwy 120 up the mountain). From San Luis Potosí city: ~4.5–5 h total. Don't drive the sierra at night — fog is routine at this altitude.</p></div>
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">🌦️ Weather</h3><p class="text-sm text-gray-700 leading-relaxed">Cloud-forest climate, noticeably cooler than the lowland Huasteca. Dec–Mar: crisp, lows to ~8°C, high humidity. Jun–Sep: heavy rain (brief August respite). Jan–Mar offers the most reliable conditions — check a 10-day forecast either way.</p></div>
</div>
<p class="text-gray-800 leading-relaxed"><strong>Sleep:</strong> Posada El Castillo for the history; Hostal Café and simple posadas near the Las Pozas entrance for budget. One night covers the garden + town; two nights add Huahuas at dusk and the Sunday market.</p>
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
<p class="text-sm text-gray-600 leading-relaxed">Verified July 2026 against: laspozasxilitla.org.mx (official history, prices, visit rules), Wikipedia entries for Edward James, Las Pozas and Xilitla (biographical dates, Dalí contract, Magritte portraits, construction figures), UNESCO Tentative Lists (ref. 5493), World Monuments Fund project pages (restorations), Museo Leonora Carrington official information, El Universal SLP and Huasteca regional sources (ex-convent history, Sótano de las Huahuas). Where sources disagree — structure counts (official: 27; most media: 36), the butterfly anecdote, "oldest building in the state" — we attribute rather than assert.</p>
</section>

<div class="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-center">
  <p class="text-white text-lg font-bold mb-2">Planning your Huasteca trip from San Luis Potosí?</p>
  <p class="text-emerald-100 text-sm mb-4">Get our weekly guide to events, food and travel in SLP — free, every Monday.</p>
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
    <a href="#resumen" class="hover:underline">→ Las Pozas en breve</a>
    <a href="#edward-james" class="hover:underline">→ ¿Quién fue Edward James?</a>
    <a href="#el-jardin" class="hover:underline">→ El jardín: la helada, el concreto y los $5 millones</a>
    <a href="#estructuras" class="hover:underline">→ Qué vas a ver</a>
    <a href="#despues" class="hover:underline">→ Quién administra Las Pozas hoy</a>
    <a href="#visita" class="hover:underline">→ La visita en la práctica (reservación)</a>
    <a href="#pueblo" class="hover:underline">→ Xilitla más allá del jardín</a>
    <a href="#cerca" class="hover:underline">→ Cerca: Huahuas y El Salitre</a>
    <a href="#logistica" class="hover:underline">→ Cómo llegar, clima y hospedaje</a>
    <a href="#faq" class="hover:underline">→ Preguntas frecuentes</a>
  </nav>
  <p class="mt-4 text-sm text-emerald-700 italic">Datos verificados en julio 2026 · Fuentes al final · Parte de nuestro <a href="/blog/huasteca-potosina-itinerary-2026" class="underline">itinerario de la Huasteca Potosina</a></p>
</div>

<p class="text-xl leading-relaxed text-gray-800 mb-8 font-medium">
  <strong>En la niebla de la sierra del oriente potosino, un aristócrata británico gastó dos décadas y más de cinco millones de dólares construyendo un sueño surrealista en concreto.</strong> Las Pozas — escaleras que suben a la nada, flores más altas que casas, un palacio que nadie habitó — es el lugar más extraño y fotogénico de México que todavía puedes tener casi para ti solo a las 9 AM. Esta es la historia completa, más todo lo que necesitas para visitarlo en 2026.
</p>

<section id="resumen" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">Las Pozas en breve</h2>
</div>
<div class="speakable bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200 rounded-2xl p-6 md:p-8 mb-6">
  <p class="text-base md:text-lg text-gray-800 leading-relaxed mb-5">
    <strong>Las Pozas</strong> es el jardín escultórico surrealista que Edward James construyó entre 1962 y 1984 en la selva de Xilitla, Pueblo Mágico de la Huasteca Potosina. Unas tres docenas de estructuras monumentales de concreto (el sitio cataloga oficialmente 27) se reparten en <strong>9 hectáreas</strong> de selva, cascadas y pozas naturales, a más de 600 m de altitud.
  </p>
  <ul class="space-y-2">
    <li class="flex items-start gap-2 text-gray-800"><span class="text-emerald-600 mt-1">•</span><span><strong>Entrada 2026:</strong> $180 adultos + guía obligatorio ($30 español / $60 inglés) — reservación con horario en línea, pago en taquilla</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-emerald-600 mt-1">•</span><span><strong>Cierra los martes</strong> por conservación · abre mié–lun 9 AM–6 PM, último acceso 4 PM</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-emerald-600 mt-1">•</span><span><strong>Ya no se permite nadar</strong> en las pozas — las guías viejas están desactualizadas</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-emerald-600 mt-1">•</span><span><strong>Cómo llegar:</strong> 1 h 20 desde Ciudad Valles; ~4.5–5 h desde la capital potosina</span></li>
  </ul>
</div>
</section>

<section id="edward-james" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">¿Quién fue Edward James?</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">Edward Frank Willis James (1907–1984) creció en una finca inglesa de 6,000 acres, pasó por Eton y Oxford y heredó joven una fortuna minera. El chisme de sociedad susurraba — y James nunca lo desmintió del todo, jugando con la ambigüedad en sus memorias — que era nieto ilegítimo del rey Eduardo VII. Lo documentado es más extraño que el rumor: se convirtió en <strong>uno de los mecenas más importantes que tuvo el surrealismo</strong>.</p>
<ul class="space-y-3 mb-6 text-gray-800">
  <li><strong>Financió a Dalí.</strong> Con un contrato que cubría 1937–38, James se comprometió a comprar la producción completa de Salvador Dalí — en la práctica, lo mantuvo un año entero — y colaboró en dos íconos del movimiento: el <em>Teléfono Langosta</em> y el sofá de labios de Mae West.</li>
  <li><strong>Magritte lo pintó — dos veces.</strong> Durante una estancia de 1937 en su casa de Londres, René Magritte pintó <em>La reproducción prohibida</em>, el famoso cuadro del hombre frente a un espejo que refleja su propia nuca. El hombre es Edward James.</li>
  <li><strong>Impulsó a Leonora Carrington</strong> y reunió una de las mayores colecciones surrealistas fuera de Francia — un detalle que importa más adelante en esta historia.</li>
</ul>
<p class="text-gray-800 leading-relaxed mb-4">A mediados de los años 40, James bajó de Nuevo México hacia México. En Cuernavaca contrató a <strong>Plutarco Gastélum</strong>, un guía yaqui de Sonora, y en noviembre de 1945 llegaron juntos a Xilitla siguiendo reportes de orquídeas silvestres espectaculares. Como a James le encantaba contarlo, una nube de mariposas envolvió a su compañero mientras se bañaba en una poza — y lo tomó como una señal. En 1947 compró la finca cafetalera de Las Pozas.</p>
<p class="text-gray-800 leading-relaxed">Gastélum se volvió el capataz de la obra y el ancla de James en México. Crió a su familia en <strong>El Castillo</strong>, la casa de fantasía gótica que construyó en el pueblo — donde el "tío Eduardo" tuvo habitaciones por décadas, y donde hoy puedes dormir (es la Posada El Castillo).</p>
</section>

<img src="${IMG.pools}" alt="Pozas y cascadas en Las Pozas, Xilitla" class="w-full rounded-2xl shadow-lg mb-12" loading="lazy" />

<section id="el-jardin" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">La helada que construyó un jardín</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">Durante quince años Las Pozas fue, ante todo, una finca de orquídeas — James cultivó miles y tuvo animales exóticos (venados, flamencos y, famosamente, serpientes). Hasta que en <strong>1962 una helada sin precedente mató la colección de orquídeas de un día para otro</strong>.</p>
<p class="text-gray-800 leading-relaxed mb-4">La respuesta de James define el lugar: decidió construir <strong>flores que no pudieran morir — de concreto</strong>. De 1962 hasta su muerte en 1984, cuadrillas de albañiles, carpinteros y herreros locales — más de 150 trabajadores a lo largo del proyecto, con el carpintero José Aguilar tallando los moldes de madera — vaciaron una fantasía de columnas con forma de bambú y orquídea, portones, acueductos, escaleras de caracol y torres entre las cascadas.</p>
<div class="bg-gray-50 rounded-xl p-6 mb-6">
  <p class="text-gray-800 leading-relaxed"><strong>El precio del sueño:</strong> la obra costó más de <strong>5 millones de dólares</strong>, que James reunió en gran parte subastando su colección de arte surrealista — los Dalí y los Magritte cambiados, en efecto, por concreto en la selva. A una torre la llamó "la Torre de la Esperanza" y pensaba vivir en ella. Nunca la terminó; cuando murió en 1984 la construcción se detuvo a media obra, y varias estructuras siguen congeladas exactamente donde las dejaron los trabajadores.</p>
</div>
</section>

<section id="estructuras" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">Qué vas a ver</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">El recorrido guiado (~1.5 horas, grupos de máximo 25) sube entre lo esencial. Aquí los nombres importan — James bautizaba sus caprichos como poemas:</p>
<div class="space-y-4 mb-6">
  <div class="bg-white border-l-4 border-emerald-500 rounded-r-xl shadow-sm p-5"><h3 class="font-bold text-gray-900 mb-1">La Casa de Tres Pisos que Podrían Ser Cinco o Cuatro o Seis</h3><p class="text-sm text-gray-700">La estructura insignia — restaurada en 2012–2013 con apoyo del World Monuments Fund tras décadas de humedad selvática.</p></div>
  <div class="bg-white border-l-4 border-emerald-500 rounded-r-xl shadow-sm p-5"><h3 class="font-bold text-gray-900 mb-1">La Escalera al Cielo</h3><p class="text-sm text-gray-700">Un caracol de 20 metros con columnas en forma de orquídea que sube al aire abierto y simplemente… termina. El punto más fotografiado del jardín.</p></div>
  <div class="bg-white border-l-4 border-emerald-500 rounded-r-xl shadow-sm p-5"><h3 class="font-bold text-gray-900 mb-1">El Palacio de Bambú ("Torre de la Esperanza")</h3><p class="text-sm text-gray-700">En uno de los puntos más altos y con las mejores vistas — la casa que James se construyó y nunca ocupó.</p></div>
  <div class="bg-white border-l-4 border-emerald-500 rounded-r-xl shadow-sm p-5"><h3 class="font-bold text-gray-900 mb-1">La Casa con Techo de Ballena, la Plaza de San Eduardo, el Cinematógrafo…</h3><p class="text-sm text-gray-700">…y la Cabaña de Don Eduardo, la choza de madera y bambú donde James realmente vivía entre sus serpientes, restaurada por el World Monuments Fund.</p></div>
</div>
<p class="text-gray-800 leading-relaxed">Abajo corren las <em>pozas</em> — los nueve estanques escalonados de cascada que dan nombre al lugar. Puedes fotografiarlas desde los senderos, pero <strong>ya no está permitido nadar</strong>.</p>
</section>

<section id="despues" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">Quién administra Las Pozas hoy</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">Al morir James en 1984, el terreno pasó a Plutarco Gastélum, quien detuvo toda construcción. El jardín abrió informalmente a visitantes a principios de los 90. En <strong>2007 la Fundación Pedro y Elena Hernández, CEMEX y el Gobierno de San Luis Potosí compraron el sitio en unos 2.2 millones de dólares</strong> y crearon el <strong>Fondo Xilitla</strong>, el fideicomiso que lo administra hasta hoy.</p>
<p class="text-gray-800 leading-relaxed">Los reconocimientos se acumularon: Patrimonio Cultural del Estado (2006), <strong>Lista Indicativa de la UNESCO (2009)</strong>, el Watch del World Monuments Fund (2010) y <strong>Monumento Artístico de la Nación (2012)</strong> — una declaratoria rarísima para un sitio del siglo XX. La conservación es una batalla permanente (concreto + humedad + raíces): por eso el jardín cierra todos los martes. Lo visitan holgadamente más de 100,000 personas al año.</p>
</section>

<section id="visita" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-amber-500 pb-3 inline-block">La visita en la práctica</h2>
</div>
<div class="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6 md:p-8 mb-6">
  <h3 class="font-bold text-amber-900 mb-3">El sistema de reservación (no te lo saltes)</h3>
  <ul class="space-y-3">
    <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">1.</span><span><strong>Primero reserva en línea</strong> en laspozasxilitla.org.mx, de <strong>24 horas a 60 días</strong> antes. No hay pago en línea.</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">2.</span><span><strong>Paga en taquilla</strong> el día de la visita: $180 adultos, $120 INAPAM/niños 6–12, más el <strong>guía obligatorio</strong> ($30 español / $60 inglés). Lleva confirmación e identificación.</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">3.</span><span><strong>El horario es estricto</strong> — si lo pierdes no hay reembolso. Cierra martes; último acceso 4 PM.</span></li>
  </ul>
</div>
<div class="grid md:grid-cols-2 gap-4 mb-6">
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">📷 Reglas de foto</h3><p class="text-sm text-gray-700 leading-relaxed">Celulares y cámaras de mano sin problema (uso personal). <strong>Prohibidos tripiés, equipos de iluminación y drones</strong> sin permiso especial de producción. La mejor luz: justo a la apertura de las 9 AM, con la neblina todavía colgada del dosel y sin excursiones.</p></div>
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">⚠️ Antes de ir</h3><p class="text-sm text-gray-700 leading-relaxed">El jardín es una ladera de escaleras y concreto musgoso y resbaloso — oficialmente no recomendado para personas con movilidad reducida o condiciones cardiacas; carriolas prohibidas. Lleva calzado con agarre. Resérvale la mañana completa aunque el tour dure ~1.5 h.</p></div>
</div>
</section>

<img src="${IMG.town}" alt="El pueblo de Xilitla entre la niebla de la Huasteca" class="w-full rounded-2xl shadow-lg mb-12" loading="lazy" />

<section id="pueblo" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">Xilitla más allá del jardín</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">La mayoría trata a Xilitla como el estacionamiento de Las Pozas. Dale una tarde y te lo paga — un Pueblo Mágico de ladera (desde 2011) de café, niebla e historia en capas, con comunidades vivas nahuas y teenek:</p>
<div class="space-y-4 mb-6">
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">⛪ El exconvento agustino (años 1550)</h3><p class="text-sm text-gray-700 leading-relaxed">Su construcción como monasterio-fortaleza comenzó en 1553 y suele citarse como el edificio en pie más antiguo del estado. Fue hecho literalmente para la guerra — los ataques chichimecas quemaron su techo en los 1580 — y su mole plateresca sigue dominando la plaza.</p></div>
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">🎨 Museo Leonora Carrington Xilitla</h3><p class="text-sm text-gray-700 leading-relaxed">Abrió en 2018 con esculturas, dibujos, tapices y máscaras donados por el hijo de la artista. Aquí se cierra el círculo: Carrington fue amiga de Edward James, y él defendió su obra décadas antes de que el mundo la alcanzara. (Su museo mayor está en la <a href="/blog/leonora-carrington-san-luis-potosi-museo-centro-artes-surrealism" class="text-emerald-700 underline">capital potosina</a>.)</p></div>
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">☕ Tierra de café</h3><p class="text-sm text-gray-700 leading-relaxed">Más de 2,500 mm de lluvia al año hacen de Xilitla uno de los rincones más húmedos — y de mejor café — de México. Pruébalo alrededor de la plaza; hay feria del café cada agosto. El domingo es día de tianguis, con comida y artesanía huasteca llenando el centro.</p></div>
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">🏰 El Castillo</h3><p class="text-sm text-gray-700 leading-relaxed">La casa de fantasía gótica de Plutarco Gastélum, donde James vivió por temporadas largas. Hoy es museo y también la Posada El Castillo (~$1,550–2,500 la noche) — dormir en la casa de Edward James es el mejor lujo de la Huasteca.</p></div>
</div>
</section>

<section id="cerca" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-teal-500 pb-3 inline-block">Cerca: los extras de local</h2>
</div>
<div class="space-y-4 mb-6">
  <div class="bg-white border-l-4 border-teal-500 rounded-r-xl shadow-sm p-5"><h3 class="font-bold text-gray-900 mb-1">Sótano de las Huahuas (~1 h)</h3><p class="text-sm text-gray-700">Una sima de ~480 m cerca de Aquismón donde cientos de miles de vencejos y pericos salen en espiral al amanecer y regresan en picada al atardecer (~5:30–6:30 PM). Entrada $30 más una caminata de 30–40 min por sendero de piedra — la alternativa tranquila al famoso Sótano de las Golondrinas.</p></div>
  <div class="bg-white border-l-4 border-teal-500 rounded-r-xl shadow-sm p-5"><h3 class="font-bold text-gray-900 mb-1">Cueva del Salitre</h3><p class="text-sm text-gray-700">Una boca de cueva enorme a las afueras del pueblo (cuota en efectivo, ~$25–50), por un sendero fácil de ~5 km redondos. Lleva lámpara — y guía si quieres entrar a fondo.</p></div>
</div>
<p class="text-gray-800 leading-relaxed">¿Armando el viaje completo? Xilitla es el Día 3 de nuestro <a href="/blog/huasteca-potosina-itinerary-2026" class="text-emerald-700 underline font-semibold">itinerario de la Huasteca Potosina de 3/5/7 días</a>, con Tamul, las cascadas y todos los precios 2026.</p>
</section>

<section id="logistica" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">Cómo llegar, clima y hospedaje</h2>
</div>
<div class="grid md:grid-cols-2 gap-4 mb-6">
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">🚗 Cómo llegar</h3><p class="text-sm text-gray-700 leading-relaxed">Desde Ciudad Valles: 85 km, ~1 h 20 (carretera 85 al sur y luego la 120 montaña arriba). Desde la capital potosina: ~4.5–5 h en total. No manejes la sierra de noche — la neblina es rutina a esta altitud.</p></div>
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">🌦️ Clima</h3><p class="text-sm text-gray-700 leading-relaxed">Clima de bosque de niebla, notablemente más fresco que la Huasteca baja. Dic–mar: fresco, mínimas de ~8°C y mucha humedad. Jun–sep: lluvia intensa (con respiro breve en agosto). Ene–mar es lo más confiable — de cualquier forma revisa el pronóstico a 10 días.</p></div>
</div>
<p class="text-gray-800 leading-relaxed"><strong>Dónde dormir:</strong> Posada El Castillo por la historia; Hostal Café y posadas sencillas junto a la entrada de Las Pozas para presupuesto. Una noche cubre jardín + pueblo; dos noches suman Huahuas al atardecer y el tianguis del domingo.</p>
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
<p class="text-sm text-gray-600 leading-relaxed">Verificado en julio de 2026 contra: laspozasxilitla.org.mx (historia oficial, precios y reglas de visita), las entradas de Wikipedia de Edward James, Las Pozas y Xilitla (fechas biográficas, contrato con Dalí, retratos de Magritte, cifras de construcción), la Lista Indicativa de la UNESCO (ref. 5493), las páginas de proyecto del World Monuments Fund (restauraciones), información oficial del Museo Leonora Carrington, y El Universal SLP y fuentes regionales de la Huasteca (historia del exconvento, Sótano de las Huahuas). Donde las fuentes difieren — el número de estructuras (oficial: 27; la mayoría de los medios: 36), la anécdota de las mariposas, el "edificio más antiguo del estado" — atribuimos en lugar de afirmar.</p>
</section>

<div class="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-center">
  <p class="text-white text-lg font-bold mb-2">¿Planeando tu viaje a la Huasteca desde San Luis?</p>
  <p class="text-emerald-100 text-sm mb-4">Recibe cada lunes nuestra guía de eventos, comida y viajes en SLP — gratis.</p>
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
  tags: ['xilitla', 'las-pozas', 'edward-james', 'surrealism', 'huasteca-potosina', 'pueblo-magico', 'travel', 'san-luis-potosi', 'mexico', 'leonora-carrington'],

  title: "Xilitla & Las Pozas: The Complete Guide to Mexico's Surrealist Jungle Garden (2026)",
  excerpt: "The full story of Edward James — the man who bankrolled Dalí — and the $5-million concrete dream he built in the Huasteca jungle. 2026 prices, the reservation system explained, why you can't swim anymore, and what to do in Xilitla beyond the garden.",
  content: contentEN,
  meta_title: 'Xilitla & Las Pozas Guide 2026: History, Prices & Reservations',
  meta_description: "Complete 2026 guide to Las Pozas, Edward James' surrealist garden in Xilitla: verified prices, timed-entry reservations, the frost-and-Dalí backstory, photo rules, and the town's convent, coffee and Carrington museum.",

  title_es: 'Xilitla y Las Pozas: La Guía Completa del Jardín Surrealista de la Selva (2026)',
  excerpt_es: 'La historia completa de Edward James — el hombre que financió a Dalí — y el sueño de concreto de 5 millones de dólares que construyó en la selva huasteca. Precios 2026, cómo funciona la reservación, por qué ya no se puede nadar y qué hacer en Xilitla más allá del jardín.',
  content_es: contentES,
  meta_title_es: 'Xilitla y Las Pozas 2026: Historia, Precios y Reservación',
  meta_description_es: 'Guía completa 2026 de Las Pozas, el jardín surrealista de Edward James en Xilitla: precios verificados, reservación con horario, la historia de la helada y Dalí, reglas de foto, y el convento, café y museo Carrington del pueblo.',

  title_de: 'Xilitla & Las Pozas: Der komplette Guide zum surrealistischen Dschungelgarten (2026)',
  excerpt_de: 'Die Geschichte von Edward James — dem Mäzen Dalís — und seinem 5-Millionen-Dollar-Betontraum im Huasteca-Dschungel. Preise 2026, Reservierungssystem, Fotoregeln und was Xilitla jenseits des Gartens bietet.',
  content_de: contentEN,
  meta_title_de: 'Xilitla & Las Pozas Guide 2026: Geschichte, Preise, Reservierung',
  meta_description_de: 'Kompletter 2026-Guide zu Las Pozas, Edward James surrealistischem Garten in Xilitla: verifizierte Preise, Zeitfenster-Reservierung, Geschichte und Tipps für den Ort.',

  title_ja: 'シリトラとラス・ポサス：メキシコのシュルレアリスム庭園 完全ガイド（2026年）',
  excerpt_ja: 'ダリを支えたパトロン、エドワード・ジェームズがワステカのジャングルに築いた500万ドルのコンクリートの夢。2026年料金、予約システム、撮影ルール、そして庭園の先にあるシリトラの町の魅力まで。',
  meta_title_ja: 'シリトラ＆ラス・ポサス 完全ガイド 2026 | 歴史・料金・予約',
  meta_description_ja: 'エドワード・ジェームズのシュルレアリスム庭園ラス・ポサス完全ガイド（2026年）：検証済み料金、時間指定予約、歴史、撮影ルール、シリトラの見どころ。',
  content_ja: contentEN,
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
