import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

const s = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

const HERO = '/images/food/traditional-potosino-main.jpg';

const qa = (label, text) =>
  `<div id="quick-answer" class="not-prose bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-5 mb-8"><p class="text-xs font-bold text-blue-700 uppercase tracking-wider mb-2">${label}</p><p class="text-gray-800 text-base leading-relaxed m-0">${text}</p></div>\n`;

const faq = (title, items) =>
  `<div class="mt-12"><h2 class="text-2xl font-bold text-gray-900 border-b-4 border-blue-500 pb-3 inline-block">${title}</h2></div>\n<div class="space-y-4 mt-6">\n` +
  items.map(([q, a]) => `<details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">${q}<span class="text-blue-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">${a}</p></details>`).join('\n') +
  `\n</div>`;

const card = (name, meta, body) =>
  `<div class="bg-white border border-gray-200 rounded-xl p-6 mb-4"><h3 class="text-xl font-bold text-gray-900 mb-1">${name}</h3><p class="text-sm text-blue-600 font-medium mb-3">${meta}</p><p class="text-gray-700">${body}</p></div>`;

// ---------------- EN ----------------
const content = qa('Quick Answer', 'San Luis Potosí’s signature taco is the taco rojo: a guajillo-dyed tortilla, lightly fried, stuffed with cheese and buried under potatoes, carrots, lettuce, crema and cueritos. Eat it at Doña Juanita in Tequis (since 1959) or Los Agachados by the Alameda (since 1960) — then branch out to Tacos Joven’s mustard-fried oddball (since 1949) and La Fragua’s pastor.') + `
<p class="text-lg text-gray-700 mb-6">Every Mexican city thinks its tacos are special. San Luis Potosí can actually prove it: this city has taco styles that exist nowhere else, taquerías run by the same families for three generations, and a red-stained tortilla so beloved it migrated to Monterrey and took the city’s name with it. This is where the locals actually line up.</p>

<h2>First, learn the local styles</h2>
<p><strong>Tacos rojos potosinos</strong> (also called <em>tacos potosinos</em> or <em>tacos Camila</em>) are the city’s flag: tortillas bathed in a thick guajillo salsa, briefly fried, filled with queso fresco and served under a mountain of stewed potatoes and carrots, lettuce, crema and cueritos — sometimes with a piece of chicken. The style traces to a woman named Camila with a stand at the Jardín de Tequisquiapan; her recipe even traveled to Monterrey, where "tacos rojos estilo potosino" became a thing of its own. The red, by the way, is guajillo — not chile ancho.</p>
<p>Two more local originals: the <strong>taco Joven</strong>, fried with <em>mustard</em> and bathed in a rajas salsa, served at exactly one taquería since 1949; and the <strong>lechuza</strong>, a late-night Tequis invention of flour tortilla, molten cheese and your choice of pastor, bistec or chorizo.</p>

<h2>The institutions</h2>
` + card('Tacos Rojos de Doña Juanita', 'Jardín de Tequisquiapan · tacos rojos · since 1959', 'The most famous red-taco stand in the city, on the corner of Mariano Arista and Mariano Ávila. An order is six tacos loaded with lettuce, cueritos and queso; weekends the line regularly tops 200 people. Reference price: $60 MXN for the order of six (2022) — expect a bit more today.')
+ card('Los Agachados', 'Alameda Juan Sarabia, by Templo del Carmen · tacos rojos · since 1960', 'Named for the low benches that once made customers eat "hunched over". Rojos first, but the pambazos and gorditas hold their own. Evenings only, roughly 5 pm to midnight.')
+ card('Tacos Joven', 'Damián Carmona 1025, Barrio de Santiago · mustard-fried tacos · since 1949', 'One family, three generations, one dish: beef tacos fried with mustard and drowned in a chilaca-tomato rajas salsa, with pickled pig trotters on the side. Named after a Cantinflas film. Around $80 MXN for the order of four (2024). Open 6–11 pm daily.')
+ card('La Fragua Steak Taco', 'Av. Carranza 2380 + branches · pastor & steak · since 1987', 'Widely credited with pioneering pastor in SLP. Started in Lomas in 1987; now a small local chain that still takes the trompo seriously.')
+ card('El Camelluco', 'Mariano Otero 400, Tequisquiapan · pastor, machitos, alambres · 30+ years', 'The neighborhood all-rounder: pastor, chorizo, barbacoa, arrachera and proper alambres, plus tortas. Long hours (roughly 8:30 am–11:30 pm).')
+ card('Taquería Las Arandas', 'Av. Nicolás Zapata · pastor', 'Local lists keep crowning its trompo the biggest in the city. Go when it’s freshly loaded in the evening.')
+ card('Tacos El Güero', 'Miguel Hidalgo 600, Centro Histórico · cabeza', 'The head-taco specialist: cabeza, lengua and ojo, plus tortas de cabeza. There are similarly named stands around town — the Centro location is the one locals mean.')
+ card('Tacos Los Dionisios', 'Centro Histórico · breakfast guisado tacos', 'A morning ritual: chicharrón carnudo cooked carnitas-style, frijol, papa and huevo rojo tacos from coolers, dressed with pickled cabbage. Local press puts their output around 6,000 tacos a day.')
+ card('Las Lechuzas de Tequis', 'around Jardín de Tequis · lechuzas · late night', 'Where the night ends: flour tortillas with molten cheese and pastor or bistec, invented for exactly the hour you’ll arrive.')
+ card('Tacos Don Juanito', 'Av. Ricardo B. Anaya · the "remolque"', 'Home of the taco de remolque — pastor, bistec, barbacoa, chorizo and machitos mixed in one taco. Open late.') + `

<h2>How to order like a potosino</h2>
<ul>
<li><strong>Rojos come as an order</strong> (usually six), fully dressed. Asking for them "sin verdura" is legal but frowned upon.</li>
<li><strong>Prices move.</strong> The figures above are the last press-verified references (2022–2024); treat them as floors, not quotes.</li>
<li><strong>Cash first.</strong> Street stands and market puestos rarely take cards.</li>
<li><strong>Timing:</strong> rojos and guisados are morning-to-afternoon food; pastor, Joven and lechuzas own the night.</li>
</ul>

<h2>Keep eating</h2>
<p>Pair this crawl with our guides to <a href="/blog/best-brunch-spots-san-luis-potosi">brunch in SLP</a> and <a href="/blog/best-bars-nightlife-mezcal-san-luis-potosi-2026">the city’s bars and mezcal</a> — and if your trip continues into the Huasteca, the <a href="/blog/huasteca-potosina-itinerary-2026">itinerary</a> knows where the bocoles are.</p>
` + faq('FAQ', [
  ['What is a taco rojo potosino?', 'A tortilla bathed in thick guajillo salsa, lightly fried, stuffed with queso fresco and topped with stewed potatoes and carrots, lettuce, crema and cueritos — sometimes a piece of chicken. It is San Luis Potosí’s signature taco, born at a Tequisquiapan stand and famous enough to have migrated to Monterrey.'],
  ['Where are the best tacos rojos in San Luis Potosí?', 'The two institutions are Tacos Rojos de Doña Juanita at the Jardín de Tequisquiapan (since 1959) and Los Agachados by the Alameda (since 1960). Both are evening stands with real lines on weekends.'],
  ['What is the taco Joven?', 'A San Luis original served at one taquería since 1949: beef tacos fried with mustard, bathed in a chilaca-and-tomato rajas salsa, with pickled pig trotters on the side. Tacos Joven is at Damián Carmona 1025, open roughly 6–11 pm.'],
  ['How much do tacos cost in SLP?', 'Street-stand orders run cheap: press-verified references are $60 MXN for six tacos rojos (2022) and $80 MXN for four tacos Joven (2024). Expect somewhat higher prices today — and bring cash.'],
]);

