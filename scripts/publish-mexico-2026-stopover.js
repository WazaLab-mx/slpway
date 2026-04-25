require('dotenv').config({ path: '.env' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const SLUG = 'mexico-2026-stopover-san-luis-potosi';

// Heroes & inline images already in /public/images
const HERO = '/images/centro-historico/san-luis-potosi-cathedral.jpg';
const IMG_TEATRO = '/images/centro-historico/teatro-de-la-paz.jpg';
const IMG_HUASTECA = '/images/outdoors/huasteca-jungle.jpg';
const IMG_TANGAMANGA = '/images/parque-tangamanga/banner.jpg';
const IMG_FOOD = '/images/food/enchiladas-potosinas.jpg';

// AD-COPY DISCIPLINE: throughout this post we use "Mexico 2026", "the
// 2026 tournament", "host cities", "summer 2026" — never FIFA, World Cup,
// or Mundial in commercial / ad-bound copy. Editorial body can mention
// "FIFA World Cup 2026" once for keyword relevance, but ad creatives must
// stick to the safe phrases (per Google trademark policy).

const faqJsonLd = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why is San Luis Potosí a good stopover during Mexico 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "San Luis Potosí (SLP) sits roughly halfway between all three Mexican host cities — about 4h 30m from Mexico City, 4h from Guadalajara, and 5h 40m from Monterrey by car. With hotel rates in the host cities up 173% to 333% during the tournament window (and over 2,000% near Estadio Azteca for the opening match), basing yourself in SLP and traveling in for matches is one of the few realistic ways to keep lodging costs sane. Add UNESCO-listed Centro Histórico, direct flights from Texas via Volaris, American and United, and a culinary scene that punches well above its weight, and SLP becomes a credible base for a multi-city Mexico trip in summer 2026."
      }
    },
    {
      '@type': 'Question',
      name: 'How far is San Luis Potosí from Mexico City, Guadalajara, and Monterrey?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'By road on Mexico\'s Highway 57 / 80 / 90 system: SLP to Mexico City is ~402 km / 4h 30m via Hwy 57D (3 toll booths). SLP to Guadalajara is ~330 km / 4h. SLP to Monterrey is ~515 km / 5h 40m via Hwy 57 north. By bus, ETN runs daily service to all three at 5–7 hours each. By air, Aeroméxico flies SLP–Mexico City (MEX or NLU) ~5 times daily at 1h 20m flight time.'
      }
    },
    {
      '@type': 'Question',
      name: 'Are there direct flights from the United States to San Luis Potosí?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Volaris and American Airlines both fly nonstop SLP–Dallas/Fort Worth (DFW), about 2h 19m. United Airlines runs SLP–Houston (IAH) with around 14 weekly flights, ~2h 1m. These three routes give US-based fans a way to reach a Mexican host-city corridor without flying through Mexico City — and they are typically priced well below CDMX, GDL or MTY arrivals during the tournament window.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can I day-trip to a match in Mexico City from San Luis Potosí?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For most fans, no — and we recommend not trying. SLP–Mexico City is 4h 30m each way by car or 6–7h by bus, plus traffic on match day around Estadio Azteca. The realistic plan is: base yourself in SLP for 2–4 nights, then take a 1-night stay in Mexico City (or Guadalajara, or Monterrey) coinciding with your match. Aeroméxico\'s 1h 20m flight to MEX is the fastest commute when prices align.'
      }
    },
    {
      '@type': 'Question',
      name: 'What can I see in San Luis Potosí in 24 to 48 hours?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '24-hour itinerary: walk Centro Histórico (UNESCO Camino Real de Tierra Adentro), Plaza de Armas, the Catedral, Plaza de los Fundadores; then Templo del Carmen (18th-century baroque); brunch on Av. Carranza; afternoon at Parque Tangamanga I; sunset at Caja del Agua. With 48 hours add a half-day at Museo Federico Silva and a long day-trip to the Huasteca Potosina (turquoise rivers and waterfalls — leave at 6 AM, return after dark).'
      }
    },
    {
      '@type': 'Question',
      name: 'How bad are hotel prices in Mexico host cities during the 2026 tournament?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Severely inflated. Industry trackers reported average rate spikes of +173% in Mexico City, +333% in Guadalajara (sample property: $105 → $511/night), and +218% in Monterrey for the tournament window. Properties near Estadio Azteca for the June 11 opener saw quoted rates over 2,000% above baseline. Airbnb is running host-recruitment incentives (up to USD 750) Feb–Jul 2026 to expand inventory, which itself confirms the supply gap. Staying in a secondary city like SLP and traveling in for your match can keep your trip on budget.'
      }
    },
    {
      '@type': 'Question',
      name: 'What are the closest international airports to San Luis Potosí?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Aeropuerto Internacional Ponciano Arriaga (IATA: SLP) is the city\'s own airport, with direct US flights from DFW and IAH and domestic flights to Mexico City, Tijuana, Cancún and others. If SLP arrivals are sold out, Aeropuerto Internacional del Bajío (BJX, León) is ~172 km / 2h 12m by car, and Aeropuerto Intercontinental de Querétaro (QRO) is ~220 km / 2h 39m. Both have far more international capacity than SLP and rental cars one-way to SLP.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do people in San Luis Potosí speak English?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tourist-facing staff in hotels, the airport, restaurants on Av. Carranza, and major museums in Centro Histórico generally speak functional English. Bus terminals, Ubers, smaller eateries, and Centro shops mostly default to Spanish. Google Translate (offline Spanish pack downloaded in advance) handles edge cases. SLP is comfortable for first-time Mexico visitors with no Spanish, but will reward anyone who learns a dozen polite phrases.'
      }
    }
  ]
});

const faqJsonLdES = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Por qué San Luis Potosí es un buen punto de parada durante México 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'San Luis Potosí (SLP) está prácticamente a la mitad del camino entre las tres sedes mexicanas — alrededor de 4h 30m de la Ciudad de México, 4h de Guadalajara y 5h 40m de Monterrey en auto. Con tarifas hoteleras subiendo entre 173% y 333% en las sedes durante el torneo (y más de 2,000% cerca del Estadio Azteca para el partido inaugural), basarse en SLP y viajar a las sedes para los partidos es una de las pocas formas realistas de mantener el presupuesto de hospedaje bajo control. Súmale el Centro Histórico inscrito por la UNESCO, vuelos directos desde Texas vía Volaris, American y United, y una escena gastronómica que pega muy por encima de su peso, y SLP se vuelve una base creíble para un viaje multi-ciudad por México en el verano 2026.'
      }
    },
    {
      '@type': 'Question',
      name: '¿Qué tan lejos está San Luis Potosí de Ciudad de México, Guadalajara y Monterrey?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Por carretera en el sistema 57 / 80 / 90: SLP a Ciudad de México son ~402 km / 4h 30m por la 57D (3 casetas). SLP a Guadalajara son ~330 km / 4h. SLP a Monterrey son ~515 km / 5h 40m por la 57 norte. En autobús, ETN corre servicio diario a las tres en 5–7 horas. En avión, Aeroméxico vuela SLP–CDMX (MEX o NLU) unas 5 veces al día con 1h 20m de vuelo.'
      }
    },
    {
      '@type': 'Question',
      name: '¿Hay vuelos directos desde Estados Unidos a San Luis Potosí?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Volaris y American Airlines vuelan sin escalas SLP–Dallas/Fort Worth (DFW) en aproximadamente 2h 19m. United Airlines opera SLP–Houston (IAH) con cerca de 14 vuelos semanales y 2h 1m de duración. Estas tres rutas le dan a los aficionados con base en EUA una forma de llegar al corredor de sedes mexicanas sin pasar por la Ciudad de México — y suelen costar bastante menos que llegar directo a CDMX, GDL o MTY durante la ventana del torneo.'
      }
    },
    {
      '@type': 'Question',
      name: '¿Puedo ir y regresar el mismo día a un partido en CDMX desde SLP?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Para la mayoría de los aficionados, no — y no recomendamos intentarlo. SLP–CDMX son 4h 30m de ida en auto o 6–7h en autobús, más el tráfico día de partido alrededor del Estadio Azteca. El plan realista es: basarse en SLP por 2–4 noches y luego tomar 1 noche en CDMX (o Guadalajara, o Monterrey) que coincida con el partido. El vuelo de Aeroméxico de 1h 20m a MEX es el traslado más rápido cuando los precios cuadran.'
      }
    },
    {
      '@type': 'Question',
      name: '¿Qué se puede ver en San Luis Potosí en 24 a 48 horas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Itinerario de 24 horas: caminar el Centro Histórico (UNESCO Camino Real de Tierra Adentro), Plaza de Armas, la Catedral, Plaza de los Fundadores; luego Templo del Carmen (barroco del siglo XVIII); brunch en Av. Carranza; tarde en el Parque Tangamanga I; atardecer en la Caja del Agua. Con 48 horas suma medio día en el Museo Federico Silva y un día completo a la Huasteca Potosina (ríos turquesa y cascadas — sal a las 6 AM, regresa después de oscurecer).'
      }
    },
    {
      '@type': 'Question',
      name: '¿Qué tan caros están los hoteles en las sedes mexicanas durante el torneo 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Severamente inflados. Trackers de la industria reportaron incrementos promedio de +173% en CDMX, +333% en Guadalajara (propiedad de muestra: $105 → $511/noche) y +218% en Monterrey para la ventana del torneo. Propiedades cerca del Estadio Azteca para el inaugural del 11 de junio mostraron tarifas más de 2,000% arriba del baseline. Airbnb está corriendo incentivos a anfitriones (hasta USD 750) entre febrero y julio 2026 para ampliar inventario, lo que confirma el déficit de oferta. Hospedarte en una ciudad secundaria como SLP y viajar a tu partido puede mantener tu viaje dentro del presupuesto.'
      }
    },
    {
      '@type': 'Question',
      name: '¿Cuáles son los aeropuertos internacionales más cercanos a San Luis Potosí?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El Aeropuerto Internacional Ponciano Arriaga (IATA: SLP) es el aeropuerto propio de la ciudad, con vuelos directos desde DFW e IAH y vuelos domésticos a CDMX, Tijuana, Cancún y otros. Si los vuelos a SLP están agotados, el Aeropuerto Internacional del Bajío (BJX, León) está a ~172 km / 2h 12m en auto, y el Aeropuerto Intercontinental de Querétaro (QRO) a ~220 km / 2h 39m. Ambos tienen mucha más capacidad internacional que SLP y rentas de auto en una sola dirección hacia SLP.'
      }
    },
    {
      '@type': 'Question',
      name: '¿En San Luis Potosí se habla inglés?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El personal en hoteles, aeropuerto, restaurantes en Av. Carranza y los principales museos del Centro Histórico generalmente habla inglés funcional. Centrales de autobús, Ubers, fondas pequeñas y comercios del Centro hablan principalmente español. Google Translate (con el paquete offline de español descargado de antemano) cubre los casos extremos. SLP es cómoda para visitantes que llegan a México por primera vez sin español, pero recompensará a quien aprenda una docena de frases corteses.'
      }
    }
  ]
});

