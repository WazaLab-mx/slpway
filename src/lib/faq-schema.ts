/**
 * Extracts FAQ question/answer pairs from post HTML and builds schema.org
 * FAQPage JSON-LD. Posts author FAQs in two markups:
 *   1. <details><summary>Q +</summary><p>A</p></details>
 *   2. FAQ section with <h4>Q?</h4><p>A</p>
 * Both are handled. FAQPage structured data drives Q&A rich results and is a
 * strong citation surface for AI assistants (GEO).
 */

export interface FaqPair {
  question: string;
  answer: string;
}

const ENTITIES: Record<string, string> = {
  '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&apos;': "'",
  '&nbsp;': ' ', '&ndash;': '–', '&mdash;': '—', '&hellip;': '…',
  '&rsquo;': '’', '&lsquo;': '‘', '&ldquo;': '“', '&rdquo;': '”',
};

function stripHtml(input: string): string {
  return input
    .replace(/<[^>]+>/g, ' ')
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&[a-z]+;/gi, (m) => ENTITIES[m.toLowerCase()] ?? ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function dedupe(pairs: FaqPair[]): FaqPair[] {
  const seen = new Set<string>();
  return pairs.filter((p) => {
    const key = p.question.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

export function extractFaqPairs(html: string): FaqPair[] {
  if (!html) return [];
  const pairs: FaqPair[] = [];

  // Pattern 1: <details><summary>Q</summary> … <p>A</p></details>
  const detailsRe = /<details\b[^>]*>[\s\S]*?<summary\b[^>]*>([\s\S]*?)<\/summary>([\s\S]*?)<\/details>/gi;
  for (const m of Array.from(html.matchAll(detailsRe))) {
    const question = stripHtml(m[1]).replace(/\s*\+\s*$/, '').trim();
    const pMatch = m[2].match(/<p\b[^>]*>([\s\S]*?)<\/p>/i);
    const answer = stripHtml(pMatch ? pMatch[1] : m[2]);
    if (question && answer) pairs.push({ question, answer });
  }
  if (pairs.length) return dedupe(pairs);

  // Pattern 2: FAQ section with <h3|h4>Q?</h3><p>A</p>. Require the heading to
  // be a question (ends with ? / ？) so body headings never leak in.
  const hpRe = /<h[34]\b[^>]*>([\s\S]*?)<\/h[34]>\s*<p\b[^>]*>([\s\S]*?)<\/p>/gi;
  for (const m of Array.from(html.matchAll(hpRe))) {
    const question = stripHtml(m[1]);
    const answer = stripHtml(m[2]);
    if (/[?？]\s*$/.test(question) && answer) pairs.push({ question, answer });
  }
  return dedupe(pairs);
}

export function buildFaqSchema(html: string): object | null {
  const pairs = extractFaqPairs(html);
  if (pairs.length < 2) return null; // a single Q&A is not a meaningful FAQPage
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: pairs.map((p) => ({
      '@type': 'Question',
      name: p.question,
      acceptedAnswer: { '@type': 'Answer', text: p.answer },
    })),
  };
}
