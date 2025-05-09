
import React, { useEffect, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '@/components/ui/button';

const CommunityForm: React.FC = () => {
  const isMobile = useIsMobile();
  const [isFormLoaded, setIsFormLoaded] = useState(false);
  
  // Direct URL to the Typeform
  const typeformUrl = "https://form.typeform.com/to/TLFInJU2";

  useEffect(() => {
    // Load the Typeform embed script
    const script = document.createElement('script');
    script.src = '//embed.typeform.com/next/embed.js';
    script.async = true;
    document.body.appendChild(script);
    
    script.onload = () => {
      setIsFormLoaded(true);
    };
    
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
            {isMobile && (
              <p className="text-qarawin-cream/80 text-sm mb-4">Tap the button below to access our community application form.</p>
            )}
          </div>
          
          {isMobile ? (
            <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.4s' }}>
              {!isFormLoaded ? (
                <div className="flex justify-center items-center h-40">
                  <div className="w-8 h-8 border-4 border-qarawin-red border-t-transparent rounded-full animate-spin"></div>
                </div>
              ) : (
                <>
                  <a 
                    href={typeformUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <Button 
                      className="w-full bg-qarawin-red hover:bg-qarawin-red/90 text-white px-4 py-6 text-lg rounded-md shadow-xl transition-all duration-300 hover:shadow-qarawin-red/30 hover:shadow-2xl"
                    >
                      Open Application Form
                    </Button>
                  </a>
                  <p className="text-center text-qarawin-cream/60 text-xs mt-4">
                    The form will open in a new window optimized for mobile
                  </p>
                </>
              )}
            </div>
          ) : (
            <div className="bg-qarawin-darkgray/80 backdrop-blur-sm p-6 rounded-lg border border-qarawin-red/20 shadow-xl animate-fade-in opacity-0" style={{
              animationDelay: '0.4s'
            }}>
              <div 
                data-tf-live="01JTQQBWY23AB7925RH9XEQMA6"
                data-tf-medium="snippet"
                data-tf-hidden="device=mobile,os=ios,os=android"
                className="h-full"
              ></div>
              {!isFormLoaded && (
                <div className="flex justify-center items-center h-40">
                  <div className="w-8 h-8 border-4 border-qarawin-red border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CommunityForm;
