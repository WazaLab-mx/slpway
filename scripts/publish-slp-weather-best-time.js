// Publishes "Weather in San Luis Potosí: Month-by-Month Guide + Best Time to
// Visit (2026)" — SEO gap #4 (zero weather queries captured). All figures from
// SMN/CONAGUA climate normals 1991–2020. City values are RANGES across the two
// consistent SLP city stations (24069 DGE, 24111 SMN); station 24070 (OBS) was
// excluded after its raw series showed implausible year-to-year jumps. Ciudad
// Valles values from station 24012. Tamul low-water episodes (2024, Apr–May
// 2026) reuse the verified findings of factcheck huasteca-potosina-itinerary.
require('dotenv').config({ path: '.env' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const SLUG = 'san-luis-potosi-weather-best-time-to-visit';

// City: SMN normals 1991–2020, ranges across stations 24069 + 24111 (~1,870 m).
// [monthEN, monthES, high °C, low °C, rain mm, rain days, note EN, note ES]
const CITY_MONTHS = [
  ['January', 'Enero', '21–22', '4–7', '13–14', '4–8',
    'Coldest month — sunny afternoons, near-freezing dawns', 'El mes más frío — tardes soleadas, madrugadas casi heladas'],
  ['February', 'Febrero', '23–25', '5–8', '11–12', '3–5',
    'Dry and warming; nights still cold', 'Seco y templándose; noches todavía frías'],
  ['March', 'Marzo', '26–27', '7–10', '8–9', '3–4',
    'Driest stretch of the year; real spring warmth', 'La racha más seca del año; calor primaveral de verdad'],
  ['April', 'Abril', '29–30', '10–13', '11', '3–4',
    'Hot, dry and clear — Huasteca rivers at their lowest', 'Caluroso, seco y despejado — los ríos de la Huasteca en su nivel más bajo'],
  ['May', 'Mayo', '29–31', '12–14', '37–44', '7–9',
    'Hottest, sunniest month; first storms at the end', 'El mes más caluroso y soleado; primeras tormentas al final'],
  ['June', 'Junio', '27–29', '13–15', '59', '9–11',
    'Rainy season arrives — afternoon and evening storms', 'Llega la temporada de lluvias — tormentas de tarde y noche'],
  ['July', 'Julio', '26–28', '12–14', '62–76', '10',
    'Warm days, regular evening rain, green hills', 'Días cálidos, lluvia vespertina frecuente, cerros verdes'],
  ['August', 'Agosto', '26–28', '12–14', '48–55', '10',
    'FENAPO month: warm, with evening showers', 'Mes de FENAPO: cálido, con chubascos vespertinos'],
  ['September', 'Septiembre', '24–26', '12–14', '75–82', '13',
    'Wettest, cloudiest month of the year', 'El mes más lluvioso y nublado del año'],
  ['October', 'Octubre', '24–25', '9–12', '31–33', '8–11',
    'Rains fade; the long clear season begins', 'Se apagan las lluvias; empieza la larga temporada despejada'],
  ['November', 'Noviembre', '22–24', '6–9', '12–15', '4–8',
    'Dry, mild days, chilly nights; turquoise water returns to the Huasteca', 'Días secos y templados, noches frías; vuelve el agua turquesa a la Huasteca'],
  ['December', 'Diciembre', '21–23', '4–7', '7–8', '2–8',
    'Driest month; crisp, bright winter days', 'El mes más seco; días de invierno luminosos y frescos'],
];

// Ciudad Valles: SMN normals 1991–2020, station 24012 (87 m). [high, low, rain mm]
const VALLES_MONTHS = [
  ['25.1', '12.4', '23.6'], ['28.0', '14.0', '17.4'], ['31.3', '16.9', '32.1'],
  ['34.2', '19.6', '40.4'], ['36.0', '22.2', '95.8'], ['35.7', '23.0', '184.7'],
  ['34.2', '22.5', '235.4'], ['35.0', '22.5', '158.6'], ['32.9', '21.7', '243.6'],
  ['31.1', '19.3', '113.9'], ['28.2', '16.1', '41.4'], ['25.9', '13.4', '21.5'],
];

function cityTable(isEs) {
  const head = isEs
    ? ['Mes', 'Máx (°C)', 'Mín (°C)', 'Lluvia (mm)', 'Días de lluvia', 'En corto']
    : ['Month', 'High (°C)', 'Low (°C)', 'Rain (mm)', 'Rain days', 'In short'];
  const rows = CITY_MONTHS.map(
    ([en, es, hi, lo, mm, days, noteEn, noteEs]) => `<tr class="border-b border-gray-100">
      <td class="py-2 pr-3 font-semibold text-gray-900 whitespace-nowrap">${isEs ? es : en}</td>
      <td class="py-2 pr-3 text-center">${hi}</td><td class="py-2 pr-3 text-center">${lo}</td>
      <td class="py-2 pr-3 text-center">${mm}</td><td class="py-2 pr-3 text-center">${days}</td>
      <td class="py-2 text-gray-600">${isEs ? noteEs : noteEn}</td></tr>`
  ).join('\n');
  return `<div class="overflow-x-auto mb-4"><table class="w-full text-sm text-gray-700">
    <thead><tr class="border-b-2 border-orange-300 text-left">${head.map((h, i) => `<th class="py-2 pr-3 font-bold text-gray-900 ${i > 0 && i < 5 ? 'text-center' : ''}">${h}</th>`).join('')}</tr></thead>
    <tbody>${rows}</tbody></table></div>`;
}

function vallesTable(isEs) {
  const monthNames = CITY_MONTHS.map(([en, es]) => (isEs ? es : en));
  const head = isEs ? ['Mes', 'Máx (°C)', 'Mín (°C)', 'Lluvia (mm)'] : ['Month', 'High (°C)', 'Low (°C)', 'Rain (mm)'];
  const rows = VALLES_MONTHS.map(
    ([hi, lo, mm], i) => `<tr class="border-b border-gray-100"><td class="py-2 pr-3 font-semibold text-gray-900 whitespace-nowrap">${monthNames[i]}</td>
      <td class="py-2 pr-3 text-center">${hi}</td><td class="py-2 pr-3 text-center">${lo}</td><td class="py-2 text-center">${mm}</td></tr>`
  ).join('\n');
  return `<div class="overflow-x-auto mb-4"><table class="w-full text-sm text-gray-700">
    <thead><tr class="border-b-2 border-emerald-300 text-left">${head.map((h, i) => `<th class="py-2 pr-3 font-bold text-gray-900 ${i > 0 ? 'text-center' : ''}">${h}</th>`).join('')}</tr></thead>
    <tbody>${rows}</tbody></table></div>`;
}

const faqEN = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is the best time to visit San Luis Potosí?', acceptedAnswer: { '@type': 'Answer', text: 'For the city, October to April: the dry, clear season, with mild sunny days (21–30°C highs) and almost no rain. For turquoise water in the Huasteca Potosina, November to March is the sweet spot — rivers have cleared after the rains but have not yet hit the late-dry-season lows that have left Tamul waterfall nearly dry in April–May (documented in 2024 and again in 2026). For FENAPO, the state fair (August 7–30, 2026), come in August and expect warm days with evening showers.' } },
    { '@type': 'Question', name: 'When is the rainy season in San Luis Potosí?', acceptedAnswer: { '@type': 'Answer', text: 'In the city, roughly late May through early October, with June–September concentrating most of the ~386–404 mm annual total and September the wettest month (75–82 mm). The Huasteca lowland gets about three times more rain: Ciudad Valles records 1,208 mm a year, with 235 mm in July and 244 mm in September alone (SMN climate normals 1991–2020).' } },
    { '@type': 'Question', name: 'How cold does San Luis Potosí get in winter?', acceptedAnswer: { '@type': 'Answer', text: 'The city sits at roughly 1,860 m, so winter is about cold nights, not cold days: December–January afternoons still reach 21–23°C, but overnight lows average 4–7°C, and SMN station records show sub-zero minima in every month from October through March. Pack real layers for mornings and evenings.' } },
    { '@type': 'Question', name: 'Is the weather in the Huasteca Potosina the same as in the city?', acceptedAnswer: { '@type': 'Answer', text: 'No — they are two different climates in one state. The capital is semi-arid highland at ~1,860 m: ~400 mm of rain a year, dry air and cool nights year-round. Ciudad Valles, the Huasteca hub, sits at 87 m: hot and humid, 36°C average May highs, 1,208 mm of annual rain, and nights that rarely cool below 22°C in summer. Check both forecasts if your trip covers both.' } },
    { '@type': 'Question', name: 'What is the weather like during FENAPO in August?', acceptedAnswer: { '@type': 'Answer', text: 'Warm and manageable: August in the city averages 26–28°C highs and 12–14°C lows, with around 10 rain days in the month (48–55 mm total) — typically brief evening showers. Bring a light rain layer and something warm for late-night palenque exits; at this altitude the temperature drops fast after sunset.' } },
  ],
};

