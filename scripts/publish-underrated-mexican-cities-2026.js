require('dotenv').config({ path: '.env' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const SLUG = '10-underrated-mexican-cities-to-visit-summer-2026';

const HERO = '/images/centro-historico/san-luis-potosi-cathedral.jpg';
const IMG_TANGAMANGA = '/images/parque-tangamanga/banner.jpg';
const IMG_HUASTECA = '/images/outdoors/huasteca-jungle.jpg';

const faqJsonLd = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why visit a non-host city in Mexico in summer 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hotel rates in the three Mexican host cities (Mexico City, Guadalajara, Monterrey) spiked 173%–333% during the tournament window, with some properties near Estadio Azteca quoted over 2,000% above baseline. Visiting a non-host city like San Luis Potosí or Querétaro lets you keep lodging affordable while still being within driving distance of matches — and gives you a more authentic Mexico than the tournament-dense host metros.'
      }
    },
    {
      '@type': 'Question',
      name: 'Which non-host city is the smartest base for visiting matches?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'San Luis Potosí. It is roughly equidistant from all three Mexican host cities (~4h to GDL, 4h 30m to CDMX, 5h 40m to MTY), has its own international airport with direct US flights from Texas, a UNESCO Centro Histórico, and hotel rates a fraction of the host cities. Querétaro is a strong second choice but more expensive.'
      }
    },
    {
      '@type': 'Question',
      name: 'Are these cities safe for foreign visitors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most are at US State Department Travel Advisory Level 2 (Exercise Increased Caution) — the same as France, the UK, or Italy. SLP, Querétaro, San Miguel de Allende, Guanajuato, Mérida, Oaxaca, Puebla, and Aguascalientes all sit in this category as of early 2026. Standard urban precautions apply. Always check the live State Department advisory before travel.'
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
      name: '¿Por qué visitar una ciudad no-sede en México en verano 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Las tarifas hoteleras en las tres sedes mexicanas (CDMX, Guadalajara, Monterrey) subieron 173%–333% durante la ventana del torneo, con algunas propiedades cerca del Estadio Azteca cotizando más de 2,000% arriba del baseline. Visitar una ciudad no-sede como San Luis Potosí o Querétaro te permite mantener el hospedaje accesible mientras sigues a distancia razonable de los partidos — y te da una experiencia mexicana más auténtica que las metrópolis saturadas por el torneo.'
      }
    },
    {
      '@type': 'Question',
      name: '¿Cuál ciudad no-sede es la base más inteligente para los partidos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'San Luis Potosí. Está prácticamente equidistante de las tres sedes (~4h a GDL, 4h 30m a CDMX, 5h 40m a MTY), tiene su propio aeropuerto internacional con vuelos directos desde Texas, un Centro Histórico UNESCO y tarifas de hospedaje a una fracción de las sedes. Querétaro es la segunda opción más fuerte pero más caro.'
      }
    },
    {
      '@type': 'Question',
      name: '¿Estas ciudades son seguras para visitantes extranjeros?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La mayoría están en Travel Advisory Nivel 2 del Departamento de Estado de EUA (Mayor Precaución) — el mismo que Francia, Reino Unido o Italia. SLP, Querétaro, San Miguel de Allende, Guanajuato, Mérida, Oaxaca, Puebla y Aguascalientes están en esta categoría a inicios de 2026. Aplican precauciones urbanas estándar. Siempre revisa el advisory en vivo antes de viajar.'
      }
    }
  ]
});

