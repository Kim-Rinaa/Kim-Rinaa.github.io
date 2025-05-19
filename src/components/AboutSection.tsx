
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
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 reveal opacity-0 transition-opacity duration-1000">
          {t('about.title')}
        </h2>
        
        <div className="max-w-4xl mx-auto mb-16 reveal opacity-0 transition-opacity duration-1000 delay-100">
          <p className="text-lg text-center leading-relaxed">
            {t('about.description')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Value 1 */}
          <div className="bg-white rounded-lg p-8 shadow-lg text-center reveal opacity-0 transition-opacity duration-1000 delay-200">
            <div className="flex justify-center mb-4">
              <Shield className="h-16 w-16 text-ihub-gold" />
            </div>
            <h3 className="text-xl font-bold mb-4">{t('about.value1')}</h3>
            <p className="text-gray-600">{t('about.value1.desc')}</p>
          </div>
          
          {/* Value 2 */}
          <div className="bg-white rounded-lg p-8 shadow-lg text-center reveal opacity-0 transition-opacity duration-1000 delay-300">
            <div className="flex justify-center mb-4">
              <Truck className="h-16 w-16 text-ihub-gold" />
            </div>
            <h3 className="text-xl font-bold mb-4">{t('about.value2')}</h3>
            <p className="text-gray-600">{t('about.value2.desc')}</p>
          </div>
          
          {/* Value 3 */}
          <div className="bg-white rounded-lg p-8 shadow-lg text-center reveal opacity-0 transition-opacity duration-1000 delay-400">
            <div className="flex justify-center mb-4">
              <FileCheck className="h-16 w-16 text-ihub-gold" />
            </div>
            <h3 className="text-xl font-bold mb-4">{t('about.value3')}</h3>
            <p className="text-gray-600">{t('about.value3.desc')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
