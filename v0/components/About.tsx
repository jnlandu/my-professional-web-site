import { Briefcase, Users, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-black/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Pioneering AI solutions to transform businesses and drive innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-4">Pioneering AI Solutions</h3>
            <p className="text-gray-300 mb-6">
              At Okapi AI, we're passionate about leveraging artificial intelligence
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

        <div className="grid md:grid-cols-3 gap-8">
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
            <div key={item.title} className="text-center p-6 bg-white/5 rounded-lg border border-white/10 hover:border-[#4B6BFB]/50 transition-colors">
              <item.icon className="w-12 h-12 text-[#4B6BFB] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;