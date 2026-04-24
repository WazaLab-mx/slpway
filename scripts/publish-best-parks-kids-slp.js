require('dotenv').config({ path: '.env' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const SLUG = 'best-parks-for-kids-san-luis-potosi';

const IMG = {
  hero: '/images/parque-tangamanga/banner.jpg',
  biodiversity: '/images/parque-tangamanga/biodiversity.jpg',
  family: '/images/parque-tangamanga/activities-family.jpg',
  lake: '/images/parque-tangamanga/lake.jpg',
  sports: '/images/parque-tangamanga/sports.jpg',
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which park in San Luis Potosí is best for toddlers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Parque Tangamanga I has a dedicated kids zone (Zona Kids) with age-appropriate playground equipment for children as young as two, plus the thematic "Cri-Cri" children\'s park. The terrain is flat, stroller-friendly, and shaded. For a quieter option with fewer crowds, the Alameda Juan Sarabia in the historic center is fenced, walkable and surrounded by cafes.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is Parque Tangamanga free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. General admission to Parque Tangamanga I and II is free. The zoo, botanical garden, Japanese garden, Laberinto de las Ciencias (inside the park) and main playground areas are also free. The Planetarium and the Splash/Dinoasis water park charge separate fees (typically $20–50 MXN for the planetarium and around $200 MXN for children at Dinoasis).'
      }
    },
    {
      '@type': 'Question',
      name: 'What time does Parque Tangamanga open?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Parque Tangamanga I opens every day at 5:00 AM. Closing times vary: Mondays close early at 11:00 AM for maintenance, Tuesday through Saturday it stays open until 10:30 PM (last entry 9:30 PM), and Sunday closes at 6:00 PM (last entry 5:30 PM). The zoo inside the park runs Tuesday to Sunday, 10:00 AM to 5:00 PM.'
      }
    },
    {
      '@type': 'Question',
      name: 'Where can kids swim in San Luis Potosí?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Inside the city, the Dinoasis water park (formerly Splash) at Tangamanga I is the main option, with wave pools, children\'s slides and shallow splash areas. For a more traditional balneario experience, Parque Acuático Gogorrón (45 min south of SLP) offers thermal-water pools, three slides and shallow chapoteaderos designed for small children.'
      }
    },
    {
      '@type': 'Question',
      name: 'What are the best indoor kids activities in San Luis Potosí?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Museo Laberinto de las Ciencias y las Artes is the top pick — a fully interactive science and arts museum with a 3D theater, hands-on physics and biology exhibits, and an entry fee around $50 MXN for adults, $40 MXN for kids 4-5, and free under 3. The Planetario del Parque Tangamanga I is also excellent for rainy or hot afternoons. Indoor play options include Kidiverso (trampolines and ball pits) and Stardust Park (space-themed brincolines).'
      }
    },
    {
      '@type': 'Question',
      name: 'Are there parks with splash pads in SLP?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The Dinoasis/Splash water park inside Parque Tangamanga I is the main splash-pad and water-play facility within city limits. It features dedicated toddler-height fountains, shallow pools and kid-specific slides. Seasonal operation typically runs Semana Santa through early fall. For free water play, some municipal plazas (including the Plaza de Armas area during summer events) occasionally set up temporary fountain zones for families.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is San Luis Potosí safe for families with children?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'San Luis Potosí capital is considered one of the safer state capitals in central Mexico. Tangamanga I and II, Alameda Juan Sarabia and the Centro Histórico have a strong municipal police presence during the day and are comfortable for families. Standard precautions apply: stay on the main paths, keep valuables out of sight, and avoid isolated zones after dark.'
      }
    },
    {
      '@type': 'Question',
      name: 'How much does parking cost at Parque Tangamanga?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Multiple free parking lots are available around the perimeter of Tangamanga I (Puerta 1 through Puerta 8) and Tangamanga II. Parking is first-come, first-served and fills up quickly on Sunday mornings. Arrive before 9:00 AM or after 4:00 PM on weekends for the easiest experience.'
      }
    }
  ]
};

