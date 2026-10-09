import React from 'react';
import { render, waitFor, act } from '@testing-library/react';
import AdUnit, { AD_WAIT_MS } from './AdUnit';

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

describe('AdUnit when AdSense never answers', () => {
  beforeEach(() => jest.useFakeTimers());
  afterEach(() => jest.useRealTimers());

  it('releases the space if no ad shows up a few seconds after the slot is processed', async () => {
    const { container } = render(<AdUnit placement="top-banner" />);
    const { ins, wrapper } = slot(container);
    await act(async () => { ins.setAttribute('data-adsbygoogle-status', 'done'); });
    await act(async () => { jest.advanceTimersByTime(AD_WAIT_MS); });
    expect(parseFloat(wrapper.style.minHeight)).toBe(0);
  });

  it('opens the space again if the ad arrives late', async () => {
    const { container } = render(<AdUnit placement="top-banner" />);
    const { ins, wrapper } = slot(container);
    await act(async () => { ins.setAttribute('data-adsbygoogle-status', 'done'); });
    await act(async () => { jest.advanceTimersByTime(AD_WAIT_MS); });
    await act(async () => { ins.appendChild(document.createElement('iframe')); });
    expect(wrapper.style.minHeight).toBe('280px');
  });
});
