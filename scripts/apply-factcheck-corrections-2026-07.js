// Fact-check corrections, July 2026 (idempotent). Patches EN (content) and ES
// (content_es); content_de/content_ja hold the EN HTML, so EN patches are
// applied to them too. Verifies every change by re-fetching after the update.
require('dotenv').config({ path: '.env' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const CORRECTIONS = {
  'fenapo-2026-artistas-cartel-completo': {
    content: [
      ['tickets at fenapo.mx and eticket.mx', 'tickets at slpfastticket.com'],
      ['buy only at <strong>fenapo.mx</strong> or <strong>eticket.mx</strong>.',
       'buy only at <strong>slpfastticket.com</strong>, the official channel announced by the SLP state government.'],
      ['sold only through the official channels: fenapo.mx and eticket.mx.',
       'sold only through the official channel: slpfastticket.com.'],
      // Batch 2: remove uncorroborated edition number in EN (matches ES fix).
      ['wraps up the 77th edition.', 'wraps up the 2026 edition.'],
      ['FENAPO 2026 (the 77th Feria Nacional Potosina)', 'FENAPO 2026 (the Feria Nacional Potosina)'],
    ],
    content_es: [
      ['boleto en fenapo.mx y eticket.mx', 'boleto en slpfastticket.com'],
      ['compra únicamente en <strong>fenapo.mx</strong> o <strong>eticket.mx</strong>.',
       'compra únicamente en <strong>slpfastticket.com</strong>, el canal oficial anunciado por el gobierno del estado.'],
      ['se venden únicamente por los canales oficiales: fenapo.mx y eticket.mx.',
       'se venden únicamente por el canal oficial: slpfastticket.com.'],
      ['cierran la edición 77. Fin de fiesta garantizado.',
       'cierran la edición 2026. Fin de fiesta garantizado.'],
      ['(edición 77 de la Feria Nacional Potosina)', '(Feria Nacional Potosina)'],
    ],
  },
  'where-to-stay-san-luis-potosi-2026': {
    content: [
      ['pushes occupancy to ~70%. Book weekends 4–8 weeks out;',
       'lifts demand citywide — FENAPO 2025 averaged 45–55% hotel occupancy (45–50% on weekdays, up to ~55% on weekends), per the SLP hotel association. Book weekends 4–8 weeks out;'],
      ["Citywide occupancy hits ~70% in August: book weekends 4–8 weeks ahead, and check the hotel association's discounted FENAPO rates.",
       "During FENAPO 2025, citywide occupancy averaged 45–55% (up to ~55% on weekends), per the SLP hotel association — still book weekends 4–8 weeks ahead, and check the hotel association's discounted FENAPO rates."],
      ['FENAPO ~70% occupancy and discounted fair rates (Líder Empresarial, fenapo.slp.gob.mx)',
       'FENAPO 2025 occupancy of 45–55% and discounted fair rates (SLP hotel association via Líder Empresarial, Sept 2025; fenapo.slp.gob.mx)'],
    ],
    content_es: [
      ['sube la ocupación a ~70%. Reserva fines de semana con 4–8 semanas;',
       'eleva la demanda en toda la ciudad — la FENAPO 2025 promedió 45–55% de ocupación hotelera (45–50% entre semana, hasta ~55% en fines de semana), según la asociación de hoteles de SLP. Reserva fines de semana con 4–8 semanas;'],
      ['La ocupación llega a ~70% en agosto: reserva los fines de semana con 4–8 semanas,',
       'Durante la FENAPO 2025 la ocupación promedió 45–55% (hasta ~55% en fines de semana), según la asociación de hoteles — aun así reserva los fines de semana con 4–8 semanas,'],
      ['ocupación FENAPO ~70% y tarifas preferenciales (Líder Empresarial, fenapo.slp.gob.mx)',
       'ocupación FENAPO 2025 de 45–55% y tarifas preferenciales (asociación de hoteles vía Líder Empresarial, sep 2025; fenapo.slp.gob.mx)'],
    ],
  },
  'cost-of-living-san-luis-potosi-2026': {
    content: [
      ['+21%</p><p class="text-sm text-gray-700">Mexico City vs SLP, overall with rent (Numbeo, Jul 2026)',
       '+24%</p><p class="text-sm text-gray-700">Mexico City vs SLP, overall with rent (Numbeo, Jul 2026)'],
      ['Mexico City runs about 21% more expensive overall including rent (Numbeo, July 2026)',
       'Mexico City runs about 24% more expensive overall including rent (Numbeo, July 2026)'],
    ],
    content_es: [
      ['+21%</p><p class="text-sm text-gray-700">CDMX vs SLP, total con renta (Numbeo, jul 2026)',
       '+24%</p><p class="text-sm text-gray-700">CDMX vs SLP, total con renta (Numbeo, jul 2026)'],
      ['CDMX sale ~21% más cara en total con renta (Numbeo, julio 2026)',
       'CDMX sale ~24% más cara en total con renta (Numbeo, julio 2026)'],
    ],
  },
  'huasteca-potosina-itinerary-2026': {
    content: [
      ['<strong>Budget:</strong> entries run MX$70–250 per site',
       '<strong>Budget:</strong> entries run MX$100–250 per site'],
      ['>≈ $70 + life jacket $30–50 MXN<',
       '>$100–200 (pricing changed Mar 2026) + life jacket $30–50 MXN<'],
      ['>Tue–Sun 8 AM–4 PM<',
       '>Tue–Sun from 8 AM · closing reported between 5 and 7 PM — confirm locally<'],
      ['in the 2024 drought Tamul briefly ran dry, so late-season visitors should temper expectations.',
       'in the 2024 drought Tamul briefly ran dry, and low/no-flow conditions recurred in April–May 2026, so late-season visitors should temper expectations.'],
      ['Wikipedia/Conagua reporting (Tamul dimensions and 2024 drought)',
       'Wikipedia/Conagua and press reporting (Tamul dimensions and the 2024 and 2026 low-water episodes)'],
    ],
    content_es: [
      ['<strong>Presupuesto:</strong> entradas de $70–250 MXN por sitio',
       '<strong>Presupuesto:</strong> entradas de $100–250 MXN por sitio'],
      ['>≈ $70 + chaleco $30–50 MXN<',
       '>$100–200 (la tarifa cambió en mar 2026) + chaleco $30–50 MXN<'],
      ['>Mar–Dom 8:00–16:00<',
       '>Mar–Dom desde las 8:00 · el cierre reportado varía entre 17:00 y 19:00 — confirma en sitio<'],
      ['en la sequía de 2024 Tamul llegó a secarse, así que modera expectativas al final de la temporada.',
       'en la sequía de 2024 Tamul llegó a secarse y el bajo caudal se repitió en abril–mayo de 2026, así que modera expectativas al final de la temporada.'],
      ['reportes de Conagua sobre la sequía de 2024 en Tamul',
       'reportes de Conagua y prensa sobre el bajo caudal del Tamul en 2024 y 2026'],
    ],
  },
  'real-de-catorce-guide-2026': {
    content: [
      ['~260 km north of San Luis Potosí city', '~220 km north of San Luis Potosí city'],
      ['~260 km: Hwy 57 north to Matehuala', '~220 km: Hwy 57 north to Matehuala'],
      ['(260 km away)', '(220 km away)'],
    ],
    content_es: [
      ['a ~260 km al norte de la capital potosina', 'a ~220 km al norte de la capital potosina'],
      ['~260 km: carretera 57 al norte hasta Matehuala', '~220 km: carretera 57 al norte hasta Matehuala'],
      ['(260 km)', '(220 km)'],
    ],
  },
  'xilitla-las-pozas-guide-2026': {
    content: [
      ['Swimming in the pools below the waterfalls used to be allowed, but the site now prohibits it to protect the aging concrete structures.',
       'Swimming in the pools below the waterfalls used to be allowed, but it has not been permitted since the pandemic era.'],
    ],
    content_es: [
      ['Antes se permitía nadar en las pozas bajo las cascadas, pero hoy está prohibido para proteger las estructuras de concreto.',
       'Antes se permitía nadar en las pozas bajo las cascadas, pero dejó de permitirse desde la época de la pandemia.'],
    ],
  },
  'is-san-luis-potosi-safe-2026': {
    content: [
      // Boston is far safer (~3.7) — drop it from the "similar rate" card; Austin corrected to ~6.6.
      ['Austin, TX (8.2) · Denver, CO (8.4) · Boston, MA (8.4) · Long Beach, CA (8.1)',
       'Austin, TX (6.6) · Denver, CO (8.4) · Long Beach, CA (8.1)'],
      ['lands in the range of Austin (8.2), Denver (8.4) or Boston (8.4) in FBI 2024 data — above the US national average of 5.0',
       'lands in the range of Denver (8.4) or Long Beach (8.1) in FBI 2024 data — higher than Austin (6.6) and considerably higher than Boston (3.7), above the US national average of 5.0'],
      ['comparable to Austin or Denver', 'comparable to Denver or Long Beach'],
      ['rose year-over-year (24.1% → 42.2%)',
       'rose quarter-over-quarter (24.1% in Q4 2025 → 42.2% in Q1 2026)'],
      ['-54%</p><p class="text-sm text-gray-700">State homicides in 2025 vs 2024 (444 → 203), per SESNSP figures announced by the state',
       '-53%</p><p class="text-sm text-gray-700">State homicides in 2025 vs 2024 (444 → 207), per consolidated federal SESNSP figures'],
      ['on <strong>December 30, 2025</strong>, gunmen',
       'on <strong>December 27, 2025</strong> (officially confirmed on December 30), gunmen'],
      ['about half the national 16.0 (mayor, citing SESNSP)',
       'about half the national 17.5 (SESNSP; the mayor cited 16.0)'],
    ],
    content_es: [
      ['Austin, TX (8.2) · Denver, CO (8.4) · Boston, MA (8.4) · Long Beach, CA (8.1)',
       'Austin, TX (6.6) · Denver, CO (8.4) · Long Beach, CA (8.1)'],
      ['queda en el rango de Austin (8.2), Denver (8.4) o Boston (8.4) según datos FBI 2024 — arriba del promedio nacional de EE.UU. (5.0)',
       'queda en el rango de Denver (8.4) o Long Beach (8.1) según datos FBI 2024 — más alta que Austin (6.6) y bastante más alta que Boston (3.7), arriba del promedio nacional de EE.UU. (5.0)'],
      ['comparable a Austin o Denver', 'comparable a Denver o Long Beach'],
      ['subieron año contra año (24.1% → 42.2%)',
       'subieron trimestre contra trimestre (24.1% en el 4T 2025 → 42.2% en el 1T 2026)'],
      ['-54%</p><p class="text-sm text-gray-700">Homicidios estatales 2025 vs 2024 (444 → 203), cifras SESNSP anunciadas por el estado',
       '-53%</p><p class="text-sm text-gray-700">Homicidios estatales 2025 vs 2024 (444 → 207), cifras SESNSP federales consolidadas'],
      ['el <strong>30 de diciembre de 2025</strong>, hombres armados',
       'el <strong>27 de diciembre de 2025</strong> (confirmado oficialmente el 30 de diciembre), hombres armados'],
      ['cerca de la mitad de la nacional de 16.0 (alcalde, citando SESNSP)',
       'cerca de la mitad de la nacional de 17.5 (SESNSP; el alcalde citó 16.0)'],
    ],
  },
  'healthcare-san-luis-potosi-expats-2026': {
    content: [
      ["the only SLP hospital regularly appearing in Funsalud/Blutitude's national Top-50 private hospital ranking.",
       "the most consistent SLP presence in Funsalud/Blutitude's national Top-50 private hospital ranking (other SLP hospitals have also made the list — Hospital La Bene in 2024, Hospital de Especialidades Médicas de la Salud in 2025)."],
      ['paid annually in advance (2026: MX$11,850 at 30–39, <strong>MX$13,800 at 40–49</strong>, MX$19,800 at 60–69)',
       'paid annually in advance (March 2026–February 2027 schedule: MX$12,350 at 30–39, <strong>MX$14,350 at 40–49</strong>, MX$20,600 at 60–69)'],
      ['paid annually in advance (MX$13,800/year at ages 40–49 in 2026)',
       'paid annually in advance (MX$14,350/year at ages 40–49 on the March 2026–February 2027 schedule)'],
      ['waiting periods, 2026 tables)', 'waiting periods, 2026–2027 tables)'],
    ],
    content_es: [
      ['el único hospital de SLP que aparece regularmente en el Top 50 nacional de Funsalud/Blutitude.',
       'la presencia potosina más constante en el Top 50 nacional de Funsalud/Blutitude (otros hospitales de SLP también han entrado a la lista — La Bene en 2024, el Hospital de Especialidades Médicas de la Salud en 2025).'],
      ['pago anual por adelantado (2026: $11,850 entre 30–39, <strong>$13,800 entre 40–49</strong>, $19,800 entre 60–69)',
       'pago anual por adelantado (tabla marzo 2026–febrero 2027: $12,350 entre 30–39, <strong>$14,350 entre 40–49</strong>, $20,600 entre 60–69)'],
      ['pago anual por adelantado ($13,800/año entre 40–49 años en 2026)',
       'pago anual por adelantado ($14,350/año entre 40–49 años, tabla marzo 2026–febrero 2027)'],
      ['esperas, tablas 2026)', 'esperas, tablas 2026–2027)'],
    ],
  },
};

const snip = (s) => (s.length > 70 ? s.slice(0, 70) + '…' : s);

function applyPatches(html, patches, label) {
  let out = html || '';
  const applied = [];
  const missing = [];
  for (const [from, to] of patches) {
    if (out.includes(from)) {
      const count = out.split(from).length - 1;
      out = out.split(from).join(to);
      applied.push([from, to, count]);
    } else {
      missing.push([from, to]);
    }
  }
  for (const [from, to, count] of applied) {
    console.log(`  [${label}] (${count}x) "${snip(from)}"\n    -> "${snip(to)}"`);
  }
  for (const [from, to] of missing) {
    const already = (html || '').includes(to);
    console.log(`  [${label}] NOT FOUND${already ? ' (already corrected)' : ''}: "${snip(from)}"`);
  }
  return out;
}

async function processPost(slug, patchSets) {
  console.log(`\n===== ${slug} =====`);
  const { data, error } = await supabase
    .from('blog_posts')
    .select('id, content, content_es, content_de, content_ja')
    .eq('slug', slug)
    .maybeSingle();
  if (error || !data) {
    console.error(`  FETCH ERROR:`, error ? error.message : 'post not found');
    return false;
  }

  const update = {
    content: applyPatches(data.content, patchSets.content, 'content'),
    content_es: applyPatches(data.content_es, patchSets.content_es, 'content_es'),
    content_de: applyPatches(data.content_de, patchSets.content, 'content_de'),
    content_ja: applyPatches(data.content_ja, patchSets.content, 'content_ja'),
  };

  const changed = Object.keys(update).filter((k) => update[k] !== data[k]);
  if (changed.length === 0) {
    console.log('  Nothing to update (already patched).');
    return true;
  }

  const { error: upErr } = await supabase.from('blog_posts').update(update).eq('id', data.id);
  if (upErr) {
    console.error('  UPDATE ERROR:', upErr.message);
    return false;
  }
  console.log(`  Updated columns: ${changed.join(', ')}`);

  // Verify: re-fetch and confirm every `to` present and every `from` absent.
  const { data: check, error: chkErr } = await supabase
    .from('blog_posts')
    .select('content, content_es, content_de, content_ja')
    .eq('id', data.id)
    .single();
  if (chkErr) {
    console.error('  VERIFY FETCH ERROR:', chkErr.message);
    return false;
  }
  let ok = true;
  for (const col of ['content', 'content_es', 'content_de', 'content_ja']) {
    const patches = col === 'content_es' ? patchSets.content_es : patchSets.content;
    for (const [from, to] of patches) {
      if ((check[col] || '').includes(from)) {
        console.error(`  VERIFY FAIL [${col}]: old string still present: "${snip(from)}"`);
        ok = false;
      }
    }
  }
  console.log(ok ? '  Verified: no stale strings remain.' : '  Verification found problems.');
  return ok;
}

async function main() {
  let allOk = true;
  for (const [slug, patchSets] of Object.entries(CORRECTIONS)) {
    const ok = await processPost(slug, patchSets);
    allOk = allOk && ok;
  }
  console.log(allOk ? '\nAll corrections processed.' : '\nCompleted with problems — review output.');
  process.exit(allOk ? 0 : 1);
}

main();
