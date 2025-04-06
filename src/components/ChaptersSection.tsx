
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
      initials: "RA",
      image: "/lovable-uploads/0ee6594c-646e-4838-b3a5-374dd3bb6b9c.png"
    },
    {
      name: "Ines Iraki",
      title1: "France",
      initials: "II",
      image: "/lovable-uploads/48a4e936-db30-4eef-b1a3-68e4112e85ce.png"
    },
    {
      name: "Jad Sbaï",
      title1: "UK",
      initials: "JS",
      image: "/lovable-uploads/ad2f8e7d-7e13-4371-82bd-93a53032fb42.png"
    },
    {
      name: "Salma Mouhib",
      title1: "Morocco",
      title2: "Chapter Lead",
      initials: "SM",
      image: "/lovable-uploads/ad2f8e7d-7e13-4371-82bd-93a53032fb42.png"
    },
    {
      name: "Youssef Ezzaky",
      title1: "Asia",
      title2: "Chapter Lead",
      initials: "YE",
      image: null // Setting to null to trigger the fallback
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
                    {chapter.image ? (
                      <AvatarImage 
                        src={chapter.image} 
                        alt={chapter.name} 
                        className="grayscale object-cover w-full h-full" 
                      />
                    ) : null}
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
