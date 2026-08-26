import { validateAndCleanUrls } from './newsletter-links';

const OK = { ok: true, status: 200 } as Response;
const NOT_FOUND = { ok: false, status: 404 } as Response;

function abortError(): Error {
  const err = new Error('The operation was aborted');
  err.name = 'AbortError';
  return err;
}

describe('validateAndCleanUrls — sanluisway.com HEAD verification', () => {
  const originalFetch = global.fetch;
  let fetchMock: jest.Mock;

  beforeEach(() => {
    fetchMock = jest.fn();
    global.fetch = fetchMock as unknown as typeof fetch;
    jest.spyOn(console, 'log').mockImplementation(() => {});
    jest.spyOn(console, 'warn').mockImplementation(() => {});
  });

  afterEach(() => {
    global.fetch = originalFetch;
    jest.restoreAllMocks();
  });

  it('keeps a link that returns 200', async () => {
    fetchMock.mockResolvedValue(OK);
    const html = '<a href="https://www.sanluisway.com/events/fenapo-2026">x</a>';
    const result = await validateAndCleanUrls(html);
    expect(result.html).toBe(html);
    expect(result.brokenLinks).toEqual([]);
  });

  it('replaces a link that definitively returns 404', async () => {
    fetchMock.mockResolvedValue(NOT_FOUND);
    const result = await validateAndCleanUrls('<a href="https://www.sanluisway.com/nope">x</a>');
    expect(result.html).toContain('href="https://www.sanluisway.com/events"');
    expect(result.brokenLinks).toEqual(['https://www.sanluisway.com/nope']);
  });

  it('retries once after a timeout and keeps the link when the retry succeeds', async () => {
    fetchMock.mockRejectedValueOnce(abortError()).mockResolvedValueOnce(OK);
    const html = '<a href="https://www.sanluisway.com/blog/que-comer-en-la-fenapo-2026">x</a>';
    const result = await validateAndCleanUrls(html);
    expect(fetchMock).toHaveBeenCalledTimes(2);
    expect(result.html).toBe(html);
    expect(result.brokenLinks).toEqual([]);
  });

  it('does NOT rewrite a link that is merely unreachable (timeout on both attempts)', async () => {
    fetchMock.mockRejectedValue(abortError());
    const html = '<a href="https://www.sanluisway.com/events/fenapo-2026">x</a>';
    const result = await validateAndCleanUrls(html);
    expect(fetchMock).toHaveBeenCalledTimes(2);
    expect(result.html).toBe(html);
    expect(result.brokenLinks).toEqual([]);
    expect(result.unreachableLinks).toEqual(['https://www.sanluisway.com/events/fenapo-2026']);
  });
});