const cities = [
  {
    n: 1,
    name: 'San Luis Potosí',
    state: 'San Luis Potosí',
    pop: '~1.31M metro',
    why_en: 'Roughly equidistant from all three Mexican host cities (4h to GDL, 4h 30m to CDMX, 5h 40m to MTY). UNESCO Centro Histórico (Camino Real de Tierra Adentro), 411-hectare urban park, internationally-recognized food scene, direct flights from Dallas (Volaris/American) and Houston (United). Hotel rates a fraction of the host cities.',
    why_es: 'Prácticamente equidistante de las tres sedes mexicanas (4h a GDL, 4h 30m a CDMX, 5h 40m a MTY). Centro Histórico UNESCO (Camino Real de Tierra Adentro), parque urbano de 411 hectáreas, escena gastronómica reconocida internacionalmente, vuelos directos desde Dallas (Volaris/American) y Houston (United). Hospedaje a una fracción de las sedes.',
    do_en: 'Walk Centro Histórico, brunch on Av. Carranza, Parque Tangamanga, Huasteca Potosina day trip, Real de Catorce.',
    do_es: 'Camina Centro Histórico, brunch en Av. Carranza, Parque Tangamanga, day trip a Huasteca Potosina, Real de Catorce.',
    link: '/blog/mexico-2026-stopover-san-luis-potosi'
  },
  {
    n: 2,
    name: 'Querétaro',
    state: 'Querétaro',
    pop: '~1.59M metro',
    why_en: '2h 30m from Mexico City. UNESCO Centro Histórico. Major industrial hub with international population that supports good restaurants and infrastructure. Wine country day trip to Tequisquiapan and the Querétaro wine route.',
    why_es: '2h 30m de Ciudad de México. Centro Histórico UNESCO. Hub industrial mayor con población internacional que sostiene buenos restaurantes e infraestructura. Day trip a la zona vinícola de Tequisquiapan y la ruta del vino.',
    do_en: 'Centro Histórico walking tour, Acueducto, Cerro de las Campanas, wine route to Freixenet and La Redonda.',
    do_es: 'Caminata por Centro Histórico, Acueducto, Cerro de las Campanas, ruta del vino a Freixenet y La Redonda.',
    link: ''
  },
  {
    n: 3,
    name: 'San Miguel de Allende',
    state: 'Guanajuato',
    pop: '~175k',
    why_en: 'UNESCO Centro Histórico, named the World\'s Best City by Travel + Leisure in 2024 and 2025. Heavy expat presence (~10–15k). Boutique hotels, art galleries, world-class restaurants. More expensive than other entries on this list but unique.',
    why_es: 'Centro Histórico UNESCO, nombrada Mejor Ciudad del Mundo por Travel + Leisure en 2024 y 2025. Fuerte presencia expat (~10–15k). Hoteles boutique, galerías de arte, restaurantes de clase mundial. Más cara que otras opciones de esta lista pero única.',
    do_en: 'La Parroquia de San Miguel Arcángel, El Charco del Ingenio botanical garden, Fábrica La Aurora, hot springs at La Gruta.',
    do_es: 'La Parroquia de San Miguel Arcángel, jardín botánico El Charco del Ingenio, Fábrica La Aurora, aguas termales en La Gruta.',
    link: '/blog/san-luis-potosi-vs-san-miguel-allende-expats-2026'
  },
  {
    n: 4,
    name: 'Guanajuato',
    state: 'Guanajuato',
    pop: '~195k',
    why_en: 'UNESCO Centro Histórico in a colorful colonial silver-mining town built into a canyon. Famous underground tunnels (former rivers turned roads), Callejón del Beso, the mummies museum, and Cervantino festival in October.',
    why_es: 'Centro Histórico UNESCO en un colorido pueblo minero colonial construido en un cañón. Famosos túneles subterráneos (ex ríos convertidos en calles), Callejón del Beso, museo de las momias y festival Cervantino en octubre.',
    do_en: 'Funicular to Pípila monument, Teatro Juárez, Museo de las Momias, Universidad de Guanajuato steps, Mineral de Cata church.',
    do_es: 'Funicular al monumento al Pípila, Teatro Juárez, Museo de las Momias, escalinata de la Universidad, iglesia de Mineral de Cata.',
    link: ''
  },
  {
    n: 5,
    name: 'Aguascalientes',
    state: 'Aguascalientes',
    pop: '~1.06M metro',
    why_en: 'Underrated central Mexican city. Compact walkable Centro, low prices, easy day trip from SLP (~2h). Famous for the Feria Nacional de San Marcos every April–May (one of Mexico\'s largest fairs).',
    why_es: 'Ciudad mexicana del centro infravalorada. Centro compacto caminable, precios bajos, day trip fácil desde SLP (~2h). Famosa por la Feria Nacional de San Marcos cada abril–mayo (una de las ferias más grandes de México).',
    do_en: 'Catedral de Nuestra Señora de la Asunción, Museo Nacional de la Muerte, Plaza Patria, Jardín de San Marcos.',
    do_es: 'Catedral de Nuestra Señora de la Asunción, Museo Nacional de la Muerte, Plaza Patria, Jardín de San Marcos.',
    link: ''
  },
  {
    n: 6,
    name: 'Puebla',
    state: 'Puebla',
    pop: '~3.2M metro',
    why_en: '2h drive from Mexico City. UNESCO Centro Histórico. Mexican gastronomy capital — birthplace of mole poblano, chiles en nogada, and cemitas. Talavera pottery. Easy day trips to Cholula (largest pyramid by volume) and Atlixco.',
    why_es: '2h en auto desde Ciudad de México. Centro Histórico UNESCO. Capital gastronómica mexicana — cuna del mole poblano, chiles en nogada y cemitas. Talavera. Day trips fáciles a Cholula (pirámide más grande por volumen) y Atlixco.',
    do_en: 'Catedral de Puebla, Capilla del Rosario, Fuerte de Loreto y Guadalupe, Talavera Uriarte workshop, Cholula pyramid.',
    do_es: 'Catedral de Puebla, Capilla del Rosario, Fuerte de Loreto y Guadalupe, taller Talavera Uriarte, pirámide de Cholula.',
    link: ''
  },
  {
    n: 7,
    name: 'Oaxaca',
    state: 'Oaxaca',
    pop: '~715k metro',
    view: 'Worth the flight from CDMX',
    why_en: 'UNESCO Centro Histórico. Best food destination in Mexico for many travelers — mole, mezcal, tlayudas, chapulines. Indigenous Zapotec and Mixtec heritage. Monte Albán pyramids 30 minutes away. Hierve el Agua mineral springs day trip.',
    why_es: 'Centro Histórico UNESCO. El mejor destino gastronómico de México para muchos viajeros — moles, mezcal, tlayudas, chapulines. Patrimonio zapoteco y mixteco. Pirámides de Monte Albán a 30 minutos. Day trip a las aguas minerales de Hierve el Agua.',
    do_en: 'Templo de Santo Domingo, Mercado Benito Juárez, Monte Albán, mezcal route, Hierve el Agua.',
    do_es: 'Templo de Santo Domingo, Mercado Benito Juárez, Monte Albán, ruta del mezcal, Hierve el Agua.',
    link: ''
  },
  {
    n: 8,
    name: 'Mérida',
    state: 'Yucatán',
    pop: '~1.32M metro',
    why_en: 'Capital of Yucatán, gateway to Chichén Itzá and Uxmal Mayan ruins. Consistently ranked one of the safest cities in Mexico. Colonial architecture, vibrant food scene (cochinita pibil, sopa de lima, panuchos), and strong expat community.',
    why_es: 'Capital de Yucatán, puerta a las ruinas mayas de Chichén Itzá y Uxmal. Consistentemente clasificada entre las ciudades más seguras de México. Arquitectura colonial, escena gastronómica vibrante (cochinita pibil, sopa de lima, panuchos) y fuerte comunidad expat.',
    do_en: 'Plaza Grande, Catedral de San Ildefonso, Paseo de Montejo, Mercado Lucas de Gálvez, day trip to Chichén Itzá or Uxmal.',
    do_es: 'Plaza Grande, Catedral de San Ildefonso, Paseo de Montejo, Mercado Lucas de Gálvez, day trip a Chichén Itzá o Uxmal.',
    link: ''
  },
  {
    n: 9,
    name: 'Morelia',
    state: 'Michoacán',
    pop: '~1.0M metro',
    why_en: 'UNESCO Centro Histórico built almost entirely in pink cantera stone. Often called Mexico\'s most beautiful colonial city. Acueducto, candy market, Catedral. Easy day trips to Pátzcuaro and the monarch butterfly biosphere reserve in winter.',
    why_es: 'Centro Histórico UNESCO construido casi enteramente en cantera rosa. Frecuentemente llamada la ciudad colonial más bella de México. Acueducto, mercado de dulces, Catedral. Day trips fáciles a Pátzcuaro y a la reserva de la biosfera de la mariposa monarca en invierno.',
    do_en: 'Centro Histórico walking tour, Acueducto, Catedral, Casa de Morelos, Mercado de Dulces y Artesanías.',
    do_es: 'Caminata por Centro Histórico, Acueducto, Catedral, Casa de Morelos, Mercado de Dulces y Artesanías.',
    link: ''
  },
  {
    n: 10,
    name: 'Real de Catorce',
    state: 'San Luis Potosí',
    pop: '~1k',
    why_en: 'Pueblo Mágico in the high desert at 2,750 m elevation, ~3h from SLP. Former silver-mining boomtown turned ghost town. Cobblestone streets, rugged Wirikuta sacred desert, churches that draw pilgrims. Perfect for travelers wanting a "secret Mexico" experience.',
    why_es: 'Pueblo Mágico en el alto desierto a 2,750 m de altitud, ~3h desde SLP. Ex pueblo minero de plata convertido en pueblo fantasma. Calles empedradas, Wirikuta sagrado, iglesias que atraen peregrinos. Perfecto para viajeros que buscan un "México secreto".',
    do_en: 'Cañón de Boquillas via mule trail, Templo de la Purísima Concepción, Casa de la Moneda, Wirikuta.',
    do_es: 'Cañón de Boquillas en mula, Templo de la Purísima Concepción, Casa de la Moneda, Wirikuta.',
    link: ''
  }
];

