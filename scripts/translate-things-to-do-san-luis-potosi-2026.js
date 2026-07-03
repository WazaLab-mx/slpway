// Idempotent: replaces the English-mirror content_de / content_ja of the
// blog post `things-to-do-san-luis-potosi-2026` with genuine native German and
// Japanese translations. HTML structure, attributes, hrefs and JSON-LD keys are
// preserved verbatim; only human-readable text nodes and JSON string values are
// translated. Verifies by re-fetching after the update.
require('dotenv').config({ path: '.env' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const SLUG = 'things-to-do-san-luis-potosi-2026';

const CONTENT_DE = `<div class="max-w-none">

<p class="text-xl leading-relaxed text-gray-800 mb-8 font-medium">
  <strong>San Luis Potosí belohnt alle, die wirklich hier haltmachen.</strong> Ein von der UNESCO gelisteter kolonialer Stadtkern auf 1.863 m Höhe, Mexikos zweitgrößter Stadtpark, das weltweit einzige Leonora-Carrington-Museum, silberne Geisterstädte 35 Minuten entfernt und dahinter die Wasserfälle der Huasteca – dies ist unsere lokale, faktengeprüfte Liste mit 50 Dingen, die man tun kann, mit verifizierten Preisen und Öffnungszeiten, wo immer es sie gibt.
</p>

<div class="speakable bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-200 rounded-2xl p-6 md:p-8 mb-10">
  <p class="text-base md:text-lg text-gray-800 leading-relaxed">
    <strong>Die Kurzfassung:</strong> Erkunden Sie zu Fuß das rund 3 km lange Fußgänger-Centro, besuchen Sie das Carrington-Museum + Centro de las Artes mit einem einzigen Ticket für MX$55 (mittwochs kostenlos), gönnen Sie dem Tangamanga I einen Vormittag (kostenlos, 411 ha), essen Sie Enchiladas potosinas und machen Sie einen Tagesausflug nach Cerro de San Pedro oder Real de Catorce – und wenn Sie mehr als 3 zusätzliche Tage haben, fahren Sie in die Huasteca. Die Anreise ist ebenfalls einfach: ~4,5 Std. von Mexiko-Stadt über die Autobahn 57D, Flughafentaxi zum Festpreis ~MX$275, und der MetroRed-BRT ist tatsächlich kostenlos.
  </p>
</div>


<section class="mb-12">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-orange-500 pb-3 inline-block">Centro Histórico & Architektur</h2>
</div>
<div class="space-y-6">

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">1.</span>Erkunden Sie das Fußgängerherz des Centro</h3>
    <p class="text-sm text-gray-700 leading-relaxed">Rund 3 km Fußgängerstraßen – Calzada de Guadalupe, Zaragoza und Hidalgo – durchziehen einen kolonialen Kern, den die UNESCO 2010 als Teil der Welterbe-Route Camino Real de Tierra Adentro eingetragen hat. Es ist die mit Abstand beste kostenlose Aktivität der Stadt, und unser <a href='/centro-historico' class='text-orange-600 underline font-semibold'>Centro-Histórico-Führer</a> kartiert den gesamten Rundgang Platz für Platz.</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">2.</span>Plaza de Armas & die Kathedrale</h3>
    <p class="text-sm text-gray-700 leading-relaxed">Die Catedral Metropolitana de San Luis Rey wurde zwischen 1670 und 1730 im mexikanischen Barock errichtet und erst 1854 zur Kathedrale erhoben. Ergattern Sie in der Abenddämmerung eine Bank auf der Plaza de Armas, wenn die Cantera-Fassade beleuchtet wird – und machen Sie dann weiter mit unserem <a href='/cultural-attractions' class='text-orange-600 underline font-semibold'>Führer zu kulturellen Sehenswürdigkeiten</a>.</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">3.</span>Templo del Carmen & Plaza del Carmen</h3>
    <p class="text-sm text-gray-700 leading-relaxed">Der Templo del Carmen aus dem 18. Jahrhundert mit seiner überschwänglich gemeißelten Steinfassade und der gefliesten Kuppel bildet das Herzstück des fotogensten Platzes der Stadt. Der Platz bietet Ihnen drei Stationen auf einmal: die Kirche, das Teatro de la Paz nebenan und das Museo Nacional de la Máscara gegenüber.</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">4.</span>Teatro de la Paz</h3>
    <p class="text-sm text-gray-700 leading-relaxed">Erbaut 1889–1894 während des Porfiriato vom Architekten José Noriega und am 4. November 1894 mit Donizettis Lucrezia Borgia eingeweiht; seine Kuppel wurde in Paris gefertigt. Es beherbergt noch heute Orchester, Ballett und Theater – prüfen Sie das aktuelle Programm und erleben Sie eine Aufführung in einem der großen historischen Theater Mexikos.</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">5.</span>Fahren Sie mit der Touristen-Tranvía</h3>
    <p class="text-sm text-gray-700 leading-relaxed">Eine rund einstündige Panoramarunde vorbei an der Kathedrale, San Agustín, San Miguelito und der Calzada, die alle ~30 Minuten neben dem Jardín de San Juan de Dios abfährt. Zwei Betreiber bedienen die Strecke, und die veröffentlichten Preise variieren (etwa MX$100–150) – erkundigen Sie sich beim Einsteigen. Weitere Ideen für den Ankunftstag finden Sie in unserem <a href='/visit-san-luis-potosi' class='text-orange-600 underline font-semibold'>Besucherführer</a>.</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">6.</span>Verfolgen Sie die Geschichte der Silberstadt</h3>
    <p class="text-sm text-gray-700 leading-relaxed">Die Silberfunde von 1592 im nahen Cerro de San Pedro gaben dem Bundesstaat seinen Namen und machten San Luis Potosí zur drittwichtigsten Stadt des Vizekönigreichs, nur hinter Mexiko-Stadt und Puebla. Unser <a href='/cultural/history' class='text-orange-600 underline font-semibold'>Geschichtsführer</a> verbindet den Bergbau-Boom mit der barocken Skyline, die Sie heute sehen.</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">7.</span>Calzada de Guadalupe bis zur Caja del Agua</h3>
    <p class="text-sm text-gray-700 leading-relaxed">Schlendern Sie über die baumgesäumte Calzada – die lange Prozessionsachse des Fußgängernetzes – vorbei am neoklassizistischen Brunnen Caja del Agua, einem der Wahrzeichen der Stadt, bis zur Basílica de Guadalupe. An Sonntagvormittagen füllt sie sich mit Familien, Läufern und Händlern.</p>
  </div>
</div>
</section>

<section class="mb-12">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-orange-500 pb-3 inline-block">Museen & Kultur</h2>
</div>
<div class="space-y-6">

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">8.</span>Museo Leonora Carrington</h3>
    <p class="text-sm text-gray-700 leading-relaxed">Das weltweit erste Museum, das der britisch-mexikanischen Surrealistin gewidmet ist, wurde am 22. März 2018 im ehemaligen Gefängnis der Stadt eröffnet. Der Eintritt beträgt regulär MX$55 (Juli 2026) und schließt das Centro de las Artes ein; mittwochs ist er kostenlos, Di–So 10–18 Uhr. Die ganze Geschichte finden Sie in unserer <a href='/blog/leonora-carrington-san-luis-potosi-museo-centro-artes-surrealism' class='text-orange-600 underline font-semibold'>ausführlichen Leonora-Carrington-Reportage</a>.</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">9.</span>Centro de las Artes Centenario</h3>
    <p class="text-sm text-gray-700 leading-relaxed">Das Gebäude selbst ist die Attraktion: ein von Carlos Suárez Fiallo entworfenes Panoptikum-Gefängnis, 1890 eröffnet und von 1904 bis 1999 als Staatsgefängnis betrieben – heute Galerien, Werkstätten und Gärten dort, wo die Zellentrakte waren. Ihr Carrington-Ticket schließt es ein; durchstreifen Sie die radial angeordneten Flügel.</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">10.</span>Museo Nacional de la Máscara</h3>
    <p class="text-sm text-gray-700 leading-relaxed">Mexikos nationale Maskensammlung füllt den Palacio Martí aus dem 19. Jahrhundert an der Plaza del Carmen – Ritual- und Tanzmasken aus dem ganzen Land. Der Eintritt beträgt regulär MX$20, für Studierende/Kinder/INAPAM MX$10 (verifiziert Juli 2026); die Öffnungszeiten liegen etwa Montag–Samstag 10–21 Uhr und Sonntag 11–19 Uhr (aktuellen Zeitplan bestätigen).</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">11.</span>Museo Federico Silva</h3>
    <p class="text-sm text-gray-700 leading-relaxed">Ein der zeitgenössischen Skulptur gewidmetes Museum – eine Seltenheit in Lateinamerika – in einem markanten Gebäude neben dem Jardín de San Juan de Dios (Álvaro Obregón 80). MX$30 regulär, sonntags kostenlos, dienstags geschlossen (verifiziert Juli 2026).</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">12.</span>Museo Regional Potosino & Capilla de Aranzazú</h3>
    <p class="text-sm text-gray-700 leading-relaxed">Untergebracht in einem ehemaligen Franziskanerkloster, bewahrt das von der INAH betriebene Regionalmuseum im Erdgeschoss vorspanische Huasteca-Stücke und im Obergeschoss die barocke Capilla de Aranzazú – eine im ersten Stock errichtete Kapelle, eine Rarität. Prüfen Sie die aktuellen Öffnungszeiten (Zeiten und Gebühren der INAH ändern sich).</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">13.</span>Timen Sie Ihre Reise auf ein Festival</h3>
    <p class="text-sm text-gray-700 leading-relaxed">Der Kalender der Stadt ist prall gefüllt: die Frühlingsfestival-Saison rund um das <a href='/festival-primavera-2026' class='text-orange-600 underline font-semibold'>Festival de Primavera</a>, die Prozessionen der Semana Santa und die Augustmesse. Unser <a href='/cultural/festivals' class='text-orange-600 underline font-semibold'>Festivalführer</a> gibt einen Überblick über das ganze Jahr, damit Sie Ihre Termine gezielt wählen können.</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">14.</span>Hören Sie Huapango, den Klang der Huasteca</h3>
    <p class="text-sm text-gray-700 leading-relaxed">Das östliche Drittel des Bundesstaates ist Huasteca-Land, und sein Son huasteco – Falsett-Verse über Trio-Saiten, hart getanzt auf Holzpodesten – ist bei den Peñas und Festivals der Stadt zu erleben. Wo Sie traditionelle Musik und Tanz erleben können, verrät unser <a href='/cultural/music-dance' class='text-orange-600 underline font-semibold'>Musik- & Tanzführer</a>.</p>
  </div>
</div>
</section>

<section class="mb-12">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-orange-500 pb-3 inline-block">Essen & Trinken</h2>
</div>
<div class="space-y-6">

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">15.</span>Essen Sie Enchiladas potosinas dort, wo sie hingehören</h3>
    <p class="text-sm text-gray-700 leading-relaxed">Mit Chili gefärbter Maisteig, um Käse gefaltet, frittiert und mit Crema garniert – das Wahrzeichengericht der Stadt, ergänzt durch Asado de boda und Queso de tuna aus dem Altiplano. Beginnen Sie mit unserem <a href='/traditional-cuisine' class='text-orange-600 underline font-semibold'>Führer zur traditionellen Küche</a> und tauchen Sie tiefer ein mit dem <a href='/guides/foodie-guide' class='text-orange-600 underline font-semibold'>Feinschmecker-Führer</a>.</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">16.</span>Machen Sie die Brunch-Runde</h3>
    <p class="text-sm text-gray-700 leading-relaxed">Die Stadt hat inzwischen eine echte Brunch-Szene – Cuatro Almas in Lomas serviert seine Chipotle-Chilaquiles und Eggs Benedict von 8 bis 14 Uhr, und neun weitere Adressen haben es auf unsere faktengeprüfte Liste geschafft. Die komplette Übersicht: <a href='/blog/best-brunch-spots-san-luis-potosi' class='text-orange-600 underline font-semibold'>die besten Brunch-Adressen in San Luis Potosí</a>.</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">17.</span>Frühstücken Sie wie ein Potosino</h3>
    <p class="text-sm text-gray-700 leading-relaxed">Gefüllte Gorditas vom Comal, Café de olla und Saftstände – morgens isst die Stadt am besten und am günstigsten. Unser <a href='/breakfast-spots-san-luis-potosi' class='text-orange-600 underline font-semibold'>Frühstücksführer</a> und die <a href='/category/open-for-breakfast' class='text-orange-600 underline font-semibold'>Einträge zu Frühstückslokalen</a> im Verzeichnis liefern die Adressen.</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">18.</span>Schlemmen Sie im Mercado República</h3>
    <p class="text-sm text-gray-700 leading-relaxed">Ein lebendiger Nachbarschaftsmarkt mit Frühstücks- und Brunch-Ständen, für die sich die Einheimischen tatsächlich anstellen. Gehen Sie am späten Vormittag hungrig hin, bestellen Sie das, was der Stand neben Ihnen gerade isst, und zahlen Sie bar.</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">19.</span>Kaufen Sie auf den Bauernmärkten ein</h3>
    <p class="text-sm text-gray-700 leading-relaxed">Wochenend-Tianguis und Biomärkte verkaufen Altiplano-Käse, Mesquite-Mehl, Pulque-Brot und Erzeugnisse direkt von den Bauern. Tage und Standorte finden Sie im <a href='/farmers-markets-san-luis-potosi' class='text-orange-600 underline font-semibold'>Führer zu Bauernmärkten</a>, mit mehr in unseren <a href='/category/local-organic-products' class='text-orange-600 underline font-semibold'>Einträgen zu lokalen & Bio-Produkten</a>.</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">20.</span>Kosten Sie die Weinszene von San Luis Potosí</h3>
    <p class="text-sm text-gray-700 leading-relaxed">San Luis Potosí hat eine kleine, aber echte Weingeschichte – Weinberge in großer Höhe und eine wachsende Weinkarte in den Restaurants der Stadt. Unser <a href='/guides/potosino-wine-scene' class='text-orange-600 underline font-semibold'>Führer zum potosinischen Wein</a> zeigt, wer was macht und wo man ihn trinken kann.</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">21.</span>Besuchen Sie ein Food-Festival</h3>
    <p class="text-sm text-gray-700 leading-relaxed">Der Großraum veranstaltet das ganze Jahr über Food-Feste – die Feria de la Enchilada im benachbarten Soledad ist der Klassiker. Die Termine finden Sie in unserem <a href='/food-festivals-san-luis-potosi' class='text-orange-600 underline font-semibold'>Führer zu Food-Festivals</a> und auf der <a href='/events/feria-de-la-enchilada-2026' class='text-orange-600 underline font-semibold'>Eventseite der Feria de la Enchilada</a>.</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">22.</span>Arbeiten (oder verweilen) Sie in der Café-Szene</h3>
    <p class="text-sm text-gray-700 leading-relaxed">Spezialitätenkaffee hat das Centro und den Carranza-Korridor erobert, und zahlreiche Cafés heißen Laptops willkommen. Die <a href='/category/remote-work-cafes' class='text-orange-600 underline font-semibold'>Liste der Remote-Work-Cafés</a> und unser <a href='/digital-nomad-guide' class='text-orange-600 underline font-semibold'>Digital-Nomad-Führer</a> sortieren sie nach WLAN, Steckdosen und Öffnungszeiten.</p>
  </div>
</div>
</section>

<section class="mb-12">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-orange-500 pb-3 inline-block">Parks & Natur</h2>
</div>
<div class="space-y-6">

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">23.</span>Verlieren Sie sich im Parque Tangamanga I</h3>
    <p class="text-sm text-gray-700 leading-relaxed">Mit 411 Hektar ist er Mexikos zweitgrößter Stadtpark – größer als der New Yorker Central Park (340 ha) – und der Eintritt ist frei, mit Abendöffnung bis 22:30 Uhr von Dienstag bis Samstag. Radrundwege, See, Planetarium, Freilichttheater: Unser <a href='/parque-tangamanga' class='text-orange-600 underline font-semibold'>Tangamanga-I-Führer</a> deckt alles ab.</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">24.</span>Besuchen Sie den kostenlosen Zoo im Tangamanga</h3>
    <p class="text-sm text-gray-700 leading-relaxed">Die Wildtierstation des Parks beherbergt gerettete Arten und verlangt keinen Eintritt – geöffnet Dienstag–Sonntag, 9–17 Uhr (verifiziert 2026). Verbinden Sie den Besuch mit dem kostenlosen japanischen und dem botanischen Garten beim selben Ausflug.</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">25.</span>Fahren Sie zum Parque Tangamanga II</h3>
    <p class="text-sm text-gray-700 leading-relaxed">Das Geschwister im Norden ist kleiner und wilder – bevorzugt von Radfahrern und Läufern, die weniger Menschenmassen wollen. Unser <a href='/parque-tangamanga-ii' class='text-orange-600 underline font-semibold'>Tangamanga-II-Führer</a> hat Wege und praktische Infos.</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">26.</span>Nehmen Sie die Kinder mit zum Parque de Morales</h3>
    <p class="text-sm text-gray-700 leading-relaxed">Am 19. Mai 1924 gegründet und um einen 1968 angelegten künstlichen See herum angeordnet, hat der beliebte, über hundert Jahre alte Park der Stadt nach einer staatlichen Sanierung für rund 100 Millionen Pesos frisch renoviert wiedereröffnet. Er führt unsere Rangliste der <a href='/blog/best-parks-for-kids-san-luis-potosi' class='text-orange-600 underline font-semibold'>besten Parks für Kinder</a> an.</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">27.</span>Erwandern Sie die Industriegeschichte im Parque Bicentenario</h3>
    <p class="text-sm text-gray-700 leading-relaxed">Im November 2010 auf dem Gelände einer ehemaligen Kupferhütte eröffnet, bewahrt er fünfzehn Maschinen als Freilichtskulpturen zwischen 33 Baumarten. Einer der interessanteren aus Industrieanlagen zurückgewonnenen Parks des Landes, und selten überlaufen.</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">28.</span>Wandern Sie in der Sierra de Álvarez</h3>
    <p class="text-sm text-gray-700 leading-relaxed">Die Kiefern- und Eichenwand eine Stunde östlich an der Autobahn 70 bietet Wege für jedes Niveau bei Las Rusias, El Milagro und San Francisco, dazu anspruchsvolles Mountainbiking. Keine feste Eintrittsgebühr (von Ejidos betriebene Stellen können für Parken kassieren); weitere Routen in unserem <a href='/outdoors' class='text-orange-600 underline font-semibold'>Outdoor-Führer</a>.</p>
  </div>
</div>
</section>

<section class="mb-12">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-orange-500 pb-3 inline-block">Tagesausflüge aus der Stadt</h2>
</div>
<div class="space-y-6">

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">29.</span>Cerro de San Pedro, der Ort, der dem Bundesstaat den Namen gab</h3>
    <p class="text-sm text-gray-700 leading-relaxed">Die halb verlassene Bergbaustadt von 1592 liegt 22 km entfernt (~35 Minuten) – Kopfsteinpflaster, dachlose Steinhäuser, ein begehbarer Minenstollen und Gorditas am Wochenende, sogar mit dem Stadtbus der Ruta 39 erreichbar. Damit beginnt unser <a href='/blog/day-trips-from-san-luis-potosi-2026' class='text-orange-600 underline font-semibold'>verifizierter Tagesausflug-Führer</a>.</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">30.</span>Kaufen Sie einen Rebozo in Santa María del Río</h3>
    <p class="text-sm text-gray-700 leading-relaxed">Die 'Wiege des Rebozo' – seit 2020 ein Pueblo Mágico, 40 Minuten südlich – färbt und webt noch immer Seidentücher im Ikat-Verfahren auf Hüftwebstühlen, eine Tradition, die von der Taller Escuela de Rebocería (gegründet 1953) fortgeführt wird. Busse fahren ständig für etwa MX$40–70.</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">31.</span>Baden Sie im Balneario Gogorrón</h3>
    <p class="text-sm text-gray-700 leading-relaxed">Thermalwasser mit ~42 °C speist fünf Becken eine Stunde südlich, 2023 vom Bundesstaat neu eröffnet (MX$100–120 laut den zuletzt veröffentlichten Preisen – vor dem Besuch bestätigen). Zehn Minuten entfernt kann man die Ex-Hacienda Gogorrón von 1592 – wo Die Maske des Zorro gedreht wurde – kostenlos erkunden.</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">32.</span>Schnorcheln Sie in der Quelle Media Luna</h3>
    <p class="text-sm text-gray-700 leading-relaxed">Eine Sichel aus unglaublich klarem Thermalwasser bei Rioverde, ganzjährig 27–30 °C mit Sichtweiten bis zu 30 m und versteinerten Bäumen am Grund. Eintritt MX$100 für Erwachsene (Stand Mitte 2025; eine Erhöhung wird kolportiert – bestätigen unter 487 101 5874); etwa zwei Autostunden entfernt.</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">33.</span>Machen Sie die Pilgerfahrt nach Real de Catorce</h3>
    <p class="text-sm text-gray-700 leading-relaxed">Betreten Sie die silberne Geisterstadt auf 2.730 m durch den einspurigen, 2,3 km langen Ogarrio-Tunnel (1901 eröffnet) – Willys-Jeeps, das Pueblo Fantasma und eine Pueblo-Mágico-Auszeichnung aus dem Jahr 2001. Langer Tagesausflug oder besser mit Übernachtung: Unser <a href='/blog/real-de-catorce-guide-2026' class='text-orange-600 underline font-semibold'>vollständiger Real-de-Catorce-Führer</a> deckt beides ab.</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">34.</span>Dehnen Sie einen Tagesausflug auf ein Wochenende aus</h3>
    <p class="text-sm text-gray-700 leading-relaxed">Die Schauhöhle von Guadalcázar, die Ausgangspunkte für Sierra-Wanderungen und die Thermalquellen-Orte belohnen alle ein langsameres Tempo. Unser <a href='/weekend-getaways' class='text-orange-600 underline font-semibold'>Führer zu Wochenendausflügen</a> sortiert die Karte für Zwei-Tages-Pläne neu.</p>
  </div>
</div>
</section>

<section class="mb-12">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-orange-500 pb-3 inline-block">Die Huasteca Potosina (zusätzliche Nächte wert)</h2>
</div>
<div class="space-y-6">

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">35.</span>Machen Sie Ciudad Valles zu Ihrem Standort</h3>
    <p class="text-sm text-gray-700 leading-relaxed">Der Knotenpunkt der Huasteca liegt 251 km (~4 Std.) von der Hauptstadt entfernt über die MEX-70; Busse brauchen ~4 Std. 15 ab etwa MX$598. Die Wasserfälle leuchten von November bis April türkis. Planen Sie die Reise mit unserem <a href='/blog/huasteca-potosina-itinerary-2026' class='text-orange-600 underline font-semibold'>3/5/7-Tage-Huasteca-Reiseplan</a> – es ist bewusst kein Tagesausflug.</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">36.</span>Erkunden Sie Edward James' Las Pozas in Xilitla</h3>
    <p class="text-sm text-gray-700 leading-relaxed">Surrealistische Beton-Follies im Dschungel, über zwei Jahrzehnte errichtet, nachdem ein Frost 1962 James' Orchideen vernichtet hatte. Regeln für 2026: Reservieren Sie online eine zeitlich festgelegte Eintrittsberechtigung 24 Std. bis 60 Tage im Voraus, bezahlen Sie am Eingang (MX$180 für Erwachsene + obligatorische Führung MX$30 auf Spanisch / MX$60 auf Englisch), dienstags geschlossen. Alle Details: <a href='/blog/xilitla-las-pozas-guide-2026' class='text-orange-600 underline font-semibold'>unser Xilitla-Führer</a>.</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">37.</span>Paddeln Sie zur Cascada de Tamul</h3>
    <p class="text-sm text-gray-700 leading-relaxed">Mit 105 m ist der Tamul der höchste Wasserfall des Bundesstaates und stürzt in eine Schlucht des Río Santa María nördlich von Aquismón. Die meisten Besucher erreichen ihn, indem sie flussaufwärts in einer geteilten Holz-Lancha paddeln – eine Stunde Rudern, die die halbe Erfahrung ausmacht.</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">38.</span>Beobachten Sie die Segler am Sótano de las Golondrinas</h3>
    <p class="text-sm text-gray-700 leading-relaxed">Eine 512 m tiefe vertikale Höhle (376 m freier Fall) bei Tamapatz, in der Tausende Vögel im Morgengrauen spiralförmig herausströmen und in der Abenddämmerung zurücktauchen. Rechnen Sie mit einem ~15-minütigen Fußweg plus rund 586 Stufen hinab zu den Aussichtspunkten am Rand.</p>
  </div>
</div>
</section>

<section class="mb-12">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-orange-500 pb-3 inline-block">Events & Saisonales</h2>
</div>
<div class="space-y-6">

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">39.</span>FENAPO – die nationale Messe, im August</h3>
    <p class="text-sm text-gray-700 leading-relaxed">Die Feria Nacional Potosina findet vom 7. bis 30. August 2026 im Recinto Ferial statt, mit 21 kostenlosen Foro-de-las-Estrellas-Konzerten – Katy Perry (25. Aug.) und Mötley Crüe (8. Aug.) sind dieses Jahr die Headliner – dazu Palenque-Abende mit Eintritt. Siehe die <a href='/events/fenapo-2026' class='text-orange-600 underline font-semibold'>Eventseite der FENAPO 2026</a> und das <a href='/blog/fenapo-2026-artistas-cartel-completo' class='text-orange-600 underline font-semibold'>vollständige verifizierte Line-up</a>.</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">40.</span>Semana Santa & die Procesión del Silencio</h3>
    <p class="text-sm text-gray-700 leading-relaxed">Am Karfreitag verstummt das Centro für eine seit Mitte der 1950er-Jahre abgehaltene Kerzenprozession mit vermummten Teilnehmern, die inzwischen rund 120.000 Besucher anzieht – die Hotels füllen sich, buchen Sie also im Voraus mit unserem <a href='/blog/where-to-stay-san-luis-potosi-2026' class='text-orange-600 underline font-semibold'>Unterkunftsführer</a>.</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">41.</span>Schwenken Sie das Glas beim Festival Internacional del Vino</h3>
    <p class="text-sm text-gray-700 leading-relaxed">Das internationale Weinfestival der Stadt versammelt mexikanische und ausländische Weingüter, Verkostungen und Pairing-Dinner. Termine, Tickets und was Sie erwartet: <a href='/blog/festival-internacional-vino-slp-2026' class='text-orange-600 underline font-semibold'>unser FIV-SLP-2026-Führer</a>.</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">42.</span>Finden Sie in jeder Woche etwas</h3>
    <p class="text-sm text-gray-700 leading-relaxed">Es ist immer etwas los – und vieles davon kostet nichts. Wir halten <a href='/events/this-week' class='text-orange-600 underline font-semibold'>die Events dieser Woche</a> aktuell, und der <a href='/free-events-san-luis-potosi' class='text-orange-600 underline font-semibold'>Führer zu kostenlosen Events</a> filtert nach Plänen für MX$0.</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">43.</span>Laufen Sie (oder feuern Sie an) bei einem Rennen im Park</h3>
    <p class="text-sm text-gray-700 leading-relaxed">Der Laufkalender gipfelt im <a href='/events/maraton-tangamanga-2026' class='text-orange-600 underline font-semibold'>Maratón Tangamanga</a> und im <a href='/events/medio-maraton-uaslp-2026' class='text-orange-600 underline font-semibold'>UASLP-Halbmarathon</a> – beides flache Höhenrennen, für die die Potosinos das ganze Jahr über im Tangamanga I trainieren.</p>
  </div>
</div>
</section>

<section class="mb-12">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-orange-500 pb-3 inline-block">Mit Kindern</h2>
</div>
<div class="space-y-6">

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">44.</span>Museo Laberinto de las Ciencias y las Artes</h3>
    <p class="text-sm text-gray-700 leading-relaxed">Das Mitmach-Wissenschaftsmuseum im Tangamanga I kostet regulär MX$50 und MX$40 für Kinder von 4–5 Jahren (verifiziert 2026) – planen Sie einen halben Tag ein. Weitere Ideen in unserem <a href='/family-friendly-activities' class='text-orange-600 underline font-semibold'>Führer zu Familienaktivitäten</a>.</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">45.</span>Planschen Sie im Dinoasis</h3>
    <p class="text-sm text-gray-700 leading-relaxed">Der umbenannte Wasserpark des Tangamanga I kostet an der Kasse etwa MX$200 für Kinder und MX$300 für Erwachsene (verifiziert 2026), Dinosaurier-Thematik inklusive. Die <a href='/category/family-activities' class='text-orange-600 underline font-semibold'>Einträge zu Familienaktivitäten</a> im Verzeichnis runden den Tag ab.</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">46.</span>Essen Sie dort, wo die Kinder herumtoben können</h3>
    <p class="text-sm text-gray-700 leading-relaxed">Eine sehr potosinische Lösung für lange Familienessen: Restaurants mit echten Spielplätzen. Wir pflegen eine eigene Liste von <a href='/category/restaurants-with-playgrounds' class='text-orange-600 underline font-semibold'>Restaurants mit Spielplätzen</a>.</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">47.</span>Haben Sie einen Plan B für Regentage</h3>
    <p class="text-sm text-gray-700 leading-relaxed">Sommernachmittage bringen Gewitter; die halbtrockene Stadt trocknet schnell wieder ab, aber Sie werden Optionen für drinnen wollen – Museen, Spielzentren, Cafés. Unsere <a href='/category/rainy-day-activities' class='text-orange-600 underline font-semibold'>Liste mit Aktivitäten für Regentage</a> ist die Rückfalllösung.</p>
  </div>
</div>
</section>

<section class="mb-12">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-orange-500 pb-3 inline-block">Nachtleben & Abende</h2>
</div>
<div class="space-y-6">

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">48.</span>Machen Sie eine Cantina-Tour</h3>
    <p class="text-sm text-gray-700 leading-relaxed">Im Centro gibt es noch Cantinas alter Schule, in denen die Botana weiterhin kostenlos zum Bier gereicht wird. Beginnen Sie mit dem <a href='/category/cantinas' class='text-orange-600 underline font-semibold'>Cantina-Verzeichnis</a> und gehen Sie früh los – die guten schließen früher, als Sie denken.</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">49.</span>Cocktails oben, Mezcal unten</h3>
    <p class="text-sm text-gray-700 leading-relaxed">Eine neuere Generation von Bars mixt anspruchsvolle Cocktails, und die Dachterrassen der Stadt verdienen sich ihre Sonnenuntergänge über den Cantera-Kuppeln. Stöbern Sie in den Einträgen zu <a href='/category/cocktail-bars' class='text-orange-600 underline font-semibold'>Cocktailbars</a> und <a href='/category/terraces' class='text-orange-600 underline font-semibold'>Terrassen</a>.</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">50.</span>Lassen Sie den Abend mit Live-Musik ausklingen</h3>
    <p class="text-sm text-gray-700 leading-relaxed">Von Trova-Bars bis zu Gastspielen im Teatro de la Paz bieten die meisten Wochen etwas Livemusik. Die <a href='/category/live-music' class='text-orange-600 underline font-semibold'>Einträge zu Livemusik</a> verfolgen die Locations; gleichen Sie die Shows der Woche ab, bevor Sie losziehen.</p>
  </div>
</div>
</section>

<div class="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 md:p-8 mb-12">
  <h2 class="text-2xl font-bold text-blue-900 mb-3">Anreise & Fortbewegung</h2>
  <p class="text-gray-800 leading-relaxed">SLP liegt ~402 km (~4,5 Std.) nördlich von Mexiko-Stadt an der Autobahn 57D und fliegt ohne Umsteigen nach Dallas, Houston und Mexiko-Stadt – deshalb funktioniert es als <a href='/blog/mexico-2026-stopover-san-luis-potosi' class='text-blue-800 underline font-semibold'>Zwischenstopp zur WM 2026</a>. Vom Flughafen kostet das Taxi zum Festpreis ins Centro ~MX$275; in der Stadt ist der MetroRed-BRT kostenlos und das Centro zu Fuß erkundbar. Zu Vierteln und Hotels siehe <a href='/blog/where-to-stay-san-luis-potosi-2026' class='text-blue-800 underline font-semibold'>wo man in San Luis Potosí übernachtet</a>.</p>
</div>

<section id="faq" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-orange-500 pb-3 inline-block">FAQ</h2>
</div>
<div class="space-y-4">
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Was sind die besten Dinge, die man in San Luis Potosí unternehmen kann?<span class="text-orange-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Erkunden Sie zu Fuß den ~3 km langen Fußgängerkern des von der UNESCO gelisteten Centro Histórico, besuchen Sie das Museo Leonora Carrington im alten Panoptikum-Gefängnis (MX$55, mittwochs kostenlos), verbringen Sie einen Vormittag im 411 Hektar großen Parque Tangamanga I (freier Eintritt), essen Sie Enchiladas potosinas und machen Sie einen Tagesausflug nach Cerro de San Pedro (35 Min.) oder Real de Catorce. Mit zusätzlichen Nächten ist die Huasteca Potosina – der Tamul-Wasserfall und Las Pozas in Xilitla – das Glanzstück des Bundesstaates.</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Wie viele Tage braucht man in San Luis Potosí?<span class="text-orange-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Zwei bis drei Tage decken die Stadt gut ab: einen für das Centro Histórico und die Museen, einen für den Tangamanga-Park und das Essen, einen für einen Tagesausflug (Cerro de San Pedro, Santa María del Río oder die heißen Quellen von Gogorrón). Fügen Sie mehr als 3 weitere Tage hinzu, wenn Sie die Huasteca Potosina sehen möchten – Ciudad Valles ist ~4 Stunden entfernt und die Wasserfälle verdienen ihren eigenen Standort.</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Lohnt sich ein Besuch in San Luis Potosí?<span class="text-orange-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Ja – es verbindet ein historisches Zentrum, das UNESCO-Welterbe ist (Camino Real de Tierra Adentro, 2010), mit Mexikos zweitgrößtem Stadtpark (411 ha), dem weltweit einzigen Leonora-Carrington-Museum, einer unverwechselbaren regionalen Küche und seiner Lage als Tor sowohl zur Wüste von Real de Catorce als auch zum Dschungel der Huasteca Potosina. Zudem bleibt es weit günstiger und weniger überlaufen als San Miguel de Allende oder Querétaro.</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Wofür ist San Luis Potosí berühmt?<span class="text-orange-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Kolonialer Silberreichtum – die Silberfunde von 1592 in Cerro de San Pedro machten es zur drittwichtigsten Stadt des Vizekönigreichs – dazu Enchiladas potosinas, Rebozos aus Santa María del Río, die Procesión del Silencio am Karfreitag (~120.000 Besucher), die nationale Messe FENAPO jeden August und die Wasserfälle der Huasteca Potosina im Osten des Bundesstaates.</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">Was kann man in San Luis Potosí mit Kindern unternehmen?<span class="text-orange-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Der Parque Tangamanga I ist der Mittelpunkt: freier Eintritt, ein kostenloser Zoo (Di–So 9–17 Uhr), das Wissenschaftsmuseum Museo Laberinto (MX$50, Kinder 4–5 MX$40) und der Wasserpark Dinoasis (~MX$200 Kinder / MX$300 Erwachsene). Ergänzen Sie den renovierten See des Parque de Morales, Restaurants mit Spielplätzen und den morgendlichen Vogelflug der Segler am Sótano de las Golondrinas, wenn Sie es bis in die Huasteca schaffen.</p></details>
</div>
</section>

<section id="sources" class="mb-8 scroll-mt-8">
<div class="not-prose mb-4">
  <h2 class="text-2xl font-bold text-gray-900 mb-3">Quellen</h2>
</div>
<p class="text-sm text-gray-600 leading-relaxed">Verifiziert im Juli 2026, sofern nicht anders angegeben: leonoracarringtonmuseo.org (MX$55 Eintritt inkl. Centro de las Artes, mittwochs kostenlos, Di–So 10–18), museonacionaldelamascaraslp.com.mx und SIC Cultura (Máscara MX$20), museofedericosilva.org (MX$30, sonntags kostenlos, dienstags geschlossen), Wikipedia ES / El Universal SLP / Turismo SLP (Teatro de la Paz 1889–1894, José Noriega, Kuppel aus Paris), UNESCO whc.unesco.org (Camino Real de Tierra Adentro, 2010), CECURT und Regionalpresse (Tangamanga 411 ha, Öffnungszeiten, kostenloser Zoo Di–So 9–17, Laberinto MX$50, Dinoasis MX$200/300), laspozasxilitla.org.mx (MX$180 + Führung, Reservierungsfenster, dienstags geschlossen), fenapo.slp.gob.mx (7.–30. Aug. 2026), dazu die verifizierten Dossiers hinter unseren Führern zu Tagesausflügen, Huasteca, Xilitla, Real de Catorce, Brunch, Parks und Unterkünften (siehe /factchecks). Die Preise sind die zuletzt veröffentlichten Angaben mit ihren Daten – vor Ort bestätigen; Gebühren ändern sich ohne Vorankündigung.</p>
</section>

<div class="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-8 text-center">
  <p class="text-white text-lg font-bold mb-2">Möchten Sie, dass sich diese Liste von selbst aktualisiert?</p>
  <p class="text-orange-100 text-sm mb-4">Jede Woche schicken wir die Events, Neueröffnungen und Pläne, die Ihr Wochenende in SLP wirklich wert ist.</p>
  <a href="/subscribe" class="inline-block bg-white text-orange-600 font-bold px-6 py-3 rounded-full hover:bg-orange-50 transition-colors">San Luis Way Weekly abonnieren</a>
</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Was sind die besten Dinge, die man in San Luis Potosí unternehmen kann?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Erkunden Sie zu Fuß den ~3 km langen Fußgängerkern des von der UNESCO gelisteten Centro Histórico, besuchen Sie das Museo Leonora Carrington im alten Panoptikum-Gefängnis (MX$55, mittwochs kostenlos), verbringen Sie einen Vormittag im 411 Hektar großen Parque Tangamanga I (freier Eintritt), essen Sie Enchiladas potosinas und machen Sie einen Tagesausflug nach Cerro de San Pedro (35 Min.) oder Real de Catorce. Mit zusätzlichen Nächten ist die Huasteca Potosina – der Tamul-Wasserfall und Las Pozas in Xilitla – das Glanzstück des Bundesstaates."
      }
    },
    {
      "@type": "Question",
      "name": "Wie viele Tage braucht man in San Luis Potosí?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Zwei bis drei Tage decken die Stadt gut ab: einen für das Centro Histórico und die Museen, einen für den Tangamanga-Park und das Essen, einen für einen Tagesausflug (Cerro de San Pedro, Santa María del Río oder die heißen Quellen von Gogorrón). Fügen Sie mehr als 3 weitere Tage hinzu, wenn Sie die Huasteca Potosina sehen möchten – Ciudad Valles ist ~4 Stunden entfernt und die Wasserfälle verdienen ihren eigenen Standort."
      }
    },
    {
      "@type": "Question",
      "name": "Lohnt sich ein Besuch in San Luis Potosí?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja – es verbindet ein historisches Zentrum, das UNESCO-Welterbe ist (Camino Real de Tierra Adentro, 2010), mit Mexikos zweitgrößtem Stadtpark (411 ha), dem weltweit einzigen Leonora-Carrington-Museum, einer unverwechselbaren regionalen Küche und seiner Lage als Tor sowohl zur Wüste von Real de Catorce als auch zum Dschungel der Huasteca Potosina. Zudem bleibt es weit günstiger und weniger überlaufen als San Miguel de Allende oder Querétaro."
      }
    },
    {
      "@type": "Question",
      "name": "Wofür ist San Luis Potosí berühmt?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kolonialer Silberreichtum – die Silberfunde von 1592 in Cerro de San Pedro machten es zur drittwichtigsten Stadt des Vizekönigreichs – dazu Enchiladas potosinas, Rebozos aus Santa María del Río, die Procesión del Silencio am Karfreitag (~120.000 Besucher), die nationale Messe FENAPO jeden August und die Wasserfälle der Huasteca Potosina im Osten des Bundesstaates."
      }
    },
    {
      "@type": "Question",
      "name": "Was kann man in San Luis Potosí mit Kindern unternehmen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Der Parque Tangamanga I ist der Mittelpunkt: freier Eintritt, ein kostenloser Zoo (Di–So 9–17 Uhr), das Wissenschaftsmuseum Museo Laberinto (MX$50, Kinder 4–5 MX$40) und der Wasserpark Dinoasis (~MX$200 Kinder / MX$300 Erwachsene). Ergänzen Sie den renovierten See des Parque de Morales, Restaurants mit Spielplätzen und den morgendlichen Vogelflug der Segler am Sótano de las Golondrinas, wenn Sie es bis in die Huasteca schaffen."
      }
    }
  ]
}
</script>

</div>`;

const CONTENT_JA = `<div class="max-w-none">

<p class="text-xl leading-relaxed text-gray-800 mb-8 font-medium">
  <strong>サン・ルイス・ポトシは、ここで実際に足を止める人にこそ報いてくれます。</strong>標高1,863 mにあるユネスコ登録の植民地時代の中心街、メキシコで2番目に大きい都市公園、世界で唯一のレオノーラ・キャリントン美術館、35分先にある銀の廃鉱の町、そしてその先に広がるワステカの滝々——これは私たち地元が事実確認した「やるべき50のこと」のリストで、価格や営業時間が存在する限りすべて検証済みです。
</p>

<div class="speakable bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-200 rounded-2xl p-6 md:p-8 mb-10">
  <p class="text-base md:text-lg text-gray-800 leading-relaxed">
    <strong>手短に言えば：</strong>歩行者専用の約3 kmのセントロを歩き、キャリントン美術館＋Centro de las ArtesをMX$55の1枚のチケットで巡り（水曜は無料）、Tangamanga Iに午前中を充て（無料、411 ha）、エンチラーダス・ポトシーナスを食べ、Cerro de San PedroやReal de Catorceへ日帰り旅行を——そして3日以上の余裕があれば、ワステカへ足を延ばしましょう。行き方も簡単です：メキシコシティから高速57D経由で約4.5時間、空港タクシーは定額で約MX$275、そしてMetroRed BRTは本当に無料です。
  </p>
</div>


<section class="mb-12">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-orange-500 pb-3 inline-block">Centro Histórico と建築</h2>
</div>
<div class="space-y-6">

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">1.</span>セントロの歩行者天国の中心を歩く</h3>
    <p class="text-sm text-gray-700 leading-relaxed">およそ3 kmの歩行者専用の通り——Calzada de Guadalupe、Zaragoza、Hidalgo——が、ユネスコが2010年に世界遺産ルート「Camino Real de Tierra Adentro」の一部として登録した植民地時代の中心街を貫いています。街で断トツに最高の無料アクティビティであり、私たちの<a href='/centro-historico' class='text-orange-600 underline font-semibold'>Centro Históricoガイド</a>が広場ごとに周遊路の全体を案内します。</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">2.</span>Plaza de Armas と大聖堂</h3>
    <p class="text-sm text-gray-700 leading-relaxed">Catedral Metropolitana de San Luis Reyは1670年から1730年にかけてメキシコ・バロック様式で建てられ、大聖堂となったのは1854年のことです。夕暮れどきにPlaza de Armasのベンチを確保し、カンテラ石の正面がライトアップされる様子を眺めましょう——それから私たちの<a href='/cultural-attractions' class='text-orange-600 underline font-semibold'>文化スポットガイド</a>で先へ進んでください。</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">3.</span>Templo del Carmen と Plaza del Carmen</h3>
    <p class="text-sm text-gray-700 leading-relaxed">18世紀のTemplo del Carmenは、豊かに彫り込まれた石造りの正面とタイル張りのドームを持ち、街で最も写真映えする広場の中心をなしています。この広場では一度に3つの見どころが楽しめます：教会、隣のTeatro de la Paz、そして向かいのMuseo Nacional de la Máscaraです。</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">4.</span>Teatro de la Paz</h3>
    <p class="text-sm text-gray-700 leading-relaxed">ポルフィリオ時代に建築家José Noriegaによって1889〜1894年に建てられ、1894年11月4日にドニゼッティの『ルクレツィア・ボルジア』で開場しました。ドームはパリで製作されたものです。今なおオーケストラ、バレエ、演劇を上演しており——現在のプログラムを確認して、メキシコを代表する歴史的劇場のひとつで公演を鑑賞しましょう。</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">5.</span>観光トランビア（路面電車風バス）に乗る</h3>
    <p class="text-sm text-gray-700 leading-relaxed">大聖堂、San Agustín、San Miguelito、そしてCalzadaを巡る約1時間のパノラマ周遊で、Jardín de San Juan de Diosの脇からおよそ30分おきに出発します。2社が路線を運行しており公表価格は異なります（おおよそMX$100〜150）——乗車時にご確認ください。到着日のアイデアは私たちの<a href='/visit-san-luis-potosi' class='text-orange-600 underline font-semibold'>訪問者ガイド</a>でさらに紹介しています。</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">6.</span>銀の街の歴史をたどる</h3>
    <p class="text-sm text-gray-700 leading-relaxed">近郊のCerro de San Pedroにおける1592年の鉱脈発見が州の名前の由来となり、サン・ルイス・ポトシをメキシコシティとプエブラに次ぐ副王領第3の都市にしました。私たちの<a href='/cultural/history' class='text-orange-600 underline font-semibold'>歴史ガイド</a>が、鉱業ブームと今日目にするバロックの街並みを結びつけます。</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">7.</span>Calzada de Guadalupe から Caja del Agua へ</h3>
    <p class="text-sm text-gray-700 leading-relaxed">並木の続くCalzada——歩行者ネットワークの長い行列用の軸——を、街の象徴のひとつである新古典主義の噴水Caja del Aguaを過ぎ、Basílica de Guadalupeまで散策しましょう。日曜の午前中には家族連れ、ランナー、露天商でにぎわいます。</p>
  </div>
</div>
</section>

<section class="mb-12">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-orange-500 pb-3 inline-block">美術館と文化</h2>
</div>
<div class="space-y-6">

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">8.</span>Museo Leonora Carrington</h3>
    <p class="text-sm text-gray-700 leading-relaxed">英国系メキシコ人のシュルレアリストに捧げられた世界初の美術館で、2018年3月22日に街のかつての刑務所内に開館しました。一般入場料はMX$55（2026年7月時点）でCentro de las Artesを含み、水曜は無料、火〜日10時〜18時です。詳しい物語は私たちの<a href='/blog/leonora-carrington-san-luis-potosi-museo-centro-artes-surrealism' class='text-orange-600 underline font-semibold'>レオノーラ・キャリントン特集</a>でご覧いただけます。</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">9.</span>Centro de las Artes Centenario</h3>
    <p class="text-sm text-gray-700 leading-relaxed">建物そのものが見どころです：Carlos Suárez Fiallo設計のパノプティコン（全展望型）刑務所で、1890年に開設され、1904年から1999年まで州立刑務所として使われました——今では独房棟のあった場所がギャラリー、ワークショップ、庭園になっています。キャリントンのチケットで入場でき、放射状に伸びる翼棟をぜひ歩き回ってみてください。</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">10.</span>Museo Nacional de la Máscara</h3>
    <p class="text-sm text-gray-700 leading-relaxed">メキシコの国立仮面コレクションが、Plaza del Carmenにある19世紀のPalacio Martíを埋め尽くしています——全国から集められた儀式や踊りの仮面です。入場料は一般MX$20、学生・子ども・INAPAMはMX$10（2026年7月確認）。営業時間はおおむね月〜土10時〜21時、日曜11時〜19時です（最新のスケジュールを確認してください）。</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">11.</span>Museo Federico Silva</h3>
    <p class="text-sm text-gray-700 leading-relaxed">現代彫刻に捧げられた美術館で——ラテンアメリカでは珍しく——Jardín de San Juan de Diosの脇に建つ由緒ある建物（Álvaro Obregón 80）にあります。一般MX$30、日曜無料、火曜休館（2026年7月確認）。</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">12.</span>Museo Regional Potosino と Capilla de Aranzazú</h3>
    <p class="text-sm text-gray-700 leading-relaxed">かつてのフランシスコ会修道院に入っており、INAHが運営するこの地方博物館は、1階にスペイン征服以前のワステカの遺物を、2階にバロックのCapilla de Aranzazú——2階に建てられた礼拝堂という珍しい例——を収めています。最新の営業時間をご確認ください（INAHのスケジュールや料金は変わります）。</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">13.</span>祭りに合わせて旅程を組む</h3>
    <p class="text-sm text-gray-700 leading-relaxed">街のカレンダーは行事が目白押しです：<a href='/festival-primavera-2026' class='text-orange-600 underline font-semibold'>Festival de Primavera</a>を中心とした春の祭りシーズン、Semana Santaの行列、そして8月の縁日。私たちの<a href='/cultural/festivals' class='text-orange-600 underline font-semibold'>祭りガイド</a>が1年を見渡せるようにまとめているので、日程を狙って合わせられます。</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">14.</span>ワステカの調べ、ワパンゴを聴く</h3>
    <p class="text-sm text-gray-700 leading-relaxed">州の東側3分の1はワステカの地であり、そのson huasteco——三重奏の弦にのせたファルセットの詩を、木の台の上で力強く踊る音楽——が街のペーニャや祭りに登場します。伝統音楽と踊りをどこで楽しめるかは、私たちの<a href='/cultural/music-dance' class='text-orange-600 underline font-semibold'>音楽・舞踊ガイド</a>で紹介しています。</p>
  </div>
</div>
</section>

<section class="mb-12">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-orange-500 pb-3 inline-block">食と飲み物</h2>
</div>
<div class="space-y-6">

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">15.</span>本場でエンチラーダス・ポトシーナスを食べる</h3>
    <p class="text-sm text-gray-700 leading-relaxed">唐辛子で色づけしたマサでチーズを包み、揚げてクリームをのせた——街を代表する名物料理で、これにアルティプラノ産のasado de bodaやqueso de tunaが加わります。まずは私たちの<a href='/traditional-cuisine' class='text-orange-600 underline font-semibold'>伝統料理ガイド</a>から始め、<a href='/guides/foodie-guide' class='text-orange-600 underline font-semibold'>グルメガイド</a>でさらに深掘りしてください。</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">16.</span>ブランチ巡りをする</h3>
    <p class="text-sm text-gray-700 leading-relaxed">街には今や本格的なブランチシーンがあります——LomasにあるCuatro Almasは、チポトレ・チラキレスとエッグベネディクトを8時〜14時に提供しており、さらに9軒が私たちの事実確認済みリストに入りました。詳しい一覧は<a href='/blog/best-brunch-spots-san-luis-potosi' class='text-orange-600 underline font-semibold'>サン・ルイス・ポトシのベストブランチスポット</a>で。</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">17.</span>ポトシーノ流に朝食をとる</h3>
    <p class="text-sm text-gray-700 leading-relaxed">コマルで焼く具入りのゴルディータ、カフェ・デ・オジャ、ジューススタンド——朝こそ街が最もおいしく、最も安く食べられる時間です。私たちの<a href='/breakfast-spots-san-luis-potosi' class='text-orange-600 underline font-semibold'>朝食ガイド</a>とディレクトリの<a href='/category/open-for-breakfast' class='text-orange-600 underline font-semibold'>朝食営業リスト</a>に住所が載っています。</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">18.</span>Mercado República で食べ歩く</h3>
    <p class="text-sm text-gray-700 leading-relaxed">地元の人々が実際に行列をつくる朝食・ブランチの屋台がそろう、生きた庶民市場です。午前中の遅い時間に空腹で行き、隣の屋台の人が食べているものを注文し、現金で支払いましょう。</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">19.</span>ファーマーズマーケットで買い物する</h3>
    <p class="text-sm text-gray-700 leading-relaxed">週末のティアンギスやオーガニック市では、アルティプラノのチーズ、メスキートの粉、プルケ入りパン、生産者直送の農産物が売られています。開催日と場所は<a href='/farmers-markets-san-luis-potosi' class='text-orange-600 underline font-semibold'>ファーマーズマーケットガイド</a>に、さらに私たちの<a href='/category/local-organic-products' class='text-orange-600 underline font-semibold'>地元・オーガニック製品リスト</a>にもあります。</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">20.</span>ポトシーノのワインシーンを味わう</h3>
    <p class="text-sm text-gray-700 leading-relaxed">サン・ルイス・ポトシには小さいながらも本物のワインの物語があります——高地のブドウ畑と、街のレストランで増えつつあるワインリストです。私たちの<a href='/guides/potosino-wine-scene' class='text-orange-600 underline font-semibold'>ポトシーノ・ワインガイド</a>が、誰が何を造り、どこで飲めるかを案内します。</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">21.</span>フードフェスティバルに繰り出す</h3>
    <p class="text-sm text-gray-700 leading-relaxed">都市圏では一年中フードフェアが開かれており——隣接するSoledadのFeria de la Enchiladaが定番です。日程は私たちの<a href='/food-festivals-san-luis-potosi' class='text-orange-600 underline font-semibold'>フードフェスティバルガイド</a>と<a href='/events/feria-de-la-enchilada-2026' class='text-orange-600 underline font-semibold'>Feria de la Enchiladaのイベントページ</a>に載っています。</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">22.</span>カフェシーンで働く（あるいはくつろぐ）</h3>
    <p class="text-sm text-gray-700 leading-relaxed">スペシャルティコーヒーがセントロとCarranza通り沿いを席巻し、多くのカフェがノートパソコンの持ち込みを歓迎しています。<a href='/category/remote-work-cafes' class='text-orange-600 underline font-semibold'>リモートワーク向けカフェのリスト</a>と私たちの<a href='/digital-nomad-guide' class='text-orange-600 underline font-semibold'>デジタルノマドガイド</a>が、Wi-Fi、電源、営業時間で分類しています。</p>
  </div>
</div>
</section>

<section class="mb-12">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-orange-500 pb-3 inline-block">公園とアウトドア</h2>
</div>
<div class="space-y-6">

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">23.</span>Parque Tangamanga I で迷い込む</h3>
    <p class="text-sm text-gray-700 leading-relaxed">411ヘクタールを誇るメキシコで2番目に大きい都市公園で——ニューヨークのセントラルパーク（340 ha）よりも大きく——入場は無料、火曜〜土曜は22時30分まで夜間開園しています。サイクリングコース、湖、プラネタリウム、野外劇場：私たちの<a href='/parque-tangamanga' class='text-orange-600 underline font-semibold'>Tangamanga Iガイド</a>がすべてを網羅しています。</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">24.</span>Tangamanga 内の無料動物園を訪れる</h3>
    <p class="text-sm text-gray-700 leading-relaxed">公園の野生動物ユニットは保護された種を飼育しており、料金は一切かかりません——火曜〜日曜、9時〜17時に開園（2026年確認）。同じ来園で無料の日本庭園と植物園もあわせて楽しみましょう。</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">25.</span>街を横切って Parque Tangamanga II へ</h3>
    <p class="text-sm text-gray-700 leading-relaxed">北側にある姉妹公園はより小さく、より野性的で——人混みを避けたいサイクリストやランナーに好まれています。私たちの<a href='/parque-tangamanga-ii' class='text-orange-600 underline font-semibold'>Tangamanga IIガイド</a>にトレイルと実用情報があります。</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">26.</span>子どもたちを Parque de Morales へ連れて行く</h3>
    <p class="text-sm text-gray-700 leading-relaxed">1924年5月19日に開設され、1968年に掘られた人工池を中心とする、街に愛される築100年超の公園は、約1億ペソを投じた州の改修を経てリニューアルオープンしました。私たちの<a href='/blog/best-parks-for-kids-san-luis-potosi' class='text-orange-600 underline font-semibold'>子ども向けベスト公園</a>ランキングの筆頭です。</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">27.</span>Parque Bicentenario で産業の歴史を歩く</h3>
    <p class="text-sm text-gray-700 leading-relaxed">かつての銅精錬所の跡地に2010年11月に開園し、33種の樹木の間に15点の産業機械を野外彫刻として残しています。国内でも興味深い産業遺構を再生した公園のひとつで、混雑することはめったにありません。</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">28.</span>Sierra de Álvarez をハイキングする</h3>
    <p class="text-sm text-gray-700 leading-relaxed">高速70号を東に1時間進んだ松と樫の壁には、Las Rusias、El Milagro、San Franciscoにあらゆるレベルのトレイルがあり、本格的なマウンテンバイクも楽しめます。正式な入場料はありません（エヒード運営の場所は駐車料金を取ることがあります）。さらなるルートは私たちの<a href='/outdoors' class='text-orange-600 underline font-semibold'>アウトドアガイド</a>で。</p>
  </div>
</div>
</section>

<section class="mb-12">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-orange-500 pb-3 inline-block">街からの日帰り旅行</h2>
</div>
<div class="space-y-6">

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">29.</span>州の名の由来となった町、Cerro de San Pedro</h3>
    <p class="text-sm text-gray-700 leading-relaxed">1592年に始まった半ば打ち捨てられた鉱山町は22 km先（約35分）にあります——石畳、屋根のない石造りの家々、歩いて入れる坑道、週末のゴルディータ、しかも市バスのRuta 39でも行けます。私たちの<a href='/blog/day-trips-from-san-luis-potosi-2026' class='text-orange-600 underline font-semibold'>検証済み日帰り旅行ガイド</a>の巻頭を飾ります。</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">30.</span>Santa María del Río でレボソを買う</h3>
    <p class="text-sm text-gray-700 leading-relaxed">'レボソのゆりかご'——2020年以来のPueblo Mágicoで、南へ40分——では今も絣（かすり）染めと腰機（こしばた）で絹のショールを織っており、この伝統はTaller Escuela de Rebocería（1953年設立）によって受け継がれています。バスは絶えず運行しており、料金はおよそMX$40〜70です。</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">31.</span>Balneario Gogorrón で湯に浸かる</h3>
    <p class="text-sm text-gray-700 leading-relaxed">約42℃の温泉水が南へ1時間の5つのプールを満たしており、2023年に州が再開業しました（直近の公表料金でMX$100〜120——行く前に確認を）。10分先には、映画『マスク・オブ・ゾロ』が撮影された1592年のEx-Hacienda Gogorrónがあり、無料で歩き回れます。</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">32.</span>Media Luna 泉でシュノーケリング</h3>
    <p class="text-sm text-gray-700 leading-relaxed">Rioverde近くにある信じられないほど透明な温泉水の三日月形の泉で、一年を通じて27〜30℃、透明度は最大30 m、底には石化した木々が沈んでいます。入場料は2025年半ば時点で大人MX$100（値上げの噂が出回っています——487 101 5874で確認を）。車で約2時間です。</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">33.</span>Real de Catorce への巡礼をする</h3>
    <p class="text-sm text-gray-700 leading-relaxed">標高2,730 mの銀の廃鉱の町へ、片側1車線・全長2.3 kmのOgarrioトンネル（1901年開通）を抜けて入ります——ウィリスのジープ、Pueblo Fantasma、そして2001年にさかのぼるPueblo Mágicoの指定。長い日帰り、あるいは宿泊のほうがおすすめです：私たちの<a href='/blog/real-de-catorce-guide-2026' class='text-orange-600 underline font-semibold'>Real de Catorce完全ガイド</a>が両方を扱っています。</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">34.</span>日帰りを週末旅行に延ばす</h3>
    <p class="text-sm text-gray-700 leading-relaxed">Guadalcázarの観光洞窟、シエラ・ハイキングの拠点、温泉の町々は、いずれもゆっくりしたペースに応えてくれます。私たちの<a href='/weekend-getaways' class='text-orange-600 underline font-semibold'>週末旅行ガイド</a>が、2日間のプラン向けに地図を並べ替えます。</p>
  </div>
</div>
</section>

<section class="mb-12">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-orange-500 pb-3 inline-block">ワステカ・ポトシーナ（さらに数泊の価値あり）</h2>
</div>
<div class="space-y-6">

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">35.</span>Ciudad Valles を拠点にする</h3>
    <p class="text-sm text-gray-700 leading-relaxed">ワステカの中心地は、州都からMEX-70経由で251 km（約4時間）。バスは約4時間15分、料金はMX$598ほどからです。滝は11月〜4月にターコイズブルーになります。私たちの<a href='/blog/huasteca-potosina-itinerary-2026' class='text-orange-600 underline font-semibold'>3/5/7日間ワステカ旅程</a>で旅を組み立てましょう——これはあえて日帰りにはしていません。</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">36.</span>Xilitla の Edward James の Las Pozas を歩く</h3>
    <p class="text-sm text-gray-700 leading-relaxed">ジャングルの中のシュルレアリスム的なコンクリートの奇想建築で、1962年の霜がJamesのランを枯らした後、20年以上かけて造られました。2026年のルール：オンラインで24時間前〜60日前までに時間指定の入場を予約し、ゲートで支払います（大人MX$180＋必須ガイドがスペイン語MX$30／英語MX$60）、火曜休館。詳しい手配は<a href='/blog/xilitla-las-pozas-guide-2026' class='text-orange-600 underline font-semibold'>私たちのXilitlaガイド</a>で。</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">37.</span>Cascada de Tamul までパドルで漕ぐ</h3>
    <p class="text-sm text-gray-700 leading-relaxed">高さ105 mのTamulは州で最も高い滝で、Aquismónの北にあるRío Santa Maríaの峡谷へと流れ落ちます。ほとんどの人は木製の乗合ランチャで川を遡って到達します——1時間漕ぐこの行程そのものが体験の半分です。</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">38.</span>Sótano de las Golondrinas でアマツバメを観る</h3>
    <p class="text-sm text-gray-700 leading-relaxed">Tamapatz近くにある深さ512 m（うち376 mは垂直の自由落下）の縦穴で、夜明けには何千羽もの鳥が渦を巻いて飛び出し、夕暮れには急降下して戻ってきます。縁の展望地点までは約15分の徒歩と、およそ586段の下り階段を見込んでください。</p>
  </div>
</div>
</section>

<section class="mb-12">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-orange-500 pb-3 inline-block">イベントと季節もの</h2>
</div>
<div class="space-y-6">

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">39.</span>FENAPO——8月の国民的な縁日</h3>
    <p class="text-sm text-gray-700 leading-relaxed">Feria Nacional Potosinaは2026年8月7日〜30日にRecinto Ferialで開催され、21回の無料のForo de las Estrellasコンサート——今年はKaty Perry（8月25日）とMötley Crüe（8月8日）がヘッドライナー——に加え、有料のpalenqueの夜が催されます。<a href='/events/fenapo-2026' class='text-orange-600 underline font-semibold'>FENAPO 2026のイベントページ</a>と<a href='/blog/fenapo-2026-artistas-cartel-completo' class='text-orange-600 underline font-semibold'>検証済みの全ラインナップ</a>をご覧ください。</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">40.</span>Semana Santa と Procesión del Silencio</h3>
    <p class="text-sm text-gray-700 leading-relaxed">聖金曜日、セントロは1950年代半ばから続く覆面のろうそく行列のために静まり返り、今では約12万人の来訪者を集めます——ホテルは満室になるので、私たちの<a href='/blog/where-to-stay-san-luis-potosi-2026' class='text-orange-600 underline font-semibold'>宿泊ガイド</a>で早めに予約しましょう。</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">41.</span>Festival Internacional del Vino でグラスを回す</h3>
    <p class="text-sm text-gray-700 leading-relaxed">街の国際ワイン祭りは、メキシコ内外のワイナリー、試飲、ペアリングディナーを集めます。日程、チケット、期待できる内容は：<a href='/blog/festival-internacional-vino-slp-2026' class='text-orange-600 underline font-semibold'>私たちのFIV SLP 2026ガイド</a>で。</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">42.</span>どの週でも何かしら見つける</h3>
    <p class="text-sm text-gray-700 leading-relaxed">いつでも何かしら催しがあり——その多くは無料です。私たちは<a href='/events/this-week' class='text-orange-600 underline font-semibold'>今週のイベント</a>を随時更新しており、<a href='/free-events-san-luis-potosi' class='text-orange-600 underline font-semibold'>無料イベントガイド</a>ではMX$0のプランで絞り込めます。</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">43.</span>公園でレースを走る（または応援する）</h3>
    <p class="text-sm text-gray-700 leading-relaxed">ランニングのカレンダーは<a href='/events/maraton-tangamanga-2026' class='text-orange-600 underline font-semibold'>Maratón Tangamanga</a>と<a href='/events/medio-maraton-uaslp-2026' class='text-orange-600 underline font-semibold'>UASLPハーフマラソン</a>で最高潮を迎えます——どちらも平坦な高地レースで、ポトシーノたちが一年中Tangamanga Iの中で練習しています。</p>
  </div>
</div>
</section>

<section class="mb-12">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-orange-500 pb-3 inline-block">子ども連れで</h2>
</div>
<div class="space-y-6">

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">44.</span>Museo Laberinto de las Ciencias y las Artes</h3>
    <p class="text-sm text-gray-700 leading-relaxed">Tangamanga I内の体験型科学博物館は、一般MX$50、4〜5歳の子どもMX$40（2026年確認）です——半日を見込んでください。さらなるアイデアは私たちの<a href='/family-friendly-activities' class='text-orange-600 underline font-semibold'>ファミリーアクティビティガイド</a>で。</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">45.</span>Dinoasis で水遊びする</h3>
    <p class="text-sm text-gray-700 leading-relaxed">Tangamanga Iの名称を変えたウォーターパークは、ゲートで子どもおよそMX$200、大人MX$300（2026年確認）、恐竜をテーマにした演出付きです。ディレクトリの<a href='/category/family-activities' class='text-orange-600 underline font-semibold'>ファミリーアクティビティリスト</a>が1日を締めくくります。</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">46.</span>子どもが走り回れる場所で食べる</h3>
    <p class="text-sm text-gray-700 leading-relaxed">長い家族の昼食にとてもポトシーノらしい解決策：本格的な遊び場のあるレストランです。私たちは<a href='/category/restaurants-with-playgrounds' class='text-orange-600 underline font-semibold'>遊び場付きレストラン</a>の専用リストを用意しています。</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">47.</span>雨の日のプランBを用意する</h3>
    <p class="text-sm text-gray-700 leading-relaxed">夏の午後には雷雨がやってきます。半乾燥の街はすぐに乾きますが、屋内の選択肢は欲しいところです——美術館、遊戯施設、カフェなど。私たちの<a href='/category/rainy-day-activities' class='text-orange-600 underline font-semibold'>雨の日アクティビティリスト</a>が備えになります。</p>
  </div>
</div>
</section>

<section class="mb-12">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-orange-500 pb-3 inline-block">ナイトライフと夜のひととき</h2>
</div>
<div class="space-y-6">

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">48.</span>カンティーナ巡りをする</h3>
    <p class="text-sm text-gray-700 leading-relaxed">セントロには、ビールに今もbotana（おつまみ）が無料で付いてくる昔ながらのカンティーナが残っています。まずは<a href='/category/cantinas' class='text-orange-600 underline font-semibold'>カンティーナのディレクトリ</a>から始め、早めに繰り出しましょう——良い店は思っているより早く閉まります。</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">49.</span>高みでカクテル、低みでメスカル</h3>
    <p class="text-sm text-gray-700 leading-relaxed">より新しい世代のバーが本格的なカクテルを作り、街のルーフトップはカンテラのドーム越しの夕日にふさわしい眺めを見せてくれます。<a href='/category/cocktail-bars' class='text-orange-600 underline font-semibold'>カクテルバー</a>と<a href='/category/terraces' class='text-orange-600 underline font-semibold'>テラス</a>のリストをご覧ください。</p>
  </div>

  <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
    <h3 class="font-bold text-xl text-gray-900 mb-2"><span class="text-orange-500 mr-2">50.</span>ライブ音楽で締めくくる</h3>
    <p class="text-sm text-gray-700 leading-relaxed">トロバのバーからTeatro de la Pazのツアー公演まで、ほとんどの週に何かしらライブがあります。<a href='/category/live-music' class='text-orange-600 underline font-semibold'>ライブ音楽のリスト</a>が会場を追っています。出かける前にその週のショーを照らし合わせてみてください。</p>
  </div>
</div>
</section>

<div class="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 md:p-8 mb-12">
  <h2 class="text-2xl font-bold text-blue-900 mb-3">行き方と移動手段</h2>
  <p class="text-gray-800 leading-relaxed">SLPはメキシコシティから高速57D経由で北へ約402 km（約4.5時間）に位置し、ダラス、ヒューストン、メキシコシティへ直行便が飛んでいます——だからこそ<a href='/blog/mexico-2026-stopover-san-luis-potosi' class='text-blue-800 underline font-semibold'>2026年ワールドカップの立ち寄り先</a>として機能します。空港からセントロまでの定額タクシーは約MX$275。街なかではMetroRed BRTが無料で、セントロは徒歩で回れます。地区やホテルについては<a href='/blog/where-to-stay-san-luis-potosi-2026' class='text-blue-800 underline font-semibold'>サン・ルイス・ポトシの宿泊エリア</a>をご覧ください。</p>
</div>

<section id="faq" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-orange-500 pb-3 inline-block">よくある質問</h2>
</div>
<div class="space-y-4">
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">サン・ルイス・ポトシでのおすすめの過ごし方は？<span class="text-orange-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">ユネスコ登録のCentro Históricoの約3 kmの歩行者中心街を歩き、旧パノプティコン刑務所内のMuseo Leonora Carrington（MX$55、水曜無料）を訪れ、411ヘクタールのParque Tangamanga I（入場無料）で午前中を過ごし、エンチラーダス・ポトシーナスを食べ、Cerro de San Pedro（35分）やReal de Catorceへ日帰りしましょう。数泊を足せるなら、ワステカ・ポトシーナ——Tamulの滝とXilitlaのLas Pozas——が州随一の見せ場です。</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">サン・ルイス・ポトシには何日必要ですか？<span class="text-orange-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">2〜3日あれば街はしっかり回れます：1日はCentro Históricoと美術館、1日はTangamanga公園と食事、1日は日帰り旅行（Cerro de San Pedro、Santa María del Río、またはGogorrónの温泉）。ワステカ・ポトシーナも見たいなら3日以上を追加してください——Ciudad Vallesは約4時間先で、滝々はそれ専用の拠点に値します。</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">サン・ルイス・ポトシは訪れる価値がありますか？<span class="text-orange-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">はい——ユネスコ世界遺産の歴史地区（Camino Real de Tierra Adentro、2010年）に、メキシコで2番目に大きい都市公園（411 ha）、世界で唯一のレオノーラ・キャリントン美術館、独特の郷土料理、そしてReal de Catorceの砂漠とワステカ・ポトシーナのジャングルの両方への玄関口という立地を兼ね備えています。さらに、San Miguel de AllendeやQuerétaroよりずっと安く、混雑も少ないままです。</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">サン・ルイス・ポトシは何で有名ですか？<span class="text-orange-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">植民地時代の銀の富——1592年のCerro de San Pedroの鉱脈発見が副王領第3の都市にしました——に加え、エンチラーダス・ポトシーナス、Santa María del Ríoのレボソ、聖金曜日のProcesión del Silencio（約12万人の来訪者）、毎年8月の国民的縁日FENAPO、そして州東部のワステカ・ポトシーナの滝々です。</p></details>
  <details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">子ども連れでサン・ルイス・ポトシで何ができますか？<span class="text-orange-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">Parque Tangamanga Iが拠点です：入場無料、無料の動物園（火〜日9〜17時）、科学博物館Museo Laberinto（MX$50、4〜5歳MX$40）、そしてウォーターパークDinoasis（子ども約MX$200／大人MX$300）。改修されたParque de Moralesの湖、遊び場付きレストラン、そしてワステカまで足を延ばせるならSótano de las Golondrinasの夜明けのアマツバメの飛翔も加えましょう。</p></details>
</div>
</section>

<section id="sources" class="mb-8 scroll-mt-8">
<div class="not-prose mb-4">
  <h2 class="text-2xl font-bold text-gray-900 mb-3">出典</h2>
</div>
<p class="text-sm text-gray-600 leading-relaxed">特記なき限り2026年7月に検証：leonoracarringtonmuseo.org（MX$55の入場料、Centro de las Artes込み、水曜無料、火〜日10〜18）、museonacionaldelamascaraslp.com.mxおよびSIC Cultura（Máscara MX$20）、museofedericosilva.org（MX$30、日曜無料、火曜休館）、Wikipedia ES／El Universal SLP／Turismo SLP（Teatro de la Paz 1889〜1894、José Noriega、パリ製のドーム）、UNESCO whc.unesco.org（Camino Real de Tierra Adentro、2010年）、CECURTおよび地方紙（Tangamanga 411 ha、営業時間、無料動物園 火〜日9〜17、Laberinto MX$50、Dinoasis MX$200/300）、laspozasxilitla.org.mx（MX$180＋ガイド、予約受付期間、火曜休館）、fenapo.slp.gob.mx（2026年8月7〜30日）、加えて日帰り旅行、ワステカ、Xilitla、Real de Catorce、ブランチ、公園、宿泊の各ガイドの裏付けとなる検証済みドシエ（/factchecks参照）。価格は日付付きの直近の公表値です——現地で確認してください。料金は予告なく変わります。</p>
</section>

<div class="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-8 text-center">
  <p class="text-white text-lg font-bold mb-2">このリストが自動で更新されたらいいと思いませんか？</p>
  <p class="text-orange-100 text-sm mb-4">毎週、SLPで本当に週末を費やす価値のあるイベント、新規オープン、プランをお届けします。</p>
  <a href="/subscribe" class="inline-block bg-white text-orange-600 font-bold px-6 py-3 rounded-full hover:bg-orange-50 transition-colors">San Luis Way Weekly を購読する</a>
</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "サン・ルイス・ポトシでのおすすめの過ごし方は？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ユネスコ登録のCentro Históricoの約3 kmの歩行者中心街を歩き、旧パノプティコン刑務所内のMuseo Leonora Carrington（MX$55、水曜無料）を訪れ、411ヘクタールのParque Tangamanga I（入場無料）で午前中を過ごし、エンチラーダス・ポトシーナスを食べ、Cerro de San Pedro（35分）やReal de Catorceへ日帰りしましょう。数泊を足せるなら、ワステカ・ポトシーナ——Tamulの滝とXilitlaのLas Pozas——が州随一の見せ場です。"
      }
    },
    {
      "@type": "Question",
      "name": "サン・ルイス・ポトシには何日必要ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "2〜3日あれば街はしっかり回れます：1日はCentro Históricoと美術館、1日はTangamanga公園と食事、1日は日帰り旅行（Cerro de San Pedro、Santa María del Río、またはGogorrónの温泉）。ワステカ・ポトシーナも見たいなら3日以上を追加してください——Ciudad Vallesは約4時間先で、滝々はそれ専用の拠点に値します。"
      }
    },
    {
      "@type": "Question",
      "name": "サン・ルイス・ポトシは訪れる価値がありますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "はい——ユネスコ世界遺産の歴史地区（Camino Real de Tierra Adentro、2010年）に、メキシコで2番目に大きい都市公園（411 ha）、世界で唯一のレオノーラ・キャリントン美術館、独特の郷土料理、そしてReal de Catorceの砂漠とワステカ・ポトシーナのジャングルの両方への玄関口という立地を兼ね備えています。さらに、San Miguel de AllendeやQuerétaroよりずっと安く、混雑も少ないままです。"
      }
    },
    {
      "@type": "Question",
      "name": "サン・ルイス・ポトシは何で有名ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "植民地時代の銀の富——1592年のCerro de San Pedroの鉱脈発見が副王領第3の都市にしました——に加え、エンチラーダス・ポトシーナス、Santa María del Ríoのレボソ、聖金曜日のProcesión del Silencio（約12万人の来訪者）、毎年8月の国民的縁日FENAPO、そして州東部のワステカ・ポトシーナの滝々です。"
      }
    },
    {
      "@type": "Question",
      "name": "子ども連れでサン・ルイス・ポトシで何ができますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Parque Tangamanga Iが拠点です：入場無料、無料の動物園（火〜日9〜17時）、科学博物館Museo Laberinto（MX$50、4〜5歳MX$40）、そしてウォーターパークDinoasis（子ども約MX$200／大人MX$300）。改修されたParque de Moralesの湖、遊び場付きレストラン、そしてワステカまで足を延ばせるならSótano de las Golondrinasの夜明けのアマツバメの飛翔も加えましょう。"
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
  console.log('Updated content_de and content_ja for', SLUG);

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

  const deDiffers = check.content_de !== check.content;
  const jaDiffers = check.content_ja !== check.content;
  console.log('content_de differs from content:', deDiffers);
  console.log('content_ja differs from content:', jaDiffers);

  const extractLd = (html) => {
    const blocks = [];
    const re = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g;
    let m;
    while ((m = re.exec(html)) !== null) blocks.push(m[1].trim());
    return blocks;
  };

  let ldOk = true;
  for (const col of ['content_de', 'content_ja']) {
    const blocks = extractLd(check[col]);
    console.log(`${col}: ${blocks.length} JSON-LD block(s)`);
    for (const b of blocks) {
      try {
        const parsed = JSON.parse(b);
        console.log(`  ${col} JSON-LD OK (@type=${parsed['@type']}, ${parsed.mainEntity ? parsed.mainEntity.length + ' questions' : ''})`);
      } catch (e) {
        console.error(`  ${col} JSON-LD PARSE FAIL:`, e.message);
        ldOk = false;
      }
    }
  }

  const tagCount = (html) => (html.match(/<[^>]+>/g) || []).length;
  console.log('Tag counts — EN:', tagCount(check.content), 'DE:', tagCount(check.content_de), 'JA:', tagCount(check.content_ja));

  const ok = deDiffers && jaDiffers && ldOk;
  console.log(ok ? '\nVERIFIED OK' : '\nPROBLEMS FOUND');
  process.exit(ok ? 0 : 1);
}

main();
