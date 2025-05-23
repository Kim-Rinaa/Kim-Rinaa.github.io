
import React, { createContext, useState, useContext, ReactNode } from 'react';

export type Language = 'ko' | 'en' | 'jp';

interface LanguageContextProps {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

const translations = {
  ko: {
    // Navigation
    'nav.home': '홈',
    'nav.about': '회사소개',
    'nav.services': '서비스',
    'nav.strengths': '강점',
    'nav.contact': '문의',
    
    // Hero
    'hero.slogan': '안전하고 효율적인 화학물질 관리의 선두주자',
    'hero.cta': '자세히 보기',
    
    // About
    'about.title': 'IHUBGLOBAL 소개',
    'about.description': 'IHUBGLOBAL은 화학물질 전문 물류 기업으로서 20여 년간 축적된 경험과 노하우ㄱㄷ퍄퍄를 바탕으로 고객에게 최상의 물류 서비스를 제공합니다. 국내외 화학물질 규제에 대한 깊은 이해와 안전 중심의 철학으로 글로벌 화학 산업의 발전에 기여하고 있습니다.',
    'about.value1': '안전 관리',
    'about.value2': '스마트 물류',
    'about.value3': '규제 준수',
    'about.value1.desc': '엄격한 품질관리와 안전기준 준수로 무사고 실현',
    'about.value2.desc': 'IoT 기반 실시간 모니터링 및 첨단 물류 시스템',
    'about.value3.desc': '국내외 화학물질 규제 전문지식 보유 및 관리',
    
    // Services
    'services.title': '서비스',
    'services.storage': '보관 인프라',
    'services.transport': '통합 컨설팅',
    'services.inventory': '스마트 물류시스템',
    'services.emergency': '위험 대응 통합 프로토콜',
    'services.storage.desc': `전용 창고와 피해 저감 설비를 갖춘
시설·운영 통합형 안전 보관`,
    'services.transport.desc': '입고부터 보고서 작성까지 대응하는 맞춤형 화학물류 컨설팅',
    'services.inventory.desc': '자체 개발 WMS 기반 화학물질 KPI까지 관리하는 데이터 기반 물류 운영',
    'services.emergency.desc': '24시간 감시와 법규 기반 운영으로 생명과 환경까지 고려한 안전 기준 제공',
    
    // Strengths
    'strengths.title': '핵심 강점',
    'strengths.cert': '국제 인증',
    'strengths.monitoring': '24/7 모니터링',
    'strengths.safety': '99.9% 안전 기록',
    'strengths.global': '글로벌 네트워크',
    'strengths.cert.desc': 'ISO 9001, ISO 14001, OHSAS 18001 인증',
    'strengths.monitoring.desc': '화학물질 상태 실시간 원격 모니터링',
    'strengths.safety.desc': '10년 연속 무사고 안전 기록 달성',
    'strengths.global.desc': '전 세계 30개국 파트너십 네트워크',
    
    // Contact
    'contact.title': '문의하기',
    'contact.address': '주소',
    'contact.phone': '전화',
    'contact.email': '이메일',
    'contact.hours': '영업시간',
    'contact.hours.value': '월-금: 09:00 - 18:00',
    'contact.form.name': '담당자',
    'contact.form.email': '이메일',
    'contact.form.message': '메시지',
    'contact.form.submit': '문의하기',
    'contact.address.value': '충청남도 아산시 영인면 신봉리 170-6',
    'contact.phone.value': '+82-10-3397-9023',
    'contact.email.value': 'hs.lee@ihubglobal.co.kr',
    
    // Footer
    'footer.copyright': '© 2025 IHUBGLOBAL. All rights reserved.',
    'footer.privacy': '개인정보처리방침',
    'footer.terms': '이용약관',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.strengths': 'Strengths',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.slogan': 'GLeader in Safe and Efficient Chemical Management',
    'hero.cta': 'Learn More',
    
    // About
    'about.title': 'About IHUBGLOBAL',
    'about.description': 'IHUBGLOBAL is a specialized chemical logistics company with over 20 years of accumulated experience, providing clients with premium logistics services. With deep understanding of domestic and international chemical regulations and a safety-centered philosophy, we contribute to the development of the global chemical industry.',
    'about.value1': 'Safety Management',
    'about.value2': 'Smart Logistics',
    'about.value3': 'Regulatory Compliance',
    'about.value1.desc': 'Achieving zero incidents through strict quality control and safety standards',
    'about.value2.desc': 'IoT-based real-time monitoring and advanced logistics systems',
    'about.value3.desc': 'Expertise in domestic and international chemical regulations',
    
    // Services
    'services.title': 'Services',
    'services.storage': 'Chemical Storage',
    'services.transport': 'Temperature-Controlled Transport',
    'services.inventory': 'Hazardous Material Inventory Systems',
    'services.emergency': 'Emergency Response Protocols',
    'services.storage.desc': 'Safe chemical storage in hazardous material certified facilities',
    'services.transport.desc': 'Secure transportation through specialized vehicles with temperature and environmental controls',
    'services.inventory.desc': 'Implementation of real-time inventory tracking and chemical management systems',
    'services.emergency.desc': '24-hour emergency response and crisis management protocols',
    
    // Strengths
    'strengths.title': 'Core Strengths',
    'strengths.cert': 'International Certifications',
    'strengths.monitoring': '24/7 Monitoring',
    'strengths.safety': '99.9% Safety Record',
    'strengths.global': 'Global Network',
    'strengths.cert.desc': 'ISO 9001, ISO 14001, OHSAS 18001 certified',
    'strengths.monitoring.desc': 'Real-time remote monitoring of chemical conditions',
    'strengths.safety.desc': '10 consecutive years of incident-free safety record',
    'strengths.global.desc': 'Partnership network across 30 countries worldwide',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.address': 'Address',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.hours': 'Business Hours',
    'contact.hours.value': 'Mon-Fri: 09:00 - 18:00',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Submit',
    'contact.address.value': '170-6, Sinbong-ri, Yeongin-myeon, Asan-si, Chungcheongnam-do',
    'contact.phone.value': '+82-01-3397-9023',
    'contact.email.value': 'hs.lee@ihubglobal.co.kr',
    
    // Footer
    'footer.copyright': '© 2023 IHUBGLOBAL. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
  },
  jp: {
    // Navigation
    'nav.home': 'ホーム',
    'nav.about': '会社紹介',
    'nav.services': 'サービス',
    'nav.strengths': '強み',
    'nav.contact': 'お問い合わせ',
    
    // Hero
    'hero.slogan': '安全で効率的な化学物質管理の先駆者',
    'hero.cta': '詳細を見る',
    
    // About
    'about.title': 'IHUBGLOBALについて',
    'about.description': 'IHUBGLOBALは20年以上の実績を持つ化学物質専門の物流企業として、お客様に最高の物流サービスを提供しています。国内外の化学物質規制に関する深い理解と安全中心の哲学で、グローバル化学産業の発展に貢献しています。',
    'about.value1': '安全管理',
    'about.value2': 'スマート物流',
    'about.value3': '規制遵守',
    'about.value1.desc': '厳格な品質管理と安全基準の遵守により無事故を実現',
    'about.value2.desc': 'IoTベースのリアルタイムモニタリングと先端物流システム',
    'about.value3.desc': '国内外の化学物質規制の専門知識保有および管理',
    
    // Services
    'services.title': 'サービス',
    'services.storage': '化学物質保管',
    'services.transport': '温度制御輸送',
    'services.inventory': '危険物在庫システム',
    'services.emergency': '緊急対応プロトコル',
    'services.storage.desc': '危険物取扱認証施設での安全な化学物質保管',
    'services.transport.desc': '温度および環境制御が可能な特殊車両による安全輸送',
    'services.inventory.desc': 'リアルタイム在庫追跡および化学物質管理システムの構築',
    'services.emergency.desc': '24時間緊急事態対応および危機管理プロトコル',
    
    // Strengths
    'strengths.title': '核心的な強み',
    'strengths.cert': '国際認証',
    'strengths.monitoring': '24時間監視',
    'strengths.safety': '99.9%安全記録',
    'strengths.global': 'グローバルネットワーク',
    'strengths.cert.desc': 'ISO 9001、ISO 14001、OHSAS 18001認証取得',
    'strengths.monitoring.desc': '化学物質の状態をリアルタイムで遠隔監視',
    'strengths.safety.desc': '10年連続無事故安全記録達成',
    'strengths.global.desc': '世界30カ国のパートナーシップネットワーク',
    
    // Contact
    'contact.title': 'お問い合わせ',
    'contact.address': '住所',
    'contact.phone': '電話',
    'contact.email': 'メール',
    'contact.hours': '営業時間',
    'contact.hours.value': '月-金: 09:00 - 18:00',
    'contact.form.name': 'お名前',
    'contact.form.email': 'メールアドレス',
    'contact.form.message': 'メッセージ',
    'contact.form.submit': '送信',
    'contact.address.value': '忠清南道牙山市霊仁面新峰里170-6',
    'contact.phone.value': '+82-01-3397-9023',
    'contact.email.value': 'hs.lee@ihubglobal.co.kr',
    
    // Footer
    'footer.copyright': '© 2023 IHUBGLOBAL. 全著作権所有。',
    'footer.privacy': 'プライバシーポリシー',
    'footer.terms': '利用規約',
  },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ko');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
