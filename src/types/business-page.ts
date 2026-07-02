/**
 * Data shape for premium one-page business sites (/negocios/[slug]).
 * A new client = a new JSON file in src/data/business-pages/ — zero code changes.
 */

export interface BusinessTheme {
  /** Main brand color (CTAs, prices, accents on light backgrounds). */
  primary: string;
  /** Secondary warm accent (tints, decorative rules). */
  accent: string;
  /** Near-black brand dark (testimonials band, footer). */
  dark: string;
}

export interface BusinessHero {
  image: string;
  badge?: string;
}

export interface MenuItem {
  name: string;
  desc?: string;
  /** Price in MXN, plain number (formatted in the UI). */
  price: number;
}

export interface MenuCategory {
  category: string;
  items: MenuItem[];
}

export interface HoursEntry {
  days: string;
  hours: string;
}

export interface Testimonial {
  text: string;
  author: string;
}

export interface GeoPoint {
  lat: number;
  lng: number;
}

export interface BusinessPageData {
  slug: string;
  name: string;
  tagline: string;
  /** 2-3 paragraphs, one string each. */
  description: string[];
  theme: BusinessTheme;
  hero: BusinessHero;
  /** 4-6 image URLs. */
  gallery: string[];
  /** Image for the story section. Falls back to gallery[0] when omitted. */
  storyImage?: string;
  /** Menu (restaurants) or services (other businesses). */
  menu: MenuCategory[];
  hours: HoursEntry[];
  address: string;
  /** Free-text query for the embedded Google Map. */
  mapsQuery: string;
  /** Local format, e.g. "444 123 4567". */
  phone: string;
  whatsapp?: boolean;
  /** Instagram handle without @. */
  instagram?: string;
  /** Facebook page name/path. */
  facebook?: string;
  testimonials?: Testimonial[];
  established?: number;
  geo?: GeoPoint;
}
