import fs from 'fs';
import path from 'path';
import { getEventImage, EVENT_CATEGORY_FALLBACK_IMAGES, DEFAULT_EVENT_IMAGE } from './event-image';

describe('getEventImage', () => {
  it('keeps the event poster when it has one', () => {
    const url = 'https://omxporaecrqsqhzjzvnx.supabase.co/storage/v1/object/public/blog-images/events/alan-parsons-live-project.webp';
    expect(getEventImage({ image_url: url, category: 'music' })).toBe(url);
  });

  it('falls back to the category image when the poster is missing', () => {
    expect(getEventImage({ image_url: null, category: 'music' })).toBe('/images/event-categories/music.webp');
  });

  it('falls back to the default image for unknown categories', () => {
    expect(getEventImage({ image_url: null, category: 'other' })).toBe(DEFAULT_EVENT_IMAGE);
  });

  it('points every fallback at a file that exists in /public', () => {
    for (const src of [...Object.values(EVENT_CATEGORY_FALLBACK_IMAGES), DEFAULT_EVENT_IMAGE]) {
      expect(fs.existsSync(path.join(process.cwd(), 'public', src))).toBe(true);
    }
  });
});
