import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

const s = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

const HERO = 'https://omxporaecrqsqhzjzvnx.supabase.co/storage/v1/object/public/blog-images/posts/que-comer-en-la-fenapo-2026-hero.jpg';

const qa = (label, text) =>
  `<div id="quick-answer" class="not-prose bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-5 mb-8"><p class="text-xs font-bold text-blue-700 uppercase tracking-wider mb-2">${label}</p><p class="text-gray-800 text-base leading-relaxed m-0">${text}</p></div>\n`;

const faq = (title, items) =>
  `<div class="mt-12"><h2 class="text-2xl font-bold text-gray-900 border-b-4 border-blue-500 pb-3 inline-block">${title}</h2></div>\n<div class="space-y-4 mt-6">\n` +
  items.map(([q, a]) => `<details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">${q}<span class="text-blue-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">${a}</p></details>`).join('\n') +
  `\n</div>`;

// ---------------- EN ----------------
const content = qa('Quick Answer', 'FENAPO 2026 runs August 7–30 at the Recinto Ferial in San Luis Potosí, with free entry, free rides and free Foro de las Estrellas concerts. The food is half the reason to go: a traditional gastronomic pavilion with cooks from the state’s four regions, plus feria classics — enchiladas potosinas, zacahuil, bocoles, gorditas and more.') + `
<p class="text-lg text-gray-700 mb-6">Everyone talks about the FENAPO lineup — Katy Perry, Mötley Crüe, Bizarrap, all free at the Foro de las Estrellas. But ask any potosino what they actually remember from the feria, and odds are it involves a paper plate: enchiladas at midnight, a slice of zacahuil the size of your forearm, an elote dripping with crema on the walk between rides. This is your map to eating well at Mexico’s biggest state fair.</p>

<h2>The essentials for 2026</h2>
<p>The <strong>Feria Nacional Potosina</strong> runs <strong>August 7–30, 2026</strong> at the Recinto Ferial (Francisco Martínez de la Vega 255, Col. Tepeyac). Entry is <strong>free</strong>, and so are the parking, the mechanical rides and every concert at the Foro de las Estrellas. Only the Palenque charges admission, with tickets sold exclusively through Fast Ticket — state authorities have warned that Foro seats are <em>never</em> sold, so treat anyone offering them as a scam. Official hours for 2026 hadn’t been published as of this writing; check <a href="https://fenapo.slp.gob.mx/" target="_blank" rel="noopener noreferrer">fenapo.slp.gob.mx</a> before you go. For the full event rundown, see our <a href="/events/fenapo-2026">FENAPO 2026 event guide</a> and the <a href="/blog/fenapo-2026-boletos-precios-como-llegar">tickets &amp; logistics post</a>.</p>

<h2>The Muestra Gastronómica: four regions on one plate</h2>
<p>The heart of feria eating is the traditional <strong>gastronomic pavilion</strong>, where cooks from the state’s four regions — Huasteca, Zona Media, Altiplano and Centro — set up for the month. In recent editions, municipalities like Tamazunchale, Xilitla, Tanlajás, Ciudad Fernández and Villa de Arista have brought their kitchens to the fairgrounds, and the state has confirmed food pavilions and a typical-food zone for 2026. This is the single best place in the state to taste regional cooking side by side without driving four hours between towns.</p>

<h2>What to actually order</h2>
<ul>
<li><strong>Enchiladas potosinas</strong> — the chile-kneaded masa icon, born in Soledad in 1919. If you only eat one thing, make it this.</li>
<li><strong>Zacahuil</strong> — the Huasteca’s giant tamal: meter-long, wood-fired overnight, sold by the slice. Look for the huasteco stands.</li>
<li><strong>Bocoles</strong> — crisp-outside, tender-inside corn-and-lard rounds split and stuffed with queso, chicharrón or egg. The Huasteca’s answer to breakfast.</li>
<li><strong>Gorditas</strong> — from horno (wood-oven) to maíz quebrado, stuffed with guisados.</li>
<li><strong>Cecina, tamales huastecos, elotes y esquites</strong> — the classic feria walk-around food.</li>
<li><strong>The antojitos corridor</strong> — tortas, tacos al pastor, gorditas estilo Michoacán, nachos and every dessert stand imaginable, alongside national chains if you’re with picky kids.</li>
</ul>

<h2>Eat like you mean it: a practical plan</h2>
<p>Go hungry and go early — the gastronomic pavilion is calmest on weekday evenings before the Foro concerts empty out. Weekends after 8 pm are shoulder-to-shoulder. Prices at the muestra are municipal-fair level, not restaurant level, so a full crawl (enchiladas, zacahuil slice, dessert, agua fresca) is one of the best value meals in the city. Bring cash: many traditional stands don’t take cards. If you’re bringing children, pair the food crawl with the free rides — our <a href="/blog/fenapo-2026-con-ninos-guia-familias">FENAPO with kids guide</a> covers that side of the feria.</p>

<h2>Beyond the fairgrounds</h2>
<p>If the feria whets your appetite for the real thing, the source material is all around: our guides to <a href="/blog/best-brunch-spots-san-luis-potosi">brunch in SLP</a> and the city’s <a href="/blog/best-bars-nightlife-mezcal-san-luis-potosi-2026">bars and mezcal</a> pick up where the fairgrounds end.</p>
` + faq('FAQ', [
  ['Is FENAPO 2026 really free?', 'Yes. Entry to the fairgrounds, parking, the mechanical rides and all Foro de las Estrellas concerts are free in 2026. Only the Palenque charges, with tickets sold exclusively through Fast Ticket. Officials have warned that Foro seats are never sold — anyone selling them is running a scam.'],
  ['When and where is FENAPO 2026?', 'August 7–30, 2026, at the Recinto Ferial de San Luis Potosí (Francisco Martínez de la Vega 255, Col. Tepeyac). Official daily hours are announced on fenapo.slp.gob.mx.'],
  ['What is the one potosino dish I should not miss?', 'Enchiladas potosinas — tortillas made from chile-kneaded masa, stuffed with cheese and fried, invented in Soledad de Graciano Sánchez in 1919. At the muestra gastronómica you can also find zacahuil, the Huasteca’s giant wood-fired tamal.'],
  ['Do food stands take cards?', 'The bigger stands and national chains usually do, but many traditional cooks at the gastronomic pavilion are cash-only. Bring pesos; there are ATMs on site but lines get long on weekends.'],
]);

