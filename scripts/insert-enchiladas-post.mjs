import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

const s = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

const HERO = '/images/food/enchiladas-potosinas.jpg';

const qa = (label, text) =>
  `<div id="quick-answer" class="not-prose bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-5 mb-8"><p class="text-xs font-bold text-blue-700 uppercase tracking-wider mb-2">${label}</p><p class="text-gray-800 text-base leading-relaxed m-0">${text}</p></div>\n`;

const faq = (title, items) =>
  `<div class="mt-12"><h2 class="text-2xl font-bold text-gray-900 border-b-4 border-blue-500 pb-3 inline-block">${title}</h2></div>\n<div class="space-y-4 mt-6">\n` +
  items.map(([q, a]) => `<details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">${q}<span class="text-blue-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">${a}</p></details>`).join('\n') +
  `\n</div>`;

// ---------------- EN ----------------
const content = qa('Quick Answer', 'Enchiladas potosinas are not enchiladas in the usual sense: the chile is kneaded INTO the masa, not poured on top. Invented around 1919 by doña Cristina Jalomo in Soledad de Graciano Sánchez, they are cheese-stuffed, comal-cooked, then fried, and traditionally served with beans and cueritos. Eat them at the family’s own Casa de la Enchilada in Soledad, La Parroquia Potosina on Carranza, or Rincón Huasteco.') + `
<p class="text-lg text-gray-700 mb-6">Ask for enchiladas anywhere else in Mexico and you’ll get tortillas drowned in salsa. Ask in San Luis Potosí and you’ll get something structurally different: a rust-red masa that carries the chile <em>inside</em>, folded over cheese like a quesadilla, kissed on the comal and finished in hot oil. One dish, one town, one woman — and a century of arguments about how exactly it happened.</p>

<h2>The woman who invented them</h2>
<p><strong>Doña Cristina Jalomo</strong> (1874–1973) sold handmade tortillas from her home in <strong>Soledad de Graciano Sánchez</strong>, the municipality that borders the capital. Around <strong>1919</strong>, something went differently in her kitchen — and the result was so good she started selling it under a tree in Soledad’s plaza on Sundays, from a charcoal anafre with clay cazuelas. The family business eventually moved into the house itself. For decades they were simply "quesadillas enchiladas"; it was her daughter, <strong>Josefina Medellín Jalomo</strong>, who gave them the name <em>enchiladas potosinas</em> in <strong>1965</strong>.</p>

<h2>The two legends</h2>
<p>How the chile got into the masa depends on who tells it. <strong>Version one — the mill:</strong> the local molino ground her nixtamal in a mill still carrying chile cascabel residue from the previous day; the accidentally "enchilada" masa was delicious, and she asked them to grind it that way forever. <strong>Version two — the family’s:</strong> her granddaughter tells that Cristina spilled a tomato-and-serrano salsa into the masa, kneaded it in rather than waste it, made smaller tortillas, and stuffed them with local goat’s-milk <em>queso de saltierra</em>, perfecting the seal so the cheese wouldn’t escape the fryer. Both versions agree on the essential: the accident became a technique, and the technique became an identity.</p>

<h2>What makes them different</h2>
<p>The canonical build, as culinary reference Larousse Cocina describes it: masa colored with <strong>chile ancho or guajillo</strong>, filled with fresh cheese, onion and a salsa of the same chile, closed like a quesadilla, cooked on the comal and <em>then</em> fried. They arrive dusted with onion — often with crema, queso and lettuce — and the founding family fixed the traditional sides long ago: <strong>frijoles and cueritos</strong>. In SLP they are breakfast food first: homes, markets and fondas serve them from morning.</p>

<h2>Where to eat them today</h2>
<ul>
<li><strong>La Casa de la Enchilada</strong> — Hidalgo 117, Soledad de Graciano Sánchez, one block from the Jardín Hidalgo. The very house where the dish was born, still run by descendants after roughly 80 years in the same spot. Worth the 20-minute trip from the capital on its own.</li>
<li><strong>La Parroquia Potosina</strong> — Av. Venustiano Carranza 303, Centro. A city classic since 1975 and the easiest place to try them well downtown.</li>
<li><strong>Rincón Huasteco</strong> — Cuauhtémoc 232, Col. Moderna. Listed among Culinaria Mexicana’s 250 best restaurants in Mexico for seven editions; its Tuesday enchilada festival runs eleven varieties, and the zacahuil is the real thing.</li>
<li><strong>Markets:</strong> the fondas of <a href="/blog/best-brunch-spots-san-luis-potosi">Mercado Hidalgo and Mercado República</a> make them the classic market breakfast.</li>
</ul>

<h2>The town that throws them a fair</h2>
<p>Soledad celebrates its dish with the <strong>Feria Nacional de la Enchilada (FENAE)</strong>, a food-and-music fair with 14 years of history held at the Jardín Hidalgo. The 2026 edition ran April 4–12 with free entry; according to the municipal government, it drew over 600,000 visitors. Our <a href="/events/feria-de-la-enchilada-2026">FENAE page</a> tracks the next edition as soon as dates are announced.</p>
` + faq('FAQ', [
  ['What are enchiladas potosinas?', 'A dish from San Luis Potosí in which chile (ancho or guajillo) is kneaded directly into the corn masa — not poured on top. The red masa is folded over fresh cheese like a quesadilla, cooked on the comal, then fried, and served with beans and cueritos.'],
  ['Who invented enchiladas potosinas?', 'Doña Cristina Jalomo (1874–1973) of Soledad de Graciano Sánchez, around 1919. Two origin stories compete — a mill that ground her nixtamal with chile residue, or a salsa spill she kneaded into the masa. Her daughter Josefina named them "enchiladas potosinas" in 1965.'],
  ['Where can I eat the original enchiladas potosinas?', 'At La Casa de la Enchilada (Hidalgo 117, Soledad de Graciano Sánchez), the family house where the dish was born, still run by descendants. In the capital, La Parroquia Potosina (Carranza 303) and Rincón Huasteco (Cuauhtémoc 232) are the standard-bearers.'],
  ['Are enchiladas potosinas spicy?', 'Mildly. The ancho/guajillo masa brings color and deep flavor more than heat; the cheese and crema round it off. They are eaten for breakfast as much as dinner.'],
]);