const faqES = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: '¿Cuál es la mejor época para visitar San Luis Potosí?', acceptedAnswer: { '@type': 'Answer', text: 'Para la ciudad, de octubre a abril: la temporada seca y despejada, con días soleados y templados (máximas de 21–30°C) y casi nada de lluvia. Para agua turquesa en la Huasteca Potosina, el punto ideal es de noviembre a marzo — los ríos ya se aclararon tras las lluvias pero aún no llegan a los niveles mínimos del final del estiaje, que dejaron a la cascada de Tamul casi seca en abril–mayo (documentado en 2024 y de nuevo en 2026). Para la FENAPO (del 7 al 30 de agosto de 2026), ven en agosto y espera días cálidos con chubascos vespertinos.' } },
    { '@type': 'Question', name: '¿Cuándo es la temporada de lluvias en San Luis Potosí?', acceptedAnswer: { '@type': 'Answer', text: 'En la capital, aproximadamente de finales de mayo a principios de octubre; junio–septiembre concentra la mayor parte de los ~386–404 mm anuales y septiembre es el mes más lluvioso (75–82 mm). La Huasteca recibe unas tres veces más: Ciudad Valles registra 1,208 mm al año, con 235 mm tan solo en julio y 244 mm en septiembre (normales climatológicas del SMN 1991–2020).' } },
    { '@type': 'Question', name: '¿Qué tanto frío hace en invierno en San Luis Potosí?', acceptedAnswer: { '@type': 'Answer', text: 'La ciudad está a unos 1,860 m, así que el invierno es de noches frías, no de días fríos: las tardes de diciembre–enero siguen llegando a 21–23°C, pero las mínimas promedian 4–7°C, y los registros de las estaciones del SMN muestran mínimas bajo cero en todos los meses de octubre a marzo. Trae capas de verdad para mañanas y noches.' } },
    { '@type': 'Question', name: '¿El clima de la Huasteca Potosina es igual al de la capital?', acceptedAnswer: { '@type': 'Answer', text: 'No — son dos climas distintos en un mismo estado. La capital es altiplano semiárido a ~1,860 m: ~400 mm de lluvia al año, aire seco y noches frescas todo el año. Ciudad Valles, el hub huasteco, está a 87 m: calor húmedo, máximas promedio de 36°C en mayo, 1,208 mm de lluvia anual y noches que en verano rara vez bajan de 22°C. Si tu viaje cubre ambos, revisa los dos pronósticos.' } },
    { '@type': 'Question', name: '¿Cómo es el clima durante la FENAPO en agosto?', acceptedAnswer: { '@type': 'Answer', text: 'Cálido y manejable: agosto en la capital promedia máximas de 26–28°C y mínimas de 12–14°C, con unos 10 días de lluvia en el mes (48–55 mm en total) — normalmente chubascos vespertinos breves. Lleva impermeable ligero y algo abrigador para la salida del palenque de madrugada; a esta altitud la temperatura cae rápido al meterse el sol.' } },
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
    "<strong>San Luis Potosí's weather secret is altitude:</strong> at roughly 1,860 m, the capital gets 300+ days of high-desert sun, mild afternoons in every month and nights that always cool down. Here is the month-by-month climate table (SMN 1991–2020 normals), the best time to visit for each kind of trip — and the crucial catch: the Huasteca Potosina, three hours east, runs on a completely different climate.",
    '<strong>El secreto del clima de San Luis Potosí es la altitud:</strong> a unos 1,860 m, la capital tiene sol de altiplano casi todo el año, tardes templadas en cualquier mes y noches que siempre refrescan. Aquí está la tabla de clima mes a mes (normales del SMN 1991–2020), la mejor época para visitar según tu tipo de viaje — y el detalle crucial: la Huasteca Potosina, a tres horas al oriente, funciona con un clima completamente distinto.'
  )}
