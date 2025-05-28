
import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Warehouse, Truck, FileCheck, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesSection: React.FC = () => {
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

    const elements = document.querySelectorAll('.reveal-service');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const services = [
    {
      icon: <Warehouse className="h-12 w-12 mb-4 text-ihub-gold" />,
      title: t('services.storage'),
      description: t('services.storage.desc'),
      delay: 'delay-100',
    },
    {
      icon: <Truck className="h-12 w-12 mb-4 text-ihub-gold" />,
      title: t('services.transport'),
      description: t('services.transport.desc'),
      delay: 'delay-200',
    },
    {
      icon: <FileCheck className="h-12 w-12 mb-4 text-ihub-gold" />,
      title: t('services.inventory'),
      description: t('services.inventory.desc'),
      delay: 'delay-300',
    },
    {
      icon: <Shield className="h-12 w-12 mb-4 text-ihub-gold" />,
      title: t('services.emergency'),
      description: t('services.emergency.desc'),
      delay: 'delay-400',
    },
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 reveal-service opacity-0 transition-opacity duration-1000">
          {t('services.title')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className={`reveal-service opacity-0 transition-opacity duration-1000 ${service.delay} border-t-4 border-ihub-gold hover:shadow-lg transition-shadow duration-300`}
            >
              <CardHeader className="flex flex-col items-center">
                {service.icon}
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                  <p 
                  className="text-gray-600"
                  style={{ whiteSpace: 'pre-wrap' }} 
                >
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
