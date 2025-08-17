import React, { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">M</span>
                </div>
                <span className="text-xl font-bold text-gray-900 tracking-tight">MOUNTAIN</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#about" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-200">
                ABOUT
              </a>
              <a href="#services" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-200">
                WHAT WE DO
              </a>
              <a href="#clients" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-200">
                WHO WE SERVE
              </a>
              <a href="#knowledge" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-200">
                KNOWLEDGE
              </a>
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              variant="outline" 
              className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-6 py-2 rounded-full transition-all duration-300"
            >
              WORK WITH US
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
              <a href="#about" className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium">
                ABOUT
              </a>
              <a href="#services" className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium">
                WHAT WE DO
              </a>
              <a href="#clients" className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium">
                WHO WE SERVE
              </a>
              <a href="#knowledge" className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium">
                KNOWLEDGE
              </a>
              <div className="px-3 py-2">
                <Button 
                  variant="outline" 
                  className="w-full border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white rounded-full"
                >
                  WORK WITH US
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;