</p>

<div class="speakable bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-200 rounded-2xl p-6 md:p-8 mb-10">
  <p class="text-base md:text-lg text-gray-800 leading-relaxed">
    ${t(
      '<strong>Short answer:</strong> visit the city October–April (dry, clear, 21–30°C days); do the Huasteca waterfalls November–March (turquoise water, before the late-dry-season lows); expect the hottest sun in May, the heaviest rain in September, and near-freezing dawns December–February.',
      '<strong>Respuesta corta:</strong> visita la ciudad de octubre a abril (seco, despejado, días de 21–30°C); haz las cascadas de la Huasteca de noviembre a marzo (agua turquesa, antes de los niveles mínimos del estiaje); espera el sol más fuerte en mayo, la lluvia más intensa en septiembre y madrugadas casi heladas de diciembre a febrero.'
    )}
  </p>
</div>

<section id="month-by-month" class="mb-12 scroll-mt-8">
<div class="not-prose mb-4">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-2 border-b-4 border-orange-500 pb-3 inline-block">${t('San Luis Potosí city, month by month', 'La capital, mes a mes')}</h2>
</div>
<p class="text-sm text-gray-600 mb-4">${t(
    'SMN/CONAGUA climate normals 1991–2020. City figures are shown as ranges across the two SLP city stations (24069 and 24111, ~1,870 m); rain days = days with measurable rain.',
    'Normales climatológicas SMN/CONAGUA 1991–2020. Las cifras de la ciudad se muestran como rangos entre las dos estaciones urbanas (24069 y 24111, ~1,870 m); días de lluvia = días con lluvia apreciable.'
  )}</p>
