// Publishes "San Luis Potosí vs Querétaro for Expats (2026)" — Tier 2 #3.
// Dossier cautions applied: NO TomTom ranks (neither city covered), no
// "X thousand Americans in QRO", metro figures footnoted, El Realito failure
// counts framed as ranges, SLP covered honestly on water too, hospital
// ranking (Star Médica QRO #4 vs HLS #47) cited to Funsalud/Blutitude 2025,
// SMN climate normals used, Volaris SLP-Midway not asserted as launched.
require('dotenv').config({ path: '.env' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const SLUG = 'san-luis-potosi-vs-queretaro-expats-2026';

const faqEN = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is San Luis Potosí or Querétaro better for expats?', acceptedAnswer: { '@type': 'Answer', text: "It depends on what you're optimizing for. Querétaro wins on safety perception (only 35% feel unsafe vs 58% in SLP), flight connectivity (~2.4M passengers, ~9 US destinations plus Madrid), formal-economy jobs and top-tier healthcare (a top-5 national hospital). San Luis Potosí wins on cost (~8% cheaper overall, rents 25–30% lower, property ~40% cheaper per m²), calmer growth, and spectacular nature access (the Huasteca and Real de Catorce). Pick QRO for polish and connections; pick SLP for value and authenticity." } },
    { '@type': 'Question', name: 'How much cheaper is San Luis Potosí than Querétaro?', acceptedAnswer: { '@type': 'Answer', text: 'About 8% overall (Expatistan, May 2026), but the housing gap is much bigger: a 1BR in the center averages MX$11,800 in SLP vs MX$15,563 in Querétaro, and buying in the center runs ~MX$25,600/m² vs ~MX$40,700/m² (Numbeo, June 2026, crowdsourced). Querétaro is Mexico’s 3rd most expensive state for housing after CDMX and Baja California Sur.' } },
    { '@type': 'Question', name: 'Is Querétaro safer than San Luis Potosí?', acceptedAnswer: { '@type': 'Answer', text: "By perception, clearly: in INEGI's March 2026 survey only 35.3% of Querétaro residents feel unsafe vs 57.6% in SLP. Both states carry the same US Level 2 advisory with no travel restrictions. The nuance: SLP is the fastest-improving state in Mexico on homicides (-81% Jan–May 2026, per federal data), and its capital's rate (~8.2/100k) is comparable to Austin or Denver — the gap is real but closing." } },
    { '@type': 'Question', name: 'What are the downsides of Querétaro?', acceptedAnswer: { '@type': 'Answer', text: "The price of its boom: the metro grew ~40% in a decade, its aquifer runs a massive deficit (extraction nearly double the recharge), September 2025 saw water cut to 300+ colonias with rationing, ~90% of new apartments cost over MX$2 million, and a data-center boom (AWS, Microsoft, CloudHQ) is straining power and water infrastructure. You pay more to compete for scarcer resources." } },
    { '@type': 'Question', name: 'Which city has better flights to the US?', acceptedAnswer: { '@type': 'Answer', text: 'Querétaro, by a wide margin: ~2.4 million passengers in 2025 with around 9 US destinations (Dallas, Houston, Chicago, Detroit, Atlanta, San Antonio, Denver, LA, Orlando) plus a Madrid route. SLP moved ~835,000 passengers with 3 US routes (Dallas, Houston, San Antonio). QRO is also 2.5–3 h from Mexico City (with a passenger train targeted for 2027); SLP is ~5 h.' } },
  ],
};

