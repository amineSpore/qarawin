
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import FoundersSection from '@/components/FoundersSection';
import CommunitySection from '@/components/CommunitySection';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FoundersSection />
      <CommunitySection />
      <Footer />
    </div>
  );
};

export default Index;
