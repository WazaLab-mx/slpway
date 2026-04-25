require('dotenv').config({ path: '.env' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const SLUG = 'direct-flights-from-texas-to-san-luis-potosi';

const HERO = '/images/centro-historico/san-luis-potosi-cathedral.jpg';
const IMG_TANGAMANGA = '/images/parque-tangamanga/banner.jpg';
const IMG_FOOD = '/images/food/enchiladas-potosinas.jpg';

const faqJsonLd = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Are there direct flights from Texas to San Luis Potosí, Mexico?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Three carriers operate nonstop service: Volaris flies SLP↔Dallas/Fort Worth (DFW) at ~2h 19m with daily service that launched July 2025. American Airlines also flies SLP↔DFW daily nonstop. United Airlines flies SLP↔Houston (IAH) with ~14 weekly nonstops at ~2h 1m. These give Texas-based travelers a direct way into north-central Mexico without connecting through Mexico City.'
      }
    },
    {
      '@type': 'Question',
      name: 'How much does a flight from Dallas or Houston to SLP cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Volaris fares from DFW typically run $81–126 USD one-way in non-peak weeks, climbing to $200–350 USD for the 2026 tournament window. American Airlines DFW–SLP is generally $250–500 USD one-way. United IAH–SLP runs $200–450 USD. Booking 60–90 days in advance and avoiding the June 11 (opener) and final week typically saves 30–50%.'
      }
    },
    {
      '@type': 'Question',
      name: 'Why fly to SLP instead of Mexico City for the 2026 tournament?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Three reasons. (1) Speed: SLP\'s Ponciano Arriaga airport handles a fraction of CDMX\'s passenger volume — your immigration line will be 5–10 minutes vs. 60–120 at AICM during the tournament. (2) Cost: hotel rates in CDMX are inflated 173%–2,373% for the tournament; SLP is at baseline. (3) Position: SLP is roughly equidistant from all three Mexican host cities (4h GDL, 4h 30m CDMX, 5h 40m MTY) by car, making it a viable base for multi-city tournament travel.'
      }
    },
    {
      '@type': 'Question',
      name: 'How long is the flight from Texas to SLP?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'DFW–SLP nonstop on Volaris or American: ~2h 19m. IAH (Houston)–SLP nonstop on United: ~2h 1m. Both are shorter than the average DFW–LAX flight.'
      }
    },
    {
      '@type': 'Question',
      name: 'What documents do I need to fly from the US to Mexico?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A valid US passport (or US passport card for land/sea entry only — flights require a passport book). On arrival in Mexico, you will receive an FMM (Forma Migratoria Múltiple) tourist permit valid up to 180 days, free for tourist travel. Customs declaration (sometimes paper, sometimes via the digital MARCO system at major airports) is filled on arrival. No visa required for US/Canadian/EU citizens for stays under 180 days.'
      }
    },
    {
      '@type': 'Question',
      name: 'How do I get from SLP airport to the city?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Aeropuerto Ponciano Arriaga (SLP) is ~25 km north of the city. Taxis from the airport are fixed-rate, around 350–450 MXN ($20–26 USD) to Centro Histórico or Lomas. Uber and DiDi work from the airport — typically 200–280 MXN ($12–16 USD). The airport has no public bus transfer to the city as of 2026. Major hotels can arrange a shuttle on request.'
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
      name: '¿Hay vuelos directos de Texas a San Luis Potosí, México?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Tres aerolíneas operan servicio sin escalas: Volaris vuela SLP↔Dallas/Fort Worth (DFW) en ~2h 19m con servicio diario que arrancó en julio 2025. American Airlines también vuela SLP↔DFW diario sin escalas. United Airlines vuela SLP↔Houston (IAH) con ~14 vuelos semanales sin escalas en ~2h 1m. Estos le dan a viajeros de Texas una forma directa al centro-norte de México sin conectar por Ciudad de México.'
      }
    },
    {
      '@type': 'Question',
      name: '¿Cuánto cuesta un vuelo de Dallas o Houston a SLP?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Volaris desde DFW corre típicamente $81–126 USD viaje sencillo en semanas no pico, subiendo a $200–350 USD para la ventana del torneo 2026. American Airlines DFW–SLP generalmente $250–500 USD sencillo. United IAH–SLP corre $200–450 USD. Reservar 60–90 días antes y evitar el 11 de junio (inaugural) y la última semana suele ahorrar 30–50%.'
      }
    },
    {
      '@type': 'Question',
      name: '¿Por qué volar a SLP en vez de a CDMX para el torneo 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tres razones. (1) Velocidad: el aeropuerto Ponciano Arriaga maneja una fracción del volumen de CDMX — tu fila de migración va a ser de 5–10 minutos vs. 60–120 en AICM durante el torneo. (2) Costo: las tarifas de hotel en CDMX están infladas 173%–2,373% para el torneo; SLP está en baseline. (3) Posición: SLP está prácticamente equidistante de las tres sedes mexicanas (4h GDL, 4h 30m CDMX, 5h 40m MTY) en auto, haciéndola una base viable para viaje multi-ciudad.'
      }
    },
    {
      '@type': 'Question',
      name: '¿Cuánto dura el vuelo de Texas a SLP?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'DFW–SLP sin escalas en Volaris o American: ~2h 19m. IAH (Houston)–SLP sin escalas en United: ~2h 1m. Ambos son más cortos que el vuelo promedio DFW–LAX.'
      }
    },
    {
      '@type': 'Question',
      name: '¿Qué documentos necesito para volar de EUA a México?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pasaporte estadounidense vigente (la passport card solo aplica para entrada terrestre/marítima — vuelos requieren passport book). A la llegada en México recibes la FMM (Forma Migratoria Múltiple), permiso turista válido hasta 180 días, gratuito para turismo. La declaración de aduana (a veces papel, a veces vía el sistema digital MARCO en aeropuertos principales) se llena al llegar. Sin visa requerida para ciudadanos de EUA/Canadá/UE para estancias menores a 180 días.'
      }
    },
    {
      '@type': 'Question',
      name: '¿Cómo llego del aeropuerto SLP al centro de la ciudad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El Aeropuerto Ponciano Arriaga (SLP) está ~25 km al norte de la ciudad. Los taxis del aeropuerto son tarifa fija, alrededor de 350–450 MXN ($20–26 USD) al Centro Histórico o Lomas. Uber y DiDi funcionan desde el aeropuerto — típicamente 200–280 MXN ($12–16 USD). El aeropuerto no tiene transporte público de transferencia a la ciudad a 2026. Hoteles principales pueden arreglar shuttle bajo solicitud.'
      }
    }
  ]
});