// ---------------- ES ----------------
const content_es = qa('Respuesta rápida', 'Las enchiladas potosinas no son enchiladas en el sentido usual: el chile va AMASADO en la masa, no encima. Las inventó hacia 1919 doña Cristina Jalomo en Soledad de Graciano Sánchez; van rellenas de queso, pasan por comal y luego se fríen, y se acompañan tradicionalmente con frijoles y cueritos. Pruébalas en La Casa de la Enchilada en Soledad, La Parroquia Potosina en Carranza o el Rincón Huasteco.') + `
<p class="text-lg text-gray-700 mb-6">Pide enchiladas en cualquier otra parte de México y te darán tortillas ahogadas en salsa. Pídelas en San Luis Potosí y recibirás algo estructuralmente distinto: una masa rojiza que lleva el chile <em>adentro</em>, doblada sobre queso como quesadilla, besada por el comal y terminada en aceite caliente. Un platillo, un pueblo, una mujer — y un siglo de discusiones sobre cómo pasó exactamente.</p>

<h2>La mujer que las inventó</h2>
<p><strong>Doña Cristina Jalomo</strong> (1874–1973) vendía tortillas hechas a mano desde su casa en <strong>Soledad de Graciano Sánchez</strong>, el municipio conurbado a la capital. Hacia <strong>1919</strong>, algo salió distinto en su cocina — y el resultado gustó tanto que empezó a venderlo bajo un árbol en la plaza de Soledad los domingos, con anafre de carbón y cazuelas de barro. El negocio familiar terminó mudándose a la propia casa. Durante décadas fueron simplemente "quesadillas enchiladas"; fue su hija, <strong>Josefina Medellín Jalomo</strong>, quien les dio el nombre de <em>enchiladas potosinas</em> en <strong>1965</strong>.</p>

<h2>Las dos leyendas</h2>
<p>Cómo llegó el chile a la masa depende de quién lo cuente. <strong>Versión uno — el molino:</strong> el molino local molió su nixtamal con residuos de chile cascabel del día anterior; la masa accidentalmente "enchilada" resultó deliciosa, y ella pidió que se la molieran así para siempre. <strong>Versión dos — la familiar:</strong> su nieta cuenta que a Cristina se le derramó una salsa de jitomate y chile serrano en la masa; en vez de desperdiciarla la amasó, hizo tortillas más pequeñas y las rellenó de <em>queso de saltierra</em> de cabra de ranchos locales, perfeccionando el sellado para que el queso no escapara al freírse. Las dos versiones coinciden en lo esencial: el accidente se volvió técnica, y la técnica, identidad.</p>

<h2>Qué las hace diferentes</h2>
<p>La construcción canónica, como la describe Larousse Cocina: masa coloreada con <strong>chile ancho o guajillo</strong>, relleno de queso fresco, cebolla y salsa del mismo chile, cerradas como quesadilla, cocidas en comal y <em>después</em> fritas. Llegan espolvoreadas con cebolla — muchas veces con crema, queso y lechuga — y la familia fundadora fijó hace mucho el acompañamiento tradicional: <strong>frijoles y cueritos</strong>. En SLP son primero comida de desayuno: casas, mercados y fondas las sirven desde la mañana.</p>

<h2>Dónde comerlas hoy</h2>
<ul>
<li><strong>La Casa de la Enchilada</strong> — Hidalgo 117, Soledad de Graciano Sánchez, a una cuadra del Jardín Hidalgo. La casa misma donde nació el platillo, aún operada por descendientes tras unos 80 años en el mismo lugar. Vale el viaje de 20 minutos desde la capital por sí sola.</li>
<li><strong>La Parroquia Potosina</strong> — Av. Venustiano Carranza 303, Centro. Clásico de la ciudad desde 1975 y el lugar más fácil para probarlas bien en el centro.</li>
<li><strong>Rincón Huasteco</strong> — Cuauhtémoc 232, Col. Moderna. En la lista de los 250 mejores restaurantes de México de Culinaria Mexicana por siete ediciones; su festival de la enchilada de los martes corre once variedades, y el zacahuil es el de verdad.</li>
<li><strong>Mercados:</strong> las fondas del <a href="/blog/best-brunch-spots-san-luis-potosi">Mercado Hidalgo y el Mercado República</a> las convierten en el desayuno clásico de mercado.</li>
</ul>

<h2>El pueblo que les hace feria</h2>
<p>Soledad celebra su platillo con la <strong>Feria Nacional de la Enchilada (FENAE)</strong>, una feria gastronómico-musical con 14 años de historia en el Jardín Hidalgo. La edición 2026 se celebró del 4 al 12 de abril con entrada gratuita; según el ayuntamiento, atrajo a más de 600,000 visitantes. Nuestra <a href="/events/feria-de-la-enchilada-2026">página de la FENAE</a> publicará las fechas de la próxima edición en cuanto se anuncien.</p>
` + faq('Preguntas frecuentes', [
  ['¿Qué son las enchiladas potosinas?', 'Un platillo de San Luis Potosí en el que el chile (ancho o guajillo) va amasado directamente en la masa de maíz — no vertido encima. La masa roja se dobla sobre queso fresco como quesadilla, pasa por comal, se fríe y se sirve con frijoles y cueritos.'],
  ['¿Quién inventó las enchiladas potosinas?', 'Doña Cristina Jalomo (1874–1973), de Soledad de Graciano Sánchez, hacia 1919. Compiten dos versiones del origen — un molino que molió su nixtamal con residuos de chile, o una salsa derramada que amasó en la masa. Su hija Josefina las bautizó "enchiladas potosinas" en 1965.'],
  ['¿Dónde se comen las enchiladas potosinas originales?', 'En La Casa de la Enchilada (Hidalgo 117, Soledad de Graciano Sánchez), la casa familiar donde nació el platillo, aún operada por descendientes. En la capital, La Parroquia Potosina (Carranza 303) y el Rincón Huasteco (Cuauhtémoc 232) son los estandartes.'],
  ['¿Pican las enchiladas potosinas?', 'Poco. La masa de ancho/guajillo aporta color y sabor profundo más que picor; el queso y la crema lo redondean. Se comen tanto de desayuno como de cena.'],
]);

