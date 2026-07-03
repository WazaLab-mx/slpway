// Native German + Japanese translations of the huasteca-potosina-itinerary-2026
// blog post (idempotent). Replaces content_de and content_ja (which held the EN
// HTML) with genuine translations. HTML tags/attributes/classes/ids, internal
// hrefs, place names, prices (MXN), heights (m), distances and dates are
// preserved exactly; only human-readable text nodes are translated. JSON-LD
// keys/@type/@context/URLs are untouched — only string values are translated.
// Verifies by re-fetching after the update.
require('dotenv').config({ path: '.env' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const SLUG = 'huasteca-potosina-itinerary-2026';

const CONTENT_DE = `<div class="max-w-none">

<div class="bg-emerald-50 border-l-4 border-emerald-500 rounded-r-xl p-6 mb-10">
  <p class="font-bold text-emerald-900 mb-3">In diesem Reiseführer</p>
  <nav class="grid sm:grid-cols-2 gap-2 text-emerald-800 text-sm">
    <a href="#overview" class="hover:underline">→ Die Huasteca auf einen Blick</a>
    <a href="#when" class="hover:underline">→ Wann reisen (Türkis-Saison)</a>
    <a href="#getting-there" class="hover:underline">→ Anreise & Fortbewegung</a>
    <a href="#three-days" class="hover:underline">→ Die 3-Tage-Route</a>
    <a href="#five-days" class="hover:underline">→ 5 Tage: die Höhepunkte ergänzen</a>
    <a href="#seven-days" class="hover:underline">→ 7 Tage: die komplette Rundreise</a>
    <a href="#prices" class="hover:underline">→ Preistabelle 2026</a>
    <a href="#las-pozas" class="hover:underline">→ Las Pozas: So funktioniert die Reservierung</a>
    <a href="#stay" class="hover:underline">→ Unterkünfte</a>
    <a href="#faq" class="hover:underline">→ Häufige Fragen</a>
  </nav>
  <p class="mt-4 text-sm text-emerald-700 italic">Fakten und Preise im Juli 2026 geprüft · Quellen am Ende</p>
</div>

<p class="text-xl leading-relaxed text-gray-800 mb-8 font-medium">
  <strong>Die Huasteca Potosina ist Mexikos Land der Wasserfälle</strong> — eine Dschungelregion im Osten von San Luis Potosí, wo türkisfarbene Flüsse über Kalkstein stürzen: der 105 Meter hohe Wasserfall Tamul, der surrealistische Garten, den Edward James in Las Pozas anlegte, und eine Höhle, die so tief ist, dass das Empire State Building hineinpassen würde. Hier erfahren Sie genau, wie Sie die Region in 3, 5 oder 7 Tagen erleben – mit geprüften Preisen für 2026.
</p>

<section id="overview" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">Die Huasteca auf einen Blick</h2>
</div>
<div class="speakable bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200 rounded-2xl p-6 md:p-8 mb-6">
  <p class="text-base md:text-lg text-gray-800 leading-relaxed mb-5">
    <strong>Die Huasteca Potosina</strong> ist der tropische Osten des Bundesstaates San Luis Potosí. Ihr Zentrum ist <strong>Ciudad Valles</strong>, 251 km (~3,5 h) von der Stadt San Luis Potosí über die Fernstraße MEX-70 entfernt; nahezu jede Sehenswürdigkeit liegt innerhalb von ~90 Minuten. Die beste Reisezeit ist <strong>November–April</strong>, wenn das Wasser türkis wird.
  </p>
  <ul class="space-y-2">
    <li class="flex items-start gap-2 text-gray-800"><span class="text-emerald-600 mt-1">•</span><span><strong>Die großen Fünf:</strong> Cascada de Tamul, Las Pozas (Xilitla), Sótano de las Golondrinas, Cascadas de Micos, Puente de Dios</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-emerald-600 mt-1">•</span><span><strong>Budget:</strong> Eintritte kosten MX$100–250 pro Ort; Tagestouren ab Ciudad Valles ≈ MX$1,000–2,100</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-emerald-600 mt-1">•</span><span><strong>Bargeld ist König:</strong> kaum ein Ort akzeptiert Karten, und an den Wasserfällen gibt es keine Geldautomaten</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-emerald-600 mt-1">•</span><span><strong>Kultureller Bonus:</strong> besuchen Sie die Region um den 1.–2. November für <a href="/cultural/festivals" class="text-emerald-700 underline">Xantolo</a>, den Tag der Toten der Huasteca</span></li>
  </ul>
</div>
</section>

<img src="/images/outdoors/huasteca-jungle.jpg" alt="Dschungelflüsse der Huasteca Potosina" class="w-full rounded-2xl shadow-lg mb-12" loading="lazy" />

<section id="when" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">Wann reisen</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">Die Fotos, die Sie gesehen haben — unwirklich blaues Wasser — sind ein <strong>Phänomen der Trockenzeit</strong>. Während der Regenzeit (etwa Juni–Oktober) führen die Flüsse viel Wasser, fließen schnell und sind braun vom Sediment. <strong>Ab November klärt sich das Wasser und wird türkis</strong> und bleibt so bis April:</p>
<ul class="space-y-2 mb-6 text-gray-800">
  <li><strong>November–Dezember:</strong> volle Wasserführung direkt nach dem Regen, blaues Wasser — die spektakulärsten Wasserfälle.</li>
  <li><strong>Januar–März:</strong> der ideale Zeitraum. Türkisfarbenes Wasser, trockene Tage, mäßiger Andrang. Die Rafting-Saison auf dem Tampaón (Klasse III) läuft von November bis März.</li>
  <li><strong>April–Mai:</strong> noch blau, aber die Wassermenge nimmt ab; während der Dürre 2024 fiel Tamul kurzzeitig trocken, und im April–Mai 2026 trat erneut geringe bis fehlende Wasserführung auf, daher sollten Besucher am Ende der Saison ihre Erwartungen dämpfen.</li>
  <li><strong>Juni–Oktober:</strong> üppig grüner Dschungel und weniger Touristen, aber braunes Wasser und einige geschlossene Aktivitäten. Die Preise sind niedriger.</li>
</ul>
<p class="text-gray-800 leading-relaxed">Ein Timing-Tipp schlägt alle anderen: Wenn Sie vom <strong>30. Oktober bis 2. November</strong> reisen können, erleben Sie frühes türkisfarbenes Wasser und dazu <strong>Xantolo</strong> — die maskierten Feiern zum Tag der Toten der Huasteca in Aquismón, Tancanhuitz, Xilitla und Ciudad Valles.</p>
</section>

<section id="getting-there" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">Anreise & Fortbewegung</h2>
</div>
<div class="grid md:grid-cols-2 gap-4 mb-6">
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">🚗 Mit dem Auto (empfohlen)</h3><p class="text-sm text-gray-700 leading-relaxed">Stadt SLP → Ciudad Valles: 251 km auf der MEX-70, ~3,5 h, eine Mautstation (La Pitahaya). Ab Valles: Micos ~30 Min., Tamul (Anleger in Aquismón) ~45–60 Min., Tamasopo ~50 Min., Xilitla ~1 h 20 (Fernstraße 85, dann 120). Fahren Sie niemals bei Nacht — unbeleuchtete Straßen, Nebel und Topes (Bremsschwellen) sind die eigentliche Gefahr der Region.</p></div>
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">🚌 Bus + Touren</h3><p class="text-sm text-gray-700 leading-relaxed">Busse fahren von SLP nach Ciudad Valles in ~4 h 15 (ab ~MX$598). Ab Valles verkaufen örtliche Anbieter Tagestouren (≈MX$1,000–2,100 pro Person, inklusive Transport, Ausrüstung und Guide), und Viator/GetYourGuide führen dieselben Rundtouren ab ~USD $72 — einige sogar mit Abholung in der Stadt San Luis Potosí.</p></div>
</div>
<p class="text-gray-800 leading-relaxed">Schlagen Sie Ihr Basislager für die Tage 1–2 in <strong>Ciudad Valles</strong> auf (oder für die gesamte Reise, wenn Sie an Touren teilnehmen), und ziehen Sie eine Übernachtung in <strong>Xilitla</strong> in Betracht — die Morgenstunden in Las Pozas, bevor die Tagesausflügler eintreffen, sind magisch.</p>
</section>

<section id="three-days" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">Die 3-Tage-Route (das Wesentliche)</h2>
</div>

  <div class="bg-white border-l-4 border-emerald-500 rounded-r-xl shadow-sm p-6 mb-4">
    <p class="text-xs font-bold text-emerald-600 uppercase tracking-wide mb-1">Tag 1</p>
    <h4 class="font-bold text-lg text-gray-900 mb-2">Anreise + Cascadas de Micos</h4>
    <p class="text-sm text-gray-700 leading-relaxed">Verlassen Sie San Luis Potosí früh und erreichen Sie Ciudad Valles gegen Mittag (~3,5 h). Nachmittags an den Cascadas de Micos, 30 Min. entfernt: schwimmen, Kajak fahren oder – wenn Sie den Mut haben – den berühmten Sprungparcours über 7 Wasserfälle (≈MX$180) absolvieren. Übernachtung in Ciudad Valles.</p>
  </div>

  <div class="bg-white border-l-4 border-emerald-500 rounded-r-xl shadow-sm p-6 mb-4">
    <p class="text-xs font-bold text-emerald-600 uppercase tracking-wide mb-1">Tag 2</p>
    <h4 class="font-bold text-lg text-gray-900 mb-2">Cascada de Tamul im Kanu + Tamasopo</h4>
    <p class="text-sm text-gray-700 leading-relaxed">Der Höhepunkt, den Sie nicht verpassen dürfen. Von den Anlegern La Morena oder Tanchachín (Aquismón, ~1 h von Valles) paddeln Sie in einer hölzernen Panga ~4 km flussaufwärts zwischen 300-m-Schluchtwänden bis zum Fuß des 105-m-Wasserfalls — etwa 2–2,5 h hinauf, 45 Min. zurück. Fahren Sie früh los; es wird nur Bargeld akzeptiert (≈MX$150–250/Person). Nachmittags: Puente de Dios oder Cascadas de Tamasopo (~50 Min. entfernt). Übernachtung in Valles oder Xilitla.</p>
  </div>

  <div class="bg-white border-l-4 border-emerald-500 rounded-r-xl shadow-sm p-6 mb-4">
    <p class="text-xs font-bold text-emerald-600 uppercase tracking-wide mb-1">Tag 3</p>
    <h4 class="font-bold text-lg text-gray-900 mb-2">Xilitla: Las Pozas + das Pueblo Mágico</h4>
    <p class="text-sm text-gray-700 leading-relaxed">Reservieren Sie vor Ihrer Reise online das früheste Zeitfenster für Las Pozas (siehe Reservierungsbox unten). Der 1,5-stündige geführte Rundgang durch Edward James' surrealistischen Betongarten im Dschungel hat in Mexiko nicht seinesgleichen. Mittagessen im hügeligen Zentrum von Xilitla, Kaffee aus der Region, dann Rückfahrt (Xilitla → SLP ~4,5 h) oder Übernachtung und Rückkehr an Tag 4.</p>
  </div>
</section>

<section id="five-days" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-teal-500 pb-3 inline-block">5 Tage: die Höhepunkte ergänzen</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">Behalten Sie die Tage 1–3 bei und lassen Sie es ruhiger angehen (Tamul und Tamasopo verdienen jeweils einen ganzen Tag), und ergänzen Sie dann:</p>

  <div class="bg-white border-l-4 border-teal-500 rounded-r-xl shadow-sm p-6 mb-4">
    <p class="text-xs font-bold text-teal-600 uppercase tracking-wide mb-1">Tag 4</p>
    <h4 class="font-bold text-lg text-gray-900 mb-2">Sótano de las Golondrinas im Morgengrauen</h4>
    <p class="text-sm text-gray-700 leading-relaxed">Stehen Sie um 4:30 Uhr auf. Von Aquismón fahren Sie Richtung Tamapatz, gehen dann ~15 Min. zu Fuß und steigen ~586 Stufen bis zum Rand einer 512-m-tiefen vertikalen Höhle hinab. Bei Sonnenaufgang steigen Zehntausende Weißkehlsegler spiralförmig aus dem Abgrund um Sie herum empor — eines der großen Naturschauspiele Mexikos (Eintritt ≈MX$100–150). Verbringen Sie den Rest des Tages zur Erholung am Puente de Dios.</p>
  </div>

  <div class="bg-white border-l-4 border-teal-500 rounded-r-xl shadow-sm p-6 mb-4">
    <p class="text-xs font-bold text-teal-600 uppercase tracking-wide mb-1">Tag 5</p>
    <h4 class="font-bold text-lg text-gray-900 mb-2">Rafting auf dem Tampaón — oder Tamtoc + Media Luna</h4>
    <p class="text-sm text-gray-700 leading-relaxed">November–März: Bewältigen Sie im Raft die Stromschnellen der Klasse III im Tampaón-Canyon (~7 h inklusive Mittagessen, ab ~MX$1,890 oder USD $115 bei Viator). Falls es ein Sonntag ist, besuchen Sie alternativ Tamtoc — die archäologische Huastekenstadt bei Tamuín (MX$145; derzeit nur sonntags geöffnet, vorher prüfen) — und legen Sie auf der Heimfahrt einen Halt an der Media Luna ein, einer kristallklaren Thermallagune bei Rioverde (MX$100).</p>
  </div>
</section>

<img src="/images/outdoors/huasteca-waterfall.jpg" alt="Türkisfarbener Wasserfall in der Huasteca Potosina" class="w-full rounded-2xl shadow-lg mb-12" loading="lazy" />

<section id="seven-days" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-teal-500 pb-3 inline-block">7 Tage: die komplette Rundreise</h2>
</div>

  <div class="bg-white border-l-4 border-teal-500 rounded-r-xl shadow-sm p-6 mb-4">
    <p class="text-xs font-bold text-teal-600 uppercase tracking-wide mb-1">Tag 6</p>
    <h4 class="font-bold text-lg text-gray-900 mb-2">Die nördlichen Wasserfälle</h4>
    <p class="text-sm text-gray-700 leading-relaxed">Fahren Sie nördlich von Valles zu den Wasserfällen, die die meisten Touren auslassen: Minas Viejas, El Salto und El Meco (Region El Naranjo). Übernachten Sie in einer Öko-Lodge am Fluss wie Huasteca Secreta, in Bungalows unterhalb des Wasserfalls Salto del Meco.</p>
  </div>

  <div class="bg-white border-l-4 border-teal-500 rounded-r-xl shadow-sm p-6 mb-4">
    <p class="text-xs font-bold text-teal-600 uppercase tracking-wide mb-1">Tag 7</p>
    <h4 class="font-bold text-lg text-gray-900 mb-2">Xilitla in Ruhe — oder Tauchen in der Media Luna</h4>
    <p class="text-sm text-gray-700 leading-relaxed">Option A: ein zweiter, entspannter Tag in Xilitla — übernachten Sie in der Posada El Castillo (dem Haus, in dem Edward James tatsächlich lebte, ~MX$1,550–2,500/Nacht), stöbern Sie in den Cafés und wandern Sie tagsüber zu nahegelegenen Sótanos. Option B: ein ganzer Tag an der Media Luna — ihre sechs Thermalquellen führen 27–30°C warmes Wasser mit bis zu 30 m Sicht, und PADI-Schulen bieten Tauchgänge zwischen versteinerten Bäumen an (Genehmigung ≈MX$1,300).</p>
  </div>
</section>

<section id="prices" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">Preise 2026</h2>
</div>

<div class="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-4">
  <table class="min-w-full divide-y divide-gray-200">
    <caption class="sr-only">Eintrittspreise Huasteca Potosina 2026</caption>
    <thead class="bg-emerald-700">
      <tr>
        <th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Ort</th>
        <th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Preis 2026</th>
        <th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Hinweis</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-100">
      <tr class="bg-white">
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Las Pozas (Xilitla)</td>
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">$180 + $30 Pflicht-Guide (ES) / $60 (EN) MXN</td>
        <td class="px-4 py-3 text-sm text-gray-600">Dienstags geschlossen · Einlass mit Zeitfenster</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Cascada de Tamul (lancha)</td>
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">≈ $150–250 pro Person MXN</td>
        <td class="px-4 py-3 text-sm text-gray-600">Nur Bargeld · Anleger La Morena & Tanchachín</td>
      </tr>
      <tr class="bg-white">
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Cascadas de Micos</td>
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">$100 (Schwimmweste inklusive) MXN</td>
        <td class="px-4 py-3 text-sm text-gray-600">Sprungparcours ≈ $180</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Cascadas de Tamasopo</td>
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">$200 + $100 Parken MXN</td>
        <td class="px-4 py-3 text-sm text-gray-600">Kein Geldautomat — Bargeld mitbringen</td>
      </tr>
      <tr class="bg-white">
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Puente de Dios</td>
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">$100–200 (Preis geändert im März 2026) + Schwimmweste $30–50 MXN</td>
        <td class="px-4 py-3 text-sm text-gray-600">Di–So ab 8 Uhr · Schließung laut Berichten zwischen 17 und 19 Uhr — vor Ort bestätigen</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Sótano de las Golondrinas</td>
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">≈ $100–150 MXN</td>
        <td class="px-4 py-3 text-sm text-gray-600">Bei Ankunft bestätigen</td>
      </tr>
      <tr class="bg-white">
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Media Luna (Rioverde)</td>
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">$100 · Camping $150/Zelt MXN</td>
        <td class="px-4 py-3 text-sm text-gray-600">Tauchgenehmigung ≈ $1,300</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Tamtoc (zona arqueológica)</td>
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">$145 MXN</td>
        <td class="px-4 py-3 text-sm text-gray-600">Derzeit nur sonntags — vorher prüfen</td>
      </tr>
    </tbody>
  </table>
</div>
<p class="text-xs text-gray-500 italic mb-8">Preise geprüft im Juli 2026 (Las Pozas: offizielle Website; Eintritte: El Universal SLP, INAH). Mit ≈ markierte Angaben sind berichtete Spannen — vor Ort bestätigen.</p>
</section>

<section id="las-pozas" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">Las Pozas: So funktioniert die Reservierung wirklich</h2>
</div>
<div class="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6 md:p-8 mb-6">
  <ul class="space-y-3">
    <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">1.</span><span><strong>Reservieren Sie zuerst online</strong> auf der offiziellen Website (laspozasxilitla.org.mx) — zwischen <strong>24 Stunden und 60 Tagen</strong> vor Ihrem Besuch. Eine Online-Zahlung ist derzeit nicht möglich.</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">2.</span><span><strong>Zahlen Sie am Tag selbst an der Kasse:</strong> MX$180 Erwachsene, MX$120 Senioren/Kinder 6–12, + <strong>Pflicht-Guide</strong> MX$30 (Spanisch) oder MX$60 (Englisch). Bringen Sie Ihre Reservierungsbestätigung und einen Ausweis mit.</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">3.</span><span><strong>Ihre Einlasszeit ist verbindlich</strong> — verpassen Sie sie, gibt es keine Rückerstattung. Die Besuche erfolgen in geführten Gruppen von maximal 25 Personen, ~1,5 h; freies Umherlaufen ist nicht möglich.</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">4.</span><span><strong>Dienstags geschlossen.</strong> Geöffnet Mi–Mo 9–18 Uhr, letzter Einlass 16 Uhr. Kasse ab 8 Uhr (am Wochenende ab 7 Uhr).</span></li>
  </ul>
  <p class="text-sm text-gray-700 mt-4 pt-3 border-t border-amber-200">Möchten Sie die ganze Geschichte — Edward James, Dalí, der Frost von 1962 — samt Stadtführer? Lesen Sie unseren <a href="/blog/xilitla-las-pozas-guide-2026" class="text-emerald-700 underline font-semibold">ausführlichen Xilitla- & Las-Pozas-Bericht</a>.</p>
</div>
<img src="/images/outdoors/xilitla.webp" alt="Surrealistischer Garten Las Pozas in Xilitla" class="w-full rounded-2xl shadow-lg mb-6" loading="lazy" />
</section>

<section id="stay" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">Unterkünfte</h2>
</div>
<div class="space-y-4">
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">Ciudad Valles (das praktische Basislager)</h3><p class="text-sm text-gray-700 leading-relaxed">Hotels mit Pool in der Stadt (Hotel Valles, Hotel San Fernando, Sierra Huasteca Inn) oder — die charaktervolle Wahl — das <strong>Hotel Taninul</strong>, eine Hacienda rund um eine schwefelhaltige Thermalquelle ~15 Min. östlich der Stadt, Doppelzimmer ab ~MX$975.</p></div>
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">Xilitla (für den Morgen in Las Pozas)</h3><p class="text-sm text-gray-700 leading-relaxed">Die <strong>Posada El Castillo</strong> ist das Haus mit acht Zimmern, in dem Edward James ~30 Jahre lang lebte, einen Block von der Plaza entfernt (~MX$1,550–2,500 mit Frühstück). Günstige Optionen: Hostal Café im Zentrum oder Posadas nahe dem Eingang von Las Pozas.</p></div>
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">Öko-Lodges (für das volle Dschungel-Erlebnis)</h3><p class="text-sm text-gray-700 leading-relaxed"><strong>Huasteca Secreta</strong> — Glamping und Bungalows am Fluss unterhalb des Wasserfalls Salto del Meco (El Naranjo). Aldea Huasteca außerhalb von Valles bietet Hütten und Camping; Casa Grande Río liegt nahe den Anlegern von Tamul.</p></div>
</div>
</section>

<section id="faq" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">Häufige Fragen</h2>
</div>
<div class="space-y-4">
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Wie viele Tage braucht man für die Huasteca Potosina?<span class="text-emerald-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Drei Tage decken in zügigem Tempo das Wesentliche ab (Tamul, Cascadas de Micos und Xilitla/Las Pozas). Fünf Tage erlauben es, den Sótano de las Golondrinas bei Sonnenaufgang und die Wasserfälle von Tamasopo bequem zu ergänzen. Sieben Tage umfassen alles, einschließlich der nördlichen Wasserfälle, Rafting auf dem Tampaón und der Media Luna.</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Wann ist das Wasser in der Huasteca Potosina türkis?<span class="text-emerald-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Etwa von November bis April. Während der Regenzeit (etwa Juni bis Oktober) führen die Flüsse viel Wasser und sind braun vom Sediment. Januar bis März ist der ideale Zeitraum: türkisfarbenes Wasser, trockenes Wetter und mäßiger Andrang.</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Kann man die Huasteca Potosina ohne Auto besuchen?<span class="text-emerald-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Ja. Nehmen Sie einen Bus von San Luis Potosí nach Ciudad Valles (etwa 4h15, ab ~MX$598) und buchen Sie Tagestouren vor Ort (rund MX$1,000–2,100 pro Person und Tag) oder über Viator und GetYourGuide (ab etwa USD $72). Ein Mietwagen bietet mehr Freiheit, ist aber nicht erforderlich.</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Muss ich Las Pozas in Xilitla im Voraus buchen?<span class="text-emerald-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Ja. Las Pozas verwendet Reservierungen mit festem Zeitfenster, die online zwischen 24 Stunden und 60 Tagen im Voraus erfolgen; Sie zahlen am Tag selbst an der Kasse (MX$180 Erwachsene + MX$30 Pflicht-Guide, MX$60 für Englisch). Dienstags ist geschlossen, letzter Einlass ist um 16 Uhr. Besuche sind nur in geführten Gruppen möglich.</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Ist die Huasteca Potosina sicher für Touristen?<span class="text-emerald-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Die Huasteca gilt weithin als eine der sichereren ländlichen Reiseregionen Mexikos, und die Orte sind familienfreundlich. Die praktischen Risiken sind logistischer Natur: Vermeiden Sie Nachtfahrten (unbeleuchtete Straßen, Nebel, Schlaglöcher), führen Sie Bargeld mit, da die meisten Orte keine Geldautomaten oder Kartenzahlung haben, und tanken Sie vor Ausflügen in Ciudad Valles voll.</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Wie weit ist die Huasteca Potosina von der Stadt San Luis Potosí entfernt?<span class="text-emerald-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Ciudad Valles, das Eingangstor der Region, liegt etwa 251 km von der Stadt San Luis Potosí über die Fernstraße MEX-70 entfernt — rund 3,5 Stunden mit dem Auto mit einer Mautstation oder etwa 4h15 mit dem Bus.</p></details>
</div>
</section>

<section id="sources" class="mb-8 scroll-mt-8">
<div class="not-prose mb-4">
  <h2 class="text-2xl font-bold text-gray-900 mb-3">Quellen</h2>
</div>
<p class="text-sm text-gray-600 leading-relaxed">Preise und Regeln im Juli 2026 geprüft anhand von: laspozasxilitla.org.mx (offizielle Preise und Reservierungssystem), El Universal San Luis Potosí (Eintrittsgebühren für Tamul, Micos, Media Luna, Golondrinas), INAH (Öffnungszeiten und Gebühren für Tamtoc), SEGAM SLP (Schutzgebiet Sótano de las Golondrinas), Wikipedia/Conagua und Presseberichte (Abmessungen des Tamul sowie die Niedrigwasser-Episoden 2024 und 2026) sowie Routenrechnern für die Fahrstrecken. Tourenpreise aus Angeboten von huaxteca.com, Viator und GetYourGuide. Wo Angaben für 2026 nicht bestätigt werden konnten, veröffentlichen wir Spannen — führen Sie stets zusätzliches Bargeld mit.</p>
</section>

<div class="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-center">
  <p class="text-white text-lg font-bold mb-2">Planen Sie auch einen Zwischenstopp in der Stadt San Luis Potosí?</p>
  <p class="text-emerald-100 text-sm mb-4">Erhalten Sie unseren wöchentlichen Guide zu Veranstaltungen, Essen und Leben in SLP — kostenlos, jeden Montag.</p>
  <a href="/subscribe" class="inline-block bg-white text-emerald-700 font-bold px-6 py-3 rounded-full hover:bg-emerald-50 transition-colors">San Luis Way Weekly abonnieren</a>
</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Wie viele Tage braucht man für die Huasteca Potosina?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Drei Tage decken in zügigem Tempo das Wesentliche ab (Tamul, Cascadas de Micos und Xilitla/Las Pozas). Fünf Tage erlauben es, den Sótano de las Golondrinas bei Sonnenaufgang und die Wasserfälle von Tamasopo bequem zu ergänzen. Sieben Tage umfassen alles, einschließlich der nördlichen Wasserfälle, Rafting auf dem Tampaón und der Media Luna."
      }
    },
    {
      "@type": "Question",
      "name": "Wann ist das Wasser in der Huasteca Potosina türkis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Etwa von November bis April. Während der Regenzeit (etwa Juni bis Oktober) führen die Flüsse viel Wasser und sind braun vom Sediment. Januar bis März ist der ideale Zeitraum: türkisfarbenes Wasser, trockenes Wetter und mäßiger Andrang."
      }
    },
    {
      "@type": "Question",
      "name": "Kann man die Huasteca Potosina ohne Auto besuchen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja. Nehmen Sie einen Bus von San Luis Potosí nach Ciudad Valles (etwa 4h15, ab ~MX$598) und buchen Sie Tagestouren vor Ort (rund MX$1,000–2,100 pro Person und Tag) oder über Viator und GetYourGuide (ab etwa USD $72). Ein Mietwagen bietet mehr Freiheit, ist aber nicht erforderlich."
      }
    },
    {
      "@type": "Question",
      "name": "Muss ich Las Pozas in Xilitla im Voraus buchen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja. Las Pozas verwendet Reservierungen mit festem Zeitfenster, die online zwischen 24 Stunden und 60 Tagen im Voraus erfolgen; Sie zahlen am Tag selbst an der Kasse (MX$180 Erwachsene + MX$30 Pflicht-Guide, MX$60 für Englisch). Dienstags ist geschlossen, letzter Einlass ist um 16 Uhr. Besuche sind nur in geführten Gruppen möglich."
      }
    },
    {
      "@type": "Question",
      "name": "Ist die Huasteca Potosina sicher für Touristen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Die Huasteca gilt weithin als eine der sichereren ländlichen Reiseregionen Mexikos, und die Orte sind familienfreundlich. Die praktischen Risiken sind logistischer Natur: Vermeiden Sie Nachtfahrten (unbeleuchtete Straßen, Nebel, Schlaglöcher), führen Sie Bargeld mit, da die meisten Orte keine Geldautomaten oder Kartenzahlung haben, und tanken Sie vor Ausflügen in Ciudad Valles voll."
      }
    },
    {
      "@type": "Question",
      "name": "Wie weit ist die Huasteca Potosina von der Stadt San Luis Potosí entfernt?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ciudad Valles, das Eingangstor der Region, liegt etwa 251 km von der Stadt San Luis Potosí über die Fernstraße MEX-70 entfernt — rund 3,5 Stunden mit dem Auto mit einer Mautstation oder etwa 4h15 mit dem Bus."
      }
    }
  ]
}
</script>

</div>`;

const CONTENT_JA = `<div class="max-w-none">

<div class="bg-emerald-50 border-l-4 border-emerald-500 rounded-r-xl p-6 mb-10">
  <p class="font-bold text-emerald-900 mb-3">このガイドの内容</p>
  <nav class="grid sm:grid-cols-2 gap-2 text-emerald-800 text-sm">
    <a href="#overview" class="hover:underline">→ Huastecaの概要</a>
    <a href="#when" class="hover:underline">→ ベストシーズン（ターコイズの季節）</a>
    <a href="#getting-there" class="hover:underline">→ アクセスと移動</a>
    <a href="#three-days" class="hover:underline">→ 3日間のモデルコース</a>
    <a href="#five-days" class="hover:underline">→ 5日間：見どころを追加</a>
    <a href="#seven-days" class="hover:underline">→ 7日間：フルサーキット</a>
    <a href="#prices" class="hover:underline">→ 2026年の料金表</a>
    <a href="#las-pozas" class="hover:underline">→ Las Pozas：予約の仕組み</a>
    <a href="#stay" class="hover:underline">→ 宿泊先</a>
    <a href="#faq" class="hover:underline">→ よくある質問</a>
  </nav>
  <p class="mt-4 text-sm text-emerald-700 italic">情報と料金は2026年7月に確認済み · 出典は末尾に記載</p>
</div>

<p class="text-xl leading-relaxed text-gray-800 mb-8 font-medium">
  <strong>Huasteca Potosinaはメキシコの滝の国です</strong> — San Luis Potosí州東部のジャングル地帯で、ターコイズブルーの川が石灰岩の上を流れ落ちます。高さ105メートルのTamul滝、エドワード・ジェームズがLas Pozasに造り上げたシュルレアリスムの庭園、そしてエンパイア・ステート・ビルがすっぽり収まるほど深い洞窟があります。ここでは、確認済みの2026年の料金とともに、3日・5日・7日でどう巡るかを具体的にご紹介します。
</p>

<section id="overview" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">Huastecaの概要</h2>
</div>
<div class="speakable bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200 rounded-2xl p-6 md:p-8 mb-6">
  <p class="text-base md:text-lg text-gray-800 leading-relaxed mb-5">
    <strong>Huasteca Potosina</strong>はSan Luis Potosí州の熱帯性の東部地域です。その拠点は<strong>Ciudad Valles</strong>で、幹線道路MEX-70経由でSan Luis Potosí市から251 km（約3.5時間）の距離にあり、ほぼすべての見どころが約90分圏内にあります。ベストシーズンは<strong>11月～4月</strong>で、この時期に水がターコイズ色に変わります。
  </p>
  <ul class="space-y-2">
    <li class="flex items-start gap-2 text-gray-800"><span class="text-emerald-600 mt-1">•</span><span><strong>五大スポット：</strong> Cascada de Tamul、Las Pozas（Xilitla）、Sótano de las Golondrinas、Cascadas de Micos、Puente de Dios</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-emerald-600 mt-1">•</span><span><strong>予算：</strong> 入場料は1か所あたりMX$100–250、Ciudad Valles発の日帰りツアーは約MX$1,000–2,100です</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-emerald-600 mt-1">•</span><span><strong>現金が必須：</strong> カードが使える場所はほとんどなく、滝にはATMもありません</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-emerald-600 mt-1">•</span><span><strong>文化的なおまけ：</strong> 11月1～2日ごろに訪れて、Huastecaの死者の日である<a href="/cultural/festivals" class="text-emerald-700 underline">Xantolo</a>を体験しましょう</span></li>
  </ul>
</div>
</section>

<img src="/images/outdoors/huasteca-jungle.jpg" alt="Huasteca Potosinaのジャングルの川" class="w-full rounded-2xl shadow-lg mb-12" loading="lazy" />

<section id="when" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">ベストシーズン</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">あなたが目にした写真——信じられないほど青い水——は<strong>乾季ならではの現象</strong>です。雨季（おおむね6月～10月）には、川は増水して勢いよく流れ、土砂で茶色く濁ります。<strong>11月になると水は澄んでターコイズ色に変わり</strong>、4月までその状態が続きます。</p>
<ul class="space-y-2 mb-6 text-gray-800">
  <li><strong>11月～12月：</strong>雨季直後で水量が豊富、青い水——最も迫力ある滝が見られます。</li>
  <li><strong>1月～3月：</strong>ベストタイミング。ターコイズ色の水、乾いた晴天、ほどほどの混雑です。Tampaón川（クラスIII）のラフティングシーズンは11月～3月です。</li>
  <li><strong>4月～5月：</strong>まだ青いものの水量は減少します。2024年の干ばつではTamulが一時的に干上がり、2026年4～5月にも低水量・無水の状態が再び発生したため、シーズン終盤に訪れる方は期待を控えめにしておくとよいでしょう。</li>
  <li><strong>6月～10月：</strong>緑豊かなジャングルと観光客の少なさが魅力ですが、水は茶色く、一部のアクティビティは休止します。料金は安くなります。</li>
</ul>
<p class="text-gray-800 leading-relaxed">何よりのおすすめの時期があります。<strong>10月30日～11月2日</strong>に旅行できれば、早めのターコイズ色の水に加えて<strong>Xantolo</strong>——Aquismón、Tancanhuitz、Xilitla、Ciudad Vallesで行われる、Huastecaの仮面をつけた死者の日の祝祭——を楽しめます。</p>
</section>

<section id="getting-there" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">アクセスと移動</h2>
</div>
<div class="grid md:grid-cols-2 gap-4 mb-6">
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">🚗 車で（おすすめ）</h3><p class="text-sm text-gray-700 leading-relaxed">SLP市 → Ciudad Valles：MEX-70を251 km、約3.5時間、料金所は1か所（La Pitahaya）。Vallesから：Micosまで約30分、Tamul（Aquismónの船着き場）まで約45～60分、Tamasopoまで約50分、Xilitlaまで約1時間20分（幹線道路85号線から120号線へ）。夜間の運転は絶対に避けてください——街灯のない道路、霧、そしてトペ（減速用の段差）がこの地域の本当の危険です。</p></div>
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">🚌 バス＋ツアー</h3><p class="text-sm text-gray-700 leading-relaxed">バスはSLPからCiudad Vallesまで約4時間15分で運行しています（約MX$598～）。Vallesからは、地元の事業者が日帰りツアー（約MX$1,000–2,100／人、交通・装備・ガイド込み）を販売しており、Viator/GetYourGuideも同じコースを約USD $72～で掲載しています——中にはSan Luis Potosí市での送迎付きのものもあります。</p></div>
</div>
<p class="text-gray-800 leading-relaxed">1～2日目は<strong>Ciudad Valles</strong>を拠点にし（ツアー参加なら旅程全体でも構いません）、<strong>Xilitla</strong>で1泊するのもおすすめです——日帰り客が到着する前のLas Pozasの朝は格別です。</p>
</section>

<section id="three-days" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">3日間のモデルコース（要点をおさえて）</h2>
</div>

  <div class="bg-white border-l-4 border-emerald-500 rounded-r-xl shadow-sm p-6 mb-4">
    <p class="text-xs font-bold text-emerald-600 uppercase tracking-wide mb-1">1日目</p>
    <h4 class="font-bold text-lg text-gray-900 mb-2">移動 + Cascadas de Micos</h4>
    <p class="text-sm text-gray-700 leading-relaxed">San Luis Potosíを早朝に出発し、正午までにCiudad Vallesに到着します（約3.5時間）。午後は30分ほど先のCascadas de Micosで、泳いだり、カヤックをしたり、勇気があれば有名な7つの滝を飛び込む周遊コース（≈MX$180）に挑戦しましょう。Ciudad Valles泊。</p>
  </div>

  <div class="bg-white border-l-4 border-emerald-500 rounded-r-xl shadow-sm p-6 mb-4">
    <p class="text-xs font-bold text-emerald-600 uppercase tracking-wide mb-1">2日目</p>
    <h4 class="font-bold text-lg text-gray-900 mb-2">カヌーで行く Cascada de Tamul + Tamasopo</h4>
    <p class="text-sm text-gray-700 leading-relaxed">見逃せない目玉です。La MorenaまたはTanchachínの船着き場（Aquismón、Vallesから約1時間）から、木製のパンガ（小舟）を漕いで、高さ300 mの峡谷の壁の間を約4 km上流へと進み、高さ105 mの滝の真下まで向かいます——上りに約2～2.5時間、下りに45分ほどです。早めに出発しましょう。支払いは現金のみです（≈MX$150–250／人）。午後：Puente de Dios または Cascadas de Tamasopo（約50分先）。VallesまたはXilitla泊。</p>
  </div>

  <div class="bg-white border-l-4 border-emerald-500 rounded-r-xl shadow-sm p-6 mb-4">
    <p class="text-xs font-bold text-emerald-600 uppercase tracking-wide mb-1">3日目</p>
    <h4 class="font-bold text-lg text-gray-900 mb-2">Xilitla：Las Pozas + Pueblo Mágico</h4>
    <p class="text-sm text-gray-700 leading-relaxed">旅行前に、オンラインでLas Pozasの最も早い時間枠を予約しておきましょう（下の予約ボックスを参照）。ジャングルの中にあるエドワード・ジェームズのシュルレアリスムのコンクリート庭園を巡る1.5時間のガイド付きウォークは、メキシコの他のどことも違う体験です。丘の斜面に広がるXilitlaの中心部で昼食をとり、地元産のコーヒーを味わったら、車で戻る（Xilitla → SLP 約4.5時間）か、1泊して4日目に帰ります。</p>
  </div>
</section>

<section id="five-days" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-teal-500 pb-3 inline-block">5日間：見どころを追加</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">1～3日目はそのままに、ゆったりと巡り（TamulとTamasopoはそれぞれ丸1日かける価値があります）、次を追加します：</p>

  <div class="bg-white border-l-4 border-teal-500 rounded-r-xl shadow-sm p-6 mb-4">
    <p class="text-xs font-bold text-teal-600 uppercase tracking-wide mb-1">4日目</p>
    <h4 class="font-bold text-lg text-gray-900 mb-2">夜明けの Sótano de las Golondrinas</h4>
    <p class="text-sm text-gray-700 leading-relaxed">午前4時30分に起床します。AquismónからTamapatz方面へ車で向かい、約15分歩いてから約586段の階段を下り、深さ512 mの垂直の洞窟の縁まで到達します。日の出とともに、何万羽ものシロエリハリオアマツバメがあなたの周りで奈落から螺旋を描いて飛び立ちます——メキシコ有数の壮大な自然のスペクタクルです（入場料 ≈MX$100–150）。残りの一日はPuente de Diosで体を休めて過ごしましょう。</p>
  </div>

  <div class="bg-white border-l-4 border-teal-500 rounded-r-xl shadow-sm p-6 mb-4">
    <p class="text-xs font-bold text-teal-600 uppercase tracking-wide mb-1">5日目</p>
    <h4 class="font-bold text-lg text-gray-900 mb-2">Tampaón川ラフティング——または Tamtoc + Media Luna</h4>
    <p class="text-sm text-gray-700 leading-relaxed">11月～3月：Tampaón峡谷のクラスIIIの急流をラフティングで下ります（昼食込みで約7時間、Viatorでは約MX$1,890またはUSD $115～）。あるいは日曜日であれば、Tamuín近郊のHuasteca人の古代都市 Tamtoc（MX$145、現在は日曜のみ開場、訪問前に要確認）を訪れ、その後は帰路の途中、Rioverde近くの透き通った温泉のラグーン、Media Luna（MX$100）に立ち寄りましょう。</p>
  </div>
</section>

<img src="/images/outdoors/huasteca-waterfall.jpg" alt="Huasteca Potosinaのターコイズ色の滝" class="w-full rounded-2xl shadow-lg mb-12" loading="lazy" />

<section id="seven-days" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-teal-500 pb-3 inline-block">7日間：フルサーキット</h2>
</div>

  <div class="bg-white border-l-4 border-teal-500 rounded-r-xl shadow-sm p-6 mb-4">
    <p class="text-xs font-bold text-teal-600 uppercase tracking-wide mb-1">6日目</p>
    <h4 class="font-bold text-lg text-gray-900 mb-2">北部の滝</h4>
    <p class="text-sm text-gray-700 leading-relaxed">多くのツアーが素通りする滝を目指して、Vallesの北へ向かいます：Minas Viejas、El Salto、El Meco（El Naranjo周辺）。Salto del Mecoの滝の下に建つバンガロー、Huasteca Secreta のような川沿いのエコロッジに宿泊しましょう。</p>
  </div>

  <div class="bg-white border-l-4 border-teal-500 rounded-r-xl shadow-sm p-6 mb-4">
    <p class="text-xs font-bold text-teal-600 uppercase tracking-wide mb-1">7日目</p>
    <h4 class="font-bold text-lg text-gray-900 mb-2">のんびり Xilitla——または Media Luna でダイビング</h4>
    <p class="text-sm text-gray-700 leading-relaxed">選択肢A：2度目の、ゆったりとしたXilitlaの一日——Posada El Castillo（エドワード・ジェームズが実際に暮らした家、1泊約MX$1,550–2,500）に泊まり、コーヒーショップを巡り、近くの sótano へ日帰りハイキングをします。選択肢B：Media Lunaで丸一日——6つの温泉が27～30°Cの水をたたえ、透明度は最大30 mに達し、PADIのスクールが化石化した木々の間でダイビングを催行しています（許可証 ≈MX$1,300）。</p>
  </div>
</section>

<section id="prices" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">2026年の料金</h2>
</div>

<div class="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-4">
  <table class="min-w-full divide-y divide-gray-200">
    <caption class="sr-only">Huasteca Potosinaの入場料 2026年</caption>
    <thead class="bg-emerald-700">
      <tr>
        <th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">場所</th>
        <th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">2026年の料金</th>
        <th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">備考</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-100">
      <tr class="bg-white">
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Las Pozas (Xilitla)</td>
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">$180 + 必須ガイド $30（スペイン語）／$60（英語）MXN</td>
        <td class="px-4 py-3 text-sm text-gray-600">火曜休 · 時間指定入場</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Cascada de Tamul (lancha)</td>
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">≈ $150–250 ／人 MXN</td>
        <td class="px-4 py-3 text-sm text-gray-600">現金のみ · La Morena ＆ Tanchachín の船着き場</td>
      </tr>
      <tr class="bg-white">
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Cascadas de Micos</td>
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">$100（ライフジャケット込み）MXN</td>
        <td class="px-4 py-3 text-sm text-gray-600">滝飛び込み周遊コース ≈ $180</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Cascadas de Tamasopo</td>
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">$200 + 駐車料 $100 MXN</td>
        <td class="px-4 py-3 text-sm text-gray-600">ATMなし——現金を持参</td>
      </tr>
      <tr class="bg-white">
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Puente de Dios</td>
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">$100–200（2026年3月に料金改定）+ ライフジャケット $30–50 MXN</td>
        <td class="px-4 py-3 text-sm text-gray-600">火～日 8時から · 閉場は17～19時との情報——現地で確認を</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Sótano de las Golondrinas</td>
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">≈ $100–150 MXN</td>
        <td class="px-4 py-3 text-sm text-gray-600">到着時に確認</td>
      </tr>
      <tr class="bg-white">
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Media Luna (Rioverde)</td>
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">$100 · キャンプ $150/テント MXN</td>
        <td class="px-4 py-3 text-sm text-gray-600">ダイビング許可証 ≈ $1,300</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="px-4 py-3 text-sm font-semibold text-gray-900">Tamtoc (zona arqueológica)</td>
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">$145 MXN</td>
        <td class="px-4 py-3 text-sm text-gray-600">現在は日曜のみ——訪問前に確認を</td>
      </tr>
    </tbody>
  </table>
</div>
<p class="text-xs text-gray-500 italic mb-8">料金は2026年7月時点で確認済み（Las Pozas：公式サイト、入場料：El Universal SLP、INAH）。≈で示した数値は報告されている概算幅です——現地で確認してください。</p>
</section>

<section id="las-pozas" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">Las Pozas：予約の実際の仕組み</h2>
</div>
<div class="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6 md:p-8 mb-6">
  <ul class="space-y-3">
    <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">1.</span><span><strong>まず公式サイトでオンライン予約します</strong>（laspozasxilitla.org.mx）——訪問の<strong>24時間前から60日前まで</strong>の間に行ってください。現在、オンライン決済はできません。</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">2.</span><span><strong>当日は窓口で支払います：</strong>大人MX$180、シニア／6～12歳の子どもMX$120、＋<strong>必須ガイド</strong>MX$30（スペイン語）またはMX$60（英語）。予約確認書と身分証明書を持参してください。</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">3.</span><span><strong>入場時間は厳守です</strong>——逃すと返金はありません。見学は最大25名のガイド付きグループで、約1.5時間、自由散策はできません。</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">4.</span><span><strong>火曜休。</strong>水～月の9時～18時開場、最終入場16時。窓口は8時から（週末は7時から）。</span></li>
  </ul>
  <p class="text-sm text-gray-700 mt-4 pt-3 border-t border-amber-200">全容——エドワード・ジェームズ、ダリ、1962年の霜害——に加えて町のガイドも知りたい方は、私たちの<a href="/blog/xilitla-las-pozas-guide-2026" class="text-emerald-700 underline font-semibold">詳しいXilitla＆Las Pozas徹底ガイド</a>をご覧ください。</p>
</div>
<img src="/images/outdoors/xilitla.webp" alt="Xilitlaのシュルレアリスム庭園Las Pozas" class="w-full rounded-2xl shadow-lg mb-6" loading="lazy" />
</section>

<section id="stay" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">宿泊先</h2>
</div>
<div class="space-y-4">
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">Ciudad Valles（実用的な拠点）</h3><p class="text-sm text-gray-700 leading-relaxed">町なかのプール付きホテル（Hotel Valles、Hotel San Fernando、Sierra Huasteca Inn）、あるいは——個性的な選択肢として——町の東約15分にある硫黄泉を中心に造られたアシエンダ、<strong>Hotel Taninul</strong>があります。ダブルルームは約MX$975～です。</p></div>
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">Xilitla（Las Pozasの朝のために）</h3><p class="text-sm text-gray-700 leading-relaxed"><strong>Posada El Castillo</strong>は、エドワード・ジェームズが約30年間暮らした8部屋の家で、広場から1ブロックの場所にあります（朝食付きで約MX$1,550–2,500）。手頃な選択肢：中心部の Hostal Café、またはLas Pozas入口近くのポサダ。</p></div>
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">エコロッジ（ジャングルを存分に味わうなら）</h3><p class="text-sm text-gray-700 leading-relaxed"><strong>Huasteca Secreta</strong>——Salto del Mecoの滝の下、川沿いのグランピングとバンガロー（El Naranjo）。Valles郊外の Aldea Huasteca はキャビンとキャンプを提供し、Casa Grande Río はTamulの船着き場近くにあります。</p></div>
</div>
</section>

<section id="faq" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">よくある質問</h2>
</div>
<div class="space-y-4">
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Huasteca Potosinaには何日必要ですか？<span class="text-emerald-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">3日間あれば、要点（Tamul、Cascadas de Micos、Xilitla/Las Pozas）を駆け足で押さえられます。5日間なら、日の出の Sótano de las Golondrinas とTamasopoの滝をゆとりをもって追加できます。7日間なら、北部の滝、Tampaón川でのラフティング、Media Luna を含め、すべてを網羅できます。</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Huasteca Potosinaの水がターコイズ色になるのはいつですか？<span class="text-emerald-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">おおむね11月から4月です。雨季（およそ6月から10月）には、川は増水し土砂で茶色く濁ります。1月から3月がベストタイミングで、ターコイズ色の水、乾いた晴天、ほどほどの混雑が楽しめます。</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">車がなくてもHuasteca Potosinaを訪れられますか？<span class="text-emerald-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">はい。San Luis PotosíからCiudad Vallesまでバス（約4時間15分、約MX$598～）で行き、日帰りツアーを現地（1人1日おおよそMX$1,000–2,100）またはViatorやGetYourGuide（約USD $72～）で予約できます。レンタカーがあればより自由に動けますが、必須ではありません。</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">XilitlaのLas Pozasは事前予約が必要ですか？<span class="text-emerald-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">はい。Las Pozasは、24時間前から60日前までの間にオンラインで行う時間指定予約制です。支払いは当日窓口で行います（大人MX$180＋必須ガイドMX$30、英語はMX$60）。火曜休で、最終入場は16時です。見学はガイド付きグループのみです。</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Huasteca Potosinaは観光客にとって安全ですか？<span class="text-emerald-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Huastecaはメキシコでも比較的安全な地方の旅行先の一つと広く見なされており、施設は家族向けです。実際のリスクは移動に関するものです：夜間の運転を避け（街灯のない道路、霧、穴ぼこ）、ほとんどの場所にATMやカード決済がないため現金を携行し、遠出の前にCiudad Vallesで給油を満タンにしておきましょう。</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Huasteca PotosinaはSan Luis Potosí市からどのくらいの距離ですか？<span class="text-emerald-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">玄関口となる拠点Ciudad Vallesは、幹線道路MEX-70経由でSan Luis Potosí市から約251 kmの距離にあります——車でおよそ3.5時間、料金所は1か所、バスでは約4時間15分です。</p></details>
</div>
</section>

<section id="sources" class="mb-8 scroll-mt-8">
<div class="not-prose mb-4">
  <h2 class="text-2xl font-bold text-gray-900 mb-3">出典</h2>
</div>
<p class="text-sm text-gray-600 leading-relaxed">料金と規則は2026年7月に以下の情報源に照らして確認しました：laspozasxilitla.org.mx（公式料金および予約システム）、El Universal San Luis Potosí（Tamul、Micos、Media Luna、Golondrinas の入場料）、INAH（Tamtoc の開場時間と料金）、SEGAM SLP（Sótano de las Golondrinas 保護区）、Wikipedia/Conagua および報道（Tamul の規模と2024年・2026年の低水量の事象）、そして走行距離のルート計算ツール。ツアー料金は huaxteca.com、Viator、GetYourGuide の掲載情報によります。2026年の数値を確認できなかった箇所については幅をもって掲載しています——常に予備の現金を携行してください。</p>
</section>

<div class="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-center">
  <p class="text-white text-lg font-bold mb-2">San Luis Potosí市にも立ち寄る予定ですか？</p>
  <p class="text-emerald-100 text-sm mb-4">SLPのイベント・グルメ・暮らしを毎週お届けするガイドをどうぞ——無料、毎週月曜配信。</p>
  <a href="/subscribe" class="inline-block bg-white text-emerald-700 font-bold px-6 py-3 rounded-full hover:bg-emerald-50 transition-colors">San Luis Way Weekly を購読する</a>
</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Huasteca Potosinaには何日必要ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "3日間あれば、要点（Tamul、Cascadas de Micos、Xilitla/Las Pozas）を駆け足で押さえられます。5日間なら、日の出の Sótano de las Golondrinas とTamasopoの滝をゆとりをもって追加できます。7日間なら、北部の滝、Tampaón川でのラフティング、Media Luna を含め、すべてを網羅できます。"
      }
    },
    {
      "@type": "Question",
      "name": "Huasteca Potosinaの水がターコイズ色になるのはいつですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "おおむね11月から4月です。雨季（およそ6月から10月）には、川は増水し土砂で茶色く濁ります。1月から3月がベストタイミングで、ターコイズ色の水、乾いた晴天、ほどほどの混雑が楽しめます。"
      }
    },
    {
      "@type": "Question",
      "name": "車がなくてもHuasteca Potosinaを訪れられますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "はい。San Luis PotosíからCiudad Vallesまでバス（約4時間15分、約MX$598～）で行き、日帰りツアーを現地（1人1日おおよそMX$1,000–2,100）またはViatorやGetYourGuide（約USD $72～）で予約できます。レンタカーがあればより自由に動けますが、必須ではありません。"
      }
    },
    {
      "@type": "Question",
      "name": "XilitlaのLas Pozasは事前予約が必要ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "はい。Las Pozasは、24時間前から60日前までの間にオンラインで行う時間指定予約制です。支払いは当日窓口で行います（大人MX$180＋必須ガイドMX$30、英語はMX$60）。火曜休で、最終入場は16時です。見学はガイド付きグループのみです。"
      }
    },
    {
      "@type": "Question",
      "name": "Huasteca Potosinaは観光客にとって安全ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Huastecaはメキシコでも比較的安全な地方の旅行先の一つと広く見なされており、施設は家族向けです。実際のリスクは移動に関するものです：夜間の運転を避け（街灯のない道路、霧、穴ぼこ）、ほとんどの場所にATMやカード決済がないため現金を携行し、遠出の前にCiudad Vallesで給油を満タンにしておきましょう。"
      }
    },
    {
      "@type": "Question",
      "name": "Huasteca PotosinaはSan Luis Potosí市からどのくらいの距離ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "玄関口となる拠点Ciudad Vallesは、幹線道路MEX-70経由でSan Luis Potosí市から約251 kmの距離にあります——車でおよそ3.5時間、料金所は1か所、バスでは約4時間15分です。"
      }
    }
  ]
}
</script>

</div>`;

// Extract the JSON-LD block from an HTML string and JSON.parse it (validation).
function checkJsonLd(html, label) {
  const m = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  if (!m) { console.log(`  [${label}] JSON-LD: NOT FOUND`); return false; }
  try {
    const obj = JSON.parse(m[1]);
    const n = (obj.mainEntity || []).length;
    console.log(`  [${label}] JSON-LD: valid (${n} FAQ entries)`);
    return true;
  } catch (e) {
    console.log(`  [${label}] JSON-LD: INVALID — ${e.message}`);
    return false;
  }
}

const countTags = (html) => (html.match(/<[^>]+>/g) || []).length;
const wordCount = (html) => html.replace(/<[^>]*>/g, ' ').trim().split(/\s+/).filter(Boolean).length;

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

  console.log('Validating translations before write:');
  const deOk = checkJsonLd(CONTENT_DE, 'DE');
  const jaOk = checkJsonLd(CONTENT_JA, 'JA');
  if (!deOk || !jaOk) { console.error('Aborting: JSON-LD invalid.'); process.exit(1); }

  const enTags = countTags(data.content);
  console.log(`\nTag counts — EN: ${enTags}, DE: ${countTags(CONTENT_DE)}, JA: ${countTags(CONTENT_JA)}`);

  if (data.content_de === CONTENT_DE && data.content_ja === CONTENT_JA) {
    console.log('\nAlready up to date — nothing to write.');
  } else {
    const { error: upErr } = await supabase
      .from('blog_posts')
      .update({ content_de: CONTENT_DE, content_ja: CONTENT_JA })
      .eq('id', data.id);
    if (upErr) { console.error('UPDATE ERROR:', upErr.message); process.exit(1); }
    console.log('\nUpdated content_de and content_ja.');
  }

  // Verify by re-fetching.
  const { data: check, error: chkErr } = await supabase
    .from('blog_posts')
    .select('content, content_de, content_ja')
    .eq('id', data.id)
    .single();
  if (chkErr) { console.error('VERIFY FETCH ERROR:', chkErr.message); process.exit(1); }

  const en = check.content, de = check.content_de, ja = check.content_ja;
  const placeNames = ['Huasteca Potosina', 'Tamul', 'Tamasopo', 'Puente de Dios',
    'Sótano de las Golondrinas', 'Ciudad Valles', 'Xilitla', 'Tampaón',
    '105', '512', '251', 'MX$1,000–2,100', 'MX$598', 'MEX-70'];

  console.log('\n===== VERIFICATION (re-fetched) =====');
  console.log(`DE differs from EN: ${de !== en}`);
  console.log(`JA differs from EN: ${ja !== en}`);
  console.log(`DE === expected: ${de === CONTENT_DE}`);
  console.log(`JA === expected: ${ja === CONTENT_JA}`);
  console.log(`Tag counts match EN — DE: ${countTags(de) === enTags} (${countTags(de)}), JA: ${countTags(ja) === enTags} (${countTags(ja)})`);
  checkJsonLd(de, 'DE re-fetched');
  checkJsonLd(ja, 'JA re-fetched');

  let placesOk = true;
  for (const p of placeNames) {
    const inDe = de.includes(p), inJa = ja.includes(p);
    if (!inDe || !inJa) { placesOk = false; console.log(`  MISSING place/number "${p}" — DE:${inDe} JA:${inJa}`); }
  }
  console.log(`Place names / heights / prices intact: ${placesOk}`);

  // Leftover English detection: sentence-level English phrases that must be gone.
  const englishMarkers = ['Waterfall country', 'How reservations', 'Where to stay',
    'When to go', 'Getting there', 'the essentials', 'day tours from Ciudad Valles',
    'Never drive at night', 'closed on Tuesdays', 'guided groups'];
  const deLeft = englishMarkers.filter((m) => de.includes(m));
  const jaLeft = englishMarkers.filter((m) => ja.includes(m));
  console.log(`Leftover English markers — DE: ${deLeft.length ? deLeft.join(', ') : 'none'}`);
  console.log(`Leftover English markers — JA: ${jaLeft.length ? jaLeft.join(', ') : 'none'}`);

  console.log('\nWord counts (text nodes only):');
  console.log(`  EN: ${wordCount(en)}  DE: ${wordCount(de)}  JA(≈CJK tokens): ${wordCount(ja)}`);

  console.log('\nDone.');
}

main();
