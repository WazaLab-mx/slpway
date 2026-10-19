import { extractRecentImageUrls, pickContentMatchedBlogImage, buildHeroImagePrompt } from './newsletter-hero';

// Real recent published posts (blog_posts, Oct 2026).
const POSTS = [
  { slug: 'best-hikes-san-luis-potosi', title_en: 'Best Hikes in San Luis Potosí', category: 'outdoors', image_url: '/images/blog/best-hikes-slp/cerro-de-san-pedro-hero.jpg' },
  { slug: 'xantolo-dia-de-muertos-huasteca-potosina', title_en: 'Xantolo: Day of the Dead in the Huasteca', category: 'culture', image_url: '/images/events/xantolo-image-3.jpg' },
  { slug: 'fiestas-patrias-san-luis-potosi', title_en: 'Fiestas Patrias in San Luis Potosí', category: 'culture', image_url: 'https://omxporaecrqsqhzjzvnx.supabase.co/storage/v1/object/public/blog-images/posts/fiestas-patrias-san-luis-potosi-2026-hero.jpg' },
  { slug: 'best-bars-nightlife-mezcal-san-luis-potosi-2026', title_en: 'Best Bars, Nightlife & Mezcal', category: 'nightlife', image_url: 'https://omxporaecrqsqhzjzvnx.supabase.co/storage/v1/object/public/blog-images/posts/san-luis-potosi-nightlife-hero.jpg?v=20260713' },
];

// Real hero markup from the 2026-10-19 and 2026-10-12 editions.
const RECENT_HTML = [
  '<p><img src="https://omxporaecrqsqhzjzvnx.supabase.co/storage/v1/object/public/blog-images/posts/fiestas-patrias-san-luis-potosi-2026-hero.jpg" alt="x" /></p><img src="https://www.sanluisway.com/images/events/xantolo-image-3.jpg" alt="y" />',
  '<p><img src="https://www.sanluisway.com/images/events/xantolo-image-3.jpg" alt="x" /></p>',
];

describe('extractRecentImageUrls', () => {
  it('collects every image used in recent editions', () => {
    const used = extractRecentImageUrls(RECENT_HTML);
    expect(used.size).toBe(2);
    expect(used.has('https://www.sanluisway.com/images/events/xantolo-image-3.jpg')).toBe(true);
  });
});

describe('pickContentMatchedBlogImage', () => {
  it('picks the post that matches the edition content', () => {
    const digest = 'OPENING: Mezcal bars and nightlife this weekend\nEVENTS: Oktobeerfest 2026';
    expect(pickContentMatchedBlogImage(digest, POSTS, new Set())?.image_url).toContain('nightlife-hero');
  });

  it('never reuses an image from recent editions, even if it matches best', () => {
    const used = extractRecentImageUrls(RECENT_HTML);
    const digest = 'NEWS: Xantolo and Day of the Dead altars | Fiestas Patrias recap';
    const pick = pickContentMatchedBlogImage(digest, POSTS, used);
    expect(pick?.image_url).not.toContain('fiestas-patrias');
    expect(pick?.image_url).not.toContain('xantolo');
  });

  it('returns null when every image was used recently', () => {
    const used = new Set(POSTS.map((p) => p.image_url));
    expect(pickContentMatchedBlogImage('anything', POSTS, used)).toBeNull();
  });
});

describe('buildHeroImagePrompt', () => {
  it('embeds the scene and forbids text in the image', () => {
    const prompt = buildHeroImagePrompt('Vintage race cars speeding past colonial facades.');
    expect(prompt).toContain('Vintage race cars');
    expect(prompt).toMatch(/Do NOT include any text/);
  });
});
