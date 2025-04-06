
import React, { useEffect, useRef } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const FoundersSection: React.FC = () => {
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

  const founders = [
    {
      name: "Mohammed El Kabiri",
      title1: "Co-Founder & CEO",
      title2: "PhD in Quantum Physics",
      initials: "MK"
    },
    {
      name: "Salma Benjelloun",
      title1: "Co-Founder & CSO",
      title2: "Research Lead at CNRS",
      initials: "SB"
    }
  ];

  return (
    <section id="founders" className="py-24 bg-qarawin-black relative" ref={sectionRef}>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg1djVIMHptMTAgMGg1djVoLTV6TTAgMTBoNXY1SDB6bTEwIDBoNXY1aC01eiIgZmlsbD0iI2NhMDAxMyIgZmlsbC1vcGFjaXR5PSIuMDUiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==')] opacity-20"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 page-transition opacity-0 translate-y-10 transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-inter font-bold text-qarawin-cream mb-4">Our Founders</h2>
            <div className="w-20 h-1 bg-qarawin-red mx-auto mb-6"></div>
            <p className="text-lg text-qarawin-cream/80 max-w-2xl mx-auto font-montreal">
              Visionary leaders combining scientific excellence with entrepreneurial ambition
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {founders.map((founder, index) => (
              <div className="page-transition opacity-0 translate-y-10 transition-all duration-700" style={{ transitionDelay: `${index * 150}ms` }} key={founder.name}>
                <div className="bg-qarawin-darkgray/60 backdrop-blur-sm p-8 rounded-lg shadow-xl border border-qarawin-red/10 transform transition-all duration-500 hover:shadow-qarawin-red/15 hover:translate-y-[-5px] flex flex-col items-center">
                  <Avatar className="w-40 h-40 mb-6 border-2 border-qarawin-red/30">
                    <AvatarImage src="" alt={founder.name} />
                    <AvatarFallback className="bg-qarawin-red/10 text-qarawin-red text-2xl font-inter">
                      {founder.initials}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-2xl font-inter font-bold text-qarawin-cream mb-2 text-center">{founder.name}</h3>
                  <p className="text-qarawin-red font-montreal font-medium mb-1 text-center">{founder.title1}</p>
                  <p className="text-qarawin-cream/70 font-montreal text-center">{founder.title2}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
