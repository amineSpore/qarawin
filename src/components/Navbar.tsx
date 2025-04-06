
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-qarawin-black/95 backdrop-blur-md shadow-md border-b border-qarawin-red/20' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {/* Empty left side for symmetry */}
          </div>
          
          <div className="hidden md:flex space-x-10 items-center text-sm font-montreal">
            <button 
              onClick={() => scrollToSection('purpose')} 
              className="font-medium text-qarawin-cream hover:text-qarawin-red transition-colors relative group"
            >
              Purpose
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-qarawin-red transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('advisors')} 
              className="font-medium text-qarawin-cream hover:text-qarawin-red transition-colors relative group"
            >
              Advisors
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-qarawin-red transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('founders')} 
              className="font-medium text-qarawin-cream hover:text-qarawin-red transition-colors relative group"
            >
              Founders
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-qarawin-red transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('chapters')} 
              className="font-medium text-qarawin-cream hover:text-qarawin-red transition-colors relative group"
            >
              Chapters
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-qarawin-red transition-all duration-300 group-hover:w-full"></span>
            </button>
          </div>

          <div className="flex items-center">
            <h1 className="text-sm font-inter font-bold">
              <span className="text-qarawin-cream transition-colors duration-300 hover:text-qarawin-red">
                QARAWIN
              </span>
            </h1>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="text-qarawin-cream hover:text-qarawin-red transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden bg-qarawin-darkgray/95 backdrop-blur-md transition-all duration-300 overflow-hidden ${
        isMobileMenuOpen ? 'max-h-screen border-b border-qarawin-red/20' : 'max-h-0'
      }`}>
        <div className="container mx-auto px-6 py-4 space-y-4 font-montreal">
          <button 
            onClick={() => scrollToSection('purpose')}
            className="block w-full text-left py-2 text-qarawin-cream hover:text-qarawin-red transition-colors"
          >
            Purpose
          </button>
          <button 
            onClick={() => scrollToSection('advisors')}
            className="block w-full text-left py-2 text-qarawin-cream hover:text-qarawin-red transition-colors"
          >
            Advisors
          </button>
          <button 
            onClick={() => scrollToSection('founders')}
            className="block w-full text-left py-2 text-qarawin-cream hover:text-qarawin-red transition-colors"
          >
            Founders
          </button>
          <button 
            onClick={() => scrollToSection('chapters')}
            className="block w-full text-left py-2 text-qarawin-cream hover:text-qarawin-red transition-colors"
          >
            Chapters
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
