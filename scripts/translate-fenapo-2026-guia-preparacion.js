// Native German + Japanese translations of the FENAPO 2026 preparation-guide
// blog post. Replaces the English-mirror content_de/content_ja with real
// translations. Idempotent: re-running sets the same values. Verifies by
// re-fetching. Client per apply-factcheck-corrections-2026-07.js.
require('dotenv').config({ path: '.env' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const SLUG = 'fenapo-2026-guia-preparacion';

const CONTENT_DE = `<script type="application/ld+json">{"@context":"https://schema.org","@graph":[{"@type":"Event","@id":"https://www.sanluisway.com/blog/fenapo-2026-guia-preparacion#event","name":"FENAPO 2026 — Feria Nacional Potosina","startDate":"2026-08-01","endDate":"2026-08-31","location":{"@type":"Place","name":"Recinto Ferial FENAPO","address":{"@type":"PostalAddress","streetAddress":"Av. Fco. Martínez de la Vega No. 255","addressLocality":"San Luis Potosí","addressRegion":"SLP","addressCountry":"MX"}},"organizer":{"@type":"Organization","name":"Gobierno de San Luis Potosí"},"isAccessibleForFree":true,"eventStatus":"https://schema.org/EventScheduled","url":"https://www.sanluisway.com/events/fenapo-2026"},{"@type":"HowTo","@id":"https://www.sanluisway.com/blog/fenapo-2026-guia-preparacion#howto","name":"So bereiten Sie sich auf die FENAPO 2026 vor","description":"Schritt-für-Schritt-Anleitung zur Planung Ihres Besuchs der FENAPO 2026: Hotels, Budget, Anreise, Pre-FENAPO-Events.","totalTime":"P4M","step":[{"@type":"HowToStep","position":1,"name":"Unterkunft buchen (April–Mai)","text":"Reservieren Sie Ihr Hotel 3–4 Monate vor August. Die FENAPO treibt die lokale Hotelauslastung über 90 %. Beste Zonen: Zona Industrial (am nächsten), Centro Histórico (Nachtleben), Lomas (Kettenhotels)."},{"@type":"HowToStep","position":2,"name":"Ein Pre-FENAPO-Event besuchen (April–Mai)","text":"Besuchen Sie das Recinto Ferial während eines Pre-FENAPO-Events, um das Gelände, das Parken und die Anreise vor dem großen Andrang kennenzulernen."},{"@type":"HowToStep","position":3,"name":"Ticket-Alerts für den Palenque einrichten (Juni)","text":"Fügen Sie fenapo.mx und eticket.mx zu Ihren Lesezeichen hinzu. Palenque-Tickets für Grupo Firme, Gloria Trevi und Edén Muñoz sind im Vorverkauf meist schnell ausverkauft."},{"@type":"HowToStep","position":4,"name":"Tagesbudget planen (Juli)","text":"Rechnen Sie mit $500–$1,500 MXN pro Tag und Person, je nachdem, ob Sie Palenque-Tickets kaufen. Die Konzerte im Teatro del Pueblo, das Parken und die Fahrgeschäfte sind dieses Jahr kostenlos."},{"@type":"HowToStep","position":5,"name":"Packen und Anreise bestätigen (Ende Juli)","text":"Leichte Schichten für heiße Nachmittage und kühle Nächte (Höhe 1,864m). Bequeme Schuhe. Sonnencreme. Prüfen Sie, ob Uber/DiDi auf Ihrem Handy funktioniert, falls Sie aus dem Ausland kommen."}]},{"@type":"FAQPage","@id":"https://www.sanluisway.com/blog/fenapo-2026-guia-preparacion#faq","mainEntity":[{"@type":"Question","name":"Wann sollte ich mein Hotel für die FENAPO 2026 buchen?","acceptedAnswer":{"@type":"Answer","text":"Zwischen April und Mai 2026. Die Hotelauslastung liegt im August über 90 %. Bis Juli zu warten bedeutet, dynamische Preise von bis zum Doppelten des Normalen zu zahlen oder keine Verfügbarkeit in der Nähe des Geländes zu finden."}},{"@type":"Question","name":"Wie hoch ist das empfohlene Tagesbudget?","acceptedAnswer":{"@type":"Answer","text":"Zwischen $500 und $1,500 MXN pro Person und Tag (25–75 USD), je nachdem, ob Sie den Palenque besuchen (separates Ticket). Der Eintritt zur Feria, die Fahrgeschäfte, das Parken und das Teatro del Pueblo sind 2026 kostenlos."}},{"@type":"Question","name":"Was sollte ich einpacken?","acceptedAnswer":{"@type":"Answer","text":"Leichte Schichten (heißer Nachmittag, kalte Nacht wegen der Höhe von 1,864m), bequeme Schuhe zum langen Gehen, Sonnencreme, eine Kappe, eine wiederverwendbare Wasserflasche. Bargeld für kleine Händler — viele akzeptieren keine Karte."}},{"@type":"Question","name":"Woran erkenne ich, wann die genauen Termine der einzelnen Konzerte veröffentlicht werden?","acceptedAnswer":{"@type":"Answer","text":"Die Regierung gibt sie in Wellen von April bis Juli bekannt. Folgen Sie fenapo.slp.gob.mx und den offiziellen Kanälen von @ferianacionalpotosina; wir aktualisieren diesen Leitfaden jedes Mal, wenn ein neuer Künstler oder ein Termin bestätigt wird."}},{"@type":"Question","name":"Was ist, wenn ich mit Kindern reise?","acceptedAnswer":{"@type":"Answer","text":"Die FENAPO ist sehr familienfreundlich. Es gibt einen Kinderbereich, kostenlose Fahrgeschäfte und kulturelle Shows. Bringen Sie Gehörschutz für Kinder mit, wenn Sie zum Teatro del Pueblo gehen — die Lautstärke ist hoch. Meiden Sie Wochenenden nach 8 PM, wenn die Kinder klein sind: Die Menschenmenge verdoppelt sich."}},{"@type":"Question","name":"Kann ich alleine gehen?","acceptedAnswer":{"@type":"Answer","text":"Ja, es ist sicher. Das Gelände ist stark bewacht. Wenn Sie allein reisen, bevorzugen Sie Tageszeiten für die Fahrgeschäfte und das Teatro del Pueblo und nutzen Sie Uber/DiDi für die Rückfahrt bei Nacht. Die Palenques bieten eine großartige Atmosphäre, um mit einer Gruppe hinzugehen."}},{"@type":"Question","name":"Wann wird das zu 100 % bestätigte Line-up veröffentlicht?","acceptedAnswer":{"@type":"Answer","text":"Die letzten Künstler (2 internationale für das Teatro del Pueblo) werden typischerweise zwischen Mai und Juli bekannt gegeben. Sobald das Line-up zu 100 % bestätigt ist, veröffentlichen wir eine zweite ausführliche Analyse, die sich ausschließlich den Künstlern und ihren Terminen widmet."}}]},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Startseite","item":"https://www.sanluisway.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.sanluisway.com/blog"},{"@type":"ListItem","position":3,"name":"FENAPO 2026 Vorbereitungsleitfaden","item":"https://www.sanluisway.com/blog/fenapo-2026-guia-preparacion"}]},{"@type":"Article","@id":"https://www.sanluisway.com/blog/fenapo-2026-guia-preparacion#article","headline":"FENAPO 2026 Vorbereitungsleitfaden — So planen Sie Ihren Besuch vor August","datePublished":"2026-04-18","dateModified":"2026-04-18","author":{"@type":"Organization","name":"San Luis Way","url":"https://www.sanluisway.com"},"publisher":{"@type":"Organization","name":"San Luis Way","url":"https://www.sanluisway.com"},"speakable":{"@type":"SpeakableSpecification","cssSelector":[".speakable","#quick-summary","#faq-heading"]},"citation":[{"@type":"CreativeWork","name":"Gobierno SLP — FENAPO oficial","url":"https://fenapo.slp.gob.mx/"},{"@type":"CreativeWork","name":"Feria FENAPO","url":"https://www.feriafenapo.com/"},{"@type":"CreativeWork","name":"Noticieros SLP","url":"https://noticierosslp.com/2026/03/05/fenapo-perfila-cartelera-completa-palenque-listo-y-teatro-del-pueblo-casi-definido/"}]}]}</script>
<div class="not-prose mb-8">
  <div class="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl mb-8">
    <img src="https://omxporaecrqsqhzjzvnx.supabase.co/storage/v1/object/public/blog-images/posts/fenapo-2026-cartel-guia-completa-hero.png" alt="Menschenmenge im Teatro del Pueblo der FENAPO während eines Nachtkonzerts" class="w-full h-full object-cover" loading="eager" />
    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
      <div class="p-6 md:p-10">
        <h1 class="text-3xl md:text-5xl font-bold text-white mb-3">FENAPO 2026 Vorbereitungsleitfaden</h1>
        <p class="text-lg md:text-xl text-white/90">Weniger als 4 Monate bis dahin. Das sollten Sie jetzt tun, um stressfrei und mit den besten Plätzen anzukommen.</p>
      </div>
    </div>
  </div>
</div>

<div class="bg-purple-50 border border-purple-100 p-6 rounded-xl mb-8">
  <h3 class="text-xl font-bold mb-3 text-purple-900">📑 In diesem Vorbereitungsleitfaden</h3>
  <nav class="grid grid-cols-1 md:grid-cols-2 gap-2 text-purple-800">
    <a href="#overview" class="hover:underline">→ FENAPO 2026 auf einen Blick</a>
    <a href="#timeline" class="hover:underline">→ Monat-für-Monat-Checkliste</a>
    <a href="#hospedaje" class="hover:underline">→ Unterkunft: jetzt buchen</a>
    <a href="#boletos" class="hover:underline">→ Ticketstrategie</a>
    <a href="#presupuesto" class="hover:underline">→ Tagesbudget</a>
    <a href="#transporte" class="hover:underline">→ Anreise</a>
    <a href="#empacar" class="hover:underline">→ Was einpacken</a>
    <a href="#pre-fenapo" class="hover:underline">→ Pre-FENAPO: Probelauf</a>
    <a href="#cartel-actual" class="hover:underline">→ Line-up-Status (April)</a>
    <a href="#tips-foraneos" class="hover:underline">→ Wenn Sie von auswärts anreisen</a>
    <a href="#faq" class="hover:underline">→ FAQ</a>
    <a href="#fuentes" class="hover:underline">→ Quellen</a>
  </nav>
  <p class="mt-4 text-sm text-purple-700 italic">Lesezeit: 14 Minuten · Zuletzt aktualisiert: 18. April 2026</p>
</div>

<p class="text-xl leading-relaxed text-gray-800 mb-8 font-medium">
  <strong>Die FENAPO 2026 findet im August statt. Heute ist der 18. April.</strong> Dieses Vier-Monats-Fenster ist genau die optimale Zeit, um stressfrei zu planen: die Unterkunft zu buchen, bevor die Preise steigen, die Line-up-Ankündigungen zu verfolgen, sobald sie erscheinen, und das Gelände bei einem Pre-FENAPO-Event kennenzulernen. Dieser Leitfaden richtet sich an alle, die bereits entschieden haben, dass sie hingehen — sie brauchen nur einen klaren Plan. Das Line-up ist bereits zu 100 % bestätigt — sehen Sie sich den <a href="/blog/fenapo-2026-artistas-cartel-completo" class="text-purple-700 underline font-semibold">vollständigen Leitfaden zu Künstlern und Terminen</a> an.
</p>

<section id="overview" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 id="quick-summary" class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-purple-500 pb-3 inline-block">FENAPO 2026 auf einen Blick</h2>
</div>

<div class="speakable bg-gradient-to-br from-purple-50 to-indigo-50 border-2 border-purple-200 rounded-2xl p-6 md:p-8 mb-6">
  <p class="text-base md:text-lg text-gray-800 leading-relaxed mb-5">
    <strong>Die FENAPO 2026 — die 77. Ausgabe der Feria Nacional Potosina Mexikos</strong> — findet im August 2026 im Recinto Ferial an der Av. Fco. Martínez de la Vega statt. Es ist die jährliche Veranstaltung, die die meisten Besucher nach San Luis Potosí zieht, mit über 3 Millionen Besuchern in den letzten Ausgaben. Für 2026 kündigte der Gouverneur an, dass der Eintritt zur Feria, die Fahrgeschäfte, das Parken und die Konzerte im Teatro del Pueblo kostenlos sein werden — nur der Palenque behält ein separates Ticketing. Stand April sind 9 Künstler bestätigt und 2 weitere internationale stehen für das Teatro del Pueblo noch aus.
  </p>
  <h3 class="text-lg font-bold text-purple-900 mb-3">Was Sie heute wissen müssen (18. April 2026)</h3>
  <ul class="space-y-2 mb-3">
    <li class="flex items-start gap-2 text-gray-800"><span class="text-purple-600 mt-1">•</span><span><strong>Termine:</strong> August 2026 (offizielle Eröffnung und Abschluss noch zu bestätigen)</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-purple-600 mt-1">•</span><span><strong>Eintritt:</strong> Kostenlos (Feria, Fahrgeschäfte, Parken, Teatro del Pueblo)</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-purple-600 mt-1">•</span><span><strong>Palenque:</strong> Separates Ticket — fenapo.mx und eticket.mx</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-purple-600 mt-1">•</span><span><strong>Tagesbudget:</strong> $500–$1,500 MXN pro Person (mit oder ohne Palenque)</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-purple-600 mt-1">•</span><span><strong>Hotel buchen:</strong> <u>jetzt</u> — Auslastung über 90 % im August</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-purple-600 mt-1">•</span><span><strong>Line-up:</strong> vollständig — 21 kostenlose Nächte im Foro de las Estrellas + 14 im Palenque · <a href="/blog/fenapo-2026-artistas-cartel-completo" class="underline">alle Künstler ansehen</a></span></li>
  </ul>
  <p class="text-xs text-gray-600 italic pt-3 border-t border-purple-200">Wir aktualisieren diesen Leitfaden jedes Mal, wenn die Regierung einen neuen Künstler, einen Ticketpreis oder eine Terminänderung bekannt gibt.</p>
</div>
</section>

<section id="timeline" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-purple-500 pb-3 inline-block">Zeitplan: Was in jedem Monat zu tun ist</h2>
</div>

<p class="text-lg leading-relaxed text-gray-700 mb-6">
  Der einfachste Weg, sich stressfrei auf die FENAPO vorzubereiten, ohne im August gegen die Uhr zu laufen, besteht darin, die Aufgaben Monat für Monat zu verteilen. Das empfehlen wir:
</p>

<div class="not-prose my-10">
  <div class="relative">
    <div class="absolute left-6 top-0 bottom-0 w-0.5 bg-purple-200"></div>
    <div class="space-y-6">
      <div class="relative flex items-start gap-6">
        <div class="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">1</div>
        <div class="flex-1 bg-white p-5 rounded-xl shadow-md border border-gray-200">
          <h4 class="font-bold text-purple-900 mb-1">April 2026 (heute) — Hotel buchen + Pre-FENAPO besuchen</h4>
          <p class="text-sm text-gray-700">Buchen Sie Ihre Unterkunft sofort. Wenn Sie in der Nähe sind, nutzen Sie die Pre-FENAPO-Events (18. und 24. April), um sich mit dem Gelände vertraut zu machen. Wenn Sie von auswärts anreisen, blockieren Sie die Termine in Ihrem Kalender.</p>
        </div>
      </div>
      <div class="relative flex items-start gap-6">
        <div class="flex-shrink-0 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">2</div>
        <div class="flex-1 bg-white p-5 rounded-xl shadow-md border border-gray-200">
          <h4 class="font-bold text-indigo-900 mb-1">Mai 2026 — Ankündigungen verfolgen + San Luis Metal Fest vormerken</h4>
          <p class="text-sm text-gray-700">Aktivieren Sie Benachrichtigungen in den sozialen Netzwerken von @ferianacionalpotosina. Das San Luis Metal Fest (16. Mai) ist ein weiteres Pre-FENAPO auf demselben Gelände — eine hervorragende logistische Generalprobe. Das Line-up wird Woche für Woche weiter veröffentlicht.</p>
        </div>
      </div>
      <div class="relative flex items-start gap-6">
        <div class="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">3</div>
        <div class="flex-1 bg-white p-5 rounded-xl shadow-md border border-gray-200">
          <h4 class="font-bold text-blue-900 mb-1">Juni 2026 — Ticket-Alerts für den Palenque einrichten</h4>
          <p class="text-sm text-gray-700">Hier beginnen die Vorverkäufe für den Palenque. Grupo Firme, Gloria Trevi und Edén Muñoz sind im Vorverkauf ausverkauft. Setzen Sie Lesezeichen für fenapo.mx und eticket.mx und richten Sie Google Alerts für jeden Künstler ein, der Sie interessiert.</p>
        </div>
      </div>
      <div class="relative flex items-start gap-6">
        <div class="flex-shrink-0 w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">4</div>
        <div class="flex-1 bg-white p-5 rounded-xl shadow-md border border-gray-200">
          <h4 class="font-bold text-teal-900 mb-1">Juli 2026 — Tägliche Logistik planen</h4>
          <p class="text-sm text-gray-700">Line-up zu 100 % bestätigt. Wir veröffentlichen unseren dedizierten Künstler-Leitfaden. Planen Sie, an welchen Nächten Sie gehen, welche Palenque-Abende und welche Teatro-del-Pueblo-Abende sein werden. Bestätigen Sie Hotel und Anreise erneut.</p>
        </div>
      </div>
      <div class="relative flex items-start gap-6">
        <div class="flex-shrink-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">5</div>
        <div class="flex-1 bg-white p-5 rounded-xl shadow-md border border-gray-200">
          <h4 class="font-bold text-green-900 mb-1">August 2026 — Erleben Sie die FENAPO</h4>
          <p class="text-sm text-gray-700">Kommen Sie einen Tag früher an, wenn Sie von auswärts kommen. Nutzen Sie Uber/DiDi bei Nacht. Nehmen Sie Bargeld mit. Genießen Sie.</p>
        </div>
      </div>
    </div>
  </div>
</div>
</section>

<section id="hospedaje" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-purple-500 pb-3 inline-block">Unterkunft: Jetzt buchen, nicht später</h2>
</div>

<div class="not-prose my-6 bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
  <p class="text-red-900"><strong>⚠️ Kritisches Zeitfenster:</strong> Wenn Sie von auswärts anreisen und noch kein Hotel haben, buchen Sie diese Woche. Die Hotelauslastung während der FENAPO liegt über 90 %, und die dynamischen Preise steigen ab Juni um 50–100 %. Kostenlos in letzter Minute zu stornieren ist besser, als ohne etwas dazustehen.</p>
</div>

<p class="text-lg leading-relaxed text-gray-700 mb-6">
  Es gibt drei realistische Zonen. Jede passt zu einem anderen Profil:
</p>

<div class="not-prose overflow-x-auto my-8">
  <table class="min-w-full bg-white border-2 border-gray-200 rounded-xl overflow-hidden shadow-lg">
    <thead class="bg-gradient-to-r from-purple-600 to-indigo-700">
      <tr>
        <th class="px-5 py-3 text-left text-sm font-semibold text-white uppercase">Zone</th>
        <th class="px-5 py-3 text-left text-sm font-semibold text-white uppercase">Zeit zum Gelände</th>
        <th class="px-5 py-3 text-left text-sm font-semibold text-white uppercase">Ideal für</th>
        <th class="px-5 py-3 text-left text-sm font-semibold text-white uppercase">Preisspanne/Nacht</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-200">
      <tr><td class="px-5 py-3 font-semibold">In der Nähe des Geländes (Zona Industrial/Morales)</td><td class="px-5 py-3 text-gray-700">5–10 Min.</td><td class="px-5 py-3 text-gray-700">Wer keine Zeit mit Fahrten verlieren möchte</td><td class="px-5 py-3 text-gray-700">$700–$1,500 MXN</td></tr>
      <tr class="bg-gray-50"><td class="px-5 py-3 font-semibold">Centro Histórico</td><td class="px-5 py-3 text-gray-700">15–20 Min.</td><td class="px-5 py-3 text-gray-700">Wer neben der Feria auch SLP genießen möchte</td><td class="px-5 py-3 text-gray-700">$1,200–$3,000 MXN</td></tr>
      <tr><td class="px-5 py-3 font-semibold">Lomas</td><td class="px-5 py-3 text-gray-700">20–25 Min.</td><td class="px-5 py-3 text-gray-700">Familien, Reisende in Kettenhotels (Fiesta Americana, Hilton)</td><td class="px-5 py-3 text-gray-700">$1,500–$4,000 MXN</td></tr>
    </tbody>
  </table>
</div>

<p class="text-lg leading-relaxed text-gray-700 mb-6">
  Unsere Empfehlung: Wenn Sie nur 2–3 Tage bleiben, wählen Sie die Zona Industrial in der Nähe des Geländes. Wenn Sie 4+ Tage bleiben und SLP kennenlernen möchten, bietet Ihnen das Centro Histórico das bessere Nachtleben, Restaurants und einen Ausgangspunkt, um am Ende der Reise die Huasteca Potosina zu besuchen.
</p>
</section>

<section id="boletos" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-purple-500 pb-3 inline-block">Ticketstrategie</h2>
</div>

<div class="not-prose bg-green-50 border-2 border-green-300 rounded-xl p-6 my-6">
  <h3 class="text-xl font-bold text-green-900 mb-3">🎉 Was 2026 kostenlos ist</h3>
  <ul class="text-green-900 space-y-1">
    <li>✓ Eintritt zur Feria</li>
    <li>✓ Konzerte im Teatro del Pueblo (alle Künstler dieser Bühne)</li>
    <li>✓ Fahrgeschäfte</li>
    <li>✓ Parken</li>
  </ul>
</div>

<p class="text-lg leading-relaxed text-gray-700 mb-6">
  Der einzige direkte Kostenpunkt der FENAPO 2026 ist der Palenque. Die Vorverkäufe beginnen typischerweise im Juni–Juli, mit vorzeitigem Zugang für BBVA- und Banorte-Kunden. Die Shows mit der größten Nachfrage (Grupo Firme, Gloria Trevi, Edén Muñoz) sind zwischen dem Vorverkauf und den ersten 48 Stunden des offenen Verkaufs ausverkauft.
</p>

<div class="not-prose my-8 bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6">
  <h4 class="font-bold text-yellow-900 mb-3">💡 Taktiken, um Tickets zu bekommen</h4>
  <ul class="space-y-2 text-yellow-900">
    <li><strong>1. Richten Sie ab Mai Alerts ein:</strong> Google Alerts mit dem Namen des Künstlers + „palenque FENAPO“.</li>
    <li><strong>2. Bereiten Sie Ihr eticket.mx-Konto vor:</strong> Hinterlegen Sie Karte und Daten vor dem Vorverkauf, um in Sekunden zu kaufen.</li>
    <li><strong>3. Mehrere Geräte am Vorverkaufstag:</strong> Computer + Telefon + Tablet. Die Server sind überlastet.</li>
    <li><strong>4. Erwägen Sie einen VIP-Tisch, wenn Sie in der Gruppe reisen:</strong> Diese werden meist freigegeben, nachdem die Sitzplätze ausverkauft sind, und pro Person kommt es ähnlich heraus.</li>
    <li><strong>5. Misstrauen Sie dem Wiederverkauf in sozialen Netzwerken:</strong> eticket.mx ist der offizielle Kanal. Prüfen Sie bei inoffiziellen Tickets die Codes vor dem Bezahlen.</li>
  </ul>
</div>
</section>

<section id="presupuesto" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-purple-500 pb-3 inline-block">Tagesbudget</h2>
</div>

<p class="text-lg leading-relaxed text-gray-700 mb-6">
  Der Vorteil daran, dass die FENAPO dieses Jahr kostenlos ist: Sie können Ihre Ausgaben nach dem ausrichten, was Sie tun möchten. Drei typische Szenarien:
</p>

<div class="not-prose grid grid-cols-1 md:grid-cols-3 gap-5 my-8">
  <div class="bg-white border-2 border-gray-200 rounded-xl p-5">
    <h4 class="font-bold text-gray-900 mb-2">Sparsamer Tag</h4>
    <p class="text-3xl font-bold text-green-700 mb-2">~$500 MXN</p>
    <p class="text-sm text-gray-700 mb-3">(~$29 USD)</p>
    <ul class="text-xs text-gray-600 space-y-1">
      <li>• Transport: $100</li>
      <li>• Snacks: $200</li>
      <li>• Fahrgeschäfte: kostenlos</li>
      <li>• Teatro del Pueblo: kostenlos</li>
      <li>• Extras: $200</li>
    </ul>
  </div>
  <div class="bg-white border-2 border-purple-200 rounded-xl p-5 shadow-md">
    <h4 class="font-bold text-gray-900 mb-2">Voller Tag</h4>
    <p class="text-3xl font-bold text-purple-700 mb-2">~$1,000 MXN</p>
    <p class="text-sm text-gray-700 mb-3">(~$57 USD)</p>
    <ul class="text-xs text-gray-600 space-y-1">
      <li>• Transport: $150</li>
      <li>• 2 Mahlzeiten: $400</li>
      <li>• Bier/Getränke: $250</li>
      <li>• Kunsthandwerk: $200</li>
    </ul>
  </div>
  <div class="bg-white border-2 border-amber-200 rounded-xl p-5">
    <h4 class="font-bold text-gray-900 mb-2">Palenque-Tag</h4>
    <p class="text-3xl font-bold text-amber-700 mb-2">~$1,500 MXN</p>
    <p class="text-sm text-gray-700 mb-3">(~$86 USD)</p>
    <ul class="text-xs text-gray-600 space-y-1">
      <li>• Palenque (Ränge): $600–$1,200</li>
      <li>• Abendessen: $300</li>
      <li>• Getränke: $300</li>
      <li>• Transport: $200</li>
    </ul>
  </div>
</div>

<p class="text-sm text-gray-600 italic">Berechnungen basierend auf typischen FENAPO-Tarifen 2024–2025, angepasst an die Inflation 2026.</p>
</section>

<section id="transporte" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-purple-500 pb-3 inline-block">Anreise zum Gelände</h2>
</div>

<figure class="not-prose my-8">
  <div class="rounded-xl overflow-hidden shadow-lg">
    <img src="https://omxporaecrqsqhzjzvnx.supabase.co/storage/v1/object/public/blog-images/posts/fenapo-2026-cartel-guia-completa-fairgrounds.png" alt="Luftaufnahme des Recinto Ferial FENAPO bei Sonnenuntergang mit Fahrgeschäften, Lichtern und Menschenmenge" class="w-full h-auto" loading="lazy" />
  </div>
  <figcaption class="mt-3 text-center text-sm text-gray-600 italic">Luftaufnahme des Recinto Ferial. Planen Sie, an Wochenenden vor 7 PM oder nach 10 PM anzukommen, um den Andrang zu vermeiden.</figcaption>
</figure>

<p class="text-lg leading-relaxed text-gray-700 mb-6">
  Das Recinto Ferial liegt an der <strong>Av. Fco. Martínez de la Vega No. 255</strong>, 8 km vom Centro Histórico. Während der FENAPO sind die Optionen:
</p>

<ul class="list-disc pl-6 space-y-2 text-gray-700 mb-6">
  <li><strong>Uber / DiDi:</strong> Die empfehlenswerteste Option, um sich nicht um Parkplatz, Alkohol oder Abfahrtsverkehr sorgen zu müssen. Preis ab dem Centro: $80–$150 MXN. Uber-Preisspitze freitags/samstags nach 10 PM.</li>
  <li><strong>Eigenes Auto:</strong> Parken kostenlos, aber es füllt sich an Wochenenden vor 7 PM. Langsame Abfahrt am Konzertende (30–45 Min. Schlange).</li>
  <li><strong>Öffentlicher Nahverkehr:</strong> Linien 23, 32 und 52 mit Umstieg. Funktioniert bis ca. 10 PM. $12 MXN pro Fahrt.</li>
  <li><strong>Vom Flughafen SLP:</strong> 20 Min. mit Taxi/Rideshare. Plan A: zuerst zum Hotel, Plan B direkt zum Gelände, wenn Sie am Konzerttag anreisen.</li>
</ul>
</section>

<section id="empacar" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-purple-500 pb-3 inline-block">Was einpacken</h2>
</div>

<p class="text-lg leading-relaxed text-gray-700 mb-6">
  San Luis Potosí liegt auf 1,864m Höhe. Im August sind die Nachmittage heiß (28–32°C) und die Nächte deutlich kühler (12–16°C). Das Gelände ist größtenteils im Freien. Das ist das Wesentliche:
</p>

<div class="not-prose grid grid-cols-1 md:grid-cols-2 gap-5 my-8">
  <div class="bg-blue-50 border border-blue-200 rounded-xl p-5">
    <h4 class="font-bold text-blue-900 mb-3">👕 Kleidung</h4>
    <ul class="text-sm text-blue-900 space-y-1">
      <li>• Leichte Schichten: T-Shirt + Hemd + leichte Jacke</li>
      <li>• Bequeme Hose (Sie werden 5–8 km laufen)</li>
      <li>• Bequeme geschlossene Schuhe (das Gelände hat unbefestigte Wege)</li>
      <li>• Kappe oder Hut für den Nachmittag</li>
    </ul>
  </div>
  <div class="bg-amber-50 border border-amber-200 rounded-xl p-5">
    <h4 class="font-bold text-amber-900 mb-3">🎒 Im Rucksack</h4>
    <ul class="text-sm text-amber-900 space-y-1">
      <li>• Sonnencreme LSF 50+</li>
      <li>• Wiederverwendbare Flasche (es gibt Trinkbrunnen)</li>
      <li>• Bargeld ($500–1000 MXN — viele Händler akzeptieren keine Karte)</li>
      <li>• Powerbank für das Telefon</li>
      <li>• Gehörschutz, wenn Sie mit Kindern gehen (Teatro del Pueblo ist laut)</li>
    </ul>
  </div>
</div>
</section>

<section id="pre-fenapo" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-purple-500 pb-3 inline-block">Pre-FENAPO: Machen Sie einen Probelauf auf dem Gelände</h2>
</div>

<p class="text-lg leading-relaxed text-gray-700 mb-6">
  Eine unterschätzte Taktik: zu einem Pre-FENAPO-Event zu gehen. Das Gelände ist mit vier Events zwischen April und Mai aktiv. Sie gehen ohne den Druck der großen Feria hin, lernen das Parken, die tatsächliche Fahrzeit und wo sich jeder Eingang befindet. Wenn Sie dann im August zurückkehren, bewegen Sie sich wie ein Einheimischer:
</p>

<div class="not-prose grid grid-cols-1 md:grid-cols-2 gap-5 my-8">
  <div class="bg-white border-2 border-purple-200 rounded-xl p-5">
    <p class="text-xs font-bold text-purple-600 uppercase tracking-wide mb-1">18. April 2026</p>
    <h4 class="font-bold text-gray-900 mb-2">Duelo de Acordeones</h4>
    <p class="text-sm text-gray-700">Norteño-Wettbewerb. Erschwinglicher Eintritt, familiäre Atmosphäre.</p>
  </div>
  <div class="bg-white border-2 border-purple-200 rounded-xl p-5">
    <p class="text-xs font-bold text-purple-600 uppercase tracking-wide mb-1">24. April 2026</p>
    <h4 class="font-bold text-gray-900 mb-2">Victor Mendivil + Kevin AMF</h4>
    <p class="text-sm text-gray-700">Doppelplakat der Regional-Mexicano-Musik.</p>
  </div>
  <div class="bg-white border-2 border-purple-200 rounded-xl p-5">
    <p class="text-xs font-bold text-purple-600 uppercase tracking-wide mb-1">16. Mai 2026</p>
    <h4 class="font-bold text-gray-900 mb-2">San Luis Metal Fest 2026</h4>
    <p class="text-sm text-gray-700"><a href="/events/san-luis-metal-fest-2026" class="text-blue-700 hover:underline">Vollständige Berichterstattung →</a></p>
  </div>
  <div class="bg-white border-2 border-purple-200 rounded-xl p-5">
    <p class="text-xs font-bold text-purple-600 uppercase tracking-wide mb-1">22.–24. Mai 2026</p>
    <h4 class="font-bold text-gray-900 mb-2">Copa Libertadores (Volleyball)</h4>
    <p class="text-sm text-gray-700">Internationales Volleyballturnier.</p>
  </div>
</div>
</section>

<section id="cartel-actual" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-purple-500 pb-3 inline-block">Line-up-Status — historisch (das Line-up ist bereits vollständig)</h2>
</div>

<div class="not-prose bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
  <p class="text-gray-700 mb-5">
    <strong>Update (1. Juli 2026):</strong> Das vollständige offizielle Line-up wurde bereits am 27. Mai veröffentlicht. Dieser Abschnitt bleibt als Aufzeichnung vom April erhalten — der endgültige Kalender, Nacht für Nacht (21 kostenlos im Foro + 14 im Palenque), steht im <a href="/blog/fenapo-2026-artistas-cartel-completo" class="text-purple-700 underline font-semibold">vollständigen Leitfaden zu den FENAPO-2026-Künstlern</a>.
  </p>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <h4 class="font-bold text-purple-900 mb-3">🎤 Teatro del Pueblo (kostenlos)</h4>
      <ul class="space-y-2 text-sm text-gray-700">
        <li>✓ Sin Bandera (Pop-Ballade)</li>
        <li>✓ Los Acosta (regionale Cumbia)</li>
        <li>✓ Kenia Os (Pop / Urban)</li>
        <li class="text-gray-500 italic">⧗ 2 internationale Künstler noch anzukündigen</li>
      </ul>
    </div>
    <div>
      <h4 class="font-bold text-amber-900 mb-3">🤠 Palenque (Ticket)</h4>
      <ul class="space-y-2 text-sm text-gray-700">
        <li>✓ Grupo Firme</li>
        <li>✓ Edén Muñoz</li>
        <li>✓ Gloria Trevi</li>
        <li>✓ Los Invasores de Nuevo León</li>
        <li>✓ Los Cardenales de Nuevo León</li>
        <li>✓ Los Viejones de Linares</li>
        <li class="text-green-700 font-semibold">✓ Vollständiges Line-up</li>
      </ul>
    </div>
  </div>
  <p class="text-xs text-gray-500 italic mt-5 pt-4 border-t border-gray-200">Verifiziert gegen fenapo.slp.gob.mx, feriafenapo.com, Noticieros SLP, Frontal Noticias.</p>
</div>

<p class="text-lg leading-relaxed text-gray-700 mb-6">
  <strong>So verfolgen Sie Updates:</strong> Die offiziellen Kanäle <a href="https://www.facebook.com/ferianacionalpotosina" target="_blank" rel="noopener" class="text-blue-700 hover:underline">@ferianacionalpotosina</a> auf Facebook und Instagram sind die ersten, die ankündigen. <a href="https://fenapo.slp.gob.mx" target="_blank" rel="noopener" class="text-blue-700 hover:underline">fenapo.slp.gob.mx</a> veröffentlicht die offiziellen Mitteilungen des Gouverneurs. Wir veröffentlichen eine Notiz, sobald die 2 ausstehenden internationalen Acts des Teatro del Pueblo erscheinen.
</p>
</section>

<section id="tips-foraneos" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-purple-500 pb-3 inline-block">Wenn Sie von auswärts anreisen (CDMX, Guadalajara, Monterrey, USA)</h2>
</div>

<p class="text-lg leading-relaxed text-gray-700 mb-6">
  SLP ist kein überlaufenes Reiseziel, daher gibt es keine flächendeckenden englischsprachigen Services oder strukturierte „Tour-Pakete“ wie in San Miguel de Allende. Das bedeutet dreierlei:
</p>

<ul class="list-disc pl-6 space-y-3 text-gray-700 mb-6">
  <li><strong>Nehmen Sie Bargeld mit:</strong> Viele Essens- und Kunsthandwerksverkäufer akzeptieren nur Bargeld. Banken und Geldautomaten funktionieren im Centro und in Lomas gut.</li>
  <li><strong>Spanisch hilft:</strong> Das Personal auf dem Gelände spricht wenig Englisch. Lernen Sie grundlegende Sätze oder nutzen Sie Google Translate offline. Uber/DiDi funktioniert in beiden Sprachen.</li>
  <li><strong>Kommen Sie einen Tag früher an:</strong> Wenn Sie fliegen, landen Sie am Vortag. Der Flughafen SLP hat Direktflüge aus CDMX, Houston und Dallas.</li>
  <li><strong>Kombinieren Sie mit anderen Erlebnissen:</strong> UNESCO-Centro Histórico, Parque Tangamanga, Real de Catorce (3 Std.) oder die Huasteca Potosina (4 Std.). Es lohnt sich, die Reise um 2–3 zusätzliche Tage zu verlängern.</li>
</ul>
</section>

<section id="faq" class="mb-16 scroll-mt-8 speakable">
<div class="not-prose mb-6">
  <h2 id="faq-heading" class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-purple-500 pb-3 inline-block">Häufig gestellte Fragen</h2>
</div>

<div class="space-y-5">
  <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
    <h3 class="font-bold text-lg text-gray-900 mb-2">Wann sollte ich mein Hotel buchen?</h3>
    <p class="text-gray-700">Zwischen April und Mai 2026. Die Auslastung im August liegt über 90 % und die dynamischen Preise steigen ab Juni um 50–100 %. Bis Juli zu warten bedeutet, viel mehr zu zahlen oder keine Verfügbarkeit in der Nähe des Geländes zu finden.</p>
  </div>
  <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
    <h3 class="font-bold text-lg text-gray-900 mb-2">Wie hoch ist das empfohlene Tagesbudget?</h3>
    <p class="text-gray-700">$500 MXN (~$29 USD) für einen sparsamen Tag, $1,000 MXN (~$57 USD) für einen vollen Tag mit Mahlzeiten und Getränken, $1,500+ MXN (~$86 USD), wenn Sie den Palenque einbeziehen. Eintritt, Fahrten und Teatro del Pueblo sind kostenlos.</p>
  </div>
  <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
    <h3 class="font-bold text-lg text-gray-900 mb-2">Was sollte ich einpacken?</h3>
    <p class="text-gray-700">Leichte Schichten (heißer Nachmittag, kalte Nacht wegen der Höhe von 1,864m), bequeme Schuhe zum Gehen, Sonnencreme, eine Kappe, eine wiederverwendbare Flasche, Bargeld. Powerbank und Gehörschutz, wenn Sie mit Kindern gehen.</p>
  </div>
  <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
    <h3 class="font-bold text-lg text-gray-900 mb-2">Wann werden die genauen Termine der einzelnen Konzerte veröffentlicht?</h3>
    <p class="text-gray-700">Die Regierung gibt sie in Wellen von April bis Juli bekannt. Folgen Sie fenapo.slp.gob.mx und @ferianacionalpotosina. Wir aktualisieren diesen Leitfaden jedes Mal, wenn ein Künstler oder Termin bestätigt wird.</p>
  </div>
  <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
    <h3 class="font-bold text-lg text-gray-900 mb-2">Was ist, wenn ich mit Kindern reise?</h3>
    <p class="text-gray-700">Die FENAPO ist sehr familienfreundlich. Es gibt einen Kinderbereich, kostenlose Fahrgeschäfte und kulturelle Shows. Bringen Sie Gehörschutz für sie ins Teatro del Pueblo mit. Meiden Sie Wochenenden nach 8 PM, wenn sie klein sind — die Menschenmenge verdoppelt sich.</p>
  </div>
  <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
    <h3 class="font-bold text-lg text-gray-900 mb-2">Kann ich alleine gehen?</h3>
    <p class="text-gray-700">Ja. Das Gelände ist stark bewacht. Bevorzugen Sie Tageszeiten für die Fahrgeschäfte und nutzen Sie Uber/DiDi für die Rückfahrt bei Nacht.</p>
  </div>
  <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
    <h3 class="font-bold text-lg text-gray-900 mb-2">Wann wird das zu 100 % bestätigte Line-up veröffentlicht?</h3>
    <p class="text-gray-700">Die letzten Künstler (2 internationale des Teatro del Pueblo) werden typischerweise zwischen Mai und Juli bekannt gegeben. Sobald es zu 100 % bestätigt ist, veröffentlichen wir eine zweite ausführliche Analyse ausschließlich über die Künstler und ihre Termine.</p>
  </div>
</div>
</section>

<section id="fuentes" class="mb-12 scroll-mt-8">
<div class="not-prose bg-gray-50 border border-gray-200 rounded-2xl p-6">
  <h2 class="text-xl font-bold text-gray-900 mb-3">Quellen und Verifizierung</h2>
  <p class="text-sm text-gray-600 mb-4">Verifiziert gegen offizielle Quellen am 18. April 2026. Wir aktualisieren, sobald neue Informationen erscheinen.</p>
  <ul class="space-y-2 text-sm text-gray-700">
    <li>→ <a href="https://fenapo.slp.gob.mx/" class="text-blue-700 hover:underline" target="_blank" rel="noopener">fenapo.slp.gob.mx — Offizielle Website der Regierung von SLP</a></li>
    <li>→ <a href="https://www.feriafenapo.com/" class="text-blue-700 hover:underline" target="_blank" rel="noopener">feriafenapo.com — Offizielles Portal der Feria</a></li>
    <li>→ <a href="https://noticierosslp.com/2026/03/05/fenapo-perfila-cartelera-completa-palenque-listo-y-teatro-del-pueblo-casi-definido/" class="text-blue-700 hover:underline" target="_blank" rel="noopener">Noticieros SLP — Status des Line-ups</a></li>
    <li>→ <a href="https://www.frontalnoticias.com/san-luis-potosi/gob-slp/kenia-os-y-eden-munoz-nuevos-artistas-confirmados-para-la-fenapo-2026/" class="text-blue-700 hover:underline" target="_blank" rel="noopener">Frontal Noticias — Aktuelle Ankündigungen des Gouverneurs</a></li>
  </ul>
</div>
</section>

<div class="not-prose mt-10 bg-gradient-to-r from-purple-50 to-indigo-50 border-2 border-purple-200 p-8 rounded-2xl">
  <h3 class="text-2xl font-bold text-gray-900 mb-3">Nächste Schritte</h3>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
    <a href="/events/fenapo-2026" class="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      <p class="font-semibold text-gray-900">→ Offizielle Event-Seite</p>
      <p class="text-sm text-gray-600">Aktualisiertes Line-up, Geländeplan, JSON-LD-Schema</p>
    </a>
    <a href="/events/san-luis-metal-fest-2026" class="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      <p class="font-semibold text-gray-900">→ San Luis Metal Fest (16. Mai)</p>
      <p class="text-sm text-gray-600">Ihr erster Probelauf des Geländes vor der FENAPO</p>
    </a>
    <a href="/resources/living-guide" class="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      <p class="font-semibold text-gray-900">→ Vollständiger SLP-Leitfaden</p>
      <p class="text-sm text-gray-600">Für alle, die für mehrere Tage von auswärts kommen</p>
    </a>
    <a href="/blog/ultimate-guide-living-san-luis-potosi-2026" class="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      <p class="font-semibold text-gray-900">→ Leitfaden 2026 für Expats und Nomaden</p>
      <p class="text-sm text-gray-600">Budget, Viertel, Internet, Visum</p>
    </a>
  </div>
</div>`;

const CONTENT_JA = `<script type="application/ld+json">{"@context":"https://schema.org","@graph":[{"@type":"Event","@id":"https://www.sanluisway.com/blog/fenapo-2026-guia-preparacion#event","name":"FENAPO 2026 — Feria Nacional Potosina","startDate":"2026-08-01","endDate":"2026-08-31","location":{"@type":"Place","name":"Recinto Ferial FENAPO","address":{"@type":"PostalAddress","streetAddress":"Av. Fco. Martínez de la Vega No. 255","addressLocality":"San Luis Potosí","addressRegion":"SLP","addressCountry":"MX"}},"organizer":{"@type":"Organization","name":"Gobierno de San Luis Potosí"},"isAccessibleForFree":true,"eventStatus":"https://schema.org/EventScheduled","url":"https://www.sanluisway.com/events/fenapo-2026"},{"@type":"HowTo","@id":"https://www.sanluisway.com/blog/fenapo-2026-guia-preparacion#howto","name":"FENAPO 2026 の準備方法","description":"FENAPO 2026 の訪問を計画するためのステップバイステップガイド：ホテル、予算、交通、FENAPO 前のイベント。","totalTime":"P4M","step":[{"@type":"HowToStep","position":1,"name":"宿泊施設を予約する（4月～5月）","text":"8月の3～4か月前にホテルを予約してください。FENAPO により地元のホテル稼働率は90%を超えます。おすすめのエリア：Zona Industrial（最も近い）、Centro Histórico（ナイトライフ）、Lomas（チェーンホテル）。"},{"@type":"HowToStep","position":2,"name":"FENAPO 前のイベントに参加する（4月～5月）","text":"大混雑の前に会場のレイアウト、駐車場、交通を知るために、FENAPO 前のイベントの際に Recinto Ferial を訪れてください。"},{"@type":"HowToStep","position":3,"name":"Palenque のチケットアラートを設定する（6月）","text":"fenapo.mx と eticket.mx をブックマークに追加してください。Grupo Firme、Gloria Trevi、Edén Muñoz の Palenque チケットは先行販売で売り切れる傾向があります。"},{"@type":"HowToStep","position":4,"name":"1日の予算を計画する（7月）","text":"Palenque のチケットを購入するかどうかによって、1人あたり1日 $500～$1,500 MXN を見積もってください。今年は Teatro del Pueblo のコンサート、駐車場、遊具は無料です。"},{"@type":"HowToStep","position":5,"name":"荷造りと交通の確認（7月下旬）","text":"暑い午後と涼しい夜のための重ね着（標高1,864m）。歩きやすい靴。日焼け止め。海外から来る場合は、スマートフォンで Uber/DiDi が使えるか確認してください。"}]},{"@type":"FAQPage","@id":"https://www.sanluisway.com/blog/fenapo-2026-guia-preparacion#faq","mainEntity":[{"@type":"Question","name":"FENAPO 2026 のためにいつホテルを予約すべきですか？","acceptedAnswer":{"@type":"Answer","text":"2026年4月から5月の間です。8月のホテル稼働率は90%を超えます。7月まで待つと、通常の最大2倍の変動料金を支払うか、会場近くの空室が見つからないことになります。"}},{"@type":"Question","name":"推奨される1日の予算はいくらですか？","acceptedAnswer":{"@type":"Answer","text":"Palenque（別チケット）に行くかどうかによって、1人あたり1日 $500～$1,500 MXN（25～75 USD）です。フェリアの入場、遊具、駐車場、Teatro del Pueblo は2026年は無料です。"}},{"@type":"Question","name":"何を荷造りすべきですか？","acceptedAnswer":{"@type":"Answer","text":"重ね着（標高1,864mのため午後は暑く、夜は寒い）、たくさん歩くための快適な靴、日焼け止め、帽子、繰り返し使える水筒。小さな売り子のための現金 — 多くはカードを受け付けません。"}},{"@type":"Question","name":"各コンサートの正確な日程がいつ発表されるか、どうすればわかりますか？","acceptedAnswer":{"@type":"Answer","text":"政府は4月から7月にかけて段階的に発表します。fenapo.slp.gob.mx と @ferianacionalpotosina の公式アカウントをフォローしてください。新しいアーティストや日程が確定するたびに、このガイドを更新します。"}},{"@type":"Question","name":"子ども連れで行く場合はどうですか？","acceptedAnswer":{"@type":"Answer","text":"FENAPO はとても家族向けです。子ども向けエリア、無料の遊具、文化ショーがあります。Teatro del Pueblo に行くなら子ども用のイヤーマフを持参してください — 音量が大きいです。子どもが小さい場合は週末の 8 PM 以降を避けてください：人混みが倍増します。"}},{"@type":"Question","name":"一人で行けますか？","acceptedAnswer":{"@type":"Answer","text":"はい、安全です。会場は厳重に警備されています。一人で旅行する場合は、遊具や Teatro del Pueblo は日中の時間帯を選び、夜の帰りには Uber/DiDi を使ってください。Palenque はグループで行くのに最高の雰囲気です。"}},{"@type":"Question","name":"100%確定した出演者リストはいつ公開されますか？","acceptedAnswer":{"@type":"Answer","text":"最後のアーティスト（Teatro del Pueblo 向けの国際的な2組）は通常5月から7月の間に発表されます。出演者リストが100%確定したら、アーティストとその日程だけに焦点を当てた2本目の詳細記事を公開します。"}}]},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"ホーム","item":"https://www.sanluisway.com"},{"@type":"ListItem","position":2,"name":"ブログ","item":"https://www.sanluisway.com/blog"},{"@type":"ListItem","position":3,"name":"FENAPO 2026 準備ガイド","item":"https://www.sanluisway.com/blog/fenapo-2026-guia-preparacion"}]},{"@type":"Article","@id":"https://www.sanluisway.com/blog/fenapo-2026-guia-preparacion#article","headline":"FENAPO 2026 準備ガイド — 8月前に訪問を計画する方法","datePublished":"2026-04-18","dateModified":"2026-04-18","author":{"@type":"Organization","name":"San Luis Way","url":"https://www.sanluisway.com"},"publisher":{"@type":"Organization","name":"San Luis Way","url":"https://www.sanluisway.com"},"speakable":{"@type":"SpeakableSpecification","cssSelector":[".speakable","#quick-summary","#faq-heading"]},"citation":[{"@type":"CreativeWork","name":"Gobierno SLP — FENAPO oficial","url":"https://fenapo.slp.gob.mx/"},{"@type":"CreativeWork","name":"Feria FENAPO","url":"https://www.feriafenapo.com/"},{"@type":"CreativeWork","name":"Noticieros SLP","url":"https://noticierosslp.com/2026/03/05/fenapo-perfila-cartelera-completa-palenque-listo-y-teatro-del-pueblo-casi-definido/"}]}]}</script>
<div class="not-prose mb-8">
  <div class="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl mb-8">
    <img src="https://omxporaecrqsqhzjzvnx.supabase.co/storage/v1/object/public/blog-images/posts/fenapo-2026-cartel-guia-completa-hero.png" alt="夜のコンサート中の FENAPO の Teatro del Pueblo に集まる群衆" class="w-full h-full object-cover" loading="eager" />
    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
      <div class="p-6 md:p-10">
        <h1 class="text-3xl md:text-5xl font-bold text-white mb-3">FENAPO 2026 準備ガイド</h1>
        <p class="text-lg md:text-xl text-white/90">開催まで4か月を切りました。ストレスなく、最高の席で到着するために今すべきことをご紹介します。</p>
      </div>
    </div>
  </div>
</div>

<div class="bg-purple-50 border border-purple-100 p-6 rounded-xl mb-8">
  <h3 class="text-xl font-bold mb-3 text-purple-900">📑 この準備ガイドの内容</h3>
  <nav class="grid grid-cols-1 md:grid-cols-2 gap-2 text-purple-800">
    <a href="#overview" class="hover:underline">→ FENAPO 2026 の概要</a>
    <a href="#timeline" class="hover:underline">→ 月ごとのチェックリスト</a>
    <a href="#hospedaje" class="hover:underline">→ 宿泊：今すぐ予約</a>
    <a href="#boletos" class="hover:underline">→ チケット戦略</a>
    <a href="#presupuesto" class="hover:underline">→ 1日の予算</a>
    <a href="#transporte" class="hover:underline">→ 交通</a>
    <a href="#empacar" class="hover:underline">→ 持ち物</a>
    <a href="#pre-fenapo" class="hover:underline">→ FENAPO 前：予行演習</a>
    <a href="#cartel-actual" class="hover:underline">→ 出演者リストの状況（4月）</a>
    <a href="#tips-foraneos" class="hover:underline">→ 遠方から来られる場合</a>
    <a href="#faq" class="hover:underline">→ よくある質問</a>
    <a href="#fuentes" class="hover:underline">→ 出典</a>
  </nav>
  <p class="mt-4 text-sm text-purple-700 italic">読了時間：14分 · 最終更新：2026年4月18日</p>
</div>

<p class="text-xl leading-relaxed text-gray-800 mb-8 font-medium">
  <strong>FENAPO 2026 は8月に開催されます。今日は4月18日です。</strong> この4か月という期間は、ストレスなく計画するのにまさに最適な時間です：価格が上がる前に宿泊施設を予約し、発表され次第、出演者リストの告知を追い、FENAPO 前のイベントに参加して会場を知ることができます。このガイドは、すでに行くと決めている方 — 明確な計画だけが必要な方 — のために作られています。出演者リストはすでに100%確定しています — <a href="/blog/fenapo-2026-artistas-cartel-completo" class="text-purple-700 underline font-semibold">アーティストと日程の完全ガイド</a>をご覧ください。
</p>

<section id="overview" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 id="quick-summary" class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-purple-500 pb-3 inline-block">FENAPO 2026 の概要</h2>
</div>

<div class="speakable bg-gradient-to-br from-purple-50 to-indigo-50 border-2 border-purple-200 rounded-2xl p-6 md:p-8 mb-6">
  <p class="text-base md:text-lg text-gray-800 leading-relaxed mb-5">
    <strong>FENAPO 2026 — メキシコの Feria Nacional Potosina 第77回</strong> — は、2026年8月に Av. Fco. Martínez de la Vega 沿いの Recinto Ferial で開催されます。San Luis Potosí に最も多くの来場者を集める年間最大のイベントで、近年の開催では300万人を超える来場者がありました。2026年については、フェリアの入場、遊具、駐車場、そして Teatro del Pueblo のコンサートが無料になると知事が発表しました — Palenque のみが別途チケット制を維持します。4月時点で9組のアーティストが確定しており、Teatro del Pueblo 向けにさらに2組の国際的なアーティストが未定です。
  </p>
  <h3 class="text-lg font-bold text-purple-900 mb-3">今日知っておくべきこと（2026年4月18日）</h3>
  <ul class="space-y-2 mb-3">
    <li class="flex items-start gap-2 text-gray-800"><span class="text-purple-600 mt-1">•</span><span><strong>日程：</strong> 2026年8月（公式の開幕と閉幕は未確定）</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-purple-600 mt-1">•</span><span><strong>入場：</strong> 無料（フェリア、遊具、駐車場、Teatro del Pueblo）</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-purple-600 mt-1">•</span><span><strong>Palenque：</strong> 別途チケット — fenapo.mx と eticket.mx</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-purple-600 mt-1">•</span><span><strong>1日の予算：</strong> 1人あたり $500～$1,500 MXN（Palenque の有無にかかわらず）</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-purple-600 mt-1">•</span><span><strong>ホテル予約：</strong> <u>今すぐ</u> — 8月は稼働率90%超</span></li>
    <li class="flex items-start gap-2 text-gray-800"><span class="text-purple-600 mt-1">•</span><span><strong>出演者リスト：</strong> 完成 — Foro de las Estrellas で21夜無料 + Palenque で14夜 · <a href="/blog/fenapo-2026-artistas-cartel-completo" class="underline">すべてのアーティストを見る</a></span></li>
  </ul>
  <p class="text-xs text-gray-600 italic pt-3 border-t border-purple-200">政府が新しいアーティスト、チケット価格、または日程変更を発表するたびに、このガイドを更新します。</p>
</div>
</section>

<section id="timeline" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-purple-500 pb-3 inline-block">スケジュール：毎月やるべきこと</h2>
</div>

<p class="text-lg leading-relaxed text-gray-700 mb-6">
  8月に時間に追われている感覚なく FENAPO の準備をする最も簡単な方法は、タスクを月ごとに分けることです。私たちがおすすめするのは次のとおりです：
</p>

<div class="not-prose my-10">
  <div class="relative">
    <div class="absolute left-6 top-0 bottom-0 w-0.5 bg-purple-200"></div>
    <div class="space-y-6">
      <div class="relative flex items-start gap-6">
        <div class="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">1</div>
        <div class="flex-1 bg-white p-5 rounded-xl shadow-md border border-gray-200">
          <h4 class="font-bold text-purple-900 mb-1">2026年4月（今日）— ホテル予約 + FENAPO 前イベントに参加</h4>
          <p class="text-sm text-gray-700">今すぐ宿泊施設を予約してください。近くにいる場合は、FENAPO 前のイベント（4月18日と24日）を利用して会場に慣れておきましょう。遠方から来られる場合は、カレンダーで日程を確保してください。</p>
        </div>
      </div>
      <div class="relative flex items-start gap-6">
        <div class="flex-shrink-0 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">2</div>
        <div class="flex-1 bg-white p-5 rounded-xl shadow-md border border-gray-200">
          <h4 class="font-bold text-indigo-900 mb-1">2026年5月 — 告知を追う + San Luis Metal Fest を予定に入れる</h4>
          <p class="text-sm text-gray-700">@ferianacionalpotosina のSNSで通知を有効にしてください。San Luis Metal Fest（5月16日）は同じ会場で開催されるもう一つの FENAPO 前イベントで、絶好の物流リハーサルになります。出演者リストは週ごとに引き続き発表されます。</p>
        </div>
      </div>
      <div class="relative flex items-start gap-6">
        <div class="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">3</div>
        <div class="flex-1 bg-white p-5 rounded-xl shadow-md border border-gray-200">
          <h4 class="font-bold text-blue-900 mb-1">2026年6月 — Palenque のチケットアラートを設定</h4>
          <p class="text-sm text-gray-700">ここで Palenque の先行販売が始まります。Grupo Firme、Gloria Trevi、Edén Muñoz は先行販売で売り切れます。fenapo.mx と eticket.mx をブックマークし、気になる各アーティストの Google アラートを作成してください。</p>
        </div>
      </div>
      <div class="relative flex items-start gap-6">
        <div class="flex-shrink-0 w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">4</div>
        <div class="flex-1 bg-white p-5 rounded-xl shadow-md border border-gray-200">
          <h4 class="font-bold text-teal-900 mb-1">2026年7月 — 毎日の物流を計画</h4>
          <p class="text-sm text-gray-700">出演者リストが100%確定します。専用のアーティストガイドを公開します。どの夜に行くか、どれが Palenque でどれが Teatro del Pueblo になるかを計画してください。ホテルと交通を再確認しましょう。</p>
        </div>
      </div>
      <div class="relative flex items-start gap-6">
        <div class="flex-shrink-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">5</div>
        <div class="flex-1 bg-white p-5 rounded-xl shadow-md border border-gray-200">
          <h4 class="font-bold text-green-900 mb-1">2026年8月 — FENAPO を楽しむ</h4>
          <p class="text-sm text-gray-700">遠方から来る場合は1日前に到着してください。夜は Uber/DiDi を使いましょう。現金を持参してください。楽しんで。</p>
        </div>
      </div>
    </div>
  </div>
</div>
</section>

<section id="hospedaje" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-purple-500 pb-3 inline-block">宿泊：後ではなく今すぐ予約</h2>
</div>

<div class="not-prose my-6 bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
  <p class="text-red-900"><strong>⚠️ 重要な期限：</strong> 遠方から来られる方でまだホテルがない場合は、今週中に予約してください。FENAPO 期間中のホテル稼働率は90%を超え、変動価格は6月以降50～100%上昇します。直前に無料でキャンセルする方が、何もない状態でいるよりましです。</p>
</div>

<p class="text-lg leading-relaxed text-gray-700 mb-6">
  実用的なエリアは3つあります。それぞれ異なるタイプに向いています：
</p>

<div class="not-prose overflow-x-auto my-8">
  <table class="min-w-full bg-white border-2 border-gray-200 rounded-xl overflow-hidden shadow-lg">
    <thead class="bg-gradient-to-r from-purple-600 to-indigo-700">
      <tr>
        <th class="px-5 py-3 text-left text-sm font-semibold text-white uppercase">エリア</th>
        <th class="px-5 py-3 text-left text-sm font-semibold text-white uppercase">会場までの時間</th>
        <th class="px-5 py-3 text-left text-sm font-semibold text-white uppercase">こんな人に最適</th>
        <th class="px-5 py-3 text-left text-sm font-semibold text-white uppercase">1泊の価格帯</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-200">
      <tr><td class="px-5 py-3 font-semibold">会場近く（Zona Industrial/Morales）</td><td class="px-5 py-3 text-gray-700">5～10分</td><td class="px-5 py-3 text-gray-700">移動に時間を取られたくない人</td><td class="px-5 py-3 text-gray-700">$700–$1,500 MXN</td></tr>
      <tr class="bg-gray-50"><td class="px-5 py-3 font-semibold">Centro Histórico</td><td class="px-5 py-3 text-gray-700">15～20分</td><td class="px-5 py-3 text-gray-700">フェリアに加えて SLP も楽しみたい人</td><td class="px-5 py-3 text-gray-700">$1,200–$3,000 MXN</td></tr>
      <tr><td class="px-5 py-3 font-semibold">Lomas</td><td class="px-5 py-3 text-gray-700">20～25分</td><td class="px-5 py-3 text-gray-700">家族連れ、チェーンホテル利用者（Fiesta Americana、Hilton）</td><td class="px-5 py-3 text-gray-700">$1,500–$4,000 MXN</td></tr>
    </tbody>
  </table>
</div>

<p class="text-lg leading-relaxed text-gray-700 mb-6">
  私たちのおすすめ：2～3日だけ行くなら、会場近くの Zona Industrial を選びましょう。4日以上滞在して SLP を知りたいなら、Centro Histórico の方が夜の雰囲気やレストランが良く、旅の最後に Huasteca Potosina を訪れる拠点にもなります。
</p>
</section>

<section id="boletos" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-purple-500 pb-3 inline-block">チケット戦略</h2>
</div>

<div class="not-prose bg-green-50 border-2 border-green-300 rounded-xl p-6 my-6">
  <h3 class="text-xl font-bold text-green-900 mb-3">🎉 2026年に無料のもの</h3>
  <ul class="text-green-900 space-y-1">
    <li>✓ フェリアの入場</li>
    <li>✓ Teatro del Pueblo のコンサート（そのステージの全アーティスト）</li>
    <li>✓ 遊具</li>
    <li>✓ 駐車場</li>
  </ul>
</div>

<p class="text-lg leading-relaxed text-gray-700 mb-6">
  FENAPO 2026 で唯一の直接的な費用は Palenque です。先行販売は通常6～7月に始まり、BBVA と Banorte の顧客には先行アクセスがあります。最も需要の高い公演（Grupo Firme、Gloria Trevi、Edén Muñoz）は、先行販売から一般販売開始後48時間の間に売り切れます。
</p>

<div class="not-prose my-8 bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6">
  <h4 class="font-bold text-yellow-900 mb-3">💡 チケットを手に入れる戦術</h4>
  <ul class="space-y-2 text-yellow-900">
    <li><strong>1. 5月からアラートを設定：</strong> アーティスト名 +「palenque FENAPO」で Google アラート。</li>
    <li><strong>2. eticket.mx のアカウントを準備：</strong> 数秒で購入できるよう、先行販売の前にカードと情報を登録しておきましょう。</li>
    <li><strong>3. 先行販売当日は複数の端末で：</strong> パソコン + 電話 + タブレット。サーバーは混雑します。</li>
    <li><strong>4. グループで行くなら VIP テーブルを検討：</strong> 座席が売り切れた後に放出されることが多く、1人あたりでは同程度になります。</li>
    <li><strong>5. SNSでの転売に注意：</strong> eticket.mx が公式チャネルです。非公式チケットの場合は、支払う前にコードを確認してください。</li>
  </ul>
</div>
</section>

<section id="presupuesto" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-purple-500 pb-3 inline-block">1日の予算</h2>
</div>

<p class="text-lg leading-relaxed text-gray-700 mb-6">
  今年 FENAPO が無料であることの利点は、やりたいことに応じて支出を調整できることです。典型的な3つのシナリオ：
</p>

<div class="not-prose grid grid-cols-1 md:grid-cols-3 gap-5 my-8">
  <div class="bg-white border-2 border-gray-200 rounded-xl p-5">
    <h4 class="font-bold text-gray-900 mb-2">節約デー</h4>
    <p class="text-3xl font-bold text-green-700 mb-2">~$500 MXN</p>
    <p class="text-sm text-gray-700 mb-3">(~$29 USD)</p>
    <ul class="text-xs text-gray-600 space-y-1">
      <li>• 交通：$100</li>
      <li>• 軽食：$200</li>
      <li>• 遊具：無料</li>
      <li>• Teatro del Pueblo：無料</li>
      <li>• その他：$200</li>
    </ul>
  </div>
  <div class="bg-white border-2 border-purple-200 rounded-xl p-5 shadow-md">
    <h4 class="font-bold text-gray-900 mb-2">フルデー</h4>
    <p class="text-3xl font-bold text-purple-700 mb-2">~$1,000 MXN</p>
    <p class="text-sm text-gray-700 mb-3">(~$57 USD)</p>
    <ul class="text-xs text-gray-600 space-y-1">
      <li>• 交通：$150</li>
      <li>• 食事×2：$400</li>
      <li>• ビール／飲み物：$250</li>
      <li>• 工芸品：$200</li>
    </ul>
  </div>
  <div class="bg-white border-2 border-amber-200 rounded-xl p-5">
    <h4 class="font-bold text-gray-900 mb-2">Palenque デー</h4>
    <p class="text-3xl font-bold text-amber-700 mb-2">~$1,500 MXN</p>
    <p class="text-sm text-gray-700 mb-3">(~$86 USD)</p>
    <ul class="text-xs text-gray-600 space-y-1">
      <li>• Palenque（スタンド席）：$600–$1,200</li>
      <li>• 夕食：$300</li>
      <li>• 飲み物：$300</li>
      <li>• 交通：$200</li>
    </ul>
  </div>
</div>

<p class="text-sm text-gray-600 italic">2024～2025年の典型的な FENAPO 料金を2026年のインフレで調整した試算に基づきます。</p>
</section>

<section id="transporte" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-purple-500 pb-3 inline-block">会場までの交通</h2>
</div>

<figure class="not-prose my-8">
  <div class="rounded-xl overflow-hidden shadow-lg">
    <img src="https://omxporaecrqsqhzjzvnx.supabase.co/storage/v1/object/public/blog-images/posts/fenapo-2026-cartel-guia-completa-fairgrounds.png" alt="遊具、照明、群衆が見える夕暮れの Recinto Ferial FENAPO の空撮" class="w-full h-auto" loading="lazy" />
  </div>
  <figcaption class="mt-3 text-center text-sm text-gray-600 italic">Recinto Ferial の空撮。混雑を避けるため、週末は 7 PM より前、または 10 PM より後に到着するよう計画してください。</figcaption>
</figure>

<p class="text-lg leading-relaxed text-gray-700 mb-6">
  Recinto Ferial は Centro Histórico から8km の <strong>Av. Fco. Martínez de la Vega No. 255</strong> にあります。FENAPO 期間中の選択肢は次のとおりです：
</p>

<ul class="list-disc pl-6 space-y-2 text-gray-700 mb-6">
  <li><strong>Uber / DiDi：</strong> 駐車場、飲酒、退場時の渋滞を気にしなくて済む、最もおすすめの選択肢です。Centro からの料金：$80–$150 MXN。金曜／土曜の 10 PM 以降は Uber の料金がピークになります。</li>
  <li><strong>自家用車：</strong> 駐車場は無料ですが、週末は 7 PM より前に満車になります。コンサート終了時の退場は遅く（30～45分の列）。</li>
  <li><strong>公共交通機関：</strong> 23、32、52番路線を乗り換えて。おおよそ 10 PM まで運行。1回 $12 MXN。</li>
  <li><strong>SLP 空港から：</strong> タクシー／ライドシェアで20分。プランA：まずホテルへ、プランB：コンサート当日に来るなら直接会場へ。</li>
</ul>
</section>

<section id="empacar" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-purple-500 pb-3 inline-block">持ち物</h2>
</div>

<p class="text-lg leading-relaxed text-gray-700 mb-6">
  San Luis Potosí は標高1,864m にあります。8月の午後は暑く（28～32°C）、夜はかなり涼しくなります（12～16°C）。会場はほとんどが屋外です。必需品は次のとおりです：
</p>

<div class="not-prose grid grid-cols-1 md:grid-cols-2 gap-5 my-8">
  <div class="bg-blue-50 border border-blue-200 rounded-xl p-5">
    <h4 class="font-bold text-blue-900 mb-3">👕 服装</h4>
    <ul class="text-sm text-blue-900 space-y-1">
      <li>• 重ね着：Tシャツ + シャツ + 軽いジャケット</li>
      <li>• 快適なズボン（5～8km 歩きます）</li>
      <li>• 快適な靴（会場は未舗装）</li>
      <li>• 午後用の帽子</li>
    </ul>
  </div>
  <div class="bg-amber-50 border border-amber-200 rounded-xl p-5">
    <h4 class="font-bold text-amber-900 mb-3">🎒 バッグの中に</h4>
    <ul class="text-sm text-amber-900 space-y-1">
      <li>• 日焼け止め SPF 50+</li>
      <li>• 繰り返し使えるボトル（給水所あり）</li>
      <li>• 現金（$500–1000 MXN — 多くの売り子はカード不可）</li>
      <li>• 電話用のモバイルバッテリー</li>
      <li>• 子ども連れならイヤーマフ（Teatro del Pueblo は音が大きい）</li>
    </ul>
  </div>
</div>
</section>

<section id="pre-fenapo" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-purple-500 pb-3 inline-block">FENAPO 前：会場で予行演習</h2>
</div>

<p class="text-lg leading-relaxed text-gray-700 mb-6">
  過小評価されている戦術：FENAPO 前のイベントに行くことです。会場は4月から5月にかけて4つのイベントで活気づきます。大きなフェリアのプレッシャーなしに行けて、駐車場、実際の移動時間、各入口の場所を学べます。そして8月に戻ってきたとき、地元の人のように動けます：
</p>

<div class="not-prose grid grid-cols-1 md:grid-cols-2 gap-5 my-8">
  <div class="bg-white border-2 border-purple-200 rounded-xl p-5">
    <p class="text-xs font-bold text-purple-600 uppercase tracking-wide mb-1">2026年4月18日</p>
    <h4 class="font-bold text-gray-900 mb-2">Duelo de Acordeones</h4>
    <p class="text-sm text-gray-700">ノルテーニョのコンテスト。手頃な入場料、家族的な雰囲気。</p>
  </div>
  <div class="bg-white border-2 border-purple-200 rounded-xl p-5">
    <p class="text-xs font-bold text-purple-600 uppercase tracking-wide mb-1">2026年4月24日</p>
    <h4 class="font-bold text-gray-900 mb-2">Victor Mendivil + Kevin AMF</h4>
    <p class="text-sm text-gray-700">レヒオナル・メヒカーノのダブルビル。</p>
  </div>
  <div class="bg-white border-2 border-purple-200 rounded-xl p-5">
    <p class="text-xs font-bold text-purple-600 uppercase tracking-wide mb-1">2026年5月16日</p>
    <h4 class="font-bold text-gray-900 mb-2">San Luis Metal Fest 2026</h4>
    <p class="text-sm text-gray-700"><a href="/events/san-luis-metal-fest-2026" class="text-blue-700 hover:underline">詳しい特集 →</a></p>
  </div>
  <div class="bg-white border-2 border-purple-200 rounded-xl p-5">
    <p class="text-xs font-bold text-purple-600 uppercase tracking-wide mb-1">2026年5月22～24日</p>
    <h4 class="font-bold text-gray-900 mb-2">Copa Libertadores（バレーボール）</h4>
    <p class="text-sm text-gray-700">国際バレーボールトーナメント。</p>
  </div>
</div>
</section>

<section id="cartel-actual" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-purple-500 pb-3 inline-block">出演者リストの状況 — 記録（出演者リストはすでに完成）</h2>
</div>

<div class="not-prose bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
  <p class="text-gray-700 mb-5">
    <strong>更新（2026年7月1日）：</strong> 完全な公式出演者リストはすでに5月27日に公開されました。このセクションは4月時点の記録として残しています — 夜ごとの最終カレンダー（Foro で21夜無料 + Palenque で14夜）は、<a href="/blog/fenapo-2026-artistas-cartel-completo" class="text-purple-700 underline font-semibold">FENAPO 2026 アーティスト完全ガイド</a>にあります。
  </p>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <h4 class="font-bold text-purple-900 mb-3">🎤 Teatro del Pueblo（無料）</h4>
      <ul class="space-y-2 text-sm text-gray-700">
        <li>✓ Sin Bandera（ポップバラード）</li>
        <li>✓ Los Acosta（地域的なクンビア）</li>
        <li>✓ Kenia Os（ポップ／アーバン）</li>
        <li class="text-gray-500 italic">⧗ 国際的なアーティスト2組が発表待ち</li>
      </ul>
    </div>
    <div>
      <h4 class="font-bold text-amber-900 mb-3">🤠 Palenque（チケット）</h4>
      <ul class="space-y-2 text-sm text-gray-700">
        <li>✓ Grupo Firme</li>
        <li>✓ Edén Muñoz</li>
        <li>✓ Gloria Trevi</li>
        <li>✓ Los Invasores de Nuevo León</li>
        <li>✓ Los Cardenales de Nuevo León</li>
        <li>✓ Los Viejones de Linares</li>
        <li class="text-green-700 font-semibold">✓ 出演者リスト完成</li>
      </ul>
    </div>
  </div>
  <p class="text-xs text-gray-500 italic mt-5 pt-4 border-t border-gray-200">fenapo.slp.gob.mx、feriafenapo.com、Noticieros SLP、Frontal Noticias と照合して確認済み。</p>
</div>

<p class="text-lg leading-relaxed text-gray-700 mb-6">
  <strong>更新の追い方：</strong> 公式アカウント <a href="https://www.facebook.com/ferianacionalpotosina" target="_blank" rel="noopener" class="text-blue-700 hover:underline">@ferianacionalpotosina</a> の Facebook と Instagram が最初に発表します。<a href="https://fenapo.slp.gob.mx" target="_blank" rel="noopener" class="text-blue-700 hover:underline">fenapo.slp.gob.mx</a> は知事の公式発表を掲載します。Teatro del Pueblo の残り2組の国際的な出演者が発表され次第、記事を公開します。
</p>
</section>

<section id="tips-foraneos" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-purple-500 pb-3 inline-block">遠方から来られる場合（CDMX、Guadalajara、Monterrey、USA）</h2>
</div>

<p class="text-lg leading-relaxed text-gray-700 mb-6">
  SLP は混雑した観光地ではないため、San Miguel de Allende のような大規模な英語対応サービスや構造化された「ツアーパッケージ」はありません。これは3つのことを意味します：
</p>

<ul class="list-disc pl-6 space-y-3 text-gray-700 mb-6">
  <li><strong>現金を持参：</strong> 多くの食べ物や工芸品の売り子は現金のみ受け付けます。銀行やATMは Centro と Lomas で問題なく利用できます。</li>
  <li><strong>スペイン語が役立ちます：</strong> 会場のスタッフは英語をあまり話しません。基本的なフレーズを覚えるか、Google 翻訳をオフラインで使いましょう。Uber/DiDi は両方の言語で機能します。</li>
  <li><strong>1日前に到着：</strong> 飛行機で来るなら前日に着陸を。SLP 空港は CDMX、Houston、Dallas からの直行便があります。</li>
  <li><strong>他の体験と組み合わせる：</strong> UNESCO の Centro Histórico、Parque Tangamanga、Real de Catorce（3時間）や Huasteca Potosina（4時間）。旅を2～3日延ばす価値があります。</li>
</ul>
</section>

<section id="faq" class="mb-16 scroll-mt-8 speakable">
<div class="not-prose mb-6">
  <h2 id="faq-heading" class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-purple-500 pb-3 inline-block">よくある質問</h2>
</div>

<div class="space-y-5">
  <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
    <h3 class="font-bold text-lg text-gray-900 mb-2">いつホテルを予約すべきですか？</h3>
    <p class="text-gray-700">2026年4月から5月の間です。8月の稼働率は90%を超え、変動価格は6月以降50～100%上昇します。7月まで待つと、はるかに多く支払うか、会場近くの空室が見つからないことになります。</p>
  </div>
  <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
    <h3 class="font-bold text-lg text-gray-900 mb-2">推奨される1日の予算はいくらですか？</h3>
    <p class="text-gray-700">節約デーは $500 MXN（~$29 USD）、食事と飲み物込みのフルデーは $1,000 MXN（~$57 USD）、Palenque を含めると $1,500+ MXN（~$86 USD）です。入場、遊具、Teatro del Pueblo は無料です。</p>
  </div>
  <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
    <h3 class="font-bold text-lg text-gray-900 mb-2">何を荷造りすべきですか？</h3>
    <p class="text-gray-700">重ね着（標高1,864mのため午後は暑く、夜は寒い）、歩きやすい靴、日焼け止め、帽子、繰り返し使えるボトル、現金。子ども連れならモバイルバッテリーとイヤーマフ。</p>
  </div>
  <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
    <h3 class="font-bold text-lg text-gray-900 mb-2">各コンサートの正確な日程はいつ発表されますか？</h3>
    <p class="text-gray-700">政府は4月から7月にかけて段階的に発表します。fenapo.slp.gob.mx と @ferianacionalpotosina をフォローしてください。アーティストや日程が確定するたびに、このガイドを更新します。</p>
  </div>
  <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
    <h3 class="font-bold text-lg text-gray-900 mb-2">子ども連れで行く場合はどうですか？</h3>
    <p class="text-gray-700">FENAPO はとても家族向けです。子ども向けエリア、無料の遊具、文化ショーがあります。Teatro del Pueblo では子ども用のイヤーマフを持参してください。子どもが小さい場合は週末の 8 PM 以降を避けてください — 人混みが倍増します。</p>
  </div>
  <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
    <h3 class="font-bold text-lg text-gray-900 mb-2">一人で行けますか？</h3>
    <p class="text-gray-700">はい。会場は厳重に警備されています。遊具は日中の時間帯を選び、夜の帰りには Uber/DiDi を使ってください。</p>
  </div>
  <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
    <h3 class="font-bold text-lg text-gray-900 mb-2">100%確定した出演者リストはいつ公開されますか？</h3>
    <p class="text-gray-700">最後のアーティスト（Teatro del Pueblo の国際的な2組）は通常5月から7月の間に発表されます。100%確定したら、アーティストとその日程だけについての2本目の詳細記事を公開します。</p>
  </div>
</div>
</section>

<section id="fuentes" class="mb-12 scroll-mt-8">
<div class="not-prose bg-gray-50 border border-gray-200 rounded-2xl p-6">
  <h2 class="text-xl font-bold text-gray-900 mb-3">出典と検証</h2>
  <p class="text-sm text-gray-600 mb-4">2026年4月18日時点で公式の出典と照合して確認済み。新しい情報が出次第、更新します。</p>
  <ul class="space-y-2 text-sm text-gray-700">
    <li>→ <a href="https://fenapo.slp.gob.mx/" class="text-blue-700 hover:underline" target="_blank" rel="noopener">fenapo.slp.gob.mx — SLP 政府公式サイト</a></li>
    <li>→ <a href="https://www.feriafenapo.com/" class="text-blue-700 hover:underline" target="_blank" rel="noopener">feriafenapo.com — フェリア公式ポータル</a></li>
    <li>→ <a href="https://noticierosslp.com/2026/03/05/fenapo-perfila-cartelera-completa-palenque-listo-y-teatro-del-pueblo-casi-definido/" class="text-blue-700 hover:underline" target="_blank" rel="noopener">Noticieros SLP — 出演者リストの状況</a></li>
    <li>→ <a href="https://www.frontalnoticias.com/san-luis-potosi/gob-slp/kenia-os-y-eden-munoz-nuevos-artistas-confirmados-para-la-fenapo-2026/" class="text-blue-700 hover:underline" target="_blank" rel="noopener">Frontal Noticias — 知事の最新発表</a></li>
  </ul>
</div>
</section>

<div class="not-prose mt-10 bg-gradient-to-r from-purple-50 to-indigo-50 border-2 border-purple-200 p-8 rounded-2xl">
  <h3 class="text-2xl font-bold text-gray-900 mb-3">次のステップ</h3>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
    <a href="/events/fenapo-2026" class="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      <p class="font-semibold text-gray-900">→ 公式イベントページ</p>
      <p class="text-sm text-gray-600">最新の出演者リスト、会場マップ、JSON-LD スキーマ</p>
    </a>
    <a href="/events/san-luis-metal-fest-2026" class="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      <p class="font-semibold text-gray-900">→ San Luis Metal Fest（5月16日）</p>
      <p class="text-sm text-gray-600">FENAPO 前の最初の会場予行演習</p>
    </a>
    <a href="/resources/living-guide" class="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      <p class="font-semibold text-gray-900">→ SLP 完全ガイド</p>
      <p class="text-sm text-gray-600">数日間、遠方から来られる方向け</p>
    </a>
    <a href="/blog/ultimate-guide-living-san-luis-potosi-2026" class="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      <p class="font-semibold text-gray-900">→ 2026年 駐在員・ノマド向けガイド</p>
      <p class="text-sm text-gray-600">予算、地区、インターネット、ビザ</p>
    </a>
  </div>
</div>`;

function countTags(html) {
  return (html.match(/<[^>]+>/g) || []).length;
}

function jsonLdValid(html) {
  const m = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  if (!m) return false;
  try { JSON.parse(m[1]); return true; } catch { return false; }
}

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

  const enTags = countTags(data.content);
  console.log('EN tag tokens:', enTags);
  console.log('DE tag tokens:', countTags(CONTENT_DE), '| JSON-LD valid:', jsonLdValid(CONTENT_DE));
  console.log('JA tag tokens:', countTags(CONTENT_JA), '| JSON-LD valid:', jsonLdValid(CONTENT_JA));

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

  const checks = {
    'DE differs from EN': check.content_de !== check.content,
    'JA differs from EN': check.content_ja !== check.content,
    'DE JSON-LD valid': jsonLdValid(check.content_de),
    'JA JSON-LD valid': jsonLdValid(check.content_ja),
    'DE tag count == EN': countTags(check.content_de) === enTags,
    'JA tag count == EN': countTags(check.content_ja) === enTags,
    'DE keeps FENAPO': check.content_de.includes('FENAPO 2026'),
    'JA keeps FENAPO': check.content_ja.includes('FENAPO 2026'),
    'DE keeps price $1,500 MXN': check.content_de.includes('$1,500 MXN'),
    'JA keeps price $1,500 MXN': check.content_ja.includes('$1,500 MXN'),
    'DE keeps altitude 1,864m': check.content_de.includes('1,864m'),
    'JA keeps altitude 1,864m': check.content_ja.includes('1,864m'),
    'DE keeps startDate 2026-08-01': check.content_de.includes('"startDate":"2026-08-01"'),
    'JA keeps startDate 2026-08-01': check.content_ja.includes('"startDate":"2026-08-01"'),
  };
  let ok = true;
  for (const [name, pass] of Object.entries(checks)) {
    console.log(`  ${pass ? 'PASS' : 'FAIL'}  ${name}`);
    ok = ok && pass;
  }

  console.log('\nEN tags:', enTags, 'DE tags:', countTags(check.content_de), 'JA tags:', countTags(check.content_ja));
  console.log(ok ? '\nAll checks passed.' : '\nSome checks failed — review output.');
  process.exit(ok ? 0 : 1);
}

main();
