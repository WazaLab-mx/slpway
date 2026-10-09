import React from 'react';
import { render, waitFor } from '@testing-library/react';
import AdUnit from './AdUnit';

beforeEach(() => {
  (window as unknown as { adsbygoogle: unknown[] }).adsbygoogle = [];
});

const slot = (container: HTMLElement) => {
  const ins = container.querySelector('ins.adsbygoogle') as HTMLElement;
  return { ins, wrapper: ins.parentElement as HTMLElement };
};

describe('AdUnit', () => {
  it('reserves 280px while the ad loads, to avoid layout shift', () => {
    const { container } = render(<AdUnit placement="top-banner" />);
    expect(slot(container).wrapper.style.minHeight).toBe('280px');
  });

  it('releases the reserved space when AdSense reports no ad', async () => {
    const { container } = render(<AdUnit placement="top-banner" />);
    const { ins, wrapper } = slot(container);
    ins.setAttribute('data-ad-status', 'unfilled');
    await waitFor(() => expect(parseFloat(wrapper.style.minHeight)).toBe(0));
    expect(ins.style.display).toBe('none');
  });

  it('keeps the space when an ad is filled', async () => {
    const { container } = render(<AdUnit placement="in-article" />);
    const { ins, wrapper } = slot(container);
    ins.setAttribute('data-ad-status', 'filled');
    await new Promise((r) => setTimeout(r, 0));
    expect(wrapper.style.minHeight).toBe('280px');
  });
});
