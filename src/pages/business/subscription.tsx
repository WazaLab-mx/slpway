import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { useAuth } from '@/lib/supabase-auth';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { SubscriptionEvents } from '@/lib/analytics';

/**
 * DEVELOPER NOTE:
 * There were issues with the business account signup flow:
 * 1. The subscription page used an incorrect import path for useAuth
 * 2. When a user selected "business" account type during signup, no record was being created in the business_profiles table
 * 3. The subscription page wasn't properly checking for/creating a business profile before redirecting to Stripe
 *
 * These issues have been fixed by:
 * 1. Correcting the useAuth import path in the subscription and subscription-success pages
 * 2. Adding code to create a business_profiles record during business signup
 * 3. Adding code to check for and create a business profile in the subscription page
 * 4. Adding additional debugging logs to help troubleshoot future issues
 */

const MONTHLY_PRICE = 250; // 250 MXN per month
const YEARLY_PRICE = 2500; // 2500 MXN per year (equivalent to 208.33 MXN per month)

// Define user type
interface User {
  id: string;
  email?: string;
}

const SubscriptionPage = () => {
  const router = useRouter();
  const { user, isLoading } = useAuth();
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'yearly'>('monthly');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Public accounts are intentionally disabled for now: pricing stays
  // readable by anyone; only the subscribe action branches on auth.

  // Track pricing page view
  useEffect(() => {
    SubscriptionEvents.viewPricing();
  }, []);

  const handleSelectPlan = (plan: 'monthly' | 'yearly') => {
    setSelectedPlan(plan);
    SubscriptionEvents.selectPlan(plan);
  };

  const handleSubscribe = async () => {
    if (isSubmitting) return;

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      console.log('Starting Featured ad checkout process');

      // Allow guest checkout - Stripe will collect email
      // If logged in, use their user_id; otherwise proceed as guest

      const userId = user ? (user as { id: string }).id : null;
      const userEmail = user ? (user as { email?: string }).email || '' : '';

      let businessId = null;

      // If user is logged in, check/create business profile
      if (userId) {
        console.log('Checking for business profile');
        const { data: businessProfile, error: profileError } = await supabase
          .from('business_profiles')
          .select("*")
          .eq('user_id', userId)
          .single();

        console.log('Business profile check result:', { businessProfile, profileError });

        if (profileError && profileError.code !== 'PGRST116') {
          console.error('Error checking business profile:', profileError);
          throw new Error('Error retrieving your business profile. Please try again.');
        }

        // If no business profile exists, create one
        businessId = businessProfile?.id;

        if (!businessProfile) {
          console.log('No business profile found, creating one');
          const { data: newProfile, error: insertError } = await supabase
            .from('business_profiles')
            .insert([
              {
                user_id: userId,
                business_name: (userEmail ? userEmail.split('@')[0] + ' Business' : 'Business'),
                subscription_status: 'inactive',
                business_category: 'Other'
              }
            ])
            .select("*")
            .single();

          console.log('Business profile creation result:', { newProfile, insertError });

          if (insertError) {
            console.error('Error creating business profile:', insertError);
            throw new Error('Error creating your business profile. Please try again.');
          }

          businessId = (newProfile as { id: string } | null)?.id;
        }

        console.log('Proceeding with Featured ad checkout, business ID:', businessId);
      } else {
        console.log('Guest checkout - no business profile yet');
      }

      const response = await fetch('/api/subscriptions/create-subscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          plan: selectedPlan,
          business_id: businessId,
          user_id: userId,
          customer_email: userEmail || undefined,
        }),
      });

      console.log('Subscription API response status:', response.status);

      const data = await response.json();
      console.log('Subscription API response data:', data);

      if (!response.ok) {
        throw new Error(data.message || 'Error creating subscription');
      }

      // Redirect to Stripe Checkout
      if (data.checkoutUrl) {
        const price = selectedPlan === 'monthly' ? MONTHLY_PRICE : YEARLY_PRICE;
        SubscriptionEvents.startCheckout(selectedPlan, price);
        window.location.href = data.checkoutUrl;
      } else {
        throw new Error('No checkout URL returned');
      }
    } catch (error) {
      console.error('Subscription error:', error);
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Hubo un error al procesar tu suscripción. Intenta de nuevo más tarde.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-primary">Loading...</div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Featured Directory Ad — Get Discovered by Expats | San Luis Way</title>
        <meta name="description" content="Get your business featured on San Luis Way and reach 15,000+ expats and visitors in San Luis Potosí. From $250 MXN/month with priority placement and analytics." />
      </Head>

      <div className="bg-gray-50 min-h-screen">
        {/* Value Proposition Hero */}
        <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                Anuncio Destacado / Featured Ad
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Destaca y Llega a 15,000+ Expats y Visitantes Mensuales
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                Anuncio destacado en San Luis Way — la guía #1 para extranjeros en San Luis Potosí.
                Alcanza una audiencia comprometida buscando activamente tus servicios.
              </p>
              <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto">
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-white">15K+</p>
                  <p className="text-xs text-gray-400">Monthly visitors</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-white">500+</p>
                  <p className="text-xs text-gray-400">Listed places</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-white">4</p>
                  <p className="text-xs text-gray-400">Languages</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Featured Section */}
        <section className="py-12 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Por qué destacar tu negocio en San Luis Way</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mb-3">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">Alcance multilingüe</h3>
                  <p className="text-gray-600 text-sm">Tu anuncio aparece en inglés, español, alemán y japonés</p>
                </div>
                <div className="text-center p-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-xl mb-3">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">Dashboard de analíticas</h3>
                  <p className="text-gray-600 text-sm">Rastrea vistas, contactos y engagement con tu anuncio</p>
                </div>
                <div className="text-center p-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-xl mb-3">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">Audiencia objetivo</h3>
                  <p className="text-gray-600 text-sm">Visitantes son expats y turistas buscando activamente servicios</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">

            {/* Business Navigation and Plans */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Sidebar */}
              <div className="md:col-span-1">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="space-y-1">
                    <p className="font-medium text-gray-900">Tu Negocio</p>
                    <p className="text-sm text-gray-500">{user?.email}</p>
                  </div>

                  <div className="mt-6 space-y-2">
                    <Link href="/business/dashboard" className="block w-full py-2 px-3 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50">
                      Dashboard
                    </Link>
                    <Link href="/business/profile" className="block w-full py-2 px-3 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50">
                      Business Profile
                    </Link>
                    <Link href="/business/subscription" className="block w-full py-2 px-3 text-sm font-medium rounded-md bg-gray-100 text-gray-900">
                      Anuncio Destacado
                    </Link>
                    <Link href="/account" className="block w-full py-2 px-3 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50">
                      Back to Account
                    </Link>
                  </div>
                </div>
              </div>

              {/* Main Content - Subscription Plans */}
              <div className="md:col-span-3">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Monthly Plan */}
                  <div
                    className={`bg-white rounded-xl shadow-md overflow-hidden border-2 transition-all ${
                      selectedPlan === 'monthly' ? 'border-primary' : 'border-transparent'
                    }`}
                    onClick={() => handleSelectPlan('monthly')}
                  >
                    <div className="p-8">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-bold text-gray-900">Plan Mensual</h3>
                        <div className="h-6 w-6 rounded-full border-2 border-gray-300 flex items-center justify-center">
                          {selectedPlan === 'monthly' && (
                            <div className="h-3 w-3 rounded-full bg-primary"></div>
                          )}
                        </div>
                      </div>
                      <div className="mb-4">
                        <span className="text-3xl font-bold">${MONTHLY_PRICE} MXN</span>
                        <span className="text-gray-500"> / mes</span>
                      </div>
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-start">
                          <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span>Posición destacada en el directorio</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span>Perfil personalizado con fotos y detalles</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span>Aparece primero en búsquedas</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span>Cancela cuando quieras</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Yearly Plan */}
                  <div
                    className={`bg-white rounded-xl shadow-md overflow-hidden border-2 transition-all relative ${
                      selectedPlan === 'yearly' ? 'border-primary' : 'border-transparent'
                    }`}
                    onClick={() => handleSelectPlan('yearly')}
                  >
                    <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 rounded-bl-lg text-sm font-medium">
                      Ahorra 17%
                    </div>
                    <div className="p-8">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-bold text-gray-900">Plan Anual</h3>
                        <div className="h-6 w-6 rounded-full border-2 border-gray-300 flex items-center justify-center">
                          {selectedPlan === 'yearly' && (
                            <div className="h-3 w-3 rounded-full bg-primary"></div>
                          )}
                        </div>
                      </div>
                      <div className="mb-4">
                        <span className="text-3xl font-bold">${YEARLY_PRICE} MXN</span>
                        <span className="text-gray-500"> / año</span>
                      </div>
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-start">
                          <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span>Posición destacada en el directorio</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span>Perfil personalizado con fotos y detalles</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span>Aparece primero en búsquedas</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span>Mejor valor (equivale a ${(YEARLY_PRICE / 12).toFixed(2)} MXN/mes)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {errorMessage && (
                  <div className="bg-red-50 text-red-800 p-4 rounded-lg mb-6">
                    {errorMessage}
                  </div>
                )}

                <div className="flex justify-center">
                  <button
                    onClick={handleSubscribe}
                    disabled={isSubmitting}
                    className={`
                      bg-primary text-white px-8 py-3 rounded-lg font-semibold text-lg
                      hover:bg-primary-dark transition-colors
                      disabled:opacity-50 disabled:cursor-not-allowed
                      min-w-[200px]
                    `}
                  >
                    {isSubmitting ? 'Procesando...' : 'Destacar mi Negocio'}
                  </button>
                </div>

                <div className="mt-12 text-center text-gray-600 text-sm">
                  <p>
                    Al suscribirte, aceptas nuestros <a href="/terms" className="text-primary hover:underline">Términos y Condiciones</a> y
                    nuestras <a href="/privacy" className="text-primary hover:underline">Políticas de Privacidad</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubscriptionPage;

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'es', ['common'])),
    },
  };
};