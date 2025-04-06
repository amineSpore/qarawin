
import React from 'react';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full bg-qarawin-black/90 backdrop-blur-sm z-50 shadow-sm border-b border-qarawin-red/20">
      <div className="container mx-auto px-4 md:px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-xl md:text-2xl font-serif font-bold text-qarawin-red">
            Qarawin
          </h1>
        </div>
        <div className="hidden md:flex space-x-6 items-center text-sm">
          <a href="#about" className="font-medium text-qarawin-cream hover:text-qarawin-red transition-colors">
            About
          </a>
          <a href="#founders" className="font-medium text-qarawin-cream hover:text-qarawin-red transition-colors">
            Founders
          </a>
          <a href="#community" className="font-medium text-qarawin-cream hover:text-qarawin-red transition-colors">
            Community
          </a>
          <Button
            variant="default"
            className="bg-qarawin-red hover:bg-qarawin-red/90 text-white"
          >
            Join Us
          </Button>
        </div>
        <div className="md:hidden">
          <Button
            variant="default"
            size="sm"
            className="bg-qarawin-red hover:bg-qarawin-red/90 text-white"
          >
            Join
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
