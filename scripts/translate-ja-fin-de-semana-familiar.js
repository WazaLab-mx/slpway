// Idempotent JA translation for the "family weekend" blog post.
// Updates ONLY content_ja by slug. Verifies via re-fetch. Does NOT commit.
require('dotenv').config({ path: '.env' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const SLUG = 'fin-de-semana-familiar-san-luis-potosi-parques-go-karts-ninos';

const CONTENT_JA = `<div class="prose prose-lg max-w-none">

<!-- Table of Contents -->
<div class="not-prose mb-12 bg-yellow-50 border-2 border-yellow-200 rounded-xl p-8">
  <h2 class="text-2xl font-bold mb-6 text-yellow-900">目次</h2>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <ul class="space-y-2">
      <li><a href="#quick-overview" class="text-yellow-700 hover:text-yellow-900 font-medium">旅行のクイック概要</a></li>
      <li><a href="#why-slp" class="text-yellow-700 hover:text-yellow-900 font-medium">家族旅行になぜSLPなのか？</a></li>
      <li><a href="#budget" class="text-yellow-700 hover:text-yellow-900 font-medium">予算の概要</a></li>
      <li><a href="#day-1" class="text-yellow-700 hover:text-yellow-900 font-medium">1日目：公園とゴーカート</a></li>
      <li><a href="#day-2" class="text-yellow-700 hover:text-yellow-900 font-medium">2日目：博物館とボウリング</a></li>
    </ul>
    <ul class="space-y-2">
      <li><a href="#ciclovia" class="text-yellow-700 hover:text-yellow-900 font-medium">日曜日：Carranza通りのCiclovía</a></li>
      <li><a href="#rancho" class="text-yellow-700 hover:text-yellow-900 font-medium">おまけ：Rancho La Estación</a></li>
      <li><a href="#restaurants" class="text-yellow-700 hover:text-yellow-900 font-medium">子ども連れにやさしいレストラン</a></li>
      <li><a href="#tips" class="text-yellow-700 hover:text-yellow-900 font-medium">家族旅行のヒント</a></li>
    </ul>
  </div>
</div>

<!-- Quick Trip Overview Box -->
<div id="quick-overview" class="not-prose mb-12 bg-gradient-to-r from-blue-500 to-purple-600 p-8 rounded-2xl shadow-2xl text-white">
  <h2 class="text-3xl font-bold mb-6">San Luis Potosiで過ごす完璧な家族の週末</h2>
  <p class="text-xl text-white/90 mb-6">
    公園、ゴーカート、ボウリング、体験型博物館、子ども連れにやさしい食事の冒険が詰まった、アクティブな2日間
  </p>

  <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div class="bg-white/10 rounded-lg p-4 text-center">
      <p class="text-sm text-white/70 mb-1">期間</p>
      <p class="text-2xl font-bold">2日間</p>
    </div>
    <div class="bg-white/10 rounded-lg p-4 text-center">
      <p class="text-sm text-white/70 mb-1">おすすめ対象</p>
      <p class="text-2xl font-bold">3〜14歳</p>
    </div>
    <div class="bg-white/10 rounded-lg p-4 text-center">
      <p class="text-sm text-white/70 mb-1">予算</p>
      <p class="text-2xl font-bold">$3,500 MXN</p>
    </div>
    <div class="bg-white/10 rounded-lg p-4 text-center">
      <p class="text-sm text-white/70 mb-1">アクティビティ</p>
      <p class="text-2xl font-bold">12以上</p>
    </div>
  </div>
</div>

<!-- Introduction -->
<section id="why-slp" class="mb-16">
  <h2 class="text-3xl font-bold mb-6">San Luis Potosiが家族旅行に最適な理由</h2>

  <p class="mb-6">
    アウトドアの冒険、体験型の学び、そして純粋な楽しさを兼ね備えた、家族向けの目的地をお探しですか？San Luis Potosiは、そのすべてに応えてくれます。地元の観光の専門家や数えきれないほどの家族の口コミによれば、このコロニアル都市は、子どもたちを楽しませながら、親御さんも美しい環境を満喫できる、格別な体験の組み合わせを提供しています。
  </p>

  <p class="mb-6">
    無料で入園できる動物園を備えたメキシコ有数の広さを誇る都市公園から、あらゆる年齢向けに設計されたゴーカート場、体験型の科学博物館、そして専用の遊び場を備えたレストランまで、SLPには忘れられない家族の週末に必要なものがすべて揃っています。
  </p>

  <div class="not-prose bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg mb-8">
    <h3 class="text-lg font-semibold mb-3 text-green-900">この旅程が特別な理由</h3>
    <ul class="space-y-2 text-green-800">
      <li class="flex items-start gap-2">
        <span class="text-green-600">&#x2022;</span>
        <span>地元の家族や旅行者が薦める<strong>子どもで実証済みのアクティビティ</strong></span>
      </li>
      <li class="flex items-start gap-2">
        <span class="text-green-600">&#x2022;</span>
        <span>子どもが遊んでいる間、親がくつろげる<strong>遊び場付きのレストラン</strong></span>
      </li>
      <li class="flex items-start gap-2">
        <span class="text-green-600">&#x2022;</span>
        <span>幼児からティーンエイジャーまで対応する<strong>年齢に合った選択肢</strong></span>
      </li>
      <li class="flex items-start gap-2">
        <span class="text-green-600">&#x2022;</span>
        <span>家族向けの現実的なスケジュールで組んだ<strong>柔軟な時間配分</strong></span>
      </li>
    </ul>
  </div>
</section>

<!-- Budget Overview -->
<section id="budget" class="mb-16">
  <h2 class="text-3xl font-bold mb-6">4人家族の予算の概要</h2>

  <div class="not-prose bg-white border-2 border-gray-200 rounded-xl p-8 shadow-lg">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

      <div class="bg-green-50 rounded-xl p-6 border-2 border-green-200">
        <h3 class="text-xl font-bold text-green-800 mb-4">節約派</h3>
        <p class="text-3xl font-bold text-green-600 mb-4">$2,500 MXN</p>
        <ul class="space-y-2 text-sm text-green-700">
          <li>&#x2022; Tangamanga用にお弁当を持参</li>
          <li>&#x2022; 無料の公園アクティビティ</li>
          <li>&#x2022; 有料アクティビティ1つ（博物館またはゴーカート）</li>
          <li>&#x2022; リーズナブルなレストランでの食事</li>
        </ul>
      </div>

      <div class="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
        <h3 class="text-xl font-bold text-blue-800 mb-4">ゆったり派</h3>
        <p class="text-3xl font-bold text-blue-600 mb-4">$3,500 MXN</p>
        <ul class="space-y-2 text-sm text-blue-700">
          <li>&#x2022; 地元で人気の店で朝食</li>
          <li>&#x2022; 複数の有料アクティビティ</li>
          <li>&#x2022; 遊び場付きの子ども連れにやさしいレストラン</li>
          <li>&#x2022; ゴーカート＋ボウリング＋博物館</li>
        </ul>
      </div>

      <div class="bg-purple-50 rounded-xl p-6 border-2 border-purple-200">
        <h3 class="text-xl font-bold text-purple-800 mb-4">とことん満喫派</h3>
        <p class="text-3xl font-bold text-purple-600 mb-4">$5,000+ MXN</p>
        <ul class="space-y-2 text-sm text-purple-700">
          <li>&#x2022; すべてのアクティビティ込み</li>
          <li>&#x2022; 上質なレストラン体験</li>
          <li>&#x2022; Kidiversoの1日フリーパス</li>
          <li>&#x2022; Rancho La Estaciónのアクティビティ</li>
        </ul>
      </div>

    </div>
  </div>
</section>

<!-- DAY 1 -->
<section id="day-1" class="mb-16 scroll-mt-8">
  <!-- Day Header -->
  <div class="not-prose mb-8 bg-gradient-to-r from-green-600 to-teal-600 p-8 rounded-2xl shadow-2xl text-white">
    <div class="flex items-center justify-between mb-4 flex-wrap gap-4">
      <h2 class="text-4xl font-bold">1日目：公園、自然、ゴーカート</h2>
      <span class="bg-white/20 px-4 py-2 rounded-full text-sm font-semibold">終日</span>
    </div>
    <p class="text-xl text-white/90 mb-4">
      メキシコで2番目に大きい都市公園で冒険を始め、そのあとGoKartManiaでレースを楽しみましょう
    </p>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
      <div class="bg-white/10 rounded-lg p-4 text-center">
        <p class="text-sm text-white/70 mb-1">徒歩</p>
        <p class="text-2xl font-bold">3〜5 km</p>
      </div>
      <div class="bg-white/10 rounded-lg p-4 text-center">
        <p class="text-sm text-white/70 mb-1">所要時間</p>
        <p class="text-2xl font-bold">10時間</p>
      </div>
      <div class="bg-white/10 rounded-lg p-4 text-center">
        <p class="text-sm text-white/70 mb-1">予算</p>
        <p class="text-2xl font-bold">$1,800</p>
      </div>
      <div class="bg-white/10 rounded-lg p-4 text-center">
        <p class="text-sm text-white/70 mb-1">アクティビティ</p>
        <p class="text-2xl font-bold">6</p>
      </div>
    </div>
  </div>

  <!-- Day Highlights Box -->
  <div class="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8 rounded-r-lg">
    <h3 class="text-lg font-semibold mb-3 text-yellow-900">今日のハイライト</h3>
    <ul class="space-y-2 text-yellow-800">
      <li class="flex items-start gap-2">
        <span class="text-yellow-600">&#x2022;</span>
        <span>El Meson de San Pascualで伝統的なメキシコの朝食</span>
      </li>
      <li class="flex items-start gap-2">
        <span class="text-yellow-600">&#x2022;</span>
        <span>Parque Tangamanga Iを散策 — 動物園、遊び場、レンタサイクル</span>
      </li>
      <li class="flex items-start gap-2">
        <span class="text-yellow-600">&#x2022;</span>
        <span>GoKartManiaで全年齢が楽しめるゴーカートレース</span>
      </li>
      <li class="flex items-start gap-2">
        <span class="text-yellow-600">&#x2022;</span>
        <span>汽車をテーマにした遊び場のあるLa Parroquiaで夕食</span>
      </li>
    </ul>
  </div>

  <!-- Day 1 Timeline -->
  <div class="not-prose mb-12 bg-white border-2 border-gray-200 rounded-xl p-8 shadow-lg">
    <h3 class="text-2xl font-semibold mb-6 text-gray-900">1日目のスケジュール早見表</h3>

    <div class="relative">
      <div class="absolute left-16 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-green-400 to-purple-400"></div>

      <div class="space-y-6">
        <div class="relative flex items-start gap-6">
          <div class="flex-shrink-0 w-32 text-right">
            <span class="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
              8:30 AM
            </span>
          </div>
          <div class="flex-shrink-0 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg z-10 -ml-2"></div>
          <div class="flex-1">
            <p class="text-gray-900 font-medium">El Meson de San Pascualで朝食</p>
            <p class="text-sm text-gray-600">所要時間：1.5時間 | 費用：$400〜600 MXN（家族）</p>
          </div>
        </div>

        <div class="relative flex items-start gap-6">
          <div class="flex-shrink-0 w-32 text-right">
            <span class="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
              10:30 AM
            </span>
          </div>
          <div class="flex-shrink-0 w-4 h-4 bg-green-500 rounded-full border-4 border-white shadow-lg z-10 -ml-2"></div>
          <div class="flex-1">
            <p class="text-gray-900 font-medium">Parque Tangamanga I — 動物園と遊び場</p>
            <p class="text-sm text-gray-600">所要時間：3時間 | 費用：無料</p>
          </div>
        </div>

        <div class="relative flex items-start gap-6">
          <div class="flex-shrink-0 w-32 text-right">
            <span class="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
              1:30 PM
            </span>
          </div>
          <div class="flex-shrink-0 w-4 h-4 bg-green-500 rounded-full border-4 border-white shadow-lg z-10 -ml-2"></div>
          <div class="flex-1">
            <p class="text-gray-900 font-medium">Tangamangaでピクニックランチ</p>
            <p class="text-sm text-gray-600">所要時間：1時間 | 費用：場合により異なる（持参または現地で購入）</p>
          </div>
        </div>

        <div class="relative flex items-start gap-6">
          <div class="flex-shrink-0 w-32 text-right">
            <span class="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
              3:00 PM
            </span>
          </div>
          <div class="flex-shrink-0 w-4 h-4 bg-yellow-500 rounded-full border-4 border-white shadow-lg z-10 -ml-2"></div>
          <div class="flex-1">
            <p class="text-gray-900 font-medium">Pista SLPでゴーカート</p>
            <p class="text-sm text-gray-600">所要時間：1.5時間 | 費用：1レースあたり1人$150〜250 MXN</p>
          </div>
        </div>

        <div class="relative flex items-start gap-6">
          <div class="flex-shrink-0 w-32 text-right">
            <span class="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
              5:30 PM
            </span>
          </div>
          <div class="flex-shrink-0 w-4 h-4 bg-purple-500 rounded-full border-4 border-white shadow-lg z-10 -ml-2"></div>
          <div class="flex-1">
            <p class="text-gray-900 font-medium">La Flor de SLPでアイスクリーム</p>
            <p class="text-sm text-gray-600">所要時間：30分 | 費用：$60〜100 MXN</p>
          </div>
        </div>

        <div class="relative flex items-start gap-6">
          <div class="flex-shrink-0 w-32 text-right">
            <span class="inline-block bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
              7:00 PM
            </span>
          </div>
          <div class="flex-shrink-0 w-4 h-4 bg-red-500 rounded-full border-4 border-white shadow-lg z-10 -ml-2"></div>
          <div class="flex-1">
            <p class="text-gray-900 font-medium">La Oruga y la Cebollaで夕食</p>
            <p class="text-sm text-gray-600">所要時間：1.5時間 | 費用：$500〜800 MXN（家族）</p>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg mt-6">
      <p class="text-blue-800"><strong>ヒント：</strong>Tangamanga公園には小さな動物園、足こぎボート、遊び場があり、すべて無料です。公園は広く、日陰が少ない開けた場所が多いので、日焼け止めと水を持参してください。ゴーカート場はLa Pilaへ向かう道沿いにあります。</p>
    </div>
  </section>

  <!-- DAY 2 -->
  <section id="day2" class="mb-16 scroll-mt-8">
    <div class="not-prose mb-8">
      <h2 class="text-4xl font-bold text-gray-900 mb-4 border-b-4 border-blue-500 pb-4 inline-block">
        2日目：博物館、ボウリング、そしてお楽しみ
      </h2>
    </div>

    <div class="bg-white border-2 border-gray-200 rounded-xl p-6 mb-6 shadow-md">
      <h3 class="text-2xl font-semibold text-blue-900 mb-4">今日のハイライト</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="bg-blue-50 p-4 rounded-lg text-center">
          <div class="text-3xl mb-2">🏛️</div>
          <p class="font-semibold text-gray-900">Laberinto de las Ciencias</p>
          <p class="text-sm text-gray-600">体験型の科学博物館</p>
        </div>
        <div class="bg-purple-50 p-4 rounded-lg text-center">
          <div class="text-3xl mb-2">🎳</div>
          <p class="font-semibold text-gray-900">ボウリング</p>
          <p class="text-sm text-gray-600">家族で楽しむボウリング</p>
        </div>
        <div class="bg-green-50 p-4 rounded-lg text-center">
          <div class="text-3xl mb-2">🛍️</div>
          <p class="font-semibold text-gray-900">Plaza Citadina</p>
          <p class="text-sm text-gray-600">ショッピングとエンターテインメント</p>
        </div>
      </div>
    </div>

    <div class="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-md">
      <h3 class="text-xl font-semibold text-gray-900 mb-4">2日目のスケジュール早見表</h3>
      <div class="space-y-6 relative before:absolute before:left-[7.5rem] before:top-4 before:bottom-4 before:w-0.5 before:bg-gray-200">

        <div class="relative flex items-start gap-6">
          <div class="flex-shrink-0 w-32 text-right">
            <span class="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">9:00 AM</span>
          </div>
          <div class="flex-shrink-0 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg z-10 -ml-2"></div>
          <div class="flex-1">
            <p class="text-gray-900 font-medium">VIPSまたはSanbornsで朝食</p>
            <p class="text-sm text-gray-600">所要時間：1時間 | 費用：$300〜500 MXN（家族）</p>
          </div>
        </div>

        <div class="relative flex items-start gap-6">
          <div class="flex-shrink-0 w-32 text-right">
            <span class="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">10:30 AM</span>
          </div>
          <div class="flex-shrink-0 w-4 h-4 bg-green-500 rounded-full border-4 border-white shadow-lg z-10 -ml-2"></div>
          <div class="flex-1">
            <p class="text-gray-900 font-medium">Laberinto de las Ciencias y las Artes</p>
            <p class="text-sm text-gray-600">所要時間：2.5時間 | 費用：大人$80 MXN、子ども$60 MXN</p>
          </div>
        </div>

        <div class="relative flex items-start gap-6">
          <div class="flex-shrink-0 w-32 text-right">
            <span class="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">1:30 PM</span>
          </div>
          <div class="flex-shrink-0 w-4 h-4 bg-green-500 rounded-full border-4 border-white shadow-lg z-10 -ml-2"></div>
          <div class="flex-1">
            <p class="text-gray-900 font-medium">Peter Piper PizzaまたはLa Parroquiaでランチ</p>
            <p class="text-sm text-gray-600">所要時間：1.5時間 | 費用：$400〜700 MXN（家族）</p>
          </div>
        </div>

        <div class="relative flex items-start gap-6">
          <div class="flex-shrink-0 w-32 text-right">
            <span class="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">3:30 PM</span>
          </div>
          <div class="flex-shrink-0 w-4 h-4 bg-yellow-500 rounded-full border-4 border-white shadow-lg z-10 -ml-2"></div>
          <div class="flex-1">
            <p class="text-gray-900 font-medium">Bol Tangaでボウリング</p>
            <p class="text-sm text-gray-600">所要時間：2時間 | 費用：1ゲームあたり1人$100〜150 MXN</p>
          </div>
        </div>

        <div class="relative flex items-start gap-6">
          <div class="flex-shrink-0 w-32 text-right">
            <span class="inline-block bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">6:30 PM</span>
          </div>
          <div class="flex-shrink-0 w-4 h-4 bg-red-500 rounded-full border-4 border-white shadow-lg z-10 -ml-2"></div>
          <div class="flex-1">
            <p class="text-gray-900 font-medium">Centro Históricoで夕食とアイスクリーム</p>
            <p class="text-sm text-gray-600">所要時間：2時間 | 費用：$400〜600 MXN（家族）</p>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg mt-6">
      <p class="text-green-800"><strong>ヒント：</strong>Laberinto de las CienciasはTangamanga公園内にあり、メキシコ中部でも指折りの子ども向け体験型博物館です。子どもたちは科学実験をしたり、水の展示で遊んだり、プラネタリウムを楽しんだりできます。週末はプラネタリウムの上映を事前に予約しておきましょう。</p>
    </div>
  </section>

  <!-- SUNDAY: CICLOVIA -->
  <section id="ciclovia" class="mb-16 scroll-mt-8">
    <div class="not-prose mb-8">
      <h2 class="text-4xl font-bold text-gray-900 mb-4 border-b-4 border-green-500 pb-4 inline-block">
        日曜日：Carranza通りのCiclovía
      </h2>
    </div>

    <div class="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl shadow-md mb-6">
      <p class="text-lg text-gray-700"><strong>毎週日曜日の朝、</strong>この街を象徴する大通りAvenida Venustiano Carranzaが車両通行止めになり、自転車、ローラーブレード、キックボードに乗った家族連れや徒歩の人々に開放されます。時間はおよそ午前8時から午後1時までです。</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <div class="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-md">
        <h4 class="text-xl font-semibold text-gray-900 mb-3">どんな様子？</h4>
        <ul class="space-y-2 text-gray-700">
          <li class="flex items-start gap-2"><span class="text-green-500">✓</span> 4 km以上にわたる車のない大通り</li>
          <li class="flex items-start gap-2"><span class="text-green-500">✓</span> ルート沿いで利用できるレンタサイクル</li>
          <li class="flex items-start gap-2"><span class="text-green-500">✓</span> 屋台、ジューススタンド、軽食のカート</li>
          <li class="flex items-start gap-2"><span class="text-green-500">✓</span> 生演奏やパフォーマー</li>
          <li class="flex items-start gap-2"><span class="text-green-500">✓</span> 一部区間では無料のエクササイズ教室</li>
        </ul>
      </div>
      <div class="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-md">
        <h4 class="text-xl font-semibold text-gray-900 mb-3">実用情報</h4>
        <ul class="space-y-2 text-gray-700">
          <li><strong>いつ：</strong>毎週日曜日、午前8時〜午後1時ごろ</li>
          <li><strong>場所：</strong>Av. Venustiano Carranza</li>
          <li><strong>費用：</strong>無料</li>
          <li><strong>レンタサイクル：</strong>1時間あたり約$50〜100 MXN</li>
          <li><strong>おすすめ対象：</strong>全年齢、特に家族連れ</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- BONUS: RANCHO LA ESTACION -->
  <section id="rancho" class="mb-16 scroll-mt-8">
    <div class="not-prose mb-8">
      <h2 class="text-4xl font-bold text-gray-900 mb-4 border-b-4 border-yellow-500 pb-4 inline-block">
        おまけ：Rancho La Estacion
      </h2>
    </div>

    <div class="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6 shadow-md mb-6">
      <p class="text-lg text-gray-700 mb-4">もう1日余裕がある場合や、上記のアクティビティのどれかと入れ替えたい場合は、<strong>Rancho La Estacion</strong>がおすすめです。市の中心部から車で約20分の、家族向けの牧場体験施設です。</p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h4 class="font-semibold text-gray-900 mb-2">アクティビティの内容：</h4>
          <ul class="space-y-1 text-gray-700 text-sm">
            <li>• 子どもも大人も楽しめる乗馬</li>
            <li>• 牧場の動物とのふれあい（ヤギ、ニワトリ、ウサギ）</li>
            <li>• ジップラインとアスレチックコース</li>
            <li>• バーベキューグリル付きのピクニックエリア</li>
            <li>• プール（季節限定）</li>
          </ul>
        </div>
        <div>
          <h4 class="font-semibold text-gray-900 mb-2">詳細：</h4>
          <ul class="space-y-1 text-gray-700 text-sm">
            <li><strong>費用：</strong>1人$200〜400 MXN（プランにより異なる）</li>
            <li><strong>営業時間：</strong>9 AM〜5 PM（週末）</li>
            <li><strong>場所：</strong>Carretera a Matehuala Km 8</li>
            <li><strong>おすすめ対象：</strong>3〜12歳</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- KID-FRIENDLY RESTAURANTS -->
  <section id="restaurants" class="mb-16 scroll-mt-8">
    <div class="not-prose mb-8">
      <h2 class="text-4xl font-bold text-gray-900 mb-4 border-b-4 border-red-500 pb-4 inline-block">
        子ども連れにやさしいレストラン
      </h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-md hover:border-blue-300 transition-colors">
        <h4 class="text-xl font-bold text-gray-900 mb-2">La Oruga y la Cebolla</h4>
        <p class="text-sm text-gray-600 mb-3">メキシカン・フュージョン、遊び場付きの屋外ガーデン</p>
        <p class="text-gray-700 text-sm"><strong>価格：</strong>1人$200〜350 MXN | <strong>おすすめ：</strong>ブランチと夕食</p>
      </div>
      <div class="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-md hover:border-blue-300 transition-colors">
        <h4 class="text-xl font-bold text-gray-900 mb-2">Peter Piper Pizza</h4>
        <p class="text-sm text-gray-600 mb-3">ピザ、アーケードゲーム、子ども向けの遊び場</p>
        <p class="text-gray-700 text-sm"><strong>価格：</strong>1人$150〜250 MXN | <strong>おすすめ：</strong>子ども連れのランチ</p>
      </div>
      <div class="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-md hover:border-blue-300 transition-colors">
        <h4 class="text-xl font-bold text-gray-900 mb-2">VIPS</h4>
        <p class="text-sm text-gray-600 mb-3">キッズメニューやぬりえのある、家族向けチェーン店</p>
        <p class="text-gray-700 text-sm"><strong>価格：</strong>1人$150〜250 MXN | <strong>おすすめ：</strong>朝食とランチ</p>
      </div>
      <div class="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-md hover:border-blue-300 transition-colors">
        <h4 class="text-xl font-bold text-gray-900 mb-2">La Parroquia Potosina</h4>
        <p class="text-sm text-gray-600 mb-3">伝統的なメキシコ料理、café de olla、enchiladas potosinas</p>
        <p class="text-gray-700 text-sm"><strong>価格：</strong>1人$120〜200 MXN | <strong>おすすめ：</strong>本格的な地元料理</p>
      </div>
      <div class="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-md hover:border-blue-300 transition-colors">
        <h4 class="text-xl font-bold text-gray-900 mb-2">Sanborns</h4>
        <p class="text-sm text-gray-600 mb-3">豊富なメニューとゆったりした座席のレストランチェーン</p>
        <p class="text-gray-700 text-sm"><strong>価格：</strong>1人$150〜250 MXN | <strong>おすすめ：</strong>一日中いつでも食事</p>
      </div>
      <div class="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-md hover:border-blue-300 transition-colors">
        <h4 class="text-xl font-bold text-gray-900 mb-2">El Meson de San Pascual</h4>
        <p class="text-sm text-gray-600 mb-3">伝統的なポトシ風の朝食、広々とした中庭</p>
        <p class="text-gray-700 text-sm"><strong>価格：</strong>1人$100〜180 MXN | <strong>おすすめ：</strong>週末の朝食</p>
      </div>
    </div>
  </section>

  <!-- FAMILY TRAVEL TIPS -->
  <section id="tips" class="mb-16 scroll-mt-8">
    <div class="not-prose mb-8">
      <h2 class="text-4xl font-bold text-gray-900 mb-4 border-b-4 border-purple-500 pb-4 inline-block">
        家族旅行のヒント
      </h2>
    </div>

    <div class="space-y-4">
      <div class="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
        <p class="text-blue-800"><strong>天候：</strong>SLPは半乾燥気候です。夏（6〜9月）は午後ににわか雨が降るので、薄手のレインジャケットを持参してください。冬は温暖ですが、朝は肌寒くなることがあります（8〜12℃）。春（3〜5月）はアウトドア・アクティビティに最適です。</p>
      </div>
      <div class="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
        <p class="text-green-800"><strong>移動手段：</strong>SLPではUberやDiDiがよく使えます。家族連れなら、柔軟に動けるレンタカーもおすすめです。駐車は簡単で安価です（多くのエリアで$20〜40 MXN）。</p>
      </div>
      <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
        <p class="text-yellow-800"><strong>節約のヒント：</strong>多くの公園や公共スペースは無料です。観光地価格を避けるため、水や軽食を持参しましょう。fonda（地元の食堂）で食べれば、手ごろでおいしい食事が楽しめます（1人$60〜100 MXN）。</p>
      </div>
      <div class="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg">
        <p class="text-purple-800"><strong>安全性：</strong>SLPはメキシコで最も安全な都市のひとつです。このガイドで紹介している観光エリア、公園、レストランはすべて安全な地区にあります。通常の用心は怠らず、周囲に気を配り、貴重品をしっかり管理し、正規の交通手段を利用してください。</p>
      </div>
      <div class="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
        <p class="text-red-800"><strong>健康：</strong>水道水は飲用に適していません。ボトル入りの水を買うか、フィルター付きのボトルを持参してください。薬局はどこにでもあり、品揃えも豊富です。緊急時には、Hospital Lomas de San LuisとStar Medicaが優れた民間病院です。</p>
      </div>
    </div>
  </section>

  <!-- FINAL CTA -->
  <div class="not-prose mt-16 bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-300 p-8 rounded-2xl shadow-xl">
    <h3 class="text-3xl font-bold text-gray-900 mb-4">家族の週末を計画しましょう！</h3>
    <p class="text-lg text-gray-700 mb-6">San Luis Potosiへの完璧な家族旅行の計画にお手伝いが必要ですか？おすすめの提案、予約、地元ならではの耳より情報でサポートします。</p>
    <div class="flex flex-col sm:flex-row gap-4">
      <a href="/contact" class="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold px-8 py-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg text-center">パーソナライズされたヒントを受け取る →</a>
      <a href="/blog" class="inline-flex items-center justify-center gap-2 bg-white border-2 border-blue-600 text-blue-700 font-semibold px-8 py-4 rounded-lg hover:bg-blue-50 transition-all text-center">SLPガイドをもっと見る →</a>
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
  } else {
    const { error: upErr } = await supabase
      .from('blog_posts')
      .update({ content_ja: CONTENT_JA })
      .eq('id', data.id);
    if (upErr) {
      console.error('UPDATE ERROR:', upErr.message);
      process.exit(1);
    }
    console.log('content_ja updated.');
  }

  // Verify via authoritative re-fetch.
  const { data: check, error: chkErr } = await supabase
    .from('blog_posts')
    .select('content, content_de, content_ja')
    .eq('id', data.id)
    .single();
  if (chkErr) {
    console.error('VERIFY FETCH ERROR:', chkErr.message);
    process.exit(1);
  }

  const tagCount = (s) => (s.match(/<[^>]+>/g) || []).length;
  const enTags = tagCount(check.content);
  const jaTags = tagCount(check.content_ja);
  const deUnchanged = check.content_de === data.content_de;
  const jaNonEmpty = (check.content_ja || '').length > 0;
  const jaDiffers = check.content_ja !== check.content;

  console.log('EN tag count:', enTags);
  console.log('JA tag count:', jaTags);
  console.log('Tag counts match:', enTags === jaTags);
  console.log('JA non-empty:', jaNonEmpty);
  console.log('JA differs from EN:', jaDiffers);
  console.log('content_de unchanged:', deUnchanged);

  const ok = enTags === jaTags && jaNonEmpty && jaDiffers && deUnchanged;
  console.log(ok ? '\nVERIFIED OK.' : '\nVERIFICATION PROBLEM.');
  process.exit(ok ? 0 : 1);
}

main();
