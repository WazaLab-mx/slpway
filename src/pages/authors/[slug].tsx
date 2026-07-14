import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { BlogPost, getBlogPostsMeta, SupportedLocale } from '@/lib/blog';
import SEO from '@/components/common/SEO';
import {
  AUTHOR_SLUGS,
  Author,
  getAuthorBySlug,
  getAuthorForPost,
  localizedAuthorField,
} from '@/lib/authors';

interface AuthorPageProps {
  author: Author;
  posts: BlogPost[];
}

const LABELS: Record<string, { articlesBy: string; back: string }> = {
  en: { articlesBy: 'Articles by', back: 'All articles' },
  es: { articlesBy: 'Artículos de', back: 'Todos los artículos' },
  de: { articlesBy: 'Artikel von', back: 'Alle Artikel' },
  ja: { articlesBy: 'の記事', back: 'すべての記事' },
};

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const paths = AUTHOR_SLUGS.flatMap((slug) =>
    (locales ?? ['en']).map((locale) => ({ params: { slug }, locale })),
  );
  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps<AuthorPageProps> = async ({ params, locale }) => {
  const slug = params?.slug as string;
  const author = getAuthorBySlug(slug);
  if (!author) return { notFound: true };

  const blogLocale = (locale || 'en') as SupportedLocale;
  const all = await getBlogPostsMeta(blogLocale);
  const posts = all.filter((p) => getAuthorForPost(p.category).slug === slug);

  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'es', ['common'])),
      author,
      posts,
    },
    revalidate: 60 * 30,
  };
};

export default function AuthorPage({ author, posts }: AuthorPageProps) {
  const { locale = 'en' } = useRouter();
  const labels = LABELS[locale] || LABELS.en;
  const role = localizedAuthorField(author.role, locale);
  const bio = localizedAuthorField(author.bio, locale);
  const url = `https://www.sanluisway.com/authors/${author.slug}`;

  return (
    <>
      <SEO
        title={`${author.name} — ${role} | San Luis Way`}
        description={bio}
        ogImage={author.avatarUrl}
        ogType="website"
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfilePage',
              mainEntity: {
                '@type': 'Person',
                '@id': `${url}#person`,
                name: author.name,
                url,
                image: author.avatarUrl,
                jobTitle: role,
                description: bio,
                worksFor: {
                  '@type': 'Organization',
                  '@id': 'https://www.sanluisway.com/#organization',
                  name: 'San Luis Way',
                },
              },
            }),
          }}
        />
      </Head>

      <main className="bg-white">
        <div className="container mx-auto max-w-3xl px-4 py-12">
          <div className="flex flex-col items-center text-center sm:flex-row sm:items-center sm:text-left sm:gap-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={author.avatarUrl}
              alt={author.name}
              width={112}
              height={112}
              className="h-28 w-28 rounded-full object-cover border border-gray-200 shadow-sm"
            />
            <div className="mt-4 sm:mt-0">
              <h1 className="text-3xl font-bold text-gray-900">{author.name}</h1>
              <p className="mt-1 text-primary font-semibold">{role}</p>
            </div>
          </div>

          <p className="mt-6 text-lg leading-relaxed text-gray-700">{bio}</p>

          <hr className="my-10 border-gray-100" />

          <h2 className="mb-6 text-xl font-bold text-gray-900">
            {labels.articlesBy} {author.name}
          </h2>

          <div className="space-y-4">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex gap-4 rounded-2xl border border-gray-100 p-4 transition-all hover:border-primary/20 hover:shadow-sm"
              >
                {post.imageUrl && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    width={112}
                    height={80}
                    loading="lazy"
                    className="h-20 w-28 shrink-0 rounded-lg object-cover"
                  />
                )}
                <div className="min-w-0">
                  {post.category && (
                    <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                      {post.category}
                    </span>
                  )}
                  <h3 className="font-serif text-lg font-bold text-gray-900 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  {post.excerpt && (
                    <p className="mt-1 text-sm text-gray-600 line-clamp-2">{post.excerpt}</p>
                  )}
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/blog" className="text-primary font-semibold hover:underline">
              {labels.back} →
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
