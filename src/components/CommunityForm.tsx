import React from 'react';

// Import your real sections
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import PurposeSection from '@/components/PurposeSection';
import FoundersSection from '@/components/FoundersSection';
import AdvisorsSection from '@/components/AdvisorsSection';
import ChaptersSection from '@/components/ChaptersSection';
import CommunitySection from '@/components/CommunitySection';
// If you want to use Analytics, LoginModal, ViewTracker, etc., import as needed

import Footer from '@/components/Footer';

function App() {
  return (
    <div className="bg-neutral-950 text-neutral-100 min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PurposeSection />
      <FoundersSection />
      <AdvisorsSection />
      <ChaptersSection />
      <CommunitySection />
      <Footer />
    </div>
  );
}

export default App;