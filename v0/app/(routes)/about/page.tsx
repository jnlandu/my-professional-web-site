import { Briefcase, Users, Target } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="pt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">About Us</h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">Pioneering AI Solutions</h2>
            <p className="text-gray-300 mb-6">
              At DonvitoCodes, we're passionate about leveraging artificial intelligence
              to solve complex business challenges. Our team of experts combines deep
              technical knowledge with practical business experience to deliver
              solutions that drive real results.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://picsum.photos/800/600"
              alt="Team collaboration"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Briefcase,
              title: 'Experience',
              description: '10+ years of expertise in AI and machine learning solutions',
            },
            {
              icon: Users,
              title: 'Team',
              description: 'Skilled professionals dedicated to your success',
            },
            {
              icon: Target,
              title: 'Mission',
              description: 'Transforming businesses through innovative AI solutions',
            },
          ].map((item) => (
            <div key={item.title} className="text-center">
              <item.icon className="w-12 h-12 text-[#4B6BFB] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}