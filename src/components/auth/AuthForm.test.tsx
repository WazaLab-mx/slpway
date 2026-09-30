import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import { useAuth } from '@/lib/supabase-auth';
import AuthForm from './AuthForm';

const mockPush = jest.fn();
jest.mock('next/router', () => ({ useRouter: () => ({ push: mockPush }) }));
jest.mock('react-toastify', () => ({ toast: { success: jest.fn(), error: jest.fn() } }));
jest.mock('@/lib/supabase-auth', () => ({ useAuth: jest.fn() }));

const signIn = jest.fn();
const signUp = jest.fn();
beforeEach(() => {
  jest.useFakeTimers();
  (useAuth as jest.Mock).mockReturnValue({ signIn, signUp });
});
afterEach(() => {
  jest.useRealTimers();
  jest.clearAllMocks();
});

const submitSignIn = () => {
  fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'owner@example.com' } });
  fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'longenough1' } });
  fireEvent.submit(screen.getByLabelText('Email').closest('form') as HTMLFormElement);
};

describe('AuthForm sign in', () => {
  it('signs in through Supabase (no /api/signin call) and goes to the requested page', async () => {
    const fetchSpy = jest.fn();
    (global as unknown as { fetch: jest.Mock }).fetch = fetchSpy;
    signIn.mockResolvedValue({ data: { user: { id: 'u1' } }, error: null });
    render(<AuthForm mode="signin" redirectPath="/business/dashboard" />);
    submitSignIn();
    await waitFor(() => expect(signIn).toHaveBeenCalledWith('owner@example.com', 'longenough1'));
    act(() => { jest.advanceTimersByTime(1000); });
    expect(mockPush).toHaveBeenCalledWith('/business/dashboard');
    expect(fetchSpy).not.toHaveBeenCalled();
  });

  it('defaults to /account after sign in', async () => {
    signIn.mockResolvedValue({ data: { user: { id: 'u1' } }, error: null });
    render(<AuthForm mode="signin" />);
    submitSignIn();
    await waitFor(() => expect(signIn).toHaveBeenCalled());
    act(() => { jest.advanceTimersByTime(1000); });
    expect(mockPush).toHaveBeenCalledWith('/account');
  });

  it('shows the Supabase error for wrong credentials', async () => {
    signIn.mockResolvedValue({ data: null, error: { message: 'Invalid login credentials' } });
    render(<AuthForm mode="signin" />);
    submitSignIn();
    await waitFor(() => expect(screen.getByText('Invalid login credentials')).toBeInTheDocument());
    expect(mockPush).not.toHaveBeenCalled();
  });
});