const contentEN = `<div class="prose prose-lg max-w-none">

<div class="mb-8">
<img src="${HERO}" alt="San Luis Potosí Cathedral — direct destination from Dallas and Houston" class="w-full rounded-xl shadow-2xl" />
</div>

<div class="bg-gradient-to-r from-orange-50 to-yellow-50 border-2 border-orange-200 rounded-xl p-6 mb-8">
  <div class="text-xs font-bold uppercase tracking-wide text-orange-700 mb-2">✈️ Direct flights · Verified April 2026</div>
  <p class="text-lg font-bold text-gray-900 mb-2">If you live in Dallas or Houston, you can be in central Mexico in 2 hours — without connecting through Mexico City.</p>
  <p class="text-gray-700">Three carriers fly nonstop to San Luis Potosí (SLP). For 2026 tournament travelers, this is the cleanest entry point into Mexico's host-city corridor — short flight, fast immigration, hotel rates a fraction of CDMX. Verified routes, fares, and times below.</p>
</div>

<div class="bg-blue-50 p-6 rounded-lg mb-8">
  <h3 class="text-xl font-bold mb-4 text-blue-900">The Bottom Line</h3>
  <ul class="list-disc pl-6 space-y-2 text-blue-900">
    <li><strong>Volaris DFW↔SLP:</strong> daily nonstop, ~2h 19m, fares from ~$81–126 USD off-peak.</li>
    <li><strong>American Airlines DFW↔SLP:</strong> daily nonstop, ~2h 19m, codeshare with the global AA network.</li>
    <li><strong>United IAH↔SLP:</strong> ~14 weekly nonstops, ~2h 1m — the fastest US→central Mexico hop.</li>
    <li><strong>For 2026 tournament travelers:</strong> SLP gives you a sane base 4–6 hours from each Mexican host city, at a fraction of host-city hotel rates.</li>
  </ul>
</div>

<section class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">The Three Direct Routes</h2>

<div class="overflow-x-auto mb-8">
  <table class="min-w-full bg-white border-2 border-gray-200 rounded-lg shadow-lg">
    <thead style="background: linear-gradient(to right, #C75B39, #FFCB05);">
      <tr>
        <th class="px-4 py-3 text-left text-xs font-bold text-white uppercase">Route</th>
        <th class="px-4 py-3 text-center text-xs font-bold text-white uppercase">Carrier</th>
        <th class="px-4 py-3 text-center text-xs font-bold text-white uppercase">Frequency</th>
        <th class="px-4 py-3 text-center text-xs font-bold text-white uppercase">Flight time</th>
        <th class="px-4 py-3 text-center text-xs font-bold text-white uppercase">Off-peak fare</th>
        <th class="px-4 py-3 text-center text-xs font-bold text-white uppercase">Tournament window</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-200 text-sm">
      <tr><td class="px-4 py-3 font-semibold">DFW → SLP</td><td class="px-4 py-3 text-center">Volaris</td><td class="px-4 py-3 text-center">Daily</td><td class="px-4 py-3 text-center">2h 19m</td><td class="px-4 py-3 text-center">$81–126 USD</td><td class="px-4 py-3 text-center text-orange-700 font-bold">$200–350</td></tr>
      <tr class="bg-gray-50"><td class="px-4 py-3 font-semibold">DFW → SLP</td><td class="px-4 py-3 text-center">American</td><td class="px-4 py-3 text-center">Daily</td><td class="px-4 py-3 text-center">2h 19m</td><td class="px-4 py-3 text-center">$250–400 USD</td><td class="px-4 py-3 text-center text-orange-700 font-bold">$350–500</td></tr>
      <tr><td class="px-4 py-3 font-semibold">IAH → SLP</td><td class="px-4 py-3 text-center">United</td><td class="px-4 py-3 text-center">14× weekly</td><td class="px-4 py-3 text-center">2h 1m</td><td class="px-4 py-3 text-center">$200–350 USD</td><td class="px-4 py-3 text-center text-orange-700 font-bold">$300–450</td></tr>
    </tbody>
  </table>
</div>

<p class="text-gray-700 mb-6">Volaris launched the DFW–SLP route in July 2025 and remains the cheapest year-round option. American Airlines runs the same route at higher prices but with mainline business seats and Texas–East Coast connections. United IAH–SLP is the shortest flight from any major US airport into central Mexico.</p>

<div class="bg-amber-50 border-l-4 border-amber-400 p-4 mb-6">
<p class="text-amber-900 text-sm"><strong>Booking tip:</strong> For 2026 tournament dates, book by April 30 to lock in the lower fare bracket. After May 1, prices typically jump 30–50% as fans finalize plans. The June 11 opener and final week (mid-July) carry the highest premium — fly in/out earlier or later when possible.</p>
</div>
</section>

<section class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Why Texas Fans Should Skip the CDMX Route</h2>

<p class="text-gray-700 mb-6">Most US-based 2026 tournament travelers will book a flight to Mexico City and then figure out the rest. That is the wrong call if any of these apply:</p>

<ul class="list-disc pl-6 mb-6 text-gray-700 space-y-2">
  <li><strong>You have matches in more than one Mexican city.</strong> CDMX hotels are the most expensive of the three (averaging +173%, near-Azteca up to +2,000%+). Basing in SLP and traveling in for matches saves $2,000–6,000 USD over a 10-day trip.</li>
  <li><strong>You are connecting from Texas anyway.</strong> Why eat the connection time and CDMX immigration chaos when you can fly direct in 2 hours?</li>
  <li><strong>You want any actual Mexican cultural experience.</strong> CDMX during the tournament will be 100% football fans. SLP gives you UNESCO Centro Histórico, Tangamanga, brunch on Av. Carranza — the Mexico that was here before the tournament and will still be here after.</li>
</ul>

<p class="text-gray-700 mb-6">For the full case, see our <a href="/blog/mexico-2026-stopover-san-luis-potosi" class="text-blue-600 underline font-medium">Mexico 2026 Stopover Guide</a> with hotel-price comparisons and match-day logistics.</p>
</section>

<div class="mb-8">
<img src="${IMG_FOOD}" alt="Enchiladas potosinas — the signature dish of San Luis Potosí" class="w-full rounded-xl shadow-lg" />
</div>

<section class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">SLP Airport Logistics</h2>

<h3 class="text-2xl font-bold mb-4 text-gray-900">Aeropuerto Internacional Ponciano Arriaga (SLP)</h3>
<ul class="list-disc pl-6 mb-6 text-gray-700 space-y-2">
  <li><strong>Location:</strong> ~25 km north of San Luis Potosí city.</li>
  <li><strong>Size:</strong> small regional airport — single terminal, fast immigration, fast baggage. Expect 5–10 minutes from gate to taxi during normal traffic; 15–25 during peak.</li>
  <li><strong>Tickets and check-in:</strong> standard online with Volaris/AA/United apps. Volaris requires you to print a boarding pass or use the app — paper preferred.</li>
  <li><strong>SIM cards:</strong> Telcel and AT&amp;T Mexico kiosks in arrivals, ~$200 MXN for 30-day tourist SIM with LTE.</li>
  <li><strong>Currency exchange:</strong> ATMs (BBVA, Banorte) widely available. Exchange windows offer worse rates than ATMs.</li>
</ul>

<h3 class="text-2xl font-bold mb-4 text-gray-900">Getting to the city</h3>
<ul class="list-disc pl-6 mb-6 text-gray-700 space-y-2">
  <li><strong>Authorized taxi (fixed rate):</strong> 350–450 MXN ($20–26 USD) to Centro Histórico or Lomas. Buy ticket at the official taxi window inside arrivals.</li>
  <li><strong>Uber / DiDi:</strong> typically 200–280 MXN ($12–16 USD), pickup at designated rideshare zone outside the terminal.</li>
  <li><strong>Hotel shuttle:</strong> available on request from major hotels (Hyatt Regency, Hilton, Hampton Inn) — book 24h ahead.</li>
  <li><strong>Rental car:</strong> Hertz, Enterprise, Sixt, Avis, Mex Rent A Car all on-site. Book ahead for tournament dates.</li>
</ul>
</section>

<section class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Backup Airports If Direct Flights Are Sold Out</h2>

<p class="text-gray-700 mb-6">If your dates are unavailable on direct routes, consider:</p>
<ul class="list-disc pl-6 mb-6 text-gray-700 space-y-2">
  <li><strong>Aeropuerto Internacional del Bajío (BJX, León):</strong> ~172 km / 2h 12m drive to SLP. Many more international carriers — direct from DFW, IAH, ORD (Chicago) and others. Major rental-car presence with one-way drop-offs to SLP.</li>
  <li><strong>Aeropuerto Intercontinental de Querétaro (QRO):</strong> ~220 km / 2h 39m drive. Direct from DFW, IAH, EWR, ORD. Also one-way rentals to SLP.</li>
</ul>
</section>

<div class="bg-gradient-to-r from-orange-100 to-yellow-100 border-2 border-orange-300 rounded-xl p-6 mb-8">
<h3 class="text-2xl font-bold mb-3 text-orange-900">Get the SLP weekly before your trip</h3>
<p class="text-orange-900 mb-4">Free Monday newsletter with: this week's events, restaurant openings, transport changes, and tips relevant to visitors. Used by 2,800+ readers including Texas-based expats and tournament travelers.</p>
<p class="text-orange-900"><a href="/subscribe" class="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold px-6 py-3 rounded-lg">Subscribe — free, takes 10 seconds</a></p>
</div>

<section class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">FAQ</h2>

<details class="mb-4 border border-gray-200 rounded-lg p-4 bg-white" open>
  <summary class="font-bold text-gray-900 cursor-pointer">Are there direct flights from Texas to SLP?</summary>
  <p class="text-gray-700 mt-3">Yes. Volaris and American Airlines DFW↔SLP daily nonstop (~2h 19m). United IAH↔SLP ~14 weekly nonstops (~2h 1m).</p>
</details>

<details class="mb-4 border border-gray-200 rounded-lg p-4 bg-white" open>
  <summary class="font-bold text-gray-900 cursor-pointer">How much does the flight cost?</summary>
  <p class="text-gray-700 mt-3">Volaris off-peak: $81–126 USD one-way. American: $250–400 USD. United IAH: $200–350 USD. 2026 tournament window adds 30–50%.</p>
</details>

<details class="mb-4 border border-gray-200 rounded-lg p-4 bg-white">
  <summary class="font-bold text-gray-900 cursor-pointer">Why fly to SLP instead of CDMX?</summary>
  <p class="text-gray-700 mt-3">Faster immigration, baseline hotel rates (vs. +173% in CDMX), and SLP is roughly equidistant from all three Mexican host cities by car.</p>
</details>

<details class="mb-4 border border-gray-200 rounded-lg p-4 bg-white">
  <summary class="font-bold text-gray-900 cursor-pointer">How long is the flight?</summary>
  <p class="text-gray-700 mt-3">DFW–SLP: ~2h 19m. IAH–SLP: ~2h 1m.</p>
</details>

<details class="mb-4 border border-gray-200 rounded-lg p-4 bg-white">
  <summary class="font-bold text-gray-900 cursor-pointer">What documents do I need?</summary>
  <p class="text-gray-700 mt-3">Valid US passport book. FMM tourist permit issued on arrival, free, valid up to 180 days. No visa for US/Canadian/EU citizens.</p>
</details>

<details class="mb-4 border border-gray-200 rounded-lg p-4 bg-white">
  <summary class="font-bold text-gray-900 cursor-pointer">How do I get from SLP airport to the city?</summary>
  <p class="text-gray-700 mt-3">Authorized taxi (fixed rate): 350–450 MXN ($20–26 USD). Uber/DiDi: 200–280 MXN ($12–16 USD). ~25 km to Centro / Lomas.</p>
</details>
</section>

<script type="application/ld+json">
${faqJsonLd}
</script>

</div>`;

