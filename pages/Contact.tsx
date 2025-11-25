import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CONTENT, COMPANY_INFO } from '../constants';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  const { language } = useLanguage();
  const text = CONTENT[language];

  return (
    <div className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">{text.contact.title}</h1>
          <p className="text-slate-600">{text.contact.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info & Map */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-6 border-b pb-4">{text.contact.title}</h3>
              <ul className="space-y-6">
                 <li className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{text.contact.address}</h4>
                      <p className="text-slate-600">{COMPANY_INFO.address}</p>
                    </div>
                 </li>
                 <li className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{text.contact.phone}</h4>
                      <p className="text-slate-600" dir="ltr">{COMPANY_INFO.phone}</p>
                    </div>
                 </li>
                 <li className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{text.contact.email}</h4>
                      <p className="text-slate-600">{COMPANY_INFO.email}</p>
                    </div>
                 </li>
              </ul>
            </div>
            
            {/* Map Placeholder */}
            <div className="bg-slate-200 h-64 rounded-xl overflow-hidden flex items-center justify-center relative">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.163737568582!2d31.2357!3d30.0444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAyJzM5LjgiTiAzMcKwMTQnMDguNSJF!5e0!3m2!1sen!2seg!4v1620000000000!5m2!1sen!2seg" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy"
                title="Google Map"
                className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition duration-500"
              ></iframe>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-slate-900">{language === 'ar' ? 'أرسل لنا رسالة' : 'Send us a message'}</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">{text.contact.formName}</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                  placeholder={text.contact.formName}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">{text.contact.formEmail}</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                  placeholder={text.contact.formEmail}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">{text.contact.formMessage}</label>
                <textarea 
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition resize-none"
                  placeholder={text.contact.formMessage}
                ></textarea>
              </div>
              <button 
                className="w-full bg-slate-900 text-white font-bold py-4 rounded-lg hover:bg-blue-600 transition duration-300 shadow-lg"
              >
                {text.contact.formSubmit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;