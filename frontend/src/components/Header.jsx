import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg border-b border-emerald-100 shadow-lg' 
        : 'bg-white/80 backdrop-blur-md border-b border-white/20'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="relative group">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                <span className="text-white font-bold text-xl">MT</span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full border-2 border-white"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent">
                Mountain Thoughts
              </h1>
              <p className="text-xs text-emerald-600 font-medium -mt-1">Professional Consulting</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => scrollToSection('home')}
                className="px-4 py-2 text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all duration-200 font-medium"
              >
                Home
              </button>
              <div className="relative group">
                <button className="flex items-center px-4 py-2 text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all duration-200 font-medium">
                  Services
                  <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-emerald-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                  <div className="p-3">
                    <button 
                      onClick={() => scrollToSection('services')}
                      className="block w-full text-left px-4 py-3 text-sm text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-xl transition-all duration-200"
                    >
                      <div className="font-medium">Environmental Impact Assessment</div>
                      <div className="text-xs text-slate-500 mt-1">EIA & IEE Studies</div>
                    </button>
                    <button 
                      onClick={() => scrollToSection('services')}
                      className="block w-full text-left px-4 py-3 text-sm text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-xl transition-all duration-200"
                    >
                      <div className="font-medium">Value Chain Development</div>
                      <div className="text-xs text-slate-500 mt-1">NTFP & Agricultural Chains</div>
                    </button>
                    <button 
                      onClick={() => scrollToSection('services')}
                      className="block w-full text-left px-4 py-3 text-sm text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-xl transition-all duration-200"
                    >
                      <div className="font-medium">Capacity Building</div>
                      <div className="text-xs text-slate-500 mt-1">Training & Development</div>
                    </button>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => scrollToSection('team')}
                className="px-4 py-2 text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all duration-200 font-medium"
              >
                Team
              </button>
              <button 
                onClick={() => scrollToSection('insights')}
                className="px-4 py-2 text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all duration-200 font-medium"
              >
                Insights
              </button>
            </div>
            
            <div className="ml-8">
              <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
                Get Started
              </Button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="p-3 text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-emerald-100 py-4 bg-white/95 backdrop-blur-lg rounded-b-2xl shadow-xl">
            <div className="space-y-2">
              <button 
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-4 py-3 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-xl font-medium transition-all duration-200"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-left px-4 py-3 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-xl font-medium transition-all duration-200"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('team')}
                className="block w-full text-left px-4 py-3 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-xl font-medium transition-all duration-200"
              >
                Team
              </button>
              <button 
                onClick={() => scrollToSection('insights')}
                className="block w-full text-left px-4 py-3 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-xl font-medium transition-all duration-200"
              >
                Insights
              </button>
              <div className="pt-4 px-4">
                <Button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white py-3 rounded-xl shadow-lg">
                  Get Started
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