'use client';

import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ServiceCardProps {
  title: string;
  price: string;
  duration: string;
  features: string[];
  buttonText: string;
  variant?: 'default' | 'business';
}

const ServiceCard = ({
  title,
  price,
  duration,
  features,
  buttonText,
  variant = 'default'
}: ServiceCardProps) => {
  return (
    <div className={`bg-white/5 rounded-lg border ${
      variant === 'business' ? 'border-[#27AE60]' : 'border-white/10'
    } p-8 hover:scale-105 transition-transform duration-300`}>
      <div className="mb-6">
        <span className={`text-sm font-medium ${
          variant === 'business' ? 'text-[#27AE60]' : 'text-[#4169E1]'
        } mb-2 block`}>
          {duration}
        </span>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold">{price}</span>
          {price !== 'Custom' && <span className="text-gray-400">/session</span>}
        </div>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className={`w-5 h-5 mt-0.5 ${
              variant === 'business' ? 'text-[#27AE60]' : 'text-[#4169E1]'
            }`} />
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>

      <Button 
        className={`w-full ${
          variant === 'business' 
            ? 'bg-[#27AE60] hover:bg-[#27AE60]/90' 
            : 'bg-[#4169E1] hover:bg-[#4169E1]/90'
        }`}
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default ServiceCard;