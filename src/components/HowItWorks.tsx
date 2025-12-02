export function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: 'Record',
      description: 'Start recording with one tap during meetings, calls, or voice notes.',
    },
    {
      number: 2,
      title: 'Transcribe',
      description: 'AI automatically converts speech to text in real time.',
    },
    {
      number: 3,
      title: 'Review & search',
      description: 'Browse transcripts, search for keywords, and find what you need.',
    },
    {
      number: 4,
      title: 'Ask & share',
      description: 'Get summaries, extract action items, and share key insights.',
    },
  ];

  return (
    <section id="how-it-works" className="bg-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl lg:text-6xl mb-16 text-center">
          How it works
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-16 h-16 border-2 border-black rounded-full flex items-center justify-center bg-white">
                  <span className="text-2xl">{step.number}</span>
                </div>
              </div>
              <h3 className="text-xl md:text-2xl">{step.title}</h3>
              <p className="opacity-75">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
