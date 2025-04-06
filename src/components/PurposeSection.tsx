
import React, { useEffect, useRef } from 'react';

const PurposeSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('hidden');
            entry.target.classList.add('visible');
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );
    
    const elements = sectionRef.current?.querySelectorAll('.page-transition');
    elements?.forEach(el => {
      el.classList.add('hidden');
      observer.observe(el);
    });
    
    return () => {
      elements?.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="purpose" className="py-24 bg-qarawin-black relative" ref={sectionRef}>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIwIDQwYzExLjA0NiAwIDIwLTguOTU0IDIwLTIwUzMxLjA0NiAwIDIwIDBTMCA4Ljk1NCAwIDIwczguOTU0IDIwIDIwIDIwem0wLTNjOS4zOTEgMCAxNy03LjYwOSAxNy0xN1MyOS4zOTEgMyAyMCAzIDMgMTAuNjA5IDMgMjBzNy42MDkgMTcgMTcgMTd6IiBmaWxsPSIjY2EwMDEzIiBmaWxsLW9wYWNpdHk9Ii4wNSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+')] opacity-25"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 page-transition">
            <h2 className="text-3xl md:text-4xl font-inter font-bold text-qarawin-cream mb-4">Our Purpose</h2>
            <div className="w-20 h-1 bg-qarawin-red mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="page-transition">
              <div className="bg-qarawin-darkgray/60 backdrop-blur-sm p-8 rounded-lg shadow-xl shadow-qarawin-red/5 border border-qarawin-red/10 transform transition-all duration-500 hover:shadow-qarawin-red/15 hover:translate-y-[-5px]">
                <h3 className="text-2xl font-inter font-bold text-qarawin-cream mb-4 border-b border-qarawin-red/20 pb-3">Our Vision</h3>
                <p className="text-qarawin-cream/90 font-montreal mb-5 leading-relaxed">
                  To position Morocco as a global leader in scientific innovation and deeptech entrepreneurship,
                  building on our rich intellectual heritage while embracing cutting-edge technologies.
                </p>
                <p className="text-qarawin-cream/90 font-montreal leading-relaxed">
                  Our community draws inspiration from Al Qarawiyyin, the world's oldest university, 
                  blending centuries of scholarly tradition with modern scientific advancement.
                </p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="page-transition">
                <div className="bg-qarawin-darkgray/60 backdrop-blur-sm p-8 rounded-lg shadow-xl shadow-qarawin-red/5 border border-qarawin-red/10 transform transition-all duration-500 hover:shadow-qarawin-red/15 hover:translate-y-[-5px]">
                  <h3 className="text-2xl font-inter font-bold text-qarawin-cream mb-4 border-b border-qarawin-red/20 pb-3">Our Mission</h3>
                  <p className="text-qarawin-cream/90 font-montreal leading-relaxed">
                    To cultivate a thriving ecosystem that connects Moroccan scientists, researchers, and deeptech 
                    entrepreneurs worldwide, fostering collaboration and innovation that bridges continents and disciplines.
                  </p>
                </div>
              </div>
              
              <div className="page-transition" style={{ transitionDelay: '150ms' }}>
                <div className="bg-qarawin-darkgray/60 backdrop-blur-sm p-8 rounded-lg shadow-xl shadow-qarawin-red/5 border border-qarawin-red/10 transform transition-all duration-500 hover:shadow-qarawin-red/15 hover:translate-y-[-5px]">
                  <h3 className="text-2xl font-inter font-bold text-qarawin-cream mb-4 border-b border-qarawin-red/20 pb-3">Our Values</h3>
                  <p className="text-qarawin-cream/90 font-montreal leading-relaxed">
                    Knowledge sharing, inclusive excellence, and pushing boundaries in pursuit of scientific and entrepreneurial
                    breakthroughs that serve humanity while honoring our cultural roots.
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

export default PurposeSection;
