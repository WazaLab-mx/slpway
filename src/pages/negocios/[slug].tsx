import fs from 'fs';
import path from 'path';
import { CSSProperties } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { BusinessPageData } from '@/types/business-page';
import BusinessSeo from '@/components/business-page/BusinessSeo';
import BusinessHero from '@/components/business-page/BusinessHero';
import BusinessStory from '@/components/business-page/BusinessStory';
import BusinessMenu from '@/components/business-page/BusinessMenu';
import BusinessGallery from '@/components/business-page/BusinessGallery';
import BusinessTestimonials from '@/components/business-page/BusinessTestimonials';
import BusinessVisit from '@/components/business-page/BusinessVisit';
import BusinessFooter from '@/components/business-page/BusinessFooter';
import WhatsAppFloatingButton from '@/components/business-page/WhatsAppFloatingButton';

interface BusinessPageProps {
  business: BusinessPageData;
}

const DATA_DIR = path.join(process.cwd(), 'src', 'data', 'business-pages');

export default function BusinessPage({ business }: BusinessPageProps) {
  const { theme } = business;
  const themeVars = {
    '--biz-primary': theme.primary,
    '--biz-accent': theme.accent,
    '--biz-dark': theme.dark,
  } as CSSProperties;

  return (
    <>
      <BusinessSeo business={business} />

      <div
        style={themeVars}
        className="biz-page min-h-screen bg-[#fdfbf7] font-sans text-neutral-800 antialiased"
      >
        <BusinessHero business={business} />
        <BusinessStory business={business} />
        <BusinessMenu menu={business.menu} />
        <BusinessGallery businessName={business.name} images={business.gallery} />
        {business.testimonials && business.testimonials.length > 0 && (
          <BusinessTestimonials testimonials={business.testimonials} />
        )}
        <BusinessVisit business={business} />
        <BusinessFooter business={business} />

        {business.whatsapp && (
          <WhatsAppFloatingButton businessName={business.name} phone={business.phone} />
        )}
      </div>

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        /* Neutralize the main site's global typography rules (globals.css sets
           fixed colors and margins on h1-h6/p) so the business page is styled
           exclusively by its own components + theme tokens. */
        /* Auto Ads must never render inside client pages — kill any injected
           unit and Google's anchor/vignette containers while on this page. */
        .biz-page ins.adsbygoogle,
        ins.adsbygoogle[data-anchor-status],
        .google-auto-placed {
          display: none !important;
        }
        .biz-page :is(h1, h2, h3, h4, h5, h6, p) {
          color: inherit;
          margin-bottom: 0;
        }
      `}</style>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const slugs = fs
    .readdirSync(DATA_DIR)
    .filter((file) => file.endsWith('.json'))
    .map((file) => file.replace(/\.json$/, ''));

  // The page content is always Spanish (the business's own site), but we
  // generate every locale path so links from any part of the site resolve.
  const paths = slugs.flatMap((slug) =>
    (locales ?? [undefined]).map((locale) => ({ params: { slug }, locale })),
  );

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<BusinessPageProps> = async ({ params }) => {
  const slug = params?.slug as string;
  const filePath = path.join(DATA_DIR, `${slug}.json`);

  if (!fs.existsSync(filePath)) {
    return { notFound: true };
  }

  const business = JSON.parse(fs.readFileSync(filePath, 'utf-8')) as BusinessPageData;
  return { props: { business } };
};
