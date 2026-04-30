import { createClient } from '@supabase/supabase-js';
import type { SitemapEntry } from './locale';

/**
 * Mirror of src/lib/brands.ts:generateBrandSlug. Inlined here so the
 * sitemap module doesn't transitively import the pages-browser Supabase
 * client (which is meant for client use).
 */
function generateBrandSlug(name: string, category: string, city?: string | null): string {
  return [name, category, city || 'san-luis-potosi']
    .join('-')
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

const TODAY = () => new Date().toISOString().split('T')[0];
const isoDay = (value: string | null | undefined): string =>
  value ? value.split('T')[0] : TODAY();

function getServerClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anon) throw new Error('Supabase env vars missing for sitemap generation');
  return createClient(url, anon);
}

export async function fetchBlogUrls(): Promise<SitemapEntry[]> {
  const supabase = getServerClient();
  const { data, error } = await supabase
    .from('blog_posts')
    .select('slug, updated_at, published_at')
    .eq('status', 'published');
  if (error || !data) return [];
  return data.map((row) => ({
    path: `/blog/${row.slug}`,
    lastmod: isoDay(row.updated_at || row.published_at),
    changefreq: 'monthly',
    priority: 0.7,
  }));
}

export async function fetchPlaceUrls(): Promise<SitemapEntry[]> {
  const supabase = getServerClient();
  const { data, error } = await supabase
    .from('places')
    .select('id, updated_at, created_at');
  if (error || !data) return [];
  return data.map((row) => ({
    path: `/places/${row.id}`,
    lastmod: isoDay(row.updated_at || row.created_at),
    changefreq: 'monthly',
    priority: 0.6,
  }));
}

export async function fetchEventUrls(): Promise<SitemapEntry[]> {
  const supabase = getServerClient();
  // Only include events that haven't ended yet — past events have no SEO value.
  const { data, error } = await supabase
    .from('events')
    .select('id, category, updated_at, end_date')
    .gte('end_date', TODAY());
  if (error || !data) return [];
  return data.map((row) => ({
    path: `/events/${row.category}/${row.id}`,
    lastmod: isoDay(row.updated_at),
    changefreq: 'weekly',
    priority: 0.6,
  }));
}

export async function fetchBrandUrls(): Promise<SitemapEntry[]> {
  const supabase = getServerClient();
  // The brands table has no `slug` column — slugs are derived at request
  // time from name + category + city. See src/lib/brands.ts:generateBrandSlug.
  const { data, error } = await supabase
    .from('brands')
    .select('name, category, city, updated_at, created_at');
  if (error || !data) return [];
  return data
    .map((row): SitemapEntry | null => {
      const slug = generateBrandSlug(row.name, row.category, row.city ?? undefined);
      if (!slug) return null;
      return {
        path: `/brands/${slug}`,
        lastmod: isoDay(row.updated_at || row.created_at),
        changefreq: 'monthly',
        priority: 0.6,
      };
    })
    .filter((u): u is SitemapEntry => u !== null);
}

export function fetchFactcheckUrls(): SitemapEntry[] {
  // Factcheck reports are markdown files in public/factchecks/. Include them
  // so crawlers (including AI agents) see the ClaimReview-rich pages.
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const fs = require('fs');
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const path = require('path');
    const dir = path.join(process.cwd(), 'public', 'factchecks');
    if (!fs.existsSync(dir)) return [];
    const files = fs.readdirSync(dir).filter((f: string) => f.endsWith('.md'));
    return files.map((file: string) => {
      const slug = file.replace('.md', '');
      const stat = fs.statSync(path.join(dir, file));
      return {
        path: `/blog/factchecks/${slug}`,
        lastmod: isoDay(stat.mtime.toISOString()),
        changefreq: 'monthly' as const,
        priority: 0.8,
      };
    });
  } catch {
    return [];
  }
}
