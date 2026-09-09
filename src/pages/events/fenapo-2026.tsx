import type { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async ({ locale, defaultLocale }) => ({
  redirect: {
    destination: `${locale && locale !== (defaultLocale ?? 'en') ? `/${locale}` : ''}/events/xantolo-2026`,
    permanent: false,
  },
});

export default function RetiredFenapoPage() {
  return null;
}