// ---------------- ES ----------------
const content_es = qa('Respuesta rápida', 'El taco insignia de San Luis Potosí es el taco rojo: tortilla teñida en guajillo, semifrita, rellena de queso y sepultada bajo papas, zanahoria, lechuga, crema y cueritos. Cómelo con Doña Juanita en Tequis (desde 1959) o en Los Agachados junto a la Alameda (desde 1960) — y luego pasa al taco con mostaza de Tacos Joven (desde 1949) y al pastor de La Fragua.') + `
<p class="text-lg text-gray-700 mb-6">Toda ciudad mexicana cree que sus tacos son especiales. San Luis Potosí puede demostrarlo: aquí hay estilos de taco que no existen en ningún otro lado, taquerías operadas por la misma familia durante tres generaciones, y una tortilla roja tan querida que migró a Monterrey llevándose el nombre de la ciudad. Aquí es donde los potosinos hacen fila de verdad.</p>

<h2>Primero, los estilos locales</h2>
<p>Los <strong>tacos rojos potosinos</strong> (también <em>tacos potosinos</em> o <em>tacos Camila</em>) son la bandera de la ciudad: tortillas bañadas en salsa espesa de guajillo, semifritas, rellenas de queso fresco y servidas bajo una montaña de papas y zanahorias guisadas, lechuga, crema y cueritos — a veces con pieza de pollo. El estilo se atribuye a una señora llamada Camila con puesto en el Jardín de Tequisquiapan; su receta incluso viajó a Monterrey, donde los "tacos rojos estilo potosino" se volvieron cosa propia. El rojo, por cierto, es guajillo — no chile ancho.</p>
<p>Dos originales más: el <strong>taco Joven</strong>, frito con <em>mostaza</em> y bañado en salsa de rajas, servido en exactamente una taquería desde 1949; y la <strong>lechuza</strong>, invento trasnochador de Tequis: tortilla de harina, queso fundido y pastor, bistec o chorizo.</p>

<h2>Las instituciones</h2>
` + card('Tacos Rojos de Doña Juanita', 'Jardín de Tequisquiapan · tacos rojos · desde 1959', 'El puesto de tacos rojos más famoso de la ciudad, en la esquina de Mariano Arista y Mariano Ávila. La orden son seis tacos cargados de lechuga, cueritos y queso; los fines de semana la fila pasa de 200 personas. Precio de referencia: $60 MXN la orden de seis (2022) — hoy espera algo más.')
+ card('Los Agachados', 'Alameda Juan Sarabia, frente al Templo del Carmen · tacos rojos · desde 1960', 'El nombre viene de las bancas bajas que obligaban a comer "agachado". Primero los rojos, pero los pambazos y gorditas se defienden solos. Solo tardes-noche, aprox. 5 pm a medianoche.')
+ card('Tacos Joven', 'Damián Carmona 1025, Barrio de Santiago · tacos con mostaza · desde 1949', 'Una familia, tres generaciones, un platillo: tacos de res fritos con mostaza y ahogados en salsa de rajas de chilaca con jitomate, con patitas de puerco curtidas de guarnición. El nombre viene de una película de Cantinflas. Aprox. $80 MXN la orden de cuatro (2024). Abre 6–11 pm diario.')
+ card('La Fragua Steak Taco', 'Av. Carranza 2380 + sucursales · pastor y steak · desde 1987', 'Considerada pionera del pastor en SLP. Nació en Lomas en 1987; hoy es una pequeña cadena local que sigue tomándose el trompo en serio.')
+ card('El Camelluco', 'Mariano Otero 400, Tequisquiapan · pastor, machitos, alambres · 30+ años', 'El todoterreno del barrio: pastor, chorizo, barbacoa, arrachera y alambres bien hechos, más tortas. Horario largo (aprox. 8:30 am–11:30 pm).')
+ card('Taquería Las Arandas', 'Av. Nicolás Zapata · pastor', 'Las listas locales le siguen coronando el trompo más grande de la ciudad. Ve en la tarde-noche, cuando está recién montado.')
+ card('Tacos El Güero', 'Miguel Hidalgo 600, Centro Histórico · cabeza', 'El especialista en cabeza: lengua, ojo y tortas de cabeza. Hay puestos con nombres parecidos por la ciudad — el del Centro es al que se refieren los potosinos.')
+ card('Tacos Los Dionisios', 'Centro Histórico · tacos de guisado de desayuno', 'Un ritual matutino: chicharrón carnudo estilo carnitas, frijol, papa y huevo rojo desde hieleras, vestidos con col curtida. La prensa local calcula unos 6,000 tacos al día.')
+ card('Las Lechuzas de Tequis', 'alrededores del Jardín de Tequis · lechuzas · madrugada', 'Donde termina la noche: tortillas de harina con queso fundido y pastor o bistec, inventadas para exactamente la hora en la que vas a llegar.')
+ card('Tacos Don Juanito', 'Av. Ricardo B. Anaya · el "remolque"', 'Casa del taco de remolque — pastor, bistec, barbacoa, chorizo y machitos mezclados en un solo taco. Abre hasta tarde.') + `

<h2>Cómo pedir como potosino</h2>
<ul>
<li><strong>Los rojos vienen por orden</strong> (normalmente seis), completamente vestidos. Pedirlos "sin verdura" es legal, pero mal visto.</li>
<li><strong>Los precios se mueven.</strong> Las cifras de arriba son las últimas verificadas por prensa (2022–2024); tómalas como piso, no como cotización.</li>
<li><strong>Efectivo primero.</strong> Los puestos de calle y mercado rara vez aceptan tarjeta.</li>
<li><strong>Horarios:</strong> rojos y guisados son comida de mañana-tarde; pastor, Joven y lechuzas dominan la noche.</li>
</ul>

<h2>Sigue comiendo</h2>
<p>Combina este recorrido con nuestras guías de <a href="/blog/best-brunch-spots-san-luis-potosi">brunch en SLP</a> y de <a href="/blog/best-bars-nightlife-mezcal-san-luis-potosi-2026">bares y mezcal</a> — y si tu viaje sigue a la Huasteca, el <a href="/blog/huasteca-potosina-itinerary-2026">itinerario</a> sabe dónde están los bocoles.</p>
` + faq('Preguntas frecuentes', [
  ['¿Qué es un taco rojo potosino?', 'Una tortilla bañada en salsa espesa de guajillo, semifrita, rellena de queso fresco y coronada con papas y zanahorias guisadas, lechuga, crema y cueritos — a veces con pieza de pollo. Es el taco insignia de San Luis Potosí, nacido en un puesto de Tequisquiapan y tan famoso que migró a Monterrey.'],
  ['¿Dónde están los mejores tacos rojos de San Luis Potosí?', 'Las dos instituciones son Tacos Rojos de Doña Juanita en el Jardín de Tequisquiapan (desde 1959) y Los Agachados junto a la Alameda (desde 1960). Ambos son puestos de tarde-noche con filas reales los fines de semana.'],
  ['¿Qué es el taco Joven?', 'Un original potosino servido en una sola taquería desde 1949: tacos de res fritos con mostaza, bañados en salsa de rajas de chilaca con jitomate, con patitas de puerco curtidas. Tacos Joven está en Damián Carmona 1025, abre aprox. 6–11 pm.'],
  ['¿Cuánto cuestan los tacos en SLP?', 'Las órdenes de puesto son baratas: las referencias verificadas por prensa son $60 MXN por seis tacos rojos (2022) y $80 MXN por cuatro tacos Joven (2024). Hoy espera precios algo mayores — y lleva efectivo.'],
]);

