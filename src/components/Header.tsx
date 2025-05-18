
import { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Sun, Moon, Menu, X, Globe } from 'lucide-react';

interface HeaderProps {
  language: string;
  setLanguage: (lang: string) => void;
}

const Header = ({ language, setLanguage }: HeaderProps) => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('darkMode', !darkMode ? 'true' : 'false');
  };
  
  // Change language
  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    setLanguageMenuOpen(false);
  };
  
  // Check for saved dark mode preference
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    if (savedDarkMode) {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    }
  }, []);
  
  // Navigation items with translations
  const navItems = {
    ko: ['홈', '회사소개', '서비스', '고객사례', '문의하기'],
    en: ['Home', 'About', 'Services', 'Cases', 'Contact'],
    ja: ['ホーム', '会社紹介', 'サービス', '顧客事例', 'お問い合わせ']
  };
  
  // Nav items links
  const navLinks = ['#hero', '#about', '#services', '#testimonials', '#contact'];
  
  // Language display names
  const languageNames = {
    ko: '한국어',
    en: 'English',
    ja: '日本語'
  };
  
  return (
    <header className="fixed w-full bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm z-50 border-b border-border">
      <div className="container-padding py-4 flex justify-between items-center">
        <a href="#hero" className="flex items-center">
          <div className="text-primary dark:text-white font-bold text-xl md:text-2xl">
            IHUB GLOBAL
          </div>
        </a>
        
        {/* Desktop Nav */}
        {!isMobile && (
          <div className="flex items-center space-x-8">
            <nav>
              <ul className="flex space-x-6">
                {navItems[language as keyof typeof navItems].map((item, index) => (
                  <li key={index}>
                    <a 
                      href={navLinks[index]}
                      className="text-zinc-700 dark:text-zinc-300 hover:text-primary dark:hover:text-white transition duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex items-center space-x-3">
              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                  className="p-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors flex items-center gap-1"
                  aria-label="Change language"
                >
                  <Globe size={18} />
                  <span className="text-sm font-medium">{language.toUpperCase()}</span>
                </button>
                
                {/* Language dropdown */}
                {languageMenuOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-zinc-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical">
                      {Object.keys(languageNames).map((lang) => (
                        <button
                          key={lang}
                          className={`w-full text-left px-4 py-2 text-sm ${language === lang ? 'bg-zinc-100 dark:bg-zinc-700 text-primary' : 'text-zinc-700 dark:text-zinc-300'} hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors`}
                          onClick={() => changeLanguage(lang)}
                        >
                          {languageNames[lang as keyof typeof languageNames]}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              {/* Dark mode toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
          </div>
        )}
        
        {/* Mobile Menu Button */}
        {isMobile && (
          <div className="flex items-center space-x-2">
            {/* Language Selector for Mobile */}
            <div className="relative">
              <button
                onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                className="p-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors flex items-center gap-1"
                aria-label="Change language"
              >
                <Globe size={18} />
                <span className="text-sm font-medium">{language.toUpperCase()}</span>
              </button>
              
              {/* Language dropdown for Mobile */}
              {languageMenuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-zinc-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    {Object.keys(languageNames).map((lang) => (
                      <button
                        key={lang}
                        className={`w-full text-left px-4 py-2 text-sm ${language === lang ? 'bg-zinc-100 dark:bg-zinc-700 text-primary' : 'text-zinc-700 dark:text-zinc-300'} hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors`}
                        onClick={() => changeLanguage(lang)}
                      >
                        {languageNames[lang as keyof typeof languageNames]}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Dark mode toggle for Mobile */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            
            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        )}
      </div>
      
      {/* Mobile Menu */}
      {isMobile && (
        <div 
          className={`fixed inset-0 bg-white dark:bg-zinc-900 z-40 transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ top: '60px' }}
        >
          <nav className="container-padding py-8">
            <ul className="flex flex-col space-y-6">
              {navItems[language as keyof typeof navItems].map((item, index) => (
                <li key={index}>
                  <a 
                    href={navLinks[index]}
                    className="text-xl font-medium text-zinc-800 dark:text-zinc-200 hover:text-primary dark:hover:text-white transition duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
