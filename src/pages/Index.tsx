
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import PurposeSection from '@/components/PurposeSection';
import AdvisorsSection from '@/components/AdvisorsSection';
import FoundersSection from '@/components/FoundersSection';
import ChaptersSection from '@/components/ChaptersSection';
import CommunitySection from '@/components/CommunitySection';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  useEffect(() => {
    // Smooth scrolling setup
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Create intersection observer for page transitions
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('page-transition-visible');
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-qarawin-black">
      <Navbar />
      <main>
        <HeroSection />
        <PurposeSection />
        <AdvisorsSection />
        <FoundersSection />
        <ChaptersSection />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
