
import { useState } from 'react';

interface ContactProps {
  language: string;
}

const Contact = ({ language }: ContactProps) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const content = {
    ko: {
      title: "문의하기",
      subtitle: "아이허브글로벌과 함께 화학물질 관리를 혁신하세요",
      addressLabel: "주소",
      address: "서울특별시 강서구 가양대로 123, 4F",
      phoneLabel: "전화",
      phone: "02-123-4567",
      emailLabel: "이메일",
      email: "info@ihub-global.com",
      formName: "이름",
      formEmail: "이메일",
      formSubject: "제목",
      formMessage: "메시지",
      submitButton: "제출하기",
      thankYouMessage: "문의해주셔서 감사합니다. 곧 연락드리겠습니다."
    },
    en: {
      title: "Contact Us",
      subtitle: "Innovate your chemical management with IHUB GLOBAL",
      addressLabel: "Address",
      address: "4F, 123 Gayang-daero, Gangseo-gu, Seoul, Korea",
      phoneLabel: "Phone",
      phone: "02-123-4567",
      emailLabel: "Email",
      email: "info@ihub-global.com",
      formName: "Name",
      formEmail: "Email",
      formSubject: "Subject",
      formMessage: "Message",
      submitButton: "Submit",
      thankYouMessage: "Thank you for your inquiry. We will contact you soon."
    },
    ja: {
      title: "お問い合わせ",
      subtitle: "アイハブグローバルと共に化学物質管理を革新しましょう",
      addressLabel: "住所",
      address: "ソウル特別市江西区加陽大路123、4F",
      phoneLabel: "電話",
      phone: "02-123-4567",
      emailLabel: "メール",
      email: "info@ihub-global.com",
      formName: "お名前",
      formEmail: "メールアドレス",
      formSubject: "件名",
      formMessage: "メッセージ",
      submitButton: "送信",
      thankYouMessage: "お問い合わせありがとうございます。近日中にご連絡いたします。"
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send the form data to a server here
    setFormSubmitted(true);
    
    // Reset form
    setTimeout(() => {
      setFormSubmitted(false);
      const form = e.target as HTMLFormElement;
      form.reset();
    }, 3000);
  };
  
  return (
    <section id="contact" className="section-padding">
      <div className="container-padding">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-zinc-900 dark:text-white heading-underline">
              {content[language as keyof typeof content].title}
            </h2>
            
            <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-12">
              {content[language as keyof typeof content].subtitle}
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 22C16 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 8 18 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-zinc-900 dark:text-white">
                    {content[language as keyof typeof content].addressLabel}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mt-1">
                    {content[language as keyof typeof content].address}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92V19.92C22 20.4704 21.7893 20.9983 21.4142 21.3734C21.0391 21.7485 20.5112 21.9592 19.96 21.96C16.44 21.79 13.06 20.62 10.21 18.72C7.58 16.98 5.36 14.76 3.62 12.13C1.71 9.27 0.54 5.88 0.38 2.35C0.376593 1.80523 0.582288 1.28264 0.950266 0.886691C1.31824 0.490742 1.83017 0.254663 2.37 0.239998H5.37C6.34661 0.230005 7.20784 0.867169 7.43 1.82C7.62 2.62 7.89 3.4 8.26 4.14C8.42629 4.44303 8.48877 4.78597 8.43826 5.12183C8.38775 5.4577 8.22722 5.76807 7.98 6L6.48 7.5C8.1088 10.2555 10.3438 12.4905 13.1 14.12L14.6 12.62C14.8319 12.3728 15.1423 12.2123 15.4782 12.1618C15.814 12.1112 16.157 12.1737 16.46 12.34C17.2 12.71 17.98 12.98 18.78 13.17C19.7387 13.3919 20.376 14.2651 20.36 15.24L22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-zinc-900 dark:text-white">
                    {content[language as keyof typeof content].phoneLabel}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mt-1">
                    {content[language as keyof typeof content].phone}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-zinc-900 dark:text-white">
                    {content[language as keyof typeof content].emailLabel}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mt-1">
                    {content[language as keyof typeof content].email}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-on-scroll">
            <div className="bg-white dark:bg-zinc-800 rounded-lg p-8 shadow-soft border border-zinc-100 dark:border-zinc-700">
              {formSubmitted ? (
                <div className="text-center py-12">
                  <div className="text-green-500 mb-4">
                    <svg className="w-16 h-16 mx-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                    {language === 'ko' ? '감사합니다!' : language === 'en' ? 'Thank You!' : 'ありがとうございます！'}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    {content[language as keyof typeof content].thankYouMessage}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                        {content[language as keyof typeof content].formName}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-600 rounded-md bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                        {content[language as keyof typeof content].formEmail}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-600 rounded-md bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                        {content[language as keyof typeof content].formSubject}
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-600 rounded-md bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                        {content[language as keyof typeof content].formMessage}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-600 rounded-md bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                      ></textarea>
                    </div>
                    
                    <div>
                      <button type="submit" className="btn-primary w-full">
                        {content[language as keyof typeof content].submitButton}
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