// ---------------- DE ----------------
const content_de = qa('Kurzantwort', 'Das Wahrzeichen von San Luis Potosí ist der Taco Rojo: eine in Guajillo-Salsa getauchte, kurz frittierte Tortilla mit Käsefüllung unter Kartoffeln, Karotten, Salat, Crema und Cueritos. Am besten bei Doña Juanita in Tequis (seit 1959) oder Los Agachados an der Alameda (seit 1960) — danach der Senf-Taco von Tacos Joven (seit 1949) und der Pastor von La Fragua.') + `
<p class="text-lg text-gray-700 mb-6">Jede mexikanische Stadt hält ihre Tacos für besonders. San Luis Potosí kann es beweisen: Hier gibt es Taco-Stile, die nirgendwo sonst existieren, Taquerías in dritter Familiengeneration und eine rot gefärbte Tortilla, die so beliebt ist, dass sie nach Monterrey auswanderte — mitsamt dem Namen der Stadt. Hier stehen die Einheimischen wirklich an.</p>

<h2>Zuerst: die lokalen Stile</h2>
<p><strong>Tacos Rojos Potosinos</strong> (auch <em>tacos potosinos</em> oder <em>tacos Camila</em>): Tortillas in dicker Guajillo-Salsa, kurz frittiert, mit Queso fresco gefüllt und unter geschmorten Kartoffeln und Karotten, Salat, Crema und Cueritos serviert — manchmal mit Hähnchen. Der Stil geht auf eine Frau namens Camila am Jardín de Tequisquiapan zurück. Das Rot kommt übrigens vom Guajillo, nicht vom Chile Ancho.</p>
<p>Zwei weitere Originale: der <strong>Taco Joven</strong>, mit <em>Senf</em> frittiert und in Rajas-Salsa gebadet, seit 1949 in genau einer Taquería; und die <strong>Lechuza</strong>, die Nachterfindung von Tequis — Weizentortilla, geschmolzener Käse, Pastor, Bistec oder Chorizo.</p>

<h2>Die Institutionen</h2>
` + card('Tacos Rojos de Doña Juanita', 'Jardín de Tequisquiapan · Tacos Rojos · seit 1959', 'Der berühmteste Rote-Tacos-Stand der Stadt (Ecke Mariano Arista/Mariano Ávila). Eine Order sind sechs Tacos; am Wochenende stehen über 200 Leute an. Referenzpreis: 60 MXN für sechs (2022).')
+ card('Los Agachados', 'Alameda Juan Sarabia · Tacos Rojos · seit 1960', 'Benannt nach den niedrigen Bänken, auf denen man „gebückt“ aß. Abends, etwa 17–24 Uhr; auch Pambazos und Gorditas.')
+ card('Tacos Joven', 'Damián Carmona 1025 · Senf-Tacos · seit 1949', 'Eine Familie, drei Generationen, ein Gericht: Rindfleisch-Tacos mit Senf frittiert, in Chilaca-Tomaten-Salsa, dazu eingelegte Schweinsfüße. Ca. 80 MXN für vier (2024). Täglich 18–23 Uhr.')
+ card('La Fragua Steak Taco', 'Av. Carranza 2380 + Filialen · Pastor & Steak · seit 1987', 'Gilt als Pastor-Pionier von SLP — und nimmt den Trompo bis heute ernst.')
+ card('El Camelluco', 'Mariano Otero 400 · Pastor, Machitos, Alambres · 30+ Jahre', 'Der Allrounder des Viertels mit langen Öffnungszeiten (ca. 8:30–23:30 Uhr).')
+ card('Taquería Las Arandas', 'Av. Nicolás Zapata · Pastor', 'Lokale Listen küren ihren Trompo regelmäßig zum größten der Stadt.')
+ card('Tacos El Güero', 'Miguel Hidalgo 600, Centro · Cabeza', 'Der Spezialist für Kopf-Tacos: Cabeza, Lengua, Ojo — die Centro-Adresse ist die, die Einheimische meinen.')
+ card('Tacos Los Dionisios', 'Centro Histórico · Frühstücks-Guisados', 'Morgenritual mit Chicharrón nach Carnitas-Art, Bohnen, Kartoffel und Huevo Rojo — laut Lokalpresse rund 6.000 Tacos täglich.')
+ card('Las Lechuzas de Tequis', 'am Jardín de Tequis · Lechuzas · spätnachts', 'Wo die Nacht endet: Weizentortillas mit geschmolzenem Käse und Pastor oder Bistec.')
+ card('Tacos Don Juanito', 'Av. Ricardo B. Anaya · der "Remolque"', 'Heimat des Taco de Remolque — Pastor, Bistec, Barbacoa, Chorizo und Machitos in einem Taco. Bis spät geöffnet.') + `

<h2>Bestellen wie ein Potosino</h2>
<ul>
<li><strong>Rojos kommen als Order</strong> (meist sechs), voll angerichtet.</li>
<li><strong>Preise bewegen sich</strong> — die Zahlen oben sind die letzten pressegeprüften Referenzen (2022–2024).</li>
<li><strong>Bargeld zuerst.</strong> Straßenstände nehmen selten Karten.</li>
<li><strong>Timing:</strong> Rojos und Guisados morgens bis nachmittags; Pastor, Joven und Lechuzas gehören der Nacht.</li>
</ul>

<h2>Weiteressen</h2>
<p>Kombiniere die Tour mit unseren Guides zu <a href="/blog/best-brunch-spots-san-luis-potosi">Brunch in SLP</a> und <a href="/blog/best-bars-nightlife-mezcal-san-luis-potosi-2026">Bars &amp; Mezcal</a> — und in der Huasteca weiß das <a href="/blog/huasteca-potosina-itinerary-2026">Itinerar</a>, wo die Bocoles sind.</p>
` + faq('Häufige Fragen', [
  ['Was ist ein Taco Rojo Potosino?', 'Eine in dicker Guajillo-Salsa getauchte, kurz frittierte Tortilla mit Queso-fresco-Füllung, bedeckt mit geschmorten Kartoffeln und Karotten, Salat, Crema und Cueritos. Das Wahrzeichen-Taco von San Luis Potosí.'],
  ['Wo gibt es die besten Tacos Rojos?', 'Die zwei Institutionen: Doña Juanita am Jardín de Tequisquiapan (seit 1959) und Los Agachados an der Alameda (seit 1960) — beides Abendstände mit echten Schlangen am Wochenende.'],
  ['Was ist der Taco Joven?', 'Ein Original aus SLP, seit 1949 in genau einer Taquería: Rindfleisch-Tacos mit Senf frittiert, in Rajas-Salsa, dazu eingelegte Schweinsfüße. Damián Carmona 1025, ca. 18–23 Uhr.'],
]);

