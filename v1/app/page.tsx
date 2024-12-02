import Hero from '@/components/Hero';
import About from '@/components/About';
import Features from '@/components/Features';
import Training from '@/components/Training/Training';
import GetAdvice from '@/components/GetAdvice/GetAdvice';
import VideoGallery from '@/components/VideoGallery/VideoGallery';
import Newsletter from '@/components/Newsletter';
import SocialProof from '@/components/SocialProof';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Features />
      <Training />
      <GetAdvice />
      <VideoGallery />
      <Newsletter />
      <SocialProof />
      <CTASection />
    </main>
  );
}