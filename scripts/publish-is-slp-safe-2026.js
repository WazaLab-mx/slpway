// Publishes "Is San Luis Potosí Safe in 2026?" — Tier 2 #1. High-stakes
// accuracy post. Dossier cautions applied: official drops attributed (state
// SESNSP preliminary; direction federally corroborated, magnitude not
// independently audited — said in the post); capital 8.2/100k attributed to
// the mayor citing SESNSP; US city rates labeled FBI 2024; Huasteca highway
// risk covered factually incl. the injury-free Dec 2025 bus attack; Numbeo
// labeled crowdsourced (59 contributors); ENSU Q2 release date flagged.
require('dotenv').config({ path: '.env' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const SLUG = 'is-san-luis-potosi-safe-2026';

const faqEN = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is San Luis Potosí safe for tourists in 2026?', acceptedAnswer: { '@type': 'Answer', text: "The capital city, yes, with normal precautions: the US State Department rates San Luis Potosí state Level 2 ('exercise increased caution') — the same level as Mexico City and Querétaro — with no travel restrictions for US government employees anywhere in the state. The city's 2025 homicide rate (~8.2 per 100k, per SESNSP data cited by the mayor) is about half Mexico's national rate and comparable to Austin or Denver. The state's real risk zone for travelers is the Huasteca highway corridor, where you should drive only in daylight." } },
    { '@type': 'Question', name: 'What is the US travel advisory level for San Luis Potosí?', acceptedAnswer: { '@type': 'Answer', text: "Level 2 — 'Exercise Increased Caution' (advisory dated May 29, 2026), with zero travel restrictions for US government employees in the state. For comparison: Querétaro, Aguascalientes and Mexico City are also Level 2; Guanajuato and Jalisco are Level 3; Zacatecas and Tamaulipas are Level 4 (Do Not Travel). Canada and the UK don't single out San Luis Potosí at all." } },
    { '@type': 'Question', name: 'Is the Huasteca Potosina safe to visit?', acceptedAnswer: { '@type': 'Answer', text: 'The waterfall sites themselves are family destinations with seasonal police operations, and no advisory restricts travel there. The documented risk is the highways — particularly the Valles–Tamazunchale stretch, where a tourist bus was shot at (no injuries) in December 2025 and highway robberies recur near El Pujal. The standard playbook: drive only in daylight, use tours from Ciudad Valles when possible, and stick to main roads.' } },
    { '@type': 'Question', name: 'How does San Luis Potosí compare to US cities on crime?', acceptedAnswer: { '@type': 'Answer', text: "The capital's 2025 homicide rate of about 8.2 per 100,000 (SESNSP data, cited by the mayor) lands in the range of Austin (8.2), Denver (8.4) or Boston (8.4) in FBI 2024 data — above the US national average of 5.0, far below high-crime US cities like Memphis (48.7), and about half Mexico's national rate of 17.5." } },
    { '@type': 'Question', name: 'Do locals feel safe in San Luis Potosí?', acceptedAnswer: { '@type': 'Answer', text: "Perception is improving fast: in INEGI's March 2026 ENSU survey, 57.6% of capital residents said they feel unsafe — below the national average (61.5%) and a 14.8-point improvement from a year earlier (72.4%). For context, Querétaro sits at 35.3% and Guadalajara at 90.2%. The next survey publishes July 24, 2026." } },
    { '@type': 'Question', name: 'Are Uber and DiDi safe to use in San Luis Potosí?', acceptedAnswer: { '@type': 'Answer', text: "Uber, DiDi and inDriver all operate in the city and are the recommended way to move at night. Their legal status under state law remains contested (a federal court suspension lets Uber operate), which occasionally causes friction at the airport — where licensed fixed-rate taxis handle pickups (~MX$275 to the Centro). Emergency number is 911, and the Centro Histórico now has a dedicated 50-officer tourist police unit." } },
  ],
};

