
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  const circleRedRef = useRef<HTMLDivElement>(null);
  const circleWhiteRef = useRef<HTMLDivElement>(null);
  
  const scrollToCommunity = () => {
    document.getElementById('community')?.scrollIntoView({ behavior: 'smooth' });
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
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-qarawin-black">
      <div className="absolute inset-0 bg-arabesque-pattern opacity-15"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-qarawin-black/95 to-qarawin-black/80"></div>
      
      {/* Animated circles */}
      <div ref={circleRedRef} className="circle-red"></div>
      <div ref={circleWhiteRef} className="circle-white"></div>
      
      <div className="container mx-auto px-6 md:px-12 z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-inter font-bold leading-tight animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
            <span className="block text-qarawin-red tracking-tight mb-4">QARAWIN</span>
          </h1>
          
          <p className="text-sm md:text-base font-montreal text-qarawin-cream/80 max-w-xl mx-auto animate-fade-in opacity-0 tracking-wide" style={{ animationDelay: '0.4s' }}>
            Uniting Moroccan Scientists & Deeptech Entrepreneurs
          </p>
          
          <div className="pt-8 animate-fade-in opacity-0" style={{ animationDelay: '0.6s' }}>
            <Button 
              onClick={scrollToCommunity}
              className="bg-qarawin-red hover:bg-qarawin-red/90 text-white px-6 py-6 text-lg rounded-md shadow-lg transition-all duration-300 hover:shadow-qarawin-red/20 hover:shadow-xl hover:-translate-y-1 font-montreal"
            >
              Join Our Community
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
