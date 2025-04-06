
import React, { useEffect, useRef } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const ChaptersSection: React.FC = () => {
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
              }, index * 100);
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

  const chapters = [
    {
      name: "Rita Achour",
      title1: "USA",
      title2: "Chapter Lead",
      initials: "RA",
      image: "/lovable-uploads/b4462e9d-7e21-4586-9c4f-bccb24a5bd0c.png"
    },
    {
      name: "Ines Iraki",
      title1: "France",
      title2: "Chapter Lead",
      initials: "II",
      image: "/lovable-uploads/2e468051-5740-4dc3-8367-79e1f4b4f62c.png"
    },
    {
      name: "Jad Sbaï",
      title1: "UK",
      title2: "Chapter Lead",
      initials: "JS",
      image: "/lovable-uploads/1c8eb882-39e1-4440-bf83-c9fabed55e54.png"
    },
    {
      name: "Salma Mouhib",
      title1: "Morocco",
      title2: "Chapter Lead",
      initials: "SM",
      image: "/lovable-uploads/057fc80d-5026-4459-a641-562f4934a150.png"
    },
    {
      name: "Youssef Ezzaky",
      title1: "Asia",
      title2: "Chapter Lead",
      initials: "YE"
    }
  ];

  return (
    <section id="chapters" className="py-24 bg-qarawin-black relative" ref={sectionRef}>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIwIDQwYzExLjA0NiAwIDIwLTguOTU0IDIwLTIwUzMxLjA0NiAwIDIwIDBTMCA4Ljk1NCAwIDIwczguOTU0IDIwIDIwIDIwem0wLTNjOS4zOTEgMCAxNy03LjYwOSAxNy0xN1MyOS4zOTEgMyAyMCAzIDMgMTAuNjA5IDMgMjBzNy42MDkgMTcgMTcgMTd6IiBmaWxsPSIjY2EwMDEzIiBmaWxsLW9wYWNpdHk9Ii4wNSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+')] opacity-20"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 page-transition opacity-0 translate-y-10 transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-inter font-bold text-qarawin-cream mb-4">Global Chapters</h2>
            <div className="w-20 h-1 bg-qarawin-red mx-auto mb-6"></div>
            <p className="text-lg text-qarawin-cream/80 max-w-2xl mx-auto font-montreal">
              Extending our community across continents to connect Moroccan brilliance worldwide
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chapters.map((chapter, index) => (
              <div 
                className={`page-transition opacity-0 translate-y-10 transition-all duration-700 ${index === 4 ? 'lg:col-start-2' : ''}`} 
                style={{ transitionDelay: `${index * 100}ms` }}
                key={chapter.name}
              >
                <div className="bg-qarawin-darkgray/60 backdrop-blur-sm p-8 rounded-lg shadow-xl border border-qarawin-red/10 transform transition-all duration-500 hover:shadow-qarawin-red/15 hover:translate-y-[-5px] flex flex-col items-center">
                  <Avatar className="w-32 h-32 mb-6 border-2 border-qarawin-red/20">
                    <AvatarImage src={chapter.image} alt={chapter.name} />
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
          
          <div className="mt-16 text-center page-transition opacity-0 translate-y-10 transition-all duration-700" style={{ transitionDelay: '500ms' }}>
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
