
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-arabesque-pattern opacity-30"></div>
      
      <div className="container mx-auto px-6 md:px-12 z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
            <span className="block gradient-text">Qarawin</span>
            <span className="text-qarawin-cream">Uniting Moroccan Scientists & Deeptech Entrepreneurs</span>
          </h1>
          
          <p className="text-lg md:text-xl text-qarawin-cream/80 max-w-2xl mx-auto">
            The first global community inspired by Al Qarawiyyin, the world's oldest university,
            to connect brilliant minds and foster innovation.
          </p>
          
          <div className="pt-4">
            <Button className="bg-qarawin-red hover:bg-qarawin-red/90 text-white px-6 py-6 text-lg rounded-md">
              Join Our Community
            </Button>
          </div>
          
          <div className="pt-8">
            <div className="pattern-divider mx-auto"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
