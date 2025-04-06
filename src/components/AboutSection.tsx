
import React, { useEffect, useRef } from 'react';

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );
    
    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach(el => {
      el.classList.add('opacity-0');
      observer.observe(el);
    });
    
    return () => {
      elements?.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-qarawin-black relative" ref={sectionRef}>
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-qarawin-black to-qarawin-black"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIwIDQwYzExLjA0NiAwIDIwLTguOTU0IDIwLTIwUzMxLjA0NiAwIDIwIDBTMCA4Ljk1NCAwIDIwczguOTU0IDIwIDIwIDIwem0wLTNjOS4zOTEgMCAxNy03LjYwOSAxNy0xN1MyOS4zOTEgMyAyMCAzIDMgMTAuNjA5IDMgMjBzNy42MDkgMTcgMTcgMTd6IiBmaWxsPSIjZWEzODRjIiBmaWxsLW9wYWNpdHk9Ii4wNSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+')] opacity-40"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-qarawin-cream mb-4">Our Heritage & Mission</h2>
            <div className="w-20 h-1 bg-qarawin-red mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="arabesque-border p-8 rounded-lg bg-qarawin-darkgray/80 backdrop-blur-sm shadow-xl shadow-qarawin-red/5 transform transition-all duration-500 hover:shadow-qarawin-red/10 hover:translate-y-[-5px] animate-on-scroll">
              <h3 className="text-2xl font-serif font-semibold text-qarawin-red mb-6 border-b border-qarawin-red/20 pb-3">The Qarawiyyin Legacy</h3>
              <p className="text-qarawin-cream mb-6 text-lg">
                Named after Al Qarawiyyin University in Fez, Morocco — the world's oldest existing university founded in 859 AD — 
                our community carries forward a millennium of intellectual tradition and innovation.
              </p>
              <p className="text-qarawin-cream text-lg">
                Just as Al Qarawiyyin became a beacon of knowledge across disciplines, Qarawin aims to illuminate 
                the path for Moroccan scientific and entrepreneurial brilliance on the global stage.
              </p>
            </div>
            
            <div className="space-y-8 animate-on-scroll">
              <div className="bg-qarawin-darkgray/80 backdrop-blur-sm p-8 rounded-lg shadow-xl shadow-qarawin-red/5 border border-qarawin-red/20 transform transition-all duration-500 hover:shadow-qarawin-red/10 hover:translate-y-[-5px]">
                <h3 className="text-2xl font-serif font-semibold text-qarawin-cream mb-4 border-b border-qarawin-red/20 pb-3">Our Mission</h3>
                <p className="text-qarawin-cream text-lg">
                  To cultivate a thriving ecosystem that connects Moroccan scientists, researchers, and deeptech 
                  entrepreneurs worldwide, fostering collaboration and innovation.
                </p>
              </div>
              
              <div className="bg-qarawin-darkgray/80 backdrop-blur-sm p-8 rounded-lg shadow-xl shadow-qarawin-red/5 border border-qarawin-red/20 transform transition-all duration-500 hover:shadow-qarawin-red/10 hover:translate-y-[-5px]">
                <h3 className="text-2xl font-serif font-semibold text-qarawin-cream mb-4 border-b border-qarawin-red/20 pb-3">Our Vision</h3>
                <p className="text-qarawin-cream text-lg">
                  To position Morocco as a global leader in scientific innovation and deeptech entrepreneurship, 
                  building on our rich intellectual heritage while embracing cutting-edge technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
