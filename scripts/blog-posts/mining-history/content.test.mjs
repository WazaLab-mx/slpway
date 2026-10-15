// Run: node --test scripts/blog-posts/mining-history/content.test.mjs
// Guards the facts corrected on 2026-10-15 in every locale of the rendered post.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'fs';
import { render } from './post.mjs';
import en from './content.en.mjs';

const dir = new URL('.', import.meta.url);
const copy = { en };
for (const locale of ['es', 'de', 'ja']) copy[locale] = JSON.parse(fs.readFileSync(new URL(`content.${locale}.json`, dir), 'utf8'));

for (const [locale, t] of Object.entries(copy)) {
  test(`${locale}: corrected facts`, () => {
    const body = render(t).replace(t.ui.correctionNote, '');
    assert.match(body, /18\s?km/);
    assert.doesNotMatch(body, /\b20\s?(km|Kilometer|kilómetros|kilometers)|20\s?キロ/);
    assert.doesNotMatch(body, /15\s?%|213|1[.,]93|40[.,]000|poc-to-si/);
    assert.match(body, /1592/);
    assert.match(body, /whc\.unesco\.org\/en\/list\/1351/);
  });

  test(`${locale}: every toc link has a matching section`, () => {
    const body = render(t);
    for (const [id] of t.toc) assert.match(body, new RegExp(`id="${id}"`));
  });
}
