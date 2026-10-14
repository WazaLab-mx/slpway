import { readFileSync, existsSync } from 'fs';
import path from 'path';

const root = path.join(__dirname, '../..');
const toml = readFileSync(path.join(root, 'netlify.toml'), 'utf8');

// Parse each [[redirects]] block into a key/value map.
const redirects = toml
  .split('[[redirects]]')
  .slice(1)
  .map((block) =>
    Object.fromEntries(
      [...block.matchAll(/^\s*(\w+)\s*=\s*"?([^"\r\n]*?)"?\s*$/gm)].map(([, k, v]) => [k, v])
    )
  );

describe('Instagram bio short link', () => {
  const rule = redirects.find((r) => r.from === '/carrera');

  it('temporarily redirects /carrera to a tagged race guide', () => {
    expect(rule).toBeDefined();
    expect(rule!.status).toBe('302');
    const url = new URL(rule!.to, 'https://www.sanluisway.com');
    expect(url.searchParams.get('utm_source')).toBe('instagram');
    expect(url.searchParams.get('utm_medium')).toBe('social');
    expect(url.searchParams.get('utm_campaign')).toBeTruthy();
  });

  it('points at a guide page that exists', () => {
    const { pathname } = new URL(rule!.to, 'https://www.sanluisway.com');
    const page = pathname.replace(/^\/es/, '');
    expect(existsSync(path.join(root, 'src/pages', `${page}.tsx`))).toBe(true);
  });
});
