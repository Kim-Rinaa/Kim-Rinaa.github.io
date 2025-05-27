
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MyHeroImage from '../assets/Back.png';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-900"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${MyHeroImage})`,
          filter: "brightness(0.5)"
        }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 opacity-0 animate-fade-in">
          <span className="font-kr">IHUBGLOBAL</span>
        </h1>
        <p className="text-xl md:text-3xl lg:text-4xl text-white mb-12 max-w-3xl mx-auto opacity-0 animate-fade-in-delay">
          {t('hero.slogan')}
        </p>
        <Button 
          onClick={() => scrollToSection('about')}
          className="bg-ihub-gold text-black hover:bg-yellow-500 font-bold px-8 py-6 text-lg rounded-md opacity-0 animate-fade-in-delay"
        >
          {t('hero.cta')}
        </Button>
      </div>
      
      {/* Scroll Down Indicator */}
      <div 
        className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce"
        onClick={() => scrollToSection('about')}
      >
        <ChevronDown className="text-white h-8 w-8 cursor-pointer" />
      </div>
    </section>
  );
};

export default HeroSection;
