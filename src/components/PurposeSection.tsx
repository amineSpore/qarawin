
import React, { useEffect, useRef } from 'react';
import { UsersIcon, NewspaperIcon, HeartIcon } from 'lucide-react';

const PurposeSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.page-transition');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.remove('opacity-0', 'translate-y-10');
              }, index * 150);
            });
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="purpose" className="py-24 bg-qarawin-black relative" ref={sectionRef}>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIwIDQwYzExLjA0NiAwIDIwLTguOTU0IDIwLTIwUzMxLjA0NiAwIDIwIDBTMCA4Ljk1NCAwIDIwczguOTU0IDIwIDIwIDIwem0wLTNjOS4zOTEgMCAxNy03LjYwOSAxNy0xN1MyOS4zOTEgMyAyMCAzIDMgMTAuNjA5IDMgMjBzNy42MDkgMTcgMTcgMTd6IiBmaWxsPSIjY2EwMDEzIiBmaWxsLW9wYWNpdHk9Ii4wNSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+')] opacity-25"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 page-transition opacity-0 translate-y-10 transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-inter font-bold text-qarawin-cream mb-4">Our Mission & Heritage</h2>
            <div className="w-20 h-1 bg-qarawin-red mx-auto mb-6"></div>
            <p className="text-lg text-qarawin-cream/80 max-w-3xl mx-auto font-montreal mb-8">
              Drawing inspiration from Al-Qarawiyyin, the world's oldest university founded in Fez, we continue a legacy of knowledge that has illuminated minds for over twelve centuries.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="page-transition opacity-0 translate-y-10 transition-all duration-700 h-full" style={{ transitionDelay: '0ms' }}>
              <div className="bg-qarawin-darkgray/60 backdrop-blur-sm p-8 rounded-lg shadow-xl border border-qarawin-red/10 transform transition-all duration-500 hover:shadow-qarawin-red/15 hover:translate-y-[-5px] h-full flex flex-col">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-qarawin-red/10 mb-6 mx-auto">
                  <UsersIcon className="w-8 h-8 text-qarawin-red" />
                </div>
                <h3 className="text-xl font-inter font-bold text-qarawin-cream mb-3 text-center">Gather</h3>
                <p className="text-qarawin-cream/90 font-montreal text-center flex-grow">
                  Unite the Moroccan scientific community across borders and disciplines to create a powerful network of collaboration and innovation.
                </p>
              </div>
            </div>
            
            <div className="page-transition opacity-0 translate-y-10 transition-all duration-700 h-full" style={{ transitionDelay: '150ms' }}>
              <div className="bg-qarawin-darkgray/60 backdrop-blur-sm p-8 rounded-lg shadow-xl border border-qarawin-red/10 transform transition-all duration-500 hover:shadow-qarawin-red/15 hover:translate-y-[-5px] h-full flex flex-col">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-qarawin-red/10 mb-6 mx-auto">
                  <NewspaperIcon className="w-8 h-8 text-qarawin-red" />
                </div>
                <h3 className="text-xl font-inter font-bold text-qarawin-cream mb-3 text-center">Promote</h3>
                <p className="text-qarawin-cream/90 font-montreal text-center flex-grow">
                  Elevate the visibility and impact of Moroccan scientists around the world, celebrating their achievements and contributions.
                </p>
              </div>
            </div>
            
            <div className="page-transition opacity-0 translate-y-10 transition-all duration-700 h-full" style={{ transitionDelay: '300ms' }}>
              <div className="bg-qarawin-darkgray/60 backdrop-blur-sm p-8 rounded-lg shadow-xl border border-qarawin-red/10 transform transition-all duration-500 hover:shadow-qarawin-red/15 hover:translate-y-[-5px] h-full flex flex-col">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-qarawin-red/10 mb-6 mx-auto">
                  <HeartIcon className="w-8 h-8 text-qarawin-red" />
                </div>
                <h3 className="text-xl font-inter font-bold text-qarawin-cream mb-3 text-center">Encourage</h3>
                <p className="text-qarawin-cream/90 font-montreal text-center flex-grow">
                  Inspire the next generation of Moroccan youth to pursue academic excellence and scientific innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurposeSection;
