
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import PurposeSection from '@/components/PurposeSection';
import AdvisorsSection from '@/components/AdvisorsSection';
import FoundersSection from '@/components/FoundersSection';
import ChaptersSection from '@/components/ChaptersSection';
import CommunityForm from '@/components/CommunityForm';
import Footer from '@/components/Footer';
import AboutSection from '@/components/AboutSection';

const Index: React.FC = () => {
  useEffect(() => {
    // Smooth scrolling setup
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Make sure sections are loaded correctly
    const hash = window.location.hash;
    if (hash) {
      // Remove the # symbol
      const id = hash.substring(1);
      // Delayed execution to ensure the DOM is fully loaded
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-qarawin-black">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <PurposeSection />
        <AdvisorsSection />
        <FoundersSection />
        <ChaptersSection />
        <CommunityForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
