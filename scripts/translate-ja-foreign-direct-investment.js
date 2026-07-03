// Native Japanese translation for the blog post
// `foreign-direct-investment-slp-job-market-foreign-professionals`.
// Idempotent: updates ONLY content_ja by slug. Preserves every HTML tag,
// attribute, class, id, href, and image src exactly; translates text nodes only.
// Proper nouns (San Luis Potosí, SLP, BMW, SEDECO, INM, etc.) kept in Latin.
require('dotenv').config({ path: '.env' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const SLUG = 'foreign-direct-investment-slp-job-market-foreign-professionals';

const CONTENT_JA = `<div class="prose prose-lg lg:prose-xl max-w-none">

<!-- HERO SECTION -->
<div class="not-prose mb-12">
  <div class="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl mb-8">
    <img
      src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&h=900&fit=crop&q=80"
      alt="San Luis Potosí における外国投資を象徴する近代的な工業施設"
      class="w-full h-full object-cover"
      loading="eager"
    />
    <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
      <div class="p-8">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">San Luis Potosí への外国直接投資</h1>
        <p class="text-xl text-white/90">外国人専門職の雇用機会に関する詳細分析</p>
      </div>
    </div>
  </div>

  <div class="flex items-center justify-between text-sm text-gray-600 mb-8">
    <div class="flex items-center gap-4">
      <span>執筆：<strong class="text-gray-900">San Luis Way</strong></span>
      <span>•</span>
      <span>2025年12月3日</span>
      <span>•</span>
      <span>読了時間 18分</span>
    </div>
    <div class="flex gap-2">
      <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">海外駐在生活</span>
      <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">キャリア</span>
    </div>
  </div>
</div>

<!-- TABLE OF CONTENTS -->
<div class="not-prose mb-12 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl shadow-md border border-blue-100">
  <h3 class="text-xl font-semibold mb-4 text-gray-900 flex items-center gap-2">
    <span>📑</span> この詳細分析の内容
  </h3>
  <nav class="space-y-2">
    <a href="#fdi-overview" class="block text-blue-600 hover:text-blue-800 hover:underline transition-colors">→ 1. FDIの概要：なぜ SLP は活況なのか</a>
    <a href="#key-industries" class="block text-blue-600 hover:text-blue-800 hover:underline transition-colors">→ 2. 主要産業と主な雇用主</a>
    <a href="#nearshoring" class="block text-blue-600 hover:text-blue-800 hover:underline transition-colors">→ 3. ニアショアリングの効果</a>
    <a href="#job-opportunities" class="block text-blue-600 hover:text-blue-800 hover:underline transition-colors">→ 4. 外国人専門職の雇用機会</a>
    <a href="#visa-requirements" class="block text-blue-600 hover:text-blue-800 hover:underline transition-colors">→ 5. 就労ビザの要件と手続き</a>
    <a href="#salaries" class="block text-blue-600 hover:text-blue-800 hover:underline transition-colors">→ 6. 給与の目安</a>
    <a href="#cost-of-living" class="block text-blue-600 hover:text-blue-800 hover:underline transition-colors">→ 7. 生活費の比較</a>
    <a href="#practical-tips" class="block text-blue-600 hover:text-blue-800 hover:underline transition-colors">→ 8. 求職者への実践的アドバイス</a>
  </nav>
  <p class="mt-4 text-sm text-gray-600 italic">推定読了時間：18分</p>
</div>

<!-- OPENING HOOK -->
<p class="text-xl leading-relaxed text-gray-800 mb-8 font-medium">
  <strong>San Luis Potosí は、かつてない産業ブームを迎えています。</strong>2025年の外国直接投資は30億米ドルを超えると予測され、ドイツ、日本、中国、米国の企業が進出するなか、同州は国際的な人材を引き寄せる磁石となっています。メキシコへのキャリア転身を検討する外国人専門職にとって、SLP は多国籍企業という雇用主、競争力のある給与、そして主要都市より低い生活費という、他にはない組み合わせを提供します。しかも、豊かな文化遺産を有する中規模のメキシコ都市としての魅力はそのまま保たれています。
</p>

<p class="text-lg leading-relaxed text-gray-700 mb-6">
  本ガイドでは、現在の投資状況を概観し、積極的に採用を行っている産業や企業を明らかにし、ビザ要件を段階的に解説するとともに、メキシコで最もダイナミックな産業拠点の一つでキャリアを築こうとする外国人専門職に向けた実践的な知見を提供します。
</p>

<!-- SECTION 1: FDI OVERVIEW -->
<section id="fdi-overview" class="mb-16 scroll-mt-8">
  <div class="not-prose mb-8">
    <h2 class="text-4xl font-bold text-gray-900 mb-4 border-b-4 border-blue-500 pb-4 inline-block">
      1. FDIの概要：なぜ San Luis Potosí は活況なのか
    </h2>
  </div>

  <p class="text-lg leading-relaxed text-gray-700 mb-6">
    メキシコの経済開発省（SEDECO）のデータによると、San Luis Potosí は外国投資の誘致において国内有数の地位を確立しています。同州は2024年に外国直接投資として<strong>3,649.4百万米ドル</strong>を獲得し、FDI誘致で全国トップ10州の一つに入りました。
  </p>

  <!-- STATISTICAL HIGHLIGHT -->
  <div class="not-prose my-8 bg-gradient-to-br from-purple-100 to-pink-100 p-8 rounded-2xl shadow-lg text-center">
    <p class="text-6xl font-bold text-purple-700 mb-3">$3B+</p>
    <p class="text-xl font-semibold text-gray-800 mb-2">2025年のFDI予測額</p>
    <p class="text-sm text-gray-600">出典：SLP州政府、2025年9月</p>
  </div>

  <p class="text-lg leading-relaxed text-gray-700 mb-6">
    投資の動向は目覚ましい勢いを示しています。2024年第4四半期から2025年第1四半期にかけて、同州は894.5百万米ドルの新規投資を積み増しました。Ricardo Gallardo Cardona 知事は、Volex による20億ドルの投資表明などにより、San Luis Potosí はすでに2,642百万米ドルを積み上げ、2024年の総額を上回ったと発表しました。
  </p>

  <!-- KEY INVESTMENT SOURCES -->
  <div class="not-prose my-12 grid grid-cols-1 md:grid-cols-3 gap-6">
    <div class="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-500 text-center">
      <p class="text-4xl mb-2">🇩🇪</p>
      <p class="text-3xl font-bold text-gray-900">$572M</p>
      <p class="text-gray-600 mt-2">ドイツ</p>
      <p class="text-sm text-gray-500">最大の投資国（2024年1〜6月）</p>
    </div>
    <div class="bg-white p-6 rounded-xl shadow-lg border-t-4 border-red-500 text-center">
      <p class="text-4xl mb-2">🇨🇦</p>
      <p class="text-3xl font-bold text-gray-900">$136M</p>
      <p class="text-gray-600 mt-2">カナダ</p>
      <p class="text-sm text-gray-500">第2位の投資元</p>
    </div>
    <div class="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-800 text-center">
      <p class="text-4xl mb-2">🇺🇸</p>
      <p class="text-3xl font-bold text-gray-900">$113M</p>
      <p class="text-gray-600 mt-2">米国</p>
      <p class="text-sm text-gray-500">第3位の投資元</p>
    </div>
  </div>

  <p class="text-lg leading-relaxed text-gray-700 mb-6">
    最近の発表は、流入する投資の多様性を浮き彫りにしています。5社の新たな国際企業――<strong>KBY México、Lubricantes Fuchs、Unitekno、Kingfa Sci & Tech、San Luis Dasung</strong>――が操業を開始し、2,003件の直接雇用を創出するとともに、建設・商業・サービス各分野に波及効果をもたらしています。
  </p>

  <!-- RESEARCH CITATION -->
  <div class="not-prose my-8 bg-gray-50 border-l-4 border-gray-400 p-6 rounded-r-lg">
    <div class="flex items-start gap-3">
      <span class="text-2xl">📚</span>
      <div>
        <h4 class="font-semibold text-gray-900 mb-2">投資に関する知見</h4>
        <p class="text-gray-700 mb-3">
          「少なくとも10社が2025年中に San Luis Potosí での操業開始に関心を示しており、近年では約2億ドルの投資が確定しています。」
        </p>
        <p class="text-sm text-gray-600">
          ― 経済開発省、<em>San Luis Potosí 州</em>（2025年）
        </p>
      </div>
    </div>
  </div>
</section>

<!-- SECTION 2: KEY INDUSTRIES -->
<section id="key-industries" class="mb-16 scroll-mt-8">
  <div class="not-prose mb-8">
    <h2 class="text-4xl font-bold text-gray-900 mb-4 border-b-4 border-green-500 pb-4 inline-block">
      2. 主要産業と主な雇用主
    </h2>
  </div>

  <p class="text-lg leading-relaxed text-gray-700 mb-6">
    同州の産業インフラは<strong>19の工業団地</strong>に支えられており、その多くは州都エリアに位置し、戦略的な立地、効率的な物流サービス、そして国際的な投資家の期待に応える基準を備えています。工業地区利用者連合（UUZI）によると、Villa de Reyes の隣接地域を含む3,800ヘクタールに約520社が操業し、約12万件の直接雇用を生み出しています。
  </p>

  <!-- INDUSTRY BREAKDOWN -->
  <div class="not-prose my-12">
    <h4 class="text-2xl font-semibold mb-6 text-gray-900">San Luis Potosí の主要産業</h4>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
        <h5 class="text-xl font-semibold text-blue-900 mb-3">🚗 自動車・自動車部品</h5>
        <p class="text-gray-700 mb-4">主要な完成車メーカー（OEM）と230社を超えるサプライヤー企業を擁する、州を代表する産業です。</p>
        <p class="text-sm text-gray-600"><strong>主要企業：</strong>BMW、General Motors、Bosch、Continental、Lear Corporation、Magna</p>
      </div>

      <div class="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
        <h5 class="text-xl font-semibold text-green-900 mb-3">🏭 製造業</h5>
        <p class="text-gray-700 mb-4">家電、電子機器、産業機器などを含む先進的な製造業。</p>
        <p class="text-sm text-gray-600"><strong>主要企業：</strong>Mabe、Nestlé、Goodyear、ABB</p>
      </div>

      <div class="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-500">
        <h5 class="text-xl font-semibold text-purple-900 mb-3">⚡ エネルギー・重工業</h5>
        <p class="text-gray-700 mb-4">持続可能なエネルギーと重工業への投資により成長している分野。</p>
        <p class="text-sm text-gray-600"><strong>主要企業：</strong>Grupo Alfa、Franke（スイス）</p>
      </div>

      <div class="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-500">
        <h5 class="text-xl font-semibold text-orange-900 mb-3">📦 物流・流通</h5>
        <p class="text-gray-700 mb-4">中央部という立地とインフラを活かした、流通の戦略的拠点。</p>
        <p class="text-sm text-gray-600"><strong>最近の投資：</strong>Automann USA（5,000万ドルの物流センター）</p>
      </div>
    </div>
  </div>

  <!-- BMW FEATURE -->
  <figure class="not-prose my-12">
    <div class="rounded-xl overflow-hidden shadow-lg">
      <img
        src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=1200&h=600&fit=crop&q=80"
        alt="SLP における BMW をはじめとするメーカーを象徴する近代的な自動車製造施設"
        class="w-full h-auto"
        loading="lazy"
      />
    </div>
    <figcaption class="mt-4 text-center text-sm text-gray-600 italic">
      BMW Group の San Luis Potosí 工場は2,500人を超える従業員を擁し、最先端のデジタル化技術を導入しています
    </figcaption>
  </figure>

  <p class="text-lg leading-relaxed text-gray-700 mb-6">
    <strong>BMW Group</strong> は、国際的な人材を最も多く雇用する企業の一つとして特筆に値します。2019年に操業を開始した San Luis Potosí 工場は、革新的なデジタル化技術と強固なインフラを備えています。同工場の社長兼CEOである Hermann Bohrer 氏によれば、同社には他州や米国からの応募者も含め、候補者から圧倒的な関心が寄せられているといいます。
  </p>

  <!-- CASE STUDY: BMW -->
  <div class="not-prose my-12 bg-green-50 border-2 border-green-200 rounded-2xl overflow-hidden shadow-lg">
    <div class="bg-green-500 px-8 py-4">
      <h3 class="text-2xl font-bold text-white flex items-center gap-3">
        <span>📖</span> 企業プロフィール：BMW Group San Luis Potosí
      </h3>
    </div>

    <div class="p-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div class="text-center">
          <p class="text-3xl font-bold text-green-700">2,500+</p>
          <p class="text-sm text-gray-600 mt-1">直接雇用の従業員数</p>
        </div>
        <div class="text-center">
          <p class="text-3xl font-bold text-green-700">4,500</p>
          <p class="text-sm text-gray-600 mt-1">応募者数（直近の募集）</p>
        </div>
        <div class="text-center">
          <p class="text-3xl font-bold text-green-700">3+</p>
          <p class="text-sm text-gray-600 mt-1">必要な実務経験（年数）</p>
        </div>
      </div>

      <div class="prose prose-green">
        <p class="text-gray-700 mb-4">
          <strong>採用の重点：</strong>機械エンジニア、ソフトウェアエンジニア、電気エンジニア、品質エンジニア、ITスペシャリスト、物流コーディネーター。
        </p>
        <p class="text-gray-700 mb-4">
          <strong>要件：</strong>工学系の学士号（産業工学、メカトロニクス、または関連分野）、3年以上の実務経験、ビジネスレベルの流暢な英語（会話・文章）。
        </p>
        <p class="text-gray-700">
          <strong>最近の拡張：</strong>BMW は電気自動車の生産能力を拡大しており、EV分野の経験を持つ専門職に新たな機会が生まれています。
        </p>
      </div>
    </div>
  </div>
</section>

<!-- SECTION 3: NEARSHORING -->
<section id="nearshoring" class="mb-16 scroll-mt-8">
  <div class="not-prose mb-8">
    <h2 class="text-4xl font-bold text-gray-900 mb-4 border-b-4 border-orange-500 pb-4 inline-block">
      3. ニアショアリングの効果
    </h2>
  </div>

  <p class="text-lg leading-relaxed text-gray-700 mb-6">
    生産拠点を最終市場の近くへ移す「ニアショアリング」という世界的な潮流により、San Luis Potosí はサプライチェーンを再構築する企業にとって有力な進出先となっています。同州は、地理的・文化的・経済的な利点に加え、効率化された行政手続きによって、好ましい事業環境を提供しています。
  </p>

  <div class="not-prose my-8 bg-gradient-to-br from-orange-100 to-yellow-100 p-8 rounded-2xl shadow-lg text-center">
    <p class="text-5xl font-bold text-orange-700 mb-3">39%</p>
    <p class="text-xl font-semibold text-gray-800 mb-2">ニアショアリング需要のうち自動車分野が占める割合</p>
    <p class="text-sm text-gray-600">自動車産業は依然としてメキシコにおけるニアショアリングの主要な牽引役です（2024年）</p>
  </div>

  <p class="text-lg leading-relaxed text-gray-700 mb-6">
    数字が雄弁に物語っています。Coahuila と San Luis Potosí は合わせて、2024年上半期の投資発表総額の8%（2,474十億ドル）を占め、15,124件の新規雇用――全国で見込まれる62,940件の24%――により、雇用創出の見込みでトップに立ちました。
  </p>

  <!-- EXPERT QUOTE -->
  <blockquote class="not-prose my-12 bg-gradient-to-r from-blue-50 to-transparent border-l-4 border-blue-500 p-8 rounded-r-xl">
    <p class="text-2xl font-serif italic text-gray-800 mb-4">
      「San Luis Potosí は、活かすべき恵まれた立地条件を国内で有しています。Nuevo León、Jalisco、そして Bajío 地域との物流面での結びつきは、同州をニアショアリング事業にとって理想的なプラットフォームにしています。」
    </p>
    <footer class="flex items-center gap-4">
      <div>
        <cite class="not-italic font-semibold text-gray-900">業界アナリスト</cite>
        <p class="text-sm text-gray-600">Mexico Industry Report、2024年</p>
      </div>
    </footer>
  </blockquote>

  <p class="text-lg leading-relaxed text-gray-700 mb-6">
    注目すべきニアショアリング投資には、3,000件の雇用を生み出す Shanghai Unison による4億ドルの投資表明や、自動車分野向けの専門的な製造施設を建設する Himile（8億ペソ）および Asiaway Automotive Components（7億5,000万ペソ）といった中国からの投資が含まれます。
  </p>

  <!-- INDUSTRIAL SPACE STATS -->
  <div class="not-prose my-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    <div class="rounded-xl overflow-hidden shadow-lg">
      <img
        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&h=500&fit=crop&q=80"
        alt="SLP におけるニアショアリングの機会を象徴する近代的な工業団地"
        class="w-full h-auto"
        loading="lazy"
      />
    </div>

    <div class="bg-blue-50 p-8 rounded-xl border-l-4 border-blue-500">
      <h4 class="text-2xl font-semibold mb-4 text-blue-900">工業用地の吸収状況</h4>
      <ul class="list-disc pl-6 text-blue-800 space-y-2">
        <li>SLP は工業用地の吸収量の<strong>8%</strong>を占めます</li>
        <li>市場に参入する新規企業の<strong>61%</strong></li>
        <li>既存企業の拡張の<strong>39%</strong></li>
        <li>2024年に全国で200万m²超が吸収されました</li>
        <li>工業用不動産は年5%成長</li>
      </ul>
    </div>
  </div>
</section>

<!-- SECTION 4: JOB OPPORTUNITIES -->
<section id="job-opportunities" class="mb-16 scroll-mt-8">
  <div class="not-prose mb-8">
    <h2 class="text-4xl font-bold text-gray-900 mb-4 border-b-4 border-purple-500 pb-4 inline-block">
      4. 外国人専門職の雇用機会
    </h2>
  </div>

  <p class="text-lg leading-relaxed text-gray-700 mb-6">
    外国投資の流入は、特に国際経験と語学力を備えた有資格の専門職に対して大きな需要を生み出しています。メキシコの労働法は一般に現地採用を優先しますが、多国籍企業は専門的な職務、指導的なポジション、技術的な専門知識を求めて、積極的に外国人材を採用しています。
  </p>

  <!-- MOST DEMANDED PROFILES -->
  <div class="not-prose my-12 bg-purple-50 border-2 border-purple-200 rounded-2xl p-8">
    <h4 class="text-2xl font-bold text-purple-900 mb-6 flex items-center gap-3">
      <span class="text-3xl">🎯</span> 最も需要の高い専門職プロフィール
    </h4>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-white p-5 rounded-lg shadow-sm">
        <h5 class="font-semibold text-gray-900 mb-2">🔧 エンジニアリング</h5>
        <ul class="text-gray-700 text-sm space-y-1">
          <li>• 産業エンジニア</li>
          <li>• 機械エンジニア</li>
          <li>• 電気エンジニア</li>
          <li>• ソフトウェアエンジニア</li>
          <li>• 品質エンジニア</li>
        </ul>
      </div>

      <div class="bg-white p-5 rounded-lg shadow-sm">
        <h5 class="font-semibold text-gray-900 mb-2">💼 マネジメント</h5>
        <ul class="text-gray-700 text-sm space-y-1">
          <li>• 工場長</li>
          <li>• オペレーション責任者</li>
          <li>• サプライチェーンマネージャー</li>
          <li>• 人事責任者（多国籍企業での経験）</li>
          <li>• 財務コントローラー</li>
        </ul>
      </div>

      <div class="bg-white p-5 rounded-lg shadow-sm">
        <h5 class="font-semibold text-gray-900 mb-2">💻 テクノロジー</h5>
        <ul class="text-gray-700 text-sm space-y-1">
          <li>• SAPスペシャリスト</li>
          <li>• DevOpsエンジニア</li>
          <li>• Java／クラウド開発者</li>
          <li>• ITインフラ</li>
          <li>• サイバーセキュリティアナリスト</li>
          <li>• データサイエンティスト</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- SECTION 5: WORK VISA -->
  <section id="visa" class="mb-16 scroll-mt-8">
    <div class="not-prose mb-8">
      <h2 class="text-4xl font-bold text-gray-900 mb-4 border-b-4 border-blue-500 pb-4 inline-block">
        5. 就労ビザの要件と手続き
      </h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <div class="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-lg border-t-4 border-blue-500">
        <h5 class="text-xl font-semibold text-gray-900 mb-3">一時居住者（就労許可）</h5>
        <p class="text-gray-700 mb-4">滞在期間1〜4年向け。雇用主が INM を通じてビザをスポンサーします。メキシコ企業からの内定が必要です。</p>
        <ul class="text-sm text-gray-600 space-y-1">
          <li>• 雇用主が INM へ申請を提出</li>
          <li>• 本人が母国のメキシコ領事館で申請</li>
          <li>• 入国後30日以内の canje（切替）手続き</li>
          <li>• 毎年更新可能、最長4年</li>
        </ul>
      </div>
      <div class="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-lg border-t-4 border-green-500">
        <h5 class="text-xl font-semibold text-gray-900 mb-3">主な要件</h5>
        <p class="text-gray-700 mb-4">雇用主は、その職務をメキシコ国民では充足できないことを示す必要があります。</p>
        <ul class="text-sm text-gray-600 space-y-1">
          <li>• 有効なパスポート（残存有効期間6か月以上）</li>
          <li>• メキシコ企業からの内定通知書</li>
          <li>• 職業上の資格・認定</li>
          <li>• 無犯罪証明</li>
          <li>• 雇用主の申請に対する INM の承認</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- SECTION 6: SALARY -->
  <section id="salary" class="mb-16 scroll-mt-8">
    <div class="not-prose mb-8">
      <h2 class="text-4xl font-bold text-gray-900 mb-4 border-b-4 border-green-500 pb-4 inline-block">
        6. 給与の目安
      </h2>
    </div>

    <div class="overflow-x-auto mb-6">
      <table class="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
        <thead class="bg-green-600 text-white">
          <tr>
            <th class="px-6 py-3 text-left font-semibold">職種</th>
            <th class="px-6 py-3 text-left font-semibold">月額（MXN）</th>
            <th class="px-6 py-3 text-left font-semibold">月額（USD）</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
          <tr class="hover:bg-gray-50"><td class="px-6 py-4 font-medium">製造エンジニア</td><td class="px-6 py-4">$25,000-40,000</td><td class="px-6 py-4">$1,400-2,300</td></tr>
          <tr class="hover:bg-gray-50"><td class="px-6 py-4 font-medium">品質マネージャー</td><td class="px-6 py-4">$35,000-55,000</td><td class="px-6 py-4">$2,000-3,100</td></tr>
          <tr class="hover:bg-gray-50"><td class="px-6 py-4 font-medium">工場長</td><td class="px-6 py-4">$60,000-100,000</td><td class="px-6 py-4">$3,400-5,700</td></tr>
          <tr class="hover:bg-gray-50"><td class="px-6 py-4 font-medium">ソフトウェア開発者</td><td class="px-6 py-4">$30,000-50,000</td><td class="px-6 py-4">$1,700-2,800</td></tr>
          <tr class="hover:bg-gray-50"><td class="px-6 py-4 font-medium">駐在員パッケージ（シニア）</td><td class="px-6 py-4">$80,000-150,000+</td><td class="px-6 py-4">$4,500-8,500+</td></tr>
        </tbody>
      </table>
    </div>
    <p class="text-sm text-gray-500 italic">注：駐在員パッケージには、基本給に加えて住宅、学費、交通の各手当が含まれることがよくあります。</p>
  </section>

  <!-- SECTION 7: COST COMPARISON -->
  <section id="cost" class="mb-16 scroll-mt-8">
    <div class="not-prose mb-8">
      <h2 class="text-4xl font-bold text-gray-900 mb-4 border-b-4 border-purple-500 pb-4 inline-block">
        7. 生活費の比較
      </h2>
    </div>

    <div class="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-xl shadow-md mb-6">
      <p class="text-lg text-gray-700 mb-4">San Luis Potosí は、メキシコの他の主要な工業都市と比べて生活費が大幅に安く、給与をより有効に使えます。</p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="bg-white p-4 rounded-lg text-center"><p class="text-sm text-gray-600">SLP 対 CDMX</p><p class="text-2xl font-bold text-green-600">30%安い</p></div>
        <div class="bg-white p-4 rounded-lg text-center"><p class="text-sm text-gray-600">SLP 対 Monterrey</p><p class="text-2xl font-bold text-green-600">20%安い</p></div>
        <div class="bg-white p-4 rounded-lg text-center"><p class="text-sm text-gray-600">SLP 対 Guadalajara</p><p class="text-2xl font-bold text-green-600">15%安い</p></div>
      </div>
    </div>
  </section>

  <!-- SECTION 8: TIPS -->
  <section id="tips" class="mb-16 scroll-mt-8">
    <div class="not-prose mb-8">
      <h2 class="text-4xl font-bold text-gray-900 mb-4 border-b-4 border-amber-500 pb-4 inline-block">
        8. 求職者への実践的アドバイス
      </h2>
    </div>

    <div class="space-y-4">
      <div class="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
        <p class="text-blue-800"><strong>現地で人脈を築く：</strong>業界イベントに参加し、米国商工会議所（AmCham）の SLP 支部やドイツ・メキシコ商工会議所（CAMEXA）に加わりましょう。多くの求人は紹介を通じて充足されます。</p>
      </div>
      <div class="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
        <p class="text-green-800"><strong>スペイン語を学ぶ：</strong>多くの多国籍企業は英語で業務を行っていますが、スペイン語が堪能であれば就職の機会も給与の可能性も大きく高まります。</p>
      </div>
      <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
        <p class="text-yellow-800"><strong>専門の人材紹介会社を利用する：</strong>Hays、Michael Page、ManpowerGroup といった企業は SLP に拠点を構え、外国人専門職を製造業やテック分野の職務に紹介することを専門としています。</p>
      </div>
      <div class="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg">
        <p class="text-purple-800"><strong>契約社員という選択肢も検討する：</strong>多くの企業は、まずプロジェクト単位の契約で外国人専門職を採用し、6〜12か月後に正社員へ転換することがあります。</p>
      </div>
    </div>
  </section>

  <!-- FINAL CTA -->
  <div class="not-prose mt-16 bg-gradient-to-r from-blue-50 to-green-50 border-2 border-blue-300 p-8 rounded-2xl shadow-xl">
    <h3 class="text-3xl font-bold text-gray-900 mb-4">SLP でのキャリアの機会を探してみませんか？</h3>
    <p class="text-lg text-gray-700 mb-6">San Luis Potosí の活況な産業分野で働く外国人専門職のコミュニティとつながりましょう。</p>
    <div class="flex flex-col sm:flex-row gap-4">
      <a href="/contact" class="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold px-8 py-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg text-center">つながる →</a>
      <a href="/blog/cost-of-living-san-luis-potosi-2025" class="inline-flex items-center justify-center gap-2 bg-white border-2 border-blue-600 text-blue-700 font-semibold px-8 py-4 rounded-lg hover:bg-blue-50 transition-all text-center">生活費ガイド →</a>
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
  process.exit(0);
}

main();