// ---------------- DE ----------------
const content_de = qa('Kurzantwort', 'Enchiladas Potosinas sind keine Enchiladas im üblichen Sinn: Der Chili wird IN den Maisteig geknetet, nicht darübergegossen. Erfunden um 1919 von Doña Cristina Jalomo in Soledad de Graciano Sánchez — mit Käse gefüllt, auf dem Comal gegart, dann frittiert, traditionell mit Bohnen und Cueritos. Am besten in der Casa de la Enchilada in Soledad, der Parroquia Potosina an der Carranza oder im Rincón Huasteco.') + `
<p class="text-lg text-gray-700 mb-6">Bestell irgendwo in Mexiko Enchiladas, und du bekommst Tortillas in Salsa ertränkt. In San Luis Potosí bekommst du etwas strukturell anderes: einen rostroten Teig, der den Chili <em>innen</em> trägt, über Käse gefaltet wie eine Quesadilla, kurz aufs Comal, dann ins heiße Öl. Ein Gericht, ein Ort, eine Frau — und ein Jahrhundert Streit darüber, wie genau es passierte.</p>

<h2>Die Erfinderin</h2>
<p><strong>Doña Cristina Jalomo</strong> (1874–1973) verkaufte handgemachte Tortillas aus ihrem Haus in <strong>Soledad de Graciano Sánchez</strong>, direkt neben der Hauptstadt. Um <strong>1919</strong> lief in ihrer Küche etwas anders — und das Ergebnis war so gut, dass sie es sonntags unter einem Baum an der Plaza von Soledad verkaufte, mit Kohle-Anafre und Tontöpfen. Jahrzehntelang hießen sie schlicht "Quesadillas Enchiladas"; erst ihre Tochter <strong>Josefina Medellín Jalomo</strong> taufte sie <strong>1965</strong> auf den Namen <em>Enchiladas Potosinas</em>.</p>

<h2>Die zwei Legenden</h2>
<p><strong>Version eins — die Mühle:</strong> Die örtliche Mühle mahlte ihren Nixtamal mit Chile-Cascabel-Resten vom Vortag; der versehentlich „verchilte“ Teig schmeckte großartig, und sie ließ ihn fortan immer so mahlen. <strong>Version zwei — die der Familie:</strong> Ihre Enkelin erzählt, Cristina habe eine Tomaten-Serrano-Salsa in den Teig verschüttet, ihn kurzerhand verknetet, kleinere Tortillas geformt und sie mit Ziegen-<em>Queso de Saltierra</em> gefüllt — mit perfektioniertem Verschluss, damit der Käse beim Frittieren nicht ausläuft. Beide Versionen einigt das Wesentliche: Aus dem Unfall wurde Technik, aus der Technik Identität.</p>

<h2>Was sie besonders macht</h2>
<p>Der kanonische Aufbau laut Larousse Cocina: Teig gefärbt mit <strong>Chile Ancho oder Guajillo</strong>, gefüllt mit Frischkäse, Zwiebel und Salsa desselben Chilis, wie eine Quesadilla geschlossen, auf dem Comal gegart und <em>dann</em> frittiert. Serviert mit Zwiebeln, oft Crema, Käse und Salat — und den von der Gründerfamilie festgelegten Beilagen: <strong>Bohnen und Cueritos</strong>. In SLP sind sie zuerst Frühstück: Märkte und Fondas servieren sie ab morgens.</p>

<h2>Wo man sie heute isst</h2>
<ul>
<li><strong>La Casa de la Enchilada</strong> — Hidalgo 117, Soledad de Graciano Sánchez: das Geburtshaus des Gerichts, nach rund 80 Jahren noch von Nachfahren geführt. Allein die 20 Minuten Fahrt wert.</li>
<li><strong>La Parroquia Potosina</strong> — Av. Carranza 303, Centro: Stadtklassiker seit 1975.</li>
<li><strong>Rincón Huasteco</strong> — Cuauhtémoc 232: sieben Mal unter Mexikos 250 besten Restaurants (Culinaria Mexicana); dienstags Enchilada-Festival mit elf Varianten.</li>
<li><strong>Märkte:</strong> die Fondas von Mercado Hidalgo und Mercado República — das klassische Marktfrühstück (siehe <a href="/blog/best-brunch-spots-san-luis-potosi">Brunch-Guide</a>).</li>
</ul>

<h2>Die Stadt, die ihnen eine Feria widmet</h2>
<p>Soledad feiert sein Gericht mit der <strong>Feria Nacional de la Enchilada (FENAE)</strong> am Jardín Hidalgo — seit 14 Jahren. Die Ausgabe 2026 lief vom 4. bis 12. April bei freiem Eintritt; laut Stadtverwaltung kamen über 600.000 Besucher. Unsere <a href="/events/feria-de-la-enchilada-2026">FENAE-Seite</a> meldet die nächsten Termine, sobald sie offiziell sind.</p>
` + faq('Häufige Fragen', [
  ['Was sind Enchiladas Potosinas?', 'Ein Gericht aus San Luis Potosí, bei dem der Chili (Ancho oder Guajillo) direkt in den Maisteig geknetet wird. Der rote Teig wird über Frischkäse gefaltet, auf dem Comal gegart, dann frittiert — serviert mit Bohnen und Cueritos.'],
  ['Wer hat sie erfunden?', 'Doña Cristina Jalomo (1874–1973) aus Soledad de Graciano Sánchez, um 1919. Zwei Ursprungslegenden konkurrieren: die Mühle mit Chile-Resten oder die verschüttete Salsa. Den Namen gab ihre Tochter Josefina 1965.'],
  ['Wo isst man das Original?', 'In der Casa de la Enchilada (Hidalgo 117, Soledad) — dem Geburtshaus, noch von Nachfahren geführt. In der Hauptstadt: La Parroquia Potosina (Carranza 303) und Rincón Huasteco (Cuauhtémoc 232).'],
]);