const contentEN = `<div class="prose prose-lg max-w-none">

<div class="mb-8">
<img src="${IMG.hero}" alt="Best parks for kids in San Luis Potosí — Parque Tangamanga family guide" class="w-full rounded-xl shadow-2xl" />
</div>

<div class="bg-yellow-50 p-6 rounded-lg mb-8">
  <h3 class="text-xl font-bold mb-4 text-gray-900">Table of Contents</h3>
  <ul class="list-disc pl-6">
    <li><a href="#introduction" class="text-blue-600 hover:text-blue-800">Why SLP is Great for Kids</a></li>
    <li><a href="#quick-picks" class="text-blue-600 hover:text-blue-800">Quick-Pick Table: Top 7 Parks</a></li>
    <li><a href="#tangamanga" class="text-blue-600 hover:text-blue-800">Parque Tangamanga I and II: Full Guide</a></li>
    <li><a href="#other-parks" class="text-blue-600 hover:text-blue-800">Other Parks Worth Visiting</a></li>
    <li><a href="#water-play" class="text-blue-600 hover:text-blue-800">Splash Pads and Water Play</a></li>
    <li><a href="#indoor" class="text-blue-600 hover:text-blue-800">Indoor Spaces for Hot or Rainy Days</a></li>
    <li><a href="#by-age" class="text-blue-600 hover:text-blue-800">Age-by-Age Recommendations</a></li>
    <li><a href="#tips" class="text-blue-600 hover:text-blue-800">Practical Tips: Altitude, Shade, Strollers</a></li>
    <li><a href="#free-vs-paid" class="text-blue-600 hover:text-blue-800">Free vs. Paid Comparison</a></li>
    <li><a href="#safety" class="text-blue-600 hover:text-blue-800">Safety and Parent Reviews</a></li>
    <li><a href="#getting-there" class="text-blue-600 hover:text-blue-800">How to Get There</a></li>
    <li><a href="#faq" class="text-blue-600 hover:text-blue-800">FAQ</a></li>
  </ul>
</div>

<div class="bg-blue-50 p-6 rounded-lg mb-8">
  <h3 class="text-xl font-bold mb-4 text-blue-900">Key Takeaways</h3>
  <ul class="list-disc pl-6 space-y-2 text-blue-900">
    <li><strong>Best overall:</strong> Parque Tangamanga I — 411 hectares, free entry, zoo, playgrounds, lake, and a dedicated Zona Kids for ages 2–12.</li>
    <li><strong>Best for toddlers:</strong> Alameda Juan Sarabia in the historic center — shaded, flat, fenced, stroller-friendly.</li>
    <li><strong>Best for active kids:</strong> Parque Tangamanga II — less crowded, wide bike paths, sports courts.</li>
    <li><strong>Best rainy-day indoor pick:</strong> Museo Laberinto de las Ciencias y las Artes — interactive, 3D theater, $50 MXN adults.</li>
    <li><strong>Best for swimming:</strong> Dinoasis (formerly Splash) inside Tangamanga I — wave pool and toddler zones.</li>
    <li><strong>Bottom line:</strong> San Luis Potosí has more free, high-quality family green space per capita than any other Bajío city — and nearly everything is walkable or a short Uber from the center.</li>
  </ul>
</div>

<section id="introduction" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Why San Luis Potosí is Great for Kids</h2>

<p class="text-gray-700 mb-6"><strong>If you are searching "best parks for kids near me" and you live in or are visiting San Luis Potosí (SLP), you are in one of the luckiest family cities in central Mexico.</strong> The capital sits at 1,863 m (6,112 ft) above sea level, which means spring-like weather year-round, low mosquito counts, and long outdoor days. More importantly, SLP has invested heavily in urban green space: Parque Tangamanga I alone is the second-largest urban park in Mexico at 411 hectares — bigger than New York's Central Park.</p>

<p class="text-gray-700 mb-6">This guide covers every park where kids can actually play safely: the giant flagships (Tangamanga I and II), the historic plazas with playgrounds, the water-play options, and the indoor backups for the handful of rainy or 30°C afternoons. We verified hours, entry fees and amenities in April 2026, and flagged anything that may change.</p>

<p class="text-gray-700 mb-6">For a broader look at things to do with kids beyond parks, see our main <a href="/family-friendly-activities" class="text-blue-600 underline font-medium">family-friendly activities in SLP</a> guide and the <a href="/resources/family-guide" class="text-blue-600 underline font-medium">expat family guide</a>.</p>
</section>

<section id="quick-picks" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Quick-Pick Table: Top 7 Parks for Kids in San Luis Potosí</h2>

<div class="overflow-x-auto mb-8">
  <table class="min-w-full bg-white border-2 border-gray-200 rounded-lg shadow-lg">
    <thead style="background: linear-gradient(to right, #059669, #0d9488);">
      <tr>
        <th class="px-4 py-3 text-left text-xs font-bold text-white uppercase">Park</th>
        <th class="px-4 py-3 text-center text-xs font-bold text-white uppercase">Best for Age</th>
        <th class="px-4 py-3 text-center text-xs font-bold text-white uppercase">Hours</th>
        <th class="px-4 py-3 text-center text-xs font-bold text-white uppercase">Cost</th>
        <th class="px-4 py-3 text-left text-xs font-bold text-white uppercase">Standout Feature</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-200 text-sm">
      <tr><td class="px-4 py-3 font-semibold">Parque Tangamanga I</td><td class="px-4 py-3 text-center">2–12</td><td class="px-4 py-3 text-center">Tue–Sat 5am–10:30pm; Sun 5am–6pm</td><td class="px-4 py-3 text-center text-green-600 font-bold">Free</td><td class="px-4 py-3">Zoo, lake, Zona Kids, planetarium</td></tr>
      <tr class="bg-gray-50"><td class="px-4 py-3 font-semibold">Parque Tangamanga II</td><td class="px-4 py-3 text-center">5–14</td><td class="px-4 py-3 text-center">Tue–Sun 6am–8pm</td><td class="px-4 py-3 text-center text-green-600 font-bold">Free</td><td class="px-4 py-3">Bike paths, sports courts, less crowded</td></tr>
      <tr><td class="px-4 py-3 font-semibold">Alameda Juan Sarabia</td><td class="px-4 py-3 text-center">0–6</td><td class="px-4 py-3 text-center">Open 24/7</td><td class="px-4 py-3 text-center text-green-600 font-bold">Free</td><td class="px-4 py-3">Historic, shaded, stroller-perfect</td></tr>
      <tr class="bg-gray-50"><td class="px-4 py-3 font-semibold">Parque Juan H. Sánchez (Morales)</td><td class="px-4 py-3 text-center">4–10</td><td class="px-4 py-3 text-center">6am–10pm</td><td class="px-4 py-3 text-center text-green-600 font-bold">Free</td><td class="px-4 py-3">100-yr-old shade trees, under renovation</td></tr>
      <tr><td class="px-4 py-3 font-semibold">Dinoasis (Splash) water park</td><td class="px-4 py-3 text-center">3–14</td><td class="px-4 py-3 text-center">Seasonal 10am–6pm</td><td class="px-4 py-3 text-center">~$200 MXN kids</td><td class="px-4 py-3">Wave pool + toddler splash zone</td></tr>
      <tr class="bg-gray-50"><td class="px-4 py-3 font-semibold">Museo Laberinto (indoor)</td><td class="px-4 py-3 text-center">4–14</td><td class="px-4 py-3 text-center">Tue–Fri 9–16; Sat–Sun 11–19</td><td class="px-4 py-3 text-center">$50 MXN adult / $40 child</td><td class="px-4 py-3">Hands-on science + 3D theater</td></tr>
      <tr><td class="px-4 py-3 font-semibold">Kidiverso (indoor)</td><td class="px-4 py-3 text-center">2–12</td><td class="px-4 py-3 text-center">Daily 10am–9pm</td><td class="px-4 py-3 text-center">~$180–250 MXN</td><td class="px-4 py-3">Trampolines, ball pit, party venue</td></tr>
    </tbody>
  </table>
</div>

<div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
<p class="text-yellow-800"><strong>Verification note:</strong> Hours and prices confirmed in April 2026 via the municipal government of San Luis Potosí and the official Museo Laberinto site. The 2026 Tangamanga fee update only affects sports-facility rentals (soccer/basketball court rental $170 MXN / 2 hrs; high-performance gym $470 MXN/month). Park entry remains free.</p>
</div>
</section>

<section id="tangamanga" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Parque Tangamanga I and II: The Deep Dive</h2>

<div class="mb-8">
<img src="${IMG.family}" alt="Families enjoying Parque Tangamanga I in San Luis Potosí" class="w-full rounded-xl shadow-lg" />
</div>

<h3 class="text-2xl font-bold mb-4 text-gray-900">Parque Tangamanga I — The Flagship</h3>

<p class="text-gray-700 mb-6"><strong>Parque Tangamanga I covers 411 hectares (1,016 acres) in the southwestern part of the city</strong> and is widely considered the second-largest urban park in Mexico. It combines a free zoo, a planetarium, a seasonal water park, an interactive science museum, a lake, a Japanese garden, a botanical garden, an amphitheater, 14 kilometers of jogging and biking paths, and — most importantly for families — dedicated children's zones with modern equipment.</p>

<p class="text-gray-700 mb-6"><strong>The "Zona Kids"</strong> is a recently expanded area with age-graded playground equipment suitable for children from 2 to roughly 12 years old. Surfaces are shock-absorbing rubber, equipment is shaded in most sections, and benches are spaced around the perimeter for parents. Adjacent to Zona Kids is the thematic <strong>Parque Cri-Cri</strong> — a charming zone designed around characters from Francisco Gabilondo Soler's children's songs, much loved by Mexican kids.</p>

<h4 class="text-xl font-bold mb-3 text-gray-900">Hours (confirmed April 2026)</h4>
<ul class="list-disc pl-6 mb-6 text-gray-700">
  <li><strong>Monday:</strong> 5:00 AM – 11:00 AM (maintenance; last entry 10:30 AM)</li>
  <li><strong>Tuesday–Saturday:</strong> 5:00 AM – 10:30 PM (last entry 9:30 PM)</li>
  <li><strong>Sunday:</strong> 5:00 AM – 6:00 PM (last entry 5:30 PM)</li>
  <li><strong>Zoo:</strong> Tuesday–Sunday, 10:00 AM – 5:00 PM (closed Mondays)</li>
</ul>

<h4 class="text-xl font-bold mb-3 text-gray-900">Entrance costs</h4>
<p class="text-gray-700 mb-4">General entry to the park, zoo, Laberinto de las Ciencias and gardens is <strong>free of charge</strong>. Paid attractions inside the park:</p>
<ul class="list-disc pl-6 mb-6 text-gray-700">
  <li><strong>Planetarium:</strong> typically $20–50 MXN per person</li>
  <li><strong>Dinoasis water park</strong> (formerly Splash): approximately $200 MXN per child (seasonal — usually Semana Santa through early fall)</li>
  <li><strong>Bike rental:</strong> around $40–80 MXN per hour depending on size and helmet package</li>
  <li><strong>Paddle boat on the lake:</strong> approximately $60–100 MXN for 30 minutes</li>
  <li><strong>Sports court rental (2026 update):</strong> $170 MXN / 2 hrs for soccer, basketball and volleyball courts</li>
</ul>

<div class="mb-8">
<img src="${IMG.lake}" alt="Lake at Parque Tangamanga I with paddle boats" class="w-full rounded-xl shadow-lg" />
</div>

<h4 class="text-xl font-bold mb-3 text-gray-900">What to do with kids at Tangamanga I</h4>
<ol class="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
  <li><strong>Start at Puerta 1 or 7</strong> (main entrances) — these are closest to the playground and zoo.</li>
  <li><strong>Visit the zoo early.</strong> Animals are most active 10–11 AM before the afternoon heat.</li>
  <li><strong>Ride paddle boats on the lake</strong> — kids must wear life vests (provided).</li>
  <li><strong>Walk or bike to the Japanese Garden</strong> — quiet, shaded, free, great for a picnic.</li>
  <li><strong>Hit the Zona Kids playground</strong> after lunch when it's partially shaded.</li>
  <li><strong>End with ice cream from the kiosks</strong> near the amphitheater.</li>
</ol>

<p class="text-gray-700 mb-6">For a full dedicated guide, see our <a href="/parque-tangamanga" class="text-blue-600 underline font-medium">Parque Tangamanga complete guide</a>.</p>

<h3 class="text-2xl font-bold mb-4 text-gray-900 mt-8">Parque Tangamanga II — The Quieter Sibling</h3>

<p class="text-gray-700 mb-6">Parque Tangamanga II is about one-third the size of Tangamanga I, located in the northeast of the city, and significantly less crowded — especially on weekends. It is ideal for families who want wide open lawns, dedicated bike paths without pedestrian traffic, basketball and soccer courts, and quieter playgrounds. Hours are typically Tuesday–Sunday 6:00 AM – 8:00 PM (closed Mondays for maintenance). Entry is free.</p>

<p class="text-gray-700 mb-6"><strong>Parents of older kids (8+) often prefer Tangamanga II</strong> because the bike paths are smoother, more continuous, and less obstructed by pedestrians. Bring your own bikes; rental service is limited compared with Tangamanga I.</p>
</section>

<section id="other-parks" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Other Parks in San Luis Potosí Worth a Visit</h2>

<h3 class="text-2xl font-bold mb-4 text-gray-900">Alameda Juan Sarabia</h3>
<p class="text-gray-700 mb-6"><strong>Location:</strong> Eastern edge of Centro Histórico, next to the former railway station. <strong>Hours:</strong> Open 24/7 (best during daylight). <strong>Cost:</strong> Free. The Alameda was originally the orchard of the Carmen convent before being converted into a public park after the 1850s Reforma laws, and officially named in 1932 after liberal journalist Juan Sarabia Díaz de León. Today it offers more than 4 hectares of flat, shaded walkways, a central fountain, a seasonal pop-up playground, and frequent cultural events. It is by far the best option for parents with babies and toddlers who want a short outing from downtown hotels or the Centro — you can walk to the Plaza de Armas or Catedral in 10 minutes.</p>

<h3 class="text-2xl font-bold mb-4 text-gray-900">Parque Juan H. Sánchez (Parque de Morales)</h3>
<p class="text-gray-700 mb-6"><strong>Location:</strong> Colonia Himno Nacional, between Av. Venustiano Carranza and Paseo de los Artistas. <strong>Size:</strong> ~18 hectares. <strong>Hours:</strong> 6:00 AM – 10:00 PM. <strong>Cost:</strong> Free. Known affectionately as "Parque de Morales," this 100-year-old park is a potosino institution with an artificial lake created in 1968, over 120 identified animal species, and a famous rocket-shaped slide ("El Cohete") that defined childhoods for generations. A 100-million-peso state rehabilitation project is currently renovating the lake, playground and pet areas — parts of the park may be fenced off in 2026, so check before heading over. The shade is unmatched: huge pine, eucalyptus and cedar trees.</p>

<h3 class="text-2xl font-bold mb-4 text-gray-900">Plaza de los Fundadores and Plaza de Armas</h3>
<p class="text-gray-700 mb-6">Not parks in the traditional sense, but the two main historic plazas are excellent for toddlers who want to chase pigeons, ride the small municipal carousel (when it's set up for festivals), and eat raspados (shaved ice). Both are free, surrounded by cafes with bathrooms, and central to family walking tours of the cantera-stone historic center — a UNESCO Camino Real de Tierra Adentro site.</p>

<h3 class="text-2xl font-bold mb-4 text-gray-900">Jardín de San Juan de Dios</h3>
<p class="text-gray-700 mb-6">Small, tucked inside the Centro Histórico near the church of the same name. Shaded benches, old trees, perfect for a 30-minute break during a family walking tour. No playground but very safe and very Mexican.</p>

<h3 class="text-2xl font-bold mb-4 text-gray-900">Parks in Lomas, Villa Magna and Industrias</h3>
<p class="text-gray-700 mb-6">The newer residential zones in the south and southwest of the city include several HOA-style neighborhood parks that are quiet, well-kept and open to visitors. <strong>Parque Lomas 4ta Sección</strong> and the green spaces along Av. Palma de la Cruz have basic playgrounds and lawns. These are ideal if you are staying in an Airbnb in those neighborhoods and want a 15-minute playground stop. For upscale indoor play, the anchor malls in these zones (Plaza Sendero, Altaria, El Dorado) have climate-controlled play areas — useful on the hottest days.</p>

<h3 class="text-2xl font-bold mb-4 text-gray-900">Parque Central Alameda (Soledad de Graciano Sánchez)</h3>
<p class="text-gray-700 mb-6">Opened in the neighboring municipality of Soledad as part of the 2023–2025 metropolitan green-space expansion. Modern playgrounds, splash zones and wide lawns. Worth the 20-minute drive from the center if you are staying nearby.</p>
</section>

<section id="water-play" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Splash Pads and Water Play in San Luis Potosí</h2>

<div class="mb-8">
<img src="${IMG.biodiversity}" alt="Water play and biodiversity at Tangamanga" class="w-full rounded-xl shadow-lg" />
</div>

<p class="text-gray-700 mb-6">Summer afternoons in SLP can reach 30–32°C (86–90°F) — hot, but dry. Water play is essential from April through September:</p>

<ul class="list-disc pl-6 mb-6 text-gray-700 space-y-3">
  <li><strong>Dinoasis (formerly Splash), Parque Tangamanga I:</strong> The main in-city water park. Wave pool, toddler splash pad with small slides, medium-thrill slides for ages 6+, and a lazy river. Typically ~$200 MXN per child. Season runs Semana Santa through early fall; check official channels before visiting.</li>
  <li><strong>Parque Acuático Gogorrón (45 min south):</strong> Thermal-water balneario with multiple pool depths, three slides, two water tubes, and shallow chapoteaderos designed specifically for small children. A classic family day trip.</li>
  <li><strong>Balneario Lourdes and Ojo Caliente:</strong> Traditional hot-spring pools, great for cool mornings. Not as family-polished as Gogorrón but cheaper.</li>
  <li><strong>Seasonal fountains in Plaza de Armas:</strong> During summer municipal events, temporary splash features are sometimes set up. Free. Not reliable but a pleasant surprise.</li>
</ul>

<div class="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
<p class="text-blue-800"><strong>Day-trip upgrade:</strong> For a weekend adventure, the <strong>Huasteca Potosina</strong> (4 hours east) offers turquoise rivers, natural waterfalls and swimming holes — the best natural water playground in Mexico. See the <a href="/events/all" class="underline font-medium">events calendar</a> for guided family trips.</p>
</div>
</section>

<section id="indoor" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Indoor Kid Spaces for Rainy or Very Hot Days</h2>

<div class="overflow-x-auto mb-8">
  <table class="min-w-full bg-white border border-gray-200 rounded-lg">
    <thead class="bg-gray-50"><tr>
      <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Venue</th>
      <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
      <th class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">Hours</th>
      <th class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">Price</th>
      <th class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">Best Age</th>
    </tr></thead>
    <tbody class="divide-y divide-gray-200 text-sm">
      <tr><td class="px-4 py-3 font-semibold">Museo Laberinto</td><td class="px-4 py-3">Interactive science + 3D theater</td><td class="px-4 py-3 text-center">Tue–Fri 9–16; Sat–Sun 11–19</td><td class="px-4 py-3 text-center">$50 adult / $40 child</td><td class="px-4 py-3 text-center">4–14</td></tr>
      <tr class="bg-gray-50"><td class="px-4 py-3 font-semibold">Planetario Tangamanga I</td><td class="px-4 py-3">Astronomy dome projections</td><td class="px-4 py-3 text-center">Tue–Sun, session schedule</td><td class="px-4 py-3 text-center">$20–50 MXN</td><td class="px-4 py-3 text-center">5–14</td></tr>
      <tr><td class="px-4 py-3 font-semibold">Kidiverso</td><td class="px-4 py-3">Trampolines, ball pits, inflatables</td><td class="px-4 py-3 text-center">Daily 10–21</td><td class="px-4 py-3 text-center">~$180–250 MXN</td><td class="px-4 py-3 text-center">2–12</td></tr>
      <tr class="bg-gray-50"><td class="px-4 py-3 font-semibold">Stardust Park</td><td class="px-4 py-3">Space-themed indoor playground</td><td class="px-4 py-3 text-center">Daily 11–20</td><td class="px-4 py-3 text-center">~$150 MXN</td><td class="px-4 py-3 text-center">2–10</td></tr>
      <tr><td class="px-4 py-3 font-semibold">Plaza Sendero play area</td><td class="px-4 py-3">Mall indoor playground</td><td class="px-4 py-3 text-center">Mall hours</td><td class="px-4 py-3 text-center">Often free</td><td class="px-4 py-3 text-center">2–8</td></tr>
      <tr class="bg-gray-50"><td class="px-4 py-3 font-semibold">Altaria and El Dorado malls</td><td class="px-4 py-3">Cinema + play zones</td><td class="px-4 py-3 text-center">Daily 11–21</td><td class="px-4 py-3 text-center">Varies</td><td class="px-4 py-3 text-center">All ages</td></tr>
    </tbody>
  </table>
</div>

<p class="text-gray-700 mb-6"><strong>Top indoor pick: Museo Laberinto de las Ciencias y las Artes.</strong> Located on Boulevard Antonio Rocha Cordero in Colonia Tierra Blanca, this is one of the best interactive children's science museums in central Mexico. Hands-on exhibits across physics, biology, chemistry and robotics, plus a 3D cinema — the entry fee includes everything. Children under 3 are free.</p>
</section>

<section id="by-age" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Age-by-Age Recommendations</h2>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
  <div class="bg-pink-50 border-2 border-pink-200 rounded-xl p-6">
    <h3 class="text-xl font-bold text-pink-900 mb-3">Toddlers (0–3)</h3>
    <ul class="space-y-2 text-pink-800 text-sm">
      <li>• <strong>Alameda Juan Sarabia</strong> — flat, shaded, stroller-perfect</li>
      <li>• <strong>Parque Tangamanga I — Cri-Cri area</strong> — soft surfaces, baby-scale equipment</li>
      <li>• <strong>Plaza de los Fundadores</strong> — chase pigeons, eat raspados</li>
      <li>• Avoid: Parque Morales (some equipment still closed)</li>
    </ul>
  </div>
  <div class="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6">
    <h3 class="text-xl font-bold text-yellow-900 mb-3">Preschool (3–5)</h3>
    <ul class="space-y-2 text-yellow-800 text-sm">
      <li>• <strong>Tangamanga I Zona Kids</strong> — the full range of slides and climbing frames</li>
      <li>• <strong>Zoológico de Tangamanga</strong> — free and absolutely captivating at this age</li>
      <li>• <strong>Museo Laberinto</strong> — 3D movie is a big hit</li>
      <li>• <strong>Paddle boats on the Tangamanga lake</strong> — with life vests</li>
    </ul>
  </div>
  <div class="bg-green-50 border-2 border-green-200 rounded-xl p-6">
    <h3 class="text-xl font-bold text-green-900 mb-3">Elementary (6–10)</h3>
    <ul class="space-y-2 text-green-800 text-sm">
      <li>• <strong>Bike rental at Tangamanga I</strong> — 14 km of paths to explore</li>
      <li>• <strong>Tangamanga II</strong> — better for longer bike rides</li>
      <li>• <strong>Dinoasis water park</strong> — medium slides, wave pool</li>
      <li>• <strong>Planetario</strong> — the dome is mesmerizing at this age</li>
      <li>• <strong>Kidiverso trampolines</strong> — ideal birthday venue</li>
    </ul>
  </div>
  <div class="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
    <h3 class="text-xl font-bold text-blue-900 mb-3">Tweens / Teens (11+)</h3>
    <ul class="space-y-2 text-blue-800 text-sm">
      <li>• <strong>Tangamanga II sports courts</strong> — pick-up soccer, basketball</li>
      <li>• <strong>BMW Maratón Tangamanga (June 28, 2026)</strong> — 5K and 10K family distances</li>
      <li>• <strong>Huasteca Potosina day trip</strong> — cascades and rivers</li>
      <li>• <strong>Cineteca / mall cinemas</strong> — Altaria and Plaza Sendero</li>
    </ul>
  </div>
</div>
</section>

<section id="tips" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Practical Tips: Altitude, Shade, Strollers</h2>

<ul class="list-disc pl-6 mb-6 text-gray-700 space-y-3">
  <li><strong>Altitude (1,863 m / 6,112 ft):</strong> Visitors from sea level may feel slight fatigue or a headache on day 1. Hydrate more than usual, slow down the first 24 hours, and skip long bike rides until day 2. Children adapt faster than adults but still need water every 30 minutes.</li>
  <li><strong>Sun protection is non-negotiable:</strong> UV index is high year-round due to altitude plus thin atmosphere. Apply SPF 50+ before leaving the hotel and reapply every 2 hours. Wide-brim hats for kids are standard in SLP.</li>
  <li><strong>Water bottles:</strong> Refill stations exist in Tangamanga I near the amphitheater. Otherwise bring at least 1L per person.</li>
  <li><strong>Best time to visit in summer (April–September):</strong> Mornings 7–11 AM or evenings after 5 PM. Midday is too hot for playgrounds without shade.</li>
  <li><strong>Best time to visit in winter (November–February):</strong> Afternoons 2–5 PM — mornings can be cold (5–10°C) before the sun heats up the park.</li>
  <li><strong>Strollers:</strong> Tangamanga I main paths and Alameda Juan Sarabia are fully stroller-friendly. Parque Morales paths are partly dirt — off-road strollers only. Historic center sidewalks are narrow and uneven; consider a baby carrier in the Centro.</li>
  <li><strong>Bathrooms:</strong> Public bathrooms exist at Tangamanga I (near each main entrance, fee sometimes $5 MXN), Alameda (near the central fountain), and all malls. Parque Morales bathrooms are being rebuilt.</li>
  <li><strong>Food:</strong> Outside food is allowed in all city parks. Multiple kiosks sell fresh fruit, raspados, elotes and agua fresca — very affordable.</li>
  <li><strong>Accessibility:</strong> Tangamanga I has paved paths suitable for wheelchairs throughout the central zone. The zoo is fully accessible. Historic plazas have some cobblestones.</li>
</ul>
</section>

<section id="free-vs-paid" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Free vs. Paid: Which to Choose</h2>

<div class="overflow-x-auto mb-8">
  <table class="min-w-full bg-white border border-gray-200 rounded-lg">
    <thead class="bg-gray-50"><tr>
      <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Option</th>
      <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Cost</th>
      <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Best For</th>
    </tr></thead>
    <tbody class="divide-y divide-gray-200 text-sm">
      <tr><td class="px-4 py-3 font-semibold">Tangamanga I + zoo + playground</td><td class="px-4 py-3 text-green-600 font-bold">Free</td><td class="px-4 py-3">Full day with no budget limits</td></tr>
      <tr class="bg-gray-50"><td class="px-4 py-3 font-semibold">Tangamanga II bikes/sports</td><td class="px-4 py-3 text-green-600 font-bold">Free (your own bike)</td><td class="px-4 py-3">Active older kids</td></tr>
      <tr><td class="px-4 py-3 font-semibold">Alameda + Centro Histórico</td><td class="px-4 py-3 text-green-600 font-bold">Free</td><td class="px-4 py-3">Toddlers, stroller days</td></tr>
      <tr class="bg-gray-50"><td class="px-4 py-3 font-semibold">Planetarium (inside Tangamanga)</td><td class="px-4 py-3">$20–50 MXN</td><td class="px-4 py-3">Ages 5+ — 45-minute sessions</td></tr>
      <tr><td class="px-4 py-3 font-semibold">Museo Laberinto</td><td class="px-4 py-3">$40–50 MXN</td><td class="px-4 py-3">Rainy day, hands-on learning</td></tr>
      <tr class="bg-gray-50"><td class="px-4 py-3 font-semibold">Dinoasis water park</td><td class="px-4 py-3">~$200 MXN / child</td><td class="px-4 py-3">Hot summer afternoons</td></tr>
      <tr><td class="px-4 py-3 font-semibold">Kidiverso / Stardust Park</td><td class="px-4 py-3">$150–250 MXN</td><td class="px-4 py-3">Birthday parties, cold rainy days</td></tr>
    </tbody>
  </table>
</div>

<p class="text-gray-700 mb-6"><strong>Budget tip:</strong> A family of four can spend a full, genuinely fun day in San Luis Potosí without paying a single peso of entry fees by combining Tangamanga I (free park, free zoo, free playgrounds) with Alameda Juan Sarabia and the historic plazas. Add ~$200 MXN total for raspados, elotes and agua fresca.</p>
</section>

<section id="safety" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Safety and Parent Reviews</h2>

<p class="text-gray-700 mb-6">San Luis Potosí capital is widely considered one of the safer state capitals in central Mexico, with homicide rates below the national average according to INEGI. Parks specifically:</p>

<ul class="list-disc pl-6 mb-6 text-gray-700 space-y-2">
  <li><strong>Tangamanga I and II:</strong> Municipal police patrol regularly; park security staff at each puerta. Local parent reviews describe both parks as "muy seguros" during daylight hours. Avoid the less-lit perimeter roads after dusk.</li>
  <li><strong>Alameda Juan Sarabia:</strong> Very busy during daylight, uniformed security nearby, excellent for solo parents with kids. Less recommended late at night.</li>
  <li><strong>Parque de Morales (Juan H. Sánchez):</strong> Historically safe, currently partly under renovation — check for fenced-off zones and follow posted signage.</li>
  <li><strong>Common-sense precautions:</strong> Keep valuables in a zipped bag, don't leave bags unattended at picnic tables, and teach kids a meeting point in case they get separated.</li>
</ul>

<p class="text-gray-700 mb-6">Potosino parent forums (Facebook groups "Mamás SLP" and "Familias Expats SLP") consistently rate Tangamanga I as the number one family destination in the city, with over 9,000 positive reviews across TripAdvisor, Google Maps and Facebook combined.</p>
</section>

<section id="getting-there" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">How to Get There</h2>

<ul class="list-disc pl-6 mb-6 text-gray-700 space-y-3">
  <li><strong>Parque Tangamanga I:</strong> <a href="https://maps.google.com/?q=Parque+Tangamanga+I+San+Luis+Potosi" class="text-blue-600 underline">Google Maps</a>. 8 main entrances (puertas); most visitors use Puerta 1 (Av. Himno Nacional) or Puerta 7. Free parking at every entrance. City buses: Ruta 1, Ruta 22. Uber from Centro: ~$60–90 MXN.</li>
  <li><strong>Parque Tangamanga II:</strong> <a href="https://maps.google.com/?q=Parque+Tangamanga+II+San+Luis+Potosi" class="text-blue-600 underline">Google Maps</a>. In the northeast of the city. Free parking. Ruta 26.</li>
  <li><strong>Alameda Juan Sarabia:</strong> <a href="https://maps.google.com/?q=Alameda+Juan+Sarabia+San+Luis+Potosi" class="text-blue-600 underline">Google Maps</a>. Walking distance from Plaza de Armas. Paid street parking. Any Centro-bound bus.</li>
  <li><strong>Parque Juan H. Sánchez / Morales:</strong> <a href="https://maps.google.com/?q=Parque+Morales+San+Luis+Potosi" class="text-blue-600 underline">Google Maps</a>. Colonia Himno Nacional. Free street parking on weekdays; competitive on Sundays.</li>
  <li><strong>Museo Laberinto:</strong> <a href="https://maps.google.com/?q=Museo+Laberinto+San+Luis+Potosi" class="text-blue-600 underline">Google Maps</a>. Boulevard Antonio Rocha Cordero. Free on-site parking.</li>
</ul>

<p class="text-gray-700 mb-6">For a full orientation to SLP neighborhoods and transport, see our <a href="/resources/living-guide" class="text-blue-600 underline font-medium">San Luis Potosí living guide</a>.</p>
</section>

<section id="faq" class="mb-12">
<h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Frequently Asked Questions</h2>

<div class="space-y-6">
  <div class="bg-white border border-gray-200 rounded-lg p-6">
    <h3 class="text-xl font-bold mb-3 text-gray-900">Which park in San Luis Potosí is best for toddlers?</h3>
    <p class="text-gray-700">Parque Tangamanga I has a dedicated kids zone (Zona Kids) with age-appropriate playground equipment for children as young as two, plus the thematic "Cri-Cri" children's park. The terrain is flat, stroller-friendly, and shaded. For a quieter option with fewer crowds, the Alameda Juan Sarabia in the historic center is fenced, walkable and surrounded by cafes.</p>
  </div>
  <div class="bg-white border border-gray-200 rounded-lg p-6">
    <h3 class="text-xl font-bold mb-3 text-gray-900">Is Parque Tangamanga free?</h3>
    <p class="text-gray-700">Yes. General admission to Parque Tangamanga I and II is free. The zoo, botanical garden, Japanese garden, Laberinto de las Ciencias (inside the park) and main playground areas are also free. The Planetarium and the Splash/Dinoasis water park charge separate fees (typically $20–50 MXN for the planetarium and around $200 MXN for children at Dinoasis).</p>
  </div>
  <div class="bg-white border border-gray-200 rounded-lg p-6">
    <h3 class="text-xl font-bold mb-3 text-gray-900">What time does Parque Tangamanga open?</h3>
    <p class="text-gray-700">Parque Tangamanga I opens every day at 5:00 AM. Closing times vary: Mondays close early at 11:00 AM for maintenance, Tuesday through Saturday it stays open until 10:30 PM (last entry 9:30 PM), and Sunday closes at 6:00 PM (last entry 5:30 PM). The zoo inside the park runs Tuesday to Sunday, 10:00 AM to 5:00 PM.</p>
  </div>
  <div class="bg-white border border-gray-200 rounded-lg p-6">
    <h3 class="text-xl font-bold mb-3 text-gray-900">Where can kids swim in San Luis Potosí?</h3>
    <p class="text-gray-700">Inside the city, the Dinoasis water park (formerly Splash) at Tangamanga I is the main option, with wave pools, children's slides and shallow splash areas. For a more traditional balneario experience, Parque Acuático Gogorrón (45 min south of SLP) offers thermal-water pools, three slides and shallow chapoteaderos designed for small children.</p>
  </div>
  <div class="bg-white border border-gray-200 rounded-lg p-6">
    <h3 class="text-xl font-bold mb-3 text-gray-900">What are the best indoor kids activities in San Luis Potosí?</h3>
    <p class="text-gray-700">Museo Laberinto de las Ciencias y las Artes is the top pick — a fully interactive science and arts museum with a 3D theater, hands-on physics and biology exhibits, and an entry fee around $50 MXN for adults, $40 MXN for kids 4–5, and free under 3. The Planetario del Parque Tangamanga I is also excellent for rainy or hot afternoons. Indoor play options include Kidiverso (trampolines and ball pits) and Stardust Park (space-themed brincolines).</p>
  </div>
  <div class="bg-white border border-gray-200 rounded-lg p-6">
    <h3 class="text-xl font-bold mb-3 text-gray-900">Are there parks with splash pads in SLP?</h3>
    <p class="text-gray-700">Yes. The Dinoasis/Splash water park inside Parque Tangamanga I is the main splash-pad and water-play facility within city limits. It features dedicated toddler-height fountains, shallow pools and kid-specific slides. Seasonal operation typically runs Semana Santa through early fall.</p>
  </div>
  <div class="bg-white border border-gray-200 rounded-lg p-6">
    <h3 class="text-xl font-bold mb-3 text-gray-900">Is San Luis Potosí safe for families with children?</h3>
    <p class="text-gray-700">San Luis Potosí capital is considered one of the safer state capitals in central Mexico. Tangamanga I and II, Alameda Juan Sarabia and the Centro Histórico have a strong municipal police presence during the day and are comfortable for families. Standard precautions apply.</p>
  </div>
  <div class="bg-white border border-gray-200 rounded-lg p-6">
    <h3 class="text-xl font-bold mb-3 text-gray-900">How much does parking cost at Parque Tangamanga?</h3>
    <p class="text-gray-700">Multiple free parking lots are available around the perimeter of Tangamanga I (Puerta 1 through Puerta 8) and Tangamanga II. Parking is first-come, first-served and fills up quickly on Sunday mornings. Arrive before 9:00 AM or after 4:00 PM on weekends for the easiest experience.</p>
  </div>
</div>
</section>

<div class="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
<h3 class="text-xl font-bold mb-3 text-blue-900">Related Family Guides</h3>
<ul class="space-y-2 text-blue-800">
  <li>→ <a href="/family-friendly-activities" class="underline font-medium">Family-friendly activities in San Luis Potosí</a></li>
  <li>→ <a href="/parque-tangamanga" class="underline font-medium">Parque Tangamanga complete guide</a></li>
  <li>→ <a href="/resources/family-guide" class="underline font-medium">Expat family guide to SLP</a></li>
  <li>→ <a href="/resources/living-guide" class="underline font-medium">San Luis Potosí living guide</a></li>
  <li>→ <a href="/events/all" class="underline font-medium">Upcoming family events in SLP</a></li>
</ul>
</div>

<div class="bg-green-50 border-l-4 border-green-400 p-6 mb-8">
<h3 class="text-xl font-bold mb-3 text-green-900">Ready to Explore SLP with Your Kids?</h3>
<p class="text-green-800 mb-3"><strong>San Luis Way is your complete local guide to family life in San Luis Potosí.</strong></p>
<p class="text-green-800"><a href="/blog" class="text-blue-600 hover:text-blue-800 underline font-semibold">Browse more SLP family guides →</a></p>
</div>

<script type="application/ld+json">
${JSON.stringify(faqJsonLd, null, 2)}
</script>

</div>`;