// ---------------- ES ----------------
const content_es = qa('Respuesta rápida', 'La FENAPO 2026 va del 7 al 30 de agosto en el Recinto Ferial de San Luis Potosí, con entrada, juegos y conciertos del Foro de las Estrellas gratis. La comida es la mitad del viaje: una muestra gastronómica con cocineras de las cuatro regiones del estado, más los clásicos de feria — enchiladas potosinas, zacahuil, bocoles y gorditas.') + `
<p class="text-lg text-gray-700 mb-6">Todos hablan del cartel de la FENAPO — Katy Perry, Mötley Crüe, Bizarrap, gratis en el Foro de las Estrellas. Pero pregúntale a cualquier potosino qué recuerda de la feria y lo más probable es que involucre un plato desechable: enchiladas a medianoche, una rebanada de zacahuil del tamaño de tu antebrazo, un elote escurriendo crema entre juego y juego. Este es tu mapa para comer bien en la feria estatal más grande de México.</p>

<h2>Lo esencial de 2026</h2>
<p>La <strong>Feria Nacional Potosina</strong> se celebra del <strong>7 al 30 de agosto de 2026</strong> en el Recinto Ferial (Francisco Martínez de la Vega 255, Col. Tepeyac). La entrada es <strong>gratuita</strong>, igual que el estacionamiento, los juegos mecánicos y todos los conciertos del Foro de las Estrellas. Solo el Palenque cobra, con boletos exclusivamente por Fast Ticket — las autoridades estatales han advertido que los lugares del Foro <em>no se venden</em>: quien los ofrezca es un fraude. Los horarios oficiales de 2026 aún no se publicaban al cierre de esta guía; consulta <a href="https://fenapo.slp.gob.mx/" target="_blank" rel="noopener noreferrer">fenapo.slp.gob.mx</a> antes de ir. Para el panorama completo, revisa nuestra <a href="/events/fenapo-2026">guía del evento FENAPO 2026</a> y el post de <a href="/blog/fenapo-2026-boletos-precios-como-llegar">boletos y logística</a>.</p>

<h2>La Muestra Gastronómica: cuatro regiones en un plato</h2>
<p>El corazón de comer en la feria es la tradicional <strong>muestra gastronómica</strong>, donde cocineras de las cuatro regiones — Huasteca, Zona Media, Altiplano y Centro — se instalan todo el mes. En ediciones recientes han participado municipios como Tamazunchale, Xilitla, Tanlajás, Ciudad Fernández y Villa de Arista, y el estado confirmó pabellones gastronómicos y zona de comida típica para 2026. Es el mejor lugar del estado para probar la cocina regional lado a lado sin manejar cuatro horas entre pueblos.</p>

<h2>Qué pedir</h2>
<ul>
<li><strong>Enchiladas potosinas</strong> — el ícono de masa enchilada, nacido en Soledad en 1919. Si solo comes una cosa, que sea esta.</li>
<li><strong>Zacahuil</strong> — el tamal gigante de la Huasteca: más de un metro, cocido toda la noche en horno de leña, vendido por rebanada. Busca los puestos huastecos.</li>
<li><strong>Bocoles</strong> — gorditas de maíz con manteca, crujientes por fuera y suaves por dentro, rellenas de queso, chicharrón o huevo.</li>
<li><strong>Gorditas</strong> — de horno de leña o de maíz quebrado, rellenas de guisados.</li>
<li><strong>Cecina, tamales huastecos, elotes y esquites</strong> — lo clásico para comer caminando.</li>
<li><strong>El corredor de antojitos</strong> — tortas, tacos al pastor, gorditas estilo Michoacán, nachos y postres, junto a cadenas nacionales si vas con niños exigentes.</li>
</ul>

<h2>Plan práctico para comer en serio</h2>
<p>Llega con hambre y temprano — la muestra gastronómica está más tranquila entre semana por la tarde, antes de que salgan los conciertos del Foro. Los fines de semana después de las 8 pm es hombro con hombro. Los precios de la muestra son de feria municipal, no de restaurante: un recorrido completo (enchiladas, rebanada de zacahuil, postre, agua fresca) es de las comidas con mejor relación calidad-precio de la ciudad. Lleva efectivo: muchos puestos tradicionales no aceptan tarjeta. Si vas con niños, combina el recorrido con los juegos gratis — nuestra <a href="/blog/fenapo-2026-con-ninos-guia-familias">guía de FENAPO con niños</a> cubre ese lado de la feria.</p>

<h2>Más allá del recinto</h2>
<p>Si la feria te abre el apetito por lo auténtico, el material original está en toda la ciudad: nuestras guías de <a href="/blog/best-brunch-spots-san-luis-potosi">brunch en SLP</a> y de <a href="/blog/best-bars-nightlife-mezcal-san-luis-potosi-2026">bares y mezcal</a> continúan donde termina el recinto ferial.</p>
` + faq('Preguntas frecuentes', [
  ['¿La FENAPO 2026 es realmente gratis?', 'Sí. La entrada al recinto, el estacionamiento, los juegos mecánicos y todos los conciertos del Foro de las Estrellas son gratuitos en 2026. Solo el Palenque cobra, con boletos exclusivamente por Fast Ticket. Las autoridades advirtieron que los lugares del Foro no se venden: quien los ofrezca comete fraude.'],
  ['¿Cuándo y dónde es la FENAPO 2026?', 'Del 7 al 30 de agosto de 2026 en el Recinto Ferial de San Luis Potosí (Francisco Martínez de la Vega 255, Col. Tepeyac). Los horarios oficiales se anuncian en fenapo.slp.gob.mx.'],
  ['¿Cuál es el platillo potosino imperdible?', 'Las enchiladas potosinas: tortillas de masa amasada con chile, rellenas de queso y fritas, inventadas en Soledad de Graciano Sánchez en 1919. En la muestra gastronómica también encuentras zacahuil, el tamal gigante huasteco de horno de leña.'],
  ['¿Los puestos aceptan tarjeta?', 'Los puestos grandes y las cadenas sí; muchas cocineras tradicionales de la muestra solo aceptan efectivo. Lleva pesos; hay cajeros en el recinto pero las filas crecen los fines de semana.'],
]);

