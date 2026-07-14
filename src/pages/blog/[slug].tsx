import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { BlogPost, getBlogPostsMeta, getBlogPostBySlug, SupportedLocale } from '@/lib/blog';
import SEO from '@/components/common/SEO';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import Byline from '@/components/common/Byline';
import { getAuthorForPost, localizedAuthorField } from '@/lib/authors';
import NewsletterBanner from '@/components/NewsletterBanner';
import GuideCTA from '@/components/common/GuideCTA';
import ShareButton from '@/components/sharing/ShareButton';
import AdUnit from '@/components/common/AdUnit';
import { splitHtmlForAd } from '@/lib/split-html-for-ad';
import AffiliateGrid from '@/components/affiliate/AffiliateGrid';
import { getAffiliateProductsForPost } from '@/data/affiliate-products';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import fs from 'fs';
import path from 'path';

interface BlogPostPageProps {
  post: BlogPost;
  relatedPosts: Pick<BlogPost, 'slug' | 'title' | 'imageUrl' | 'category'>[];
  hasFactcheck: boolean;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getBlogPostsMeta();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<BlogPostPageProps> = async (context) => {
  const slug = context.params?.slug as string;
  const locale = context.locale;
  const blogLocale = (locale || 'en') as SupportedLocale;
  const post = await getBlogPostBySlug(slug, blogLocale);

  if (!post) {
    return {
      notFound: true,
    };
  }

  // Fetch related posts by matching category
  const allPosts = await getBlogPostsMeta();
  const relatedPosts = allPosts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 3)
    .map(({ slug, title, imageUrl, category }) => ({ slug, title, imageUrl, category }));

  // If fewer than 3 category matches, fill with recent posts
  if (relatedPosts.length < 3) {
    const fillPosts = allPosts
      .filter((p) => p.slug !== slug && !relatedPosts.some((r) => r.slug === p.slug))
      .slice(0, 3 - relatedPosts.length)
      .map(({ slug, title, imageUrl, category }) => ({ slug, title, imageUrl, category }));
    relatedPosts.push(...fillPosts);
  }

  // A post is "fact-checked" when a published investigation report exists
  // for its slug — the badge and link render automatically, no per-post work.
  const hasFactcheck = fs.existsSync(
    path.join(process.cwd(), 'public', 'factchecks', `${slug}.md`)
  );

  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'es', ['common'])),
      post,
      relatedPosts,
      hasFactcheck,
    },
    revalidate: 60,
  };
};

/**
 * Render the full blog post page including SEO metadata, Article structured data,
 * hero image, breadcrumbs, post content, tags, and a newsletter call-to-action.
 *
 * @param post - The blog post data used to populate page content, SEO fields, metadata, and structured data
 * @returns A JSX element representing the rendered blog post page
 */
