// Generates the B2B outreach list from the places table: every business
// already listed for free is a warm prospect for the 250 MXN/mo featured
// listing. Output: outreach-negocios.csv (gitignored — contact data stays
// local) sorted so the easiest wins come first.
// Run: node scripts/generate-outreach-list.js
require('dotenv').config({ path: '.env' });
const fs = require('fs');
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const SITE = 'https://www.sanluisway.com';

// Sales-relevant categories rank higher: businesses with walk-in customers
// benefit most visibly from a featured listing.
const CATEGORY_PRIORITY = {
  'local-food': 1, 'modern-dining': 1, 'traditional-cuisine': 1, 'international-food': 1,
  'comfort-food': 1, 'steak-house': 1, 'cocktail-bars': 1, 'cantinas': 1, 'sports-bar': 1,
  'remote-work-cafes': 1, 'language-exchange-cafes': 1, 'street-food': 1,
  'hotel-boutique': 2, 'sports-fitness': 2, 'family-activities': 2, 'live-music': 2,
  'restaurants-with-playgrounds': 2, 'english-speaking-healthcare': 2,
};

function waMessage(name) {
  return (
    `Hola, soy Santiago de San Luis Way (sanluisway.com). ` +
    `${name} ya aparece en nuestro directorio gratuito y le estamos mandando visitas y contactos. ` +
    `¿Te comparto sus estadísticas y cómo destacarlo? Toma 2 minutos.`
  );
}

function waLink(phone, name) {
  const digits = String(phone || '').replace(/\D/g, '');
  if (digits.length < 10) return '';
  const full = digits.length === 10 ? `52${digits}` : digits;
  return `https://wa.me/${full}?text=${encodeURIComponent(waMessage(name))}`;
}

function csvEscape(v) {
  const s = String(v ?? '');
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

async function main() {
  const { data: places, error } = await supabase
    .from('places')
    .select('id, name, category, phone, website, instagram, address, hours, description')
    .order('name');
  if (error) {
    console.error('Fetch error:', error.message);
    process.exit(1);
  }

  const rows = places.map((p) => {
    const completeness =
      (p.phone ? 1 : 0) + (p.website ? 1 : 0) + (p.instagram ? 1 : 0) + (p.hours ? 1 : 0) +
      (p.description && p.description.length > 50 ? 1 : 0);
    return {
      priority: CATEGORY_PRIORITY[p.category] || 3,
      name: p.name,
      category: p.category,
      phone: p.phone || '',
      whatsapp: p.phone ? waLink(p.phone, p.name) : '',
      website: p.website || '',
      instagram: p.instagram || '',
      address: p.address || '',
      perfil_completo: `${completeness}/5`,
      pagina: `${SITE}/places/${p.id}`,
      pitch_gancho: !p.website
        ? 'Sin sitio web: San Luis Way es su única presencia — argumento fuerte'
        : completeness >= 4
          ? 'Perfil completo: mostrar estadísticas de contactos'
          : 'Perfil incompleto: ofrecer completarlo como parte del plan',
    };
  });

  // Contactables first, then by category priority, then completeness.
  rows.sort((a, b) =>
    (b.phone ? 1 : 0) - (a.phone ? 1 : 0) ||
    a.priority - b.priority ||
    b.perfil_completo.localeCompare(a.perfil_completo)
  );

  const headers = ['name', 'category', 'phone', 'whatsapp', 'website', 'instagram', 'address', 'perfil_completo', 'pagina', 'pitch_gancho'];
  const csv = [headers.join(',')]
    .concat(rows.map((r) => headers.map((h) => csvEscape(r[h])).join(',')))
    .join('\n');

  const out = 'outreach-negocios.csv';
  fs.writeFileSync(out, '﻿' + csv, 'utf-8'); // BOM so Excel reads accents

  const withPhone = rows.filter((r) => r.phone).length;
  const p1 = rows.filter((r) => r.phone && r.priority === 1).length;
  const noWeb = rows.filter((r) => r.phone && !r.website).length;
  console.log(`Wrote ${out}: ${rows.length} businesses`);
  console.log(`  contactables por WhatsApp: ${withPhone}`);
  console.log(`  prioridad 1 (restaurantes/bares/cafés con teléfono): ${p1}`);
  console.log(`  sin sitio web propio (pitch más fuerte): ${noWeb}`);
  console.log('\nPrimeros 5 para llamar hoy:');
  rows.slice(0, 5).forEach((r, i) => console.log(`  ${i + 1}. ${r.name} (${r.category}) — ${r.phone}`));
}

main();
