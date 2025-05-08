
import React, { useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const CommunityForm: React.FC = () => {
  const isMobile = useIsMobile();

  useEffect(() => {
    // Load the Typeform embed script
    const script = document.createElement('script');
    script.src = '//embed.typeform.com/next/embed.js';
    script.async = true;
    document.body.appendChild(script);
    
    // Cleanup function to remove the script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="community-form" className="py-16 bg-qarawin-black relative">
      <div className="absolute inset-0 bg-arabesque-pattern opacity-15"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-qarawin-black/95 to-qarawin-black/80"></div>
      
      <div className="container mx-auto px-6 md:px-12 z-10 relative">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-8 animate-fade-in opacity-0" style={{
            animationDelay: '0.2s'
          }}>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-qarawin-cream mb-3">Join Our Slack Community</h2>
            <div className="w-16 h-1 bg-qarawin-red mx-auto mb-4"></div>
          </div>
          
          <div className={`bg-qarawin-darkgray/80 backdrop-blur-sm p-6 rounded-lg border border-qarawin-red/20 shadow-xl animate-fade-in opacity-0 ${isMobile ? 'h-[600px]' : ''}`} style={{
            animationDelay: '0.4s'
          }}>
            <div 
              data-tf-live="01JTQQBWY23AB7925RH9XEQMA6"
              data-tf-medium="snippet"
              data-tf-hidden="device=mobile,os=ios,os=android"
              className="h-full"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityForm;
