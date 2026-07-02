// Publishes "Healthcare in San Luis Potosí for Expats (2026)" — Tier 2 #4.
// Dossier cautions applied: Hospital Lomas is NOT Christus Muguerza; 24/7 ER
// asserted only for Hospital Angeles + ISSSTE; Farmacias San Pablo dropped
// (no SLP branches); no count of English-speaking doctors published; ER and
// hospitalization costs labeled national ballparks; dental prices labeled
// Mexico-wide; IMSS residency phrased via the CURP requirement.
require('dotenv').config({ path: '.env' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const SLUG = 'healthcare-san-luis-potosi-expats-2026';

const faqEN = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What are the best private hospitals in San Luis Potosí?', acceptedAnswer: { '@type': 'Answer', text: "The main private hospitals are Hospital Lomas de San Luis Internacional (the city's high-end option, ranked among Mexico's top 50 private hospitals), Hospital Angeles San Luis Potosí (national Angeles network, 24/7 ER confirmed), Star Médica (in the city since 2000, ~30 specialties) and Hospital Beneficencia Española ('La Bene', 135+ years, 36+ specialties). The public reference hospital is Hospital Central Dr. Ignacio Morones Prieto, now operating under IMSS-Bienestar." } },
    { '@type': 'Question', name: 'How do I find an English-speaking doctor in San Luis Potosí?', acceptedAnswer: { '@type': 'Answer', text: "Doctoralia is the dominant booking platform with thousands of SLP profiles, but it has no city-level English filter — open individual profiles and check the 'Idiomas' field. TocDoc has an actual English-speaking-doctors listing. The reliable old-school method: call the consultorio and ask, and check reviews for communication comments." } },
    { '@type': 'Question', name: 'How much does a doctor visit cost in San Luis Potosí?', acceptedAnswer: { '@type': 'Answer', text: 'Private GP consults run MX$500–1,200 (~$29–68 USD); specialists typically MX$800–1,000. The budget option Mexico is famous for: consultorios adjacent to pharmacies (Farmacias Similares, del Ahorro, Guadalajara) charge roughly MX$50–150 per consult and their doctors can write prescriptions, including antibiotics — which by law require one.' } },
    { '@type': 'Question', name: 'Does US Medicare work in Mexico?', acceptedAnswer: { '@type': 'Answer', text: "No. Medicare's own fact sheet states it usually doesn't cover health care outside the US, with only three narrow exceptions that don't apply to living in San Luis Potosí — and Medicare drug plans can't cover medications bought abroad. US retirees here rely on private international insurance (Cigna Global, GeoBlue/BCBS Global, IMG all cover Mexico), a Mexican GMM policy, IMSS voluntary enrollment, or out-of-pocket payment." } },
    { '@type': 'Question', name: 'Can foreigners enroll in IMSS in Mexico?', acceptedAnswer: { '@type': 'Answer', text: "Yes, via the voluntary Seguro de Salud para la Familia (Modalidad 33) — paid annually in advance (MX$13,800/year at ages 40–49 in 2026). You need a CURP, which in practice requires a temporary or permanent resident card. Big caveats: a long pre-existing-condition exclusion list (including diabetes complications, malignant tumors and HIV), waiting periods (10 months for childbirth, 2 years for orthopedic surgery), and honest expectations about wait times — it's a catastrophic-cost safety net, not a substitute for private care speed." } },
    { '@type': 'Question', name: 'How much do emergencies cost without insurance in SLP?', acceptedAnswer: { '@type': 'Answer', text: "National private-hospital ballparks (SLP hospitals don't publish tariffs): an ER consult around MX$400–1,000, hospitalization roughly MX$8,000 per day, ICU up to MX$40,000 per day, and an average private hospitalization event MX$80,000–150,000. Private ERs typically ask for a deposit or credit card at triage. That last set of numbers is the entire argument for carrying insurance. Emergency number: 911; Cruz Roja SLP: 444 815 0519." } },
  ],
};

