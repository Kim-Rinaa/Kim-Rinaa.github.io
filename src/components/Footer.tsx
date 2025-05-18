
interface FooterProps {
  language: string;
}

const Footer = ({ language }: FooterProps) => {
  const content = {
    ko: {
      links: ["홈", "회사소개", "서비스", "고객사례", "문의하기"],
      copyright: "© 2025 아이허브글로벌. All rights reserved.",
      address: "서울특별시 강서구 가양대로 123, 4F",
      privacyPolicy: "개인정보처리방침",
      termsOfService: "이용약관"
    },
    en: {
      links: ["Home", "About", "Services", "Cases", "Contact"],
      copyright: "© 2025 IHUB GLOBAL. All rights reserved.",
      address: "4F, 123 Gayang-daero, Gangseo-gu, Seoul, Korea",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service"
    },
    ja: {
      links: ["ホーム", "会社紹介", "サービス", "顧客事例", "お問い合わせ"],
      copyright: "© 2025 アイハブグローバル. All rights reserved.",
      address: "ソウル特別市江西区加陽大路123、4F",
      privacyPolicy: "プライバシーポリシー",
      termsOfService: "利用規約"
    }
  };
  
  const navLinks = ['#hero', '#about', '#services', '#testimonials', '#contact'];

  return (
    <footer className="bg-zinc-900 text-white pt-16 pb-8">
      <div className="container-padding">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold mb-4">IHUB GLOBAL</div>
            <p className="text-zinc-400 mb-6">{content[language as keyof typeof content].address}</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-secondary transition-colors" aria-label="LinkedIn">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 3H4C3.4 3 3 3.4 3 4V20C3 20.6 3.4 21 4 21H20C20.6 21 21 20.6 21 20V4C21 3.4 20.6 3 20 3ZM8.5 17.5H6.5V10H8.5V17.5ZM7.5 9C6.7 9 6 8.3 6 7.5C6 6.7 6.7 6 7.5 6C8.3 6 9 6.7 9 7.5C9 8.3 8.3 9 7.5 9ZM18 17.5H16V13.9C16 12.7 15 12.8 15 13.9V17.5H13V10H15V11C15.7 9.7 18 9.6 18 12.7V17.5Z"/>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-secondary transition-colors" aria-label="Twitter">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.6 7.8C19.6 7.9 19.6 8.1 19.6 8.2C19.6 13.2 15.8 19 8.9 19C6.7 19 4.7 18.3 3 17.1C3.3 17.2 3.7 17.2 4 17.2C5.8 17.2 7.4 16.5 8.7 15.4C7 15.3 5.6 14.2 5.1 12.5C5.4 12.6 5.7 12.6 6 12.6C6.4 12.6 6.8 12.5 7.1 12.4C5.4 12.1 4 10.5 4 8.6V8.5C4.5 8.8 5.1 9 5.8 9C4.1 7.8 3.6 5.5 4.7 3.8C6.5 6 9.1 7.5 12.1 7.7C11.8 6.4 12.2 5 13.1 4.1C14.4 2.8 16.5 2.8 17.8 4.1C18.6 3.9 19.3 3.6 20 3.2C19.7 4 19.1 4.7 18.4 5.2C19.1 5.1 19.8 4.9 20.4 4.6C20 5.3 19.4 5.9 18.8 6.5C19.6 7 19.6 7.7 19.6 7.8Z"/>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-secondary transition-colors" aria-label="Facebook">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 3H4C3.4 3 3 3.4 3 4V20C3 20.6 3.4 21 4 21H12V14H10V11H12V9.5C12 7.6 13.4 6 15.3 6H17V9H16C15.4 9 15 9.4 15 10V11H17L16.8 14H15V21H20C20.6 21 21 20.6 21 20V4C21 3.4 20.6 3 20 3Z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Links</h3>
            <ul className="space-y-3">
              {content[language as keyof typeof content].links.map((link, index) => (
                <li key={index}>
                  <a 
                    href={navLinks[index]}
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-3 text-zinc-400">
              <li>info@ihub-global.com</li>
              <li>02-123-4567</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-zinc-500 mb-4 md:mb-0">
            {content[language as keyof typeof content].copyright}
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-zinc-500 hover:text-white transition-colors">
              {content[language as keyof typeof content].privacyPolicy}
            </a>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors">
              {content[language as keyof typeof content].termsOfService}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
