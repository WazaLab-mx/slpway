// Real native DE + JA translations for the blog post
// `san-luis-potosi-weather-best-time-to-visit` (idempotent). Replaces the
// English-mirror content_de / content_ja with genuine translations.
// Every HTML tag/attribute/class/id/href and every numeric value (°C, mm,
// station numbers, dates, place names) is preserved byte-identically; only
// human-readable text nodes are translated. Verifies by re-fetching.
require('dotenv').config({ path: '.env' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const SLUG = 'san-luis-potosi-weather-best-time-to-visit';

const content_de = `<div class="max-w-none">

<p class="text-xl leading-relaxed text-gray-800 mb-8 font-medium">
  <strong>Das Wettergeheimnis von San Luis Potosí ist die Höhenlage:</strong> Auf rund 1,860 m genießt die Hauptstadt über 300 Tage Hochwüstensonne, milde Nachmittage in jedem Monat und Nächte, die stets abkühlen. Hier finden Sie die Klimatabelle Monat für Monat (SMN-Normalwerte 1991–2020), die beste Reisezeit für jede Art von Reise – und den entscheidenden Haken: Die Huasteca Potosina, drei Stunden östlich gelegen, folgt einem völlig anderen Klima.
</p>

<div class="speakable bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-200 rounded-2xl p-6 md:p-8 mb-10">
  <p class="text-base md:text-lg text-gray-800 leading-relaxed">
    <strong>Kurze Antwort:</strong> Besuchen Sie die Stadt von Oktober bis April (trocken, klar, 21–30°C tagsüber); die Wasserfälle der Huasteca erleben Sie am besten von November bis März (türkisfarbenes Wasser, vor den Tiefständen der späten Trockenzeit); rechnen Sie mit der stärksten Sonne im Mai, dem heftigsten Regen im September und Morgengrauen nahe dem Gefrierpunkt von Dezember bis Februar.
  </p>
</div>

<section id="month-by-month" class="mb-12 scroll-mt-8">
<div class="not-prose mb-4">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-2 border-b-4 border-orange-500 pb-3 inline-block">Die Stadt San Luis Potosí, Monat für Monat</h2>
</div>
<p class="text-sm text-gray-600 mb-4">Klima-Normalwerte SMN/CONAGUA 1991–2020. Die Werte für die Stadt sind als Spannen über die beiden Stationen im Stadtgebiet von SLP angegeben (24069 und 24111, ~1,870 m); Regentage = Tage mit messbarem Niederschlag.</p>
<div class="overflow-x-auto mb-4"><table class="w-full text-sm text-gray-700">
    <thead><tr class="border-b-2 border-orange-300 text-left"><th class="py-2 pr-3 font-bold text-gray-900 ">Monat</th><th class="py-2 pr-3 font-bold text-gray-900 text-center">Höchst (°C)</th><th class="py-2 pr-3 font-bold text-gray-900 text-center">Tiefst (°C)</th><th class="py-2 pr-3 font-bold text-gray-900 text-center">Regen (mm)</th><th class="py-2 pr-3 font-bold text-gray-900 text-center">Regentage</th><th class="py-2 pr-3 font-bold text-gray-900 ">Kurz gesagt</th></tr></thead>
    <tbody><tr class="border-b border-gray-100">
      <td class="py-2 pr-3 font-semibold text-gray-900 whitespace-nowrap">Januar</td>
      <td class="py-2 pr-3 text-center">21–22</td><td class="py-2 pr-3 text-center">4–7</td>
      <td class="py-2 pr-3 text-center">13–14</td><td class="py-2 pr-3 text-center">4–8</td>
      <td class="py-2 text-gray-600">Kältester Monat – sonnige Nachmittage, Morgengrauen nahe dem Gefrierpunkt</td></tr>
<tr class="border-b border-gray-100">
      <td class="py-2 pr-3 font-semibold text-gray-900 whitespace-nowrap">Februar</td>
      <td class="py-2 pr-3 text-center">23–25</td><td class="py-2 pr-3 text-center">5–8</td>
      <td class="py-2 pr-3 text-center">11–12</td><td class="py-2 pr-3 text-center">3–5</td>
      <td class="py-2 text-gray-600">Trocken und wärmer werdend; Nächte noch kalt</td></tr>
<tr class="border-b border-gray-100">
      <td class="py-2 pr-3 font-semibold text-gray-900 whitespace-nowrap">März</td>
      <td class="py-2 pr-3 text-center">26–27</td><td class="py-2 pr-3 text-center">7–10</td>
      <td class="py-2 pr-3 text-center">8–9</td><td class="py-2 pr-3 text-center">3–4</td>
      <td class="py-2 text-gray-600">Trockenste Zeit des Jahres; echte Frühlingswärme</td></tr>
<tr class="border-b border-gray-100">
      <td class="py-2 pr-3 font-semibold text-gray-900 whitespace-nowrap">April</td>
      <td class="py-2 pr-3 text-center">29–30</td><td class="py-2 pr-3 text-center">10–13</td>
      <td class="py-2 pr-3 text-center">11</td><td class="py-2 pr-3 text-center">3–4</td>
      <td class="py-2 text-gray-600">Heiß, trocken und klar – die Flüsse der Huasteca auf niedrigstem Stand</td></tr>
<tr class="border-b border-gray-100">
      <td class="py-2 pr-3 font-semibold text-gray-900 whitespace-nowrap">Mai</td>
      <td class="py-2 pr-3 text-center">29–31</td><td class="py-2 pr-3 text-center">12–14</td>
      <td class="py-2 pr-3 text-center">37–44</td><td class="py-2 pr-3 text-center">7–9</td>
      <td class="py-2 text-gray-600">Heißester, sonnigster Monat; erste Gewitter zum Monatsende</td></tr>
<tr class="border-b border-gray-100">
      <td class="py-2 pr-3 font-semibold text-gray-900 whitespace-nowrap">Juni</td>
      <td class="py-2 pr-3 text-center">27–29</td><td class="py-2 pr-3 text-center">13–15</td>
      <td class="py-2 pr-3 text-center">59</td><td class="py-2 pr-3 text-center">9–11</td>
      <td class="py-2 text-gray-600">Regenzeit beginnt – Gewitter am Nachmittag und Abend</td></tr>
<tr class="border-b border-gray-100">
      <td class="py-2 pr-3 font-semibold text-gray-900 whitespace-nowrap">Juli</td>
      <td class="py-2 pr-3 text-center">26–28</td><td class="py-2 pr-3 text-center">12–14</td>
      <td class="py-2 pr-3 text-center">62–76</td><td class="py-2 pr-3 text-center">10</td>
      <td class="py-2 text-gray-600">Warme Tage, regelmäßiger Abendregen, grüne Hügel</td></tr>
<tr class="border-b border-gray-100">
      <td class="py-2 pr-3 font-semibold text-gray-900 whitespace-nowrap">August</td>
      <td class="py-2 pr-3 text-center">26–28</td><td class="py-2 pr-3 text-center">12–14</td>
      <td class="py-2 pr-3 text-center">48–55</td><td class="py-2 pr-3 text-center">10</td>
      <td class="py-2 text-gray-600">FENAPO-Monat: warm, mit abendlichen Schauern</td></tr>
<tr class="border-b border-gray-100">
      <td class="py-2 pr-3 font-semibold text-gray-900 whitespace-nowrap">September</td>
      <td class="py-2 pr-3 text-center">24–26</td><td class="py-2 pr-3 text-center">12–14</td>
      <td class="py-2 pr-3 text-center">75–82</td><td class="py-2 pr-3 text-center">13</td>
      <td class="py-2 text-gray-600">Nassester, bewölktester Monat des Jahres</td></tr>
<tr class="border-b border-gray-100">
      <td class="py-2 pr-3 font-semibold text-gray-900 whitespace-nowrap">Oktober</td>
      <td class="py-2 pr-3 text-center">24–25</td><td class="py-2 pr-3 text-center">9–12</td>
      <td class="py-2 pr-3 text-center">31–33</td><td class="py-2 pr-3 text-center">8–11</td>
      <td class="py-2 text-gray-600">Der Regen lässt nach; die lange klare Jahreszeit beginnt</td></tr>
<tr class="border-b border-gray-100">
      <td class="py-2 pr-3 font-semibold text-gray-900 whitespace-nowrap">November</td>
      <td class="py-2 pr-3 text-center">22–24</td><td class="py-2 pr-3 text-center">6–9</td>
      <td class="py-2 pr-3 text-center">12–15</td><td class="py-2 pr-3 text-center">4–8</td>
      <td class="py-2 text-gray-600">Trockene, milde Tage, kühle Nächte; das türkisfarbene Wasser kehrt in die Huasteca zurück</td></tr>
<tr class="border-b border-gray-100">
      <td class="py-2 pr-3 font-semibold text-gray-900 whitespace-nowrap">Dezember</td>
      <td class="py-2 pr-3 text-center">21–23</td><td class="py-2 pr-3 text-center">4–7</td>
      <td class="py-2 pr-3 text-center">7–8</td><td class="py-2 pr-3 text-center">2–8</td>
      <td class="py-2 text-gray-600">Trockenster Monat; frische, helle Wintertage</td></tr></tbody></table></div>
<p class="text-sm text-gray-600">Jahressummen: 386–404 mm Regen an 81–95 Regentagen. Laut WeatherSpark beginnt der klarere Teil des Jahres etwa Ende Oktober und dauert rund 7.7 Monate; der Mai ist der sonnigste Monat, der September der bewölkteste – und schwüle Feuchtigkeit gibt es auf dieser Höhe praktisch das ganze Jahr über nicht.</p>
</section>

<div class="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 md:p-8 mb-12">
  <h2 class="text-2xl font-bold text-blue-900 mb-3">Der Höheneffekt: Packen Sie jeden Tag für zwei Jahreszeiten</h2>
  <p class="text-gray-800 leading-relaxed">Das halbtrockene Hochlandklima der Stadt bedeutet, dass ein Unterschied von 15–17°C zwischen Nachmittag und Morgengrauen normal ist. Auf einen kühlen Morgen mit 4°C kann ein sonniger Januarnachmittag mit 22°C folgen – und die SMN-Stationsdaten zeigen Minima unter dem Gefrierpunkt in jedem Monat von Oktober bis März (bis zu −8°C im Januar und −8.5°C im Dezember an Station 24111). Egal in welchem Monat: Sonnencreme für die Mittagszeit, eine echte Zusatzschicht für nach Einbruch der Dunkelheit.</p>
</div>

<section id="city-vs-huasteca" class="mb-12 scroll-mt-8">
<div class="not-prose mb-4">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-2 border-b-4 border-emerald-500 pb-3 inline-block">Ein Bundesstaat, zwei Klimazonen: die Stadt und die Huasteca</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">Das ist der Fehler, der jede Packliste ruiniert: für eine Reise in die Huasteca die Vorhersage der Hauptstadt zu prüfen. Ciudad Valles – das Zentrum der Wasserfälle, 87 m über dem Meeresspiegel – ist heißes, feuchtes Tiefland. Es bekommt <strong>dreimal so viel Regen</strong> wie die Hauptstadt (1,208 mm gegenüber ~400 mm pro Jahr), durchschnittliche Höchstwerte im Mai von 36°C mit registrierten Extremen nahe 48°C und Sommernächte, die über 22°C bleiben. Die Hauptstadt hingegen liegt in keinem Monat im Mittel über 31°C und kühlt nachts stets ab.</p>
<h3 class="font-bold text-xl text-gray-900 mb-2">Ciudad Valles (Huasteca), Monat für Monat</h3>
<p class="text-sm text-gray-600 mb-3">SMN/CONAGUA-Normalwerte 1991–2020, Station 24012 (87 m).</p>
<div class="overflow-x-auto mb-4"><table class="w-full text-sm text-gray-700">
    <thead><tr class="border-b-2 border-emerald-300 text-left"><th class="py-2 pr-3 font-bold text-gray-900 ">Monat</th><th class="py-2 pr-3 font-bold text-gray-900 text-center">Höchst (°C)</th><th class="py-2 pr-3 font-bold text-gray-900 text-center">Tiefst (°C)</th><th class="py-2 pr-3 font-bold text-gray-900 text-center">Regen (mm)</th></tr></thead>
    <tbody><tr class="border-b border-gray-100"><td class="py-2 pr-3 font-semibold text-gray-900 whitespace-nowrap">Januar</td>
      <td class="py-2 pr-3 text-center">25.1</td><td class="py-2 pr-3 text-center">12.4</td><td class="py-2 text-center">23.6</td></tr>
<tr class="border-b border-gray-100"><td class="py-2 pr-3 font-semibold text-gray-900 whitespace-nowrap">Februar</td>
      <td class="py-2 pr-3 text-center">28.0</td><td class="py-2 pr-3 text-center">14.0</td><td class="py-2 text-center">17.4</td></tr>
<tr class="border-b border-gray-100"><td class="py-2 pr-3 font-semibold text-gray-900 whitespace-nowrap">März</td>
      <td class="py-2 pr-3 text-center">31.3</td><td class="py-2 pr-3 text-center">16.9</td><td class="py-2 text-center">32.1</td></tr>
<tr class="border-b border-gray-100"><td class="py-2 pr-3 font-semibold text-gray-900 whitespace-nowrap">April</td>
      <td class="py-2 pr-3 text-center">34.2</td><td class="py-2 pr-3 text-center">19.6</td><td class="py-2 text-center">40.4</td></tr>
<tr class="border-b border-gray-100"><td class="py-2 pr-3 font-semibold text-gray-900 whitespace-nowrap">Mai</td>
      <td class="py-2 pr-3 text-center">36.0</td><td class="py-2 pr-3 text-center">22.2</td><td class="py-2 text-center">95.8</td></tr>
<tr class="border-b border-gray-100"><td class="py-2 pr-3 font-semibold text-gray-900 whitespace-nowrap">Juni</td>
      <td class="py-2 pr-3 text-center">35.7</td><td class="py-2 pr-3 text-center">23.0</td><td class="py-2 text-center">184.7</td></tr>
<tr class="border-b border-gray-100"><td class="py-2 pr-3 font-semibold text-gray-900 whitespace-nowrap">Juli</td>
      <td class="py-2 pr-3 text-center">34.2</td><td class="py-2 pr-3 text-center">22.5</td><td class="py-2 text-center">235.4</td></tr>
<tr class="border-b border-gray-100"><td class="py-2 pr-3 font-semibold text-gray-900 whitespace-nowrap">August</td>
      <td class="py-2 pr-3 text-center">35.0</td><td class="py-2 pr-3 text-center">22.5</td><td class="py-2 text-center">158.6</td></tr>
<tr class="border-b border-gray-100"><td class="py-2 pr-3 font-semibold text-gray-900 whitespace-nowrap">September</td>
      <td class="py-2 pr-3 text-center">32.9</td><td class="py-2 pr-3 text-center">21.7</td><td class="py-2 text-center">243.6</td></tr>
<tr class="border-b border-gray-100"><td class="py-2 pr-3 font-semibold text-gray-900 whitespace-nowrap">Oktober</td>
      <td class="py-2 pr-3 text-center">31.1</td><td class="py-2 pr-3 text-center">19.3</td><td class="py-2 text-center">113.9</td></tr>
<tr class="border-b border-gray-100"><td class="py-2 pr-3 font-semibold text-gray-900 whitespace-nowrap">November</td>
      <td class="py-2 pr-3 text-center">28.2</td><td class="py-2 pr-3 text-center">16.1</td><td class="py-2 text-center">41.4</td></tr>
<tr class="border-b border-gray-100"><td class="py-2 pr-3 font-semibold text-gray-900 whitespace-nowrap">Dezember</td>
      <td class="py-2 pr-3 text-center">25.9</td><td class="py-2 pr-3 text-center">13.4</td><td class="py-2 text-center">21.5</td></tr></tbody></table></div>
<p class="text-gray-800 leading-relaxed">Praktisch übersetzt: Von Juni bis Oktober führen die Flüsse der Huasteca viel Wasser und sind braun vom Sediment; etwa von November bis April nehmen sie das berühmte Türkis an. Alle Details zur Logistik in unserem <a href="/blog/huasteca-potosina-itinerary-2026" class="text-emerald-700 underline font-semibold">Huasteca-Reiseplan für 3/5/7 Tage</a>.</p>
</section>

<section id="best-time" class="mb-12 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-2 border-b-4 border-orange-500 pb-3 inline-block">Beste Reisezeit, nach Art der Reise</h2>
</div>
<div class="space-y-6">

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <div class="flex items-center justify-between flex-wrap gap-2 mb-2">
      <h3 class="font-bold text-xl text-gray-900">Stadtbesichtigung & Kulinarik</h3>
      <span class="text-xs font-semibold bg-orange-100 text-orange-800 rounded-full px-3 py-1">Okt–Apr</span>
    </div>
    <p class="text-sm text-gray-700 leading-relaxed">In der Trockenzeit zeigt sich die Stadt von ihrer besten Seite: fast täglich Sonne, Nachmittage mit 21–27°C zum Bummeln durch das Centro Histórico und nur 2–8 Regentage pro Monat. Von November bis Februar braucht es Zusatzschichten für die kalten Nächte; März und April bringen echte Wärme ohne Regen. Auch der Mai eignet sich, wenn Sie es heiß mögen (29–31°C) – er ist der sonnigste Monat, und Gewitter kommen erst ganz zum Schluss. Ideen für den Besuch: unser <a href="/visit-san-luis-potosi" class="text-orange-700 underline font-semibold">Besucherführer</a> und die <a href="/blog/day-trips-from-san-luis-potosi-2026" class="text-orange-700 underline font-semibold">7 geprüften Tagesausflüge</a>.</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <div class="flex items-center justify-between flex-wrap gap-2 mb-2">
      <h3 class="font-bold text-xl text-gray-900">Wasserfälle der Huasteca</h3>
      <span class="text-xs font-semibold bg-emerald-100 text-emerald-800 rounded-full px-3 py-1">Nov–Mär</span>
    </div>
    <p class="text-sm text-gray-700 leading-relaxed">November bis März ist der ideale Zeitraum: türkisfarbenes Wasser, Rafting-Saison auf dem Tampaón, erträgliche Hitze im Tiefland. Zwei ehrliche Einschränkungen. Erstens führen die Flüsse von Juni bis Oktober viel Wasser und sind sedimentbraun – spektakuläre Wassermengen, aber keine Postkartenfarbe, und einige Aktivitäten pausieren. Zweitens ist die späte Trockenzeit inzwischen ein echtes Risiko: Der Wasserfall Tamul war Anfang 2024 und erneut im April–Mai 2026 fast ausgetrocknet (flussaufwärts entnommenes Bewässerungswasser plus Hitze, laut La Jornada), daher sollten Besucher im April und Mai ihre Erwartungen an die Wasserfälle zügeln. Planen Sie sie richtig mit dem <a href='/blog/huasteca-potosina-itinerary-2026' class='text-emerald-700 underline font-semibold'>Huasteca-Reiseplan</a>.</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <div class="flex items-center justify-between flex-wrap gap-2 mb-2">
      <h3 class="font-bold text-xl text-gray-900">FENAPO (die Landesmesse)</h3>
      <span class="text-xs font-semibold bg-amber-100 text-amber-800 rounded-full px-3 py-1">August</span>
    </div>
    <p class="text-sm text-gray-700 leading-relaxed">Die FENAPO 2026 findet vom 7. bis 30. August statt. Der August liegt mitten in der Regenzeit, ist aber angenehm: Tage mit 26–28°C, Nächte mit 12–14°C und ~10 Regentage im Monat, meist kurze Abendschauer statt Dauerregen. Strategie für die Messe: eine leichte Regenjacke für den Abend, etwas Warmes für den Weg zum Auto nach dem Palenque – auf 1,860 m beißt die Nachtluft selbst im Sommer. Programm, Tickets und Logistik: <a href="/events/fenapo-2026" class="text-amber-700 underline font-semibold">unser FENAPO-2026-Hub</a>.</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <div class="flex items-center justify-between flex-wrap gap-2 mb-2">
      <h3 class="font-bold text-xl text-gray-900">Xantolo (Tag der Toten in der Huasteca)</h3>
      <span class="text-xs font-semibold bg-purple-100 text-purple-800 rounded-full px-3 py-1">Ende Okt–Anfang Nov</span>
    </div>
    <p class="text-sm text-gray-700 leading-relaxed">Das Xantolo-Wetter ist Übergangswetter: In Ciudad Valles erreicht der Oktober im Mittel noch Höchstwerte von 31°C bei 114 mm Regen, während der November auf 28°C und 41 mm zurückgeht – so fällt das Fest meist genau in die Zeit, in der der Regen aufhört und bevor das türkisfarbene Wasser vollständig zurückkehrt. Warme Tage, milde Nächte (16–19°C) und eine reale Chance auf einen Schauer in den letzten Oktobertagen. Wenn Sie in der Hauptstadt übernachten, liegen dieselben Nächte bei 6–12°C – packen Sie für beides.</p>
  </div>

</div>
</section>

<section id="faq" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-orange-500 pb-3 inline-block">Häufige Fragen</h2>
</div>
<div class="space-y-4">
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Wann ist die beste Reisezeit für San Luis Potosí?<span class="text-orange-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Für die Stadt von Oktober bis April: die trockene, klare Jahreszeit mit milden, sonnigen Tagen (Höchstwerte von 21–30°C) und kaum Regen. Für türkisfarbenes Wasser in der Huasteca Potosina ist November bis März der ideale Zeitraum – die Flüsse haben sich nach den Regenfällen geklärt, aber noch nicht die Tiefstände der späten Trockenzeit erreicht, die den Wasserfall Tamul im April und Mai fast austrocknen ließen (dokumentiert 2024 und erneut 2026). Für die FENAPO, die Landesmesse (7.–30. August 2026), kommen Sie im August und rechnen Sie mit warmen Tagen und abendlichen Schauern.</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Wann ist die Regenzeit in San Luis Potosí?<span class="text-orange-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">In der Stadt etwa von Ende Mai bis Anfang Oktober, wobei die Monate Juni bis September den Großteil der jährlichen ~386–404 mm ausmachen und der September der nasseste Monat ist (75–82 mm). Das Tiefland der Huasteca bekommt etwa dreimal so viel Regen: Ciudad Valles verzeichnet 1,208 mm pro Jahr, davon allein 235 mm im Juli und 244 mm im September (SMN-Klima-Normalwerte 1991–2020).</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Wie kalt wird es in San Luis Potosí im Winter?<span class="text-orange-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Die Stadt liegt auf rund 1,860 m, daher geht es im Winter um kalte Nächte, nicht um kalte Tage: An Dezember- und Januarnachmittagen werden noch 21–23°C erreicht, doch die nächtlichen Tiefstwerte liegen im Mittel bei 4–7°C, und die SMN-Stationsdaten zeigen Minima unter dem Gefrierpunkt in jedem Monat von Oktober bis März. Packen Sie echte Zusatzschichten für die Morgen- und Abendstunden.</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Ist das Wetter in der Huasteca Potosina dasselbe wie in der Stadt?<span class="text-orange-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Nein – es sind zwei verschiedene Klimazonen in einem Bundesstaat. Die Hauptstadt ist halbtrockenes Hochland auf ~1,860 m: ~400 mm Regen im Jahr, trockene Luft und kühle Nächte das ganze Jahr über. Ciudad Valles, das Zentrum der Huasteca, liegt auf 87 m: heiß und feucht, durchschnittliche Höchstwerte im Mai von 36°C, 1,208 mm Jahresniederschlag und Nächte, die im Sommer selten unter 22°C fallen. Prüfen Sie beide Vorhersagen, wenn Ihre Reise beide Regionen umfasst.</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Wie ist das Wetter während der FENAPO im August?<span class="text-orange-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Warm und gut zu bewältigen: Der August erreicht in der Stadt im Mittel Höchstwerte von 26–28°C und Tiefstwerte von 12–14°C, mit rund 10 Regentagen im Monat (insgesamt 48–55 mm) – typischerweise kurze Abendschauer. Bringen Sie eine leichte Regenjacke mit und etwas Warmes für den späten Weg vom Palenque; auf dieser Höhe fällt die Temperatur nach Sonnenuntergang schnell.</p></details>
</div>
</section>

<section id="sources" class="mb-8 scroll-mt-8">
<div class="not-prose mb-4">
  <h2 class="text-2xl font-bold text-gray-900 mb-3">Quellen</h2>
</div>
<p class="text-sm text-gray-600 leading-relaxed">Werte zu Temperatur, Niederschlag und Regentagen: SMN/CONAGUA-Klima-Normalwerte 1991–2020 für die Stationen <a href="https://smn.conagua.gob.mx/tools/RESOURCES/Normales_Climatologicas/Normales9120/slp/nor9120_24069.txt" class="underline" rel="nofollow">24069 San Luis Potosí (DGE)</a>, <a href="https://smn.conagua.gob.mx/tools/RESOURCES/Normales_Climatologicas/Normales9120/slp/nor9120_24111.txt" class="underline" rel="nofollow">24111 San Luis Potosí (SMN)</a> und <a href="https://smn.conagua.gob.mx/tools/RESOURCES/Normales_Climatologicas/Normales9120/slp/nor9120_24012.txt" class="underline" rel="nofollow">24012 Ciudad Valles</a>, abgerufen im Juli 2026; die Werte für die Stadt sind als Spannen über die beiden städtischen Stationen angegeben. Saisonalität von Sonnenschein und Bewölkung: <a href="https://weatherspark.com/y/5131/Average-Weather-in-San-Luis-Potos%C3%AD-Mexico-Year-Round" class="underline" rel="nofollow">WeatherSpark</a> (modellierte Daten). Saison des türkisfarbenen Wassers gegenüber der Sedimentzeit: Huasteca-Potosina.com und regionale Reiseführer. Niedrigwasser-Episoden am Tamul: La Jornada (Feb. 2024 und 6. Mai 2026) und Potosinoticias (27. Apr. 2026). Klimaklassifikation und Höhenlage: Wikipedia (BSh, halbtrocken; 1,864 m) und SMN-Stationsmetadaten (1,870–1,903 m). Normalwerte sind 30-Jahres-Mittel – einzelne Jahre können abweichen.</p>
</section>

<div class="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-8 text-center">
  <p class="text-white text-lg font-bold mb-2">Ihren Monat gewählt? Jetzt wählen Sie Ihr Programm.</p>
  <p class="text-orange-100 text-sm mb-4">Sehen Sie, <a href="/events/this-week" class="underline font-semibold text-white">was diese Woche los ist</a> – oder erhalten Sie die wöchentliche Agenda kostenlos.</p>
  <a href="/subscribe" class="inline-block bg-white text-orange-600 font-bold px-6 py-3 rounded-full hover:bg-orange-50 transition-colors">San Luis Way Weekly abonnieren</a>
</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Wann ist die beste Reisezeit für San Luis Potosí?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Für die Stadt von Oktober bis April: die trockene, klare Jahreszeit mit milden, sonnigen Tagen (Höchstwerte von 21–30°C) und kaum Regen. Für türkisfarbenes Wasser in der Huasteca Potosina ist November bis März der ideale Zeitraum – die Flüsse haben sich nach den Regenfällen geklärt, aber noch nicht die Tiefstände der späten Trockenzeit erreicht, die den Wasserfall Tamul im April und Mai fast austrocknen ließen (dokumentiert 2024 und erneut 2026). Für die FENAPO, die Landesmesse (7.–30. August 2026), kommen Sie im August und rechnen Sie mit warmen Tagen und abendlichen Schauern."
      }
    },
    {
      "@type": "Question",
      "name": "Wann ist die Regenzeit in San Luis Potosí?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In der Stadt etwa von Ende Mai bis Anfang Oktober, wobei die Monate Juni bis September den Großteil der jährlichen ~386–404 mm ausmachen und der September der nasseste Monat ist (75–82 mm). Das Tiefland der Huasteca bekommt etwa dreimal so viel Regen: Ciudad Valles verzeichnet 1,208 mm pro Jahr, davon allein 235 mm im Juli und 244 mm im September (SMN-Klima-Normalwerte 1991–2020)."
      }
    },
    {
      "@type": "Question",
      "name": "Wie kalt wird es in San Luis Potosí im Winter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Die Stadt liegt auf rund 1,860 m, daher geht es im Winter um kalte Nächte, nicht um kalte Tage: An Dezember- und Januarnachmittagen werden noch 21–23°C erreicht, doch die nächtlichen Tiefstwerte liegen im Mittel bei 4–7°C, und die SMN-Stationsdaten zeigen Minima unter dem Gefrierpunkt in jedem Monat von Oktober bis März. Packen Sie echte Zusatzschichten für die Morgen- und Abendstunden."
      }
    },
    {
      "@type": "Question",
      "name": "Ist das Wetter in der Huasteca Potosina dasselbe wie in der Stadt?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nein – es sind zwei verschiedene Klimazonen in einem Bundesstaat. Die Hauptstadt ist halbtrockenes Hochland auf ~1,860 m: ~400 mm Regen im Jahr, trockene Luft und kühle Nächte das ganze Jahr über. Ciudad Valles, das Zentrum der Huasteca, liegt auf 87 m: heiß und feucht, durchschnittliche Höchstwerte im Mai von 36°C, 1,208 mm Jahresniederschlag und Nächte, die im Sommer selten unter 22°C fallen. Prüfen Sie beide Vorhersagen, wenn Ihre Reise beide Regionen umfasst."
      }
    },
    {
      "@type": "Question",
      "name": "Wie ist das Wetter während der FENAPO im August?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Warm und gut zu bewältigen: Der August erreicht in der Stadt im Mittel Höchstwerte von 26–28°C und Tiefstwerte von 12–14°C, mit rund 10 Regentagen im Monat (insgesamt 48–55 mm) – typischerweise kurze Abendschauer. Bringen Sie eine leichte Regenjacke mit und etwas Warmes für den späten Weg vom Palenque; auf dieser Höhe fällt die Temperatur nach Sonnenuntergang schnell."
      }
    }
  ]
}
</script>

</div>`;

const content_ja = `<div class="max-w-none">

<p class="text-xl leading-relaxed text-gray-800 mb-8 font-medium">
  <strong>San Luis Potosíの天候の秘密は標高にあります。</strong>標高約1,860 mに位置する州都では、年間300日を超える高地砂漠の晴天に恵まれ、どの月も昼下がりは穏やかで、夜は必ず涼しくなります。ここでは月ごとの気候表（SMNの1991–2020年平年値）、旅の目的別のベストシーズン、そして見落としてはならない重要な点をご紹介します。東へ3時間のHuasteca Potosinaは、まったく異なる気候だということです。
</p>

<div class="speakable bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-200 rounded-2xl p-6 md:p-8 mb-10">
  <p class="text-base md:text-lg text-gray-800 leading-relaxed">
    <strong>手短な答え:</strong> 市内は10月～4月に訪れましょう（乾燥して晴れ、日中21–30°C）。Huastecaの滝は11月～3月に楽しみましょう（ターコイズ色の水、乾季後半の水位低下の前）。最も強い日差しは5月、最も多い雨は9月、そして12月～2月の明け方は氷点近くまで冷え込みます。
  </p>
</div>

<section id="month-by-month" class="mb-12 scroll-mt-8">
<div class="not-prose mb-4">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-2 border-b-4 border-orange-500 pb-3 inline-block">San Luis Potosí市、月ごとの気候</h2>
</div>
<p class="text-sm text-gray-600 mb-4">SMN/CONAGUAの気候平年値1991–2020年。市の数値は、SLP市内の2つの観測所（24069および24111、標高約1,870 m）にわたる範囲で示しています。降雨日 = 計測可能な雨が降った日。</p>
<div class="overflow-x-auto mb-4"><table class="w-full text-sm text-gray-700">
    <thead><tr class="border-b-2 border-orange-300 text-left"><th class="py-2 pr-3 font-bold text-gray-900 ">月</th><th class="py-2 pr-3 font-bold text-gray-900 text-center">最高 (°C)</th><th class="py-2 pr-3 font-bold text-gray-900 text-center">最低 (°C)</th><th class="py-2 pr-3 font-bold text-gray-900 text-center">降水量 (mm)</th><th class="py-2 pr-3 font-bold text-gray-900 text-center">降雨日</th><th class="py-2 pr-3 font-bold text-gray-900 ">ひとことで</th></tr></thead>
    <tbody><tr class="border-b border-gray-100">
      <td class="py-2 pr-3 font-semibold text-gray-900 whitespace-nowrap">1月</td>
      <td class="py-2 pr-3 text-center">21–22</td><td class="py-2 pr-3 text-center">4–7</td>
      <td class="py-2 pr-3 text-center">13–14</td><td class="py-2 pr-3 text-center">4–8</td>
      <td class="py-2 text-gray-600">最も寒い月。昼下がりは晴れ、明け方は氷点近く</td></tr>
<tr class="border-b border-gray-100">
      <td class="py-2 pr-3 font-semibold text-gray-900 whitespace-nowrap">2月</td>
      <td class="py-2 pr-3 text-center">23–25</td><td class="py-2 pr-3 text-center">5–8</td>
      <td class="py-2 pr-3 text-center">11–12</td><td class="py-2 pr-3 text-center">3–5</td>
      <td class="py-2 text-gray-600">乾燥し暖かくなる。夜はまだ寒い</td></tr>
<tr class="border-b border-gray-100">
      <td class="py-2 pr-3 font-semibold text-gray-900 whitespace-nowrap">3月</td>
      <td class="py-2 pr-3 text-center">26–27</td><td class="py-2 pr-3 text-center">7–10</td>
      <td class="py-2 pr-3 text-center">8–9</td><td class="py-2 pr-3 text-center">3–4</td>
      <td class="py-2 text-gray-600">一年で最も乾く時期。本格的な春の暖かさ</td></tr>
<tr class="border-b border-gray-100">
      <td class="py-2 pr-3 font-semibold text-gray-900 whitespace-nowrap">4月</td>
      <td class="py-2 pr-3 text-center">29–30</td><td class="py-2 pr-3 text-center">10–13</td>
      <td class="py-2 pr-3 text-center">11</td><td class="py-2 pr-3 text-center">3–4</td>
      <td class="py-2 text-gray-600">暑く乾燥して晴れ。Huastecaの川は最低水位に</td></tr>
<tr class="border-b border-gray-100">
      <td class="py-2 pr-3 font-semibold text-gray-900 whitespace-nowrap">5月</td>
      <td class="py-2 pr-3 text-center">29–31</td><td class="py-2 pr-3 text-center">12–14</td>
      <td class="py-2 pr-3 text-center">37–44</td><td class="py-2 pr-3 text-center">7–9</td>
      <td class="py-2 text-gray-600">最も暑く晴れる月。月末に最初の嵐</td></tr>
<tr class="border-b border-gray-100">
      <td class="py-2 pr-3 font-semibold text-gray-900 whitespace-nowrap">6月</td>
      <td class="py-2 pr-3 text-center">27–29</td><td class="py-2 pr-3 text-center">13–15</td>
      <td class="py-2 pr-3 text-center">59</td><td class="py-2 pr-3 text-center">9–11</td>
      <td class="py-2 text-gray-600">雨季の始まり。午後から夕方にかけて雷雨</td></tr>
<tr class="border-b border-gray-100">
      <td class="py-2 pr-3 font-semibold text-gray-900 whitespace-nowrap">7月</td>
      <td class="py-2 pr-3 text-center">26–28</td><td class="py-2 pr-3 text-center">12–14</td>
      <td class="py-2 pr-3 text-center">62–76</td><td class="py-2 pr-3 text-center">10</td>
      <td class="py-2 text-gray-600">暖かい日々、規則的な夕方の雨、緑の丘</td></tr>
<tr class="border-b border-gray-100">
      <td class="py-2 pr-3 font-semibold text-gray-900 whitespace-nowrap">8月</td>
      <td class="py-2 pr-3 text-center">26–28</td><td class="py-2 pr-3 text-center">12–14</td>
      <td class="py-2 pr-3 text-center">48–55</td><td class="py-2 pr-3 text-center">10</td>
      <td class="py-2 text-gray-600">FENAPOの月。暖かく、夕方に雨</td></tr>
<tr class="border-b border-gray-100">
      <td class="py-2 pr-3 font-semibold text-gray-900 whitespace-nowrap">9月</td>
      <td class="py-2 pr-3 text-center">24–26</td><td class="py-2 pr-3 text-center">12–14</td>
      <td class="py-2 pr-3 text-center">75–82</td><td class="py-2 pr-3 text-center">13</td>
      <td class="py-2 text-gray-600">一年で最も雨が多く曇る月</td></tr>
<tr class="border-b border-gray-100">
      <td class="py-2 pr-3 font-semibold text-gray-900 whitespace-nowrap">10月</td>
      <td class="py-2 pr-3 text-center">24–25</td><td class="py-2 pr-3 text-center">9–12</td>
      <td class="py-2 pr-3 text-center">31–33</td><td class="py-2 pr-3 text-center">8–11</td>
      <td class="py-2 text-gray-600">雨が引き、長い晴天の季節が始まる</td></tr>
<tr class="border-b border-gray-100">
      <td class="py-2 pr-3 font-semibold text-gray-900 whitespace-nowrap">11月</td>
      <td class="py-2 pr-3 text-center">22–24</td><td class="py-2 pr-3 text-center">6–9</td>
      <td class="py-2 pr-3 text-center">12–15</td><td class="py-2 pr-3 text-center">4–8</td>
      <td class="py-2 text-gray-600">乾燥した穏やかな日々、肌寒い夜。Huastecaにターコイズ色の水が戻る</td></tr>
<tr class="border-b border-gray-100">
      <td class="py-2 pr-3 font-semibold text-gray-900 whitespace-nowrap">12月</td>
      <td class="py-2 pr-3 text-center">21–23</td><td class="py-2 pr-3 text-center">4–7</td>
      <td class="py-2 pr-3 text-center">7–8</td><td class="py-2 pr-3 text-center">2–8</td>
      <td class="py-2 text-gray-600">最も乾く月。澄んで明るい冬の日々</td></tr></tbody></table></div>
<p class="text-sm text-gray-600">年間合計: 81–95日の降雨日にわたって386–404 mmの雨。WeatherSparkによれば、より晴れる時期は10月下旬ごろに始まり約7.7か月続きます。5月が最も晴れ、9月が最も曇る月で、この標高では蒸し暑さは一年を通してほぼ皆無です。</p>
</section>

<div class="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 md:p-8 mb-12">
  <h2 class="text-2xl font-bold text-blue-900 mb-3">標高の効果: 毎日、二つの季節に備えて荷造りを</h2>
  <p class="text-gray-800 leading-relaxed">市の半乾燥高地気候では、昼下がりと明け方で15–17°Cの差が生じるのが普通です。4°Cの朝のあとに、22°Cの晴れた1月の昼下がりが続くこともあります。SMN観測所の記録では、10月から3月までのどの月にも氷点下の最低気温が見られます（観測所24111では1月に−8°C、12月に−8.5°Cまで低下）。どの月であっても、日中は日焼け止め、日が暮れてからはしっかりとした上着を。</p>
</div>

<section id="city-vs-huasteca" class="mb-12 scroll-mt-8">
<div class="not-prose mb-4">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-2 border-b-4 border-emerald-500 pb-3 inline-block">一つの州、二つの気候: 市街とHuasteca</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">これが荷造りを台無しにする間違いです。Huastecaへの旅なのに州都の予報を確認してしまうのです。滝の拠点であるCiudad Valles（標高87 m）は、暑く湿った低地です。州都の<strong>3倍の雨</strong>が降り（年間1,208 mmに対し約400 mm）、5月の平均最高気温は36°C、記録された極値は48°C近く、夏の夜は22°Cを下回りません。一方、州都はどの月も平均で31°Cを超えることはなく、夜は必ず涼しくなります。</p>
<h3 class="font-bold text-xl text-gray-900 mb-2">Ciudad Valles（Huasteca）、月ごとの気候</h3>
<p class="text-sm text-gray-600 mb-3">SMN/CONAGUA平年値1991–2020年、観測所24012（標高87 m）。</p>
<div class="overflow-x-auto mb-4"><table class="w-full text-sm text-gray-700">
    <thead><tr class="border-b-2 border-emerald-300 text-left"><th class="py-2 pr-3 font-bold text-gray-900 ">月</th><th class="py-2 pr-3 font-bold text-gray-900 text-center">最高 (°C)</th><th class="py-2 pr-3 font-bold text-gray-900 text-center">最低 (°C)</th><th class="py-2 pr-3 font-bold text-gray-900 text-center">降水量 (mm)</th></tr></thead>
    <tbody><tr class="border-b border-gray-100"><td class="py-2 pr-3 font-semibold text-gray-900 whitespace-nowrap">1月</td>
      <td class="py-2 pr-3 text-center">25.1</td><td class="py-2 pr-3 text-center">12.4</td><td class="py-2 text-center">23.6</td></tr>
<tr class="border-b border-gray-100"><td class="py-2 pr-3 font-semibold text-gray-900 whitespace-nowrap">2月</td>
      <td class="py-2 pr-3 text-center">28.0</td><td class="py-2 pr-3 text-center">14.0</td><td class="py-2 text-center">17.4</td></tr>
<tr class="border-b border-gray-100"><td class="py-2 pr-3 font-semibold text-gray-900 whitespace-nowrap">3月</td>
      <td class="py-2 pr-3 text-center">31.3</td><td class="py-2 pr-3 text-center">16.9</td><td class="py-2 text-center">32.1</td></tr>
<tr class="border-b border-gray-100"><td class="py-2 pr-3 font-semibold text-gray-900 whitespace-nowrap">4月</td>
      <td class="py-2 pr-3 text-center">34.2</td><td class="py-2 pr-3 text-center">19.6</td><td class="py-2 text-center">40.4</td></tr>
<tr class="border-b border-gray-100"><td class="py-2 pr-3 font-semibold text-gray-900 whitespace-nowrap">5月</td>
      <td class="py-2 pr-3 text-center">36.0</td><td class="py-2 pr-3 text-center">22.2</td><td class="py-2 text-center">95.8</td></tr>
<tr class="border-b border-gray-100"><td class="py-2 pr-3 font-semibold text-gray-900 whitespace-nowrap">6月</td>
      <td class="py-2 pr-3 text-center">35.7</td><td class="py-2 pr-3 text-center">23.0</td><td class="py-2 text-center">184.7</td></tr>
<tr class="border-b border-gray-100"><td class="py-2 pr-3 font-semibold text-gray-900 whitespace-nowrap">7月</td>
      <td class="py-2 pr-3 text-center">34.2</td><td class="py-2 pr-3 text-center">22.5</td><td class="py-2 text-center">235.4</td></tr>
<tr class="border-b border-gray-100"><td class="py-2 pr-3 font-semibold text-gray-900 whitespace-nowrap">8月</td>
      <td class="py-2 pr-3 text-center">35.0</td><td class="py-2 pr-3 text-center">22.5</td><td class="py-2 text-center">158.6</td></tr>
<tr class="border-b border-gray-100"><td class="py-2 pr-3 font-semibold text-gray-900 whitespace-nowrap">9月</td>
      <td class="py-2 pr-3 text-center">32.9</td><td class="py-2 pr-3 text-center">21.7</td><td class="py-2 text-center">243.6</td></tr>
<tr class="border-b border-gray-100"><td class="py-2 pr-3 font-semibold text-gray-900 whitespace-nowrap">10月</td>
      <td class="py-2 pr-3 text-center">31.1</td><td class="py-2 pr-3 text-center">19.3</td><td class="py-2 text-center">113.9</td></tr>
<tr class="border-b border-gray-100"><td class="py-2 pr-3 font-semibold text-gray-900 whitespace-nowrap">11月</td>
      <td class="py-2 pr-3 text-center">28.2</td><td class="py-2 pr-3 text-center">16.1</td><td class="py-2 text-center">41.4</td></tr>
<tr class="border-b border-gray-100"><td class="py-2 pr-3 font-semibold text-gray-900 whitespace-nowrap">12月</td>
      <td class="py-2 pr-3 text-center">25.9</td><td class="py-2 pr-3 text-center">13.4</td><td class="py-2 text-center">21.5</td></tr></tbody></table></div>
<p class="text-gray-800 leading-relaxed">実際のところ、6月～10月はHuastecaの川は増水し、堆積物で茶色く濁ります。おおむね11月～4月には、あの有名なターコイズ色に変わります。詳しい行程は<a href="/blog/huasteca-potosina-itinerary-2026" class="text-emerald-700 underline font-semibold">3/5/7日間のHuasteca旅程</a>をご覧ください。</p>
</section>

<section id="best-time" class="mb-12 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-2 border-b-4 border-orange-500 pb-3 inline-block">旅のタイプ別・ベストシーズン</h2>
</div>
<div class="space-y-6">

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <div class="flex items-center justify-between flex-wrap gap-2 mb-2">
      <h3 class="font-bold text-xl text-gray-900">市内観光とグルメ</h3>
      <span class="text-xs font-semibold bg-orange-100 text-orange-800 rounded-full px-3 py-1">10月～4月</span>
    </div>
    <p class="text-sm text-gray-700 leading-relaxed">乾季は市街が最も輝く時期です。ほぼ毎日晴れ、21–27°Cの昼下がりはCentro Histórico（歴史地区）の散策にぴったりで、雨の日は月にわずか2–8日だけ。11月～2月は寒い夜のために重ね着が必要です。3月～4月は雨なしで本格的な暖かさが加わります。暑さが好きなら5月も良く（29–31°C）、最も晴れる月で、嵐が来るのはごく月末だけです。訪問のヒントは、<a href="/visit-san-luis-potosi" class="text-orange-700 underline font-semibold">ビジターガイド</a>と<a href="/blog/day-trips-from-san-luis-potosi-2026" class="text-orange-700 underline font-semibold">検証済みの日帰り7コース</a>をどうぞ。</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <div class="flex items-center justify-between flex-wrap gap-2 mb-2">
      <h3 class="font-bold text-xl text-gray-900">Huastecaの滝</h3>
      <span class="text-xs font-semibold bg-emerald-100 text-emerald-800 rounded-full px-3 py-1">11月～3月</span>
    </div>
    <p class="text-sm text-gray-700 leading-relaxed">11月～3月が絶好の時期です。ターコイズ色の水、Tampaón川のラフティングシーズン、耐えられる程度の低地の暑さ。正直な注意点が二つあります。第一に、6月～10月は川が増水して堆積物で茶色くなります。水量は壮観ですが、絵はがきのような色にはならず、一部のアクティビティは休止します。第二に、乾季後半は今や本当のリスクです。Tamulの滝は2024年初頭、そして2026年4月～5月に再びほぼ干上がったと報じられました（上流での灌漑用取水と暑さによる、La Jornada報道）。そのため4月～5月に訪れる方は滝への期待を控えめにすべきです。<a href='/blog/huasteca-potosina-itinerary-2026' class='text-emerald-700 underline font-semibold'>Huasteca旅程</a>でしっかり計画を立てましょう。</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <div class="flex items-center justify-between flex-wrap gap-2 mb-2">
      <h3 class="font-bold text-xl text-gray-900">FENAPO（州のフェア）</h3>
      <span class="text-xs font-semibold bg-amber-100 text-amber-800 rounded-full px-3 py-1">8月</span>
    </div>
    <p class="text-sm text-gray-700 leading-relaxed">FENAPO 2026は8月7日～30日に開催されます。8月は雨季の真っただ中ですが穏やかで、日中26–28°C、夜12–14°C、月に約10日の降雨日、たいていは長雨ではなく短い夕立です。フェアの心得: 夕方用に軽い雨具、Palenqueのあと車まで歩くための暖かいものを。標高1,860 mでは夏でも夜気は身にしみます。ラインナップ、チケット、アクセスは<a href="/events/fenapo-2026" class="text-amber-700 underline font-semibold">FENAPO 2026特集ページ</a>へ。</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <div class="flex items-center justify-between flex-wrap gap-2 mb-2">
      <h3 class="font-bold text-xl text-gray-900">Xantolo（Huastecaの死者の日）</h3>
      <span class="text-xs font-semibold bg-purple-100 text-purple-800 rounded-full px-3 py-1">10月下旬～11月上旬</span>
    </div>
    <p class="text-sm text-gray-700 leading-relaxed">Xantoloの天候は移り変わりの天候です。Ciudad Vallesでは、10月はなお平均最高31°C・降水量114 mmですが、11月には28°C・41 mmまで下がります。そのため祭りはたいてい、ちょうど雨が止み、ターコイズ色の水が完全に戻る前の時期に当たります。暖かい日々、穏やかな夜（16–19°C）、そして10月末の数日は雨の可能性も十分あります。州都に滞在する場合、同じ夜でも6–12°Cになります。両方に備えて荷造りを。</p>
  </div>

</div>
</section>

<section id="faq" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-orange-500 pb-3 inline-block">よくある質問</h2>
</div>
<div class="space-y-4">
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">San Luis Potosíのベストシーズンはいつですか？<span class="text-orange-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">市内なら10月～4月です。乾燥して晴れる季節で、穏やかな晴天の日々（最高21–30°C）とほとんど雨のない天候です。Huasteca Potosinaのターコイズ色の水を見るなら11月～3月が絶好の時期で、雨のあとに川が澄み、まだ乾季後半の水位低下には至っていません（この低下でTamulの滝は4月～5月にほぼ干上がりました。2024年、そして2026年にも記録）。州のフェアFENAPO（2026年8月7日～30日）を目当てにするなら8月に訪れ、暖かい日中と夕方の雨を見込んでください。</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">San Luis Potosíの雨季はいつですか？<span class="text-orange-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">市内では、おおよそ5月下旬から10月上旬で、6月～9月に年間約386–404 mmの大半が集中し、9月が最も雨の多い月です（75–82 mm）。Huastecaの低地はおよそ3倍の雨が降ります。Ciudad Vallesでは年間1,208 mmを記録し、7月だけで235 mm、9月だけで244 mmに達します（SMN気候平年値1991–2020年）。</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">San Luis Potosíの冬はどれくらい寒くなりますか？<span class="text-orange-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">市街は標高約1,860 mにあるため、冬は寒い日ではなく寒い夜が問題です。12月～1月の昼下がりでも21–23°Cに達しますが、夜間の最低気温は平均4–7°Cで、SMN観測所の記録では10月から3月までのどの月にも氷点下の最低気温が見られます。朝晩用にしっかりした重ね着を用意してください。</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Huasteca Potosinaの天候は市内と同じですか？<span class="text-orange-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">いいえ。一つの州に二つの異なる気候があります。州都は標高約1,860 mの半乾燥高地で、年間約400 mmの雨、乾いた空気、一年を通して涼しい夜です。Huastecaの拠点Ciudad Vallesは標高87 mで、暑く湿潤、5月の平均最高36°C、年間降水量1,208 mm、夏の夜は22°Cを下回ることがめったにありません。旅程が両方を含む場合は、両方の予報を確認してください。</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">8月のFENAPOの時期の天候はどうですか？<span class="text-orange-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">暖かく、無理のない天候です。市内の8月は平均で最高26–28°C・最低12–14°C、月に約10日の降雨日（合計48–55 mm）で、たいていは短い夕立です。軽い雨具と、Palenqueの深夜の退出時に備えた暖かいものを持参してください。この標高では日没後に気温が急速に下がります。</p></details>
</div>
</section>

<section id="sources" class="mb-8 scroll-mt-8">
<div class="not-prose mb-4">
  <h2 class="text-2xl font-bold text-gray-900 mb-3">出典</h2>
</div>
<p class="text-sm text-gray-600 leading-relaxed">気温・降水量・降雨日の数値: 観測所<a href="https://smn.conagua.gob.mx/tools/RESOURCES/Normales_Climatologicas/Normales9120/slp/nor9120_24069.txt" class="underline" rel="nofollow">24069 San Luis Potosí (DGE)</a>、<a href="https://smn.conagua.gob.mx/tools/RESOURCES/Normales_Climatologicas/Normales9120/slp/nor9120_24111.txt" class="underline" rel="nofollow">24111 San Luis Potosí (SMN)</a>、<a href="https://smn.conagua.gob.mx/tools/RESOURCES/Normales_Climatologicas/Normales9120/slp/nor9120_24012.txt" class="underline" rel="nofollow">24012 Ciudad Valles</a>のSMN/CONAGUA気候平年値1991–2020年（2026年7月取得）。市の数値は2つの市街地観測所にわたる範囲で示しています。日照・雲量の季節変化: <a href="https://weatherspark.com/y/5131/Average-Weather-in-San-Luis-Potos%C3%AD-Mexico-Year-Round" class="underline" rel="nofollow">WeatherSpark</a>（モデル化データ）。ターコイズ色の水と堆積物の季節: Huasteca-Potosina.comおよび地域のガイド。Tamulの低水位事象: La Jornada（2024年2月および2026年5月6日）とPotosinoticias（2026年4月27日）。気候区分と標高: Wikipedia（BSh 半乾燥、1,864 m）およびSMN観測所メタデータ（1,870–1,903 m）。平年値は30年平均であり、年によって変動することがあります。</p>
</section>

<div class="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-8 text-center">
  <p class="text-white text-lg font-bold mb-2">月は決まりましたか？次は予定を決めましょう。</p>
  <p class="text-orange-100 text-sm mb-4"><a href="/events/this-week" class="underline font-semibold text-white">今週の催し</a>をチェック。あるいは毎週のアジェンダを無料で受け取りましょう。</p>
  <a href="/subscribe" class="inline-block bg-white text-orange-600 font-bold px-6 py-3 rounded-full hover:bg-orange-50 transition-colors">San Luis Way Weeklyを購読する</a>
</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "San Luis Potosíのベストシーズンはいつですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "市内なら10月～4月です。乾燥して晴れる季節で、穏やかな晴天の日々（最高21–30°C）とほとんど雨のない天候です。Huasteca Potosinaのターコイズ色の水を見るなら11月～3月が絶好の時期で、雨のあとに川が澄み、まだ乾季後半の水位低下には至っていません（この低下でTamulの滝は4月～5月にほぼ干上がりました。2024年、そして2026年にも記録）。州のフェアFENAPO（2026年8月7日～30日）を目当てにするなら8月に訪れ、暖かい日中と夕方の雨を見込んでください。"
      }
    },
    {
      "@type": "Question",
      "name": "San Luis Potosíの雨季はいつですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "市内では、おおよそ5月下旬から10月上旬で、6月～9月に年間約386–404 mmの大半が集中し、9月が最も雨の多い月です（75–82 mm）。Huastecaの低地はおよそ3倍の雨が降ります。Ciudad Vallesでは年間1,208 mmを記録し、7月だけで235 mm、9月だけで244 mmに達します（SMN気候平年値1991–2020年）。"
      }
    },
    {
      "@type": "Question",
      "name": "San Luis Potosíの冬はどれくらい寒くなりますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "市街は標高約1,860 mにあるため、冬は寒い日ではなく寒い夜が問題です。12月～1月の昼下がりでも21–23°Cに達しますが、夜間の最低気温は平均4–7°Cで、SMN観測所の記録では10月から3月までのどの月にも氷点下の最低気温が見られます。朝晩用にしっかりした重ね着を用意してください。"
      }
    },
    {
      "@type": "Question",
      "name": "Huasteca Potosinaの天候は市内と同じですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "いいえ。一つの州に二つの異なる気候があります。州都は標高約1,860 mの半乾燥高地で、年間約400 mmの雨、乾いた空気、一年を通して涼しい夜です。Huastecaの拠点Ciudad Vallesは標高87 mで、暑く湿潤、5月の平均最高36°C、年間降水量1,208 mm、夏の夜は22°Cを下回ることがめったにありません。旅程が両方を含む場合は、両方の予報を確認してください。"
      }
    },
    {
      "@type": "Question",
      "name": "8月のFENAPOの時期の天候はどうですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "暖かく、無理のない天候です。市内の8月は平均で最高26–28°C・最低12–14°C、月に約10日の降雨日（合計48–55 mm）で、たいていは短い夕立です。軽い雨具と、Palenqueの深夜の退出時に備えた暖かいものを持参してください。この標高では日没後に気温が急速に下がります。"
      }
    }
  ]
}
</script>

</div>`;

async function main() {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('id, content, content_de, content_ja')
    .eq('slug', SLUG)
    .maybeSingle();
  if (error || !data) {
    console.error('FETCH ERROR:', error ? error.message : 'post not found');
    process.exit(1);
  }

  const update = { content_de, content_ja };
  const { error: upErr } = await supabase.from('blog_posts').update(update).eq('id', data.id);
  if (upErr) {
    console.error('UPDATE ERROR:', upErr.message);
    process.exit(1);
  }
  console.log('Updated content_de + content_ja for', SLUG);

  // Verify: re-fetch and run integrity checks.
  const { data: check, error: chkErr } = await supabase
    .from('blog_posts')
    .select('content, content_de, content_ja')
    .eq('id', data.id)
    .single();
  if (chkErr) {
    console.error('VERIFY FETCH ERROR:', chkErr.message);
    process.exit(1);
  }

  const tagCount = (s) => (s.match(/<[^>]+>/g) || []).length;
  const jsonLd = (s) => {
    const m = s.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
    if (!m) return { ok: false, err: 'no JSON-LD block' };
    try { JSON.parse(m[1].trim()); return { ok: true }; }
    catch (e) { return { ok: false, err: e.message }; }
  };
  // Rough leftover-English detector: ASCII words >=4 letters that are not
  // allowed proper nouns / source names / codes.
  const ALLOW = new RegExp(
    '(San|Luis|Potos|Huasteca|Potosina|Ciudad|Valles|Tamul|Tampa|FENAPO|Xantolo|' +
    'Palenque|Centro|Hist|rico|WeatherSpark|CONAGUA|Jornada|Potosinoticias|Wikipedia|' +
    'Way|Weekly|DGE|SMN|BSh|https|smn|conagua|gob|txt|weatherspark|Average|Weather|Mexico|' +
    'Year|Round|Normales|Climatologicas|tools|RESOURCES|nofollow|schema|org|FAQPage|Question|' +
    'Answer|acceptedAnswer|mainEntity|context|type|name|text|application|json|ld|script|' +
    'blog|huasteca|potosina|itinerary|visit|san|luis|potosi|day|trips|from|events|fenapo|' +
    'subscribe|this|week|underline|semibold|emerald|orange|amber|purple|text|font|bold|' +
    'Kulinarik|Reiseplan|Hub)',
    'i'
  );
  const leftover = (html) => {
    // strip tags, scripts already contain translated text
    const textOnly = html.replace(/<[^>]+>/g, ' ');
    const words = textOnly.match(/[A-Za-z]{4,}/g) || [];
    return [...new Set(words.filter((w) => !ALLOW.test(w)))];
  };

  const enTags = tagCount(check.content);
  for (const col of ['content_de', 'content_ja']) {
    const html = check[col] || '';
    console.log(`\n=== ${col} ===`);
    console.log('  differs from EN content:', html !== check.content);
    console.log('  length:', html.length);
    console.log(`  tag count: ${tagCount(html)} (EN: ${enTags}) ${tagCount(html) === enTags ? 'MATCH' : 'MISMATCH'}`);
    const jl = jsonLd(html);
    console.log('  JSON-LD valid:', jl.ok, jl.ok ? '' : jl.err);
    // table numeric integrity: compare all numbers-with-context in tables vs EN
    const enNums = (check.content.match(/-?\d[\d.,]*(?:°C|\s?mm|\s?m\b)?/g) || []).join('|');
    const colNums = (html.match(/-?\d[\d.,]*(?:°C|\s?mm|\s?m\b)?/g) || []).join('|');
    console.log('  numeric token sequence identical to EN:', enNums === colNums);
    const lo = leftover(html);
    console.log('  possible leftover English words:', lo.length ? lo.join(', ') : '(none)');
  }
}

main();
