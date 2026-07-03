// Idempotent: fills content_ja for the post `navigating-mexican-immigration-system-slp`
// with a native Japanese translation of the EN body. Updates ONLY content_ja by slug.
// Verifies by re-fetch. Does NOT touch content/content_es/content_de.
require('dotenv').config({ path: '.env' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const SLUG = 'navigating-mexican-immigration-system-slp';

const contentJa = `<!--
BLOG POST METADATA
==================
Title: The Bureaucracy Challenge: How to Navigate Mexico's Immigration System from SLP
Slug: navegando-sistema-inmigracion-mexicana-slp
Category: Expat Life
Tags: immigration, visa, residency, INM, bureaucracy, legal, expat guide, documentation
Excerpt: A comprehensive guide to understanding and successfully navigating Mexico's immigration system from San Luis Potosí. From tourist visas to permanent residency, learn the processes, requirements, and insider tips to make your immigration journey smoother.
Image: /images/blog/immigration-mexico-slp.jpg
-->

<!-- Last Updated Badge -->
<div class="not-prose mb-8 bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200 rounded-2xl p-6">
  <div class="flex flex-wrap items-center justify-between gap-4">
    <div class="flex items-center gap-3">
      <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      </div>
      <div>
        <p class="text-sm font-medium text-gray-600">検証・更新済み</p>
        <p class="text-lg font-bold text-gray-900">2025年12月</p>
      </div>
    </div>
    <div class="flex items-center gap-4 text-sm">
      <div class="flex items-center gap-2">
        <span class="w-3 h-3 bg-green-500 rounded-full"></span>
        <span class="text-gray-700"><strong>15+</strong> 件の公式情報源</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="w-3 h-3 bg-blue-500 rounded-full"></span>
        <span class="text-gray-700"><strong>駐在者</strong> による確認済み</span>
      </div>
    </div>
  </div>
</div>

<!-- TABLE OF CONTENTS - Hardcoded at Top -->
<nav class="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl mb-10 border border-yellow-200 shadow-sm">
  <div class="flex items-center gap-3 mb-6">
    <div class="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center">
      <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"/>
      </svg>
    </div>
    <h2 class="text-2xl font-bold text-gray-900">目次</h2>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
    <div class="space-y-3">
      <a href="#understanding-the-system" class="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors group">
        <span class="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold group-hover:bg-blue-600 group-hover:text-white transition-colors">1</span>
        <span>メキシコの移民制度を理解する</span>
      </a>
      <a href="#visa-types" class="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors group">
        <span class="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold group-hover:bg-blue-600 group-hover:text-white transition-colors">2</span>
        <span>ビザと在留許可の種類</span>
      </a>
      <a href="#inm-slp" class="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors group">
        <span class="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold group-hover:bg-blue-600 group-hover:text-white transition-colors">3</span>
        <span>San Luis Potosí の INM 事務所</span>
      </a>
      <a href="#documentation" class="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors group">
        <span class="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold group-hover:bg-blue-600 group-hover:text-white transition-colors">4</span>
        <span>必要書類と要件</span>
      </a>
      <a href="#step-by-step" class="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors group">
        <span class="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold group-hover:bg-blue-600 group-hover:text-white transition-colors">5</span>
        <span>手続きのステップバイステップガイド</span>
      </a>
    </div>
    <div class="space-y-3">
      <a href="#common-challenges" class="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors group">
        <span class="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold group-hover:bg-blue-600 group-hover:text-white transition-colors">6</span>
        <span>よくある課題と解決策</span>
      </a>
      <a href="#costs-timeline" class="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors group">
        <span class="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold group-hover:bg-blue-600 group-hover:text-white transition-colors">7</span>
        <span>費用と所要期間の目安</span>
      </a>
      <a href="#tips-success" class="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors group">
        <span class="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold group-hover:bg-blue-600 group-hover:text-white transition-colors">8</span>
        <span>成功のための実践的なヒント</span>
      </a>
      <a href="#faq" class="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors group">
        <span class="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold group-hover:bg-blue-600 group-hover:text-white transition-colors">9</span>
        <span>よくある質問</span>
      </a>
      <a href="#resources" class="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors group">
        <span class="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold group-hover:bg-blue-600 group-hover:text-white transition-colors">10</span>
        <span>公式リソースと連絡先</span>
      </a>
    </div>
  </div>
</nav>

<!-- Introduction -->
<p class="text-xl text-gray-700 mb-8 leading-relaxed"><strong>メキシコへの移住はわくわくする冒険ですが、移民制度をくぐり抜けるのは、目隠しをしたまま迷路の中でマラソンを走るような気分になることがあります。</strong>San Luis Potosí を新たな住まいにしようと計画しているなら、スムーズに移り住むために、この官僚制度の全体像を理解しておくことが欠かせません。本ガイドでは、合法的な在留資格の取得、Instituto Nacional de Migración（INM）とのやり取り、そして多くの駐在者がつまずきがちなよくある落とし穴を避ける方法まで、知っておくべきことを分かりやすく解説します。</p>

<p class="text-gray-700 mb-8">リモートワーカーであれ、退職者であれ、あるいはメキシコで最も暮らしやすい都市の一つで新たなスタートを切りたい方であれ、この総合ガイドがあらゆるステップをひとつずつご案内します。SLP の魅力についてさらに知りたい方は、<a href="/expat-guide" class="text-blue-600 hover:text-blue-800 underline font-medium">総合駐在者ガイド</a>と<a href="/living-guide" class="text-blue-600 hover:text-blue-800 underline font-medium">生活ガイド</a>もぜひご覧ください。</p>

<!-- Key Points Box -->
<div class="bg-blue-50 p-6 rounded-lg mb-10">
  <h3 class="text-lg font-semibold mb-4 text-blue-900">重要ポイント</h3>
  <ul class="list-disc pl-6 space-y-2">
    <li><strong>領事館から始める</strong>：ほとんどの在留ビザは、母国のメキシコ領事館で申請を開始する必要があります</li>
    <li><strong>30日間の猶予</strong>：事前承認済みのビザでメキシコに入国したら、INM での手続きを完了するまでに30日間の猶予があります</li>
    <li><strong>忍耐が肝心</strong>：処理期間は大きく変動することがあります——余裕をもって計画しましょう</li>
    <li><strong>書類がものを言う</strong>：完全で整理された書類を揃えているかどうかが、申請の成否を左右します</li>
    <li><strong>地元の INM</strong>：San Luis Potosí には、ほとんどの移民手続きを処理できる、機能の整った INM 事務所があります</li>
  </ul>
</div>

<!-- Section 1: Understanding the System -->
<section id="understanding-the-system" class="mb-12 scroll-mt-8">
  <h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">メキシコの移民制度を理解する</h2>

  <p class="text-gray-700 mb-6">メキシコの移民制度は、Secretaría de Gobernación（内務省）傘下の連邦機関である<strong>Instituto Nacional de Migración（INM）</strong>が運営しています。この制度は最初は複雑に見えるかもしれませんが、その仕組みを理解すれば、より効率的に手続きを進められます。</p>

  <div class="bg-gray-50 border-l-4 border-gray-400 p-6 mb-6">
    <h4 class="font-semibold mb-3 text-gray-900">2段階の手続き</h4>
    <p class="text-gray-700 mb-3">ほとんどの在留ビザについて、メキシコは<strong>2段階の手続き</strong>を採用しています：</p>
    <ol class="list-decimal pl-6 text-gray-700 space-y-2">
      <li><strong>領事館フェーズ</strong>：国外のメキシコ領事館で申請し、事前承認を受けます</li>
      <li><strong>INM フェーズ</strong>：メキシコに入国したら、地元の INM 事務所で手続きを完了し、実際の在留カードを受け取ります</li>
    </ol>
  </div>

  <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
    <h4 class="font-semibold text-yellow-800 mb-2">重要な注記：</h4>
    <p class="text-yellow-800">領事館でパスポートに貼付されるビザのステッカーは、在留カードではありません——あくまでメキシコに入国し、INM の手続きを開始するための許可にすぎません。第2段階は、入国後30暦日以内に完了する必要があります。</p>
  </div>

  <h3 class="text-2xl font-semibold mb-4 text-blue-900">法的枠組み</h3>

  <p class="text-gray-700 mb-4">メキシコの移民法は、次の法令によって定められています：</p>

  <ul class="list-disc pl-6 text-gray-700 mb-6 space-y-2">
    <li><strong>Ley de Migración (2011)</strong>：ビザの区分と要件を定める、移民に関する基本法</li>
    <li><strong>Reglamento de la Ley de Migración</strong>：この法律を施行するための詳細な規則</li>
    <li><strong>Lineamientos</strong>：より頻繁に変更されうる行政上のガイドライン</li>
  </ul>

  <div class="bg-blue-50 p-6 rounded-lg mb-6">
    <h4 class="font-semibold mb-3 text-blue-900">これがあなたにとって重要な理由</h4>
    <p class="text-blue-800">移民局の職員は、これらの法令を厳格に運用します。申請の法的根拠を理解しておくと、適切な書類を準備でき、問題が生じた場合に自分の主張を説明するのにも役立ちます。要件は「lineamientos」によって変わることがあるため、申請前には必ず最新の要件を確認してください。</p>
  </div>
</section>

<!-- Section 2: Visa Types -->
<section id="visa-types" class="mb-12 scroll-mt-8">
  <h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">ビザと在留許可の種類</h2>

  <p class="text-gray-700 mb-6">メキシコには、状況や目的に応じたいくつかの在留資格があります。主な区分は次のとおりです：</p>

  <!-- Visa Comparison Table -->
  <div class="overflow-x-auto mb-8">
    <table class="min-w-full bg-white border border-gray-200 rounded-lg">
      <thead class="bg-gray-50">
        <tr>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">在留資格</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">有効期間</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">就労の可否</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">向いている人</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-200">
        <tr>
          <td class="px-6 py-4 text-sm font-medium text-gray-900">観光（FMM）</td>
          <td class="px-6 py-4 text-sm text-gray-500">最長180日</td>
          <td class="px-6 py-4 text-sm text-gray-500">不可</td>
          <td class="px-6 py-4 text-sm text-gray-500">短期滞在・下見</td>
        </tr>
        <tr class="bg-gray-50">
          <td class="px-6 py-4 text-sm font-medium text-gray-900">Temporary Resident</td>
          <td class="px-6 py-4 text-sm text-gray-500">1〜4年</td>
          <td class="px-6 py-4 text-sm text-gray-500">許可があれば可</td>
          <td class="px-6 py-4 text-sm text-gray-500">リモートワーカー、様子を見たい退職者</td>
        </tr>
        <tr>
          <td class="px-6 py-4 text-sm font-medium text-gray-900">Temporary Resident Student</td>
          <td class="px-6 py-4 text-sm text-gray-500">就学期間</td>
          <td class="px-6 py-4 text-sm text-gray-500">限定的</td>
          <td class="px-6 py-4 text-sm text-gray-500">フルタイムの学生</td>
        </tr>
        <tr class="bg-gray-50">
          <td class="px-6 py-4 text-sm font-medium text-gray-900">Permanent Resident</td>
          <td class="px-6 py-4 text-sm text-gray-500">無期限</td>
          <td class="px-6 py-4 text-sm text-gray-500">可</td>
          <td class="px-6 py-4 text-sm text-gray-500">長期居住者、退職者</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Detailed Visa Breakdown -->
  <div class="space-y-8">
    <!-- Tourist Visa -->
    <div class="bg-white border-l-4 border-blue-500 shadow-sm rounded-lg p-6">
      <h3 class="text-xl font-semibold mb-3 text-blue-900">観光ステータス（FMM）</h3>
      <p class="text-gray-700 mb-3">Forma Migratoria Múltiple（FMM）により、多くの国の国民はビザなしで最長180日間メキシコに入国できます。ただし、国境の移民局職員は、その裁量で7日から180日までの範囲で滞在日数を付与します。</p>
      <div class="bg-red-50 border-l-4 border-red-400 p-4 mt-4">
        <p class="text-red-800"><strong>警告：</strong>観光ビザでは合法的に就労できません。これはメキシコ国外のクライアント向けのリモートワークも含みます。取り締まりはまれですが、厳密には法律違反です。</p>
      </div>
    </div>

    <!-- Temporary Resident -->
    <div class="bg-white border-l-4 border-green-500 shadow-sm rounded-lg p-6">
      <h3 class="text-xl font-semibold mb-3 text-green-900">Temporary Resident（一時居住者）</h3>
      <p class="text-gray-700 mb-3">これは駐在者にとって最も一般的なルートです。1〜4年の期間で付与され、更新が可能です。連続して4年が経過すると、permanent residency（永住権）を申請できます。</p>
      <h4 class="font-semibold mt-4 mb-2">取得できる主な条件：</h4>
      <ul class="list-disc pl-6 text-gray-600 space-y-1">
        <li><strong>経済的支払能力</strong>：十分な収入または貯蓄があることを証明する</li>
        <li><strong>就労</strong>：メキシコ企業からの雇用オファーがある</li>
        <li><strong>家族の結合</strong>：配偶者または親がメキシコ国民または居住者である</li>
        <li><strong>不動産所有</strong>：一定額を超えるメキシコ国内の不動産を所有している</li>
        <li><strong>投資家</strong>：メキシコの事業または債券への投資</li>
      </ul>
    </div>

    <!-- Permanent Resident -->
    <div class="bg-white border-l-4 border-purple-500 shadow-sm rounded-lg p-6">
      <h3 class="text-xl font-semibold mb-3 text-purple-900">Permanent Resident（永住者）</h3>
      <p class="text-gray-700 mb-3">駐在者にとって最良の選択肢です。更新は不要で、就労権も完全に認められ、資格を失うことなく無期限にメキシコ国外に滞在できます（ただし、少なくとも5年に一度は入国する必要があります）。</p>
      <h4 class="font-semibold mt-4 mb-2">（先に Temporary Resident になることなく）直接取得できる条件：</h4>
      <ul class="list-disc pl-6 text-gray-600 space-y-1">
        <li><strong>退職・年金</strong>：収入要件を満たす年金受給者</li>
        <li><strong>家族の結合</strong>：メキシコ国民の近親者</li>
        <li><strong>ポイント制</strong>：技能、職業、年齢、語学に基づく点数評価</li>
        <li><strong>政治的亡命</strong>：難民として認定された人</li>
      </ul>
    </div>
  </div>

  <p class="text-gray-700 mt-6">居住者になった後の暮らしが気になりますか？ <a href="/blog/cost-of-living-san-luis-potosi-2025" class="text-blue-600 hover:text-blue-800 underline font-medium">2025年生活費ガイド</a>では、SLP での支出について何を見込んでおくべきかを具体的に解説しています。</p>
</section>

<!-- Section 3: INM SLP -->
<section id="inm-slp" class="mb-12 scroll-mt-8">
  <h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">San Luis Potosí の INM 事務所：知っておきたいこと</h2>

  <p class="text-gray-700 mb-6">San Luis Potosí には、ほとんどの移民手続きに対応できるフルサービスの INM 事務所があります。訪問前に知っておきたいことをまとめました。</p>

  <!-- Office Info Box -->
  <div class="bg-blue-50 p-6 rounded-lg mb-8">
    <h3 class="text-xl font-semibold mb-4 text-blue-900">INM San Luis Potosí 事務所の情報</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <p class="font-semibold text-gray-900">住所：</p>
        <p class="text-gray-700">Av. Venustiano Carranza 1805<br>Col. Tequisquiapan<br>San Luis Potosí, S.L.P. 78250</p>
      </div>
      <div>
        <p class="font-semibold text-gray-900">営業時間：</p>
        <p class="text-gray-700">月曜〜金曜：9:00〜13:00<br>（書類の受付は通常12:00で終了します）</p>
      </div>
    </div>
    <div class="mt-4">
      <p class="font-semibold text-gray-900">電話：</p>
      <p class="text-gray-700">+52 (444) 814-0814</p>
    </div>
  </div>

  <h3 class="text-2xl font-semibold mb-4 text-blue-900">訪問時に想定しておくこと</h3>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
    <div class="bg-green-50 p-6 rounded-lg">
      <h4 class="font-semibold mb-3 text-green-900">良い点</h4>
      <ul class="list-disc pl-6 text-green-800 space-y-2">
        <li>CDMX や国境の事務所に比べて、一般的に混雑が少ない</li>
        <li>職員が個々の案件に時間をかけられることが多い</li>
        <li>駐在者コミュニティが小さいため、予約の競争が少ない</li>
        <li>基本的な英語を話す職員もいる</li>
      </ul>
    </div>
    <div class="bg-yellow-50 p-6 rounded-lg">
      <h4 class="font-semibold mb-3 text-yellow-900">備えておくこと</h4>
      <ul class="list-disc pl-6 text-yellow-800 space-y-2">
        <li>早めの到着——開所前から列ができます</li>
        <li>特に求められていなくても、すべての書類を持参する</li>
        <li>スペイン語が堪能だと大いに助かる</li>
        <li>複数回の訪問が必要になることがある</li>
      </ul>
    </div>
  </div>

  <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
    <h4 class="font-semibold text-yellow-800 mb-2">プロのヒント：</h4>
    <p class="text-yellow-800">初回の訪問には、スペイン語を話す友人に同行してもらうか、tramitador（移民手続きの代行者）を雇うことを検討しましょう。制度を理解している人がいれば、費用のかさむミスや何度も足を運ぶ手間を防げます。おすすめについては<a href="/community" class="text-blue-600 hover:text-blue-800 underline">コミュニティページ</a>をご覧ください。</p>
    </div>
  </section>

  <!-- DOCUMENTATION -->
  <section id="documentation" class="mb-16 scroll-mt-8">
    <div class="not-prose mb-8">
      <h2 class="text-4xl font-bold text-gray-900 mb-4 border-b-4 border-blue-500 pb-4 inline-block">
        必要書類と要件
      </h2>
    </div>

    <div class="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-md mb-6">
      <h3 class="text-2xl font-semibold text-blue-900 mb-4">経済的支払能力の要件（2025年）</h3>
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white rounded-lg overflow-hidden">
          <thead class="bg-blue-600 text-white">
            <tr>
              <th class="px-6 py-3 text-left font-semibold">ビザの種類</th>
              <th class="px-6 py-3 text-left font-semibold">月収</th>
              <th class="px-6 py-3 text-left font-semibold">または貯蓄（12か月平均）</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr class="hover:bg-gray-50"><td class="px-6 py-4 font-medium">Temporary Resident</td><td class="px-6 py-4">~$2,500 USD/月</td><td class="px-6 py-4">~$42,000 USD</td></tr>
            <tr class="hover:bg-gray-50"><td class="px-6 py-4 font-medium">Permanent Resident</td><td class="px-6 py-4">~$4,200 USD/月</td><td class="px-6 py-4">~$175,000 USD</td></tr>
          </tbody>
        </table>
      </div>
      <p class="text-xs text-gray-500 mt-2">注：要件は UMA（Unidad de Medida y Actualización）に基づき毎年更新されます。最新の金額は最寄りのメキシコ領事館でご確認ください。</p>
    </div>

    <div class="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-md mb-6">
      <h3 class="text-2xl font-semibold text-green-900 mb-4">必要書類チェックリスト</h3>
      <div class="space-y-3">
        <div class="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50">
          <span class="text-green-500 text-xl">✓</span>
          <div><p class="font-medium text-gray-900">有効なパスポート</p><p class="text-sm text-gray-600">予定している滞在期間に加えて、少なくとも6か月以上の有効期間が必要です</p></div>
        </div>
        <div class="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50">
          <span class="text-green-500 text-xl">✓</span>
          <div><p class="font-medium text-gray-900">ビザ申請書（記入済み）</p><p class="text-sm text-gray-600">メキシコ領事館または INM のウェブサイトで入手できます</p></div>
        </div>
        <div class="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50">
          <span class="text-green-500 text-xl">✓</span>
          <div><p class="font-medium text-gray-900">パスポートサイズの写真</p><p class="text-sm text-gray-600">白背景、眼鏡なし、最近のもの（6か月以内）</p></div>
        </div>
        <div class="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50">
          <span class="text-green-500 text-xl">✓</span>
          <div><p class="font-medium text-gray-900">経済的支払能力の証明</p><p class="text-sm text-gray-600">必要な最低額を示す、直近12か月の銀行取引明細</p></div>
        </div>
        <div class="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50">
          <span class="text-green-500 text-xl">✓</span>
          <div><p class="font-medium text-gray-900">メキシコ国内の住所証明</p><p class="text-sm text-gray-600">賃貸契約書または公共料金の請求書（canje 手続き用）</p></div>
        </div>
      </div>
    </div>
  </section>

  <!-- STEP BY STEP PROCESS -->
  <section id="process" class="mb-16 scroll-mt-8">
    <div class="not-prose mb-8">
      <h2 class="text-4xl font-bold text-gray-900 mb-4 border-b-4 border-green-500 pb-4 inline-block">
        ビザ手続きのステップバイステップ
      </h2>
    </div>

    <div class="space-y-6">
      <div class="bg-white border-2 border-blue-200 rounded-xl p-6 shadow-md">
        <div class="flex items-center gap-4 mb-3">
          <div class="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
          <h4 class="text-xl font-semibold text-gray-900">メキシコ領事館で申請する</h4>
        </div>
        <p class="text-gray-700">メキシコに入国する前に、母国の最寄りのメキシコ領事館でビザを申請します。必要書類はすべて持参してください。領事館は、パスポートにビザのステッカーを発行します。</p>
        <p class="text-sm text-gray-500 mt-2">所要期間：処理に1〜3週間</p>
      </div>

      <div class="bg-white border-2 border-blue-200 rounded-xl p-6 shadow-md">
        <div class="flex items-center gap-4 mb-3">
          <div class="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
          <h4 class="text-xl font-semibold text-gray-900">ビザを持ってメキシコに入国する</h4>
        </div>
        <p class="text-gray-700">到着すると、移民局がパスポートにスタンプを押し、FMM（入国カード）を渡します。ここから、canje（交換）手続きを完了するまでに30日間あります。</p>
        <p class="text-sm text-red-600 mt-2 font-semibold">重要：canje の30日間の期限を絶対に過ぎないようにしてください！</p>
      </div>

      <div class="bg-white border-2 border-blue-200 rounded-xl p-6 shadow-md">
        <div class="flex items-center gap-4 mb-3">
          <div class="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
          <h4 class="text-xl font-semibold text-gray-900">SLP の INM 事務所での canje</h4>
        </div>
        <p class="text-gray-700">San Luis Potosí の INM 事務所を訪れ、ビザを在留カードに交換します。手数料の支払い、生体情報（写真と指紋）の提出、そしてメキシコ国内の住所証明の提示が必要です。</p>
        <p class="text-sm text-gray-500 mt-2">手数料：おおよそ $4,000-6,000 MXN（一時）または $5,000-8,000 MXN（永住）</p>
      </div>

      <div class="bg-white border-2 border-blue-200 rounded-xl p-6 shadow-md">
        <div class="flex items-center gap-4 mb-3">
          <div class="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
          <h4 class="text-xl font-semibold text-gray-900">在留カードを受け取る</h4>
        </div>
        <p class="text-gray-700">処理（通常2〜4週間）が終わると、在留カードを受け取ります。このカードは常に携帯し、有効期限が切れる前に更新しなければなりません。</p>
        <p class="text-sm text-gray-500 mt-2">一時在留：最長4年間、毎年更新し、その後は永住を申請します</p>
      </div>
    </div>
  </section>

  <!-- COSTS -->
  <section id="costs" class="mb-16 scroll-mt-8">
    <div class="not-prose mb-8">
      <h2 class="text-4xl font-bold text-gray-900 mb-4 border-b-4 border-amber-500 pb-4 inline-block">
        移民手続きの費用内訳
      </h2>
    </div>

    <div class="overflow-x-auto mb-6">
      <table class="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
        <thead class="bg-amber-600 text-white">
          <tr>
            <th class="px-6 py-3 text-left font-semibold">項目</th>
            <th class="px-6 py-3 text-left font-semibold">費用（MXN）</th>
            <th class="px-6 py-3 text-left font-semibold">費用（USD 概算）</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
          <tr class="hover:bg-gray-50"><td class="px-6 py-4 font-medium">Temporary Resident カード</td><td class="px-6 py-4">$4,910</td><td class="px-6 py-4">~$280</td></tr>
          <tr class="hover:bg-gray-50"><td class="px-6 py-4 font-medium">Permanent Resident カード</td><td class="px-6 py-4">$5,889</td><td class="px-6 py-4">~$335</td></tr>
          <tr class="hover:bg-gray-50"><td class="px-6 py-4 font-medium">年次更新（一時）</td><td class="px-6 py-4">$4,910</td><td class="px-6 py-4">~$280</td></tr>
          <tr class="hover:bg-gray-50"><td class="px-6 py-4 font-medium">Tramitador（任意）</td><td class="px-6 py-4">$3,000-8,000</td><td class="px-6 py-4">~$170-460</td></tr>
          <tr class="hover:bg-gray-50"><td class="px-6 py-4 font-medium">書類翻訳</td><td class="px-6 py-4">$1,500-3,000</td><td class="px-6 py-4">~$85-170</td></tr>
        </tbody>
      </table>
    </div>
    <p class="text-xs text-gray-500 italic">手数料は毎年更新されます。手続きを始める前に、INM のウェブサイトで最新の金額をご確認ください。</p>
  </section>

  <!-- TIPS -->
  <section id="tips" class="mb-16 scroll-mt-8">
    <div class="not-prose mb-8">
      <h2 class="text-4xl font-bold text-gray-900 mb-4 border-b-4 border-green-500 pb-4 inline-block">
        成功のためのヒント
      </h2>
    </div>

    <div class="space-y-4">
      <div class="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
        <p class="text-green-800"><strong>早めに到着する：</strong>SLP の INM 事務所は午前9時に開きますが、特に月曜日は午前7時30分ごろから列ができることがあります。良い受付番号を取るために、早めに到着しましょう。</p>
      </div>
      <div class="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
        <p class="text-blue-800"><strong>コピーを持参する：</strong>すべての書類のコピーを少なくとも3部用意してください。INM は予想外のコピーを求めることがあります。出直すより、予備を持っておくほうが安心です。</p>
      </div>
      <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
        <p class="text-yellow-800"><strong>辛抱強く構える：</strong>メキシコの移民手続きは時間がかかり、ときにもどかしく感じられます。落ち着いて礼儀正しく対応し、案内よりも時間がかかるものと見込んでおきましょう。</p>
      </div>
      <div class="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
        <p class="text-red-800"><strong>滞在期限を超過しない：</strong>FMM やビザの有効期限が切れると、罰金、国外退去、あるいは今後のビザ取得が難しくなる可能性があります。常に期限を把握し、有効期限の少なくとも30日前には更新手続きを始めてください。</p>
      </div>
    </div>
  </section>

  <!-- FINAL CTA -->
  <div class="not-prose mt-16 bg-gradient-to-r from-blue-50 to-green-50 border-2 border-blue-300 p-8 rounded-2xl shadow-xl">
    <h3 class="text-3xl font-bold text-gray-900 mb-4">移民手続きでお困りですか？</h3>
    <p class="text-lg text-gray-700 mb-6">私たちのコミュニティが、経験豊富な tramitadores（手続き代行者）や、同じ手続きを経験してきた他の駐在者とあなたをつなぎます。</p>
    <div class="flex flex-col sm:flex-row gap-4">
      <a href="/community" class="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold px-8 py-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg text-center">コミュニティに参加する →</a>
      <a href="/blog/ultimate-guide-living-san-luis-potosi-expat" class="inline-flex items-center justify-center gap-2 bg-white border-2 border-blue-600 text-blue-700 font-semibold px-8 py-4 rounded-lg hover:bg-blue-50 transition-all text-center">総合駐在者ガイド →</a>
    </div>
  </div>

</div>`;

async function main() {
  const { data: before, error: e1 } = await supabase
    .from('blog_posts')
    .select('id, content, content_de, content_ja')
    .eq('slug', SLUG)
    .maybeSingle();
  if (e1 || !before) {
    console.error('FETCH ERROR:', e1 ? e1.message : 'post not found');
    process.exit(1);
  }

  const deBefore = before.content_de;

  const { error: upErr } = await supabase
    .from('blog_posts')
    .update({ content_ja: contentJa })
    .eq('id', before.id);
  if (upErr) {
    console.error('UPDATE ERROR:', upErr.message);
    process.exit(1);
  }

  const { data: after, error: e2 } = await supabase
    .from('blog_posts')
    .select('content, content_de, content_ja')
    .eq('id', before.id)
    .single();
  if (e2 || !after) {
    console.error('VERIFY FETCH ERROR:', e2 ? e2.message : 'not found');
    process.exit(1);
  }

  const tagCount = (s) => (String(s).match(/<[^>]+>/g) || []).length;
  const enTags = tagCount(after.content);
  const jaTags = tagCount(after.content_ja);
  // href parity: every href in EN must appear in JA (byte-identical)
  const hrefs = (s) => (String(s).match(/href="[^"]*"/g) || []);
  const enHrefs = hrefs(after.content);
  const jaHrefs = hrefs(after.content_ja);
  const missingHrefs = enHrefs.filter((h) => !jaHrefs.includes(h));
  // src parity
  const srcs = (s) => (String(s).match(/src="[^"]*"/g) || []);
  const missingSrcs = srcs(after.content).filter((h) => !srcs(after.content_ja).includes(h));

  const results = {
    ja_non_empty: (after.content_ja || '').length > 0,
    ja_differs_from_en: after.content_ja !== after.content,
    de_unchanged: after.content_de === deBefore,
    en_tag_count: enTags,
    ja_tag_count: jaTags,
    tag_counts_match: enTags === jaTags,
    en_href_count: enHrefs.length,
    ja_href_count: jaHrefs.length,
    missing_hrefs: missingHrefs,
    missing_srcs: missingSrcs,
    ja_length: (after.content_ja || '').length,
  };
  console.log(JSON.stringify(results, null, 2));

  const ok = results.ja_non_empty && results.ja_differs_from_en &&
    results.de_unchanged && results.tag_counts_match &&
    missingHrefs.length === 0 && missingSrcs.length === 0;
  console.log(ok ? '\nOK: content_ja filled, DE untouched, tags/hrefs match.' : '\nPROBLEM: review output.');
  process.exit(ok ? 0 : 1);
}

main();
