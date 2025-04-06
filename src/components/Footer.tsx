
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-qarawin-blue text-white pt-12 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-serif font-bold">Qarawin</h2>
              <p className="text-white/70 mt-1">Moroccan Scientists & Deeptech Network</p>
            </div>
            
            <div className="flex flex-col md:flex-row md:space-x-12 space-y-4 md:space-y-0 items-center md:items-start">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider mb-2 text-qarawin-gold">Navigation</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#about" className="text-white/70 hover:text-white transition-colors">About</a></li>
                  <li><a href="#founders" className="text-white/70 hover:text-white transition-colors">Founders</a></li>
                  <li><a href="#community" className="text-white/70 hover:text-white transition-colors">Community</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider mb-2 text-qarawin-gold">Contact</h3>
                <ul className="space-y-2 text-sm">
                  <li><span className="text-white/70">Email:</span> <a href="mailto:info@qarawin.org" className="text-white hover:text-qarawin-gold transition-colors">info@qarawin.org</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-6 mt-6">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
              <p>© 2025 Qarawin. All rights reserved.</p>
              <p className="mt-2 md:mt-0">Inspired by Al Qarawiyyin University, founded 859 AD</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
