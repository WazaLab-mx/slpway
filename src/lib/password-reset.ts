export const MIN_PASSWORD_LENGTH = 8;

export type NewPasswordError = 'tooShort' | 'mismatch' | null;

// Same rules as sign-up: at least 8 characters, and both fields must match.
export function validateNewPassword(password: string, confirmation: string): NewPasswordError {
  if (password.length < MIN_PASSWORD_LENGTH) return 'tooShort';
  if (password !== confirmation) return 'mismatch';
  return null;
}

// The recovery email links back to /reset-password in the reader's language.
export function buildResetRedirectUrl(origin: string, locale: string | undefined): string {
  const prefix = locale && locale !== 'en' ? `/${locale}` : '';
  return `${origin}${prefix}/reset-password`;
}

// Supabase reports expired or reused links as `error_description` in the
// query string (PKCE) or the hash (implicit flow).
export function readRecoveryLinkError(search: string, hash: string): string | null {
  for (const part of [search, hash]) {
    const params = new URLSearchParams(part.replace(/^[?#]/, ''));
    const description = params.get('error_description') || params.get('error');
    if (description) return description;
  }
  return null;
}
