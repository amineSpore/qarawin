
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Arabesque pattern background */}
      <div className="absolute inset-0 bg-arabesque-pattern opacity-30 animate-pulse"></div>
      
      {/* Heritage imagery overlay */}
      <div className="absolute inset-0 bg-[url('/lovable-uploads/5a702ca1-ebc0-43ae-8ff4-4edb97822db5.png')] bg-center bg-no-repeat bg-cover opacity-15"></div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-qarawin-black/95 to-qarawin-black/90"></div>
      
      <div className="container mx-auto px-6 md:px-12 z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="mb-6 opacity-80 mx-auto w-24 h-24 rounded-full border-2 border-qarawin-gold/30 overflow-hidden animate-fade-in opacity-0 flex items-center justify-center" style={{ animationDelay: '0.1s' }}>
            <div className="bg-[url('/lovable-uploads/c32a4192-1fd3-4129-8a71-9af5dbd93640.png')] bg-center bg-cover w-full h-full scale-110 opacity-100"></div>
          </div>
          
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
      
      {/* Decorative vintage frame elements */}
      <div className="absolute top-10 left-10 w-32 h-32 border-t-2 border-l-2 border-qarawin-gold/20 rounded-tl-lg hidden md:block"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 border-b-2 border-r-2 border-qarawin-gold/20 rounded-br-lg hidden md:block"></div>
    </section>
  );
};

export default HeroSection;
