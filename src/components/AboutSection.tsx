
import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Shield, Truck, FileCheck } from 'lucide-react';

const AboutSection: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

 return (
    <section id="about" ref={sectionRef} className="py-20 bg-ihub-gray">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-left mb-16 reveal opacity-0 transition-opacity duration-1000">
          {t('about.title')}
        </h2>
        
        <div className="max-w-4xl mb-16 reveal opacity-0 transition-opacity duration-1000 delay-100">
           <p 
            className="text-2xl font-semibold mb-4 text-left" 
            style={{ whiteSpace: 'pre-wrap' }} 
          >
           {t('about.tagline')}
          </p>
          <p 
             className="text-lg text-left leading-relaxed"
            style={{ whiteSpace: 'pre-wrap' }} 
          >
            {t('about.mainDescription')}
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
