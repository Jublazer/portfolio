import type { CaseStudy } from './types';

export const BRAND = {
  name: 'Timmitech',
  shortName: 'Timmitech',
  tagline: 'Technology & Creative Studio',
  logoText: 'Timmitech',
  symbolAlt: 'Timmitech logo symbol',
  currentYearStart: 2026,
  baseUrl: '',
};

export const SITENAME = BRAND.name;

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Process', href: '/process' },
  { label: 'Contact', href: '/contact' },
];

export const FOOTER_LINKS = [
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Process', href: '/process' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy', href: '/privacy' },
];



export const BANNER_IMAGES = [
  { src: '/assets/bg1.jpg', alt: 'Office interior with warm lighting and workspace equipment' },
  { src: '/assets/bg2.jpg', alt: 'Studio workspace with plants and workspace equipment' },
];

export const HERO_CARD_SECTIONS = [
  {
    title: 'Web & Mobile Development',
    body: 'Crafting seamless digital experiences across platforms',
    detail:
      'From responsive websites to dynamic mobile applications, we specialise in building intuitive, high-performance solutions that meet real-world needs.',
    indicators: ['Next.js applications', 'React Native & Flutter mobile apps', 'Cloud & data'],
  },
  {
    title: 'UI/UX Design',
    body: 'Designing interfaces that feel as good as they look',
    detail:
      'Great design is invisible. It guides users effortlessly, removing friction while making every interaction feel natural.',
    indicators: ['Research & user flows', 'Design systems', 'Accessibility-first interfaces'],
  },
  {
    title: 'Product Strategy',
    body: 'A roadmap that keeps a product focused on real value.',
    detail:
      'Discovery, positioning, and prioritisation ensure your product moves forward with clarity, not guesswork.',
    indicators: ['Discovery & positioning', 'Roadmap & backlog', 'Stakeholder alignment'],
  },
];

export const ASSET = {
  hero: '/assets/Character.png',
  logo: '/assets/TimmiLogoBlack.png',
  logoWhite: '/assets/TimmiLogoYellow.png',
  logoDark: '/assets/TimmiLogoBlack.png',
  logoYellow: '/assets/TimmiYellow.png',
  project: (n: number) => `/assets/projects/p${n}.png`,
  ui: (n: number) => `/assets/projects/u${n}.png`,
};

export const CONTACT = {
  email: 'info@timmitech.com',
  phone: '+234 701 9207 099',
  address: 'Suite 12EE, Zone E Legislative Quarters, Apo, Abuja, Nigeria',
  hours: 'Mon - Fri, 09:00 - 18:00 WAT',
};

export function cname(path: string): string {
  return BRAND.baseUrl ? BRAND.baseUrl + path : path;
}

export function pageTitle(title: string, extra = ''): string {
  return extra ? `${title} | ${extra}` : title;
}

export const SERVICES_INDEX: CaseStudy[] = [
  {
    title: 'Core engineering - web & mobile',
    description: 'Senior-only teams on React, TypeScript, and Next.js.',
    metrics: [
      { label: 'GTM time', value: '2x faster' },
      { label: 'Page weight', value: '< 200 kB' },
      { label: 'Accessibility', value: 'WCAG AA' },
      { label: 'Contract clarity', value: '8 / 10' },
    ],
    service: 'Core Engineering',
    tech: 'Next.js, React, TypeScript, Tailwind CSS, Framer Motion',
  },
  {
    title: 'Design systems & identity',
    description: 'Logos, tokens, components, and motion language that scale.',
    metrics: [
      { label: 'Design-token weeks', value: '0 to 1' },
      { label: 'Hand-off bugs', value: 'down 80%' },
      { label: 'Component usage', value: '> 85%' },
      { label: 'Contract clarity', value: '8 / 10' },
    ],
    service: 'Design Systems',
    tech: 'Figma, design tokens, CSS custom properties, Storybook',
  },
  {
    title: 'Speed, accessibility, and decision quality',
    description: 'Every engagement is measured against these three criteria.',
    metrics: [
      { label: 'Time-to-first-render', value: '< 1.2 s' },
      { label: 'Accessibility', value: 'AA minimum' },
      { label: 'Decision latency', value: 'down 50%' },
      { label: 'Contract clarity', value: '8 / 10' },
    ],
    service: 'Performance & Quality',
    tech: 'Lighthouse, axe-core, TypeScript, CI pipelines',
  },
  {
    title: 'Workflow, reporting, and clear scope',
    description: 'A single source of truth for budgets, charts, and decisions.',
    metrics: [
      { label: 'Reports', value: '3 to 1' },
      { label: 'Charts', value: '2 to 1' },
      { label: 'Decision latency', value: 'down 50%' },
      { label: 'Contract clarity', value: '8 / 10' },
    ],
    service: 'Operations',
    tech: 'Vercel, Slack, Notion, Lighthouse CI',
  },
];

export const TRUST_STATEMENTS = {
  heading: 'Honest feedback, senior ownership',
  body: 'We will not pretend design and code fit neatly into one box. We will tell you when a choice will cost you.',
};

export const TRUST_BODY =
  'We do not believe in devs who design. We will tell you when a choice will cost you.';

export const FLOW_STEPS = [
  {
    title: 'Choose your services',
    body: 'You pick two or three pillars. We confirm scope, milestones, and a kickoff date.',
  },
  {
    title: 'Contract and design',
    body: 'We draft the brief, design system, and a prototype you can react to before code.',
  },
  {
    title: 'Develop and measure',
    body: 'We ship incrementally, measure the real metrics, and fix the gaps.',
  },
  {
    title: 'Launch and iterate',
    body: 'We support the launch, review the first weeks, and prioritise the next step.',
  },
];

export const FAQ = {
  heading: 'Common questions',
  items: [
    {
      question: 'How much does a project cost?',
      answer:
        'Every project is scoped individually. We will send a written brief with milestones, a budget, and a launch plan before development begins.',
    },
    {
      question: 'What is your preferred working setup?',
      answer:
        'Remote-first, with a standing weekly sync, a shared design system, and a single source of truth for decisions.',
    },
    {
      question: 'How quickly can you start?',
      answer:
        'We can start within two weeks of the contract. Estimation and kickoff happen in parallel.',
    },
    {
      question: 'Do you provide ongoing support?',
      answer:
        'Yes. We offer a 30-day post-launch review and can extend with a monthly maintenance retainer.',
    },
    {
      question: 'What is your ideal project size?',
      answer:
        'We work best as a small, senior-only team on a focused problem. We do not hold large teams accountable.',
    },
  ],
};


export function pageDescription(description: string): string {
  return description;
}
