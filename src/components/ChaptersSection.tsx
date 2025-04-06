
import React, { useEffect, useRef } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

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

  const chapters = [
    {
      name: "Casablanca Chapter",
      title1: "Morocco's Economic Hub",
      title2: "150+ Active Members",
      initials: "CB"
    },
    {
      name: "Paris Chapter",
      title1: "European Headquarters",
      title2: "120+ Active Members",
      initials: "PR"
    },
    {
      name: "Boston Chapter",
      title1: "North American Hub",
      title2: "85+ Active Members",
      initials: "BS"
    },
    {
      name: "Dubai Chapter",
      title1: "MENA Connection",
      title2: "60+ Active Members",
      initials: "DB"
    },
    {
      name: "Singapore Chapter",
      title1: "Asia-Pacific Bridge",
      title2: "45+ Active Members",
      initials: "SG"
    }
  ];

  return (
    <section id="chapters" className="py-24 bg-qarawin-black relative" ref={sectionRef}>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIwIDQwYzExLjA0NiAwIDIwLTguOTU0IDIwLTIwUzMxLjA0NiAwIDIwIDBTMCA4Ljk1NCAwIDIwczguOTU0IDIwIDIwIDIwem0wLTNjOS4zOTEgMCAxNy03LjYwOSAxNy0xN1MyOS4zOTEgMyAyMCAzIDMgMTAuNjA5IDMgMjBzNy42MDkgMTcgMTcgMTd6IiBmaWxsPSIjY2EwMDEzIiBmaWxsLW9wYWNpdHk9Ii4wNSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+')] opacity-20"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 page-transition">
            <h2 className="text-3xl md:text-4xl font-inter font-bold text-qarawin-cream mb-4">Global Chapters</h2>
            <div className="w-20 h-1 bg-qarawin-red mx-auto mb-6"></div>
            <p className="text-lg text-qarawin-cream/80 max-w-2xl mx-auto font-montreal">
              Extending our community across continents to connect Moroccan brilliance worldwide
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chapters.map((chapter, index) => (
              <div 
                className={`page-transition ${index === 4 ? 'lg:col-start-2' : ''}`} 
                style={{ transitionDelay: `${index * 100}ms` }}
                key={chapter.name}
              >
                <div className="bg-qarawin-darkgray/60 backdrop-blur-sm p-8 rounded-lg shadow-xl border border-qarawin-red/10 transform transition-all duration-500 hover:shadow-qarawin-red/15 hover:translate-y-[-5px] flex flex-col items-center">
                  <Avatar className="w-32 h-32 mb-6 border-2 border-qarawin-red/20">
                    <AvatarImage src="" alt={chapter.name} />
                    <AvatarFallback className="bg-qarawin-red/10 text-qarawin-red text-xl font-inter">
                      {chapter.initials}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-inter font-bold text-qarawin-cream mb-2 text-center">{chapter.name}</h3>
                  <p className="text-qarawin-red font-montreal font-medium mb-1 text-center">{chapter.title1}</p>
                  <p className="text-qarawin-cream/70 font-montreal text-center">{chapter.title2}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center page-transition" style={{ transitionDelay: '500ms' }}>
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
