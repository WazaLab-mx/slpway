// Native German + Japanese translations for the blog post
// `day-trips-from-san-luis-potosi-2026` (idempotent). Replaces content_de and
// content_ja by slug. Place names, distances, drive times (min/h/km), prices
// (MXN), temperatures and dates are kept byte-identical; only prose is
// translated. Embedded JSON-LD keeps keys/@type/URLs and translates only the
// human-readable string values. Verifies by re-fetching after the update.
require('dotenv').config({ path: '.env' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const SLUG = 'day-trips-from-san-luis-potosi-2026';

const CONTENT_DE = `<div class="max-w-none">

<p class="text-xl leading-relaxed text-gray-800 mb-8 font-medium">
  <strong>Die Stadt San Luis Potosí liegt am Schnittpunkt dreier völlig unterschiedlicher Welten</strong> — Geisterstädte der Hochwüste, Thermalquellenland und kieferbewaldete Sierra — und sieben wirklich großartige Ausflüge passen in einen einzigen Tag. Geprüfte Entfernungen, Preise und ehrliche Urteile (einschließlich der Frage, welche berühmten Touren sich NICHT als Tagesausflüge eignen).
</p>

<div class="speakable bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-200 rounded-2xl p-6 md:p-8 mb-10">
  <p class="text-base md:text-lg text-gray-800 leading-relaxed">
    <strong>Die sieben, nach Entfernung:</strong> Cerro de San Pedro (35 min), Santa María del Río (40 min), Balneario Gogorrón + Hacienda (1 h), Sierra de Álvarez (1 h), Guadalcázar (1.5 h), Media Luna (2 h), Real de Catorce (3.5 h). Die Huasteca steht <em>bewusst nicht</em> auf dieser Liste — sie verdient eine Übernachtung.
  </p>
</div>

<div class="space-y-6 mb-12">

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <div class="flex items-center justify-between flex-wrap gap-2 mb-2">
      <h3 class="font-bold text-xl text-gray-900"><span class="text-orange-500 mr-2">1.</span>Cerro de San Pedro</h3>
      <span class="text-xs font-semibold bg-orange-100 text-orange-800 rounded-full px-3 py-1">Am nächsten</span>
    </div>
    <p class="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">22 km · ~35 min · kostenlos</p>
    <p class="text-sm text-gray-700 leading-relaxed">Die verlassene Bergbaustadt, die dem gesamten Bundesstaat ihren Namen gab, 35 Minuten von Ihrer Haustür entfernt. Kopfsteinpflastergassen, dachlose Steinhäuser, zwei Kolonialkirchen (San Nicolás Tolentino, Schutzpatron der Bergleute, und der aus dem 17. Jahrhundert stammende San Pedro Apóstol), ein begehbarer Minenstollen und gorditas auf der Plaza. Sie erwacht am Wochenende zum Leben — dann öffnen der Kunsthandwerksladen und die Handvoll Restaurants. Sogar der Stadtbus fährt hin (Ruta 39 ab der Alameda). Der bittersüße Kontext: Ein moderner Tagebau verschlang den namensgebenden Hügel selbst, bevor er stillgelegt wurde; das Dorf, das überlebte, ist die Attraktion.</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <div class="flex items-center justify-between flex-wrap gap-2 mb-2">
      <h3 class="font-bold text-xl text-gray-900"><span class="text-orange-500 mr-2">2.</span>Santa María del Río</h3>
      <span class="text-xs font-semibold bg-orange-100 text-orange-800 rounded-full px-3 py-1">Kultur</span>
    </div>
    <p class="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">48 km · ~40 min · kostenlos</p>
    <p class="text-sm text-gray-700 leading-relaxed">Die „Wiege des Rebozo“ — ein Pueblo Mágico (2020), in dem seidene Tücher noch immer im Ikat-Verfahren gefärbt und auf Rückengurtwebstühlen gewebt werden, eine Tradition, die im Taller Escuela de Rebocería (gegründet 1953) und in besuchbaren Familienwerkstätten fortlebt. Kaufen Sie direkt bei den Webern rund um den Palacio Municipal; probieren Sie queso de tuna und asado de boda; wer Anfang August kommt, erlebt, wie die Feria del Rebozo die ganze Stadt einnimmt. Kombinieren Sie den Besuch mit den nahegelegenen Thermalbecken von Ojo Caliente (MX$140 Erwachsene, Di.–So.) oder den historischen Quellen des Balneario de Lourdes. Busse fahren im Dauertakt (~MX$40–70).</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <div class="flex items-center justify-between flex-wrap gap-2 mb-2">
      <h3 class="font-bold text-xl text-gray-900"><span class="text-orange-500 mr-2">3.</span>Balneario Gogorrón + die Hacienda</h3>
      <span class="text-xs font-semibold bg-orange-100 text-orange-800 rounded-full px-3 py-1">Familie</span>
    </div>
    <p class="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">61 km · ~1 h · MX$100–120</p>
    <p class="text-sm text-gray-700 leading-relaxed">Thermalwasser mit ~42°C speist fünf Becken, Rutschen, Picknickwiesen und römische Wannen — der klassische potosinische Familienausflug, 2023 nach Jahren des Verfalls vom Bundesstaat gerettet und neu eröffnet (täglich geöffnet ~9–5 Uhr; MX$100–120 laut jüngster Veröffentlichung, bestätigen Sie unter 444 812 1550). Zehn Minuten entfernt lässt sich die Ex-Hacienda San Pedro de Gogorrón (1592) kostenlos erkunden — Sie haben sie schon einmal gesehen, ohne es zu wissen: The Mask of Zorro wurde hier gedreht. Auto empfohlen.</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <div class="flex items-center justify-between flex-wrap gap-2 mb-2">
      <h3 class="font-bold text-xl text-gray-900"><span class="text-orange-500 mr-2">4.</span>Sierra de Álvarez</h3>
      <span class="text-xs font-semibold bg-orange-100 text-orange-800 rounded-full px-3 py-1">Wandern</span>
    </div>
    <p class="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">~50 km · ~1 h · keine offizielle Gebühr</p>
    <p class="text-sm text-gray-700 leading-relaxed">Die Kiefern-und-Eichen-Wand östlich der Stadt an der Fernstraße 70: Wanderwege bei Las Rusias, El Milagro und San Francisco für alle Niveaus, Mountainbiking und — für technische Höhlengeher — über 100 Schächte, darunter das 678 m tiefe Resumidero del Borbollón. Kein offizieller Eingang (von Ejidos betriebene Stellen erheben mitunter kleine Parkgebühren); örtliche Anbieter führen geführte Wanderungen durch. Nur mit dem Auto. Hinweis: Der separate Parque Nacional El Potosí (Camping, Aussichtspunkte) ist ein anderes, weiter entferntes Gebiet (~2 h) in Richtung Rioverde.</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <div class="flex items-center justify-between flex-wrap gap-2 mb-2">
      <h3 class="font-bold text-xl text-gray-900"><span class="text-orange-500 mr-2">5.</span>Guadalcázar & die Gruta de las Candelas</h3>
      <span class="text-xs font-semibold bg-orange-100 text-orange-800 rounded-full px-3 py-1">Abenteuer</span>
    </div>
    <p class="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">~90 km · ~1.5 h · kleine lokale Gebühren</p>
    <p class="text-sm text-gray-700 leading-relaxed">Eine alte Bergbaustadt in der Hochwüste (trotz aller Ambitionen kein Pueblo Mágico), die eine der am leichtesten zugänglichen Schauhöhlen des Bundesstaates verbirgt: Las Candelas, 5 km vom Ort entfernt, Stalaktiten und Stalagmiten mit einer Picknick-Esplanade und Campingmöglichkeit am Eingang (das letzte Stück ist Schotterpiste; für die tieferen Galerien ist ein ortskundiger Führer ratsam). Guadalcázar ist zudem ein dokumentiertes Sportkletterziel. Nur mit dem Auto.</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <div class="flex items-center justify-between flex-wrap gap-2 mb-2">
      <h3 class="font-bold text-xl text-gray-900"><span class="text-orange-500 mr-2">6.</span>Media Luna (Rioverde)</h3>
      <span class="text-xs font-semibold bg-orange-100 text-orange-800 rounded-full px-3 py-1">Baden</span>
    </div>
    <p class="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">~130 km · ~2 h · MX$100</p>
    <p class="text-sm text-gray-700 leading-relaxed">Eine halbmondförmige Quelle mit unfassbar klarem Thermalwasser (27–30°C das ganze Jahr über, bis zu 30 m Sicht) mit versteinerten Bäumen am Grund und PADI-Tauchschulen zwischen den Kanälen. Schwimmen, Schnorcheln (~MX$200 Verleih), Zelten (MX$150/Zelt). Eintritt MX$100 für Erwachsene (Stand Mitte 2025) — lokal kursiert eine Erhöhung auf 150, bestätigen Sie unter 487 101 5874. Öffnungszeiten 8–5; kein Alkohol, keine Haustiere. Machbar mit dem Bus bis Rioverde + Taxi, bequemer mit dem Auto.</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <div class="flex items-center justify-between flex-wrap gap-2 mb-2">
      <h3 class="font-bold text-xl text-gray-900"><span class="text-orange-500 mr-2">7.</span>Real de Catorce</h3>
      <span class="text-xs font-semibold bg-orange-100 text-orange-800 rounded-full px-3 py-1">Der Klassiker</span>
    </div>
    <p class="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">223 km · ~3.5 h · Tunnelmaut</p>
    <p class="text-sm text-gray-700 leading-relaxed">Der große Klassiker — eine silberne Geisterstadt auf 2,730 m, erreichbar durch einen 2.3 km langen Bergbautunnel. Als Tagesausflug eine lange, aber klassische Fahrt: um 7 Uhr los, hinter Matehuala das Kopfsteinpflaster hinauf, eine Willys-Fahrt oder ein Spaziergang durch die Geisterstadt, Mittagessen im Mesón de la Abundancia, vor Einbruch der Dunkelheit zurück (fahren Sie die Sierra niemals nachts). Ehrlich gesagt besser als Übernachtung — unser vollständiger Leitfaden deckt alles ab.</p>
  </div>
</div>

<div class="bg-red-50 border-2 border-red-200 rounded-2xl p-6 md:p-8 mb-12">
  <h2 class="text-2xl font-bold text-red-900 mb-3">Die ehrliche „kein Tagesausflug“-Box</h2>
  <p class="text-gray-800 leading-relaxed mb-3"><strong>Die Huasteca Potosina:</strong> Tamasopo liegt 2.5–3 h pro Richtung auf einer kurvigen Bergstraße; Tamul und Aquismón 4+; Xilitla 4.5. Ein „Tagesausflug“ bedeutet über 6 Stunden Fahrt für 3 Stunden Wasserfall. Machen Sie es lieber richtig: Unser <a href='/blog/huasteca-potosina-itinerary-2026' class='text-red-800 underline font-semibold'>3/5/7-tägiger Huasteca-Reiseplan</a> und der <a href='/blog/xilitla-las-pozas-guide-2026' class='text-red-800 underline font-semibold'>Xilitla-Deep-Dive</a> sind für Übernachtungen ab Ciudad Valles gemacht.</p>
  <p class="text-gray-800 leading-relaxed"><strong>Real de Catorce</strong> schafft es als langer Klassiker auf die Liste — ist aber ebenfalls als Übernachtung besser: Der <a href='/blog/real-de-catorce-guide-2026' class='text-red-800 underline font-semibold'>vollständige Leitfaden</a> listet Hotels ab ~MX$950.</p>
</div>

<section id="faq" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-orange-500 pb-3 inline-block">FAQ</h2>
</div>
<div class="space-y-4">
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Was sind die besten Tagesausflüge von San Luis Potosí aus?<span class="text-orange-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Die sieben, die wirklich als Tagesausflüge funktionieren: Cerro de San Pedro (verlassene Bergbaustadt, 35 min), Santa María del Río (Rebozo-Pueblo-Mágico, 40 min), die Thermalbecken des Balneario Gogorrón + die Hacienda aus The Mask of Zorro (~1 h), Wandern in der Sierra de Álvarez (~1 h), Guadalcázar und die Candelas-Höhle (~1.5 h), die Kristallquelle Media Luna (~2 h) und — der lange Klassiker — Real de Catorce (~3.5 h pro Richtung).</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Was ist der nächstgelegene Tagesausflug von der Stadt San Luis Potosí?<span class="text-orange-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Cerro de San Pedro, die halb verlassene Bergbaustadt, die dem Bundesstaat ihren Namen gab — 22 km, etwa 35 Minuten, kostenlos zu besichtigen und sogar mit dem Stadtbus der Ruta 39 erreichbar. Fahren Sie am Wochenende hin, wenn die Restaurants und der Kunsthandwerksladen geöffnet sind.</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Kann man die Huasteca Potosina als Tagesausflug von der Stadt SLP aus besuchen?<span class="text-orange-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Ehrlich gesagt nein. Tamasopo — die nächstgelegene Wasserfallzone der Huasteca — liegt 2.5–3 Stunden pro Richtung auf einer kurvigen Bergstraße, und Xilitla oder Tamul sind 4+ Stunden pro Richtung entfernt. Sie würden 6 Stunden fahren für 3 Stunden Baden. Behandeln Sie die Huasteca als (mindestens) Übernachtung mit Ciudad Valles als Ausgangspunkt.</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Braucht man ein Auto für Tagesausflüge von San Luis Potosí aus?<span class="text-orange-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Bei den meisten ja — Sierra de Álvarez, Guadalcázar und die Gogorrón-Becken sind in der Praxis nur mit dem Auto erreichbar. Die Ausnahmen: Cerro de San Pedro (Stadtbus Ruta 39), Santa María del Río (ständige Busverbindungen, ~MX$40–70) und Media Luna (Bus bis Rioverde + Taxi). Real de Catorce klappt per Bus bis Matehuala + Combi, aber ein Auto macht den Tag realistisch.</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Gibt es Thermalquellen in der Nähe von San Luis Potosí?<span class="text-orange-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Drei innerhalb von ~einer Stunde: das neu eröffnete Balneario Gogorrón (fünf Thermalbecken mit ~42°C, MX$100–120), die Becken von Ojo Caliente bei Santa María del Río (MX$140 Erwachsene) und die historischen Quellen des Balneario de Lourdes. Für Thermalwasser, in dem man schnorcheln kann, liegt Media Luna bei Rioverde (27–30°C das ganze Jahr über) zwei Stunden entfernt.</p></details>
</div>
</section>

<section id="sources" class="mb-8 scroll-mt-8">
<div class="not-prose mb-4">
  <h2 class="text-2xl font-bold text-gray-900 mb-3">Quellen</h2>
</div>
<p class="text-sm text-gray-600 leading-relaxed">Verifiziert im Juli 2026: Turismo SLP und SIC Cultura (Santa María del Río, taller 1953, Pueblo Mágico Dez. 2020), El Universal SLP (Ojo Caliente, Gogorrón-Preise Aug. 2024, Media-Luna-Preise Mai 2025, Gruta de las Candelas, Fahrzeiten in der Huasteca), CONANP (Schutzgebiete Sierra de Álvarez und PN El Potosí), staatliche und kommunale Bekanntmachungen (Gogorrón-Neueröffnung 2023, Ruta de las Haciendas), El Rutero/Moovit (Ruta 39), realdecatorce.info (Route über Matehuala), Wikipedia/IMDb (Mask of Zorro in der Hacienda Gogorrón). Die Preise sind die zuletzt veröffentlichten Angaben mit ihrem jeweiligen Datum — vor Ort bestätigen; ländliche Gebühren ändern sich ohne Vorankündigung.</p>
</section>

<div class="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-8 text-center">
  <p class="text-white text-lg font-bold mb-2">Lieber ein Wochenende statt eines Tages?</p>
  <p class="text-orange-100 text-sm mb-4">Werfen Sie einen Blick in unseren <a href="/weekend-getaways" class="underline font-semibold text-white">Leitfaden für Wochenendausflüge</a> — oder erhalten Sie die wöchentliche Agenda kostenlos.</p>
  <a href="/subscribe" class="inline-block bg-white text-orange-600 font-bold px-6 py-3 rounded-full hover:bg-orange-50 transition-colors">San Luis Way Weekly abonnieren</a>
</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Was sind die besten Tagesausflüge von San Luis Potosí aus?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Die sieben, die wirklich als Tagesausflüge funktionieren: Cerro de San Pedro (verlassene Bergbaustadt, 35 min), Santa María del Río (Rebozo-Pueblo-Mágico, 40 min), die Thermalbecken des Balneario Gogorrón + die Hacienda aus The Mask of Zorro (~1 h), Wandern in der Sierra de Álvarez (~1 h), Guadalcázar und die Candelas-Höhle (~1.5 h), die Kristallquelle Media Luna (~2 h) und — der lange Klassiker — Real de Catorce (~3.5 h pro Richtung)."
      }
    },
    {
      "@type": "Question",
      "name": "Was ist der nächstgelegene Tagesausflug von der Stadt San Luis Potosí?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cerro de San Pedro, die halb verlassene Bergbaustadt, die dem Bundesstaat ihren Namen gab — 22 km, etwa 35 Minuten, kostenlos zu besichtigen und sogar mit dem Stadtbus der Ruta 39 erreichbar. Fahren Sie am Wochenende hin, wenn die Restaurants und der Kunsthandwerksladen geöffnet sind."
      }
    },
    {
      "@type": "Question",
      "name": "Kann man die Huasteca Potosina als Tagesausflug von der Stadt SLP aus besuchen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ehrlich gesagt nein. Tamasopo — die nächstgelegene Wasserfallzone der Huasteca — liegt 2.5–3 Stunden pro Richtung auf einer kurvigen Bergstraße, und Xilitla oder Tamul sind 4+ Stunden pro Richtung entfernt. Sie würden 6 Stunden fahren für 3 Stunden Baden. Behandeln Sie die Huasteca als (mindestens) Übernachtung mit Ciudad Valles als Ausgangspunkt."
      }
    },
    {
      "@type": "Question",
      "name": "Braucht man ein Auto für Tagesausflüge von San Luis Potosí aus?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bei den meisten ja — Sierra de Álvarez, Guadalcázar und die Gogorrón-Becken sind in der Praxis nur mit dem Auto erreichbar. Die Ausnahmen: Cerro de San Pedro (Stadtbus Ruta 39), Santa María del Río (ständige Busverbindungen, ~MX$40–70) und Media Luna (Bus bis Rioverde + Taxi). Real de Catorce klappt per Bus bis Matehuala + Combi, aber ein Auto macht den Tag realistisch."
      }
    },
    {
      "@type": "Question",
      "name": "Gibt es Thermalquellen in der Nähe von San Luis Potosí?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Drei innerhalb von ~einer Stunde: das neu eröffnete Balneario Gogorrón (fünf Thermalbecken mit ~42°C, MX$100–120), die Becken von Ojo Caliente bei Santa María del Río (MX$140 Erwachsene) und die historischen Quellen des Balneario de Lourdes. Für Thermalwasser, in dem man schnorcheln kann, liegt Media Luna bei Rioverde (27–30°C das ganze Jahr über) zwei Stunden entfernt."
      }
    }
  ]
}
</script>

</div>`;

const CONTENT_JA = `<div class="max-w-none">

<p class="text-xl leading-relaxed text-gray-800 mb-8 font-medium">
  <strong>San Luis Potosí 市は、まったく異なる三つの世界が交わる場所に位置しています</strong> — 高原砂漠のゴーストタウン、温泉地帯、そして松林のシエラ — そして本当に素晴らしい7つの小旅行が、たった1日に収まります。検証済みの距離、料金、そして率直な評価（有名な旅先のうち、どれが日帰りには向かないかも含めて）をお届けします。
</p>

<div class="speakable bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-200 rounded-2xl p-6 md:p-8 mb-10">
  <p class="text-base md:text-lg text-gray-800 leading-relaxed">
    <strong>7つを距離順に:</strong> Cerro de San Pedro（35 min）、Santa María del Río（40 min）、Balneario Gogorrón + ハシエンダ（1 h）、Sierra de Álvarez（1 h）、Guadalcázar（1.5 h）、Media Luna（2 h）、Real de Catorce（3.5 h）。Huasteca はあえてこのリストに<em>入れていません</em> — 一泊する価値があるからです。
  </p>
</div>

<div class="space-y-6 mb-12">

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <div class="flex items-center justify-between flex-wrap gap-2 mb-2">
      <h3 class="font-bold text-xl text-gray-900"><span class="text-orange-500 mr-2">1.</span>Cerro de San Pedro</h3>
      <span class="text-xs font-semibold bg-orange-100 text-orange-800 rounded-full px-3 py-1">最も近い</span>
    </div>
    <p class="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">22 km · ~35 min · 無料</p>
    <p class="text-sm text-gray-700 leading-relaxed">州全体にその名を与えた、廃鉱の町。玄関先から35分です。石畳の路地、屋根のない石造りの家々、二つの植民地時代の教会（鉱夫の守護聖人 San Nicolás Tolentino と、17世紀の San Pedro Apóstol）、歩いて入れる鉱山トンネル、そして広場の gorditas。町が活気づくのは週末で、そのとき工芸品店と数軒のレストランが開きます。市バスでも行けます（Alameda から Ruta 39）。ほろ苦い背景もあります。近代的な露天掘りが、名前の由来となった丘そのものを削り取り、やがて操業を終えました。生き残った村が、いまの見どころです。</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <div class="flex items-center justify-between flex-wrap gap-2 mb-2">
      <h3 class="font-bold text-xl text-gray-900"><span class="text-orange-500 mr-2">2.</span>Santa María del Río</h3>
      <span class="text-xs font-semibold bg-orange-100 text-orange-800 rounded-full px-3 py-1">文化</span>
    </div>
    <p class="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">48 km · ~40 min · 無料</p>
    <p class="text-sm text-gray-700 leading-relaxed">「rebozo（レボソ）発祥の地」— 2020年に Pueblo Mágico に認定された町で、絹のショールは今も ikat 染めされ、腰機で織られています。この伝統は Taller Escuela de Rebocería（1953年設立）や、見学できる家族経営の工房に受け継がれています。Palacio Municipal 周辺の織り手から直接購入し、queso de tuna や asado de boda を味わってみてください。8月上旬に訪れれば、Feria del Rebozo が町を包みます。近くの Ojo Caliente の温泉プール（大人 MX$140、火〜日）や、歴史ある Balneario de Lourdes の泉と組み合わせるのもおすすめです。バスは頻繁に運行しています（~MX$40–70）。</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <div class="flex items-center justify-between flex-wrap gap-2 mb-2">
      <h3 class="font-bold text-xl text-gray-900"><span class="text-orange-500 mr-2">3.</span>Balneario Gogorrón + ハシエンダ</h3>
      <span class="text-xs font-semibold bg-orange-100 text-orange-800 rounded-full px-3 py-1">ファミリー</span>
    </div>
    <p class="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">61 km · ~1 h · MX$100–120</p>
    <p class="text-sm text-gray-700 leading-relaxed">約42°Cの温泉水が5つのプール、スライダー、ピクニック用の芝生、ローマ風呂を満たします — 典型的なポトシのファミリー向けプランで、長年の放置を経て2023年に州によって再生・再開されました（毎日 ~9–5 営業、最新の公表料金は MX$100–120、444 812 1550 でご確認ください）。10分ほど離れた Ex-Hacienda San Pedro de Gogorrón（1592年）は自由に散策でき、無料です — 実は知らずに目にしているかもしれません。The Mask of Zorro がここで撮影されました。車での訪問がおすすめです。</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <div class="flex items-center justify-between flex-wrap gap-2 mb-2">
      <h3 class="font-bold text-xl text-gray-900"><span class="text-orange-500 mr-2">4.</span>Sierra de Álvarez</h3>
      <span class="text-xs font-semibold bg-orange-100 text-orange-800 rounded-full px-3 py-1">ハイキング</span>
    </div>
    <p class="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">~50 km · ~1 h · 正式な料金なし</p>
    <p class="text-sm text-gray-700 leading-relaxed">国道70号沿い、街の東にそびえる松と樫の壁です。Las Rusias、El Milagro、San Francisco には全レベル向けのトレイルがあり、マウンテンバイク、そして — 技術を要する洞窟探検家には — 678 m の Resumidero del Borbollón を含む100以上の陥没穴があります。正式な入口はなく（ejido 運営の場所では少額の駐車料金がかかることがあります）、地元の業者がガイド付きハイキングを催行しています。車のみ。注意：これとは別の Parque Nacional El Potosí（キャンプ、展望台）は、Rioverde 方面にあるさらに遠い別のエリアです（~2 h）。</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <div class="flex items-center justify-between flex-wrap gap-2 mb-2">
      <h3 class="font-bold text-xl text-gray-900"><span class="text-orange-500 mr-2">5.</span>Guadalcázar と Gruta de las Candelas</h3>
      <span class="text-xs font-semibold bg-orange-100 text-orange-800 rounded-full px-3 py-1">アドベンチャー</span>
    </div>
    <p class="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">~90 km · ~1.5 h · 少額の現地料金</p>
    <p class="text-sm text-gray-700 leading-relaxed">高原砂漠にある古い鉱山町で（志は高いものの Pueblo Mágico ではありません）、州で最もアクセスしやすい観光洞窟の一つを秘めています。Las Candelas は町から5 km、鍾乳石と石筍があり、ピクニック用の広場と入口でのキャンプが可能です（最後の区間は未舗装路。奥の洞室には地元ガイドが賢明です）。Guadalcázar は記録に残るスポーツクライミングの目的地でもあります。車のみ。</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <div class="flex items-center justify-between flex-wrap gap-2 mb-2">
      <h3 class="font-bold text-xl text-gray-900"><span class="text-orange-500 mr-2">6.</span>Media Luna (Rioverde)</h3>
      <span class="text-xs font-semibold bg-orange-100 text-orange-800 rounded-full px-3 py-1">水浴び</span>
    </div>
    <p class="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">~130 km · ~2 h · MX$100</p>
    <p class="text-sm text-gray-700 leading-relaxed">三日月形の泉で、信じられないほど澄んだ温泉水をたたえています（年間を通じて27–30°C、視界は最大30 m）。底には化石化した木々があり、水路の間には PADI のダイビングスクールもあります。泳ぎ、シュノーケリング（~MX$200 レンタル）、キャンプ（MX$150/テント）が楽しめます。入場料は2025年半ば時点で大人 MX$100 — 現地では150への値上げの話も出ているので、487 101 5874 でご確認ください。営業時間 8–5、アルコール禁止、ペット禁止。Rioverde までバス + タクシーでも行けますが、車の方が楽です。</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <div class="flex items-center justify-between flex-wrap gap-2 mb-2">
      <h3 class="font-bold text-xl text-gray-900"><span class="text-orange-500 mr-2">7.</span>Real de Catorce</h3>
      <span class="text-xs font-semibold bg-orange-100 text-orange-800 rounded-full px-3 py-1">定番</span>
    </div>
    <p class="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">223 km · ~3.5 h · トンネル通行料</p>
    <p class="text-sm text-gray-700 leading-relaxed">本命です — 標高 2,730 m にある銀の産地のゴーストタウンで、2.3 km の鉱山トンネルを抜けて入ります。日帰りでは長いながらも定番のコースです。7時に出発し、Matehuala の先で石畳を登り、willys に乗るかゴーストタウンを歩き、Mesón de la Abundancia で昼食をとり、暗くなる前に戻ります（シエラは決して夜に運転しないでください）。正直なところ一泊した方が良く — 完全ガイドですべてを網羅しています。</p>
  </div>
</div>

<div class="bg-red-50 border-2 border-red-200 rounded-2xl p-6 md:p-8 mb-12">
  <h2 class="text-2xl font-bold text-red-900 mb-3">正直な「日帰りではない」ボックス</h2>
  <p class="text-gray-800 leading-relaxed mb-3"><strong>Huasteca Potosina：</strong> Tamasopo は曲がりくねった山道で片道2.5–3 h、Tamul と Aquismón は4+、Xilitla は4.5。「日帰り」は、3時間の滝のために6時間以上の運転を意味します。そのかわり、きちんと行きましょう。私たちの<a href='/blog/huasteca-potosina-itinerary-2026' class='text-red-800 underline font-semibold'>3/5/7日間の Huasteca 行程</a>と<a href='/blog/xilitla-las-pozas-guide-2026' class='text-red-800 underline font-semibold'>Xilitla 徹底ガイド</a>は、Ciudad Valles を拠点とする宿泊向けに作られています。</p>
  <p class="text-gray-800 leading-relaxed"><strong>Real de Catorce</strong> は長い定番としてリストに入りますが、こちらも一泊した方が良いです。<a href='/blog/real-de-catorce-guide-2026' class='text-red-800 underline font-semibold'>完全ガイド</a>には ~MX$950 からのホテルが載っています。</p>
</div>

<section id="faq" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-orange-500 pb-3 inline-block">FAQ</h2>
</div>
<div class="space-y-4">
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">San Luis Potosíからのおすすめの日帰り旅行は？<span class="text-orange-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">本当に日帰りとして成り立つ7つ：Cerro de San Pedro（廃鉱の町、35 min）、Santa María del Río（rebozo の Pueblo Mágico、40 min）、Balneario Gogorrón の温泉プール + The Mask of Zorro のハシエンダ（~1 h）、Sierra de Álvarez でのハイキング（~1 h）、Guadalcázar と Candelas 洞窟（~1.5 h）、Media Luna のクリスタルの泉（~2 h）、そして — 長い定番の — Real de Catorce（片道 ~3.5 h）です。</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">San Luis Potosí 市から最も近い日帰り旅行は？<span class="text-orange-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Cerro de San Pedro、州にその名を与えた半ば放棄された鉱山町です — 22 km、約35分、見学は無料で、Ruta 39 の市バスでも行けます。レストランと工芸品店が開く週末に訪れましょう。</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Huasteca Potosina は SLP 市から日帰りで訪れられますか？<span class="text-orange-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">正直なところ、無理です。Tamasopo — Huasteca で最も近い滝のエリア — は曲がりくねった山岳道路で片道2.5–3時間、Xilitla や Tamul は片道4時間以上かかります。6時間運転して3時間泳ぐことになります。Huasteca は Ciudad Valles を拠点に、（最低でも）一泊として計画してください。</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">San Luis Potosíからの日帰り旅行に車は必要ですか？<span class="text-orange-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">ほとんどの場合、必要です — Sierra de Álvarez、Guadalcázar、Gogorrón のプールは実質的に車でしか行けません。例外は：Cerro de San Pedro（Ruta 39 の市バス）、Santa María del Río（頻繁なバス、~MX$40–70）、Media Luna（Rioverde までバス + タクシー）です。Real de Catorce は Matehuala までバス + combi で行けますが、車があれば日帰りが現実的になります。</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">San Luis Potosíの近くに温泉はありますか？<span class="text-orange-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">約1時間以内に三つあります：新たに再開した Balneario Gogorrón（約42°Cの温泉プール5つ、MX$100–120）、Santa María del Río 近くの Ojo Caliente のプール（大人 MX$140）、そして歴史ある Balneario de Lourdes の泉です。シュノーケリングできる温泉水なら、Rioverde 近くの Media Luna（年間を通じて27–30°C）が2時間先にあります。</p></details>
</div>
</section>

<section id="sources" class="mb-8 scroll-mt-8">
<div class="not-prose mb-4">
  <h2 class="text-2xl font-bold text-gray-900 mb-3">出典</h2>
</div>
<p class="text-sm text-gray-600 leading-relaxed">2026年7月に検証：Turismo SLP および SIC Cultura（Santa María del Río、taller 1953、Pueblo Mágico 2020年12月）、El Universal SLP（Ojo Caliente、Gogorrón 料金 2024年8月、Media Luna 料金 2025年5月、Gruta de las Candelas、Huasteca の所要時間）、CONANP（Sierra de Álvarez および PN El Potosí の保護区）、州および市の発表（Gogorrón 2023年再開、Ruta de las Haciendas）、El Rutero/Moovit（Ruta 39）、realdecatorce.info（Matehuala 経由のルート）、Wikipedia/IMDb（Hacienda Gogorrón での Mask of Zorro）。料金は、日付付きで最後に公表された数値です — 現地でご確認ください。地方の料金は予告なく変わります。</p>
</section>

<div class="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-8 text-center">
  <p class="text-white text-lg font-bold mb-2">1日ではなく週末をお探しですか？</p>
  <p class="text-orange-100 text-sm mb-4">私たちの<a href="/weekend-getaways" class="underline font-semibold text-white">週末の小旅行ガイド</a>をご覧ください — または毎週のアジェンダを無料で受け取りましょう。</p>
  <a href="/subscribe" class="inline-block bg-white text-orange-600 font-bold px-6 py-3 rounded-full hover:bg-orange-50 transition-colors">San Luis Way Weekly を購読する</a>
</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "San Luis Potosíからのおすすめの日帰り旅行は？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "本当に日帰りとして成り立つ7つ：Cerro de San Pedro（廃鉱の町、35 min）、Santa María del Río（rebozo の Pueblo Mágico、40 min）、Balneario Gogorrón の温泉プール + The Mask of Zorro のハシエンダ（~1 h）、Sierra de Álvarez でのハイキング（~1 h）、Guadalcázar と Candelas 洞窟（~1.5 h）、Media Luna のクリスタルの泉（~2 h）、そして — 長い定番の — Real de Catorce（片道 ~3.5 h）です。"
      }
    },
    {
      "@type": "Question",
      "name": "San Luis Potosí 市から最も近い日帰り旅行は？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cerro de San Pedro、州にその名を与えた半ば放棄された鉱山町です — 22 km、約35分、見学は無料で、Ruta 39 の市バスでも行けます。レストランと工芸品店が開く週末に訪れましょう。"
      }
    },
    {
      "@type": "Question",
      "name": "Huasteca Potosina は SLP 市から日帰りで訪れられますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "正直なところ、無理です。Tamasopo — Huasteca で最も近い滝のエリア — は曲がりくねった山岳道路で片道2.5–3時間、Xilitla や Tamul は片道4時間以上かかります。6時間運転して3時間泳ぐことになります。Huasteca は Ciudad Valles を拠点に、（最低でも）一泊として計画してください。"
      }
    },
    {
      "@type": "Question",
      "name": "San Luis Potosíからの日帰り旅行に車は必要ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ほとんどの場合、必要です — Sierra de Álvarez、Guadalcázar、Gogorrón のプールは実質的に車でしか行けません。例外は：Cerro de San Pedro（Ruta 39 の市バス）、Santa María del Río（頻繁なバス、~MX$40–70）、Media Luna（Rioverde までバス + タクシー）です。Real de Catorce は Matehuala までバス + combi で行けますが、車があれば日帰りが現実的になります。"
      }
    },
    {
      "@type": "Question",
      "name": "San Luis Potosíの近くに温泉はありますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "約1時間以内に三つあります：新たに再開した Balneario Gogorrón（約42°Cの温泉プール5つ、MX$100–120）、Santa María del Río 近くの Ojo Caliente のプール（大人 MX$140）、そして歴史ある Balneario de Lourdes の泉です。シュノーケリングできる温泉水なら、Rioverde 近くの Media Luna（年間を通じて27–30°C）が2時間先にあります。"
      }
    }
  ]
}
</script>

</div>`;

function countTags(html) {
  return (html.match(/<[^>]+>/g) || []).length;
}

function extractJsonLd(html) {
  const m = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  return m ? m[1].trim() : null;
}

async function main() {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('id, content, content_de, content_ja')
    .eq('slug', SLUG)
    .single();
  if (error || !data) {
    console.error('FETCH ERROR:', error ? error.message : 'not found');
    process.exit(1);
  }

  const enTags = countTags(data.content || '');
  const deTags = countTags(CONTENT_DE);
  const jaTags = countTags(CONTENT_JA);
  console.log(`Tag counts — EN: ${enTags}, DE: ${deTags}, JA: ${jaTags}`);
  if (deTags !== enTags || jaTags !== enTags) {
    console.error('TAG COUNT MISMATCH — aborting before write.');
    process.exit(1);
  }

  for (const [label, html] of [['DE', CONTENT_DE], ['JA', CONTENT_JA]]) {
    const jsonld = extractJsonLd(html);
    if (!jsonld) {
      console.error(`${label}: no JSON-LD block found — aborting.`);
      process.exit(1);
    }
    JSON.parse(jsonld); // throws if invalid
    console.log(`${label}: JSON-LD parses cleanly.`);
  }

  const { error: upErr } = await supabase
    .from('blog_posts')
    .update({ content_de: CONTENT_DE, content_ja: CONTENT_JA })
    .eq('id', data.id);
  if (upErr) {
    console.error('UPDATE ERROR:', upErr.message);
    process.exit(1);
  }
  console.log('Updated content_de and content_ja.');

  // Verify by re-fetch.
  const { data: check, error: chkErr } = await supabase
    .from('blog_posts')
    .select('content, content_de, content_ja')
    .eq('id', data.id)
    .single();
  if (chkErr) {
    console.error('VERIFY FETCH ERROR:', chkErr.message);
    process.exit(1);
  }

  let ok = true;
  if (check.content_de === check.content) { console.error('VERIFY FAIL: DE equals EN'); ok = false; }
  if (check.content_ja === check.content) { console.error('VERIFY FAIL: JA equals EN'); ok = false; }

  const cEN = countTags(check.content), cDE = countTags(check.content_de), cJA = countTags(check.content_ja);
  console.log(`Re-fetch tag counts — EN: ${cEN}, DE: ${cDE}, JA: ${cJA}`);
  if (cDE !== cEN || cJA !== cEN) { console.error('VERIFY FAIL: tag count mismatch'); ok = false; }

  for (const [label, col] of [['DE', 'content_de'], ['JA', 'content_ja']]) {
    try { JSON.parse(extractJsonLd(check[col])); console.log(`${label}: JSON-LD valid after re-fetch.`); }
    catch (e) { console.error(`${label}: JSON-LD INVALID after re-fetch: ${e.message}`); ok = false; }
  }

  const places = ['Cerro de San Pedro', 'Santa María del Río', 'Media Luna', 'Gogorrón',
    'Real de Catorce', 'Ex-Hacienda San Pedro de Gogorrón', 'Balneario', 'San Luis Potosí', 'Pueblo Mágico'];
  for (const [label, col] of [['DE', 'content_de'], ['JA', 'content_ja']]) {
    const missing = places.filter((p) => !check[col].includes(p));
    console.log(`${label}: place names ${missing.length === 0 ? 'all present' : 'MISSING: ' + missing.join(', ')}`);
    if (missing.length) ok = false;
  }

  console.log(ok ? '\nAll checks passed.' : '\nCompleted with problems — review output.');
  process.exit(ok ? 0 : 1);
}

main();
