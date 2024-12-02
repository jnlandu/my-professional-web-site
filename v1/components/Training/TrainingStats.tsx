'use client';

import { Users, BookOpen, Trophy, Clock } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '5,000+',
    label: 'Students Trained',
  },
  {
    icon: BookOpen,
    value: '50+',
    label: 'AI Courses',
  },
  {
    icon: Trophy,
    value: '95%',
    label: 'Success Rate',
  },
  {
    icon: Clock,
    value: '24/7',
    label: 'Support',
  },
];

const TrainingStats = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="text-center p-6 bg-white/5 rounded-lg border border-white/10"
        >
          <stat.icon className="w-8 h-8 text-[#4B6BFB] mx-auto mb-4" />
          <div className="text-2xl font-bold mb-1">{stat.value}</div>
          <div className="text-gray-400">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default TrainingStats;