
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

  const advisors = [
    {
      name: "Dr. Sarah Lahlou",
      title1: "Chief Scientific Officer",
      title2: "BioTech Innovations",
      initials: "SL"
    },
    {
      name: "Prof. Ahmed Benani",
      title1: "AI Ethics Chair",
      title2: "Stanford University",
      initials: "AB"
    },
    {
      name: "Leila Meziane, PhD",
      title1: "Venture Partner",
      title2: "Atlas Ventures",
      initials: "LM"
    },
    {
      name: "Dr. Karim Idrissi",
      title1: "Neuroscience Director",
      title2: "Global Research Institute",
      initials: "KI"
    },
    {
      name: "Prof. Fatima Zohra",
      title1: "Quantum Computing Lead",
      title2: "MIT Research Lab",
      initials: "FZ"
    },
    {
      name: "Dr. Youssef Amrani",
      title1: "Climate Science Director",
      title2: "International Climate Council",
      initials: "YA"
    }
  ];

  return (
    <section id="advisors" className="py-24 bg-qarawin-black relative" ref={sectionRef}>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg1djVIMHptMTAgMGg1djVoLTV6TTAgMTBoNXY1SDB6bTEwIDBoNXY1aC01eiIgZmlsbD0iI2NhMDAxMyIgZmlsbC1vcGFjaXR5PSIuMDUiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==')] opacity-20"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 page-transition">
            <h2 className="text-3xl md:text-4xl font-inter font-bold text-qarawin-cream mb-4">Our Advisors</h2>
            <div className="w-20 h-1 bg-qarawin-red mx-auto mb-6"></div>
            <p className="text-lg text-qarawin-cream/80 max-w-2xl mx-auto font-montreal">
              Distinguished leaders guiding our community with decades of expertise in science, technology, and innovation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advisors.map((advisor, index) => (
              <div 
                className="page-transition" 
                style={{ transitionDelay: `${index * 100}ms` }}
                key={advisor.name}
              >
                <Card className="border-qarawin-red/10 bg-qarawin-darkgray/60 backdrop-blur-sm overflow-hidden shadow-xl transform transition-all duration-500 hover:shadow-qarawin-red/15 hover:translate-y-[-5px]">
                  <CardContent className="p-0">
                    <div className="flex flex-col items-center p-8">
                      <Avatar className="w-32 h-32 mb-6 border-2 border-qarawin-red/20">
                        <AvatarImage src="" alt={advisor.name} />
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
