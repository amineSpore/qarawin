
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

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
      <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-xl md:text-2xl font-serif font-bold">
            <span className="text-qarawin-red transition-colors duration-300 hover:text-qarawin-cream">
              Qarawin
            </span>
          </h1>
        </div>
        
        <div className="hidden md:flex space-x-8 items-center text-sm">
          <button 
            onClick={() => scrollToSection('about')} 
            className="font-medium text-qarawin-cream hover:text-qarawin-red transition-colors relative group"
          >
            About
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
            onClick={() => scrollToSection('community')} 
            className="font-medium text-qarawin-cream hover:text-qarawin-red transition-colors relative group"
          >
            Community
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-qarawin-red transition-all duration-300 group-hover:w-full"></span>
          </button>
          <Button
            variant="default"
            className="bg-qarawin-red hover:bg-qarawin-red/90 text-white shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 duration-300"
            onClick={() => scrollToSection('community')}
          >
            Join Us
          </Button>
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
      
      {/* Mobile Menu */}
      <div className={`md:hidden bg-qarawin-darkgray/95 backdrop-blur-md transition-all duration-300 overflow-hidden ${
        isMobileMenuOpen ? 'max-h-screen border-b border-qarawin-red/20' : 'max-h-0'
      }`}>
        <div className="container mx-auto px-6 py-4 space-y-4">
          <button 
            onClick={() => scrollToSection('about')}
            className="block w-full text-left py-2 text-qarawin-cream hover:text-qarawin-red transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('founders')}
            className="block w-full text-left py-2 text-qarawin-cream hover:text-qarawin-red transition-colors"
          >
            Founders
          </button>
          <button 
            onClick={() => scrollToSection('community')}
            className="block w-full text-left py-2 text-qarawin-cream hover:text-qarawin-red transition-colors"
          >
            Community
          </button>
          <Button
            variant="default"
            className="w-full bg-qarawin-red hover:bg-qarawin-red/90 text-white"
            onClick={() => scrollToSection('community')}
          >
            Join Us
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
