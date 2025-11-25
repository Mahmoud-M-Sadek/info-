import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CONTENT, SERVICES_LIST, COMPANY_INFO } from '../constants';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  const { language } = useLanguage();
  const text = CONTENT[language];
  const services = SERVICES_LIST(language);

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">{text.nav.services}</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {text.hero.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300"
            >
              <div className="h-2 bg-gradient-to-r from-blue-600 to-cyan-400"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-slate-900 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <service.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <a 
                  href={COMPANY_INFO.whatsappUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-block text-blue-600 font-bold border-b-2 border-transparent hover:border-blue-600 transition-colors"
                >
                  {language === 'ar' ? 'اطلب الخدمة الآن' : 'Request Service'}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;