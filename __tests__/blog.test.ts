import { getBlogPosts, getBlogPostBySlug } from '@/lib/blog';

// blog.ts builds its own Supabase client via createClient() from
// @supabase/supabase-js (memoized inside getSupabaseClient). Intercept that
// client so we can assert the queries it runs.
const mockFrom = jest.fn();

jest.mock('@supabase/supabase-js', () => ({
  createClient: jest.fn(() => ({ from: mockFrom })),
}));

// Schema: base fields (title, content, excerpt) hold the English content,
// and *_es fields hold the Spanish translation.
const mockPost = {
  id: '1',
  slug: 'test-post',
  title: 'Test Post English',
  content: '<p>Hello World</p>',
  excerpt: 'An excerpt',
  title_es: 'Test Post Spanish',
  content_es: '<p>Hola Mundo</p>',
  excerpt_es: 'Un extracto',
  image_url: 'http://example.com/image.jpg',
  category: 'Testing',
  published_at: new Date().toISOString(),
  created_at: new Date().toISOString(),
  status: 'published',
  tags: ['test', 'mock'],
};

const mockPostWithoutTranslation = {
  ...mockPost,
  id: '2',
  slug: 'test-post-no-translation',
  title_es: null,
  content_es: null,
  excerpt_es: null,
};

describe('Blog Data Fetching', () => {
  beforeEach(() => {
    mockFrom.mockClear();
  });

  // getBlogPosts: maps fields, filters published, and does locale fallback.
  it('should fetch all published blog posts with locale fallback', async () => {
    mockFrom.mockReturnValue({
      select: jest.fn().mockReturnThis(),
      eq: jest.fn().mockReturnThis(),
      order: jest.fn().mockReturnThis(),
      then: (resolve: (value: unknown) => unknown) =>
        resolve({ data: [mockPost, mockPostWithoutTranslation], error: null }),
    });

    const posts = await getBlogPosts('es');

    expect(mockFrom).toHaveBeenCalledWith('blog_posts');
    expect(posts).toHaveLength(2);
    // Post with an es translation returns Spanish content.
    expect(posts[0].title).toBe('Test Post Spanish');
    expect(posts[0].imageUrl).toBe(mockPost.image_url);
    // Post without an es translation falls back to the English base field.
    expect(posts[1].title).toBe('Test Post English');
  });

  // getBlogPostBySlug: returns the requested locale content.
  it('should fetch a single post by slug and return English content', async () => {
    mockFrom.mockReturnValue({
      select: jest.fn().mockReturnThis(),
      eq: jest.fn().mockReturnThis(),
      single: jest.fn().mockResolvedValue({ data: mockPost, error: null }),
    });

    const post = await getBlogPostBySlug('test-post');

    expect(mockFrom).toHaveBeenCalledWith('blog_posts');
    expect(post).not.toBeNull();
    expect(post?.slug).toBe('test-post');
    expect(post?.content).toBe('<p>Hello World</p>');
  });

  it('should fetch a single post by slug and return Spanish content when available', async () => {
    mockFrom.mockReturnValue({
      select: jest.fn().mockReturnThis(),
      eq: jest.fn().mockReturnThis(),
      single: jest.fn().mockResolvedValue({ data: mockPost, error: null }),
    });

    const post = await getBlogPostBySlug('test-post', 'es');

    expect(mockFrom).toHaveBeenCalledWith('blog_posts');
    expect(post?.slug).toBe('test-post');
    expect(post?.content).toBe('<p>Hola Mundo</p>');
  });

  it('should fall back to English base content when the requested locale is missing', async () => {
    mockFrom.mockReturnValue({
      select: jest.fn().mockReturnThis(),
      eq: jest.fn().mockReturnThis(),
      single: jest.fn().mockResolvedValue({ data: mockPostWithoutTranslation, error: null }),
    });

    const post = await getBlogPostBySlug('test-post-no-translation', 'es');

    expect(mockFrom).toHaveBeenCalledWith('blog_posts');
    expect(post).not.toBeNull();
    expect(post?.slug).toBe('test-post-no-translation');
    expect(post?.content).toBe('<p>Hello World</p>');
  });

  it('should return null if post is not found', async () => {
    mockFrom.mockReturnValue({
      select: jest.fn().mockReturnThis(),
      eq: jest.fn().mockReturnThis(),
      single: jest.fn().mockResolvedValue({ data: null, error: { message: 'Not found', code: 'PGRST116' } }),
    });

    const post = await getBlogPostBySlug('non-existent-slug');
    expect(post).toBeNull();
  });

  it('should return an empty array if there is a database error in getBlogPosts', async () => {
    mockFrom.mockReturnValue({
      select: jest.fn().mockReturnThis(),
      eq: jest.fn().mockReturnThis(),
      order: jest.fn().mockReturnThis(),
      then: (resolve: (value: unknown) => unknown) =>
        resolve({ data: null, error: new Error('Database connection failed') }),
    });

    const posts = await getBlogPosts();
    expect(posts).toEqual([]);
  });
});
