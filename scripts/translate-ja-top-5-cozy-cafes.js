// Native Japanese translation for blog post `top-5-cozy-cafes-winter-san-luis-potosi`.
// Idempotent: updates ONLY content_ja by slug. Verifies by re-fetch.
require('dotenv').config({ path: '.env' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const SLUG = 'top-5-cozy-cafes-winter-san-luis-potosi';

const CONTENT_JA = `
<p>San Luis Potosíの気温が下がってくると、湯気の立つコーヒーや濃厚なメキシカンホットチョコレートのカップを両手で包み込むひとときほど心地よいものはありません。集中できる場所を探すリモートワーカーの方も、静かな隅の席を求める読書好きの方も、あるいはただ居心地のよい雰囲気を味わいたい方も、この街のカフェシーンにはあなたにぴったりの特別な一軒がきっと見つかります。</p>

<p>私たちは街じゅうの名店を巡り、あたたかさ、極上のドリンク、そして冬を耐え忍べるものに——いえ、むしろ楽しいものに——変えてくれる、かけがえのない居心地のよさを兼ね備えた5軒のカフェに絞り込みました。</p>

<h2>1. Capital Coffee — モダンな快適さと確かな品質の出会い</h2>

<figure class="my-8">
  <img src="https://omxporaecrqsqhzjzvnx.supabase.co/storage/v1/object/public/blog-images/cafes/capital-coffee.jpg" alt="モダンでミニマルな内装と居心地のよい座席が広がるSan Luis PotosíのCapital Coffeeの店内" class="w-full rounded-lg shadow-lg" />
  <figcaption class="text-center text-sm text-gray-500 mt-2">ゆったりとした座席が魅力のCapital Coffeeのモダンな店内 - 写真: @capitalcoffeesanluis</figcaption>
</figure>

<p><strong>住所:</strong> Avenida Cuauhtémoc 1327, Jardín, San Luis Potosí</p>

<p>Capital Coffeeは、街でもっとも愛されるスペシャルティコーヒーの名店へと瞬く間に成長しました。ミニマルな装飾と細部まで考え抜かれたインテリアデザインを備えたこのカフェは、思索にふけるのにも、集中して仕事をするのにも、友人と語らうのにも最適な、ゆとりある空間を提供してくれます。</p>

<p>冬におすすめの理由:</p>
<ul>
  <li><strong>ゆったりとした造り</strong>——上階と屋外テラスを備えています</li>
  <li><strong>ベジタリアン・ヴィーガン対応メニュー</strong>で体をあたためられます</li>
  <li><strong>ヨーロッパ風の朝食</strong>——焼きたてのパンとともに</li>
  <li><strong>快適なWiFi</strong>——リモートワーカーにうれしい環境です</li>
</ul>

<p>常連客はCapital Coffeeを「ただのカフェではない」体験だと語ります。コーヒーにも雰囲気にも行き届いた心配りが、一杯一杯にあらわれています。</p>

<p><em>こんな方に: リモートワーカー、コーヒー愛好家、静かな朝のひとときを過ごしたい方</em></p>

<h2>2. Café Sideral — 「San Luisで一番美しいカフェ」</h2>

<figure class="my-8">
  <img src="https://omxporaecrqsqhzjzvnx.supabase.co/storage/v1/object/public/blog-images/cafes/cafe-sideral.jpg" alt="San Luis PotosíのCafé Sideralの美しい壁画とアートな内装" class="w-full rounded-lg shadow-lg" />
  <figcaption class="text-center text-sm text-gray-500 mt-2">Café Sideralの見事な壁画がアートな雰囲気を演出 - 写真: Café Sideral</figcaption>
</figure>

<p><strong>住所:</strong> San Luis Potosí市内に2店舗（詳しくは<a href="https://www.cafesideral.com/" target="_blank" rel="noopener">公式ウェブサイト</a>をご確認ください）</p>

<p>「El café más bonito de San Luis（San Luisで一番美しいカフェ）」を自称するCafé Sideralは、その大胆な謳い文句にたがわぬ一軒です。店内を彩る見事な壁画が、冬のコーヒータイムに芸術的な背景を添えてくれます。</p>

<p>冬におすすめの理由:</p>
<ul>
  <li><strong>美しい壁画</strong>——訪れるたびに写真に収めたくなります</li>
  <li><strong>厳選された素材</strong>——どのドリンクや料理にも使われています</li>
  <li><strong>唯一無二の雰囲気</strong>——あたたかなアートの隠れ家のようです</li>
  <li><strong>2つの店舗</strong>——どちらかがいつも近くにあります</li>
</ul>

<p>このカフェは上質なコーヒーと本格的な食にこだわり、スペシャルティコーヒーに加え、ノンカフェインのドリンクやフレッシュジュースなど幅広いメニューをそろえています。</p>

<p><em>こんな方に: クリエイティブな仕事をする方、初デート、Instagram好きの方</em></p>

<h2>3. 500 Noches — トローバの調べとChiapasのコーヒー</h2>

<figure class="my-8">
  <img src="https://omxporaecrqsqhzjzvnx.supabase.co/storage/v1/object/public/blog-images/cafes/500-noches.jpg" alt="San Luis Potosíの500 Nochesで生のトローバ音楽が流れる居心地のよい夜の雰囲気" class="w-full rounded-lg shadow-lg" />
  <figcaption class="text-center text-sm text-gray-500 mt-2">500 NochesはChiapasのあたたかさと生のトローバ音楽をSLPに届けます - 写真: @500nochesslp</figcaption>
</figure>

<p><strong>住所:</strong> Calle Huasteca #300, Residencial Bellas Lomas</p>

<p>ChiapasのTuxtla Gutiérrezを発祥とする500 Nochesは、メキシコ南部のあたたかさをSan Luis Potosíに運んできました。このカフェを際立たせているのが、生のトローバ音楽です。魂のこもった旋律を奏でる吟遊詩人たちの演奏が空間を満たし、とりわけ水曜の夜がおすすめです。</p>

<p>冬におすすめの理由:</p>
<ul>
  <li><strong>毎晩の生演奏</strong>——トローバの歌い手やシンガーソングライターが奏でます</li>
  <li><strong>本場Chiapasのコーヒー</strong>——メキシコでも屈指の逸品です</li>
  <li><strong>居心地のよい夜の雰囲気</strong>——冬の夜にぴったりです</li>
  <li><strong>クラフトビールとワイン</strong>——もう少し強いものが飲みたい方にも</li>
  <li><strong>朝食は毎日9時から13時まで</strong>提供されています</li>
</ul>

<p>訪れた人々は、水曜日のトリビュートライブに足を運ぶことをすすめています——ただし事前の予約をお忘れなく。本を読んだり、大切な人とひとときを分かち合ったり、あるいはただ極上のコーヒーを片手にひとりの時間を楽しんだりするのに、まさにうってつけの場所です。</p>

<p><em>こんな方に: 音楽好きの方、夜のお出かけ、ロマンチックなデート</em></p>

<h2>4. Las Castañas — 歴史の趣とスイーツの誘惑</h2>

<figure class="my-8">
  <img src="https://omxporaecrqsqhzjzvnx.supabase.co/storage/v1/object/public/blog-images/cafes/las-castanas.jpg" alt="San Luis PotosíのLas Castañasベーカリーに並ぶおいしそうなカップケーキとペイストリー" class="w-full rounded-lg shadow-lg" />
  <figcaption class="text-center text-sm text-gray-500 mt-2">Las Castañasの名物カップケーキとペイストリー - 写真: @lascastanas</figcaption>
</figure>

<p><strong>住所:</strong> Av. Venustiano Carranza 1325, Tequisquiapan（およびCentroのIndependencia #800）</p>

<p>Instagramのフォロワーは12万4千人超。Las Castañasは、San Luis Potosíでもっともかわいらしいカフェのひとつとして評判を確立してきました。Carranza通りに面し、地元で親しまれるTequis教会の向かいに位置するこのベーカリー兼カフェは、歴史の趣とおいしいスイーツを融合させています。</p>

<p>冬におすすめの理由:</p>
<ul>
  <li><strong>名物のマンゴーカップケーキ</strong>と季節限定メニュー</li>
  <li><strong>美しいクリスマスオーナメント</strong>や装飾品も販売しています</li>
  <li><strong>ホットチョコレート</strong>——寒い朝にぴったりです</li>
  <li><strong>清潔で居心地のよい雰囲気</strong>とあたたかなスタッフ</li>
  <li><strong>中心部という立地</strong>——歴史地区（Centro Histórico）散策の拠点に最適です</li>
</ul>

<p>コーヒーだけでなく、Las Castañasにはあたたかい飲み物と相性抜群の、ほおばりたくなるクッキー、ケーキ、デザートがそろっています。ラテを楽しみながら贈り物を選べる、そんな場所です。</p>

<p><em>こんな方に: 甘いもの好きの方、お買い物を楽しみたい方、ご家族連れ</em></p>

<h2>5. Halva Café — 写真映えするフレンチペイストリー</h2>

<figure class="my-8">
  <img src="https://omxporaecrqsqhzjzvnx.supabase.co/storage/v1/object/public/blog-images/cafes/halva-cafe.jpg" alt="San Luis PotosíのHalva Caféの写真映えする内装とフレンチペイストリー" class="w-full rounded-lg shadow-lg" />
  <figcaption class="text-center text-sm text-gray-500 mt-2">Halva Caféの実験的なフレンチペイストリーと美しい店内 - 写真: @halvacafe.mx</figcaption>
</figure>

<p><strong>住所:</strong> Av. Venustiano Carranza 1190, Tequisquiapan（Jardín de Tequisの角）</p>

<p>Casa Hの一部であるHalva Caféは、フレンチペイストリーの技法とメキシコの創造性が出会う場所です。シェフのDaniel Solisとそのチームが率いるこの実験的なベーカリーは、San Luis Potosíのカフェシーンに、真に唯一無二の存在を生み出しました。</p>

<p>冬におすすめの理由:</p>
<ul>
  <li><strong>実験的なベーカリー</strong>——ほかでは味わえない個性的なフレーバーが楽しめます</li>
  <li><strong>フレンチペイストリーのエッセンス</strong>——どの一品にも息づいています</li>
  <li><strong>とびきり写真映えする内装</strong>デザイン</li>
  <li><strong>豊富な菓子パン</strong>とスペシャルティドリンク</li>
  <li><strong>Tequisの一等地</strong>——庭園を見渡せるロケーションです</li>
</ul>

<p>このカフェは自らの哲学を「焼き菓子とドリンクにおいて最高の味わいを追求すること」と表現しており、Halvaはこの街で忘れられない目的地だと訪れた人々も口をそろえます。</p>

<p><em>こんな方に: ペイストリー好きの方、Instagramのコンテンツ制作者、特別な日の一杯を求める方</em></p>

<h2>San Luis Potosíの冬のカフェ攻略ヒント</h2>

<figure class="my-8">
  <img src="/images/blog/cafes/hot-chocolate-slp.jpg" alt="San Luis Potosíで供される伝統的なメキシカンホットチョコレート" class="w-full rounded-lg shadow-lg" />
  <figcaption class="text-center text-sm text-gray-500 mt-2">寒い冬の朝には、メキシカンホットチョコレートの一杯にまさるものはありません</figcaption>
</figure>

<p>カフェ巡りに出かける前に、地元ならではのヒントをいくつかご紹介します:</p>

<ul>
  <li><strong>混雑する時間帯:</strong> 週末の10時から13時は混み合うことがあります。ゆったり過ごしたいなら、早めの時間や平日に訪れるのがおすすめです。</li>
  <li><strong>地元のチョコレートを味わう:</strong> メキシカンホットチョコレート（chocolate caliente）は冬の定番。本来の味わいを楽しむなら「espeso（濃厚）」で注文してみてください。</li>
  <li><strong>WiFi:</strong> ここで紹介したほとんどのカフェには無料WiFiがありますが、なかでもCapital CoffeeとCafé Sideralはリモートワーカーに特に人気です。</li>
  <li><strong>予約:</strong> 500 Nochesの水曜の夜は、予約を強くおすすめします。</li>
  <li><strong>駐車:</strong> Tequisエリア（Las CastañasとHalva）は駐車が難しいことがあります。近くにお住まいなら徒歩で、そうでなければ配車サービスの利用をご検討ください。</li>
</ul>

<h2>おわりに</h2>

<p>San Luis Potosíのカフェ文化は成長を続け、地元の人にも旅行者にも、冬の寒さから逃れられる多彩で居心地のよい場所を提供してくれます。Capital Coffeeのモダンなミニマリズムがお好みでも、Café Sideralの芸術的な雰囲気でも、500 Nochesの音楽に彩られた夜でも、Las Castañasの甘い伝統でも、あるいはHalva Caféの実験的なペイストリーでも、きっとあなたを待つあたたかな一角があるはずです。</p>

<p>お気に入りの本を手に取って、友人を誘って、あるいはただひとりの時間を楽しんで——この5軒のカフェが、あなたのSan Luis Potosíでの冬を、ほんの少しあたたかくしてくれるでしょう。</p>

<p><em>私たちが見逃した、お気に入りの居心地のよいカフェはありますか？ コメントで教えていただくか、SNSで私たちをタグ付けしてくださいね！</em></p>
`;

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

  if (data.content_ja === CONTENT_JA) {
    console.log('content_ja already up to date. Nothing to do.');
    process.exit(0);
  }

  const { error: upErr } = await supabase
    .from('blog_posts')
    .update({ content_ja: CONTENT_JA })
    .eq('id', data.id);
  if (upErr) {
    console.error('UPDATE ERROR:', upErr.message);
    process.exit(1);
  }
  console.log('Updated content_ja.');

  // Verify by re-fetch (authoritative).
  const { data: check, error: chkErr } = await supabase
    .from('blog_posts')
    .select('content, content_de, content_ja')
    .eq('id', data.id)
    .single();
  if (chkErr) {
    console.error('VERIFY FETCH ERROR:', chkErr.message);
    process.exit(1);
  }

  const countTags = (h) => (String(h || '').match(/<[^>]+>/g) || []).length;
  const jaTags = countTags(check.content_ja);
  const enTags = countTags(check.content);
  const deUnchanged = check.content_de === data.content_de;

  console.log('content_ja non-empty:', (check.content_ja || '').length > 0);
  console.log('content_ja !== content:', check.content_ja !== check.content);
  console.log('EN tag count:', enTags, '| JA tag count:', jaTags, '| match:', enTags === jaTags);
  console.log('content_de unchanged:', deUnchanged);

  const ok = (check.content_ja || '').length > 0 &&
    check.content_ja !== check.content &&
    enTags === jaTags &&
    deUnchanged;
  console.log(ok ? '\nVERIFIED OK.' : '\nVERIFICATION PROBLEM.');
  process.exit(ok ? 0 : 1);
}

main();
