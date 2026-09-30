import { buildResetRedirectUrl, readRecoveryLinkError, validateNewPassword } from './password-reset';

describe('validateNewPassword', () => {
  it('rejects passwords shorter than 8 characters', () => {
    expect(validateNewPassword('short', 'short')).toBe('tooShort');
  });

  it('rejects mismatched confirmation', () => {
    expect(validateNewPassword('longenough1', 'longenough2')).toBe('mismatch');
  });

  it('accepts a valid matching password', () => {
    expect(validateNewPassword('longenough1', 'longenough1')).toBeNull();
  });
});

describe('buildResetRedirectUrl', () => {
  it('uses the bare path for English', () => {
    expect(buildResetRedirectUrl('https://www.sanluisway.com', 'en')).toBe('https://www.sanluisway.com/reset-password');
  });

  it('keeps the locale prefix for other languages', () => {
    expect(buildResetRedirectUrl('https://www.sanluisway.com', 'es')).toBe('https://www.sanluisway.com/es/reset-password');
  });
});

describe('readRecoveryLinkError', () => {
  it('reads the error from the query string', () => {
    expect(readRecoveryLinkError('?error=access_denied&error_description=Email+link+is+invalid+or+has+expired', ''))
      .toBe('Email link is invalid or has expired');
  });

  it('reads the error from the hash', () => {
    expect(readRecoveryLinkError('', '#error=access_denied&error_description=Token+has+expired'))
      .toBe('Token has expired');
  });

  it('returns null for a clean link', () => {
    expect(readRecoveryLinkError('?code=abc', '')).toBeNull();
  });
});
