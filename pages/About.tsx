import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CONTENT } from '../constants';
import { motion } from 'framer-motion';
import { Target, Eye, Shield } from 'lucide-react';

const About: React.FC = () => {
  const { language } = useLanguage();
  const text = CONTENT[language];

  const cards = [
    { icon: Eye, title: text.about.visionTitle, desc: text.about.vision, color: "bg-blue-50 text-blue-600" },
    { icon: Target, title: text.about.missionTitle, desc: text.about.mission, color: "bg-orange-50 text-orange-600" },
    { icon: Shield, title: text.about.valuesTitle, desc: text.about.values.join(" • "), color: "bg-green-50 text-green-600" },
  ];

  return (
    <div className="pt-8 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">{text.about.title}</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            {text.about.description}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`p-8 rounded-xl ${card.color} rounded-xl shadow-sm hover:shadow-md transition-shadow`}
            >
              <card.icon size={40} className="mb-4" />
              <h3 className="text-xl font-bold mb-4">{card.title}</h3>
              <p className="opacity-90 leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Story Section */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-16 shadow-2xl overflow-hidden relative">
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              {language === 'ar' ? 'لماذا تختارنا؟' : 'Why Choose Us?'}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              <div>
                <span className="block text-4xl font-bold text-blue-400 mb-2">10+</span>
                <span className="text-slate-300">{language === 'ar' ? 'سنوات خبرة' : 'Years Experience'}</span>
              </div>
               <div>
                <span className="block text-4xl font-bold text-blue-400 mb-2">100+</span>
                <span className="text-slate-300">{language === 'ar' ? 'مشروع ناجح' : 'Projects Done'}</span>
              </div>
               <div>
                <span className="block text-4xl font-bold text-blue-400 mb-2">24/7</span>
                <span className="text-slate-300">{language === 'ar' ? 'دعم فني' : 'Support'}</span>
              </div>
               <div>
                <span className="block text-4xl font-bold text-blue-400 mb-2">100%</span>
                <span className="text-slate-300">{language === 'ar' ? 'رضا العملاء' : 'Satisfaction'}</span>
              </div>
            </div>
          </div>
          {/* Decorative Circle */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-orange-600 rounded-full opacity-20 blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default About;