${cityTable(isEs)}
<p class="text-sm text-gray-600">${t(
    'Annual totals: 386–404 mm of rain over 81–95 rain days. Per WeatherSpark, the clearer part of the year starts around late October and lasts about 7.7 months, May is the sunniest month, September the most overcast — and muggy humidity is essentially zero year-round at this altitude.',
    'Totales anuales: 386–404 mm de lluvia en 81–95 días con lluvia. Según WeatherSpark, la parte más despejada del año empieza a finales de octubre y dura unos 7.7 meses; mayo es el mes más soleado, septiembre el más nublado — y el bochorno es prácticamente nulo todo el año a esta altitud.'
  )}</p>
</section>

<div class="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 md:p-8 mb-12">
  <h2 class="text-2xl font-bold text-blue-900 mb-3">${t('The altitude effect: pack for two seasons every day', 'El efecto de la altitud: empaca para dos estaciones cada día')}</h2>
  <p class="text-gray-800 leading-relaxed">${t(
    "The city's semi-arid highland climate means a 15–17°C swing between afternoon and dawn is normal. A 22°C sunny January afternoon can follow a 4°C morning — and SMN station records show sub-zero minima in every month from October through March (down to −8°C in January and −8.5°C in December at station 24111). Whatever the month: sunscreen for midday, a real layer for after dark.",
    'El clima semiárido de altiplano significa que una oscilación de 15–17°C entre la tarde y la madrugada es lo normal. Una tarde soleada de enero a 22°C puede venir después de una mañana de 4°C — y los registros de las estaciones del SMN muestran mínimas bajo cero en todos los meses de octubre a marzo (hasta −8°C en enero y −8.5°C en diciembre en la estación 24111). Sea el mes que sea: bloqueador al mediodía y una capa de verdad al caer la noche.'
  )}</p>
