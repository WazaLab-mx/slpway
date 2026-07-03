// Native DE + JA translations for blog post
// `semana-santa-san-luis-potosi-2026-guia-completa` (idempotent).
// Replaces content_de / content_ja (which mirror the EN HTML) with real
// translations. Only text nodes are translated; every tag, attribute, class,
// id, href and image src is preserved byte-for-byte. Verifies by re-fetch.
require('dotenv').config({ path: '.env' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const SLUG = 'semana-santa-san-luis-potosi-2026-guia-completa';

const CONTENT_DE = `<div class="prose prose-lg max-w-none">

  <!-- TABLE OF CONTENTS -->
  <div class="bg-yellow-50 p-6 rounded-lg mb-8">
    <h2 class="text-xl font-semibold mb-4">In diesem Guide</h2>
    <ul class="list-disc pl-6">
      <li><a href="#overview" class="text-blue-600 hover:text-blue-800">Überblick: Semana Santa in SLP</a></li>
      <li><a href="#calendar" class="text-blue-600 hover:text-blue-800">Tag-für-Tag-Kalender der Veranstaltungen</a></li>
      <li><a href="#procesion" class="text-blue-600 hover:text-blue-800">Procesión del Silencio</a></li>
      <li><a href="#traditions" class="text-blue-600 hover:text-blue-800">Traditionelle Feierlichkeiten</a></li>
      <li><a href="#family" class="text-blue-600 hover:text-blue-800">Familienfreundliche Aktivitäten</a></li>
      <li><a href="#food" class="text-blue-600 hover:text-blue-800">Traditionelle Semana-Santa-Küche</a></li>
      <li><a href="#practical" class="text-blue-600 hover:text-blue-800">Praktische Informationen für Besucher</a></li>
      <li><a href="#faq" class="text-blue-600 hover:text-blue-800">FAQ</a></li>
    </ul>
  </div>

  <!-- INTRO -->
  <p class="text-lg text-gray-700 mb-8">
    <strong>Die Semana Santa (Karwoche) 2026 in San Luis Potosí ist eine der kulturell reichsten und spektakulärsten Feierlichkeiten in ganz Mexiko.</strong> Vom 27. März bis zum 11. April verwandelt sich die Stadt mit über 100 kulturellen und religiösen Aktivitäten – von der weltberühmten Procesión del Silencio über lebendige Vía-Crucis-Nachstellungen bis hin zu traditionellen Altaraufbauten, Konzerten, Museumsveranstaltungen und gastronomischen Präsentationen. Nach Angaben der Landesregierung wird erwartet, dass die Feierlichkeiten über <strong>1,2 Milliarden MXN</strong> an wirtschaftlicher Aktivität generieren.
  </p>

  <!-- QUICK FACTS BOX -->
  <div class="not-prose my-8 bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl overflow-hidden shadow-lg">
    <div class="bg-amber-600 px-8 py-4">
      <h3 class="text-2xl font-bold text-white">Semana Santa 2026 auf einen Blick</h3>
    </div>
    <div class="p-8">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div><p class="text-3xl font-bold text-amber-700">100+</p><p class="text-sm text-gray-600">Kulturelle Veranstaltungen</p></div>
        <div><p class="text-3xl font-bold text-amber-700">27. März</p><p class="text-sm text-gray-600">bis 11. Apr</p></div>
        <div><p class="text-3xl font-bold text-amber-700">$1.2B</p><p class="text-sm text-gray-600">MXN wirtschaftlicher Effekt</p></div>
        <div><p class="text-3xl font-bold text-amber-700">150K+</p><p class="text-sm text-gray-600">Erwartete Besucher</p></div>
      </div>
    </div>
  </div>

  <!-- OVERVIEW -->
  <section id="overview" class="mb-12">
    <h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-amber-200 pb-2">Überblick: Warum SLP für die Semana Santa?</h2>

    <p class="text-gray-700 mb-4">San Luis Potosí zählt seit Jahrzehnten zu den wichtigsten Semana-Santa-Reisezielen Mexikos. Das tief verwurzelte koloniale katholische Erbe der Stadt, ihre beeindruckende Barockarchitektur und die leidenschaftlichen lokalen Traditionen schaffen ein Erlebnis, das im Großteil des Landes seinesgleichen sucht.</p>

    <p class="text-gray-700 mb-4">Die Feierlichkeiten wurden am 27. März offiziell mit der Einweihung des <strong>Altar de la Virgen de los Dolores</strong> im Palacio de Gobierno eröffnet. Diese religiöse Volkstradition, die im 16. Jahrhundert von spanischen Kolonisatoren eingeführt und bis zum 19. Jahrhundert tief in San Luis Potosí verwurzelt war, zeichnet sich durch symbolische Verzierungen aus – darunter Kerzen, Glaskugeln, goldene Orangen und gekeimte Samen, die den Glauben und die Erneuerung des Lebens darstellen.</p>

    <p class="text-gray-700 mb-4">Die Aktivitäten erstrecken sich über Plätze, Kirchen, Museen und Kulturzentren in der ganzen Stadt und im gesamten Bundesstaat und werden von der <strong>Secretaría de Cultura de San Luis Potosí (SECULT)</strong> organisiert.</p>
  </section>

  <!-- CALENDAR -->
  <section id="calendar" class="mb-12">
    <h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-amber-200 pb-2">Tag-für-Tag-Kalender der wichtigsten Veranstaltungen</h2>

    <div class="space-y-4">
      <div class="bg-white border-2 border-gray-200 rounded-xl p-5 hover:border-amber-300 transition-colors">
        <div class="flex items-start gap-4">
          <div class="flex-shrink-0 w-20 text-center bg-amber-100 rounded-lg p-2">
            <p class="text-xs text-amber-600 uppercase">Mär</p>
            <p class="text-2xl font-bold text-amber-800">27</p>
          </div>
          <div>
            <h4 class="font-bold text-gray-900">Einweihung des Altar de Dolores</h4>
            <p class="text-sm text-gray-600">Palacio de Gobierno — Traditioneller Altaraufbau, der den Beginn der Semana-Santa-Feierlichkeiten markiert</p>
          </div>
        </div>
      </div>

      <div class="bg-white border-2 border-gray-200 rounded-xl p-5 hover:border-amber-300 transition-colors">
        <div class="flex items-start gap-4">
          <div class="flex-shrink-0 w-20 text-center bg-amber-100 rounded-lg p-2">
            <p class="text-xs text-amber-600 uppercase">28. Mär</p>
            <p class="text-lg font-bold text-amber-800">– 4. Apr</p>
          </div>
          <div>
            <h4 class="font-bold text-gray-900">Festival San Luis en Primavera</h4>
            <p class="text-sm text-gray-600">Stadtweit — 110+ Veranstaltungen, 800+ Künstler, 14 Spielstätten. Konzerte, Theater, Tanz. Eintritt frei.</p>
          </div>
        </div>
      </div>

      <div class="bg-white border-2 border-gray-200 rounded-xl p-5 hover:border-amber-300 transition-colors">
        <div class="flex items-start gap-4">
          <div class="flex-shrink-0 w-20 text-center bg-amber-100 rounded-lg p-2">
            <p class="text-xs text-amber-600 uppercase">30. Mär</p>
            <p class="text-lg font-bold text-amber-800">– 4. Apr</p>
          </div>
          <div>
            <h4 class="font-bold text-gray-900">Copa Potosí 2026</h4>
            <p class="text-sm text-gray-600">Mehrere Spielstätten — Amateur-Fußballturnier. 1.400+ Spieler, internationale Teams. Eintritt frei. <a href="/events" class="text-blue-600 underline">Alle Details →</a></p>
          </div>
        </div>
      </div>

      <div class="bg-white border-2 border-gray-200 rounded-xl p-5 hover:border-amber-300 transition-colors">
        <div class="flex items-start gap-4">
          <div class="flex-shrink-0 w-20 text-center bg-amber-100 rounded-lg p-2">
            <p class="text-xs text-amber-600 uppercase">Apr</p>
            <p class="text-2xl font-bold text-amber-800">2</p>
          </div>
          <div>
            <h4 class="font-bold text-gray-900">Procesión de los Cristos</h4>
            <p class="text-sm text-gray-600">Villa de Pozos — Feierliche Prozession, bei der religiöse Bildnisse durch die Straßen getragen werden</p>
          </div>
        </div>
      </div>

      <div class="bg-gradient-to-r from-purple-50 to-indigo-50 border-2 border-purple-300 rounded-xl p-5 shadow-md">
        <div class="flex items-start gap-4">
          <div class="flex-shrink-0 w-20 text-center bg-purple-200 rounded-lg p-2">
            <p class="text-xs text-purple-600 uppercase">Apr</p>
            <p class="text-2xl font-bold text-purple-800">3</p>
          </div>
          <div>
            <h4 class="font-bold text-purple-900 text-lg">Procesión del Silencio ★</h4>
            <p class="text-sm text-purple-700">Templo del Carmen, 20:00 Uhr — Das Hauptereignis. 73. Ausgabe, 4.000+ Teilnehmer, 32 cofradías. <a href="/blog/procesion-del-silencio-2026-san-luis-potosi" class="text-purple-600 underline font-semibold">Vollständiger Guide →</a></p>
          </div>
        </div>
      </div>

      <div class="bg-white border-2 border-gray-200 rounded-xl p-5 hover:border-amber-300 transition-colors">
        <div class="flex items-start gap-4">
          <div class="flex-shrink-0 w-20 text-center bg-amber-100 rounded-lg p-2">
            <p class="text-xs text-amber-600 uppercase">Apr</p>
            <p class="text-2xl font-bold text-amber-800">3</p>
          </div>
          <div>
            <h4 class="font-bold text-gray-900">Vía Crucis Viviente</h4>
            <p class="text-sm text-gray-600">Villa de Pozos & Barrio de San Juan de Guadalupe — Lebendige Nachstellungen der Passion Christi</p>
          </div>
        </div>
      </div>

      <div class="bg-white border-2 border-gray-200 rounded-xl p-5 hover:border-amber-300 transition-colors">
        <div class="flex items-start gap-4">
          <div class="flex-shrink-0 w-20 text-center bg-amber-100 rounded-lg p-2">
            <p class="text-xs text-amber-600 uppercase">Apr</p>
            <p class="text-2xl font-bold text-amber-800">4</p>
          </div>
          <div>
            <h4 class="font-bold text-gray-900">Fiesta de la Luz & Quema de Judas</h4>
            <p class="text-sm text-gray-600">Catedral Metropolitana & Centro Histórico — Lichterzeremonie in der Kathedrale und traditionelles Verbrennen von Judas-Figuren</p>
          </div>
        </div>
      </div>

      <div class="bg-white border-2 border-gray-200 rounded-xl p-5 hover:border-amber-300 transition-colors">
        <div class="flex items-start gap-4">
          <div class="flex-shrink-0 w-20 text-center bg-amber-100 rounded-lg p-2">
            <p class="text-xs text-amber-600 uppercase">Apr</p>
            <p class="text-2xl font-bold text-amber-800">5-11</p>
          </div>
          <div>
            <h4 class="font-bold text-gray-900">Konzerte, Theater & Familienveranstaltungen</h4>
            <p class="text-sm text-gray-600">Plaza de Aranzazú, Teatro de la Paz & stadtweit — Konzerte, Tanzaufführungen, Theater, Workshops und Ausstellungen während der gesamten Osterwoche</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- PROCESION -->
  <section id="procesion" class="mb-12">
    <h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-amber-200 pb-2">Procesión del Silencio: Das Hauptereignis</h2>

    <p class="text-gray-700 mb-4">Die Procesión del Silencio ist das Kronjuwel der Semana Santa in San Luis Potosí. Sie findet am Karfreitag (Viernes Santo, 3. April 2026) statt und führt über 4.000 vermummte Teilnehmer in absoluter Stille durch das historische Zentrum. Laut der offiziellen Ankündigung der Regierung werden 100.000–120.000 Besucher erwartet.</p>

    <div class="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg mb-6">
      <p class="text-purple-800"><strong>Lesen Sie unseren vollständigen Guide:</strong> <a href="/blog/procesion-del-silencio-2026-san-luis-potosi" class="text-purple-600 underline font-semibold">Procesión del Silencio 2026: Route, Tickets, Cofradías & Tipps →</a></p>
    </div>
  </section>

  <!-- TRADITIONS -->
  <section id="traditions" class="mb-12">
    <h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-amber-200 pb-2">Traditionelle Feierlichkeiten</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-white border-2 border-gray-200 rounded-xl p-6">
        <div class="text-3xl mb-3">🕯️</div>
        <h4 class="text-xl font-bold text-gray-900 mb-2">Altar de Dolores</h4>
        <p class="text-sm text-gray-600">Eine Tradition aus dem 16. Jahrhundert mit kunstvollen Altären, die mit Kerzen, Glaskugeln, goldenen Orangen, gekeimten Samen und anderen symbolischen Elementen zu Ehren des Leidens der Jungfrau Maria geschmückt sind. Die Altäre werden im Palacio de Gobierno und in verschiedenen Kirchen ausgestellt.</p>
      </div>
      <div class="bg-white border-2 border-gray-200 rounded-xl p-6">
        <div class="text-3xl mb-3">✝️</div>
        <h4 class="text-xl font-bold text-gray-900 mb-2">Vía Crucis Viviente</h4>
        <p class="text-sm text-gray-600">Lebendige Nachstellungen des Kreuzwegs, aufgeführt in Vierteln wie Villa de Pozos und Barrio de San Juan de Guadalupe. Lokale Darsteller stellen die Passion Christi in eindrucksvollen Aufführungen unter freiem Himmel dar.</p>
      </div>
      <div class="bg-white border-2 border-gray-200 rounded-xl p-6">
        <div class="text-3xl mb-3">🔥</div>
        <h4 class="text-xl font-bold text-gray-900 mb-2">Quema de Judas</h4>
        <p class="text-sm text-gray-600">Am Karsamstag werden Judas-Figuren aus Pappmaché (oft unbeliebten Persönlichkeiten des öffentlichen Lebens nachempfunden) auf öffentlichen Plätzen verbrannt – eine kathartische Tradition, die den Sieg über den Verrat symbolisiert.</p>
      </div>
      <div class="bg-white border-2 border-gray-200 rounded-xl p-6">
        <div class="text-3xl mb-3">🎭</div>
        <h4 class="text-xl font-bold text-gray-900 mb-2">Veranstaltungen im Museo de la Máscara</h4>
        <p class="text-sm text-gray-600">Das Museo Nacional de la Máscara zeigt besondere Vorführungen ritueller Zeremonien und traditioneller Maskentänze, die mit den indigenen Traditionen der Semana Santa verbunden sind.</p>
      </div>
    </div>
  </section>

  <!-- FAMILY -->
  <section id="family" class="mb-12">
    <h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-amber-200 pb-2">Familienfreundliche Aktivitäten</h2>

    <p class="text-gray-700 mb-6">Die Semana Santa besteht nicht nur aus religiösen Zeremonien – es gibt viel, was Familien mit Kindern genießen können:</p>

    <div class="space-y-4">
      <div class="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
        <p class="text-green-800"><strong>Museo del Ferrocarril:</strong> Das Eisenbahnmuseum Jesús García Corona bietet besondere Workshops, Führungen, Nachtführungen und einen traditionellen Altar-de-Dolores-Aufbau. Einige Aktivitäten haben begrenzte Kapazität – kommen Sie früh.</p>
      </div>
      <div class="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
        <p class="text-blue-800"><strong>Festival de Primavera:</strong> Vom 28. März bis 4. April bietet dieses kostenlose Festival über 110 Veranstaltungen mit Konzerten, Theater und Tanz an 14 Spielstätten in der ganzen Stadt. <a href="/festival-primavera-2026" class="text-blue-600 underline">Programm ansehen →</a></p>
      </div>
      <div class="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
        <p class="text-amber-800"><strong>Copa Potosí 2026:</strong> Fußballfans können dieses Amateurturnier vom 30. März bis 4. April genießen. Eintritt frei an allen Spielstätten. <a href="/events" class="text-blue-600 underline">Alle Infos →</a></p>
      </div>
      <div class="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg">
        <p class="text-purple-800"><strong>Parks & Outdoor-Spaß:</strong> Der Parque Tangamanga bleibt für Radfahren, Picknicks und den Zoo geöffnet. Sehen Sie sich unseren <a href="/family-friendly-activities" class="text-purple-600 underline">vollständigen Guide zu Familienaktivitäten →</a> an</p>
      </div>
    </div>
  </section>

  <!-- FOOD -->
  <section id="food" class="mb-12">
    <h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-amber-200 pb-2">Traditionelle Semana-Santa-Küche</h2>

    <p class="text-gray-700 mb-6">Die Semana Santa hat in San Luis Potosí ihre eigene, unverwechselbare Gastronomie. Der lokalen Tradition folgend wird am Karfreitag auf Fleisch verzichtet, und besondere Gerichte stehen im Mittelpunkt:</p>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-white border-2 border-gray-200 rounded-xl p-6 text-center">
        <div class="text-4xl mb-3">🌮</div>
        <h4 class="text-lg font-bold text-gray-900 mb-2">Enchiladas Potosinas</h4>
        <p class="text-sm text-gray-600">Das kulinarische Wahrzeichen der Stadt — Maistortillas mit Chile ancho, gefüllt mit Käse und serviert mit Crema und Salsa</p>
      </div>
      <div class="bg-white border-2 border-gray-200 rounded-xl p-6 text-center">
        <div class="text-4xl mb-3">🐟</div>
        <h4 class="text-lg font-bold text-gray-900 mb-2">Capirotada</h4>
        <p class="text-sm text-gray-600">Traditioneller Brotauflauf der Fastenzeit mit Piloncillo-Sirup, Käse, Erdnüssen, Rosinen und Zimt — ein Klassiker der Semana Santa</p>
      </div>
      <div class="bg-white border-2 border-gray-200 rounded-xl p-6 text-center">
        <div class="text-4xl mb-3">🥛</div>
        <h4 class="text-lg font-bold text-gray-900 mb-2">Aguas Frescas</h4>
        <p class="text-sm text-gray-600">Traditionelle Fruchtwasser in saisonalen Geschmacksrichtungen wie Tuna (Kaktusfeige), Guave und Jamaica (Hibiskus), die während der Festlichkeiten an jeder Ecke verkauft werden</p>
      </div>
    </div>
  </section>

  <!-- PRACTICAL -->
  <section id="practical" class="mb-12">
    <h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-amber-200 pb-2">Praktische Informationen für Besucher</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-blue-50 border border-blue-200 rounded-xl p-6">
        <div class="text-2xl mb-3">🏨</div>
        <h3 class="font-bold text-gray-900 mb-2">Unterkunft</h3>
        <p class="text-sm text-gray-600">Hotels sind während der Semana Santa schnell ausgebucht. Buchen Sie rechtzeitig im Voraus, besonders im Centro Histórico. Airbnb und Boutique-Hotels sind Alternativen, wenn die großen Hotels ausverkauft sind.</p>
      </div>
      <div class="bg-green-50 border border-green-200 rounded-xl p-6">
        <div class="text-2xl mb-3">🚗</div>
        <h3 class="font-bold text-gray-900 mb-2">Fortbewegung</h3>
        <p class="text-sm text-gray-600">Straßensperrungen sind bei großen Veranstaltungen üblich. Nutzen Sie Uber/DiDi, kommen Sie früh an wichtigen Orten an und ziehen Sie in Betracht, das Centro Histórico zu Fuß zu erkunden — die meisten Veranstaltungen liegen fußläufig beieinander.</p>
      </div>
      <div class="bg-amber-50 border border-amber-200 rounded-xl p-6">
        <div class="text-2xl mb-3">☀️</div>
        <h3 class="font-bold text-gray-900 mb-2">Wetter</h3>
        <p class="text-sm text-gray-600">Anfang April ist es in SLP warm und trocken. Erwarten Sie Tageshöchstwerte von 28-32°C (82-90°F) und kühle Abende um 15-18°C (59-64°F). Bringen Sie Sonnencreme für Aktivitäten am Tag und eine leichte Jacke für Abendveranstaltungen mit.</p>
      </div>
      <div class="bg-red-50 border border-red-200 rounded-xl p-6">
        <div class="text-2xl mb-3">⚠️</div>
        <h3 class="font-bold text-gray-900 mb-2">Sicherheit</h3>
        <p class="text-sm text-gray-600">SLP ist eine der sichersten Städte Mexikos. Bei großen Veranstaltungen ist mehr Polizei präsent. Es gelten die üblichen Vorsichtsmaßnahmen — bewahren Sie Wertsachen sicher auf, nutzen Sie autorisierte Transportmittel und halten Sie sich nachts in gut beleuchteten Bereichen auf.</p>
      </div>
    </div>
  </section>

  <!-- FAQ -->
  <section id="faq" class="mb-12">
    <h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-amber-200 pb-2">Häufig gestellte Fragen</h2>

    <div class="space-y-6">
      <div class="bg-white border-2 border-gray-200 rounded-xl p-6">
        <h4 class="text-lg font-bold text-gray-900 mb-2">Wann ist die Semana Santa 2026 in San Luis Potosí?</h4>
        <p class="text-gray-700">Die kulturellen Aktivitäten finden vom 27. März bis 11. April 2026 statt. Die wichtigsten Termine sind Karfreitag (3. April — Procesión del Silencio) und Ostersonntag (5. April).</p>
      </div>
      <div class="bg-white border-2 border-gray-200 rounded-xl p-6">
        <h4 class="text-lg font-bold text-gray-900 mb-2">Sind die Semana-Santa-Veranstaltungen kostenlos?</h4>
        <p class="text-gray-700">Die meisten Veranstaltungen sind kostenlos, darunter das Festival de Primavera, die Vía-Crucis-Nachstellungen, die Altar-Ausstellungen und die Copa Potosí. Die Procesión del Silencio kann kostenlos oder mit reservierten Sitzplätzen (77-297 MXN) verfolgt werden.</p>
      </div>
      <div class="bg-white border-2 border-gray-200 rounded-xl p-6">
        <h4 class="text-lg font-bold text-gray-900 mb-2">Lohnt sich ein Besuch in San Luis Potosí zur Semana Santa?</h4>
        <p class="text-gray-700">Auf jeden Fall. Laut Tourismusdaten des Bundesstaates ist SLP dank der Procesión del Silencio (eines von nur wenigen vergleichbaren Ereignissen auf dem amerikanischen Kontinent), des Festival de Primavera und der beeindruckenden Kolonialarchitektur der Stadt eines der beliebtesten Semana-Santa-Reiseziele Mexikos.</p>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <div class="not-prose mt-12 bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-300 p-8 rounded-2xl shadow-xl">
    <h3 class="text-3xl font-bold text-gray-900 mb-4">Planen Sie Ihre Semana Santa in SLP</h3>
    <p class="text-lg text-gray-700 mb-6">Brauchen Sie Hilfe bei der Planung Ihres Besuchs? Entdecken Sie unsere Guides für Unterkunft, Gastronomie und Familienaktivitäten.</p>
    <div class="flex flex-col sm:flex-row gap-4">
      <a href="/family-friendly-activities" class="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-semibold px-8 py-4 rounded-lg hover:from-amber-700 hover:to-amber-800 transition-all shadow-lg text-center">Guide für Familienaktivitäten →</a>
      <a href="/blog" class="inline-flex items-center justify-center gap-2 bg-white border-2 border-amber-600 text-amber-700 font-semibold px-8 py-4 rounded-lg hover:bg-amber-50 transition-all text-center">Alle Guides →</a>
    </div>
  </div>

</div>
`;

const CONTENT_JA = `<div class="prose prose-lg max-w-none">

  <!-- TABLE OF CONTENTS -->
  <div class="bg-yellow-50 p-6 rounded-lg mb-8">
    <h2 class="text-xl font-semibold mb-4">このガイドの内容</h2>
    <ul class="list-disc pl-6">
      <li><a href="#overview" class="text-blue-600 hover:text-blue-800">概要：SLPのSemana Santa</a></li>
      <li><a href="#calendar" class="text-blue-600 hover:text-blue-800">日ごとのイベントカレンダー</a></li>
      <li><a href="#procesion" class="text-blue-600 hover:text-blue-800">Procesión del Silencio</a></li>
      <li><a href="#traditions" class="text-blue-600 hover:text-blue-800">伝統的な祝祭</a></li>
      <li><a href="#family" class="text-blue-600 hover:text-blue-800">家族向けのアクティビティ</a></li>
      <li><a href="#food" class="text-blue-600 hover:text-blue-800">Semana Santaの伝統料理</a></li>
      <li><a href="#practical" class="text-blue-600 hover:text-blue-800">訪問者向けの実用情報</a></li>
      <li><a href="#faq" class="text-blue-600 hover:text-blue-800">よくある質問</a></li>
    </ul>
  </div>

  <!-- INTRO -->
  <p class="text-lg text-gray-700 mb-8">
    <strong>San Luis PotosíのSemana Santa（聖週間）2026は、メキシコ全土でも最も文化的に豊かで壮観な祝祭のひとつです。</strong> 3月27日から4月11日まで、市内は100を超える文化・宗教行事で活気づきます。世界的に有名なProcesión del Silencioから、生きたVía Crucisの再現、伝統的な祭壇の設置、コンサート、博物館のイベント、美食の披露まで多彩です。州当局によると、この祝祭は<strong>12億MXN</strong>を超える経済効果を生み出すと見込まれています。
  </p>

  <!-- QUICK FACTS BOX -->
  <div class="not-prose my-8 bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl overflow-hidden shadow-lg">
    <div class="bg-amber-600 px-8 py-4">
      <h3 class="text-2xl font-bold text-white">Semana Santa 2026 の概要</h3>
    </div>
    <div class="p-8">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div><p class="text-3xl font-bold text-amber-700">100+</p><p class="text-sm text-gray-600">文化イベント</p></div>
        <div><p class="text-3xl font-bold text-amber-700">3月27日</p><p class="text-sm text-gray-600">〜4月11日</p></div>
        <div><p class="text-3xl font-bold text-amber-700">$1.2B</p><p class="text-sm text-gray-600">MXNの経済効果</p></div>
        <div><p class="text-3xl font-bold text-amber-700">150K+</p><p class="text-sm text-gray-600">予想来場者数</p></div>
      </div>
    </div>
  </div>

  <!-- OVERVIEW -->
  <section id="overview" class="mb-12">
    <h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-amber-200 pb-2">概要：なぜSemana SantaにSLPなのか？</h2>

    <p class="text-gray-700 mb-4">San Luis Potosíは、数十年にわたりメキシコで最も重要なSemana Santaの目的地のひとつです。市に深く根づいた植民地時代のカトリックの伝統、見事なバロック建築、そして情熱的な地元の伝統が、国内の大部分では味わえない体験を生み出します。</p>

    <p class="text-gray-700 mb-4">祝祭は3月27日、Palacio de Gobiernoにおける<strong>Altar de la Virgen de los Dolores</strong>の披露をもって正式に幕を開けました。この宗教的な民間伝統は16世紀にスペインの入植者によって持ち込まれ、19世紀までにはSan Luis Potosíに深く根づいたもので、ろうそく、ガラス球、金色のオレンジ、発芽した種子など、信仰と生命の再生を象徴する装飾が特徴です。</p>

    <p class="text-gray-700 mb-4">アクティビティは市内および州全域の広場、聖堂、博物館、文化センターにわたって展開され、<strong>Secretaría de Cultura de San Luis Potosí（SECULT）</strong>によって運営されます。</p>
  </section>

  <!-- CALENDAR -->
  <section id="calendar" class="mb-12">
    <h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-amber-200 pb-2">主要イベントの日ごとのカレンダー</h2>

    <div class="space-y-4">
      <div class="bg-white border-2 border-gray-200 rounded-xl p-5 hover:border-amber-300 transition-colors">
        <div class="flex items-start gap-4">
          <div class="flex-shrink-0 w-20 text-center bg-amber-100 rounded-lg p-2">
            <p class="text-xs text-amber-600 uppercase">3月</p>
            <p class="text-2xl font-bold text-amber-800">27</p>
          </div>
          <div>
            <h4 class="font-bold text-gray-900">Altar de Doloresの披露</h4>
            <p class="text-sm text-gray-600">Palacio de Gobierno — Semana Santaの祝祭の始まりを告げる伝統的な祭壇の設置</p>
          </div>
        </div>
      </div>

      <div class="bg-white border-2 border-gray-200 rounded-xl p-5 hover:border-amber-300 transition-colors">
        <div class="flex items-start gap-4">
          <div class="flex-shrink-0 w-20 text-center bg-amber-100 rounded-lg p-2">
            <p class="text-xs text-amber-600 uppercase">3月28日</p>
            <p class="text-lg font-bold text-amber-800">〜4月4日</p>
          </div>
          <div>
            <h4 class="font-bold text-gray-900">Festival San Luis en Primavera</h4>
            <p class="text-sm text-gray-600">市内全域 — 110以上のイベント、800人以上のアーティスト、14会場。コンサート、演劇、ダンス。入場無料。</p>
          </div>
        </div>
      </div>

      <div class="bg-white border-2 border-gray-200 rounded-xl p-5 hover:border-amber-300 transition-colors">
        <div class="flex items-start gap-4">
          <div class="flex-shrink-0 w-20 text-center bg-amber-100 rounded-lg p-2">
            <p class="text-xs text-amber-600 uppercase">3月30日</p>
            <p class="text-lg font-bold text-amber-800">〜4月4日</p>
          </div>
          <div>
            <h4 class="font-bold text-gray-900">Copa Potosí 2026</h4>
            <p class="text-sm text-gray-600">複数会場 — アマチュアサッカートーナメント。1,400人以上の選手、国際チーム。入場無料。 <a href="/events" class="text-blue-600 underline">詳細はこちら →</a></p>
          </div>
        </div>
      </div>

      <div class="bg-white border-2 border-gray-200 rounded-xl p-5 hover:border-amber-300 transition-colors">
        <div class="flex items-start gap-4">
          <div class="flex-shrink-0 w-20 text-center bg-amber-100 rounded-lg p-2">
            <p class="text-xs text-amber-600 uppercase">4月</p>
            <p class="text-2xl font-bold text-amber-800">2</p>
          </div>
          <div>
            <h4 class="font-bold text-gray-900">Procesión de los Cristos</h4>
            <p class="text-sm text-gray-600">Villa de Pozos — 宗教像を街路で担ぐ荘厳な行列</p>
          </div>
        </div>
      </div>

      <div class="bg-gradient-to-r from-purple-50 to-indigo-50 border-2 border-purple-300 rounded-xl p-5 shadow-md">
        <div class="flex items-start gap-4">
          <div class="flex-shrink-0 w-20 text-center bg-purple-200 rounded-lg p-2">
            <p class="text-xs text-purple-600 uppercase">4月</p>
            <p class="text-2xl font-bold text-purple-800">3</p>
          </div>
          <div>
            <h4 class="font-bold text-purple-900 text-lg">Procesión del Silencio ★</h4>
            <p class="text-sm text-purple-700">Templo del Carmen、午後8時 — メインイベント。第73回、4,000人以上の参加者、32のcofradías。 <a href="/blog/procesion-del-silencio-2026-san-luis-potosi" class="text-purple-600 underline font-semibold">完全ガイド →</a></p>
          </div>
        </div>
      </div>

      <div class="bg-white border-2 border-gray-200 rounded-xl p-5 hover:border-amber-300 transition-colors">
        <div class="flex items-start gap-4">
          <div class="flex-shrink-0 w-20 text-center bg-amber-100 rounded-lg p-2">
            <p class="text-xs text-amber-600 uppercase">4月</p>
            <p class="text-2xl font-bold text-amber-800">3</p>
          </div>
          <div>
            <h4 class="font-bold text-gray-900">Vía Crucis Viviente</h4>
            <p class="text-sm text-gray-600">Villa de Pozos & Barrio de San Juan de Guadalupe — キリストの受難を生きた形で再現</p>
          </div>
        </div>
      </div>

      <div class="bg-white border-2 border-gray-200 rounded-xl p-5 hover:border-amber-300 transition-colors">
        <div class="flex items-start gap-4">
          <div class="flex-shrink-0 w-20 text-center bg-amber-100 rounded-lg p-2">
            <p class="text-xs text-amber-600 uppercase">4月</p>
            <p class="text-2xl font-bold text-amber-800">4</p>
          </div>
          <div>
            <h4 class="font-bold text-gray-900">Fiesta de la Luz & Quema de Judas</h4>
            <p class="text-sm text-gray-600">Catedral Metropolitana & Centro Histórico — 大聖堂の光の儀式と、伝統的なJudas人形の焼却</p>
          </div>
        </div>
      </div>

      <div class="bg-white border-2 border-gray-200 rounded-xl p-5 hover:border-amber-300 transition-colors">
        <div class="flex items-start gap-4">
          <div class="flex-shrink-0 w-20 text-center bg-amber-100 rounded-lg p-2">
            <p class="text-xs text-amber-600 uppercase">4月</p>
            <p class="text-2xl font-bold text-amber-800">5-11</p>
          </div>
          <div>
            <h4 class="font-bold text-gray-900">コンサート、演劇 & 家族向けイベント</h4>
            <p class="text-sm text-gray-600">Plaza de Aranzazú、Teatro de la Paz & 市内全域 — 復活祭の週を通じてのコンサート、ダンス公演、演劇、ワークショップ、展示</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- PROCESION -->
  <section id="procesion" class="mb-12">
    <h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-amber-200 pb-2">Procesión del Silencio：メインイベント</h2>

    <p class="text-gray-700 mb-4">Procesión del Silencioは、San Luis PotosíのSemana Santaにおける最大の見どころです。聖金曜日（Viernes Santo、2026年4月3日）に行われるこの荘厳な行列では、4,000人以上のフードをかぶった参加者が完全な沈黙の中、歴史地区を練り歩きます。政府の公式発表によると、10万〜12万人の来場が見込まれています。</p>

    <div class="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg mb-6">
      <p class="text-purple-800"><strong>完全ガイドをお読みください：</strong> <a href="/blog/procesion-del-silencio-2026-san-luis-potosi" class="text-purple-600 underline font-semibold">Procesión del Silencio 2026：ルート、チケット、Cofradías & ヒント →</a></p>
    </div>
  </section>

  <!-- TRADITIONS -->
  <section id="traditions" class="mb-12">
    <h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-amber-200 pb-2">伝統的な祝祭</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-white border-2 border-gray-200 rounded-xl p-6">
        <div class="text-3xl mb-3">🕯️</div>
        <h4 class="text-xl font-bold text-gray-900 mb-2">Altar de Dolores</h4>
        <p class="text-sm text-gray-600">16世紀にさかのぼる伝統で、ろうそく、ガラス球、金色のオレンジ、発芽した種子など、聖母マリアの苦しみを讃える象徴的な要素で飾られた精巧な祭壇が特徴です。祭壇はPalacio de Gobiernoやさまざまな教会で公開されます。</p>
      </div>
      <div class="bg-white border-2 border-gray-200 rounded-xl p-6">
        <div class="text-3xl mb-3">✝️</div>
        <h4 class="text-xl font-bold text-gray-900 mb-2">Vía Crucis Viviente</h4>
        <p class="text-sm text-gray-600">Villa de PozosやBarrio de San Juan de Guadalupeなどの地区で行われる、十字架の道行きの生きた再現です。地元の演者が、屋外での迫力ある演技でキリストの受難を演じます。</p>
      </div>
      <div class="bg-white border-2 border-gray-200 rounded-xl p-6">
        <div class="text-3xl mb-3">🔥</div>
        <h4 class="text-xl font-bold text-gray-900 mb-2">Quema de Judas</h4>
        <p class="text-sm text-gray-600">聖土曜日には、張り子で作られたJudasの人形（しばしば不人気な公人に似せて作られます）が公共の広場で焼かれます。裏切りの敗北を象徴する、カタルシスをもたらす伝統です。</p>
      </div>
      <div class="bg-white border-2 border-gray-200 rounded-xl p-6">
        <div class="text-3xl mb-3">🎭</div>
        <h4 class="text-xl font-bold text-gray-900 mb-2">Museo de la Máscaraのイベント</h4>
        <p class="text-sm text-gray-600">Museo Nacional de la Máscaraでは、Semana Santaの先住民の伝統に結びついた儀式や伝統的な仮面舞踏の特別な実演が行われます。</p>
      </div>
    </div>
  </section>

  <!-- FAMILY -->
  <section id="family" class="mb-12">
    <h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-amber-200 pb-2">家族向けのアクティビティ</h2>

    <p class="text-gray-700 mb-6">Semana Santaは宗教儀式だけではありません。子ども連れの家族が楽しめるものがたくさんあります：</p>

    <div class="space-y-4">
      <div class="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
        <p class="text-green-800"><strong>Museo del Ferrocarril：</strong> Jesús García Corona鉄道博物館では、特別なワークショップ、ガイドツアー、ナイトツアー、そして伝統的なAltar de Doloresの設置が楽しめます。一部のアクティビティは定員が限られているため、早めにお越しください。</p>
      </div>
      <div class="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
        <p class="text-blue-800"><strong>Festival de Primavera：</strong> 3月28日から4月4日まで開催されるこの無料フェスティバルでは、市内14会場でコンサート、演劇、ダンスなど110以上のイベントが行われます。 <a href="/festival-primavera-2026" class="text-blue-600 underline">ラインアップを見る →</a></p>
      </div>
      <div class="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
        <p class="text-amber-800"><strong>Copa Potosí 2026：</strong> サッカーファンは、3月30日から4月4日まで開催されるこのアマチュアトーナメントを楽しめます。全会場入場無料。 <a href="/events" class="text-blue-600 underline">詳細はこちら →</a></p>
      </div>
      <div class="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg">
        <p class="text-purple-800"><strong>公園 & アウトドアの楽しみ：</strong> Parque Tangamangaはサイクリング、ピクニック、動物園として引き続き開放されています。 <a href="/family-friendly-activities" class="text-purple-600 underline">家族向けアクティビティの完全ガイドをご覧ください →</a></p>
      </div>
    </div>
  </section>

  <!-- FOOD -->
  <section id="food" class="mb-12">
    <h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-amber-200 pb-2">Semana Santaの伝統料理</h2>

    <p class="text-gray-700 mb-6">San Luis PotosíのSemana Santaには、独自の食文化があります。地元の伝統では聖金曜日には肉を避け、特別な料理が主役となります：</p>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-white border-2 border-gray-200 rounded-xl p-6 text-center">
        <div class="text-4xl mb-3">🌮</div>
        <h4 class="text-lg font-bold text-gray-900 mb-2">Enchiladas Potosinas</h4>
        <p class="text-sm text-gray-600">市を代表する料理 — chile anchoを練り込んだトウモロコシのトルティーヤにチーズを詰め、クリームとサルサを添えて提供されます</p>
      </div>
      <div class="bg-white border-2 border-gray-200 rounded-xl p-6 text-center">
        <div class="text-4xl mb-3">🐟</div>
        <h4 class="text-lg font-bold text-gray-900 mb-2">Capirotada</h4>
        <p class="text-sm text-gray-600">piloncilloのシロップ、チーズ、ピーナッツ、レーズン、シナモンを使った四旬節の伝統的なブレッドプディング — Semana Santaの定番です</p>
      </div>
      <div class="bg-white border-2 border-gray-200 rounded-xl p-6 text-center">
        <div class="text-4xl mb-3">🥛</div>
        <h4 class="text-lg font-bold text-gray-900 mb-2">Aguas Frescas</h4>
        <p class="text-sm text-gray-600">tuna（ウチワサボテンの実）、グアバ、jamaica（ハイビスカス）など季節のフレーバーの伝統的なフルーツウォーターで、祭りの期間中は街角のいたるところで売られています</p>
      </div>
    </div>
  </section>

  <!-- PRACTICAL -->
  <section id="practical" class="mb-12">
    <h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-amber-200 pb-2">訪問者向けの実用情報</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-blue-50 border border-blue-200 rounded-xl p-6">
        <div class="text-2xl mb-3">🏨</div>
        <h3 class="font-bold text-gray-900 mb-2">宿泊</h3>
        <p class="text-sm text-gray-600">Semana Santaの期間中、ホテルはすぐに満室になります。特にCentro Históricoでは、早めにご予約ください。主要ホテルが満室の場合は、Airbnbやブティックホテルが代替となります。</p>
      </div>
      <div class="bg-green-50 border border-green-200 rounded-xl p-6">
        <div class="text-2xl mb-3">🚗</div>
        <h3 class="font-bold text-gray-900 mb-2">移動</h3>
        <p class="text-sm text-gray-600">大きなイベント中は道路の通行止めがよくあります。Uber/DiDiを利用し、主要な場所へは早めに到着し、Centro Históricoは徒歩で巡ることも検討してください。ほとんどのイベントは徒歩圏内にあります。</p>
      </div>
      <div class="bg-amber-50 border border-amber-200 rounded-xl p-6">
        <div class="text-2xl mb-3">☀️</div>
        <h3 class="font-bold text-gray-900 mb-2">天気</h3>
        <p class="text-sm text-gray-600">4月上旬のSLPは暖かく乾燥しています。日中の最高気温は28-32°C（82-90°F）、夜は15-18°C（59-64°F）ほどと涼しくなります。日中の活動には日焼け止めを、夜のイベントには薄手の上着をお持ちください。</p>
      </div>
      <div class="bg-red-50 border border-red-200 rounded-xl p-6">
        <div class="text-2xl mb-3">⚠️</div>
        <h3 class="font-bold text-gray-900 mb-2">安全</h3>
        <p class="text-sm text-gray-600">SLPはメキシコで最も安全な都市のひとつです。大規模なイベントでは警察の警備が強化されます。基本的な注意は必要です — 貴重品はしっかり管理し、正規の交通機関を利用し、夜間は明るい場所にとどまってください。</p>
      </div>
    </div>
  </section>

  <!-- FAQ -->
  <section id="faq" class="mb-12">
    <h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-amber-200 pb-2">よくある質問</h2>

    <div class="space-y-6">
      <div class="bg-white border-2 border-gray-200 rounded-xl p-6">
        <h4 class="text-lg font-bold text-gray-900 mb-2">San Luis PotosíのSemana Santa 2026はいつですか？</h4>
        <p class="text-gray-700">文化的な催しは2026年3月27日から4月11日まで行われます。主な日程は聖金曜日（4月3日 — Procesión del Silencio）と復活祭の日曜日（4月5日）です。</p>
      </div>
      <div class="bg-white border-2 border-gray-200 rounded-xl p-6">
        <h4 class="text-lg font-bold text-gray-900 mb-2">Semana Santaのイベントは無料ですか？</h4>
        <p class="text-gray-700">Festival de Primavera、Vía Crucisの再現、祭壇の展示、Copa Potosíなど、ほとんどのイベントは無料です。Procesión del Silencioは無料で、または予約席（77-297 MXN）で観覧できます。</p>
      </div>
      <div class="bg-white border-2 border-gray-200 rounded-xl p-6">
        <h4 class="text-lg font-bold text-gray-900 mb-2">Semana SantaのためにSan Luis Potosíを訪れる価値はありますか？</h4>
        <p class="text-gray-700">もちろんです。州の観光データによると、SLPはProcesión del Silencio（南北アメリカでも数少ない類例のひとつ）、Festival de Primavera、そして市の見事な植民地時代の建築のおかげで、メキシコ有数のSemana Santaの目的地のひとつです。</p>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <div class="not-prose mt-12 bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-300 p-8 rounded-2xl shadow-xl">
    <h3 class="text-3xl font-bold text-gray-900 mb-4">SLPでのSemana Santaを計画しましょう</h3>
    <p class="text-lg text-gray-700 mb-6">訪問の計画にお困りですか？宿泊、食事、家族向けアクティビティのガイドをご覧ください。</p>
    <div class="flex flex-col sm:flex-row gap-4">
      <a href="/family-friendly-activities" class="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-semibold px-8 py-4 rounded-lg hover:from-amber-700 hover:to-amber-800 transition-all shadow-lg text-center">家族向けアクティビティガイド →</a>
      <a href="/blog" class="inline-flex items-center justify-center gap-2 bg-white border-2 border-amber-600 text-amber-700 font-semibold px-8 py-4 rounded-lg hover:bg-amber-50 transition-all text-center">すべてのガイド →</a>
    </div>
  </div>

</div>
`;

function countTags(html) {
  return (html.match(/<[a-zA-Z/][^>]*>/g) || []).length;
}

async function main() {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('id, content, content_de, content_ja')
    .eq('slug', SLUG)
    .single();
  if (error || !data) {
    console.error('FETCH ERROR:', error ? error.message : 'post not found');
    process.exit(1);
  }

  const enTags = countTags(data.content);
  console.log('EN tags:', enTags, '| DE tags:', countTags(CONTENT_DE), '| JA tags:', countTags(CONTENT_JA));

  if (data.content_de === CONTENT_DE && data.content_ja === CONTENT_JA) {
    console.log('Already translated — nothing to update.');
  } else {
    const { error: upErr } = await supabase
      .from('blog_posts')
      .update({ content_de: CONTENT_DE, content_ja: CONTENT_JA })
      .eq('id', data.id);
    if (upErr) {
      console.error('UPDATE ERROR:', upErr.message);
      process.exit(1);
    }
    console.log('Updated content_de and content_ja.');
  }

  // Verify via re-fetch.
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
  if (check.content_de === check.content) { console.error('FAIL: content_de equals EN'); ok = false; }
  if (check.content_ja === check.content) { console.error('FAIL: content_ja equals EN'); ok = false; }

  const enTagCount = countTags(check.content);
  const deTagCount = countTags(check.content_de);
  const jaTagCount = countTags(check.content_ja);
  if (deTagCount !== enTagCount) { console.error(`FAIL: DE tag count ${deTagCount} != EN ${enTagCount}`); ok = false; }
  if (jaTagCount !== enTagCount) { console.error(`FAIL: JA tag count ${jaTagCount} != EN ${enTagCount}`); ok = false; }

  // No leftover English prose sentinels (proper nouns intentionally kept).
  const enSentinels = [
    'In This Guide', 'Day-by-Day Calendar', 'The Main Event', 'Traditional Celebrations',
    'Family-Friendly', 'Frequently Asked Questions', 'Expected Visitors', 'Getting Around',
    'Accommodation', 'Complete guide', 'Free admission', 'All Guides',
  ];
  for (const s of enSentinels) {
    if (check.content_de.includes(s)) { console.error(`FAIL: DE still contains English "${s}"`); ok = false; }
    if (check.content_ja.includes(s)) { console.error(`FAIL: JA still contains English "${s}"`); ok = false; }
  }

  // href integrity: every EN href must survive unchanged in both locales.
  const hrefs = [...check.content.matchAll(/href="([^"]+)"/g)].map((m) => m[1]);
  for (const h of hrefs) {
    if (!check.content_de.includes(`href="${h}"`)) { console.error(`FAIL: DE missing href ${h}`); ok = false; }
    if (!check.content_ja.includes(`href="${h}"`)) { console.error(`FAIL: JA missing href ${h}`); ok = false; }
  }

  // Date sentinels must be intact in both.
  for (const d of ['2026', '27', '11', '73', '4,000', '4.000', '4,000+', '77-297', '77-297 MXN']) {
    // basic presence check for the non-locale-specific ones
  }
  const dateChecks = ['2026', '73', '32'];
  for (const d of dateChecks) {
    if (!check.content_de.includes(d)) { console.error(`FAIL: DE missing "${d}"`); ok = false; }
    if (!check.content_ja.includes(d)) { console.error(`FAIL: JA missing "${d}"`); ok = false; }
  }

  console.log(`EN=${enTagCount} DE=${deTagCount} JA=${jaTagCount} tags | hrefs checked: ${hrefs.length}`);
  console.log(ok ? 'VERIFIED OK' : 'VERIFICATION FAILED');
  process.exit(ok ? 0 : 1);
}

main();
