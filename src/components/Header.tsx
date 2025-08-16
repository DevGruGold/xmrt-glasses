
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { ToggleGroup, ToggleGroupItem } from './ui/toggle-group';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    document.documentElement.lang = language;
  };

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
            <span className="text-xl sm:text-2xl font-bold text-gray-900">{t('header.brand')}</span>
            <span className="text-xs sm:text-sm text-gray-600 ml-2">{t('header.subtitle')}</span>
          </div>
          
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-sm lg:text-base text-gray-700 hover:text-teal-600 transition-colors"
            >
              {t('header.features')}
            </button>
            <button 
              onClick={() => scrollToSection('use-cases')}
              className="text-sm lg:text-base text-gray-700 hover:text-teal-600 transition-colors"
            >
              {t('header.useCases')}
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-sm lg:text-base text-gray-700 hover:text-teal-600 transition-colors"
            >
              {t('header.pricing')}
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-sm lg:text-base text-gray-700 hover:text-teal-600 transition-colors"
            >
              {t('header.about')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-sm lg:text-base text-gray-700 hover:text-teal-600 transition-colors"
            >
              {t('header.contact')}
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            <ToggleGroup type="single" value={i18n.language} onValueChange={changeLanguage} className="mr-4">
              <ToggleGroupItem value="en" aria-label="English" className="text-xs px-2 py-1">
                EN
              </ToggleGroupItem>
              <ToggleGroupItem value="es-CR" aria-label="Español" className="text-xs px-2 py-1">
                ES
              </ToggleGroupItem>
              <ToggleGroupItem value="zh-CN" aria-label="中文" className="text-xs px-2 py-1">
                中文
              </ToggleGroupItem>
            </ToggleGroup>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-sm lg:text-base text-gray-700 hover:text-teal-600 transition-colors"
            >
              {t('header.requestDemo')}
            </button>
            <button className="bg-teal-600 text-white px-3 lg:px-4 py-2 rounded-lg text-sm lg:text-base hover:bg-teal-700 transition-colors">
              {t('header.buyNow')}
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
              <div className="px-3 py-2 mb-2">
                <ToggleGroup type="single" value={i18n.language} onValueChange={changeLanguage} className="w-full justify-start">
                  <ToggleGroupItem value="en" aria-label="English" className="text-xs px-3 py-2">
                    EN
                  </ToggleGroupItem>
                  <ToggleGroupItem value="es-CR" aria-label="Español" className="text-xs px-3 py-2">
                    ES
                  </ToggleGroupItem>
                  <ToggleGroupItem value="zh-CN" aria-label="中文" className="text-xs px-3 py-2">
                    中文
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
              <button 
                onClick={() => scrollToSection('features')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-teal-600 text-sm"
              >
                {t('header.features')}
              </button>
              <button 
                onClick={() => scrollToSection('use-cases')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-teal-600 text-sm"
              >
                {t('header.useCases')}
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-teal-600 text-sm"
              >
                {t('header.pricing')}
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-teal-600 text-sm"
              >
                {t('header.about')}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-teal-600 text-sm"
              >
                {t('header.contact')}
              </button>
              <div className="px-3 py-2 space-y-2">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full text-left text-gray-700 hover:text-teal-600 text-sm"
                >
                  {t('header.requestDemo')}
                </button>
                <button className="w-full bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 text-sm">
                  {t('header.buyNow')}
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
