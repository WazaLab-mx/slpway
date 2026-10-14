import type { GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SEO from '@/components/common/SEO';
import { ConversionEvents } from '@/lib/analytics';
import { LINK_HUB_ITEMS } from '@/data/ig-link-hub';

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: { ...(await serverSideTranslations(locale ?? 'en', ['common', 'link-hub'])) },
});

// Link-in-bio page for Instagram: one tap to each guide promoted in posts.
export default function InstagramLinkHub() {
  const { t } = useTranslation('link-hub');

  return (
    <>
      <SEO title={t('seo.title')} description={t('seo.description')} noIndex />
      <main className="min-h-screen bg-[#0a1230] px-4 py-10 text-white">
        <div className="mx-auto max-w-md">
          <div className="flex flex-col items-center text-center">
            <Image src="/images/logo.jpeg" alt="San Luis Way" width={88} height={88} className="rounded-2xl" />
            <h1 className="mt-4 text-2xl font-bold text-white">{t('title')}</h1>
            <p className="mt-2 text-sm text-indigo-100">{t('subtitle')}</p>
          </div>
          <ul className="mt-8 space-y-3">
            {LINK_HUB_ITEMS.map((item, index) => {
              const label = t(`items.${item.id}.label`);
              return (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    onClick={() => ConversionEvents.ctaClick(`ig-hub-${item.id}`, label, 'ig')}
                    className={`flex items-center gap-4 rounded-2xl border px-5 py-4 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffc531] ${
                      index === 0
                        ? 'border-[#ffc531] bg-[#ffc531] text-[#0a1230] hover:bg-[#ffd560]'
                        : 'border-white/15 bg-white/5 text-white hover:bg-white/10'
                    }`}
                  >
                    <span aria-hidden="true" className="text-2xl">{item.icon}</span>
                    <span className="min-w-0">
                      <span className="block font-bold">{label}</span>
                      <span className={`block text-sm ${index === 0 ? 'text-[#0a1230]/80' : 'text-indigo-100'}`}>
                        {t(`items.${item.id}.detail`)}
                      </span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <p className="mt-8 text-center text-sm text-indigo-100">
            <Link href="/" className="underline underline-offset-4 hover:text-white">sanluisway.com</Link>
          </p>
        </div>
      </main>
    </>
  );
}