function renderCityEN(c) {
  const profileLink = c.link ? `<p class="text-gray-700 mb-3"><a href="${c.link}" class="text-blue-600 underline font-medium">→ Read our full guide on ${c.name}</a></p>` : '';
  return `<div class="bg-white border-2 border-gray-200 rounded-xl p-6 mb-6 shadow-sm">
    <h3 class="text-2xl font-bold mb-2 text-gray-900">${c.n}. ${c.name} <span class="text-sm font-normal text-gray-500">— ${c.state}, pop. ${c.pop}</span></h3>
    <p class="text-gray-700 mb-3"><strong>Why visit:</strong> ${c.why_en}</p>
    <p class="text-gray-700 mb-3"><strong>What to do:</strong> ${c.do_en}</p>
    ${profileLink}
  </div>`;
}

function renderCityES(c) {
  const profileLink = c.link ? `<p class="text-gray-700 mb-3"><a href="${c.link}" class="text-blue-600 underline font-medium">→ Lee nuestra guía completa de ${c.name}</a></p>` : '';
  return `<div class="bg-white border-2 border-gray-200 rounded-xl p-6 mb-6 shadow-sm">
    <h3 class="text-2xl font-bold mb-2 text-gray-900">${c.n}. ${c.name} <span class="text-sm font-normal text-gray-500">— ${c.state}, pob. ${c.pop}</span></h3>
    <p class="text-gray-700 mb-3"><strong>Por qué visitar:</strong> ${c.why_es}</p>
    <p class="text-gray-700 mb-3"><strong>Qué hacer:</strong> ${c.do_es}</p>
    ${profileLink}
  </div>`;
}

