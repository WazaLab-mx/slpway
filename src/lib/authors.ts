// Editorial author personas. Two bylines give the site topic-level E-E-A-T:
// a native-local voice (culture/events/food/travel) and a lived-experience
// expat voice (relocation/housing/healthcare/cost of living). Authors are
// assigned to posts by category — no per-post DB field needed.

export type Locale = 'en' | 'es' | 'de' | 'ja';

export interface Author {
  slug: string;
  name: string;
  avatarUrl: string;
  role: Record<Locale, string>;
  bio: Record<Locale, string>;
}

const V = '20260713';
const AVATAR = (file: string) =>
  `https://omxporaecrqsqhzjzvnx.supabase.co/storage/v1/object/public/blog-images/authors/${file}?v=${V}`;

export const AUTHORS: Record<string, Author> = {
  'mariana-cordero': {
    slug: 'mariana-cordero',
    name: 'Mariana Cordero',
    avatarUrl: AVATAR('mariana-cordero.jpg'),
    role: {
      en: 'Culture & Local Life Editor',
      es: 'Editora de Cultura y Vida Local',
      de: 'Redakteurin für Kultur & lokales Leben',
      ja: '文化・ローカルライフ担当エディター',
    },
    bio: {
      en: 'Born and raised in San Luis Potosí, Mariana studied Communications and has spent the last decade writing about her city’s festivals, food and neighborhoods. She visits in person every market, cantina and festival she covers.',
      es: 'Nacida y criada en San Luis Potosí, Mariana estudió Comunicación y ha pasado la última década escribiendo sobre las fiestas, la gastronomía y los barrios de su ciudad. Recorre en persona cada mercado, cantina y festival del que escribe.',
      de: 'Geboren und aufgewachsen in San Luis Potosí, studierte Mariana Kommunikationswissenschaft und schreibt seit einem Jahrzehnt über die Feste, die Küche und die Viertel ihrer Stadt. Jeden Markt, jede Cantina und jedes Fest, über das sie schreibt, besucht sie persönlich.',
      ja: 'サン・ルイス・ポトシ生まれ育ちのマリアナは、コミュニケーション学を専攻し、この10年間、街の祭り・食文化・地区について執筆してきました。紹介する市場、カンティーナ、祭りには必ず自ら足を運びます。',
    },
  },
  'daniel-cross': {
    slug: 'daniel-cross',
    name: 'Daniel Cross',
    avatarUrl: AVATAR('daniel-cross.jpg'),
    role: {
      en: 'Expat Life & Relocation Editor',
      es: 'Editor de Vida Expat y Relocation',
      de: 'Redakteur für Expat-Leben & Relocation',
      ja: '駐在生活・移住担当エディター',
    },
    bio: {
      en: 'Daniel moved to San Luis Potosí from Austin, Texas, in 2021. He writes from firsthand experience about immigration paperwork, rentals, healthcare and the real cost of living in the Bajío, helping fellow foreigners land smoothly.',
      es: 'Daniel se mudó a San Luis Potosí desde Austin, Texas, en 2021. Escribe desde la experiencia propia sobre trámites migratorios, rentas, salud y el costo real de vivir en el Bajío, ayudando a otros extranjeros a aterrizar sin fricciones.',
      de: 'Daniel zog 2021 aus Austin, Texas, nach San Luis Potosí. Aus eigener Erfahrung schreibt er über Einwanderungsformalitäten, Mietwohnungen, Gesundheitsversorgung und die realen Lebenshaltungskosten im Bajío – und hilft anderen Ausländern beim reibungslosen Ankommen.',
      ja: 'ダニエルは2021年にテキサス州オースティンからサン・ルイス・ポトシに移住しました。ビザ手続き、賃貸、医療、バヒオ地方での実際の生活費について自身の経験をもとに執筆し、他の外国人がスムーズに定住できるよう手助けしています。',
    },
  },
};

// Categories that read as expat/relocation content go to Daniel; everything
// else (culture, events, food, travel, family) goes to Mariana.
const EXPAT_CATEGORIES = new Set([
  'Expat Life',
  'expat-life',
  'Expat Guide',
  'Housing',
  'Relocation',
  'Ultimate Guides',
]);

export const AUTHOR_SLUGS = Object.keys(AUTHORS);

export function getAuthorForPost(category?: string | null): Author {
  if (category && EXPAT_CATEGORIES.has(category)) return AUTHORS['daniel-cross'];
  return AUTHORS['mariana-cordero'];
}

export function getAuthorBySlug(slug: string): Author | null {
  return AUTHORS[slug] ?? null;
}

export function localizedAuthorField(field: Record<Locale, string>, locale?: string): string {
  return field[(locale as Locale) || 'en'] ?? field.en;
}
