
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';
import LoginModal from './LoginModal';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-qarawin-black/95 backdrop-blur-md shadow-md border-b border-qarawin-red/20' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 md:px-6 py-4">
          <div className="flex justify-between items-center">
            {/* QARAWIN logo on the left */}
            <div className="flex items-center">
              <h1 className="text-sm font-inter font-bold">
                <span className="text-qarawin-cream transition-colors duration-300 hover:text-qarawin-red">
                  QARAWIN
                </span>
              </h1>
            </div>
            
            {/* Navigation links centered */}
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

            {/* Admin button on the right */}
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setIsLoginModalOpen(true)}
                className="hidden md:flex items-center text-qarawin-cream hover:text-qarawin-red transition-colors text-sm"
              >
                <LogIn size={16} className="mr-1" />
                <span>Admin</span>
              </button>
              
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
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsLoginModalOpen(true);
              }}
              className="flex items-center py-2 text-qarawin-cream hover:text-qarawin-red transition-colors"
            >
              <LogIn size={16} className="mr-1" />
              <span>Admin Login</span>
            </button>
          </div>
        </div>
      </nav>
      
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </>
  );
};

export default Navbar;
