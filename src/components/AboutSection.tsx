import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

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
    <section 
      id="about" 
      ref={sectionRef} 
      className="py-20 bg-yellow-400 relative overflow-hidden min-h-screen flex items-center" 
    >
      <div className="container mx-auto px-4 relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-8 lg:gap-12">
          
          <div className="lg:w-1/2 flex flex-col justify-center text-black text-center lg:text-left reveal opacity-0 transition-opacity duration-1000">

            <div className="flex flex-col lg:flex-row items-center lg:items-center mb-6 lg:mb-8">
              <img 
                src="/images/ihub-main-logo.png" 
                alt="IHUBGLOBAL Logo" 
               className="w-36 h-auto md:w-44 lg:w-[220px] mr-0 lg:mr-4 mb-2 lg:mb-0"
              />
              <h1 className="text-white text-3xl md:text-4xl lg:text-4xl font-semibold">
                IHUBGLOBAL
              </h1>
            </div>

            <div className="max-w-md mx-auto lg:mx-0"> 
              <p className="text-xl md:text-2xl font-semibold mb-6" style={{ whiteSpace: 'pre-wrap' }}>
                {t('about.tagline')}
              </p>
              <p 
               className="text-base md:text-lg leading-relaxed" 
               style={{ whiteSpace: 'pre-wrap', wordBreak: 'keep-all' }}
               >
                {t('about.mainDescription')}
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 mt-10 lg:mt-0 flex-grow flex justify-center items-center relative reveal opacity-0 transition-opacity duration-1000 delay-100">
            <div 
              className="bg-white rounded-full shadow-lg overflow-hidden 
                         w-[300px] h-[300px] 
                         md:w-[400px] md:h-[400px] 
                         lg:w-[600px] lg:h-[600px]
                         xl:w-[700px] xl:h-[700px]" 
              style={{ 
              }}
            >

              <div className="w-full h-full flex justify-center items-center text-gray-400">

              </div>
            </div>
          </div>

        </div> 


      </div> 
    </section>
  );
};

export default AboutSection;