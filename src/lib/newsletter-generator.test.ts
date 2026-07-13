import {
  NEWSLETTER_TEMPLATE,
  CLOSING_AND_FOOTER_HTML,
  getCurrentNewsletterDates,
  extractContentDigest,
  generateSubjectAndPreview,
  addUtmTracking,
} from './newsletter-generator';
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

describe('extractContentDigest', () => {
  const sampleHtml = `
    <!-- OPENING HOOK -->
    <tr><td style="padding: 30px;"><p style="font-size:16px;">¡Hola potosinos! The FENAPO lineup just dropped and the city is buzzing.</p></td></tr>
    <div>
      <h3 style="color:#C75B39;">📰 Top News</h3>
      <div><h4>New bike lane opens on Av. Carranza</h4><p>Details...</p></div>
      <div><h4>Interapas announces water cuts in zona norte</h4><p>Details...</p></div>
    </div>
    <div><h3>⚡ Quick Hits</h3></div>
    <div>
      <h3>🌟 This Week's Top Picks</h3>
      <div><h4>Café Cortao grand opening</h4><p>...</p></div>
      <a>See All Events</a>
    </div>
  `;

  it('extracts the opening hook, top news headlines, and top event', () => {
    const digest = extractContentDigest(sampleHtml);
    expect(digest).toContain('OPENING: ¡Hola potosinos!');
    expect(digest).toContain('New bike lane opens on Av. Carranza');
    expect(digest).toContain('Interapas announces water cuts');
    expect(digest).toContain('Café Cortao grand opening');
  });

  it('returns an empty string when there is no extractable content', () => {
    expect(extractContentDigest('<div>nothing useful here</div>')).toBe('');
  });
});

describe('generateSubjectAndPreview', () => {
  it('falls back to generic subject/preview when the HTML has no content signals', async () => {
    const result = await generateSubjectAndPreview('<div>empty</div>', 'July 13 - 20, 2026');
    expect(result.subject).toBe('San Luis Way Weekly | July 13 - 20, 2026');
    expect(result.previewText).toBe('Your weekly guide to San Luis Potosí for July 13 - 20, 2026');
  });
});

describe('addUtmTracking', () => {
  it('tags a sanluisway.com link with the section slug via utm_content only', () => {
    const html = `<!-- CARD 2: WHAT'S ON --><a href="https://www.sanluisway.com/events">See All Events</a>`;
    const out = addUtmTracking(html);
    expect(out).toContain('utm_content=whats-on');
    // Beehiiv supplies these on send — we must NOT add them (avoids dup keys).
    expect(out).not.toContain('utm_source=');
    expect(out).not.toContain('utm_medium=');
    expect(out).not.toContain('utm_campaign=');
  });

  it('attributes links to the correct section by document position', () => {
    const html = `
      <!-- CARD 1: THIS WEEK AT A GLANCE --><a href="https://www.sanluisway.com/events">a</a>
      <!-- CARD 4: GO DEEPER --><a href="https://www.sanluisway.com/blog/x">b</a>
    `;
    const out = addUtmTracking(html);
    expect(out).toMatch(/sanluisway\.com\/events\?[^"']*utm_content=this-week-glance/);
    expect(out).toMatch(/sanluisway\.com\/blog\/x\?[^"']*utm_content=go-deeper/);
  });

  it('preserves existing query params', () => {
    const html = `<!-- CARD 4: GO DEEPER --><a href="https://www.sanluisway.com/blog?category=food">food</a>`;
    const out = addUtmTracking(html);
    expect(out).toContain('category=food');
    expect(out).toContain('utm_content=go-deeper');
  });

  it('leaves external links and Beehiiv placeholders untouched', () => {
    const html = `<a href="https://elsoldesanluis.com.mx/nota">news</a><a href="[UNSUBSCRIBE_URL]">unsub</a>`;
    const out = addUtmTracking(html);
    expect(out).toBe(html);
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

