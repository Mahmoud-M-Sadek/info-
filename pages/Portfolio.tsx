import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CONTENT, PROJECTS } from '../constants';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Portfolio: React.FC = () => {
  const { language } = useLanguage();
  const text = CONTENT[language];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">{text.nav.portfolio}</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {language === 'ar' 
              ? 'نفخر بتقديم مجموعة من المشاريع الناجحة التي تعكس خبرتنا وجودة عملنا.'
              : 'We are proud to present a collection of successful projects that reflect our expertise and quality.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 border border-slate-100"
            >
              <div className="relative overflow-hidden h-60">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="bg-white text-slate-900 px-6 py-2 rounded-full font-bold flex items-center gap-2 hover:bg-blue-500 hover:text-white transition"
                  >
                    {language === 'ar' ? 'زيارة الموقع' : 'Visit Site'} <ExternalLink size={16} />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                <p className="text-slate-600 text-sm">{project.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;