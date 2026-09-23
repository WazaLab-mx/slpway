import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { useTranslation } from 'next-i18next';
import ServiceFinder from './ServiceFinder';
import type { HomeServiceProvider } from '@/lib/home-services-providers';

jest.mock('next-i18next', () => ({ useTranslation: jest.fn() }));

const provider = (id: string, name: string, category: string, extra: Partial<HomeServiceProvider> = {}): HomeServiceProvider => ({
  id, name, category, phone: '444 123 4567', website: null, socialUrl: null, mapsUrl: null, address: null,
  offersEmergency: false, googleRating: 4.8, googleReviewCount: 120, autoVerified: true, slwVerified: false,
  jev: { reliability: 2.6, satisfaction: 2.8, responsive: 0.9, seriousComplaints: 0.02 }, rankScore: 0.8, ...extra,
});

const providers = [
  provider('p1', 'Plomería Uno', 'plumbing'),
  provider('p2', 'Plomería Urgente', 'plumbing', { offersEmergency: true }),
  provider('p3', 'Plomería Tres', 'plumbing'),
  provider('p4', 'Plomería Cuatro', 'plumbing'),
  provider('e1', 'Electricista Uno', 'electrical'),
];

const gtag = jest.fn();
beforeEach(() => {
  (useTranslation as jest.Mock).mockReturnValue({ t: (key: string) => key });
  (window as unknown as { gtag: jest.Mock }).gtag = gtag;
});
afterEach(() => {
  jest.clearAllMocks();
  (global.fetch as jest.Mock)?.mockRestore?.();
});

const describeProblem = async (text: string, result: object) => {
  global.fetch = jest.fn().mockResolvedValue({ ok: true, json: async () => result }) as any;
  fireEvent.change(screen.getByLabelText('homeServiceFinder.placeholder'), { target: { value: text } });
  fireEvent.click(screen.getByText('homeServiceFinder.submit'));
  await waitFor(() => expect(global.fetch).toHaveBeenCalled());
};

describe('ServiceFinder', () => {
  it('shows the top 3 providers of the matched category, emergency first when urgent', async () => {
    render(<ServiceFinder providers={providers} />);
    await describeProblem('se reventó un tubo', { category: 'plumbing', alternatives: [], urgent: true });
    const names = (await screen.findAllByRole('heading', { level: 3 })).map(h => h.textContent);
    expect(names).toEqual(['Plomería Urgente', 'Plomería Uno', 'Plomería Tres']);
    expect(screen.getByText('homeServiceFinder.urgentNotice')).toBeInTheDocument();
    fireEvent.click(screen.getByText('homeServiceFinder.showMore'));
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(4);
  });

  it('offers only the alternatives when Jev is unsure', async () => {
    render(<ServiceFinder providers={providers} />);
    await describeProblem('algo raro en la pared', { category: null, alternatives: ['electrical', 'masonry'], urgent: false });
    expect(await screen.findByText('homeServiceFinder.unsure')).toBeInTheDocument();
    fireEvent.click(screen.getByText('homeServiceFinder.categories.electrical'));
    expect(screen.getByText('Electricista Uno')).toBeInTheDocument();
    expect(screen.queryByText('homeServiceFinder.categories.plumbing')).not.toBeInTheDocument();
  });

  it('lets visitors browse by category and tracks contact clicks', () => {
    render(<ServiceFinder providers={providers} />);
    fireEvent.click(screen.getByText('homeServiceFinder.categories.electrical'));
    fireEvent.click(screen.getByText('WhatsApp'));
    expect(gtag).toHaveBeenCalledWith('event', 'business_contact_click', expect.objectContaining({ contact_type: 'whatsapp', place_id: 'e1' }));
  });

  it('says so when a category has no providers yet', () => {
    render(<ServiceFinder providers={providers} />);
    fireEvent.click(screen.getByText('homeServiceFinder.categories.glass'));
    expect(screen.getByText('homeServiceFinder.noProviders')).toBeInTheDocument();
  });
});