</div>

<section id="city-vs-huasteca" class="mb-12 scroll-mt-8">
<div class="not-prose mb-4">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-2 border-b-4 border-emerald-500 pb-3 inline-block">${t('One state, two climates: the city vs the Huasteca', 'Un estado, dos climas: la capital vs la Huasteca')}</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">${t(
    "This is the mistake that ruins packing lists: checking the capital's forecast for a Huasteca trip. Ciudad Valles — the waterfall hub, 87 m above sea level — is hot, humid lowland. It gets <strong>three times the rain</strong> of the capital (1,208 mm vs ~400 mm a year), average May highs of 36°C with recorded extremes near 48°C, and summer nights that stay above 22°C. Meanwhile the capital never averages above 31°C in any month and always cools down at night.",
    'Este es el error que arruina maletas: revisar el pronóstico de la capital para un viaje a la Huasteca. Ciudad Valles — el hub de las cascadas, a 87 m sobre el nivel del mar — es tierra baja caliente y húmeda. Recibe <strong>el triple de lluvia</strong> que la capital (1,208 mm vs ~400 mm al año), máximas promedio de 36°C en mayo con extremos registrados cercanos a 48°C, y noches de verano que no bajan de 22°C. La capital, en cambio, no promedia arriba de 31°C en ningún mes y siempre refresca de noche.'
  )}</p>
<h3 class="font-bold text-xl text-gray-900 mb-2">${t('Ciudad Valles (Huasteca), month by month', 'Ciudad Valles (Huasteca), mes a mes')}</h3>
<p class="text-sm text-gray-600 mb-3">${t('SMN/CONAGUA normals 1991–2020, station 24012 (87 m).', 'Normales SMN/CONAGUA 1991–2020, estación 24012 (87 m).')}</p>
${vallesTable(isEs)}
<p class="text-gray-800 leading-relaxed">${t(
    'Practical translation: June–October the Huasteca rivers run high and brown with sediment; roughly November through April they turn the famous turquoise. Full logistics in our <a href="/blog/huasteca-potosina-itinerary-2026" class="text-emerald-700 underline font-semibold">3/5/7-day Huasteca itinerary</a>.',
    'Traducción práctica: de junio a octubre los ríos huastecos van altos y cafés por el sedimento; de noviembre a abril, aproximadamente, se ponen del famoso turquesa. Toda la logística en nuestro <a href="/blog/huasteca-potosina-itinerary-2026" class="text-emerald-700 underline font-semibold">itinerario de 3/5/7 días por la Huasteca</a>.'
  )}</p>
</section>