// ---------------- DE ----------------
const content_de = qa('Kurzantwort', 'Die FENAPO 2026 läuft vom 7. bis 30. August auf dem Recinto Ferial in San Luis Potosí — Eintritt, Fahrgeschäfte und die Konzerte im Foro de las Estrellas sind gratis. Das Essen ist der halbe Grund hinzugehen: ein traditioneller Gastronomie-Pavillon mit Köchinnen aus den vier Regionen des Bundesstaats plus Klassiker wie Enchiladas Potosinas, Zacahuil und Bocoles.') + `
<p class="text-lg text-gray-700 mb-6">Alle reden über das FENAPO-Line-up — Katy Perry, Mötley Crüe, Bizarrap, alles gratis im Foro de las Estrellas. Doch fragt man Einheimische, woran sie sich wirklich erinnern, ist es meist ein Pappteller: Enchiladas um Mitternacht, eine unterarmgroße Scheibe Zacahuil, ein Elote mit Crema zwischen zwei Fahrgeschäften. Hier ist deine Karte, um auf Mexikos größtem Staatsjahrmarkt richtig gut zu essen.</p>

<h2>Das Wichtigste für 2026</h2>
<p>Die <strong>Feria Nacional Potosina</strong> findet vom <strong>7. bis 30. August 2026</strong> auf dem Recinto Ferial statt (Francisco Martínez de la Vega 255, Col. Tepeyac). Der Eintritt ist <strong>frei</strong> — ebenso Parken, Fahrgeschäfte und alle Konzerte im Foro de las Estrellas. Nur der Palenque kostet, Tickets gibt es ausschließlich über Fast Ticket. Die Behörden warnen: Plätze fürs Foro werden <em>nie</em> verkauft — Angebote dafür sind Betrug. Die offiziellen Öffnungszeiten 2026 waren bei Redaktionsschluss noch nicht veröffentlicht; prüfe <a href="https://fenapo.slp.gob.mx/" target="_blank" rel="noopener noreferrer">fenapo.slp.gob.mx</a>. Den Gesamtüberblick gibt unsere <a href="/events/fenapo-2026">FENAPO-2026-Eventseite</a> und der Beitrag zu <a href="/blog/fenapo-2026-boletos-precios-como-llegar">Tickets &amp; Anreise</a>.</p>

<h2>Die Muestra Gastronómica: vier Regionen auf einem Teller</h2>
<p>Das Herzstück ist der traditionelle <strong>Gastronomie-Pavillon</strong>, in dem Köchinnen aus den vier Regionen — Huasteca, Zona Media, Altiplano und Centro — den ganzen Monat kochen. In den letzten Ausgaben waren Gemeinden wie Tamazunchale, Xilitla, Tanlajás und Ciudad Fernández vertreten; für 2026 sind Gastronomie-Pavillons und eine Zone für typisches Essen bestätigt. Nirgendwo sonst probierst du die Regionalküchen des Staates Seite an Seite, ohne stundenlang zu fahren.</p>

<h2>Was du bestellen solltest</h2>
<ul>
<li><strong>Enchiladas Potosinas</strong> — die Ikone aus chiligefärbtem Maisteig, 1919 in Soledad erfunden.</li>
<li><strong>Zacahuil</strong> — der riesige Tamal der Huasteca: über einen Meter lang, über Nacht im Holzofen gegart, scheibenweise verkauft.</li>
<li><strong>Bocoles</strong> — außen knusprige, innen weiche Maisfladen mit Käse, Chicharrón oder Ei.</li>
<li><strong>Gorditas</strong> — aus dem Holzofen oder aus maíz quebrado, gefüllt mit Schmorgerichten.</li>
<li><strong>Cecina, huastekische Tamales, Elotes und Esquites</strong> — die Klassiker für unterwegs.</li>
<li><strong>Der Antojitos-Korridor</strong> — Tortas, Tacos al Pastor, Nachos und Desserts, daneben nationale Ketten für wählerische Kinder.</li>
</ul>

<h2>Praktischer Plan</h2>
<p>Komm hungrig und früh — unter der Woche am frühen Abend ist der Pavillon am ruhigsten; am Wochenende nach 20 Uhr wird es sehr voll. Die Preise liegen auf Jahrmarkt-, nicht Restaurantniveau: eine komplette Runde (Enchiladas, Zacahuil, Dessert, Agua fresca) gehört zu den preiswertesten Mahlzeiten der Stadt. Nimm Bargeld mit — viele traditionelle Stände akzeptieren keine Karten. Mit Kindern kombinierst du das Essen am besten mit den kostenlosen Fahrgeschäften — siehe unseren <a href="/blog/fenapo-2026-con-ninos-guia-familias">FENAPO-mit-Kindern-Guide</a>.</p>

<h2>Nach der Feria</h2>
<p>Wenn dir die Feria Appetit gemacht hat: Unsere Guides zu <a href="/blog/best-brunch-spots-san-luis-potosi">Brunch in SLP</a> und zu <a href="/blog/best-bars-nightlife-mezcal-san-luis-potosi-2026">Bars &amp; Mezcal</a> machen dort weiter, wo das Festgelände endet.</p>
` + faq('Häufige Fragen', [
  ['Ist die FENAPO 2026 wirklich gratis?', 'Ja. Eintritt, Parken, Fahrgeschäfte und alle Konzerte im Foro de las Estrellas sind 2026 kostenlos. Nur der Palenque kostet (Tickets nur über Fast Ticket). Die Behörden warnen: Foro-Plätze werden nie verkauft — solche Angebote sind Betrug.'],
  ['Wann und wo findet die FENAPO 2026 statt?', 'Vom 7. bis 30. August 2026 auf dem Recinto Ferial de San Luis Potosí (Francisco Martínez de la Vega 255, Col. Tepeyac). Offizielle Öffnungszeiten unter fenapo.slp.gob.mx.'],
  ['Welches Gericht darf ich nicht verpassen?', 'Enchiladas Potosinas — Tortillas aus mit Chili verknetetem Maisteig, mit Käse gefüllt und frittiert, 1919 in Soledad erfunden. Im Gastronomie-Pavillon gibt es außerdem Zacahuil, den riesigen Holzofen-Tamal der Huasteca.'],
  ['Kann ich mit Karte zahlen?', 'Größere Stände und Ketten ja, viele traditionelle Köchinnen nur bar. Nimm Pesos mit; Geldautomaten gibt es, aber am Wochenende mit Schlangen.'],
]);

