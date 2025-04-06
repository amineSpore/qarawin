
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
            <div className="order-2 md:order-1 arabesque-border p-8 rounded-lg bg-qarawin-darkgray/80 backdrop-blur-sm shadow-xl shadow-qarawin-red/5 transform transition-all duration-500 hover:shadow-qarawin-red/10 hover:translate-y-[-5px] animate-on-scroll">
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
            
            <div className="order-1 md:order-2 relative animate-on-scroll">
              <div className="relative mx-auto w-full max-w-md rounded-lg overflow-hidden vintage-frame">
                <img 
                  src="/lovable-uploads/5a702ca1-ebc0-43ae-8ff4-4edb97822db5.png" 
                  alt="Artisanal heritage of scientific exploration"
                  className="w-full h-auto filter sepia-[0.2] contrast-[1.1]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-qarawin-black/70 to-transparent"></div>
                <div className="absolute inset-0 border-[12px] border-qarawin-darkgray/40 box-border rounded"></div>
                <div className="absolute inset-0 border-[1px] border-qarawin-red/20 box-border rounded"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-b-2 border-r-2 border-qarawin-red/20 rounded-br-lg hidden md:block"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 border-t-2 border-l-2 border-qarawin-red/20 rounded-tl-lg hidden md:block"></div>
            </div>
            
            <div className="col-span-1 md:col-span-2 space-y-8 animate-on-scroll mt-8">
              <div className="grid md:grid-cols-2 gap-8">
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
      </div>
    </section>
  );
};

export default AboutSection;
