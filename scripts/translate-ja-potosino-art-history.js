// Fill content_ja for the Potosino art-history blog post with a native
// Japanese translation of the EN body. Idempotent: updates ONLY content_ja by
// slug and verifies by re-fetch. Does not touch content / content_de / content_es.
require('dotenv').config({ path: '.env' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const SLUG = 'potosino-art-history-artists-sculpture-painting-san-luis-potosi';

const contentJa = `<div class="prose prose-lg lg:prose-xl max-w-none">

  <!-- TABLE OF CONTENTS -->
  <div class="not-prose mb-12 bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl shadow-md border border-amber-100">
    <h3 class="text-xl font-semibold mb-4 text-gray-900 flex items-center gap-2">
      <span>📑</span> この特集で扱う内容
    </h3>
    <nav class="space-y-2">
      <a href="#introduccion" class="block text-amber-700 hover:text-amber-900 hover:underline transition-colors">→ はじめに：ポトシの芸術的アイデンティティ</a>
      <a href="#arte-prehispanico" class="block text-amber-700 hover:text-amber-900 hover:underline transition-colors">→ 1. 先スペイン期の芸術：ワステカ人と彫刻の名匠たち</a>
      <a href="#tamtoc" class="block text-amber-700 hover:text-amber-900 hover:underline transition-colors">→ 2. Tamtoc：ワステカ芸術の都</a>
      <a href="#arte-textil" class="block text-amber-700 hover:text-amber-900 hover:underline transition-colors">→ 3. 織物の芸術：Santa María del Río のレボソ</a>
      <a href="#artesanias-indigenas" class="block text-amber-700 hover:text-amber-900 hover:underline transition-colors">→ 4. 先住民の工芸：Pames、Teenek、Wixárika</a>
      <a href="#artistas-siglo-xx" class="block text-amber-700 hover:text-amber-900 hover:underline transition-colors">→ 5. 20世紀のポトシの芸術家たち</a>
      <a href="#arte-contemporaneo" class="block text-amber-700 hover:text-amber-900 hover:underline transition-colors">→ 6. 現代美術：新しい世代</a>
      <a href="#donde-ver" class="block text-amber-700 hover:text-amber-900 hover:underline transition-colors">→ 7. 今日ポトシの芸術に出会える場所</a>
      <a href="#conclusion" class="block text-amber-700 hover:text-amber-900 hover:underline transition-colors">→ おわりに</a>
    </nav>
    <p class="mt-4 text-sm text-gray-600 italic">推定読了時間：18分</p>
  </div>

  <!-- INTRODUCTION -->
  <section id="introduccion" class="mb-16 scroll-mt-8">

    <!-- EDITORIAL NOTE -->
    <div class="not-prose mb-10 bg-amber-50 border-2 border-amber-200 p-6 rounded-xl">
      <p class="text-amber-900">
        <strong>📝 注記：</strong>この記事は、先スペイン期から州のアイデンティティを形づくってきた工芸に至るまで、ポトシ芸術の<strong>伝統的な芸術と歴史的なルーツ</strong>に焦点を当てています。近日中に、San Luis Potosí の現在の<strong>現代アートシーン</strong>——ギャラリー、コレクティブ、新進のアーティスト、そして今日芸術が息づく場——を掘り下げた特集を公開する予定です。
      </p>
    </div>

    <p class="text-xl leading-relaxed text-gray-800 mb-8 font-medium">
      <strong>San Luis Potosí は、メキシコで最も豊かでありながら最も知られていない芸術的遺産のひとつを擁しています。</strong>2,500年以上前にさかのぼる壮大なワステカ彫刻から、織り上げるのに一年を要する繊細なレボソ、そして Wirikuta で花開く聖なる Wixárika の芸術まで——ポトシの芸術は、継承と抵抗、そしてなみはずれた創造性の物語です。
    </p>

    <p class="text-lg leading-relaxed text-gray-700 mb-6">
      これは表面的な観光案内ではありません。ポトシの大地に生まれ、あるいは深く根ざした三千年にわたる芸術表現への、深い没入です。ここでは、San Luis Potosí にアイデンティティを与えてきた伝統に出会えます——Tamuín で<em>ワステカの若者像</em>を彫った無名の彫刻家たちから、国内の賞を受けたレボソ織りの名匠たち、宇宙を語る Teenek の刺繍、そして Wirikuta にその最も聖なる場を見いだす Wixárika のビーズ細工の芸術まで。
    </p>

    <!-- KEY STATS -->
    <div class="not-prose grid grid-cols-2 md:grid-cols-4 gap-4 my-12">
      <div class="bg-gradient-to-br from-amber-100 to-orange-100 p-6 rounded-xl text-center">
        <p class="text-3xl font-bold text-amber-800">3,000+</p>
        <p class="text-sm text-gray-700 mt-1">芸術の歴史の年数</p>
      </div>
      <div class="bg-gradient-to-br from-amber-100 to-orange-100 p-6 rounded-xl text-center">
        <p class="text-3xl font-bold text-amber-800">503</p>
        <p class="text-sm text-gray-700 mt-1">登録アーティスト数（SIC）</p>
      </div>
      <div class="bg-gradient-to-br from-amber-100 to-orange-100 p-6 rounded-xl text-center">
        <p class="text-3xl font-bold text-amber-800">70+</p>
        <p class="text-sm text-gray-700 mt-1">Tamtoc の建造物数</p>
      </div>
      <div class="bg-gradient-to-br from-amber-100 to-orange-100 p-6 rounded-xl text-center">
        <p class="text-3xl font-bold text-amber-800">400+</p>
        <p class="text-sm text-gray-700 mt-1">レボソ伝統の年数</p>
      </div>
    </div>
  </section>

  <!-- SECTION DIVIDER -->
  <div class="not-prose my-16">
    <div class="flex items-center justify-center">
      <div class="border-t-2 border-amber-300 flex-grow"></div>
      <span class="px-6 text-amber-400 text-4xl">✦</span>
      <div class="border-t-2 border-amber-300 flex-grow"></div>
    </div>
  </div>

  <!-- SECTION 1: PRE-HISPANIC ART -->
  <section id="arte-prehispanico" class="mb-16 scroll-mt-8">
    <div class="not-prose mb-8">
      <h2 class="text-4xl font-bold text-gray-900 mb-4 border-b-4 border-amber-500 pb-4 inline-block">
        1. 先スペイン期の芸術：ワステカ人と彫刻の名匠たち
      </h2>
      <p class="text-lg text-gray-600 mt-4 italic">
        スペインによる征服以前、ポトシの地には、なみはずれた芸術的遺産を残した文明が暮らしていました
      </p>
    </div>

    <p class="text-lg leading-relaxed text-gray-700 mb-6">
      現在 San Luis Potosí として知られる地域には、スペイン人の到来以前、さまざまな先住民文化が暮らしていました。<a href="https://www.gob.mx/inpi/articulos/etnografia-del-pueblo-huasteco-de-san-luis-potosi-teenek" target="_blank" class="text-amber-700 hover:text-amber-900 underline">先住民族国立研究所（INPI）</a>によれば、最も重要な集団のなかには<strong>ワステカ人（Teenek）</strong>、<strong>チチメカ人</strong>、そして<strong>Pames（Xi'oi）</strong>がいました。
    </p>

    <p class="text-lg leading-relaxed text-gray-700 mb-6">
      これらすべての文化のなかでも、最も目を見張る彫刻の伝統を築いたのが<strong>ワステカ人</strong>でした。他のメソアメリカ文化とは異なり、ワステカ人は砂岩を彫ることに長け、細身で緻密な彫像を生み出しました。それらは今日、メキシコ先スペイン期芸術の傑作とみなされています。
    </p>

    <!-- RESEARCH CITATION -->
    <div class="not-prose my-8 bg-gray-50 border-l-4 border-gray-400 p-6 rounded-r-lg">
      <div class="flex items-start gap-3">
        <span class="text-2xl">📚</span>
        <div>
          <h4 class="font-semibold text-gray-900 mb-2">ワステカ芸術の特徴</h4>
          <p class="text-gray-700 mb-3">
            「彫刻はワステカ人の最も印象的な表現手段です。その作品はきわめて独特で、他のメソアメリカ文化とは大きく異なる特徴を持っているからです。彫像のほとんどは、石英の砂からなる堆積岩である砂岩で作られています。」
          </p>
          <p class="text-sm text-gray-600">
            — <a href="https://pueblosoriginarios.com/meso/golfo/huasteca/adolescente.html" target="_blank" class="text-amber-700 hover:underline">Pueblos Originarios</a>
          </p>
        </div>
      </div>
    </div>

    <h3 class="text-2xl font-semibold text-gray-900 mt-12 mb-6">技法と素材</h3>

    <p class="text-lg leading-relaxed text-gray-700 mb-6">
      ワステカの職人たちは、砂岩、金、銅、翡翠、オニキス、黒曜石、陶器といったさまざまな素材を用いて優れた作品を作りました。また、アマテ紙（イチジクの樹皮）を漉き、彫像に永遠にとどめられることになる、身体装飾と瘢痕文身（スカリフィケーション）の独特な伝統を発展させました。
    </p>

    <p class="text-lg leading-relaxed text-gray-700 mb-6">
      Huasteca Potosina に位置する<strong>Sierra de Tanchipa</strong>は、砂岩の天然の採石場としての役割を果たしました。この原材料は、支配者や女性祭司の彫像、そして共同体にとって重要な出来事を示すさまざまな公共の石碑を彫るために、職人たちによって用いられました。
    </p>

    <!-- IMAGE: Huastec Ceramics -->
    <figure class="not-prose my-12">
      <div class="rounded-xl overflow-hidden shadow-lg">
        <img
          src="/images/blog/potosino-art/ceramica-huasteca.jpg"
          alt="クリーム色の地に濃い茶色で特徴的な文様を描いたワステカの陶器"
          class="w-full h-auto"
        />
      </div>
      <figcaption class="mt-4 text-center text-sm text-gray-600 italic">
        ワステカの陶器は、粘土の上に黒や赤で縁取られた、単純化され抽象化された文様を特徴とします
      </figcaption>
    </figure>

    <h3 class="text-2xl font-semibold text-gray-900 mt-12 mb-6">ワステカの絵画</h3>

    <p class="text-lg leading-relaxed text-gray-700 mb-6">
      ワステカの絵画は、主に彼らが作った陶器を通じて知られています。壺や器には、粘土の上に黒や赤で縁取られた、単純化され抽象化された文様が描かれています。また、San Luis Potosí にある Taquín の壁画のように、<strong>壁画</strong>の痕跡も残されており、これはこの文化から今に伝わる数少ない絵画作例のひとつです。
    </p>
  </section>

  <!-- SECTION 2: TAMTOC -->
  <section id="tamtoc" class="mb-16 scroll-mt-8">
    <div class="not-prose mb-8">
      <h2 class="text-4xl font-bold text-gray-900 mb-4 border-b-4 border-amber-500 pb-4 inline-block">
        2. Tamtoc：ワステカ芸術の都
      </h2>
      <p class="text-lg text-gray-600 mt-4 italic">
        メキシコ北西部で最も重要な記念碑的中心地であり、最も象徴的な彫像の生まれた地
      </p>
    </div>

    <p class="text-lg leading-relaxed text-gray-700 mb-6">
      <strong>Tamtoc</strong>（Tamohi とも呼ばれます）は、<strong>San Luis Potosí 州 Tamuin</strong> 市にある考古遺跡です。<a href="https://inah.gob.mx/zonas/115-zona-arqueologica-de-tamtoc" target="_blank" class="text-amber-700 hover:text-amber-900 underline">国立人類学歴史学研究所（INAH）</a>によれば、地域的・軍事的・商業的な重要性から、Huasteca 地方の先スペイン期の都とみなされています。
    </p>

    <div class="not-prose my-8 bg-amber-50 border-2 border-amber-200 rounded-2xl overflow-hidden shadow-lg">
      <div class="bg-amber-600 px-6 py-3"><h4 class="text-lg font-bold text-white">Tamtoc に関する主要データ</h4></div>
      <div class="p-6">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="text-center"><p class="text-2xl font-bold text-amber-700">紀元前600年</p><p class="text-xs text-gray-600">最初期の居住</p></div>
          <div class="text-center"><p class="text-2xl font-bold text-amber-700">1,400+</p><p class="text-xs text-gray-600">居住が続いた年数</p></div>
          <div class="text-center"><p class="text-2xl font-bold text-amber-700">95 ha</p><p class="text-xs text-gray-600">考古地区の面積</p></div>
          <div class="text-center"><p class="text-2xl font-bold text-amber-700">3</p><p class="text-xs text-gray-600">主要なモニュメント</p></div>
        </div>
      </div>
    </div>

    <h3 class="text-2xl font-semibold text-gray-900 mt-12 mb-6">ワステカの若者像：先スペイン期芸術の傑作</h3>
    <p class="text-lg leading-relaxed text-gray-700 mb-6">
      <strong>ワステカの若者像（Huastec Adolescent）</strong>は、おそらくこの地方で最も有名な彫像です——精巧な身体の瘢痕文身と円錐形の頭飾りをまとった、等身大の砂岩の青年像です。西暦900〜1200年ごろに作られ、風の神 Ehecatl としての役割を担う神 Quetzalcoatl を表しているとされます。原作はメキシコシティの国立人類学博物館に収蔵されていますが、複製は San Luis Potosí 各地で見ることができます。
    </p>

    <h3 class="text-2xl font-semibold text-gray-900 mt-12 mb-6">Tamtoc のヴィーナス（瘢痕文身の女性）</h3>
    <p class="text-lg leading-relaxed text-gray-700 mb-6">
      2005年に発見された<strong>Tamtoc のヴィーナス</strong>（瘢痕文身の女性としても知られます）は、重さおよそ4トンの記念碑的な彫像です。全身を覆う複雑な瘢痕文身の文様をもつ女性像を表しており、豊穣と生と死の循環を象徴していると考えられています。これは21世紀のメキシコにおける最も重要な考古学的発見のひとつです。
    </p>
  </section>

  <!-- SECTION 3: REBOZOS -->
  <section id="rebozos" class="mb-16 scroll-mt-8">
    <div class="not-prose mb-8">
      <h2 class="text-4xl font-bold text-gray-900 mb-4 border-b-4 border-amber-500 pb-4 inline-block">
        3. 織物の芸術：Santa Maria del Rio のレボソ
      </h2>
    </div>

    <p class="text-lg leading-relaxed text-gray-700 mb-6">
      メキシコを象徴する織りのショールである<strong>レボソ（rebozo）</strong>は、San Luis Potosí 市の南約40kmにある町<strong>Santa Maria del Rio</strong>で、その最も洗練された姿に達します。ここで作られるレボソはメキシコ随一とされ、世代を超えて受け継がれてきた技法により、腰機（こしばた）で手織りされます。
    </p>

    <h3 class="text-2xl font-semibold text-gray-900 mt-12 mb-6">レボソ織りの名匠たち</h3>
    <p class="text-lg leading-relaxed text-gray-700 mb-6">
      一枚のレボソを仕上げるには<strong>2〜6か月</strong>を要することもあります。最上級の作例は絹糸を用い、複雑な文様に手で結ばれた独特の<strong>rapacejo</strong>（房飾り）を特徴とします。Santa Maria del Rio の名匠たちは、メキシコ国立工芸振興基金（FONART）によって、生きた文化的財産として認められてきました。
    </p>

    <h3 class="text-2xl font-semibold text-gray-900 mt-12 mb-6">七つの伝統的な意匠</h3>
    <p class="text-lg leading-relaxed text-gray-700 mb-6">
      伝統的なポトシのレボソは、七つの古典的な意匠に従います：<strong>de bolita</strong>（点の入ったもの）、<strong>de labor</strong>（凝った文様の入ったもの）、<strong>de aroma</strong>（香草で香りづけしたもの）、<strong>calado</strong>（透かし織り）、<strong>jaspeado</strong>（絞り染め）、<strong>empuntado</strong>（房付きの先端をもつもの）、そして<strong>liso</strong>（無地）です。それぞれの意匠が文化的な意味を担い、特有の織り技法を必要とします。
    </p>
  </section>

  <!-- SECTION 4: INDIGENOUS CRAFTS -->
  <section id="artesanias" class="mb-16 scroll-mt-8">
    <div class="not-prose mb-8">
      <h2 class="text-4xl font-bold text-gray-900 mb-4 border-b-4 border-amber-500 pb-4 inline-block">
        4. 先住民の工芸：Pames、Teenek、Wixarika
      </h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      <div class="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-md">
        <h4 class="text-xl font-semibold text-gray-900 mb-3">Pame（Xi'oi）の工芸</h4>
        <p class="text-gray-700">Sierra Gorda の Pame の人々は、美しい<strong>ヤシ編み</strong>を手がけ、かご、帽子、敷物、人形などを作ります。また、リュウゼツラン繊維を用いて<strong>morral（肩掛けバッグ）</strong>を作り、彼らの宇宙観を表す幾何学文様で飾ります。</p>
      </div>
      <div class="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-md">
        <h4 class="text-xl font-semibold text-gray-900 mb-3">Teenek（ワステカ）の工芸</h4>
        <p class="text-gray-700">Teenek の人々は、衣服や儀礼用の装束に花や動物のモチーフをあしらった、なみはずれた<strong>刺繍</strong>を生み出します。彼らの<strong>petob</strong>（儀礼用の頭飾り）は、繻子のリボンとビーズで飾られた、織物芸術の傑作です。</p>
      </div>
      <div class="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-md">
        <h4 class="text-xl font-semibold text-gray-900 mb-3">Wixarika（ウイチョル）の芸術</h4>
        <p class="text-gray-700">Wixarika の人々は、蜜蝋に押し込んだ小さなガラスビーズを用いて、息をのむような<strong>糸絵</strong>（nierikate）とビーズ細工を作ります。そのサイケデリックで色彩豊かな意匠は、聖なる幻視やペヨーテの儀式、そして自然界を、なみはずれた緻密さで描き出します。</p>
      </div>
    </div>
  </section>

  <!-- SECTION 5: 20TH CENTURY -->
  <section id="siglo-xx" class="mb-16 scroll-mt-8">
    <div class="not-prose mb-8">
      <h2 class="text-4xl font-bold text-gray-900 mb-4 border-b-4 border-amber-500 pb-4 inline-block">
        5. 20世紀のポトシの芸術家たち
      </h2>
    </div>

    <p class="text-lg leading-relaxed text-gray-700 mb-6">
      San Luis Potosí は、メキシコの20世紀の芸術運動に貢献した、注目すべき芸術家を幾人も輩出しました。
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <div class="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-md">
        <h4 class="text-xl font-semibold text-gray-900 mb-2">Rosa Luz Marroquin（Villasuso）</h4>
        <p class="text-gray-700">San Luis Potosí における抽象表現主義の先駆者である Rosa Luz は、メキシコシティとパリで学びました。その作品は、メキシコの壁画運動の伝統と国際的な現代美術との橋渡しをしています。彼女は San Luis Potosí 出身の最も重要な女性画家とみなされています。</p>
      </div>
      <div class="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-md">
        <h4 class="text-xl font-semibold text-gray-900 mb-2">「移行現象（Transition Phenomenon）」</h4>
        <p class="text-gray-700">20世紀半ばのポトシの芸術家たちの一世代は、メキシコ壁画運動とヨーロッパの前衛運動の双方に影響を受けながら、アカデミックな絵画と近代的な抽象との間に独特の移行を生み出しました。</p>
      </div>
    </div>

    <h3 class="text-2xl font-semibold text-gray-900 mt-12 mb-6">San Luis Potosí の壁画運動</h3>
    <p class="text-lg leading-relaxed text-gray-700 mb-6">
      壁画運動の震源地はメキシコシティでしたが、San Luis Potosí もまた独自の壁画の伝統を育みました。市内各地の公共建築、学校、官庁には、地域の歴史、先住民文化、社会的なテーマを描いた壁画が見られます。Palacio de Gobierno には、州の歴史を描いた注目すべき壁画が収められています。
    </p>
  </section>

  <!-- SECTION 6: CONTEMPORARY -->
  <section id="contemporaneo" class="mb-16 scroll-mt-8">
    <div class="not-prose mb-8">
      <h2 class="text-4xl font-bold text-gray-900 mb-4 border-b-4 border-amber-500 pb-4 inline-block">
        6. 現代美術：新しい世代
      </h2>
    </div>

    <p class="text-lg leading-relaxed text-gray-700 mb-6">
      ポトシの芸術家たちの新しい世代が、San Luis Potosí を現代美術の地図に刻みつつあります。Centro de las Artes、独立系のギャラリー、大学の美術課程を含む、市の成長する文化的インフラが、新進の才能にとって肥沃な土壌を提供しています。
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <div class="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-md">
        <h4 class="text-xl font-semibold text-gray-900 mb-3">美術教育</h4>
        <p class="text-gray-700">Centro de las Artes、San Luis Potosí 自治大学（UASLP）、そしてさまざまな私立のアカデミーが、視覚芸術、デザイン、マルチメディアの正規の教育を提供しています。これらの機関は、国内外で作品を発表する芸術家を輩出してきました。</p>
      </div>
      <div class="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-md">
        <h4 class="text-xl font-semibold text-gray-900 mb-3">ストリートアートと現代の壁画</h4>
        <p class="text-gray-700">San Luis Potosí は、ストリートアートと都市の壁画を受け入れてきました。Barrio de Santiago のような地区や Centro de las Artes 周辺には、地元および海外のアーティストによる印象的な壁画があり、伝統的なメキシコの図像と現代的なスタイルを融合させています。</p>
      </div>
    </div>
  </section>

  <!-- SECTION 7: WHERE TO SEE -->
  <section id="donde-ver" class="mb-16 scroll-mt-8">
    <div class="not-prose mb-8">
      <h2 class="text-4xl font-bold text-gray-900 mb-4 border-b-4 border-amber-500 pb-4 inline-block">
        7. 今日ポトシの芸術に出会える場所
      </h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <div class="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-md hover:border-amber-300 transition-colors">
        <h4 class="text-xl font-bold text-gray-900 mb-2">Museo Regional Potosino</h4>
        <p class="text-sm text-gray-600 mb-3">かつてのフランシスコ会修道院。Capilla de Aranzazu と先スペイン期のコレクションを収蔵</p>
        <p class="text-gray-700 text-sm"><strong>所在地：</strong>Galeana 450, Centro | <strong>入場料：</strong>85メキシコペソ</p>
      </div>
      <div class="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-md hover:border-amber-300 transition-colors">
        <h4 class="text-xl font-bold text-gray-900 mb-2">Centro de las Artes</h4>
        <p class="text-sm text-gray-600 mb-3">かつての刑務所が、ギャラリーと工房を備えた世界水準の芸術センターに生まれ変わった施設</p>
        <p class="text-gray-700 text-sm"><strong>所在地：</strong>Calzada de Guadalupe 705 | <strong>入場料：</strong>無料</p>
      </div>
      <div class="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-md hover:border-amber-300 transition-colors">
        <h4 class="text-xl font-bold text-gray-900 mb-2">Museo Federico Silva</h4>
        <p class="text-sm text-gray-600 mb-3">美しく修復された植民地時代の建物にある現代彫刻の美術館</p>
        <p class="text-gray-700 text-sm"><strong>所在地：</strong>Alvaro Obregon 80, Centro | <strong>入場料：</strong>40メキシコペソ</p>
      </div>
      <div class="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-md hover:border-amber-300 transition-colors">
        <h4 class="text-xl font-bold text-gray-900 mb-2">Museo Leonora Carrington</h4>
        <p class="text-sm text-gray-600 mb-3">伝説的な英国系メキシコ人アーティストによるシュルレアリスムの彫刻と絵画</p>
        <p class="text-gray-700 text-sm"><strong>所在地：</strong>Villerias, Centro | <strong>入場料：</strong>無料</p>
      </div>
      <div class="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-md hover:border-amber-300 transition-colors">
        <h4 class="text-xl font-bold text-gray-900 mb-2">Museo Nacional de la Mascara</h4>
        <p class="text-sm text-gray-600 mb-3">メキシコ各地から集められた1,300点以上の儀礼用の仮面</p>
        <p class="text-gray-700 text-sm"><strong>所在地：</strong>Villerias 2, Centro | <strong>入場料：</strong>30メキシコペソ</p>
      </div>
      <div class="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-md hover:border-amber-300 transition-colors">
        <h4 class="text-xl font-bold text-gray-900 mb-2">Tamtoc 考古地区</h4>
        <p class="text-sm text-gray-600 mb-3">記念碑的な彫像が残る先スペイン期のワステカの都</p>
        <p class="text-gray-700 text-sm"><strong>所在地：</strong>Tamuin, SLP（市内から約5時間） | <strong>入場料：</strong>85メキシコペソ</p>
      </div>
    </div>
  </section>

  <!-- CONCLUSION -->
  <section id="conclusion" class="mb-16 scroll-mt-8">
    <div class="not-prose mb-8">
      <h2 class="text-4xl font-bold text-gray-900 mb-4 border-b-4 border-amber-500 pb-4 inline-block">
        おわりに
      </h2>
    </div>

    <p class="text-lg leading-relaxed text-gray-700 mb-6">
      Tamtoc の記念碑的な彫像から Santa Maria del Rio の繊細な絹のレボソまで、Wixarika のサイケデリックな糸絵から Centro de las Artes の前衛的なインスタレーションまで、ポトシの芸術は<strong>途切れることのない三千年の創造性</strong>にわたって広がっています。
    </p>
    <p class="text-lg leading-relaxed text-gray-700 mb-6">
      San Luis Potosí は、単に芸術のある都市ではありません——それは芸術によって<em>つくられた</em>都市です。あらゆる教会のファサード、あらゆる織られたレボソ、あらゆる美術館のギャラリーが、先住民の伝統、植民地時代の壮麗さ、そして現代のヴィジョンが、なみはずれた何かへと収斂する地域の物語を語っています。
    </p>
  </section>

  <!-- FINAL CTA -->
  <div class="not-prose mt-16 bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-amber-300 p-8 rounded-2xl shadow-xl">
    <h3 class="text-3xl font-bold text-gray-900 mb-4">もっと知りたいですか？</h3>
    <p class="text-lg text-gray-700 mb-6">私たちのガイドと地元のおすすめを通じて、San Luis Potosí の豊かな芸術的遺産を探索してみましょう。</p>
    <div class="flex flex-col sm:flex-row gap-4">
      <a href="/blog/leonora-carrington-san-luis-potosi-museo-centro-artes-surrealism" class="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-semibold px-8 py-4 rounded-lg hover:from-amber-700 hover:to-amber-800 transition-all shadow-lg text-center">Leonora Carrington ガイド →</a>
      <a href="/blog" class="inline-flex items-center justify-center gap-2 bg-white border-2 border-amber-600 text-amber-700 font-semibold px-8 py-4 rounded-lg hover:bg-amber-50 transition-all text-center">すべてのブログ記事 →</a>
    </div>
  </div>

  <div class="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8 mt-8">
    <h3 class="text-lg font-semibold mb-3 text-blue-900">関連リソース</h3>
    <ul class="list-disc pl-6 space-y-2 text-blue-800">
      <li><a href="https://inah.gob.mx/zonas/115-zona-arqueologica-de-tamtoc" target="_blank" class="text-amber-700 hover:underline">INAH — Tamtoc 考古地区</a></li>
      <li><a href="/blog/san-luis-potosi-mining-history-baroque-architecture-cultural-legacy" class="text-amber-700 hover:underline">SLP の鉱業の歴史とバロック建築</a></li>
      <li><a href="https://www.gob.mx/fonart" target="_blank" class="text-amber-700 hover:underline">FONART — メキシコの工芸</a></li>
      <li><a href="https://www.mexicodesconocido.com.mx/santa-maria-del-rio-san-luis-potosi.html" target="_blank" class="text-amber-700 hover:underline">Santa Maria del Rio のレボソ</a></li>
      <li><a href="https://www.arteycultura.com.mx/arte-wixarika" target="_blank" class="text-amber-700 hover:underline">Wixarika の芸術 — 伝統と色彩</a></li>
    </ul>
  </div>

</div>`;

(async () => {
  const { error } = await supabase
    .from('blog_posts')
    .update({ content_ja: contentJa })
    .eq('slug', SLUG);
  if (error) { console.error('Update error:', error); process.exit(1); }

  const { data, error: fErr } = await supabase
    .from('blog_posts')
    .select('content, content_ja, content_de')
    .eq('slug', SLUG)
    .single();
  if (fErr) { console.error('Fetch error:', fErr); process.exit(1); }

  const countTags = (h) => (h.match(/<[^>]+>/g) || []).length;
  const enTags = countTags(data.content);
  const jaTags = countTags(data.content_ja);
  console.log('content_ja length:', data.content_ja.length);
  console.log('EN tag count:', enTags, '| JA tag count:', jaTags, '| match:', enTags === jaTags);
  console.log('content_ja !== content:', data.content_ja !== data.content);
  console.log('content_ja non-empty:', data.content_ja.length > 0);
})();
