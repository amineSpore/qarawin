import React from 'react';

// Import your main sections (replace with your actual component names/paths)
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import FeaturesSection from '@/components/FeaturesSection';
import TeamSection from '@/components/TeamSection';
// ... any other sections you have

// Import your form and footer
import QarawinForm from '@/components/ui/form';
import Footer from '@/components/Footer'; // if you have a Footer component

function App() {
  return (
    <div className="bg-neutral-950 text-neutral-100 min-h-screen flex flex-col">
      {/* Main page content */}
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <TeamSection />
      {/* ...other sections... */}

      {/* ---- FORM AT THE BOTTOM ---- */}
      <section className="py-16 px-4 md:px-0 bg-neutral-900">
        <QarawinForm />
      </section>

      {/* ---- FOOTER ---- */}
      <Footer />
    </div>
  );
}

export default App;