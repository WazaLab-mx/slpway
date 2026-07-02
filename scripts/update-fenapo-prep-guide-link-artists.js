// One-off: the April prep guide promised a "second guide" once the FENAPO 2026
// lineup was 100% confirmed. That guide now exists
// (/blog/fenapo-2026-artistas-cartel-completo) — patch the stale April copy
// in Supabase to link to it. Applies to `content` and `content_es` (both hold
// the same Spanish copy).
require('dotenv').config({ path: '.env' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const GUIDE_URL = '/blog/fenapo-2026-artistas-cartel-completo';

const PATCHES = [
  [
    'Cuando la cartelera esté 100% confirmada (típicamente junio/julio) publicaremos una segunda guía dedicada exclusivamente a los artistas y sus fechas.',
    `La cartelera ya está 100% confirmada — consulta la <a href="${GUIDE_URL}" class="text-purple-700 underline font-semibold">guía completa de artistas y fechas</a>.`,
  ],
  [
    '<strong>Cartel:</strong> 9 confirmados (3 Teatro + 6 Palenque), más anuncios esperados mayo–julio',
    `<strong>Cartel:</strong> completo — 21 noches gratis en el Foro de las Estrellas + 14 en el Palenque · <a href="${GUIDE_URL}" class="underline">ver todos los artistas</a>`,
  ],
  [
    'El cartel está al 90%. Esto es solo una instantánea — cada semana sale un anuncio nuevo y actualizamos. Para el cartel 100% verificado publicaremos un segundo deep-dive dedicado a los artistas cuando estén todos confirmados.',
    `<strong>Actualización (1 de julio de 2026):</strong> el cartel oficial completo ya fue publicado el 27 de mayo. Esta sección queda como registro de abril — el calendario definitivo, noche por noche (21 gratis en el Foro + 14 de Palenque), está en la <a href="${GUIDE_URL}" class="text-purple-700 underline font-semibold">guía completa de artistas FENAPO 2026</a>.`,
  ],
  ['Estado del cartel (abril)', 'Estado del cartel (histórico abril)'],
  ['Estado del Cartel (a 18 abril 2026)', 'Estado del Cartel — histórico (el cartel ya está completo)'],
];

function applyPatches(html, label) {
  let out = html;
  let applied = 0;
  for (const [from, to] of PATCHES) {
    if (out.includes(from)) {
      out = out.split(from).join(to);
      applied++;
    } else {
      console.log(`  [${label}] not found: "${from.slice(0, 60)}…"`);
    }
  }
  console.log(`  [${label}] ${applied}/${PATCHES.length} patches applied`);
  return out;
}

async function main() {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('id, content, content_es')
    .eq('slug', 'fenapo-2026-guia-preparacion')
    .maybeSingle();
  if (error || !data) {
    console.error('Fetch error:', error);
    process.exit(1);
  }

  const content = applyPatches(data.content, 'content');
  const content_es = applyPatches(data.content_es, 'content_es');

  if (content === data.content && content_es === data.content_es) {
    console.log('Nothing to update (already patched?).');
    return;
  }

  const { error: upErr } = await supabase
    .from('blog_posts')
    .update({ content, content_es, content_de: content, content_ja: content })
    .eq('id', data.id);
  if (upErr) {
    console.error('Update error:', upErr);
    process.exit(1);
  }
  console.log('Prep guide patched to link the artist deep-dive.');
}

main();
