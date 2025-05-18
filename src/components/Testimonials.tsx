
interface TestimonialsProps {
  language: string;
}

const Testimonials = ({ language }: TestimonialsProps) => {
  const content = {
    ko: {
      title: "고객 사례",
      testimonials: [
        {
          quote: "IHUB GLOBAL 덕분에 화학물질 관리 비용을 30% 절감했습니다.",
          author: "김지훈",
          position: "EHS Manager",
          company: "LG화학"
        },
        {
          quote: "복잡한 화학물질 규정을 쉽게 준수할 수 있게 되었습니다.",
          author: "박서연",
          position: "안전관리자",
          company: "한국바스프"
        },
        {
          quote: "실시간 모니터링으로 안전사고 위험을 크게 줄였습니다.",
          author: "이민준",
          position: "연구소장",
          company: "삼성전자"
        }
      ]
    },
    en: {
      title: "Customer Cases",
      testimonials: [
        {
          quote: "Thanks to IHUB GLOBAL, we reduced chemical management costs by 30%.",
          author: "Kim Ji-hoon",
          position: "EHS Manager",
          company: "LG Chem"
        },
        {
          quote: "We can now easily comply with complex chemical regulations.",
          author: "Park Seo-yeon",
          position: "Safety Manager",
          company: "BASF Korea"
        },
        {
          quote: "Real-time monitoring has significantly reduced the risk of safety incidents.",
          author: "Lee Min-jun",
          position: "Research Director",
          company: "Samsung Electronics"
        }
      ]
    },
    ja: {
      title: "顧客事例",
      testimonials: [
        {
          quote: "IHUB GLOBALのおかげで、化学物質管理コストを30%削減できました。",
          author: "キム・ジフン",
          position: "EHSマネージャー",
          company: "LG化学"
        },
        {
          quote: "複雑な化学物質規制に簡単に準拠できるようになりました。",
          author: "パク・ソヨン",
          position: "安全管理者",
          company: "BASFコリア"
        },
        {
          quote: "リアルタイムモニタリングにより、安全事故のリスクが大幅に減少しました。",
          author: "イ・ミンジュン",
          position: "研究所長",
          company: "サムスン電子"
        }
      ]
    }
  };

  return (
    <section id="testimonials" className="section-padding bg-zinc-50 dark:bg-zinc-900/50">
      <div className="container-padding">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-900 dark:text-white inline-block heading-underline">
            {content[language as keyof typeof content].title}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {content[language as keyof typeof content].testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-soft border border-zinc-100 dark:border-zinc-700 flex flex-col animate-on-scroll"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-6 text-secondary">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 11L8 17H5L7 11H5V5H11V11H10ZM18 11L16 17H13L15 11H13V5H19V11H18Z" fill="currentColor"/>
                </svg>
              </div>
              
              <p className="text-zinc-700 dark:text-zinc-300 mb-6">"{testimonial.quote}"</p>
              
              <div className="mt-auto flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                  <span className="text-primary font-bold">{testimonial.author.charAt(0)}</span>
                </div>
                <div>
                  <h4 className="font-medium text-zinc-900 dark:text-white">{testimonial.author}</h4>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">{testimonial.position}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
