// Only same-site paths ("/business/dashboard"); rejects "//evil.com" and absolute URLs.
export function safeRedirectPath(value: unknown): string | undefined {
  if (typeof value !== 'string') return undefined;
  return value.startsWith('/') && !value.startsWith('//') && !value.startsWith('/\\') ? value : undefined;
}