// ---------------- JA ----------------
const content_ja = qa('早わかり', 'サンルイスポトシ名物は「タコ・ロホ」。グアヒージョ・チリで赤く染めたトルティーヤを軽く揚げ、チーズを包み、ジャガイモ・ニンジン・レタス・クレマ・クエリートスをたっぷり載せる。1959年創業のドニャ・フアニータ（テキス地区）か1960年創業のロス・アガチャードスが定番。1949年創業タコス・ホベンの「マスタード揚げタコ」も必食だ。') + `
<p class="text-lg text-gray-700 mb-6">メキシコのどの街も「うちのタコスは特別」と言う。だがサンルイスポトシには証拠がある。ここにしかないタコスのスタイル、三世代続く老舗タケリア、そしてモンテレイにまで「ポトシ風」の名を広めた赤いトルティーヤ。地元の人が本当に並ぶ店を紹介する。</p>

<h2>まずは地元のスタイルを知る</h2>
<p><strong>タコス・ロホス・ポトシーノス</strong>（通称タコス・カミラ）は街の看板料理。濃厚なグアヒージョ・サルサにくぐらせ軽く揚げたトルティーヤにケソ・フレスコを包み、煮込んだジャガイモとニンジン、レタス、クレマ、クエリートス（酢漬け豚皮）を山盛りにする。テキスキアパン公園の屋台の「カミラさん」が起源とされ、レシピはモンテレイにまで伝わった。赤色の正体はグアヒージョだ。</p>
<p>ほかに<strong>タコ・ホベン</strong>（マスタードで揚げ、ラハスのサルサをかける。1949年から一軒のみ）と、深夜の発明<strong>レチューサ</strong>（小麦トルティーヤ＋溶けるチーズ＋パストールなど）がある。</p>

<h2>老舗たち</h2>
` + card('タコス・ロホス・デ・ドニャ・フアニータ', 'テキスキアパン公園 · タコス・ロホス · 1959年〜', '市内で最も有名な赤タコスの屋台。注文は6個1オーダーで、週末は200人超の行列。参考価格：6個60ペソ（2022年時点）。')
+ card('ロス・アガチャードス', 'アラメダ公園そば · タコス・ロホス · 1960年〜', '「かがんで食べる」低いベンチが名前の由来。夕方〜深夜0時頃の営業。パンバソスやゴルディータスも人気。')
+ card('タコス・ホベン', 'Damián Carmona 1025 · マスタード揚げタコ · 1949年〜', '一家三代、メニューは一品だけ。牛肉のタコをマスタードで揚げ、チラカとトマトのサルサに沈める。4個約80ペソ（2024年）。毎日18〜23時。')
+ card('ラ・フラグア', 'カランサ大通り2380ほか · パストール · 1987年〜', 'SLPにパストールを広めた先駆者とされる地元チェーン。')
+ card('エル・カメジューコ', 'Mariano Otero 400 · パストール、アランブレ · 30年超', '朝から夜まで通しで開く万能型の人気店。')
+ card('タコス・エル・グエロ', '歴史地区 Miguel Hidalgo 600 · カベサ', '牛頭肉の専門店。カベサ、レングア（タン）、オホ（目）まで。')
+ card('ロス・ディオニシオス', '歴史地区 · 朝の煮込みタコス', 'カルニタス風チチャロン、フリホール、ウエボ・ロホ。地元紙いわく1日約6,000個。')
+ card('レチューサス・デ・テキス', 'テキス公園周辺 · レチューサ · 深夜', '夜の締めの定番。小麦トルティーヤ＋チーズ＋パストール。') + `

<h2>地元流の頼み方</h2>
<ul>
<li><strong>ロホスは6個1オーダー</strong>が基本。具全部載せが正装だ。</li>
<li><strong>価格は変動する</strong>。上記は報道で確認できた参考値（2022〜24年）。</li>
<li><strong>現金必須</strong>。屋台はカード不可が多い。</li>
<li><strong>時間帯</strong>：ロホスと煮込みは朝〜昼、パストールとレチューサは夜。</li>
</ul>

<h2>さらに食べるなら</h2>
<p><a href="/blog/best-brunch-spots-san-luis-potosi">ブランチガイド</a>と<a href="/blog/best-bars-nightlife-mezcal-san-luis-potosi-2026">バー＆メスカルガイド</a>、ウアステカへ行くなら<a href="/blog/huasteca-potosina-itinerary-2026">イティネラリー</a>もどうぞ。</p>
` + faq('よくある質問', [
  ['タコ・ロホ・ポトシーノとは？', 'グアヒージョの濃厚サルサにくぐらせて軽く揚げたトルティーヤにチーズを包み、煮込み野菜・レタス・クレマ・クエリートスを載せたSLP名物のタコス。テキスキアパンの屋台発祥。'],
  ['一番有名な店は？', 'テキスキアパン公園のドニャ・フアニータ（1959年〜）とアラメダ側のロス・アガチャードス（1960年〜）。どちらも夕方からの屋台で週末は大行列。'],
  ['予算は？', '報道確認の参考値でロホス6個60ペソ（2022年）、ホベン4個80ペソ（2024年）。現在はやや高め。現金を用意。'],
]);

