import { ShieldCheck, Cpu, Code, Globe, Smartphone, Search, Headphones } from 'lucide-react';
import { ContentData, Project, Service, Testimonial } from './types';

export const COMPANY_INFO = {
  name: "Information System Security",
  phone: "+201030417663",
  email: "info@infosys-security.com",
  address: "Al Mansoura, Egypt",
  whatsappUrl: "https://wa.me/201030417663"
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Albob Express Delivery",
    description: "موقع لوجستي متكامل لخدمات الشحن والتوصيل.",
    url: "https://www.albobexpressdelivery.com/",
    image: "https://picsum.photos/seed/albob/600/400"
  },
  {
    id: 2,
    title: "Endex Express Delivery",
    description: "منصة شحن سريعة مع تتبع للشحنات.",
    url: "https://www.endexexpressdelivery.com/",
    image: "https://picsum.photos/seed/endex/600/400"
  },
  {
    id: 3,
    title: "Future Bright Housing",
    description: "موقع عقاري لعرض المشاريع السكنية.",
    url: "https://futurebrighthousing.com/",
    image: "https://picsum.photos/seed/future/600/400"
  },
  {
    id: 4,
    title: "Seet CL",
    description: "حلول برمجية للشركات.",
    url: "https://Seet-cl.com",
    image: "https://picsum.photos/seed/seetcl/600/400"
  },
  {
    id: 5,
    title: "Seet E",
    description: "منصة تعليمية إلكترونية.",
    url: "https://Seet-e.com",
    image: "https://picsum.photos/seed/seete/600/400"
  },
  {
    id: 6,
    title: "Panda Fast Food",
    description: "تطبيق ويب لطلب الطعام أونلاين.",
    url: "https://Pandafastfood.com",
    image: "https://picsum.photos/seed/panda/600/400"
  }
];

export const CONTENT: Record<'ar' | 'en', ContentData> = {
  ar: {
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      services: "خدماتنا",
      portfolio: "أعمالنا",
      contact: "تواصل معنا"
    },
    hero: {
      title: "الحل الأمثل لحماية وتطوير أعمالك",
      subtitle: "نقدم حلولاً أمنية متكاملة، برمجة احترافية، وتطوير شامل لأنظمة المعلومات.",
      cta: "احصل على استشارة مجانية"
    },
    about: {
      title: "من نحن",
      description: "نحن شركة Information System Security، رواد في مجال أنظمة الأمن والحماية وحلول التكنولوجيا. نسعى لتقديم بنية تحتية رقمية آمنة ومستقرة لعملائنا، من خلال دمج أحدث التقنيات في الهاردوير والسوفت وير.",
      visionTitle: "رؤيتنا",
      vision: "أن نكون الخيار الأول في مصر والشرق الأوسط لتقديم حلول أمن المعلومات والتحول الرقمي.",
      missionTitle: "رسالتنا",
      mission: "تمكين الشركات والأفراد من خلال توفير بيئة عمل آمنة وذكية باستخدام أحدث التقنيات.",
      valuesTitle: "قيمنا",
      values: ["الاحترافية", "الأمان", "الابتكار", "الالتزام بالوقت", "خدمة ما بعد البيع"]
    },
    contact: {
      title: "تواصل معنا",
      subtitle: "نحن هنا لمساعدتك في أي وقت. اتصل بنا أو راسلنا.",
      address: "العنوان",
      phone: "رقم الهاتف",
      email: "البريد الإلكتروني",
      formName: "الاسم",
      formEmail: "البريد الإلكتروني",
      formMessage: "الرسالة",
      formSubmit: "إرسال الرسالة"
    },
    footer: {
      rights: "جميع الحقوق محفوظة © 2024 Information System Security",
      quickLinks: "روابط سريعة"
    }
  },
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      portfolio: "Portfolio",
      contact: "Contact Us"
    },
    hero: {
      title: "The Ultimate Solution for Security & Development",
      subtitle: "We provide integrated security solutions, professional programming, and comprehensive IT development.",
      cta: "Get a Free Consultation"
    },
    about: {
      title: "About Us",
      description: "We are Information System Security, pioneers in security systems and technology solutions. We strive to provide secure and stable digital infrastructure for our clients by integrating the latest hardware and software technologies.",
      visionTitle: "Our Vision",
      vision: "To be the first choice in Egypt and the Middle East for information security and digital transformation solutions.",
      missionTitle: "Our Mission",
      mission: "Empowering companies and individuals by providing a secure and smart work environment using cutting-edge technologies.",
      valuesTitle: "Our Values",
      values: ["Professionalism", "Security", "Innovation", "Punctuality", "After-sales Service"]
    },
    contact: {
      title: "Contact Us",
      subtitle: "We are here to help you anytime. Call or message us.",
      address: "Address",
      phone: "Phone Number",
      email: "Email Address",
      formName: "Name",
      formEmail: "Email",
      formMessage: "Message",
      formSubmit: "Send Message"
    },
    footer: {
      rights: "All rights reserved © 2024 Information System Security",
      quickLinks: "Quick Links"
    }
  }
};

