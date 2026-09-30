import { safeRedirectPath } from './safe-redirect';

describe('safeRedirectPath', () => {
  it('keeps same-site paths', () => {
    expect(safeRedirectPath('/business/dashboard')).toBe('/business/dashboard');
  });

  it.each(['//evil.com', '/\\evil.com', 'https://evil.com', 'business'])('rejects %s', (value) => {
    expect(safeRedirectPath(value)).toBeUndefined();
  });

  it('ignores missing or repeated query values', () => {
    expect(safeRedirectPath(undefined)).toBeUndefined();
    expect(safeRedirectPath(['/a', '/b'])).toBeUndefined();
  });
});
