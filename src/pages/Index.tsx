
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  const [language, setLanguage] = useState('ko'); // Default language is Korean
  
  // Check for saved language preference
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && ['ko', 'en', 'ja'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);
  
  // Intersection Observer for scroll animations
  useEffect(() => {
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    animateElements.forEach(element => {
      observer.observe(element);
    });
    
    return () => {
      animateElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);
  
  // Add Google Analytics code
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-EXAMPLE";
    document.head.appendChild(script);

    const gaScript = document.createElement('script');
    gaScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-EXAMPLE');
    `;
    document.head.appendChild(gaScript);

    return () => {
      document.head.removeChild(script);
      document.head.removeChild(gaScript);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
      <Header language={language} setLanguage={setLanguage} />
      <Hero language={language} />
      <About language={language} />
      <Services language={language} />
      <Testimonials language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </div>
  );
};

export default Index;