export const SERVICES_LIST = (lang: 'ar' | 'en'): Service[] => {
  const isAr = lang === 'ar';
  return [
    {
      id: 'security',
      icon: ShieldCheck,
      title: isAr ? "أنظمة الأمن والحماية" : "Security Systems",
      description: isAr 
        ? "كاميرات مراقبة، أجهزة إنذار، أنظمة حضور وانصراف، بصمة وجه، و Access Control."
        : "CCTV, Alarms, Attendance Systems, Face Recognition, and Access Control."
    },
    {
      id: 'hardware',
      icon: Cpu,
      title: isAr ? "توريد وتركيب الهاردوير" : "Hardware Supply",
      description: isAr 
        ? "توفير أجهزة الكمبيوتر، السيرفرات، ومستلزمات الشبكات بأعلى جودة."
        : "Supplying high-quality computers, servers, and networking equipment."
    },
    {
      id: 'software',
      icon: Code,
      title: isAr ? "حلول البرمجيات" : "Software Solutions",
      description: isAr 
        ? "تصميم وبرمجة الأنظمة المتكاملة لإدارة الشركات والمؤسسات (ERP, CRM)."
        : "Designing and developing integrated systems for business management (ERP, CRM)."
    },
    {
      id: 'web',
      icon: Globe,
      title: isAr ? "تصميم وتطوير المواقع" : "Web Design & Development",
      description: isAr 
        ? "مواقع تعريفية، متاجر إلكترونية، ومنصات خدمية بأحدث تقنيات الويب."
        : "Corporate websites, e-commerce stores, and service platforms using modern tech."
    },
    {
      id: 'mobile',
      icon: Smartphone,
      title: isAr ? "تطبيقات الموبايل" : "Mobile Apps",
      description: isAr 
        ? "تطوير تطبيقات أندرويد و iOS بتجربة مستخدم مميزة وأداء عالي."
        : "Developing high-performance Android and iOS applications with great UX."
    },
    {
      id: 'seo',
      icon: Search,
      title: isAr ? "خدمات SEO" : "SEO Services",
      description: isAr 
        ? "تحسين محركات البحث لتصدر النتائج وزيادة الوصول للعملاء المستهدفين."
        : "Search Engine Optimization to rank higher and reach target audiences."
    },
    {
      id: 'support',
      icon: Headphones,
      title: isAr ? "الدعم الفني والصيانة" : "Maintenance & Support",
      description: isAr 
        ? "خدمات ما بعد البيع، صيانة دورية، وإدارة السيرفرات لضمان الاستمرارية."
        : "After-sales service, periodic maintenance, and server management."
    }
  ];
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Ahmed Hassan",
    role: "CEO, Tech Corp",
    text: "Excellent service and professional team. Highly recommended for security systems."
  },
  {
    id: 2,
    name: "Mohamed Ali",
    role: "Manager, Build Co.",
    text: "The web development team exceeded our expectations. Great job!"
  },
  {
    id: 3,
    name: "Sara Mahmoud",
    role: "Marketing Director",
    text: "Their SEO services helped us double our traffic in 3 months."
  }
];