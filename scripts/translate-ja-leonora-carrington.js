// Idempotent: writes ONLY content_ja for the Leonora Carrington post.
// Native Japanese translation of the English body. Does NOT touch content_de.
require('dotenv').config({ path: '.env' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const SLUG = 'leonora-carrington-san-luis-potosi-museo-centro-artes-surrealism';

const CONTENT_JA = `<div class="prose prose-lg lg:prose-xl max-w-none">

<!-- TABLE OF CONTENTS -->
<div class="not-prose mb-12 bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl shadow-md border border-purple-100">
  <h3 class="text-xl font-semibold mb-4 text-gray-900 flex items-center gap-2">
    <span>📑</span> この記事の内容
  </h3>
  <nav class="space-y-2">
    <a href="#introduccion" class="block text-purple-600 hover:text-purple-800 hover:underline">→ はじめに</a>
    <a href="#quien-fue-leonora" class="block text-purple-600 hover:text-purple-800 hover:underline">→ 1. Leonora Carrington とは何者だったのか</a>
    <a href="#conexion-slp" class="block text-purple-600 hover:text-purple-800 hover:underline">→ 2. San Luis Potosí とのつながり</a>
    <a href="#museo-leonora" class="block text-purple-600 hover:text-purple-800 hover:underline">→ 3. Museo Leonora Carrington</a>
    <a href="#centro-artes" class="block text-purple-600 hover:text-purple-800 hover:underline">→ 4. Centro de las Artes ── 刑務所から楽園へ</a>
    <a href="#xilitla-las-pozas" class="block text-purple-600 hover:text-purple-800 hover:underline">→ 5. Xilitla と Las Pozas ── シュルレアリスムの庭園</a>
    <a href="#visita" class="block text-purple-600 hover:text-purple-800 hover:underline">→ 6. 訪問プランを立てる</a>
    <a href="#conclusion" class="block text-purple-600 hover:text-purple-800 hover:underline">→ おわりに</a>
  </nav>
  <p class="mt-4 text-sm text-gray-600 italic">推定読了時間：12分</p>
</div>

<!-- INTRODUCTION -->
<section id="introduccion" class="mb-16 scroll-mt-8">
  <p class="text-xl leading-relaxed text-gray-800 mb-8 font-medium">
    <strong>メキシコの中心部、コロニアル建築と前衛芸術が出会う地に、20世紀でもっとも謎めいた芸術家の一人を称える、類まれな空間があります。</strong>San Luis Potosí にある Museo Leonora Carrington は、イギリス系メキシコ人のシュルレアリスム画家に丸ごと捧げられた世界初の美術館です。この先見的な芸術家と、メキシコ中央部の魔法のような風景との深いつながりを物語る場所でもあります。
  </p>

  <p class="text-lg leading-relaxed text-gray-700 mb-6">
    Leonora Carrington（1917年〜2011年）は、ただの芸術家ではありませんでした。貴族の家庭に生まれた反骨のイギリス人令嬢として育ちながら、その家柄が求める生き方から逃れてパリのシュルレアリスム運動に身を投じ、やがてメキシコに本当の居場所を見出し、そこで70年近くを過ごしました。
  </p>
</section>

<!-- CHAPTER DIVIDER -->
<div class="not-prose my-16">
  <div class="flex items-center justify-center">
    <div class="border-t-2 border-gray-300 flex-grow"></div>
    <span class="px-6 text-gray-400 text-4xl">✦</span>
    <div class="border-t-2 border-gray-300 flex-grow"></div>
  </div>
</div>

<!-- SECTION 1: WHO WAS LEONORA -->
<section id="quien-fue-leonora" class="mb-16 scroll-mt-8">
  <div class="not-prose mb-8">
    <h2 class="text-4xl font-bold text-gray-900 mb-4 border-b-4 border-purple-500 pb-4 inline-block">
      1. Leonora Carrington とは何者だったのか
    </h2>
    <p class="text-lg text-gray-600 mt-4 italic">
      イギリスの貴族令嬢から、メキシコのシュルレアリスムの伝説へ
    </p>
  </div>

  <figure class="not-prose my-12">
    <div class="rounded-xl overflow-hidden shadow-lg">
      <img
        src="/images/blog/leonora carrington/leonora_surrealism.webp"
        alt="Leonora Carrington and surrealist art"
        class="w-full h-auto"
        loading="lazy"
      />
    </div>
    <figcaption class="mt-4 text-center text-sm text-gray-600 italic">
      シュルレアリスム芸術は夢のようなイメージ、神話、無意識を探求します──いずれも Carrington の作品の中心をなすテーマです
    </figcaption>
  </figure>

  <p class="text-lg leading-relaxed text-gray-700 mb-6">
    Mary Leonora Carrington は、1917年4月6日、イングランドの Lancashire にある Clayton-le-Woods で、繊維業で財を成した裕福な家庭に生まれました。ごく幼いころから、貴族の家柄が課す期待に反発し、Florence の寄宿学校に送られる前には、少なくとも2つの修道院付属学校を退学になっています。
  </p>

  <div class="not-prose my-8 bg-gray-50 border-l-4 border-gray-400 p-6 rounded-r-lg">
    <div class="flex items-start gap-3">
      <span class="text-2xl">📚</span>
      <div>
        <h4 class="font-semibold text-gray-900 mb-2">幼少期に受けた影響</h4>
        <p class="text-gray-700 mb-3">
          Carrington のアイルランド人の母と乳母は、彼女にケルト神話とアイルランドの民間伝承を教えました。こうしたイメージは、のちに彼女の作品のいたるところに現れることになります。
        </p>
        <p class="text-sm text-gray-600">
          — 出典：Tate Gallery の伝記
        </p>
      </div>
    </div>
  </div>

  <h3 class="text-2xl font-semibold text-gray-900 mb-4">メキシコに居場所を見出す</h3>

  <p class="text-lg leading-relaxed text-gray-700 mb-6">
    メキシコの外交官 Renato Leduc との便宜的な結婚により、Carrington は1941年にニューヨークへ渡る手段を得ました。1942年までには Leduc と離婚し、メキシコシティに永住します。以後、彼女はここで残りの生涯──70年近く──を過ごすことになりました。
  </p>

  <!-- STATISTICAL HIGHLIGHT -->
  <div class="not-prose my-8 bg-gradient-to-br from-purple-100 to-pink-100 p-8 rounded-2xl shadow-lg text-center">
    <p class="text-6xl font-bold text-purple-700 mb-3">94</p>
    <p class="text-xl font-semibold text-gray-800 mb-2">類まれな人生の年月</p>
    <p class="text-sm text-gray-600">Leonora Carrington は1917年から2011年まで生き、最期まで作品を作り続けました</p>
  </div>

  <blockquote class="not-prose my-12 bg-gradient-to-r from-purple-50 to-transparent border-l-4 border-purple-500 p-8 rounded-r-xl">
    <p class="text-2xl font-serif italic text-gray-800 mb-4">
      「誰かのミューズになっている暇なんてありませんでした……家族に反抗し、芸術家になることを学ぶのに忙しかったのですから。」
    </p>
    <footer class="flex items-center gap-4">
      <div>
        <cite class="not-italic font-semibold text-gray-900">Leonora Carrington</cite>
        <p class="text-sm text-gray-600">シュルレアリスムの画家・作家</p>
      </div>
    </footer>
  </blockquote>
</section>

<!-- CHAPTER DIVIDER -->
<div class="not-prose my-16">
  <div class="flex items-center justify-center">
    <div class="border-t-2 border-gray-300 flex-grow"></div>
    <span class="px-6 text-gray-400 text-4xl">✦</span>
    <div class="border-t-2 border-gray-300 flex-grow"></div>
  </div>
</div>

<!-- SECTION 2: CONNECTION TO SLP -->
<section id="conexion-slp" class="mb-16 scroll-mt-8">
  <div class="not-prose mb-8">
    <h2 class="text-4xl font-bold text-gray-900 mb-4 border-b-4 border-blue-500 pb-4 inline-block">
      2. San Luis Potosí とのつながり
    </h2>
    <p class="text-lg text-gray-600 mt-4 italic">
      シュルレアリスムの傑作を生んだ、神秘的な風景
    </p>
  </div>

  <p class="text-lg leading-relaxed text-gray-800 mb-8 bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
    <strong>なぜ San Luis Potosí なのでしょうか。</strong>Carrington は主にメキシコシティで暮らしていましたが、Real de Catorce や Cerro de San Pedro といった魔法のような町を訪ねるうちに、San Luis Potosí と特別なつながりを育んでいきました。
  </p>

  <figure class="not-prose my-12">
    <div class="rounded-xl overflow-hidden shadow-lg">
      <img
        src="/images/blog/leonora carrington/San Luis Potosí's dramatic landscapes and rich history attracted many Surrealist artists.webp"
        alt="The dramatic landscapes of San Luis Potosí that attracted Surrealist artists"
        class="w-full h-auto"
        loading="lazy"
      />
    </div>
    <figcaption class="mt-4 text-center text-sm text-gray-600 italic">
      San Luis Potosí の劇的な風景と豊かな歴史は、多くのシュルレアリストたちを惹きつけました
    </figcaption>
  </figure>

  <h3 class="text-2xl font-semibold text-gray-900 mb-4">Real de Catorce ── 創作の源となったゴーストタウン</h3>

  <p class="text-lg leading-relaxed text-gray-700 mb-6">
    San Luis Potosí の山あいに佇む、かつての銀鉱山の町 Real de Catorce は、とりわけ Carrington の心を捉えました。山を貫く全長2.3キロメートルのトンネルを通らなければたどり着けないこの「ゴーストタウン」は、まさに理想的なシュルレアリスムの風景を差し出してくれたのです。
  </p>

  <div class="not-prose my-12 grid grid-cols-1 md:grid-cols-2 gap-8">
    <div class="bg-white p-6 rounded-xl shadow-md border border-gray-200">
      <h5 class="text-lg font-semibold text-gray-900 mb-3">Real de Catorce</h5>
      <ul class="list-disc pl-6 text-gray-700 space-y-2">
        <li>標高2,750メートルにあるかつての鉱山都市</li>
        <li>歴史あるトンネルを通ってアクセス</li>
        <li>Huichol の人々にとって神聖な巡礼地</li>
        <li>幻想的な砂漠の風景</li>
      </ul>
    </div>
    <div class="bg-white p-6 rounded-xl shadow-md border border-gray-200">
      <h5 class="text-lg font-semibold text-gray-900 mb-3">Cerro de San Pedro</h5>
      <ul class="list-disc pl-6 text-gray-700 space-y-2">
        <li>1592年に金が最初に発見された場所</li>
        <li>歴史あるコロニアル建築</li>
        <li>打ち捨てられた鉱山施設</li>
        <li>San Luis Potosí の州都から20キロメートル</li>
      </ul>
    </div>
  </div>
</section>

<!-- CHAPTER DIVIDER -->
<div class="not-prose my-16">
  <div class="flex items-center justify-center">
    <div class="border-t-2 border-gray-300 flex-grow"></div>
    <span class="px-6 text-gray-400 text-4xl">✦</span>
    <div class="border-t-2 border-gray-300 flex-grow"></div>
  </div>
</div>

<!-- SECTION 3: LEONORA CARRINGTON MUSEUM -->
<section id="museo-leonora" class="mb-16 scroll-mt-8">
  <div class="not-prose mb-8">
    <h2 class="text-4xl font-bold text-gray-900 mb-4 border-b-4 border-pink-500 pb-4 inline-block">
      3. Museo Leonora Carrington
    </h2>
    <p class="text-lg text-gray-600 mt-4 italic">
      シュルレアリスムの巨匠に捧げられた、世界初の美術館
    </p>
  </div>

  <figure class="not-prose my-12">
    <div class="rounded-xl overflow-hidden shadow-lg">
      <img
        src="/images/blog/leonora carrington/museo-Leonora-Carrinton.webp"
        alt="Leonora Carrington Museum in San Luis Potosí"
        class="w-full h-auto"
        loading="lazy"
      />
    </div>
    <figcaption class="mt-4 text-center text-sm text-gray-600 italic">
      館内には、Carrington の彫刻や愛用品を展示する親密なギャラリー空間が広がっています
    </figcaption>
  </figure>

  <p class="text-lg leading-relaxed text-gray-700 mb-6">
    2018年3月22日、Museo Leonora Carrington は San Luis Potosí に開館し、この革新的な芸術家に丸ごと捧げられた世界初の美術館となりました。この美術館は、芸術家の息子である Pablo Weisz Carrington の惜しみない寄贈によって実現しました。
  </p>

  <h3 class="text-2xl font-semibold text-gray-900 mb-4">コレクション</h3>

  <div class="not-prose my-12">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div class="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl shadow-md">
        <div class="text-4xl mb-3">🎭</div>
        <h4 class="text-lg font-semibold text-gray-900 mb-2">彫刻</h4>
        <p class="text-sm text-gray-600">「How Doth the Little Crocodile」をはじめとする空想上の生き物を表した、ブロンズやミクストメディアの彫刻</p>
      </div>
      <div class="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl shadow-md">
        <div class="text-4xl mb-3">🖼️</div>
        <h4 class="text-lg font-semibold text-gray-900 mb-2">絵画</h4>
        <p class="text-sm text-gray-600">神話的な存在、錬金術の象徴、夢のような風景を描いたシュルレアリスムの油彩画</p>
      </div>
      <div class="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl shadow-md">
        <div class="text-4xl mb-3">📚</div>
        <h4 class="text-lg font-semibold text-gray-900 mb-2">文学作品</h4>
        <p class="text-sm text-gray-600">小説「The Hearing Trumpet」「The Stone Door」の初版本や、挿絵入りの手稿</p>
      </div>
    </div>

    <div class="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg mt-6">
      <p class="text-purple-800"><strong>来館案内：</strong>Museo Leonora Carrington は、Centro Histórico の Calle Villerias にあります。入場は無料です。開館は火曜〜日曜の10:00〜18:00。週末にはガイドツアーもご利用いただけます。</p>
    </div>
  </section>

  <!-- SECTION 4: CENTRO DE LAS ARTES -->
  <section id="centro-artes" class="mb-16 scroll-mt-8">
    <div class="not-prose mb-8">
      <h2 class="text-4xl font-bold text-gray-900 mb-4 border-b-4 border-blue-500 pb-4 inline-block">
        4. Centro de las Artes ── 刑務所から楽園へ
      </h2>
    </div>

    <p class="text-lg text-gray-700 mb-6">メキシコでもっとも印象的な文化的変貌の一つ、<strong>Centro de las Artes de San Luis Potosí</strong>は、かつての州立刑務所の建物を利用しています。この壮大な建造物は、Porfiriato 時代の1884年から1904年にかけて建てられました。2006年、この刑務所は世界水準の芸術センターへと生まれ変わったのです。</p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <div class="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-md">
        <h4 class="text-xl font-semibold text-gray-900 mb-3">Leonora Carrington の展示室</h4>
        <p class="text-gray-700">Centro de las Artes の中に設けられた専用の展示空間では、Carrington の作品が入れ替わりで展示され、その遺産を建物の劇的な建築の歴史と結びつけています。刑務所の壁とシュルレアリスム芸術との対比が、力強い体験を生み出します。</p>
      </div>
      <div class="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-md">
        <h4 class="text-xl font-semibold text-gray-900 mb-3">見どころ</h4>
        <ul class="space-y-2 text-gray-700">
          <li class="flex items-start gap-2"><span class="text-blue-500">✓</span> アーティストのアトリエに改装された、かつての独房</li>
          <li class="flex items-start gap-2"><span class="text-blue-500">✓</span> 展示が入れ替わる現代アートのギャラリー</li>
          <li class="flex items-start gap-2"><span class="text-blue-500">✓</span> 壮観な中央の中庭と建築</li>
          <li class="flex items-start gap-2"><span class="text-blue-500">✓</span> 陶芸、写真、絵画、版画のワークショップ</li>
        </ul>
      </div>
    </div>

    <div class="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
      <p class="text-blue-800"><strong>来館案内：</strong>Centro de las Artes は Calzada de Guadalupe 705 にあります。入場は無料です。開館は火曜〜日曜の10:00〜18:00。建物そのものが建築の傑作であり、展示がないときでも訪れる価値があります。</p>
    </div>
  </section>

  <!-- SECTION 5: XILITLA -->
  <section id="xilitla" class="mb-16 scroll-mt-8">
    <div class="not-prose mb-8">
      <h2 class="text-4xl font-bold text-gray-900 mb-4 border-b-4 border-green-500 pb-4 inline-block">
        5. Xilitla と Las Pozas ── シュルレアリスムの庭園
      </h2>
    </div>

    <p class="text-lg text-gray-700 mb-6">Huasteca Potosina の密林の奥深く、San Luis Potosí の街から車でおよそ5時間の場所に、地球上でもっとも並外れたシュルレアリスムの創造物の一つがあります。イギリスの芸術家であり詩人でもある Edward James の庭園、<strong>Las Pozas</strong>です。</p>

    <div class="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl shadow-md mb-6">
      <h4 class="text-xl font-semibold text-gray-900 mb-3">Las Pozas について</h4>
      <p class="text-gray-700 mb-4">1949年から1984年にかけて造られた Las Pozas は、亜熱帯雨林の80エーカー（約32ヘクタール）に広がり、80を超えるシュルレアリスムのコンクリート構造物を擁しています。何も支えていない高くそびえる柱、空へと続く階段、自然界に着想を得た空想的なかたち──そうしたものが林立しています。</p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="bg-white p-4 rounded-lg text-center">
          <p class="text-2xl font-bold text-green-600">80+</p>
          <p class="text-sm text-gray-600">シュルレアリスムの構造物</p>
        </div>
        <div class="bg-white p-4 rounded-lg text-center">
          <p class="text-2xl font-bold text-green-600">1949-1984</p>
          <p class="text-sm text-gray-600">35年におよぶ建設</p>
        </div>
        <div class="bg-white p-4 rounded-lg text-center">
          <p class="text-2xl font-bold text-green-600">80エーカー</p>
          <p class="text-sm text-gray-600">亜熱帯の密林</p>
        </div>
      </div>
    </div>

    <div class="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg mb-6">
      <p class="text-green-800"><strong>Carrington とのつながり：</strong>Edward James は、Leonora Carrington の親しい友人であり、パトロンでもありました。二人はシュルレアリスム、神秘的なもの、そして自然界への情熱を分かち合っていました。Carrington の美術館を訪れたあとに Las Pozas を巡ると、San Luis Potosí を貫くシュルレアリスムの物語を、力強い弧を描くようにたどることができます。</p>
    </div>
  </section>

  <!-- SECTION 6: PLAN YOUR VISIT -->
  <section id="visit" class="mb-16 scroll-mt-8">
    <div class="not-prose mb-8">
      <h2 class="text-4xl font-bold text-gray-900 mb-4 border-b-4 border-purple-500 pb-4 inline-block">
        6. 訪問プランを立てる
      </h2>
    </div>

    <div class="overflow-x-auto mb-6">
      <table class="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
        <thead class="bg-purple-600 text-white">
          <tr>
            <th class="px-6 py-3 text-left font-semibold">場所</th>
            <th class="px-6 py-3 text-left font-semibold">開館時間</th>
            <th class="px-6 py-3 text-left font-semibold">入場料</th>
            <th class="px-6 py-3 text-left font-semibold">所要時間</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
          <tr class="hover:bg-gray-50"><td class="px-6 py-4 font-medium">Museo Leonora Carrington</td><td class="px-6 py-4">火〜日 10:00〜18:00</td><td class="px-6 py-4 text-green-600 font-bold">無料</td><td class="px-6 py-4">1〜2時間</td></tr>
          <tr class="hover:bg-gray-50"><td class="px-6 py-4 font-medium">Centro de las Artes</td><td class="px-6 py-4">火〜日 10:00〜18:00</td><td class="px-6 py-4 text-green-600 font-bold">無料</td><td class="px-6 py-4">1.5〜2時間</td></tr>
          <tr class="hover:bg-gray-50"><td class="px-6 py-4 font-medium">Las Pozas（Xilitla）</td><td class="px-6 py-4">毎日 9:00〜18:00</td><td class="px-6 py-4">約100 MXN</td><td class="px-6 py-4">2〜3時間</td></tr>
        </tbody>
      </table>
    </div>

    <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
      <p class="text-yellow-800"><strong>ヒント：</strong>美術館と Centro de las Artes は、どちらも街の中心部にあるので、1日でまわれます。Xilitla は、宿泊を伴う別の旅にとっておきましょう。車で5時間の道のりには十分それだけの価値があり、Huasteca には滝や洞窟、川など、ほかにも多くの見どころがあります。</p>
    </div>
  </section>

  <!-- CONCLUSION -->
  <section id="conclusion" class="mb-16 scroll-mt-8">
    <div class="not-prose mb-8">
      <h2 class="text-4xl font-bold text-gray-900 mb-4 border-b-4 border-amber-500 pb-4 inline-block">
        おわりに
      </h2>
    </div>

    <p class="text-lg text-gray-700 mb-6">San Luis Potosí における Leonora Carrington の遺産は、この街をメキシコでもっとも魅力的な文化の目的地の一つへと変えています。歴史地区にある親密な美術館から、劇的な Centro de las Artes、そして密林の楽園 Las Pozas まで、彼女のシュルレアリスムの精神はこの地方の隅々にまで浸透しています。</p>

    <p class="text-lg text-gray-700 mb-6">芸術を愛する方も、好奇心旺盛な旅人も、あるいはインスピレーションを求める方も、San Luis Potosí を貫くシュルレアリスムの道は、ヨーロッパのシュルレアリスムとメキシコの魔法とを結びつける、忘れがたい体験をもたらしてくれます。</p>
  </section>

  <!-- FINAL CTA -->
  <div class="not-prose mt-16 bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-300 p-8 rounded-2xl shadow-xl">
    <h3 class="text-3xl font-bold text-gray-900 mb-4">San Luis Potosí をもっと知る</h3>
    <p class="text-lg text-gray-700 mb-6">この素晴らしい街の芸術、文化、歴史について、さらに詳しく知りましょう。</p>
    <div class="flex flex-col sm:flex-row gap-4">
      <a href="/blog/san-luis-potosi-mining-history-baroque-architecture-cultural-legacy" class="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold px-8 py-4 rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all shadow-lg text-center">鉱山の歴史と建築 →</a>
      <a href="/blog" class="inline-flex items-center justify-center gap-2 bg-white border-2 border-purple-600 text-purple-700 font-semibold px-8 py-4 rounded-lg hover:bg-purple-50 transition-all text-center">すべてのブログ記事 →</a>
    </div>
  </div>

</div>`;

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
  console.log('Updated content_ja for', SLUG);

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

  const tagCount = (s) => (String(s).match(/<[^>]+>/g) || []).length;
  const enTags = tagCount(check.content);
  const jaTags = tagCount(check.content_ja);

  console.log('content_ja non-empty:', (check.content_ja || '').length > 0);
  console.log('content_ja !== content (EN):', check.content_ja !== check.content);
  console.log('content_de unchanged:', check.content_de === data.content_de);
  console.log('EN tag count:', enTags, '| JA tag count:', jaTags, '| match:', enTags === jaTags);
  console.log('content_ja length:', (check.content_ja || '').length);
  process.exit(0);
}

main();
