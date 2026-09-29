import React from 'react';
import { render, screen } from '@testing-library/react';
import { useTranslation } from 'next-i18next';
import SeafoodPage from '@/pages/category/seafood';
import type { Place } from '@/types';

jest.mock('next-i18next', () => ({ useTranslation: jest.fn() }));
jest.mock('next-i18next/serverSideTranslations', () => ({ serverSideTranslations: jest.fn() }));
jest.mock('@/components/common/AdUnit', () => () => null);
// Only getStaticProps touches Supabase; its query is checked against the real DB.
jest.mock('@/lib/supabase', () => ({ supabase: {} }));

const place = (id: string, name: string): Place => ({
  id,
  name,
  category: 'seafood',
  address: 'Av. Nereo Rodríguez Barragán, San Luis Potosí',
  featured: false,
  imageUrl: 'https://example.com/photo.jpg',
});

beforeEach(() => {
  (useTranslation as jest.Mock).mockReturnValue({ t: (key: string) => key });
});

describe('Seafood category page', () => {
  it('renders the translated heading and every seafood place', () => {
    render(<SeafoodPage places={[place('j', 'Jijos del Mar'), place('p', 'Piraña Cubana')]} />);
    expect(screen.getByRole('heading', { level: 1, name: 'seafoodCategory.title' })).toBeInTheDocument();
    expect(screen.getByText('Jijos del Mar')).toBeInTheDocument();
    expect(screen.getByText('Piraña Cubana')).toBeInTheDocument();
  });

  it('shows the empty message when there are no places', () => {
    render(<SeafoodPage places={[]} />);
    expect(screen.getByText('seafoodCategory.empty')).toBeInTheDocument();
  });
});
