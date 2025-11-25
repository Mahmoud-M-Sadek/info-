import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CONTENT, SERVICES_LIST, TESTIMONIALS, COMPANY_INFO } from '../constants';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';

const Home: React.FC = () => {
  const { language } = useLanguage();
  const text = CONTENT[language];
  const services = SERVICES_LIST(language).slice(0, 3); // Show top 3 services
  const Arrow = language === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[80vh] md:h-[600px] flex items-center bg-slate-900">
        <div 
          className="absolute inset-0 z-0 opacity-20 bg-cover bg-center" 
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              {text.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
              {text.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={COMPANY_INFO.whatsappUrl} 
                target="_blank"
                rel="noreferrer"
                className="inline-flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold text-lg transition shadow-lg shadow-blue-500/30"
              >
                {text.hero.cta}
                <Arrow size={20} />
              </a>
              <Link 
                to="/services" 
                className="inline-flex justify-center items-center gap-2 bg-transparent border border-white hover:bg-white hover:text-slate-900 text-white px-8 py-3 rounded-lg font-bold text-lg transition"
              >
                {text.nav.services}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <motion.div 
               initial={{ opacity: 0, x: language === 'ar' ? 50 : -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
             >
               <img 
                 src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                 alt="Team working" 
                 className="rounded-xl shadow-2xl"
               />
             </motion.div>
             <motion.div 
               initial={{ opacity: 0, x: language === 'ar' ? -50 : 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
             >
               <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">{text.about.title}</h2>
               <h3 className="text-3xl font-bold text-slate-900 mb-6">{text.nav.about}</h3>
               <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                 {text.about.description}
               </p>
               <ul className="space-y-4 mb-8">
                 {text.about.values.slice(0, 3).map((val, idx) => (
                   <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                     <CheckCircle className="text-green-500" size={24} />
                     {val}
                   </li>
                 ))}
               </ul>
               <Link 
                 to="/about"
                 className="text-blue-600 font-bold hover:underline inline-flex items-center gap-1"
               >
                 {language === 'ar' ? 'اقرأ المزيد' : 'Read More'} <Arrow size={16} />
               </Link>
             </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{text.nav.services}</h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto rounded"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-blue-600"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                  <service.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-4">{service.description}</p>
                <Link to="/services" className="text-blue-600 text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
                  {language === 'ar' ? 'التفاصيل' : 'Details'} <Arrow size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link 
              to="/services" 
              className="inline-block px-8 py-3 border-2 border-slate-900 text-slate-900 font-bold rounded-lg hover:bg-slate-900 hover:text-white transition"
            >
              {language === 'ar' ? 'عرض جميع الخدمات' : 'View All Services'}
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {language === 'ar' ? 'هل أنت مستعد لبدء مشروعك؟' : 'Ready to start your project?'}
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            {language === 'ar' 
              ? 'تواصل معنا اليوم لمناقشة احتياجاتك والحصول على عرض سعر مخصص لعملك.' 
              : 'Contact us today to discuss your needs and get a custom quote for your business.'}
          </p>
          <a 
            href={COMPANY_INFO.whatsappUrl} 
            target="_blank" 
            rel="noreferrer"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-slate-100 transition shadow-lg"
          >
            {text.nav.contact}
          </a>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
           <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
             {language === 'ar' ? 'آراء العملاء' : 'Client Testimonials'}
           </h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {TESTIMONIALS.map((t) => (
               <div key={t.id} className="bg-slate-50 p-6 rounded-lg border border-slate-100">
                 <div className="flex text-orange-400 mb-4">
                   {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
                 </div>
                 <p className="text-slate-600 italic mb-6">"{t.text}"</p>
                 <div>
                   <h4 className="font-bold text-slate-900">{t.name}</h4>
                   <span className="text-sm text-slate-500">{t.role}</span>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;