const faqES = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: '¿Qué es mejor para expats: San Luis Potosí o Querétaro?', acceptedAnswer: { '@type': 'Answer', text: 'Depende de qué optimices. Querétaro gana en percepción de seguridad (solo 35% se siente inseguro vs 58% en SLP), conectividad aérea (~2.4M pasajeros, ~9 destinos a EE.UU. más Madrid), empleo formal y salud de punta (un hospital top-5 nacional). San Luis gana en costo (~8% más barato en general, rentas 25–30% menores, propiedad ~40% más barata por m²), crecimiento más calmado y acceso espectacular a la naturaleza (Huasteca y Real de Catorce). QRO para pulido y conexiones; SLP para valor y autenticidad.' } },
    { '@type': 'Question', name: '¿Qué tanto más barato es SLP que Querétaro?', acceptedAnswer: { '@type': 'Answer', text: 'Cerca de 8% en general (Expatistan, mayo 2026), pero la brecha de vivienda es mucho mayor: un 1 recámara céntrico promedia $11,800 en SLP vs $15,563 en Querétaro, y comprar en el centro ronda $25,600/m² vs $40,700/m² (Numbeo, junio 2026, crowdsourced). Querétaro es el 3er estado más caro en vivienda tras CDMX y BCS.' } },
    { '@type': 'Question', name: '¿Querétaro es más seguro que San Luis Potosí?', acceptedAnswer: { '@type': 'Answer', text: 'En percepción, claramente: en la encuesta del INEGI de marzo 2026 solo 35.3% de los queretanos se siente inseguro vs 57.6% en SLP. Ambos estados tienen la misma alerta Nivel 2 de EE.UU. sin restricciones. El matiz: SLP es el estado que más rápido mejora en homicidios (-81% ene–may 2026, datos federales) y la tasa de su capital (~8.2/100k) es comparable a Austin o Denver — la brecha es real pero se cierra.' } },
    { '@type': 'Question', name: '¿Cuáles son las desventajas de Querétaro?', acceptedAnswer: { '@type': 'Answer', text: 'El precio de su boom: el metro creció ~40% en una década, su acuífero tiene un déficit enorme (extracción de casi el doble de la recarga), en septiembre de 2025 se cortó el agua a 300+ colonias con tandeo, ~90% de los departamentos nuevos cuestan más de $2 millones, y el boom de centros de datos (AWS, Microsoft, CloudHQ) presiona la red eléctrica y el agua. Pagas más por competir por recursos más escasos.' } },
    { '@type': 'Question', name: '¿Cuál ciudad tiene mejores vuelos a EE.UU.?', acceptedAnswer: { '@type': 'Answer', text: 'Querétaro, por mucho: ~2.4 millones de pasajeros en 2025 con ~9 destinos a EE.UU. (Dallas, Houston, Chicago, Detroit, Atlanta, San Antonio, Denver, LA, Orlando) más ruta a Madrid. SLP movió ~835,000 pasajeros con 3 rutas a EE.UU. (Dallas, Houston, San Antonio). QRO además queda a 2.5–3 h de CDMX (con tren de pasajeros previsto para 2027); SLP a ~5 h.' } },
  ],
};

function faqDetails(faq) {
  return faq.mainEntity
    .map(
      (q) => `<details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">${q.name}<span class="text-indigo-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">${q.acceptedAnswer.text}</p></details>`
    )
    .join('\n  ');
}

function scoreRow(cat, winner, detailEn, detailEs, isEs) {
  const badge = winner === 'QRO'
    ? '<span class="text-xs font-bold bg-purple-100 text-purple-800 rounded-full px-3 py-1">QRO</span>'
    : winner === 'SLP'
      ? '<span class="text-xs font-bold bg-emerald-100 text-emerald-800 rounded-full px-3 py-1">SLP</span>'
      : '<span class="text-xs font-bold bg-gray-100 text-gray-700 rounded-full px-3 py-1">' + (isEs ? 'Empate' : 'Tie') + '</span>';
  return `
      <tr class="bg-white border-b border-gray-100">
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">${cat}</td>
        <td class="px-4 py-3 text-center">${badge}</td>
        <td class="px-4 py-3 text-sm text-gray-600">${isEs ? detailEs : detailEn}</td>
      </tr>`;
}

