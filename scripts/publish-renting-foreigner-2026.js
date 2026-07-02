// Publishes "Renting in San Luis Potosí as a Foreigner (2026)" — Tier 2 #5.
// From the verified dossier of 2026-07-02. Cautions applied: póliza jurídica
// cost as the safe range (30–70% of a month / 4–6% annual, +IVA); agent fee
// "about one month, landlord pays"; SLP civil-code specifics presented as
// national custom; no statutory rent caps outside CDMX; furnished ≈37% of
// listings; scams section with the verification checklist.
require('dotenv').config({ path: '.env' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const SLUG = 'renting-in-san-luis-potosi-foreigner-2026';

const faqEN = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Can a foreigner rent an apartment in San Luis Potosí without a fiador?', acceptedAnswer: { '@type': 'Answer', text: "Yes — the standard workaround is a póliza jurídica: a legal-guarantee policy from a law firm that screens you and covers the landlord's eviction costs. It typically costs 30–70% of one month's rent (often quoted as 4–6% of the annual rent) plus IVA, paid once per contract year, and several providers operate in SLP. Alternatives: a larger deposit (2–3 months) or paying several months of rent in advance." } },
    { '@type': 'Question', name: 'What is a fiador and why do landlords ask for one?', acceptedAnswer: { '@type': 'Answer', text: "A fiador is a guarantor who must usually own real estate in the same city or state — someone whose property effectively backs your lease. Landlords demand it because evicting a non-paying tenant through Mexican courts commonly takes 6 months or more. Newly arrived foreigners almost never know a local property owner willing to sign, which is why the póliza jurídica exists." } },
    { '@type': 'Question', name: 'What documents do I need to rent in SLP as a foreigner?', acceptedAnswer: { '@type': 'Answer', text: "Typically: passport, your temporary or permanent resident card (landlords want proof you can stay the length of the lease), proof of income around 3x the monthly rent (pay stubs or 3 months of bank statements), and sometimes references. Tourists on a 180-day permit can legally sign leases, but many landlords balk — furnished monthly rentals are the practical route until you have residency." } },
    { '@type': 'Question', name: 'How much is the deposit and can the landlord raise the rent?', acceptedAnswer: { '@type': 'Answer', text: "One month's deposit is the national custom (no statutory cap). Annual increases are governed by your contract, not by law — the common clause links increases to INPC (Mexico's CPI) or a fixed percentage; negotiate a cap before signing. Statutory rent-increase limits exist only in Mexico City, not San Luis Potosí." } },
    { '@type': 'Question', name: 'How do I avoid rental scams in Mexico?', acceptedAnswer: { '@type': 'Answer', text: "Never pay anything before viewing the property in person and signing — 'deposit to hold it' pressure is the classic scam, and cloned listings with stolen photos circulate on Facebook Marketplace and the portals. Before signing, ask to see the escritura (deed) and a paid predial (property-tax) receipt matching the landlord's ID — a standard, non-offensive request in Mexico. Rental agents are paid by the landlord (about one month's rent), so an 'agent' charging you upfront is a red flag." } },
    { '@type': 'Question', name: 'Do utilities go in my name when I rent?', acceptedAnswer: { '@type': 'Answer', text: "Usually not — CFE (electricity) and water accounts customarily stay in the landlord's name and you just pay the bills. That matters because utility bills are Mexico's standard proof of address (comprobante de domicilio) for banks and immigration. The common fix: put the internet account in your own name, and keep your signed lease and rent receipts." } },
  ],
};

