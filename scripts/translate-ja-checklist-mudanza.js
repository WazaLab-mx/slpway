// Native Japanese translation of blog post
// `checklist-mudanza-15-pasos-relocacion-slp`.
// Idempotent: updates ONLY content_ja by slug. Verifies via re-fetch.
require('dotenv').config({ path: '.env' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const SLUG = 'checklist-mudanza-15-pasos-relocacion-slp';

const CONTENT_JA = `<div class="bg-yellow-50 p-6 rounded-lg mb-8">
  <h2 class="text-xl font-semibold mb-4">目次</h2>
  <ul class="list-disc pl-6">
    <li><a href="#antes-de-mudarte" class="text-blue-600 hover:text-blue-800">引っ越し前：計画のステップ</a></li>
    <li><a href="#documentos-legales" class="text-blue-600 hover:text-blue-800">法的書類と行政手続きの要件</a></li>
    <li><a href="#vivienda-servicios" class="text-blue-600 hover:text-blue-800">住まいと引っ越しサービス</a></li>
    <li><a href="#adaptacion" class="text-blue-600 hover:text-blue-800">San Luis Potosíでの生活への適応</a></li>
    <li><a href="#pasos-finales" class="text-blue-600 hover:text-blue-800">最後のステップ</a></li>
  </ul>
</div>

<div class="prose prose-lg max-w-none">
  <p class="text-lg text-gray-700 mb-8">San Luis Potosíへの引っ越しは、この実践的なガイドに沿って進めれば、よりシンプルになります。ここでは、引っ越しを最初から最後まで整理して進めるための重要なステップをご紹介します。</p>

  <div class="bg-blue-50 p-6 rounded-lg mb-8">
    <h3 class="text-lg font-semibold mb-4 text-blue-900">主なステップの概要</h3>
    <ol class="list-decimal pl-6 space-y-2">
      <li><strong>San Luis Potosíについて調べる</strong>：地区、気候、住宅の選択肢について知りましょう。家賃は月額7,800 MXNから39,000 MXNまでの幅があります。</li>
      <li><strong>予算とスケジュール</strong>：どれくらい費用をかけるかを決めましょう。すべてを含む引っ越しは、最大で157,950 MXNかかることがあります。</li>
      <li><strong>賢い荷造り</strong>：不要なものは寄付し、箱にラベルを貼り、「必需品ボックス」を用意しましょう。</li>
      <li><strong>法的書類</strong>：<a href="https://www.gob.mx/inm" target="_blank" class="text-blue-600 hover:text-blue-800">国立移民局（INM）</a>でビザと居住手続きを行いましょう。ビザの費用は990 MXNです。</li>
      <li><strong>銀行口座</strong>：<a href="https://www.bbva.mx/" target="_blank" class="text-blue-600 hover:text-blue-800">BBVA</a>や<a href="https://www.hsbc.com.mx/" target="_blank" class="text-blue-600 hover:text-blue-800">HSBC</a>などの銀行で口座を開設しましょう。パスポート、居住カード、住所証明（comprobante de domicilio）を持参してください。</li>
      <li><strong>健康保険</strong>：民間保険または<a href="http://www.imss.gob.mx/" target="_blank" class="text-blue-600 hover:text-blue-800">IMSS</a>を検討しましょう。民間保険はより迅速で専門的な医療を提供します。</li>
      <li><strong>住まいを探す</strong>：予算やライフスタイルに応じて、LomasやZona Industrial（工業地区）などのエリアを検討しましょう。</li>
      <li><strong>基本的なライフライン</strong>：電気（<a href="https://www.cfe.mx/Pages/default.aspx" target="_blank" class="text-blue-600 hover:text-blue-800">CFE</a>）、水道、ガス、インターネットを開通させましょう。身分証明書と住所証明を持参してください。</li>
      <li><strong>言語と習慣に慣れる</strong>：スペイン語を学び、地元の伝統に親しみましょう。</li>
      <li><strong>子どものための学校</strong>：アポスティーユ付きの出生証明書と翻訳済みの卒業証書を用意してお子さんを入学させましょう。</li>
      <li><strong>コミュニティとつながる</strong>：地元のグループやイベントに参加して友人を作り、サポートを受けましょう。</li>
    </ol>
  </div>

  <div class="overflow-x-auto mb-8">
    <table class="min-w-full bg-white border border-gray-200 rounded-lg">
      <thead class="bg-gray-50">
        <tr>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">ステップ</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">概算費用</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">必要な期間</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-200">
        <tr>
          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">居住ビザ</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">990 MXN</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1週間から1か月</td>
        </tr>
        <tr>
          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">住宅の月額家賃</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">7,800〜39,000 MXN</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">立地により異なる</td>
        </tr>
        <tr>
          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">すべてを含む引っ越し</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">157,950 MXN</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">距離により異なる</td>
        </tr>
        <tr>
          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">民間の健康保険</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">条件により異なる</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">即時</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="bg-green-50 border-l-4 border-green-400 p-4 mb-8">
    <p class="text-green-800 font-medium">✅ これらのステップに沿って、整理されたスムーズな引っ越しを実現しましょう。San Luis Potosíがあなたを待っています！</p>
  </div>

  <section id="antes-de-mudarte" class="mb-12">
    <h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">引っ越し前：計画のステップ</h2>
    <p class="text-gray-700 mb-6">今の住まいを離れる前にしっかりと準備しておくことは、San Luis Potosíへの引っ越しでのトラブルを避けるための鍵です。これらの最初のステップは、すべてができるだけスムーズに進むための基盤づくりに役立ちます。それでは、準備が整ってきたところで、法的手続きやそのほかの重要なポイントに進みましょう。</p>

    <div class="mb-8">
      <h3 class="text-2xl font-semibold mb-4 text-blue-900">San Luis Potosíを知る</h3>
      <p class="mb-4">新しい移住先についての情報を持っておくことは、San Luis Potosíへの引っ越しをより容易にするために欠かせません。<strong>100万人を超える住民</strong>を抱えるこの都市 <a href="https://mexicorelocationguide.com/living-in-san-luis-potosi-the-city-most-expats-are-missing-out-on" target="_blank" class="text-blue-600 hover:text-blue-800 underline"><sup>[2]</sup></a>は、一年を通して過ごしやすい気温をもたらす<strong>半砂漠性の気候</strong>が特徴です <a href="https://mexicorelocationguide.com/living-in-san-luis-potosi-the-city-most-expats-are-missing-out-on" target="_blank" class="text-blue-600 hover:text-blue-800 underline"><sup>[2]</sup></a>。さらに、その<strong>中央に位置する立地</strong>のおかげで、Guanajuato、San Miguel de Allende、Mexico Cityといった場所へ簡単に移動できます <a href="https://mexicorelocationguide.com/living-in-san-luis-potosi-the-city-most-expats-are-missing-out-on" target="_blank" class="text-blue-600 hover:text-blue-800 underline"><sup>[2]</sup></a>。</p>

      <p>あなたのライフスタイルと予算に合った<strong>地区を調べましょう</strong>。家賃は、Zona Industrial（工業地区）などのエリアで<strong>月額7,800 MXN</strong>（400 USD）から、La Loma Golfのような高級エリアでは<strong>月額39,000 MXN</strong>（2,000 USD）以上まで幅があります <a href="https://mexicorelocationguide.com/living-in-san-luis-potosi-the-city-most-expats-are-missing-out-on" target="_blank" class="text-blue-600 hover:text-blue-800 underline"><sup>[2]</sup></a>。</p>

      <p>まだスペイン語を話せない場合は、この地域では英語があまり通じないため、<strong>言語を学ぶことが不可欠</strong>になります。これにより日常生活が円滑になります <a href="https://mexicorelocationguide.com/life-in-san-luis-potosi-mexico" target="_blank" class="text-blue-600 hover:text-blue-800 underline"><sup>[1]</sup></a>。San Luis Potosíの外国人コミュニティは他の都市に比べて小規模ですが、彼らとつながることは優れた情報源になり得ます <a href="https://mexicorelocationguide.com/living-in-san-luis-potosi-the-city-most-expats-are-missing-out-on" target="_blank" class="text-blue-600 hover:text-blue-800 underline"><sup>[2]</sup></a>。</p>

      <blockquote class="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-6">
        <p>「メキシコはただ、しっくりきたのです。私たちは人々の温かさと国の美しさが大好きでした。生活費の安さも大きな魅力で、より質の高い暮らしを楽しむことができました。」 - Marc <a href="https://mexicorelocationguide.com/life-in-san-luis-potosi-mexico" target="_blank" class="text-blue-600 hover:text-blue-800 underline"><sup>[1]</sup></a></p>
      </blockquote>
    </div>

    <div class="mb-8">
      <h3 class="text-2xl font-semibold mb-4 text-blue-900">引っ越しの予算とスケジュールを立てる</h3>
      <p class="mb-4">明確に定めた予算を持つことは、引っ越し中の金銭的な問題を避けるために欠かせません。2022年には、すべてを含む引っ越しサービスを利用した人は平均で<strong>157,950 MXN</strong>（8,100 USD）を支払いました <a href="https://www.thisoldhouse.com/moving/moving-budget" target="_blank" class="text-blue-600 hover:text-blue-800 underline"><sup>[4]</sup></a>。一方、自分で行う引っ越しは通常<strong>9,750 MXN</strong>（500 USD）未満で済みます <a href="https://www.thisoldhouse.com/moving/moving-budget" target="_blank" class="text-blue-600 hover:text-blue-800 underline"><sup>[4]</sup></a>。</p>

      <p>重量、大きさ、価値を記録しながら<strong>持ち物の目録を作りましょう</strong>。複数の引っ越し業者から見積もりを取り、不測の出費に備えて予算の<strong>5％から10％</strong>を確保しておきましょう <a href="https://www.thisoldhouse.com/moving/moving-budget" target="_blank" class="text-blue-600 hover:text-blue-800 underline"><sup>[4]</sup></a>。</p>

      <p><strong>引っ越しの日程は慎重に選びましょう</strong>。繁忙期を避けることで、費用を最大<strong>30％</strong>削減できます <a href="https://www.extraspace.com/moving/guides/tips/how-to-move-on-a-budget" target="_blank" class="text-blue-600 hover:text-blue-800 underline"><sup>[5]</sup></a>。</p>

      <blockquote class="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-6">
        <p>「毎月最後の週は決まって混み合います。賃貸契約が終わるのがその時期だからです。」 - Pam Stanley、North Carolina Moving Association 事務局長 <a href="https://www.thisoldhouse.com/moving/moving-budget" target="_blank" class="text-blue-600 hover:text-blue-800 underline"><sup>[4]</sup></a></p>
      </blockquote>
    </div>

    <div class="mb-8">
      <h3 class="text-2xl font-semibold mb-4 text-blue-900">荷物を荷造りして整理する</h3>
      <p class="mb-4">荷造りの際にきちんと整理しておくと、San Luis Potosíへの移行がずっと楽になります。ここではいくつかの実践的なコツをご紹介します：</p>

      <ul class="list-disc pl-6 mb-4">
        <li><strong>不要なものを処分する</strong>：もう使わないものは寄付するか売却して、引っ越しの荷物量を減らしましょう <a href="https://abeautifulmess.com/moving-packing-tips" target="_blank" class="text-blue-600 hover:text-blue-800 underline"><sup>[6]</sup></a>。</li>
        <li><strong>カテゴリーごとに荷造りする</strong>：似たものをまとめ、同じ大きさの箱を使うと積み重ねやすくなります <a href="https://abeautifulmess.com/moving-packing-tips" target="_blank" class="text-blue-600 hover:text-blue-800 underline"><sup>[6]</sup></a>。</li>
        <li><strong>箱にラベルを貼る</strong>：中身と運び込む部屋をはっきりと示しましょう。分かりやすくするために色分けのコードを使うこともできます <a href="https://www.constellation.com/energy-101/moving/moving-packing-checklist.html" target="_blank" class="text-blue-600 hover:text-blue-800 underline"><sup>[8]</sup></a>。</li>
        <li><strong>必需品ボックスを用意する</strong>：毛布、軽食、そして家族一人ひとりの衛生用品など、基本的なものを入れておきましょう <a href="https://abeautifulmess.com/moving-packing-tips" target="_blank" class="text-blue-600 hover:text-blue-800 underline"><sup>[6]</sup></a>。</li>
      </ul>

      <p><strong>衣類や柔らかいものにはスーツケースを使い</strong>、衣服は丸めて収納すると場所を節約できます <a href="https://www.goarmstrong.com/resources/how-to-pack-house-quickly" target="_blank" class="text-blue-600 hover:text-blue-800 underline"><sup>[9]</sup></a>。重いものは箱の底に、軽いものは上に置きましょう <a href="https://www.realsimple.com/home-organizing/organizing/moving/moving-packing-tips" target="_blank" class="text-blue-600 hover:text-blue-800 underline"><sup>[7]</sup></a>。季節外れの衣類や飾りなど、毎日は使わないものから始めて、早めに荷造りに取りかかりましょう <a href="https://www.realsimple.com/home-organizing/organizing/moving/moving-packing-tips" target="_blank" class="text-blue-600 hover:text-blue-800 underline"><sup>[7]</sup></a>。</p>

      <blockquote class="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-6">
        <p>「使っていないもの、気に入っていないもの、もう自分のスタイルに合わないものは、手放すことをおすすめします。」 - Elsie Larson、著者、A Beautiful Mess <a href="https://abeautifulmess.com/moving-packing-tips" target="_blank" class="text-blue-600 hover:text-blue-800 underline"><sup>[6]</sup></a></p>
      </blockquote>
    </div>
  </section>

  <section id="legal-documents" class="mb-12">
    <h2 class="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-2">法的書類と行政手続きの要件</h2>
    <p class="text-gray-700 mb-6">法的要件を満たすことは、San Luis Potosíで暮らし、働くために不可欠です。これらのステップのいずれかを飛ばすと、引っ越しを複雑にする遅延や法的な問題を招くおそれがあります。</p>

    <div class="mb-8">
      <h3 class="text-2xl font-semibold mb-4 text-blue-900">ビザと居住書類を取得する</h3>
      <p class="mb-4">San Luis Potosíで働き、居住する予定であれば、ビザまたは居住許可が必要になります。<strong>国立移民局（INM）</strong>は、ビザの発給を含むすべての移民関連の事務を管轄する機関です <a href="https://wmp.mx/en/mexico-work-visa" target="_blank" class="text-blue-600 hover:text-blue-800 underline"><sup>[10]</sup></a><a href="https://www.mexpro.com/blog/mexicos-inm-goes-digital" target="_blank" class="text-blue-600 hover:text-blue-800 underline"><sup>[11]</sup></a>。</p>

      <p>メキシコには、主に3種類のビザがあります：<strong>観光ビザ</strong>、<strong>一時居住ビザ</strong>、そして<strong>永住ビザ</strong>です <a href="https://wmp.mx/en/mexico-work-visa" target="_blank" class="text-blue-600 hover:text-blue-800 underline"><sup>[10]</sup></a>。就労を目的とした滞在が<strong>180日を超える</strong>場合は、就労許可付きの居住ビザを取得する必要があります <a href="https://wmp.mx/en/mexico-work-visa" target="_blank" class="text-blue-600 hover:text-blue-800 underline"><sup>[10]</sup></a>。</p>

      <p>この手続きには<strong>2つの主な段階</strong>があります。まず、メキシコ国外、できればご自身の母国にあるメキシコ領事館でビザを申請します。承認されたら、スタンプの押されたビザ付きのパスポートをメキシコ国内のINMの事務所に提示し、居住カードを取得します <a href="https://www.mexpro.com/blog/mexicos-inm-goes-digital" target="_blank" class="text-blue-600 hover:text-blue-800 underline"><sup>[11]</sup></a>。</p>

      <p>San Luis Potosíでは、デジタルシステムのおかげで手続きが簡素化され、居住カードをおよそ<strong>1時間</strong>で取得できます <a href="https://www.mexpro.com/blog/mexicos-inm-goes-digital" target="_blank" class="text-blue-600 hover:text-blue-800 underline"><sup>[11]</sup></a>。2023年4月以降、このシステムはSan Luis Potosíのものを含む11か所のINM事務所で利用できます <a href="https://www.mexpro.com/blog/mexicos-inm-goes-digital" target="_blank" class="text-blue-600 hover:text-blue-800 underline"><sup>[11]</sup></a>。</p>

      <p>陸路でメキシコに入国する場合は、たとえ明示的に求められなくても、INMの事務所に立ち寄って<strong>入国管理多目的フォーム（FMM）</strong>と呼ばれる入国許可を取得することを忘れないでください <a href="https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Mexico.html" target="_blank" class="text-blue-600 hover:text-blue-800 underline"><sup>[12]</sup></a>。電子的に手続きできるこの書類は、1回の入国につき最長<strong>180暦日</strong>の有効期間があります <a href="https://www.inm.gob.mx/fmme/publico/en/solicitud.html" target="_blank" class="text-blue-600 hover:text-blue-800 underline"><sup>[13]</sup></a>。</p>
    </div>

    <div class="mb-8">
      <h3 class="text-2xl font-semibold mb-4 text-blue-900">メキシコの銀行口座を開設する</h3>
      <p class="mb-4">メキシコで銀行口座を開設することは、San Luis Potosíでの家計を管理するうえで鍵となります。外国人でも開設は可能ですが、手続きは対面で行う必要があり、すべての銀行に英語を話せるスタッフがいるわけではありません <a href="https://www.westernunion.com/blog/en/us/guide-to-opening-a-bank-account-in-mexico" target="_blank" class="text-blue-600 hover:text-blue-800 underline"><sup>[14]</sup></a><a href="https://wise.com/us/blog/opening-a-bank-account-in-mexico" target="_blank" class="text-blue-600 hover:text-blue-800 underline"><sup>[15]</sup></a>。</p>

      <p><strong>必要な書類</strong>：</p>
      <ul class="list-disc pl-6 mb-4">
        <li>有効なパスポート。</li>
        <li>メキシコの居住カード（一時または永住）。</li>
        <li>最近の公共料金の請求書（電気、水道、または電話）など、メキシコ国内の住所証明。</li>
        <li>最低預入金額。銀行によって異なります <a href="https://www.westernunion.com/blog/en/us/guide-to-opening-a-bank-account-in-mexico" target="_blank" class="text-blue-600 hover:text-blue-800 underline"><sup>[14]</sup></a><a href="https://wise.com/us/blog/opening-a-bank-account-in-mexico" target="_blank" class="text-blue-600 hover:text-blue-800 underline"><sup>[15]</sup></a><a href="https://www.mexperience.com/opening-and-managing-a-bank-account-in-mexico" target="_blank" class="text-blue-600 hover:text-blue-800 underline"><sup>[16]</sup></a>。</li>
      </ul>

      <div class="overflow-x-auto mb-6">
        <table class="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">銀行</th>
              <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">必要な在留書類</th>
              <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">メキシコの住所証明</th>
              <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">その他の要件</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr>
              <td class="px-4 py-3 text-sm font-medium"><a href="https://www.scotiabank.com.mx/" target="_blank" class="text-blue-600 hover:text-blue-800">Scotiabank</a></td>
              <td class="px-4 py-3 text-sm text-gray-500">観光ビザ、訪問者許可、一時または永住</td>
              <td class="px-4 py-3 text-sm text-gray-500">直近3か月分の公共料金の請求書</td>
              <td class="px-4 py-3 text-sm text-gray-500">与信枠には収入証明</td>
            </tr>
            <tr>
              <td class="px-4 py-3 text-sm font-medium">BBVA Libreton Premium</td>
              <td class="px-4 py-3 text-sm text-gray-500">移民申請フォームまたは有効な居住カード</td>
              <td class="px-4 py-3 text-sm text-gray-500">直近3か月分の公共料金の請求書</td>
              <td class="px-4 py-3 text-sm text-gray-500">最低預入金額2,000 MXN、CURP</td>
            </tr>
            <tr>
              <td class="px-4 py-3 text-sm font-medium">HSBC Advance</td>
              <td class="px-4 py-3 text-sm text-gray-500">FM2の証明書、居住カード、またはFMM</td>
              <td class="px-4 py-3 text-sm text-gray-500">直近3か月分の公共料金の請求書</td>
              <td class="px-4 py-3 text-sm text-gray-500">最低預入金額20,000 MXN</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>口座開設のための初回預入金額は、口座の種類や銀行によって、<strong>750 MXN</strong>から<strong>20,000 MXN</strong>以上まで幅があります <a href="https://www.westernunion.com/blog/en/us/guide-to-opening-a-bank-account-in-mexico" target="_blank" class="text-blue-600 hover:text-blue-800 underline"><sup>[14]</sup></a><a href="https://wise.com/us/blog/opening-a-bank-account-in-mexico" target="_blank" class="text-blue-600 hover:text-blue-800 underline"><sup>[15]</sup></a>。スペイン語が堪能でない場合は、米国とメキシコの両方で営業している銀行を検討しましょう <a href="https://wise.com/us/blog/opening-a-bank-account-in-mexico" target="_blank" class="text-blue-600 hover:text-blue-800 underline"><sup>[15]</sup></a>。</p>
    </div>

    <div class="mb-8">
      <h3 class="text-2xl font-semibold mb-4 text-blue-900">健康保険を整える</h3>
      <p class="mb-4">健康保険に加入しておくことは、San Luis Potosíへのスムーズな引っ越しに欠かせません。実用的な選択肢のひとつは、メキシコに到着する前に国際保険に加入しておくことです <a href="https://www.allianzcare.com/en/support/health-and-wellness/national-healthcare-systems/healthcare-in-mexico.html" target="_blank" class="text-blue-600 hover:text-blue-800 underline"><sup>[18]</sup></a>。</p>

      <p><strong>IMSS（メキシコ社会保険庁）</strong>は公的医療を提供しており、San Luis Potosíには充実した施設があります <a href="https://www.expatforum.com/threads/quality-of-imss-insurance-for-american-expats-in-mexico.1525130" target="_blank" class="text-blue-600 hover:text-blue-800 underline"><sup>[19]</sup></a>。ただし、<strong>3か月から3年</strong>の待機期間や、既往症の適用除外といった制限があります <a href="https://www.expatforum.com/threads/quality-of-imss-insurance-for-american-expats-in-mexico.1525130" target="_blank" class="text-blue-600 hover:text-blue-800 underline"><sup>[19]</sup></a>。</p>

      <p>民間保険については、<strong><a href="https://www.mexicoinsuranceadvisors.com/" target="_blank" class="text-blue-600 hover:text-blue-800">Mexico Insurance Advisors</a></strong>がメキシコ系および国際系の17社を超える保険会社と提携しており、請求、承認、払い戻しに関して個別のサポートを提供しています <a href="https://www.mexicoinsuranceadvisors.com/about" target="_blank" class="text-blue-600 hover:text-blue-800 underline"><sup>[17]</sup></a>。</p>
    </div>
  </section>

  <div class="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
    <p class="text-blue-800"><strong>住まい、ライフライン、文化への適応、そしてSan Luis Potosíへの引っ越しを成功させるための最後のステップについて、さらに詳しく知るために読み進めてください！</strong></p>
  </div>

</div>`;

(async () => {
  const { error } = await supabase
    .from('blog_posts')
    .update({ content_ja: CONTENT_JA })
    .eq('slug', SLUG);
  if (error) {
    console.error('Update failed:', error);
    process.exit(1);
  }
  console.log('content_ja updated for', SLUG);
})();
