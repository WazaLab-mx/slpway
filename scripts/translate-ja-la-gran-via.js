// Idempotent: writes ONLY content_ja for the "la-gran-via" restaurant post.
// Native Japanese translation of the English body. Does NOT touch content_de.
require('dotenv').config({ path: '.env' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const SLUG = 'la-gran-via';

const CONTENT_JA = `<div class="bg-yellow-50 p-6 rounded-lg mb-8">
  <h2 class="text-xl font-semibold mb-4">La Gran Vía を知る</h2>
  <ul class="list-disc pl-6">
    <li><a href="#historia" class="text-blue-600 hover:text-blue-800">私たちの歴史</a></li>
    <li><a href="#excelencia-culinaria" class="text-blue-600 hover:text-blue-800">料理へのこだわり</a></li>
    <li><a href="#especialidades" class="text-blue-600 hover:text-blue-800">おすすめの一品</a></li>
    <li><a href="#reconocimientos" class="text-blue-600 hover:text-blue-800">受賞と評価</a></li>
    <li><a href="#visitanos" class="text-blue-600 hover:text-blue-800">ご来店案内</a></li>
  </ul>
</div>

<div class="prose prose-lg max-w-none">
  <p class="text-lg text-gray-700 mb-8"><strong>36年以上にわたって受け継がれてきたスペイン料理の伝統を、La Gran Vía でご堪能ください。当店はメキシコで「訪れるべき100の場所」の一つに選ばれています。San Luis Potosí ならではの地元の風味を添えた、本格スペイン料理をお楽しみいただけます。</strong></p>

  <div class="bg-blue-50 p-6 rounded-lg mb-8">
    <h3 class="text-lg font-semibold mb-4 text-blue-900">La Gran Vía のポイント</h3>
    <ul class="list-disc pl-6 space-y-2">
      <li><strong>36年の実績</strong>：1979年から続く料理の伝統</li>
      <li><strong>全国的な評価</strong>：メキシコで訪れるべき100の場所の一つ</li>
      <li><strong>本格的な料理</strong>：地元の食材で仕上げる本場スペインのレシピ</li>
      <li><strong>絶好の立地</strong>：San Luis Potosí の中心部に位置</li>
    </ul>
  </div>

  <section id="historia" class="mb-12">
    <h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">🏛️ 私たちの歴史</h2>
    <p class="text-gray-700 mb-6">1979年に創業した La Gran Vía は、36年以上にわたり San Luis Potosí におけるスペイン料理の礎であり続けてきました。私たちの歩みは、本場スペインの美食への情熱から始まり、伝統と革新を見事に調和させる料理の名店へと成長してきました。</p>

    <div class="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
      <p class="text-green-800 font-medium">✅ 幾十年にもわたり料理へのこだわりを貫いてきたことで、私たちはお客様の心と味覚のなかに確かな居場所を築き、この地域でもっとも信頼されるスペイン料理店の一つとなりました。</p>
    </div>
  </section>

  <section id="excelencia-culinaria" class="mb-12">
    <h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">👨‍🍳 料理へのこだわり</h2>
    <p class="text-gray-700 mb-6">La Gran Vía では、品質と本格さへの揺るぎない姿勢を大切にしています。私たちの厨房では、本場スペインのレシピと、厳選した地元の食材を組み合わせ、地中海の風味と San Luis Potosí の高原地帯が育んだ豊かな食文化とが織りなす、他にはない融合を生み出しています。</p>

    <div class="bg-blue-50 p-6 rounded-lg mb-6">
      <h4 class="font-semibold mb-3 text-blue-900">🍽️ 私たちのお約束</h4>
      <ul class="list-disc pl-6 text-blue-800 space-y-1">
        <li>どの一皿にも、新鮮で上質な食材を</li>
        <li>地元の風味を取り入れた本場スペインのレシピ</li>
        <li>丁寧に選び抜いたワインのラインナップ</li>
        <li>格別の美食体験</li>
      </ul>
    </div>
  </section>

  <section id="especialidades" class="mb-12">
    <h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">🍽️ おすすめの一品</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
      <div class="bg-blue-50 p-6 rounded-lg">
        <h3 class="text-xl font-semibold mb-4 text-blue-900">🇪🇸 スペイン料理</h3>
        <p class="text-blue-800 mb-3">地中海の風味の真髄を映し出す、本場スペインのレシピ</p>
        <ul class="list-disc pl-6 space-y-2 text-blue-700">
          <li>伝統的なパエリア（paella）</li>
          <li>スペイン各地の郷土料理</li>
          <li>地中海にインスパイアされた料理</li>
        </ul>
      </div>

      <div class="bg-green-50 p-6 rounded-lg">
        <h3 class="text-xl font-semibold mb-4 text-green-900">🌮 地元との融合</h3>
        <p class="text-green-800 mb-3">スペイン料理と San Luis Potosí の風味を掛け合わせた、創意あふれる一皿</p>
        <ul class="list-disc pl-6 space-y-2 text-green-700">
          <li>この土地に合わせたアレンジ</li>
          <li>地元の食材を使った特別料理</li>
          <li>他にはない融合料理</li>
        </ul>
      </div>
    </div>

    <div class="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
      <h4 class="font-semibold text-yellow-800 mb-2">🍷 ソムリエからの一言：</h4>
      <p class="text-yellow-800">丁寧に選び抜いた当店のワインリストには、スペイン産と世界各国のワインを取り揃えており、お食事とのペアリングに最適です。</p>
    </div>
  </section>

  <section id="reconocimientos" class="mb-12">
    <h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">🏆 受賞と評価</h2>

    <div class="bg-gradient-to-r from-yellow-50 to-orange-50 p-8 rounded-lg mb-6">
      <div class="text-center">
        <h3 class="text-2xl font-bold mb-4 text-orange-900">🥇 メキシコで訪れるべき100の場所</h3>
        <p class="text-lg text-orange-800 mb-4">2017年、La Gran Vía は美食部門において、メキシコで「訪れるべき100の場所」の一つに選ばれるという栄誉ある評価を受けました。</p>
        <div class="bg-white p-4 rounded-lg inline-block">
          <p class="text-orange-900 font-semibold">これは、料理へのこだわりと格別の美食体験を追求してきた私たちの姿勢の証です。</p>
        </div>
      </div>
    </div>
  </section>

  <section id="visitanos" class="mb-12">
    <h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">📍 ご来店案内</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
      <div class="bg-white border border-gray-200 rounded-lg p-6">
        <h3 class="text-xl font-semibold mb-4 text-gray-900">📞 所在地とお問い合わせ</h3>
        <ul class="space-y-3 text-gray-700">
          <li><strong>住所：</strong> Av. Venustiano Carranza #560, 78233 San Luis Potosí</li>
          <li><strong>電話：</strong> <a href="tel:4448122899" class="text-blue-600 hover:text-blue-800">444 812 2899</a></li>
          <li><strong>メール：</strong> <a href="mailto:contacto@lagranviaslp.com" class="text-blue-600 hover:text-blue-800">contacto@lagranviaslp.com</a></li>
        </ul>
      </div>

      <div class="bg-white border border-gray-200 rounded-lg p-6">
        <h3 class="text-xl font-semibold mb-4 text-gray-900">🍽️ 営業時間</h3>
        <div class="space-y-2 text-gray-700">
          <p><strong>月曜日〜日曜日：</strong> 13:00 - 23:00</p>
          <p><strong>ご予約：</strong> 週末はご予約をおすすめします</p>
          <p><strong>貸切イベント：</strong> ご相談に応じて承ります</p>
        </div>
      </div>
    </div>

    <div class="bg-green-50 border-l-4 border-green-400 p-6 mb-8">
      <h3 class="text-lg font-semibold mb-3 text-green-900">🍴 La Gran Vía を体験する</h3>
      <p class="text-green-800 mb-3">San Luis Potosí で味わう最高峰のスペイン料理を、ぜひご体験ください。一度のご来店ごとに、味覚を喜ばせ、心に残るひとときをお届けする、特別な美食の旅をお約束します。</p>
      <p class="text-green-800"><a href="/contact" class="text-blue-600 hover:text-blue-800 underline font-semibold">お問い合わせ・ご予約はこちら →</a></p>
    </div>
  </section>

  <div class="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
    <h3 class="text-lg font-semibold mb-3 text-blue-900">🔗 関連リンク</h3>
    <ul class="list-disc pl-6 text-blue-800 space-y-2">
      <li><a href="/places/la-gran-via" class="text-blue-600 hover:text-blue-800 underline">La Gran Vía の詳細ページ</a></li>
      <li><a href="/restaurants" class="text-blue-600 hover:text-blue-800 underline">San Luis Potosí のその他のレストラン</a></li>
      <li><a href="/guides/foodie-guide" class="text-blue-600 hover:text-blue-800 underline">街のグルメガイド</a></li>
    </ul>
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

  const countTags = (s) => (String(s || '').match(/<[a-zA-Z\/][^>]*>/g) || []).length;
  const enTags = countTags(check.content);
  const jaTags = countTags(check.content_ja);
  const deUnchanged = check.content_de === data.content_de;

  console.log('content_ja non-empty:', (check.content_ja || '').length > 0);
  console.log('content_ja !== content:', check.content_ja !== check.content);
  console.log('EN tag count:', enTags, '| JA tag count:', jaTags, '| match:', enTags === jaTags);
  console.log('content_de UNCHANGED:', deUnchanged);
  process.exit(enTags === jaTags && deUnchanged && check.content_ja !== check.content ? 0 : 1);
}

main();
