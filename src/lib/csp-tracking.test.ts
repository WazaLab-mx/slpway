// Checks the production CSP against the tracking endpoints the browser actually
// hit (and blocked) on 2026-10-19: GA4 collect on the bare analytics.google.com
// host and the Meta Pixel form fallback to www.facebook.com/tr/.
import nextConfig from '../../next.config.js';

async function getDirectives(): Promise<Record<string, string[]>> {
  const rules = await nextConfig.headers();
  const header = rules
    .flatMap((r: { headers: Array<{ key: string; value: string }> }) => r.headers)
    .find((h: { key: string }) => h.key === 'Content-Security-Policy');
  return Object.fromEntries(
    header.value.split(';').map((d: string) => {
      const [name, ...sources] = d.trim().split(/\s+/);
      return [name, sources];
    })
  );
}

// Minimal CSP host-source matching: exact origin or "*." wildcard, which per
// spec does NOT match the bare parent domain.
function allows(sources: string[], url: string): boolean {
  const { protocol, host } = new URL(url);
  return sources.some((src) => {
    if (src === "'self'") return false;
    const m = src.match(/^(https?:)\/\/(\*\.)?([^/]+)/);
    if (!m || m[1] !== protocol) return false;
    return m[2] ? host.endsWith(`.${m[3]}`) : host === m[3];
  });
}

describe('CSP allows analytics and pixel endpoints', () => {
  test.each([
    'https://analytics.google.com/g/collect?v=2&tid=G-5R48THR70E',
    'https://region1.google-analytics.com/g/collect?v=2',
    'https://www.google-analytics.com/g/collect?v=2',
    'https://www.facebook.com/tr/',
  ])('connect-src allows %s', async (url) => {
    expect(allows((await getDirectives())['connect-src'], url)).toBe(true);
  });

  it('form-action allows the Meta Pixel fallback', async () => {
    expect(allows((await getDirectives())['form-action'], 'https://www.facebook.com/tr/')).toBe(true);
  });

  it('keeps form-action otherwise locked to self', async () => {
    const formAction = (await getDirectives())['form-action'];
    expect(formAction).toContain("'self'");
    expect(allows(formAction, 'https://evil.example.com/steal')).toBe(false);
  });
});
