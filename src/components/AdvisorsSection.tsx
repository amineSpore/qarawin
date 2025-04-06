
import React, { useEffect, useRef } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const AdvisorsSection: React.FC = () => {
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

  const advisors = [
    {
      name: "Jinane Abounadi",
      title1: "MIT Sandbox",
      title2: "Executive Director",
      initials: "JA",
      image: "/lovable-uploads/fcb7483c-b585-4dcb-bd69-a3c9b8986a06.png"
    },
    {
      name: "Youssef Laghzioui",
      title1: "UM6P Ventures",
      title2: "General Partner",
      initials: "YL",
      image: "/lovable-uploads/0ee6594c-646e-4838-b3a5-374dd3bb6b9c.png"
    },
    {
      name: "Mehdi Ghissassi",
      title1: "AI71",
      title2: "Chief Product Officer",
      initials: "MG",
      image: "/lovable-uploads/c0c9954c-ebf2-48dc-854a-e3b63f675b59.png"
    },
    {
      name: "Mahmoud Mikdar",
      title1: "Harvard Medical School",
      title2: "Research Fellow",
      initials: "MM",
      image: "/lovable-uploads/48a4e936-db30-4eef-b1a3-68e4112e85ce.png"
    },
    {
      name: "Khalil Amine",
      title1: "Argonne National Laboratory",
      title2: "Team Leader",
      initials: "KA",
      image: "/lovable-uploads/ad2f8e7d-7e13-4371-82bd-93a53032fb42.png"
    },
    {
      name: "Nadia Kamal",
      title1: "Harmonie Mutuelle",
      title2: "Health and Innovation Director",
      initials: "NK",
      image: "/lovable-uploads/e6be84d3-bc86-408a-809a-c0998ec436e2.png"
    }
  ];

  return (
    <section id="advisors" className="py-24 bg-qarawin-black relative" ref={sectionRef}>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg1djVIMHptMTAgMGg1djVoLTV6TTAgMTBoNXY1SDB6bTEwIDBoNXY1aC01eiIgZmlsbD0iI2NhMDAxMyIgZmlsbC1vcGFjaXR5PSIuMDUiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==')] opacity-20"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 page-transition opacity-0 translate-y-10 transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-inter font-bold text-qarawin-cream mb-4">Our Advisors</h2>
            <div className="w-20 h-1 bg-qarawin-red mx-auto mb-6"></div>
            <p className="text-lg text-qarawin-cream/80 max-w-2xl mx-auto font-montreal">
              Distinguished leaders guiding our community with decades of expertise in science, technology, and innovation
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-start gap-8">
            {advisors.map((advisor, index) => (
              <div 
                className="page-transition opacity-0 translate-y-10 transition-all duration-700 w-48" 
                style={{ transitionDelay: `${index * 100}ms` }}
                key={advisor.name}
              >
                <div className="flex flex-col items-center">
                  <Avatar className="w-32 h-32 mb-4 border-2 border-qarawin-red/20 overflow-hidden">
                    <AvatarImage 
                      src={advisor.image} 
                      alt={advisor.name} 
                      className="grayscale object-cover w-full h-full" 
                    />
                    <AvatarFallback className="bg-qarawin-red/10 text-qarawin-red text-xl font-inter">
                      {advisor.initials}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-inter font-bold text-qarawin-cream mb-1 text-center">{advisor.name}</h3>
                  <p className="text-qarawin-red font-montreal font-medium mb-1 text-center">{advisor.title1}</p>
                  <p className="text-qarawin-cream/70 font-montreal text-center text-sm">{advisor.title2}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvisorsSection;
