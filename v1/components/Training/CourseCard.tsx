'use client';

import { Clock, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CourseCardProps {
  title: string;
  description: string;
  duration: string;
  students: number;
  level: string;
  image: string;
}

const CourseCard = ({ title, description, duration, students, level, image }: CourseCardProps) => {
  return (
    <div className="bg-white/5 rounded-lg overflow-hidden border border-white/10 hover:border-[#4B6BFB]/50 transition-all">
      <div className="aspect-video relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-300">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#4B6BFB]" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-[#4B6BFB]" />
            <span>{students} students</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-[#4B6BFB]" />
            <span>{level}</span>
          </div>
        </div>

        <Button className="w-full bg-[#4B6BFB] hover:bg-[#4B6BFB]/90">
          Enroll Now
        </Button>
      </div>
    </div>
  );
};

export default CourseCard;