const contentEN = `<div class="prose prose-lg max-w-none">

<div class="mb-8">
<img src="${HERO}" alt="San Luis Potosí Cathedral — the #1 underrated Mexican city for summer 2026 visitors" class="w-full rounded-xl shadow-2xl" />
</div>

<div class="bg-gradient-to-r from-orange-50 to-yellow-50 border-2 border-orange-200 rounded-xl p-6 mb-8">
  <div class="text-xs font-bold uppercase tracking-wide text-orange-700 mb-2">⚽ Mexico 2026 — Smart Travel Picks · Verified April 2026</div>
  <p class="text-lg font-bold text-gray-900 mb-2">If you are visiting Mexico for the 2026 tournament, the host cities are not your only option — and probably not your best one.</p>
  <p class="text-gray-700">Hotel rates in Mexico City, Guadalajara, and Monterrey jumped 173%–333% for the tournament window. These 10 non-host cities give you authentic Mexico at sane prices, and most are within driving distance of at least one match.</p>
</div>

<div class="bg-blue-50 p-6 rounded-lg mb-8">
  <h3 class="text-xl font-bold mb-4 text-blue-900">The Bottom Line</h3>
  <ul class="list-disc pl-6 space-y-2 text-blue-900">
    <li><strong>The host cities will be expensive and chaotic.</strong> Average hotel rates +173% to +333%, near-stadium properties up to +2,000%.</li>
    <li><strong>Most travelers do not need to stay in a host city to attend a match.</strong> Drive in for the day or take a 1-night stay.</li>
    <li><strong>The 10 cities below let you experience Mexico beyond the tournament — at fair prices, with character intact.</strong></li>
    <li><strong>#1 pick:</strong> San Luis Potosí. Geographically central, has its own international airport with US direct flights, UNESCO Centro Histórico.</li>
  </ul>
</div>

<section class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">The 10 Underrated Mexican Cities for Summer 2026</h2>

${cities.map(renderCityEN).join('\n')}

</section>

<div class="mb-8">
<img src="${IMG_TANGAMANGA}" alt="Parque Tangamanga in San Luis Potosí — 411 hectares of urban park free to enter" class="w-full rounded-xl shadow-lg" />
</div>

<section class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">How to Choose Your Base</h2>

<p class="text-gray-700 mb-6">Three quick filters to pick from the list above:</p>

<ul class="list-disc pl-6 mb-6 text-gray-700 space-y-2">
  <li><strong>Going to multiple matches in different host cities?</strong> San Luis Potosí — central position, own airport.</li>
  <li><strong>Mostly Mexico City matches but want to escape the chaos?</strong> Querétaro (2h 30m), Puebla (2h), or San Miguel de Allende (3h 30m).</li>
  <li><strong>Going to Guadalajara matches?</strong> Day-trip from SLP (4h) or Aguascalientes (2h 30m).</li>
  <li><strong>Going to Monterrey matches?</strong> SLP is the closest non-host (5h 40m). MTY itself is the most car-dependent of the three host cities, so a base in SLP makes match-day rentals easier.</li>
  <li><strong>Want pure cultural Mexico, no tournament concern?</strong> Oaxaca or Mérida — fly in.</li>
</ul>
</section>

<div class="bg-gradient-to-r from-orange-100 to-yellow-100 border-2 border-orange-300 rounded-xl p-6 mb-8">
<h3 class="text-2xl font-bold mb-3 text-orange-900">Get the SLP weekly during the 2026 summer</h3>
<p class="text-orange-900 mb-4">Free Monday newsletter with: this week's events, restaurant openings, transport changes, weather. Used by 2,800+ readers including travel writers and visitors planning their Mexico trips.</p>
<p class="text-orange-900"><a href="/subscribe" class="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold px-6 py-3 rounded-lg">Subscribe — free, takes 10 seconds</a></p>
</div>

<section class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">FAQ</h2>

<details class="mb-4 border border-gray-200 rounded-lg p-4 bg-white" open>
  <summary class="font-bold text-gray-900 cursor-pointer">Why visit a non-host city in Mexico in summer 2026?</summary>
  <p class="text-gray-700 mt-3">Hotel rates in CDMX, GDL, and MTY jumped 173%–333% for the tournament. Non-host cities offer authentic Mexico at fair prices.</p>
</details>

<details class="mb-4 border border-gray-200 rounded-lg p-4 bg-white" open>
  <summary class="font-bold text-gray-900 cursor-pointer">Which non-host city is the smartest base?</summary>
  <p class="text-gray-700 mt-3">San Luis Potosí — central position, own airport with US direct flights, UNESCO Centro, hotels at fair rates.</p>
</details>

<details class="mb-4 border border-gray-200 rounded-lg p-4 bg-white">
  <summary class="font-bold text-gray-900 cursor-pointer">Are these cities safe?</summary>
  <p class="text-gray-700 mt-3">Most are at US State Department Travel Advisory Level 2 (same as France or the UK) as of early 2026. Standard urban precautions apply. Check the live advisory before travel.</p>
</details>
</section>

<script type="application/ld+json">
${faqJsonLd}
</script>

</div>`;

