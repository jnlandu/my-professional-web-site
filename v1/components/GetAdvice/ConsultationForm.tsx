'use client';

import { useState } from 'react';
import { Calendar, Clock, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    topic: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-white/5 rounded-lg border border-white/10 p-6">
      <h3 className="text-xl font-bold mb-6">Schedule Your Consultation</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <Input
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-white/5 border-white/10"
            />
          </div>
          <div>
            <Input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-white/5 border-white/10"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative">
            <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="pl-10 bg-white/5 border-white/10"
            />
          </div>
          <div className="relative">
            <Clock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input
              type="time"
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
              className="pl-10 bg-white/5 border-white/10"
            />
          </div>
        </div>

        <div>
          <Textarea
            placeholder="What would you like to discuss?"
            value={formData.topic}
            onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
            className="bg-white/5 border-white/10"
            rows={4}
          />
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
          <Video className="h-4 w-4" />
          <span>Consultation will be conducted via video call</span>
        </div>

        <Button type="submit" className="w-full bg-[#4B6BFB] hover:bg-[#4B6BFB]/90">
          Schedule Consultation
        </Button>
      </form>
    </div>
  );
};

export default ConsultationForm;