<section id="best-time" class="mb-12 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-2 border-b-4 border-orange-500 pb-3 inline-block">${t('Best time to visit, by type of trip', 'La mejor época, según tu tipo de viaje')}</h2>
</div>
<div class="space-y-6">

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <div class="flex items-center justify-between flex-wrap gap-2 mb-2">
      <h3 class="font-bold text-xl text-gray-900">${t('City sightseeing & food', 'Ciudad: centro histórico y comida')}</h3>
      <span class="text-xs font-semibold bg-orange-100 text-orange-800 rounded-full px-3 py-1">${t('Oct–Apr', 'Oct–Abr')}</span>
    </div>
    <p class="text-sm text-gray-700 leading-relaxed">${t(
      'The dry season is the city at its best: near-daily sun, 21–27°C afternoons for walking the centro histórico, and only 2–8 rain days a month. November–February needs layers for cold nights; March–April adds real warmth without the rains. May works too if you like it hot (29–31°C) — it is the sunniest month, with storms only arriving at the very end. Ideas for the visit: our <a href="/visit-san-luis-potosi" class="text-orange-700 underline font-semibold">visitor guide</a> and the <a href="/blog/day-trips-from-san-luis-potosi-2026" class="text-orange-700 underline font-semibold">7 verified day trips</a>.',
      'La temporada seca es la ciudad en su mejor versión: sol casi diario, tardes de 21–27°C para caminar el centro histórico y solo 2–8 días de lluvia al mes. Noviembre–febrero pide capas para las noches frías; marzo–abril suma calor de verdad sin lluvias. Mayo también funciona si te gusta el calor (29–31°C) — es el mes más soleado, con tormentas solo al final. Ideas para la visita: nuestra <a href="/visit-san-luis-potosi" class="text-orange-700 underline font-semibold">guía para visitantes</a> y las <a href="/blog/day-trips-from-san-luis-potosi-2026" class="text-orange-700 underline font-semibold">7 escapadas de un día verificadas</a>.'
    )}</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <div class="flex items-center justify-between flex-wrap gap-2 mb-2">
      <h3 class="font-bold text-xl text-gray-900">${t('Huasteca waterfalls', 'Cascadas de la Huasteca')}</h3>
      <span class="text-xs font-semibold bg-emerald-100 text-emerald-800 rounded-full px-3 py-1">${t('Nov–Mar', 'Nov–Mar')}</span>
    </div>
    <p class="text-sm text-gray-700 leading-relaxed">${t(
      "November to March is the sweet spot: turquoise water, rafting season on the Tampaón, bearable lowland heat. Two honest caveats. First, June–October the rivers run high and sediment-brown — spectacular volume, no postcard color, and some activities pause. Second, the late dry season is now a real risk: Tamul waterfall was reported nearly dry in early 2024 and again in April–May 2026 (upstream irrigation extraction plus heat, per La Jornada), so April–May visitors should temper waterfall expectations. Plan it properly with the <a href='/blog/huasteca-potosina-itinerary-2026' class='text-emerald-700 underline font-semibold'>Huasteca itinerary</a>.",
      'De noviembre a marzo es el punto ideal: agua turquesa, temporada de rafting en el Tampaón, calor de tierra baja soportable. Dos advertencias honestas. Primera: de junio a octubre los ríos van altos y cafés por el sedimento — caudal espectacular, cero color de postal, y algunas actividades se pausan. Segunda: el final del estiaje ya es un riesgo real — la cascada de Tamul se reportó casi seca a inicios de 2024 y otra vez en abril–mayo de 2026 (extracción para riego aguas arriba más calor, según La Jornada), así que si vas en abril–mayo modera tus expectativas de cascadas. Planéalo bien con el <a href="/blog/huasteca-potosina-itinerary-2026" class="text-emerald-700 underline font-semibold">itinerario de la Huasteca</a>.'
    )}</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <div class="flex items-center justify-between flex-wrap gap-2 mb-2">
      <h3 class="font-bold text-xl text-gray-900">${t('FENAPO (the state fair)', 'FENAPO (la feria)')}</h3>
      <span class="text-xs font-semibold bg-amber-100 text-amber-800 rounded-full px-3 py-1">${t('August', 'Agosto')}</span>
    </div>
    <p class="text-sm text-gray-700 leading-relaxed">${t(
      'FENAPO 2026 runs August 7–30. August is mid-rainy-season but kind: 26–28°C days, 12–14°C nights and ~10 rain days in the month, usually short evening showers rather than washouts. Fair strategy: light rain layer for the evening, something warm for the post-palenque walk to the car — at 1,860 m the night air bites even in summer. Lineup, tickets and logistics: <a href="/events/fenapo-2026" class="text-amber-700 underline font-semibold">our FENAPO 2026 hub</a>.',
      'Agosto es plena temporada de lluvias pero amable: días de 26–28°C, noches de 12–14°C y ~10 días con lluvia en el mes, normalmente chubascos vespertinos cortos y no aguaceros de día entero. Estrategia ferial: impermeable ligero para la noche y algo abrigador para la caminata post-palenque al coche — a 1,860 m el aire nocturno muerde hasta en verano. Cartel, boletos y logística: <a href="/events/fenapo-2026" class="text-amber-700 underline font-semibold">nuestro hub FENAPO 2026</a>.'
    )}</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <div class="flex items-center justify-between flex-wrap gap-2 mb-2">
      <h3 class="font-bold text-xl text-gray-900">${t('Xantolo (Day of the Dead in the Huasteca)', 'Xantolo (Día de Muertos huasteco)')}</h3>
      <span class="text-xs font-semibold bg-purple-100 text-purple-800 rounded-full px-3 py-1">${t('Late Oct–early Nov', 'Fin de oct–inicios de nov')}</span>
    </div>
    <p class="text-sm text-gray-700 leading-relaxed">${t(
      'Xantolo weather is transition weather: in Ciudad Valles, October still averages 31°C highs with 114 mm of rain, while November drops to 28°C and 41 mm — so the celebration usually lands right as the rains switch off and before the turquoise water fully returns. Warm days, mild nights (16–19°C), and a real chance of a shower in the last October days. If you base in the capital those same nights run 6–12°C — pack for both.',
      'El clima de Xantolo es clima de transición: en Ciudad Valles, octubre todavía promedia máximas de 31°C con 114 mm de lluvia, mientras que noviembre baja a 28°C y 41 mm — así que la celebración suele caer justo cuando se apagan las lluvias y antes de que regrese del todo el agua turquesa. Días cálidos, noches templadas (16–19°C) y posibilidad real de chubasco en los últimos días de octubre. Si tu base es la capital, esas mismas noches son de 6–12°C — empaca para ambos.'
    )}</p>
  </div>

