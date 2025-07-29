
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

  // Close mobile menu when scrolling
  useEffect(() => {
    const handleScrollClose = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    
    window.addEventListener('scroll', handleScrollClose);
    return () => window.removeEventListener('scroll', handleScrollClose);
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      // Add offset to account for the fixed navbar
      const offset = 80; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    setIsMobileMenuOpen(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-qarawin-black/95 backdrop-blur-md shadow-md border-b border-qarawin-red/20' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 py-4">
          <div className="flex justify-between items-center">
            {/* QARAWIN text on the left */}
            <div className="flex items-center space-x-2">
              <h1 
                className="text-sm font-inter font-bold cursor-pointer"
                onClick={scrollToTop}
              >
                <span className="text-qarawin-cream transition-colors duration-300 hover:text-qarawin-red">
                  QARAWIN
                </span>
              </h1>
            </div>
            
            {/* Navigation links centered */}
            <div className="hidden md:flex space-x-10 items-center text-sm font-inter font-bold justify-center mx-auto">
              <button 
                onClick={() => scrollToSection('purpose')} 
                className="font-bold text-qarawin-cream hover:text-qarawin-red transition-colors relative group"
              >
                Purpose
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-qarawin-red transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button 
                onClick={() => scrollToSection('advisors')} 
                className="font-bold text-qarawin-cream hover:text-qarawin-red transition-colors relative group"
              >
                Advisors
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-qarawin-red transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button 
                onClick={() => scrollToSection('founders')} 
                className="font-bold text-qarawin-cream hover:text-qarawin-red transition-colors relative group"
              >
                Founders
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-qarawin-red transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button 
                onClick={() => scrollToSection('chapters')} 
                className="font-bold text-qarawin-cream hover:text-qarawin-red transition-colors relative group"
              >
                Chapters
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-qarawin-red transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button 
                onClick={() => scrollToSection('community-form')} 
                className="font-bold text-qarawin-cream hover:text-qarawin-red transition-colors relative group"
              >
                Join Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-qarawin-red transition-all duration-300 group-hover:w-full"></span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center">
              <div className="md:hidden">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
                  className="text-qarawin-cream hover:text-qarawin-red transition-colors p-1"
                  aria-label="Toggle menu"
                >
                  {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu - Updated for better mobile navigation */}
        <div 
          className={`md:hidden bg-qarawin-black/95 backdrop-blur-md transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-[350px]' : 'max-h-0'
          } border-b border-qarawin-red/20`}
        >
          <div className="container mx-auto px-6 py-4 space-y-4 font-inter font-bold">
            <button 
              onClick={() => scrollToSection('purpose')}
              className="block w-full text-left py-3 px-2 text-qarawin-cream hover:text-qarawin-red transition-colors border-b border-qarawin-red/10"
            >
              Purpose
            </button>
            <button 
              onClick={() => scrollToSection('advisors')}
              className="block w-full text-left py-3 px-2 text-qarawin-cream hover:text-qarawin-red transition-colors border-b border-qarawin-red/10"
            >
              Advisors
            </button>
            <button 
              onClick={() => scrollToSection('founders')}
              className="block w-full text-left py-3 px-2 text-qarawin-cream hover:text-qarawin-red transition-colors border-b border-qarawin-red/10"
            >
              Founders
            </button>
            <button 
              onClick={() => scrollToSection('chapters')}
              className="block w-full text-left py-3 px-2 text-qarawin-cream hover:text-qarawin-red transition-colors border-b border-qarawin-red/10"
            >
              Chapters
            </button>
            <button 
              onClick={() => scrollToSection('community-form')}
              className="block w-full text-left py-3 px-2 text-qarawin-cream hover:text-qarawin-red transition-colors border-b border-qarawin-red/10"
            >
              Join Us
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