const faqES = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: '¿Un extranjero puede rentar en San Luis Potosí sin fiador?', acceptedAnswer: { '@type': 'Answer', text: 'Sí — la salida estándar es la póliza jurídica: una garantía legal de un despacho que te investiga y cubre los costos de desalojo del arrendador. Cuesta típicamente 30–70% de un mes de renta (suele cotizarse como 4–6% de la renta anual) más IVA, se paga una vez por año de contrato, y varios proveedores operan en SLP. Alternativas: depósito mayor (2–3 meses) o pagar varios meses por adelantado.' } },
    { '@type': 'Question', name: '¿Qué es un fiador y por qué lo piden?', acceptedAnswer: { '@type': 'Answer', text: 'Un fiador es un garante que normalmente debe tener una propiedad escriturada en la misma ciudad o estado — alguien cuya casa respalda tu contrato. Los arrendadores lo exigen porque desalojar a un inquilino moroso por la vía judicial suele tomar 6 meses o más. Un extranjero recién llegado casi nunca conoce a un propietario local dispuesto a firmar; por eso existe la póliza jurídica.' } },
    { '@type': 'Question', name: '¿Qué documentos piden a un extranjero para rentar?', acceptedAnswer: { '@type': 'Answer', text: 'Típicamente: pasaporte, tarjeta de residencia temporal o permanente (quieren ver que puedes quedarte lo que dura el contrato), comprobantes de ingreso de ~3x la renta (recibos de nómina o 3 meses de estados de cuenta) y a veces referencias. Un turista con permiso de 180 días puede firmar legalmente, pero muchos arrendadores dudan — la ruta práctica es rentar amueblado por mes hasta tener residencia.' } },
    { '@type': 'Question', name: '¿De cuánto es el depósito y cuánto puede subir la renta?', acceptedAnswer: { '@type': 'Answer', text: 'Un mes de depósito es la costumbre nacional (no hay tope legal). Los aumentos anuales los rige tu contrato, no la ley — la cláusula común los liga al INPC o a un porcentaje fijo; negocia un tope antes de firmar. Los límites legales a aumentos solo existen en CDMX, no en San Luis Potosí.' } },
    { '@type': 'Question', name: '¿Cómo evito fraudes de renta?', acceptedAnswer: { '@type': 'Answer', text: 'Nunca pagues nada antes de ver el inmueble en persona y firmar — la presión de "deposita para apartarlo" es el fraude clásico, y circulan anuncios clonados con fotos robadas en Marketplace y los portales. Antes de firmar, pide ver la escritura y un predial pagado que coincidan con la identificación del arrendador — es una solicitud estándar en México. A los asesores les paga el arrendador (≈un mes de renta): un "asesor" que te cobra por adelantado es foco rojo.' } },
    { '@type': 'Question', name: '¿Los servicios quedan a mi nombre al rentar?', acceptedAnswer: { '@type': 'Answer', text: 'Normalmente no — CFE y agua se quedan a nombre del arrendador y tú solo pagas los recibos. Importa porque el recibo de luz es el comprobante de domicilio estándar para bancos y migración. El arreglo común: pon el internet a tu nombre y guarda tu contrato firmado y recibos de renta.' } },
  ],
};

function faqDetails(faq, color) {
  return faq.mainEntity
    .map(
      (q) => `<details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">${q.name}<span class="text-${color}-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">${q.acceptedAnswer.text}</p></details>`
    )
    .join('\n  ');
}

