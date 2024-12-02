'use client';

import { Calendar, MessageSquare, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ExpertCardProps {
  name: string;
  title: string;
  specialization: string;
  rating: number;
  consultations: number;
  availability: string;
  image: string;
}

const ExpertCard = ({
  name,
  title,
  specialization,
  rating,
  consultations,
  availability,
  image,
}: ExpertCardProps) => {
  return (
    <div className="bg-white/5 rounded-lg overflow-hidden border border-white/10 hover:border-[#4B6BFB]/50 transition-all p-6">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h3 className="text-lg font-bold">{name}</h3>
          <p className="text-gray-400 text-sm">{title}</p>
        </div>
      </div>

      <p className="text-gray-300 mb-4">{specialization}</p>

      <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-300">
        <div className="flex items-center gap-2">
          <Star className="w-4 h-4 text-yellow-500" />
          <span>{rating.toFixed(1)} Rating</span>
        </div>
        <div className="flex items-center gap-2">
          <MessageSquare className="w-4 h-4 text-[#4B6BFB]" />
          <span>{consultations}+ Consultations</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-[#4B6BFB]" />
          <span>{availability}</span>
        </div>
      </div>

      <Button className="w-full bg-[#4B6BFB] hover:bg-[#4B6BFB]/90">
        Book Consultation
      </Button>
    </div>
  );
};

export default ExpertCard;