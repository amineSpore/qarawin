
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const CommunitySection: React.FC = () => {
  const benefits = [
    {
      title: "Global Network",
      description: "Connect with Moroccan scientists and entrepreneurs across the world through our exclusive community platform.",
      color: "bg-qarawin-blue"
    },
    {
      title: "Knowledge Exchange",
      description: "Access workshops, webinars, and resources focused on deeptech innovation and scientific research.",
      color: "bg-qarawin-terracotta"
    },
    {
      title: "Funding Opportunities",
      description: "Gain visibility with investors specialized in deeptech ventures and scientific commercialization.",
      color: "bg-qarawin-gold"
    },
    {
      title: "Collaborative Projects",
      description: "Find partners for research initiatives and startup ventures within our curated community.",
      color: "bg-qarawin-blue"
    },
  ];

  return (
    <section id="community" className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-qarawin-blue mb-4">Join Our Community</h2>
            <div className="w-20 h-1 bg-qarawin-terracotta mx-auto mb-4"></div>
            <p className="text-lg text-qarawin-dark/80 max-w-2xl mx-auto">
              Be part of a growing network of brilliant minds shaping the future of Moroccan innovation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-qarawin-cream shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className={`w-12 h-1 ${benefit.color} rounded-full mb-4`}></div>
                  <h3 className="text-xl font-serif font-semibold text-qarawin-dark mb-2">{benefit.title}</h3>
                  <p className="text-qarawin-dark/80">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="max-w-md mx-auto bg-qarawin-cream/30 p-8 rounded-lg border border-qarawin-cream">
              <h3 className="text-xl font-serif font-bold text-qarawin-blue mb-4">Ready to join us?</h3>
              <p className="text-qarawin-dark/80 mb-6">
                Sign up now to become part of the first community of Moroccan scientists and deeptech entrepreneurs.
              </p>
              <form className="space-y-4">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full p-3 border border-qarawin-cream rounded-md focus:outline-none focus:ring-2 focus:ring-qarawin-blue"
                  required
                />
                <button 
                  type="submit" 
                  className="w-full bg-qarawin-terracotta hover:bg-qarawin-terracotta/90 text-white font-medium py-3 px-4 rounded-md transition-colors"
                >
                  Join the Community
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
