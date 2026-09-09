export function selectHomeBlogPosts<T extends { slug: string }>(posts: T[], limit = 6): T[] {
  return posts.filter(post => !post.slug.includes('fenapo-2026')).slice(0, limit);
}
