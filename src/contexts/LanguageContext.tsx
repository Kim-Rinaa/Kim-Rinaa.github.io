
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
    'nav.services': '솔루션',
    'nav.strengths': '영업관리',
    'nav.contact': '문의',
    
    // Hero
    'hero.slogan': '안전하고 효율적인 화학물질 관리의 선두주자',
    'hero.cta': 'About us',
    
    // About
    'about.title': 'IHUBGLOBAL',
    'about.tagline': '스마일을 담은 연결, 세상을 잇다.',
    'about.mainDescription':`아이허브글로벌의 로고는 단순한 심볼이 아닙니다.
그 안에는 우리의 철학과 비전이 담겨 있습니다.
‘i’는 사람을, ‘H’는 허브(Hub)를,
그 둘을 잇는 곡선은 스마일을 의미합니다.
     
사람 중심의 서비스
안전하고 효율적인 물류 시스템
책임 있는 운영으로 이어지는 신뢰
     
우리는 이 모든 가치를
하나의 스마일로 담아냅니다.
     
IHUBGLOBAL의 노란색은
‘준비된 안전’, ‘관리되는 리스크’의 색입니다.
     
IHUBGLOBAL은 단순한 물류 기업을 넘어,
비즈니스, 정보, 시스템을 스마트하게 이어주는'허브'입니다.`,

    // Services
    'services.title': 'Solution',
    'services.storage': '보관 인프라',
    'services.transport': '통합 컨설팅',
    'services.inventory': '스마트 물류시스템',
    'services.emergency': '위험 대응 통합 프로토콜',
    'services.storage.desc': `전용 창고와 피해 저감 설비를 갖춘
시설·운영 통합형 안전 보관`, 
    'services.transport.desc': `입고부터 보고서 작성까지 대응하는 맞춤형 화학물류 컨설팅`, 
    'services.inventory.desc': `자체 개발 WMS 기반 화학물질 KPI까지 관리하는 데이터 기반 물류 운영`, 
    'services.emergency.desc': `24시간 감시와 법규 기반 운영으로
    생명과 환경까지 고려한 
안전 기준 제공`, 
    
    // Strengths
    'strengths.title': 'Management',
    'strengths.cert': '설계된 보관',
    'strengths.monitoring': '맞춤형 해결',
    'strengths.safety': '정밀한 추적',
    'strengths.global': `예방 중심 운영`,
    'strengths.cert.desc': `화학물질의 특성과 기준에 맞춰 
보관 환경을 사전 설계`,
    'strengths.monitoring.desc': `고객의 상황과 니즈를 분석해
실질적인 해법을 제시`,
    'strengths.safety.desc': `재고부터 출고 이력까지
실시간으로 추적·관리`,
    'strengths.global.desc': `24시간 감시 체계와 사고 방지 프로세스로 
위험 요소를 선제적으로 대응`,
    
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
    'toast.mailto.title': '메일 작성창이 열렸습니다',
    'toast.mailto.description': '메일 프로그램을 확인하고 문의 내용을 전송해주세요.',
    
    // Footer
    'footer.copyright': '© 2025 IHUBGLOBAL. All rights reserved.',
    'footer.privacy': '개인정보처리방침',
    'footer.terms': '이용약관',
  },
  
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Solution',
    'nav.strengths': 'Management',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.slogan': 'Leader in Safe and Efficient Chemical Management',
    'hero.cta': 'About us',
    
    // About
    'about.title': 'IHUBGLOBAL',
    'about.tagline': `Connecting with a Smile,
Bridging the World.`,
    'about.mainDescription': `IHUBGLOBAL's logo is not just a simple symbol.
It embodies our philosophy and vision.
'i' represents people, 'H' represents Hub,
and the curve connecting the two signifies a smile.
     
People-centric service
Safe and efficient logistics system
Trust built on responsible operations
     
We encapsulate all these values
into a single smile.
     
IHUBGLOBAL's yellow
is the color of 'prepared safety' and 'managed risk'.
     
IHUBGLOBAL is more than just a logistics company;
it is a 'hub' that smartly connects businesses, information, and systems.`,


    
    // Services
    'services.title': 'Solution',
    'services.storage': 'Storage Infrastructure',
    'services.transport': 'Integrated Consulting',
    'services.inventory': 'Smart Logistics System',
    'services.emergency': `Risk Response Protocol`,
    'services.storage.desc': `Facility-operation integrated 
safe storage with dedicated 
warehouses and damage 
mitigation facilities`, 
    'services.transport.desc': `Customized chemical logistics 
 consulting covering everything 
from receiving to reporting.`, 
    'services.inventory.desc': `Data-driven logistics operation 
managing up to chemical KPIs 
based on proprietary WMS`, 
    'services.emergency.desc': `Providing safety standards
considering life and environment
through 24-hour monitoring and
regulation-based operation`, 
    
    // Strengths
    'strengths.title': 'Management',
    'strengths.cert': 'Designed Storage',
    'strengths.monitoring': 'Customized Solutions',
    'strengths.safety': 'Precise Tracking',
    'strengths.global': 'Preventive Operations',
    'strengths.cert.desc': `Pre-designing storage environments
     according to chemical properties and standards`,
    'strengths.monitoring.desc': `Analyzing customer situations and needs
     to provide practical solutions`,
    'strengths.safety.desc': `Real-time tracking and management
     from inventory to shipping history`,
    'strengths.global.desc': `Proactively responding to risk factors
     with a 24-hour monitoring system and accident prevention processes`,
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.address': 'Address',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.hours': 'Business Hours',
    'contact.hours.value': 'Mon-Fri: 09:00 - 18:00',
    'contact.form.name': 'Contact Person', 
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Inquiry',
    'contact.address.value': '170-6, Sinbong-ri, Yeongin-myeon, Asan-si, Chungcheongnam-do, South Korea',
    'contact.phone.value': '+82-10-3397-9023',
    'contact.email.value': 'hs.lee@ihubglobal.co.kr',
    'toast.mailto.title': 'Mail Client Opened',
    'toast.mailto.description': 'Please check your mail client to send the inquiry.',
    
    // Footer
    'footer.copyright': '© 2025 IHUBGLOBAL. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
  },


  jp: {
      // Navigation
    'nav.home': 'ホーム',
    'nav.about': '会社概要', 
    'nav.services': 'ソリューション', 
    'nav.strengths': 'マネジメント', 
    'nav.contact': 'お問い合わせ',
    
    // Hero
    'hero.slogan': '安全で効率的な化学物質管理の先駆者', 
    'hero.cta': 'About us',
    
    // About
    'about.title': 'IHUBGLOBAL', 
    'about.tagline': '笑顔でつなぐ、世界を結ぶ。',
        'about.mainDescription': `IHUBGLOBALのロゴは、単なるシンボルではありません。
        
そこには私たちの哲学とビジョンが込められています。
「i」は人を、「H」はハブ(Hub)を、その二つを結ぶ曲線は笑顔を意味します。

人中心のサービス、
安全で効率的な物流システム、
そして責任ある運営で築く信頼。

私たちはこれら全ての価値を、一つの笑顔に込めています。

IHUBGLOBALの黄色は「準備された安全」と
「管理されるリスク」を象徴する色です。

IHUBGLOBALは単なる物流企業を超え、
ビジネス、情報、システムをスマートにつなぐ「ハブ」としての役割を担います。`,

    // Services
    'services.title': 'ソリューション',
    'services.storage': '保管インフラ',
    'services.transport': '統合コンサルティング',
    'services.inventory': 'スマート物流システム',
    'services.emergency': 'リスク対応統合プロトコル',
    'services.storage.desc': `専用倉庫と被害軽減設備を備えた
     施設・運営統合型安全保管`, 
    'services.transport.desc': `入荷から報告書作成まで対応するオーダーメイド化学物流コンサルティング`, 
    'services.inventory.desc': `自社開発WMS基盤、化学物質KPIまで管理するデータ基盤物流運営`, 
    'services.emergency.desc': `24時間監視と法規基盤運営で生命と環境まで考慮した安全基準提供`, 
    
    // Strengths
    'strengths.title': 'マネジメント',
    'strengths.cert': '設計された保管',
    'strengths.monitoring': 'オーダーメイド解決策',
    'strengths.safety': '精密な追跡',
    'strengths.global': '予防中心運営',
    'strengths.cert.desc': `化学物質の特性と基準に合わせて保管
     環境を事前設計`,
    'strengths.monitoring.desc': `顧客の状況とニーズを分析し
     実質的な解決策を提示`,
    'strengths.safety.desc': `在庫から出荷履歴までリアルタイムで
     追跡・管理`,
    'strengths.global.desc': `24時間監視体制と事故防止プロセスで
     危険要素を先制的に対応`,
    
    // Contact
    'contact.title': 'お問い合わせ',
    'contact.address': '住所',
    'contact.phone': '電話',
    'contact.email': 'メール',
    'contact.hours': '営業時間',
    'contact.hours.value': '月-金: 09:00 - 18:00',
    'contact.form.name': 'ご担当者名', 
    'contact.form.email': 'メールアドレス',
    'contact.form.message': 'メッセージ',
    'contact.form.submit': '送信する', 
    'contact.address.value': '忠清南道牙山市霊仁面新峰里170-6',
    'contact.phone.value': '+82-10-3397-9023',
    'contact.email.value': 'hs.lee@ihubglobal.co.kr',
    'toast.mailto.title': 'メール作成画面が開きました',
    'toast.mailto.description': 'メールソフトを確認し、お問い合わせ内容を送信してください。',
    
    // Footer
    'footer.copyright': '© 2025 IHUBGLOBAL. All rights reserved.', 
    'footer.privacy': 'プライバシーポリシー',
    'footer.terms': '利用規約',
  },
};


// LanguageProvider 앞에 'export' 키워드를 추가합니다.
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ko');

  const t = (key: string): string => {
    const langTranslations = translations[language];
    // 키가 현재 언어 번역 객체에 존재하는지 확인하고, 존재하면 해당 값을 반환합니다.
    // 존재하지 않으면 키 자체를 반환하여 어떤 키가 누락되었는지 쉽게 알 수 있도록 합니다.
    return langTranslations && langTranslations.hasOwnProperty(key) 
      ? langTranslations[key as keyof typeof langTranslations] 
      : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// useLanguage 함수는 이미 export 되어 있습니다.
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};