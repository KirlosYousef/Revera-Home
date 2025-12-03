import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function Terms() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      
      <main className="max-w-3xl mx-auto px-6 py-16">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 mb-8 hover:opacity-50 transition-opacity"
        >
          <ArrowLeft size={20} />
          Back to home
        </button>

        <div className="space-y-8">
          <div>
            <p className="opacity-50 mb-2">Revera AI</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl">Terms & Conditions</h1>
          </div>

          <p className="opacity-75">Last updated: November 25, 2025</p>

          <div className="space-y-6">
            <section>
              <h2 className="text-2xl md:text-3xl mb-4">Acceptance of Terms</h2>
              <p className="opacity-75 leading-relaxed">
                By accessing and using Revera AI, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these Terms & Conditions, please do not use our service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl mb-4">License to Use</h2>
              <p className="opacity-75 leading-relaxed mb-4">
                We grant you a limited, non-exclusive, non-transferable license to use Revera AI for your personal or internal business purposes, subject to these terms:
              </p>
              <ul className="space-y-2 opacity-75">
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-black rounded-full flex-shrink-0"></span>
                  <span>You may not copy, modify, or distribute the app without authorization</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-black rounded-full flex-shrink-0"></span>
                  <span>You may not reverse engineer or attempt to extract source code</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-black rounded-full flex-shrink-0"></span>
                  <span>You may not remove any proprietary notices from the application</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl mb-4">User Responsibilities</h2>
              <p className="opacity-75 leading-relaxed mb-4">
                When using Revera AI, you agree to:
              </p>
              <ul className="space-y-2 opacity-75">
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-black rounded-full flex-shrink-0"></span>
                  <span>Comply with all applicable laws and regulations regarding recording conversations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-black rounded-full flex-shrink-0"></span>
                  <span>Obtain necessary consent from all parties before recording conversations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-black rounded-full flex-shrink-0"></span>
                  <span>Not use the service for any illegal or unauthorized purpose</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-black rounded-full flex-shrink-0"></span>
                  <span>Maintain the security of your account credentials</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl mb-4">Recording Consent</h2>
              <p className="opacity-75 leading-relaxed">
                You are solely responsible for ensuring you have the legal right to record conversations. Laws regarding recording vary by jurisdiction and may require consent from all parties. Revera AI is a tool; you are responsible for how you use it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl mb-4">Subscription and Payments</h2>
              <p className="opacity-75 leading-relaxed mb-4">
                Premium subscriptions are billed according to the plan you select:
              </p>
              <ul className="space-y-2 opacity-75">
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-black rounded-full flex-shrink-0"></span>
                  <span>Subscriptions automatically renew unless cancelled before the renewal date</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-black rounded-full flex-shrink-0"></span>
                  <span>You can cancel your subscription at any time through your account settings</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-black rounded-full flex-shrink-0"></span>
                  <span>Refunds are handled according to the App Store's refund policy</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-black rounded-full flex-shrink-0"></span>
                  <span>We may change subscription pricing at any time</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl mb-4">Intellectual Property</h2>
              <p className="opacity-75 leading-relaxed mb-4">
                Ownership of content and intellectual property:
              </p>
              <ul className="space-y-2 opacity-75">
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-black rounded-full flex-shrink-0"></span>
                  <span>You retain all rights to your recordings and transcripts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-black rounded-full flex-shrink-0"></span>
                  <span>Revera AI and its original content remain our exclusive property</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-black rounded-full flex-shrink-0"></span>
                  <span>All trademarks, logos, and service marks are owned by us</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl mb-4">Limitation of Liability</h2>
              <p className="opacity-75 leading-relaxed mb-4">
                To the fullest extent permitted by law:
              </p>
              <ul className="space-y-2 opacity-75">
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-black rounded-full flex-shrink-0"></span>
                  <span>Revera AI is provided "as is" without warranties of any kind</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-black rounded-full flex-shrink-0"></span>
                  <span>We are not liable for any indirect, incidental, or consequential damages</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-black rounded-full flex-shrink-0"></span>
                  <span>We do not guarantee uninterrupted or error-free service</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-black rounded-full flex-shrink-0"></span>
                  <span>You are responsible for backing up your recordings</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl mb-4">Service Modifications</h2>
              <p className="opacity-75 leading-relaxed">
                We reserve the right to modify, suspend, or discontinue any part of Revera AI at any time. We will provide reasonable notice of significant changes that affect core functionality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl mb-4">Termination</h2>
              <p className="opacity-75 leading-relaxed mb-4">
                We may terminate or suspend your account if:
              </p>
              <ul className="space-y-2 opacity-75">
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-black rounded-full flex-shrink-0"></span>
                  <span>You breach these Terms & Conditions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-black rounded-full flex-shrink-0"></span>
                  <span>You use the service for illegal purposes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-black rounded-full flex-shrink-0"></span>
                  <span>Your account remains inactive for an extended period</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl mb-4">Governing Law</h2>
              <p className="opacity-75 leading-relaxed">
                These Terms & Conditions are governed by and construed in accordance with applicable laws. Any disputes shall be resolved through binding arbitration or in the courts of our registered jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl mb-4">Changes to Terms</h2>
              <p className="opacity-75 leading-relaxed">
                We may revise these terms at any time. Continued use of Revera AI after changes constitutes acceptance of the revised terms. We will notify users of material changes via email or app notification.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl mb-4">Contact Information</h2>
              <p className="opacity-75 leading-relaxed">
                For questions about these Terms & Conditions, please contact us at{' '}
                <a href="mailto:hello@kirlosyousef.com" className="underline hover:opacity-50 transition-opacity">
                  hello@kirlosyousef.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
