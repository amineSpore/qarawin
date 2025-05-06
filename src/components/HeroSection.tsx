
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  const circleRedRef = useRef<HTMLDivElement>(null);
  const circleWhiteRef = useRef<HTMLDivElement>(null);
  
  const scrollToCommunity = () => {
    document.getElementById('community-form')?.scrollIntoView({ behavior: 'smooth' });
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
      <div className="absolute inset-0 bg-arabesque-pattern opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-qarawin-black via-qarawin-black/90 to-qarawin-black"></div>
      
      {/* Animated circles */}
      <div ref={circleRedRef} className="circle-red"></div>
      <div ref={circleWhiteRef} className="circle-white"></div>
      
      <div className="container mx-auto px-6 md:px-12 z-10 flex flex-col items-center justify-center">
        <div className="w-full max-w-4xl mx-auto text-center space-y-2">
          <div className="flex justify-center items-center w-full">
            <h1 className="text-7xl md:text-[10rem] lg:text-[16rem] font-inter font-bold leading-tight animate-fade-in opacity-0 mx-auto" style={{ animationDelay: '0.2s' }}>
              <span className="block text-qarawin-red tracking-tight text-shadow-glow text-center">QARAWIN</span>
            </h1>
          </div>
          
          <p className="text-sm md:text-xl font-montreal text-qarawin-cream/90 max-w-xl mx-auto animate-fade-in opacity-0 tracking-wide letter-spacing-wider text-center" style={{ animationDelay: '0.4s' }}>
            <span className="md:inline hidden">Building a community of Moroccan scientists and entrepreneurs</span>
            <span className="md:hidden inline">Building a community of<br />Moroccan scientists and entrepreneurs</span>
          </p>
          
          <div className="pt-10 animate-fade-in opacity-0 flex justify-center" style={{ animationDelay: '0.6s' }}>
            <Button 
              onClick={scrollToCommunity}
              className="bg-qarawin-red hover:bg-qarawin-red/90 text-white px-8 py-7 text-lg rounded-md shadow-xl transition-all duration-500 hover:shadow-qarawin-red/30 hover:shadow-2xl hover:-translate-y-1 font-montreal tracking-wider border border-qarawin-red/20"
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
