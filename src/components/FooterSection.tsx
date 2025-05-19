
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const FooterSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-ihub-darkblue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-bold">
              <span className="text-ihub-gold">IHUB</span>GLOBAL
            </h2>
            <p className="text-gray-400 mt-2">
              {t('hero.slogan')}
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <div>
              <h4 className="font-bold text-ihub-gold mb-3">{t('nav.about')}</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                    {t('nav.about')}
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                    {t('nav.services')}
                  </a>
                </li>
                <li>
                  <a href="#strengths" className="text-gray-400 hover:text-white transition-colors">
                    {t('nav.strengths')}
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-ihub-gold mb-3">{t('nav.contact')}</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">{t('contact.phone.value')}</li>
                <li className="text-gray-400">{t('contact.email.value')}</li>
                <li className="text-gray-400">{t('contact.address.value')}</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            {t('footer.copyright')}
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              {t('footer.privacy')}
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              {t('footer.terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
