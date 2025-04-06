
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEwMCAwQzY5LjEyIDAtNDQuMTcgNDQuMTctNDQuMTcgMTAwUzY5LjEyIDIwMCAxMDAgMjAwczEwMC00NC4xNyAxMDAtMTAwUzEzMC44OCAwIDEwMCAwem0wIDI1YzQxLjQyIDAgNzUgMzMuNTggNzUgNzVzLTMzLjU4IDc1LTc1IDc1LTc1LTMzLjU4LTc1LTc1IDMzLjU4LTc1IDc1LTc1eiIgZmlsbD0iI0M0NUE0OCIgZmlsbC1vcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-30"></div>
      
      <div className="container mx-auto px-6 md:px-12 z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
            <span className="block gradient-text">Qarawin</span>
            <span className="text-qarawin-dark">Uniting Moroccan Scientists & Deeptech Entrepreneurs</span>
          </h1>
          
          <p className="text-lg md:text-xl text-qarawin-dark/80 max-w-2xl mx-auto">
            The first global community inspired by Al Qarawiyyin, the world's oldest university,
            to connect brilliant minds and foster innovation.
          </p>
          
          <div className="pt-4">
            <Button className="bg-qarawin-terracotta hover:bg-qarawin-terracotta/90 text-white px-6 py-6 text-lg rounded-md">
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