const faqES = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: '¿Cuáles son los mejores hospitales privados de San Luis Potosí?', acceptedAnswer: { '@type': 'Answer', text: "Los principales privados son el Hospital Lomas de San Luis Internacional (la opción alta de la ciudad, en el top 50 nacional de hospitales privados), Hospital Angeles San Luis Potosí (red nacional Angeles, urgencias 24/7 confirmadas), Star Médica (en la ciudad desde 2000, ~30 especialidades) y la Beneficencia Española ('La Bene', 135+ años, 36+ especialidades). El hospital público de referencia es el Central Dr. Ignacio Morones Prieto, hoy bajo IMSS-Bienestar." } },
    { '@type': 'Question', name: '¿Cómo encuentro un médico que hable inglés en SLP?', acceptedAnswer: { '@type': 'Answer', text: "Doctoralia es la plataforma dominante con miles de perfiles en SLP, pero no tiene filtro de inglés por ciudad — abre los perfiles y revisa el campo 'Idiomas'. TocDoc sí tiene un listado de médicos que hablan inglés. El método confiable de siempre: llama al consultorio y pregunta, y revisa reseñas." } },
    { '@type': 'Question', name: '¿Cuánto cuesta una consulta médica en San Luis Potosí?', acceptedAnswer: { '@type': 'Answer', text: 'La consulta privada de médico general va de $500–1,200 (~$29–68 USD); especialistas típicamente $800–1,000. La opción económica famosa de México: los consultorios adyacentes a farmacias (Similares, del Ahorro, Guadalajara) cobran ~$50–150 por consulta y sus médicos pueden recetar, incluidos antibióticos — que por ley requieren receta.' } },
    { '@type': 'Question', name: '¿Medicare de EE.UU. funciona en México?', acceptedAnswer: { '@type': 'Answer', text: 'No. La propia hoja informativa de Medicare dice que normalmente no cubre atención fuera de EE.UU., con solo tres excepciones estrechas que no aplican a vivir en SLP — y sus planes de medicamentos no cubren compras en el extranjero. Los jubilados estadounidenses aquí usan seguro internacional privado (Cigna Global, GeoBlue/BCBS Global, IMG cubren México), una póliza GMM mexicana, el IMSS voluntario o pago directo.' } },
    { '@type': 'Question', name: '¿Un extranjero puede inscribirse al IMSS?', acceptedAnswer: { '@type': 'Answer', text: 'Sí, con el Seguro de Salud para la Familia (Modalidad 33) — pago anual por adelantado ($13,800/año entre 40–49 años en 2026). Necesitas CURP, que en la práctica exige tarjeta de residencia. Los peros: una lista larga de exclusiones por preexistencias (complicaciones de diabetes, tumores malignos, VIH…), periodos de espera (10 meses parto, 2 años cirugía ortopédica) y expectativas honestas de tiempos — es red de protección catastrófica, no sustituto de la velocidad privada.' } },
    { '@type': 'Question', name: '¿Cuánto cuesta una emergencia sin seguro en SLP?', acceptedAnswer: { '@type': 'Answer', text: 'Referencias nacionales (los hospitales de SLP no publican tarifas): consulta de urgencias ~$400–1,000, hospitalización ~$8,000 por día, terapia intensiva hasta $40,000 por día, y un evento promedio de hospitalización privada $80,000–150,000. Las urgencias privadas suelen pedir depósito o tarjeta al ingresar. Esos números son el argumento completo para traer seguro. Emergencias: 911; Cruz Roja SLP: 444 815 0519.' } },
  ],
};

function faqDetails(faq) {
  return faq.mainEntity
    .map(
      (q) => `<details class="bg-white border border-gray-200 rounded-xl p-5 group"><summary class="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">${q.name}<span class="text-rose-500 group-open:rotate-45 transition-transform">+</span></summary><p class="text-gray-700 text-sm leading-relaxed mt-3">${q.acceptedAnswer.text}</p></details>`
    )
    .join('\n  ');
}