</div>
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
    'Temperature, rainfall and rain-day figures: SMN/CONAGUA climate normals 1991–2020 for stations <a href="https://smn.conagua.gob.mx/tools/RESOURCES/Normales_Climatologicas/Normales9120/slp/nor9120_24069.txt" class="underline" rel="nofollow">24069 San Luis Potosí (DGE)</a>, <a href="https://smn.conagua.gob.mx/tools/RESOURCES/Normales_Climatologicas/Normales9120/slp/nor9120_24111.txt" class="underline" rel="nofollow">24111 San Luis Potosí (SMN)</a> and <a href="https://smn.conagua.gob.mx/tools/RESOURCES/Normales_Climatologicas/Normales9120/slp/nor9120_24012.txt" class="underline" rel="nofollow">24012 Ciudad Valles</a>, retrieved July 2026; city values are shown as ranges across the two urban stations. Sunshine/cloud-cover seasonality: <a href="https://weatherspark.com/y/5131/Average-Weather-in-San-Luis-Potos%C3%AD-Mexico-Year-Round" class="underline" rel="nofollow">WeatherSpark</a> (modeled data). Turquoise-water vs sediment season: Huasteca-Potosina.com and regional guides. Tamul low-water episodes: La Jornada (Feb 2024 and May 6, 2026) and Potosinoticias (Apr 27, 2026). Climate classification and altitude: Wikipedia (BSh semi-arid; 1,864 m) and SMN station metadata (1,870–1,903 m). Normals are 30-year averages — any given year can vary.',
    'Cifras de temperatura, lluvia y días de lluvia: normales climatológicas 1991–2020 del SMN/CONAGUA para las estaciones <a href="https://smn.conagua.gob.mx/tools/RESOURCES/Normales_Climatologicas/Normales9120/slp/nor9120_24069.txt" class="underline" rel="nofollow">24069 San Luis Potosí (DGE)</a>, <a href="https://smn.conagua.gob.mx/tools/RESOURCES/Normales_Climatologicas/Normales9120/slp/nor9120_24111.txt" class="underline" rel="nofollow">24111 San Luis Potosí (SMN)</a> y <a href="https://smn.conagua.gob.mx/tools/RESOURCES/Normales_Climatologicas/Normales9120/slp/nor9120_24012.txt" class="underline" rel="nofollow">24012 Ciudad Valles</a>, consultadas en julio de 2026; los valores de la ciudad se muestran como rangos entre las dos estaciones urbanas. Estacionalidad de sol/nubosidad: <a href="https://weatherspark.com/y/5131/Average-Weather-in-San-Luis-Potos%C3%AD-Mexico-Year-Round" class="underline" rel="nofollow">WeatherSpark</a> (datos modelados). Temporada turquesa vs sedimento: Huasteca-Potosina.com y guías regionales. Episodios de bajo caudal en Tamul: La Jornada (feb 2024 y 6 de mayo de 2026) y Potosinoticias (27 de abril de 2026). Clasificación climática y altitud: Wikipedia (semiárido BSh; 1,864 m) y metadatos de estaciones del SMN (1,870–1,903 m). Las normales son promedios de 30 años — cualquier año puede variar.'
  )}</p>
