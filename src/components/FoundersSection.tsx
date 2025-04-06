
import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';

const FoundersSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );
    
    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach(el => {
      el.classList.add('opacity-0');
      observer.observe(el);
    });
    
    return () => {
      elements?.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="founders" className="py-20 bg-qarawin-black relative" ref={sectionRef}>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg1djVIMHptMTAgMGg1djVoLTV6TTAgMTBoNXY1SDB6bTEwIDBoNXY1aC01eiIgZmlsbD0iI0Q0QUYzNyIgZmlsbC1vcGFjaXR5PSIuMDUiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==')] opacity-40"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-qarawin-cream mb-4">Our Founders</h2>
            <div className="w-20 h-1 bg-qarawin-red mx-auto mb-6"></div>
            <p className="text-lg text-qarawin-cream/80 max-w-2xl mx-auto">
              Visionary leaders bringing together scientific excellence and entrepreneurial innovation
            </p>
          </div>
          
          <div className="md:hidden">
            <Carousel className="w-full">
              <CarouselContent>
                <CarouselItem>
                  <Card className="border-qarawin-red/20 bg-qarawin-darkgray/80 backdrop-blur-sm overflow-hidden shadow-xl animate-on-scroll">
                    <CardContent className="p-0">
                      <div className="p-8">
                        <div className="h-2 bg-qarawin-red rounded-full mb-6"></div>
                        <h3 className="text-2xl font-serif font-bold text-qarawin-cream mb-2">Amine Raji</h3>
                        <p className="text-qarawin-red font-medium mb-4">Co-Founder & CEO of Spore.Bio</p>
                        <p className="text-qarawin-cream/90">
                          A pioneer in the Moroccan deeptech ecosystem, Amine brings his expertise in biotech innovation and startup 
                          leadership to build bridges between scientific research and entrepreneurial ventures.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card className="border-qarawin-red/20 bg-qarawin-darkgray/80 backdrop-blur-sm overflow-hidden shadow-xl animate-on-scroll">
                    <CardContent className="p-0">
                      <div className="p-8">
                        <div className="h-2 bg-qarawin-red rounded-full mb-6"></div>
                        <h3 className="text-2xl font-serif font-bold text-qarawin-cream mb-2">Sofia Dahoune</h3>
                        <p className="text-qarawin-red font-medium mb-4">ENS Teacher & DeepTech Investor</p>
                        <p className="text-qarawin-cream/90">
                          Combining academic excellence with investment acumen, Sofia works to identify and nurture the next generation of 
                          scientific talent and innovative startups emerging from Morocco.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              </CarouselContent>
              <div className="flex justify-center mt-4">
                <CarouselPrevious className="relative static translate-y-0 mx-2 bg-qarawin-red/10 hover:bg-qarawin-red/20 border-qarawin-red/20" />
                <CarouselNext className="relative static translate-y-0 mx-2 bg-qarawin-red/10 hover:bg-qarawin-red/20 border-qarawin-red/20" />
              </div>
            </Carousel>
          </div>
          
          <div className="hidden md:grid md:grid-cols-2 gap-10">
            <Card className="border-qarawin-red/20 bg-qarawin-darkgray/80 backdrop-blur-sm overflow-hidden shadow-xl transform transition-all duration-500 hover:shadow-qarawin-red/10 hover:translate-y-[-5px] animate-on-scroll">
              <CardContent className="p-0">
                <div className="p-8">
                  <div className="h-2 bg-qarawin-red rounded-full mb-6"></div>
                  <h3 className="text-2xl font-serif font-bold text-qarawin-cream mb-2">Amine Raji</h3>
                  <p className="text-qarawin-red font-medium mb-4">Co-Founder & CEO of Spore.Bio</p>
                  <p className="text-qarawin-cream/90">
                    A pioneer in the Moroccan deeptech ecosystem, Amine brings his expertise in biotech innovation and startup 
                    leadership to build bridges between scientific research and entrepreneurial ventures.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-qarawin-red/20 bg-qarawin-darkgray/80 backdrop-blur-sm overflow-hidden shadow-xl transform transition-all duration-500 hover:shadow-qarawin-red/10 hover:translate-y-[-5px] animate-on-scroll">
              <CardContent className="p-0">
                <div className="p-8">
                  <div className="h-2 bg-qarawin-red rounded-full mb-6"></div>
                  <h3 className="text-2xl font-serif font-bold text-qarawin-cream mb-2">Sofia Dahoune</h3>
                  <p className="text-qarawin-red font-medium mb-4">ENS Teacher & DeepTech Investor</p>
                  <p className="text-qarawin-cream/90">
                    Combining academic excellence with investment acumen, Sofia works to identify and nurture the next generation of 
                    scientific talent and innovative startups emerging from Morocco.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
