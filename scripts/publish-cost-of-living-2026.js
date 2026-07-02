// Publishes "Cost of Living in San Luis Potosí (2026)" — Tier 2 #2. Figures
// from the verified dossier of 2026-07-02 (Banxico FIX 17.54 on Jul 2, 2026;
// Numbeo Jun 19, 2026 labeled crowdsourced/21 contributors; live rental
// listings labeled as listings; official 2026 tariffs for CFE/water/wage).
// Also patches the Nov 2025 post with an update banner pointing here.
require('dotenv').config({ path: '.env' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const SLUG = 'cost-of-living-san-luis-potosi-2026';
const OLD_SLUG = 'cost-of-living-san-luis-potosi-2025';
const RATE_NOTE_EN = 'Conversions at 17.54 MXN/USD (Banxico, July 2, 2026)';
const RATE_NOTE_ES = 'Conversiones a 17.54 MXN/USD (Banxico, 2 de julio de 2026)';

const BUDGETS = [
  ['frugal', 'Frugal single', 'Soltero austero', '$14,000–16,000', '$800–915 USD', 'Budget-area apartment, cook at home + street food, bus/free MetroRed', 'Depa en zona económica, cocinar + comida callejera, camión/MetroRed gratis'],
  ['comfortable', 'Comfortable single', 'Soltero cómodo', '$25,000–29,000', '$1,425–1,655 USD', 'Furnished 1BR in Tequis/Centro, restaurants weekly, Ubers, private insurance', '1 rec amueblado en Tequis/Centro, restaurantes, Ubers, seguro privado'],
  ['couple', 'Couple', 'Pareja', '$33,000–40,000', '$1,880–2,280 USD', '2BR in Tequis/Lomas, everything scales ~1.6x', '2 rec en Tequis/Lomas, todo escala ~1.6x'],
  ['family', 'Family of four', 'Familia de cuatro', '$60,000–70,000', '$3,420–3,990 USD', '3BR + schools/activities; Numbeo-basket skews upscale — many families spend less', '3 rec + escuelas; la canasta Numbeo es de clase media-alta — muchas familias gastan menos'],
];

function budgetTable(isEs) {
  const rows = BUDGETS.map(
    ([, en, es, mxn, usd, noteEn, noteEs], i) => `
      <tr class="${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}">
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">${isEs ? es : en}</td>
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">${mxn} MXN</td>
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">${usd}</td>
        <td class="px-4 py-3 text-sm text-gray-600">${isEs ? noteEs : noteEn}</td>
      </tr>`
  ).join('');
  return `
<div class="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-2">
  <table class="min-w-full divide-y divide-gray-200">
    <caption class="sr-only">${isEs ? 'Presupuestos mensuales San Luis Potosí 2026' : 'Monthly budgets San Luis Potosí 2026'}</caption>
    <thead class="bg-green-700">
      <tr>
        <th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase">${isEs ? 'Perfil' : 'Profile'}</th>
        <th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase">MXN/mes</th>
        <th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase">USD/mo</th>
        <th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase">${isEs ? 'Supuestos' : 'Assumptions'}</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-100">${rows}
    </tbody>
  </table>
</div>
<p class="text-xs text-gray-500 italic mb-8">${isEs ? 'Estimaciones editoriales construidas de las cifras de abajo, precios de mediados de 2026. ' + RATE_NOTE_ES + '.' : 'Editorial estimates built from the figures below, mid-2026 prices. ' + RATE_NOTE_EN + '.'}</p>`;
}

const faqEN = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How much does it cost to live in San Luis Potosí in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'At mid-2026 prices: a frugal single can live on MX$14,000–16,000 (~$800–915 USD) a month, a comfortable single on MX$25,000–29,000 (~$1,425–1,655), a couple on MX$33,000–40,000 (~$1,880–2,280), and a family of four on MX$60,000–70,000 (~$3,420–3,990). Conversions at 17.54 MXN/USD (July 2026).' } },
    { '@type': 'Question', name: 'How much is rent in San Luis Potosí?', acceptedAnswer: { '@type': 'Answer', text: 'Crowdsourced averages (Numbeo, June 2026): 1BR in the center ~MX$11,800 (~$673 USD), outside ~MX$8,440; 3BR center ~MX$21,333. Real listings run from ~MX$5,000–9,500 in budget colonias to MX$10,000–20,000 furnished around Carranza/Tequis and MX$22,000–34,000 in Lomas and luxury towers.' } },
    { '@type': 'Question', name: 'Is San Luis Potosí cheaper than Mexico City or Querétaro?', acceptedAnswer: { '@type': 'Answer', text: 'Yes on both (crowdsourced indices): Mexico City runs about 21% more expensive overall including rent (Numbeo, July 2026), and Querétaro about 8% more (Expatistan, May 2026). Against the US the gap is dramatic: San Antonio, TX costs ~66% more including rent, with rents ~138% higher.' } },
    { '@type': 'Question', name: 'How much do utilities and internet cost in SLP?', acceptedAnswer: { '@type': 'Answer', text: "A subsidized CFE electricity bill for a typical home runs ~MX$300/month (~$17) — but exceed the subsidy limits (heavy A/C use) and the DAC tariff can triple it. Fiber internet: Telmex from MX$349, izzi from MX$379 (post its March 2026 price hike), Totalplay from MX$599. Cell plans: MX$200–250/month covers most people. Note CFE added a new fixed monthly charge nationwide in 2026 (~MX$20–70)." } },
    { '@type': 'Question', name: 'What is the exchange rate situation for dollar-earners in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'The peso is strong: ~17.54 MXN/USD in July 2026, roughly 6–8% stronger than a year earlier — your dollars buy noticeably fewer pesos than in 2025. Bank forecasts for late 2026 range from 19.30 to 20.50, with the USMCA trade review as the main wildcard, so dollar-earners may see relief — or not. Budget at today’s rate, not a hoped-for one.' } },
  ],
};

