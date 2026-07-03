import { NEWSLETTER_TEMPLATE, CLOSING_AND_FOOTER_HTML, getCurrentNewsletterDates } from './newsletter-generator';
import { format, addDays } from 'date-fns';

describe('newsletter template structure', () => {
  it('exposes the core content placeholders the generator fills', () => {
    // The template is intentionally image-free (system prompt forbids <img>
    // tags in AI content), so it exposes text/content slots rather than
    // hero/highlight image placeholders.
    expect(NEWSLETTER_TEMPLATE).toContain('[WEEK_DATE_RANGE]');
    expect(NEWSLETTER_TEMPLATE).toContain('[OPENING_HOOK_TEXT]');
    expect(NEWSLETTER_TEMPLATE).toContain('[WEATHER_SUMMARY]');
    expect(NEWSLETTER_TEMPLATE).toContain('[NEWS_HEADLINE_1]');
    expect(NEWSLETTER_TEMPLATE).toContain('[EVENT_NAME_1]');
    expect(NEWSLETTER_TEMPLATE).toContain('[SPOT_NAME]');
    expect(NEWSLETTER_TEMPLATE).toContain('[DESTINATION_NAME]');
    expect(NEWSLETTER_TEMPLATE).toContain('[BLOG_POST_TITLE]');
  });

  it('has a placeholder for the closing footer that gets injected programmatically', () => {
    expect(CLOSING_AND_FOOTER_HTML).toContain('Hasta la próxima');
    expect(CLOSING_AND_FOOTER_HTML).toContain('🌐 Website');
    // Footer is now injected programmatically via injectFooterIntoNewsletter()
    expect(NEWSLETTER_TEMPLATE).toContain('<!-- CLOSING_FOOTER_PLACEHOLDER -->');
  });

  it('includes the new CTA placeholders', () => {
    ['[CTA_TITLE]', '[CTA_BODY]', '[CTA_BUTTON_LABEL]', '[CTA_BUTTON_LINK]'].forEach((placeholder) => {
      expect(NEWSLETTER_TEMPLATE).toContain(placeholder);
    });
  });
});

describe('getCurrentNewsletterDates helper', () => {
  it('returns a date range based on today', () => {
    const referenceDate = new Date(Date.UTC(2025, 11, 2)); // December 2, 2025 UTC
    const result = getCurrentNewsletterDates(referenceDate);

    expect(result.currentDate).toBe(format(referenceDate, 'MMMM d, yyyy'));
    // The helper returns a rolling window: today through today + 7 days.
    expect(result.weekStartDate).toEqual(referenceDate);
    expect(result.weekEndDate).toEqual(addDays(referenceDate, 7));
    expect(result.dateRangeStr).toBe(
      `${format(result.weekStartDate, 'MMMM d')} - ${format(result.weekEndDate, 'MMMM d, yyyy')}`
    );
    const diffDays = Math.round(
      (result.weekEndDate.getTime() - result.weekStartDate.getTime()) / (1000 * 60 * 60 * 24)
    );
    expect(diffDays).toBe(7);
  });
});

