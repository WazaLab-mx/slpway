import OpenAI from 'openai';
import type { SupabaseClient } from '@supabase/supabase-js';
import { NEWSLETTER_FAST_MODEL } from './newsletter-models';
import { extractContentDigest } from './newsletter-subject';
import { DEFAULT_HERO_PHOTO } from './newsletter-html';

export type HeroPhoto = { image_url: string; title: string | null };
type BlogPostImage = {
  slug?: string;
  image_url?: string | null;
  title?: string | null;
  title_en?: string | null;
  category?: string | null;
};

const openai = process.env.OPENAI_API_KEY
  ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY, timeout: 120_000 })
  : null;

const STOPWORDS = new Set([
  'the', 'and', 'for', 'with', 'this', 'that', 'from', 'your', 'week', 'san', 'luis', 'potosí',
  'potosi', 'del', 'las', 'los', 'para', 'con', 'una', 'what', 'into', 'are', 'will', 'news', 'events',
  'opening', 'slp', 'más', 'about', 'our', 'you', 'its', 'has', 'have', 'new',
]);

function keywords(text: string): Set<string> {
  return new Set(
    text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '')
      .split(/[^a-z0-9]+/)
      .filter((w) => w.length > 3 && !STOPWORDS.has(w))
  );
}

/** Collects every image URL used in recent editions so the next hero never repeats one. */
export function extractRecentImageUrls(htmls: string[]): Set<string> {
  const used = new Set<string>();
  for (const html of htmls) {
    for (const m of Array.from(html.matchAll(/<img[^>]+src="([^"]+)"/gi))) used.add(m[1]);
  }
  return used;
}

function normalizeUrl(url: string): string {
  return url.replace(/^https?:\/\/(www\.)?sanluisway\.com/i, '').split('?')[0];
}

/**
 * Picks the blog image whose post best matches this edition's content,
 * skipping any image used as a recent hero. Returns null if nothing qualifies.
 */
export function pickContentMatchedBlogImage(
  digest: string,
  posts: BlogPostImage[],
  recentlyUsed: Set<string>
): HeroPhoto | null {
  const used = new Set(Array.from(recentlyUsed).map(normalizeUrl));
  const digestWords = keywords(digest);
  const candidates = posts
    .filter((p) => p.image_url && !used.has(normalizeUrl(p.image_url)))
    .map((p) => {
      const postWords = keywords(`${p.title_en || ''} ${p.title || ''} ${p.slug || ''} ${p.category || ''}`);
      const score = Array.from(postWords).filter((w) => digestWords.has(w)).length;
      return { p, score };
    })
    .sort((a, b) => b.score - a.score);
  if (candidates.length === 0) return null;
  const { p } = candidates[0];
  return { image_url: p.image_url as string, title: p.title_en || p.title || 'San Luis Potosí' };
}

/** Builds the gpt-image-1 prompt for a scene grounded in this edition's lead story. */
export function buildHeroImagePrompt(scene: string): string {
  return `Editorial photograph for a weekly city newsletter about San Luis Potosí, México. ${scene}
Style: realistic documentary photography, natural light, authentic Mexican setting, warm but true-to-life colors, 3:2 landscape composition with a clear focal subject.
Do NOT include any text, letters, signs with words, logos, watermarks, or recognizable real people's faces. Avoid fireworks unless the scene explicitly calls for them.`;
}

async function describeScene(digest: string): Promise<{ scene: string; alt: string } | null> {
  if (!openai) return null;
  const response = await openai.responses.create({
    model: NEWSLETTER_FAST_MODEL,
    instructions: 'You art-direct newsletter hero photos. Return ONLY valid JSON.',
    input: `This week's newsletter content:\n${digest}\n\nPick the single most visual story (prefer the lead news item or top event) and describe ONE concrete photographic scene that represents it, set in San Luis Potosí. 1-2 sentences, specific subjects and setting, no text or logos in the image.\nReturn {"scene":"...","alt":"short alt text, max 12 words"}`,
    max_output_tokens: 600,
  });
  const match = (response.output_text || '').match(/\{[\s\S]*\}/);
  if (!match) return null;
  const parsed = JSON.parse(match[0]);
  if (typeof parsed.scene !== 'string' || parsed.scene.length < 20) return null;
  return { scene: parsed.scene.trim(), alt: typeof parsed.alt === 'string' ? parsed.alt.trim() : 'San Luis Potosí' };
}

async function generateAiHero(digest: string, supabase: SupabaseClient, dateKey: string): Promise<HeroPhoto | null> {
  if (!openai) return null;
  const scene = await describeScene(digest);
  if (!scene) return null;
  console.log(`   🎨 Hero scene: ${scene.scene}`);
  const img = await openai.images.generate({
    model: 'gpt-image-1',
    prompt: buildHeroImagePrompt(scene.scene),
    size: '1536x1024',
    quality: 'medium',
    output_format: 'jpeg',
    output_compression: 82,
    n: 1,
  });
  const b64 = img.data?.[0]?.b64_json;
  if (!b64) return null;
  const key = `newsletters/${dateKey}-${Date.now()}.jpg`;
  const { error } = await supabase.storage
    .from('blog-images')
    .upload(key, Buffer.from(b64, 'base64'), { contentType: 'image/jpeg', upsert: false });
  if (error) throw error;
  const { data } = supabase.storage.from('blog-images').getPublicUrl(key);
  return { image_url: data.publicUrl, title: scene.alt };
}

/**
 * Resolves this edition's hero image from its actual content: first an AI
 * image generated from the lead story, then the best-matching blog image not
 * used in recent editions, then the default city photo.
 */
export async function resolveNewsletterHero(
  html: string,
  supabase: SupabaseClient,
  blogPosts: BlogPostImage[],
  dateKey: string
): Promise<HeroPhoto> {
  const digest = extractContentDigest(html);

  if (digest.length >= 30) {
    try {
      const hero = await generateAiHero(digest, supabase, dateKey);
      if (hero) {
        console.log(`   ✅ AI hero generated: ${hero.image_url}`);
        return hero;
      }
    } catch (e) {
      console.warn('   ⚠️ AI hero generation failed, falling back to a blog image:', e);
    }
  }

  let recentlyUsed = new Set<string>();
  try {
    const { data } = await supabase
      .from('newsletters')
      .select('html_content')
      .order('created_at', { ascending: false })
      .limit(6);
    recentlyUsed = extractRecentImageUrls((data || []).map((n) => (n.html_content as string) || ''));
  } catch (e) {
    console.warn('   ⚠️ Could not read recent newsletters for hero dedupe:', e);
  }

  const matched = pickContentMatchedBlogImage(digest, blogPosts, recentlyUsed);
  if (matched) {
    console.log(`   ↩️ Hero fallback: content-matched blog image "${matched.title}"`);
    return matched;
  }
  console.log('   ↩️ Hero fallback: default city photo');
  return DEFAULT_HERO_PHOTO;
}