const contentEN = `<div class="prose prose-lg max-w-none">

<div class="mb-8">
<img src="${HERO}" alt="San Luis Potosí Cathedral and Centro Histórico — UNESCO Camino Real de Tierra Adentro, the natural stopover city for visitors during Mexico 2026" class="w-full rounded-xl shadow-2xl" />
</div>

<div class="bg-gradient-to-r from-orange-50 to-yellow-50 border-2 border-orange-200 rounded-xl p-6 mb-8">
  <div class="text-xs font-bold uppercase tracking-wide text-orange-700 mb-2">⚽ Mexico 2026 — Stopover Guide</div>
  <p class="text-lg font-bold text-gray-900 mb-2">If you are visiting Mexico for the 2026 tournament, San Luis Potosí is the smartest place you have probably never heard of.</p>
  <p class="text-gray-700">Sits halfway between all three Mexican host cities. UNESCO Centro Histórico. Direct flights from Texas. Hotel rates a fraction of CDMX, GDL or MTY during the tournament window. This guide tells you exactly how to use SLP as your base — verified April 2026 with current distances, flights, and lodging-price data.</p>
</div>

<div class="bg-yellow-50 p-6 rounded-lg mb-8">
  <h3 class="text-xl font-bold mb-4 text-gray-900">Table of Contents</h3>
  <ul class="list-disc pl-6">
    <li><a href="#why-slp" class="text-blue-600 hover:text-blue-800">Why SLP is the Smart Stopover</a></li>
    <li><a href="#hotel-spike" class="text-blue-600 hover:text-blue-800">The Mexico 2026 Hotel Price Reality</a></li>
    <li><a href="#distances" class="text-blue-600 hover:text-blue-800">Distances to Each Host City</a></li>
    <li><a href="#how-to-get-here" class="text-blue-600 hover:text-blue-800">How to Get to San Luis Potosí</a></li>
    <li><a href="#itinerary" class="text-blue-600 hover:text-blue-800">24-Hour and 48-Hour Itineraries</a></li>
    <li><a href="#match-day" class="text-blue-600 hover:text-blue-800">How to Travel to Your Match Day</a></li>
    <li><a href="#where-to-stay" class="text-blue-600 hover:text-blue-800">Where to Stay in SLP</a></li>
    <li><a href="#food" class="text-blue-600 hover:text-blue-800">What to Eat in SLP</a></li>
    <li><a href="#practical" class="text-blue-600 hover:text-blue-800">Practical Tips for First-Time Visitors</a></li>
    <li><a href="#faq" class="text-blue-600 hover:text-blue-800">FAQ</a></li>
  </ul>
</div>

<div class="bg-blue-50 p-6 rounded-lg mb-8">
  <h3 class="text-xl font-bold mb-4 text-blue-900">Key Takeaways</h3>
  <ul class="list-disc pl-6 space-y-2 text-blue-900">
    <li><strong>SLP is roughly equidistant</strong> from Mexico's three host cities — 4h 30m to CDMX, 4h to GDL, 5h 40m to MTY by car.</li>
    <li><strong>Lodging in the host cities is up 173%–333%</strong> during the tournament window; SLP rates remain near baseline.</li>
    <li><strong>Direct flights from Texas:</strong> Volaris &amp; American (SLP–DFW), United (SLP–IAH).</li>
    <li><strong>Day-tripping to matches is unrealistic</strong> — base in SLP, then book single nights in the host city for your match.</li>
    <li><strong>What you actually do in SLP:</strong> UNESCO Centro Histórico walking tour, Tangamanga, Huasteca Potosina day trip, brunch on Carranza.</li>
    <li><strong>Bottom line:</strong> SLP gives you a real Mexican city experience while keeping your tournament budget honest.</li>
  </ul>
</div>

<section id="why-slp" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Why San Luis Potosí is the Smart Stopover for Mexico 2026</h2>

<p class="text-gray-700 mb-6"><strong>Mexico hosts 13 matches of the 2026 tournament across three cities — Mexico City (Estadio Azteca), Guadalajara (Estadio Akron), and Monterrey (BBVA Stadium) — between June 11 and July 19, 2026.</strong> The opening match is at Estadio Azteca on June 11. If you have tickets to more than one match across more than one city, you face a logistics problem: book and pay tournament-inflated rates in two or three host cities, or find a base that puts you within striking distance of all of them.</p>

<p class="text-gray-700 mb-6">San Luis Potosí — population ~1.31 million in the metropolitan area, 1,864 m altitude, 6h drive from the US border, UNESCO World Heritage Centro Histórico — is that base. It sits at the geographic center of north-central Mexico, on Highway 57 (the spine connecting Mexico City to the US border) and Highway 80 (which runs west to Guadalajara). The same fact that makes SLP the country's largest automotive cluster after Puebla — its position at the road and rail crossroads of central Mexico — is exactly what makes it useful as a tournament base.</p>

<p class="text-gray-700 mb-6">Three things compound that geographic accident into a real travel hack:</p>
<ol class="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
  <li><strong>SLP has its own international airport</strong> with direct US flights (Volaris &amp; American to DFW, United to IAH) — you do not need to clear immigration at the chaos of Mexico City's AICM during a global event.</li>
  <li><strong>SLP hotel rates are not inflated</strong> by tournament demand — the city is not a host, so a 4-star room runs $1,500–2,500 MXN ($85–145 USD) when CDMX equivalents are $300–800 USD.</li>
  <li><strong>SLP is a real destination on its own</strong> — UNESCO Centro Histórico, an internationally-recognized food scene, and the Huasteca Potosina day trip with turquoise rivers and waterfalls means the "stopover" days are not lost time.</li>
</ol>

<p class="text-gray-700 mb-6">For broader context on why expats and visitors are paying attention to SLP right now, see our <a href="/blog/ultimate-guide-living-san-luis-potosi-2026" class="text-blue-600 underline font-medium">Ultimate Guide to Living in San Luis Potosí</a> and <a href="/blog/san-luis-potosi-vs-san-miguel-allende-expats-2026" class="text-blue-600 underline font-medium">SLP vs San Miguel de Allende</a>.</p>
</section>

<section id="hotel-spike" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">The Mexico 2026 Hotel Price Reality</h2>

<p class="text-gray-700 mb-6">This is the part most US/European travelers underestimate. As of early 2026, hotel-rate trackers covering the Mexican host cities reported the following average increases for the tournament window relative to the same week in 2025:</p>

<div class="overflow-x-auto mb-8">
  <table class="min-w-full bg-white border-2 border-gray-200 rounded-lg shadow-lg">
    <thead style="background: linear-gradient(to right, #C75B39, #FFCB05);">
      <tr>
        <th class="px-4 py-3 text-left text-xs font-bold text-white uppercase">Host city</th>
        <th class="px-4 py-3 text-center text-xs font-bold text-white uppercase">Average rate increase</th>
        <th class="px-4 py-3 text-left text-xs font-bold text-white uppercase">Sample data point</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-200 text-sm">
      <tr><td class="px-4 py-3 font-semibold">Mexico City (Azteca area)</td><td class="px-4 py-3 text-center text-red-700 font-bold">+173% avg · up to +2,373%</td><td class="px-4 py-3">Properties near Estadio Azteca quoted &gt;2,000% above baseline for the June 11 opener</td></tr>
      <tr class="bg-gray-50"><td class="px-4 py-3 font-semibold">Guadalajara</td><td class="px-4 py-3 text-center text-red-700 font-bold">+333%</td><td class="px-4 py-3">Sample property: $105 → $511 USD/night</td></tr>
      <tr><td class="px-4 py-3 font-semibold">Monterrey</td><td class="px-4 py-3 text-center text-red-700 font-bold">+218%</td><td class="px-4 py-3">Average rate ~$361 USD/night during tournament window</td></tr>
      <tr class="bg-green-50"><td class="px-4 py-3 font-semibold">San Luis Potosí (reference)</td><td class="px-4 py-3 text-center text-green-700 font-bold">~baseline</td><td class="px-4 py-3">4-star: $85–145 USD/night, broadly unchanged</td></tr>
    </tbody>
  </table>
</div>

<p class="text-gray-700 mb-6">Airbnb is running a host-recruitment incentive of up to USD 750 between February and July 2026 specifically to expand inventory in Mexican host cities. The platform itself acknowledging a supply gap is the most honest signal about how tight lodging will be.</p>

<div class="bg-amber-50 border-l-4 border-amber-400 p-4 mb-6">
<p class="text-amber-900 text-sm"><strong>What this means for your budget:</strong> A 10-night Mexico trip with all nights in CDMX could realistically run $4,000–8,000 USD just on lodging. The same 10 nights based in SLP, with two single-night stays for your actual matches in CDMX or GDL, can come in at $1,200–2,200 USD on lodging — saving you $2,000–6,000 USD that you can put toward better seats, more matches, or a Huasteca Potosina day trip with a guide.</p>
</div>
</section>

<section id="distances" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Distances from San Luis Potosí to Each Host City</h2>

<p class="text-gray-700 mb-6">Verified April 2026 against Mexican federal road data and major bus operator schedules:</p>

<div class="overflow-x-auto mb-8">
  <table class="min-w-full bg-white border-2 border-gray-200 rounded-lg shadow-lg">
    <thead class="bg-gray-100">
      <tr>
        <th class="px-4 py-3 text-left text-xs font-bold text-gray-900 uppercase">Route</th>
        <th class="px-4 py-3 text-center text-xs font-bold text-gray-900 uppercase">Distance</th>
        <th class="px-4 py-3 text-center text-xs font-bold text-gray-900 uppercase">Drive</th>
        <th class="px-4 py-3 text-center text-xs font-bold text-gray-900 uppercase">Bus (ETN)</th>
        <th class="px-4 py-3 text-center text-xs font-bold text-gray-900 uppercase">Flight</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-200 text-sm">
      <tr><td class="px-4 py-3 font-semibold">SLP → Mexico City (Hwy 57D)</td><td class="px-4 py-3 text-center">402 km</td><td class="px-4 py-3 text-center">4h 30m</td><td class="px-4 py-3 text-center">6–7h</td><td class="px-4 py-3 text-center">1h 20m (Aeroméxico, ~5×/day)</td></tr>
      <tr class="bg-gray-50"><td class="px-4 py-3 font-semibold">SLP → Guadalajara (Hwy 80/90)</td><td class="px-4 py-3 text-center">330 km</td><td class="px-4 py-3 text-center">4h</td><td class="px-4 py-3 text-center">5–6h</td><td class="px-4 py-3 text-center">no nonstop</td></tr>
      <tr><td class="px-4 py-3 font-semibold">SLP → Monterrey (Hwy 57 N)</td><td class="px-4 py-3 text-center">515 km</td><td class="px-4 py-3 text-center">5h 40m</td><td class="px-4 py-3 text-center">6h</td><td class="px-4 py-3 text-center">no nonstop</td></tr>
    </tbody>
  </table>
</div>

<p class="text-gray-700 mb-6">CDMX is the only host city with a fast nonstop flight from SLP. For Guadalajara and Monterrey, your realistic options are car or ETN bus — both pleasant on Mexican toll roads, with comfortable executive-class buses (reclining seats, onboard wifi, snacks).</p>

<p class="text-gray-700 mb-6">If you are arranging a rental car, consider a one-way rental from BJX (León) or QRO (Querétaro) airports — both ~2h–2.5h from SLP and significantly more international flight capacity than SLP itself for arrival days when SLP is sold out.</p>
</section>

<section id="how-to-get-here" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">How to Get to San Luis Potosí</h2>

<h3 class="text-2xl font-bold mb-4 text-gray-900">Direct flights from the United States</h3>
<ul class="list-disc pl-6 mb-6 text-gray-700 space-y-2">
  <li><strong>Volaris SLP↔DFW (Dallas/Fort Worth):</strong> nonstop, ~2h 19m, fares from ~$81–126 USD one-way in non-peak weeks. Service launched July 2025 and remains active for 2026.</li>
  <li><strong>American Airlines SLP↔DFW:</strong> daily nonstop, codeshare-friendly with the AA network for connections from the East Coast.</li>
  <li><strong>United Airlines SLP↔IAH (Houston):</strong> ~14 weekly nonstops, ~2h 1m flight time. The fastest hop from the US for fans coming via Houston.</li>
</ul>

<h3 class="text-2xl font-bold mb-4 text-gray-900">Domestic flights to SLP</h3>
<p class="text-gray-700 mb-6">Aeroméxico runs SLP↔Mexico City (MEX) about 5 times daily (1h 20m), and also serves Aeropuerto Internacional Felipe Ángeles (NLU). Volaris connects SLP to Tijuana, Cancún, and a handful of other domestic markets.</p>

<h3 class="text-2xl font-bold mb-4 text-gray-900">Backup airports</h3>
<p class="text-gray-700 mb-6">If SLP arrivals are sold out for your dates, consider:</p>
<ul class="list-disc pl-6 mb-6 text-gray-700 space-y-2">
  <li><strong>Aeropuerto Internacional del Bajío (BJX, León):</strong> ~172 km / 2h 12m drive to SLP. Many more international carriers and frequencies, particularly to Texas and Chicago.</li>
  <li><strong>Aeropuerto Intercontinental de Querétaro (QRO):</strong> ~220 km / 2h 39m drive. Also far more international capacity.</li>
</ul>

<p class="text-gray-700 mb-6">Both BJX and QRO have major rental-car presence (Hertz, Enterprise, Sixt, Avis, Mex Rent A Car) with one-way drop-offs to SLP available.</p>

<h3 class="text-2xl font-bold mb-4 text-gray-900">Ground transport from inside Mexico</h3>
<ul class="list-disc pl-6 mb-6 text-gray-700 space-y-2">
  <li><strong>From CDMX:</strong> ETN executive bus from Terminal Norte, 6–7h, ~700 MXN one-way. Or drive Hwy 57D, 4h 30m, ~700 MXN in tolls each way.</li>
  <li><strong>From Guadalajara:</strong> ETN from Terminal Nueva, 5–6h, ~650 MXN. Drive 4h via Hwy 80/90.</li>
  <li><strong>From Monterrey:</strong> ETN, 6h. Drive 5h 40m via Hwy 57 north.</li>
</ul>
</section>

<section id="itinerary" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">What to Do in SLP — 24 and 48 Hour Itineraries</h2>

<div class="mb-8">
<img src="${IMG_TEATRO}" alt="Teatro de la Paz in San Luis Potosí Centro Histórico — UNESCO World Heritage" class="w-full rounded-xl shadow-lg" />
</div>

<h3 class="text-2xl font-bold mb-4 text-gray-900">The 24-Hour SLP Plan</h3>
<p class="text-gray-700 mb-4">If you only have one full day in SLP between matches, this is the route that gives you the most authentic city in the least time:</p>
<ol class="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
  <li><strong>9:00 AM</strong> — Breakfast on Av. Carranza. Try La Parroquia Potosina or Cuatro Almas. Both serve enchiladas potosinas (the city's signature dish) and excellent coffee.</li>
  <li><strong>10:30 AM</strong> — Walking tour of Centro Histórico: Plaza de Armas, Catedral, Plaza de los Fundadores, Caja del Agua. The whole loop is 2 hours at a leisurely pace.</li>
  <li><strong>1:00 PM</strong> — Templo del Carmen (the city's most photographed baroque masterpiece, 18th century).</li>
  <li><strong>2:00 PM</strong> — Lunch at Mercado República — try gorditas, the local breakfast institution, or sit-down at Tres60 Bistro.</li>
  <li><strong>4:00 PM</strong> — Museo Federico Silva (sculpture museum, 1 hour) or Museo Laberinto if you have kids (interactive science, $50 MXN).</li>
  <li><strong>6:00 PM</strong> — Sunset stroll at Parque Tangamanga I (411 hectares of urban park, free).</li>
  <li><strong>8:00 PM</strong> — Dinner. La Posta del Carmen, La Oruga y la Cebada, or Italian at Antica Trattoria.</li>
</ol>

<h3 class="text-2xl font-bold mb-4 text-gray-900">The 48-Hour Plan</h3>
<p class="text-gray-700 mb-6">Add Day 2 to the above:</p>
<ol class="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
  <li><strong>6:00 AM</strong> — Departure for the <strong>Huasteca Potosina</strong> day trip with a registered guide. The 4-hour drive east takes you to turquoise rivers (Tamul, Tampaón), waterfalls (Cascada de Tamul, Minas Viejas), and rappel sites. Expect a long but unforgettable day — return to SLP after dark.</li>
  <li><strong>Alternative for non-adventurers:</strong> half-day at the Real de Catorce ghost-town Pueblo Mágico (~3h drive each way), a former silver mining town in the high desert.</li>
</ol>

<p class="text-gray-700 mb-6">For deeper guides, see our <a href="/parque-tangamanga" class="text-blue-600 underline font-medium">Parque Tangamanga complete guide</a>, <a href="/blog/best-brunch-spots-san-luis-potosi" class="text-blue-600 underline font-medium">best brunch spots</a> and <a href="/blog/best-parks-for-kids-san-luis-potosi" class="text-blue-600 underline font-medium">best parks for kids</a>.</p>
</section>

<section id="match-day" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">How to Travel from SLP to Your Match</h2>

<p class="text-gray-700 mb-6"><strong>Do not try to day-trip a match.</strong> SLP–CDMX is 4h 30m each way by road or 6–7h by bus, and that is before factoring in match-day traffic around Estadio Azteca (which closes the surrounding zone hours before kickoff). The realistic plan:</p>

<ol class="list-decimal pl-6 mb-6 text-gray-700 space-y-3">
  <li><strong>Match in Mexico City:</strong> book one night at a hotel near Coyoacán or the South Station Metro line — these are the closest reasonable lodgings to Azteca. Take the Aeroméxico flight from SLP the morning of the match (1h 20m), Uber to your hotel, drop bags, eat, then take Metro Línea 2 to Tasqueña and the Tren Ligero to Estadio Azteca. Return to SLP next day on the afternoon Aeroméxico flight.</li>
  <li><strong>Match in Guadalajara:</strong> drive yourself (4h, scenic) or ETN bus (5–6h). One night near Estadio Akron in Zapopan, then back to SLP the next morning.</li>
  <li><strong>Match in Monterrey:</strong> ETN bus (6h) is the realistic option since there is no nonstop flight. Stay near the BBVA Stadium in Guadalupe, return to SLP the next day.</li>
</ol>

<div class="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
<p class="text-blue-900 text-sm"><strong>Tip:</strong> Book the single-night host-city stays as far in advance as you can, and use Booking.com or Hotels.com filters for "free cancellation" — letting you adjust if your match assignments change due to tournament progression.</p>
</div>
</section>

<section id="where-to-stay" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Where to Stay in San Luis Potosí</h2>

<p class="text-gray-700 mb-6">Three neighborhoods cover almost every traveler use case:</p>

<ul class="list-disc pl-6 mb-6 text-gray-700 space-y-3">
  <li><strong>Centro Histórico</strong> — Boutique hotels in 18th-century mansions. Walking distance to Plaza de Armas, Catedral, all the major restaurants. Examples: Hotel Museo Palacio de San Agustín, Hotel Real Plaza, Hotel Panorama. $90–250 USD/night.</li>
  <li><strong>Lomas / Chapultepec</strong> — Modern business-district hotels with parking and gym. Closer to Tangamanga. Examples: Hyatt Regency San Luis Potosí (Av. Real de Lomas 290), Hilton San Luis Potosí, Holiday Inn Lomas. $90–180 USD/night.</li>
  <li><strong>Airport zone</strong> — Quick in-and-out if you have early Aeroméxico to CDMX. Hampton Inn by Hilton SLP. $65–110 USD/night.</li>
</ul>

<p class="text-gray-700 mb-6"><strong>Airbnb tip:</strong> SLP has an active Airbnb market in Lomas, Centro, and Tangamanga-adjacent neighborhoods. For 4–5 night stays a 1BR apartment runs $40–80 USD/night and gives you a kitchen — useful for travelers managing tournament-week budgets.</p>
</section>

<section id="food" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">What to Eat in San Luis Potosí</h2>

<div class="mb-8">
<img src="${IMG_FOOD}" alt="Enchiladas potosinas — the signature dish of San Luis Potosí" class="w-full rounded-xl shadow-lg" />
</div>

<p class="text-gray-700 mb-6">SLP punches well above its weight as a food city. The local patrimony includes <strong>enchiladas potosinas</strong> (red-corn-masa enchiladas filled with cheese, the city's signature plate), <strong>gorditas de Morales</strong> (thick corn-masa pockets stuffed with stews — the original Potosino weekend brunch, found in the Morales / Loma de los Filtros corridor), <strong>cecina</strong> (cured beef), and <strong>asado de boda</strong> (the state's wedding stew).</p>

<p class="text-gray-700 mb-6">For a complete brunch and breakfast roster, see our <a href="/blog/best-brunch-spots-san-luis-potosi" class="text-blue-600 underline font-medium">best brunch spots in SLP</a> guide. Quick picks during your stopover:</p>
<ul class="list-disc pl-6 mb-6 text-gray-700 space-y-2">
  <li><strong>La Parroquia Potosina (Av. Carranza 300)</strong> — institution since 1975, enchiladas potosinas at their best.</li>
  <li><strong>Cuatro Almas (Lomas)</strong> — modern brunch with eggs benedict and chipotle chilaquiles.</li>
  <li><strong>Mercado República</strong> — market stalls for an authentic gordita lunch.</li>
  <li><strong>Calle de las Gorditas de Morales</strong> (Camino a la Presa de San José) — dozens of stalls, 9:30 AM–1:00 PM, cash only. The most authentic Potosino food experience.</li>
</ul>
</section>

<section id="practical" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Practical Tips for First-Time Visitors</h2>

<ul class="list-disc pl-6 mb-6 text-gray-700 space-y-2">
  <li><strong>Currency:</strong> Mexican peso (MXN). 1 USD ≈ 17.5 MXN as of April 2026. Cards accepted in hotels and major restaurants; carry cash for markets, taxis, gorditas.</li>
  <li><strong>Language:</strong> Spanish dominant. Hotels, airport, Centro restaurants speak functional English. Download Google Translate offline Spanish before arriving.</li>
  <li><strong>Safety:</strong> US State Department classifies the state of SLP at Travel Advisory Level 2 (Exercise Increased Caution) — same as France or the UK. Centro Histórico, Lomas, and Tangamanga are comfortable for tourists day and night with normal urban precautions. See our <a href="/resources/safety-guide" class="text-blue-600 underline font-medium">SLP safety guide</a>.</li>
  <li><strong>Altitude:</strong> 1,864 m / 6,115 ft. No issues for most travelers but stay hydrated.</li>
  <li><strong>Climate (June–July):</strong> Daytime 24–28°C, evenings cool to 14–18°C. Pack layers, an umbrella (afternoon rain common in summer), and broken-in walking shoes.</li>
  <li><strong>SIM card:</strong> Telcel and AT&amp;T Mexico kiosks at SLP airport. ~$200 MXN for a tourist SIM with 30 days of LTE.</li>
  <li><strong>Uber:</strong> Works city-wide. Cheaper than taxis. Set up an account before flying down.</li>
</ul>
</section>

<div class="bg-gradient-to-r from-orange-100 to-yellow-100 border-2 border-orange-300 rounded-xl p-6 mb-8">
<h3 class="text-2xl font-bold mb-3 text-orange-900">Get the SLP weekly during the 2026 tournament</h3>
<p class="text-orange-900 mb-4">We send a free Monday newsletter with: this week's events, restaurant openings, transport changes, weather watch, and updates relevant to visitors traveling in for matches. Used by 2,800+ readers including journalists, expats, and tournament-week travelers.</p>
<p class="text-orange-900"><a href="/subscribe" class="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold px-6 py-3 rounded-lg">Subscribe — free, takes 10 seconds</a></p>
</div>

<section id="faq" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Frequently Asked Questions</h2>

<details class="mb-4 border border-gray-200 rounded-lg p-4 bg-white" open>
  <summary class="font-bold text-gray-900 cursor-pointer">Why is San Luis Potosí a good stopover during Mexico 2026?</summary>
  <p class="text-gray-700 mt-3">SLP sits roughly halfway between all three Mexican host cities (~4h 30m from CDMX, 4h from GDL, 5h 40m from MTY by car). With host-city hotel rates up 173%–333% (and over 2,000% near Azteca for the opener), basing in SLP and traveling in for matches is one of the few realistic ways to keep lodging costs honest.</p>
</details>

<details class="mb-4 border border-gray-200 rounded-lg p-4 bg-white" open>
  <summary class="font-bold text-gray-900 cursor-pointer">How far is SLP from Mexico City, Guadalajara, and Monterrey?</summary>
  <p class="text-gray-700 mt-3">SLP–CDMX: 402 km / 4h 30m drive. SLP–GDL: 330 km / 4h drive. SLP–MTY: 515 km / 5h 40m drive. Bus times add 1–2 hours; CDMX is the only host with a fast nonstop flight (Aeroméxico, 1h 20m).</p>
</details>

<details class="mb-4 border border-gray-200 rounded-lg p-4 bg-white">
  <summary class="font-bold text-gray-900 cursor-pointer">Are there direct flights from the US to SLP?</summary>
  <p class="text-gray-700 mt-3">Yes. Volaris and American both fly nonstop SLP–DFW (~2h 19m). United runs SLP–IAH Houston (~2h 1m, 14 weekly).</p>
</details>

<details class="mb-4 border border-gray-200 rounded-lg p-4 bg-white">
  <summary class="font-bold text-gray-900 cursor-pointer">Can I day-trip to a match in CDMX from SLP?</summary>
  <p class="text-gray-700 mt-3">No, we do not recommend it. SLP–CDMX is 4h 30m each way, plus heavy match-day traffic. Plan a single overnight in CDMX coinciding with your match.</p>
</details>

<details class="mb-4 border border-gray-200 rounded-lg p-4 bg-white">
  <summary class="font-bold text-gray-900 cursor-pointer">What can I see in SLP in 24–48 hours?</summary>
  <p class="text-gray-700 mt-3">24h: Centro Histórico walking tour (UNESCO Camino Real), Templo del Carmen, brunch on Carranza, Tangamanga, Caja del Agua. 48h: add a Huasteca Potosina day trip or Real de Catorce.</p>
</details>

<details class="mb-4 border border-gray-200 rounded-lg p-4 bg-white">
  <summary class="font-bold text-gray-900 cursor-pointer">How bad are hotel prices in CDMX, GDL, MTY during the tournament?</summary>
  <p class="text-gray-700 mt-3">Average increases: CDMX +173%, GDL +333%, MTY +218%. Properties near Estadio Azteca for the opening match quoted &gt;2,000% above baseline.</p>
</details>

<details class="mb-4 border border-gray-200 rounded-lg p-4 bg-white">
  <summary class="font-bold text-gray-900 cursor-pointer">Closest international airports to SLP?</summary>
  <p class="text-gray-700 mt-3">SLP\'s own airport is Ponciano Arriaga (IATA: SLP). Backup options: BJX (León) ~2h 12m drive, QRO (Querétaro) ~2h 39m drive — both with more international capacity.</p>
</details>

<details class="mb-4 border border-gray-200 rounded-lg p-4 bg-white">
  <summary class="font-bold text-gray-900 cursor-pointer">Do people in SLP speak English?</summary>
  <p class="text-gray-700 mt-3">Hotels, airport, Av. Carranza restaurants and major museums: yes. Markets, Ubers, smaller eateries: mostly Spanish. Google Translate offline pack handles edge cases.</p>
</details>
</section>

<div class="bg-green-50 border-l-4 border-green-400 p-6 mb-8">
<h3 class="text-xl font-bold mb-3 text-green-900">Planning a Mexico 2026 trip with SLP as your base?</h3>
<p class="text-green-800 mb-3"><strong>San Luis Way is your local guide to San Luis Potosí — events, restaurants, transport, neighborhoods, day trips.</strong></p>
<p class="text-green-800"><a href="/blog" class="text-blue-600 hover:text-blue-800 underline font-semibold">Browse all our SLP guides →</a></p>
</div>

<script type="application/ld+json">
${faqJsonLd}
</script>

</div>`;

