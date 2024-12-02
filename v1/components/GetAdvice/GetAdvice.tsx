'use client';

import { useState } from 'react';
import ServiceCard from './ServiceCard';
import CategoryTag from './CategoryTag';

const categories = [
  { id: 'everyone', label: 'For Everyone' },
  { id: 'business', label: 'For Business' },
];

const services = {
  everyone: [
    {
      title: 'AI Discovery Call',
      price: '$49',
      duration: '30 MINUTES',
      features: [
        'Personal AI project assessment',
        'Technical feasibility review',
        'Implementation recommendations',
        'Cost and timeline estimation',
        'Q&A session'
      ],
      buttonText: 'Book 30 mins',
    },
    {
      title: 'Deep Dive Session',
      price: '$89',
      duration: '1 HOUR',
      features: [
        'Comprehensive project planning',
        'Architecture review',
        'Best practices guidance',
        'Performance optimization tips',
        'Follow-up summary report'
      ],
      buttonText: 'Book 1-hour',
    }
  ],
  business: [
    {
      title: 'Enterprise AI Advisory',
      price: 'Custom',
      duration: 'BUSINESS',
      features: [
        'Full AI strategy development',
        'Technology stack assessment',
        'Team capability evaluation',
        'ROI analysis & planning',
        'Implementation roadmap'
      ],
      buttonText: 'Book Advisory Call',
      variant: 'business' as const
    }
  ]
};

const GetAdvice = () => {
  const [activeCategory, setActiveCategory] = useState('everyone');

  return (
    <section id="advice" className="py-24 bg-[#1A1D21]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Advice on AI
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Schedule a consultation with our AI experts to discuss your project
            and get personalized guidance
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          {categories.map((category) => (
            <CategoryTag
              key={category.id}
              label={category.label}
              isActive={activeCategory === category.id}
              onClick={() => setActiveCategory(category.id)}
            />
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services[activeCategory as keyof typeof services].map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
            />
          ))}
        </div>

        <div className="mt-16 text-center text-gray-400">
          <p className="max-w-2xl mx-auto">
            All consultations are conducted via video call. After booking,
            you'll receive a confirmation email with the meeting link and
            preparation guidelines.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GetAdvice;