// Idempotent: fills content_ja for blog post `corazon-de-xoconostle` with a
// native Japanese translation. Updates ONLY content_ja by slug; verifies by
// re-fetch. Does NOT touch content_de or any other column.
require('dotenv').config({ path: '.env' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const SLUG = 'corazon-de-xoconostle';

const CONTENT_JA = `<div class="bg-yellow-50 p-6 rounded-lg mb-8">
  <h2 class="text-xl font-semibold mb-4">このアドベンチャーガイドの内容</h2>
  <ul class="list-disc pl-6">
    <li><a href="#about-corazon" class="text-blue-600 hover:text-blue-800">Corazón de Xoconostle について</a></li>
    <li><a href="#featured-destinations" class="text-blue-600 hover:text-blue-800">おすすめの目的地</a></li>
    <li><a href="#upcoming-experiences" class="text-blue-600 hover:text-blue-800">これからの体験ツアー</a></li>
    <li><a href="#our-experience" class="text-blue-600 hover:text-blue-800">私たちの実績</a></li>
    <li><a href="#how-to-book" class="text-blue-600 hover:text-blue-800">ご予約方法</a></li>
  </ul>
</div>

<div class="prose prose-lg max-w-none">
  <p class="text-lg text-gray-700 mb-8"><strong>サン・ルイス・ポトシを代表するアドベンチャーツーリズム会社をご紹介します。ガイド付きツアー、アウトドア体験、そしてメキシコで最も美しい絶景をめぐる忘れられない旅をお届けします。</strong></p>

  <div class="bg-blue-50 p-6 rounded-lg mb-8">
    <h3 class="text-lg font-semibold mb-4 text-blue-900">Corazón de Xoconostle の要点</h3>
    <ul class="list-disc pl-6 space-y-2">
      <li><strong>10年以上の経験</strong>：2014年に創業し、アドベンチャーツーリズムひと筋10年以上の実績</li>
      <li><strong>公認ガイド</strong>：公式認定を持つ地元の専門家</li>
      <li><strong>ここだけの目的地</strong>：Real de Catorce、Huasteca Potosina、Sierra de San Miguelito</li>
      <li><strong>自然への情熱</strong>：ロッククライミング、ハイキング、そして本物の文化体験</li>
    </ul>
  </div>

  <section id="about-corazon" class="mb-12">
    <h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">🌵 Corazón de Xoconostle について</h2>
    <p class="text-gray-700 mb-6">2014年に創業した Corazón de Xoconostle は、地元のホスピタリティ事業から出発し、いまやサン・ルイス・ポトシを代表するアドベンチャーツーリズム会社へと成長しました。10年にわたる経験を積んだ私たちの公認ガイドと旅の専門家は、冒険と文化、そして自然の美しさを融合させた、忘れられないアウトドア体験づくりを得意としています。</p>

    <div class="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
      <p class="text-green-800 font-medium">✅ 自然への情熱、ロッククライミングやハイキングといったアウトドアアクティビティ、そして地元文化との深いつながり。これらが原動力となり、私たちはこの地域が誇る自然と文化遺産のすばらしい豊かさを皆さまにお伝えしています。</p>
    </div>

    <div class="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
      <h4 class="font-semibold text-yellow-800 mb-2">💡 冒険への想い：</h4>
      <p class="text-yellow-800">「私たちは単に場所をご案内するのではなく、その土地の魂を感じていただくお手伝いをしています」と、創業者の一人は語ります。私たちが生み出したすべてのルートには、私たち自身の物語のかけらが息づいており、サン・ルイス・ポトシの本物の魂とつながりたいと願う旅人へと受け継がれています。</p>
    </div>
  </section>

  <section id="featured-destinations" class="mb-12">
    <h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">🏔️ おすすめの目的地</h2>

    <div class="space-y-6">
      <div class="bg-white border-l-4 border-blue-500 shadow-sm rounded-lg p-6">
        <h3 class="text-xl font-semibold mb-3 text-blue-900">1. Real de Catorce</h3>
        <p class="text-gray-700 mb-3">ポトシ高原のシエラに位置する魔法のような町。石畳の街並みと豊かな鉱山の歴史で知られています。</p>
        <div class="bg-blue-50 p-4 rounded-lg">
          <h4 class="font-semibold mb-2 text-blue-800">🚙 人気のアクティビティ：</h4>
          <ul class="list-disc pl-6 text-blue-700">
            <li>4x4 ウィリージープツアー</li>
            <li>文化ウォーキングツアー</li>
            <li>歴史スポットめぐり</li>
            <li>神秘的でスピリチュアルな体験</li>
          </ul>
        </div>
      </div>

      <div class="bg-white border-l-4 border-green-500 shadow-sm rounded-lg p-6">
        <h3 class="text-xl font-semibold mb-3 text-green-900">2. Huasteca Potosina</h3>
        <p class="text-gray-700 mb-3">息をのむような滝、川、そして生い茂る緑の風景が広がる自然の楽園。手つかずの自然とのふれあいをお楽しみいただけます。</p>
        <div class="bg-green-50 p-4 rounded-lg">
          <h4 class="font-semibold mb-2 text-green-800">💧 人気のアクティビティ：</h4>
          <ul class="list-disc pl-6 text-green-700">
            <li>タムル滝</li>
            <li>ラペリング（懸垂下降）</li>
            <li>水辺のアクティビティ</li>
            <li>セノーテ探検</li>
          </ul>
        </div>
      </div>

      <div class="bg-white border-l-4 border-yellow-500 shadow-sm rounded-lg p-6">
        <h3 class="text-xl font-semibold mb-3 text-yellow-900">3. Sierra de San Miguelito</h3>
        <p class="text-gray-700 mb-3">ハイキングやアウトドアの冒険にぴったりの美しい山並み。地元の自然とのふれあいに最適です。</p>
        <div class="bg-yellow-50 p-4 rounded-lg">
          <h4 class="font-semibold mb-2 text-yellow-800">⛰️ 人気のアクティビティ：</h4>
          <ul class="list-disc pl-6 text-yellow-700">
            <li>ハイキング・トレッキング</li>
            <li>ロッククライミング</li>
            <li>マウンテンバイク</li>
            <li>動植物の観察</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section id="upcoming-experiences" class="mb-12">
    <h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">🎯 これからの体験ツアー</h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      <div class="bg-blue-50 p-6 rounded-lg">
        <h3 class="text-lg font-semibold mb-3 text-blue-900">🌅 日帰りツアー</h3>
        <p class="text-blue-800 mb-3">時間をかけずに冒険を楽しみたい方にぴったり</p>
        <ul class="text-sm text-blue-700 space-y-1">
          <li>• Real de Catorce エクスプレス</li>
          <li>• Sierra de San Miguelito</li>
          <li>• 地元の文化体験</li>
        </ul>
      </div>

      <div class="bg-green-50 p-6 rounded-lg">
        <h3 class="text-lg font-semibold mb-3 text-green-900">🏕️ 宿泊アドベンチャー</h3>
        <p class="text-green-800 mb-3">ポトシの自然にどっぷり浸る体験</p>
        <ul class="text-sm text-green-700 space-y-1">
          <li>• Huasteca Potosina 2〜3日間</li>
          <li>• クライミング遠征</li>
          <li>• アドベンチャーキャンプ</li>
        </ul>
      </div>

      <div class="bg-yellow-50 p-6 rounded-lg">
        <h3 class="text-lg font-semibold mb-3 text-yellow-900">👥 カスタマイズツアー</h3>
        <p class="text-yellow-800 mb-3">お客さまそれぞれのご興味に合わせて設計</p>
        <ul class="text-sm text-yellow-700 space-y-1">
          <li>• 企業グループ</li>
          <li>• お子さま連れのご家族</li>
          <li>• 上級アドベンチャー派の方</li>
        </ul>
      </div>
    </div>
  </section>

  <section id="our-experience" class="mb-12">
    <h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">🏆 私たちの実績と認定資格</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
      <div class="bg-white border border-gray-200 rounded-lg p-6">
        <h3 class="text-xl font-semibold mb-4 text-gray-900">📜 公式認定資格</h3>
        <ul class="space-y-3 text-gray-700">
          <li class="flex items-center">
            <span class="text-green-600 mr-2">✓</span>
            <span>NOM-09-TUR-2002 認定ガイド</span>
          </li>
          <li class="flex items-center">
            <span class="text-green-600 mr-2">✓</span>
            <span>NOM-011-TUR-2017 認証</span>
          </li>
          <li class="flex items-center">
            <span class="text-green-600 mr-2">✓</span>
            <span>観光省への登録</span>
          </li>
          <li class="flex items-center">
            <span class="text-green-600 mr-2">✓</span>
            <span>賠償責任保険への加入</span>
          </li>
        </ul>
      </div>

      <div class="bg-white border border-gray-200 rounded-lg p-6">
        <h3 class="text-xl font-semibold mb-4 text-gray-900">🎯 得意分野</h3>
        <ul class="space-y-3 text-gray-700">
          <li class="flex items-center">
            <span class="text-blue-600 mr-2">🧗</span>
            <span>ロッククライミング・ラペリング</span>
          </li>
          <li class="flex items-center">
            <span class="text-blue-600 mr-2">🥾</span>
            <span>ハイキング・トレッキング</span>
          </li>
          <li class="flex items-center">
            <span class="text-blue-600 mr-2">🌊</span>
            <span>水辺のアクティビティ</span>
          </li>
          <li class="flex items-center">
            <span class="text-blue-600 mr-2">🏛️</span>
            <span>文化・歴史ツーリズム</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg">
      <blockquote class="border-l-4 border-blue-300 pl-4 italic text-gray-700">
        <p class="mb-2">「Corazón de Xoconostle は単にツアーを企画するだけではありません。旅人とサン・ルイス・ポトシの魂との間に、本物のつながりを生み出してくれます。冒険への情熱と自然への敬意が、一つひとつの体験に映し出されています。」</p>
        <cite class="text-sm text-blue-600">— 常連の冒険者より</cite>
      </blockquote>
    </div>
  </section>

  <section id="how-to-book" class="mb-12">
    <h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">📞 冒険をはじめましょう</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
      <div class="bg-white border border-gray-200 rounded-lg p-6">
        <h3 class="text-xl font-semibold mb-4 text-gray-900">📍 お問い合わせ先</h3>
        <p class="text-gray-700 mb-4">サン・ルイス・ポトシ歴史地区にある私たちのオフィスへお越しいただくか、さまざまな方法でお気軽にご連絡ください：</p>
        <ul class="space-y-3 text-gray-700">
          <li><strong>住所：</strong> Independencia 1585, Barrio de San Miguelito</li>
          <li><strong>WhatsApp：</strong> <a href="https://wa.me/524446571872" target="_blank" class="text-blue-600 hover:text-blue-800">+52 1 444 657 1872</a></li>
          <li><strong>メール：</strong> <a href="mailto:info@corazondexoconostle.com" class="text-blue-600 hover:text-blue-800">info@corazondexoconostle.com</a></li>
        </ul>
      </div>

      <div class="bg-white border border-gray-200 rounded-lg p-6">
        <h3 class="text-xl font-semibold mb-4 text-gray-900">🎒 体験を予約する</h3>
        <p class="text-gray-700 mb-4">出かける準備はできましたか？ 私たちのウェブサイトをご覧いただくか、直接ご連絡いただき、次の冒険をご予約ください。</p>
        <div class="space-y-3">
          <p class="text-sm text-gray-600"><strong>日帰りツアー：</strong> 24時間前までにご予約ください</p>
          <p class="text-sm text-gray-600"><strong>遠征ツアー：</strong> 1週間前までにご予約ください</p>
          <p class="text-sm text-gray-600"><strong>グループ：</strong> ご希望の日程で空き状況をお問い合わせください</p>
        </div>
      </div>
    </div>

    <div class="bg-green-50 border-l-4 border-green-400 p-6 mb-8">
      <h3 class="text-lg font-semibold mb-3 text-green-900">🌟 冒険の計画にお手伝いが必要ですか？</h3>
      <p class="text-green-800 mb-3"><strong>私たちのアドベンチャーツーリズムの専門家が、お客さまのご興味や経験レベルに合わせて、最適な体験を設計いたします。</strong></p>
      <p class="text-green-800"><a href="/contact" class="text-blue-600 hover:text-blue-800 underline font-semibold">アドベンチャー専門家に相談する →</a></p>
    </div>
  </section>

  <div class="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
    <h3 class="text-lg font-semibold mb-3 text-blue-900">🔗 関連リンク</h3>
    <ul class="list-disc pl-6 space-y-2 text-blue-800">
      <li><a href="/blog/ultimate-guide-living-san-luis-potosi-expat" class="text-blue-600 hover:text-blue-800 underline">駐在員として SLP で暮らす完全ガイド</a></li>
      <li><a href="https://www.corazondexoconostle.com" target="_blank" class="text-blue-600 hover:text-blue-800 underline">Corazón de Xoconostle 公式ウェブサイト</a></li>
      <li><a href="/blog/san-luis-potosi-mining-history-baroque-architecture-cultural-legacy" class="text-blue-600 hover:text-blue-800 underline">SLP の鉱山の歴史と文化遺産</a></li>
      <li><a href="https://www.visitmexico.com/san-luis-potosi" target="_blank" class="text-blue-600 hover:text-blue-800 underline">Visit Mexico - San Luis Potosí</a></li>
    </ul>
  </div>

</div>`;

// Count HTML tags to compare EN vs JA structure.
function tagCounts(html) {
  const tags = (html.match(/<[^>]+>/g) || []);
  const open = {};
  for (const t of tags) {
    const m = t.match(/^<\/?\s*([a-zA-Z0-9]+)/);
    if (!m) continue;
    const name = m[1].toLowerCase();
    open[name] = (open[name] || 0) + 1;
  }
  return { total: tags.length, byName: open };
}

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

  const deBefore = data.content_de;

  const { error: upErr } = await supabase
    .from('blog_posts')
    .update({ content_ja: CONTENT_JA })
    .eq('id', data.id);
  if (upErr) {
    console.error('UPDATE ERROR:', upErr.message);
    process.exit(1);
  }

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

  let ok = true;
  const ja = check.content_ja || '';
  const en = check.content || '';

  if (!ja) { console.error('FAIL: content_ja is empty'); ok = false; }
  if (ja === en) { console.error('FAIL: content_ja equals content (EN)'); ok = false; }
  if (check.content_de !== deBefore) { console.error('FAIL: content_de changed'); ok = false; }

  // Leftover-English heuristic: no sentence-y ASCII words remaining outside of
  // preserved brand/proper nouns, tags, hrefs, class names.
  const enTag = tagCounts(en);
  const jaTag = tagCounts(ja);
  console.log('EN tag total:', enTag.total, '| JA tag total:', jaTag.total);
  const allNames = new Set([...Object.keys(enTag.byName), ...Object.keys(jaTag.byName)]);
  let tagMismatch = false;
  for (const n of allNames) {
    if ((enTag.byName[n] || 0) !== (jaTag.byName[n] || 0)) {
      tagMismatch = true;
      console.error(`  TAG MISMATCH <${n}>: EN ${enTag.byName[n] || 0} vs JA ${jaTag.byName[n] || 0}`);
    }
  }
  if (tagMismatch) ok = false; else console.log('Tag counts match by name.');

  // href integrity: every EN href must appear in JA identical.
  const hrefs = (en.match(/href="[^"]*"/g) || []);
  for (const h of hrefs) {
    if (!ja.includes(h)) { console.error('  HREF MISSING in JA:', h); ok = false; }
  }
  console.log('Checked hrefs:', hrefs.length);

  console.log('content_de unchanged:', check.content_de === deBefore);
  console.log('content_ja length:', ja.length);
  console.log(ok ? '\nVERIFIED OK' : '\nVERIFICATION FAILED');
  process.exit(ok ? 0 : 1);
}

main();