const contentES = contentEN
  .replace(/Table of Contents/g, 'Tabla de Contenidos')
  .replace(/Why SLP is Great for Kids/g, 'Por qué SLP es ideal para niños')
  .replace(/Quick-Pick Table: Top 7 Parks/g, 'Tabla Rápida: Top 7 Parques')
  .replace(/Parque Tangamanga I and II: Full Guide/g, 'Parque Tangamanga I y II: Guía Completa')
  .replace(/Other Parks Worth Visiting/g, 'Otros Parques que Vale la Pena Visitar')
  .replace(/Splash Pads and Water Play/g, 'Albercas y Juegos de Agua')
  .replace(/Indoor Spaces for Hot or Rainy Days/g, 'Espacios Techados para Días Calurosos o Lluviosos')
  .replace(/Age-by-Age Recommendations/g, 'Recomendaciones por Edad')
  .replace(/Practical Tips: Altitude, Shade, Strollers/g, 'Tips Prácticos: Altitud, Sombra, Carriolas')
  .replace(/Free vs\. Paid Comparison/g, 'Comparación Gratis vs. De Pago')
  .replace(/Safety and Parent Reviews/g, 'Seguridad y Reseñas de Padres')
  .replace(/How to Get There/g, 'Cómo Llegar')
  .replace(/FAQ/g, 'Preguntas Frecuentes')
  .replace(/Key Takeaways/g, 'Puntos Clave')
  .replace(/Why San Luis Potosí is Great for Kids/g, 'Por qué San Luis Potosí es ideal para niños')
  .replace(/Quick-Pick Table: Top 7 Parks for Kids in San Luis Potosí/g, 'Tabla Rápida: Top 7 Parques para Niños en San Luis Potosí')
  .replace(/Parque Tangamanga I: The Deep Dive/g, 'Parque Tangamanga I: Guía Detallada')
  .replace(/The Flagship/g, 'El Principal')
  .replace(/The Quieter Sibling/g, 'El Hermano Tranquilo')
  .replace(/Other Parks in San Luis Potosí Worth a Visit/g, 'Otros Parques en SLP que Vale la Pena Visitar')
  .replace(/Parks in Lomas, Villa Magna and Industrias/g, 'Parques en Lomas, Villa Magna e Industrias')
  .replace(/Splash Pads and Water Play in San Luis Potosí/g, 'Albercas y Juegos de Agua en San Luis Potosí')
  .replace(/Indoor Kid Spaces for Rainy or Very Hot Days/g, 'Espacios Techados para Niños en Días de Lluvia o Calor')
  .replace(/Practical Tips: Altitude, Shade, Strollers/g, 'Tips Prácticos: Altitud, Sombra, Carriolas')
  .replace(/Free vs\. Paid: Which to Choose/g, 'Gratis vs. De Pago: Cuál Elegir')
  .replace(/Toddlers/g, 'Bebés y caminantes')
  .replace(/Preschool/g, 'Preescolar')
  .replace(/Elementary/g, 'Primaria')
  .replace(/Tweens \/ Teens/g, 'Preadolescentes / Adolescentes')
  .replace(/Best overall:/g, 'Mejor en general:')
  .replace(/Best for toddlers:/g, 'Mejor para bebés:')
  .replace(/Best for active kids:/g, 'Mejor para niños activos:')
  .replace(/Best rainy-day indoor pick:/g, 'Mejor opción techada para días de lluvia:')
  .replace(/Best for swimming:/g, 'Mejor para nadar:')
  .replace(/Bottom line:/g, 'En resumen:')
  .replace(/Frequently Asked Questions/g, 'Preguntas Frecuentes')
  .replace(/Related Family Guides/g, 'Guías Familiares Relacionadas')
  .replace(/Ready to Explore SLP with Your Kids\?/g, '¿Listo para Explorar SLP con tus Hijos?')
  .replace(/Browse more SLP family guides/g, 'Ver más guías familiares de SLP')
  .replace(/Verification note:/g, 'Nota de verificación:')
  .replace(/Budget tip:/g, 'Tip económico:')
  .replace(/Day-trip upgrade:/g, 'Mejora de día-viaje:')
  .replace(/Top indoor pick:/g, 'Mejor opción techada:');

