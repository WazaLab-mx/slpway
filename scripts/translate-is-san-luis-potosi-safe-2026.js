// Native DE + JA translation of the blog post `is-san-luis-potosi-safe-2026`
// (idempotent). Replaces content_de and content_ja (previously EN mirrors) with
// genuine translations. HTML tags/attributes/links and every statistic, advisory
// level, date and source name are preserved exactly; only text nodes are translated.
// Verifies by re-fetching: DE/JA differ from EN, JSON-LD parses, tag counts match.
require('dotenv').config({ path: '.env' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const SLUG = 'is-san-luis-potosi-safe-2026';

const content_de = `<div class="max-w-none">

<div class="bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-6 mb-10">
  <p class="font-bold text-blue-900 mb-3">In dieser Analyse</p>
  <nav class="grid sm:grid-cols-2 gap-2 text-blue-800 text-sm">
    <a href="#tldr" class="hover:underline">→ Die kurze Antwort</a>
    <a href="#advisories" class="hover:underline">→ Was die Reisehinweise sagen (USA, CA, UK)</a>
    <a href="#the-data" class="hover:underline">→ Die offiziellen Zahlen — und ihre Vorbehalte</a>
    <a href="#perception" class="hover:underline">→ Wie die Einheimischen sich fühlen (INEGI-Umfrage)</a>
    <a href="#us-comparison" class="hover:underline">→ SLP im Vergleich zu US-Städten</a>
    <a href="#where-the-risk-is" class="hover:underline">→ Wo das Risiko wirklich liegt</a>
    <a href="#practical" class="hover:underline">→ Praktischer Leitfaden</a>
    <a href="#faq" class="hover:underline">→ FAQ</a>
  </nav>
  <p class="mt-4 text-sm text-blue-700 italic">Stand der Daten: 2. Juli 2026 · Jede Zahl mit Quelle belegt · Nächste INEGI-Umfrage: 24. Juli 2026</p>
</div>

<p class="text-xl leading-relaxed text-gray-800 mb-8 font-medium">
  <strong>Sie verdienen eine echte Antwort, keine Hochglanzbroschüre.</strong> Hier ist sie also, mit Quellen: was das US-Außenministerium tatsächlich sagt, was Mexikos offizielle Kriminalstatistik zeigt (einschließlich der Gründe, warum Sie sie mit einer hochgezogenen Augenbraue lesen sollten), wie die Bewohner selbst die Frage beantworten und die eine Region des Bundesstaates, in der Vorsicht wirklich angebracht ist.
</p>

<section id="tldr" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-blue-500 pb-3 inline-block">Die kurze Antwort</h2>
</div>
<div class="speakable bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-6 md:p-8 mb-6">
  <p class="text-base md:text-lg text-gray-800 leading-relaxed mb-5">
    <strong>Die Hauptstadt San Luis Potosí ist statistisch gesehen eine der sichereren Großstädte Mexikos im Jahr 2026 — mit weiter positiver Tendenz.</strong> Für den Bundesstaat gilt ein US-Reisehinweis der Stufe Level 2 (dieselbe wie für Mexiko-Stadt und Querétaro) mit <strong>null Reisebeschränkungen für Mitarbeiter der US-Regierung</strong>. Die Mordrate der Stadt liegt bei etwa der Hälfte des Landesdurchschnitts. Das nennenswerte Risiko für Reisende konzentriert sich auf den Autobahnkorridor der Huasteca — beherrschbar, wenn Sie bei Tageslicht fahren.
  </p>
</div>
</section>

<section id="advisories" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-blue-500 pb-3 inline-block">Was die Reisehinweise sagen</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">Der US-Reisehinweis (mit Datum vom 29. Mai 2026) stuft San Luis Potosí als <strong>Level 2 — „Erhöhte Vorsicht walten lassen“</strong> ein und stellt wörtlich fest: <em>„Es gibt keine besonderen Reisebeschränkungen für Mitarbeiter der US-Regierung im Bundesstaat San Luis Potosí.“</em> Genau dieser letzte Satz ist verräterisch — in Bundesstaaten der Stufe Level 3/4 gelten für US-Personal Fahrverbote und Ausgangssperren. Hier gibt es keine.</p>
<div class="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-4">
  <table class="min-w-full divide-y divide-gray-200">
    <thead class="bg-blue-700">
      <tr><th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase">Bundesstaat</th><th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase">US-Einstufung (Mai 2026)</th></tr>
    </thead>
    <tbody class="divide-y divide-gray-100">
      <tr class="bg-emerald-50"><td class="px-4 py-3 text-sm font-bold text-gray-900">San Luis Potosí</td><td class="px-4 py-3 text-sm text-gray-800"><strong>Level 2 — keine Beschränkungen der US-Regierung</strong></td></tr>
      <tr class="bg-white"><td class="px-4 py-3 text-sm text-gray-900">Querétaro · Aguascalientes · CDMX · Hidalgo · Nuevo León</td><td class="px-4 py-3 text-sm text-gray-700">Level 2</td></tr>
      <tr class="bg-gray-50"><td class="px-4 py-3 text-sm text-gray-900">Guanajuato · Jalisco · Coahuila</td><td class="px-4 py-3 text-sm text-gray-700">Level 3 — Reise überdenken</td></tr>
      <tr class="bg-white"><td class="px-4 py-3 text-sm text-gray-900">Zacatecas · Tamaulipas</td><td class="px-4 py-3 text-sm text-gray-700">Level 4 — Nicht reisen</td></tr>
    </tbody>
  </table>
</div>
<p class="text-gray-800 leading-relaxed mb-4">Zwei Anmerkungen, damit Sie den Hinweis richtig lesen. Erstens taucht das Wort „Terrorismus“ inzwischen in den Reisehinweisen für nahezu jeden mexikanischen Bundesstaat auf — auch für Querétaro (Level 2) und Mexiko-Stadt —, weil die USA die Kartelle 2025 als terroristische Organisationen eingestuft haben; es ist keine SLP-spezifische Warnung. Zweitens <strong>heben Kanada und das Vereinigte Königreich San Luis Potosí in ihren regionalen Warnungen überhaupt nicht gesondert hervor</strong>.</p>
</section>

<section id="the-data" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-blue-500 pb-3 inline-block">Die offiziellen Zahlen — und ihre Vorbehalte</h2>
</div>
<div class="grid md:grid-cols-3 gap-4 mb-6">
  <div class="bg-white border-2 border-blue-100 rounded-xl p-5 text-center"><p class="text-3xl font-extrabold text-blue-700 mb-1">-53%</p><p class="text-sm text-gray-700">Morde im Bundesstaat 2025 gegenüber 2024 (444 → 207), laut konsolidierten föderalen SESNSP-Zahlen</p></div>
  <div class="bg-white border-2 border-blue-100 rounded-xl p-5 text-center"><p class="text-3xl font-extrabold text-blue-700 mb-1">-81%</p><p class="text-sm text-gray-700">Jan.–Mai 2026 gegenüber 2025 — der größte Rückgang aller mexikanischen Bundesstaaten, laut dem monatlichen SESNSP-Bericht des Bundes</p></div>
  <div class="bg-white border-2 border-blue-100 rounded-xl p-5 text-center"><p class="text-3xl font-extrabold text-blue-700 mb-1">8.2</p><p class="text-sm text-gray-700">Mordrate der Hauptstadt pro 100.000 Einwohner im Jahr 2025 — etwa die Hälfte des Landeswerts von 17.5 (SESNSP; der Bürgermeister nannte 16.0)</p></div>
</div>
<div class="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6 mb-6">
  <h3 class="font-bold text-amber-900 mb-2">Lesen Sie dies, bevor Sie diese Zahlen zitieren</h3>
  <p class="text-sm text-gray-800 leading-relaxed">Die SESNSP-Zahlen sind <strong>vorläufig und werden von den Bundesstaaten gemeldet</strong> — sie hängen davon ab, wie die jeweilige Staatsanwaltschaft Todesfälle einordnet, und das Ausmaß des Rückgangs in SLP wurde nicht unabhängig geprüft (lokale Beobachter haben in einigen SLP-Kategorien eine Untererfassung dokumentiert). Was hingegen belastbar ist: Die <strong>Richtung</strong> des Trends wird durch den föderalen Vergleich über alle Bundesstaaten hinweg bestätigt, und Mexiko insgesamt schloss 2025 mit der niedrigsten Zahl an Morden seit einem Jahrzehnt ab (landesweite Rate 17.5 pro 100.000). Unsere Einschätzung: Betrachten Sie „SLP hat sich 2025–26 deutlich verbessert“ als gut belegt und die exakten Prozentwerte als von der Regierung gemeldet.</p>
</div>
</section>

<section id="perception" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-blue-500 pb-3 inline-block">Wie die Einheimischen sich fühlen: die INEGI-Umfrage</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">Wahrnehmungsdaten lassen sich von keiner Pressestelle schönen — INEGI befragt die Bewohner jedes Quartal direkt (ENSU). In der Ausgabe vom März 2026 gaben <strong>57.6% der Bewohner der Hauptstadt SLP an, sich unsicher zu fühlen</strong>: unter dem Landesdurchschnitt von 61.5% und eine statistisch signifikante <strong>Verbesserung um 14.8 Punkte</strong> gegenüber 72.4% ein Jahr zuvor.</p>
<div class="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-4">
  <table class="min-w-full divide-y divide-gray-200">
    <caption class="sr-only">ENSU März 2026 — % der Menschen, die sich unsicher fühlen</caption>
    <thead class="bg-blue-700"><tr><th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase">Stadt</th><th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase">% fühlen sich unsicher (März 2026)</th></tr></thead>
    <tbody class="divide-y divide-gray-100">
      <tr class="bg-white"><td class="px-4 py-3 text-sm text-gray-900">Querétaro</td><td class="px-4 py-3 text-sm text-gray-700">35.3%</td></tr>
      <tr class="bg-emerald-50"><td class="px-4 py-3 text-sm font-bold text-gray-900">San Luis Potosí</td><td class="px-4 py-3 text-sm text-gray-800"><strong>57.6%</strong> (von 72.4% vor einem Jahr)</td></tr>
      <tr class="bg-white"><td class="px-4 py-3 text-sm text-gray-900">Landesdurchschnitt</td><td class="px-4 py-3 text-sm text-gray-700">61.5%</td></tr>
      <tr class="bg-gray-50"><td class="px-4 py-3 text-sm text-gray-900">León</td><td class="px-4 py-3 text-sm text-gray-700">76.2%</td></tr>
      <tr class="bg-white"><td class="px-4 py-3 text-sm text-gray-900">Guadalajara</td><td class="px-4 py-3 text-sm text-gray-700">90.2%</td></tr>
    </tbody>
  </table>
</div>
<p class="text-sm text-gray-600 leading-relaxed">Volle Transparenz: Dieselbe Umfrage zeigt, dass Meldungen über Konflikte/Auseinandersetzungen in der Nachbarschaft in SLP im Quartalsvergleich gestiegen sind (24.1% im 4. Quartal 2025 → 42.2% im 1. Quartal 2026). Und die nächste Ausgabe erscheint am <strong>24. Juli 2026</strong> — wir aktualisieren diesen Beitrag, falls sich das Bild ändert.</p>
</section>

<section id="us-comparison" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-blue-500 pb-3 inline-block">SLP im Vergleich zu Städten, die US-Amerikaner kennen</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">Wir stellen die Rate der Hauptstadt für 2025 (~8.2 pro 100.000) den FBI-Städtedaten für 2024 gegenüber — eine ehrliche Verschiebung um ein Jahr, die wir offen benennen:</p>
<div class="grid md:grid-cols-2 gap-4 mb-4">
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-gray-900 mb-2">Ähnliche Rate</h3><p class="text-sm text-gray-700">Austin, TX (6.6) · Denver, CO (8.4) · Long Beach, CA (8.1)</p></div>
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-gray-900 mb-2">Zur Einordnung</h3><p class="text-sm text-gray-700">US-Landesdurchschnitt: 5.0 · Chicago: 18.3 · Memphis: 48.7 · Mexiko landesweit: 17.5</p></div>
</div>
<p class="text-sm text-gray-600 leading-relaxed">Von Nutzern zusammengetragene Indizes zeichnen ein ähnliches Bild im Mittelfeld: Numbeo (59 Beitragende — kleine Stichprobe, entsprechend zu bewerten) bewertet die Sicherheit von SLP mit ~48/100, mit hoher Sicherheit beim Gehen tagsüber (74) und geringem Komfort beim Gehen nachts (39) — was zum lokalen Leitsatz passt: tagsüber zu Fuß, nachts mit dem Auto.</p>
</section>

<section id="where-the-risk-is" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-red-400 pb-3 inline-block">Wo das Risiko wirklich liegt</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">Ein ehrlicher Sicherheitsbeitrag benennt die Ausnahme. Die Kriminalstatistik des Bundesstaates wird nicht von der Hauptstadt bestimmt, sondern von der <strong>Huasteca / Zona Media</strong> (den Korridoren Ciudad Valles, Rioverde, Tamazunchale), wo sich mehrere kriminelle Gruppen überschneiden und Unternehmen von Erpressung auf den Autobahnen berichtet haben. Der dokumentierte Vorfall, den Reisende kennen sollten: Am <strong>27. Dezember 2025</strong> (offiziell bestätigt am 30. Dezember) versuchten bewaffnete Männer, einen Touristenbus auf der Autobahn Valles–Tamazunchale zu stoppen; der Fahrer hielt nicht an, Schüsse trafen die Windschutzscheibe, und <strong>niemand wurde verletzt</strong>. Die lokale Presse hat wiederkehrende Busüberfälle dokumentiert, die sich auf den Abschnitt bei El Pujal konzentrieren.</p>
<div class="bg-gray-50 rounded-xl p-6 mb-4">
  <h3 class="font-bold text-gray-900 mb-2">Der Huasteca-Leitfaden (die Region ist weiterhin sehr gut zu bereisen)</h3>
  <ul class="space-y-2 text-sm text-gray-700">
    <li>• Befahren Sie die Korridore nur bei Tageslicht — das ist auch der pauschale Rat des US-Reisehinweises für ganz Mexiko.</li>
    <li>• Ziehen Sie Tagestouren ab Ciudad Valles einsamen Nachtfahrten vor; die Polizei führt an den Wasserfällen und in Xilitla saisonale Einsätze durch.</li>
    <li>• Unser <a href="/blog/huasteca-potosina-itinerary-2026" class="text-blue-700 underline">Huasteca-Reiseplan</a> ist genau aus diesem Grund um Tageslicht-Etappen herum aufgebaut.</li>
  </ul>
</div>
<p class="text-sm text-gray-600 leading-relaxed">Noch ein aussagekräftiger Datenpunkt aus 2026: Als der Tod des CJNG-Anführers „El Mencho“ im Februar 2026 in mehr als 11 Bundesstaaten Narco-Blockaden auslöste, <strong>verzeichnete San Luis Potosí null Blockaden oder Gewaltvorfälle</strong>.</p>
</section>

<section id="practical" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-blue-500 pb-3 inline-block">Der praktische Leitfaden</h2>
</div>
<div class="grid md:grid-cols-2 gap-4 mb-6">
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">In der Stadt</h3><ul class="space-y-2 text-sm text-gray-700"><li>• Centro, Carranza und Lomas sind die Besucherviertel — gehen Sie dort tagsüber unbesorgt zu Fuß; nehmen Sie nachts Uber/DiDi/inDriver, statt lange Strecken zu Fuß zu gehen.</li><li>• Das Centro verfügt jetzt über eine eigene Touristenpolizei mit 50 Beamten; Hotels halten QR-Codes bereit, mit denen sich Streifen der Guardia Civil rufen lassen.</li><li>• Notrufnummer: 911.</li></ul></div>
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">Auf der Straße</h3><ul class="space-y-2 text-sm text-gray-700"><li>• Zwischen Städten: nur bei Tageslicht, cuota-Straßen (Mautstraßen) statt libre-Straßen (mautfrei).</li><li>• Fahrt nach Texas? Die Standardroute ist die 57/40D über Saltillo bei Tageslicht; Tamaulipas ist Level 4 — umfahren Sie es.</li><li>• Abholungen am Flughafen erfolgen ausschließlich per konzessioniertem Taxi (Festpreis ~MX$275 ins Centro); Apps funktionieren überall sonst.</li></ul></div>
</div>
</section>

<section id="faq" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-blue-500 pb-3 inline-block">FAQ</h2>
</div>
<div class="space-y-4">
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Ist San Luis Potosí 2026 sicher für Touristen?<span class="text-blue-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Die Hauptstadt ja, mit normalen Vorsichtsmaßnahmen: Das US-Außenministerium stuft den Bundesstaat San Luis Potosí als Level 2 ein („erhöhte Vorsicht walten lassen“) — dieselbe Stufe wie Mexiko-Stadt und Querétaro — ohne Reisebeschränkungen für Mitarbeiter der US-Regierung irgendwo im Bundesstaat. Die Mordrate der Stadt für 2025 (~8.2 pro 100.000, laut SESNSP-Daten, die der Bürgermeister zitierte) beträgt etwa die Hälfte des mexikanischen Landeswerts und ist mit Denver oder Long Beach vergleichbar. Die eigentliche Risikozone des Bundesstaates für Reisende ist der Autobahnkorridor der Huasteca, wo Sie nur bei Tageslicht fahren sollten.</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Welche US-Reisewarnstufe gilt für San Luis Potosí?<span class="text-blue-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Level 2 — „Erhöhte Vorsicht walten lassen“ (Reisehinweis mit Datum vom 29. Mai 2026), mit null Reisebeschränkungen für Mitarbeiter der US-Regierung im Bundesstaat. Zum Vergleich: Querétaro, Aguascalientes und Mexiko-Stadt sind ebenfalls Level 2; Guanajuato und Jalisco sind Level 3; Zacatecas und Tamaulipas sind Level 4 (Nicht reisen). Kanada und das Vereinigte Königreich heben San Luis Potosí überhaupt nicht gesondert hervor.</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Ist ein Besuch der Huasteca Potosina sicher?<span class="text-blue-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Die Wasserfälle selbst sind Familienziele mit saisonalen Polizeieinsätzen, und kein Reisehinweis schränkt Reisen dorthin ein. Das dokumentierte Risiko sind die Autobahnen — insbesondere der Abschnitt Valles–Tamazunchale, wo im Dezember 2025 auf einen Touristenbus geschossen wurde (keine Verletzten) und sich Überfälle in der Nähe von El Pujal wiederholen. Der Standard-Leitfaden: nur bei Tageslicht fahren, wenn möglich Touren ab Ciudad Valles nutzen und auf den Hauptstraßen bleiben.</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Wie schneidet San Luis Potosí bei der Kriminalität im Vergleich zu US-Städten ab?<span class="text-blue-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Die Mordrate der Hauptstadt für 2025 von etwa 8.2 pro 100.000 (SESNSP-Daten, vom Bürgermeister zitiert) liegt im Bereich von Denver (8.4) oder Long Beach (8.1) in den FBI-Daten für 2024 — höher als Austin (6.6) und deutlich höher als Boston (3.7), über dem US-Landesdurchschnitt von 5.0, weit unter US-Städten mit hoher Kriminalität wie Memphis (48.7) und etwa die Hälfte des mexikanischen Landeswerts von 17.5.</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Fühlen sich die Einheimischen in San Luis Potosí sicher?<span class="text-blue-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Die Wahrnehmung verbessert sich rasch: In der ENSU-Umfrage von INEGI im März 2026 gaben 57.6% der Bewohner der Hauptstadt an, sich unsicher zu fühlen — unter dem Landesdurchschnitt (61.5%) und eine Verbesserung um 14.8 Punkte gegenüber dem Vorjahr (72.4%). Zur Einordnung: Querétaro liegt bei 35.3% und Guadalajara bei 90.2%. Die nächste Umfrage erscheint am 24. Juli 2026.</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Kann man Uber und DiDi in San Luis Potosí sicher nutzen?<span class="text-blue-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Uber, DiDi und inDriver sind alle in der Stadt aktiv und die empfohlene Art, sich nachts fortzubewegen. Ihr rechtlicher Status nach dem Landesrecht bleibt umstritten (eine Aussetzung durch ein Bundesgericht erlaubt Uber den Betrieb), was gelegentlich zu Reibereien am Flughafen führt — wo konzessionierte Taxis mit Festpreis die Abholungen übernehmen (~MX$275 ins Centro). Die Notrufnummer ist 911, und das Centro Histórico verfügt jetzt über eine eigene Touristenpolizeieinheit mit 50 Beamten.</p></details>
</div>
</section>

<section id="sources" class="mb-8 scroll-mt-8">
<div class="not-prose mb-4">
  <h2 class="text-2xl font-bold text-gray-900 mb-3">Quellen</h2>
</div>
<p class="text-sm text-gray-600 leading-relaxed">Reisehinweis des US-Außenministeriums für Mexiko (29. Mai 2026); Mexiko-Seiten der Regierung von Kanada und des britischen FCDO (geprüft im Juli 2026); SESNSP-Inzidenzdaten über das Sicherheitsministerium des Bundesstaates SLP (Jan. 2026), der monatliche Bericht des Bundes in der Berichterstattung von Infobae (16. Juni 2026) und die Ankündigung des Bürgermeisters von SLP vom 24. Juni 2026 (Rate der Hauptstadt); INEGI-ENSU-Bulletin zum 1. Quartal 2026 (veröffentlicht am 24. April 2026, PDF); FBI 2024 Crime in the Nation (US-Landesrate) mit Städteraten aus zusammengestellten FBI-Daten; Numbeo-Kriminalitätsseite zu SLP (Mai 2026, 59 Beitragende — von Nutzern zusammengetragen); Berichterstattung zu Vorfällen und Kontext von UnoTV, Astrolabio, Código San Luis, Reporte Índigo und El Universal SLP. Wo eine Zahl aus einer Regierungsankündigung statt aus Rohdaten stammt, weisen wir im Text darauf hin.</p>
</section>

<div class="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-center">
  <p class="text-white text-lg font-bold mb-2">Denken Sie über einen Umzug nach San Luis Potosí nach?</p>
  <p class="text-blue-100 text-sm mb-4">Kombinieren Sie diesen Beitrag mit unserer Aufschlüsselung der Lebenshaltungskosten und dem ultimativen Ratgeber zum Leben vor Ort — und erhalten Sie den wöchentlichen lokalen Überblick kostenlos.</p>
  <a href="/subscribe" class="inline-block bg-white text-blue-700 font-bold px-6 py-3 rounded-full hover:bg-blue-50 transition-colors">San Luis Way Weekly abonnieren</a>
</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Ist San Luis Potosí 2026 sicher für Touristen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Die Hauptstadt ja, mit normalen Vorsichtsmaßnahmen: Das US-Außenministerium stuft den Bundesstaat San Luis Potosí als Level 2 ein („erhöhte Vorsicht walten lassen“) — dieselbe Stufe wie Mexiko-Stadt und Querétaro — ohne Reisebeschränkungen für Mitarbeiter der US-Regierung irgendwo im Bundesstaat. Die Mordrate der Stadt für 2025 (~8.2 pro 100.000, laut SESNSP-Daten, die der Bürgermeister zitierte) beträgt etwa die Hälfte des mexikanischen Landeswerts und ist mit Denver oder Long Beach vergleichbar. Die eigentliche Risikozone des Bundesstaates für Reisende ist der Autobahnkorridor der Huasteca, wo Sie nur bei Tageslicht fahren sollten."
      }
    },
    {
      "@type": "Question",
      "name": "Welche US-Reisewarnstufe gilt für San Luis Potosí?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Level 2 — „Erhöhte Vorsicht walten lassen“ (Reisehinweis mit Datum vom 29. Mai 2026), mit null Reisebeschränkungen für Mitarbeiter der US-Regierung im Bundesstaat. Zum Vergleich: Querétaro, Aguascalientes und Mexiko-Stadt sind ebenfalls Level 2; Guanajuato und Jalisco sind Level 3; Zacatecas und Tamaulipas sind Level 4 (Nicht reisen). Kanada und das Vereinigte Königreich heben San Luis Potosí überhaupt nicht gesondert hervor."
      }
    },
    {
      "@type": "Question",
      "name": "Ist ein Besuch der Huasteca Potosina sicher?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Die Wasserfälle selbst sind Familienziele mit saisonalen Polizeieinsätzen, und kein Reisehinweis schränkt Reisen dorthin ein. Das dokumentierte Risiko sind die Autobahnen — insbesondere der Abschnitt Valles–Tamazunchale, wo im Dezember 2025 auf einen Touristenbus geschossen wurde (keine Verletzten) und sich Überfälle in der Nähe von El Pujal wiederholen. Der Standard-Leitfaden: nur bei Tageslicht fahren, wenn möglich Touren ab Ciudad Valles nutzen und auf den Hauptstraßen bleiben."
      }
    },
    {
      "@type": "Question",
      "name": "Wie schneidet San Luis Potosí bei der Kriminalität im Vergleich zu US-Städten ab?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Die Mordrate der Hauptstadt für 2025 von etwa 8.2 pro 100.000 (SESNSP-Daten, vom Bürgermeister zitiert) liegt im Bereich von Denver (8.4) oder Long Beach (8.1) in den FBI-Daten für 2024 — höher als Austin (6.6) und deutlich höher als Boston (3.7), über dem US-Landesdurchschnitt von 5.0, weit unter US-Städten mit hoher Kriminalität wie Memphis (48.7) und etwa die Hälfte des mexikanischen Landeswerts von 17.5."
      }
    },
    {
      "@type": "Question",
      "name": "Fühlen sich die Einheimischen in San Luis Potosí sicher?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Die Wahrnehmung verbessert sich rasch: In der ENSU-Umfrage von INEGI im März 2026 gaben 57.6% der Bewohner der Hauptstadt an, sich unsicher zu fühlen — unter dem Landesdurchschnitt (61.5%) und eine Verbesserung um 14.8 Punkte gegenüber dem Vorjahr (72.4%). Zur Einordnung: Querétaro liegt bei 35.3% und Guadalajara bei 90.2%. Die nächste Umfrage erscheint am 24. Juli 2026."
      }
    },
    {
      "@type": "Question",
      "name": "Kann man Uber und DiDi in San Luis Potosí sicher nutzen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Uber, DiDi und inDriver sind alle in der Stadt aktiv und die empfohlene Art, sich nachts fortzubewegen. Ihr rechtlicher Status nach dem Landesrecht bleibt umstritten (eine Aussetzung durch ein Bundesgericht erlaubt Uber den Betrieb), was gelegentlich zu Reibereien am Flughafen führt — wo konzessionierte Taxis mit Festpreis die Abholungen übernehmen (~MX$275 ins Centro). Die Notrufnummer ist 911, und das Centro Histórico verfügt jetzt über eine eigene Touristenpolizeieinheit mit 50 Beamten."
      }
    }
  ]
}
</script>

</div>`;

const content_ja = `<div class="max-w-none">

<div class="bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-6 mb-10">
  <p class="font-bold text-blue-900 mb-3">この分析の内容</p>
  <nav class="grid sm:grid-cols-2 gap-2 text-blue-800 text-sm">
    <a href="#tldr" class="hover:underline">→ 結論を先に</a>
    <a href="#advisories" class="hover:underline">→ 各国の渡航情報が示すこと（米国・カナダ・英国）</a>
    <a href="#the-data" class="hover:underline">→ 公式統計とその留意点</a>
    <a href="#perception" class="hover:underline">→ 地元住民の体感治安（INEGI調査）</a>
    <a href="#us-comparison" class="hover:underline">→ SLPと米国都市の比較</a>
    <a href="#where-the-risk-is" class="hover:underline">→ 実際にリスクがある場所</a>
    <a href="#practical" class="hover:underline">→ 実践ガイド</a>
    <a href="#faq" class="hover:underline">→ よくある質問</a>
  </nav>
  <p class="mt-4 text-sm text-blue-700 italic">データは2026年7月2日時点 · すべての数値に出典あり · 次回のINEGI調査：2026年7月24日</p>
</div>

<p class="text-xl leading-relaxed text-gray-800 mb-8 font-medium">
  <strong>パンフレットのような美辞麗句ではなく、本当の答えをお伝えします。</strong> 出典付きでご紹介しましょう。米国国務省が実際に何と述べているのか、メキシコの公式犯罪統計が何を示しているのか（そして、なぜそれを少し懐疑的な目で読むべきなのか）、住民自身がこの問いにどう答えているのか、そして州内で本当に注意が必要な唯一の地域について。
</p>

<section id="tldr" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-blue-500 pb-3 inline-block">結論を先に</h2>
</div>
<div class="speakable bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-6 md:p-8 mb-6">
  <p class="text-base md:text-lg text-gray-800 leading-relaxed mb-5">
    <strong>州都サン・ルイス・ポトシは、統計的に見て2026年のメキシコで比較的安全な大都市の一つであり、しかも改善傾向にあります。</strong> 州には米国の Level 2 の渡航情報（メキシコシティやケレタロと同じ）が出されており、<strong>米国政府職員に対する渡航制限は一切ありません</strong>。市の殺人発生率は全国平均の約半分です。旅行者にとって意味のあるリスクはウアステカの幹線道路沿いに集中しており、日中に運転すれば十分に対処できます。
  </p>
</div>
</section>

<section id="advisories" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-blue-500 pb-3 inline-block">各国の渡航情報が示すこと</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">米国の渡航情報（2026年5月29日付）は、サン・ルイス・ポトシを <strong>Level 2 —「より一層の注意を払ってください」</strong> と位置づけ、次のように明記しています。<em>「サン・ルイス・ポトシ州において、米国政府職員に対する特段の渡航制限はありません。」</em> この最後の一文こそが判断材料です — Level 3/4 の州では、米国職員に道路の通行禁止や外出禁止が課されます。ここではそれが一切ありません。</p>
<div class="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-4">
  <table class="min-w-full divide-y divide-gray-200">
    <thead class="bg-blue-700">
      <tr><th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase">州</th><th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase">米国の区分（2026年5月）</th></tr>
    </thead>
    <tbody class="divide-y divide-gray-100">
      <tr class="bg-emerald-50"><td class="px-4 py-3 text-sm font-bold text-gray-900">San Luis Potosí</td><td class="px-4 py-3 text-sm text-gray-800"><strong>Level 2 — 米国政府による制限なし</strong></td></tr>
      <tr class="bg-white"><td class="px-4 py-3 text-sm text-gray-900">Querétaro · Aguascalientes · CDMX · Hidalgo · Nuevo León</td><td class="px-4 py-3 text-sm text-gray-700">Level 2</td></tr>
      <tr class="bg-gray-50"><td class="px-4 py-3 text-sm text-gray-900">Guanajuato · Jalisco · Coahuila</td><td class="px-4 py-3 text-sm text-gray-700">Level 3 — 渡航の再検討を</td></tr>
      <tr class="bg-white"><td class="px-4 py-3 text-sm text-gray-900">Zacatecas · Tamaulipas</td><td class="px-4 py-3 text-sm text-gray-700">Level 4 — 渡航中止</td></tr>
    </tbody>
  </table>
</div>
<p class="text-gray-800 leading-relaxed mb-4">正しく読むための注記を二つ。第一に、「テロリズム」という言葉は、いまやほぼすべてのメキシコの州の渡航情報に登場します — Level 2 のケレタロやメキシコシティも含めてです — これは米国が2025年にカルテルをテロ組織に指定したためであり、SLPに固有の警告ではありません。第二に、<strong>カナダと英国は、地域別の警告でサン・ルイス・ポトシをまったく個別に取り上げていません</strong>。</p>
</section>

<section id="the-data" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-blue-500 pb-3 inline-block">公式統計とその留意点</h2>
</div>
<div class="grid md:grid-cols-3 gap-4 mb-6">
  <div class="bg-white border-2 border-blue-100 rounded-xl p-5 text-center"><p class="text-3xl font-extrabold text-blue-700 mb-1">-53%</p><p class="text-sm text-gray-700">州内の殺人件数、2025年対2024年（444 → 207）、連邦SESNSPの確定集計値による</p></div>
  <div class="bg-white border-2 border-blue-100 rounded-xl p-5 text-center"><p class="text-3xl font-extrabold text-blue-700 mb-1">-81%</p><p class="text-sm text-gray-700">2026年1〜5月対2025年 — メキシコの全州で最大の減少幅、連邦SESNSPの月次報告による</p></div>
  <div class="bg-white border-2 border-blue-100 rounded-xl p-5 text-center"><p class="text-3xl font-extrabold text-blue-700 mb-1">8.2</p><p class="text-sm text-gray-700">2025年の州都の殺人発生率（人口10万人あたり）— 全国値17.5の約半分（SESNSP；市長は16.0を引用）</p></div>
</div>
<div class="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6 mb-6">
  <h3 class="font-bold text-amber-900 mb-2">これらの数値を引用する前にお読みください</h3>
  <p class="text-sm text-gray-800 leading-relaxed">SESNSPの数値は<strong>暫定的で、各州からの報告に基づくもの</strong>です — 各検察当局が死亡をどう分類するかに左右され、SLPの減少幅は独立した監査を受けていません（地元の監視団体は、SLPの一部のカテゴリーで登録漏れを記録しています）。一方で確かなのは、傾向の<strong>方向</strong>が全州にわたる連邦の比較によって裏付けられていること、そしてメキシコ全体が2025年を過去10年で最も少ない殺人件数で締めくくったこと（全国発生率は人口10万人あたり17.5）です。私たちの見立てはこうです。「SLPは2025〜26年に大きく改善した」は十分に裏付けられたものとして、正確なパーセンテージは政府発表値として扱ってください。</p>
</div>
</section>

<section id="perception" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-blue-500 pb-3 inline-block">地元住民の体感：INEGI調査</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">体感治安のデータは、広報部門が都合よく調整できるものではありません — INEGIは四半期ごとに住民に直接調査を行っています（ENSU）。2026年3月版では、<strong>SLP州都の住民の57.6%が不安を感じると回答しました</strong>。これは全国平均の61.5%を下回り、1年前の72.4%から統計的に有意な<strong>14.8ポイントの改善</strong>です。</p>
<div class="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-4">
  <table class="min-w-full divide-y divide-gray-200">
    <caption class="sr-only">ENSU 2026年3月 — 不安を感じる人の割合</caption>
    <thead class="bg-blue-700"><tr><th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase">都市</th><th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase">不安を感じる割合（2026年3月）</th></tr></thead>
    <tbody class="divide-y divide-gray-100">
      <tr class="bg-white"><td class="px-4 py-3 text-sm text-gray-900">Querétaro</td><td class="px-4 py-3 text-sm text-gray-700">35.3%</td></tr>
      <tr class="bg-emerald-50"><td class="px-4 py-3 text-sm font-bold text-gray-900">San Luis Potosí</td><td class="px-4 py-3 text-sm text-gray-800"><strong>57.6%</strong>（1年前は72.4%）</td></tr>
      <tr class="bg-white"><td class="px-4 py-3 text-sm text-gray-900">全国平均</td><td class="px-4 py-3 text-sm text-gray-700">61.5%</td></tr>
      <tr class="bg-gray-50"><td class="px-4 py-3 text-sm text-gray-900">León</td><td class="px-4 py-3 text-sm text-gray-700">76.2%</td></tr>
      <tr class="bg-white"><td class="px-4 py-3 text-sm text-gray-900">Guadalajara</td><td class="px-4 py-3 text-sm text-gray-700">90.2%</td></tr>
    </tbody>
  </table>
</div>
<p class="text-sm text-gray-600 leading-relaxed">完全な透明性のために。同じ調査では、SLPにおける近隣での対立・衝突の報告が四半期比で増加したことも示されています（2025年第4四半期の24.1% → 2026年第1四半期の42.2%）。そして次回版は<strong>2026年7月24日</strong>に公表されます — 状況が変われば、この記事を更新します。</p>
</section>

<section id="us-comparison" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-blue-500 pb-3 inline-block">SLPと米国人になじみのある都市の比較</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">州都の2025年の発生率（人口10万人あたり約8.2）を、FBIの2024年の都市データと比較します — 1年のずれがある正直な比較であることを、包み隠さずお伝えします。</p>
<div class="grid md:grid-cols-2 gap-4 mb-4">
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-gray-900 mb-2">同程度の発生率</h3><p class="text-sm text-gray-700">Austin, TX (6.6) · Denver, CO (8.4) · Long Beach, CA (8.1)</p></div>
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-gray-900 mb-2">規模の目安</h3><p class="text-sm text-gray-700">米国全国平均：5.0 · シカゴ：18.3 · メンフィス：48.7 · メキシコ全国：17.5</p></div>
</div>
<p class="text-sm text-gray-600 leading-relaxed">利用者投稿型の指標も、同じような中位の姿を示しています。Numbeo（回答者59名 — 少ないサンプルなので、その点を踏まえて）はSLPの安全性を約48/100と評価し、日中に歩く安全性は高く（74）、夜間に歩く快適さは低い（39）という結果です — これは地元の鉄則、すなわち「昼は歩き、夜は車で」と一致します。</p>
</section>

<section id="where-the-risk-is" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-red-400 pb-3 inline-block">実際にリスクがある場所</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">誠実な安全ガイドは、例外も明示します。州の犯罪統計を押し上げているのは州都ではなく、<strong>ウアステカ／ソナ・メディア</strong>（シウダー・バジェス、リオベルデ、タマスンチャレの各回廊）です。ここでは複数の犯罪グループが重なり合い、企業からは幹線道路での恐喝が報告されています。旅行者が知っておくべき、記録に残る事件はこうです。<strong>2025年12月27日</strong>（12月30日に公式確認）、武装した男らがバジェス–タマスンチャレ間の幹線道路で観光バスを停めようとしました。運転手は停車せず、銃弾がフロントガラスに当たりましたが、<strong>負傷者はいませんでした</strong>。地元報道は、エル・プハル付近に集中して繰り返されるバス強盗を記録しています。</p>
<div class="bg-gray-50 rounded-xl p-6 mb-4">
  <h3 class="font-bold text-gray-900 mb-2">ウアステカの鉄則（それでも十分に訪れる価値があります）</h3>
  <ul class="space-y-2 text-sm text-gray-700">
    <li>• 回廊は日中のみ運転してください — これはメキシコ全土に対する米国渡航情報の一律の助言でもあります。</li>
    <li>• 夜間の単独運転よりも、シウダー・バジェス発の日中ツアーを選びましょう。警察は滝の各所やシリトラで季節ごとの取り締まりを行っています。</li>
    <li>• 私たちの<a href="/blog/huasteca-potosina-itinerary-2026" class="text-blue-700 underline">ウアステカ旅程</a>は、まさにこの理由から、日中の移動区間を中心に組んでいます。</li>
  </ul>
</div>
<p class="text-sm text-gray-600 leading-relaxed">多くを物語る、2026年のもう一つのデータ。CJNGの指導者「エル・メンチョ」の死が2026年2月に11以上の州で麻薬組織による道路封鎖を引き起こした際、<strong>サン・ルイス・ポトシでは封鎖も暴力事件も一切記録されませんでした</strong>。</p>
</section>

<section id="practical" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-blue-500 pb-3 inline-block">実践ガイド</h2>
</div>
<div class="grid md:grid-cols-2 gap-4 mb-6">
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">市内では</h3><ul class="space-y-2 text-sm text-gray-700"><li>• セントロ、カランサ、ロマスが観光客向けのエリアです — 日中は自由に歩いて構いません。夜は長い距離を歩く代わりにUber／DiDi／inDriverを利用しましょう。</li><li>• セントロには現在、50名体制の観光警察が配置されています。ホテルにはグアルディア・シビルの巡回を呼び出せるQRコードが用意されています。</li><li>• 緊急番号：911。</li></ul></div>
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">移動中は</h3><ul class="space-y-2 text-sm text-gray-700"><li>• 都市間の移動：日中のみ、libre（無料道路）よりcuota（有料道路）を利用してください。</li><li>• テキサスへ車で？ 標準ルートは日中にサルティージョ経由の57/40Dです。タマウリパスは Level 4 なので、迂回してください。</li><li>• 空港での送迎は認可タクシーのみです（セントロまで定額の約MX$275）。それ以外の場所ではアプリが使えます。</li></ul></div>
</div>
</section>

<section id="faq" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-blue-500 pb-3 inline-block">よくある質問</h2>
</div>
<div class="space-y-4">
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">2026年、サン・ルイス・ポトシは観光客にとって安全ですか？<span class="text-blue-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">州都については、通常の注意を払えば安全です。米国国務省はサン・ルイス・ポトシ州を Level 2（「より一層の注意を」）と評価しており — メキシコシティやケレタロと同じ区分です — 州内のどこにおいても米国政府職員への渡航制限はありません。市の2025年の殺人発生率（市長が引用したSESNSPデータで人口10万人あたり約8.2）はメキシコの全国値の約半分で、デンバーやロングビーチと同程度です。州で旅行者にとって本当のリスク区域はウアステカの幹線道路沿いで、そこは日中のみ運転すべきです。</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">サン・ルイス・ポトシに対する米国の渡航情報の区分はどれですか？<span class="text-blue-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Level 2 —「より一層の注意を払ってください」（2026年5月29日付の渡航情報）で、州内の米国政府職員への渡航制限は一切ありません。比較すると、ケレタロ、アグアスカリエンテス、メキシコシティも Level 2、グアナフアトとハリスコは Level 3、サカテカスとタマウリパスは Level 4（渡航中止）です。カナダと英国は、サン・ルイス・ポトシをまったく個別に取り上げていません。</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">ウアステカ・ポトシナは訪れても安全ですか？<span class="text-blue-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">滝の各所そのものは、季節ごとの警察の取り締まりが行われる家族向けの目的地であり、そこへの渡航を制限する情報はありません。記録に残るリスクは幹線道路 — とりわけバジェス–タマスンチャレ区間で、2025年12月に観光バスが銃撃され（負傷者なし）、エル・プハル付近では路上強盗が繰り返されています。標準の鉄則はこうです。日中のみ運転し、可能ならシウダー・バジェス発のツアーを利用し、主要道路から外れないこと。</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">犯罪面で、サン・ルイス・ポトシは米国都市と比べてどうですか？<span class="text-blue-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">州都の2025年の殺人発生率、人口10万人あたり約8.2（市長が引用したSESNSPデータ）は、FBIの2024年データにおけるデンバー（8.4）やロングビーチ（8.1）の範囲に収まります — オースティン（6.6）より高く、ボストン（3.7）よりかなり高く、米国全国平均の5.0を上回りますが、メンフィス（48.7）のような犯罪の多い米国都市をはるかに下回り、メキシコの全国値17.5の約半分です。</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">サン・ルイス・ポトシの地元住民は安全だと感じていますか？<span class="text-blue-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">体感は急速に改善しています。INEGIの2026年3月のENSU調査では、州都の住民の57.6%が不安を感じると回答しました — 全国平均（61.5%）を下回り、1年前（72.4%）から14.8ポイントの改善です。参考までに、ケレタロは35.3%、グアダラハラは90.2%です。次回の調査は2026年7月24日に公表されます。</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">サン・ルイス・ポトシでUberやDiDiは安全に使えますか？<span class="text-blue-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Uber、DiDi、inDriverはいずれも市内で運行しており、夜間の移動手段として推奨されます。州法上の法的地位は依然として争われていますが（連邦裁判所の停止命令によりUberは運行できています）、そのため空港では時折もめごとが生じます — 空港では認可された定額タクシーが送迎を担っています（セントロまで約MX$275）。緊急番号は911で、セントロ・イストリコには現在、50名体制の専属観光警察部隊があります。</p></details>
</div>
</section>

<section id="sources" class="mb-8 scroll-mt-8">
<div class="not-prose mb-4">
  <h2 class="text-2xl font-bold text-gray-900 mb-3">出典</h2>
</div>
<p class="text-sm text-gray-600 leading-relaxed">米国国務省メキシコ渡航情報（2026年5月29日）；カナダ政府および英国FCDOのメキシコ関連ページ（2026年7月確認）；SLP州治安省を通じたSESNSPの発生データ（2026年1月）、Infobaeが報じた連邦の月次報告（2026年6月16日）、およびSLP市長による2026年6月24日の発表（州都の発生率）；INEGI ENSU 2026年第1四半期報告（2026年4月24日公表、PDF）；FBI 2024 Crime in the Nation（米国全国値）と、集計されたFBIデータによる都市別発生率；NumbeoのSLP犯罪ページ（2026年5月、回答者59名 — 利用者投稿型）；UnoTV、Astrolabio、Código San Luis、Reporte Índigo、El Universal SLPによる事件および背景の報道。数値が生データではなく政府発表に由来する場合は、本文中でその旨を明記しています。</p>
</section>

<div class="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-center">
  <p class="text-white text-lg font-bold mb-2">サン・ルイス・ポトシへの移住をお考えですか？</p>
  <p class="text-blue-100 text-sm mb-4">この記事を、生活費の内訳や究極の生活ガイドと合わせてご覧ください — さらに、毎週の地元ダイジェストを無料でお届けします。</p>
  <a href="/subscribe" class="inline-block bg-white text-blue-700 font-bold px-6 py-3 rounded-full hover:bg-blue-50 transition-colors">San Luis Way Weekly を購読する</a>
</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "2026年、サン・ルイス・ポトシは観光客にとって安全ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "州都については、通常の注意を払えば安全です。米国国務省はサン・ルイス・ポトシ州を Level 2（「より一層の注意を」）と評価しており — メキシコシティやケレタロと同じ区分です — 州内のどこにおいても米国政府職員への渡航制限はありません。市の2025年の殺人発生率（市長が引用したSESNSPデータで人口10万人あたり約8.2）はメキシコの全国値の約半分で、デンバーやロングビーチと同程度です。州で旅行者にとって本当のリスク区域はウアステカの幹線道路沿いで、そこは日中のみ運転すべきです。"
      }
    },
    {
      "@type": "Question",
      "name": "サン・ルイス・ポトシに対する米国の渡航情報の区分はどれですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Level 2 —「より一層の注意を払ってください」（2026年5月29日付の渡航情報）で、州内の米国政府職員への渡航制限は一切ありません。比較すると、ケレタロ、アグアスカリエンテス、メキシコシティも Level 2、グアナフアトとハリスコは Level 3、サカテカスとタマウリパスは Level 4（渡航中止）です。カナダと英国は、サン・ルイス・ポトシをまったく個別に取り上げていません。"
      }
    },
    {
      "@type": "Question",
      "name": "ウアステカ・ポトシナは訪れても安全ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "滝の各所そのものは、季節ごとの警察の取り締まりが行われる家族向けの目的地であり、そこへの渡航を制限する情報はありません。記録に残るリスクは幹線道路 — とりわけバジェス–タマスンチャレ区間で、2025年12月に観光バスが銃撃され（負傷者なし）、エル・プハル付近では路上強盗が繰り返されています。標準の鉄則はこうです。日中のみ運転し、可能ならシウダー・バジェス発のツアーを利用し、主要道路から外れないこと。"
      }
    },
    {
      "@type": "Question",
      "name": "犯罪面で、サン・ルイス・ポトシは米国都市と比べてどうですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "州都の2025年の殺人発生率、人口10万人あたり約8.2（市長が引用したSESNSPデータ）は、FBIの2024年データにおけるデンバー（8.4）やロングビーチ（8.1）の範囲に収まります — オースティン（6.6）より高く、ボストン（3.7）よりかなり高く、米国全国平均の5.0を上回りますが、メンフィス（48.7）のような犯罪の多い米国都市をはるかに下回り、メキシコの全国値17.5の約半分です。"
      }
    },
    {
      "@type": "Question",
      "name": "サン・ルイス・ポトシの地元住民は安全だと感じていますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "体感は急速に改善しています。INEGIの2026年3月のENSU調査では、州都の住民の57.6%が不安を感じると回答しました — 全国平均（61.5%）を下回り、1年前（72.4%）から14.8ポイントの改善です。参考までに、ケレタロは35.3%、グアダラハラは90.2%です。次回の調査は2026年7月24日に公表されます。"
      }
    },
    {
      "@type": "Question",
      "name": "サン・ルイス・ポトシでUberやDiDiは安全に使えますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Uber、DiDi、inDriverはいずれも市内で運行しており、夜間の移動手段として推奨されます。州法上の法的地位は依然として争われていますが（連邦裁判所の停止命令によりUberは運行できています）、そのため空港では時折もめごとが生じます — 空港では認可された定額タクシーが送迎を担っています（セントロまで約MX$275）。緊急番号は911で、セントロ・イストリコには現在、50名体制の専属観光警察部隊があります。"
      }
    }
  ]
}
</script>

</div>`;

// Statistics/advisory tokens that must appear byte-identical in every language.
const CRITICAL = [
  'Level 2', 'Level 3', 'Level 4', 'Level 3/4',
  '-53%', '-81%', '8.2', '17.5', '16.0', '444', '207',
  '57.6%', '61.5%', '14.8', '72.4%', '35.3%', '76.2%', '90.2%',
  '24.1%', '42.2%', '5.0', '18.3', '48.7', '6.6', '8.4', '8.1', '3.7',
  'MX$275', '911', '57/40D', '48/100', '74', '39',
  'SESNSP', 'INEGI', 'ENSU', 'FBI', 'Numbeo', 'FCDO', 'CJNG',
];

// Localized date forms (same day/month/year values as EN source).
const DATES = {
  DE: ['29. Mai 2026', '16. Juni 2026', '24. Juni 2026', '24. April 2026', '24. Juli 2026'],
  JA: ['2026年5月29日', '2026年6月16日', '2026年6月24日', '2026年4月24日', '2026年7月24日'],
};

const countTags = (s) => (s.match(/<[^>]+>/g) || []).length;
const jsonLd = (s) => {
  const m = s.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  return m ? m[1] : null;
};

async function main() {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('id, content, content_de, content_ja')
    .eq('slug', SLUG)
    .maybeSingle();
  if (error || !data) {
    console.error('FETCH ERROR:', error ? error.message : 'not found');
    process.exit(1);
  }

  const { error: upErr } = await supabase
    .from('blog_posts')
    .update({ content_de, content_ja })
    .eq('id', data.id);
  if (upErr) {
    console.error('UPDATE ERROR:', upErr.message);
    process.exit(1);
  }
  console.log('Updated content_de + content_ja for', SLUG);

  // Re-fetch and verify.
  const { data: v, error: vErr } = await supabase
    .from('blog_posts')
    .select('content, content_de, content_ja')
    .eq('id', data.id)
    .single();
  if (vErr) {
    console.error('VERIFY FETCH ERROR:', vErr.message);
    process.exit(1);
  }

  let ok = true;
  const enTags = countTags(v.content);
  for (const [lang, html] of [['DE', v.content_de], ['JA', v.content_ja]]) {
    console.log(`\n===== ${lang} =====`);
    if (html === v.content) { console.log('  FAIL: identical to EN'); ok = false; }
    else console.log('  OK: differs from EN content');

    const tags = countTags(html);
    if (tags === enTags) console.log(`  OK: tag count matches EN (${tags})`);
    else { console.log(`  FAIL: tag count ${tags} vs EN ${enTags}`); ok = false; }

    const ld = jsonLd(html);
    try { JSON.parse(ld); console.log('  OK: embedded JSON-LD parses'); }
    catch (e) { console.log('  FAIL: JSON-LD parse error:', e.message); ok = false; }

    const missing = CRITICAL.filter((c) => !html.includes(c));
    if (missing.length === 0) console.log(`  OK: all ${CRITICAL.length} critical tokens present`);
    else { console.log('  FAIL: missing critical tokens:', missing.join(', ')); ok = false; }

    const missingDates = DATES[lang].filter((d) => !html.includes(d));
    if (missingDates.length === 0) console.log(`  OK: all ${DATES[lang].length} localized dates present`);
    else { console.log('  FAIL: missing dates:', missingDates.join(', ')); ok = false; }

    // Leftover-English heuristic: flag English marker phrases in body text.
    const enMarkers = ['The short answer', 'homicide rate', 'feel unsafe', 'daylight', 'Sources</h2>', 'the mayor'];
    const leftover = enMarkers.filter((m) => html.includes(m));
    if (leftover.length === 0) console.log('  OK: no English marker phrases in prose');
    else { console.log('  WARN: possible English leftovers:', leftover.join(', ')); ok = false; }

    // Href integrity.
    const hrefs = (html.match(/href="[^"]*"/g) || []).sort();
    const enHrefs = (v.content.match(/href="[^"]*"/g) || []).sort();
    if (JSON.stringify(hrefs) === JSON.stringify(enHrefs)) console.log(`  OK: hrefs identical to EN (${hrefs.length})`);
    else { console.log('  FAIL: href mismatch'); ok = false; }

    const words = html.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
    console.log(`  Word/segment count: ${words}`);
  }

  console.log(ok ? '\nAll checks passed.' : '\nProblems found — review output.');
  process.exit(ok ? 0 : 1);
}

main();
