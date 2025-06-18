
import React, { FormEvent, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
   
    const recipientEmail = 'hs.lee@ihubglobal.co.kr';
    const subject = encodeURIComponent(`[문의하기] ${formData.name}님의 문의입니다.`);
    const body = encodeURIComponent(
      `안녕하세요, IHUBGLOBAL 입니다.\n\n문의주신 내용은 다음과 같습니다.\n\n` +
      `-------------------------------------\n` +
      `이름: ${formData.name}\n` +
      `이메일: ${formData.email}\n` +
      `-------------------------------------\n\n` +
      `메시지 내용:\n${formData.message}\n\n` +
      `-------------------------------------\n\n` +
      `빠른 시일 내에 답변드리겠습니다.\n감사합니다.`
    );
    
     const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;

      window.location.href = mailtoLink;

    // Show success toast
    toast({
      title: "Message Sent",
      description: "Thank you for your inquiry. We will get back to you soon!",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <p className="text-center text-ihub-gold font-semibold text-xl md:text-2xl mb-4">
          (주)아이허브글로벌
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          {t('contact.title')}
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-ihub-gray p-8 rounded-lg shadow-md">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">
                  {t('contact.form.name')}
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border-gray-300 focus:border-ihub-gold focus:ring-ihub-gold"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">
                  {t('contact.form.email')}
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border-gray-300 focus:border-ihub-gold focus:ring-ihub-gold"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
                  {t('contact.form.message')}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full border-gray-300 focus:border-ihub-gold focus:ring-ihub-gold"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-ihub-gold hover:bg-yellow-500 text-black font-bold"
              >
                {t('contact.form.submit')}
              </Button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div>
            {/* Map */}
            <div className="mb-8 h-64 bg-gray-300 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3190.670157566493!2d127.00842575747801!3d36.89823828772672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b216d16c1425f%3A0xd91d6b5059cfaff2!2z7Lap7LKt64Ko64-EIOyVhOyCsOyLnCDsmIHsnbjrqbQg7Iug67SJ66asIDE3MC02!5e0!3m2!1sko!2skr!4v1747981196082!5m2!1sko!2skr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                title="IHUBGLOBAL location map"
              ></iframe>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-ihub-gold mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-lg mb-1">{t('contact.address')}</h4>
                  <p className="text-gray-600">{t('contact.address.value')}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-ihub-gold mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-lg mb-1">{t('contact.phone')}</h4>
                  <p className="text-gray-600">{t('contact.phone.value')}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-ihub-gold mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-lg mb-1">{t('contact.email')}</h4>
                  <p className="text-gray-600">{t('contact.email.value')}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="h-6 w-6 text-ihub-gold mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-lg mb-1">{t('contact.hours')}</h4>
                  <p className="text-gray-600">{t('contact.hours.value')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
