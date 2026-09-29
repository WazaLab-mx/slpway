import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useTranslation } from 'next-i18next';
import HomeServicesBanner from './HomeServicesBanner';
import en from '../../../public/locales/en/common.json';
import es from '../../../public/locales/es/common.json';
import de from '../../../public/locales/de/common.json';
import ja from '../../../public/locales/ja/common.json';

jest.mock('next-i18next', () => ({ useTranslation: jest.fn() }));

const gtag = jest.fn();
beforeEach(() => {
  (useTranslation as jest.Mock).mockReturnValue({ t: (key: string) => key });
  (window as unknown as { gtag: jest.Mock }).gtag = gtag;
});
afterEach(() => jest.clearAllMocks());

describe('HomeServicesBanner', () => {
  it('links to the home services finder', () => {
    render(<HomeServicesBanner />);
    const link = screen.getByRole('link', { name: /homeServiceFinder.homeBanner.button/ });
    expect(link.getAttribute('href')).toBe('/san-luis-potosi-home-services#service-finder');
  });

  it('shows featured service categories', () => {
    render(<HomeServicesBanner />);
    expect(screen.getByText('homeServiceFinder.categories.plumbing')).toBeTruthy();
    expect(screen.getByText('homeServiceFinder.categories.locksmith')).toBeTruthy();
  });

  it('tracks the CTA click', () => {
    render(<HomeServicesBanner />);
    fireEvent.click(screen.getByRole('link'));
    expect(gtag).toHaveBeenCalled();
  });

  it.each([['en', en], ['es', es], ['de', de], ['ja', ja]])('has banner copy in %s', (_, locale) => {
    const banner = (locale as any).homeServiceFinder.homeBanner;
    for (const key of ['badge', 'title', 'text', 'button']) expect(banner[key]).toBeTruthy();
  });
});
