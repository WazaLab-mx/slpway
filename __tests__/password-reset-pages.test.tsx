import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { useTranslation } from 'next-i18next';
import { useAuth } from '@/lib/supabase-auth';
import ForgotPasswordPage from '@/pages/forgot-password';
import ResetPasswordPage from '@/pages/reset-password';

jest.mock('next-i18next', () => ({ useTranslation: jest.fn() }));
jest.mock('next-i18next/serverSideTranslations', () => ({ serverSideTranslations: jest.fn() }));
jest.mock('@/lib/supabase-auth', () => ({ useAuth: jest.fn() }));

const forgotPassword = jest.fn();
const resetPassword = jest.fn();
const mockAuth = (overrides: object = {}) =>
  (useAuth as jest.Mock).mockReturnValue({ session: null, isLoading: false, forgotPassword, resetPassword, ...overrides });

beforeEach(() => {
  (useTranslation as jest.Mock).mockReturnValue({ t: (key: string) => key });
  window.history.replaceState(null, '', '/reset-password');
});
afterEach(() => jest.clearAllMocks());

describe('ForgotPasswordPage', () => {
  it('requests the recovery email and shows the neutral confirmation', async () => {
    mockAuth();
    forgotPassword.mockResolvedValue({ data: {}, error: null });
    render(<ForgotPasswordPage />);
    fireEvent.change(screen.getByLabelText('passwordReset.emailLabel'), { target: { value: ' owner@example.com ' } });
    fireEvent.click(screen.getByText('passwordReset.sendLink'));
    await waitFor(() => expect(screen.getByText('passwordReset.sent')).toBeInTheDocument());
    expect(forgotPassword).toHaveBeenCalledWith('owner@example.com', undefined);
  });

  it('asks to retry when Supabase rate-limits the request', async () => {
    mockAuth();
    forgotPassword.mockResolvedValue({ data: null, error: { status: 429, message: 'rate limit' } });
    render(<ForgotPasswordPage />);
    fireEvent.change(screen.getByLabelText('passwordReset.emailLabel'), { target: { value: 'owner@example.com' } });
    fireEvent.click(screen.getByText('passwordReset.sendLink'));
    await waitFor(() => expect(screen.getByText('passwordReset.sendError')).toBeInTheDocument());
  });
});

describe('ResetPasswordPage', () => {
  it('explains an invalid link when there is no recovery session', () => {
    mockAuth({ session: null });
    render(<ResetPasswordPage />);
    expect(screen.getByText('passwordReset.invalidLink')).toBeInTheDocument();
  });

  it('shows the expired-link message when Supabase reports an error', async () => {
    window.history.replaceState(null, '', '/reset-password?error=access_denied&error_description=expired');
    mockAuth({ session: { access_token: 'x' } });
    render(<ResetPasswordPage />);
    await waitFor(() => expect(screen.getByText('passwordReset.invalidLink')).toBeInTheDocument());
  });

  it('blocks mismatched passwords before calling Supabase', () => {
    mockAuth({ session: { access_token: 'x' } });
    render(<ResetPasswordPage />);
    fireEvent.change(screen.getByLabelText('passwordReset.newPassword'), { target: { value: 'newpassword1' } });
    fireEvent.change(screen.getByLabelText('passwordReset.confirmPassword'), { target: { value: 'newpassword2' } });
    fireEvent.click(screen.getByText('passwordReset.save'));
    expect(screen.getByText('passwordReset.errors.mismatch')).toBeInTheDocument();
    expect(resetPassword).not.toHaveBeenCalled();
  });

  it('saves the new password and links to the dashboard', async () => {
    mockAuth({ session: { access_token: 'x' } });
    resetPassword.mockResolvedValue({ data: {}, error: null });
    render(<ResetPasswordPage />);
    fireEvent.change(screen.getByLabelText('passwordReset.newPassword'), { target: { value: 'newpassword1' } });
    fireEvent.change(screen.getByLabelText('passwordReset.confirmPassword'), { target: { value: 'newpassword1' } });
    fireEvent.click(screen.getByText('passwordReset.save'));
    await waitFor(() => expect(screen.getByText('passwordReset.done')).toBeInTheDocument());
    expect(resetPassword).toHaveBeenCalledWith('newpassword1');
    expect(screen.getByRole('link', { name: /passwordReset.goToDashboard/ }).getAttribute('href')).toBe('/business/dashboard');
  });
});
