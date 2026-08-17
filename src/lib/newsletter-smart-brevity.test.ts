import {
  SMART_BREVITY_RULES,
  AXIOM_VOCABULARY,
  MAX_HEADLINE_WORDS,
  MAX_LEDE_WORDS,
  auditSmartBrevity,
} from './newsletter-smart-brevity';
import { buildNewsletterPrompt, NewsletterPromptContext } from './newsletter-prompt';

const COMPLIANT_HTML = `
  <h2>🔎 1 big thing</h2>
  <h4>Carranza gets 3km bike lane</h4>
  <p>The city opened a protected bike lane from Centro to Lomas, with signals at every crossing.</p>
  <p><strong>Why it matters:</strong> Commuters get a safe car-free route across the city.</p>
  <ul><li>Runs 6 AM to 10 PM.</li><li>Cost: $12M MXN.</li></ul>
  <h4>2. Interapas cuts water Tuesday</h4>
  <p>Zona norte loses water 8 AM-4 PM for valve repairs.</p>
  <p><strong>Why it matters:</strong> Fill your tinaco Monday night.</p>
  <h4>3. New airport route to CDMX</h4>
  <p>Viva adds a daily flight starting Friday.</p>
  <p><strong>Why it matters:</strong> Cheaper same-day trips to the capital.</p>
  <ul><li><strong>Traffic:</strong> Himno Nacional works continue.</li></ul>
  <ul><li><strong>The forecast:</strong> 12-26°C, dry all week.</li></ul>
  <h2>🎁 1 fun thing</h2>
  <h4>The tunnel under Real</h4>
  <p>Real de Catorce is reached through a 2.3 km mining tunnel.</p>
`;

describe('SMART_BREVITY_RULES prompt block', () => {
  it('encodes the core Axios rules: headlines, ledes, axioms, bullets', () => {
    expect(SMART_BREVITY_RULES).toContain(`max ${MAX_HEADLINE_WORDS} words`);
    expect(SMART_BREVITY_RULES).toContain(`Max ${MAX_LEDE_WORDS} words`);
    expect(SMART_BREVITY_RULES).toContain('Why it matters:');
    expect(SMART_BREVITY_RULES).toContain('BULLETS, NOT PARAGRAPHS');
    expect(SMART_BREVITY_RULES).toContain('1 fun thing');
  });

  it('lists every approved axiom', () => {
    AXIOM_VOCABULARY.forEach((axiom) => expect(SMART_BREVITY_RULES).toContain(axiom));
  });
});

describe('auditSmartBrevity', () => {
  it('passes a compliant Smart Brevity edition', () => {
    const audit = auditSmartBrevity(COMPLIANT_HTML);
    expect(audit.warnings).toEqual([]);
    expect(audit.ok).toBe(true);
  });

  it('flags missing axioms and missing big/fun thing kickers', () => {
    const audit = auditSmartBrevity('<h4>Something</h4><p>Text.</p>');
    expect(audit.ok).toBe(false);
    expect(audit.warnings.join(' ')).toMatch(/Why it matters/);
    expect(audit.warnings.join(' ')).toMatch(/1 big thing/);
    expect(audit.warnings.join(' ')).toMatch(/1 fun thing/);
  });

  it('flags a lede that rambles far past the word cap', () => {
    const longLede = Array(45).fill('word').join(' ') + '.';
    const html = COMPLIANT_HTML.replace(
      'The city opened a protected bike lane from Centro to Lomas, with signals at every crossing.',
      longLede
    );
    const audit = auditSmartBrevity(html);
    expect(audit.warnings.join(' ')).toMatch(/Lede exceeds/);
  });
});

describe('buildNewsletterPrompt (Smart Brevity spec)', () => {
  const context: NewsletterPromptContext = {
    dates: { todayFormatted: 'Monday, August 17, 2026', mexicoCityLocalTime: '08/17/2026, 10:00' },
    dateRangeStr: 'August 17 - August 24, 2026',
    currentMonth: 'August',
    currentYear: 2026,
    spanishMonth: 'agosto',
    prevMonthName1: 'July 2026',
    prevMonthName2: 'June 2026',
    prevMonthSpanish1: 'julio',
    prevMonthSpanish2: 'junio',
    weatherDataStr: 'WEATHER DATA',
    exchangeRateBlock: '1 USD = $18.50 MXN',
    usdMxn: { rateStr: '$18.50 MXN' },
    eventsList: '- Sample event',
    blogPostsList: '- "Sample post" - URL: https://www.sanluisway.com/blog/sample',
    usedFactsList: '',
    usedTipsList: '',
    usedPlacesList: '',
    usedSpotsList: '',
    usedEscapesList: '',
    usedQuestionsList: '',
    usedPhrasesList: '',
    usedSpotlightsList: '',
  };

  it('embeds the Smart Brevity rules and the paste-friendly output contract', () => {
    const prompt = buildNewsletterPrompt(context);
    expect(prompt).toContain('SMART BREVITY RULES');
    expect(prompt).toContain('1 BIG THING');
    expect(prompt).toContain('NO inline styles, NO <table>, NO <img>');
    expect(prompt).toContain('Beehiiv');
  });

  it('keeps verified-data guardrails: real FX block, real weather, real blog URLs', () => {
    const prompt = buildNewsletterPrompt(context);
    expect(prompt).toContain('1 USD = $18.50 MXN');
    expect(prompt).toContain('WEATHER DATA');
    expect(prompt).toContain('https://www.sanluisway.com/blog/sample');
    expect(prompt).toContain('Never invent URLs');
  });

  it('keeps the editorial-independence guardrail', () => {
    const prompt = buildNewsletterPrompt(context);
    expect(prompt).toContain('INDEPENDENT publication');
    expect(prompt).toMatch(/never\s+celebrate the governor/i);
  });
});
