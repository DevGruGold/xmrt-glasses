
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <div className="flex items-center">
            <span className="text-xl sm:text-2xl font-bold text-gray-900">XMRT</span>
            <span className="text-xs sm:text-sm text-gray-600 ml-2">Glasses</span>
          </div>
          
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-sm lg:text-base text-gray-700 hover:text-teal-600 transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('use-cases')}
              className="text-sm lg:text-base text-gray-700 hover:text-teal-600 transition-colors"
            >
              Use Cases
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-sm lg:text-base text-gray-700 hover:text-teal-600 transition-colors"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-sm lg:text-base text-gray-700 hover:text-teal-600 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-sm lg:text-base text-gray-700 hover:text-teal-600 transition-colors"
            >
              Contact
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-sm lg:text-base text-gray-700 hover:text-teal-600 transition-colors"
            >
              Request Demo
            </button>
            <button className="bg-teal-600 text-white px-3 lg:px-4 py-2 rounded-lg text-sm lg:text-base hover:bg-teal-700 transition-colors">
              Buy Now
            </button>
          </div>

          <button 
            className="md:hidden p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <button 
                onClick={() => scrollToSection('features')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-teal-600 text-sm"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('use-cases')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-teal-600 text-sm"
              >
                Use Cases
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-teal-600 text-sm"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-teal-600 text-sm"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-teal-600 text-sm"
              >
                Contact
              </button>
              <div className="px-3 py-2 space-y-2">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full text-left text-gray-700 hover:text-teal-600 text-sm"
                >
                  Request Demo
                </button>
                <button className="w-full bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 text-sm">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