const contentES = `<div class="prose prose-lg max-w-none">

<div class="mb-8">
<img src="${HERO}" alt="Catedral de San Luis Potosí — destino directo desde Dallas y Houston" class="w-full rounded-xl shadow-2xl" />
</div>

<div class="bg-gradient-to-r from-orange-50 to-yellow-50 border-2 border-orange-200 rounded-xl p-6 mb-8">
  <div class="text-xs font-bold uppercase tracking-wide text-orange-700 mb-2">✈️ Vuelos directos · Verificado en abril 2026</div>
  <p class="text-lg font-bold text-gray-900 mb-2">Si vives en Dallas o Houston, puedes estar en el centro de México en 2 horas — sin conectar por Ciudad de México.</p>
  <p class="text-gray-700">Tres aerolíneas vuelan sin escalas a San Luis Potosí (SLP). Para viajeros del torneo 2026, este es el punto de entrada más limpio al corredor de sedes mexicanas — vuelo corto, migración rápida, tarifas de hotel a una fracción de CDMX. Rutas, tarifas y tiempos verificados abajo.</p>
</div>

<div class="bg-blue-50 p-6 rounded-lg mb-8">
  <h3 class="text-xl font-bold mb-4 text-blue-900">El Resumen</h3>
  <ul class="list-disc pl-6 space-y-2 text-blue-900">
    <li><strong>Volaris DFW↔SLP:</strong> diario sin escalas, ~2h 19m, tarifas desde ~$81–126 USD fuera de pico.</li>
    <li><strong>American Airlines DFW↔SLP:</strong> diario sin escalas, ~2h 19m, codeshare con la red global de AA.</li>
    <li><strong>United IAH↔SLP:</strong> ~14 vuelos sin escalas semanales, ~2h 1m — el salto más rápido EUA→centro de México.</li>
    <li><strong>Para viajeros del torneo 2026:</strong> SLP te da una base sensata a 4–6 horas de cada sede mexicana, a una fracción de las tarifas hoteleras de las sedes.</li>
  </ul>
</div>

<section class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Las tres rutas directas</h2>

<div class="overflow-x-auto mb-8">
  <table class="min-w-full bg-white border-2 border-gray-200 rounded-lg shadow-lg">
    <thead style="background: linear-gradient(to right, #C75B39, #FFCB05);">
      <tr>
        <th class="px-4 py-3 text-left text-xs font-bold text-white uppercase">Ruta</th>
        <th class="px-4 py-3 text-center text-xs font-bold text-white uppercase">Aerolínea</th>
        <th class="px-4 py-3 text-center text-xs font-bold text-white uppercase">Frecuencia</th>
        <th class="px-4 py-3 text-center text-xs font-bold text-white uppercase">Tiempo de vuelo</th>
        <th class="px-4 py-3 text-center text-xs font-bold text-white uppercase">Tarifa fuera pico</th>
        <th class="px-4 py-3 text-center text-xs font-bold text-white uppercase">Ventana torneo</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-200 text-sm">
      <tr><td class="px-4 py-3 font-semibold">DFW → SLP</td><td class="px-4 py-3 text-center">Volaris</td><td class="px-4 py-3 text-center">Diario</td><td class="px-4 py-3 text-center">2h 19m</td><td class="px-4 py-3 text-center">$81–126 USD</td><td class="px-4 py-3 text-center text-orange-700 font-bold">$200–350</td></tr>
      <tr class="bg-gray-50"><td class="px-4 py-3 font-semibold">DFW → SLP</td><td class="px-4 py-3 text-center">American</td><td class="px-4 py-3 text-center">Diario</td><td class="px-4 py-3 text-center">2h 19m</td><td class="px-4 py-3 text-center">$250–400 USD</td><td class="px-4 py-3 text-center text-orange-700 font-bold">$350–500</td></tr>
      <tr><td class="px-4 py-3 font-semibold">IAH → SLP</td><td class="px-4 py-3 text-center">United</td><td class="px-4 py-3 text-center">14× semanal</td><td class="px-4 py-3 text-center">2h 1m</td><td class="px-4 py-3 text-center">$200–350 USD</td><td class="px-4 py-3 text-center text-orange-700 font-bold">$300–450</td></tr>
    </tbody>
  </table>
</div>

<p class="text-gray-700 mb-6">Volaris lanzó la ruta DFW–SLP en julio 2025 y sigue siendo la opción más barata todo el año. American Airlines opera la misma ruta a precios más altos pero con asientos business mainline y conexiones Texas–costa este. United IAH–SLP es el vuelo más corto desde cualquier aeropuerto principal de EUA al centro de México.</p>

<div class="bg-amber-50 border-l-4 border-amber-400 p-4 mb-6">
<p class="text-amber-900 text-sm"><strong>Tip de reserva:</strong> Para fechas del torneo 2026, reserva antes del 30 de abril para fijar el rango bajo de tarifa. Después del 1 de mayo, los precios típicamente saltan 30–50% conforme los fans cierran planes. El 11 de junio (inaugural) y la última semana (mediados de julio) cargan el premium más alto — vuela antes/después cuando se pueda.</p>
</div>
</section>

<section class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Por qué los fans de Texas deben evitar la ruta CDMX</h2>

<p class="text-gray-700 mb-6">La mayoría de los viajeros de EUA del torneo 2026 reservarán vuelo a Ciudad de México y resolverán el resto después. Esa es la decisión equivocada si aplica alguno de estos casos:</p>

<ul class="list-disc pl-6 mb-6 text-gray-700 space-y-2">
  <li><strong>Tienes partidos en más de una ciudad mexicana.</strong> Los hoteles de CDMX son los más caros de las tres sedes (promediando +173%, cerca del Azteca hasta +2,000%+). Basarse en SLP y viajar a las sedes ahorra $2,000–6,000 USD en un viaje de 10 días.</li>
  <li><strong>Estás conectando desde Texas de todos modos.</strong> ¿Para qué tragarte el tiempo de conexión y el caos de migración del AICM cuando puedes volar directo en 2 horas?</li>
  <li><strong>Quieres una experiencia cultural mexicana real.</strong> CDMX durante el torneo va a ser 100% fans de futbol. SLP te da Centro Histórico UNESCO, Tangamanga, brunch en Av. Carranza — el México que estaba aquí antes del torneo y seguirá aquí después.</li>
</ul>

<p class="text-gray-700 mb-6">Para el caso completo, mira nuestra <a href="/blog/mexico-2026-stopover-san-luis-potosi" class="text-blue-600 underline font-medium">Guía de Parada en SLP para México 2026</a> con comparativos de tarifas hoteleras y logística día de partido.</p>
</section>

<div class="mb-8">
<img src="${IMG_FOOD}" alt="Enchiladas potosinas — el platillo signature de San Luis Potosí" class="w-full rounded-xl shadow-lg" />
</div>

<section class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Logística del aeropuerto SLP</h2>

<h3 class="text-2xl font-bold mb-4 text-gray-900">Aeropuerto Internacional Ponciano Arriaga (SLP)</h3>
<ul class="list-disc pl-6 mb-6 text-gray-700 space-y-2">
  <li><strong>Ubicación:</strong> ~25 km al norte de San Luis Potosí.</li>
  <li><strong>Tamaño:</strong> aeropuerto regional pequeño — terminal único, migración rápida, equipaje rápido. Espera 5–10 minutos de gate a taxi en tráfico normal; 15–25 en pico.</li>
  <li><strong>Boletos y check-in:</strong> estándar online con apps Volaris/AA/United. Volaris requiere imprimir pase de abordar o usar la app — papel preferido.</li>
  <li><strong>SIM cards:</strong> kioscos Telcel y AT&amp;T México en llegadas, ~$200 MXN por SIM turista de 30 días con LTE.</li>
  <li><strong>Cambio de moneda:</strong> ATMs (BBVA, Banorte) ampliamente disponibles. Las ventanillas de cambio dan tasas peores que los ATMs.</li>
</ul>

<h3 class="text-2xl font-bold mb-4 text-gray-900">Cómo llegar a la ciudad</h3>
<ul class="list-disc pl-6 mb-6 text-gray-700 space-y-2">
  <li><strong>Taxi autorizado (tarifa fija):</strong> 350–450 MXN ($20–26 USD) al Centro Histórico o Lomas. Compra el boleto en la ventanilla oficial de taxis dentro de llegadas.</li>
  <li><strong>Uber / DiDi:</strong> típicamente 200–280 MXN ($12–16 USD), recogida en la zona designada de rideshare fuera de la terminal.</li>
  <li><strong>Shuttle de hotel:</strong> disponible bajo solicitud en hoteles principales (Hyatt Regency, Hilton, Hampton Inn) — reserva con 24h de anticipación.</li>
  <li><strong>Renta de auto:</strong> Hertz, Enterprise, Sixt, Avis, Mex Rent A Car todas en sitio. Reserva por adelantado para fechas del torneo.</li>
</ul>
</section>

<section class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Aeropuertos de respaldo si los directos están agotados</h2>

<p class="text-gray-700 mb-6">Si tus fechas no están disponibles en rutas directas, considera:</p>
<ul class="list-disc pl-6 mb-6 text-gray-700 space-y-2">
  <li><strong>Aeropuerto Internacional del Bajío (BJX, León):</strong> ~172 km / 2h 12m a SLP. Muchas más aerolíneas internacionales — directos desde DFW, IAH, ORD (Chicago) y otros. Presencia mayor de rentadoras con devolución en una sola dirección a SLP.</li>
  <li><strong>Aeropuerto Intercontinental de Querétaro (QRO):</strong> ~220 km / 2h 39m a SLP. Directos desde DFW, IAH, EWR, ORD. También rentas en una sola dirección a SLP.</li>
</ul>
</section>

<div class="bg-gradient-to-r from-orange-100 to-yellow-100 border-2 border-orange-300 rounded-xl p-6 mb-8">
<h3 class="text-2xl font-bold mb-3 text-orange-900">Recibe el SLP semanal antes de tu viaje</h3>
<p class="text-orange-900 mb-4">Newsletter gratis los lunes con: eventos de la semana, aperturas de restaurantes, cambios de transporte y tips relevantes para visitantes. Lo leen 2,800+ personas incluyendo expats con base en Texas y viajeros del torneo.</p>
<p class="text-orange-900"><a href="/subscribe" class="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold px-6 py-3 rounded-lg">Suscríbete — gratis, toma 10 segundos</a></p>
</div>

<section class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Preguntas frecuentes</h2>

<details class="mb-4 border border-gray-200 rounded-lg p-4 bg-white" open>
  <summary class="font-bold text-gray-900 cursor-pointer">¿Hay vuelos directos de Texas a SLP?</summary>
  <p class="text-gray-700 mt-3">Sí. Volaris y American Airlines DFW↔SLP diario sin escalas (~2h 19m). United IAH↔SLP ~14 vuelos sin escalas semanales (~2h 1m).</p>
</details>

<details class="mb-4 border border-gray-200 rounded-lg p-4 bg-white" open>
  <summary class="font-bold text-gray-900 cursor-pointer">¿Cuánto cuesta el vuelo?</summary>
  <p class="text-gray-700 mt-3">Volaris fuera pico: $81–126 USD sencillo. American: $250–400 USD. United IAH: $200–350 USD. La ventana del torneo 2026 suma 30–50%.</p>
</details>

<details class="mb-4 border border-gray-200 rounded-lg p-4 bg-white">
  <summary class="font-bold text-gray-900 cursor-pointer">¿Por qué volar a SLP en vez de CDMX?</summary>
  <p class="text-gray-700 mt-3">Migración más rápida, tarifas hoteleras en baseline (vs +173% en CDMX) y SLP está prácticamente equidistante de las tres sedes mexicanas en auto.</p>
</details>

<details class="mb-4 border border-gray-200 rounded-lg p-4 bg-white">
  <summary class="font-bold text-gray-900 cursor-pointer">¿Cuánto dura el vuelo?</summary>
  <p class="text-gray-700 mt-3">DFW–SLP: ~2h 19m. IAH–SLP: ~2h 1m.</p>
</details>

<details class="mb-4 border border-gray-200 rounded-lg p-4 bg-white">
  <summary class="font-bold text-gray-900 cursor-pointer">¿Qué documentos necesito?</summary>
  <p class="text-gray-700 mt-3">Pasaporte estadounidense vigente. FMM permiso turista emitido a la llegada, gratis, válido hasta 180 días. Sin visa para ciudadanos EUA/Canadá/UE.</p>
</details>

<details class="mb-4 border border-gray-200 rounded-lg p-4 bg-white">
  <summary class="font-bold text-gray-900 cursor-pointer">¿Cómo llego del aeropuerto SLP a la ciudad?</summary>
  <p class="text-gray-700 mt-3">Taxi autorizado (tarifa fija): 350–450 MXN ($20–26 USD). Uber/DiDi: 200–280 MXN ($12–16 USD). ~25 km al Centro / Lomas.</p>
</details>
</section>

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
  tags: ['flights', 'texas-to-mexico', 'volaris', 'american-airlines', 'united', 'san-luis-potosi', 'mexico-2026', 'dfw', 'iah'],

  title: 'Direct Flights from Texas to San Luis Potosí (Dallas, Houston) — 2026 Guide',
  excerpt: 'Three nonstop routes connect Texas to San Luis Potosí: Volaris and American Airlines DFW↔SLP (~2h 19m daily), United IAH↔SLP (~2h 1m, 14×weekly). The smartest entry into central Mexico for 2026 tournament travelers — verified routes, fares, airport logistics.',
  content: contentEN,
  meta_title: 'Direct Flights Texas to San Luis Potosí 2026 — DFW & IAH',
  meta_description: 'Direct flights to SLP from Dallas (Volaris, American) and Houston (United): routes, fares, flight times, airport logistics. The smart entry to central Mexico for 2026.',

  title_es: 'Vuelos directos de Texas a San Luis Potosí (Dallas, Houston) — Guía 2026',
  excerpt_es: 'Tres rutas sin escalas conectan Texas con San Luis Potosí: Volaris y American Airlines DFW↔SLP (~2h 19m diario), United IAH↔SLP (~2h 1m, 14×semanal). La entrada más inteligente al centro de México para viajeros del torneo 2026.',
  content_es: contentES,
  meta_title_es: 'Vuelos directos Texas a SLP 2026 — DFW y IAH',
  meta_description_es: 'Vuelos directos a SLP desde Dallas (Volaris, American) y Houston (United): rutas, tarifas, tiempos, logística aeropuerto. Entrada inteligente al centro de México 2026.',

  title_de: 'Direktflüge von Texas nach San Luis Potosí (Dallas, Houston) — 2026 Guide',
  excerpt_de: 'Drei Direktflüge verbinden Texas mit San Luis Potosí: Volaris und American Airlines DFW↔SLP (~2h 19m täglich), United IAH↔SLP (~2h 1m, 14×wöchentlich). Cleverer Einstieg ins Zentralmexiko für 2026 Reisende.',
  content_de: contentEN,
  meta_title_de: 'Direktflüge Texas nach SLP 2026 — DFW & IAH',
  meta_description_de: 'Direktflüge nach SLP aus Dallas (Volaris, American) und Houston (United): Routen, Preise, Flugzeiten, Flughafen-Logistik. Smarter Einstieg Zentralmexiko 2026.',

  title_ja: 'テキサスからサン・ルイス・ポトシへの直行便（ダラス、ヒューストン）— 2026年ガイド',
  excerpt_ja: 'テキサスとサン・ルイス・ポトシを結ぶ3つの直行便：Volaris・American Airlines DFW↔SLP（毎日約2時間19分）、United IAH↔SLP（週14便、約2時間1分）。2026年大会の旅行者にとって中部メキシコへの最も賢い入口。',
  content_ja: contentEN,
  meta_title_ja: 'テキサスからSLPへ直行便 2026 — DFW＆IAH',
  meta_description_ja: 'ダラス（Volaris、American）とヒューストン（United）からSLPへの直行便：路線、料金、所要時間、空港情報。2026年中部メキシコへの賢い入口。',
};

async function main() {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    console.error('Missing Supabase env vars. Aborting.');
    process.exit(1);
  }

  const { data: existing } = await supabase
    .from('blog_posts')
    .select('id')
    .eq('slug', SLUG)
    .maybeSingle();

  if (existing) {
    const { error } = await supabase.from('blog_posts').update(post).eq('id', existing.id);
    if (error) { console.error('Update error:', error); process.exit(1); }
    console.log('Post updated:', existing.id);
  } else {
    const { data, error } = await supabase.from('blog_posts').insert(post).select('id').single();
    if (error) { console.error('Insert error:', error); process.exit(1); }
    console.log('Post inserted:', data.id);
  }
  console.log('View at: https://sanluisway.com/blog/' + SLUG);
}

main().then(() => process.exit(0)).catch((err) => { console.error('Fatal:', err); process.exit(1); });
