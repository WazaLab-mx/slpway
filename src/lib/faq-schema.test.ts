import { extractFaqPairs, buildFaqSchema } from './faq-schema';

describe('extractFaqPairs', () => {
  it('parses <details><summary> FAQ markup', () => {
    const html = `<h2>FAQ</h2><div class="space-y-4">
      <details class="x"><summary class="y">Is it safe?<span>+</span></summary><p class="z">Yes, with normal precautions &amp; caution.</p></details>
      <details><summary>How much is it?</summary><p>Around $700&ndash;$5,500 MXN.</p></details>
    </div>`;
    const pairs = extractFaqPairs(html);
    expect(pairs).toHaveLength(2);
    expect(pairs[0]).toEqual({ question: 'Is it safe?', answer: 'Yes, with normal precautions & caution.' });
    expect(pairs[1].answer).toContain('$700–$5,500 MXN');
  });

  it('parses <h4>Q?</h4><p>A</p> FAQ markup', () => {
    const html = `<h2 class="a">Frequently Asked Questions</h2><div class="space-y-6">
      <div class="card"><h4 class="t">Is the procession free to attend?</h4><p class="p">You can watch for free from many points.</p></div>
      <div class="card"><h4>Is it suitable for children?</h4><p>Yes, families attend.</p></div>
    </div>`;
    const pairs = extractFaqPairs(html);
    expect(pairs).toHaveLength(2);
    expect(pairs[0].question).toBe('Is the procession free to attend?');
  });

  it('parses <h3>Q?</h3><p>A</p> FAQ markup', () => {
    const html = `<h2>Frequently Asked Questions</h2>
      <div class="card"><h3 class="t">Is SLP good for brunch?</h3><p>Yes, widely considered one of the best.</p></div>
      <div class="card"><h3>Where do locals go?</h3><p>Centro and Lomas.</p></div>`;
    const pairs = extractFaqPairs(html);
    expect(pairs).toHaveLength(2);
    expect(pairs[0].question).toBe('Is SLP good for brunch?');
  });

  it('ignores non-question h3/h4 headings (body content)', () => {
    const html = `<h4>Getting There</h4><p>Take the highway.</p><h3>Overview</h3><p>Intro.</p>`;
    expect(extractFaqPairs(html)).toHaveLength(0);
  });

  it('returns empty for content without FAQ', () => {
    expect(extractFaqPairs('<p>Just an intro paragraph.</p>')).toHaveLength(0);
    expect(extractFaqPairs('')).toHaveLength(0);
  });
});

describe('buildFaqSchema', () => {
  it('builds FAQPage with >=2 pairs', () => {
    const html = `<details><summary>Q1?</summary><p>A1</p></details><details><summary>Q2?</summary><p>A2</p></details>`;
    const schema = buildFaqSchema(html) as any;
    expect(schema['@type']).toBe('FAQPage');
    expect(schema.mainEntity).toHaveLength(2);
    expect(schema.mainEntity[0]).toEqual({
      '@type': 'Question',
      name: 'Q1?',
      acceptedAnswer: { '@type': 'Answer', text: 'A1' },
    });
  });

  it('returns null for fewer than 2 pairs', () => {
    expect(buildFaqSchema('<details><summary>Only?</summary><p>One</p></details>')).toBeNull();
    expect(buildFaqSchema('<p>none</p>')).toBeNull();
  });
});
