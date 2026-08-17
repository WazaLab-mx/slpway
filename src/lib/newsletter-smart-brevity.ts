/**
 * Smart Brevity (Axios-style) writing spec for San Luis Way Weekly.
 *
 * The newsletter is written in English (with natural Spanish sprinkled in),
 * so the axioms use Axios' canonical English forms. The generated draft is
 * pasted manually into the Beehiiv post editor, so structure lives in simple
 * semantic HTML (headings, bold, bullets) — never in CSS.
 */

// Bold axiom labels that structure every block. Order matters: the audit
// checks the required ones; the rest are an approved vocabulary.
export const REQUIRED_AXIOMS = ['Why it matters:'] as const;

export const AXIOM_VOCABULARY = [
  'Why it matters:',
  'The big picture:',
  'By the numbers:',
  'What’s next:',
  'What to do:',
  'Zoom in:',
  'Between the lines:',
  'The details:',
  'Go deeper:',
] as const;

export const MAX_HEADLINE_WORDS = 6;
export const MAX_LEDE_WORDS = 30;

// Prompt block injected into every generation/regeneration prompt. This is the
// single source of truth for the writing style — sections only add data rules.
export const SMART_BREVITY_RULES = `
═══════════════════════════════════════════════════════════
SMART BREVITY RULES (non-negotiable — they override any older style habit)
═══════════════════════════════════════════════════════════

We write in Smart Brevity, the Axios format. Readers scan; we respect their time.

1. MUSCULAR HEADLINES: max ${MAX_HEADLINE_WORDS} words, specific, no clickbait.
   Good: "Carranza gets a 3km bike lane". Bad: "Exciting infrastructure news!"
2. ONE-SENTENCE LEDES: the first sentence of any story IS the news — what's
   new and why the reader cares. Max ${MAX_LEDE_WORDS} words. Never warm up to the point.
3. BOLD AXIOMS structure every block. Use ONLY these labels, wrapped in
   <strong>: ${AXIOM_VOCABULARY.join(' | ')}
   Every top story MUST include "<strong>Why it matters:</strong>" followed by
   one sentence (max 20 words).
4. BULLETS, NOT PARAGRAPHS: one idea per bullet, one line each, no chained
   subordinate clauses. If a thought needs a second line, it is two bullets.
5. BRUTAL WORD ECONOMY: no decorative adjectives, no preambles, no
   "we're excited to share". Strong verbs. Cut every word that does no work.
   Each section must be readable in under 30 seconds.
6. HUMAN, NOT ROBOTIC: brevity ≠ coldness. Keep the warm local voice
   ("our city", natural Spanish like "the centro", "la Fenapo") — just short.
7. Axios numbering: after "1 big thing", subsequent stories are numbered
   ("2.", "3."). The newsletter closes with "1 fun thing".
`;

const STRIP_TAGS = /<[^>]+>/g;

function wordCount(text: string): number {
  const words = text.replace(STRIP_TAGS, ' ').replace(/\s+/g, ' ').trim();
  return words ? words.split(' ').length : 0;
}

export interface SmartBrevityAudit {
  ok: boolean;
  warnings: string[];
}

/**
 * Post-generation format audit. Non-fatal by design: warnings are logged so
 * the admin can eyeball drift, and tests pin the rules. Checks the signals
 * that make or break the format — axiom presence, lede length, bullets.
 */
export function auditSmartBrevity(html: string): SmartBrevityAudit {
  const warnings: string[] = [];

  const whyItMatters = html.match(/<strong>\s*Why it matters:\s*<\/strong>/gi) || [];
  if (whyItMatters.length < 3) {
    warnings.push(`Expected ≥3 "Why it matters:" axioms in bold, found ${whyItMatters.length}`);
  }

  if (!/1 big thing/i.test(html)) {
    warnings.push('Missing the "1 big thing" lead story kicker');
  }
  if (!/1 fun thing/i.test(html)) {
    warnings.push('Missing the "1 fun thing" closer');
  }

  // News ledes: the paragraph right after each news <h4> headline.
  const ledes = Array.from(
    html.matchAll(/<h4[^>]*>[^<]+<\/h4>\s*<p[^>]*>([\s\S]*?)<\/p>/gi)
  ).map((m) => m[1]);
  for (const lede of ledes) {
    // Only the first sentence is the lede; bullets carry the rest.
    const firstSentence = lede.replace(STRIP_TAGS, ' ').split(/(?<=[.!?])\s/)[0] || '';
    const count = wordCount(firstSentence);
    if (count > MAX_LEDE_WORDS + 10) {
      warnings.push(`Lede exceeds ${MAX_LEDE_WORDS} words (${count}): "${firstSentence.slice(0, 60)}..."`);
    }
  }

  if ((html.match(/<ul[^>]*>/gi) || []).length < 3) {
    warnings.push('Fewer than 3 bullet lists — Smart Brevity leans on bullets, not paragraphs');
  }

  return { ok: warnings.length === 0, warnings };
}
