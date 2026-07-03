// Native German + Japanese translations for the blog post
// `procesion-del-silencio-2026-san-luis-potosi` (2026 edition).
// Replaces the English-mirror content_de / content_ja with real translations.
// Idempotent: re-running sets the same HTML. Verifies by re-fetching.
require('dotenv').config({ path: '.env' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const SLUG = 'procesion-del-silencio-2026-san-luis-potosi';

const contentDe = `<div class="prose prose-lg max-w-none">

  <!-- TABLE OF CONTENTS -->
  <div class="bg-yellow-50 p-6 rounded-lg mb-8">
    <h2 class="text-xl font-semibold mb-4">In diesem Leitfaden</h2>
    <ul class="list-disc pl-6">
      <li><a href="#what-is" class="text-blue-600 hover:text-blue-800">Was ist die Procesión del Silencio?</a></li>
      <li><a href="#history" class="text-blue-600 hover:text-blue-800">Geschichte: Von Sevilla nach San Luis Potosí</a></li>
      <li><a href="#2026-details" class="text-blue-600 hover:text-blue-800">Ausgabe 2026: Datum, Uhrzeit & Route</a></li>
      <li><a href="#cofradias" class="text-blue-600 hover:text-blue-800">Die Cofradías und ihre Farben</a></li>
      <li><a href="#tickets" class="text-blue-600 hover:text-blue-800">Tickets, Sitzplätze & Preise</a></li>
      <li><a href="#tips" class="text-blue-600 hover:text-blue-800">Tipps für den Besuch</a></li>
      <li><a href="#faq" class="text-blue-600 hover:text-blue-800">Häufig gestellte Fragen</a></li>
    </ul>
  </div>

  <!-- INTRO -->
  <p class="text-lg text-gray-700 mb-8">
    <strong>Die Procesión del Silencio (Prozession der Stille) ist eines der eindrucksvollsten und visuell fesselndsten religiösen Ereignisse in ganz Mexiko.</strong> An jedem Viernes Santo (Karfreitag) ziehen Tausende vermummte Büßer in völliger Stille durch die Straßen des historischen Zentrums von San Luis Potosí, begleitet allein vom feierlichen Schlag der Trommeln und dem Ruf der Trompeten. Im Jahr 2026 werden zu dieser 73. Ausgabe über 100.000 Zuschauer aus ganz Mexiko und aller Welt erwartet.
  </p>

  <!-- WHAT IS -->
  <section id="what-is" class="mb-12">
    <h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Was ist die Procesión del Silencio?</h2>

    <p class="text-gray-700 mb-4">Die Procesión del Silencio ist eine feierliche Karfreitagsprozession, bei der rund <strong>4.000 Teilnehmer</strong> — organisiert in <strong>32 cofradías (Bruderschaften)</strong> — 3,5 Kilometer durch das historische Zentrum von San Luis Potosí ziehen. Die Teilnehmer tragen farbige Gewänder und spitze capuchas (Kapuzen), die ihr Gesicht verhüllen und nur die Augen freilassen.</p>

    <p class="text-gray-700 mb-4">Die Prozession findet in <strong>absoluter Stille</strong> statt. Kein Sprechen, keine Musik außer Trommeln und Trompeten, und auch von den Zuschauern wird erwartet, dass sie sie in respektvoller Stille verfolgen. Die einzigen Klänge sind die rhythmischen Trommelschläge, die den Takt vorgeben und eine Atmosphäre tiefer Feierlichkeit schaffen.</p>

    <div class="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg mb-6">
      <p class="text-blue-800"><strong>Kulturerbe:</strong> Im Jahr 2013 wurde die Procesión del Silencio offiziell zum <strong>Kulturerbe des Bundesstaates San Luis Potosí</strong> erklärt, in Anerkennung ihrer historischen und spirituellen Bedeutung für die Region.</p>
    </div>
  </section>

  <!-- HISTORY -->
  <section id="history" class="mb-12">
    <h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Geschichte: Von Sevilla nach San Luis Potosí</h2>

    <p class="text-gray-700 mb-4">Die Procesión del Silencio wurde <strong>1954</strong> offiziell von <strong>Monsignore Joaquín Antonio Peñalosa Santillán</strong> ins Leben gerufen, inspiriert von den berühmten Karwochenprozessionen im <strong>spanischen Sevilla</strong>. Peñalosa, ein bedeutender Dichter, Priester und Kulturschaffender in San Luis Potosí, hatte die Vision, die feierliche spanische Tradition nach Mexiko zu bringen.</p>

    <p class="text-gray-700 mb-4">Was als bescheidene religiöse Andacht begann, hat sich zu einem der ikonischsten Kulturereignisse Mexikos entwickelt und zieht nationale wie internationale Aufmerksamkeit auf sich. Die Prozession spiegelt die tief verwurzelten katholischen Traditionen wider, die San Luis Potosí seit seiner Gründung als koloniale Bergbaustadt im Jahr 1592 geprägt haben.</p>

    <div class="not-prose my-8 bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden">
      <div class="bg-gray-100 px-6 py-4">
        <h3 class="font-bold text-gray-900">Wichtige historische Meilensteine</h3>
      </div>
      <div class="p-6">
        <div class="space-y-4">
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-20 text-right font-bold text-blue-700">1954</div>
            <p class="text-gray-700">Erste Procesión del Silencio, gegründet von Monsignore Peñalosa</p>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-20 text-right font-bold text-blue-700">1960er</div>
            <p class="text-gray-700">Die Prozession wächst, weitere cofradías schließen sich an</p>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-20 text-right font-bold text-blue-700">2013</div>
            <p class="text-gray-700">Zum Kulturerbe des Bundesstaates San Luis Potosí erklärt</p>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-20 text-right font-bold text-blue-700">2026</div>
            <p class="text-gray-700">73. Ausgabe, über 4.000 Teilnehmer, mehr als 100.000 erwartete Besucher</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 2026 DETAILS -->
  <section id="2026-details" class="mb-12">
    <h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Ausgabe 2026: Datum, Uhrzeit & Route</h2>

    <div class="not-prose my-8 bg-gradient-to-br from-purple-50 to-indigo-50 border-2 border-purple-200 rounded-2xl overflow-hidden shadow-lg">
      <div class="bg-purple-700 px-8 py-4">
        <h3 class="text-2xl font-bold text-white">Procesión del Silencio 2026</h3>
      </div>
      <div class="p-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p class="text-sm text-gray-500 uppercase tracking-wider mb-1">Datum</p>
            <p class="text-xl font-bold text-gray-900">Freitag, 3. April 2026</p>
          </div>
          <div>
            <p class="text-sm text-gray-500 uppercase tracking-wider mb-1">Beginn</p>
            <p class="text-xl font-bold text-gray-900">20:00 Uhr (20:00 hrs)</p>
          </div>
          <div>
            <p class="text-sm text-gray-500 uppercase tracking-wider mb-1">Dauer</p>
            <p class="text-xl font-bold text-gray-900">~4 Stunden</p>
          </div>
          <div>
            <p class="text-sm text-gray-500 uppercase tracking-wider mb-1">Startpunkt</p>
            <p class="text-xl font-bold text-gray-900">Templo del Carmen</p>
          </div>
          <div>
            <p class="text-sm text-gray-500 uppercase tracking-wider mb-1">Entfernung</p>
            <p class="text-xl font-bold text-gray-900">3,5 km durch das Centro Histórico</p>
          </div>
          <div>
            <p class="text-sm text-gray-500 uppercase tracking-wider mb-1">Erwartete Besucherzahl</p>
            <p class="text-xl font-bold text-gray-900">100.000 - 120.000 Personen</p>
          </div>
        </div>
      </div>
    </div>

    <h3 class="text-2xl font-semibold mb-4 text-gray-900">Offizielle Route</h3>
    <p class="text-gray-700 mb-4">Die Prozession startet am <strong>Templo del Carmen</strong> und zieht durch das Herz des historischen Zentrums entlang dieser Straßen:</p>

    <div class="not-prose my-6 flex flex-wrap gap-3">
      <div class="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-semibold text-sm">1. Templo del Carmen (Start)</div>
      <div class="text-gray-400 self-center">→</div>
      <div class="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-semibold text-sm">2. Calle Universidad</div>
      <div class="text-gray-400 self-center">→</div>
      <div class="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-semibold text-sm">3. Calle Aldama</div>
      <div class="text-gray-400 self-center">→</div>
      <div class="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-semibold text-sm">4. Manuel José Othón</div>
      <div class="text-gray-400 self-center">→</div>
      <div class="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-semibold text-sm">5. Independencia</div>
      <div class="text-gray-400 self-center">→</div>
      <div class="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-semibold text-sm">6. Av. V. Carranza</div>
    </div>

    <p class="text-gray-700 mb-4">Die Route führt an markanten Wahrzeichen vorbei, darunter das <strong>Museo Nacional de la Máscara</strong>, der <strong>Palacio de Gobierno</strong> an der Plaza de Armas und die <strong>Catedral Metropolitana</strong>.</p>
  </section>

  <!-- COFRADIAS -->
  <section id="cofradias" class="mb-12">
    <h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Die Cofradías und ihre Farben</h2>

    <p class="text-gray-700 mb-6">An der Prozession nehmen <strong>32 cofradías (Bruderschaften)</strong> mit rund <strong>4.000 Teilnehmern</strong> teil, darunter Männer, Frauen, Kinder, Studierende und Freiwillige. Jede cofradía ist an den Farben ihrer Gewänder und capuchas zu erkennen:</p>

    <div class="not-prose my-8 grid grid-cols-2 md:grid-cols-3 gap-4">
      <div class="bg-gray-900 text-white p-4 rounded-xl text-center">
        <div class="text-2xl mb-2">⬛</div>
        <p class="font-semibold">Negro y Oro</p>
        <p class="text-xs text-gray-300">Schwarz & Gold</p>
      </div>
      <div class="bg-white border-2 border-purple-300 p-4 rounded-xl text-center">
        <div class="text-2xl mb-2">🤍</div>
        <p class="font-semibold text-gray-900">Blanco y Morado</p>
        <p class="text-xs text-gray-500">Weiß & Violett</p>
      </div>
      <div class="bg-gray-200 p-4 rounded-xl text-center">
        <div class="text-2xl mb-2">🔴</div>
        <p class="font-semibold text-gray-900">Gris y Rojo</p>
        <p class="text-xs text-gray-500">Grau & Rot</p>
      </div>
      <div class="bg-blue-100 border-2 border-blue-300 p-4 rounded-xl text-center">
        <div class="text-2xl mb-2">🔵</div>
        <p class="font-semibold text-gray-900">Blanco y Azul</p>
        <p class="text-xs text-gray-500">Weiß & Blau</p>
      </div>
      <div class="bg-yellow-100 border-2 border-yellow-300 p-4 rounded-xl text-center">
        <div class="text-2xl mb-2">🟡</div>
        <p class="font-semibold text-gray-900">Amarillo y Rojo</p>
        <p class="text-xs text-gray-500">Gelb & Rot</p>
      </div>
      <div class="bg-red-50 border-2 border-red-300 p-4 rounded-xl text-center">
        <div class="text-2xl mb-2">🍷</div>
        <p class="font-semibold text-gray-900">Vino y Oro</p>
        <p class="text-xs text-gray-500">Weinrot & Gold</p>
      </div>
    </div>
  </section>

  <!-- TICKETS -->
  <section id="tickets" class="mb-12">
    <h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Tickets, Sitzplätze & Preise</h2>

    <p class="text-gray-700 mb-4">Sie können die Prozession von vielen Aussichtspunkten entlang der Route kostenlos verfolgen, für ein besseres Erlebnis stehen jedoch in ausgewiesenen Zonen <strong>reservierte Sitzplätze</strong> zur Verfügung.</p>

    <div class="overflow-x-auto mb-6">
      <table class="min-w-full bg-white border border-gray-200 rounded-lg">
        <thead class="bg-purple-600 text-white">
          <tr>
            <th class="px-6 py-3 text-left font-semibold">Zone</th>
            <th class="px-6 py-3 text-left font-semibold">Preis (MXN)</th>
            <th class="px-6 py-3 text-left font-semibold">Preis (USD ca.)</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
          <tr class="hover:bg-gray-50"><td class="px-6 py-4 font-medium">Blanca A / AA (Premium)</td><td class="px-6 py-4">$297</td><td class="px-6 py-4">~$17</td></tr>
          <tr class="hover:bg-gray-50"><td class="px-6 py-4 font-medium">Verde B / BB</td><td class="px-6 py-4">$187</td><td class="px-6 py-4">~$11</td></tr>
          <tr class="hover:bg-gray-50"><td class="px-6 py-4 font-medium">Morada, Rosa, Limón, Azul, Roja, Amarilla, Naranja</td><td class="px-6 py-4">$132</td><td class="px-6 py-4">~$8</td></tr>
          <tr class="hover:bg-gray-50"><td class="px-6 py-4 font-medium">Independencia 1 & 2 (Economy)</td><td class="px-6 py-4">$77</td><td class="px-6 py-4">~$4.50</td></tr>
          <tr class="hover:bg-gray-50"><td class="px-6 py-4 font-medium">Stehplatz (entlang der Route)</td><td class="px-6 py-4 text-green-600 font-bold">Kostenlos</td><td class="px-6 py-4 text-green-600 font-bold">Kostenlos</td></tr>
        </tbody>
      </table>
    </div>

    <h3 class="text-xl font-semibold mb-3 text-gray-900">Wo Sie Tickets kaufen können</h3>
    <ul class="list-disc pl-6 text-gray-700 mb-6">
      <li><strong>Innova Sport</strong>-Filialen in San Luis Potosí</li>
      <li>Kasse des <strong>Teatro de la Paz</strong> (Centro Histórico)</li>
      <li>Kasse der <strong>Arena Potosí</strong></li>
      <li><strong>Online:</strong> <a href="https://www.superboletos.com" target="_blank" class="text-blue-600 hover:text-blue-800 underline">superboletos.com</a></li>
    </ul>
  </section>

  <!-- TIPS -->
  <section id="tips" class="mb-12">
    <h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Tipps für den Besuch</h2>

    <div class="space-y-4">
      <div class="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg">
        <p class="text-purple-800"><strong>Früh kommen:</strong> Die besten Plätze sind schon Stunden vor dem Beginn um 20:00 Uhr belegt. Planen Sie, bis 17:00–18:00 Uhr da zu sein, um sich einen guten Aussichtspunkt zu sichern. Mit reserviertem Sitzplatz sollten Sie mindestens 1 Stunde früher eintreffen.</p>
      </div>
      <div class="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
        <p class="text-blue-800"><strong>Die Stille respektieren:</strong> Dies ist ein feierliches religiöses Ereignis. Von den Zuschauern wird Stille erwartet. Vermeiden Sie lautes Sprechen, Musik oder unnötigen Lärm. Fotografieren ist erlaubt, halten Sie Blitz und Auslösergeräusche jedoch auf ein Minimum.</p>
      </div>
      <div class="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
        <p class="text-green-800"><strong>Bequem anziehen:</strong> Sie werden über 4 Stunden stehen oder sitzen. Tragen Sie bequeme Schuhe und nehmen Sie eine leichte Jacke mit — die Abende im April können in SLP kühl sein (15–18 °C / 59–64 °F).</p>
      </div>
      <div class="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
        <p class="text-amber-800"><strong>Anfahrt:</strong> Straßensperrungen beginnen Stunden vor der Veranstaltung. Nehmen Sie frühzeitig Uber/DiDi in den Bereich des Centro oder parken Sie auf Parkplätzen nahe dem Alameda-Park. Rechnen Sie nicht damit, nach 18:00 Uhr noch in der Nähe der Route fahren zu können.</p>
      </div>
      <div class="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
        <p class="text-red-800"><strong>Hotels sind schnell ausgebucht:</strong> Die Hotels im Centro Histórico sind für dieses Wochenende Wochen im Voraus ausgebucht. Wenn Sie von auswärts anreisen, buchen Sie Ihre Unterkunft so früh wie möglich.</p>
      </div>
    </div>
  </section>

  <!-- FAQ -->
  <section id="faq" class="mb-12">
    <h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Häufig gestellte Fragen</h2>

    <div class="space-y-6">
      <div class="bg-white border-2 border-gray-200 rounded-xl p-6">
        <h4 class="text-lg font-bold text-gray-900 mb-2">Ist der Besuch der Procesión del Silencio kostenlos?</h4>
        <p class="text-gray-700">Von vielen Punkten entlang der Route können Sie kostenlos zusehen. Reservierte Sitzplätze kosten je nach Zone $77–$297 MXN ($4,50–$17 USD).</p>
      </div>
      <div class="bg-white border-2 border-gray-200 rounded-xl p-6">
        <h4 class="text-lg font-bold text-gray-900 mb-2">Ist sie für Kinder geeignet?</h4>
        <p class="text-gray-700">Ja, Familien mit Kindern nehmen regelmäßig teil. Bedenken Sie jedoch, dass sie um 20:00 Uhr beginnt und etwa 4 Stunden dauert. Die Atmosphäre ist feierlich, aber nicht beängstigend — auch Kinder gehören zu den Teilnehmern.</p>
      </div>
      <div class="bg-white border-2 border-gray-200 rounded-xl p-6">
        <h4 class="text-lg font-bold text-gray-900 mb-2">Darf ich Fotos und Videos machen?</h4>
        <p class="text-gray-700">Ja, Foto- und Videoaufnahmen sind erlaubt. Seien Sie jedoch respektvoll — vermeiden Sie übermäßigen Blitzeinsatz und halten Sie Geräusche auf ein Minimum. Der Einsatz von Drohnen ist eingeschränkt.</p>
      </div>
      <div class="bg-white border-2 border-gray-200 rounded-xl p-6">
        <h4 class="text-lg font-bold text-gray-900 mb-2">Wo ist der beste Platz zum Zuschauen?</h4>
        <p class="text-gray-700">Für kostenloses Zuschauen bieten die Bereiche rund um die Plaza de Armas und entlang der Av. Carranza einige der besten Aussichtspunkte. Für garantierte Sicht kaufen Sie einen reservierten Sitzplatz in den Zonen Blanca oder Verde.</p>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <div class="not-prose mt-12 bg-gradient-to-r from-purple-50 to-indigo-50 border-2 border-purple-300 p-8 rounded-2xl shadow-xl">
    <h3 class="text-3xl font-bold text-gray-900 mb-4">Erleben Sie San Luis Potosí in dieser Semana Santa</h3>
    <p class="text-lg text-gray-700 mb-6">Die Procesión del Silencio ist nur eine von über 100 kulturellen Aktivitäten, die während der Semana Santa 2026 in San Luis Potosí stattfinden.</p>
    <div class="flex flex-col sm:flex-row gap-4">
      <a href="/blog/semana-santa-san-luis-potosi-2026-guia-completa" class="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold px-8 py-4 rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all shadow-lg text-center">Vollständiger Semana-Santa-Leitfaden →</a>
      <a href="/blog" class="inline-flex items-center justify-center gap-2 bg-white border-2 border-purple-600 text-purple-700 font-semibold px-8 py-4 rounded-lg hover:bg-purple-50 transition-all text-center">Weitere SLP-Leitfäden →</a>
    </div>
  </div>

</div>
`;

const contentJa = `<div class="prose prose-lg max-w-none">

  <!-- TABLE OF CONTENTS -->
  <div class="bg-yellow-50 p-6 rounded-lg mb-8">
    <h2 class="text-xl font-semibold mb-4">本ガイドの内容</h2>
    <ul class="list-disc pl-6">
      <li><a href="#what-is" class="text-blue-600 hover:text-blue-800">Procesión del Silencio とは？</a></li>
      <li><a href="#history" class="text-blue-600 hover:text-blue-800">歴史：セビリアから San Luis Potosí へ</a></li>
      <li><a href="#2026-details" class="text-blue-600 hover:text-blue-800">2026年版：日程・時間・ルート</a></li>
      <li><a href="#cofradias" class="text-blue-600 hover:text-blue-800">cofradías とその色</a></li>
      <li><a href="#tickets" class="text-blue-600 hover:text-blue-800">チケット・座席・料金</a></li>
      <li><a href="#tips" class="text-blue-600 hover:text-blue-800">参加のためのヒント</a></li>
      <li><a href="#faq" class="text-blue-600 hover:text-blue-800">よくある質問</a></li>
    </ul>
  </div>

  <!-- INTRO -->
  <p class="text-lg text-gray-700 mb-8">
    <strong>Procesión del Silencio（沈黙の行列）は、メキシコ全土でもっとも荘厳で視覚的に印象的な宗教行事のひとつです。</strong>毎年の聖金曜日（Viernes Santo）、頭巾をかぶった何千人もの苦行者が、太鼓の厳かな響きとトランペットの音だけを伴い、完全な沈黙のなかで San Luis Potosí の歴史地区の街路を練り歩きます。2026年、この第73回開催には、メキシコ各地および世界中から10万人を超える観客が訪れると見込まれています。
  </p>

  <!-- WHAT IS -->
  <section id="what-is" class="mb-12">
    <h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">Procesión del Silencio とは？</h2>

    <p class="text-gray-700 mb-4">Procesión del Silencio は、約<strong>4,000人の参加者</strong>が — <strong>32の cofradías（兄弟団）</strong>に編成され — San Luis Potosí の歴史地区を3.5キロメートルにわたって歩く、荘厳な聖金曜日の行列です。参加者は色とりどりのチュニックと、顔を覆い目だけをのぞかせるとがった capuchas（頭巾）を身につけます。</p>

    <p class="text-gray-700 mb-4">行列は<strong>完全な沈黙</strong>のなかで行われます。会話はなく、太鼓とトランペット以外の音楽もありません。観客にも敬意を込めた沈黙を保つことが求められます。聞こえるのは歩調を刻む太鼓の律動的な響きだけで、深い荘厳さに満ちた雰囲気をつくり出します。</p>

    <div class="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg mb-6">
      <p class="text-blue-800"><strong>文化遺産：</strong>2013年、Procesión del Silencio は正式に<strong>San Luis Potosí 州の文化遺産</strong>に指定され、この地域における歴史的・精神的な意義が認められました。</p>
    </div>
  </section>

  <!-- HISTORY -->
  <section id="history" class="mb-12">
    <h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">歴史：セビリアから San Luis Potosí へ</h2>

    <p class="text-gray-700 mb-4">Procesión del Silencio は<strong>1954年</strong>、<strong>モンシニョール Joaquín Antonio Peñalosa Santillán</strong>によって正式に創設されました。<strong>スペインのセビリア</strong>で行われる有名な聖週間の行列に着想を得たものです。San Luis Potosí を代表する詩人・司祭・文化人であった Peñalosa は、この荘厳なスペインの伝統をメキシコにもたらすことを構想しました。</p>

    <p class="text-gray-700 mb-4">ささやかな宗教的行事として始まったものは、いまやメキシコでもっとも象徴的な文化イベントのひとつへと成長し、国内外の注目を集めています。この行列は、1592年に植民地時代の鉱山都市として創設されて以来 San Luis Potosí を形づくってきた、深く根ざしたカトリックの伝統を映し出しています。</p>

    <div class="not-prose my-8 bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden">
      <div class="bg-gray-100 px-6 py-4">
        <h3 class="font-bold text-gray-900">歴史上の主な節目</h3>
      </div>
      <div class="p-6">
        <div class="space-y-4">
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-20 text-right font-bold text-blue-700">1954</div>
            <p class="text-gray-700">第1回 Procesión del Silencio、モンシニョール Peñalosa により創設</p>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-20 text-right font-bold text-blue-700">1960年代</div>
            <p class="text-gray-700">行列が拡大し、さらに多くの cofradías が加わる</p>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-20 text-right font-bold text-blue-700">2013</div>
            <p class="text-gray-700">San Luis Potosí 州の文化遺産に指定</p>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-20 text-right font-bold text-blue-700">2026</div>
            <p class="text-gray-700">第73回開催、4,000人以上の参加者、10万人以上の来場見込み</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 2026 DETAILS -->
  <section id="2026-details" class="mb-12">
    <h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">2026年版：日程・時間・ルート</h2>

    <div class="not-prose my-8 bg-gradient-to-br from-purple-50 to-indigo-50 border-2 border-purple-200 rounded-2xl overflow-hidden shadow-lg">
      <div class="bg-purple-700 px-8 py-4">
        <h3 class="text-2xl font-bold text-white">Procesión del Silencio 2026</h3>
      </div>
      <div class="p-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p class="text-sm text-gray-500 uppercase tracking-wider mb-1">日程</p>
            <p class="text-xl font-bold text-gray-900">2026年4月3日（金）</p>
          </div>
          <div>
            <p class="text-sm text-gray-500 uppercase tracking-wider mb-1">開始時間</p>
            <p class="text-xl font-bold text-gray-900">午後8:00（20:00）</p>
          </div>
          <div>
            <p class="text-sm text-gray-500 uppercase tracking-wider mb-1">所要時間</p>
            <p class="text-xl font-bold text-gray-900">約4時間</p>
          </div>
          <div>
            <p class="text-sm text-gray-500 uppercase tracking-wider mb-1">出発地点</p>
            <p class="text-xl font-bold text-gray-900">Templo del Carmen</p>
          </div>
          <div>
            <p class="text-sm text-gray-500 uppercase tracking-wider mb-1">距離</p>
            <p class="text-xl font-bold text-gray-900">Centro Histórico を通る3.5 km</p>
          </div>
          <div>
            <p class="text-sm text-gray-500 uppercase tracking-wider mb-1">予想来場者数</p>
            <p class="text-xl font-bold text-gray-900">10万〜12万人</p>
          </div>
        </div>
      </div>
    </div>

    <h3 class="text-2xl font-semibold mb-4 text-gray-900">公式ルート</h3>
    <p class="text-gray-700 mb-4">行列は<strong>Templo del Carmen</strong>を出発し、歴史地区の中心部を次の街路に沿って進みます：</p>

    <div class="not-prose my-6 flex flex-wrap gap-3">
      <div class="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-semibold text-sm">1. Templo del Carmen（出発）</div>
      <div class="text-gray-400 self-center">→</div>
      <div class="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-semibold text-sm">2. Calle Universidad</div>
      <div class="text-gray-400 self-center">→</div>
      <div class="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-semibold text-sm">3. Calle Aldama</div>
      <div class="text-gray-400 self-center">→</div>
      <div class="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-semibold text-sm">4. Manuel José Othón</div>
      <div class="text-gray-400 self-center">→</div>
      <div class="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-semibold text-sm">5. Independencia</div>
      <div class="text-gray-400 self-center">→</div>
      <div class="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-semibold text-sm">6. Av. V. Carranza</div>
    </div>

    <p class="text-gray-700 mb-4">ルート沿いには、<strong>Museo Nacional de la Máscara</strong>、Plaza de Armas にある<strong>Palacio de Gobierno</strong>、<strong>Catedral Metropolitana</strong> などの象徴的な名所があります。</p>
  </section>

  <!-- COFRADIAS -->
  <section id="cofradias" class="mb-12">
    <h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">cofradías とその色</h2>

    <p class="text-gray-700 mb-6">行列には約<strong>4,000人の参加者</strong>から成る<strong>32の cofradías（兄弟団）</strong>が参加し、男性、女性、子ども、学生、ボランティアが含まれます。各 cofradía は、チュニックと capuchas の色によって見分けられます：</p>

    <div class="not-prose my-8 grid grid-cols-2 md:grid-cols-3 gap-4">
      <div class="bg-gray-900 text-white p-4 rounded-xl text-center">
        <div class="text-2xl mb-2">⬛</div>
        <p class="font-semibold">Negro y Oro</p>
        <p class="text-xs text-gray-300">黒と金</p>
      </div>
      <div class="bg-white border-2 border-purple-300 p-4 rounded-xl text-center">
        <div class="text-2xl mb-2">🤍</div>
        <p class="font-semibold text-gray-900">Blanco y Morado</p>
        <p class="text-xs text-gray-500">白と紫</p>
      </div>
      <div class="bg-gray-200 p-4 rounded-xl text-center">
        <div class="text-2xl mb-2">🔴</div>
        <p class="font-semibold text-gray-900">Gris y Rojo</p>
        <p class="text-xs text-gray-500">灰と赤</p>
      </div>
      <div class="bg-blue-100 border-2 border-blue-300 p-4 rounded-xl text-center">
        <div class="text-2xl mb-2">🔵</div>
        <p class="font-semibold text-gray-900">Blanco y Azul</p>
        <p class="text-xs text-gray-500">白と青</p>
      </div>
      <div class="bg-yellow-100 border-2 border-yellow-300 p-4 rounded-xl text-center">
        <div class="text-2xl mb-2">🟡</div>
        <p class="font-semibold text-gray-900">Amarillo y Rojo</p>
        <p class="text-xs text-gray-500">黄と赤</p>
      </div>
      <div class="bg-red-50 border-2 border-red-300 p-4 rounded-xl text-center">
        <div class="text-2xl mb-2">🍷</div>
        <p class="font-semibold text-gray-900">Vino y Oro</p>
        <p class="text-xs text-gray-500">ワインレッドと金</p>
      </div>
    </div>
  </section>

  <!-- TICKETS -->
  <section id="tickets" class="mb-12">
    <h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">チケット・座席・料金</h2>

    <p class="text-gray-700 mb-4">ルート沿いの多くの見晴らしの良い場所から行列を無料で見ることができますが、より良い観覧のために、指定されたゾーンには<strong>予約席</strong>も用意されています。</p>

    <div class="overflow-x-auto mb-6">
      <table class="min-w-full bg-white border border-gray-200 rounded-lg">
        <thead class="bg-purple-600 text-white">
          <tr>
            <th class="px-6 py-3 text-left font-semibold">ゾーン</th>
            <th class="px-6 py-3 text-left font-semibold">料金（MXN）</th>
            <th class="px-6 py-3 text-left font-semibold">料金（USD 概算）</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
          <tr class="hover:bg-gray-50"><td class="px-6 py-4 font-medium">Blanca A / AA（プレミアム）</td><td class="px-6 py-4">$297</td><td class="px-6 py-4">~$17</td></tr>
          <tr class="hover:bg-gray-50"><td class="px-6 py-4 font-medium">Verde B / BB</td><td class="px-6 py-4">$187</td><td class="px-6 py-4">~$11</td></tr>
          <tr class="hover:bg-gray-50"><td class="px-6 py-4 font-medium">Morada, Rosa, Limón, Azul, Roja, Amarilla, Naranja</td><td class="px-6 py-4">$132</td><td class="px-6 py-4">~$8</td></tr>
          <tr class="hover:bg-gray-50"><td class="px-6 py-4 font-medium">Independencia 1 & 2（エコノミー）</td><td class="px-6 py-4">$77</td><td class="px-6 py-4">~$4.50</td></tr>
          <tr class="hover:bg-gray-50"><td class="px-6 py-4 font-medium">立ち見（ルート沿い）</td><td class="px-6 py-4 text-green-600 font-bold">無料</td><td class="px-6 py-4 text-green-600 font-bold">無料</td></tr>
        </tbody>
      </table>
    </div>

    <h3 class="text-xl font-semibold mb-3 text-gray-900">チケットの購入場所</h3>
    <ul class="list-disc pl-6 text-gray-700 mb-6">
      <li>San Luis Potosí の<strong>Innova Sport</strong>店舗</li>
      <li><strong>Teatro de la Paz</strong> のチケット売り場（Centro Histórico）</li>
      <li><strong>Arena Potosí</strong> のチケット売り場</li>
      <li><strong>オンライン：</strong> <a href="https://www.superboletos.com" target="_blank" class="text-blue-600 hover:text-blue-800 underline">superboletos.com</a></li>
    </ul>
  </section>

  <!-- TIPS -->
  <section id="tips" class="mb-12">
    <h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">参加のためのヒント</h2>

    <div class="space-y-4">
      <div class="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg">
        <p class="text-purple-800"><strong>早めに到着を：</strong>良い場所は午後8時の開始の数時間前には埋まってしまいます。良い観覧地点を確保するには、午後5〜6時までに到着する計画を立てましょう。予約席がある場合でも、少なくとも1時間前には到着してください。</p>
      </div>
      <div class="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
        <p class="text-blue-800"><strong>沈黙を尊重して：</strong>これは荘厳な宗教行事です。観客には沈黙が求められます。大声での会話、音楽、不要な物音は控えてください。写真撮影は許可されていますが、フラッシュやシャッター音は最小限にしてください。</p>
      </div>
      <div class="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
        <p class="text-green-800"><strong>動きやすい服装で：</strong>4時間以上立ち、または座って過ごすことになります。歩きやすい靴を履き、薄手の上着を持参してください。SLP の4月の夜は肌寒くなることがあります（15〜18°C / 59〜64°F）。</p>
      </div>
      <div class="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
        <p class="text-amber-800"><strong>交通：</strong>道路の封鎖はイベントの数時間前に始まります。早めに Uber／DiDi で Centro 地区へ向かうか、Alameda 公園近くの駐車場に停めてください。午後6時以降にルート付近を車で走行できるとは考えないでください。</p>
      </div>
      <div class="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
        <p class="text-red-800"><strong>ホテルはすぐに埋まります：</strong>この週末、Centro Histórico のホテルは数週間前に満室となります。遠方から訪れる場合は、できるだけ早く宿泊先を予約してください。</p>
      </div>
    </div>
  </section>

  <!-- FAQ -->
  <section id="faq" class="mb-12">
    <h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">よくある質問</h2>

    <div class="space-y-6">
      <div class="bg-white border-2 border-gray-200 rounded-xl p-6">
        <h4 class="text-lg font-bold text-gray-900 mb-2">Procesión del Silencio の観覧は無料ですか？</h4>
        <p class="text-gray-700">ルート沿いの多くの地点から無料で見ることができます。予約席はゾーンに応じて $77〜$297 MXN（$4.50〜$17 USD）です。</p>
      </div>
      <div class="bg-white border-2 border-gray-200 rounded-xl p-6">
        <h4 class="text-lg font-bold text-gray-900 mb-2">子ども連れでも楽しめますか？</h4>
        <p class="text-gray-700">はい、子ども連れの家族も日常的に参加しています。ただし、午後8時に始まり約4時間続くことにご留意ください。雰囲気は荘厳ですが、恐ろしいものではありません。子どもたちも参加者に含まれています。</p>
      </div>
      <div class="bg-white border-2 border-gray-200 rounded-xl p-6">
        <h4 class="text-lg font-bold text-gray-900 mb-2">写真や動画を撮ってもよいですか？</h4>
        <p class="text-gray-700">はい、写真および動画の撮影は許可されています。ただし、敬意を払い、フラッシュの多用は避け、物音は最小限にしてください。ドローンの使用は制限されています。</p>
      </div>
      <div class="bg-white border-2 border-gray-200 rounded-xl p-6">
        <h4 class="text-lg font-bold text-gray-900 mb-2">観覧に最適な場所はどこですか？</h4>
        <p class="text-gray-700">無料での観覧なら、Plaza de Armas 周辺や Av. Carranza 沿いが最も見晴らしの良い場所のひとつです。確実に見たい場合は、Blanca または Verde ゾーンの予約席をご購入ください。</p>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <div class="not-prose mt-12 bg-gradient-to-r from-purple-50 to-indigo-50 border-2 border-purple-300 p-8 rounded-2xl shadow-xl">
    <h3 class="text-3xl font-bold text-gray-900 mb-4">この Semana Santa に San Luis Potosí を体験しませんか</h3>
    <p class="text-lg text-gray-700 mb-6">Procesión del Silencio は、2026年の Semana Santa に San Luis Potosí で行われる100を超える文化行事のひとつにすぎません。</p>
    <div class="flex flex-col sm:flex-row gap-4">
      <a href="/blog/semana-santa-san-luis-potosi-2026-guia-completa" class="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold px-8 py-4 rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all shadow-lg text-center">Semana Santa 完全ガイド →</a>
      <a href="/blog" class="inline-flex items-center justify-center gap-2 bg-white border-2 border-purple-600 text-purple-700 font-semibold px-8 py-4 rounded-lg hover:bg-purple-50 transition-all text-center">その他の SLP ガイド →</a>
    </div>
  </div>

</div>
`;

async function main() {
  const { error } = await supabase
    .from('blog_posts')
    .update({ content_de: contentDe, content_ja: contentJa })
    .eq('slug', SLUG);
  if (error) {
    console.error('Update failed:', error);
    process.exit(1);
  }

  const { data, error: refetchError } = await supabase
    .from('blog_posts')
    .select('content, content_de, content_ja')
    .eq('slug', SLUG)
    .single();
  if (refetchError) {
    console.error('Refetch failed:', refetchError);
    process.exit(1);
  }

  const tagCount = (s) => (s.match(/<[^>]+>/g) || []).length;
  const hrefs = (s) => (s.match(/href="[^"]*"/g) || []).sort();
  const eq = (a, b) => JSON.stringify(a) === JSON.stringify(b);

  console.log('EN tags:', tagCount(data.content));
  console.log('DE tags:', tagCount(data.content_de));
  console.log('JA tags:', tagCount(data.content_ja));
  console.log('DE differs from EN:', data.content_de !== data.content);
  console.log('JA differs from EN:', data.content_ja !== data.content);
  console.log('DE hrefs match EN:', eq(hrefs(data.content_de), hrefs(data.content)));
  console.log('JA hrefs match EN:', eq(hrefs(data.content_ja), hrefs(data.content)));

  // Leftover English check (words that must not survive translation).
  const leftover = /\b(procession|silence|penitents|brotherhoods|Friday|hours|Free|Tickets|History|Guide|attend)\b/g;
  console.log('DE leftover EN hits:', (data.content_de.match(leftover) || []));
  console.log('JA leftover EN hits:', (data.content_ja.match(leftover) || []));
}

main();
