import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function PrivacyPolicy() {
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl">Privacy Policy</h1>
          </div>

          <p className="opacity-75">Last updated: November 25, 2025</p>

          <div className="space-y-6">
            <section>
              <h2 className="text-2xl md:text-3xl mb-4">Introduction</h2>
              <p className="opacity-75 leading-relaxed">
                At Revera AI, your privacy is our priority. This Privacy Policy explains how we handle your data when you use our iOS application for recording, transcribing, and summarizing conversations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl mb-4">Data Storage</h2>
              <p className="opacity-75 leading-relaxed mb-4">
                Revera AI is designed with privacy at its core. Here's what you need to know about your data:
              </p>
              <ul className="space-y-2 opacity-75">
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-black rounded-full flex-shrink-0"></span>
                  <span>All recordings, transcripts, and summaries are stored locally on your device</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-black rounded-full flex-shrink-0"></span>
                  <span>We do not have access to your recordings or transcripts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-black rounded-full flex-shrink-0"></span>
                  <span>You can delete individual recordings or all data at any time</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl mb-4">AI Processing</h2>
              <p className="opacity-75 leading-relaxed mb-4">
                When you use AI features for transcription and summarization:
              </p>
              <ul className="space-y-2 opacity-75">
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-black rounded-full flex-shrink-0"></span>
                  <span>AI processing only occurs when you explicitly request it</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-black rounded-full flex-shrink-0"></span>
                  <span>Audio may be temporarily processed by our AI partners with enterprise-grade security</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-black rounded-full flex-shrink-0"></span>
                  <span>Processed data is immediately deleted from AI partner servers after completion</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-black rounded-full flex-shrink-0"></span>
                  <span>We never use your recordings to train AI models</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl mb-4">Information We Collect</h2>
              <p className="opacity-75 leading-relaxed mb-4">
                We collect minimal information to provide and improve our service:
              </p>
              <ul className="space-y-2 opacity-75">
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-black rounded-full flex-shrink-0"></span>
                  <span>Usage analytics (anonymized and aggregated)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-black rounded-full flex-shrink-0"></span>
                  <span>Crash reports and diagnostic data to improve app stability</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl mb-4">Your Rights</h2>
              <p className="opacity-75 leading-relaxed mb-4">
                You have complete control over your data:
              </p>
              <ul className="space-y-2 opacity-75">
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-black rounded-full flex-shrink-0"></span>
                  <span>Access: View all data associated with your account</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-black rounded-full flex-shrink-0"></span>
                  <span>Delete: Remove individual recordings or your entire account</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-black rounded-full flex-shrink-0"></span>
                  <span>Export: Download your data in standard formats</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl mb-4">Third-Party Services</h2>
              <p className="opacity-75 leading-relaxed">
                Revera AI uses trusted third-party services for specific functions like payment processing and AI transcription. These partners are contractually obligated to protect your data and cannot use it for their own purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl mb-4">Children's Privacy</h2>
              <p className="opacity-75 leading-relaxed">
                Revera AI is not intended for users under 13 years of age. We do not knowingly collect personal information from children.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl mb-4">Changes to This Policy</h2>
              <p className="opacity-75 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl mb-4">Contact Us</h2>
              <p className="opacity-75 leading-relaxed">
                If you have questions about this Privacy Policy, please contact us at{' '}
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
