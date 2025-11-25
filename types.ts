import { LucideIcon } from 'lucide-react';

export type Language = 'ar' | 'en';

export interface Project {
  id: number;
  title: string;
  description: string;
  url: string;
  image: string;
}

export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
}

export interface ContentData {
  nav: {
    home: string;
    about: string;
    services: string;
    portfolio: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  about: {
    title: string;
    description: string;
    visionTitle: string;
    vision: string;
    missionTitle: string;
    mission: string;
    valuesTitle: string;
    values: string[];
  };
  contact: {
    title: string;
    subtitle: string;
    address: string;
    phone: string;
    email: string;
    formName: string;
    formEmail: string;
    formMessage: string;
    formSubmit: string;
  };
  footer: {
    rights: string;
    quickLinks: string;
  };
}