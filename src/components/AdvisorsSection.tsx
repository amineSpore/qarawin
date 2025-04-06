
import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
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
      image: "/lovable-uploads/c7189e36-1676-4e56-8339-c30f319942b7.png"
    },
    {
      name: "Youssef Laghzioui",
      title1: "UM6P Ventures",
      title2: "General Partner",
      initials: "YL",
      image: "/lovable-uploads/672bbcbe-31a6-426d-afab-f85b13f5795f.png"
    },
    {
      name: "Mehdi Ghissassi",
      title1: "AI71",
      title2: "Chief Product Officer",
      initials: "MG",
      image: "/lovable-uploads/2f5bad7b-bbca-40ac-897f-a4d65b146f9b.png"
    },
    {
      name: "Mahmoud Mikado",
      title1: "Harvard Medical School",
      title2: "Research Fellow",
      initials: "MM",
      image: "/lovable-uploads/73681699-c2dd-43ab-8965-c29664d2bccc.png"
    },
    {
      name: "Khalil Amine",
      title1: "Argonne National Laboratory",
      title2: "Team Leader",
      initials: "KA",
      image: "/lovable-uploads/aae990c5-bf83-4363-a85c-0061b81aac84.png"
    },
    {
      name: "Nadia Kamal",
      title1: "Harmonie Mutuelle",
      title2: "Health and Innovation Director",
      initials: "NK",
      image: "/lovable-uploads/6575c5da-7bec-4f71-961a-1cbf56775360.png"
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advisors.map((advisor, index) => (
              <div 
                className="page-transition opacity-0 translate-y-10 transition-all duration-700" 
                style={{ transitionDelay: `${index * 100}ms` }}
                key={advisor.name}
              >
                <Card className="border-qarawin-red/10 bg-qarawin-darkgray/60 backdrop-blur-sm overflow-hidden shadow-xl transform transition-all duration-500 hover:shadow-qarawin-red/15 hover:translate-y-[-5px]">
                  <CardContent className="p-0">
                    <div className="flex flex-col items-center p-8">
                      <Avatar className="w-32 h-32 mb-6 border-2 border-qarawin-red/20">
                        <AvatarImage src={advisor.image} alt={advisor.name} />
                        <AvatarFallback className="bg-qarawin-red/10 text-qarawin-red text-xl font-inter">
                          {advisor.initials}
                        </AvatarFallback>
                      </Avatar>
                      <h3 className="text-xl font-inter font-bold text-qarawin-cream mb-2 text-center">{advisor.name}</h3>
                      <p className="text-qarawin-red font-montreal font-medium mb-1 text-center">{advisor.title1}</p>
                      <p className="text-qarawin-cream/70 font-montreal text-center">{advisor.title2}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvisorsSection;