const faqES = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: '¿Es seguro San Luis Potosí para turistas en 2026?', acceptedAnswer: { '@type': 'Answer', text: 'La capital sí, con precauciones normales: el Departamento de Estado de EE.UU. clasifica al estado en Nivel 2 ("precaución aumentada") — el mismo nivel que CDMX y Querétaro — sin ninguna restricción de viaje para su personal en todo el estado. La tasa de homicidio de la ciudad en 2025 (~8.2 por 100k, datos SESNSP citados por el alcalde) es cerca de la mitad de la nacional y comparable a Austin o Denver. La zona de riesgo real para viajeros son las carreteras de la Huasteca: manéjalas solo de día.' } },
    { '@type': 'Question', name: '¿Qué nivel de alerta tiene San Luis Potosí para EE.UU.?', acceptedAnswer: { '@type': 'Answer', text: 'Nivel 2 — "Exercise Increased Caution" (alerta del 29 de mayo de 2026), con cero restricciones para personal del gobierno de EE.UU. en el estado. Para comparar: Querétaro, Aguascalientes y CDMX también son Nivel 2; Guanajuato y Jalisco son Nivel 3; Zacatecas y Tamaulipas son Nivel 4 (No Viajar). Canadá y Reino Unido ni siquiera mencionan a SLP.' } },
    { '@type': 'Question', name: '¿Es seguro visitar la Huasteca Potosina?', acceptedAnswer: { '@type': 'Answer', text: 'Los sitios de cascadas son destinos familiares con operativos policiacos de temporada, y ninguna alerta restringe el viaje. El riesgo documentado son las carreteras — en particular el tramo Valles–Tamazunchale, donde en diciembre de 2025 dispararon a un autobús turístico (sin heridos) y se repiten asaltos cerca de El Pujal. El manual estándar: maneja solo de día, usa tours desde Ciudad Valles cuando se pueda y quédate en las vías principales.' } },
    { '@type': 'Question', name: '¿Cómo se compara SLP con ciudades de EE.UU. en criminalidad?', acceptedAnswer: { '@type': 'Answer', text: 'La tasa de homicidio de la capital en 2025, ~8.2 por 100,000 (datos SESNSP citados por el alcalde), queda en el rango de Austin (8.2), Denver (8.4) o Boston (8.4) según datos FBI 2024 — arriba del promedio nacional de EE.UU. (5.0), muy abajo de las ciudades más violentas de ese país como Memphis (48.7), y cerca de la mitad de la tasa nacional mexicana (17.5).' } },
    { '@type': 'Question', name: '¿La gente local se siente segura en San Luis Potosí?', acceptedAnswer: { '@type': 'Answer', text: 'La percepción mejora rápido: en la ENSU de marzo 2026 (INEGI), 57.6% de los habitantes de la capital dijo sentirse inseguro — abajo del promedio nacional (61.5%) y una mejora de 14.8 puntos contra el año anterior (72.4%). Para contexto: Querétaro está en 35.3% y Guadalajara en 90.2%. La siguiente encuesta sale el 24 de julio de 2026.' } },
    { '@type': 'Question', name: '¿Uber y DiDi son seguros en San Luis Potosí?', acceptedAnswer: { '@type': 'Answer', text: 'Uber, DiDi e inDriver operan en la ciudad y son la forma recomendada de moverse de noche. Su estatus legal estatal sigue en disputa (una suspensión federal permite operar a Uber), lo que a veces causa fricción en el aeropuerto — donde la salida es de taxis autorizados de tarifa fija (~$275 al Centro). El número de emergencias es 911, y el Centro Histórico ya tiene una policía turística de 50 elementos.' } },
  ],
};

function faqDetails(faq) {
  return faq.mainEntity
    .map(
      (q) => `<details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">${q.name}<span class="text-blue-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">${q.acceptedAnswer.text}</p></details>`
    )
    .join('\n  ');
}

