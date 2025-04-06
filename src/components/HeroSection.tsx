
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-arabesque-pattern opacity-30 animate-pulse"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-qarawin-black/90 to-transparent"></div>
      
      <div className="container mx-auto px-6 md:px-12 z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
            <span className="block gradient-text mb-3">Qarawin</span>
            <span className="text-qarawin-cream">Uniting Moroccan Scientists & Deeptech Entrepreneurs</span>
          </h1>
          
          <p className="text-lg md:text-xl text-qarawin-cream/80 max-w-2xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: '0.4s' }}>
            The first global community inspired by Al Qarawiyyin, the world's oldest university,
            to connect brilliant minds and foster innovation.
          </p>
          
          <div className="pt-4 animate-fade-in opacity-0" style={{ animationDelay: '0.6s' }}>
            <Button className="bg-qarawin-red hover:bg-qarawin-red/90 text-white px-6 py-6 text-lg rounded-md shadow-lg transition-all duration-300 hover:shadow-qarawin-red/20 hover:shadow-xl hover:-translate-y-1">
              Join Our Community
            </Button>
          </div>
          
          <div className="pt-12 animate-fade-in opacity-0" style={{ animationDelay: '0.8s' }}>
            <button 
              onClick={scrollToAbout}
              className="flex flex-col items-center text-qarawin-cream/60 hover:text-qarawin-red transition-colors duration-300"
            >
              <span className="text-sm mb-2">Discover Our Mission</span>
              <ChevronDown className="animate-bounce" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
