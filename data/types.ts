export interface ServiceCategory {
  slug: string;
  label: string;
  description: string;
}

export interface Service {
  slug: string;
  category: string;
  title: string;
  summary: string;
  problem: string;
  value: string;
  offer: string;
  bullets: string[];
  note?: string;
  relatedCategory?: string;
}

export interface Project {
  slug: string;
  category: 'web-development' | 'mobile-development' | 'uiux-design' | 'branding-identity';
  title: string;
  description: string;
  images: string[];
  video?: string;
  url?: string;
  external?: boolean;
  visible?: boolean;
}

export interface ServiceHighlight {
  slug: string;
  icon: string;
  title: string;
  description: string;
  cta: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface AboutSnapshot {
  heading: string;
  body: string;
  detail: string;
}

export interface ToolSet {
  title: string;
  items: string[];
}

export interface Principles {
  heading: string;
  items: { icon: string; title: string; description: string }[];
}

export interface TrustStatement {
  heading: string;
  body: string;
}

export interface HeroSubheading {
  label: string;
  phrases: string[];
}

export interface ProcessNotes {
  title: string;
  items: string[];
}

export interface CallToAction {
  heading: string;
  body: string;
  button: string;
  buttonClass: string;
}

export interface CaseStudy {
  title: string;
  description: string;
  metrics: { label: string; value: string }[];
  service: string;
  tech: string;
}