// ---------------- JA ----------------
const content_ja = qa('早わかり', 'エンチラーダス・ポトシーナスは普通のエンチラーダとは別物。チリはソースとしてかけるのではなく生地に練り込む。1919年頃、ソレダードのクリスティーナ・ハロモが生んだ料理で、チーズを包みコマルで焼いてから揚げ、フリホーレスとクエリートスを添える。発祥の家「カサ・デ・ラ・エンチラーダ」やラ・パロキア・ポトシーナで味わえる。') + `
<p class="text-lg text-gray-700 mb-6">メキシコの他の街でエンチラーダを頼めば、サルサに沈んだトルティーヤが出てくる。だがサンルイスポトシでは構造から違う。チリを<em>中に</em>練り込んだ赤い生地でチーズを包み、コマルで焼いてから油で仕上げる。一つの料理、一つの町、一人の女性——そして「どう生まれたか」をめぐる百年の論争。</p>

<h2>生みの親</h2>
<p><strong>クリスティーナ・ハロモ</strong>（1874–1973）は州都に隣接する<strong>ソレダード・デ・グラシアーノ・サンチェス</strong>で手作りトルティーヤを売っていた。<strong>1919年頃</strong>、彼女の台所で何かが変わり、その出来があまりに良く、日曜のソレダード広場の木の下で炭火とともに売り始めた。長年「ケサディージャス・エンチラーダス」と呼ばれ、<strong>1965年</strong>に娘のホセフィーナが「エンチラーダス・ポトシーナス」と名付けた。</p>

<h2>二つの伝説</h2>
<p><strong>説その一「製粉所」</strong>：前日のチレ・カスカベルの残りが付いた石臼でニシュタマルを挽いてしまい、偶然「チリ入り」になった生地が絶品だった。<strong>説その二「一家の証言」</strong>：孫娘いわく、トマトとセラーノのサルサを生地にこぼしてしまい、捨てずに練り込み、小さめのトルティーヤに山羊のチーズ（ケソ・デ・サルティエラ）を包んだのが始まり。共通するのは——事故が技術になり、技術がアイデンティティになったことだ。</p>

<h2>何が違うのか</h2>
<p>料理事典ラルース・コシーナによる定義：<strong>チレ・アンチョまたはグアヒージョ</strong>で色付けした生地にフレッシュチーズを包み、ケサディージャ状に閉じ、コマルで焼いた<em>後に</em>揚げる。玉ねぎ、クレマ、レタスを添え、創業家が定めた伝統の付け合わせは<strong>フリホーレスとクエリートス</strong>。SLPではまず朝食の料理だ。</p>

<h2>今どこで食べるか</h2>
<ul>
<li><strong>ラ・カサ・デ・ラ・エンチラーダ</strong> — ソレダード、Hidalgo 117。料理が生まれたその家で、いまも子孫が営む（約80年）。州都から20分の価値は十分。</li>
<li><strong>ラ・パロキア・ポトシーナ</strong> — カランサ大通り303。1975年からの定番で、中心部で味わうならここ。</li>
<li><strong>リンコン・ウアステコ</strong> — Cuauhtémoc 232。メキシコのベスト250レストランに7回選出。火曜は11種のエンチラーダ祭り。</li>
<li><strong>市場</strong> — イダルゴ市場とレプブリカ市場の食堂は、市場朝食の王道だ。</li>
</ul>

<h2>この料理に捧げる祭り</h2>
<p>ソレダードは<strong>全国エンチラーダ祭り（FENAE）</strong>で自慢の料理を祝う。2026年は4月4〜12日に開催され入場無料、市当局によれば60万人超が来場した。次回の日程は<a href="/events/feria-de-la-enchilada-2026">FENAEページ</a>で告知する。</p>
` + faq('よくある質問', [
  ['エンチラーダス・ポトシーナスとは？', 'チリ（アンチョまたはグアヒージョ）をトウモロコシ生地に直接練り込むSLPの料理。赤い生地でチーズを包み、コマルで焼いてから揚げ、フリホーレスとクエリートスを添える。'],
  ['誰が発明した？', 'ソレダード出身のクリスティーナ・ハロモ（1874–1973）が1919年頃に考案。製粉所の偶然説とサルサをこぼした説の二つの伝説がある。1965年に娘が現在の名を付けた。'],
  ['本場はどこで食べられる？', '発祥の家ラ・カサ・デ・ラ・エンチラーダ（ソレダード、Hidalgo 117）。州都ではラ・パロキア・ポトシーナ（カランサ303）とリンコン・ウアステコが双璧。'],
]);

