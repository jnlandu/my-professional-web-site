'use client';

import { useState } from 'react';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CTO at TechCorp',
    image: 'https://picsum.photos/400/300',
    content: 'The AI solutions provided by OkapiAI have transformed our business operations. The results exceeded our expectations.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Director of Innovation',
    image: 'https://picsum.photos/400/301',
    content: "Implementing their AI systems has led to a 40% increase in efficiency. Their team's expertise is unmatched.",
    rating: 5,
  },
  {
    name: 'Emma Davis',
    role: 'Product Manager',
    image: 'https://picsum.photos/400/302',
    content: 'The custom AI solution perfectly addressed our unique challenges. Their approach to problem-solving is innovative.',
    rating: 5,
  },
];

const SocialProof = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover how our AI solutions have helped businesses achieve their goals
          </p>
        </div>

        <div className="relative">
          <Card className="bg-white/5 border-white/10">
            <CardContent className="grid md:grid-cols-2 gap-8 p-8">
              <div className="relative">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="rounded-lg shadow-xl w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-lg mb-6 text-gray-300">
                  "{testimonials[currentIndex].content}"
                </p>
                <div>
                  <h4 className="font-bold text-lg">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-400">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="border-white/10 hover:bg-white/10"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="border-white/10 hover:bg-white/10"
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;