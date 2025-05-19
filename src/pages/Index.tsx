
import React from 'react';
import { LanguageProvider } from '../contexts/LanguageContext';
import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import StrengthsSection from '../components/StrengthsSection';
import ContactSection from '../components/ContactSection';
import FooterSection from '../components/FooterSection';

const Index: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="w-full">
        <NavBar />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <StrengthsSection />
        <ContactSection />
        <FooterSection />
      </div>
    </LanguageProvider>
  );
};

export default Index;
