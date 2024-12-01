import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/1920/1080"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Book a free consultation call with our AI experts and discover how we can help you leverage artificial intelligence for your business growth.
        </p>
        <Button
          size="lg"
          className="bg-[#4B6BFB] hover:bg-[#4B6BFB]/90 text-white px-8"
        >
          Schedule Your Call
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};

export default CTASection;