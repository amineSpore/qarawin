
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const FoundersSection: React.FC = () => {
  return (
    <section id="founders" className="py-20 bg-qarawin-light/50 relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg1djVIMHptMTAgMGg1djVoLTV6TTAgMTBoNXY1SDB6bTEwIDBoNXY1aC01eiIgZmlsbD0iI0Q0QUYzNyIgZmlsbC1vcGFjaXR5PSIuMDUiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==')] opacity-50"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-qarawin-blue mb-4">Our Founders</h2>
            <div className="w-20 h-1 bg-qarawin-terracotta mx-auto mb-4"></div>
            <p className="text-lg text-qarawin-dark/80 max-w-2xl mx-auto">
              Visionary leaders bringing together scientific excellence and entrepreneurial innovation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <Card className="border-qarawin-cream bg-white/80 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-0">
                <div className="p-6">
                  <div className="h-2 bg-qarawin-blue rounded-full mb-6"></div>
                  <h3 className="text-2xl font-serif font-bold text-qarawin-dark mb-2">Amine Raji</h3>
                  <p className="text-qarawin-terracotta font-medium mb-4">Co-Founder & CEO of Spore.Bio</p>
                  <p className="text-qarawin-dark/80">
                    A pioneer in the Moroccan deeptech ecosystem, Amine brings his expertise in biotech innovation and startup 
                    leadership to build bridges between scientific research and entrepreneurial ventures.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-qarawin-cream bg-white/80 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-0">
                <div className="p-6">
                  <div className="h-2 bg-qarawin-terracotta rounded-full mb-6"></div>
                  <h3 className="text-2xl font-serif font-bold text-qarawin-dark mb-2">Sofia Dahoune</h3>
                  <p className="text-qarawin-blue font-medium mb-4">ENS Teacher & DeepTech Investor</p>
                  <p className="text-qarawin-dark/80">
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