function buildContent(isEs) {
  const faq = isEs ? faqES : faqEN;
  const t = (en, es) => (isEs ? es : en);

  return `<div class="max-w-none">

<div class="bg-violet-50 border-l-4 border-violet-500 rounded-r-xl p-6 mb-10">
  <p class="font-bold text-violet-900 mb-3">${t('In this guide', 'En esta guía')}</p>
  <nav class="grid sm:grid-cols-2 gap-2 text-violet-800 text-sm">
    <a href="#fiador" class="hover:underline">→ ${t('The fiador wall (and 4 ways around it)', 'El muro del fiador (y 4 salidas)')}</a>
    <a href="#terms" class="hover:underline">→ ${t('Standard contract terms', 'Términos estándar del contrato')}</a>
    <a href="#documents" class="hover:underline">→ ${t('Documents you’ll need', 'Documentos que te pedirán')}</a>
    <a href="#search" class="hover:underline">→ ${t('Where to actually search', 'Dónde buscar de verdad')}</a>
    <a href="#scams" class="hover:underline">→ ${t('The scam playbook (read this)', 'El manual anti-fraudes (lee esto)')}</a>
    <a href="#utilities" class="hover:underline">→ ${t('Utilities & proof of address', 'Servicios y comprobante de domicilio')}</a>
    <a href="#rights" class="hover:underline">→ ${t('If things go wrong', 'Si algo sale mal')}</a>
    <a href="#strategy" class="hover:underline">→ ${t('The smart landing strategy', 'La estrategia de aterrizaje')}</a>
  </nav>
  <p class="mt-4 text-sm text-violet-700 italic">${t('Process verified July 2026 · For prices, see our <a href="/blog/cost-of-living-san-luis-potosi-2026" class="underline">cost of living breakdown</a>', 'Proceso verificado en julio 2026 · Para precios, ve nuestro <a href="/blog/cost-of-living-san-luis-potosi-2026" class="underline">desglose de costo de vida</a>')}</p>
</div>

<p class="text-xl leading-relaxed text-gray-800 mb-8 font-medium">
  ${t(
    "<strong>Renting in Mexico has one wall every foreigner hits: the fiador.</strong> Landlords want a local guarantor who owns property in the state — someone you, having just arrived, cannot possibly produce. Here's exactly how to get around it in San Luis Potosí, what a normal contract looks like, how the scams work, and the landing strategy that avoids all of it for your first two months.",
    '<strong>Rentar en México tiene un muro con el que choca todo extranjero: el fiador.</strong> Los arrendadores quieren un garante local con propiedad escriturada en el estado — alguien que tú, recién llegado, no puedes producir. Aquí está exactamente cómo librarlo en San Luis Potosí, cómo se ve un contrato normal, cómo operan los fraudes y la estrategia de aterrizaje que te evita todo esto los primeros dos meses.'
  )}
</p>

<section id="fiador" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-violet-500 pb-3 inline-block">${t('The fiador wall — and 4 ways around it', 'El muro del fiador — y 4 salidas')}</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">${t(
    "Why so strict? Because evicting a non-paying tenant through Mexican courts commonly takes <strong>6 months to a year</strong> (and can stretch far longer with appeals). The fiador — a guarantor who typically must own deeded property in the same city or state — is the landlord's insurance policy. A related figure, the <em>obligado solidario</em>, is a co-signer liable from day one without necessarily owning property. Neither is something a newcomer can produce. Your options:",
    'La razón de tanta exigencia: desalojar a un inquilino moroso por la vía judicial toma comúnmente <strong>de 6 meses a un año</strong> (y mucho más con amparos). El fiador — un garante que normalmente debe tener propiedad escriturada en la misma ciudad o estado — es el seguro del arrendador. La figura hermana, el <em>obligado solidario</em>, es un co-firmante responsable desde el día uno sin necesidad de propiedad. Ninguno lo puede producir un recién llegado. Tus opciones:'
  )}</p>
<div class="space-y-4 mb-4">
  <div class="bg-white border-l-4 border-violet-500 rounded-r-xl shadow-sm p-5"><h3 class="font-bold text-gray-900 mb-1">1. ${t('Póliza jurídica — the standard fix', 'Póliza jurídica — la solución estándar')} ⭐</h3><p class="text-sm text-gray-700">${t(
    "A legal-guarantee policy from a law firm: they background-check you, draft the contract, and cover the landlord's legal costs if things go wrong. Cost: typically <strong>30–70% of one month's rent</strong> (often quoted as 4–6% of annual rent) plus IVA, paid once per contract year — usually by the tenant, sometimes split. The screening takes about a week. Providers operating in SLP include Zorrilla Abogados (Lomas 4a), Juridixia and national networks like Póliza Jurídica and Morada Uno (online).",
    'Una garantía legal de un despacho: te investigan, redactan el contrato y cubren los costos legales del arrendador si algo sale mal. Costo: típicamente <strong>30–70% de un mes de renta</strong> (suele cotizarse como 4–6% de la renta anual) más IVA, una vez por año de contrato — normalmente lo paga el inquilino, a veces se comparte. La investigación toma ~una semana. Proveedores con presencia en SLP: Zorrilla Abogados (Lomas 4a), Juridixia y redes nacionales como Póliza Jurídica y Morada Uno (en línea).'
  )}</p></div>
  <div class="bg-white border-l-4 border-violet-400 rounded-r-xl shadow-sm p-5"><h3 class="font-bold text-gray-900 mb-1">2. ${t('A bigger deposit', 'Depósito mayor')}</h3><p class="text-sm text-gray-700">${t('Offering 2 (sometimes 3) months of deposit instead of the standard 1 persuades many private landlords.', 'Ofrecer 2 (a veces 3) meses de depósito en vez del 1 estándar convence a muchos arrendadores particulares.')}</p></div>
  <div class="bg-white border-l-4 border-violet-400 rounded-r-xl shadow-sm p-5"><h3 class="font-bold text-gray-900 mb-1">3. ${t('Rent in advance', 'Renta por adelantado')}</h3><p class="text-sm text-gray-700">${t('Paying 2, 6, even 12 months upfront is a documented expat practice that dissolves most objections — only with a signed contract and receipts, never before (see the scams section).', 'Pagar 2, 6 y hasta 12 meses por adelantado es práctica expat documentada que disuelve casi cualquier objeción — solo con contrato firmado y recibos, nunca antes (ve la sección de fraudes).')}</p></div>
  <div class="bg-white border-l-4 border-gray-300 rounded-r-xl shadow-sm p-5"><h3 class="font-bold text-gray-900 mb-1">4. ${t('Paid fiador services (caution)', 'Fiadores de paga (con cautela)')}</h3><p class="text-sm text-gray-700">${t('They exist (fees up to a month of rent) but are legally murky and quality varies wildly — the póliza jurídica does the same job with a real firm behind it.', 'Existen (cobran hasta un mes de renta) pero son legalmente turbios y de calidad dispareja — la póliza jurídica hace lo mismo con un despacho real detrás.')}</p></div>
</div>
</section>

<section id="terms" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-violet-500 pb-3 inline-block">${t('What a normal contract looks like', 'Cómo se ve un contrato normal')}</h2>
</div>
<div class="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-4">
  <table class="min-w-full divide-y divide-gray-200">
    <thead class="bg-violet-700"><tr><th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase">${t('Term', 'Término')}</th><th scope="col" class="px-4 py-3 text-left text-xs font-bold text-white uppercase">${t('The custom (national)', 'La costumbre (nacional)')}</th></tr></thead>
    <tbody class="divide-y divide-gray-100">
      <tr class="bg-white"><td class="px-4 py-3 text-sm font-semibold text-gray-900">${t('Deposit', 'Depósito')}</td><td class="px-4 py-3 text-sm text-gray-700">${t('1 month (no statutory cap); document move-in condition with photos', '1 mes (sin tope legal); documenta el estado de entrada con fotos')}</td></tr>
      <tr class="bg-gray-50"><td class="px-4 py-3 text-sm font-semibold text-gray-900">${t('Length', 'Duración')}</td><td class="px-4 py-3 text-sm text-gray-700">${t('12 months, often with auto-renewal clauses', '12 meses, seguido con cláusulas de renovación automática')}</td></tr>
      <tr class="bg-white"><td class="px-4 py-3 text-sm font-semibold text-gray-900">${t('Increases', 'Aumentos')}</td><td class="px-4 py-3 text-sm text-gray-700">${t('Whatever the contract says — commonly INPC-linked or a fixed %; negotiate a cap. Statutory limits exist only in CDMX.', 'Lo que diga el contrato — comúnmente ligado al INPC o % fijo; negocia un tope. Límites legales solo existen en CDMX.')}</td></tr>
      <tr class="bg-gray-50"><td class="px-4 py-3 text-sm font-semibold text-gray-900">${t('Notice', 'Aviso')}</td><td class="px-4 py-3 text-sm text-gray-700">${t('30 days customary; early-exit penalties of 1–2 months are normal and negotiable', '30 días por costumbre; penas de salida anticipada de 1–2 meses son normales y negociables')}</td></tr>
      <tr class="bg-white"><td class="px-4 py-3 text-sm font-semibold text-gray-900">${t('Language', 'Idioma')}</td><td class="px-4 py-3 text-sm text-gray-700">${t('Spanish governs legally — ask for a bilingual two-column version, but know the Spanish side rules', 'El español rige legalmente — pide versión bilingüe a dos columnas, sabiendo que manda el lado en español')}</td></tr>
    </tbody>
  </table>
</div>
</section>

<section id="documents" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-violet-500 pb-3 inline-block">${t('Documents you’ll be asked for', 'Documentos que te van a pedir')}</h2>
</div>
<ul class="space-y-2 mb-4 text-gray-800">
  <li>• ${t('<strong>Passport</strong> — always.', '<strong>Pasaporte</strong> — siempre.')}</li>
  <li>• ${t('<strong>Resident card</strong> (temporary or permanent) — landlords want proof you can legally stay the length of the lease.', '<strong>Tarjeta de residencia</strong> (temporal o permanente) — quieren ver que puedes quedarte lo que dura el contrato.')}</li>
  <li>• ${t('<strong>Proof of income ~3x the rent</strong> — pay stubs, an employment letter, or 3 months of bank statements.', '<strong>Comprobante de ingresos ~3x la renta</strong> — nómina, carta laboral o 3 meses de estados de cuenta.')}</li>
  <li>• ${t('<strong>Sometimes:</strong> references from prior landlords; occasionally an RFC or Mexican bank account (not universal).', '<strong>A veces:</strong> referencias de arrendadores previos; ocasionalmente RFC o cuenta bancaria mexicana (no es universal).')}</li>
</ul>
<p class="text-sm text-gray-600 leading-relaxed">${t(
    'On a tourist permit? Signing a 12-month lease is legal, but many landlords balk at a 180-day permit — and immigration authorities read a lease as a signal you should be applying for residency. The practical route until your card arrives: furnished monthly rentals (see the landing strategy below).',
    '¿Con permiso de turista? Firmar un contrato de 12 meses es legal, pero muchos arrendadores dudan ante un permiso de 180 días — y migración lee un contrato como señal de que deberías estar tramitando residencia. La ruta práctica mientras llega tu tarjeta: rentas amuebladas por mes (ve la estrategia de aterrizaje abajo).'
  )}</p>
</section>

<section id="search" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-violet-500 pb-3 inline-block">${t('Where to actually search', 'Dónde buscar de verdad')}</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">${t(
    'July 2026 inventory check: <strong>Inmuebles24</strong> has the deepest structured stock (~860 rentals in the city), followed by <strong>Vivanuncios</strong> (~1,100 statewide), <strong>iCasas</strong> (~550 apartments) and <strong>propiedades.com</strong> (~290). <strong>Facebook groups</strong> ("Depas y Casas en Renta San Luis Potosí" and similar) have the most local, unlisted inventory — and by far the most scams. Note only ~37% of listed apartments come furnished, and Mexican "unfurnished" can mean no stove or fridge — confirm per listing.',
    'Chequeo de inventario julio 2026: <strong>Inmuebles24</strong> tiene el stock estructurado más profundo (~860 rentas en la ciudad), seguido de <strong>Vivanuncios</strong> (~1,100 en el estado), <strong>iCasas</strong> (~550 departamentos) y <strong>propiedades.com</strong> (~290). Los <strong>grupos de Facebook</strong> ("Depas y Casas en Renta San Luis Potosí" y similares) tienen el inventario más local y no listado — y por mucho los más fraudes. Ojo: solo ~37% de los departamentos anunciados están amueblados, y el "sin muebles" mexicano puede significar sin estufa ni refri — confirma por anuncio.'
  )}</p>
<div class="bg-gray-50 rounded-xl p-5 text-sm text-gray-700"><strong>${t('Who pays the agent?', '¿Quién le paga al asesor?')}</strong> ${t('The landlord — typically about one month of rent. A rental agent charging YOU upfront money is a red flag, full stop.', 'El arrendador — típicamente cerca de un mes de renta. Un asesor de rentas que TE cobra por adelantado es foco rojo, punto.')}</div>
</section>

<section id="scams" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-red-400 pb-3 inline-block">${t('The scam playbook', 'El manual anti-fraudes')}</h2>
</div>
<div class="space-y-4 mb-4">
  <div class="bg-red-50 border-2 border-red-200 rounded-xl p-5"><h3 class="font-bold text-red-900 mb-1">${t('Scam #1: "Deposit to hold it"', 'Fraude #1: "Deposita para apartarlo"')}</h3><p class="text-sm text-gray-800">${t('Pressure to transfer money before any viewing, citing "10 other interested people." Real landlords show the property first. Never pay a peso before viewing in person and signing.', 'Presión para transferir antes de cualquier visita, citando "10 interesados más". Los arrendadores reales enseñan primero. Nunca pagues un peso antes de ver en persona y firmar.')}</p></div>
  <div class="bg-red-50 border-2 border-red-200 rounded-xl p-5"><h3 class="font-bold text-red-900 mb-1">${t('Scam #2: Cloned listings', 'Fraude #2: Anuncios clonados')}</h3><p class="text-sm text-gray-800">${t('The same property posted by different "agents" at different prices, with stolen photos — rampant on Marketplace. Reverse-search suspicious photos; distrust below-market prices.', 'La misma propiedad publicada por distintos "asesores" a distintos precios, con fotos robadas — plaga en Marketplace. Busca las fotos en reversa; desconfía de precios muy bajo mercado.')}</p></div>
</div>
<div class="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-5 mb-4">
  <h3 class="font-bold text-emerald-900 mb-2">${t('The ownership check (standard practice, not rude)', 'La verificación de propiedad (práctica estándar, no es grosería)')}</h3>
  <p class="text-sm text-gray-800">${t(
    'Before signing, ask to see: the <strong>escritura</strong> (deed with Public Registry seal), a <strong>paid predial</strong> (property-tax) receipt, and the landlord’s official ID — all three matching names. Mexican real-estate guides themselves recommend this; a legitimate landlord expects it. The póliza jurídica firm does this verification for you — one more reason it’s worth the fee.',
    'Antes de firmar, pide ver: la <strong>escritura</strong> (con sello del Registro Público), un <strong>predial pagado</strong> y la identificación oficial del arrendador — los tres con nombres coincidentes. Las propias guías inmobiliarias mexicanas lo recomiendan; un arrendador legítimo lo espera. El despacho de la póliza jurídica hace esta verificación por ti — una razón más de que vale la cuota.'
  )}</p>
</div>
</section>

<section id="utilities" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-violet-500 pb-3 inline-block">${t('Utilities & the proof-of-address game', 'Servicios y el juego del comprobante de domicilio')}</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">${t(
    "CFE (electricity) and water accounts customarily <strong>stay in the landlord's name</strong> — you just pay the bimonthly bills. The catch: utility bills are Mexico's universal <strong>comprobante de domicilio</strong>, demanded by banks, immigration (INM) and the tax authority. Some offices accept a bill in the landlord's name if the address matches; others insist on yours. The standard fix: <strong>put the internet account in your name</strong> (easiest to contract), and keep your signed lease and every rent receipt.",
    'Las cuentas de CFE y agua por costumbre <strong>se quedan a nombre del arrendador</strong> — tú solo pagas los recibos. El detalle: los recibos de servicios son el <strong>comprobante de domicilio</strong> universal de México, exigido por bancos, INM y el SAT. Algunas ventanillas aceptan recibo a nombre del arrendador si la dirección coincide; otras insisten en el tuyo. El arreglo estándar: <strong>pon el internet a tu nombre</strong> (lo más fácil de contratar) y guarda tu contrato firmado y todos los recibos de renta.'
  )}</p>
</section>

<section id="rights" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-violet-500 pb-3 inline-block">${t('If things go wrong', 'Si algo sale mal')}</h2>
</div>
<ul class="space-y-2 mb-4 text-gray-800">
  <li>• ${t('<strong>Lockouts and utility cut-offs by landlords are illegal</strong> — only a court can order an eviction.', '<strong>Cambiar chapas o cortar servicios por parte del arrendador es ilegal</strong> — solo un juez puede ordenar un desalojo.')}</li>
  <li>• ${t('<strong>Repairs:</strong> structural and major systems are the landlord’s; minor upkeep is yours. Report defects in writing — WhatsApp messages count as documentation.', '<strong>Reparaciones:</strong> lo estructural y los sistemas mayores son del arrendador; el mantenimiento menor es tuyo. Reporta por escrito — los WhatsApps cuentan como documentación.')}</li>
  <li>• ${t('<strong>Even verbal agreements bind both ways in SLP</strong> — the Supreme Court has confirmed a proven verbal lease supports eviction actions, and equally creates obligations for the landlord. Get it in writing anyway.', '<strong>Hasta los acuerdos verbales obligan en ambos sentidos en SLP</strong> — la Suprema Corte ha confirmado que un arrendamiento verbal probado sostiene acciones de desahucio, e igualmente crea obligaciones para el arrendador. De todas formas: por escrito.')}</li>
  <li>• ${t('State-specific tenant law in SLP largely follows national custom; the rules above are the ones that matter in practice.', 'La ley estatal en SLP sigue en lo general la costumbre nacional; las reglas de arriba son las que importan en la práctica.')}</li>
</ul>
</section>

<section id="strategy" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-emerald-500 pb-3 inline-block">${t('The smart landing strategy', 'La estrategia de aterrizaje inteligente')}</h2>
</div>
<div class="bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-6 md:p-8 mb-4">
  <ol class="space-y-3 text-gray-800">
    <li><strong>1.</strong> ${t('Book 1–2 months in a furnished monthly rental (Airbnb’s monthly-stays product runs 28+ nights with host discounts commonly 10–20%, no fiador, no paperwork).', 'Reserva 1–2 meses en un amueblado mensual (el producto de estancias mensuales de Airbnb corre desde 28 noches con descuentos de anfitrión de 10–20%, sin fiador ni papeleo).')}</li>
    <li><strong>2.</strong> ${t('Use those weeks to view long-term rentals <em>in person</em> — which neutralizes every scam in the playbook — and to feel out neighborhoods (our <a href="/blog/where-to-stay-san-luis-potosi-2026" class="text-emerald-700 underline">area guide</a> and <a href="/blog/cost-of-living-san-luis-potosi-2026" class="text-emerald-700 underline">rent data</a> give you the map).', 'Usa esas semanas para ver rentas de largo plazo <em>en persona</em> — lo que neutraliza todos los fraudes del manual — y tantear colonias (nuestra <a href="/blog/where-to-stay-san-luis-potosi-2026" class="text-emerald-700 underline">guía de zonas</a> y los <a href="/blog/cost-of-living-san-luis-potosi-2026" class="text-emerald-700 underline">datos de renta</a> te dan el mapa).')}</li>
    <li><strong>3.</strong> ${t('Sign a 12-month lease with a póliza jurídica, the ownership check done, and a negotiated increase cap. Total extra cost vs a local with a fiador: roughly half a month’s rent. Worth every peso.', 'Firma un contrato de 12 meses con póliza jurídica, la verificación de propiedad hecha y un tope de aumento negociado. Costo extra total vs un local con fiador: aproximadamente medio mes de renta. Vale cada peso.')}</li>
  </ol>
</div>
</section>

<section id="faq" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-violet-500 pb-3 inline-block">FAQ</h2>
</div>
<div class="space-y-4">
  ${faqDetails(faq, 'violet')}
</div>
</section>

<section id="sources" class="mb-8 scroll-mt-8">
<div class="not-prose mb-4">
  <h2 class="text-2xl font-bold text-gray-900 mb-3">${t('Sources', 'Fuentes')}</h2>
</div>
<p class="text-sm text-gray-600 leading-relaxed">${t(
    'Verified July 2026 against: Mexican legal practice guides (Baker McKenzie, CCN law on INPC clauses, White & Case on the CDMX-only rent caps), notary and legal-firm explainers on fiador vs obligado solidario, póliza jurídica providers’ published pricing (Morada Uno, Póliza Jurídica MX — ranges genuinely vary, we publish the span), platform inventory counts (Inmuebles24, Vivanuncios, iCasas, propiedades.com, July 2026), documented scam reporting (Mexico Relocation Guide, Vivanuncios’ own fraud guide, Century 21 México), CFE account-transfer practice guides, SCJN tesis 2022766 (verbal leases in SLP), and eviction-timeline analyses (Liv.mx, Neivor). Where sources disagree — the póliza cost — we publish the honest range.',
    'Verificado en julio 2026 contra: guías de práctica legal (Baker McKenzie, CCN sobre cláusulas INPC, White & Case sobre topes solo-CDMX), explicaciones notariales de fiador vs obligado solidario, precios publicados de proveedores de póliza jurídica (Morada Uno, Póliza Jurídica MX — los rangos varían de verdad, publicamos el rango), inventarios de portales (Inmuebles24, Vivanuncios, iCasas, propiedades.com, julio 2026), reporteo documentado de fraudes (Mexico Relocation Guide, la propia guía antifraude de Vivanuncios, Century 21 México), guías de cambio de titular CFE, la tesis SCJN 2022766 (arrendamiento verbal en SLP) y análisis de tiempos de desalojo (Liv.mx, Neivor). Donde las fuentes difieren — el costo de la póliza — publicamos el rango honesto.'
  )}</p>
</section>

<div class="bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl p-8 text-center">
  <p class="text-white text-lg font-bold mb-2">${t('Making the move to San Luis Potosí?', '¿Mudándote a San Luis Potosí?')}</p>
  <p class="text-violet-100 text-sm mb-4">${t('Our housing services directory connects you with vetted local help — and the weekly brief keeps you current.', 'Nuestro directorio de servicios de vivienda te conecta con ayuda local verificada — y el brief semanal te mantiene al día.')}</p>
  <a href="/subscribe" class="inline-block bg-white text-violet-700 font-bold px-6 py-3 rounded-full hover:bg-violet-50 transition-colors">${t('Subscribe to San Luis Way Weekly', 'Suscríbete a San Luis Way Weekly')}</a>
</div>

<script type="application/ld+json">
${JSON.stringify(faq, null, 2)}
</script>

</div>`;
}

