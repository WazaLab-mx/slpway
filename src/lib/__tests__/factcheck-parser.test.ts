import fs from 'fs';
import path from 'path';
import { parseFactCheck } from '../factcheck-parser';

const DIR = path.join(process.cwd(), 'public', 'factchecks');

function modernReports(): { slug: string; markdown: string }[] {
  return fs
    .readdirSync(DIR)
    .filter((file) => file.endsWith('.md'))
    .map((file) => ({
      slug: file.slice(0, -3),
      markdown: fs.readFileSync(path.join(DIR, file), 'utf8'),
    }))
    .filter(({ markdown }) => markdown.startsWith('# Fact-Check Investigation Report:'));
}

describe('fact-check reports', () => {
  it('parses every modern report into claims the fact-check page can list', () => {
    const files = modernReports();
    expect(files.length).toBeGreaterThan(20);

    for (const { markdown } of files) {
      const report = parseFactCheck(markdown);
      expect(report.title.length).toBeGreaterThan(0);
      expect(report.articleUrl).toMatch(/^https:\/\/www\.sanluisway\.com\//);
      expect(report.verificationDate.length).toBeGreaterThan(0);
      expect(report.reliabilityScoreNumeric).toBeGreaterThan(0);
      expect(report.reliabilityScoreNumeric).toBeLessThanOrEqual(10);
      expect(report.claims.length).toBeGreaterThan(0);
      expect(report.totalClaims).toBeGreaterThan(0);
    }
  });

  it('keeps September 2026 report counts consistent with parsed claims', () => {
    const fresh = modernReports().filter(({ markdown }) =>
      markdown.includes('**Verification Date:** September 21, 2026')
    );

    for (const { slug, markdown } of fresh) {
      const report = parseFactCheck(markdown);
      expect(report.articleUrl).toContain(`/blog/${slug}`);
      expect(report.claims.length).toBe(report.totalClaims);

      const misleading = (markdown.match(/^MISLEADING \| (\d+)$/m) || [])[1];
      const counted =
        report.trueCount +
        report.partiallyTrueCount +
        report.falseCount +
        report.unverifiableCount +
        report.outdatedCount +
        (misleading ? parseInt(misleading, 10) : 0);
      expect(counted).toBe(report.totalClaims);

      for (const claim of report.claims) {
        expect(claim.text.length).toBeGreaterThan(0);
        expect(claim.summary.length).toBeGreaterThan(0);
        expect(['High', 'Medium', 'Low']).toContain(claim.confidence);
        if (claim.verdict !== 'UNVERIFIABLE') {
          expect(claim.sources.length).toBeGreaterThan(0);
        }
      }
    }
  });
});
