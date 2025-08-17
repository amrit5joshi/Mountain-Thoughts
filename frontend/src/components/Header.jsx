import React, { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18 py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">MT</span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-orange-500 rounded-full"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Mountain Thoughts</h1>
              <p className="text-xs text-slate-500 -mt-1">Professional Consulting</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <div className="flex items-center space-x-1">
              <a href="#home" className="px-4 py-2 text-slate-700 hover:text-indigo-600 hover:bg-slate-50 rounded-lg transition-all duration-200 font-medium">
                Home
              </a>
              <div className="relative group">
                <button className="flex items-center px-4 py-2 text-slate-700 hover:text-indigo-600 hover:bg-slate-50 rounded-lg transition-all duration-200 font-medium">
                  Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-slate-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="p-2">
                    <a href="#eia" className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 rounded-lg">Environmental Impact Assessment</a>
                    <a href="#valuechain" className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 rounded-lg">Value Chain Development</a>
                    <a href="#training" className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 rounded-lg">Capacity Building</a>
                    <a href="#government" className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 rounded-lg">Government Support</a>
                  </div>
                </div>
              </div>
              <a href="#projects" className="px-4 py-2 text-slate-700 hover:text-indigo-600 hover:bg-slate-50 rounded-lg transition-all duration-200 font-medium">
                Projects
              </a>
              <a href="#team" className="px-4 py-2 text-slate-700 hover:text-indigo-600 hover:bg-slate-50 rounded-lg transition-all duration-200 font-medium">
                Team
              </a>
              <a href="#insights" className="px-4 py-2 text-slate-700 hover:text-indigo-600 hover:bg-slate-50 rounded-lg transition-all duration-200 font-medium">
                Insights
              </a>
            </div>
            
            <div className="ml-8">
              <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                Get Started
              </Button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 text-slate-600 hover:text-indigo-600 hover:bg-slate-50 rounded-lg transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 py-4">
            <div className="space-y-2">
              <a href="#home" className="block px-4 py-3 text-slate-700 hover:bg-slate-50 rounded-lg font-medium">
                Home
              </a>
              <a href="#services" className="block px-4 py-3 text-slate-700 hover:bg-slate-50 rounded-lg font-medium">
                Services
              </a>
              <a href="#projects" className="block px-4 py-3 text-slate-700 hover:bg-slate-50 rounded-lg font-medium">
                Projects
              </a>
              <a href="#team" className="block px-4 py-3 text-slate-700 hover:bg-slate-50 rounded-lg font-medium">
                Team
              </a>
              <a href="#insights" className="block px-4 py-3 text-slate-700 hover:bg-slate-50 rounded-lg font-medium">
                Insights
              </a>
              <div className="pt-4">
                <Button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 rounded-full">
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