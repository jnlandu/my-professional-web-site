import { Bot, Brain, Cpu, LineChart, Users, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    title: 'Custom AI Solutions',
    description: 'Tailored artificial intelligence solutions designed specifically for your business needs',
    icon: Bot,
  },
  {
    title: 'Machine Learning',
    description: 'Advanced ML models that learn and adapt to your unique business patterns',
    icon: Brain,
  },
  {
    title: 'Process Automation',
    description: 'Streamline operations with intelligent automation systems',
    icon: Cpu,
  },
  {
    title: 'Data Analytics',
    description: 'Transform raw data into actionable business insights',
    icon: LineChart,
  },
  {
    title: 'Team Training',
    description: 'Comprehensive AI training programs for your development team',
    icon: Users,
  },
  {
    title: 'Fast Integration',
    description: 'Seamless integration with your existing systems and workflows',
    icon: Zap,
  },
];

const Features = () => {
  return (
    <section id="services" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover how our AI solutions can transform your business operations
            and drive sustainable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="bg-white/5 border-white/10 hover:border-[#4B6BFB]/50 transition-colors">
              <CardHeader>
                <feature.icon className="h-12 w-12 text-[#4B6BFB] mb-4" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;