// ---------------- JA ----------------
const content_ja = qa('早わかり', 'FENAPO 2026は8月7日〜30日、サンルイスポトシのレシント・フェリアルで開催。入場・乗り物・フォロのコンサートは無料。州4地域の郷土料理が集まる美食パビリオンと、エンチラーダス・ポトシーナスやサカウィルなどの名物が主役だ。') + `
<p class="text-lg text-gray-700 mb-6">FENAPOといえばケイティ・ペリーやモトリー・クルーの無料ライブが話題だが、地元の人が本当に覚えているのは食べ物の思い出だ。真夜中のエンチラーダ、腕ほどの大きさのサカウィル、クリーマたっぷりのエロテ……メキシコ最大級の州の祭りを「食」で歩くためのマップがこれだ。</p>

<h2>2026年の基本情報</h2>
<p><strong>フェリア・ナシオナル・ポトシーナ（FENAPO）</strong>は<strong>2026年8月7日〜30日</strong>、レシント・フェリアル（Francisco Martínez de la Vega 255）で開催。入場・駐車・遺園地の乗り物・フォロ・デ・ラス・エストレージャスの全コンサートが<strong>無料</strong>。有料はパレンケのみ（Fast Ticket限定販売）。フォロの席は販売されないため、売りを持ちかける者は詐欺と当局が注意嗚起している。2026年の営業時間は未発表（<a href="https://fenapo.slp.gob.mx/" target="_blank" rel="noopener noreferrer">公式サイト</a>で確認を）。全体像は<a href="/events/fenapo-2026">FENAPO 2026イベントガイド</a>と<a href="/blog/fenapo-2026-boletos-precios-como-llegar">チケット・アクセスガイド</a>へ。</p>

<h2>美食パビリオン：4地域の味が一度に</h2>
<p>食の中心は伝統の<strong>ムエストラ・ガストロノミカ</strong>。ウアステカ、ソナ・メディア、アルティプラーノ、セントロの4地域の料理人が一ヶ月間屋台を構える。2026年も郷土料理ゾーンの設置が確認済み。車で4時間走らずに州全域の味を食べ比べできる唯一の場所だ。</p>

<h2>注文すべきもの</h2>
<ul>
<li><strong>エンチラーダス・ポトシーナス</strong> — チリを練り込んだ生地の名物。1919年ソレダード発祥。</li>
<li><strong>サカウィル</strong> — ウアステカの巨大タマル。1メートル超を薪窯で一晚焼き、切り売りされる。</li>
<li><strong>ボコーレス</strong> — 外カリ中フワのトウモロコシ生地にチーズやチチャロンを挟む。</li>
<li><strong>ゴルディータス、セシーナ、エロテ</strong> — 歩き食べの定番。</li>
</ul>

<h2>実践プラン</h2>
<p>狙い目は平日の夕方。週末20時以降は大混雑する。価格は屋台価格で、フルコース（エンチラーダ・サカウィル・デザート・アグアフレスカ）でも市内有数のコスパ。伝統的な屋台は現金のみが多いのでペソを用意。子連れなら無料の乗り物と組み合わせて——<a href="/blog/fenapo-2026-con-ninos-guia-familias">子連れFENAPOガイド</a>も参照。</p>
` + faq('よくある質問', [
  ['FENAPO 2026は本当に無料？', 'はい。入場・駐車・乗り物・フォロの全コンサートが無料。有料はパレンケのみ（Fast Ticket限定）。フォロの席は販売されず、転売は詐欺と当局が警告している。'],
  ['いつ、どこで？', '2026年8月7日〜30日、レシント・フェリアル（Francisco Martínez de la Vega 255）。営業時間は公式サイト fenapo.slp.gob.mx で発表される。'],
  ['絶対に食べるべき一品は？', 'エンチラーダス・ポトシーナス。チリを練り込んだ生地にチーズを包んで揚げたもので1919年発祥。ウアステカの巨大タマル「サカウィル」も必食だ。'],
]);