const contentES = `<div class="prose prose-lg max-w-none">

<div class="mb-8">
<img src="${HERO}" alt="Catedral de San Luis Potosí — la ciudad mexicana #1 infravalorada para visitantes en verano 2026" class="w-full rounded-xl shadow-2xl" />
</div>

<div class="bg-gradient-to-r from-orange-50 to-yellow-50 border-2 border-orange-200 rounded-xl p-6 mb-8">
  <div class="text-xs font-bold uppercase tracking-wide text-orange-700 mb-2">⚽ México 2026 — Picks de viaje inteligentes · Verificado en abril 2026</div>
  <p class="text-lg font-bold text-gray-900 mb-2">Si visitas México para el torneo 2026, las sedes no son tu única opción — y probablemente no son la mejor.</p>
  <p class="text-gray-700">Las tarifas de hotel en CDMX, Guadalajara y Monterrey saltaron 173%–333% para la ventana del torneo. Estas 10 ciudades no-sede te dan México auténtico a precios cuerdos, y la mayoría están en distancia de manejo de al menos un partido.</p>
</div>

<div class="bg-blue-50 p-6 rounded-lg mb-8">
  <h3 class="text-xl font-bold mb-4 text-blue-900">El Resumen</h3>
  <ul class="list-disc pl-6 space-y-2 text-blue-900">
    <li><strong>Las sedes van a estar caras y caóticas.</strong> Tarifas promedio +173% a +333%, propiedades cerca de estadios hasta +2,000%.</li>
    <li><strong>La mayoría de viajeros no necesitan hospedarse en sede para ir a un partido.</strong> Maneja para el día o toma una sola noche.</li>
    <li><strong>Las 10 ciudades de abajo te dejan vivir México más allá del torneo — a precios justos, con carácter intacto.</strong></li>
    <li><strong>#1:</strong> San Luis Potosí. Centro geográfico, aeropuerto propio con vuelos directos desde EUA, Centro Histórico UNESCO.</li>
  </ul>
</div>

<section class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Las 10 ciudades mexicanas infravaloradas para verano 2026</h2>

${cities.map(renderCityES).join('\n')}

</section>

<div class="mb-8">
<img src="${IMG_TANGAMANGA}" alt="Parque Tangamanga en San Luis Potosí — 411 hectáreas de parque urbano de entrada gratis" class="w-full rounded-xl shadow-lg" />
</div>

<section class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Cómo elegir tu base</h2>

<p class="text-gray-700 mb-6">Tres filtros rápidos para escoger de la lista de arriba:</p>

<ul class="list-disc pl-6 mb-6 text-gray-700 space-y-2">
  <li><strong>¿Vas a múltiples partidos en diferentes sedes?</strong> San Luis Potosí — posición central, aeropuerto propio.</li>
  <li><strong>¿Mayormente partidos en CDMX pero quieres escapar del caos?</strong> Querétaro (2h 30m), Puebla (2h) o San Miguel de Allende (3h 30m).</li>
  <li><strong>¿Vas a partidos en Guadalajara?</strong> Day trip desde SLP (4h) o Aguascalientes (2h 30m).</li>
  <li><strong>¿Vas a partidos en Monterrey?</strong> SLP es la no-sede más cercana (5h 40m). MTY es la sede más dependiente del auto, así que una base en SLP facilita las rentas día de partido.</li>
  <li><strong>¿Quieres México cultural puro, sin pensar en el torneo?</strong> Oaxaca o Mérida — vuela.</li>
</ul>
</section>

<div class="bg-gradient-to-r from-orange-100 to-yellow-100 border-2 border-orange-300 rounded-xl p-6 mb-8">
<h3 class="text-2xl font-bold mb-3 text-orange-900">Recibe el SLP semanal durante el verano 2026</h3>
<p class="text-orange-900 mb-4">Newsletter gratis los lunes con: eventos de la semana, aperturas de restaurantes, cambios de transporte, clima. Lo leen 2,800+ personas incluyendo periodistas de viajes y visitantes planeando sus viajes a México.</p>
<p class="text-orange-900"><a href="/subscribe" class="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold px-6 py-3 rounded-lg">Suscríbete — gratis, toma 10 segundos</a></p>
</div>

<section class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Preguntas frecuentes</h2>

<details class="mb-4 border border-gray-200 rounded-lg p-4 bg-white" open>
  <summary class="font-bold text-gray-900 cursor-pointer">¿Por qué visitar una ciudad no-sede en México en verano 2026?</summary>
  <p class="text-gray-700 mt-3">Las tarifas en CDMX, GDL y MTY saltaron 173%–333% para el torneo. Las ciudades no-sede ofrecen México auténtico a precios justos.</p>
</details>

<details class="mb-4 border border-gray-200 rounded-lg p-4 bg-white" open>
  <summary class="font-bold text-gray-900 cursor-pointer">¿Cuál ciudad no-sede es la base más inteligente?</summary>
  <p class="text-gray-700 mt-3">San Luis Potosí — posición central, aeropuerto propio con vuelos directos desde EUA, Centro UNESCO, hoteles a tarifas justas.</p>
</details>

<details class="mb-4 border border-gray-200 rounded-lg p-4 bg-white">
  <summary class="font-bold text-gray-900 cursor-pointer">¿Estas ciudades son seguras?</summary>
  <p class="text-gray-700 mt-3">La mayoría están en Travel Advisory Nivel 2 del Departamento de Estado de EUA (igual que Francia o Reino Unido) a inicios de 2026. Aplican precauciones urbanas estándar. Revisa el advisory en vivo antes de viajar.</p>
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
  tags: ['mexico-travel', 'underrated-cities', 'mexico-2026', 'travel-mexico', 'colonial-cities', 'unesco', 'san-luis-potosi'],

  title: '10 Underrated Mexican Cities to Visit in Summer 2026 (Beyond the Host Cities)',
  excerpt: 'Hotel rates in Mexico\'s host cities jumped 173%–333% for the 2026 tournament. These 10 non-host cities — led by San Luis Potosí — give you authentic Mexico at sane prices, most within driving distance of a match.',
  content: contentEN,
  meta_title: '10 Underrated Mexican Cities for Summer 2026 (Beyond Host Cities)',
  meta_description: 'Skip the tournament-inflated host cities. 10 non-host Mexican cities ranked for summer 2026 visitors — UNESCO heritage, food, fair hotel prices.',

  title_es: '10 ciudades mexicanas infravaloradas para visitar en verano 2026 (más allá de las sedes)',
  excerpt_es: 'Las tarifas de hotel en las sedes mexicanas saltaron 173%–333% para el torneo 2026. Estas 10 ciudades no-sede — encabezadas por San Luis Potosí — te dan México auténtico a precios cuerdos.',
  content_es: contentES,
  meta_title_es: '10 ciudades infravaloradas de México para verano 2026',
  meta_description_es: 'Evita las sedes infladas por el torneo. 10 ciudades mexicanas no-sede para verano 2026 — patrimonio UNESCO, gastronomía, hospedaje justo.',

  title_de: '10 unterschätzte mexikanische Städte für den Sommer 2026 (jenseits der Gastgeberstädte)',
  excerpt_de: 'Hotelpreise in Mexikos Gastgeberstädten stiegen für 2026 um 173%–333%. Diese 10 Nicht-Gastgeber-Städte — angeführt von San Luis Potosí — bieten authentisches Mexiko zu fairen Preisen.',
  content_de: contentEN,
  meta_title_de: '10 unterschätzte Städte Mexikos · Sommer 2026',
  meta_description_de: 'Tournament-aufgeblähte Gastgeberstädte vermeiden. 10 mexikanische Nicht-Gastgeber-Städte für Sommer 2026 — UNESCO, Essen, faire Hotels.',

  title_ja: '2026年夏に訪れる過小評価されたメキシコ10都市（開催都市を超えて）',
  excerpt_ja: 'メキシコの開催都市のホテル料金は2026年大会で173%～333%急騰しました。サン・ルイス・ポトシを筆頭とするこれらの10の非開催都市は、適正価格で本物のメキシコを提供します。',
  content_ja: contentEN,
  meta_title_ja: '2026年夏 メキシコの過小評価10都市',
  meta_description_ja: '大会で価格高騰の開催都市を回避。2026年夏向けメキシコ10都市 — ユネスコ、グルメ、適正価格のホテル。',
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
