
import React, { useState, useEffect } from 'react';
import { useLanguage, Language } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';

import MyCompanyLogo from '../assets/logo-black.png';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const NavBar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="flex items-center space-x-2">
          <img src={ MyCompanyLogo } alt="우리 회사 로고" className="h-8" />  
          <span className="text-xl font-bold text-ihub-dark">
            <span className="text-ihub-gold">IHUB</span>GLOBAL
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            <li>
              <button 
                onClick={() => scrollToSection('home')}
                className="font-medium text-ihub-dark hover:text-ihub-gold transition-colors"
              >
                {t('nav.home')}
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('about')}
                className="font-medium text-ihub-dark hover:text-ihub-gold transition-colors"
              >
                {t('nav.about')}
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('services')}
                className="font-medium text-ihub-dark hover:text-ihub-gold transition-colors"
              >
                {t('nav.services')}
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('strengths')}
                className="font-medium text-ihub-dark hover:text-ihub-gold transition-colors"
              >
                {t('nav.strengths')}
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('contact')}
                className="font-medium text-ihub-dark hover:text-ihub-gold transition-colors"
              >
                {t('nav.contact')}
              </button>
            </li>
          </ul>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center text-ihub-dark hover:text-ihub-gold">
                <Globe size={20} className="mr-1" />
                <span className="uppercase">{language}</span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => handleLanguageChange('ko')} className="cursor-pointer">
                한국어
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleLanguageChange('en')} className="cursor-pointer">
                English
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleLanguageChange('jp')} className="cursor-pointer">
                日本語
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          {/* Language Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center text-ihub-dark hover:text-ihub-gold mr-4">
                <Globe size={20} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => handleLanguageChange('ko')} className="cursor-pointer">
                한국어
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleLanguageChange('en')} className="cursor-pointer">
                English
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleLanguageChange('jp')} className="cursor-pointer">
                日本語
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          {/* Hamburger Menu */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-ihub-dark focus:outline-none"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              className="h-6 w-6"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="py-4 px-6 space-y-3">
            <li>
              <button 
                onClick={() => scrollToSection('home')}
                className="w-full text-left py-2 font-medium text-ihub-dark hover:text-ihub-gold transition-colors"
              >
                {t('nav.home')}
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('about')}
                className="w-full text-left py-2 font-medium text-ihub-dark hover:text-ihub-gold transition-colors"
              >
                {t('nav.about')}
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('services')}
                className="w-full text-left py-2 font-medium text-ihub-dark hover:text-ihub-gold transition-colors"
              >
                {t('nav.services')}
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('strengths')}
                className="w-full text-left py-2 font-medium text-ihub-dark hover:text-ihub-gold transition-colors"
              >
                {t('nav.strengths')}
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full text-left py-2 font-medium text-ihub-dark hover:text-ihub-gold transition-colors"
              >
                {t('nav.contact')}
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavBar;
