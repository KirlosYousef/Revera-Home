import { Mic, FileText, Sparkles, Search } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Mic,
      title: 'Smart recording',
      points: [
        'Crystal-clear audio capture',
        'Background recording support',
        'Handles interruptions seamlessly',
      ],
    },
    {
      icon: FileText,
      title: 'Automatic transcripts',
      points: [
        'Speech-to-text in real time',
        'Searchable conversation history',
        'Speaker identification',
      ],
    },
    {
      icon: Sparkles,
      title: 'Summaries & action items',
      points: [
        'AI-powered key points extraction',
        'Automatic action item detection',
        'Quick review mode',
      ],
    },
    {
      icon: Search,
      title: 'Search & organize',
      points: [
        'Date-grouped timeline view',
        'Powerful search across all recordings',
        'Quick filters and tags',
      ],
    },
  ];

  return (
    <section id="features" className="bg-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl lg:text-6xl mb-16 text-center">
          Built for real conversations.
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="border border-black rounded-2xl p-8 bg-white">
              <feature.icon size={40} className="mb-6" strokeWidth={1.5} />
              <h3 className="text-2xl md:text-3xl mb-4">{feature.title}</h3>
              <ul className="space-y-2">
                {feature.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-black rounded-full flex-shrink-0"></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