const contentES = `<div class="prose prose-lg max-w-none">

<div class="mb-8">
<img src="${HERO}" alt="Catedral de San Luis Potosí y Centro Histórico — UNESCO Camino Real de Tierra Adentro, la ciudad de parada natural para visitantes durante México 2026" class="w-full rounded-xl shadow-2xl" />
</div>

<div class="bg-gradient-to-r from-orange-50 to-yellow-50 border-2 border-orange-200 rounded-xl p-6 mb-8">
  <div class="text-xs font-bold uppercase tracking-wide text-orange-700 mb-2">⚽ México 2026 — Guía de parada estratégica</div>
  <p class="text-lg font-bold text-gray-900 mb-2">Si vas a visitar México durante el torneo de 2026, San Luis Potosí es probablemente el lugar más inteligente del que aún no has oído hablar.</p>
  <p class="text-gray-700">Está a la mitad del camino entre las tres sedes mexicanas. Centro Histórico inscrito por la UNESCO. Vuelos directos desde Texas. Tarifas de hospedaje a una fracción de las de CDMX, GDL o MTY durante el torneo. Esta guía te dice exactamente cómo usar SLP como base — verificada en abril 2026 con datos actuales de distancias, vuelos y precios de hospedaje.</p>
</div>

<div class="bg-yellow-50 p-6 rounded-lg mb-8">
  <h3 class="text-xl font-bold mb-4 text-gray-900">Tabla de Contenidos</h3>
  <ul class="list-disc pl-6">
    <li><a href="#why-slp" class="text-blue-600 hover:text-blue-800">Por qué SLP es la parada inteligente</a></li>
    <li><a href="#hotel-spike" class="text-blue-600 hover:text-blue-800">La realidad de los precios de hotel en México 2026</a></li>
    <li><a href="#distances" class="text-blue-600 hover:text-blue-800">Distancias a cada sede</a></li>
    <li><a href="#how-to-get-here" class="text-blue-600 hover:text-blue-800">Cómo llegar a San Luis Potosí</a></li>
    <li><a href="#itinerary" class="text-blue-600 hover:text-blue-800">Itinerarios de 24 y 48 horas</a></li>
    <li><a href="#match-day" class="text-blue-600 hover:text-blue-800">Cómo viajar al día del partido</a></li>
    <li><a href="#where-to-stay" class="text-blue-600 hover:text-blue-800">Dónde hospedarse en SLP</a></li>
    <li><a href="#food" class="text-blue-600 hover:text-blue-800">Qué comer en SLP</a></li>
    <li><a href="#practical" class="text-blue-600 hover:text-blue-800">Tips prácticos para visitantes</a></li>
    <li><a href="#faq" class="text-blue-600 hover:text-blue-800">Preguntas frecuentes</a></li>
  </ul>
</div>

<div class="bg-blue-50 p-6 rounded-lg mb-8">
  <h3 class="text-xl font-bold mb-4 text-blue-900">Puntos clave</h3>
  <ul class="list-disc pl-6 space-y-2 text-blue-900">
    <li><strong>SLP está prácticamente equidistante</strong> de las tres sedes mexicanas — 4h 30m a CDMX, 4h a GDL, 5h 40m a MTY en auto.</li>
    <li><strong>El hospedaje en las sedes subió 173%–333%</strong> durante el torneo; las tarifas en SLP siguen cerca del baseline.</li>
    <li><strong>Vuelos directos desde Texas:</strong> Volaris y American (SLP–DFW), United (SLP–IAH).</li>
    <li><strong>Ir y regresar el mismo día a un partido no es realista</strong> — basa en SLP y reserva una sola noche en la sede para tu partido.</li>
    <li><strong>Qué hacer en SLP:</strong> caminata por Centro Histórico UNESCO, Tangamanga, Huasteca Potosina, brunch en Carranza.</li>
    <li><strong>Resultado:</strong> SLP te da la experiencia mexicana real mientras mantiene tu presupuesto del torneo bajo control.</li>
  </ul>
</div>

<section id="why-slp" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Por qué San Luis Potosí es la parada estratégica para México 2026</h2>

<p class="text-gray-700 mb-6"><strong>México hospeda 13 partidos del torneo 2026 en tres ciudades — Ciudad de México (Estadio Azteca), Guadalajara (Estadio Akron) y Monterrey (Estadio BBVA) — entre el 11 de junio y el 19 de julio de 2026.</strong> El partido inaugural es en el Estadio Azteca el 11 de junio. Si tienes boletos para más de un partido en más de una ciudad, te enfrentas a un problema logístico: pagar tarifas infladas en dos o tres sedes, o encontrar una base que te ponga en distancia razonable de todas.</p>

<p class="text-gray-700 mb-6">San Luis Potosí — población ~1.31 millones en el área metropolitana, 1,864 m de altitud, 6h en auto desde la frontera con EUA, Centro Histórico Patrimonio de la Humanidad por la UNESCO — es esa base. Está en el centro geográfico del centro-norte de México, sobre la Carretera 57 (la columna que conecta Ciudad de México con la frontera norte) y la 80 (que va al oeste hacia Guadalajara). El mismo hecho que hace de SLP el segundo cluster automotriz más grande del país después de Puebla — su posición en el cruce de carreteras y vías férreas del centro de México — es exactamente lo que la hace útil como base durante el torneo.</p>

<p class="text-gray-700 mb-6">Tres cosas convierten ese accidente geográfico en un verdadero hack de viaje:</p>
<ol class="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
  <li><strong>SLP tiene su propio aeropuerto internacional</strong> con vuelos directos desde EUA (Volaris y American a DFW, United a IAH) — no tienes que pasar migración en el caos del AICM de la Ciudad de México durante un evento global.</li>
  <li><strong>Las tarifas hoteleras en SLP no están infladas</strong> por la demanda del torneo — la ciudad no es sede, así que un cuarto 4 estrellas cuesta $1,500–2,500 MXN ($85–145 USD) cuando los equivalentes en CDMX están en $300–800 USD.</li>
  <li><strong>SLP es un destino real por sí mismo</strong> — Centro Histórico UNESCO, una escena gastronómica reconocida internacionalmente y la Huasteca Potosina con ríos turquesa y cascadas garantizan que los días de "parada" no sean tiempo perdido.</li>
</ol>

<p class="text-gray-700 mb-6">Para más contexto sobre por qué expats y visitantes están volteando a SLP, revisa nuestra <a href="/blog/ultimate-guide-living-san-luis-potosi-2026" class="text-blue-600 underline font-medium">Guía Definitiva para Vivir en San Luis Potosí</a> y <a href="/blog/san-luis-potosi-vs-san-miguel-allende-expats-2026" class="text-blue-600 underline font-medium">SLP vs San Miguel de Allende</a>.</p>
</section>

<section id="hotel-spike" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">La realidad de los precios de hotel en México 2026</h2>

<p class="text-gray-700 mb-6">Esto es lo que la mayoría de los viajeros de EUA y Europa subestiman. A inicios de 2026, los trackers de tarifas hoteleras de las sedes mexicanas reportaron los siguientes incrementos promedio para la ventana del torneo respecto a la misma semana de 2025:</p>

<div class="overflow-x-auto mb-8">
  <table class="min-w-full bg-white border-2 border-gray-200 rounded-lg shadow-lg">
    <thead style="background: linear-gradient(to right, #C75B39, #FFCB05);">
      <tr>
        <th class="px-4 py-3 text-left text-xs font-bold text-white uppercase">Sede</th>
        <th class="px-4 py-3 text-center text-xs font-bold text-white uppercase">Incremento promedio</th>
        <th class="px-4 py-3 text-left text-xs font-bold text-white uppercase">Dato de muestra</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-200 text-sm">
      <tr><td class="px-4 py-3 font-semibold">Ciudad de México (zona Azteca)</td><td class="px-4 py-3 text-center text-red-700 font-bold">+173% prom · hasta +2,373%</td><td class="px-4 py-3">Propiedades cerca del Azteca cotizaron &gt;2,000% sobre baseline para el inaugural</td></tr>
      <tr class="bg-gray-50"><td class="px-4 py-3 font-semibold">Guadalajara</td><td class="px-4 py-3 text-center text-red-700 font-bold">+333%</td><td class="px-4 py-3">Propiedad de muestra: $105 → $511 USD/noche</td></tr>
      <tr><td class="px-4 py-3 font-semibold">Monterrey</td><td class="px-4 py-3 text-center text-red-700 font-bold">+218%</td><td class="px-4 py-3">Tarifa promedio ~$361 USD/noche durante el torneo</td></tr>
      <tr class="bg-green-50"><td class="px-4 py-3 font-semibold">San Luis Potosí (referencia)</td><td class="px-4 py-3 text-center text-green-700 font-bold">~baseline</td><td class="px-4 py-3">4 estrellas: $85–145 USD/noche, sin cambios significativos</td></tr>
    </tbody>
  </table>
</div>

<p class="text-gray-700 mb-6">Airbnb está corriendo un incentivo a anfitriones de hasta USD 750 entre febrero y julio 2026 específicamente para ampliar inventario en las sedes mexicanas. Que la propia plataforma reconozca el déficit de oferta es la señal más honesta de qué tan apretado va a estar el hospedaje.</p>

<div class="bg-amber-50 border-l-4 border-amber-400 p-4 mb-6">
<p class="text-amber-900 text-sm"><strong>Lo que esto significa para tu presupuesto:</strong> Un viaje de 10 noches a México con todas las noches en CDMX puede llegar fácilmente a $4,000–8,000 USD solo en hospedaje. Las mismas 10 noches con base en SLP, con dos noches sueltas en CDMX o GDL para tus partidos, pueden cerrar en $1,200–2,200 USD en hospedaje — ahorrándote $2,000–6,000 USD que puedes destinar a mejores asientos, más partidos o un día de Huasteca Potosina con guía.</p>
</div>
</section>

<section id="distances" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Distancias de San Luis Potosí a cada sede</h2>

<p class="text-gray-700 mb-6">Verificadas en abril 2026 contra datos de carreteras federales mexicanas y horarios de los principales operadores de autobús:</p>

<div class="overflow-x-auto mb-8">
  <table class="min-w-full bg-white border-2 border-gray-200 rounded-lg shadow-lg">
    <thead class="bg-gray-100">
      <tr>
        <th class="px-4 py-3 text-left text-xs font-bold text-gray-900 uppercase">Ruta</th>
        <th class="px-4 py-3 text-center text-xs font-bold text-gray-900 uppercase">Distancia</th>
        <th class="px-4 py-3 text-center text-xs font-bold text-gray-900 uppercase">Auto</th>
        <th class="px-4 py-3 text-center text-xs font-bold text-gray-900 uppercase">Bus (ETN)</th>
        <th class="px-4 py-3 text-center text-xs font-bold text-gray-900 uppercase">Avión</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-200 text-sm">
      <tr><td class="px-4 py-3 font-semibold">SLP → CDMX (Hwy 57D)</td><td class="px-4 py-3 text-center">402 km</td><td class="px-4 py-3 text-center">4h 30m</td><td class="px-4 py-3 text-center">6–7h</td><td class="px-4 py-3 text-center">1h 20m (Aeroméxico, ~5×/día)</td></tr>
      <tr class="bg-gray-50"><td class="px-4 py-3 font-semibold">SLP → Guadalajara (Hwy 80/90)</td><td class="px-4 py-3 text-center">330 km</td><td class="px-4 py-3 text-center">4h</td><td class="px-4 py-3 text-center">5–6h</td><td class="px-4 py-3 text-center">sin vuelo directo</td></tr>
      <tr><td class="px-4 py-3 font-semibold">SLP → Monterrey (Hwy 57 N)</td><td class="px-4 py-3 text-center">515 km</td><td class="px-4 py-3 text-center">5h 40m</td><td class="px-4 py-3 text-center">6h</td><td class="px-4 py-3 text-center">sin vuelo directo</td></tr>
    </tbody>
  </table>
</div>

<p class="text-gray-700 mb-6">CDMX es la única sede con vuelo directo rápido desde SLP. Para Guadalajara y Monterrey tus opciones realistas son auto o autobús ETN — ambos placenteros en autopistas mexicanas, con buses ejecutivos cómodos (asientos reclinables, wifi a bordo, snacks).</p>

<p class="text-gray-700 mb-6">Si vas a rentar auto, considera renta en una sola dirección desde los aeropuertos BJX (León) o QRO (Querétaro) — ambos a ~2h–2.5h de SLP y con mucha más capacidad internacional que SLP en días donde SLP esté agotado.</p>
</section>

<section id="how-to-get-here" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Cómo llegar a San Luis Potosí</h2>

<h3 class="text-2xl font-bold mb-4 text-gray-900">Vuelos directos desde Estados Unidos</h3>
<ul class="list-disc pl-6 mb-6 text-gray-700 space-y-2">
  <li><strong>Volaris SLP↔DFW (Dallas/Fort Worth):</strong> sin escalas, ~2h 19m, tarifas desde ~$81–126 USD viaje sencillo en semanas no pico. Servicio lanzado en julio 2025 y vigente para 2026.</li>
  <li><strong>American Airlines SLP↔DFW:</strong> diario sin escalas, con conexiones codeshare para la costa este de EUA.</li>
  <li><strong>United Airlines SLP↔IAH (Houston):</strong> ~14 vuelos sin escalas semanales, ~2h 1m. El salto más rápido desde EUA para fans que llegan vía Houston.</li>
</ul>

<h3 class="text-2xl font-bold mb-4 text-gray-900">Vuelos domésticos a SLP</h3>
<p class="text-gray-700 mb-6">Aeroméxico opera SLP↔CDMX (MEX) unas 5 veces al día (1h 20m), y también sirve al Aeropuerto Internacional Felipe Ángeles (NLU). Volaris conecta SLP con Tijuana, Cancún y otros mercados domésticos.</p>

<h3 class="text-2xl font-bold mb-4 text-gray-900">Aeropuertos alternos</h3>
<p class="text-gray-700 mb-6">Si las llegadas a SLP están agotadas para tus fechas, considera:</p>
<ul class="list-disc pl-6 mb-6 text-gray-700 space-y-2">
  <li><strong>Aeropuerto Internacional del Bajío (BJX, León):</strong> ~172 km / 2h 12m a SLP. Muchas más aerolíneas internacionales y frecuencias, sobre todo a Texas y Chicago.</li>
  <li><strong>Aeropuerto Intercontinental de Querétaro (QRO):</strong> ~220 km / 2h 39m a SLP. También con mucha más capacidad internacional.</li>
</ul>

<p class="text-gray-700 mb-6">Tanto BJX como QRO tienen presencia fuerte de rentadoras (Hertz, Enterprise, Sixt, Avis, Mex Rent A Car) con devoluciones en una sola dirección a SLP disponibles.</p>

<h3 class="text-2xl font-bold mb-4 text-gray-900">Transporte terrestre desde el interior de México</h3>
<ul class="list-disc pl-6 mb-6 text-gray-700 space-y-2">
  <li><strong>Desde CDMX:</strong> ETN ejecutivo desde Terminal Norte, 6–7h, ~700 MXN viaje sencillo. O manejar Hwy 57D, 4h 30m, ~700 MXN en casetas por sentido.</li>
  <li><strong>Desde Guadalajara:</strong> ETN desde Terminal Nueva, 5–6h, ~650 MXN. Manejar 4h por Hwy 80/90.</li>
  <li><strong>Desde Monterrey:</strong> ETN, 6h. Manejar 5h 40m por Hwy 57 norte.</li>
</ul>
</section>

<section id="itinerary" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Qué hacer en SLP — Itinerarios de 24 y 48 horas</h2>

<div class="mb-8">
<img src="${IMG_TEATRO}" alt="Teatro de la Paz en el Centro Histórico de San Luis Potosí — Patrimonio Mundial UNESCO" class="w-full rounded-xl shadow-lg" />
</div>

<h3 class="text-2xl font-bold mb-4 text-gray-900">El plan de 24 horas en SLP</h3>
<p class="text-gray-700 mb-4">Si solo tienes un día completo en SLP entre partidos, esta es la ruta que te da la ciudad más auténtica en el menor tiempo posible:</p>
<ol class="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
  <li><strong>9:00 AM</strong> — Desayuno en Av. Carranza. Prueba La Parroquia Potosina o Cuatro Almas. Ambos sirven enchiladas potosinas (el platillo signature de la ciudad) y excelente café.</li>
  <li><strong>10:30 AM</strong> — Recorrido a pie por Centro Histórico: Plaza de Armas, Catedral, Plaza de los Fundadores, Caja del Agua. El loop completo son 2 horas a paso tranquilo.</li>
  <li><strong>1:00 PM</strong> — Templo del Carmen (la obra maestra barroca más fotografiada de la ciudad, siglo XVIII).</li>
  <li><strong>2:00 PM</strong> — Comida en Mercado República — prueba gorditas, la institución del desayuno local, o sentado en Tres60 Bistro.</li>
  <li><strong>4:00 PM</strong> — Museo Federico Silva (museo de escultura, 1 hora) o Museo Laberinto si traes niños (ciencia interactiva, $50 MXN).</li>
  <li><strong>6:00 PM</strong> — Atardecer caminando en Parque Tangamanga I (411 hectáreas de parque urbano, gratis).</li>
  <li><strong>8:00 PM</strong> — Cena. La Posta del Carmen, La Oruga y la Cebada, o italiano en Antica Trattoria.</li>
</ol>

<h3 class="text-2xl font-bold mb-4 text-gray-900">El plan de 48 horas</h3>
<p class="text-gray-700 mb-6">Suma el Día 2 al anterior:</p>
<ol class="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
  <li><strong>6:00 AM</strong> — Salida hacia la <strong>Huasteca Potosina</strong> con guía registrado. Las 4 horas de manejo al este te llevan a ríos turquesa (Tamul, Tampaón), cascadas (Cascada de Tamul, Minas Viejas) y sitios de rappel. Espera un día largo pero inolvidable — regreso a SLP después de oscurecer.</li>
  <li><strong>Alternativa para no aventureros:</strong> medio día a Real de Catorce, Pueblo Mágico fantasma minero (~3h de manejo por sentido) en el alto desierto.</li>
</ol>

<p class="text-gray-700 mb-6">Para guías más profundas, mira nuestra <a href="/parque-tangamanga" class="text-blue-600 underline font-medium">guía completa del Parque Tangamanga</a>, <a href="/blog/best-brunch-spots-san-luis-potosi" class="text-blue-600 underline font-medium">mejores lugares de brunch</a> y <a href="/blog/best-parks-for-kids-san-luis-potosi" class="text-blue-600 underline font-medium">mejores parques para niños</a>.</p>
</section>

<section id="match-day" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Cómo viajar de SLP a tu partido</h2>

<p class="text-gray-700 mb-6"><strong>No intentes ir y regresar el mismo día a un partido.</strong> SLP–CDMX son 4h 30m por sentido en auto o 6–7h en autobús, y eso antes de contar el tráfico día de partido alrededor del Estadio Azteca (que cierra la zona alrededor horas antes del kickoff). El plan realista:</p>

<ol class="list-decimal pl-6 mb-6 text-gray-700 space-y-3">
  <li><strong>Partido en CDMX:</strong> reserva una noche en hotel cerca de Coyoacán o sobre la línea sur del Metro — son los hospedajes razonablemente cercanos al Azteca. Toma el vuelo de Aeroméxico desde SLP la mañana del partido (1h 20m), Uber al hotel, deja maletas, come, y luego Metro Línea 2 a Tasqueña y Tren Ligero al Estadio Azteca. Regresas a SLP al día siguiente en el vuelo vespertino.</li>
  <li><strong>Partido en Guadalajara:</strong> manejas tú (4h, escénico) o ETN (5–6h). Una noche cerca del Estadio Akron en Zapopan, regreso a SLP la mañana siguiente.</li>
  <li><strong>Partido en Monterrey:</strong> ETN (6h) es la opción realista porque no hay vuelo directo. Hospedaje cerca del Estadio BBVA en Guadalupe, regreso al día siguiente.</li>
</ol>

<div class="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
<p class="text-blue-900 text-sm"><strong>Tip:</strong> Reserva las noches sueltas en sede con la mayor anticipación posible y usa filtros de "cancelación gratuita" en Booking.com o Hotels.com — te permite ajustar si tus partidos cambian por avance del torneo.</p>
</div>
</section>

<section id="where-to-stay" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Dónde hospedarse en San Luis Potosí</h2>

<p class="text-gray-700 mb-6">Tres zonas cubren casi todos los casos de uso de los viajeros:</p>

<ul class="list-disc pl-6 mb-6 text-gray-700 space-y-3">
  <li><strong>Centro Histórico</strong> — Hoteles boutique en mansiones del siglo XVIII. A pie de la Plaza de Armas, Catedral y los principales restaurantes. Ejemplos: Hotel Museo Palacio de San Agustín, Hotel Real Plaza, Hotel Panorama. $90–250 USD/noche.</li>
  <li><strong>Lomas / Chapultepec</strong> — Hoteles modernos de zona corporativa con estacionamiento y gimnasio. Más cerca de Tangamanga. Ejemplos: Hyatt Regency San Luis Potosí (Av. Real de Lomas 290), Hilton San Luis Potosí, Holiday Inn Lomas. $90–180 USD/noche.</li>
  <li><strong>Zona aeropuerto</strong> — Entrada-salida rápida si tienes vuelo temprano de Aeroméxico a CDMX. Hampton Inn by Hilton SLP. $65–110 USD/noche.</li>
</ul>

<p class="text-gray-700 mb-6"><strong>Tip de Airbnb:</strong> SLP tiene mercado activo de Airbnb en Lomas, Centro y zonas adyacentes a Tangamanga. Para estancias de 4–5 noches un departamento de 1 recámara cuesta $40–80 USD/noche y te da cocina — útil para viajeros gestionando presupuestos de semana de torneo.</p>
</section>

<section id="food" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Qué comer en San Luis Potosí</h2>

<div class="mb-8">
<img src="${IMG_FOOD}" alt="Enchiladas potosinas — el platillo signature de San Luis Potosí" class="w-full rounded-xl shadow-lg" />
</div>

<p class="text-gray-700 mb-6">SLP pega muy por encima de su peso como ciudad gastronómica. El patrimonio local incluye <strong>enchiladas potosinas</strong> (enchiladas de masa de maíz rojo rellenas de queso, el plato signature de la ciudad), <strong>gorditas de Morales</strong> (discos gruesos de masa de maíz rellenos de guisos — el brunch potosino original de fin de semana, en el corredor de Morales / Loma de los Filtros), <strong>cecina</strong> (carne curada) y <strong>asado de boda</strong> (el guiso de bodas del estado).</p>

<p class="text-gray-700 mb-6">Para un roster completo de brunch y desayunos, mira nuestra guía de <a href="/blog/best-brunch-spots-san-luis-potosi" class="text-blue-600 underline font-medium">mejores lugares de brunch en SLP</a>. Picks rápidos durante tu parada:</p>
<ul class="list-disc pl-6 mb-6 text-gray-700 space-y-2">
  <li><strong>La Parroquia Potosina (Av. Carranza 300)</strong> — institución desde 1975, enchiladas potosinas en su mejor versión.</li>
  <li><strong>Cuatro Almas (Lomas)</strong> — brunch moderno con eggs benedict y chilaquiles al chipotle.</li>
  <li><strong>Mercado República</strong> — puestos del mercado para una comida auténtica de gorditas.</li>
  <li><strong>Calle de las Gorditas de Morales</strong> (Camino a la Presa de San José) — decenas de puestos, 9:30 AM–1:00 PM, solo efectivo. La experiencia gastronómica más auténticamente potosina.</li>
</ul>
</section>

<section id="practical" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Tips prácticos para visitantes por primera vez</h2>

<ul class="list-disc pl-6 mb-6 text-gray-700 space-y-2">
  <li><strong>Moneda:</strong> peso mexicano (MXN). 1 USD ≈ 17.5 MXN a abril 2026. Tarjetas aceptadas en hoteles y restaurantes principales; carga efectivo para mercados, taxis, gorditas.</li>
  <li><strong>Idioma:</strong> español dominante. Hoteles, aeropuerto, restaurantes del Centro hablan inglés funcional. Descarga Google Translate offline en español antes de llegar.</li>
  <li><strong>Seguridad:</strong> el Departamento de Estado de EUA clasifica al estado de SLP en Travel Advisory Nivel 2 (Mayor Precaución) — el mismo que Francia o Reino Unido. Centro Histórico, Lomas y Tangamanga son cómodos para turistas día y noche con precauciones urbanas normales. Mira nuestra <a href="/resources/safety-guide" class="text-blue-600 underline font-medium">guía de seguridad de SLP</a>.</li>
  <li><strong>Altitud:</strong> 1,864 m / 6,115 ft. Sin problemas para la mayoría, pero hidrátate bien.</li>
  <li><strong>Clima (junio–julio):</strong> días 24–28°C, noches frescas a 14–18°C. Empaca capas, paraguas (lluvia vespertina común en verano) y zapatos cómodos para caminar.</li>
  <li><strong>SIM card:</strong> kioscos de Telcel y AT&amp;T México en el aeropuerto SLP. ~$200 MXN por SIM turista con 30 días de LTE.</li>
  <li><strong>Uber:</strong> funciona en toda la ciudad. Más barato que taxis. Configura cuenta antes de volar.</li>
</ul>
</section>

<div class="bg-gradient-to-r from-orange-100 to-yellow-100 border-2 border-orange-300 rounded-xl p-6 mb-8">
<h3 class="text-2xl font-bold mb-3 text-orange-900">Recibe el SLP semanal durante el torneo 2026</h3>
<p class="text-orange-900 mb-4">Mandamos un newsletter gratis los lunes con: eventos de la semana, aperturas de restaurantes, cambios de transporte, alerta del clima y novedades relevantes para visitantes que vienen a partidos. Lo leen 2,800+ personas incluyendo periodistas, expats y viajeros de la semana del torneo.</p>
<p class="text-orange-900"><a href="/subscribe" class="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold px-6 py-3 rounded-lg">Suscríbete — gratis, toma 10 segundos</a></p>
</div>

<section id="faq" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Preguntas frecuentes</h2>

<details class="mb-4 border border-gray-200 rounded-lg p-4 bg-white" open>
  <summary class="font-bold text-gray-900 cursor-pointer">¿Por qué San Luis Potosí es buen punto de parada durante México 2026?</summary>
  <p class="text-gray-700 mt-3">SLP está prácticamente a la mitad del camino entre las tres sedes mexicanas (~4h 30m de CDMX, 4h de GDL, 5h 40m de MTY en auto). Con tarifas hoteleras subiendo 173%–333% en las sedes (y más de 2,000% cerca del Azteca para el inaugural), basarse en SLP y viajar a las sedes para los partidos es de las pocas formas realistas de mantener el hospedaje en orden.</p>
</details>

<details class="mb-4 border border-gray-200 rounded-lg p-4 bg-white" open>
  <summary class="font-bold text-gray-900 cursor-pointer">¿Qué tan lejos está SLP de CDMX, Guadalajara y Monterrey?</summary>
  <p class="text-gray-700 mt-3">SLP–CDMX: 402 km / 4h 30m en auto. SLP–GDL: 330 km / 4h en auto. SLP–MTY: 515 km / 5h 40m en auto. Los tiempos en autobús suman 1–2 horas; CDMX es la única sede con vuelo directo rápido (Aeroméxico, 1h 20m).</p>
</details>

<details class="mb-4 border border-gray-200 rounded-lg p-4 bg-white">
  <summary class="font-bold text-gray-900 cursor-pointer">¿Hay vuelos directos desde EUA a SLP?</summary>
  <p class="text-gray-700 mt-3">Sí. Volaris y American vuelan sin escalas SLP–DFW (~2h 19m). United opera SLP–IAH Houston (~2h 1m, 14 semanales).</p>
</details>

<details class="mb-4 border border-gray-200 rounded-lg p-4 bg-white">
  <summary class="font-bold text-gray-900 cursor-pointer">¿Puedo ir y regresar el mismo día a un partido en CDMX desde SLP?</summary>
  <p class="text-gray-700 mt-3">No, no lo recomendamos. SLP–CDMX son 4h 30m por sentido más tráfico de día de partido. Planea una noche en CDMX coincidiendo con tu partido.</p>
</details>

<details class="mb-4 border border-gray-200 rounded-lg p-4 bg-white">
  <summary class="font-bold text-gray-900 cursor-pointer">¿Qué se puede ver en SLP en 24–48 horas?</summary>
  <p class="text-gray-700 mt-3">24h: caminata por Centro Histórico (UNESCO Camino Real), Templo del Carmen, brunch en Carranza, Tangamanga, Caja del Agua. 48h: suma día completo en Huasteca Potosina o Real de Catorce.</p>
</details>

<details class="mb-4 border border-gray-200 rounded-lg p-4 bg-white">
  <summary class="font-bold text-gray-900 cursor-pointer">¿Qué tan caros están los hoteles en CDMX, GDL, MTY durante el torneo?</summary>
  <p class="text-gray-700 mt-3">Incrementos promedio: CDMX +173%, GDL +333%, MTY +218%. Propiedades cerca del Estadio Azteca para el inaugural cotizaron &gt;2,000% sobre baseline.</p>
</details>

<details class="mb-4 border border-gray-200 rounded-lg p-4 bg-white">
  <summary class="font-bold text-gray-900 cursor-pointer">¿Aeropuertos internacionales más cercanos a SLP?</summary>
  <p class="text-gray-700 mt-3">El propio aeropuerto de SLP es Ponciano Arriaga (IATA: SLP). Opciones de respaldo: BJX (León) ~2h 12m en auto, QRO (Querétaro) ~2h 39m — ambos con más capacidad internacional.</p>
</details>

<details class="mb-4 border border-gray-200 rounded-lg p-4 bg-white">
  <summary class="font-bold text-gray-900 cursor-pointer">¿En SLP se habla inglés?</summary>
  <p class="text-gray-700 mt-3">Hoteles, aeropuerto, restaurantes de Av. Carranza y museos principales: sí. Mercados, Ubers, fondas pequeñas: principalmente español. El paquete offline de Google Translate cubre los casos extremos.</p>
</details>
</section>

<div class="bg-green-50 border-l-4 border-green-400 p-6 mb-8">
<h3 class="text-xl font-bold mb-3 text-green-900">¿Planeando un viaje a México 2026 con SLP como base?</h3>
<p class="text-green-800 mb-3"><strong>San Luis Way es tu guía local de San Luis Potosí — eventos, restaurantes, transporte, colonias, day trips.</strong></p>
<p class="text-green-800"><a href="/blog" class="text-blue-600 hover:text-blue-800 underline font-semibold">Explora todas nuestras guías de SLP →</a></p>
</div>

<script type="application/ld+json">
${faqJsonLdES}
</script>

</div>`;