const row = {
  slug: 'que-comer-en-la-fenapo-2026',
  status: 'published',
  published_at: '2026-08-01T12:00:00+00:00',
  category: 'Food & Drink',
  tags: ['fenapo', 'fenapo-2026', 'food', 'san-luis-potosi', 'events', 'feria'],
  image_url: HERO,
  title: 'What to Eat at FENAPO 2026: The Feria Food Guide',
  title_es: 'Qué comer en la FENAPO 2026: guía gastronómica de la feria',
  title_de: 'Essen auf der FENAPO 2026: Der Feria-Food-Guide',
  title_ja: 'FENAPO 2026食べ歩きガイド',
  excerpt: 'FENAPO 2026 runs Aug 7–30 with free entry. Here is how to eat your way through it: the four-regions gastronomic pavilion, zacahuil, enchiladas potosinas and the antojitos corridor.',
  excerpt_es: 'La FENAPO 2026 va del 7 al 30 de agosto con entrada gratis. Así se come la feria: la muestra gastronómica de las cuatro regiones, zacahuil, enchiladas potosinas y el corredor de antojitos.',
  excerpt_de: 'Die FENAPO 2026 läuft vom 7.–30. August bei freiem Eintritt. So isst man sich durch die Feria: Gastronomie-Pavillon der vier Regionen, Zacahuil, Enchiladas Potosinas und der Antojitos-Korridor.',
  excerpt_ja: 'FENAPO 2026は8月7〜30日、入場無料。4地域の美食パビリオンやサカウィル、エンチラーダスなど、祭りを「食」で歩くガイド。',
  content,
  content_es,
  content_de,
  content_ja,
  meta_title: 'FENAPO 2026 Food Guide: What to Eat at the Feria',
  meta_title_es: 'Qué comer en la FENAPO 2026: guía de comida',
  meta_title_de: 'FENAPO 2026: Essen auf der Feria — der Guide',
  meta_title_ja: 'FENAPO 2026食べ歩きガイド',
  meta_description: 'FENAPO 2026 (Aug 7–30, free entry): eat the four-regions gastronomic pavilion — enchiladas potosinas, zacahuil, bocoles — plus the antojitos corridor. Plan your feria food crawl.',
  meta_description_es: 'FENAPO 2026 (7–30 de agosto, entrada gratis): la muestra gastronómica de las cuatro regiones — enchiladas potosinas, zacahuil, bocoles — y el corredor de antojitos. Planea tu recorrido.',
  meta_description_de: 'FENAPO 2026 (7.–30. August, Eintritt frei): Gastronomie-Pavillon der vier Regionen — Enchiladas Potosinas, Zacahuil, Bocoles — plus Antojitos-Korridor. So planst du deine Feria-Tour.',
  meta_description_ja: 'FENAPO 2026（8/7〜30・入場無料）。4地域の郷土料理とサカウィル、エンチラーダスを制覇する食べ歩き術。',
  discover_title: 'Eat FENAPO like a potosino: the feria food map',
  discover_title_es: 'Cómete la FENAPO como potosino: el mapa de la feria',
  discover_title_de: 'FENAPO essen wie ein Einheimischer: die Feria-Food-Map',
  discover_title_ja: '地元流FENAPOの食べ歩き術',
};

const { error } = await s.from('blog_posts').upsert(row, { onConflict: 'slug' });
if (error) throw error;
console.log(`✓ inserted ${row.slug} (scheduled ${row.published_at})`);
