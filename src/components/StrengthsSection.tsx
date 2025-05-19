
import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { CheckCircle, Clock, Percent, Globe } from 'lucide-react';

const StrengthsSection: React.FC = () => {
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

    const elements = document.querySelectorAll('.reveal-strength');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const strengths = [
    {
      icon: <CheckCircle className="h-12 w-12 text-ihub-gold" />,
      title: t('strengths.cert'),
      description: t('strengths.cert.desc'),
      delay: 'delay-100',
    },
    {
      icon: <Clock className="h-12 w-12 text-ihub-gold" />,
      title: t('strengths.monitoring'),
      description: t('strengths.monitoring.desc'),
      delay: 'delay-200',
    },
    {
      icon: <Percent className="h-12 w-12 text-ihub-gold" />,
      title: t('strengths.safety'),
      description: t('strengths.safety.desc'),
      delay: 'delay-300',
    },
    {
      icon: <Globe className="h-12 w-12 text-ihub-gold" />,
      title: t('strengths.global'),
      description: t('strengths.global.desc'),
      delay: 'delay-400',
    },
  ];

  return (
    <section id="strengths" ref={sectionRef} className="py-20 bg-gray-100 relative">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-10" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')" }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 reveal-strength opacity-0 transition-opacity duration-1000">
          {t('strengths.title')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {strengths.map((strength, index) => (
            <div 
              key={index}
              className={`text-center reveal-strength opacity-0 transition-opacity duration-1000 ${strength.delay}`}
            >
              <div className="flex justify-center mb-4">
                {strength.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{strength.title}</h3>
              <p className="text-gray-600">{strength.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrengthsSection;
