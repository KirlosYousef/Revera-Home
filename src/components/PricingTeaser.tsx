import { Check } from 'lucide-react';

export function PricingTeaser() {
  const features = [
    'Unlimited recordings',
    'Advanced AI summaries',
    'Priority transcription',
    'Export & share',
    'Premium support',
    'Future features included',
  ];

  return (
    <section id="pricing" className="bg-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 text-center">
          Simple, premium plan.
        </h2>
        <p className="text-xl md:text-2xl text-center mb-16 opacity-75">
          One plan. All features. No limits.
        </p>

        <div className="max-w-md mx-auto">
          <div className="border-2 border-black rounded-2xl p-8 bg-white">
            <h3 className="text-3xl md:text-4xl mb-6">Premium</h3>
            
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Check size={24} strokeWidth={2} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <a 
              href="https://apps.apple.com/us/app/id6748306699"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-black text-white px-8 py-4 rounded-2xl hover:opacity-80 transition-opacity inline-block text-center"
            >
              Get Revera AI
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
