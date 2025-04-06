
import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';

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

  return (
    <section id="advisors" className="py-24 bg-qarawin-black relative" ref={sectionRef}>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg1djVIMHptMTAgMGg1djVoLTV6TTAgMTBoNXY1SDB6bTEwIDBoNXY1aC01eiIgZmlsbD0iI2NhMDAxMyIgZmlsbC1vcGFjaXR5PSIuMDUiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==')] opacity-20"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 page-transition">
            <h2 className="text-3xl md:text-4xl font-inter font-bold text-qarawin-cream mb-4">Our Advisors</h2>
            <div className="w-20 h-1 bg-qarawin-red mx-auto mb-6"></div>
            <p className="text-lg text-qarawin-cream/80 max-w-2xl mx-auto font-montreal">
              Distinguished leaders guiding our community with decades of expertise
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="page-transition" style={{ transitionDelay: '0ms' }}>
              <Card className="border-qarawin-red/10 bg-qarawin-darkgray/60 backdrop-blur-sm overflow-hidden shadow-xl transform transition-all duration-500 hover:shadow-qarawin-red/15 hover:translate-y-[-5px]">
                <CardContent className="p-0">
                  <div className="p-8">
                    <div className="h-1 bg-qarawin-red rounded-full mb-6"></div>
                    <h3 className="text-xl font-inter font-bold text-qarawin-cream mb-2">Dr. Sarah Lahlou</h3>
                    <p className="text-qarawin-red font-montreal font-medium mb-4">Chief Scientific Officer, BioTech</p>
                    <p className="text-qarawin-cream/90 font-montreal">
                      Leading researcher in biotechnology with 20+ publications in prestigious journals and three patents to her name.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="page-transition" style={{ transitionDelay: '150ms' }}>
              <Card className="border-qarawin-red/10 bg-qarawin-darkgray/60 backdrop-blur-sm overflow-hidden shadow-xl transform transition-all duration-500 hover:shadow-qarawin-red/15 hover:translate-y-[-5px]">
                <CardContent className="p-0">
                  <div className="p-8">
                    <div className="h-1 bg-qarawin-red rounded-full mb-6"></div>
                    <h3 className="text-xl font-inter font-bold text-qarawin-cream mb-2">Prof. Ahmed Benani</h3>
                    <p className="text-qarawin-red font-montreal font-medium mb-4">AI Ethics Chair, Stanford University</p>
                    <p className="text-qarawin-cream/90 font-montreal">
                      Renowned expert in artificial intelligence ethics with a focus on responsible technology deployment in developing nations.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="page-transition" style={{ transitionDelay: '300ms' }}>
              <Card className="border-qarawin-red/10 bg-qarawin-darkgray/60 backdrop-blur-sm overflow-hidden shadow-xl transform transition-all duration-500 hover:shadow-qarawin-red/15 hover:translate-y-[-5px]">
                <CardContent className="p-0">
                  <div className="p-8">
                    <div className="h-1 bg-qarawin-red rounded-full mb-6"></div>
                    <h3 className="text-xl font-inter font-bold text-qarawin-cream mb-2">Leila Meziane, PhD</h3>
                    <p className="text-qarawin-red font-montreal font-medium mb-4">Venture Partner, Atlas Ventures</p>
                    <p className="text-qarawin-cream/90 font-montreal">
                      Experienced investor with a deep understanding of both the North African startup ecosystem and global venture capital landscape.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvisorsSection;
