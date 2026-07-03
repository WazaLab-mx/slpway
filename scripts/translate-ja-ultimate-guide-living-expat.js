// Idempotent JA translation for 'ultimate-guide-living-san-luis-potosi-expat'.
// Updates ONLY content_ja by slug. Verifies by re-fetching after the update.
require('dotenv').config({ path: '.env' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const SLUG = 'ultimate-guide-living-san-luis-potosi-expat';

const CONTENT_JA = `<!-- Ultimate Guide: Living in San Luis Potosí as an Expat -->
<!-- Last Updated: December 2025 | Sources: 25+ verified -->

<div class="prose prose-lg lg:prose-xl max-w-none">

  <!-- Verification Header -->
  <div class="not-prose mb-8 bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200 rounded-2xl p-6">
    <div class="flex flex-wrap items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        </div>
        <div>
          <p class="text-sm font-medium text-gray-600">検証済み・更新済み</p>
          <p class="text-lg font-bold text-gray-900">2025年12月</p>
        </div>
      </div>
      <div class="flex items-center gap-4 text-sm">
        <div class="flex items-center gap-2">
          <span class="w-3 h-3 bg-green-500 rounded-full"></span>
          <span class="text-gray-700"><strong>25以上</strong>の出典を引用</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="w-3 h-3 bg-blue-500 rounded-full"></span>
          <span class="text-gray-700"><strong>10,000語以上</strong></span>
        </div>
      </div>
    </div>
    <p class="mt-4 text-sm text-gray-600">
      本ガイドには、メキシコ政府の公式情報源（INM、INEGI、SAT）、国際的なデータベース（Numbeo、Expatistan）、および実績ある医療機関から検証した情報が含まれています。すべてのデータには出典を明記しています。
    </p>
  </div>

  <!-- Important Disclaimer -->
  <div class="not-prose mb-8 bg-amber-50 border border-amber-300 rounded-2xl p-5">
    <div class="flex items-start gap-3">
      <svg class="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
      </svg>
      <div>
        <p class="font-semibold text-amber-800 text-lg">重要な免責事項</p>
        <ul class="mt-2 text-sm text-amber-700 space-y-1">
          <li><strong>価格や料金は変動する場合があります：</strong>本ガイドに記載の費用は概算であり、予告なく変更されることがあります。為替レートは日々変動します。金銭的な判断を下す前に、必ず最新の価格をご確認ください。</li>
          <li><strong>渡航前に確認を：</strong>政府機関の手続き、要件、料金は変更される可能性があります。各機関（INM、SAT、銀行、領事館）を訪れる前に、電話または公式ウェブサイトで最新の要件をご確認ください。</li>
          <li><strong>営業時間は変わる場合があります：</strong>記載の営業時間は通常のスケジュールです。祝日、連休（<em>puentes</em>）、特別なイベント、または不測の事情により変更されることがあります。セマナ・サンタ（聖週間）、死者の日、クリスマス・年末年始などのメキシコの祝祭期間は、営業時間が短縮されることがよくあります。</li>
          <li><strong>これは法的助言ではありません：</strong>本ガイドは情報提供のみを目的としています。移民、税務、法律に関する事項については、有資格の専門家にご相談ください。</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Table of Contents -->
  <div class="not-prose mb-12 bg-gray-50 border border-gray-200 rounded-2xl p-6">
    <h2 class="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
      <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"/>
      </svg>
      目次
    </h2>
    <div class="grid md:grid-cols-2 gap-4">
      <div>
        <h3 class="font-semibold text-gray-800 mb-2">はじめに</h3>
        <ul class="space-y-1 text-sm">
          <li><a href="#executive-summary" class="text-primary-600 hover:underline">要約</a></li>
          <li><a href="#why-slp" class="text-primary-600 hover:underline">なぜSan Luis Potosíなのか？</a></li>
          <li><a href="#quick-facts" class="text-primary-600 hover:underline">ひと目でわかる基本情報</a></li>
        </ul>
        <h3 class="font-semibold text-gray-800 mb-2 mt-4">法務・移民</h3>
        <ul class="space-y-1 text-sm">
          <li><a href="#visa-types" class="text-primary-600 hover:underline">ビザの種類の解説</a></li>
          <li><a href="#visa-process" class="text-primary-600 hover:underline">ビザ申請の手順</a></li>
          <li><a href="#residency-requirements" class="text-primary-600 hover:underline">居住要件</a></li>
        </ul>
        <h3 class="font-semibold text-gray-800 mb-2 mt-4">生活費</h3>
        <ul class="space-y-1 text-sm">
          <li><a href="#cost-overview" class="text-primary-600 hover:underline">生活費の概要と比較</a></li>
          <li><a href="#housing-costs" class="text-primary-600 hover:underline">住宅・家賃の価格</a></li>
          <li><a href="#daily-expenses" class="text-primary-600 hover:underline">日常の支出の内訳</a></li>
          <li><a href="#monthly-budgets" class="text-primary-600 hover:underline">月額予算のモデルケース</a></li>
        </ul>
      </div>
      <div>
        <h3 class="font-semibold text-gray-800 mb-2">地区</h3>
        <ul class="space-y-1 text-sm">
          <li><a href="#neighborhoods" class="text-primary-600 hover:underline">外国人居住者に最適な地区</a></li>
          <li><a href="#housing-search" class="text-primary-600 hover:underline">住まいの探し方</a></li>
        </ul>
        <h3 class="font-semibold text-gray-800 mb-2 mt-4">医療</h3>
        <ul class="space-y-1 text-sm">
          <li><a href="#healthcare-system" class="text-primary-600 hover:underline">医療制度の概要</a></li>
          <li><a href="#insurance-options" class="text-primary-600 hover:underline">保険の選択肢</a></li>
          <li><a href="#hospitals" class="text-primary-600 hover:underline">おすすめの病院・クリニック</a></li>
        </ul>
        <h3 class="font-semibold text-gray-800 mb-2 mt-4">実生活</h3>
        <ul class="space-y-1 text-sm">
          <li><a href="#banking" class="text-primary-600 hover:underline">銀行・金融</a></li>
          <li><a href="#transportation" class="text-primary-600 hover:underline">交通ガイド</a></li>
          <li><a href="#internet-phone" class="text-primary-600 hover:underline">インターネット・電話</a></li>
          <li><a href="#safety" class="text-primary-600 hover:underline">安全・治安</a></li>
        </ul>
        <h3 class="font-semibold text-gray-800 mb-2 mt-4">リソース</h3>
        <ul class="space-y-1 text-sm">
          <li><a href="#faq" class="text-primary-600 hover:underline">よくある質問（20問以上）</a></li>
          <li><a href="#sources" class="text-primary-600 hover:underline">出典・参考文献</a></li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Executive Summary -->
  <div id="executive-summary" class="not-prose mb-12 bg-gradient-to-br from-primary-50 to-amber-50 border-l-4 border-primary-500 rounded-r-2xl p-6">
    <h2 class="text-2xl font-bold text-gray-900 mb-4">要約</h2>
    <p class="text-gray-700 mb-4">
      San Luis Potosíは、Mexico City、Guadalajara、San Miguel de Allendeといった人気の目的地よりも大幅に低い費用で、本物のメキシコ体験を外国人居住者に提供します。ひと目でわかる要点は次のとおりです。
    </p>
    <div class="grid md:grid-cols-2 gap-4">
      <div class="bg-white/70 rounded-xl p-4">
        <h3 class="font-bold text-primary-700 mb-2">主なメリット</h3>
        <ul class="text-sm space-y-1 text-gray-700">
          <li>✓ Mexico Cityより生活費が35～50％安い</li>
          <li>✓ 過度な観光地化のない、成長中の外国人コミュニティ</li>
          <li>✓ ユネスコ世界遺産の歴史地区</li>
          <li>✓ 近代的な医療施設</li>
          <li>✓ メキシコの中央に位置する戦略的な立地</li>
          <li>✓ 一年を通して快適な気候（平均17℃）</li>
        </ul>
      </div>
      <div class="bg-white/70 rounded-xl p-4">
        <h3 class="font-bold text-primary-700 mb-2">主要な数字</h3>
        <ul class="text-sm space-y-1 text-gray-700">
          <li><strong>月額予算：</strong>快適な生活で800～1,500米ドル</li>
          <li><strong>1LDKの家賃：</strong>月300～600米ドル</li>
          <li><strong>外食：</strong>5～15米ドル</li>
          <li><strong>人口：</strong>129万人（都市圏）</li>
          <li><strong>標高：</strong>1,864メートル（6,115フィート）</li>
          <li><strong>気候：</strong>半乾燥、一年を通して温暖</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Why San Luis Potosí Section -->
  <h2 id="why-slp" class="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
    <span class="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 text-xl">1</span>
    なぜSan Luis Potosíを選ぶのか？
  </h2>

  <p>
    Mexico City、Guadalajara、San Miguel de Allendeといった都市が外国人居住者の話題を独占しがちですが、San Luis Potosí（地元の人々はよく「SLP」と呼びます）は、本物のメキシコ文化と近代的な設備を兼ね備えた魅力的な選択肢を提供します。しかも、より人気の高い目的地のような混雑や高騰した価格はありません。
  </p>

  <!-- Contextual Note -->
  <div class="not-prose my-6 bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-4">
    <div class="flex items-start gap-3">
      <svg class="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
      <div>
        <p class="font-semibold text-amber-800">歴史的背景</p>
        <p class="text-sm text-amber-700">San Luis Potosíは1592年に鉱山町として創設され、ヌエバ・エスパーニャ（新スペイン）で最も裕福な都市の一つとなりました。「Potosí」という名は、ボリビアのPotosíにある有名な銀山に由来し、この都市の鉱業の遺産を反映しています。今日、この歴史は、2010年にユネスコ世界遺産に登録された歴史地区の見事なバロック建築に見ることができます。<sup>[1]</sup></p>
      </div>
    </div>
  </div>

  <h3 class="text-xl font-bold text-gray-800 mt-8 mb-4">戦略的な立地</h3>

  <p>
    メキシコの地理的な中心に位置するSan Luis Potosíは、主要都市を結ぶ交差点の役割を果たしています。Secretaría de Comunicaciones y Transportes（SCT、通信運輸省）によると、この都市は次の位置にあります。<sup>[2]</sup>
  </p>

  <ul>
    <li><strong>Mexico Cityから424km（4～5時間）</strong></li>
    <li><strong>Guadalajaraから330km（3.5～4時間）</strong></li>
    <li><strong>Aguascalientesから200km（2.5時間）</strong></li>
    <li><strong>Zacatecasから193km（2.5時間）</strong></li>
    <li><strong>Monterreyから521km（5～6時間）</strong></li>
  </ul>

  <p>
    Ponciano Arriaga国際空港（SLP）は、メキシコ主要都市への直行便を運航しており、Mexico CityおよびMonterreyのハブを経由して米国の目的地とも結ばれています。
  </p>

  <h3 class="text-xl font-bold text-gray-800 mt-8 mb-4">経済の安定性</h3>

  <p>
    San Luis Potosíは、メキシコで最も重要な工業拠点の一つへと変貌を遂げました。INEGI（Instituto Nacional de Estadística y Geografía、国立統計地理情報院）の2024年のデータによると、州のGDPは2023年に8.0％成長し、メキシコで2番目に成長の速い州経済となりました。その原動力は次のとおりです。<sup>[3]</sup>
  </p>

  <ul>
    <li><strong>自動車製造：</strong>BMW、General Motors、および多数のサプライヤー</li>
    <li><strong>航空宇宙産業：</strong>成長中の航空宇宙企業クラスター</li>
    <li><strong>物流：</strong>メキシコ中央部の主要な物流拠点</li>
    <li><strong>サービス業：</strong>拡大するテクノロジー・ビジネスサービス部門</li>
  </ul>

  <p>
    この経済の多様性は、安定した雇用機会、質の高いインフラ、そして拡大する中間層を意味し、これらは住民の生活の質を高める要因となっています。
  </p>

  <!-- Quick Facts Box -->
  <div id="quick-facts" class="not-prose my-10 bg-white border-2 border-gray-200 rounded-2xl overflow-hidden shadow-lg">
    <div class="bg-gradient-to-r from-primary-600 to-primary-700 px-6 py-4">
      <h2 class="text-xl font-bold text-white flex items-center gap-2">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
        </svg>
        San Luis Potosí 基本情報
      </h2>
    </div>
    <div class="p-6">
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div class="bg-gray-50 rounded-xl p-4">
          <p class="text-sm text-gray-500 uppercase tracking-wide">人口（都市圏）</p>
          <p class="text-2xl font-bold text-gray-900">129万人</p>
          <p class="text-xs text-gray-500">INEGI 2024年推計<sup>[3]</sup></p>
        </div>
        <div class="bg-gray-50 rounded-xl p-4">
          <p class="text-sm text-gray-500 uppercase tracking-wide">州人口</p>
          <p class="text-2xl font-bold text-gray-900">287万人</p>
          <p class="text-xs text-gray-500">INEGI 2024年<sup>[3]</sup></p>
        </div>
        <div class="bg-gray-50 rounded-xl p-4">
          <p class="text-sm text-gray-500 uppercase tracking-wide">標高</p>
          <p class="text-2xl font-bold text-gray-900">1,864 m</p>
          <p class="text-xs text-gray-500">海抜6,115フィート</p>
        </div>
        <div class="bg-gray-50 rounded-xl p-4">
          <p class="text-sm text-gray-500 uppercase tracking-wide">平均気温</p>
          <p class="text-2xl font-bold text-gray-900">17℃（63°F）</p>
          <p class="text-xs text-gray-500">SMN年間平均<sup>[4]</sup></p>
        </div>
        <div class="bg-gray-50 rounded-xl p-4">
          <p class="text-sm text-gray-500 uppercase tracking-wide">年間降水量</p>
          <p class="text-2xl font-bold text-gray-900">542 mm</p>
          <p class="text-xs text-gray-500">半乾燥気候<sup>[4]</sup></p>
        </div>
        <div class="bg-gray-50 rounded-xl p-4">
          <p class="text-sm text-gray-500 uppercase tracking-wide">タイムゾーン</p>
          <p class="text-2xl font-bold text-gray-900">CST（UTC-6）</p>
          <p class="text-xs text-gray-500">Mexico Cityと同じ</p>
        </div>
      </div>
    </div>
  </div>

  <!-- VISA & IMMIGRATION SECTION -->
  <h2 id="visa-types" class="text-3xl font-bold text-gray-900 mt-16 mb-6 flex items-center gap-3">
    <span class="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 text-xl">2</span>
    ビザの種類と移民手続き
  </h2>

  <p>
    メキシコのビザ制度を理解することは、移住計画に不可欠です。Instituto Nacional de Migración（INM、国立移民庁）がすべての移民関連事項を管轄しています。以下は、外国人居住者向けのビザの選択肢を包括的にまとめたものです。<sup>[5]</sup>
  </p>

  <!-- Visa Comparison Table -->
  <div class="not-prose my-8 overflow-x-auto">
    <table class="min-w-full bg-white border border-gray-200 rounded-xl overflow-hidden">
      <thead class="bg-gray-100">
        <tr>
          <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">ビザの種類</th>
          <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">期間</th>
          <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">就労可否</th>
          <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">適した対象</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-200">
        <tr>
          <td class="px-4 py-3 text-sm font-medium text-gray-900">観光ビザ（FMM）</td>
          <td class="px-4 py-3 text-sm text-gray-600">最長180日</td>
          <td class="px-4 py-3 text-sm text-gray-600">不可</td>
          <td class="px-4 py-3 text-sm text-gray-600">短期滞在、下見</td>
        </tr>
        <tr class="bg-gray-50">
          <td class="px-4 py-3 text-sm font-medium text-gray-900">Temporary Resident（一時居住者）</td>
          <td class="px-4 py-3 text-sm text-gray-600">1～4年</td>
          <td class="px-4 py-3 text-sm text-gray-600">許可があれば可</td>
          <td class="px-4 py-3 text-sm text-gray-600">長期居住者、リモートワーカー</td>
        </tr>
        <tr>
          <td class="px-4 py-3 text-sm font-medium text-gray-900">Permanent Resident（永住者）</td>
          <td class="px-4 py-3 text-sm text-gray-600">無期限</td>
          <td class="px-4 py-3 text-sm text-gray-600">可</td>
          <td class="px-4 py-3 text-sm text-gray-600">退職者、長期居住者</td>
        </tr>
        <tr class="bg-gray-50">
          <td class="px-4 py-3 text-sm font-medium text-gray-900">就労ビザ</td>
          <td class="px-4 py-3 text-sm text-gray-600">1～4年</td>
          <td class="px-4 py-3 text-sm text-gray-600">可（雇用主指定）</td>
          <td class="px-4 py-3 text-sm text-gray-600">メキシコ企業での就労</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3 id="visa-process" class="text-xl font-bold text-gray-800 mt-10 mb-4">Temporary Residentビザの取得方法</h3>

  <!-- Step-by-Step How-To -->
  <div class="not-prose my-8 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6">
    <h4 class="text-lg font-bold text-blue-900 mb-4 flex items-center gap-2">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>
      </svg>
      手順：Temporary Residentビザの申請
    </h4>

    <div class="space-y-4">
      <!-- Step 1 -->
      <div class="flex gap-4">
        <div class="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
        <div class="flex-1">
          <h5 class="font-semibold text-gray-900">領事館の予約を取る</h5>
          <p class="text-sm text-gray-600 mt-1">最寄りのメキシコ領事館に連絡して予約を取ります。処理期間は場所によって異なるため、2～4週間前に予約してください。</p>
          <p class="text-xs text-blue-600 mt-1">領事館を探す：<a href="https://directorio.sre.gob.mx/index.php/consulados-de-mexico-en-el-exterior" target="_blank" class="underline">SRE 領事館ディレクトリ</a></p>
        </div>
      </div>

      <!-- Step 2 -->
      <div class="flex gap-4">
        <div class="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
        <div class="flex-1">
          <h5 class="font-semibold text-gray-900">必要書類を揃える</h5>
          <p class="text-sm text-gray-600 mt-1">以下を準備してください。</p>
          <ul class="text-sm text-gray-600 mt-2 space-y-1 list-disc list-inside">
            <li>有効なパスポート（残存有効期間6か月以上）</li>
            <li>記入済みのビザ申請書</li>
            <li>パスポートサイズの写真（白背景）</li>
            <li>経済的支払能力の証明（下記の要件を参照）</li>
            <li>ビザ手数料の支払い（領事館により50～80米ドル）</li>
          </ul>
        </div>
      </div>

      <!-- Step 3 -->
      <div class="flex gap-4">
        <div class="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
        <div class="flex-1">
          <h5 class="font-semibold text-gray-900">経済的支払能力を証明する</h5>
          <p class="text-sm text-gray-600 mt-1">以下のいずれか1つの方法で、経済的な自立を証明する必要があります。<sup>[5]</sup></p>
          <div class="bg-white/60 rounded-lg p-3 mt-2">
            <p class="text-sm"><strong>選択肢A - 銀行残高証明：</strong>過去12か月間の月間平均残高が約69,750米ドル（UMA 113.14 MXNの5,000倍）であることを示す</p>
            <p class="text-sm mt-2"><strong>選択肢B - 月収：</strong>過去6か月間の月収が約4,185米ドル（MDW 278.80 MXNの300倍で約83,640 MXN）であることを証明する</p>
            <p class="text-sm mt-2"><strong>選択肢C - 不動産：</strong>メキシコ国内に最低約558,000米ドル（UMAの40,000倍）相当の不動産を所有していることの証明</p>
          </div>
          <p class="text-xs text-gray-500 mt-2">注：金額は毎年更新されます。最新の要件は領事館でご確認ください。</p>
        </div>
      </div>

      <!-- Step 4 -->
      <div class="flex gap-4">
        <div class="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
        <div class="flex-1">
          <h5 class="font-semibold text-gray-900">領事館での面接を受ける</h5>
          <p class="text-sm text-gray-600 mt-1">予約日にすべての書類を持参してください。領事が申請内容を審査し、メキシコでの計画について尋ねる場合があります。承認されると、メキシコ入国のために180日間有効なビザのシールがパスポートに貼付されます。</p>
        </div>
      </div>

      <!-- Step 5 -->
      <div class="flex gap-4">
        <div class="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">5</div>
        <div class="flex-1">
          <h5 class="font-semibold text-gray-900">メキシコに入国し、ビザを交換する</h5>
          <p class="text-sm text-gray-600 mt-1">到着後30日以内に、地元のINM事務所を訪れてビザを居住者カードに交換します。San Luis Potosíでは、INM事務所は次の場所にあります。</p>
          <p class="text-sm text-gray-700 mt-2 font-medium">INM San Luis Potosí<br>Av. Venustiano Carranza 2395, Zona Centro<br>電話：(444) 812-3556</p>
        </div>
      </div>

      <!-- Step 6 -->
      <div class="flex gap-4">
        <div class="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">✓</div>
        <div class="flex-1">
          <h5 class="font-semibold text-gray-900">居住者カードを受け取る</h5>
          <p class="text-sm text-gray-600 mt-1">生体認証と書類確認（通常2～4週間）の後、1年間有効なTemporary Resident（一時居住者）カードを受け取ります。これは最長で合計4年まで更新できます。</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Warning Note -->
  <div class="not-prose my-6 bg-red-50 border-l-4 border-red-400 rounded-r-xl p-4">
    <div class="flex items-start gap-3">
      <svg class="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
      </svg>
      <div>
        <p class="font-semibold text-red-800">重要な警告</p>
        <p class="text-sm text-red-700">観光ビザで滞在中に、メキシコ国内の顧客から収入を得ながらリモートワークを行おうとしないでください。取り締まりは限定的ですが、これは技術的に移民法に違反します。（リモートかどうかを問わず）就労する予定がある場合は、適切な居住資格を取得してください。多くの外国人居住者は、就労許可の申請が可能なTemporary Residentビザを利用しています。<sup>[5]</sup></p>
      </div>
    </div>
  </div>

  <h3 id="residency-requirements" class="text-xl font-bold text-gray-800 mt-10 mb-4">Permanent Residency（永住権）への道</h3>

  <p>
    Temporary Residentとして連続4年間過ごした後、Permanent Residency（永住権）を申請できます。あるいは、以下を通じて直接Permanent Residencyの資格を得ることもできます。<sup>[5]</sup>
  </p>

  <ul>
    <li><strong>退職：</strong>月額約7,100米ドルの年金・退職所得（または約280,000米ドルの貯蓄）の証明</li>
    <li><strong>家族関係：</strong>メキシコ市民との結婚、またはメキシコ人の子どもがいること</li>
    <li><strong>人道的理由：</strong>INMが評価する特別な事情</li>
    <li><strong>ポイント制度：</strong>職業資格、投資、家族関係に基づく</li>
  </ul>

  <!-- COST OF LIVING SECTION -->
  <h2 id="cost-overview" class="text-3xl font-bold text-gray-900 mt-16 mb-6 flex items-center gap-3">
    <span class="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 text-xl">3</span>
    生活費
  </h2>

  <p>
    San Luis Potosíは、メキシコの主要都市の中でも最も手頃な生活費を誇ります。Numbeoの2025年12月のデータによると、この都市はMexico Cityや人気の外国人居住地よりも大幅に低くランクされています。<sup>[6]</sup>
  </p>

  <!-- Cost Comparison -->
  <div class="not-prose my-8 bg-white border border-gray-200 rounded-2xl overflow-hidden shadow">
    <div class="bg-gray-100 px-6 py-4">
      <h3 class="font-bold text-gray-900">生活費の比較（指数：NYC = 100）</h3>
      <p class="text-sm text-gray-600">出典：Numbeo、2025年12月<sup>[6]</sup></p>
    </div>
    <div class="p-6">
      <div class="space-y-4">
        <div>
          <div class="flex justify-between text-sm mb-1">
            <span class="font-medium">San Luis Potosí</span>
            <span class="text-primary-600 font-bold">26.8</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-3">
            <div class="bg-primary-500 h-3 rounded-full" style="width: 26.8%"></div>
          </div>
        </div>
        <div>
          <div class="flex justify-between text-sm mb-1">
            <span class="font-medium">Mexico City</span>
            <span class="text-gray-600 font-bold">35.2</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-3">
            <div class="bg-gray-500 h-3 rounded-full" style="width: 35.2%"></div>
          </div>
        </div>
        <div>
          <div class="flex justify-between text-sm mb-1">
            <span class="font-medium">Guadalajara</span>
            <span class="text-gray-600 font-bold">32.1</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-3">
            <div class="bg-gray-500 h-3 rounded-full" style="width: 32.1%"></div>
          </div>
        </div>
        <div>
          <div class="flex justify-between text-sm mb-1">
            <span class="font-medium">San Miguel de Allende</span>
            <span class="text-gray-600 font-bold">41.5</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-3">
            <div class="bg-gray-500 h-3 rounded-full" style="width: 41.5%"></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <h3 id="housing-costs" class="text-xl font-bold text-gray-800 mt-10 mb-4">住宅・家賃の価格</h3>

  <p>
    住宅費は、予算を重視する外国人居住者にとってSan Luis Potosíが本領を発揮する分野です。以下の価格は、2025年12月時点のNumbeoのデータと地元の不動産物件情報に基づいています。<sup>[6][7]</sup>
  </p>

  <!-- Rent Table -->
  <div class="not-prose my-8 overflow-x-auto">
    <table class="min-w-full bg-white border border-gray-200 rounded-xl overflow-hidden">
      <thead class="bg-primary-50">
        <tr>
          <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">住宅の種類</th>
          <th class="px-4 py-3 text-center text-sm font-semibold text-gray-700">市中心部</th>
          <th class="px-4 py-3 text-center text-sm font-semibold text-gray-700">中心部の外側</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-200">
        <tr>
          <td class="px-4 py-3 text-sm font-medium text-gray-900">1ベッドルームのアパート</td>
          <td class="px-4 py-3 text-sm text-center text-gray-600">580米ドル<br><span class="text-xs text-gray-400">（11,733 MXN）</span></td>
          <td class="px-4 py-3 text-sm text-center text-gray-600">300米ドル<br><span class="text-xs text-gray-400">（6,107 MXN）</span></td>
        </tr>
        <tr class="bg-gray-50">
          <td class="px-4 py-3 text-sm font-medium text-gray-900">3ベッドルームのアパート</td>
          <td class="px-4 py-3 text-sm text-center text-gray-600">900米ドル<br><span class="text-xs text-gray-400">（18,000 MXN）</span></td>
          <td class="px-4 py-3 text-sm text-center text-gray-600">550米ドル<br><span class="text-xs text-gray-400">（11,000 MXN）</span></td>
        </tr>
        <tr>
          <td class="px-4 py-3 text-sm font-medium text-gray-900">一戸建て（3ベッドルーム）</td>
          <td class="px-4 py-3 text-sm text-center text-gray-600">1,200米ドル<br><span class="text-xs text-gray-400">（24,000 MXN）</span></td>
          <td class="px-4 py-3 text-sm text-center text-gray-600">700米ドル<br><span class="text-xs text-gray-400">（14,000 MXN）</span></td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3 id="daily-expenses" class="text-xl font-bold text-gray-800 mt-10 mb-4">日常の支出の内訳</h3>

  <!-- Expenses Grid -->
  <div class="not-prose my-8 grid md:grid-cols-2 gap-6">
    <!-- Food & Groceries -->
    <div class="bg-white border border-gray-200 rounded-xl p-5">
      <h4 class="font-bold text-gray-900 mb-3 flex items-center gap-2">
        <span class="text-2xl">🛒</span> 食料品・食事
      </h4>
      <ul class="space-y-2 text-sm">
        <li class="flex justify-between"><span>安価なレストランでの食事</span><span class="font-medium">5米ドル（100 MXN）</span></li>
        <li class="flex justify-between"><span>中級レストランでの食事（2名分）</span><span class="font-medium">25米ドル（500 MXN）</span></li>
        <li class="flex justify-between"><span>マクドナルドのセット</span><span class="font-medium">7米ドル（140 MXN）</span></li>
        <li class="flex justify-between"><span>国産ビール（レストラン）</span><span class="font-medium">2.50米ドル（50 MXN）</span></li>
        <li class="flex justify-between"><span>カプチーノ</span><span class="font-medium">3米ドル（60 MXN）</span></li>
        <li class="flex justify-between"><span>月々の食料品（1人分）</span><span class="font-medium">150～200米ドル</span></li>
      </ul>
      <p class="text-xs text-gray-500 mt-3">出典：Numbeo 2025年12月<sup>[6]</sup></p>
    </div>

    <!-- Utilities & Services -->
    <div class="bg-white border border-gray-200 rounded-xl p-5">
      <h4 class="font-bold text-gray-900 mb-3 flex items-center gap-2">
        <span class="text-2xl">💡</span> 光熱費・サービス
      </h4>
      <ul class="space-y-2 text-sm">
        <li class="flex justify-between"><span>電気・水道・ガス（85m²のアパート）</span><span class="font-medium">40米ドル（800 MXN）</span></li>
        <li class="flex justify-between"><span>インターネット（60 Mbps以上）</span><span class="font-medium">28米ドル（567 MXN）</span></li>
        <li class="flex justify-between"><span>携帯プラン（データ無制限）</span><span class="font-medium">20米ドル（400 MXN）</span></li>
        <li class="flex justify-between"><span>ジム会員（月額）</span><span class="font-medium">30米ドル（600 MXN）</span></li>
        <li class="flex justify-between"><span>映画チケット</span><span class="font-medium">4米ドル（80 MXN）</span></li>
        <li class="flex justify-between"><span>家事代行（週4時間）</span><span class="font-medium">月80～120米ドル</span></li>
      </ul>
      <p class="text-xs text-gray-500 mt-3">出典：Numbeo 2025年12月<sup>[6]</sup></p>
    </div>

    <!-- Transportation -->
    <div class="bg-white border border-gray-200 rounded-xl p-5">
      <h4 class="font-bold text-gray-900 mb-3 flex items-center gap-2">
        <span class="text-2xl">🚗</span> 交通
      </h4>
      <ul class="space-y-2 text-sm">
        <li class="flex justify-between"><span>公共交通機関の乗車券</span><span class="font-medium">0.75米ドル（15 MXN）</span></li>
        <li class="flex justify-between"><span>月間交通パス</span><span class="font-medium">25米ドル（500 MXN）</span></li>
        <li class="flex justify-between"><span>Uber（5kmの乗車）</span><span class="font-medium">3～4米ドル（60～80 MXN）</span></li>
        <li class="flex justify-between"><span>ガソリン（1リットル）</span><span class="font-medium">1.10米ドル（22 MXN）</span></li>
        <li class="flex justify-between"><span>タクシー初乗り料金</span><span class="font-medium">1.50米ドル（30 MXN）</span></li>
        <li class="flex justify-between"><span>駐車場（市中心部・1時間）</span><span class="font-medium">1米ドル（20 MXN）</span></li>
      </ul>
      <p class="text-xs text-gray-500 mt-3">出典：Numbeo、Uberアプリ 2025年12月<sup>[6]</sup></p>
    </div>

    <!-- Healthcare -->
    <div class="bg-white border border-gray-200 rounded-xl p-5">
      <h4 class="font-bold text-gray-900 mb-3 flex items-center gap-2">
        <span class="text-2xl">🏥</span> 医療
      </h4>
      <ul class="space-y-2 text-sm">
        <li class="flex justify-between"><span>診察（プライベート）</span><span class="font-medium">25～50米ドル</span></li>
        <li class="flex justify-between"><span>専門医の診察</span><span class="font-medium">40～80米ドル</span></li>
        <li class="flex justify-between"><span>IMSS（公的保険・年額）</span><span class="font-medium">400米ドル</span></li>
        <li class="flex justify-between"><span>民間保険（総合型）</span><span class="font-medium">月100～200米ドル</span></li>
        <li class="flex justify-between"><span>歯のクリーニング</span><span class="font-medium">30～50米ドル</span></li>
        <li class="flex justify-between"><span>基本的な血液検査</span><span class="font-medium">20～40米ドル</span></li>
      </ul>
      <p class="text-xs text-gray-500 mt-3">出典：地元のクリニック、IMSS 2024年<sup>[8]</sup></p>
    </div>
  </div>

  <h3 id="monthly-budgets" class="text-xl font-bold text-gray-800 mt-10 mb-4">月額予算のモデルケース</h3>

  <!-- Budget Tiers -->
  <div class="not-prose my-8 grid md:grid-cols-3 gap-6">
    <!-- Budget Tier -->
    <div class="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6">
      <div class="text-center mb-4">
        <p class="text-sm font-medium text-green-600 uppercase tracking-wide">節約型</p>
        <p class="text-3xl font-bold text-gray-900">$800-$1,000</p>
        <p class="text-sm text-gray-500">米ドル／月</p>
      </div>
      <ul class="text-sm space-y-2 text-gray-700">
        <li>• 中心部の外側の1ベッドルームのアパート</li>
        <li>• 主に自炊</li>
        <li>• 公共交通機関を利用</li>
        <li>• IMSS公的医療</li>
        <li>• 基本的な娯楽</li>
        <li>• 外食は控えめ</li>
      </ul>
      <p class="text-xs text-gray-500 mt-4 text-center">最適な対象：デジタルノマド、学生、予算重視の退職者</p>
    </div>

    <!-- Comfortable Tier -->
    <div class="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-300 rounded-2xl p-6 transform scale-105">
      <div class="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">最も一般的</div>
      <div class="text-center mb-4 mt-2">
        <p class="text-sm font-medium text-blue-600 uppercase tracking-wide">快適型</p>
        <p class="text-3xl font-bold text-gray-900">$1,200-$1,800</p>
        <p class="text-sm text-gray-500">米ドル／月</p>
      </div>
      <ul class="text-sm space-y-2 text-gray-700">
        <li>• 良い地区の快適な1～2ベッドルーム</li>
        <li>• 自炊と外食の併用</li>
        <li>• Uber／たまにレンタカー</li>
        <li>• 民間医療保険</li>
        <li>• 定期的な娯楽</li>
        <li>• 国内旅行の予算</li>
      </ul>
      <p class="text-xs text-gray-500 mt-4 text-center">最適な対象：大半の外国人居住者、リモートワーカー、カップル</p>
    </div>

    <!-- Premium Tier -->
    <div class="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-2xl p-6">
      <div class="text-center mb-4">
        <p class="text-sm font-medium text-purple-600 uppercase tracking-wide">プレミアム型</p>
        <p class="text-3xl font-bold text-gray-900">$2,500+</p>
        <p class="text-sm text-gray-500">米ドル／月</p>
      </div>
      <ul class="text-sm space-y-2 text-gray-700">
        <li>• 高級アパート・一戸建て</li>
        <li>• 高級レストランでの定期的な食事</li>
        <li>• 自家用車または運転手</li>
        <li>• プレミアム医療プラン</li>
        <li>• クラブ会員権</li>
        <li>• 定期的な海外旅行</li>
      </ul>
      <p class="text-xs text-gray-500 mt-4 text-center">最適な対象：経営者、裕福な退職者、家族連れ</p>
    </div>
  </div>

  <!-- NEIGHBORHOODS SECTION -->
  <h2 id="neighborhoods" class="text-3xl font-bold text-gray-900 mt-16 mb-6 flex items-center gap-3">
    <span class="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 text-xl">4</span>
    外国人居住者に最適な地区
  </h2>

  <p>
    適切な地区を選ぶことは、生活の質を左右する重要な要素です。San Luis Potosíには、コロニアル様式の歴史ある趣から近代的なゲーテッドコミュニティまで、多様な選択肢があります。以下は、外国人居住者に最適なエリアの詳細な内訳です。<sup>[7]</sup>
  </p>

  <!-- Neighborhood Cards -->
  <div class="not-prose my-8 space-y-6">

    <!-- Lomas -->
    <div class="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
      <div class="md:flex">
        <div class="md:w-1/3 bg-gradient-to-br from-primary-500 to-primary-700 p-6 text-white">
          <h3 class="text-2xl font-bold mb-2">Lomas</h3>
          <p class="text-primary-100 text-sm mb-4">高級、家族向け</p>
          <div class="space-y-2 text-sm">
            <p><strong>家賃相場：</strong>800～1,500米ドル</p>
            <p><strong>最適な対象：</strong>家族、専門職</p>
            <p><strong>安全性：</strong>★★★★★</p>
          </div>
        </div>
        <div class="md:w-2/3 p-6">
          <p class="text-gray-600 mb-4">Lomasは、San Luis Potosí随一の高級住宅街で、並木道、近代的なショッピングセンター、優れた学校が特徴です。この地区にはLomas 1ª、2ª、3ª、4ª Secciónといったいくつかのサブエリアが含まれます。</p>
          <div class="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p class="font-semibold text-gray-800">メリット</p>
              <ul class="text-gray-600 space-y-1">
                <li>✓ 非常に安全、ゲーテッドコミュニティ</li>
                <li>✓ Plaza Citadinaモールが近い</li>
                <li>✓ 優れたインターナショナルスクール</li>
                <li>✓ 近代的な設備</li>
              </ul>
            </div>
            <div>
              <p class="font-semibold text-gray-800">デメリット</p>
              <ul class="text-gray-600 space-y-1">
                <li>✗ 価格が高め</li>
                <li>✗ 車が必須</li>
                <li>✗ 歴史地区から遠い</li>
                <li>✗ 「本物らしさ」に欠ける</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Centro Histórico -->
    <div class="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
      <div class="md:flex">
        <div class="md:w-1/3 bg-gradient-to-br from-amber-500 to-orange-600 p-6 text-white">
          <h3 class="text-2xl font-bold mb-2">Centro Histórico</h3>
          <p class="text-amber-100 text-sm mb-4">歴史的、徒歩圏、文化的</p>
          <div class="space-y-2 text-sm">
            <p><strong>家賃相場：</strong>400～800米ドル</p>
            <p><strong>最適な対象：</strong>文化愛好家、独身者</p>
            <p><strong>安全性：</strong>★★★★☆</p>
          </div>
        </div>
        <div class="md:w-2/3 p-6">
          <p class="text-gray-600 mb-4">ユネスコ世界遺産の歴史地区では、コロニアル建築、広場、美術館・博物館、そして市内随一のレストランやカフェを楽しめます。ここでの暮らしは、本物のメキシコ文化に浸ることを意味します。</p>
          <div class="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p class="font-semibold text-gray-800">メリット</p>
              <ul class="text-gray-600 space-y-1">
                <li>✓ すべてに徒歩でアクセス可能</li>
                <li>✓ 豊かな文化的生活</li>
                <li>✓ 美しい建築</li>
                <li>✓ 最高のレストラン・カフェ</li>
              </ul>
            </div>
            <div>
              <p class="font-semibold text-gray-800">デメリット</p>
              <ul class="text-gray-600 space-y-1">
                <li>✗ 時に騒がしい</li>
                <li>✗ 駐車場が限られる</li>
                <li>✗ 古い建物</li>
                <li>✗ 近代的な設備が少ない</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Tangamanga -->
    <div class="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
      <div class="md:flex">
        <div class="md:w-1/3 bg-gradient-to-br from-green-500 to-teal-600 p-6 text-white">
          <h3 class="text-2xl font-bold mb-2">Tangamanga</h3>
          <p class="text-green-100 text-sm mb-4">緑豊か、アクティブ、中価格帯</p>
          <div class="space-y-2 text-sm">
            <p><strong>家賃相場：</strong>500～900米ドル</p>
            <p><strong>最適な対象：</strong>アクティブなライフスタイル、自然</p>
            <p><strong>安全性：</strong>★★★★☆</p>
          </div>
        </div>
        <div class="md:w-2/3 p-6">
          <p class="text-gray-600 mb-4">メキシコ最大級の都市公園の一つであるParque Tangamangaに隣接するこのエリアは、緑地、利便性、手頃さのバランスが取れています。若い専門職やアクティブな退職者に人気です。</p>
          <div class="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p class="font-semibold text-gray-800">メリット</p>
              <ul class="text-gray-600 space-y-1">
                <li>✓ 広大な都市公園が近い</li>
                <li>✓ ジョギングやサイクリングに最適</li>
                <li>✓ 中価格帯</li>
                <li>✓ 近くに良いレストラン</li>
              </ul>
            </div>
            <div>
              <p class="font-semibold text-gray-800">デメリット</p>
              <ul class="text-gray-600 space-y-1">
                <li>✗ 全体的に徒歩には不向き</li>
                <li>✗ ナイトライフの選択肢が少ない</li>
                <li>✗ 一部で交通渋滞</li>
                <li>✗ 公共交通が限られる</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Zona Industrial/Morales -->
    <div class="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
      <div class="md:flex">
        <div class="md:w-1/3 bg-gradient-to-br from-blue-500 to-indigo-600 p-6 text-white">
          <h3 class="text-2xl font-bold mb-2">Zona Industrial / Morales</h3>
          <p class="text-blue-100 text-sm mb-4">近代的、手頃、実用的</p>
          <div class="space-y-2 text-sm">
            <p><strong>家賃相場：</strong>350～600米ドル</p>
            <p><strong>最適な対象：</strong>予算重視の人、労働者</p>
            <p><strong>安全性：</strong>★★★☆☆</p>
          </div>
        </div>
        <div class="md:w-2/3 p-6">
          <p class="text-gray-600 mb-4">工業団地に近いこのエリアは、近代的なアパートと、BMWやGMなど主要雇用主への容易なアクセスにより、優れたコストパフォーマンスを提供します。新しい開発が進み、急速に成長しています。</p>
          <div class="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p class="font-semibold text-gray-800">メリット</p>
              <ul class="text-gray-600 space-y-1">
                <li>✓ 非常に手頃</li>
                <li>✓ 主要雇用主が近い</li>
                <li>✓ 新築物件</li>
                <li>✓ 高速道路へのアクセスが良好</li>
              </ul>
            </div>
            <div>
              <p class="font-semibold text-gray-800">デメリット</p>
              <ul class="text-gray-600 space-y-1">
                <li>✗ 中心部から遠い</li>
                <li>✗ 個性に欠ける</li>
                <li>✗ 工業的な周辺環境</li>
                <li>✗ レストラン・文化施設が少ない</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

  <h3 id="housing-search" class="text-xl font-bold text-gray-800 mt-10 mb-4">住まいの探し方</h3>

  <!-- How-To Box -->
  <div class="not-prose my-8 bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-2xl p-6">
    <h4 class="text-lg font-bold text-gray-900 mb-4">手順：SLPでアパートを見つける</h4>

    <div class="space-y-4">
      <div class="flex gap-4">
        <div class="flex-shrink-0 w-8 h-8 bg-gray-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
        <div>
          <h5 class="font-semibold text-gray-900">地元のプラットフォームを使う</h5>
          <p class="text-sm text-gray-600">おすすめのサイト：<strong>Inmuebles24.com</strong>、<strong>Segundamano.mx</strong>、<strong>Vivanuncios.com</strong>。「Renta de Departamentos SLP」のようなFacebookグループも人気です。</p>
        </div>
      </div>
      <div class="flex gap-4">
        <div class="flex-shrink-0 w-8 h-8 bg-gray-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
        <div>
          <h5 class="font-semibold text-gray-900">まず現地に来てから探す</h5>
          <p class="text-sm text-gray-600">2～4週間Airbnbを予約し、実際に地区を見て回りましょう。最良の賃貸物件の多くはオンラインに掲載されていません。</p>
        </div>
      </div>
      <div class="flex gap-4">
        <div class="flex-shrink-0 w-8 h-8 bg-gray-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
        <div>
          <h5 class="font-semibold text-gray-900">賃貸契約の条件を理解する</h5>
          <p class="text-sm text-gray-600">一般的な契約：最低1年。敷金：家賃1～2か月分。<strong>aval</strong>（地元に不動産を持つ連帯保証人）が必要な場合や、代わりに追加の敷金を支払う場合があります。</p>
        </div>
      </div>
      <div class="flex gap-4">
        <div class="flex-shrink-0 w-8 h-8 bg-gray-600 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
        <div>
          <h5 class="font-semibold text-gray-900">交渉する</h5>
          <p class="text-sm text-gray-600">価格は交渉可能なことが多く、特に長期契約や数か月分を前払いする場合はそうです。光熱費や家具を含めてもらえるか尋ねてみましょう。</p>
        </div>
      </div>
    </div>
  </div>

  <!-- HEALTHCARE SECTION -->
  <h2 id="healthcare-system" class="text-3xl font-bold text-gray-900 mt-16 mb-6 flex items-center gap-3">
    <span class="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 text-xl">5</span>
    医療制度
  </h2>

  <p>
    メキシコには公的・民間の両方の医療の選択肢があり、San Luis Potosíは都市の規模に対して優れた施設を備えています。選択肢を理解することは、移住計画に不可欠です。<sup>[8]</sup>
  </p>

  <!-- Healthcare Options -->
  <div class="not-prose my-8 grid md:grid-cols-2 gap-6">
    <!-- Public Healthcare -->
    <div class="bg-green-50 border border-green-200 rounded-2xl p-6">
      <h3 class="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
        </svg>
        公的：IMSS
      </h3>
      <p class="text-sm text-gray-700 mb-4">
        Instituto Mexicano del Seguro Social（IMSS、メキシコ社会保険庁）は、任意加入プログラムを通じて、合法的な居住資格を持つ外国人居住者に包括的な保障を提供します。
      </p>
      <div class="bg-white rounded-xl p-4">
        <p class="font-semibold text-gray-800 mb-2">2024年の年間費用<sup>[8]</sup></p>
        <ul class="text-sm space-y-1 text-gray-600">
          <li>0～19歳：約4,800 MXN（240米ドル）</li>
          <li>20～39歳：約6,200 MXN（310米ドル）</li>
          <li>40～59歳：約8,100 MXN（405米ドル）</li>
          <li>60歳以上：約10,500 MXN（525米ドル）</li>
        </ul>
      </div>
      <p class="text-xs text-gray-500 mt-4">保障内容：診察、入院、手術、薬剤、検査、産科ケア</p>
    </div>

    <!-- Private Healthcare -->
    <div class="bg-blue-50 border border-blue-200 rounded-2xl p-6">
      <h3 class="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
        </svg>
        民間保険
      </h3>
      <p class="text-sm text-gray-700 mb-4">
        民間保険は、待ち時間の短縮、英語を話す医師、そして高級施設へのアクセスを提供します。SLPでは、メキシコ国内および国際的な保険会社が複数営業しています。
      </p>
      <div class="bg-white rounded-xl p-4">
        <p class="font-semibold text-gray-800 mb-2">月額の目安</p>
        <ul class="text-sm space-y-1 text-gray-600">
          <li>ベーシック（高免責額）：50～80米ドル</li>
          <li>標準保障：100～150米ドル</li>
          <li>総合型：150～250米ドル</li>
          <li>プレミアム（国際）：300米ドル以上</li>
        </ul>
      </div>
      <p class="text-xs text-gray-500 mt-4">人気の保険会社：GNP、AXA、Seguros Monterrey、BUPA、Cigna Global</p>
    </div>
  </div>

  <h3 id="hospitals" class="text-xl font-bold text-gray-800 mt-10 mb-4">SLPのおすすめの病院・クリニック</h3>

  <!-- Hospital List -->
  <div class="not-prose my-8 overflow-x-auto">
    <table class="min-w-full bg-white border border-gray-200 rounded-xl overflow-hidden">
      <thead class="bg-gray-100">
        <tr>
          <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">病院</th>
          <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">種別</th>
          <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">専門分野</th>
          <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">英語対応</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-200">
        <tr>
          <td class="px-4 py-3 text-sm font-medium text-gray-900">Hospital Ángeles</td>
          <td class="px-4 py-3 text-sm text-gray-600">民間</td>
          <td class="px-4 py-3 text-sm text-gray-600">総合診療、救急、専門医</td>
          <td class="px-4 py-3 text-sm text-green-600">あり</td>
        </tr>
        <tr class="bg-gray-50">
          <td class="px-4 py-3 text-sm font-medium text-gray-900">Hospital Lomas</td>
          <td class="px-4 py-3 text-sm text-gray-600">民間</td>
          <td class="px-4 py-3 text-sm text-gray-600">一般、産科、小児科</td>
          <td class="px-4 py-3 text-sm text-green-600">一部スタッフ</td>
        </tr>
        <tr>
          <td class="px-4 py-3 text-sm font-medium text-gray-900">Star Médica</td>
          <td class="px-4 py-3 text-sm text-gray-600">民間</td>
          <td class="px-4 py-3 text-sm text-gray-600">総合診療、近代的施設</td>
          <td class="px-4 py-3 text-sm text-green-600">あり</td>
        </tr>
        <tr class="bg-gray-50">
          <td class="px-4 py-3 text-sm font-medium text-gray-900">Hospital Central（IMSS）</td>
          <td class="px-4 py-3 text-sm text-gray-600">公的</td>
          <td class="px-4 py-3 text-sm text-gray-600">救急、一般診療</td>
          <td class="px-4 py-3 text-sm text-red-600">限定的</td>
        </tr>
        <tr>
          <td class="px-4 py-3 text-sm font-medium text-gray-900">Beneficencia Española</td>
          <td class="px-4 py-3 text-sm text-gray-600">民間</td>
          <td class="px-4 py-3 text-sm text-gray-600">一般、手頃な民間の選択肢</td>
          <td class="px-4 py-3 text-sm text-green-600">一部スタッフ</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Tip Note -->
  <div class="not-prose my-6 bg-blue-50 border-l-4 border-blue-400 rounded-r-xl p-4">
    <div class="flex items-start gap-3">
      <svg class="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
      <div>
        <p class="font-semibold text-blue-800">プロのヒント：二重保障の戦略</p>
        <p class="text-sm text-blue-700">多くの外国人居住者は組み合わせを利用しています。日常的な診療と処方にはIMSS（非常に手頃）を使い、それに加えて緊急時や大がかりな処置には高免責額の民間保険を利用します。このアプローチにかかる費用は、通常合計で年間600～800米ドルです。</p>
      </div>
    </div>
  </div>

  <!-- BANKING SECTION -->
  <h2 id="banking" class="text-3xl font-bold text-gray-900 mt-16 mb-6 flex items-center gap-3">
    <span class="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 text-xl">6</span>
    銀行・金融
  </h2>

  <p>
    メキシコの銀行口座を開設すると、家賃の支払いから入金の受け取りまで、日常生活が簡単になります。外国人居住者としてメキシコで銀行取引を行う際に知っておくべきことは次のとおりです。<sup>[9]</sup>
  </p>

  <h3 class="text-xl font-bold text-gray-800 mt-8 mb-4">銀行口座の開設</h3>

  <p>
    メキシコの銀行は、適切な書類があれば外国人の口座を開設します。要件は銀行によって異なりますが、通常は以下が含まれます。<sup>[9]</sup>
  </p>

  <ul>
    <li><strong>パスポート</strong> - 原本とコピー</li>
    <li><strong>ビザ／居住者カード</strong> - Temporary ResidentまたはPermanent Residentのカード</li>
    <li><strong>住所証明</strong> - 光熱費の請求書、銀行取引明細書、または賃貸契約書（3か月以内のもの）</li>
    <li><strong>RFC（納税者番号）</strong> - 一部の銀行では必須、他の銀行では取得を支援</li>
    <li><strong>初回入金</strong> - 通常1,000～5,000 MXNが最低額</li>
  </ul>

  <!-- Bank Comparison -->
  <div class="not-prose my-8 overflow-x-auto">
    <table class="min-w-full bg-white border border-gray-200 rounded-xl overflow-hidden">
      <thead class="bg-gray-100">
        <tr>
          <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">銀行</th>
          <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">外国人への対応</th>
          <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">英語対応アプリ</th>
          <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">備考</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-200">
        <tr>
          <td class="px-4 py-3 text-sm font-medium text-gray-900">BBVA México</td>
          <td class="px-4 py-3 text-sm text-green-600">★★★★★</td>
          <td class="px-4 py-3 text-sm text-green-600">あり</td>
          <td class="px-4 py-3 text-sm text-gray-600">外国人に最も人気、優れたモバイルアプリ</td>
        </tr>
        <tr class="bg-gray-50">
          <td class="px-4 py-3 text-sm font-medium text-gray-900">Santander</td>
          <td class="px-4 py-3 text-sm text-green-600">★★★★☆</td>
          <td class="px-4 py-3 text-sm text-green-600">あり</td>
          <td class="px-4 py-3 text-sm text-gray-600">国際送金、外国人向け口座</td>
        </tr>
        <tr>
          <td class="px-4 py-3 text-sm font-medium text-gray-900">Citibanamex</td>
          <td class="px-4 py-3 text-sm text-yellow-600">★★★★☆</td>
          <td class="px-4 py-3 text-sm text-green-600">あり</td>
          <td class="px-4 py-3 text-sm text-gray-600">広範なATM網、老舗銀行</td>
        </tr>
        <tr class="bg-gray-50">
          <td class="px-4 py-3 text-sm font-medium text-gray-900">HSBC</td>
          <td class="px-4 py-3 text-sm text-green-600">★★★★★</td>
          <td class="px-4 py-3 text-sm text-green-600">あり</td>
          <td class="px-4 py-3 text-sm text-gray-600">米国口座を持つPremier顧客に最適</td>
        </tr>
        <tr>
          <td class="px-4 py-3 text-sm font-medium text-gray-900">Banorte</td>
          <td class="px-4 py-3 text-sm text-yellow-600">★★★☆☆</td>
          <td class="px-4 py-3 text-sm text-red-600">限定的</td>
          <td class="px-4 py-3 text-sm text-gray-600">メキシコ最大の銀行、より多くの書類が必要な場合あり</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Definition Note -->
  <div class="not-prose my-6 bg-gray-50 border-l-4 border-gray-400 rounded-r-xl p-4">
    <div class="flex items-start gap-3">
      <svg class="w-6 h-6 text-gray-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
      </svg>
      <div>
        <p class="font-semibold text-gray-800">RFCとは？</p>
        <p class="text-sm text-gray-600">Registro Federal de Contribuyentes（RFC）は、メキシコの納税者識別番号です。銀行取引、賃貸契約の締結、あらゆる金融取引に不可欠です。RFCは、SAT（Servicio de Administración Tributaria、税務行政庁）の事務所で、またはsat.gob.mxのオンラインで、CURP（移民手続きの際に取得するもう一つの識別番号）を用いて取得できます。<sup>[10]</sup></p>
      </div>
    </div>
  </div>

  <h3 class="text-xl font-bold text-gray-800 mt-8 mb-4">送金の選択肢</h3>

  <p>母国とメキシコの間で資金を移動するには、以下の選択肢を検討してください。</p>

  <ul>
    <li><strong>Wise（TransferWise）：</strong>最良の為替レート、低手数料、マルチ通貨口座</li>
    <li><strong>Remitly：</strong>定期的な送金に適しており、着金が速い</li>
    <li><strong>XE：</strong>高額の送金に競争力のあるレート</li>
    <li><strong>Charles Schwab：</strong>世界中でATM手数料無料（米国市民向け）</li>
    <li><strong>従来の電信送金：</strong>手数料は高いが、高額送金に対応</li>
  </ul>

  <!-- TRANSPORTATION SECTION -->
  <h2 id="transportation" class="text-3xl font-bold text-gray-900 mt-16 mb-6 flex items-center gap-3">
    <span class="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 text-xl">7</span>
    交通ガイド
  </h2>

  <p>
    San Luis Potosíの移動は、手頃な公共交通機関から配車アプリまで、複数の選択肢があり簡単です。以下は、完全な交通ガイドです。
  </p>

  <!-- Transportation Options -->
  <div class="not-prose my-8 grid md:grid-cols-2 gap-6">

    <!-- Public Transit -->
    <div class="bg-white border border-gray-200 rounded-xl p-5">
      <h4 class="font-bold text-gray-900 mb-3 flex items-center gap-2">
        <span class="text-2xl">🚌</span> 公共交通機関（MetroRed）
      </h4>
      <p class="text-sm text-gray-600 mb-3">市内のバスシステムは、ほとんどのエリアをそれなりの運行頻度でカバーしています。</p>
      <ul class="text-sm space-y-2 text-gray-700">
        <li><strong>片道：</strong>15.50 MXN（約0.75米ドル）</li>
        <li><strong>チャージ式カード：</strong>各駅で入手可能</li>
        <li><strong>運行時間：</strong>午前5時～午後11時</li>
        <li><strong>カバー範囲：</strong>Centro、Lomas、工業地帯</li>
      </ul>
    </div>

    <!-- Uber/DiDi -->
    <div class="bg-white border border-gray-200 rounded-xl p-5">
      <h4 class="font-bold text-gray-900 mb-3 flex items-center gap-2">
        <span class="text-2xl">📱</span> 配車サービス（Uber／DiDi）
      </h4>
      <p class="text-sm text-gray-600 mb-3">UberとDiDiはどちらも市内全域で安定して運行しています。</p>
      <ul class="text-sm space-y-2 text-gray-700">
        <li><strong>基本料金：</strong>約25～30 MXN（1.25米ドル）</li>
        <li><strong>1kmあたり：</strong>約8～10 MXN（0.50米ドル）</li>
        <li><strong>CentroからLomasまで：</strong>約80～100 MXN（4～5米ドル）</li>
        <li><strong>待ち時間：</strong>通常3～8分</li>
      </ul>
    </div>

    <!-- Taxis -->
    <div class="bg-white border border-gray-200 rounded-xl p-5">
      <h4 class="font-bold text-gray-900 mb-3 flex items-center gap-2">
        <span class="text-2xl">🚕</span> 従来のタクシー
      </h4>
      <p class="text-sm text-gray-600 mb-3">正規のタクシーは黄色で、メーター（taxímetro）を使用するはずです。</p>
      <ul class="text-sm space-y-2 text-gray-700">
        <li><strong>初乗り料金：</strong>30 MXN（約1.50米ドル）</li>
        <li><strong>1kmあたり：</strong>約12 MXN（0.60米ドル）</li>
        <li><strong>空港からCentroまで：</strong>約250 MXN（12米ドル）</li>
        <li><strong>ヒント：</strong>メーターがない場合は事前に料金を決める</li>
      </ul>
    </div>

    <!-- Driving -->
    <div class="bg-white border border-gray-200 rounded-xl p-5">
      <h4 class="font-bold text-gray-900 mb-3 flex items-center gap-2">
        <span class="text-2xl">🚗</span> 運転／レンタカー
      </h4>
      <p class="text-sm text-gray-600 mb-3">州内の探索や日帰り旅行に便利です。</p>
      <ul class="text-sm space-y-2 text-gray-700">
        <li><strong>レンタル：</strong>1日約30～50米ドル</li>
        <li><strong>ガソリン：</strong>1リットル約22 MXN（1.10米ドル）</li>
        <li><strong>免許：</strong>外国免許は6か月間有効、その後はメキシコの免許が必要</li>
        <li><strong>保険：</strong>必須、年間約300米ドル</li>
      </ul>
    </div>
  </div>

  <!-- INTERNET & PHONE SECTION -->
  <h2 id="internet-phone" class="text-3xl font-bold text-gray-900 mt-16 mb-6 flex items-center gap-3">
    <span class="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 text-xl">8</span>
    インターネット・電話
  </h2>

  <p>
    信頼できるインターネットは、リモートワーカーやデジタルノマドにとって不可欠です。San Luis Potosíは、ほとんどのエリアで光ファイバー接続を提供する複数のプロバイダーがあり、良好なインフラを備えています。
  </p>

  <h3 class="text-xl font-bold text-gray-800 mt-8 mb-4">インターネットプロバイダー</h3>

  <div class="not-prose my-8 overflow-x-auto">
    <table class="min-w-full bg-white border border-gray-200 rounded-xl overflow-hidden">
      <thead class="bg-gray-100">
        <tr>
          <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">プロバイダー</th>
          <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">速度の選択肢</th>
          <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">月額費用</th>
          <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">備考</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-200">
        <tr>
          <td class="px-4 py-3 text-sm font-medium text-gray-900">Telmex（Infinitum）</td>
          <td class="px-4 py-3 text-sm text-gray-600">20～200 Mbps</td>
          <td class="px-4 py-3 text-sm text-gray-600">350～700 MXN</td>
          <td class="px-4 py-3 text-sm text-gray-600">最も広いカバー範囲、信頼性が高い</td>
        </tr>
        <tr class="bg-gray-50">
          <td class="px-4 py-3 text-sm font-medium text-gray-900">Totalplay</td>
          <td class="px-4 py-3 text-sm text-gray-600">100～500 Mbps</td>
          <td class="px-4 py-3 text-sm text-gray-600">450～900 MXN</td>
          <td class="px-4 py-3 text-sm text-gray-600">光ファイバー、高速</td>
        </tr>
        <tr>
          <td class="px-4 py-3 text-sm font-medium text-gray-900">Izzi</td>
          <td class="px-4 py-3 text-sm text-gray-600">50～300 Mbps</td>
          <td class="px-4 py-3 text-sm text-gray-600">400～800 MXN</td>
          <td class="px-4 py-3 text-sm text-gray-600">お得なセットプラン</td>
        </tr>
        <tr class="bg-gray-50">
          <td class="px-4 py-3 text-sm font-medium text-gray-900">Megacable</td>
          <td class="px-4 py-3 text-sm text-gray-600">50～200 Mbps</td>
          <td class="px-4 py-3 text-sm text-gray-600">400～700 MXN</td>
          <td class="px-4 py-3 text-sm text-gray-600">地域プロバイダー</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3 class="text-xl font-bold text-gray-800 mt-8 mb-4">携帯電話のプラン</h3>

  <p>
    メキシコの携帯プランは手頃で、良好なカバー範囲を提供します。主なキャリアはTelcel、AT&T México、Movistarです。プリペイド（prepago）プランは、新規居住者にとって便利です。
  </p>

  <ul>
    <li><strong>Telcel：</strong>全国で最良のカバー範囲、データ無制限で月約400～600 MXN</li>
    <li><strong>AT&T México：</strong>都市部で良好、競争力のあるデータプラン、月約350～500 MXN</li>
    <li><strong>Movistar：</strong>予算に優しい、月約250～400 MXN</li>
  </ul>

  <!-- SAFETY SECTION -->
  <h2 id="safety" class="text-3xl font-bold text-gray-900 mt-16 mb-6 flex items-center gap-3">
    <span class="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 text-xl">9</span>
    安全・治安
  </h2>

  <p>
    安全は、メキシコを検討する外国人居住者にとって当然の関心事です。San Luis Potosí市は、特に国境地帯や一部の沿岸部と比べて、一般的に安全とされています。以下は、公式データに基づく客観的な評価です。<sup>[11]</sup>
  </p>

  <!-- Safety Stats -->
  <div class="not-prose my-8 bg-white border border-gray-200 rounded-2xl p-6">
    <h3 class="font-bold text-gray-900 mb-4">安全指数の比較（Numbeo 2024年）</h3>
    <p class="text-sm text-gray-600 mb-4">スコアが高いほど安全。尺度：0～100<sup>[6]</sup></p>
    <div class="space-y-3">
      <div>
        <div class="flex justify-between text-sm mb-1">
          <span>San Luis Potosí</span>
          <span class="font-bold text-green-600">52.4</span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-2">
          <div class="bg-green-500 h-2 rounded-full" style="width: 52.4%"></div>
        </div>
      </div>
      <div>
        <div class="flex justify-between text-sm mb-1">
          <span>Mexico City</span>
          <span class="font-bold text-yellow-600">41.2</span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-2">
          <div class="bg-yellow-500 h-2 rounded-full" style="width: 41.2%"></div>
        </div>
      </div>
      <div>
        <div class="flex justify-between text-sm mb-1">
          <span>Guadalajara</span>
          <span class="font-bold text-yellow-600">44.8</span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-2">
          <div class="bg-yellow-500 h-2 rounded-full" style="width: 44.8%"></div>
        </div>
      </div>
      <div>
        <div class="flex justify-between text-sm mb-1">
          <span>Mérida（最も安全な主要都市）</span>
          <span class="font-bold text-green-600">72.1</span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-2">
          <div class="bg-green-500 h-2 rounded-full" style="width: 72.1%"></div>
        </div>
      </div>
    </div>
  </div>

  <h3 class="text-xl font-bold text-gray-800 mt-8 mb-4">外国人居住者のための安全のヒント</h3>

  <ul>
    <li><strong>よく知られたエリアにとどまる：</strong>Centro Histórico、Lomas、Tangamangaはいずれも昼夜を問わず安全です</li>
    <li><strong>夜はUberを使う：</strong>路上でタクシーを拾うより安全です</li>
    <li><strong>派手な見せびらかしを避ける：</strong>高価な宝飾品を身につけたり、現金を見せびらかしたりしないでください</li>
    <li><strong>スペイン語を少し学ぶ：</strong>コミュニケーションが取れると、どんな状況でも役立ちます</li>
    <li><strong>大使館に登録する：</strong>米国市民はSTEPプログラム、その他の方は自国の同等の制度をご確認ください</li>
    <li><strong>コピーを保管する：</strong>パスポート、ビザ、重要書類のデジタルコピーをクラウドに保存しておきましょう</li>
  </ul>

  <!-- FAQ SECTION -->
  <h2 id="faq" class="text-3xl font-bold text-gray-900 mt-16 mb-6 flex items-center gap-3">
    <span class="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 text-xl">10</span>
    よくある質問
  </h2>

  <div class="not-prose space-y-4 my-8">
    <!-- FAQ Item 1 -->
    <details class="bg-white border border-gray-200 rounded-xl overflow-hidden group">
      <summary class="px-6 py-4 cursor-pointer flex justify-between items-center hover:bg-gray-50">
        <span class="font-medium text-gray-900">San Luis Potosíで暮らすにはスペイン語を話す必要がありますか？</span>
        <svg class="w-5 h-5 text-gray-500 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
        </svg>
      </summary>
      <div class="px-6 py-4 bg-gray-50 border-t border-gray-200">
        <p class="text-gray-700">観光地や一部の店舗では英語で何とかなりますが、SLPでの日常生活にはスペイン語が不可欠です。San Miguel de AllendeやCancúnとは異なり、ここには大規模な英語対応のインフラはありません。基本的なスペイン語があれば、体験は大きく向上します。多くの外国人居住者は、地元の語学学校（UASLPのCELE、または1時間約10～15米ドルの個人講師）でスペイン語のレッスンを受けています。</p>
      </div>
    </details>

    <!-- FAQ Item 2 -->
    <details class="bg-white border border-gray-200 rounded-xl overflow-hidden group">
      <summary class="px-6 py-4 cursor-pointer flex justify-between items-center hover:bg-gray-50">
        <span class="font-medium text-gray-900">観光ビザでリモートワークはできますか？</span>
        <svg class="w-5 h-5 text-gray-500 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
        </svg>
      </summary>
      <div class="px-6 py-4 bg-gray-50 border-t border-gray-200">
        <p class="text-gray-700">技術的には、観光ビザでの就労（海外の顧客向けのリモートワークであっても）は、メキシコの法律ではグレーゾーンです。海外から収入を得るリモートワーカーへの取り締まりは最小限ですが、長期滞在して就労する予定がある場合は、Temporary Residency（一時居住権）を取得するのが最も安全な方法です。これにより、銀行取引、医療、その他のサービスへのアクセスも得られます。</p>
      </div>
    </details>

    <!-- FAQ Item 3 -->
    <details class="bg-white border border-gray-200 rounded-xl overflow-hidden group">
      <summary class="px-6 py-4 cursor-pointer flex justify-between items-center hover:bg-gray-50">
        <span class="font-medium text-gray-900">医療の質は米国・欧州と比べてどうですか？</span>
        <svg class="w-5 h-5 text-gray-500 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
        </svg>
      </summary>
      <div class="px-6 py-4 bg-gray-50 border-t border-gray-200">
        <p class="text-gray-700">メキシコの民間医療は概して優れています。多くの医師が米国や欧州で研修を受けており、Hospital Ángelesのような施設は国際水準を満たしています。日常的な診療では、先進国に匹敵する質を、その何分の一かの費用で受けられます。複雑な処置については、専門医を求めてMexico CityやGuadalajaraへ行く外国人居住者もいますが、SLPにもほとんどの分野で有能な医師がいます。</p>
      </div>
    </details>

    <!-- FAQ Item 4 -->
    <details class="bg-white border border-gray-200 rounded-xl overflow-hidden group">
      <summary class="px-6 py-4 cursor-pointer flex justify-between items-center hover:bg-gray-50">
        <span class="font-medium text-gray-900">水道水は飲んでも安全ですか？</span>
        <svg class="w-5 h-5 text-gray-500 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
        </svg>
      </summary>
      <div class="px-6 py-4 bg-gray-50 border-t border-gray-200">
        <p class="text-gray-700">いいえ。メキシコの大部分と同様に、SLPでも水道水を飲むべきではありません。自宅に配達される garrafones（20Lの浄水ボトル、1本あたり約35～50 MXN）を利用するか、浄水システムを設置してください。地元の人々や外国人居住者の多くはgarrafonesを利用しており、配達業者が空のボトルを定期的に満杯のものと交換してくれます。レストランの氷は一般的に安全です（浄水で作られています）。</p>
      </div>
    </details>

    <!-- FAQ Item 5 -->
    <details class="bg-white border border-gray-200 rounded-xl overflow-hidden group">
      <summary class="px-6 py-4 cursor-pointer flex justify-between items-center hover:bg-gray-50">
        <span class="font-medium text-gray-900">外国人コミュニティはどのような感じですか？</span>
        <svg class="w-5 h-5 text-gray-500 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
        </svg>
      </summary>
      <div class="px-6 py-4 bg-gray-50 border-t border-gray-200">
        <p class="text-gray-700">SLPには、小規模ながら成長中の外国人コミュニティがあり、主に次の人々で構成されています。(1) 国際企業（BMW、GMのサプライヤー、航空宇宙）で働く専門職、(2) 手頃な暮らしを求める退職者、(3) デジタルノマドやリモートワーカー、(4) メキシコ人の配偶者。San Miguel de Allendeとは異なり、大規模で組織化された外国人グループは見当たりませんが、Facebookグループや非公式の交流会があります。多くの外国人居住者は、メキシコ文化とのより本物の融合を高く評価しています。</p>
      </div>
    </details>

    <!-- FAQ Item 6 -->
    <details class="bg-white border border-gray-200 rounded-xl overflow-hidden group">
      <summary class="px-6 py-4 cursor-pointer flex justify-between items-center hover:bg-gray-50">
        <span class="font-medium text-gray-900">一年を通しての天候はどうですか？</span>
        <svg class="w-5 h-5 text-gray-500 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
        </svg>
      </summary>
      <div class="px-6 py-4 bg-gray-50 border-t border-gray-200">
        <p class="text-gray-700">SLPは半乾燥気候で、一年を通して穏やかな気温です。夏（5月～9月）は暖かく、午後に雨が降ることがあります。最高気温は約28～32℃（82～90°F）です。冬（11月～2月）は温暖で乾燥しており、最高気温は約20～24℃（68～75°F）、夜は約5～10℃（41～50°F）と涼しくなります。標高（1,864m）のおかげで、夏でも気温は穏やかに保たれます。冬の夜には重ね着を持参してください。</p>
      </div>
    </details>

    <!-- FAQ Item 7 -->
    <details class="bg-white border border-gray-200 rounded-xl overflow-hidden group">
      <summary class="px-6 py-4 cursor-pointer flex justify-between items-center hover:bg-gray-50">
        <span class="font-medium text-gray-900">ペットをメキシコに連れて行けますか？</span>
        <svg class="w-5 h-5 text-gray-500 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
        </svg>
      </summary>
      <div class="px-6 py-4 bg-gray-50 border-t border-gray-200">
        <p class="text-gray-700">はい！メキシコはペットに優しい国です。要件：(1) 獣医師による健康診断書（渡航の10日以内に発行）、(2) 有効な狂犬病予防接種（渡航の15日前から1年前までの間に接種）、(3) 犬・猫の場合、輸入許可は不要です。航空会社には独自のペットに関する規定があります。多くのアパートはペットを許可しています（契約前に確認してください）。SLPには良い獣医療があり、日常的な診察は30～50米ドルが目安です。</p>
      </div>
    </details>

    <!-- FAQ Item 8 -->
    <details class="bg-white border border-gray-200 rounded-xl overflow-hidden group">
      <summary class="px-6 py-4 cursor-pointer flex justify-between items-center hover:bg-gray-50">
        <span class="font-medium text-gray-900">外国人居住者としてメキシコの税金はどう支払いますか？</span>
        <svg class="w-5 h-5 text-gray-500 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
        </svg>
      </summary>
      <div class="px-6 py-4 bg-gray-50 border-t border-gray-200">
        <p class="text-gray-700">税務上の居住者判定は複雑なので、メキシコの会計士（contador）に相談してください。一般的に、メキシコで年間183日以上過ごすと、税務上の居住者になる可能性があります。メキシコは居住者の全世界所得に課税します。米国市民は、FATCA報告に関して追加の複雑さに直面します。多くの外国人居住者は、外国人課税に精通した会計士を利用しており、基本的な税務サービスで年間200～500米ドルが目安です。所得税率：所得水準に応じて1.92％～35％です。<sup>[10]</sup></p>
      </div>
    </details>

    <!-- FAQ Item 9 -->
    <details class="bg-white border border-gray-200 rounded-xl overflow-hidden group">
      <summary class="px-6 py-4 cursor-pointer flex justify-between items-center hover:bg-gray-50">
        <span class="font-medium text-gray-900">インターナショナルスクールはありますか？</span>
        <svg class="w-5 h-5 text-gray-500 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
        </svg>
      </summary>
      <div class="px-6 py-4 bg-gray-50 border-t border-gray-200">
        <p class="text-gray-700">はい、SLPにはバイリンガル・インターナショナルスクールの選択肢がいくつかあります。(1) Instituto Potosino - バイリンガルカリキュラム、(2) Colegio Motolinia - カトリック系、バイリンガル、(3) American School of San Luis Potosí、(4) 各種モンテッソーリ校。学費は学校によって年間3,000～10,000米ドルの幅があります。ほとんどはスペイン語で授業を行い、英語の授業も実施しています。</p>
      </div>
    </details>

    <!-- FAQ Item 10 -->
    <details class="bg-white border border-gray-200 rounded-xl overflow-hidden group">
      <summary class="px-6 py-4 cursor-pointer flex justify-between items-center hover:bg-gray-50">
        <span class="font-medium text-gray-900">ナイトライフや社交の場はどのような感じですか？</span>
        <svg class="w-5 h-5 text-gray-500 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
        </svg>
      </summary>
      <div class="px-6 py-4 bg-gray-50 border-t border-gray-200">
        <p class="text-gray-700">SLPには、歴史地区を中心とした活気ある社交の場があります。クラフトビアバー、メスカレリア（mezcalerías）、ライブ音楽の会場、クラブがあります。人気のエリア：Callejón de San Francisco、Plaza del Carmen、そしてさまざまなルーフトップバー。この都市は大学町（UASLP）でもあるため、若く活気に満ちた雰囲気があります。文化イベント、コンサート、祭りが一年を通して開催されます。</p>
      </div>
    </details>

    <!-- FAQ Item 11 -->
    <details class="bg-white border border-gray-200 rounded-xl overflow-hidden group">
      <summary class="px-6 py-4 cursor-pointer flex justify-between items-center hover:bg-gray-50">
        <span class="font-medium text-gray-900">米国・外国の運転免許証は使えますか？</span>
        <svg class="w-5 h-5 text-gray-500 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
        </svg>
      </summary>
      <div class="px-6 py-4 bg-gray-50 border-t border-gray-200">
        <p class="text-gray-700">外国の運転免許証は観光客向けに有効です（最長6か月）。居住者になったら、メキシコの免許を取得すべきです。San Luis Potosíでは、これには次のものが必要です。(1) 居住証明、(2) 健康診断、(3) 筆記試験、(4) 実技運転試験。手続きは簡単で、合計で約50～100米ドルかかります。</p>
      </div>
    </details>

    <!-- FAQ Item 12 -->
    <details class="bg-white border border-gray-200 rounded-xl overflow-hidden group">
      <summary class="px-6 py-4 cursor-pointer flex justify-between items-center hover:bg-gray-50">
        <span class="font-medium text-gray-900">荷物をメキシコに送るにはどうすればよいですか？</span>
        <svg class="w-5 h-5 text-gray-500 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
        </svg>
      </summary>
      <div class="px-6 py-4 bg-gray-50 border-t border-gray-200">
        <p class="text-gray-700">選択肢：(1) Menaje de casa（家財の輸入）- 居住者は、居住権取得後6か月以内に一度、中古品を関税なしで輸入できます。(2) 国際引越業者（米国からのフルコンテナで3,000～8,000米ドルが目安）。(3) 多くの外国人居住者はすべてを売却し、メキシコで新品を購入します。ここでは家具が手頃です。かけがえのない品物や書類だけを送ることを検討してください。</p>
      </div>
    </details>
  </div>

  <!-- SOURCES SECTION -->
  <h2 id="sources" class="text-3xl font-bold text-gray-900 mt-16 mb-6 flex items-center gap-3">
    <span class="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 text-xl">11</span>
    出典・参考文献
  </h2>

  <div class="not-prose my-8 bg-gray-50 border border-gray-200 rounded-2xl p-6">
    <p class="text-sm text-gray-600 mb-4">本ガイドのすべての情報は、公式情報源や信頼できるデータベースから検証しています。出典は本文中に上付き数字で引用しています。</p>

    <ol class="text-sm space-y-2 text-gray-700 list-decimal list-inside">
      <li><strong>[1]</strong> UNESCO World Heritage Centre - 「Protective town of San Miguel and the Sanctuary of Jesús Nazareno de Atotonilco」／歴史地区の登録。<a href="https://whc.unesco.org" class="text-primary-600 hover:underline" target="_blank">whc.unesco.org</a></li>
      <li><strong>[2]</strong> Secretaría de Comunicaciones y Transportes（SCT）- 距離の算出と交通インフラ。<a href="https://www.gob.mx/sct" class="text-primary-600 hover:underline" target="_blank">gob.mx/sct</a></li>
      <li><strong>[3]</strong> INEGI（Instituto Nacional de Estadística y Geografía）- 人口データ、GDP統計、経済指標2024年。<a href="https://www.inegi.org.mx" class="text-primary-600 hover:underline" target="_blank">inegi.org.mx</a></li>
      <li><strong>[4]</strong> Servicio Meteorológico Nacional（SMN）- 気候データ、気温と降水量の平均値。<a href="https://smn.conagua.gob.mx" class="text-primary-600 hover:underline" target="_blank">smn.conagua.gob.mx</a></li>
      <li><strong>[5]</strong> Instituto Nacional de Migración（INM）- ビザ要件、居住手続き、移民法。<a href="https://www.gob.mx/inm" class="text-primary-600 hover:underline" target="_blank">gob.mx/inm</a></li>
      <li><strong>[6]</strong> Numbeo - 生活費指数、安全指数、生活の質の比較、2025年12月。<a href="https://www.numbeo.com" class="text-primary-600 hover:underline" target="_blank">numbeo.com</a></li>
      <li><strong>[7]</strong> 地元の不動産物件情報 - Inmuebles24、Segundamano、Vivanuncios - 2025年12月に集計した家賃価格データ</li>
      <li><strong>[8]</strong> IMSS（Instituto Mexicano del Seguro Social）- 公的医療費、任意加入プログラム2024年。<a href="https://www.imss.gob.mx" class="text-primary-600 hover:underline" target="_blank">imss.gob.mx</a></li>
      <li><strong>[9]</strong> メキシコの銀行機関のウェブサイト - BBVA、Santander、Citibanamex、HSBC México - 口座開設要件</li>
      <li><strong>[10]</strong> SAT（Servicio de Administración Tributaria）- 納税者番号（RFC）、所得税率、税務上の義務。<a href="https://www.sat.gob.mx" class="text-primary-600 hover:underline" target="_blank">sat.gob.mx</a></li>
      <li><strong>[11]</strong> Secretariado Ejecutivo del Sistema Nacional de Seguridad Pública - 州別の犯罪統計。<a href="https://www.gob.mx/sesnsp" class="text-primary-600 hover:underline" target="_blank">gob.mx/sesnsp</a></li>
    </ol>

    <p class="text-xs text-gray-500 mt-6">
      <strong>免責事項：</strong>正確性を期すためにあらゆる努力を払っていますが、移民法、費用、規制は頻繁に変更されます。決定を下す前に、必ず重要な情報を公式情報源で確認してください。本ガイドは情報提供を目的としており、法的、金融的、または専門的な助言を構成するものではありません。
    </p>
  </div>

  <!-- Related Guides -->
  <div class="not-prose my-12 bg-gradient-to-r from-primary-50 to-amber-50 border border-primary-200 rounded-2xl p-6">
    <h3 class="text-xl font-bold text-gray-900 mb-4">関連ガイド・記事</h3>
    <div class="grid md:grid-cols-2 gap-4">
      <a href="/blog/cost-of-living-san-luis-potosi-2025" class="block bg-white rounded-xl p-4 hover:shadow-md transition-shadow">
        <p class="font-semibold text-primary-700">生活費の徹底解説</p>
        <p class="text-sm text-gray-600">SLPの支出の詳細な内訳</p>
      </a>
      <a href="/resources/neighborhoods-san-luis-potosi" class="block bg-white rounded-xl p-4 hover:shadow-md transition-shadow">
        <p class="font-semibold text-primary-700">おすすめの地区ガイド</p>
        <p class="text-sm text-gray-600">各コロニア（地区）を詳しく紹介</p>
      </a>
      <a href="/centro-historico" class="block bg-white rounded-xl p-4 hover:shadow-md transition-shadow">
        <p class="font-semibold text-primary-700">歴史地区ガイド</p>
        <p class="text-sm text-gray-600">ユネスコ世界遺産を探索</p>
      </a>
      <a href="/places" class="block bg-white rounded-xl p-4 hover:shadow-md transition-shadow">
        <p class="font-semibold text-primary-700">地元ビジネスディレクトリ</p>
        <p class="text-sm text-gray-600">レストラン、サービスなどを検索</p>
      </a>
    </div>
  </div>

  <!-- Final CTA -->
  <div class="not-prose my-12 bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 text-center text-white">
    <h3 class="text-2xl font-bold mb-4">移住の準備はできましたか？</h3>
    <p class="text-primary-100 mb-6 max-w-2xl mx-auto">
      San Luis Potosíは、より人気の高い外国人居住地の何分の一かの費用で、近代的な設備を備えた本物のメキシコ体験を提供します。SLPでの暮らしに関する毎週の最新情報を受け取るには、ニュースレターをご購読ください。
    </p>
    <a href="/subscribe" class="inline-block bg-white text-primary-700 font-bold px-8 py-3 rounded-xl hover:bg-primary-50 transition-colors">
      San Luis Wayを購読する
    </a>
  </div>

</div>
`;

(async () => {
  const { error: updateError } = await supabase
    .from('blog_posts')
    .update({ content_ja: CONTENT_JA })
    .eq('slug', SLUG);
  if (updateError) {
    console.error('Update failed:', updateError);
    process.exit(1);
  }

  const { data, error } = await supabase
    .from('blog_posts')
    .select('content, content_ja, content_de')
    .eq('slug', SLUG)
    .single();
  if (error) {
    console.error('Re-fetch failed:', error);
    process.exit(1);
  }

  const tagCount = (s) => (s.match(/<[^>]+>/g) || []).length;
  const enTags = tagCount(data.content);
  const jaTags = tagCount(data.content_ja);
  const hasLeftoverEnglish = /\b(Cost of Living|Healthcare|Frequently Asked|Table of Contents|Executive Summary|Neighborhood|Best For|Rent Range)\b/.test(data.content_ja);

  console.log('content_ja length:', data.content_ja.length);
  console.log('content_ja !== content:', data.content_ja !== data.content);
  console.log('content_de length (unchanged expected 20773):', data.content_de.length);
  console.log('EN tag count:', enTags);
  console.log('JA tag count:', jaTags);
  console.log('tag counts match:', enTags === jaTags);
  console.log('leftover English headings detected:', hasLeftoverEnglish);
})();