export default function BlogPostPage({ post, relatedPosts, hasFactcheck }: BlogPostPageProps) {
  const { locale = 'en' } = useRouter();
  const isEs = locale === 'es';
  const author = getAuthorForPost(post.category);
  // Use dedicated SEO fields when available, fallback to title/excerpt
  const seoTitle = post.metaTitle || post.title;
  const seoDescription = post.metaDescription || post.excerpt;

  return (
    <>
      <SEO
        title={seoTitle}
        description={seoDescription}
        keywords={post.tags?.join(', ')}
        ogImage={post.imageUrl || '/og-image.jpg'}
        ogType="article"
        article={{
          publishedTime: post.publishedAt,
          modifiedTime: post.updatedAt || post.publishedAt,
          tags: post.tags
        }}
      />

      {/* Article Structured Data */}
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": seoTitle,
              "description": seoDescription,
              "image": post.imageUrl || "https://www.sanluisway.com/og-image.jpg",
              "datePublished": post.publishedAt,
              "dateModified": post.updatedAt || post.publishedAt,
              "author": {
                "@type": "Person",
                "@id": `https://www.sanluisway.com/authors/${author.slug}#person`,
                "name": author.name,
                "url": `https://www.sanluisway.com/authors/${author.slug}`,
                "image": author.avatarUrl,
                "jobTitle": localizedAuthorField(author.role, locale),
                "worksFor": {
                  "@type": "Organization",
                  "@id": "https://www.sanluisway.com/#organization",
                  "name": "San Luis Way"
                }
              },
              "publisher": {
                "@type": "Organization",
                "@id": "https://www.sanluisway.com/#organization",
                "name": "San Luis Way",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.sanluisway.com/og-image.jpg"
                }
              },
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": `https://www.sanluisway.com/blog/${post.slug}`
              },
              "keywords": post.tags?.join(', ') || '',
              "articleSection": post.category || "Expat Guide"
            })
          }}
        />
      </Head>

      <main className="bg-white">
        {post.imageUrl && (
          <div className="relative h-96 w-full">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col items-center justify-center">
              <h1 className="max-w-4xl text-center text-4xl font-bold text-white md:text-5xl px-4">
                {post.title}
              </h1>
              <div className="mt-6">
                <ShareButton 
                  title={post.title} 
                  text={post.excerpt ? `Read "${post.title}": ` : undefined}
                  size="lg"
                />
              </div>
            </div>
          </div>
        )}

        <div className="container mx-auto max-w-3xl px-4 py-8">
          <Breadcrumbs
            items={[
              { label: 'Blog', href: '/blog' },
              { label: post.title, href: `/blog/${post.slug}` }
            ]}
            className="mb-6"
          />
          <Byline
            publishedAt={post.publishedAt}
            modifiedAt={post.updatedAt || post.publishedAt}
            authorName={author.name}
            authorUrl={`/authors/${author.slug}`}
            authorAvatarUrl={author.avatarUrl}
            authorRole={localizedAuthorField(author.role, locale)}
            className="text-gray-700"
          />
          {hasFactcheck && (
            <Link
              href={`/blog/factchecks/${post.slug}`}
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-800 hover:bg-emerald-100 transition-colors"
            >
              <svg className="h-4 w-4 shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {isEs
                ? 'Artículo verificado — ver reporte de fact-check'
                : 'Fact-checked article — read the verification report'}
            </Link>
          )}
        </div>

        <div className="container mx-auto max-w-3xl px-4 pb-12">
          <div className="mb-8">
            <AdUnit placement="top-banner" />
          </div>

          {(() => {
            // Long posts get an in-article unit mid-content, split at a safe
            // </section> boundary; short posts render unsplit as before.
            const split = splitHtmlForAd(post.content);
            if (!split) {
              return (
                <div
                  className="prose prose-lg max-w-none prose-headings:scroll-mt-24"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              );
            }
            return (
              <div className="prose prose-lg max-w-none prose-headings:scroll-mt-24">
                <div dangerouslySetInnerHTML={{ __html: split[0] }} />
                <div className="my-10 not-prose">
                  <AdUnit placement="in-article" />
                </div>
                <div dangerouslySetInnerHTML={{ __html: split[1] }} />
              </div>
            );
          })()}

          <div className="my-10">
            <AdUnit placement="in-article" />
          </div>

          {(() => {
            const matchedProducts = getAffiliateProductsForPost({
              tags: post.tags,
              category: post.category,
              slug: post.slug,
              limit: 3,
            });
            if (matchedProducts.length === 0) return null;
            return (
              <AffiliateGrid
                productIds={matchedProducts.map((p) => p.id)}
                titleKey="affiliate.sectionTitle"
                subtitleKey="affiliate.sectionSubtitle"
              />
            );
          })()}

          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="mb-4 text-lg font-semibold">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="mb-6 text-xl font-bold text-gray-900">You might also like</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {relatedPosts.map((rp) => (
                  <Link key={rp.slug} href={`/blog/${rp.slug}`} className="group block rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                    {rp.imageUrl && (
                      <div className="relative h-32 w-full">
                        <Image src={rp.imageUrl} alt={rp.title} fill className="object-cover group-hover:scale-105 transition-transform" sizes="(max-width: 640px) 100vw, 33vw" />
                      </div>
                    )}
                    <div className="p-3">
                      <p className="text-xs text-blue-600 font-medium mb-1">{rp.category}</p>
                      <p className="text-sm font-semibold text-gray-900 line-clamp-2">{rp.title}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Newsletter CTA - End of Article */}
          <NewsletterBanner variant="blog-end" />

          <GuideCTA relatedLinks={[
            { href: '/resources/safety-guide', label: 'Is SLP Safe?', labelEs: '¿Es Seguro SLP?' },
            { href: '/resources/living-guide', label: 'Living Guide', labelEs: 'Guía de Vida' },
            { href: '/resources/expat-guide', label: 'Expat Essentials', labelEs: 'Guía Expat' },
            { href: '/blog', label: 'All Blog Posts', labelEs: 'Todos los Artículos' },
          ]} />
        </div>
      </main>
    </>
  );
}