import { Shield, Lock, Trash2 } from 'lucide-react';

type Page = 'home' | 'privacy' | 'terms';

interface PrivacySectionProps {
  onNavigate: (page: Page) => void;
}

export function PrivacySection({ onNavigate }: PrivacySectionProps) {
  return (
    <section className="bg-black text-white py-20 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl lg:text-6xl mb-12 text-center">
          Your privacy matters.
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="space-y-3">
            <Shield size={32} strokeWidth={1.5} />
            <h3 className="text-xl md:text-2xl">On-device storage</h3>
            <p className="opacity-75">
              All recordings and transcripts are stored securely on your device. We don't have access to your data.
            </p>
          </div>

          <div className="space-y-3">
            <Lock size={32} strokeWidth={1.5} />
            <h3 className="text-xl md:text-2xl">AI on demand</h3>
            <p className="opacity-75">
              AI processing only happens when you request it. You control when and how your data is analyzed.
            </p>
          </div>

          <div className="space-y-3">
            <Trash2 size={32} strokeWidth={1.5} />
            <h3 className="text-xl md:text-2xl">Full control</h3>
            <p className="opacity-75">
              Delete individual recordings or clear all data anytime. Your information, your choice.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => onNavigate('privacy')}
            className="border border-white text-white px-8 py-4 rounded-2xl hover:bg-white hover:text-black transition-colors"
          >
            Read Privacy Policy
          </button>
          <button 
            onClick={() => onNavigate('terms')}
            className="border border-white text-white px-8 py-4 rounded-2xl hover:bg-white hover:text-black transition-colors"
          >
            View Terms
          </button>
        </div>
      </div>
    </section>
  );
}