function buildContent(isEs) {
  const faq = isEs ? faqES : faqEN;
  const ids = isEs
    ? { tldr: 'resumen', adv: 'alertas', data: 'datos', perception: 'percepcion', compare: 'comparacion', where: 'donde-esta-el-riesgo', practical: 'practico' }
    : { tldr: 'tldr', adv: 'advisories', data: 'the-data', perception: 'perception', compare: 'us-comparison', where: 'where-the-risk-is', practical: 'practical' };

  const t = (en, es) => (isEs ? es : en);

  return `<div class="max-w-none">

<div class="bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-6 mb-10">
  <p class="font-bold text-blue-900 mb-3">${t('In this analysis', 'En este análisis')}</p>
  <nav class="grid sm:grid-cols-2 gap-2 text-blue-800 text-sm">
    <a href="#${ids.tldr}" class="hover:underline">→ ${t('The short answer', 'La respuesta corta')}</a>
    <a href="#${ids.adv}" class="hover:underline">→ ${t('What the advisories say (US, CA, UK)', 'Qué dicen las alertas (EE.UU., CA, UK)')}</a>
    <a href="#${ids.data}" class="hover:underline">→ ${t('The official numbers — and their caveats', 'Los números oficiales — y sus asteriscos')}</a>
    <a href="#${ids.perception}" class="hover:underline">→ ${t('How locals feel (INEGI survey)', 'Cómo se siente la gente (encuesta INEGI)')}</a>
    <a href="#${ids.compare}" class="hover:underline">→ ${t('SLP vs US cities', 'SLP vs ciudades de EE.UU.')}</a>
    <a href="#${ids.where}" class="hover:underline">→ ${t('Where the risk actually is', 'Dónde está el riesgo de verdad')}</a>
    <a href="#${ids.practical}" class="hover:underline">→ ${t('Practical playbook', 'Manual práctico')}</a>
    <a href="#faq" class="hover:underline">→ FAQ</a>
  </nav>
  <p class="mt-4 text-sm text-blue-700 italic">${t('Data as of July 2, 2026 · Every figure sourced · Next INEGI survey: July 24, 2026', 'Datos al 2 de julio de 2026 · Cada cifra con fuente · Próxima encuesta INEGI: 24 de julio de 2026')}</p>
</div>

<p class="text-xl leading-relaxed text-gray-800 mb-8 font-medium">
  ${t(
    "<strong>You deserve a real answer, not a brochure.</strong> So here it is with sources: what the US State Department actually says, what Mexico's official crime data shows (including why you should read it with one eyebrow raised), how residents themselves answer the question, and the one region of the state where caution genuinely matters.",
    '<strong>Mereces una respuesta real, no un folleto.</strong> Así que aquí va con fuentes: qué dice de verdad el Departamento de Estado, qué muestran los datos oficiales de criminalidad de México (y por qué conviene leerlos con una ceja levantada), cómo responde la propia gente que vive aquí, y la única región del estado donde la cautela importa en serio.'
  )}
</p>

<section id="${ids.tldr}" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-blue-500 pb-3 inline-block">${t('The short answer', 'La respuesta corta')}</h2>
</div>
<div class="speakable bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-6 md:p-8 mb-6">
  <p class="text-base md:text-lg text-gray-800 leading-relaxed mb-5">
    ${t(
      '<strong>San Luis Potosí capital is, statistically, one of the safer large cities in Mexico in 2026 — and trending better.</strong> The state holds a US Level 2 advisory (same as Mexico City and Querétaro) with <strong>zero travel restrictions for US government personnel</strong>. The city’s homicide rate runs about half the national average. The meaningful risk for travelers is concentrated on the Huasteca highway corridor — manageable with daylight driving.',
      '<strong>La capital potosina es, estadísticamente, una de las ciudades grandes más seguras de México en 2026 — y con tendencia a mejorar.</strong> El estado tiene alerta Nivel 2 de EE.UU. (igual que CDMX y Querétaro) con <strong>cero restricciones para personal del gobierno estadounidense</strong>. La tasa de homicidio de la ciudad ronda la mitad del promedio nacional. El riesgo relevante para viajeros se concentra en el corredor carretero de la Huasteca — manejable viajando de día.'
    )}
  </p>
</div>
</section>

<section id="${ids.adv}" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-blue-500 pb-3 inline-block">${t('What the advisories say', 'Qué dicen las alertas de viaje')}</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">${t(
    'The US advisory (dated May 29, 2026) puts San Luis Potosí at <strong>Level 2 — "Exercise Increased Caution"</strong> and states verbatim: <em>"There are no specific restrictions on travel for U.S. government employees in San Luis Potosi state."</em> That last sentence is the tell — in Level 3/4 states, US personnel face road bans and curfews. Here, none.',
    'La alerta de EE.UU. (29 de mayo de 2026) pone a San Luis Potosí en <strong>Nivel 2 — "Exercise Increased Caution"</strong> y dice textualmente: <em>"There are no specific restrictions on travel for U.S. government employees in San Luis Potosi state."</em> Esa última frase es la clave — en estados Nivel 3/4, el personal estadounidense tiene carreteras vetadas y toques de queda. Aquí, ninguno.'
  )}</p>
<div class="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-4">
  <table class="min-w-full divide-y divide-gray-200">
    <thead class="bg-blue-700">
      <tr><th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase">${t('State', 'Estado')}</th><th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase">${t('US level (May 2026)', 'Nivel EE.UU. (may 2026)')}</th></tr>
    </thead>
    <tbody class="divide-y divide-gray-100">
      <tr class="bg-emerald-50"><td class="px-4 py-3 text-sm font-bold text-gray-900">San Luis Potosí</td><td class="px-4 py-3 text-sm text-gray-800"><strong>${t('Level 2 — no USG restrictions', 'Nivel 2 — sin restricciones')}</strong></td></tr>
      <tr class="bg-white"><td class="px-4 py-3 text-sm text-gray-900">Querétaro · Aguascalientes · CDMX · Hidalgo · Nuevo León</td><td class="px-4 py-3 text-sm text-gray-700">${t('Level 2', 'Nivel 2')}</td></tr>
      <tr class="bg-gray-50"><td class="px-4 py-3 text-sm text-gray-900">Guanajuato · Jalisco · Coahuila</td><td class="px-4 py-3 text-sm text-gray-700">${t('Level 3 — Reconsider travel', 'Nivel 3 — Reconsiderar el viaje')}</td></tr>
      <tr class="bg-white"><td class="px-4 py-3 text-sm text-gray-900">Zacatecas · Tamaulipas</td><td class="px-4 py-3 text-sm text-gray-700">${t('Level 4 — Do Not Travel', 'Nivel 4 — No viajar')}</td></tr>
    </tbody>
  </table>
</div>
<p class="text-gray-800 leading-relaxed mb-4">${t(
    'Two notes so you read it right. First, the word "terrorism" now appears in advisories for nearly every Mexican state — including Level 2 Querétaro and Mexico City — because the US designated cartels as terrorist organizations in 2025; it is not an SLP-specific warning. Second, <strong>Canada and the UK don’t single out San Luis Potosí at all</strong> in their regional warnings.',
    'Dos notas para leerla bien. Primera: la palabra "terrorismo" ahora aparece en las alertas de casi todos los estados mexicanos — incluidos Querétaro y CDMX, Nivel 2 — porque EE.UU. designó a los cárteles como organizaciones terroristas en 2025; no es una advertencia específica de SLP. Segunda: <strong>Canadá y Reino Unido ni siquiera mencionan a San Luis Potosí</strong> en sus advertencias regionales.'
  )}</p>
</section>

<section id="${ids.data}" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-blue-500 pb-3 inline-block">${t('The official numbers — and their caveats', 'Los números oficiales — y sus asteriscos')}</h2>
</div>
<div class="grid md:grid-cols-3 gap-4 mb-6">
  <div class="bg-white border-2 border-blue-100 rounded-xl p-5 text-center"><p class="text-3xl font-extrabold text-blue-700 mb-1">-54%</p><p class="text-sm text-gray-700">${t('State homicides in 2025 vs 2024 (444 → 203), per SESNSP figures announced by the state', 'Homicidios estatales 2025 vs 2024 (444 → 203), cifras SESNSP anunciadas por el estado')}</p></div>
  <div class="bg-white border-2 border-blue-100 rounded-xl p-5 text-center"><p class="text-3xl font-extrabold text-blue-700 mb-1">-81%</p><p class="text-sm text-gray-700">${t('Jan–May 2026 vs 2025 — the largest drop of any Mexican state, per the federal SESNSP monthly report', 'Ene–may 2026 vs 2025 — la mayor baja de cualquier estado, según el reporte mensual federal del SESNSP')}</p></div>
  <div class="bg-white border-2 border-blue-100 rounded-xl p-5 text-center"><p class="text-3xl font-extrabold text-blue-700 mb-1">8.2</p><p class="text-sm text-gray-700">${t('Capital homicide rate per 100k in 2025 — about half the national 16.0 (mayor, citing SESNSP)', 'Tasa de homicidio de la capital por 100k en 2025 — cerca de la mitad de la nacional de 16.0 (alcalde, citando SESNSP)')}</p></div>
</div>
<div class="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6 mb-6">
  <h3 class="font-bold text-amber-900 mb-2">${t('Read this before quoting those numbers', 'Lee esto antes de citar esos números')}</h3>
  <p class="text-sm text-gray-800 leading-relaxed">${t(
    "SESNSP figures are <strong>preliminary and state-reported</strong> — they depend on how each prosecutor's office classifies deaths, and the size of SLP's drop has not been independently audited (local monitors have documented under-registration in some SLP categories). What IS solid: the <strong>direction</strong> of the trend is corroborated by the federal comparison across all states, and Mexico as a whole closed 2025 with its lowest homicide count in a decade (national rate 17.5 per 100k). Our read: treat 'SLP improved substantially in 2025–26' as well-supported, and the exact percentages as government-reported.",
    'Las cifras del SESNSP son <strong>preliminares y reportadas por el estado</strong> — dependen de cómo clasifica cada fiscalía las muertes, y la magnitud de la baja de SLP no ha sido auditada independientemente (monitores locales han documentado subregistro en algunas categorías). Lo que SÍ es sólido: la <strong>dirección</strong> de la tendencia está corroborada por la comparación federal entre estados, y México cerró 2025 con su menor número de homicidios en una década (tasa nacional 17.5 por 100k). Nuestra lectura: toma "SLP mejoró sustancialmente en 2025–26" como bien sustentado, y los porcentajes exactos como cifras gubernamentales.'
  )}</p>
</div>
</section>

<section id="${ids.perception}" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-blue-500 pb-3 inline-block">${t('How locals feel: the INEGI survey', 'Cómo se siente la gente: la encuesta del INEGI')}</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">${t(
    'Perception data can’t be massaged by a press office — INEGI surveys residents directly every quarter (ENSU). In the March 2026 edition, <strong>57.6% of SLP capital residents said they feel unsafe</strong>: below the national average of 61.5%, and a statistically significant <strong>14.8-point improvement</strong> from 72.4% a year earlier.',
    'La percepción no la maquilla ninguna oficina de prensa — el INEGI encuesta directamente a los habitantes cada trimestre (ENSU). En la edición de marzo 2026, <strong>57.6% de los habitantes de la capital dijo sentirse inseguro</strong>: abajo del promedio nacional de 61.5%, y una mejora <strong>estadísticamente significativa de 14.8 puntos</strong> contra el 72.4% de un año antes.'
  )}</p>
<div class="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-4">
  <table class="min-w-full divide-y divide-gray-200">
    <caption class="sr-only">ENSU March 2026 — % feeling unsafe</caption>
    <thead class="bg-blue-700"><tr><th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase">${t('City', 'Ciudad')}</th><th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase">${t('% feel unsafe (Mar 2026)', '% que se siente inseguro (mar 2026)')}</th></tr></thead>
    <tbody class="divide-y divide-gray-100">
      <tr class="bg-white"><td class="px-4 py-3 text-sm text-gray-900">Querétaro</td><td class="px-4 py-3 text-sm text-gray-700">35.3%</td></tr>
      <tr class="bg-emerald-50"><td class="px-4 py-3 text-sm font-bold text-gray-900">San Luis Potosí</td><td class="px-4 py-3 text-sm text-gray-800"><strong>57.6%</strong> ${t('(from 72.4% a year ago)', '(desde 72.4% hace un año)')}</td></tr>
      <tr class="bg-white"><td class="px-4 py-3 text-sm text-gray-900">${t('National average', 'Promedio nacional')}</td><td class="px-4 py-3 text-sm text-gray-700">61.5%</td></tr>
      <tr class="bg-gray-50"><td class="px-4 py-3 text-sm text-gray-900">León</td><td class="px-4 py-3 text-sm text-gray-700">76.2%</td></tr>
      <tr class="bg-white"><td class="px-4 py-3 text-sm text-gray-900">Guadalajara</td><td class="px-4 py-3 text-sm text-gray-700">90.2%</td></tr>
    </tbody>
  </table>
</div>
<p class="text-sm text-gray-600 leading-relaxed">${t(
    'Full transparency: the same survey shows reports of neighborhood conflicts/confrontations in SLP rose year-over-year (24.1% → 42.2%). And the next edition publishes <strong>July 24, 2026</strong> — we’ll update this post if the picture changes.',
    'Transparencia completa: la misma encuesta muestra que los reportes de conflictos vecinales en SLP subieron año contra año (24.1% → 42.2%). Y la siguiente edición sale el <strong>24 de julio de 2026</strong> — actualizaremos este post si el panorama cambia.'
  )}</p>
</section>

<section id="${ids.compare}" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-blue-500 pb-3 inline-block">${t('SLP vs cities Americans know', 'SLP vs ciudades que los estadounidenses conocen')}</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">${t(
    'Using the capital’s 2025 rate (~8.2 per 100k) against FBI 2024 city data — an honest one-year mismatch we’re labeling openly:',
    'Usando la tasa 2025 de la capital (~8.2 por 100k) contra datos FBI 2024 de ciudades — un desfase de un año que señalamos abiertamente:'
  )}</p>
<div class="grid md:grid-cols-2 gap-4 mb-4">
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-gray-900 mb-2">${t('Similar rate', 'Tasa similar')}</h3><p class="text-sm text-gray-700">Austin, TX (8.2) · Denver, CO (8.4) · Boston, MA (8.4) · Long Beach, CA (8.1)</p></div>
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-gray-900 mb-2">${t('For scale', 'Para dimensionar')}</h3><p class="text-sm text-gray-700">${t('US national average: 5.0 · Chicago: 18.3 · Memphis: 48.7 · Mexico national: 17.5', 'Promedio nacional EE.UU.: 5.0 · Chicago: 18.3 · Memphis: 48.7 · Nacional México: 17.5')}</p></div>
</div>
<p class="text-sm text-gray-600 leading-relaxed">${t(
    'Crowdsourced indexes tell a similar mid-table story: Numbeo (59 contributors — small sample, treat accordingly) scores SLP safety at ~48/100, with high daytime-walking safety (74) and low night-walking comfort (39) — which matches the local playbook: walk by day, ride by night.',
    'Los índices crowdsourced cuentan una historia similar de media tabla: Numbeo (59 contribuyentes — muestra chica, tómala como tal) da a SLP ~48/100 en seguridad, con caminata diurna alta (74) y comodidad nocturna baja (39) — que coincide con el manual local: camina de día, pide coche de noche.'
  )}</p>
</section>

<section id="${ids.where}" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-red-400 pb-3 inline-block">${t('Where the risk actually is', 'Dónde está el riesgo de verdad')}</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">${t(
    'An honest safety post names the exception. The state’s crime statistics are driven not by the capital but by the <strong>Huasteca / Zona Media</strong> (Ciudad Valles, Rioverde, Tamazunchale corridors), where multiple criminal groups overlap and businesses have reported highway extortion. The documented incident travelers should know about: on <strong>December 30, 2025</strong>, gunmen tried to stop a tourist bus on the Valles–Tamazunchale highway; the driver didn’t stop, shots hit the windshield, and <strong>no one was injured</strong>. Local press has documented recurring bus robberies concentrated near the El Pujal stretch.',
    'Un post honesto de seguridad nombra la excepción. Las estadísticas del estado no las mueve la capital sino la <strong>Huasteca / Zona Media</strong> (corredores de Ciudad Valles, Rioverde, Tamazunchale), donde se traslapan varios grupos criminales y hay denuncias de extorsión carretera. El incidente documentado que un viajero debe conocer: el <strong>30 de diciembre de 2025</strong>, hombres armados intentaron detener un autobús turístico en la carretera Valles–Tamazunchale; el chofer no se detuvo, los disparos pegaron en el parabrisas y <strong>nadie salió herido</strong>. La prensa local ha documentado asaltos recurrentes a autobuses concentrados en el tramo de El Pujal.'
  )}</p>
<div class="bg-gray-50 rounded-xl p-6 mb-4">
  <h3 class="font-bold text-gray-900 mb-2">${t('The Huasteca playbook (it’s still very visitable)', 'El manual para la Huasteca (sigue siendo muy visitable)')}</h3>
  <ul class="space-y-2 text-sm text-gray-700">
    <li>• ${t('Drive the corridors only in daylight — this is also the blanket US advisory advice for all of Mexico.', 'Maneja los corredores solo de día — que además es el consejo general de la alerta de EE.UU. para todo México.')}</li>
    <li>• ${t('Prefer day tours from Ciudad Valles over solo night drives; police run seasonal operations at the waterfall sites and Xilitla.', 'Prefiere tours de día desde Ciudad Valles sobre manejar de noche; hay operativos policiacos de temporada en las cascadas y Xilitla.')}</li>
    <li>• ${t('Our <a href="/blog/huasteca-potosina-itinerary-2026" class="text-blue-700 underline">Huasteca itinerary</a> is built around daylight legs for exactly this reason.', 'Nuestro <a href="/blog/huasteca-potosina-itinerary-2026" class="text-blue-700 underline">itinerario de la Huasteca</a> está armado con tramos de día exactamente por esto.')}</li>
  </ul>
</div>
<p class="text-sm text-gray-600 leading-relaxed">${t(
    'One more 2026 data point that says a lot: when the death of CJNG leader "El Mencho" triggered narco-blockades across 11+ states in February 2026, <strong>San Luis Potosí recorded zero blockades or violent incidents</strong>.',
    'Un dato más de 2026 que dice mucho: cuando la muerte del líder del CJNG "El Mencho" desató narcobloqueos en más de 11 estados en febrero de 2026, <strong>San Luis Potosí registró cero bloqueos e incidentes violentos</strong>.'
  )}</p>
</section>

<section id="${ids.practical}" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-blue-500 pb-3 inline-block">${t('The practical playbook', 'El manual práctico')}</h2>
</div>
<div class="grid md:grid-cols-2 gap-4 mb-6">
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">${t('In the city', 'En la ciudad')}</h3><ul class="space-y-2 text-sm text-gray-700"><li>• ${t('Centro, Carranza and Lomas are the visitor zones — walk them by day freely; at night take Uber/DiDi/inDriver instead of walking long stretches.', 'Centro, Carranza y Lomas son las zonas de visita — camínalas de día con libertad; de noche pide Uber/DiDi/inDriver en vez de caminar tramos largos.')}</li><li>• ${t('The Centro now has a dedicated 50-officer tourist police; hotels carry QR codes that summon Guardia Civil patrols.', 'El Centro ya tiene policía turística de 50 elementos; los hoteles tienen códigos QR que llaman patrullas de la Guardia Civil.')}</li><li>• ${t('Emergency number: 911.', 'Emergencias: 911.')}</li></ul></div>
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">${t('On the road', 'En carretera')}</h3><ul class="space-y-2 text-sm text-gray-700"><li>• ${t('Intercity: daylight only, cuota (toll) roads over libre roads.', 'Interurbano: solo de día y por cuota en vez de libre.')}</li><li>• ${t('Driving to Texas? Standard route is the 57/40D via Saltillo in daylight; Tamaulipas is Level 4 — route around it.', '¿Manejas a Texas? La ruta estándar es 57/40D por Saltillo de día; Tamaulipas es Nivel 4 — rodéalo.')}</li><li>• ${t('Airport pickups are licensed-taxi only (fixed ~MX$275 to Centro); apps work everywhere else.', 'La salida del aeropuerto es solo taxi autorizado (fijo ~$275 al Centro); las apps funcionan en el resto.')}</li></ul></div>
</div>
</section>

<section id="faq" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-blue-500 pb-3 inline-block">FAQ</h2>
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
    'US State Department Mexico Travel Advisory (May 29, 2026); Government of Canada and UK FCDO Mexico pages (checked July 2026); SESNSP incidence data via the SLP state security ministry (Jan 2026), the federal monthly report as covered by Infobae (June 16, 2026), and the SLP mayor’s June 24, 2026 announcement (capital rate); INEGI ENSU Q1 2026 bulletin (published April 24, 2026, PDF); FBI 2024 Crime in the Nation (US national rate) with city rates from compiled FBI data; Numbeo SLP crime page (May 2026, 59 contributors — crowdsourced); incident and context reporting from UnoTV, Astrolabio, Código San Luis, Reporte Índigo and El Universal SLP. Where a figure comes from a government announcement rather than raw data, we say so in the text.',
    'Alerta de viaje de EE.UU. para México (29 de mayo de 2026); páginas de Canadá y Reino Unido (consultadas en julio 2026); datos SESNSP vía la secretaría de seguridad estatal (ene 2026), el reporte mensual federal cubierto por Infobae (16 de junio de 2026) y el anuncio del alcalde del 24 de junio de 2026 (tasa de la capital); boletín ENSU T1 2026 del INEGI (publicado el 24 de abril de 2026, PDF); FBI 2024 Crime in the Nation (tasa nacional de EE.UU.) con tasas de ciudades de datos FBI compilados; página de Numbeo SLP (mayo 2026, 59 contribuyentes — crowdsourced); reporteo de incidentes y contexto de UnoTV, Astrolabio, Código San Luis, Reporte Índigo y El Universal SLP. Cuando una cifra viene de un anuncio gubernamental y no de datos crudos, lo decimos en el texto.'
  )}</p>
</section>

<div class="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-center">
  <p class="text-white text-lg font-bold mb-2">${t('Thinking about moving to San Luis Potosí?', '¿Pensando en mudarte a San Luis Potosí?')}</p>
  <p class="text-blue-100 text-sm mb-4">${t('Pair this with our cost of living breakdown and the ultimate living guide — and get the weekly local brief free.', 'Complementa con nuestro desglose de costo de vida y la guía definitiva para vivir aquí — y recibe el brief semanal gratis.')}</p>
  <a href="/subscribe" class="inline-block bg-white text-blue-700 font-bold px-6 py-3 rounded-full hover:bg-blue-50 transition-colors">${t('Subscribe to San Luis Way Weekly', 'Suscríbete a San Luis Way Weekly')}</a>
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
  tags: ['safety', 'is-san-luis-potosi-safe', 'travel-advisory', 'expat-life', 'san-luis-potosi', 'mexico', 'crime-data', '2026'],

  title: 'Is San Luis Potosí Safe in 2026? An Honest, Data-Backed Answer',
  excerpt: "US Level 2 with zero travel restrictions, a capital homicide rate around Austin/Denver levels, the biggest crime drop of any Mexican state — and the one highway corridor where caution genuinely matters. Every figure sourced, caveats included.",
  content: buildContent(false),
  meta_title: 'Is San Luis Potosí Safe in 2026? Data, Advisories & Honest Answers',
  meta_description: 'San Luis Potosí safety in 2026: US Level 2 advisory (no restrictions), capital homicide rate ~8.2/100k (≈Austin/Denver), INEGI perception data, and the Huasteca highway caveat. All sourced.',

  title_es: '¿Es Seguro San Luis Potosí en 2026? Una Respuesta Honesta con Datos',
  excerpt_es: 'Nivel 2 de EE.UU. sin restricciones de viaje, una tasa de homicidio en la capital a niveles de Austin/Denver, la mayor baja delictiva de cualquier estado — y el único corredor carretero donde la cautela importa de verdad. Cada cifra con fuente y con sus asteriscos.',
  content_es: buildContent(true),
  meta_title_es: '¿Es Seguro San Luis Potosí en 2026? Datos y Respuestas Honestas',
  meta_description_es: 'Seguridad en San Luis Potosí 2026: alerta Nivel 2 de EE.UU. (sin restricciones), tasa de homicidio de la capital ~8.2/100k (≈Austin/Denver), percepción INEGI y el asterisco de las carreteras de la Huasteca.',

  title_de: 'Ist San Luis Potosí 2026 sicher? Eine ehrliche Antwort mit Daten',
  excerpt_de: 'US-Stufe 2 ohne Reisebeschränkungen, Mordrate der Hauptstadt auf Austin/Denver-Niveau, der stärkste Kriminalitätsrückgang aller mexikanischen Bundesstaaten — und der eine Highway-Korridor, wo Vorsicht wirklich zählt.',
  content_de: buildContent(false),
  meta_title_de: 'Ist San Luis Potosí 2026 sicher? Daten & ehrliche Antworten',
  meta_description_de: 'Sicherheit in San Luis Potosí 2026: US-Stufe-2-Hinweis, Mordrate ~8,2/100k, INEGI-Umfragedaten und der Huasteca-Highway-Vorbehalt. Alles mit Quellen.',

  title_ja: 'サン・ルイス・ポトシは2026年、安全か？データに基づく正直な答え',
  excerpt_ja: '米国務省レベル2（渡航制限なし）、州都の殺人率はオースティン／デンバー並み、メキシコ全州で最大の犯罪減少——そして本当に注意が必要な唯一のハイウェイ回廊。全て出典付き。',
  content_ja: buildContent(false),
  meta_title_ja: 'サン・ルイス・ポトシの治安 2026 | データと正直な答え',
  meta_description_ja: 'サン・ルイス・ポトシの2026年治安情報：米国レベル2勧告、州都殺人率~8.2/10万人、INEGI体感調査、ワステカ街道の注意点。全て出典付き。',
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