</section>

<div class="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-8 text-center">
  <p class="text-white text-lg font-bold mb-2">${t('Picked your month? Now pick your plans.', '¿Ya elegiste tu mes? Ahora elige tus planes.')}</p>
  <p class="text-orange-100 text-sm mb-4">${t('See <a href="/events/this-week" class="underline font-semibold text-white">what\'s on this week</a> — or get the weekly agenda free.', 'Mira <a href="/events/this-week" class="underline font-semibold text-white">qué hay esta semana</a> — o recibe la agenda semanal gratis.')}</p>
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
  image_url: '/images/parque-tangamanga/lake.jpg',
  category: 'Travel',
  tags: ['weather', 'climate', 'best-time-to-visit', 'san-luis-potosi', 'huasteca-potosina', 'fenapo', 'xantolo', 'travel-planning', '2026'],

  title: 'Weather in San Luis Potosí: Month-by-Month Guide + Best Time to Visit (2026)',
  excerpt: 'The full climate table (SMN 1991–2020 normals), the altitude effect that makes every night cool, and the best months for the city, the Huasteca waterfalls, FENAPO and Xantolo — including why the capital and the Huasteca are two different climates.',
  content: buildContent(false),
  meta_title: 'San Luis Potosí Weather by Month & Best Time to Visit (2026)',
  meta_description: 'Month-by-month San Luis Potosí weather from official SMN climate normals: rainy season, coldest nights, sunniest months, and the best time for the city, Huasteca waterfalls and FENAPO.',

  title_es: 'Clima en San Luis Potosí mes a mes y la mejor época para visitar (2026)',
  excerpt_es: 'La tabla completa de clima (normales SMN 1991–2020), el efecto de la altitud que refresca todas las noches, y los mejores meses para la ciudad, las cascadas de la Huasteca, la FENAPO y Xantolo — incluyendo por qué la capital y la Huasteca son dos climas distintos.',
  content_es: buildContent(true),
  meta_title_es: 'Clima en San Luis Potosí mes a mes | Mejor época para visitar 2026',
  meta_description_es: 'El clima de San Luis Potosí mes a mes con normales oficiales del SMN: temporada de lluvias, noches frías, meses más soleados y la mejor época para la ciudad, la Huasteca y la FENAPO.',

  title_de: 'Wetter in San Luis Potosí: Monat für Monat + beste Reisezeit (2026)',
  excerpt_de: 'Die komplette Klimatabelle (offizielle SMN-Normalwerte 1991–2020), der Höheneffekt mit kühlen Nächten und die besten Monate für die Stadt, die Huasteca-Wasserfälle, FENAPO und Xantolo.',
  content_de: buildContent(false),
  meta_title_de: 'San Luis Potosí Wetter & beste Reisezeit 2026',
  meta_description_de: 'San Luis Potosí Wetter Monat für Monat nach offiziellen SMN-Klimanormalwerten: Regenzeit, kalte Nächte, sonnigste Monate und die beste Reisezeit für Stadt und Huasteca.',

  title_ja: 'サン・ルイス・ポトシの気候：月別ガイドとベストシーズン（2026年）',
  excerpt_ja: '公式SMN平年値（1991–2020年）による月別気候表、毎晩涼しくなる高地効果、市内観光・ワステカの滝・FENAPO・シャントロそれぞれのベストシーズンを解説。',
  content_ja: buildContent(false),
  meta_title_ja: 'サン・ルイス・ポトシの気候・ベストシーズン 2026',
  meta_description_ja: '公式SMN平年値で見るサン・ルイス・ポトシの月別気候：雨季、冷え込む夜、晴天の多い月、市内とワステカ・ポトシーナそれぞれのベストシーズン。',
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
