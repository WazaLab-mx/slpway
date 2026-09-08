/**
 * @jest-environment jsdom
 * @jest-environment-options {"customExportConditions":["node","node-addons"]}
 */
import { readFileSync } from 'fs';
import { join } from 'path';
import { injectAdsIntoHtml } from './newsletter-ads';
import { renderNewsletterDesign } from './newsletter-design';

const edition = readFileSync(join(process.cwd(), '__tests__/fixtures/newsletter-edition-2026-09-07.html'), 'utf8');
const ad = '<table role="presentation" width="100%"><tr><td style="background:#00007A;padding:20px 16px"><p style="color:#FFFFFF">Advertise with us</p><a href="https://sanluiswayhub.com/" style="background:#FFCB05;color:#00007A;padding:12px 16px">Explore newsletter ads</a></td></tr></table>';

describe('newsletter ad layout', () => {
  it('renders the reusable house ad with a readable heading and working Hub destination', () => {
    const snippet = readFileSync(join(process.cwd(), 'templates/advertise-with-us.html'), 'utf8');
    const host = document.createElement('div');
    host.innerHTML = renderNewsletterDesign(injectAdsIntoHtml(edition, [{ ad_id: 'house-ad', placement: 'top', html: snippet }]));
    const banner = host.querySelector('[data-newsletter-ad]')!;
    expect(banner.querySelector('h2')?.style.color).toBe('rgb(255, 255, 255)');
    expect(banner.querySelector('h2')?.style.borderTopWidth).toBe('0px');
    const link = banner.querySelector('a')!;
    expect(link.style.textDecoration).toBe('none');
    expect(new URL(link.href).searchParams.get('original_url')).toBe('https://sanluiswayhub.com/');
  });

  it('removes accumulated legacy sponsor gutters from the saved edition', () => {
    const host = document.createElement('div');
    host.innerHTML = renderNewsletterDesign(edition);
    const label = Array.from(host.querySelectorAll('p')).find(p => p.textContent === 'Sponsored')!;
    const frame = label.parentElement!;
    const outer = frame.parentElement!;
    expect(parseFloat(frame.style.paddingLeft) || 0).toBe(0);
    expect(parseFloat(outer.style.paddingLeft) || 0).toBe(0);
  });

  it.each(['top', 'middle', 'bottom'] as const)('inserts %s ads into the real semantic edition without orphan rows', placement => {
    const result = injectAdsIntoHtml(edition, [{ ad_id: 'house-ad', placement, html: ad }]);
    expect(result).toContain('Explore newsletter ads');
    const host = document.createElement('div');
    host.innerHTML = result;
    expect(host.querySelector('a[href*="ad_id=house-ad"]')?.textContent).toBe('Explore newsletter ads');
    expect(host.querySelector<HTMLTableCellElement>('[data-newsletter-ad] td')?.style.padding).toBe('0px');
    expect(result).toContain('<table data-newsletter-ad');
  });

  it('retains ad text contrast and button styling through the shared renderer', () => {
    const host = document.createElement('div');
    host.innerHTML = renderNewsletterDesign(injectAdsIntoHtml(edition, [{ ad_id: 'house-ad', placement: 'middle', html: ad }]));
    const link = host.querySelector<HTMLAnchorElement>('a[href*="ad-click"]')!;
    expect(link.style.color).toBe('rgb(0, 0, 122)');
    expect(link.style.background).toBe('rgb(255, 203, 5)');
    expect(link.parentElement?.querySelector('p')?.style.color).toBe('rgb(255, 255, 255)');
    expect(new URL(link.href).searchParams.get('original_url')).toBe('https://sanluiswayhub.com/');
  });

  it('keeps row insertion valid for legacy table editions', () => {
    const result = injectAdsIntoHtml('<table><tr><td>Opening</td></tr><!-- AD_PLACEMENT_MIDDLE --><tr><td>Closing</td></tr></table>', [{ ad_id: 'house-ad', placement: 'middle', html: ad }]);
    const host = document.createElement('div');
    host.innerHTML = result;
    expect(host.querySelector('table')?.rows).toHaveLength(3);
    expect(host.querySelector('table')?.rows[1].querySelector('a')).not.toBeNull();
  });
});
