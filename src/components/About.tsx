
interface AboutProps {
  language: string;
}

const About = ({ language }: AboutProps) => {
  const content = {
    ko: {
      title: "회사소개",
      description: "아이허브글로벌은 화학물질의 구매-보관-사용-폐기 전 과정을 하나의 클라우드 플랫폼으로 통합하여 규제 준수, 재고 최적화, 안전사고 예방을 동시에 실현합니다.",
      stats: [
        { number: "98%", label: "규제 준수율" },
        { number: "30%", label: "비용 절감" },
        { number: "60%", label: "작업 시간 절약" },
      ]
    },
    en: {
      title: "About Us",
      description: "IHUB GLOBAL integrates the entire chemical lifecycle—from purchase to disposal—into a single cloud platform, simultaneously achieving regulatory compliance, inventory optimization, and accident prevention.",
      stats: [
        { number: "98%", label: "Compliance Rate" },
        { number: "30%", label: "Cost Reduction" },
        { number: "60%", label: "Time Saved" },
      ]
    },
    ja: {
      title: "会社紹介",
      description: "アイハブグローバルは、化学物質の購入から保管、使用、廃棄までの全工程を一つのクラウドプラットフォームに統合し、規制遵守、在庫最適化、安全事故予防を同時に実現します。",
      stats: [
        { number: "98%", label: "規制遵守率" },
        { number: "30%", label: "コスト削減" },
        { number: "60%", label: "作業時間の短縮" },
      ]
    }
  };

  return (
    <section id="about" className="section-padding bg-zinc-50 dark:bg-zinc-900/50">
      <div className="container-padding">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-zinc-900 dark:text-white heading-underline">
              {content[language as keyof typeof content].title}
            </h2>
            
            <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-8">
              {content[language as keyof typeof content].description}
            </p>
            
            <div className="grid grid-cols-3 gap-6 mt-12">
              {content[language as keyof typeof content].stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary">
                    {stat.number}
                  </div>
                  <div className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center animate-on-scroll">
            {/* Laboratory team illustration */}
            <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-soft">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80 z-0"></div>
              
              {/* SVG Illustration of laboratory team */}
              <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
                <g fill="#FFFFFF">
                  {/* Lab equipment */}
                  <rect x="100" y="200" width="600" height="10" rx="5" />
                  <rect x="150" y="100" width="10" height="100" rx="5" />
                  <rect x="250" y="100" width="10" height="100" rx="5" />
                  <rect x="350" y="100" width="10" height="100" rx="5" />
                  <rect x="450" y="100" width="10" height="100" rx="5" />
                  <rect x="550" y="100" width="10" height="100" rx="5" />
                  <rect x="650" y="100" width="10" height="100" rx="5" />
                  
                  {/* Flasks and beakers */}
                  <path d="M130,200 L170,200 L180,300 L120,300 Z" />
                  <path d="M230,200 L270,200 L280,300 L220,300 Z" />
                  <ellipse cx="400" cy="260" rx="40" ry="60" />
                  <path d="M450,200 L500,200 L520,320 L430,320 Z" />
                  <rect x="540" y="210" width="80" height="90" rx="10" />
                  <circle cx="650" cy="260" r="50" />
                </g>
              </svg>
              
              {/* Text overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                <h3 className="text-white text-3xl font-bold mb-4">IHUB GLOBAL</h3>
                <p className="text-white text-center max-w-sm px-6">
                  {language === 'ko' 
                    ? "전문가 및 첨단 기술을 통한 화학물질 안전관리" 
                    : language === 'en'
                      ? "Chemical safety management through expertise & technology"
                      : "専門家と先端技術による化学物質安全管理"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
