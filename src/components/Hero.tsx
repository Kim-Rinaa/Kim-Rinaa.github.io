
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  language: string;
}

const Hero = ({ language }: HeroProps) => {
  const content = {
    ko: {
      headline: "One-Stop Chemical Safety & Compliance Platform",
      subText: "From procurement to disposal, we digitize every stage of chemical management so you can focus on innovation.",
      ctaText: "무료 컴플라이언스 점검 받기",
      slogan: "안전하고 효율적인 화학물질 관리의 선도주자"
    },
    en: {
      headline: "One-Stop Chemical Safety & Compliance Platform",
      subText: "From procurement to disposal, we digitize every stage of chemical management so you can focus on innovation.",
      ctaText: "Get a Free Compliance Audit",
      slogan: "Leader in Safe & Efficient Chemical Management"
    },
    ja: {
      headline: "ワンストップ化学物質安全・コンプライアンスプラットフォーム",
      subText: "調達から廃棄まで、化学物質管理のすべての段階をデジタル化し、お客様がイノベーションに集中できるようサポートします。",
      ctaText: "無料コンプライアンス監査を受ける",
      slogan: "安全で効率的な化学物質管理のリーディングカンパニー"
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20">
      {/* Background gradient and overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/5 dark:from-primary/20 dark:to-secondary/10 z-0"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iLjAyIj48cGF0aCBkPSJNMzYgMzRjMC0yLjItMS44LTQtNC00cy00IDEuOC00IDQgMS44IDQgNCA0IDQtMS44IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40 dark:opacity-20 z-0"></div>
      
      <div className="container-padding relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary dark:bg-secondary/20 text-sm font-medium mb-6">
            {content[language as keyof typeof content].slogan}
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white mb-6 leading-tight">
            {content[language as keyof typeof content].headline}
          </h1>
          
          <p className="text-xl text-zinc-700 dark:text-zinc-300 mb-8 max-w-2xl">
            {content[language as keyof typeof content].subText}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="btn-primary flex items-center justify-center gap-2 group">
              {content[language as keyof typeof content].ctaText}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
        
        {/* Abstract chemical diagram */}
        <div className="absolute right-4 top-1/3 -translate-y-1/2 hidden lg:block opacity-70 dark:opacity-40">
          <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="150" r="80" stroke="#0052A4" strokeWidth="2" strokeDasharray="5 5" />
            <circle cx="150" cy="150" r="40" stroke="#3CC381" strokeWidth="2" />
            <circle cx="100" cy="130" r="15" fill="#0052A4" fillOpacity="0.2" />
            <circle cx="190" cy="180" r="15" fill="#3CC381" fillOpacity="0.2" />
            <circle cx="180" cy="100" r="15" fill="#0052A4" fillOpacity="0.2" />
            <circle cx="120" cy="190" r="15" fill="#3CC381" fillOpacity="0.2" />
            <line x1="100" y1="130" x2="150" y2="150" stroke="#0052A4" strokeWidth="2" />
            <line x1="190" y1="180" x2="150" y2="150" stroke="#3CC381" strokeWidth="2" />
            <line x1="180" y1="100" x2="150" y2="150" stroke="#0052A4" strokeWidth="2" />
            <line x1="120" y1="190" x2="150" y2="150" stroke="#3CC381" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
