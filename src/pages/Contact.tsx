import { ArrowLeft, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function Contact() {
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl">Contact Us</h1>
          </div>

          <p className="opacity-75">
            We're here to help! If you have any questions, feedback, or need support, please don't hesitate to reach out.
          </p>

          <div className="space-y-6">
            <section>
              <h2 className="text-2xl md:text-3xl mb-4">Get in Touch</h2>
              <p className="opacity-75 leading-relaxed mb-6">
                For support inquiries, feature requests, or general questions, please contact us via email:
              </p>
              <div className="inline-block">
                <a 
                  href="mailto:hello@kirlosyousef.com"
                  className="flex items-center gap-3 bg-black text-white px-8 py-4 rounded-2xl hover:opacity-80 transition-opacity"
                >
                  <Mail size={20} />
                  <span className="whitespace-nowrap">hello@kirlosyousef.com</span>
                </a>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl mb-4">Response Time</h2>
              <p className="opacity-75 leading-relaxed">
                We typically respond to all inquiries within 24-48 hours during business days. We appreciate your patience and will get back to you as soon as possible.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl mb-4">What We Can Help With</h2>
              <ul className="space-y-2 opacity-75">
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-black rounded-full flex-shrink-0"></span>
                  <span>Technical support and troubleshooting</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-black rounded-full flex-shrink-0"></span>
                  <span>Account and subscription questions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-black rounded-full flex-shrink-0"></span>
                  <span>Feature requests and feedback</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-black rounded-full flex-shrink-0"></span>
                  <span>Privacy and data concerns</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-black rounded-full flex-shrink-0"></span>
                  <span>Partnership and business inquiries</span>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

