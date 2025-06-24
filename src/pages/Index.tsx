// src/pages/Index.tsx (예시 파일명, 실제 파일명에 맞게 수정)
import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext'; // 경로에 맞게 수정

// 각 섹션 컴포넌트 import
import NavBar from '@/components/NavBar'; // 경로에 맞게 수정
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import StrengthsSection from '@/components/StrengthsSection';
import ContactSection from '@/components/ContactSection';
import FooterSection from '@/components/FooterSection';

const Index: React.FC = () => {
  const { t, language } = useLanguage(); // t 함수와 현재 언어 가져오기
  const [currentSection, setCurrentSection] = useState('home');

  // 스크롤 감지 로직 (이전 App.tsx 예시와 유사)
  useEffect(() => {
    const sections = ['home', 'about', 'services', 'strengths', 'contact'];
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.4, 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach(id => {
      const element = document.getElementById(id); // 각 섹션 컴포넌트의 최상위 요소에 id가 있어야 함
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach(id => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  // 각 섹션별 메타 정보 (한국어 기준, 필요시 LanguageContext와 연동)
  const getPageMeta = (sectionId: string) => {
    switch (sectionId) {
      case 'home':
        return {
          title: 'IHUBGLOBAL - 안전한 화학물류 선두주자',
          description: 'IHUBGLOBAL(아이허브글로벌)은 고객 맞춤형 화학물질 보관, 운송, 컨설팅 솔루션을 제공하여 안전하고 효율적인 물류 관리를 지원합니다.'
        };
      case 'about':
        return {
          title: '회사소개 | IHUBGLOBAL (아이허브글로벌) 화학물류',
          description: '아이허브글로벌(IHUBGLOBAL)의 철학과 비전, 로고 스토리와 핵심 가치를 소개합니다. 신뢰할 수 있는 화학물류 파트너입니다.'
        };
      case 'services':
        return {
          title: '솔루션 | IHUBGLOBAL (아이허브글로벌) 맞춤형 화학물류 서비스',
          description: '전문적인 보관 인프라, 통합 컨설팅, 스마트 물류 시스템, 위험 대응 프로토콜 등 아이허브글로벌(IHUBGLOBAL)의 차별화된 솔루션을 만나보세요.'
        };
      case 'strengths':
        return {
          title: '영업관리 및 강점 | IHUBGLOBAL (아이허브글로벌)',
          description: '설계된 보관, 맞춤형 해결, 정밀한 추적, 예방 중심 운영 등 아이허브글로벌(IHUBGLOBAL)만의 체계적인 영업관리 시스템과 핵심 강점을 소개합니다.'
        };
      case 'contact':
        return {
          title: '문의하기 | IHUBGLOBAL (아이허브글로벌) 고객 지원',
          description: '아이허브글로벌(IHUBGLOBAL)의 화학물류 서비스에 대해 궁금한 점이 있으신가요? 지금 바로 문의하시면 신속하고 전문적인 상담을 받으실 수 있습니다.'
        };
      default:
        return {
          title: 'IHUBGLOBAL (아이허브글로벌) - 화학물류 전문기업',
          description: '글로벌 화학물질 물류를 위한 최상의 솔루션을 제공하는 아이허브글로벌(IHUBGLOBAL)입니다.'
        };
    }
  };

  const meta = getPageMeta(currentSection);

  
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "IHUBGLOBAL",
    "alternateName": "아이허브글로벌", 
    "url": "https://www.ihubglobal.co.kr",
    "logo": "https://www.ihubglobal.co.kr/images/ihub-main-logo.png", 
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": t('contact.phone.value'), 
      "contactType": "Customer Service",
      "email": t('contact.email.value'), 
      "areaServed": "KR",
      "availableLanguage": ["Korean", "English", "Japanese"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": t('contact.address.value'), 
      "addressLocality": "아산시",
      "addressRegion": "충청남도",
      "postalCode": "336822",
      "addressCountry": "KR"
    }
  };

  return (
    <>
      <Helmet>
        <html lang={language} /> {/* 현재 언어에 맞게 lang 속성 변경 */}
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta property="og:image" content="https://www.ihubglobal.co.kr/images/ihubglobal-og-image.png" />
        <meta name="twitter:image" content="https://www.ihubglobal.co.kr/images/ihubglobal-og-image.png" />
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>

      <NavBar />
      <main> {/* 각 섹션을 main 태그로 감싸거나, div로 감싸도 됩니다. */}
        <HeroSection />    {/* 각 섹션 컴포넌트의 최상위 요소에 id가 있어야 IntersectionObserver가 작동합니다. */}
        <AboutSection />   {/* 예: <section id="about" ...> */}
        <ServicesSection />
        <StrengthsSection />
        <ContactSection />
      </main>
      <FooterSection />
    </>
  );
};

export default Index;