function buildContent(isEs) {
  const faq = isEs ? faqES : faqEN;
  const t = (en, es) => (isEs ? es : en);

  return `<div class="max-w-none">

<div class="bg-rose-50 border-l-4 border-rose-500 rounded-r-xl p-6 mb-10">
  <p class="font-bold text-rose-900 mb-3">${t('In this guide', 'En esta guía')}</p>
  <nav class="grid sm:grid-cols-2 gap-2 text-rose-800 text-sm">
    <a href="#hospitals" class="hover:underline">→ ${t('The hospitals, honestly ranked', 'Los hospitales, con honestidad')}</a>
    <a href="#doctors" class="hover:underline">→ ${t('Finding English-speaking doctors', 'Encontrar médicos que hablen inglés')}</a>
    <a href="#pharmacies" class="hover:underline">→ ${t('Pharmacies & the MX$70 consult', 'Farmacias y la consulta de $70')}</a>
    <a href="#emergencies" class="hover:underline">→ ${t('Emergencies: numbers & real costs', 'Emergencias: teléfonos y costos reales')}</a>
    <a href="#insurance" class="hover:underline">→ ${t('Insurance (and the Medicare trap)', 'Seguros (y la trampa de Medicare)')}</a>
    <a href="#imss" class="hover:underline">→ ${t('IMSS for foreigners: the fine print', 'IMSS para extranjeros: la letra chica')}</a>
    <a href="#dental" class="hover:underline">→ ${t('Dental & vision', 'Dental y visión')}</a>
    <a href="#faq" class="hover:underline">→ FAQ</a>
  </nav>
  <p class="mt-4 text-sm text-rose-700 italic">${t('Facts verified July 2026 · Logistics and costs only — not medical advice · Costs detail in our <a href="/blog/cost-of-living-san-luis-potosi-2026" class="underline">cost of living guide</a>', 'Verificado en julio 2026 · Solo logística y costos — no es consejo médico · Detalle de costos en nuestro <a href="/blog/cost-of-living-san-luis-potosi-2026" class="underline">desglose de costo de vida</a>')}</p>
</div>

<p class="text-xl leading-relaxed text-gray-800 mb-8 font-medium">
  ${t(
    "<strong>Healthcare is usually the #2 question after safety for anyone considering San Luis Potosí</strong> — and the honest answer is layered: excellent private hospitals at a fraction of US prices, a pharmacy-consult system that solves 80% of daily needs for MX$70, and an insurance decision you must get right <em>before</em> you need it. Here's the whole system, sourced.",
    '<strong>La salud suele ser la pregunta #2 después de la seguridad para quien considera San Luis Potosí</strong> — y la respuesta honesta tiene capas: hospitales privados excelentes a fracción de precios de EE.UU., un sistema de consultorios de farmacia que resuelve el 80% de lo cotidiano por $70, y una decisión de seguro que debes tomar bien <em>antes</em> de necesitarla. Aquí está el sistema completo, con fuentes.'
  )}
</p>

<section id="hospitals" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-rose-500 pb-3 inline-block">${t('The hospitals, honestly ranked', 'Los hospitales, con honestidad')}</h2>
</div>
<div class="space-y-4 mb-6">
  <div class="bg-white border-l-4 border-rose-500 rounded-r-xl shadow-sm p-5"><h3 class="font-bold text-gray-900 mb-1">Hospital Lomas de San Luis Internacional</h3><p class="text-sm text-gray-700">${t("The city's high-end private hospital (Villas del Pedregal, west side) — the only SLP hospital regularly appearing in Funsalud/Blutitude's national Top-50 private hospital ranking. High-specialty centers; site available in English. If a doctor here recommends surgery, this is where expats typically have it.", 'El privado alto de la ciudad (Villas del Pedregal, poniente) — el único hospital de SLP que aparece regularmente en el Top 50 nacional de Funsalud/Blutitude. Centros de alta especialidad; sitio en inglés. Si un médico de aquí recomienda cirugía, aquí suelen operarse los expats.')}</p></div>
  <div class="bg-white border-l-4 border-rose-500 rounded-r-xl shadow-sm p-5"><h3 class="font-bold text-gray-900 mb-1">Hospital Angeles San Luis Potosí</h3><p class="text-sm text-gray-700">${t('Part of the national Grupo Angeles network — and the private hospital with a <strong>confirmed 24/7/365 ER</strong> (per its own site). Strong in cardiology, pediatrics, gynecology, traumatology.', 'De la red nacional Grupo Angeles — y el privado con <strong>urgencias 24/7/365 confirmadas</strong> (por su propio sitio). Fuerte en cardiología, pediatría, ginecología y traumatología.')}</p></div>
  <div class="bg-white border-l-4 border-rose-400 rounded-r-xl shadow-sm p-5"><h3 class="font-bold text-gray-900 mb-1">Star Médica & La Bene</h3><p class="text-sm text-gray-700">${t("Star Médica (Tequisquiapan, in SLP since 2000): ~30 specialties, ER, imaging, blood bank. Hospital Beneficencia Española ('La Bene'): 135+ years serving the city, 36+ specialties, 700+ affiliated physicians, part of the Angels stroke-readiness network. Both have ERs; call ahead to confirm overnight staffing.", "Star Médica (Tequisquiapan, en SLP desde 2000): ~30 especialidades, urgencias, imagen, banco de sangre. La Beneficencia Española ('La Bene'): 135+ años en la ciudad, 36+ especialidades, 700+ médicos, parte de la red Angels de atención de EVC. Ambos tienen urgencias; llama para confirmar guardias nocturnas.")}</p></div>
  <div class="bg-white border-l-4 border-gray-300 rounded-r-xl shadow-sm p-5"><h3 class="font-bold text-gray-900 mb-1">${t('The public system', 'El sistema público')}</h3><p class="text-sm text-gray-700">${t("Hospital Central 'Dr. Ignacio Morones Prieto' — the state's teaching/reference hospital (424 beds, ~98 services), which since 2024 operates under IMSS-Bienestar as a high-specialty regional hospital. It's where major trauma gets referred regardless of your insurance. IMSS runs Hospital General de Zona 50 (recently added a cardiac cath lab); ISSSTE's general hospital has a 24/7 ER.", "El Hospital Central 'Dr. Ignacio Morones Prieto' — el hospital escuela/de referencia del estado (424 camas, ~98 servicios), que desde 2024 opera bajo IMSS-Bienestar como regional de alta especialidad. Ahí se refiere el trauma mayor sin importar tu seguro. El IMSS tiene el HGZ 50 (con nueva sala de hemodinamia); el hospital general del ISSSTE tiene urgencias 24/7.")}</p></div>
</div>
</section>

<section id="doctors" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-rose-500 pb-3 inline-block">${t('Finding English-speaking doctors', 'Encontrar médicos que hablen inglés')}</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">${t(
    'Here’s the frustrating truth: <strong>Doctoralia</strong>, the platform where SLP doctors actually live (thousands of profiles, online booking), has <strong>no English-language filter at the city level</strong>. The workflow that works: search your specialty → open profiles → check the "Idiomas" field → book the ones listing inglés. <strong>TocDoc</strong> does maintain an English-speaking-doctors facet worth cross-checking. And the analog method never fails: have the office assistant confirm by phone before booking.',
    'La verdad frustrante: <strong>Doctoralia</strong>, la plataforma donde realmente viven los médicos de SLP (miles de perfiles, citas en línea), <strong>no tiene filtro de inglés por ciudad</strong>. El flujo que funciona: busca la especialidad → abre perfiles → revisa el campo "Idiomas" → agenda los que listan inglés. <strong>TocDoc</strong> sí mantiene un listado de médicos con inglés que vale cruzar. Y el método análogo nunca falla: que te lo confirmen por teléfono antes de agendar.'
  )}</p>
</section>

<section id="pharmacies" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-rose-500 pb-3 inline-block">${t('Pharmacies & the MX$70 consult', 'Farmacias y la consulta de $70')}</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">${t(
    "Mexico's pharmacy-adjacent consultorio system is the country's real primary-care network — roughly 18,000 of them nationally handling ~10 million consultations a month. In SLP you'll find Farmacias Guadalajara (several branches open 24 hours), del Ahorro, Benavides and the ubiquitous Similares, with consults running <strong>MX$50–150</strong>. Two rules worth knowing: <strong>antibiotics legally require a prescription</strong> (since 2010 — pharmacies retain the receta), and the consultorio doctor can write one on the spot, which is exactly what makes the system work.",
    'El sistema de consultorios adyacentes a farmacias es la verdadera red de atención primaria del país — unos 18,000 a nivel nacional atendiendo ~10 millones de consultas al mes. En SLP encontrarás Farmacias Guadalajara (varias sucursales 24 horas), del Ahorro, Benavides y las omnipresentes Similares, con consultas de <strong>$50–150</strong>. Dos reglas que conviene saber: <strong>los antibióticos requieren receta por ley</strong> (desde 2010 — la farmacia la retiene), y el médico del consultorio puede extenderla en el momento, que es justo lo que hace funcionar el sistema.'
  )}</p>
</section>

<section id="emergencies" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-red-500 pb-3 inline-block">${t('Emergencies: numbers & real costs', 'Emergencias: teléfonos y costos reales')}</h2>
</div>
<div class="grid md:grid-cols-2 gap-4 mb-6">
  <div class="bg-gray-50 rounded-xl p-6"><h3 class="font-bold text-lg text-gray-900 mb-2">📞 ${t('Save these', 'Guarda estos')}</h3><ul class="space-y-2 text-sm text-gray-700"><li>• <strong>911</strong> — ${t('national emergency number', 'número nacional de emergencias')}</li><li>• <strong>Cruz Roja SLP: 444 815 0519</strong></li><li>• ${t('Private 24/7 ambulances: EMPHI ABC, EPB, Arso', 'Ambulancias privadas 24/7: EMPHI ABC, EPB, Arso')}</li><li>• ${t('Confirmed 24/7 private ER: Hospital Angeles SLP', 'Urgencias privadas 24/7 confirmadas: Hospital Angeles SLP')}</li></ul></div>
  <div class="bg-red-50 border-2 border-red-200 rounded-xl p-6"><h3 class="font-bold text-lg text-red-900 mb-2">💸 ${t('Uninsured reality (national ballparks)', 'La realidad sin seguro (referencias nacionales)')}</h3><ul class="space-y-2 text-sm text-gray-800"><li>• ${t('ER consult: ~MX$400–1,000', 'Consulta de urgencias: ~$400–1,000')}</li><li>• ${t('Hospital bed: ~MX$8,000/day · ICU: up to MX$40,000/day', 'Cama: ~$8,000/día · Terapia intensiva: hasta $40,000/día')}</li><li>• ${t('Average private hospitalization event: MX$80,000–150,000', 'Evento promedio de hospitalización privada: $80,000–150,000')}</li><li>• ${t('Private ERs commonly ask for a deposit/card at triage', 'Las urgencias privadas suelen pedir depósito/tarjeta al ingresar')}</li></ul></div>
</div>
<p class="text-xs text-gray-500 italic">${t('SLP hospitals do not publish tariffs (Profeco has flagged this industry-wide); figures are verifiable national references.', 'Los hospitales de SLP no publican tarifas (Profeco lo ha señalado a nivel industria); las cifras son referencias nacionales verificables.')}</p>
</section>

<section id="insurance" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-rose-500 pb-3 inline-block">${t('Insurance — and the Medicare trap', 'Seguros — y la trampa de Medicare')}</h2>
</div>
<div class="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6 mb-6">
  <p class="text-gray-800 leading-relaxed"><strong>${t('US readers, this first:', 'Lectores de EE.UU., esto primero:')}</strong> ${t(
    "<strong>Medicare does not cover you in Mexico.</strong> Its own fact sheet allows only three narrow exceptions (none of which is 'living in San Luis Potosí'), and Medicare drug plans can't cover pharmacy purchases abroad. Plan around it, not against it.",
    '<strong>Medicare no te cubre en México.</strong> Su propia hoja informativa solo permite tres excepciones estrechas (ninguna es "vivir en San Luis Potosí"), y sus planes de medicamentos no cubren compras en farmacias del extranjero. Planea alrededor de eso.'
  )}</p>
</div>
<div class="space-y-3 mb-4 text-gray-800">
  <p>• <strong>${t('International expat plans', 'Planes internacionales de expat')}</strong> — ${t('Cigna Global, GeoBlue/BCBS Global Solutions and IMG all cover Mexico; typical range ~US$300–700/month depending on age and deductible (excluding-US versions cost roughly half).', 'Cigna Global, GeoBlue/BCBS Global Solutions e IMG cubren México; rango típico ~US$300–700/mes según edad y deducible (las versiones que excluyen EE.UU. cuestan cerca de la mitad).')}</p>
  <p>• <strong>${t('Mexican GMM policies', 'Pólizas GMM mexicanas')}</strong> — ${t('major-medical coverage from Mexican insurers runs roughly MX$12,000–35,000/year for a 40-year-old (wide range; CONDUSEF has a free comparison simulator).', 'la cobertura de gastos médicos mayores con aseguradoras mexicanas ronda $12,000–35,000/año a los 40 (rango amplio; CONDUSEF tiene simulador gratuito).')}</p>
  <p>• <strong>${t('Travel insurance', 'Seguro de viaje')}</strong> — ${t('fine for trips under ~90 days; emergencies only, excludes routine care, and generally invalid once you hold or apply for residency.', 'sirve para viajes de ~90 días; solo emergencias, excluye lo rutinario y en general se invalida al tener o tramitar residencia.')}</p>
</div>
</section>

<section id="imss" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-rose-500 pb-3 inline-block">${t('IMSS for foreigners: the fine print', 'IMSS para extranjeros: la letra chica')}</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">${t(
    'The voluntary <strong>Seguro de Salud para la Familia (Modalidad 33)</strong> lets residents buy into the public system: paid annually in advance (2026: MX$11,850 at 30–39, <strong>MX$13,800 at 40–49</strong>, MX$19,800 at 60–69). You need a CURP — which effectively means a resident card. Read the fine print before relying on it:',
    'El <strong>Seguro de Salud para la Familia (Modalidad 33)</strong> voluntario permite a los residentes entrar al sistema público: pago anual por adelantado (2026: $11,850 entre 30–39, <strong>$13,800 entre 40–49</strong>, $19,800 entre 60–69). Necesitas CURP — que en la práctica significa tarjeta de residencia. Lee la letra chica antes de depender de él:'
  )}</p>
<ul class="space-y-2 mb-4 text-gray-800 text-sm">
  <li>• ${t('<strong>Pre-existing exclusions</strong> (official list): malignant tumors, chronic-degenerative disease including diabetes complications, chronic kidney/liver disease, heart conditions, HIV, addictions, psychiatric conditions and more. Diagnosed in year one → enrollment can be cancelled, no refund.', '<strong>Exclusiones por preexistencias</strong> (lista oficial): tumores malignos, crónico-degenerativas incluidas complicaciones de diabetes, insuficiencia renal/hepática crónica, cardiopatías, VIH, adicciones, padecimientos psiquiátricos y más. Diagnóstico en el año uno → pueden cancelar la inscripción, sin reembolso.')}</li>
  <li>• ${t('<strong>Waiting periods:</strong> 10 months for childbirth; 1 year for most elective surgery; 2 years for orthopedic surgery.', '<strong>Periodos de espera:</strong> 10 meses parto; 1 año la mayoría de cirugías electivas; 2 años cirugía ortopédica.')}</li>
  <li>• ${t("<strong>Wait times:</strong> IMSS's own filings acknowledge surgery backlogs and saturation. Honest role: a catastrophic-cost safety net alongside private care, not a replacement for it.", '<strong>Tiempos:</strong> los propios informes del IMSS reconocen rezago quirúrgico y saturación. Su rol honesto: red de protección catastrófica junto a la atención privada, no su reemplazo.')}</li>
</ul>
</section>

<section id="dental" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-rose-500 pb-3 inline-block">${t('Dental & vision', 'Dental y visión')}</h2>
</div>
<p class="text-gray-800 leading-relaxed mb-4">${t(
    "The savings expats brag about are real (Mexico-wide 2026 ranges): cleanings MX$500–800, porcelain crowns US$450–650 vs US$1,000–1,800 north of the border, single implants US$750–1,200 vs US$3,000–5,000 — and SLP isn't a border town, so prices trend at or below those ranges. For glasses: Devlyn (free eye exams as chain standard), Ben & Frank and Ópticas Franklin all operate in the city.",
    'Los ahorros que presumen los expats son reales (rangos México 2026): limpiezas $500–800, coronas de porcelana US$450–650 vs US$1,000–1,800 al norte de la frontera, implantes individuales US$750–1,200 vs US$3,000–5,000 — y SLP no es ciudad fronteriza, así que los precios tienden a esos rangos o abajo. Para lentes: Devlyn (examen gratis como estándar de cadena), Ben & Frank y Ópticas Franklin operan en la ciudad.'
  )}</p>
</section>

<section id="faq" class="mb-16 scroll-mt-8">
<div class="not-prose mb-6">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-4 border-rose-500 pb-3 inline-block">FAQ</h2>
</div>
<div class="space-y-4">
  ${faqDetails(faq)}
</div>
</section>

<section id="sources" class="mb-8 scroll-mt-8">
<div class="not-prose mb-4">
  <h2 class="text-2xl font-bold text-gray-900 mb-3">${t('Sources', 'Fuentes')}</h2>
</div>
<p class="text-sm text-gray-600 leading-relaxed">${t(
    "Verified July 2026: hospitals' own sites (HLS, Hospital Angeles SLP incl. its 24/7 ER page, Star Médica, La Bene, Hospital Central/IMSS-Bienestar), the Funsalud/Blutitude national private-hospital ranking, DOF May 27 2010 (antibiotic prescription rule), ANAFARMEX/Proceso and Salud Pública de México (consultorio system), Medicare's official outside-US fact sheet, insurer country pages (Cigna Global, GeoBlue/BCBS, IMG), IMSS Modalidad 33 official pages (requirements, exclusions, waiting periods, 2026 tables), Cruz Roja SLP, private ambulance companies' sites, and Mexico-wide dental price guides (2026). Where SLP-specific tariffs aren't published, we label figures as national references.",
    'Verificado en julio 2026: sitios propios de los hospitales (HLS, Hospital Angeles SLP incl. su página de urgencias 24/7, Star Médica, La Bene, Hospital Central/IMSS-Bienestar), el ranking nacional Funsalud/Blutitude, DOF 27 may 2010 (receta para antibióticos), ANAFARMEX/Proceso y Salud Pública de México (sistema de consultorios), la hoja oficial de Medicare sobre cobertura fuera de EE.UU., páginas país de aseguradoras (Cigna Global, GeoBlue/BCBS, IMG), páginas oficiales del IMSS Modalidad 33 (requisitos, exclusiones, esperas, tablas 2026), Cruz Roja SLP, ambulancias privadas y guías de precios dentales de México (2026). Donde no hay tarifas publicadas de SLP, las cifras se etiquetan como referencias nacionales.'
  )}</p>
</section>

<div class="bg-gradient-to-r from-rose-600 to-pink-600 rounded-2xl p-8 text-center">
  <p class="text-white text-lg font-bold mb-2">${t('Building your move-to-SLP file?', '¿Armando tu expediente de mudanza a SLP?')}</p>
  <p class="text-rose-100 text-sm mb-4">${t('Pair this with our <a href="/blog/is-san-luis-potosi-safe-2026" class="underline font-semibold text-white">safety analysis</a> and <a href="/blog/cost-of-living-san-luis-potosi-2026" class="underline font-semibold text-white">cost breakdown</a> — and get the weekly brief free.', 'Complementa con nuestro <a href="/blog/is-san-luis-potosi-safe-2026" class="underline font-semibold text-white">análisis de seguridad</a> y el <a href="/blog/cost-of-living-san-luis-potosi-2026" class="underline font-semibold text-white">desglose de costos</a> — y recibe el brief semanal gratis.')}</p>
  <a href="/subscribe" class="inline-block bg-white text-rose-700 font-bold px-6 py-3 rounded-full hover:bg-rose-50 transition-colors">${t('Subscribe to San Luis Way Weekly', 'Suscríbete a San Luis Way Weekly')}</a>
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
  image_url: '/images/practical-categories/english-speaking-healthcare.jpg',
  category: 'Expat Life',
  tags: ['healthcare', 'hospitals', 'insurance', 'imss', 'expat-life', 'san-luis-potosi', 'mexico', '2026'],

  title: 'Healthcare in San Luis Potosí for Expats (2026): Hospitals, Insurance & Real Costs',
  excerpt: "The private hospitals honestly ranked (which one has a confirmed 24/7 ER), how to actually find English-speaking doctors, the MX$70 pharmacy consult system, why Medicare won't save you, IMSS fine print, and the uninsured-emergency numbers that justify insurance.",
  content: buildContent(false),
  meta_title: 'Healthcare in San Luis Potosí for Expats 2026: Hospitals & Insurance',
  meta_description: "SLP healthcare for expats: private hospitals ranked, English-speaking doctors, pharmacy consults, emergency numbers and costs, Medicare limits, IMSS Modalidad 33 fine print, dental savings. Verified 2026.",

  title_es: 'Salud en San Luis Potosí para Expats (2026): Hospitales, Seguros y Costos Reales',
  excerpt_es: 'Los hospitales privados con honestidad (cuál tiene urgencias 24/7 confirmadas), cómo encontrar médicos que hablen inglés, el sistema de consulta de farmacia de $70, por qué Medicare no te salva, la letra chica del IMSS y los números de una emergencia sin seguro.',
  content_es: buildContent(true),
  meta_title_es: 'Salud en SLP para Expats 2026: Hospitales y Seguros',
  meta_description_es: 'Salud en San Luis Potosí para expats: hospitales privados, médicos con inglés, consultorios de farmacia, emergencias y costos, límites de Medicare, IMSS Modalidad 33, ahorros dentales. Verificado 2026.',

  title_de: 'Gesundheitsversorgung in San Luis Potosí für Expats (2026)',
  excerpt_de: 'Die Privatkliniken ehrlich bewertet, englischsprachige Ärzte finden, das 70-Peso-Apotheken-System, warum Medicare nicht hilft, IMSS-Kleingedrucktes und die Notfallkosten ohne Versicherung.',
  content_de: buildContent(false),
  meta_title_de: 'Gesundheit in San Luis Potosí für Expats 2026',
  meta_description_de: 'SLP-Gesundheitswesen für Expats: Privatkliniken, englischsprachige Ärzte, Apotheken-Sprechstunden, Notfallkosten, Medicare-Grenzen, IMSS. Verifiziert 2026.',

  title_ja: 'サン・ルイス・ポトシの医療ガイド：外国人向け（2026年）',
  excerpt_ja: '私立病院の正直な評価（24時間救急が確認できるのはどこか）、英語対応医師の探し方、70ペソの薬局診察システム、メディケアが使えない理由、IMSSの注意点、無保険時の救急費用。',
  content_ja: buildContent(false),
  meta_title_ja: 'サン・ルイス・ポトシ医療ガイド2026 | 病院・保険・費用',
  meta_description_ja: 'SLPの外国人向け医療：私立病院、英語対応医師、薬局診察、救急費用、メディケアの制限、IMSS加入。2026年検証済み。',
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
