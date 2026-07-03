// Idempotent JA translation for the mining-history / baroque-architecture post.
// Updates ONLY content_ja by slug. Verifies by re-fetch. Client per
// apply-factcheck-corrections-2026-07.js.
require('dotenv').config({ path: '.env' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const SLUG = 'san-luis-potosi-mining-history-baroque-architecture-cultural-legacy';

const CONTENT_JA = `<div class="prose prose-lg lg:prose-xl max-w-none">



<!-- INTRODUCTION -->
<section id="introduccion" class="mb-16 scroll-mt-8">
  <p class="text-xl leading-relaxed text-gray-800 mb-8 font-medium">
    <strong>メキシコのアルティプラノの中心に、その歴史が銀とピンク色の切石で綴られた都市がそびえています。</strong>四世紀以上前、鉱物資源の発見をきっかけに築かれた San Luis Potosí は、植民地時代を今に伝える生きた証となり、鉱山の繁栄がいかにして世界的に重要な建築・文化遺産へと姿を変えうるかを示す、またとない好例となっています。
  </p>

  <p class="text-lg leading-relaxed text-gray-700 mb-6">
    国立人類学歴史研究所（INAH）が記録した史料によれば、この都市の歴史地区には16世紀から20世紀にかけて建てられた213を超える建造物が、1.93平方キロメートルの範囲内に立ち並んでいます。2010年にユネスコによって「Camino Real de Tierra Adentro」の一部として認定されたこの建築遺産の集積は、メキシコで最も重要な植民地時代の遺産のひとつを成しています。
  </p>

  <p class="text-lg leading-relaxed text-gray-700 mb-6">
    本稿では、San Luis Potosí の魅力あふれる歴史をたどります。黄金の砂塵をまとった先住民が Cerro de San Pedro の秘密を明かした瞬間から、今日その街並みを彩る壮麗なバロック様式の教会、そして Huasteca Potosina に脈々と受け継がれる文化的伝統に至るまでをご紹介します。
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

<!-- SECTION 1: HISTORIA MINERA -->
<section id="historia-minera" class="mb-16 scroll-mt-8">
  <div class="not-prose mb-8">
    <h2 class="text-4xl font-bold text-gray-900 mb-4 border-b-4 border-blue-500 pb-4 inline-block">
      1. 起源：金銀ラッシュ（1592年）
    </h2>
    <p class="text-lg text-gray-600 mt-4 italic">
      副王領で最も重要な都市のひとつに命を吹き込んだ発見
    </p>
  </div>

  <figure class="not-prose my-12">
    <div class="rounded-xl overflow-hidden shadow-lg">
      <img
        src="https://omxporaecrqsqhzjzvnx.supabase.co/storage/v1/object/public/blog-images/teatro-paz-plaza-carmen-slp.jpg"
        alt="Teatro de la Paz and Plaza del Carmen, San Luis Potosí"
        class="w-full h-auto"
        loading="lazy"
      />
    </div>
    <figcaption class="mt-4 text-center text-sm text-gray-600 italic">
      San Luis Potosí の文化の中心地、Teatro de la Paz と Plaza del Carmen
    </figcaption>
  </figure>

  <p class="text-lg leading-relaxed text-gray-700 mb-6">
    言い伝えによれば、1592年3月、Fray Diego de Magdalena は近くの鉱床から採れた黄金の砂塵を全身にまとった先住民を見つけました。この発見はスペイン人の注目を集め、この地域を永遠に変えることになる時代の幕開けを告げました。植民地時代の公文書に保存された史料によると、Miguel Caldera 隊長は Gregorio de León、Juan de la Torre、Pedro de Anda をこの地の探索に送り出しました。
  </p>

  <div class="not-prose my-8 bg-gray-50 border-l-4 border-gray-400 p-6 rounded-r-lg">
    <div class="flex items-start gap-3">
      <span class="text-2xl">📚</span>
      <div>
        <h4 class="font-semibold text-gray-900 mb-2">歴史の一コマ</h4>
        <p class="text-gray-700 mb-3">
          「Potosí」という名は、「はかりしれない富」を意味するケチュア語「poc-to-si」に由来し、Alto Perú（現在のボリビア）にある名高い Potosí 鉱山にちなんでいます。Pedro de Anda は、自らの守護聖人にちなんでこの地を「San Pedro del Potosí」と名づけました。
        </p>
        <p class="text-sm text-gray-600">
          — 出典：San Luis Potosí 州歴史文書館
        </p>
      </div>
    </div>
  </div>

  <p class="text-lg leading-relaxed text-gray-700 mb-6">
    最初の鉱区登録は Caldera 隊長のもので、彼はこの鉱山を取得して試掘し、「La Descubridora（発見者）」と名づけました。スペイン人が発見する以前から、この一帯はすでに Guachichiles に知られており、彼ら先住民はこの丘を神聖なものとして崇めていました。
  </p>

  <!-- STATISTICAL HIGHLIGHT -->
  <div class="not-prose my-8 bg-gradient-to-br from-purple-100 to-pink-100 p-8 rounded-2xl shadow-lg text-center">
    <p class="text-6xl font-bold text-purple-700 mb-3">15%</p>
    <p class="text-xl font-semibold text-gray-800 mb-2">ヌエバ・エスパーニャの銀のうち</p>
    <p class="text-sm text-gray-600">植民地時代の史料によると、1700年頃に San Luis Potosí が産出したおおよその割合</p>
  </div>
</section>

<!-- SECTION 2: CERRO DE SAN PEDRO -->
<section id="cerro-san-pedro" class="mb-16 scroll-mt-8">
  <div class="not-prose mb-8">
    <h2 class="text-4xl font-bold text-gray-900 mb-4 border-b-4 border-green-500 pb-4 inline-block">
      2. Cerro de San Pedro：すべてが始まった場所
    </h2>
  </div>

  <p class="text-lg leading-relaxed text-gray-800 mb-8 bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
    <strong>重要な注記：</strong>現在の州都からわずか20キロメートルの場所にある Cerro de San Pedro は、San Luis Potosí に命を吹き込んだ鉱山ブームの震源地でした。
  </p>

  <figure class="not-prose my-12">
    <div class="rounded-xl overflow-hidden shadow-lg">
      <img
        src="https://omxporaecrqsqhzjzvnx.supabase.co/storage/v1/object/public/blog-images/villa-imperial-potosi.jpg"
        alt="Alley with colonial architecture in San Luis Potosí"
        class="w-full h-auto"
        loading="lazy"
      />
    </div>
    <figcaption class="mt-4 text-center text-sm text-gray-600 italic">
      Potosí 地方ならではの切石造りの建築
    </figcaption>
  </figure>

  <h3 class="text-2xl font-semibold text-gray-900 mb-4">水の問題</h3>

  <p class="text-lg leading-relaxed text-gray-700 mb-6">
    史料によれば、丘とその周辺では金や銀の鉱石が豊富に見つかったものの、鉱物を精錬するのに十分な水がありませんでした。最も近い水源は西方にあり、その一帯はなお様々な Chichimeca の諸部族が支配する地域でした。
  </p>

  <p class="text-lg leading-relaxed text-gray-700 mb-6">
    この水不足は、決定的な帰結をもたらしました。精錬用のアシエンダ、行政の建物、そしてほとんどの鉱夫の住まいは、丘の西側にある谷に置かれたのです。こうして州都が誕生しました。鉱山の拠点としてではなく、採掘された富を精錬し管理する中心地としてです。
  </p>

  <!-- CASE STUDY BLOCK -->
  <div class="not-prose my-12 bg-green-50 border-2 border-green-200 rounded-2xl overflow-hidden shadow-lg">
    <div class="bg-green-500 px-8 py-4">
      <h3 class="text-2xl font-bold text-white flex items-center gap-3">
        <span>📖</span> Cerro de San Pedro の興隆と衰退
      </h3>
    </div>
    <div class="p-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div class="text-center">
          <p class="text-3xl font-bold text-green-700">1592</p>
          <p class="text-sm text-gray-600 mt-1">鉱山の発見</p>
        </div>
        <div class="text-center">
          <p class="text-3xl font-bold text-green-700">1621</p>
          <p class="text-sm text-gray-600 mt-1">SLP：副王領第3の都市に</p>
        </div>
        <div class="text-center">
          <p class="text-3xl font-bold text-green-700">1630</p>
          <p class="text-sm text-gray-600 mt-1">最初の大規模な放棄</p>
        </div>
      </div>
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

<!-- SECTION 3: ARQUITECTURA BARROCA -->
<section id="arquitectura-barroca" class="mb-16 scroll-mt-8">
  <div class="not-prose mb-8">
    <h2 class="text-4xl font-bold text-gray-900 mb-4 border-b-4 border-yellow-500 pb-4 inline-block">
      3. バロック建築：物語を語る聖堂の数々
    </h2>
  </div>

  <p class="text-lg leading-relaxed text-gray-700 mb-6">
    鉱業が生み出した繁栄は、並外れた建築活動へと結実しました。INAH のカタログによれば、16世紀頃にカトリックの宣教師団が、今日ではメキシコ建築遺産の宝といえる聖堂の建設に着手しました。
  </p>

  <figure class="not-prose my-12">
    <div class="rounded-xl overflow-hidden shadow-lg">
      <img
        src="https://omxporaecrqsqhzjzvnx.supabase.co/storage/v1/object/public/blog-images/catedral-slp-barroco.jpeg"
        alt="Colonial temple facade with baroque architecture"
        class="w-full h-auto"
        loading="lazy"
      />
    </div>
    <figcaption class="mt-4 text-center text-sm text-gray-600 italic">
      San Luis Potosí の聖堂は、ヌエバ・エスパーニャのバロックの妙技を今に伝えています
    </figcaption>
  </figure>

  <h3 class="text-2xl font-semibold text-gray-900 mb-4">メトロポリタン大聖堂</h3>

  <p class="text-lg leading-relaxed text-gray-700 mb-6">
    San Luis Potosí のメトロポリタン大聖堂は、Potosí の州都を象徴する最も代表的な建造物とされています。INAH の建築記録によれば、これは市内で最初期のバロック様式の建造物のひとつで、1670年から1730年にかけて建てられました。
  </p>

  <!-- IMAGE WITH CALLOUT BOX -->
  <div class="not-prose my-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    <div class="rounded-xl overflow-hidden shadow-lg">
      <img
        src="https://omxporaecrqsqhzjzvnx.supabase.co/storage/v1/object/public/blog-images/templo-del-carmen-slp.jpg"
        alt="Carmen Temple, San Luis Potosí"
        class="w-full h-auto"
        loading="lazy"
      />
    </div>
    <div class="bg-yellow-50 p-8 rounded-xl border-l-4 border-yellow-500">
      <h4 class="text-2xl font-semibold mb-4 text-yellow-900">Templo del Carmen</h4>
      <p class="text-lg text-yellow-800 mb-4">
        INAH が引用する植民地建築の専門家によれば、Templo del Carmen は市内で最も重要なバロック建築と評価されています。
      </p>
      <ul class="list-disc pl-6 text-yellow-800 space-y-2">
        <li>チュリゲラ様式のバロック</li>
        <li>18世紀半ばに建造</li>
        <li>象徴的な Plaza del Carmen に位置する</li>
      </ul>
    </div>
  </div>

  <!-- DATA COMPARISON TABLE -->
  <div class="not-prose overflow-x-auto my-12">
    <table class="min-w-full bg-white border-2 border-gray-200 rounded-xl overflow-hidden shadow-lg">
      <thead class="bg-gradient-to-r from-blue-600 to-blue-700">
        <tr>
          <th class="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">聖堂</th>
          <th class="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">様式</th>
          <th class="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">時代</th>
          <th class="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">特徴</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-200">
        <tr class="hover:bg-gray-50 transition-colors">
          <td class="px-6 py-4 font-medium text-gray-900">Santo Domingo</td>
          <td class="px-6 py-4 text-gray-700">チュリゲラ様式のバロック</td>
          <td class="px-6 py-4 text-gray-700">17〜18世紀</td>
          <td class="px-6 py-4 text-gray-700">市内で最も装飾豊か</td>
        </tr>
        <tr class="hover:bg-gray-50 transition-colors">
          <td class="px-6 py-4 font-medium text-gray-900">San Francisco</td>
          <td class="px-6 py-4 text-gray-700">バロック</td>
          <td class="px-6 py-4 text-gray-700">16世紀</td>
          <td class="px-6 py-4 text-gray-700">かつてのフランシスコ会修道院</td>
        </tr>
        <tr class="hover:bg-gray-50 transition-colors">
          <td class="px-6 py-4 font-medium text-gray-900">Loreto Chapel</td>
          <td class="px-6 py-4 text-gray-700">ソロモン式バロック</td>
          <td class="px-6 py-4 text-gray-700">17世紀後半</td>
          </tr>
          <tr class="hover:bg-gray-50 transition-colors">
            <td class="px-6 py-4 font-medium text-gray-900">Templo del Carmen</td>
            <td class="px-6 py-4 text-gray-700">チュリゲラ様式のバロック</td>
            <td class="px-6 py-4 text-gray-700">1749〜1764年</td>
          </tr>
          <tr class="hover:bg-gray-50 transition-colors">
            <td class="px-6 py-4 font-medium text-gray-900">Capilla de Aranzazu</td>
            <td class="px-6 py-4 text-gray-700">チュリゲラ様式（祭壇衝立）</td>
            <td class="px-6 py-4 text-gray-700">1749年</td>
          </tr>
          <tr class="hover:bg-gray-50 transition-colors">
            <td class="px-6 py-4 font-medium text-gray-900">Templo de San Francisco</td>
            <td class="px-6 py-4 text-gray-700">簡素なバロック／新古典主義</td>
            <td class="px-6 py-4 text-gray-700">17〜18世紀</td>
          </tr>
          <tr class="hover:bg-gray-50 transition-colors">
            <td class="px-6 py-4 font-medium text-gray-900">Templo de San Agustin</td>
            <td class="px-6 py-4 text-gray-700">新古典主義の塔をもつバロック</td>
            <td class="px-6 py-4 text-gray-700">17世紀</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg mt-6">
      <p class="text-amber-800"><strong>ワンポイント：</strong>Museo Regional Potosino（かつてのフランシスコ会修道院）の中にある Capilla de Aranzazu には、メキシコ全土でも屈指の美しさを誇るチュリゲラ様式の祭壇衝立が収められています。ぜひお見逃しなく。</p>
    </div>
  </section>

  <!-- MINING HISTORY -->
  <section id="mining" class="mb-16 scroll-mt-8">
    <div class="not-prose mb-8">
      <h2 class="text-4xl font-bold text-gray-900 mb-4 border-b-4 border-amber-500 pb-4 inline-block">
        鉱業の歴史：ひとつの都市を築いた銀
      </h2>
    </div>

    <p class="text-lg text-gray-700 mb-6">San Luis Potosí の歴史は、銀の採掘と切り離せません。この都市は1592年、現在の市街地から東へわずか20キロメートルの <strong>Cerro de San Pedro</strong> で豊かな金銀の鉱床が発見された後に築かれました。</p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <div class="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-md">
        <h4 class="text-xl font-semibold text-gray-900 mb-3">Cerro de San Pedro</h4>
        <p class="text-gray-700 mb-3">すべてが始まった、最初の鉱山集落です。スペイン人の鉱夫たちは、同じような富を期待して、ボリビアにある伝説的な Potosí 銀山にちなんでこの地域を名づけました。そしてその期待は裏切られませんでした。</p>
        <ul class="space-y-1 text-sm text-gray-600">
          <li><strong>創設：</strong>1592年</li>
          <li><strong>最盛期：</strong>17〜18世紀</li>
          <li><strong>現在：</strong>ゴーストタウン同然だが訪問可能</li>
        </ul>
      </div>
      <div class="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-md">
        <h4 class="text-xl font-semibold text-gray-900 mb-3">Real de Catorce</h4>
        <p class="text-gray-700 mb-3">かつてメキシコで最も豊かな銀鉱山町のひとつだった Real de Catorce は、鉱山が枯渇するまでに数百万銀ペソを産出しました。今日では <strong>Pueblo Mágico</strong> であり、全長2.3キロメートルのトンネルを抜けてたどり着く、どこか胸に迫る旅先となっています。</p>
        <ul class="space-y-1 text-sm text-gray-600">
          <li><strong>最盛期：</strong>18世紀末〜19世紀初頭</li>
          <li><strong>人口のピーク：</strong>約40,000人</li>
          <li><strong>現在：</strong>Pueblo Mágico、住民約1,500人</li>
        </ul>
      </div>
    </div>

    <div class="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-xl shadow-md mb-6">
      <h4 class="text-xl font-semibold text-gray-900 mb-3">鉱業はいかにして都市を形づくったか</h4>
      <p class="text-gray-700">銀の採掘がもたらした富は、今日の San Luis Potosí の歴史地区を特徴づける壮麗な教会、広場、邸宅の建設を支えました。この都市はヌエバ・エスパーニャで最も重要な都市のひとつとなり、北中部地域全体の政治・経済の拠点として機能しました。</p>
    </div>
  </section>

  <!-- CULTURAL LEGACY -->
  <section id="legacy" class="mb-16 scroll-mt-8">
    <div class="not-prose mb-8">
      <h2 class="text-4xl font-bold text-gray-900 mb-4 border-b-4 border-purple-500 pb-4 inline-block">
        都市を彩る文化的遺産
      </h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <div class="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-md">
        <div class="text-3xl mb-3">🎭</div>
        <h4 class="text-xl font-semibold text-gray-900 mb-2">Procesión del Silencio</h4>
        <p class="text-gray-700">聖金曜日ごとに、頭巾をかぶった何千もの苦行者が、しじまの中を街じゅう練り歩きます。何世紀にもわたるこの伝統は、メキシコで最も心を打つ宗教的・文化的行事のひとつです。</p>
      </div>
      <div class="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-md">
        <div class="text-3xl mb-3">🏛️</div>
        <h4 class="text-xl font-semibold text-gray-900 mb-2">数々の博物館</h4>
        <p class="text-gray-700">この都市には、Museo Nacional de la Máscara（仮面博物館）、Museo Federico Silva（現代彫刻）、Museo Regional Potosino、そして Leonora Carrington 美術館などが集まっています。</p>
      </div>
      <div class="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-md">
        <div class="text-3xl mb-3">🎵</div>
        <h4 class="text-xl font-semibold text-gray-900 mb-2">Huapango の音楽</h4>
        <p class="text-gray-700">San Luis Potosí の Huasteca 地方は、son huasteco（huapango）の発祥の地です。これは裏声の歌唱、ヴァイオリン、そして jarana ギターを特徴とする、生き生きとした音楽の伝統です。</p>
      </div>
      <div class="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-md">
        <div class="text-3xl mb-3">🍽️</div>
        <h4 class="text-xl font-semibold text-gray-900 mb-2">食文化</h4>
        <p class="text-gray-700">Enchiladas potosinas（元祖・赤いエンチラーダ）、queso de tuna（ウチワサボテンの実のチーズ）、asado de boda（婚礼の煮込み）、そして colonche（サボテンを発酵させた酒）が、この土地の名物です。</p>
      </div>
    </div>
  </section>

  <!-- PRACTICAL INFO -->
  <section id="visit" class="mb-16 scroll-mt-8">
    <div class="not-prose mb-8">
      <h2 class="text-4xl font-bold text-gray-900 mb-4 border-b-4 border-blue-500 pb-4 inline-block">
        訪ね方
      </h2>
    </div>

    <div class="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg mb-4">
      <p class="text-blue-800"><strong>Centro Histórico の徒歩めぐり：</strong>主要なバロック様式の教会と歴史ある広場は、いずれも1日で歩いて回れます。Plaza de Armas を出発し、大聖堂へ、続いて Templo del Carmen へと歩き、Jardín de San Francisco で締めくくりましょう。</p>
    </div>
    <div class="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg mb-4">
      <p class="text-green-800"><strong>ガイドツアー：</strong>San Luis Rey のトロリーバスが、歴史地区を解説付きで巡ります。毎日運行し、Plaza de Armas から出発します。料金：ひとりあたり約150 MXN。</p>
    </div>
    <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
      <p class="text-yellow-800"><strong>訪れるのに最適な時期：</strong>Procesión del Silencio（聖金曜日）と Feria Nacional Potosina（8月）は、この都市の文化遺産を味わうのに最も見応えのある機会です。</p>
    </div>
  </section>

  <!-- FINAL CTA -->
  <div class="not-prose mt-16 bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-amber-300 p-8 rounded-2xl shadow-xl">
    <h3 class="text-3xl font-bold text-gray-900 mb-4">San Luis Potosí をもっと知る</h3>
    <p class="text-lg text-gray-700 mb-6">鉱山町からバロックの傑作まで、San Luis Potosí の歴史があなたに探検されるのを待っています。</p>
    <div class="flex flex-col sm:flex-row gap-4">
      <a href="/contact" class="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-semibold px-8 py-4 rounded-lg hover:from-amber-700 hover:to-amber-800 transition-all shadow-lg text-center">旅の計画を立てる →</a>
      <a href="/blog" class="inline-flex items-center justify-center gap-2 bg-white border-2 border-amber-600 text-amber-700 font-semibold px-8 py-4 rounded-lg hover:bg-amber-50 transition-all text-center">その他のガイド →</a>
    </div>
  </div>

</div>`;

(async () => {
  const { error } = await supabase
    .from('blog_posts')
    .update({ content_ja: CONTENT_JA })
    .eq('slug', SLUG);
  if (error) { console.error('Update error:', error); process.exit(1); }

  const { data, error: fErr } = await supabase
    .from('blog_posts')
    .select('content, content_ja, content_de')
    .eq('slug', SLUG)
    .single();
  if (fErr) { console.error('Fetch error:', fErr); process.exit(1); }

  const tagCount = (s) => (s.match(/<[^>]+>/g) || []).length;
  console.log('content_ja length:', data.content_ja.length);
  console.log('differs from content:', data.content_ja !== data.content);
  console.log('EN tag count:', tagCount(data.content));
  console.log('JA tag count:', tagCount(data.content_ja));
  console.log('DE length (unchanged ref):', data.content_de.length);
  console.log('JA has ASCII-letter runs >=4 (leftover English?):',
    (data.content_ja.replace(/<[^>]*>/g, ' ').match(/[A-Za-z]{4,}/g) || []).slice(0, 40));
})();
