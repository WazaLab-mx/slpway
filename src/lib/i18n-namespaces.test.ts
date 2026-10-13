import { readdirSync } from 'fs';
import path from 'path';

// next-i18next only preloads namespaces listed in `ns` during `next build`; a
// locale file missing from that list renders raw keys and breaks prerendering.
const config = require('../../next-i18next.config.js');

it('registers every locale namespace file in next-i18next config', () => {
  const files = readdirSync(path.join(__dirname, '../../public/locales/en'))
    .filter((f) => f.endsWith('.json'))
    .map((f) => f.replace(/\.json$/, ''));
  expect(files.filter((ns) => !config.ns.includes(ns))).toEqual([]);
});
