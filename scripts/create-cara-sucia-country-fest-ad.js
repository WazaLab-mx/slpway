/**
 * Creates a sponsor ad for Cara Sucia Country Fest 2026 in the newsletter.
 *
 * Inserts a row into sponsor_ads (Supabase) so the next weekly newsletter
 * surfaces the festival promo at the "middle" placement until the event date.
 *
 * Run:  node scripts/create-cara-sucia-country-fest-ad.js
 */

const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SERVICE_ROLE = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SERVICE_ROLE) {
  console.error('Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY env vars.');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE);

const EVENT_PAGE = 'https://www.sanluisway.com/events/cara-sucia-country-fest-2026';
const TICKETS_URL = 'https://www.superboletos.com/landing-evento/khm-vFXrLDWdtC250Jc74w';
const PROMO_URL = `${EVENT_PAGE}?utm_source=newsletter&utm_medium=sponsor_ad&utm_campaign=cara-sucia-country-fest-2026`;

const HTML_CONTENT = `
<table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="margin:0;padding:0;">
  <tr>
    <td align="center" style="padding:0;">
      <a href="${PROMO_URL}" style="text-decoration:none;color:inherit;display:block;">
        <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:640px;background:linear-gradient(135deg,#451a03 0%,#7c2d12 45%,#1c1917 100%);border-radius:16px;overflow:hidden;box-shadow:0 10px 25px rgba(0,0,0,0.15);">
          <tr>
            <td style="padding:32px 28px;font-family:'Helvetica Neue',Arial,sans-serif;color:#ffffff;">
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td>
                    <span style="display:inline-block;background:rgba(251,191,36,0.18);border:1px solid rgba(251,191,36,0.55);color:#fbbf24;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;padding:6px 12px;border-radius:999px;">
                      🤠 Patrocinado · 13 Junio 2026
                    </span>
                  </td>
                </tr>
                <tr>
                  <td style="padding-top:18px;">
                    <h2 style="margin:0;font-size:28px;line-height:1.15;font-weight:800;color:#ffffff;letter-spacing:-0.5px;">
                      Cara Sucia Country Fest 2026
                    </h2>
                    <p style="margin:6px 0 0;font-size:15px;color:#fde68a;font-weight:600;">
                      Howdy y'all 🤠 — El primer gran festival country de SLP
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding-top:14px;">
                    <p style="margin:0;font-size:14px;line-height:1.6;color:rgba(255,255,255,0.88);">
                      Música country en vivo, BBQ ahumado todo el día, toro mecánico, juegos de rodeo, hat customization bar y mercadito vaquero en <strong>La Legendaria</strong>. Apto para toda la familia.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding-top:18px;">
                    <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td width="33%" align="left" style="padding-right:8px;">
                          <p style="margin:0;font-size:11px;color:#fbbf24;text-transform:uppercase;letter-spacing:1px;font-weight:700;">Fecha</p>
                          <p style="margin:2px 0 0;font-size:15px;color:#ffffff;font-weight:700;">Sáb 13 Jun</p>
                        </td>
                        <td width="33%" align="left" style="padding:0 4px;">
                          <p style="margin:0;font-size:11px;color:#fbbf24;text-transform:uppercase;letter-spacing:1px;font-weight:700;">Acceso</p>
                          <p style="margin:2px 0 0;font-size:15px;color:#ffffff;font-weight:700;">2:00 PM</p>
                        </td>
                        <td width="34%" align="left" style="padding-left:8px;">
                          <p style="margin:0;font-size:11px;color:#fbbf24;text-transform:uppercase;letter-spacing:1px;font-weight:700;">Boletos</p>
                          <p style="margin:2px 0 0;font-size:15px;color:#ffffff;font-weight:700;">Desde $380</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding-top:22px;" align="left">
                    <table role="presentation" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="background:#fbbf24;border-radius:999px;">
                          <a href="${PROMO_URL}" style="display:inline-block;padding:12px 24px;font-size:14px;font-weight:800;color:#1c1917;text-decoration:none;letter-spacing:0.3px;">
                            Ver detalles y boletos →
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding-top:14px;">
                    <p style="margin:0;font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:0.3px;">
                      Powered by Ford SS San Luis · Boletos en Superboletos · @soycarasucia
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </a>
    </td>
  </tr>
</table>
`.trim();

async function createSponsorAd() {
  console.log('Creating sponsor ad for Cara Sucia Country Fest 2026...');

  // Deactivate any previous version of this ad so we don't double-up.
  await supabase
    .from('sponsor_ads')
    .update({ active: false })
    .ilike('name', '%Cara Sucia Country Fest 2026%');

  const ad = {
    name: 'Cara Sucia Country Fest 2026 — Newsletter Sponsor',
    description:
      "1ra edición del festival country de SLP — 13 junio 2026 en La Legendaria. Boletos desde $380 MXN.",
    ad_type: 'html',
    html_content: HTML_CONTENT,
    link_url: PROMO_URL,
    link_target: '_blank',
    placement: 'middle',
    priority: 100,
    active: true,
    start_date: '2026-05-26',
    end_date: '2026-06-13',
    rotation_group: 'featured-event',
  };

  const { data, error } = await supabase
    .from('sponsor_ads')
    .insert([ad])
    .select()
    .single();

  if (error) {
    console.error('Error creating sponsor ad:', error);
    process.exit(1);
  }

  console.log('✅ Sponsor ad created:');
  console.log(`   id:        ${data.id}`);
  console.log(`   placement: ${data.placement}`);
  console.log(`   priority:  ${data.priority}`);
  console.log(`   active:    ${data.active} (until ${data.end_date})`);
  console.log(`   link:      ${data.link_url}`);
  console.log(`\nDirect tickets URL (for reference): ${TICKETS_URL}`);
}

createSponsorAd();
