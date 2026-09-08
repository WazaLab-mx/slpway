import { getSupabaseClient } from './newsletter-supabase';

export interface AdPlacementData {
  ad_id: string;
  placement: 'top' | 'middle' | 'bottom';
  html: string;
}

export function injectAdsIntoHtml(html: string, ads: AdPlacementData[]): string {
  let result = html;

  for (const ad of ads) {
    const insertionPoint = findInsertionPoint(result, ad.placement);
    if (insertionPoint === null) continue;
    const adHtml = `<table data-newsletter-ad="sponsor" role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;border-collapse:collapse;table-layout:fixed;margin:20px 0">
<tr><td style="padding:0;text-align:left">
<p style="font-family:Arial,Helvetica,sans-serif;font-size:10px;line-height:1.5;color:#666666;margin:0 0 8px;text-transform:uppercase;letter-spacing:1px">Sponsored</p>
${wrapAdWithTracking(ad.html, ad.ad_id)}
</td></tr></table>`;
    const ancestors: string[] = [];
    result.slice(0, insertionPoint).replace(/<(\/?)(table|tbody|thead|tfoot|tr|td|th)\b[^>]*>/gi, (tag, closing, name) => {
      if (closing) ancestors.pop();
      else ancestors.push(name.toLowerCase());
      return tag;
    });
    const parent = ancestors[ancestors.length - 1];
    const insertion = ['table', 'tbody', 'thead', 'tfoot'].includes(parent)
      ? `<tr><td style="padding:0">${adHtml}</td></tr>` : adHtml;
    result = result.slice(0, insertionPoint) + insertion + result.slice(insertionPoint);
  }

  return result;
}

function findInsertionPoint(html: string, placement: string): number | null {
  const marker = `<!-- AD_PLACEMENT_${placement.toUpperCase()} -->`;
  const markerIndex = html.indexOf(marker);
  if (markerIndex !== -1) return markerIndex + marker.length;

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
    const closingIndex = html.search(/<!-- CLOSING(?:_FOOTER_PLACEHOLDER)? -->/i);
    if (closingIndex !== -1) return closingIndex;
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
