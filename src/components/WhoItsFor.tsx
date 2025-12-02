import { Users, Briefcase, GraduationCap, Newspaper } from 'lucide-react';

export function WhoItsFor() {
  const audiences = [
    {
      icon: Users,
      title: 'Teams & meetings',
      description: 'Keep everyone aligned with automatic meeting notes and action items.',
    },
    {
      icon: Briefcase,
      title: 'Freelancers & consultants',
      description: 'Never miss client details. Track discussions and deliverables effortlessly.',
    },
    {
      icon: GraduationCap,
      title: 'Students & researchers',
      description: 'Capture lectures and interviews. Search and review anytime.',
    },
    {
      icon: Newspaper,
      title: 'Journalists & creators',
      description: 'Record interviews and get accurate transcripts for your stories.',
    },
  ];

  return (
    <section className="bg-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl lg:text-6xl mb-16 text-center">
          Made for people who live in conversations.
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {audiences.map((audience, index) => (
            <div key={index} className="border border-black rounded-2xl p-8 bg-white">
              <audience.icon size={40} className="mb-6" strokeWidth={1.5} />
              <h3 className="text-2xl md:text-3xl mb-3">{audience.title}</h3>
              <p className="opacity-75">{audience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
