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

// Import the new form and the footer
import QarawinForm from '@/components/ui/form'; // adjust if the path is different
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
      {/* ---- FORM AT THE BOTTOM ---- */}
      <section className="py-16 px-4 md:px-0 bg-neutral-900">
        <QarawinForm />
      </section>
      <Footer />
    </div>
  );
}

export default App;