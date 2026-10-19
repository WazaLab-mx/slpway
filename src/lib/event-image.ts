// Shown when an event has no poster of its own, so no card renders as an empty box.
export const EVENT_CATEGORY_FALLBACK_IMAGES: Record<string, string> = {
  music: '/images/event-categories/music.webp',
  traditional: '/images/event-categories/traditional.jpg',
  cultural: '/images/cultural/teatro-de-la-paz.jpg',
  'arts-culture': '/images/cultural/teatro-de-la-paz.jpg',
  sports: '/images/events/sports-hero.png',
  culinary: '/images/food/street-food-main.jpg',
  'community-social': '/images/calendar/community-fair.jpg',
};

export const DEFAULT_EVENT_IMAGE = '/images/hero-bg.jpg';

export function getEventImage(event: { image_url?: string | null; category?: string | null }): string {
  if (event.image_url) return event.image_url;
  return (event.category && EVENT_CATEGORY_FALLBACK_IMAGES[event.category]) || DEFAULT_EVENT_IMAGE;
}