const post = {
  slug: SLUG,
  status: 'published',
  published_at: new Date().toISOString(),
  image_url: '/images/housing-services/hero.png',
  category: 'Expat Life',
  tags: ['renting', 'housing', 'fiador', 'poliza-juridica', 'expat-life', 'san-luis-potosi', 'mexico', '2026'],

  title: 'Renting in San Luis Potosí as a Foreigner (2026): Contracts, Aval & Deposits',
  excerpt: "The fiador wall every foreigner hits — and the 4 ways around it (póliza jurídica costs, SLP providers), what a normal contract looks like, the two rental scams to dodge, the proof-of-address game, and the 3-step landing strategy that avoids all of it.",
  content: buildContent(false),
  meta_title: 'Renting in San Luis Potosí as a Foreigner 2026: Fiador & Contracts',
  meta_description: 'How foreigners rent in San Luis Potosí: póliza jurídica vs fiador (costs & SLP providers), standard contract terms, required documents, scam avoidance, and the furnished-first landing strategy.',

  title_es: 'Rentar en San Luis Potosí siendo Extranjero (2026): Contratos, Aval y Depósitos',
  excerpt_es: 'El muro del fiador con el que choca todo extranjero — y las 4 salidas (costos de póliza jurídica, proveedores en SLP), cómo se ve un contrato normal, los dos fraudes a esquivar, el juego del comprobante de domicilio y la estrategia de aterrizaje en 3 pasos.',
  content_es: buildContent(true),
  meta_title_es: 'Rentar en SLP siendo Extranjero 2026: Fiador y Contratos',
  meta_description_es: 'Cómo rentan los extranjeros en San Luis Potosí: póliza jurídica vs fiador (costos y proveedores), términos estándar, documentos, cómo evitar fraudes y la estrategia amueblado-primero.',

  title_de: 'Mieten in San Luis Potosí als Ausländer (2026): Verträge, Aval & Kautionen',
  excerpt_de: 'Die Fiador-Hürde, an der jeder Ausländer scheitert — und die 4 Auswege (Póliza-Jurídica-Kosten, Anbieter in SLP), normale Vertragsbedingungen, die zwei Mietbetrugsmaschen und die 3-Schritte-Landestrategie.',
  content_de: buildContent(false),
  meta_title_de: 'Mieten in San Luis Potosí als Ausländer 2026',
  meta_description_de: 'Wie Ausländer in San Luis Potosí mieten: Póliza jurídica vs Fiador, Standardvertragsbedingungen, Dokumente, Betrugsvermeidung und die Möbliert-zuerst-Strategie.',

  title_ja: '外国人のためのサン・ルイス・ポトシ賃貸ガイド（2026年）：契約・保証人・敷金',
  excerpt_ja: '外国人が必ずぶつかる「フィアドール（保証人）」の壁と4つの回避策（ポリサ・フリディカの費用とSLPの提供業者）、標準的な契約条件、避けるべき2大詐欺、住所証明のコツ、3ステップの着地戦略。',
  content_ja: buildContent(false),
  meta_title_ja: 'サン・ルイス・ポトシ賃貸ガイド2026 | 保証人・契約・敷金',
  meta_description_ja: '外国人のSLP賃貸方法：ポリサ・フリディカと保証人、標準契約条件、必要書類、詐欺回避、家具付き物件から始める着地戦略。',
};

async function main() {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    console.error('Missing Supabase env vars. Aborting.');
    process.exit(1);
  }
  const { data: existing } = await supabase.from('blog_posts').select('id').eq('slug', SLUG).maybeSingle();
  if (existing) {
    const { error } = await supabase.from('blog_posts').update(post).eq('id', existing.id);
    if (error) { console.error('Update error:', error); process.exit(1); }
    console.log('Post updated:', existing.id);
  } else {
    const { data, error } = await supabase.from('blog_posts').insert(post).select().single();
    if (error) { console.error('Insert error:', error); process.exit(1); }
    console.log('Post published! ID:', data.id);
  }
  console.log(`\nView at: https://www.sanluisway.com/blog/${SLUG}`);
}

main();
