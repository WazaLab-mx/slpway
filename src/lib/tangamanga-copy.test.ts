import { readFileSync } from 'node:fs';

it.each([
  ['en', /temporarily closed/i],
  ['es', /cerrado temporalmente/i],
  ['de', /vorübergehend geschlossen/i],
  ['ja', /一時休園/],
])('keeps %s park activities and FAQ consistent with the official zoo closure', (locale, closure) => {
  const copy = JSON.parse(readFileSync(`public/locales/${locale}/common.json`, 'utf8')).tangamanga;
  expect(copy.attractions.cultural1).toMatch(closure as RegExp);
  expect(copy.faq.a1).toMatch(closure as RegExp);
  expect(copy.faq.a2).toMatch(closure as RegExp);
  expect(copy.hoursMon).toContain('05:00');
  expect(copy.hoursTueSun).toContain('22:30');
});