const post = {
  slug: SLUG,
  status: 'published',
  published_at: new Date().toISOString(),
  image_url: IMG.hero,
  category: 'Family',
  tags: ['family', 'parks', 'kids', 'san-luis-potosi', 'tangamanga', 'playgrounds', 'family-friendly', 'slp', 'parques-para-ninos'],

  title: 'Best Parks for Kids in San Luis Potosí 2026 (Parent-Tested Guide)',
  excerpt: 'The 7 best parks for kids in San Luis Potosí — from Parque Tangamanga I (411 ha, free zoo, Zona Kids) to splash pads and rainy-day indoor picks. Verified hours, prices and age tips.',
  content: contentEN,
  meta_title: 'Best Parks for Kids in San Luis Potosí 2026 | SLP Family Guide',
  meta_description: 'Top 7 parks for kids near you in San Luis Potosí 2026: Tangamanga, Alameda, splash pads. Verified hours, free entry, age tips. Plan a family day today.',

  title_es: 'Mejores Parques para Niños en San Luis Potosí 2026 (Guía para Papás)',
  excerpt_es: 'Los 7 mejores parques para niños en San Luis Potosí — desde Parque Tangamanga I (411 ha, zoológico gratis, Zona Kids) hasta albercas de chapoteo. Horarios, precios y tips por edad verificados.',
  content_es: contentES,
  meta_title_es: 'Mejores Parques para Niños San Luis Potosí 2026 | Guía Familiar SLP',
  meta_description_es: 'Top 7 parques para niños en San Luis Potosí 2026: Tangamanga, Alameda, albercas. Horarios verificados, entrada gratis y tips por edad. Planea tu día familiar hoy.',

  title_de: 'Die besten Parks für Kinder in San Luis Potosí 2026',
  excerpt_de: 'Die 7 besten Parks für Kinder in San Luis Potosí — von Parque Tangamanga I (411 ha, kostenloser Zoo, Zona Kids) bis zu Wasserspielplätzen und Regentag-Optionen.',
  content_de: contentEN,
  meta_title_de: 'Beste Parks für Kinder San Luis Potosí 2026 | SLP Familienführer',
  meta_description_de: 'Top 7 Parks für Kinder in San Luis Potosí 2026: Tangamanga, Alameda, Wasserparks. Verifizierte Öffnungszeiten, freier Eintritt und Alterstipps.',

  title_ja: 'サン・ルイス・ポトシの子供向けおすすめ公園ベスト7（2026年版）',
  excerpt_ja: 'サン・ルイス・ポトシで子供に最適な公園ベスト7 — パルケ・タンガマンガI（411ha、無料動物園、キッズゾーン）からウォーターパーク、室内プレイまで。営業時間と料金を確認済み。',
  content_ja: contentEN,
  meta_title_ja: 'サン・ルイス・ポトシ 子供向け公園ベスト7 2026 | ファミリーガイド',
  meta_description_ja: 'サン・ルイス・ポトシで子連れにおすすめの公園トップ7（2026年版）：タンガマンガ、アラメダ、ウォーターパーク。営業時間・料金・年齢別のヒントを掲載。',
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
      .select()
      .single();
    if (error) {
      console.error('Insert error:', error);
      process.exit(1);
    }
    console.log('Post published! ID:', data.id);
  }

  console.log(`\nView at: https://sanluisway.com/blog/${SLUG}`);
}

main();