const faqES = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: '¿Cuánto cuesta vivir en San Luis Potosí en 2026?', acceptedAnswer: { '@type': 'Answer', text: 'A precios de mediados de 2026: un soltero austero vive con $14,000–16,000 MXN (~$800–915 USD) al mes, uno cómodo con $25,000–29,000 (~$1,425–1,655), una pareja con $33,000–40,000 (~$1,880–2,280) y una familia de cuatro con $60,000–70,000 (~$3,420–3,990). Conversiones a 17.54 MXN/USD (julio 2026).' } },
    { '@type': 'Question', name: '¿Cuánto cuesta la renta en San Luis Potosí?', acceptedAnswer: { '@type': 'Answer', text: 'Promedios crowdsourced (Numbeo, junio 2026): 1 recámara en el centro ~$11,800 (~$673 USD), fuera ~$8,440; 3 recámaras centro ~$21,333. Los anuncios reales van de ~$5,000–9,500 en colonias económicas a $10,000–20,000 amueblado por Carranza/Tequis y $22,000–34,000 en Lomas y torres de lujo.' } },
    { '@type': 'Question', name: '¿SLP es más barato que CDMX o Querétaro?', acceptedAnswer: { '@type': 'Answer', text: 'Sí en ambos (índices crowdsourced): CDMX sale ~21% más cara en total con renta (Numbeo, julio 2026) y Querétaro ~8% más (Expatistan, mayo 2026). Contra EE.UU. la brecha es dramática: San Antonio, TX cuesta ~66% más con renta, con rentas ~138% más altas.' } },
    { '@type': 'Question', name: '¿Cuánto cuestan los servicios e internet en SLP?', acceptedAnswer: { '@type': 'Answer', text: 'Un recibo de CFE subsidiado para una casa típica ronda $300/mes (~$17) — pero si excedes los límites del subsidio (mucho aire acondicionado), la tarifa DAC lo puede triplicar. Fibra: Telmex desde $349, izzi desde $379 (tras su alza de marzo 2026), Totalplay desde $599. Celular: $200–250/mes alcanza para la mayoría. Ojo: CFE agregó un cargo fijo mensual nuevo en 2026 (~$20–70).' } },
    { '@type': 'Question', name: '¿Cómo está el tipo de cambio para quien gana en dólares en 2026?', acceptedAnswer: { '@type': 'Answer', text: 'El peso está fuerte: ~17.54 por dólar en julio 2026, cerca de 6–8% más fuerte que hace un año — tus dólares compran notablemente menos pesos que en 2025. Los pronósticos bancarios para fin de 2026 van de 19.30 a 20.50, con la revisión del T-MEC como comodín. Presupuesta al tipo de hoy, no al que esperas.' } },
  ],
};

