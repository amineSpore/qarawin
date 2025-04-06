
import React, { useEffect, useRef } from 'react';

const ChaptersSection: React.FC = () => {
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
    <section id="chapters" className="py-24 bg-qarawin-black relative" ref={sectionRef}>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIwIDQwYzExLjA0NiAwIDIwLTguOTU0IDIwLTIwUzMxLjA0NiAwIDIwIDBTMCA4Ljk1NCAwIDIwczguOTU0IDIwIDIwIDIwem0wLTNjOS4zOTEgMCAxNy03LjYwOSAxNy0xN1MyOS4zOTEgMyAyMCAzIDMgMTAuNjA5IDMgMjBzNy42MDkgMTcgMTcgMTd6IiBmaWxsPSIjY2EwMDEzIiBmaWxsLW9wYWNpdHk9Ii4wNSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+')] opacity-20"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 page-transition">
            <h2 className="text-3xl md:text-4xl font-inter font-bold text-qarawin-cream mb-4">Global Chapters</h2>
            <div className="w-20 h-1 bg-qarawin-red mx-auto mb-6"></div>
            <p className="text-lg text-qarawin-cream/80 max-w-2xl mx-auto font-montreal">
              Extending our community across continents to connect Moroccan brilliance worldwide
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="page-transition" style={{ transitionDelay: '0ms' }}>
              <div className="bg-qarawin-darkgray/60 backdrop-blur-sm p-8 rounded-lg shadow-xl border border-qarawin-red/10 transform transition-all duration-500 hover:shadow-qarawin-red/15 hover:translate-y-[-5px]">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-qarawin-red/10 mb-6">
                  <div className="text-2xl font-inter font-bold text-qarawin-red">EU</div>
                </div>
                <h3 className="text-xl font-inter font-bold text-qarawin-cream mb-3">European Chapter</h3>
                <p className="text-qarawin-cream/90 font-montreal mb-4">
                  Centered in Paris with satellite communities in Berlin and Amsterdam, connecting Moroccan talent across European innovation hubs.
                </p>
                <p className="text-sm text-qarawin-cream/70 font-montreal">Members: 250+</p>
              </div>
            </div>
            
            <div className="page-transition" style={{ transitionDelay: '150ms' }}>
              <div className="bg-qarawin-darkgray/60 backdrop-blur-sm p-8 rounded-lg shadow-xl border border-qarawin-red/10 transform transition-all duration-500 hover:shadow-qarawin-red/15 hover:translate-y-[-5px]">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-qarawin-red/10 mb-6">
                  <div className="text-2xl font-inter font-bold text-qarawin-red">NA</div>
                </div>
                <h3 className="text-xl font-inter font-bold text-qarawin-cream mb-3">North American Chapter</h3>
                <p className="text-qarawin-cream/90 font-montreal mb-4">
                  Spanning Boston, San Francisco, and Montreal to leverage the innovation ecosystems of both the US and Canada.
                </p>
                <p className="text-sm text-qarawin-cream/70 font-montreal">Members: 180+</p>
              </div>
            </div>
            
            <div className="page-transition" style={{ transitionDelay: '300ms' }}>
              <div className="bg-qarawin-darkgray/60 backdrop-blur-sm p-8 rounded-lg shadow-xl border border-qarawin-red/10 transform transition-all duration-500 hover:shadow-qarawin-red/15 hover:translate-y-[-5px]">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-qarawin-red/10 mb-6">
                  <div className="text-2xl font-inter font-bold text-qarawin-red">MA</div>
                </div>
                <h3 className="text-xl font-inter font-bold text-qarawin-cream mb-3">Morocco Chapter</h3>
                <p className="text-qarawin-cream/90 font-montreal mb-4">
                  Our home base with hubs in Casablanca, Rabat, and Tangier, serving as the foundation of our global community.
                </p>
                <p className="text-sm text-qarawin-cream/70 font-montreal">Members: 350+</p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center page-transition" style={{ transitionDelay: '400ms' }}>
            <p className="text-qarawin-cream/90 font-montreal text-lg mb-4">
              Don't see a chapter near you?
            </p>
            <button className="bg-transparent hover:bg-qarawin-red/10 text-qarawin-red border border-qarawin-red/30 px-6 py-3 rounded-md transition-all duration-300 font-montreal">
              Start a Local Chapter
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChaptersSection;
