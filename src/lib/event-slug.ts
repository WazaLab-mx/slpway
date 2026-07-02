// SEO-friendly event URLs without a DB slug column: the path is
// `{slugified-title}-{first 8 hex of the uuid}` and resolution matches on the
// id prefix, so title edits never break old links.
const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const ID_SUFFIX_RE = /-([0-9a-f]{8})$/i;

export function slugifyEventTitle(title: string): string {
  return title
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60)
    .replace(/-+$/, '');
}

export function buildEventSlug(event: { id: string; title: string }): string {
  const base = slugifyEventTitle(event.title);
  const suffix = event.id.slice(0, 8).toLowerCase();
  return base ? `${base}-${suffix}` : suffix;
}

export function buildEventPath(event: { id: string; title: string; category: string }): string {
  return `/events/${event.category}/${buildEventSlug(event)}`;
}

export function isFullUuid(param: string): boolean {
  return UUID_RE.test(param);
}

// Returns the 8-hex id prefix encoded in a slug param, or null if absent.
export function extractIdPrefix(param: string): string | null {
  const match = param.match(ID_SUFFIX_RE);
  return match ? match[1].toLowerCase() : null;
}
