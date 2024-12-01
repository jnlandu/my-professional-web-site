'use client';

import { useState } from 'react';
import { Menu, X, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Training', href: '#training' },
  { label: 'Get Advice', href: '#advice' },
  { label: 'Articles', href: '#articles' },
  { label: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-black/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-full">
        <div className="flex items-center justify-between h-full">
          <Link href="/" className="flex items-center space-x-2">
            <Brain className="w-8 h-8 text-[#4B6BFB]" />
            <span className="text-xl font-bold" style={{ color: '#4B6BFB' }}>
              Jérémie  <span className="text-[#4B6BFB]">Mabiala</span>
              </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Button
              className="bg-white/10 hover:bg-white/20 text-white transition-all"
            >
              Book a Call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-black/90 backdrop-blur-sm md:hidden">
            <div className="flex flex-col space-y-4 px-6 py-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                className="bg-white/10 hover:bg-white/20 text-white transition-all w-full"
              >
                Book a Call
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;