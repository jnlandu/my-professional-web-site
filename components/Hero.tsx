import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import NetworkBackground from './NetworkBackground';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <NetworkBackground />
      <div className="absolute inset-0 bg-black/70" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
          Transform Your Business with AI Solutions
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Leverage cutting-edge artificial intelligence to streamline operations,
          boost efficiency, and drive innovation in your organization.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="bg-[#4B6BFB] hover:bg-[#4B6BFB]/90 text-white px-8"
          >
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white/20 hover:bg-white/10 text-white px-8"
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;