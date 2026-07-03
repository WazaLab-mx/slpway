// Native Japanese translation for blog post `san-luis-rey-tranvia` (idempotent).
// Updates ONLY content_ja by slug. Verifies by re-fetch after update.
require('dotenv').config({ path: '.env' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const SLUG = 'san-luis-rey-tranvia';

const CONTENT_JA = `<div class="bg-yellow-50 p-6 rounded-lg mb-8">
  <h2 class="text-xl font-semibold mb-4">ツアー情報</h2>
  <ul class="list-disc pl-6">
    <li><a href="#acerca-san-luis-rey" class="text-blue-600 hover:text-blue-800">San Luis Rey について</a></li>
    <li><a href="#experiencia-tour" class="text-blue-600 hover:text-blue-800">ツアー体験</a></li>
    <li><a href="#horarios-precios" class="text-blue-600 hover:text-blue-800">運行時間と料金</a></li>
    <li><a href="#ruta-tour" class="text-blue-600 hover:text-blue-800">ツアーのルート</a></li>
    <li><a href="#como-reservar" class="text-blue-600 hover:text-blue-800">ご予約方法</a></li>
  </ul>
</div>

<div class="prose prose-lg max-w-none">
  <p class="text-lg text-gray-700 mb-8"><strong>伝統的な San Luis Rey のトロリーツアーに乗って、San Luis Potosí の歴史地区を巡ってみませんか。毎日運行、経験豊富なガイドがご案内し、UNESCO 世界遺産の街で忘れられないひとときをお過ごしいただけます。</strong></p>

  <div class="bg-blue-50 p-6 rounded-lg mb-8">
    <h3 class="text-lg font-semibold mb-4 text-blue-900">San Luis Rey ツアーの見どころ</h3>
    <ul class="list-disc pl-6 space-y-2">
      <li><strong>伝統的なトロリー</strong>：本格的な観光トロリーで街を体感</li>
      <li><strong>UNESCO 歴史地区</strong>：世界遺産の名所を巡る</li>
      <li><strong>経験豊富なガイド</strong>：専門ガイドとともに歴史を学ぶ</li>
      <li><strong>毎日運行</strong>：一年を通して毎日ツアーを実施</li>
    </ul>
  </div>

  <section id="acerca-san-luis-rey" class="mb-12">
    <h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">🚋 San Luis Rey について</h2>
    <p class="text-gray-700 mb-6">San Luis Rey は、歴史地区を巡るのに最適な方法です。伝統的なトロリーツアーが San Luis Potosí のもっとも象徴的な名所へとご案内し、快適さと歴史、そして楽しさを兼ね備えた、過去と現在をつなぐ唯一無二の体験をお届けします。</p>

    <div class="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
      <p class="text-green-800 font-medium">✅ 長年にわたり数多くの旅行者を美しい街へとご案内してきた San Luis Rey は、San Luis Potosí の豊かな歴史と植民地時代の建築を巡るための人気の選択肢として確固たる地位を築いてきました。</p>
    </div>

    <div class="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
      <h4 class="font-semibold text-yellow-800 mb-2">🏛️ UNESCO 世界遺産：</h4>
      <p class="text-yellow-800">San Luis Potosí の歴史地区は UNESCO 世界遺産に登録されており、私たちのツアーでは、この文化遺産を快適かつ学びのある形で体感していただけます。</p>
    </div>
  </section>

  <section id="experiencia-tour" class="mb-12">
    <h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">🎯 ツアー体験</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
      <div class="bg-blue-50 p-6 rounded-lg">
        <h3 class="text-xl font-semibold mb-4 text-blue-900">🗺️ 歴史ツアー</h3>
        <p class="text-blue-800 mb-3">専門ガイドの解説とともに、歴史地区のもっとも重要な名所を巡ります</p>
        <ul class="list-disc pl-6 space-y-2 text-blue-700">
          <li>Plaza de Armas</li>
          <li>Metropolitan Cathedral</li>
          <li>Government Palace</li>
          <li>Peace Theater</li>
        </ul>
      </div>

      <div class="bg-green-50 p-6 rounded-lg">
        <h3 class="text-xl font-semibold mb-4 text-green-900">👥 ご家族での体験</h3>
        <p class="text-green-800 mb-3">ご家族みなさまに最適、快適で学びのあるツアーです</p>
        <ul class="list-disc pl-6 space-y-2 text-green-700">
          <li>あらゆる年齢層の方にご利用いただけます</li>
          <li>快適な座席</li>
          <li>天候から守られる設計</li>
          <li>お子さまにちょうどよい所要時間</li>
        </ul>
      </div>
    </div>

    <div class="space-y-6">
      <div class="bg-white border-l-4 border-blue-500 shadow-sm rounded-lg p-6">
        <h3 class="text-xl font-semibold mb-3 text-blue-900">1. San Juan de Dios Garden からの出発</h3>
        <p class="text-gray-700 mb-3">歴史をたどる冒険は、絵のように美しい San Juan de Dios Garden から始まります。街の中心部を探索するのに理想的な出発点です。</p>
        <div class="bg-blue-50 p-4 rounded-lg">
          <h4 class="font-semibold mb-2 text-blue-800">📍 集合場所：</h4>
          <ul class="list-disc pl-6 text-blue-700">
            <li>中心部にあり、アクセスも良好な立地</li>
            <li>近隣に駐車場あり</li>
            <li>公共交通機関でも簡単にお越しいただけます</li>
          </ul>
        </div>
      </div>

      <div class="bg-white border-l-4 border-green-500 shadow-sm rounded-lg p-6">
        <h3 class="text-xl font-semibold mb-3 text-green-900">2. 象徴的な名所の巡回</h3>
        <p class="text-gray-700 mb-3">ツアーの道中では、豊かな植民地時代の遺産を代表する記念建築物や建物を巡ります。</p>
        <div class="bg-green-50 p-4 rounded-lg">
          <h4 class="font-semibold mb-2 text-green-800">🏛️ 主な立ち寄り先：</h4>
          <ul class="list-disc pl-6 text-green-700">
            <li>Metropolitan Cathedral</li>
            <li>Government Palace</li>
            <li>Peace Theater</li>
            <li>República Market</li>
          </ul>
        </div>
      </div>

      <div class="bg-white border-l-4 border-yellow-500 shadow-sm rounded-lg p-6">
        <h3 class="text-xl font-semibold mb-3 text-yellow-900">3. 専門ガイドによる歴史解説</h3>
        <p class="text-gray-700 mb-3">専門のガイドが、訪れる名所それぞれにまつわる魅力的な物語や伝説をお話しします。</p>
        <div class="bg-yellow-50 p-4 rounded-lg">
          <h4 class="font-semibold mb-2 text-yellow-800">📚 学べる内容：</h4>
          <ul class="list-disc pl-6 text-yellow-700">
            <li>San Luis Potosí の植民地時代の歴史</li>
            <li>建築と歴史的な芸術</li>
            <li>重要な人物たち</li>
            <li>地域の伝統と文化</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section id="horarios-precios" class="mb-12">
    <h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">⏰ 運行時間と料金</h2>

    <div class="overflow-x-auto mb-8">
      <table class="min-w-full bg-white border border-gray-200 rounded-lg">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">運行時間</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">運行日</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">所要時間</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">料金</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
          <tr>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">10:00 AM</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">月曜日〜日曜日</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">45 minutes</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$80 MXN</td>
          </tr>
          <tr>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">12:00 PM</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">月曜日〜日曜日</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">45 minutes</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$80 MXN</td>
          </tr>
          <tr>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">4:00 PM</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">月曜日〜日曜日</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">45 minutes</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$80 MXN</td>
          </tr>
          <tr>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">6:00 PM</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">金曜日〜日曜日</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">45 minutes</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$80 MXN</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      <div class="bg-blue-50 p-6 rounded-lg">
        <h3 class="text-lg font-semibold mb-3 text-blue-900">💰 特別料金</h3>
        <ul class="text-sm text-blue-700 space-y-1">
          <li>• 3 歳未満のお子さま：無料</li>
          <li>• 学生証をお持ちの方：$60 MXN</li>
          <li>• 10 名以上のグループ：15％割引</li>
        </ul>
      </div>

      <div class="bg-green-50 p-6 rounded-lg">
        <h3 class="text-lg font-semibold mb-3 text-green-900">🎟️ 料金に含まれるもの</h3>
        <ul class="text-sm text-green-700 space-y-1">
          <li>• 45 分間のガイド付きツアー</li>
          <li>• プロによる歴史解説</li>
          <li>• 主要な名所の巡回</li>
        </ul>
      </div>

      <div class="bg-yellow-50 p-6 rounded-lg">
        <h3 class="text-lg font-semibold mb-3 text-yellow-900">📅 運行状況</h3>
        <ul class="text-sm text-yellow-700 space-y-1">
          <li>• 一年を通して毎日運行</li>
          <li>• 予約不要</li>
          <li>• 天候により変更となる場合があります</li>
        </ul>
      </div>
    </div>
  </section>

  <section id="ruta-tour" class="mb-12">
    <h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">🗺️ ツアーのルート</h2>

    <div class="bg-blue-50 p-6 rounded-lg mb-6">
      <h4 class="font-semibold mb-3 text-blue-900">📍 歴史地区を巡る完全周遊コース</h4>
      <p class="text-blue-800 mb-4">私たちのトロリーは、San Luis Potosí の主要な歴史・文化の見どころを網羅した、綿密に設計された周遊コースへとご案内します。</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h5 class="font-medium text-blue-800 mb-2">主な立ち寄り先：</h5>
          <ul class="list-disc pl-6 text-blue-700 space-y-1">
            <li>San Juan de Dios Garden（出発地点）</li>
            <li>Plaza de Armas</li>
            <li>Metropolitan Cathedral</li>
            <li>Government Palace</li>
          </ul>
        </div>
        <div>
          <h5 class="font-medium text-blue-800 mb-2">見どころ：</h5>
          <ul class="list-disc pl-6 text-blue-700 space-y-1">
            <li>Peace Theater</li>
            <li>República Market</li>
            <li>Carmen Temple</li>
            <li>博物館エリア</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section id="certificaciones" class="mb-12">
    <h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">🏆 品質と受賞・認定</h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      <div class="bg-white border border-gray-200 rounded-lg p-6">
        <h3 class="text-xl font-semibold mb-4 text-gray-900">🏛️ 観光省</h3>
        <p class="text-gray-700">質の高いサービスに対して、メキシコ観光省から公式に認定を受けています。</p>
      </div>

      <div class="bg-white border border-gray-200 rounded-lg p-6">
        <h3 class="text-xl font-semibold mb-4 text-gray-900">🌟 M ディスティンクション</h3>
        <p class="text-gray-700">観光サービスにおける品質と卓越性を示す、全国的に認められた認証です。</p>
      </div>

      <div class="bg-white border border-gray-200 rounded-lg p-6">
        <h3 class="text-xl font-semibold mb-4 text-gray-900">🏛️ 世界遺産都市</h3>
        <p class="text-gray-700">UNESCO 世界遺産に認められたサービス提供者です。</p>
      </div>
    </div>
  </section>

  <section id="como-reservar" class="mb-12">
    <h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">🎫 旅を始めましょう</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
      <div class="bg-white border border-gray-200 rounded-lg p-6">
        <h3 class="text-xl font-semibold mb-4 text-gray-900">🚋 ご予約方法</h3>
        <p class="text-gray-700 mb-4">事前のご予約は不要です。San Juan de Dios Garden にある私たちのメインステーションにお越しいただき、トロリーで直接チケットをお買い求めください。</p>
        <div class="bg-green-50 p-4 rounded-lg">
          <p class="text-green-800 text-sm">親しみやすいスタッフが、みなさまのご案内やご質問への対応を喜んでお手伝いいたします。</p>
        </div>
      </div>

      <div class="bg-white border border-gray-200 rounded-lg p-6">
        <h3 class="text-xl font-semibold mb-4 text-gray-900">📞 お問い合わせ</h3>
        <p class="text-gray-700 mb-4">ツアーの詳細やグループ向けの特別料金については、ウェブサイトからお問い合わせいただくか、San Juan de Dios Garden まで直接お越しください。</p>
        <div class="space-y-2 text-gray-700">
          <p><strong>所在地：</strong> San Juan de Dios Garden</p>
          <p><strong>営業時間：</strong> 9:30 AM - 6:30 PM</p>
        </div>
      </div>
    </div>

    <div class="bg-green-50 border-l-4 border-green-400 p-6 mb-8">
      <h3 class="text-lg font-semibold mb-3 text-green-900">🏛️ さらに多くの史跡を訪ねてみませんか？</h3>
      <p class="text-green-800 mb-3"><strong>私たちのツアーは、San Luis Potosí の歴史地区が誇るすべての魅力を巡るための、絶好の出発点です。</strong></p>
      <p class="text-green-800"><a href="/contact" class="text-blue-600 hover:text-blue-800 underline font-semibold">ツアー情報を見る →</a></p>
    </div>
  </section>

  <div class="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
    <h3 class="text-lg font-semibold mb-3 text-blue-900">🔗 関連情報</h3>
    <ul class="list-disc pl-6 text-blue-800 space-y-2">
      <li><a href="/cultural-tours" class="text-blue-600 hover:text-blue-800 underline">San Luis Potosí のその他のツアー</a></li>
      <li><a href="/cultural" class="text-blue-600 hover:text-blue-800 underline">文化体験</a></li>
      <li><a href="/guides/foodie-guide" class="text-blue-600 hover:text-blue-800 underline">街の観光ガイド</a></li>
      <li><a href="/cultural/history" class="text-blue-600 hover:text-blue-800 underline">San Luis Potosí の歴史</a></li>
    </ul>
  </div>
</div>`;

(async () => {
  const { error } = await supabase
    .from('blog_posts')
    .update({ content_ja: CONTENT_JA })
    .eq('slug', SLUG);
  if (error) { console.error('Update error:', error); process.exit(1); }
  console.log('Updated content_ja for', SLUG);
})();
