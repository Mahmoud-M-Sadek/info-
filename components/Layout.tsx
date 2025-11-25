import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { CONTENT, COMPANY_INFO } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { language, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const text = CONTENT[language];

  const navLinks = [
    { path: '/', label: text.nav.home },
    { path: '/about', label: text.nav.about },
    { path: '/services', label: text.nav.services },
    { path: '/portfolio', label: text.nav.portfolio },
    { path: '/contact', label: text.nav.contact },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className={`min-h-screen flex flex-col bg-gray-50 text-slate-900 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      {/* Top Bar */}
      <div className="bg-slate-900 text-slate-300 py-2 text-xs md:text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-4">
            <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center gap-2 hover:text-white transition">
              <Phone size={14} /> <span dir="ltr">{COMPANY_INFO.phone}</span>
            </a>
            <a href={`mailto:${COMPANY_INFO.email}`} className="hidden md:flex items-center gap-2 hover:text-white transition">
              <Mail size={14} /> <span>{COMPANY_INFO.email}</span>
            </a>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-400"><Facebook size={16}/></a>
            <a href="#" className="hover:text-blue-400"><Linkedin size={16}/></a>
            <a href="#" className="hover:text-blue-400"><Instagram size={16}/></a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-xl md:text-2xl font-bold text-slate-900 flex flex-col leading-tight">
            <span>Information</span>
            <span className="text-blue-600 text-sm md:text-base tracking-widest">System Security</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(link.path) 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-3 py-1 rounded-full border border-slate-200 hover:bg-slate-100 text-sm font-medium transition"
            >
              <Globe size={16} />
              <span>{language === 'ar' ? 'English' : 'العربية'}</span>
            </button>
            <a 
              href={COMPANY_INFO.whatsappUrl} 
              target="_blank" 
              rel="noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-bold transition shadow-lg shadow-green-200"
            >
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
             <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2 py-1 rounded border border-slate-200 text-xs font-medium"
            >
              <span>{language === 'ar' ? 'EN' : 'AR'}</span>
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-800 focus:outline-none"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
            >
              <div className="flex flex-col p-4 gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-base font-medium ${
                      isActive(link.path) ? 'text-blue-600' : 'text-slate-600'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                 <a 
                  href={COMPANY_INFO.whatsappUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-green-500 text-center text-white py-3 rounded-lg font-bold"
                >
                  WhatsApp
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Information System Security</h3>
            <p className="text-sm leading-relaxed mb-4 text-slate-400">
              {language === 'ar' 
                ? 'شريكك الموثوق في حلول الأمن السيبراني وتكنولوجيا المعلومات. نبتكر لنحمي ونطور.' 
                : 'Your trusted partner in Cybersecurity and IT solutions. We innovate to protect and develop.'}
            </p>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-bold mb-4">{text.footer.quickLinks}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-blue-400 transition">{text.nav.about}</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition">{text.nav.services}</Link></li>
              <li><Link to="/portfolio" className="hover:text-blue-400 transition">{text.nav.portfolio}</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition">{text.nav.contact}</Link></li>
            </ul>
          </div>

          <div>
             <h3 className="text-white text-lg font-bold mb-4">{text.nav.services}</h3>
             <ul className="space-y-2 text-sm">
               <li>{language === 'ar' ? 'أنظمة المراقبة' : 'Security Systems'}</li>
               <li>{language === 'ar' ? 'حلول البرمجيات' : 'Software Solutions'}</li>
               <li>{language === 'ar' ? 'تطوير الويب' : 'Web Development'}</li>
               <li>{language === 'ar' ? 'التسويق الإلكتروني' : 'SEO Services'}</li>
             </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-4">{text.nav.contact}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-blue-500 mt-1" />
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-blue-500" />
                <span dir="ltr">{COMPANY_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-blue-500" />
                <span>{COMPANY_INFO.email}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
          {text.footer.rights}
        </div>
      </footer>
    </div>
  );
};

export default Layout;