const post = {
  slug: SLUG,
  status: 'published',
  published_at: new Date().toISOString(),
  image_url: HERO,
  category: 'Travel',
  tags: ['mexico-2026', 'world-cup-stopover', 'san-luis-potosi', 'travel-mexico', 'host-cities', 'fan-travel-guide', 'cdmx-gdl-mty', 'slp', 'soccer-tournament-2026'],

  title: 'San Luis Potosí: The Mexico 2026 Stopover Guide for World Cup Visitors',
  excerpt: "If you are visiting Mexico for the 2026 tournament, San Luis Potosí is the smartest stopover you have probably never heard of: 4h from Guadalajara, 4h 30m from Mexico City, 5h 40m from Monterrey, with hotel rates a fraction of the host cities and direct flights from Texas. Verified April 2026.",
  content: contentEN,
  meta_title: 'Mexico 2026 Stopover: Use San Luis Potosí as Your Base',
  meta_description: 'San Luis Potosí is the smart stopover during Mexico 2026: midpoint of CDMX, GDL & MTY, hotel rates a fraction of host cities, direct flights from Texas. Verified guide.',

  title_es: 'San Luis Potosí: La parada inteligente para visitantes en México 2026',
  excerpt_es: 'Si vas a México para el torneo 2026, San Luis Potosí es probablemente la parada más inteligente de la que no has oído hablar: 4h de Guadalajara, 4h 30m de CDMX, 5h 40m de Monterrey, con tarifas a una fracción de las sedes y vuelos directos desde Texas. Verificada en abril 2026.',
  content_es: contentES,
  meta_title_es: 'México 2026: SLP como base estratégica',
  meta_description_es: 'San Luis Potosí, la parada inteligente para México 2026: punto medio de CDMX, GDL y MTY, tarifas a una fracción de las sedes y vuelos directos desde Texas. Guía verificada.',

  title_de: 'San Luis Potosí: Der clevere Zwischenstopp für Mexico 2026 Besucher',
  excerpt_de: 'San Luis Potosí ist 2026 der clevere Mexico-Zwischenstopp: Mittelpunkt von Mexiko-Stadt, Guadalajara und Monterrey, Hotelpreise auf Bruchteil der Gastgeberstädte, Direktflüge ab Texas. Verifiziert April 2026.',
  content_de: contentEN,
  meta_title_de: 'Mexico 2026: SLP als clevere Basis',
  meta_description_de: 'San Luis Potosí als Mexico-2026-Basis: Mittelpunkt der drei mexikanischen Gastgeberstädte, Hotelpreise zum Bruchteil, Direktflüge ab Texas. Verifizierter Reiseführer.',

  title_ja: 'サン・ルイス・ポトシ：メキシコ2026の賢いストップオーバー拠点',
  excerpt_ja: 'メキシコ2026の試合を訪れる旅行者にとって、サン・ルイス・ポトシは最適なストップオーバー拠点 — メキシコシティから4時間30分、グアダラハラから4時間、モンテレイから5時間40分、ホテル料金は開催都市の数分の一、テキサスから直行便あり。2026年4月確認済み。',
  content_ja: contentEN,
  meta_title_ja: 'メキシコ2026: SLPを賢い拠点に',
  meta_description_ja: 'サン・ルイス・ポトシはメキシコ2026の賢い拠点：3つの開催都市の中間、ホテル料金は開催都市の数分の一、テキサスから直行便。確認済みガイド。',
};

async function main() {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    console.error('Missing Supabase env vars. Aborting.');
    process.exit(1);
  }

  console.log('Checking for existing post...');
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
    console.log('Updating existing post:', existing.id);
    const { error } = await supabase
      .from('blog_posts')
      .update(post)
      .eq('id', existing.id);
    if (error) {
      console.error('Update error:', error);
      process.exit(1);
    }
    console.log('Post updated');
  } else {
    console.log('Inserting new post...');
    const { data, error } = await supabase
      .from('blog_posts')
      .insert(post)
      .select('id')
      .single();
    if (error) {
      console.error('Insert error:', error);
      process.exit(1);
    }
    console.log('Post inserted, id:', data.id);
  }

  console.log('\nView at: https://sanluisway.com/blog/' + SLUG);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error('Fatal:', err);
    process.exit(1);
  });
