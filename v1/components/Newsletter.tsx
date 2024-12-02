'use client';

import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated with AI Insights
            </h2>
            <p className="text-gray-400 mb-6">
              Subscribe to our newsletter for the latest AI trends, industry news, and expert insights
              delivered straight to your inbox.
            </p>
            {isSubscribed ? (
              <div className="flex items-center space-x-2 text-green-500">
                <CheckCircle className="h-5 w-5" />
                <span>Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/5 border-white/10"
                />
                <Button type="submit" className="bg-[#4B6BFB] hover:bg-[#4B6BFB]/90">
                  Subscribe
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            )}
          </div>
          <div className="relative">
            <img
              src="https://picsum.photos/800/400"
              alt="AI Newsletter"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;