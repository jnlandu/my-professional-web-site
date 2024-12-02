import Hero from '@/components/Hero';
import About from '@/components/About';
import Features from '@/components/Features';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Features />
      <CTASection />
    </main>
  );
}