
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const circleRedRef = useRef<HTMLDivElement>(null);
  const circleWhiteRef = useRef<HTMLDivElement>(null);
  
  const scrollToAbout = () => {
    document.getElementById('purpose')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (circleRedRef.current && circleWhiteRef.current) {
        // Subtle movement based on mouse position to add more dynamic feel
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        circleRedRef.current.style.animationDuration = `${15 + x * 5}s`;
        circleWhiteRef.current.style.animationDuration = `${20 - y * 5}s`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-qarawin-black">
      <div className="absolute inset-0 bg-arabesque-pattern opacity-15"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-qarawin-black/95 to-qarawin-black/80"></div>
      
      {/* Animated circles */}
      <div ref={circleRedRef} className="circle-red"></div>
      <div ref={circleWhiteRef} className="circle-white"></div>
      
      <div className="container mx-auto px-6 md:px-12 z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-inter font-bold leading-tight animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
            <span className="block text-qarawin-red tracking-tight mb-4">QARAWIN</span>
          </h1>
          
          <p className="text-sm md:text-base font-montreal text-qarawin-cream/80 max-w-xl mx-auto animate-fade-in opacity-0 tracking-wide" style={{ animationDelay: '0.4s' }}>
            Uniting Moroccan Scientists & Deeptech Entrepreneurs
          </p>
          
          <div className="pt-8 animate-fade-in opacity-0" style={{ animationDelay: '0.6s' }}>
            <Button className="bg-qarawin-red hover:bg-qarawin-red/90 text-white px-6 py-6 text-lg rounded-md shadow-lg transition-all duration-300 hover:shadow-qarawin-red/20 hover:shadow-xl hover:-translate-y-1 font-montreal">
              Join Our Community
            </Button>
          </div>
          
          <div className="pt-12 animate-fade-in opacity-0" style={{ animationDelay: '0.8s' }}>
            <button 
              onClick={scrollToAbout}
              className="flex flex-col items-center text-qarawin-cream/60 hover:text-qarawin-red transition-colors duration-300 font-montreal"
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