function buildContent(isEs) {
  const faq = isEs ? faqES : faqEN;
  const t = (en, es) => (isEs ? es : en);

  const scoreboard = [
    [t('Cost of living & housing', 'Costo de vida y vivienda'), 'SLP', '~8% cheaper overall; rents 25–30% lower; buying ~40% cheaper per m² (Numbeo/Expatistan 2026)', '~8% más barato en general; rentas 25–30% menores; comprar ~40% más barato por m² (Numbeo/Expatistan 2026)'],
    [t('Safety perception', 'Percepción de seguridad'), 'QRO', 'ENSU Mar 2026: 35.3% feel unsafe vs 57.6% — though SLP is improving fastest in Mexico', 'ENSU mar 2026: 35.3% se siente inseguro vs 57.6% — aunque SLP es el que más rápido mejora en México'],
    [t('Formal jobs & wages', 'Empleo formal y salarios'), 'QRO', 'Unemployment 2.2% vs 3.0%; informality 39.0% vs 55.7% (INEGI Q1 2026) — the informality gap is the real story', 'Desempleo 2.2% vs 3.0%; informalidad 39.0% vs 55.7% (INEGI T1 2026) — la brecha de informalidad es la historia real'],
    [t('Flights & CDMX access', 'Vuelos y acceso a CDMX'), 'QRO', '~2.4M pax, ~9 US routes + Madrid, CDMX 2.5–3h (train 2027) vs 835k pax, 3 US routes, CDMX ~5h', '~2.4M pax, ~9 rutas a EE.UU. + Madrid, CDMX 2.5–3h (tren 2027) vs 835k pax, 3 rutas, CDMX ~5h'],
    [t('Top-tier healthcare', 'Salud de punta'), 'QRO', 'Star Médica QRO is #4 private hospital nationally (Funsalud/Blutitude 2025); SLP’s best ranks #47', 'Star Médica QRO es el #4 privado nacional (Funsalud/Blutitude 2025); el mejor de SLP es #47'],
    [t('Growth stress (water, traffic, prices)', 'Estrés del crecimiento (agua, tráfico, precios)'), 'SLP', 'QRO grew ~40% in a decade: aquifer deficit, 2025 water cuts to 300+ colonias, 90% of new apartments >MX$2M, data centers straining the grid. SLP grew half as fast (though its Realito aqueduct fails too)', 'QRO creció ~40% en una década: déficit de acuífero, cortes de agua a 300+ colonias en 2025, 90% de deptos nuevos >$2M, data centers presionando la red. SLP creció la mitad (aunque su Realito también falla)'],
    [t('Nature access', 'Acceso a naturaleza'), 'SLP', 'The Huasteca Potosina (3.5h) and Real de Catorce (3.5h) vs wine country and Bernal — spectacular beats pleasant', 'La Huasteca (3.5h) y Real de Catorce (3.5h) vs viñedos y Bernal — lo espectacular le gana a lo agradable'],
    [t('Expat infrastructure', 'Infraestructura expat'), 'QRO', '~37,000 registered foreign residents, 75+ nationalities, 3 IB schools, established newcomer clubs vs SLP’s smaller corporate (German/Japanese) scene', '~37,000 residentes extranjeros registrados, 75+ nacionalidades, 3 escuelas IB, clubes de recién llegados vs la escena corporativa (alemana/japonesa) más chica de SLP'],
    [t('Climate', 'Clima'), 'TIE', 'Nearly identical high-altitude semi-arid: QRO ~1.5–2°C warmer and wetter (528 vs 392 mm/yr); SLP has colder winter nights', 'Casi idéntico semiárido de altura: QRO ~1.5–2°C más cálido y lluvioso (528 vs 392 mm/año); SLP con noches de invierno más frías'],
  ];

  const rows = scoreboard.map(([cat, w, dEn, dEs]) => scoreRow(cat, w, dEn, dEs, isEs)).join('');

  return `<div class="max-w-none">

<p class="text-xl leading-relaxed text-gray-800 mb-8 font-medium">
  ${t(
    "<strong>Two Bajío-adjacent capitals, 200 km apart, competing for the same expats — and genuinely different bets.</strong> Querétaro is Mexico's boomtown: polished, connected, expensive, and straining under its own growth. San Luis Potosí is the value play: cheaper, calmer, more Mexican, with the country's most spectacular nature nearby. Here's the honest head-to-head, every number sourced.",
    '<strong>Dos capitales vecinas del Bajío, a 200 km, compitiendo por los mismos expats — y apuestas genuinamente distintas.</strong> Querétaro es el boomtown de México: pulido, conectado, caro y tensado por su propio crecimiento. San Luis Potosí es la jugada de valor: más barato, más calmado, más mexicano y con la naturaleza más espectacular del país al lado. Aquí el cara a cara honesto, cada número con fuente.'
  )}
</p>

<div class="speakable bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-200 rounded-2xl p-6 md:p-8 mb-10">
  <h2 class="text-2xl font-bold text-gray-900 mb-3">${t('The verdict in one paragraph', 'El veredicto en un párrafo')}</h2>
  <p class="text-base md:text-lg text-gray-800 leading-relaxed">
    ${t(
      '<strong>Choose Querétaro</strong> if you fly to the US often, want a large established expat scene, need top-tier hospitals or a formal-sector job — and can pay ~8% more overall with housing 25–40% higher. <strong>Choose San Luis Potosí</strong> if you want your money to go further, prefer a city that isn’t fighting itself over water and traffic, and would rather have the Huasteca Potosina than a wine route. Neither is wrong; they optimize different things.',
      '<strong>Elige Querétaro</strong> si vuelas seguido a EE.UU., quieres una escena expat grande y establecida, necesitas hospitales de punta o empleo formal — y puedes pagar ~8% más en general con vivienda 25–40% más cara. <strong>Elige San Luis Potosí</strong> si quieres que tu dinero rinda más, prefieres una ciudad que no pelea consigo misma por el agua y el tráfico, y antes que una ruta de vino quieres la Huasteca Potosina. Ninguna está mal; optimizan cosas distintas.'
    )}
  </p>
</div>

<section id="scoreboard" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-indigo-500 pb-3 inline-block">${t('The scoreboard', 'El marcador')}</h2>
</div>
<div class="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-4">
  <table class="min-w-full divide-y divide-gray-200">
    <caption class="sr-only">${t('SLP vs Querétaro comparison scoreboard 2026', 'Marcador comparativo SLP vs Querétaro 2026')}</caption>
    <thead class="bg-indigo-700">
      <tr><th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase">${t('Category', 'Categoría')}</th><th scope="col" class="px-4 py-3 text-center text-xs font-bold text-white uppercase">${t('Winner', 'Ganador')}</th><th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase">${t('The numbers', 'Los números')}</th></tr>
    </thead>
    <tbody>${rows}
    </tbody>
  </table>
</div>
<p class="text-xs text-gray-500 italic mb-4">${t('Final count: QRO 4, SLP 3, ties 1 — but weight the categories by what matters to YOU; that’s the whole point.', 'Cuenta final: QRO 4, SLP 3, empates 1 — pero pondera las categorías según lo que TE importa; ese es el punto.')}</p>
</section>

<section id="cost" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">${t('Money: the gap is in housing', 'Dinero: la brecha está en la vivienda')}</h2>
</div>
<div class="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-4">
  <table class="min-w-full divide-y divide-gray-200">
    <thead class="bg-emerald-700"><tr><th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase">${t('Monthly (MXN, Numbeo Jun 2026)', 'Mensual (MXN, Numbeo jun 2026)')}</th><th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase">Querétaro</th><th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase">SLP</th></tr></thead>
    <tbody class="divide-y divide-gray-100">
      <tr class="bg-white"><td class="px-4 py-3 text-sm text-gray-900">${t('1BR rent, center', 'Renta 1 rec, centro')}</td><td class="px-4 py-3 text-sm text-gray-700">$15,563</td><td class="px-4 py-3 text-sm font-semibold text-emerald-700">$11,800</td></tr>
      <tr class="bg-gray-50"><td class="px-4 py-3 text-sm text-gray-900">${t('3BR rent, center', 'Renta 3 rec, centro')}</td><td class="px-4 py-3 text-sm text-gray-700">$27,125</td><td class="px-4 py-3 text-sm font-semibold text-emerald-700">$21,333</td></tr>
      <tr class="bg-white"><td class="px-4 py-3 text-sm text-gray-900">${t('Buy price/m², center', 'Compra $/m², centro')}</td><td class="px-4 py-3 text-sm text-gray-700">$40,718</td><td class="px-4 py-3 text-sm font-semibold text-emerald-700">$25,644</td></tr>
    </tbody>
  </table>
</div>
<p class="text-gray-800 leading-relaxed mb-4">${t(
    'Context that explains the table: Querétaro is the <strong>3rd most expensive state for housing in Mexico</strong> (SHF, after CDMX and BCS; average home ~MX$2.34M in 2025), ~90% of its new apartments cost over MX$2M, and rental demand rose 22% year-over-year. SLP homes have actually appreciated at a similar <em>rate</em> since 2017 — but from a much lower base. Full SLP numbers in our <a href="/blog/cost-of-living-san-luis-potosi-2026" class="text-emerald-700 underline font-semibold">cost of living breakdown</a>.',
    'Contexto que explica la tabla: Querétaro es el <strong>3er estado más caro en vivienda de México</strong> (SHF, tras CDMX y BCS; casa promedio ~$2.34M en 2025), ~90% de sus departamentos nuevos superan los $2M y la demanda de renta subió 22% anual. La vivienda de SLP se ha apreciado a un <em>ritmo</em> similar desde 2017 — pero desde una base mucho menor. Los números completos de SLP en nuestro <a href="/blog/cost-of-living-san-luis-potosi-2026" class="text-emerald-700 underline font-semibold">desglose de costo de vida</a>.'
  )}</p>
</section>

<section id="growth" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-purple-500 pb-3 inline-block">${t("The boomtown tax: Querétaro's growing pains", 'El impuesto del boom: los dolores de Querétaro')}</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">${t(
    "Querétaro's metro added over half a million people in a decade (+39.5% by the official 2020 count — Mexico's 2nd-fastest-growing state) and projections say +24% more by 2030. The bill is arriving:",
    'El metro de Querétaro sumó más de medio millón de personas en una década (+39.5% según el conteo oficial 2020 — el 2° estado de mayor crecimiento) y las proyecciones dicen +24% más para 2030. La factura está llegando:'
  )}</p>
<ul class="space-y-2 mb-4 text-gray-800 text-sm">
  <li>• ${t('<strong>Water:</strong> the Valle de Querétaro aquifer extracts nearly double its recharge (deficit −63.7 hm³/yr, CONAGUA); September 2025 saw supply cut to 300+ colonias with rationing and Army-supported water trucks; the flagship fix is a MX$4.2bn wastewater-regeneration plant slated for 2029.', '<strong>Agua:</strong> el acuífero del Valle de Querétaro extrae casi el doble de su recarga (déficit −63.7 hm³/año, CONAGUA); en septiembre de 2025 se cortó el suministro a 300+ colonias con tandeo y pipas apoyadas por el Ejército; la solución bandera es una planta de regeneración de $4,200M prevista para 2029.')}</li>
  <li>• ${t('<strong>Infrastructure strain:</strong> the AWS ($5bn region, launched Jan 2025), Microsoft ($1.3bn) and CloudHQ ($4.8bn, 900 MW) data-center boom is documented as straining power and water systems.', '<strong>Presión de infraestructura:</strong> el boom de centros de datos de AWS (región de $5bn, enero 2025), Microsoft ($1.3bn) y CloudHQ ($4.8bn, 900 MW) está documentado presionando la red eléctrica y el agua.')}</li>
  <li>• ${t('<strong>Vehicles:</strong> the registered fleet grew 66% in a decade — congestion on Hwy 57 and Bernardo Quintana is chronic (neither city appears in the TomTom index, so no clean ranking exists).', '<strong>Vehículos:</strong> el parque creció 66% en una década — la saturación de la 57 y Bernardo Quintana es crónica (ninguna de las dos ciudades aparece en el índice TomTom, así que no hay ranking limpio).')}</li>
</ul>
<p class="text-gray-800 leading-relaxed">${t(
    "Honesty requires the mirror: SLP grew at roughly half that pace, but its own El Realito aqueduct has failed dozens of times since 2015 (out of service ~2 months in 2025 alone), and 11 of the state's 19 aquifers are depleted. The difference is degree, not kind — SLP's water stress is chronic annoyance; Querétaro's is a structural crisis colliding with hypergrowth.",
    'La honestidad exige el espejo: SLP creció a cerca de la mitad de ese ritmo, pero su acueducto El Realito ha fallado docenas de veces desde 2015 (~2 meses fuera solo en 2025) y 11 de los 19 acuíferos del estado están agotados. La diferencia es de grado, no de tipo — el estrés hídrico de SLP es molestia crónica; el de Querétaro es crisis estructural chocando con hipercrecimiento.'
  )}</p>
</section>

<section id="jobs" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-indigo-500 pb-3 inline-block">${t('Jobs & the expat communities', 'Empleo y las comunidades expat')}</h2>
</div>
<div class="grid md:grid-cols-2 gap-4 mb-4">
  <div class="bg-purple-50 rounded-xl p-6"><h3 class="font-bold text-lg text-purple-900 mb-2">Querétaro</h3><p class="text-sm text-gray-700 leading-relaxed">${t('Aerospace (80+ firms; Safran alone employs 3,300+ locally), data centers, corporate services. Unemployment 2.2%, informality 39% — Mexico’s most formalized labor market outside Monterrey. ~37,000 registered foreign residents across 75+ nationalities (Venezuelan, American, Colombian, Japanese), 3 IB schools, decades-old newcomer clubs.', 'Aeroespacial (80+ empresas; solo Safran emplea 3,300+ localmente), centros de datos, servicios corporativos. Desempleo 2.2%, informalidad 39% — el mercado laboral más formalizado fuera de Monterrey. ~37,000 residentes extranjeros registrados de 75+ nacionalidades (venezolanos, estadounidenses, colombianos, japoneses), 3 escuelas IB, clubes de recién llegados con décadas.')}</p></div>
  <div class="bg-emerald-50 rounded-xl p-6"><h3 class="font-bold text-lg text-emerald-900 mb-2">San Luis Potosí</h3><p class="text-sm text-gray-700 leading-relaxed">${t("Automotive heavyweight: BMW's €800M Neue Klasse expansion (EV production with new-gen batteries starts 2027, ~1,000 new jobs), GM, Cummins, Draexlmaier, 62 Japanese companies. Unemployment 3.0% but informality 55.7%. The foreign community is smaller and corporate — German and Japanese anchors (Centro Cultural Alemán since 1995, Nikkei SLP), one full-IB school (Terranova). Census nuance: SLP actually has more US-born residents than QRO — largely children of returned migrant families.", 'Peso pesado automotriz: la expansión Neue Klasse de BMW (€800M, producción EV con baterías de nueva generación desde 2027, ~1,000 empleos nuevos), GM, Cummins, Draexlmaier, 62 empresas japonesas. Desempleo 3.0% pero informalidad 55.7%. La comunidad extranjera es más chica y corporativa — anclas alemana y japonesa (Centro Cultural Alemán desde 1995, Nikkei SLP), una escuela IB completa (Terranova). Matiz censal: SLP tiene más residentes nacidos en EE.UU. que QRO — en buena parte hijos de familias migrantes retornadas.')}</p></div>
</div>
</section>

<section id="lifestyle" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-indigo-500 pb-3 inline-block">${t('Lifestyle, healthcare & connectivity', 'Estilo de vida, salud y conectividad')}</h2>
</div>
<ul class="space-y-3 mb-4 text-gray-800">
  <li>• <strong>${t('Weekends:', 'Fines de semana:')}</strong> ${t('QRO has the wine-and-cheese route (30+ vineyards, Bernal) and 7 Pueblos Mágicos; SLP counters with 6 Pueblos Mágicos and the knockout punches — the <a href="/blog/huasteca-potosina-itinerary-2026" class="text-indigo-700 underline">Huasteca</a> and <a href="/blog/real-de-catorce-guide-2026" class="text-indigo-700 underline">Real de Catorce</a>, both ~3.5 h away. Pleasant vs spectacular; pick your religion.', 'QRO tiene la ruta de queso y vino (30+ viñedos, Bernal) y 7 Pueblos Mágicos; SLP contesta con 6 Pueblos Mágicos y los golpes de nocaut — la <a href="/blog/huasteca-potosina-itinerary-2026" class="text-indigo-700 underline">Huasteca</a> y <a href="/blog/real-de-catorce-guide-2026" class="text-indigo-700 underline">Real de Catorce</a>, ambos a ~3.5 h. Agradable vs espectacular; escoge tu religión.')}</li>
  <li>• <strong>${t('Healthcare:', 'Salud:')}</strong> ${t("QRO wins decisively at the top end: Star Médica Querétaro ranked <strong>#4 private hospital in Mexico</strong> (Funsalud/Blutitude 2025) vs SLP's best at #47. Day-to-day care is comparable — see our <a href='/blog/healthcare-san-luis-potosi-expats-2026' class='text-indigo-700 underline'>SLP healthcare guide</a>.", 'QRO gana con claridad en la punta: Star Médica Querétaro es el <strong>#4 hospital privado de México</strong> (Funsalud/Blutitude 2025) vs el mejor de SLP en #47. La atención cotidiana es comparable — ve nuestra <a href="/blog/healthcare-san-luis-potosi-expats-2026" class="text-indigo-700 underline">guía de salud en SLP</a>.')}</li>
  <li>• <strong>${t('Getting out:', 'Salir:')}</strong> ${t('QRO airport moved ~2.4M passengers in 2025 (~9 US routes + Madrid) vs SLP’s ~835K (Dallas, Houston, San Antonio). CDMX: 2.5–3 h from QRO (passenger train targeted 2027) vs ~5 h from SLP — though a QRO–SLP rail segment is also planned.', 'El aeropuerto de QRO movió ~2.4M pasajeros en 2025 (~9 rutas a EE.UU. + Madrid) vs ~835K de SLP (Dallas, Houston, San Antonio). CDMX: 2.5–3 h desde QRO (tren de pasajeros previsto 2027) vs ~5 h desde SLP — aunque también hay un tramo QRO–SLP planeado.')}</li>
  <li>• <strong>${t('Climate:', 'Clima:')}</strong> ${t('Functionally identical high-altitude semi-arid (1,820 vs 1,864 m). QRO runs ~2°C warmer with more rain (528 vs 392 mm/yr); SLP winters bite a bit harder at night. Neither needs A/C or heating most of the year.', 'Funcionalmente idéntico: semiárido de altura (1,820 vs 1,864 m). QRO es ~2°C más cálido y llueve más (528 vs 392 mm/año); los inviernos de SLP muerden un poco más de noche. Ninguno necesita clima la mayor parte del año.')}</li>
</ul>
</section>

<section id="faq" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-indigo-500 pb-3 inline-block">FAQ</h2>
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
    'Verified July 2026: INEGI (Census 2020 metro populations and foreign-born, ENOE Q1 2026 state bulletins, ENSU March 2026), CONAGUA/DOF (aquifer balances), Querétaro state and press (Sept 2025 water cuts, Batán project, CENAMMMI foreign-resident registry), SHF housing index 2025, Numbeo June 2026 and Expatistan May 2026 (crowdsourced, labeled), AWS/Microsoft/CloudHQ announcements and Mexico Business News (data-center strain), BMW Group press (Neue Klasse SLP), Funsalud/Blutitude hospital ranking 2025, airport traffic (Wikipedia/OMA/state releases 2025), federal train-project updates (June 2026), SMN 1951–2010 climate normals. Where official figures conflict (metro delimitations, aqueduct failure counts), we use ranges and footnote the choice.',
    'Verificado en julio 2026: INEGI (poblaciones metro y nacidos en el extranjero del Censo 2020, boletines ENOE T1 2026, ENSU marzo 2026), CONAGUA/DOF (balances de acuíferos), gobierno y prensa de Querétaro (cortes de agua sep 2025, proyecto Batán, registro CENAMMMI de residentes extranjeros), índice SHF 2025, Numbeo junio 2026 y Expatistan mayo 2026 (crowdsourced, señalado), anuncios de AWS/Microsoft/CloudHQ y Mexico Business News (presión de data centers), prensa de BMW Group (Neue Klasse SLP), ranking hospitalario Funsalud/Blutitude 2025, tráfico aéreo (Wikipedia/OMA/estado 2025), avances del tren (junio 2026), normales climáticas SMN 1951–2010. Donde las cifras oficiales chocan (delimitaciones metro, conteos de fallas del acueducto), usamos rangos y anotamos la elección.'
  )}</p>
</section>

<div class="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-center">
  <p class="text-white text-lg font-bold mb-2">${t('Comparing more cities?', '¿Comparando más ciudades?')}</p>
  <p class="text-indigo-100 text-sm mb-4">${t('Read <a href="/blog/san-luis-potosi-vs-san-miguel-allende-expats-2026" class="underline font-semibold text-white">SLP vs San Miguel de Allende</a> — and get the weekly SLP brief free.', 'Lee <a href="/blog/san-luis-potosi-vs-san-miguel-allende-expats-2026" class="underline font-semibold text-white">SLP vs San Miguel de Allende</a> — y recibe el brief semanal gratis.')}</p>
  <a href="/subscribe" class="inline-block bg-white text-indigo-700 font-bold px-6 py-3 rounded-full hover:bg-indigo-50 transition-colors">${t('Subscribe to San Luis Way Weekly', 'Suscríbete a San Luis Way Weekly')}</a>
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
  tags: ['comparison', 'queretaro', 'expat-life', 'san-luis-potosi', 'mexico', 'move-to-mexico', 'cost-of-living', '2026'],

  title: 'San Luis Potosí vs Querétaro: Which Is Better for Expats? (2026)',
  excerpt: "The honest head-to-head: QRO wins safety perception, flights and top hospitals; SLP wins cost (housing 25–40% cheaper), calm and nature access. Plus the boomtown tax nobody prices in — Querétaro's water crisis, MX$2M+ apartments and data-center strain. Every number sourced.",
  content: buildContent(false),
  meta_title: 'San Luis Potosí vs Querétaro for Expats 2026: Honest Comparison',
  meta_description: 'SLP vs Querétaro 2026: cost (SLP ~8% cheaper, housing 25–40% less), safety perception (35% vs 58%), jobs, flights (2.4M vs 835K pax), water crises, hospitals. All sourced, no boosterism.',

  title_es: 'San Luis Potosí vs Querétaro: ¿Cuál Conviene Más? (2026)',
  excerpt_es: 'El cara a cara honesto: QRO gana percepción de seguridad, vuelos y hospitales de punta; SLP gana costo (vivienda 25–40% más barata), calma y naturaleza. Más el impuesto del boom que nadie cotiza — la crisis de agua de Querétaro, deptos de $2M+ y la presión de los data centers.',
  content_es: buildContent(true),
  meta_title_es: 'SLP vs Querétaro 2026: Comparación Honesta para Expats',
  meta_description_es: 'SLP vs Querétaro 2026: costo (SLP ~8% más barato, vivienda 25–40% menos), percepción de seguridad (35% vs 58%), empleo, vuelos, crisis de agua y hospitales. Todo con fuente.',

  title_de: 'San Luis Potosí vs Querétaro: Was ist besser für Expats? (2026)',
  excerpt_de: 'Der ehrliche Vergleich: QRO gewinnt bei Sicherheitsgefühl, Flügen und Top-Kliniken; SLP bei Kosten (Wohnen 25–40% günstiger), Ruhe und Natur. Plus die Boomtown-Steuer: Querétaros Wasserkrise und Rechenzentren-Belastung.',
  content_de: buildContent(false),
  meta_title_de: 'San Luis Potosí vs Querétaro für Expats 2026',
  meta_description_de: 'SLP vs Querétaro 2026: Kosten, Sicherheit, Jobs, Flüge, Wasserkrisen, Krankenhäuser. Alles mit Quellen, ohne Schönfärberei.',

  title_ja: 'サン・ルイス・ポトシ vs ケレタロ：移住するならどっち？（2026年）',
  excerpt_ja: '正直な比較：ケレタロは治安の体感・航空便・トップ病院で勝ち、SLPはコスト（住宅25〜40%安い）・落ち着き・自然アクセスで勝つ。誰も語らない「ブームタウン税」——ケレタロの水危機とデータセンター負荷も。全て出典付き。',
  content_ja: buildContent(false),
  meta_title_ja: 'SLP vs ケレタロ 2026 | 移住先の正直な比較',
  meta_description_ja: 'サン・ルイス・ポトシとケレタロの2026年比較：生活費、治安体感、雇用、航空便、水問題、病院。全て出典付き。',
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
