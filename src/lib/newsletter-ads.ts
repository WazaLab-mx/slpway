import { getSupabaseClient } from './newsletter-supabase';

export interface AdPlacementData {
  ad_id: string;
  placement: 'top' | 'middle' | 'bottom';
  html: string;
}

export function injectAdsIntoHtml(html: string, ads: AdPlacementData[]): string {
  let result = html;

  const sectionMarkers: Record<string, { top: RegExp; bottom: RegExp | null }> = {
    top: {
      top: /<!-- OPENING HOOK -->[\s\S]{0,1500}?<\/td>\s*<\/tr>/i,
      bottom: /<!-- OPENING HOOK -->[\s\S]{0,1500}?<\/td>\s*<\/tr>\s*<tr>\s*<td[^>]*style="[^"]*background/i
    },
    middle: {
      top: /📖 From the Blog[\s\S]{0,1000}?<\/td>\s*<\/tr>\s*<tr>\s*<td/i,
      bottom: /📖 From the Blog[\s\S]{0,1000}?<\/td>\s*<\/tr>\s*<tr>\s*<td[^>]*style="[^"]*background.*?C75B39/i
    },
    bottom: {
      top: /cta[\s\S]{0,500}?<\/td>\s*<\/tr>/i,
      bottom: null
    }
  };

  for (const ad of ads) {
    const adHtml = `
          <tr>
            <td style="padding: 20px 30px; background-color: #F9FAFB; text-align: center;">
              <div style="max-width: 600px; margin: 0 auto; border: 1px dashed #d1d5db; border-radius: 8px; padding: 15px;">
                <p style="font-size: 10px; color: #9ca3af; margin: 0 0 10px 0; text-transform: uppercase;">Sponsored</p>
                ${wrapAdWithTracking(ad.html, ad.ad_id)}
              </div>
            </td>
          </tr>
        `;

    const markers = sectionMarkers[ad.placement];
    if (!markers) continue;

    const insertionPoint = findInsertionPoint(result, ad.placement, markers);
    
    if (insertionPoint) {
      result = result.slice(0, insertionPoint) + adHtml + result.slice(insertionPoint);
    }
  }

  return result;
}

function findInsertionPoint(html: string, placement: string, markers: { top: RegExp; bottom: RegExp | null }): number | null {
  if (placement === 'top') {
    const match = html.match(/<!-- OPENING HOOK -->[\s\S]{0,2000}?<\/td>\s*<\/tr>/i);
    if (match && match.index !== undefined) {
      return match.index + match[0].length;
    }
  }

  if (placement === 'middle') {
    // Primary marker sits at a clean <tr>-boundary between Card 2 ("What's On")
    // and Card 3 ("Expat Toolkit") — the structural middle of the newsletter.
    // Fallbacks cover legacy templates and any edition where the AI drops the
    // marker. They still target true <tr>-boundaries to keep HTML well-formed.
    const middleMarkers = [
      '<!-- AD_PLACEMENT_MIDDLE -->',
      '<!-- CARD 3: EXPAT TOOLKIT -->',
      '<!-- CARD 4: GO DEEPER -->',
      '<!-- WEEKEND ESCAPE -->',
      '<!-- ASK AN EXPAT -->',
    ];
    for (const marker of middleMarkers) {
      const idx = html.indexOf(marker);
      if (idx !== -1) {
        return idx + marker.length;
      }
    }
  }

  if (placement === 'bottom') {
    const ctaMatch = html.match(/Discover More of San Luis/i);
    if (ctaMatch && ctaMatch.index !== undefined) {
      const afterCta = html.slice(ctaMatch.index);
      const closingMatch = afterCta.match(/<\/td>\s*<\/tr>\s*<\/table>/i);
      if (closingMatch && closingMatch.index !== undefined) {
        return ctaMatch.index + closingMatch.index + closingMatch[0].length;
      }
    }
    const lastTable = html.lastIndexOf('</table>');
    if (lastTable !== -1) {
      return lastTable;
    }
  }

  return null;
}

function wrapAdWithTracking(html: string, adId: string): string {
  // Tracking URL must be absolute — email clients can't resolve relative paths,
  // so a relative href would render as a broken link in the delivered newsletter.
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sanluisway.com').replace(/\/$/, '');
  const trackingUrl = `${siteUrl}/api/newsletter/ad-click?ad_id=${encodeURIComponent(adId)}`;
  const regex = /<a\s+([^>]*?)href=["']([^"']+)["']([^>]*)>/gi;

  return html.replace(regex, (match, before, href, after) => {
    if (href.startsWith('#')) {
      return match;
    }
    const absoluteHref = href.startsWith('/') ? `${siteUrl}${href}` : href;
    const trackingHref = `${trackingUrl}&original_url=${encodeURIComponent(absoluteHref)}`;
    return `<a ${before}href="${trackingHref}"${after}>`;
  });
}

export async function fetchAdsForPlacement(
  placement: 'top' | 'middle' | 'bottom'
): Promise<AdPlacementData[]> {
  try {
    const supabase = getSupabaseClient();
    const today = new Date().toISOString().split('T')[0];

    const { data, error } = await supabase
      .from('sponsor_ads')
      .select('id, ad_type, html_content, image_url, image_alt, link_url, link_target, width, height')
      .eq('active', true)
      .eq('placement', placement)
      .or(`start_date.is.null,start_date.lte.${today}`)
      .or(`end_date.is.null,end_date.gte.${today}`)
      .order('priority', { ascending: false })
      .limit(1);

    if (error || !data || data.length === 0) {
      return [];
    }

    const ad = data[0];
    let adHtml = '';

    if (ad.ad_type === 'html' && ad.html_content) {
      adHtml = ad.html_content as string;
    } else if (ad.ad_type === 'image' && ad.image_url) {
      const imgTag = `<img src="${ad.image_url}" alt="${ad.image_alt || 'Advertisement'}" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" />`;
      adHtml = ad.link_url
        ? `<a href="${ad.link_url}" target="_blank" rel="noopener noreferrer">${imgTag}</a>`
        : imgTag;
    }

    if (!adHtml) {
      return [];
    }

    return [{
      ad_id: ad.id as string,
      placement,
      html: adHtml
    }];
  } catch (error) {
    console.error(`Failed to fetch ads for placement ${placement}:`, error);
    return [];
  }
}
