
import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from 'lucide-react';

const CommunitySection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
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

  const benefits = [
    {
      title: "Global Network",
      description: "Connect with Moroccan scientists and entrepreneurs across the world through our exclusive community platform.",
      color: "bg-qarawin-red"
    },
    {
      title: "Knowledge Exchange",
      description: "Access workshops, webinars, and resources focused on deeptech innovation and scientific research.",
      color: "bg-qarawin-red"
    },
    {
      title: "Funding Opportunities",
      description: "Gain visibility with investors specialized in deeptech ventures and scientific commercialization.",
      color: "bg-qarawin-red"
    },
    {
      title: "Collaborative Projects",
      description: "Find partners for research initiatives and startup ventures within our curated community.",
      color: "bg-qarawin-red"
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail('');
    }, 1500);
  };

  return (
    <section id="community" className="py-20 bg-qarawin-black relative" ref={sectionRef}>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTMwIDYwYzE2LjU2OSAwIDMwLTEzLjQzMSAzMC0zMFM0Ni41NjkgMCAzMCAwIDAgMTMuNDMxIDAgMzBzMTMuNDMxIDMwIDMwIDMwem0wLTVjMTMuODA3IDAgMjUtMTEuMTkzIDI1LTI1UzQzLjgwNyA1IDMwIDUgNSAxNi4xOTMgNSAzMHMxMS4xOTMgMjUgMjUgMjV6IiBmaWxsPSIjZWEzODRjIiBmaWxsLW9wYWNpdHk9Ii4wMiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+')] opacity-50"></div>
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-qarawin-cream mb-4">Join Our Community</h2>
            <div className="w-20 h-1 bg-qarawin-red mx-auto mb-6"></div>
            <p className="text-lg text-qarawin-cream/80 max-w-2xl mx-auto">
              Be part of a growing network of brilliant minds shaping the future of Moroccan innovation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-qarawin-red/20 bg-qarawin-darkgray/80 backdrop-blur-sm shadow-xl hover:shadow-qarawin-red/10 transition-all duration-500 transform hover:-translate-y-1 animate-on-scroll" style={{ animationDelay: `${0.1 * index}s` }}>
                <CardContent className="p-6">
                  <div className={`w-12 h-1 ${benefit.color} rounded-full mb-4`}></div>
                  <h3 className="text-xl font-serif font-semibold text-qarawin-cream mb-3">{benefit.title}</h3>
                  <p className="text-qarawin-cream/90">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 text-center animate-on-scroll">
            <div className="max-w-4xl mx-auto bg-qarawin-darkgray/80 backdrop-blur-sm p-8 rounded-lg border border-qarawin-red/20 shadow-xl">
              <h3 className="text-2xl font-serif font-bold text-qarawin-cream mb-4">Ready to join us?</h3>
              <p className="text-qarawin-cream/90 mb-6">
                Sign up now to become part of the first community of Moroccan scientists and deeptech entrepreneurs.
              </p>
              <iframe 
                className="airtable-embed w-full min-h-[533px] rounded-md" 
                src="https://airtable.com/embed/appzu6j4P0kEhxuLu/paglgZw3KFAUaJcIJ/form" 
                frameBorder="0" 
                width="100%" 
                height="533" 
                style={{
                  background: 'transparent', 
                  border: '1px solid #ccc',
                  minHeight: '533px'
                }}
                loading="lazy"
                title="Qarawin Community Form"
              />
            </div>
            
            <div className="mt-12 animate-on-scroll">
              <Collapsible className="w-full">
                <div className="flex justify-center">
                  <CollapsibleTrigger className="flex items-center text-qarawin-cream/60 hover:text-qarawin-red transition-colors group">
                    <span className="mr-2">Frequently Asked Questions</span>
                    <ChevronDown className="h-4 w-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  </CollapsibleTrigger>
                </div>
                <CollapsibleContent className="mt-6 max-w-2xl mx-auto">
                  <div className="space-y-4 text-left">
                    <div className="bg-qarawin-darkgray/60 p-4 rounded-md border border-qarawin-red/10">
                      <h4 className="font-medium text-qarawin-cream">Who can join the Qarawin community?</h4>
                      <p className="text-qarawin-cream/80 text-sm mt-1">Our community is open to Moroccan scientists, researchers, and entrepreneurs in deeptech fields, as well as investors and mentors interested in supporting Moroccan innovation.</p>
                    </div>
                    <div className="bg-qarawin-darkgray/60 p-4 rounded-md border border-qarawin-red/10">
                      <h4 className="font-medium text-qarawin-cream">What kind of activities does Qarawin organize?</h4>
                      <p className="text-qarawin-cream/80 text-sm mt-1">We host networking events, workshops, pitching sessions, and provide resources to help members connect, share knowledge, and grow their ventures.</p>
                    </div>
                    <div className="bg-qarawin-darkgray/60 p-4 rounded-md border border-qarawin-red/10">
                      <h4 className="font-medium text-qarawin-cream">Is there a membership fee?</h4>
                      <p className="text-qarawin-cream/80 text-sm mt-1">Initial membership is free. We may introduce premium tiers with additional benefits in the future.</p>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
