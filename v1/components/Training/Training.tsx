'use client';

import TrainingStats from './TrainingStats';
import CourseCard from './CourseCard';

const courses = [
  {
    id: 1,
    title: 'AI Fundamentals',
    description: 'Master the basics of artificial intelligence and machine learning',
    duration: '8 weeks',
    students: 1200,
    level: 'Beginner',
    image: 'https://picsum.photos/800/450?random=7',
  },
  {
    id: 2,
    title: 'Deep Learning Mastery',
    description: 'Advanced neural networks and deep learning architectures',
    duration: '12 weeks',
    students: 850,
    level: 'Advanced',
    image: 'https://picsum.photos/800/450?random=8',
  },
  {
    id: 3,
    title: 'Natural Language Processing',
    description: 'Build intelligent systems that understand human language',
    duration: '10 weeks',
    students: 950,
    level: 'Intermediate',
    image: 'https://picsum.photos/800/450?random=9',
  },
];

const Training = () => {
  return (
    <section id="training" className="py-24 bg-black/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Training Programs</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Enhance your AI skills with our comprehensive training programs led by industry experts
          </p>
        </div>

        <TrainingStats />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Training;