const row = {
  slug: 'enchiladas-potosinas-historia-donde-comer',
  status: 'published',
  published_at: new Date().toISOString(),
  category: 'Food & Drink',
  tags: ['enchiladas-potosinas', 'food', 'san-luis-potosi', 'soledad', 'history', 'gastronomy'],
  image_url: HERO,
  title: 'Enchiladas Potosinas: The Accidental Dish That Defined a State',
  title_es: 'Enchiladas potosinas: el platillo accidental que definió a un estado',
  title_de: 'Enchiladas Potosinas: das zufällige Gericht, das einen Staat prägte',
  title_ja: 'エンチラーダス・ポトシーナス——偶然が生んだ州の味',
  excerpt: 'Chile kneaded into the masa, a 1919 kitchen accident in Soledad, two competing legends and one family still frying them in the house where it happened. The full story — and where to eat them.',
  excerpt_es: 'Chile amasado en la masa, un accidente de cocina de 1919 en Soledad, dos leyendas en competencia y una familia que aún las fríe en la casa donde ocurrió. La historia completa — y dónde comerlas.',
  excerpt_de: 'Chili im Teig, ein Küchenunfall von 1919 in Soledad, zwei konkurrierende Legenden und eine Familie, die sie noch im Geburtshaus brät. Die ganze Geschichte — und wo man sie isst.',
  excerpt_ja: '生地に練り込むチリ、1919年ソレダードの台所の偶然、対立する二つの伝説。発祥の家で今も揚げ続ける一家の物語と、味わえる店を紹介。',
  content,
  content_es,
  content_de,
  content_ja,
  meta_title: 'Enchiladas Potosinas: History & Where to Eat Them',
  meta_title_es: 'Enchiladas potosinas: historia y dónde comerlas',
  meta_title_de: 'Enchiladas Potosinas: Geschichte & die besten Adressen',
  meta_title_ja: 'エンチラーダス・ポトシーナスの歴史と名店',
  meta_description: 'Born from a 1919 kitchen accident in Soledad: how enchiladas potosinas work (chile in the masa, not on top), the two origin legends, and where to eat the original today.',
  meta_description_es: 'Nacidas de un accidente de cocina en 1919 en Soledad: cómo funcionan (chile en la masa, no encima), las dos leyendas del origen y dónde comer las originales hoy.',
  meta_description_de: '1919 aus einem Küchenunfall in Soledad geboren: Chili im Teig statt obendrauf, zwei Ursprungslegenden — und wo man das Original heute isst.',
  meta_description_ja: '1919年ソレダードの偶然から生まれた名物。生地に練り込むチリの技法、二つの起源伝説、本場の名店を解説。',
  discover_title: 'A spilled salsa in 1919 created SLP’s most famous dish',
  discover_title_es: 'Una salsa derramada en 1919 creó el platillo más famoso de SLP',
  discover_title_de: 'Eine verschüttete Salsa von 1919 schuf SLPs berühmtestes Gericht',
  discover_title_ja: 'こぼれたサルサが生んだSLP一の名物',
};

const { error } = await s.from('blog_posts').upsert(row, { onConflict: 'slug' });
if (error) throw error;
console.log(`✓ published ${row.slug}`);