const row = {
  slug: 'best-tacos-san-luis-potosi',
  status: 'published',
  published_at: new Date().toISOString(),
  category: 'Food & Drink',
  tags: ['tacos', 'food', 'san-luis-potosi', 'street-food', 'tacos-rojos', 'restaurants'],
  image_url: HERO,
  title: 'The Taco Guide to San Luis Potosí: Where Locals Actually Line Up',
  title_es: 'La guía de tacos de San Luis Potosí: donde los potosinos hacen fila',
  title_de: 'Der Taco-Guide für San Luis Potosí: Wo Einheimische wirklich anstehen',
  title_ja: 'サンルイスポトシのタコス完全ガイド',
  excerpt: 'Tacos rojos, the mustard-fried taco Joven and late-night lechuzas: SLP’s own taco styles and the ten institutions — from Doña Juanita (1959) to Tacos Joven (1949) — where locals actually eat.',
  excerpt_es: 'Tacos rojos, el taco Joven frito con mostaza y las lechuzas de madrugada: los estilos propios de SLP y las diez instituciones — de Doña Juanita (1959) a Tacos Joven (1949) — donde comen los potosinos.',
  excerpt_de: 'Tacos Rojos, der Senf-Taco Joven und nächtliche Lechuzas: SLPs eigene Taco-Stile und die zehn Institutionen — von Doña Juanita (1959) bis Tacos Joven (1949).',
  excerpt_ja: 'タコス・ロホス、マスタード揚げのタコ・ホベン、深夜のレチューサ。SLP固有のスタイルと、地元民が並ぶ老舗10軒を紹介。',
  content,
  content_es,
  content_de,
  content_ja,
  meta_title: 'Best Tacos in San Luis Potosí: The Local Guide',
  meta_title_es: 'Los mejores tacos de San Luis Potosí: guía local',
  meta_title_de: 'Die besten Tacos in San Luis Potosí: der Guide',
  meta_title_ja: 'サンルイスポトシの絶品タコスガイド',
  meta_description: 'SLP’s own taco styles — tacos rojos, the mustard-fried Joven, late-night lechuzas — and 10 institutions locals swear by, with prices, hours and how to order.',
  meta_description_es: 'Los estilos propios de SLP — tacos rojos, el Joven con mostaza, lechuzas de madrugada — y 10 instituciones que juran los potosinos, con precios, horarios y cómo pedir.',
  meta_description_de: 'SLPs eigene Taco-Stile — Tacos Rojos, der Senf-Taco Joven, nächtliche Lechuzas — und 10 Institutionen mit Preisen, Zeiten und Bestell-Knigge.',
  meta_description_ja: 'タコス・ロホスやタコ・ホベンなどSLP固有のスタイルと、地元民御用達の老舗10軒。価格・営業時間・注文術。',
  discover_title: 'The taco that made Monterrey jealous lives in SLP',
  discover_title_es: 'El taco que puso celoso a Monterrey vive en SLP',
  discover_title_de: 'Der Taco, auf den Monterrey neidisch ist, lebt in SLP',
  discover_title_ja: 'モンテレイが羨んだ赤いタコスの故郷',
};

const { error } = await s.from('blog_posts').upsert(row, { onConflict: 'slug' });
if (error) throw error;
console.log(`✓ published ${row.slug}`);
