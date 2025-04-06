
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-qarawin-black relative">
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-qarawin-black to-qarawin-black"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-qarawin-cream mb-4">Our Heritage & Mission</h2>
            <div className="w-20 h-1 bg-qarawin-red mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="arabesque-border p-6 rounded-lg bg-qarawin-darkgray">
              <h3 className="text-xl font-serif font-semibold text-qarawin-red mb-4">The Qarawiyyin Legacy</h3>
              <p className="text-qarawin-cream mb-4">
                Named after Al Qarawiyyin University in Fez, Morocco — the world's oldest existing university founded in 859 AD — 
                our community carries forward a millennium of intellectual tradition and innovation.
              </p>
              <p className="text-qarawin-cream">
                Just as Al Qarawiyyin became a beacon of knowledge across disciplines, Qarawin aims to illuminate 
                the path for Moroccan scientific and entrepreneurial brilliance on the global stage.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-qarawin-darkgray p-6 rounded-lg shadow-md border border-qarawin-red/20">
                <h3 className="text-xl font-serif font-semibold text-qarawin-cream mb-3">Our Mission</h3>
                <p className="text-qarawin-cream">
                  To cultivate a thriving ecosystem that connects Moroccan scientists, researchers, and deeptech 
                  entrepreneurs worldwide, fostering collaboration and innovation.
                </p>
              </div>
              
              <div className="bg-qarawin-darkgray p-6 rounded-lg shadow-md border border-qarawin-red/20">
                <h3 className="text-xl font-serif font-semibold text-qarawin-cream mb-3">Our Vision</h3>
                <p className="text-qarawin-cream">
                  To position Morocco as a global leader in scientific innovation and deeptech entrepreneurship, 
                  building on our rich intellectual heritage while embracing cutting-edge technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
