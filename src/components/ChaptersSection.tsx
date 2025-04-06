
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
      image: "/lovable-uploads/fdc55033-853f-4141-92a4-e6a81598497f.png"
    },
    {
      name: "Ines Iraki",
      title1: "France",
      title2: "Chapter Lead",
      initials: "II",
      image: "/lovable-uploads/a7122724-bf9f-4a23-b794-730d79c705dd.png"
    },
    {
      name: "Jad Sbaï",
      title1: "UK",
      title2: "Chapter Lead",
      initials: "JS",
      image: "/lovable-uploads/4bd5f4aa-0316-4949-b14a-8eb002c55206.png"
    },
    {
      name: "Salma Mouhib",
      title1: "Morocco",
      title2: "Chapter Lead",
      initials: "SM",
      image: "/lovable-uploads/54d04da9-172e-45f1-8293-d228bdb332a6.png"
    },
    {
      name: "Youssef Ezzaky",
      title1: "Asia",
      title2: "Chapter Lead",
      initials: "YE",
      image: "/lovable-uploads/de4ea23a-afbc-455c-84fc-bed1686e50b8.png"
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
          
          <div className="flex flex-wrap justify-center items-start gap-8">
            {chapters.map((chapter, index) => (
              <div 
                className="page-transition opacity-0 translate-y-10 transition-all duration-700 w-44"
                style={{ transitionDelay: `${index * 100}ms` }}
                key={chapter.name}
              >
                <div className="flex flex-col items-center">
                  <Avatar className="w-32 h-32 mb-4 border-2 border-qarawin-red/20 overflow-hidden">
                    <AvatarImage 
                      src={chapter.image} 
                      alt={chapter.name} 
                      className="grayscale object-cover w-full h-full" 
                    />
                    <AvatarFallback className="bg-qarawin-red/10 text-qarawin-red text-xl font-inter">
                      {chapter.initials}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-inter font-bold text-qarawin-cream mb-1 text-center">{chapter.name}</h3>
                  <p className="text-qarawin-red font-montreal font-medium mb-1 text-center">{chapter.title1}</p>
                  <p className="text-qarawin-cream/70 font-montreal text-center text-sm">{chapter.title2}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChaptersSection;