function faqDetails(faq) {
  return faq.mainEntity
    .map(
      (q) => `<details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">${q.name}<span class="text-green-600 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">${q.acceptedAnswer.text}</p></details>`
    )
    .join('\n  ');
}

function buildContent(isEs) {
  const faq = isEs ? faqES : faqEN;
  const t = (en, es) => (isEs ? es : en);
  const ids = isEs
    ? { budgets: 'presupuestos', rent: 'renta', utilities: 'servicios', food: 'comida', transport: 'transporte', health: 'salud', compare: 'comparaciones', fx: 'tipo-de-cambio' }
    : { budgets: 'budgets', rent: 'rent', utilities: 'utilities', food: 'food', transport: 'transport', health: 'healthcare', compare: 'comparisons', fx: 'exchange-rate' };

  return `<div class="max-w-none">

<div class="bg-green-50 border-l-4 border-green-600 rounded-r-xl p-6 mb-10">
  <p class="font-bold text-green-900 mb-3">${t('In this breakdown', 'En este desglose')}</p>
  <nav class="grid sm:grid-cols-2 gap-2 text-green-800 text-sm">
    <a href="#${ids.budgets}" class="hover:underline">→ ${t('Monthly budgets by profile', 'Presupuestos por perfil')}</a>
    <a href="#${ids.rent}" class="hover:underline">→ ${t('Rent by neighborhood (real listings)', 'Renta por colonia (anuncios reales)')}</a>
    <a href="#${ids.utilities}" class="hover:underline">→ ${t('Utilities, internet & phone', 'Servicios, internet y celular')}</a>
    <a href="#${ids.food}" class="hover:underline">→ ${t('Food: from gorditas to dinner for two', 'Comida: de gorditas a cena para dos')}</a>
    <a href="#${ids.transport}" class="hover:underline">→ ${t('Transport (the free BRT!)', 'Transporte (¡el BRT gratis!)')}</a>
    <a href="#${ids.health}" class="hover:underline">→ ${t('Healthcare & insurance', 'Salud y seguros')}</a>
    <a href="#${ids.compare}" class="hover:underline">→ ${t('vs CDMX, Querétaro, Mérida & Texas', 'vs CDMX, Querétaro, Mérida y Texas')}</a>
    <a href="#${ids.fx}" class="hover:underline">→ ${t('The exchange-rate reality check', 'El baño de realidad cambiario')}</a>
  </nav>
  <p class="mt-4 text-sm text-green-700 italic">${t('Mid-2026 prices, every figure sourced and period-labeled · ' + RATE_NOTE_EN, 'Precios de mediados de 2026, cada cifra con fuente y periodo · ' + RATE_NOTE_ES)}</p>
</div>

<p class="text-xl leading-relaxed text-gray-800 mb-8 font-medium">
  ${t(
    "<strong>The honest headline for 2026: San Luis Potosí is still one of Mexico's best cost-of-living deals — but your dollars buy 6–8% fewer pesos than last year.</strong> Here are the real mid-2026 numbers: rents from actual listings, the new CFE charges, what a comida corrida actually costs, and full monthly budgets from $800 to $4,000 USD.",
    '<strong>El titular honesto de 2026: San Luis Potosí sigue siendo de las mejores relaciones costo-calidad de vida de México — pero tus dólares compran 6–8% menos pesos que hace un año.</strong> Aquí van los números reales de mediados de 2026: rentas de anuncios reales, los cargos nuevos de CFE, lo que de verdad cuesta una comida corrida y presupuestos completos de $800 a $4,000 USD.'
  )}
</p>

<section id="${ids.budgets}" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-green-600 pb-3 inline-block">${t('Monthly budgets by profile', 'Presupuestos mensuales por perfil')}</h2>
</div>
${budgetTable(isEs)}
<p class="text-sm text-gray-600 leading-relaxed">${t(
    'Cross-check: Wise/CityCost independently estimates ~$1,508 USD/month for a single person in SLP (2026) — right inside our "comfortable single" band.',
    'Contraste: Wise/CityCost estima independientemente ~$1,508 USD/mes para una persona sola en SLP (2026) — justo dentro de nuestra banda de "soltero cómodo".'
  )}</p>
</section>

<section id="${ids.rent}" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-green-600 pb-3 inline-block">${t('Rent by neighborhood — from real July 2026 listings', 'Renta por colonia — de anuncios reales de julio 2026')}</h2>
</div>
<div class="space-y-4 mb-4">
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-1">Centro Histórico</h3><p class="text-sm text-gray-700">${t('Renovated/exclusive units MX$22,000–25,000 (one 1BR facing Parque San Francisco listed at 25,000); older unrenovated units start far lower — Numbeo’s center range begins around MX$4,000–8,000. Character costs extra here.', 'Unidades renovadas/exclusivas $22,000–25,000 (un 1 rec frente al Parque San Francisco anunciado en 25,000); las unidades viejas sin renovar empiezan mucho más abajo — el rango céntrico de Numbeo arranca en ~$4,000–8,000. El carácter se cobra.')}</p></div>
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-1">Carranza / Tequisquiapan</h3><p class="text-sm text-gray-700">${t('The furnished-rental corridor: a loft on Carranza with all utilities at MX$10,000, furnished 2BR half a block off at 13,000, furnished 1BR by Jardín de Tequis at 20,000, luxury towers ~31,000. Expect a MX$3,000–6,000 furnished premium.', 'El corredor del amueblado: un loft sobre Carranza con servicios incluidos en $10,000, 2 rec amueblado a media cuadra en 13,000, 1 rec amueblado junto al Jardín de Tequis en 20,000, torres de lujo ~31,000. El premium por amueblado ronda $3,000–6,000.')}</p></div>
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-1">Lomas</h3><p class="text-sm text-gray-700">${t('3BR furnished MX$22,500–23,000 (+~2,200 maintenance), unfurnished from 13,000, luxury towers (Tangente 52, Punta San Luis) 30,000–34,000.', '3 rec amueblado $22,500–23,000 (+~2,200 de mantenimiento), sin amueblar desde 13,000, torres de lujo (Tangente 52, Punta San Luis) 30,000–34,000.')}</p></div>
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-1">${t('Budget colonias', 'Colonias económicas')}</h3><p class="text-sm text-gray-700">${t('Remodeled basic 2BR ~54 m² at MX$8,500–9,500; small units from ~4,900–6,500 (one furnished loft with all utilities at 6,500).', '2 rec básico remodelado ~54 m² en $8,500–9,500; unidades chicas desde ~4,900–6,500 (un loft amueblado con todo incluido en 6,500).')}</p></div>
</div>
<p class="text-xs text-gray-500 italic">${t('These are individual listings (Inmuebles24/Trovit/iCasas/Lamudi, July 2026 snapshots), not medians. Numbeo crowdsourced averages (June 2026, 21 contributors): 1BR center 11,800 · 1BR outside 8,440 · 3BR center 21,333.', 'Son anuncios individuales (Inmuebles24/Trovit/iCasas/Lamudi, julio 2026), no medianas. Promedios crowdsourced de Numbeo (junio 2026, 21 contribuyentes): 1 rec centro 11,800 · 1 rec fuera 8,440 · 3 rec centro 21,333.')}</p>
</section>

<section id="${ids.utilities}" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-green-600 pb-3 inline-block">${t('Utilities, internet & phone', 'Servicios, internet y celular')}</h2>
</div>
<div class="grid md:grid-cols-2 gap-4 mb-4">
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-gray-900 mb-2">⚡ ${t('Electricity (CFE)', 'Luz (CFE)')}</h3><p class="text-sm text-gray-700 leading-relaxed">${t('Typical subsidized home: ~MX$300/month (~$17). Two 2026 changes to know: a new nationwide fixed monthly charge (~MX$20–70), and the DAC trap — exceed the subsidy limits (think A/C all summer) and you pay a MX$142 fixed charge plus 6–7/kWh, easily tripling the bill to 2,500–5,000+.', 'Casa típica subsidiada: ~$300/mes (~$17). Dos cambios 2026: un cargo fijo mensual nuevo a nivel nacional (~$20–70) y la trampa DAC — si excedes los límites del subsidio (aire acondicionado todo el verano) pagas cargo fijo de $142 más 6–7/kWh, y el recibo se triplica fácil a 2,500–5,000+.')}</p></div>
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-gray-900 mb-2">🌐 ${t('Internet & phone', 'Internet y celular')}</h3><p class="text-sm text-gray-700 leading-relaxed">${t('Fiber: Telmex from MX$349 (120 Mbps), izzi from 379 (after its March 2026 hike), Totalplay from 599 (150 Mbps). Cell: Telcel postpaid from 229–249; AT&T prepaid MX$200 = 12 GB/30 days. Water rose 3.8–6.6% in 2026 (Interapas); combined basic utilities average ~MX$757 (Numbeo).', 'Fibra: Telmex desde $349 (120 Mbps), izzi desde 379 (tras su alza de marzo 2026), Totalplay desde 599 (150 Mbps). Celular: Telcel pospago desde 229–249; AT&T prepago $200 = 12 GB/30 días. El agua subió 3.8–6.6% en 2026 (Interapas); los servicios básicos combinados promedian ~$757 (Numbeo).')}</p></div>
</div>
</section>

<section id="${ids.food}" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-green-600 pb-3 inline-block">${t('Food: from gorditas to dinner for two', 'Comida: de gorditas a cena para dos')}</h2>
</div>
<ul class="space-y-2 mb-4 text-gray-800">
  <li>• ${t('<strong>Street level:</strong> market gorditas and tacos from ~MX$15–25 apiece (street food rose 9–14% nationally in early 2026 — tacos are officially inflation-proof no more).', '<strong>Nivel calle:</strong> gorditas y tacos de mercado desde ~$15–25 la pieza (la comida callejera subió 9–14% a nivel nacional a inicios de 2026 — los tacos ya no son oficialmente a prueba de inflación).')}</li>
  <li>• ${t('<strong>Comida corrida / menú del día:</strong> ~MX$80–150 for soup + main + agua (zone-dependent estimate).', '<strong>Comida corrida / menú del día:</strong> ~$80–150 por sopa + guisado + agua (estimación según zona).')}</li>
  <li>• ${t('<strong>Restaurants (Numbeo, June 2026, crowdsourced):</strong> casual meal ~MX$250; mid-range dinner for two ~MX$775 (range 600–1,500).', '<strong>Restaurantes (Numbeo, junio 2026, crowdsourced):</strong> comida casual ~$250; cena de gama media para dos ~$775 (rango 600–1,500).')}</li>
  <li>• ${t('<strong>Groceries:</strong> milk 27.8/L, dozen eggs 48.7, chicken 183/kg, rice 33/kg — a weekly supermarket basket for two runs roughly MX$800–1,200 (our composition from those staples).', '<strong>Súper:</strong> leche 27.8/L, docena de huevo 48.7, pollo 183/kg, arroz 33/kg — una despensa semanal para dos ronda $800–1,200 (composición nuestra con esos básicos).')}</li>
</ul>
</section>

<section id="${ids.transport}" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-green-600 pb-3 inline-block">${t('Transport', 'Transporte')}</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">${t(
    'The sleeper perk: <strong>the MetroRed BRT is free, confirmed through 2026</strong>. Regular city buses cost MX$12.50 (a hike to 13.50 general is approved but not yet in force — check when you arrive). Uber/DiDi short rides run MX$45–65. Gasoline: ~MX$23.70/L nationally (≈$5.11/gal) — about half of it is a reason many expats here simply don’t keep a car.',
    'La joya escondida: <strong>la MetroRed (BRT) es gratuita, confirmado hasta 2026</strong>. El camión normal cuesta $12.50 (el alza a 13.50 general está aprobada pero aún no en vigor — verifica al llegar). Uber/DiDi corto: $45–65. Gasolina: ~$23.70/L a nivel nacional — media razón por la que muchos expats aquí simplemente no tienen coche.'
  )}</p>
</section>

<section id="${ids.health}" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-green-600 pb-3 inline-block">${t('Healthcare & insurance', 'Salud y seguros')}</h2>
</div>
<ul class="space-y-2 mb-4 text-gray-800">
  <li>• ${t('<strong>Private GP:</strong> MX$500–1,200 per consult; specialists typically 800–1,000. Pharmacy-adjacent consultorios run far cheaper.', '<strong>Médico general privado:</strong> $500–1,200 la consulta; especialistas típicamente 800–1,000. Los consultorios de farmacia salen mucho más baratos.')}</li>
  <li>• ${t('<strong>Dental cleaning:</strong> MX$500–800 at straightforward clinics.', '<strong>Limpieza dental:</strong> $500–800 en clínicas estándar.')}</li>
  <li>• ${t('<strong>Private major-medical (GMM), ~40 years old:</strong> roughly MX$12,000–35,000/year depending on insurer and deductible — wide range, get quotes (CONDUSEF has a free simulator).', '<strong>Gastos médicos mayores, ~40 años:</strong> aprox. $12,000–35,000/año según aseguradora y deducible — rango amplio, cotiza (CONDUSEF tiene simulador gratuito).')}</li>
  <li>• ${t('<strong>IMSS voluntary enrollment (Modalidad 33), 2026 annual:</strong> 40–49 years = MX$13,800 (~$787/yr); 30–39 = 11,850; 60–69 = 19,800. Pre-existing-condition exclusions apply.', '<strong>IMSS voluntario (Modalidad 33), anual 2026:</strong> 40–49 años = $13,800 (~$787/año); 30–39 = 11,850; 60–69 = 19,800. Aplican exclusiones por padecimientos preexistentes.')}</li>
</ul>
</section>

<section id="${ids.compare}" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-green-600 pb-3 inline-block">${t('SLP vs CDMX, Querétaro, Mérida & Texas', 'SLP vs CDMX, Querétaro, Mérida y Texas')}</h2>
</div>
<div class="grid md:grid-cols-2 gap-4 mb-4">
  <div class="bg-white border-2 border-green-100 rounded-xl p-5"><p class="text-2xl font-extrabold text-green-700 mb-1">+21%</p><p class="text-sm text-gray-700">${t('Mexico City vs SLP, overall with rent (Numbeo, Jul 2026)', 'CDMX vs SLP, total con renta (Numbeo, jul 2026)')}</p></div>
  <div class="bg-white border-2 border-green-100 rounded-xl p-5"><p class="text-2xl font-extrabold text-green-700 mb-1">+8%</p><p class="text-sm text-gray-700">${t('Querétaro vs SLP (Expatistan, May 2026)', 'Querétaro vs SLP (Expatistan, may 2026)')}</p></div>
  <div class="bg-white border-2 border-green-100 rounded-xl p-5"><p class="text-2xl font-extrabold text-green-700 mb-1">+2.5%</p><p class="text-sm text-gray-700">${t('Mérida vs SLP with rent — rents there run +10% (Numbeo, Jul 2026)', 'Mérida vs SLP con renta — las rentas allá van +10% (Numbeo, jul 2026)')}</p></div>
  <div class="bg-white border-2 border-green-100 rounded-xl p-5"><p class="text-2xl font-extrabold text-green-700 mb-1">+66%</p><p class="text-sm text-gray-700">${t('San Antonio, TX vs SLP with rent — rents +138% (Numbeo, Jul 2026)', 'San Antonio, TX vs SLP con renta — rentas +138% (Numbeo, jul 2026)')}</p></div>
</div>
<p class="text-xs text-gray-500 italic">${t('All crowdsourced comparison indices — directionally useful, not precise.', 'Todos índices crowdsourced — útiles en dirección, no en precisión.')}</p>
</section>

<section id="${ids.fx}" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-green-600 pb-3 inline-block">${t('The exchange-rate reality check', 'El baño de realidad cambiario')}</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">${t(
    'If you earn in dollars, this is the number that moved most since our 2025 edition: the peso strengthened from ~20.5 in January 2025 to <strong>~17.54 in July 2026</strong> — your dollar buys roughly 6–8% fewer pesos than a year ago and ~15% fewer than early 2025. Bank forecasts for late 2026 range 19.30–20.50 (the USMCA review is the wildcard), but plan on today’s rate. Context: Mexican inflation is tame at 3.94% (May 2026), and the 2026 minimum wage rose 13% to MX$315/day — local costs are drifting up gently, not spiking.',
    'Si ganas en dólares, este es el número que más se movió desde nuestra edición 2025: el peso se fortaleció de ~20.5 en enero 2025 a <strong>~17.54 en julio 2026</strong> — tu dólar compra cerca de 6–8% menos pesos que hace un año y ~15% menos que a inicios de 2025. Los pronósticos bancarios para fin de 2026 van de 19.30 a 20.50 (la revisión del T-MEC es el comodín), pero planea con el tipo de hoy. Contexto: la inflación mexicana está mansa en 3.94% (mayo 2026) y el salario mínimo 2026 subió 13% a $315/día — los costos locales suben suave, sin picos.'
  )}</p>
</section>

<section id="faq" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-green-600 pb-3 inline-block">${t('FAQ', 'Preguntas frecuentes')}</h2>
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
    'Banxico FIX rate (July 2, 2026); Numbeo San Luis Potosí (updated June 19, 2026 — crowdsourced, 21 contributors, labeled throughout); rental listings from Inmuebles24, Trovit, iCasas and Lamudi (July 2026 snapshots); CFE 2026 tariffs and the new fixed charge (official tariff aggregators); Interapas 2026 increases (El Sol de San Luis / state Congress); Telmex, izzi (El Financiero, March 2026 hike), Totalplay, Telcel and AT&T published 2026 plans; national gasoline prices (CNE via Infobae, July 2026); street-food inflation (La Jornada / TV Azteca, Jan 2026); IMSS Modalidad 33 2026 tables; INEGI inflation (May 2026); CONASAMI 2026 minimum wage (DOF); comparison indices from Numbeo and Expatistan (dates in text); Wise/CityCost 2026 estimate. Individual listings are snapshots, not medians — treat ranges as starting points.',
    'Tipo de cambio FIX de Banxico (2 de julio de 2026); Numbeo San Luis Potosí (actualizado 19 de junio de 2026 — crowdsourced, 21 contribuyentes, señalado en todo el texto); anuncios de renta de Inmuebles24, Trovit, iCasas y Lamudi (julio 2026); tarifas CFE 2026 y el cargo fijo nuevo; alzas de Interapas 2026 (El Sol de San Luis / Congreso estatal); planes 2026 publicados de Telmex, izzi (alza de marzo, El Financiero), Totalplay, Telcel y AT&T; gasolina nacional (CNE vía Infobae, julio 2026); inflación de comida callejera (La Jornada / TV Azteca, ene 2026); tablas IMSS Modalidad 33 2026; inflación INEGI (mayo 2026); salario mínimo 2026 de CONASAMI (DOF); índices comparativos de Numbeo y Expatistan (fechas en el texto); estimación Wise/CityCost 2026. Los anuncios individuales son fotos del momento, no medianas.'
  )}</p>
</section>

<div class="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-center">
  <p class="text-white text-lg font-bold mb-2">${t('Running the move-to-SLP math?', '¿Sacando las cuentas para mudarte a SLP?')}</p>
  <p class="text-green-100 text-sm mb-4">${t('Pair this with our safety analysis and where-to-stay guide — and get the weekly local brief free.', 'Complementa con nuestro análisis de seguridad y la guía de dónde hospedarte — y recibe el brief semanal gratis.')}</p>
  <a href="/subscribe" class="inline-block bg-white text-green-700 font-bold px-6 py-3 rounded-full hover:bg-green-50 transition-colors">${t('Subscribe to San Luis Way Weekly', 'Suscríbete a San Luis Way Weekly')}</a>
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
  image_url: '/images/blog/centro-san-luis/centro-san-luis-potosi-home.jpg',
  category: 'Expat Life',
  tags: ['cost-of-living', 'expat-life', 'san-luis-potosi', 'mexico', 'budget', 'rent', '2026', 'move-to-mexico'],

  title: 'Cost of Living in San Luis Potosí, Mexico (2026): Real Numbers',
  excerpt: 'Live comfortably from ~$1,400 USD/month — but your dollars buy 6–8% fewer pesos than last year. Mid-2026 rents from real listings, the new CFE charges, food and healthcare prices, and full budgets from frugal single to family of four. Every figure sourced.',
  content: buildContent(false),
  meta_title: 'Cost of Living in San Luis Potosí 2026: Rent, Food, Budgets',
  meta_description: 'Real mid-2026 costs in San Luis Potosí: rent by neighborhood from live listings, utilities and internet, food prices, healthcare, and monthly budgets from $800 to $4,000 USD. All sourced.',

  title_es: 'Costo de Vida en San Luis Potosí (2026): Números Reales',
  excerpt_es: 'Vive cómodo desde ~$1,400 USD/mes — pero tus dólares compran 6–8% menos pesos que hace un año. Rentas de anuncios reales de mediados de 2026, los cargos nuevos de CFE, precios de comida y salud, y presupuestos completos de soltero austero a familia de cuatro. Cada cifra con fuente.',
  content_es: buildContent(true),
  meta_title_es: 'Costo de Vida en San Luis Potosí 2026: Renta, Comida, Presupuestos',
  meta_description_es: 'Costos reales de mediados de 2026 en SLP: renta por colonia de anuncios reales, servicios e internet, comida, salud y presupuestos mensuales de $800 a $4,000 USD. Todo con fuente.',

  title_de: 'Lebenshaltungskosten in San Luis Potosí, Mexiko (2026): Echte Zahlen',
  excerpt_de: 'Komfortabel leben ab ~$1.400 USD/Monat — aber der Dollar kauft 6–8% weniger Pesos als vor einem Jahr. Mieten aus echten Anzeigen, CFE-Tarife 2026, Lebensmittel- und Gesundheitspreise, komplette Monatsbudgets.',
  content_de: buildContent(false),
  meta_title_de: 'Lebenshaltungskosten San Luis Potosí 2026: Miete, Essen, Budgets',
  meta_description_de: 'Echte Kosten Mitte 2026 in San Luis Potosí: Mieten nach Viertel, Nebenkosten, Internet, Essen, Gesundheit und Monatsbudgets von $800 bis $4.000 USD.',

  title_ja: 'サン・ルイス・ポトシの生活費（2026年）：リアルな数字',
  excerpt_ja: '月約1,400ドルで快適に暮らせる——ただしドルの購買力は昨年比6〜8%減。実際の賃貸物件の家賃、CFE電気料金の新制度、食費・医療費、単身からファミリーまでの月間予算を全て出典付きで。',
  content_ja: buildContent(false),
  meta_title_ja: 'サン・ルイス・ポトシ生活費 2026 | 家賃・食費・予算',
  meta_description_ja: 'サン・ルイス・ポトシの2026年中頃の実際の生活費：エリア別家賃、光熱費、ネット、食費、医療費、月額800〜4,000ドルの予算モデル。全て出典付き。',
};

const UPDATE_BANNER_EN = `<div class="bg-green-50 border-2 border-green-300 rounded-2xl p-6 mb-8"><p class="text-gray-900 font-bold mb-1">📅 2026 update available</p><p class="text-sm text-gray-800">Prices and the exchange rate have moved since this 2025 edition. Read the fully refreshed version: <a href="/blog/cost-of-living-san-luis-potosi-2026" class="text-green-700 underline font-semibold">Cost of Living in San Luis Potosí (2026): Real Numbers</a>.</p></div>`;

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

  // Patch the 2025 post with an update banner (all content columns), once.
  const { data: old } = await supabase
    .from('blog_posts')
    .select('id, content, content_es, content_de, content_ja')
    .eq('slug', OLD_SLUG)
    .maybeSingle();
  if (old && !(old.content || '').includes('/blog/cost-of-living-san-luis-potosi-2026')) {
    const patch = {};
    for (const col of ['content', 'content_es', 'content_de', 'content_ja']) {
      if (old[col]) patch[col] = UPDATE_BANNER_EN + old[col];
    }
    const { error } = await supabase.from('blog_posts').update(patch).eq('id', old.id);
    console.log(error ? 'Old-post patch error: ' + error.message : '2025 post patched with update banner');
  } else {
    console.log(old ? '2025 post already patched' : '2025 post not found — skipped banner');
  }

  console.log(`\nView at: https://www.sanluisway.com/blog/${SLUG}`);
}

main();
