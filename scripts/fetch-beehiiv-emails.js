/**
 * Script para obtener todos los emails de suscriptores de Beehiiv
 * y guardarlos en beehiiv_all_emails.txt para tracking
 * Ejecutar: node scripts/fetch-beehiiv-emails.js
 */

require('dotenv').config();
const fs = require('fs');
const path = require('path');

const BEEHIIV_API_BASE = 'https://api.beehiiv.com/v2';
const BEEHIIV_API_KEY = process.env.BEEHIIV_API_KEY;
const BEEHIIV_PUBLICATION_ID = process.env.BEEHIIV_PUBLICATION_ID;

async function listSubscribers(page = 1, limit = 100) {
  try {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString()
    });

    const response = await fetch(
      `${BEEHIIV_API_BASE}/publications/${BEEHIIV_PUBLICATION_ID}/subscriptions?${params}`,
      {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${BEEHIIV_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const result = await response.json();

    if (!response.ok) {
      return { success: false, error: 'Failed to list subscribers', data: result };
    }

    return {
      success: true,
      subscribers: result.data || [],
      total: result.total_results || 0
    };
  } catch (error) {
    console.error('Error fetching subscribers:', error);
    return {
      success: false,
      error: error.message
    };
  }
}

async function getAllSubscribers() {
  const allEmails = [];
  let page = 1;
  let hasMore = true;

  console.log('📥 Obteniendo todos los suscriptores de Beehiiv...\n');

  while (hasMore) {
    const result = await listSubscribers(page, 100);

    if (!result.success || !result.subscribers) {
      console.error(`❌ Error en página ${page}:`, result.error);
      break;
    }

    console.log(`   Página ${page}: ${result.subscribers.length} suscriptores`);

    result.subscribers.forEach(sub => {
      if (sub.email) {
        allEmails.push(sub.email.toLowerCase().trim());
      }
    });

    // Si obtenemos menos de 100, es la última página
    hasMore = result.subscribers.length === 100;
    page++;

    // Pequeño delay para no saturar la API
    if (hasMore) {
      await new Promise(resolve => setTimeout(resolve, 200));
    }
  }

  return allEmails;
}

async function main() {
  if (!BEEHIIV_API_KEY || !BEEHIIV_PUBLICATION_ID) {
    console.error('❌ Error: Faltan BEEHIIV_API_KEY o BEEHIIV_PUBLICATION_ID en .env');
    process.exit(1);
  }

  console.log('=== Extrayendo emails de Beehiiv ===\n');

  // Obtener todos los emails
  const emails = await getAllSubscribers();

  console.log(`\n✅ Total de emails obtenidos: ${emails.length}`);

  // Ordenar alfabéticamente
  emails.sort();

  // Guardar en archivo
  const outputPath = path.join(__dirname, '..', 'beehiiv_all_emails.txt');
  const content = emails.join('\n');

  fs.writeFileSync(outputPath, content, 'utf8');

  console.log(`📄 Archivo guardado en: ${outputPath}`);
  console.log(`\n${'='.repeat(60)}`);
  console.log('✅ PROCESO COMPLETADO');
  console.log('='.repeat(60));
  console.log(`Total de emails: ${emails.length}`);
  console.log(`Archivo: beehiiv_all_emails.txt`);
  console.log('='.repeat(60));

  // Mostrar algunos ejemplos
  console.log('\n📋 Primeros 10 emails:');
  emails.slice(0, 10).forEach((email, i) => {
    console.log(`   ${i + 1}. ${email}`);
  });
  if (emails.length > 10) {
    console.log(`   ... y ${emails.length - 10} más`);
  }
}

main();
