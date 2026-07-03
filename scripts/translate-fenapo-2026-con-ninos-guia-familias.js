// Native German + Japanese translations for the FENAPO 2026 family guide.
// Replaces the English-mirror content_de/content_ja with real translations.
// Idempotent: re-running overwrites the two columns with the same HTML.
// Editorial rule: 2026-edition facts only — dates/prices/place names unchanged.
require('dotenv').config({ path: '.env' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const SLUG = 'fenapo-2026-con-ninos-guia-familias';

const CONTENT_DE = `<div class="max-w-none">

<div class="bg-emerald-50 border-l-4 border-emerald-500 rounded-r-xl p-6 mb-10">
  <p class="font-bold text-emerald-900 mb-3">In diesem Ratgeber</p>
  <nav class="grid sm:grid-cols-2 gap-2 text-emerald-800 text-sm">
    <a href="#overview" class="hover:underline">→ Was für Familien 2026 bestätigt ist</a>
    <a href="#rides" class="hover:underline">→ Fahrgeschäfte: 60 Stück, alle kostenlos</a>
    <a href="#animals" class="hover:underline">→ Tierra Ganadera & Tiere</a>
    <a href="#estrellitas" class="hover:underline">→ Estrellitas Potosinas: Kinder auf der Bühne</a>
    <a href="#concerts" class="hover:underline">→ Kostenlose Konzerte für den Besuch mit Kindern</a>
    <a href="#tips" class="hover:underline">→ Praktische Tipps von San Luis Way</a>
    <a href="#costs" class="hover:underline">→ Was eine Familie wirklich ausgibt</a>
    <a href="#pending" class="hover:underline">→ Für 2026 noch nicht angekündigt</a>
    <a href="#faq" class="hover:underline">→ FAQ</a>
    <a href="#sources" class="hover:underline">→ Quellen</a>
  </nav>
  <p class="mt-4 text-sm text-emerald-700 italic">Ausschließlich auf offiziellen Ankündigungen zur Ausgabe 2026 basierend · Zuletzt aktualisiert: 3. Juli 2026</p>
</div>

<p class="text-xl leading-relaxed text-gray-800 mb-8 font-medium">
  <strong>Die FENAPO 2026 (7.–30. August) versteht sich als Familienmesse: freier Eintritt, kostenlose Parkplätze und kostenlose Fahrgeschäfte.</strong> Hier finden Sie alles offiziell Bestätigte, um mit Kindern die Ausgabe 2026 zu besuchen — die 60 kostenlosen Fahrgeschäfte, den Tierbereich mit Tieren, den Kindertalentwettbewerb Estrellitas Potosinas und welche der kostenlosen Konzertabende sich am besten mit Kindern eignen — ohne Füllmaterial aus früheren Jahren.
</p>

<section id="overview" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">Was für Familien 2026 bestätigt ist</h2>
</div>
<div class="speakable bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200 rounded-2xl p-6 md:p-8 mb-6">
  <p class="text-base md:text-lg text-gray-800 leading-relaxed mb-5">
    <strong>Die FENAPO 2026 läuft vom 7. bis 30. August</strong> im Recinto Ferial in San Luis Potosí. Für Familien ist das Wesentliche bereits angekündigt: <strong>Eintritt, Parken, Fahrgeschäfte und die Konzerte im Foro de las Estrellas sind allesamt kostenlos</strong>, laut Landesregierung und Messeleitung.
  </p>
  <ul class="space-y-2">
    <li class="flex items-start gap-2 text-gray-800"><span class="text-emerald-600 mt-1">•</span><span><strong>Termine:</strong> Freitag, 7. August — Sonntag, 30. August 2026 (<a href="/events/fenapo-2026" class="text-emerald-700 underline font-semibold">Veranstaltungsseite</a>)</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-emerald-600 mt-1">•</span><span><strong>Kostenlos:</strong> Eintritt, Parken, 60 Fahrgeschäfte und alle 21 Abende im Foro de las Estrellas</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-emerald-600 mt-1">•</span><span><strong>Ticketpflichtig:</strong> nur der Palenque (eine ticketpflichtige Spätabend-Location — nicht für kleine Kinder gedacht). Details in unserem <a href="/blog/fenapo-2026-boletos-precios-como-llegar" class="text-emerald-700 underline font-semibold">Ratgeber zu Tickets, Preisen & Anfahrt</a></span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-emerald-600 mt-1">•</span><span><strong>Für Kinder:</strong> Fahrgeschäfte, Tierra Ganadera mit Tierausstellungen, der Wettbewerb Estrellitas Potosinas, Kunsthandwerkspavillons und für 2026 angekündigte Gastronomiebereiche</span></li>
  </ul>
</div>
<p class="text-gray-800 leading-relaxed">Laut dem Präsidenten der Messeleitung, Fernando Rojo Ocejo, spart die Gratis-Zugangspolitik einer Familie <strong>über 500 Pesos</strong> gegenüber dem, was Parken, Eintritt und Fahrgeschäfte auf anderen mexikanischen Messen kosten.</p>
</section>

<section id="rides" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">Fahrgeschäfte: 60 Attraktionen, alle kostenlos</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">Das ist die Schlagzeile für alle, die Kinder mitbringen: Im Juni 2026 bestätigte Gouverneur Ricardo Gallardo, dass die Messe von etwa 45 auf <strong>60 Fahrgeschäfte wächst, alle kostenlos</strong> — in seinen Worten: „Es werden 60 Fahrgeschäfte aufgebaut, damit die Schlangen kürzer werden.“</p>
<div class="grid md:grid-cols-3 gap-4 mb-6">
  <div class="bg-white border-2 border-emerald-200 rounded-xl p-5"><p class="text-3xl font-bold text-emerald-700 mb-1">60</p><p class="text-sm text-gray-600">für 2026 angekündigte kostenlose Fahrgeschäfte (15 mehr als bei der vorigen Ausgabe)</p></div>
  <div class="bg-white border-2 border-emerald-200 rounded-xl p-5"><p class="text-3xl font-bold text-emerald-700 mb-1">$0</p><p class="text-sm text-gray-600">Kosten pro Fahrt — keine Tickets oder Wertmarken</p></div>
  <div class="bg-white border-2 border-emerald-200 rounded-xl p-5"><p class="text-3xl font-bold text-emerald-700 mb-1">✓</p><p class="text-sm text-gray-600">angekündigte Sicherheitsmaßnahmen: Schulung der Betreiber, Stichprobenkontrollen und Zuverlässigkeitsprüfungen des Personals</p></div>
</div>
<p class="text-gray-800 leading-relaxed">Eine Aufschlüsselung, welche Attraktionen Kinder-, Familien- oder Nervenkitzel-Fahrgeschäfte sind, wurde nicht veröffentlicht; wir aktualisieren diesen Ratgeber, sobald der offizielle Fahrgeschäfte-Plan 2026 vorliegt.</p>
</section>

<section id="animals" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-amber-500 pb-3 inline-block">Tierra Ganadera & Tiere: Was SEDARH bestätigt hat</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">Die FENAPO ist eine <em>nationale</em> Messe mit landwirtschaftlichen Wurzeln, und für 2026 hat das Landwirtschaftsministerium des Bundesstaates (SEDARH) bestätigt, dass der traditionelle Bereich <strong>Tierra Ganadera</strong> Teil einer großen Agrar- und Ernährungsmesse wird. Was angekündigt ist und Kinder interessieren dürfte:</p>
<ul class="space-y-3 mb-6">
  <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">🐄</span><span><strong>Ausstellungen von Rinder- und Pferderassen</strong> — die klassische Gelegenheit der Messe, bei der Kinder Nutztiere aus der Nähe sehen.</span></li>
  <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">🚜</span><span><strong>Landmaschinen zur Schau:</strong> Traktoren, Spezial-Arbeitsfahrzeuge und Drohnen — ein Magnet für neugierige Kinder.</span></li>
  <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">🍽️</span><span><strong>Festival del Cabrito</strong> im selben Bereich für die kulinarische Seite des Besuchs.</span></li>
</ul>
<div class="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-5 mb-4">
  <p class="text-sm text-gray-800 leading-relaxed"><strong>Hinweis:</strong> Das detaillierte Kinderprogramm 2026 für diesen Bereich (Workshops, Streichelzoo-Aktivitäten) <strong>wurde nicht angekündigt</strong>. Prüfen Sie vor Ihrem Besuch die offiziellen Kanäle von FENAPO und SEDARH; wir aktualisieren diesen Abschnitt, sobald offizielle Informationen veröffentlicht werden.</p>
</div>
</section>

<section id="estrellitas" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">Estrellitas Potosinas: Ihre Kinder können auf die Bühne</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">Die FENAPO 2026 bietet nicht nur Shows <em>für</em> Kinder — sie bietet eine Bühne <em>von</em> Kindern. Im Mai 2026 eröffnete die Messeleitung die Ausschreibung <strong>„Estrellitas Potosinas“</strong>, einen Talentwettbewerb für Kinder und Jugendliche innerhalb der Messe.</p>
<div class="bg-white border-2 border-emerald-200 rounded-2xl p-6 mb-4">
  <ul class="space-y-2">
    <li class="flex items-start gap-2 text-gray-800"><span class="text-emerald-600 mt-1">•</span><span><strong>Kategorien:</strong> 3–15 und 16–19 Jahre</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-emerald-600 mt-1">•</span><span><strong>Disziplinen:</strong> Singen, Tanzen oder ein Musikinstrument spielen</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-emerald-600 mt-1">•</span><span><strong>Info:</strong> +52 444 129 0999, Durchwahl 510</span></li>
  </ul>
</div>
<p class="text-gray-800 leading-relaxed">Auftrittstermine und die Bühne auf dem Messegelände wurden noch nicht veröffentlicht.</p>
</section>

<section id="concerts" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">Kostenlose Konzerte für den Besuch mit Kindern</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">Alle 21 Abende im Foro de las Estrellas sind kostenlos, nach dem Prinzip „Wer zuerst kommt, mahlt zuerst“. Keiner ist offiziell als Kindershow ausgewiesen, doch nach Einschätzung von San Luis Way eignen sich diese am besten als Familienausflug (das vollständige <a href="/blog/fenapo-2026-artistas-cartel-completo" class="text-emerald-700 underline font-semibold">Programm Abend für Abend finden Sie hier</a>):</p>

<div class="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-8">
  <table class="min-w-full divide-y divide-gray-200">
    <caption class="sr-only">Die familienfreundlichsten kostenlosen Abende im Foro de las Estrellas, FENAPO 2026</caption>
    <thead class="bg-emerald-700">
      <tr>
        <th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Datum</th>
        <th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Künstler</th>
        <th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Warum als Familie hingehen</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-100">
      <tr class="bg-white">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">Freitag, 7. August</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900 whitespace-nowrap">Gloria Trevi</td>
        <td class="px-4 py-3 text-sm text-gray-600">Eröffnungsabend: ein festlicher Auftakt, den die ganze Familie genießen kann.</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">Sonntag, 9. August</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900 whitespace-nowrap">Lila Downs</td>
        <td class="px-4 py-3 text-sm text-gray-600">Mexikanische Folklore an einem Sonntag — einer der ruhigsten und kulturellsten Abende.</td>
      </tr>
      <tr class="bg-white">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">Dienstag, 11. August</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900 whitespace-nowrap">Influencers más grandes de México</td>
        <td class="px-4 py-3 text-sm text-gray-600">Auf ein jüngeres Publikum ausgerichtet; ideal, wenn Ihre Kinder Content-Creator verfolgen.</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">Sonntag, 16. August</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900 whitespace-nowrap">Chihuahua Fest</td>
        <td class="px-4 py-3 text-sm text-gray-600">Ein Sonntagsfest mit dem Flair des Gaststaates.</td>
      </tr>
      <tr class="bg-white">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">Donnerstag, 20. August</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900 whitespace-nowrap">Kenia Os</td>
        <td class="px-4 py-3 text-sm text-gray-600">Ein Liebling von Kindern und Jugendlichen.</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">Sonntag, 23. August</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900 whitespace-nowrap">Los Acosta</td>
        <td class="px-4 py-3 text-sm text-gray-600">Cumbia zum Tanzen mit der Familie, an einem Sonntag.</td>
      </tr>
      <tr class="bg-white">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">Dienstag, 25. August</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900 whitespace-nowrap">Katy Perry</td>
        <td class="px-4 py-3 text-sm text-gray-600">Internationaler Pop für alle Altersgruppen — aber es wird der vollste Abend der Messe: Kommen Sie mit kleinen Kindern viele Stunden früher oder ziehen Sie einen anderen Abend in Betracht.</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">Donnerstag, 27. August</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900 whitespace-nowrap">Potosinazo</td>
        <td class="px-4 py-3 text-sm text-gray-600">Lokale Talente in entspannter Donnerstagsatmosphäre.</td>
      </tr>
      <tr class="bg-white">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">Sonntag, 30. August</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900 whitespace-nowrap">Los Tigres del Norte</td>
        <td class="px-4 py-3 text-sm text-gray-600">Der Abschlussabend: ein generationenübergreifender Abschied.</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="bg-emerald-50 border-l-4 border-emerald-400 rounded-r-xl p-5">
  <p class="text-sm text-gray-800 leading-relaxed"><strong>Unser Rat mit Kindern:</strong> Die absehbar vollen Abende (Katy Perry 25. Aug., Mötley Crüe 8. Aug., Bizarrap 18. Aug.) bedeuten riesige Menschenmengen und stundenlanges Stehen; Sonntage und Wochentagabende sind für Familien meist die bessere Wahl. Der Palenque ist eine ticketpflichtige Spätabend-Location mit Alkoholausschank — bleiben Sie mit Kindern beim Foro und der Fahrgeschäfte-Zone.</p>
</div>
</section>

<section id="tips" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">Praktische Tipps von San Luis Way</h2>
</div>
<p class="text-sm text-gray-500 italic mb-4">Unsere Empfehlungen als lokaler Reiseführer — keine offiziellen Messeregeln.</p>
<div class="grid md:grid-cols-2 gap-4">
  <div class="bg-gray-50 rounded-xl p-5"><h3 class="font-bold text-gray-900 mb-2">🕐 Früh kommen, unter der Woche kommen</h3><p class="text-sm text-gray-700 leading-relaxed">Bei 60 kostenlosen Fahrgeschäften werden die Warteschlangen das bestimmende Thema sein. Unsere lokale Einschätzung: früher Nachmittag und Tage ohne internationalen Headliner sind mit Kindern am ruhigsten.</p></div>
  <div class="bg-gray-50 rounded-xl p-5"><h3 class="font-bold text-gray-900 mb-2">📍 Treffpunkt</h3><p class="text-sm text-gray-700 leading-relaxed">Vereinbaren Sie beim Betreten einen gut sichtbaren Treffpunkt und bringen Sie Kindern bei, sich bei einer Trennung an uniformiertes Sicherheitspersonal zu wenden. Schreiben Sie Ihre Telefonnummer auf ein Armband oder eine Karte in ihrer Tasche.</p></div>
  <div class="bg-gray-50 rounded-xl p-5"><h3 class="font-bold text-gray-900 mb-2">💧 August = Hitze und Regen</h3><p class="text-sm text-gray-700 leading-relaxed">Bringen Sie Wasser, Hüte und Sonnencreme für den Nachmittag mit sowie eine leichte Regenjacke — Abendgewitter im August sind in San Luis Potosí häufig.</p></div>
  <div class="bg-gray-50 rounded-xl p-5"><h3 class="font-bold text-gray-900 mb-2">🎒 Leicht packen</h3><p class="text-sm text-gray-700 leading-relaxed">Prüfen Sie vor dem Besuch die offizielle Liste der erlaubten Gegenstände (die Ausgabe 2026 hat ihre eigene noch nicht veröffentlicht). Ein kleiner Rucksack mit dem Nötigsten beschleunigt die Einlasskontrollen.</p></div>
  <div class="bg-gray-50 rounded-xl p-5"><h3 class="font-bold text-gray-900 mb-2">🚗 Parken ist kostenlos — kommen Sie trotzdem früh</h3><p class="text-sm text-gray-700 leading-relaxed">Das Parken ist 2026 kostenlos; an großen Abenden ist es voll. Öffentliche Verkehrsmittel und Anfahrtsoptionen: <a href="/blog/fenapo-2026-boletos-precios-como-llegar" class="text-emerald-700 underline font-semibold">unser Logistik-Ratgeber</a>.</p></div>
  <div class="bg-gray-50 rounded-xl p-5"><h3 class="font-bold text-gray-900 mb-2">🏨 Anreise von auswärts?</h3><p class="text-sm text-gray-700 leading-relaxed">Der August ist Hochsaison in der Stadt. Kinderfreundliche Viertel und Hotels: <a href="/blog/where-to-stay-san-luis-potosi-2026" class="text-emerald-700 underline font-semibold">wo man in San Luis Potosí übernachtet</a>.</p></div>
</div>
</section>

<section id="costs" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-amber-500 pb-3 inline-block">Was eine Familie wirklich ausgibt</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">Die strukturellen Kosten liegen 2026 bei null: <strong>Eintritt $0, Parken $0, Fahrgeschäfte $0, Foro-Konzerte $0</strong>. Die tatsächlichen Ausgaben einer Familie beschränken sich auf drei Dinge:</p>
<ul class="space-y-3 mb-6">
  <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">1.</span><span><strong>Essen und Snacks:</strong> Die Messe kündigt Gastronomiebereiche und Pavillons mit typischer potosinischer Küche an. Es gibt keine offizielle Preisliste 2026, kalkulieren Sie also wie für jede große mexikanische Messe — hier geht das meiste Geld hin.</span></li>
  <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">2.</span><span><strong>Souvenirs und Kunsthandwerk:</strong> Die für 2026 angekündigten Kunsthandwerkspavillons sind optionale Ausgaben — und ein schönes lehrreiches Andenken.</span></li>
  <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">3.</span><span><strong>Palenque (Nebenprogramm nur für Erwachsene):</strong> der einzige ticketpflichtige Teil. Preise und offizielle Kanäle im <a href="/blog/fenapo-2026-boletos-precios-como-llegar" class="text-emerald-700 underline font-semibold">Ratgeber zu Tickets & Preisen</a>.</span></li>
</ul>
<p class="text-gray-800 leading-relaxed">Kurz gesagt: Ein Messenachmittag mit Kindern kann Sie nur das kosten, was sie zu essen beschließen.</p>
</section>

<section id="pending" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-gray-400 pb-3 inline-block">Für 2026 noch nicht angekündigt</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">Damit Sie nicht mit unbestätigten Erwartungen anreisen: Zum Zeitpunkt der letzten Aktualisierung dieses Ratgebers gibt es zu Folgendem <strong>keine offizielle Ankündigung für 2026</strong>:</p>
<ul class="space-y-2 mb-4">
  <li class="flex items-start gap-2 text-gray-700"><span class="text-gray-400 mt-1">○</span><span>Offizielle Öffnungszeiten für Messegelände, Fahrgeschäfte und Pavillons</span></li>
  <li class="flex items-start gap-2 text-gray-700"><span class="text-gray-400 mt-1">○</span><span>Das detaillierte Kinderprogramm bei Tierra Ganadera (Workshops oder Streichelzoo)</span></li>
  <li class="flex items-start gap-2 text-gray-700"><span class="text-gray-400 mt-1">○</span><span>Der Zonenplan 2026, Servicemodule (Kinderfundstelle, Stillräume) und die Kinderwagen-Regelung</span></li>
  <li class="flex items-start gap-2 text-gray-700"><span class="text-gray-400 mt-1">○</span><span>Termine und Bühne für die Auftritte der Estrellitas Potosinas</span></li>
</ul>
<p class="text-gray-800 leading-relaxed">Prüfen Sie vor Ihrem Besuch die offiziellen Kanäle (fenapo.mx und fenapo.slp.gob.mx). Wir aktualisieren diesen Ratgeber, sobald Ankündigungen eintreffen — und während der Messe finden Sie den Wochenplan in den <a href="/events/this-week" class="text-emerald-700 underline font-semibold">Veranstaltungen dieser Woche</a>.</p>
</section>

<section id="faq" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">FAQ</h2>
</div>
<div class="space-y-4">
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Ist die FENAPO 2026 für Familien kostenlos?<span class="text-emerald-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Ja. Laut Landesregierung und Messeleitung sind Eintritt, Parken, die Fahrgeschäfte und die Konzerte im Foro de las Estrellas bei der FENAPO 2026 allesamt kostenlos. Nur der Palenque erfordert ein Ticket.</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Sind die Fahrgeschäfte bei der FENAPO 2026 kostenlos?<span class="text-emerald-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Ja. Im Juni 2026 kündigte Gouverneur Ricardo Gallardo für die Ausgabe 2026 60 kostenlose Fahrgeschäfte an (15 mehr als bei der vorigen), mit Schulung der Betreiber, Stichprobenkontrollen und Zuverlässigkeitsprüfungen des Personals.</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Gibt es Tiere bei der FENAPO 2026?<span class="text-emerald-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Ja. Das Landwirtschaftsministerium des Bundesstaates (SEDARH) bestätigte, dass die FENAPO 2026 den traditionellen Bereich Tierra Ganadera in eine Agrar- und Ernährungsmesse mit Ausstellungen von Rinder- und Pferderassen, Landmaschinen, Drohnen und dem Festival del Cabrito integriert. Das detaillierte Kinderprogramm für diesen Bereich wurde noch nicht veröffentlicht.</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Welche kostenlosen FENAPO-2026-Konzerte eignen sich am besten mit Kindern?<span class="text-emerald-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Im kostenlosen Foro de las Estrellas sind die familienfreundlichsten Abende Lila Downs (9. Aug.), das Influencer-Event (11. Aug.), Kenia Os (20. Aug.), Los Acosta (23. Aug.), Katy Perry (25. Aug. — rechnen Sie mit Rekordandrang) und Los Tigres del Norte zum Abschluss der Messe (30. Aug.).</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Wie sind die Öffnungszeiten der FENAPO 2026?<span class="text-emerald-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Die offiziellen Zeiten 2026 (Messegelände, Fahrgeschäfte und Pavillons) wurden noch nicht veröffentlicht. Prüfen Sie vor dem Besuch die offiziellen Kanäle der FENAPO; wir aktualisieren diesen Ratgeber, sobald sie angekündigt sind.</p></details>
</div>
</section>

<section id="sources" class="mb-8 scroll-mt-8">
<div class="not-prose mb-4">
  <h2 class="text-2xl font-bold text-gray-900 mb-3">Quellen</h2>
</div>
<p class="text-sm text-gray-600 leading-relaxed">Jede Angabe stammt aus offiziellen Ankündigungen zur Ausgabe 2026: der Landesregierung von San Luis Potosí (slp.gob.mx — freier Eintritt, Parken und Fahrgeschäfte, 12. Januar 2026), den Aussagen von Gouverneur Ricardo Gallardo zu den 60 kostenlosen Fahrgeschäften (Potosinoticias, 6. Juni 2026), SEDARH zur Agrar- und Ernährungsmesse 2026 und zur Tierra Ganadera (Revista Punto de Vista und Plano Informativo, 5. Juni 2026), der Ausschreibung Estrellitas Potosinas der Messeleitung (Plano Informativo, 21. Mai 2026) und Excélsior (27. Mai 2026). Das Programm des Foro de las Estrellas ist in unserem <a href="/blog/fenapo-2026-artistas-cartel-completo" class="text-emerald-700 underline">vollständigen Lineup-Ratgeber</a> verifiziert. Wir aktualisieren diesen Ratgeber, sobald neue offizielle Ankündigungen veröffentlicht werden.</p>
</section>

<div class="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-center mb-6">
  <p class="text-white text-lg font-bold mb-2">Weitere kinderfreundliche Pläne in San Luis Potosí?</p>
  <p class="text-emerald-100 text-sm mb-4">Parks, Museen und Familienaktivitäten das ganze Jahr über — nicht nur im August.</p>
  <a href="/family-friendly-activities" class="inline-block bg-white text-emerald-700 font-bold px-6 py-3 rounded-full hover:bg-emerald-50 transition-colors">Familienaktivitäten in SLP entdecken</a>
</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Ist die FENAPO 2026 für Familien kostenlos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja. Laut Landesregierung und Messeleitung sind Eintritt, Parken, die Fahrgeschäfte und die Konzerte im Foro de las Estrellas bei der FENAPO 2026 allesamt kostenlos. Nur der Palenque erfordert ein Ticket."
      }
    },
    {
      "@type": "Question",
      "name": "Sind die Fahrgeschäfte bei der FENAPO 2026 kostenlos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja. Im Juni 2026 kündigte Gouverneur Ricardo Gallardo für die Ausgabe 2026 60 kostenlose Fahrgeschäfte an (15 mehr als bei der vorigen), mit Schulung der Betreiber, Stichprobenkontrollen und Zuverlässigkeitsprüfungen des Personals."
      }
    },
    {
      "@type": "Question",
      "name": "Gibt es Tiere bei der FENAPO 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja. Das Landwirtschaftsministerium des Bundesstaates (SEDARH) bestätigte, dass die FENAPO 2026 den traditionellen Bereich Tierra Ganadera in eine Agrar- und Ernährungsmesse mit Ausstellungen von Rinder- und Pferderassen, Landmaschinen, Drohnen und dem Festival del Cabrito integriert. Das detaillierte Kinderprogramm für diesen Bereich wurde noch nicht veröffentlicht."
      }
    },
    {
      "@type": "Question",
      "name": "Welche kostenlosen FENAPO-2026-Konzerte eignen sich am besten mit Kindern?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Im kostenlosen Foro de las Estrellas sind die familienfreundlichsten Abende Lila Downs (9. Aug.), das Influencer-Event (11. Aug.), Kenia Os (20. Aug.), Los Acosta (23. Aug.), Katy Perry (25. Aug. — rechnen Sie mit Rekordandrang) und Los Tigres del Norte zum Abschluss der Messe (30. Aug.)."
      }
    },
    {
      "@type": "Question",
      "name": "Wie sind die Öffnungszeiten der FENAPO 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Die offiziellen Zeiten 2026 (Messegelände, Fahrgeschäfte und Pavillons) wurden noch nicht veröffentlicht. Prüfen Sie vor dem Besuch die offiziellen Kanäle der FENAPO; wir aktualisieren diesen Ratgeber, sobald sie angekündigt sind."
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
    <a href="#overview" class="hover:underline">→ 2026年、家族向けに確定していること</a>
    <a href="#rides" class="hover:underline">→ 遊具：60台、すべて無料</a>
    <a href="#animals" class="hover:underline">→ Tierra Ganadera と動物</a>
    <a href="#estrellitas" class="hover:underline">→ Estrellitas Potosinas：子どもがステージへ</a>
    <a href="#concerts" class="hover:underline">→ 子ども連れで楽しめる無料コンサート</a>
    <a href="#tips" class="hover:underline">→ San Luis Way からの実用的なヒント</a>
    <a href="#costs" class="hover:underline">→ 家族が実際に使う費用</a>
    <a href="#pending" class="hover:underline">→ 2026年版でまだ発表されていないこと</a>
    <a href="#faq" class="hover:underline">→ よくある質問</a>
    <a href="#sources" class="hover:underline">→ 出典</a>
  </nav>
  <p class="mt-4 text-sm text-emerald-700 italic">2026年版の公式発表のみに基づく · 最終更新：2026年7月3日</p>
</div>

<p class="text-xl leading-relaxed text-gray-800 mb-8 font-medium">
  <strong>FENAPO 2026（8月7〜30日）は、家族のためのフェアとして打ち出されています。入場無料、駐車無料、遊具も無料です。</strong> ここでは、子ども連れで2026年版を訪れるために公式に確定している情報をすべてまとめます。60台の無料遊具、動物のいる畜産エリア、子ども向けタレントコンテスト Estrellitas Potosinas、そして子ども連れに最適な無料コンサートの夜はどれか——過去の年の水増しは一切なしでお届けします。
</p>

<section id="overview" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">2026年、家族向けに確定していること</h2>
</div>
<div class="speakable bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200 rounded-2xl p-6 md:p-8 mb-6">
  <p class="text-base md:text-lg text-gray-800 leading-relaxed mb-5">
    <strong>FENAPO 2026 は8月7〜30日に開催されます</strong>。会場は San Luis Potosí の Recinto Ferial です。家族にとって重要な点はすでに発表されています。州政府とフェア運営委員会によれば、<strong>入場、駐車、遊具、そして Foro de las Estrellas のコンサートはすべて無料です</strong>。
  </p>
  <ul class="space-y-2">
    <li class="flex items-start gap-2 text-gray-800"><span class="text-emerald-600 mt-1">•</span><span><strong>日程：</strong> 2026年8月7日（金）〜8月30日（日）（<a href="/events/fenapo-2026" class="text-emerald-700 underline font-semibold">イベントページ</a>）</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-emerald-600 mt-1">•</span><span><strong>無料：</strong> 入場、駐車、60台の遊具、そして Foro de las Estrellas の全21夜</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-emerald-600 mt-1">•</span><span><strong>有料：</strong> Palenque のみ（深夜の有料会場で、小さな子ども向けではありません）。詳細は<a href="/blog/fenapo-2026-boletos-precios-como-llegar" class="text-emerald-700 underline font-semibold">チケット・料金・アクセスガイド</a>をご覧ください</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-emerald-600 mt-1">•</span><span><strong>子ども向け：</strong> 遊具、動物展示のある Tierra Ganadera、Estrellitas Potosinas コンテスト、工芸パビリオン、そして2026年版で発表された飲食エリア</span></li>
  </ul>
</div>
<p class="text-gray-800 leading-relaxed">フェア運営委員会会長の Fernando Rojo Ocejo によれば、この無料方針により、他のメキシコのフェアで駐車・入場・遊具にかかる費用と比べて、家族は<strong>500ペソ以上</strong>を節約できます。</p>
</section>

<section id="rides" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">遊具：60のアトラクション、すべて無料</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">子ども連れの方にとってこれが一番の話題です。2026年6月、Ricardo Gallardo 知事は、フェアの遊具が約45台から<strong>60台に増え、すべて無料になる</strong>ことを明らかにしました。知事の言葉を借りれば「行列が短くなるように60台の遊具を設置する」とのことです。</p>
<div class="grid md:grid-cols-3 gap-4 mb-6">
  <div class="bg-white border-2 border-emerald-200 rounded-xl p-5"><p class="text-3xl font-bold text-emerald-700 mb-1">60</p><p class="text-sm text-gray-600">2026年版で発表された無料遊具（前回より15台多い）</p></div>
  <div class="bg-white border-2 border-emerald-200 rounded-xl p-5"><p class="text-3xl font-bold text-emerald-700 mb-1">$0</p><p class="text-sm text-gray-600">1回あたりの費用——チケットもトークンも不要</p></div>
  <div class="bg-white border-2 border-emerald-200 rounded-xl p-5"><p class="text-3xl font-bold text-emerald-700 mb-1">✓</p><p class="text-sm text-gray-600">発表された安全対策：オペレーターの研修、抜き打ち検査、スタッフの身元確認</p></div>
</div>
<p class="text-gray-800 leading-relaxed">どのアトラクションが幼児向け・家族向け・絶叫系かの内訳はまだ公表されていません。2026年版の公式遊具マップが出次第、このガイドを更新します。</p>
</section>

<section id="animals" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-amber-500 pb-3 inline-block">Tierra Ganadera と動物：SEDARH が確定したこと</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">FENAPO は農業に根ざした<em>全国</em>規模のフェアであり、2026年については、州農業省（SEDARH）が、伝統的な<strong>Tierra Ganadera</strong> エリアが大規模な農食品エキスポに加わることを確定しました。子どもが興味を持ちそうな発表内容は次のとおりです。</p>
<ul class="space-y-3 mb-6">
  <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">🐄</span><span><strong>牛や馬の品種展示</strong>——子どもが家畜を間近で見られる、フェア定番の機会です。</span></li>
  <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">🚜</span><span><strong>農業機械の展示：</strong>トラクター、専用作業車、ドローンなど——好奇心旺盛な子どもを惹きつけます。</span></li>
  <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">🍽️</span><span>同じエリアの<strong>Festival del Cabrito</strong> で、食の楽しみも味わえます。</span></li>
</ul>
<div class="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-5 mb-4">
  <p class="text-sm text-gray-800 leading-relaxed"><strong>注意：</strong>このエリアの2026年版の詳しい子ども向けプログラム（ワークショップやふれあい牧場の催し）は<strong>まだ発表されていません</strong>。訪問前に FENAPO と SEDARH の公式チャンネルをご確認ください。公式情報が公表され次第、この項目を更新します。</p>
</div>
</section>

<section id="estrellitas" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">Estrellitas Potosinas：お子さんがステージに立てます</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">FENAPO 2026 には、子ども<em>のための</em>ショーだけでなく、子ども<em>による</em>ステージもあります。2026年5月、フェア運営委員会は、フェア内で開催する子ども・青少年向けタレントコンテスト<strong>「Estrellitas Potosinas」</strong>の募集を開始しました。</p>
<div class="bg-white border-2 border-emerald-200 rounded-2xl p-6 mb-4">
  <ul class="space-y-2">
    <li class="flex items-start gap-2 text-gray-800"><span class="text-emerald-600 mt-1">•</span><span><strong>カテゴリー：</strong> 3〜15歳と16〜19歳</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-emerald-600 mt-1">•</span><span><strong>部門：</strong> 歌、ダンス、または楽器演奏</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-emerald-600 mt-1">•</span><span><strong>問い合わせ：</strong> +52 444 129 0999、内線510</span></li>
  </ul>
</div>
<p class="text-gray-800 leading-relaxed">出演日や会場内のステージについては、まだ公表されていません。</p>
</section>

<section id="concerts" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">子ども連れで楽しめる無料コンサート</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">Foro de las Estrellas の全21夜は無料で、先着順です。どれも公式には子ども向けショーとは銘打たれていませんが、San Luis Way の判断では、次の夜が家族でのお出かけに最も向いています（<a href="/blog/fenapo-2026-artistas-cartel-completo" class="text-emerald-700 underline font-semibold">日付ごとの全ラインナップはこちら</a>）：</p>

<div class="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-8">
  <table class="min-w-full divide-y divide-gray-200">
    <caption class="sr-only">FENAPO 2026、Foro de las Estrellas で最も家族向けの無料の夜</caption>
    <thead class="bg-emerald-700">
      <tr>
        <th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">日付</th>
        <th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">アーティスト</th>
        <th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">家族で行く理由</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-100">
      <tr class="bg-white">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">8月7日（金）</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900 whitespace-nowrap">Gloria Trevi</td>
        <td class="px-4 py-3 text-sm text-gray-600">オープニングの夜：家族みんなで楽しめる、華やかな幕開けです。</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">8月9日（日）</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900 whitespace-nowrap">Lila Downs</td>
        <td class="px-4 py-3 text-sm text-gray-600">日曜のメキシコ民俗音楽——最も落ち着いた、文化的な夜のひとつです。</td>
      </tr>
      <tr class="bg-white">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">8月11日（火）</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900 whitespace-nowrap">Influencers más grandes de México</td>
        <td class="px-4 py-3 text-sm text-gray-600">若い観客向け。お子さんがコンテンツクリエイターをフォローしているなら最適です。</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">8月16日（日）</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900 whitespace-nowrap">Chihuahua Fest</td>
        <td class="px-4 py-3 text-sm text-gray-600">招待州の趣が楽しめる日曜のお祭りです。</td>
      </tr>
      <tr class="bg-white">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">8月20日（木）</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900 whitespace-nowrap">Kenia Os</td>
        <td class="px-4 py-3 text-sm text-gray-600">子どもや10代に人気のアーティストです。</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">8月23日（日）</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900 whitespace-nowrap">Los Acosta</td>
        <td class="px-4 py-3 text-sm text-gray-600">日曜、家族で踊れるクンビアです。</td>
      </tr>
      <tr class="bg-white">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">8月25日（火）</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900 whitespace-nowrap">Katy Perry</td>
        <td class="px-4 py-3 text-sm text-gray-600">全年齢向けの国際的ポップ——ただしフェアで最も混雑する夜になります。小さな子ども連れなら何時間も早めに到着するか、別の夜を検討してください。</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">8月27日（木）</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900 whitespace-nowrap">Potosinazo</td>
        <td class="px-4 py-3 text-sm text-gray-600">木曜のリラックスした雰囲気で楽しむ地元の才能です。</td>
      </tr>
      <tr class="bg-white">
        <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap capitalize">8月30日（日）</td>
        <td class="px-4 py-3 text-sm font-semibold text-gray-900 whitespace-nowrap">Los Tigres del Norte</td>
        <td class="px-4 py-3 text-sm text-gray-600">クロージングの夜：世代を超えた締めくくりです。</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="bg-emerald-50 border-l-4 border-emerald-400 rounded-r-xl p-5">
  <p class="text-sm text-gray-800 leading-relaxed"><strong>子ども連れへのアドバイス：</strong>混雑が予想される夜（Katy Perry 8月25日、Mötley Crüe 8月8日、Bizarrap 8月18日）は大混雑で何時間も立ちっぱなしになります。日曜と平日の夜が、家族には通常より良い選択です。Palenque はアルコールを提供する深夜の有料会場です。子ども連れの場合は Foro と遊具エリアにとどめておきましょう。</p>
</div>
</section>

<section id="tips" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">San Luis Way からの実用的なヒント</h2>
</div>
<p class="text-sm text-gray-500 italic mb-4">地元ガイドとしての推奨であり、フェアの公式ルールではありません。</p>
<div class="grid md:grid-cols-2 gap-4">
  <div class="bg-gray-50 rounded-xl p-5"><h3 class="font-bold text-gray-900 mb-2">🕐 早めに、平日に</h3><p class="text-sm text-gray-700 leading-relaxed">60台の無料遊具があるため、行列が最大の話題になります。地元の見立てでは、午後の早い時間と、国際的なヘッドライナーがいない日が、子ども連れには最も落ち着いています。</p></div>
  <div class="bg-gray-50 rounded-xl p-5"><h3 class="font-bold text-gray-900 mb-2">📍 集合場所</h3><p class="text-sm text-gray-700 leading-relaxed">入場時に目立つ集合場所を決め、はぐれた場合は制服を着た警備スタッフに声をかけるよう子どもに教えておきましょう。お子さんのリストバンドやポケットのカードに電話番号を書いておいてください。</p></div>
  <div class="bg-gray-50 rounded-xl p-5"><h3 class="font-bold text-gray-900 mb-2">💧 8月＝暑さと雨</h3><p class="text-sm text-gray-700 leading-relaxed">午後用に水、帽子、日焼け止めを持参し、さらに軽い雨具も用意しましょう。San Luis Potosí では8月の夕方の雷雨がよくあります。</p></div>
  <div class="bg-gray-50 rounded-xl p-5"><h3 class="font-bold text-gray-900 mb-2">🎒 荷物は軽く</h3><p class="text-sm text-gray-700 leading-relaxed">出かける前に、持ち込み可能な物品の公式リストを確認してください（2026年版はまだ独自のリストを公表していません）。必需品だけを入れた小さなリュックなら、入場時の検査がスムーズになります。</p></div>
  <div class="bg-gray-50 rounded-xl p-5"><h3 class="font-bold text-gray-900 mb-2">🚗 駐車は無料——それでも早めに</h3><p class="text-sm text-gray-700 leading-relaxed">2026年は駐車が無料です。大きな夜には満車になります。公共交通機関やアクセス手段については、<a href="/blog/fenapo-2026-boletos-precios-como-llegar" class="text-emerald-700 underline font-semibold">物流ガイド</a>をご覧ください。</p></div>
  <div class="bg-gray-50 rounded-xl p-5"><h3 class="font-bold text-gray-900 mb-2">🏨 遠方からお越しですか？</h3><p class="text-sm text-gray-700 leading-relaxed">8月は市内のハイシーズンです。子どもに優しいエリアやホテルは、<a href="/blog/where-to-stay-san-luis-potosi-2026" class="text-emerald-700 underline font-semibold">San Luis Potosí の宿泊ガイド</a>をご覧ください。</p></div>
</div>
</section>

<section id="costs" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-amber-500 pb-3 inline-block">家族が実際に使う費用</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">2026年は基本的な費用がゼロです。<strong>入場 $0、駐車 $0、遊具 $0、Foro のコンサート $0</strong>。家族が実際に使うお金は、次の3つに絞られます。</p>
<ul class="space-y-3 mb-6">
  <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">1.</span><span><strong>飲食・軽食：</strong>フェアは、典型的な potosí 料理を提供する飲食エリアやパビリオンを発表しています。2026年版の公式価格表はないため、大きなメキシコのフェアと同様に予算を組んでください——ここに最もお金がかかります。</span></li>
  <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">2.</span><span><strong>おみやげ・工芸品：</strong>2026年版で発表された工芸パビリオンでの買い物は任意です——学びにもなる良いおみやげになります。</span></li>
  <li class="flex items-start gap-2 text-gray-800"><span class="text-amber-600 mt-1">3.</span><span><strong>Palenque（大人限定の別プラン）：</strong>唯一の有料部分です。料金と公式チャンネルは<a href="/blog/fenapo-2026-boletos-precios-como-llegar" class="text-emerald-700 underline font-semibold">チケット・料金ガイド</a>をご覧ください。</span></li>
</ul>
<p class="text-gray-800 leading-relaxed">要するに、子ども連れのフェアの午後は、子どもが食べると決めたものの分だけで済ませることもできます。</p>
</section>

<section id="pending" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-gray-400 pb-3 inline-block">2026年版でまだ発表されていないこと</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">確定していない期待を抱いて来場しないよう、本ガイドの最終更新時点で、次の事項には<strong>2026年版の公式発表がありません</strong>。</p>
<ul class="space-y-2 mb-4">
  <li class="flex items-start gap-2 text-gray-700"><span class="text-gray-400 mt-1">○</span><span>会場、遊具、パビリオンの公式営業時間</span></li>
  <li class="flex items-start gap-2 text-gray-700"><span class="text-gray-400 mt-1">○</span><span>Tierra Ganadera の詳しい子ども向けプログラム（ワークショップやふれあい牧場）</span></li>
  <li class="flex items-start gap-2 text-gray-700"><span class="text-gray-400 mt-1">○</span><span>2026年版のゾーンマップ、サービス設備（迷子対応、授乳室）、ベビーカーの規定</span></li>
  <li class="flex items-start gap-2 text-gray-700"><span class="text-gray-400 mt-1">○</span><span>Estrellitas Potosinas の出演日とステージ</span></li>
</ul>
<p class="text-gray-800 leading-relaxed">訪問前に公式チャンネル（fenapo.mx と fenapo.slp.gob.mx）をご確認ください。発表があり次第このガイドを更新します——また、フェア期間中は各週の予定を<a href="/events/this-week" class="text-emerald-700 underline font-semibold">今週のイベント</a>でお届けします。</p>
</section>

<section id="faq" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">よくある質問</h2>
</div>
<div class="space-y-4">
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">FENAPO 2026 は家族にとって無料ですか？<span class="text-emerald-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">はい。州政府とフェア運営委員会によれば、FENAPO 2026 では入場、駐車、遊具、そして Foro de las Estrellas のコンサートがすべて無料です。有料なのは Palenque のみです。</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">FENAPO 2026 の遊具は無料ですか？<span class="text-emerald-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">はい。2026年6月、Ricardo Gallardo 知事は、2026年版に向けて60台の無料遊具（前回より15台多い）を発表し、オペレーターの研修、抜き打ち検査、スタッフの身元確認を行うとしています。</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">FENAPO 2026 に動物はいますか？<span class="text-emerald-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">はい。州農業省（SEDARH）は、FENAPO 2026 が伝統的な Tierra Ganadera エリアを、牛や馬の品種展示、農業機械、ドローン、Festival del Cabrito を含む農食品エキスポに統合することを確定しました。このエリアの詳しい子ども向けプログラムはまだ公表されていません。</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">FENAPO 2026 の無料コンサートで、子ども連れに最適なのはどれですか？<span class="text-emerald-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">無料の Foro de las Estrellas では、最も家族向けの夜は Lila Downs（8月9日）、インフルエンサーのイベント（8月11日）、Kenia Os（8月20日）、Los Acosta（8月23日）、Katy Perry（8月25日——記録的な混雑が予想されます）、そしてフェアを締めくくる Los Tigres del Norte（8月30日）です。</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">FENAPO 2026 の営業時間は何時ですか？<span class="text-emerald-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">2026年版の公式時間（会場、遊具、パビリオン）はまだ公表されていません。訪問前に FENAPO の公式チャンネルをご確認ください。発表され次第このガイドを更新します。</p></details>
</div>
</section>

<section id="sources" class="mb-8 scroll-mt-8">
<div class="not-prose mb-4">
  <h2 class="text-2xl font-bold text-gray-900 mb-3">出典</h2>
</div>
<p class="text-sm text-gray-600 leading-relaxed">すべての事実は2026年版の公式発表に基づいています：San Luis Potosí 州政府（slp.gob.mx——入場・駐車・遊具の無料化、2026年1月12日）、60台の無料遊具に関する Ricardo Gallardo 知事の発言（Potosinoticias、2026年6月6日）、2026年の農食品エキスポと Tierra Ganadera に関する SEDARH（Revista Punto de Vista および Plano Informativo、2026年6月5日）、フェア運営委員会の Estrellitas Potosinas 募集（Plano Informativo、2026年5月21日）、そして Excélsior（2026年5月27日）。Foro de las Estrellas のラインナップは、当サイトの<a href="/blog/fenapo-2026-artistas-cartel-completo" class="text-emerald-700 underline">完全ラインナップガイド</a>で確認済みです。新たな公式発表が公表され次第、このガイドを更新します。</p>
</section>

<div class="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-center mb-6">
  <p class="text-white text-lg font-bold mb-2">San Luis Potosí でもっと子ども向けのプランを？</p>
  <p class="text-emerald-100 text-sm mb-4">8月だけでなく一年を通じた公園、博物館、家族向けアクティビティ。</p>
  <a href="/family-friendly-activities" class="inline-block bg-white text-emerald-700 font-bold px-6 py-3 rounded-full hover:bg-emerald-50 transition-colors">SLP の家族向けアクティビティを見る</a>
</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "FENAPO 2026 は家族にとって無料ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "はい。州政府とフェア運営委員会によれば、FENAPO 2026 では入場、駐車、遊具、そして Foro de las Estrellas のコンサートがすべて無料です。有料なのは Palenque のみです。"
      }
    },
    {
      "@type": "Question",
      "name": "FENAPO 2026 の遊具は無料ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "はい。2026年6月、Ricardo Gallardo 知事は、2026年版に向けて60台の無料遊具（前回より15台多い）を発表し、オペレーターの研修、抜き打ち検査、スタッフの身元確認を行うとしています。"
      }
    },
    {
      "@type": "Question",
      "name": "FENAPO 2026 に動物はいますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "はい。州農業省（SEDARH）は、FENAPO 2026 が伝統的な Tierra Ganadera エリアを、牛や馬の品種展示、農業機械、ドローン、Festival del Cabrito を含む農食品エキスポに統合することを確定しました。このエリアの詳しい子ども向けプログラムはまだ公表されていません。"
      }
    },
    {
      "@type": "Question",
      "name": "FENAPO 2026 の無料コンサートで、子ども連れに最適なのはどれですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "無料の Foro de las Estrellas では、最も家族向けの夜は Lila Downs（8月9日）、インフルエンサーのイベント（8月11日）、Kenia Os（8月20日）、Los Acosta（8月23日）、Katy Perry（8月25日——記録的な混雑が予想されます）、そしてフェアを締めくくる Los Tigres del Norte（8月30日）です。"
      }
    },
    {
      "@type": "Question",
      "name": "FENAPO 2026 の営業時間は何時ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "2026年版の公式時間（会場、遊具、パビリオン）はまだ公表されていません。訪問前に FENAPO の公式チャンネルをご確認ください。発表され次第このガイドを更新します。"
      }
    }
  ]
}
</script>

</div>`;

async function main() {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('id, content')
    .eq('slug', SLUG)
    .maybeSingle();
  if (error || !data) {
    console.error('FETCH ERROR:', error ? error.message : 'post not found');
    process.exit(1);
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

  // Verify by re-fetching.
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
  const hrefs = (s) => (s.match(/href="[^"]*"/g) || []).sort();
  const enTags = tagCount(check.content);
  const deTags = tagCount(check.content_de);
  const jaTags = tagCount(check.content_ja);
  const enHref = hrefs(check.content);
  const deHref = hrefs(check.content_de);
  const jaHref = hrefs(check.content_ja);

  const ldOf = (s) => {
    const m = s.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
    return m ? m[1] : null;
  };
  let deLdOk = false, jaLdOk = false;
  try { JSON.parse(ldOf(check.content_de)); deLdOk = true; } catch (e) { deLdOk = e.message; }
  try { JSON.parse(ldOf(check.content_ja)); jaLdOk = true; } catch (e) { jaLdOk = e.message; }

  // Leftover-English heuristic: scan visible text nodes for English marker words.
  const stripTags = (s) => s
    .replace(/<script[\s\S]*?<\/script>/g, '')
    .replace(/<[^>]+>/g, ' ');
  const enWords = /\b(entrance|parking|rides|the fair|whole family|opening night|closing|free concerts|opening hours|animals|sources|tickets|prices|Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|August)\b/gi;
  const deLeft = (stripTags(check.content_de).match(enWords) || []);
  const jaLeft = (stripTags(check.content_ja).match(enWords) || []);

  console.log('\n== Verification ==');
  console.log('Tag counts  EN:', enTags, ' DE:', deTags, ' JA:', jaTags,
    ' | DE==EN:', deTags === enTags, ' JA==EN:', jaTags === enTags);
  console.log('hrefs match DE:', JSON.stringify(deHref) === JSON.stringify(enHref),
    ' JA:', JSON.stringify(jaHref) === JSON.stringify(enHref), ' (EN href count:', enHref.length, ')');
  console.log('JSON-LD valid  DE:', deLdOk, ' JA:', jaLdOk);
  console.log('content_de !== content:', check.content_de !== check.content);
  console.log('content_ja !== content:', check.content_ja !== check.content);
  console.log('Leftover EN-marker hits  DE:', deLeft.length ? deLeft : 'none',
    ' JA:', jaLeft.length ? jaLeft : 'none');
}

main();
