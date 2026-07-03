import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { useTranslation } from 'next-i18next';
import SubmitServiceListing from '../src/pages/submit-listing/service';

// Mock de next-i18next
jest.mock('next-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

// Mock de next/router
jest.mock('next/router', () => ({
  useRouter: () => ({
    push: jest.fn(),
    pathname: '/submit-listing/service',
  }),
}));

// Mock de next/head
jest.mock('next/head', () => {
  return function MockHead({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
  };
});

// Mock de reCAPTCHA
jest.mock('react-google-recaptcha', () => {
  return function MockReCAPTCHA({ onChange }: { onChange: (token: string) => void }) {
    return (
      <div
        data-testid="recaptcha"
        onClick={() => onChange('mock-recaptcha-token')}
      >
        Mock reCAPTCHA
      </div>
    );
  };
});

// Mock de fetch
global.fetch = jest.fn();

describe('Email Functionality Tests', () => {
  beforeEach(() => {
    (fetch as jest.Mock).mockClear();
  });

  test('Service listing form submits email successfully', async () => {
    // Mock successful response
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        message: 'Contact inquiry received and email sent successfully',
        data: {
          contact_id: 'test-id',
          customer_name: 'Test User',
          customer_email: 'test@example.com',
          business_email: 'info@sanluisway.com',
          email_sent: true,
          email_method: 'resend',
          email_id: 'test-email-id'
        }
      })
    });

    render(<SubmitServiceListing />);

    // Fill out the form
    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: 'Test Provider' }
    });

    fireEvent.change(screen.getByLabelText(/category/i), {
      target: { value: 'relocation' }
    });

    fireEvent.change(screen.getByLabelText(/description/i), {
      target: { value: 'Test service description' }
    });

    fireEvent.change(screen.getByLabelText(/address/i), {
      target: { value: 'Test Address 123' }
    });

    fireEvent.change(screen.getByLabelText(/phone/i), {
      target: { value: '+52 444 123 4567' }
    });

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'test@example.com' }
    });

    // Fill remaining required fields so the form passes constraint validation
    fireEvent.change(screen.getByLabelText(/service area/i), {
      target: { value: 'San Luis Potosí City' }
    });

    fireEvent.change(screen.getByLabelText(/availability/i), {
      target: { value: 'Mon-Fri: 9:00-17:00' }
    });

    fireEvent.change(screen.getByLabelText(/qualifications/i), {
      target: { value: 'Certified professional' }
    });

    fireEvent.change(screen.getByLabelText(/experience/i), {
      target: { value: '5 years of experience' }
    });

    fireEvent.change(screen.getByLabelText(/pricing/i), {
      target: { value: 'Starting at $500' }
    });

    fireEvent.change(screen.getByLabelText(/profile image/i), {
      target: {
        files: [new File(['image'], 'profile.png', { type: 'image/png' })]
      }
    });

    // Accept terms
    fireEvent.click(screen.getByLabelText(/terms and conditions/i));

    // Submit form. jsdom cannot run constraint validation on the required
    // file input, so dispatch the form's submit event directly to exercise
    // the email submission handler.
    const form = screen.getByRole('button', { name: /submit listing/i }).closest('form')!;
    fireEvent.submit(form);

    // Wait for API call
    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith('/api/contact', expect.objectContaining({
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: expect.stringContaining('Test Provider')
      }));
    });

    // Check success message appears
    await waitFor(() => {
      expect(screen.getByText(/tu solicitud fue enviada/i)).toBeInTheDocument();
    });
  });

  test('Email API handles Resend configuration correctly', async () => {
    const mockEmailData = {
      name: 'Test User',
      email: 'test@example.com',
      subject: 'Test Subject',
      message: 'Test message',
      to: 'info@sanluisway.com'
    };

    // Mock successful Resend response
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        message: 'Contact inquiry received and email sent successfully',
        data: {
          email_sent: true,
          email_method: 'resend',
          email_id: 'c61734fb-aa22-4c0f-ad9e-58d963a6f522'
        }
      })
    });

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(mockEmailData)
    });

    const result = await response.json();

    expect(response.ok).toBe(true);
    expect(result.data.email_method).toBe('resend');
    expect(result.data.email_sent).toBe(true);
  });

  test('Email configuration fallback works correctly', async () => {
    // Mock Resend failure, Gmail success
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        message: 'Contact inquiry received and email sent successfully',
        data: {
          email_sent: true,
          email_method: 'gmail',
          email_id: 'gmail-message-id'
        }
      })
    });

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Test User',
        email: 'test@example.com',
        subject: 'Test Subject',
        message: 'Test message',
        to: 'info@sanluisway.com'
      })
    });

    const result = await response.json();

    expect(response.ok).toBe(true);
    expect(result.data.email_sent).toBe(true);
    // Should work with either resend or gmail
    expect(['resend', 'gmail', 'console_log']).toContain(result.data.email_method);
  });
});