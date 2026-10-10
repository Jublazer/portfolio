import type { ServiceCategory, Service } from './types';

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    slug: 'web-development',
    label: 'Web Development',
    description:
      'High-performance web applications engineered for speed, accessibility, and conversion.',
  },
  {
    slug: 'mobile-development',
    label: 'Mobile Development',
    description:
      'Native and cross-platform mobile experiences that hold attention and drive action.',
  },
  {
    slug: 'uiux-design',
    label: 'UI/UX Design',
    description:
      'Design systems, interfaces, and user journeys that feel inevitable to use.',
  },
  {
    slug: 'branding-identity',
    label: 'Brand Identity',
    description:
      'Logos, typography, and visual systems that make an idea unmistakable.',
  },
  {
    slug: 'creative-design',
    label: 'Creative Design',
    description:
      'Motion, illustration, and digital craftsmanship that make work impossible to ignore.',
  },
  {
    slug: 'digital-marketing',
    label: 'Digital Marketing',
    description:
      'Campaigns and funnels engineered to convert audiences into customers.',
  },
  {
    slug: 'product-strategy',
    label: 'Product Strategy',
    description:
      'Discovery, positioning, and roadmaps that keep products focused on real value.',
  },
  {
    slug: 'cloud-databases',
    label: 'Cloud & Databases',
    description:
      'Secure, scalable infrastructure and data models that grow with you.',
  },
  {
    slug: 'ai-ml',
    label: 'AI & ML',
    description:
      'Practical AI integrations and model workflows that solve real business problems.',
  },
];

export const ALL_SERVICES: Service[] = [
  {
    slug: 'web-development',
    category: 'web-development',
    title: 'Web Development',
    summary:
      'High-performance web applications engineered for speed, accessibility, and conversion.',
    problem:
      'Slow, fragile websites cost you customers before they ever see what you do.',
    value:
      'Fast, accessible sites and web apps that load quickly and turn visitors into customers.',
    offer:
      'Discovery, architecture, UI build, performance pass, and a supported launch.',
    bullets: [
      'Marketing sites and landing pages',
      'Web applications and dashboards',
      'E-commerce and payment flows',
      'Performance and SEO optimisation',
      'Accessibility to WCAG AA',
      'CMS and content workflows',
    ],
    note: 'Built on Next.js and React with TypeScript across the stack.',
  },
  {
    slug: 'mobile-development',
    category: 'mobile-development',
    title: 'Mobile Development',
    summary:
      'Native and cross-platform mobile experiences that hold attention and drive action.',
    problem:
      'A clunky mobile experience loses users in the first session and never earns a return visit.',
    value:
      'Mobile apps that feel native, stay fast, and keep people coming back.',
    offer:
      'Product definition, UI, build, store submission, and post-launch support.',
    bullets: [
      'iOS and Android applications',
      'React Native cross-platform builds',
      'Offline-first data and sync',
      'Push notifications and engagement',
      'App store submission support',
      'Crash and analytics monitoring',
    ],
    note: 'One codebase shipped to both stores where it makes sense.',
  },
  {
    slug: 'uiux-design',
    category: 'uiux-design',
    title: 'UI/UX Design',
    summary:
      'Design systems, interfaces, and user journeys that feel inevitable to use.',
    problem:
      'Confusing interfaces create support tickets, abandoned carts, and low trust.',
    value:
      'Interfaces that guide people effortlessly and remove friction at every step.',
    offer:
      'Research, wireframes, a design system, and high-fidelity screens ready to build.',
    bullets: [
      'User research and personas',
      'Information architecture and flows',
      'Wireframes and prototypes',
      'Design systems and components',
      'Accessibility and usability review',
      'Developer handoff and specs',
    ],
    note: 'Delivered in Figma with a documented component library.',
  },
  {
    slug: 'branding-identity',
    category: 'branding-identity',
    title: 'Brand Identity',
    summary:
      'Logos, typography, and visual systems that make an idea unmistakable.',
    problem:
      'Weak or inconsistent identity makes established businesses look interchangeable.',
    value:
      'A coherent visual system that makes your work recognisable on any channel.',
    offer:
      'Discovery, positioning, logo and typography, application mockups, and guidelines.',
    bullets: [
      'Brand discovery and positioning',
      'Logo and wordmark systems',
      'Typography and colour strategy',
      'Brand guidelines and templates',
      'Asset sets for web and print',
      'Illustrations and iconography',
    ],
    note: 'Includes a brand-identity kit as a companion to any product project.',
    relatedCategory: 'creative-design',
  },
  {
    slug: 'creative-design',
    category: 'creative-design',
    title: 'Creative Design',
    summary:
      'Motion, illustration, and digital craftsmanship that make work impossible to ignore.',
    problem:
      'Static or generic creative undercuts otherwise credible technical and creative work.',
    value:
      'Directed creative that works as a complete package across web, social, and presentation.',
    offer:
      'Creative brief, concept, motion or illustration, review, and delivery.',
    bullets: [
      'Static and motion design',
      'UI animation and micro-interactions',
      'Illustration and iconography',
      'Brand-driven visual direction',
      'Presentation and storytelling assets',
      'Review and delivery support',
    ],
    note: 'Motion-led projects are offered as focused creative workshops.',
    relatedCategory: 'branding-identity',
  },
  {
    slug: 'digital-marketing',
    category: 'digital-marketing',
    title: 'Digital Marketing',
    summary:
      'Campaigns and funnels engineered to convert audiences into customers.',
    problem:
      'Marketing that looks busy but converts nothing wastes ad spend and attention.',
    value:
      'Audience-focused funnels with clear conversion paths and measurable results.',
    offer:
      'Audience research, channel plan, creative, campaign setup, and optimisation.',
    bullets: [
      'Paid media campaigns and funnel setup',
      'Performance and retention marketing',
      'Conversion rate optimisation',
      'Analytics and attribution setup',
      'Content and community strategy',
      'Reporting and iterative testing',
    ],
    note: 'Full campaign execution is scoped as separate engagements.',
  },

  {
    slug: 'product-strategy',
    category: 'product-strategy',
    title: 'Product Strategy',
    summary:
      'Discovery, positioning, and roadmaps that keep products focused on real value.',
    problem:
      'Teams ship features nobody asked for while the real opportunity sits untouched.',
    value:
      'A prioritised roadmap grounded in research, so every sprint moves the needle.',
    offer:
      'Discovery workshops, competitive analysis, positioning, and a costed roadmap.',
    bullets: [
      'Product discovery and validation',
      'Competitive and market analysis',
      'Positioning and messaging',
      'Roadmap and backlog planning',
      'Success metrics and KPIs',
      'Go-to-market planning',
    ],
    note: 'Ideal before a build to de-risk scope and budget.',
  },
  {
    slug: 'cloud-databases',
    category: 'cloud-databases',
    title: 'Cloud & Databases',
    summary:
      'Secure, scalable infrastructure and data models that grow with you.',
    problem:
      'Brittle hosting and messy data slow teams down and put reliability at risk.',
    value:
      'Infrastructure and data models that stay fast, secure, and simple to operate.',
    offer:
      'Architecture review, hosting setup, data modelling, and CI/CD.',
    bullets: [
      'Cloud architecture and hosting',
      'Database design and migrations',
      'API and backend integration',
      'Authentication and security',
      'CI/CD and deployment pipelines',
      'Monitoring and cost optimisation',
    ],
    note: 'Set up so your team can ship without a platform engineer on standby.',
  },
  {
    slug: 'ai-ml',
    category: 'ai-ml',
    title: 'AI & ML',
    summary:
      'Practical AI integrations and model workflows that solve real business problems.',
    problem:
      'AI gets added as a buzzword feature that nobody uses and nobody maintains.',
    value:
      'Focused AI features that remove real work and compound over time.',
    offer:
      'Use-case scoping, prototype, integration, and evaluation harness.',
    bullets: [
      'Use-case discovery and feasibility',
      'LLM integration and prompt design',
      'Retrieval and knowledge search',
      'Automation and workflow agents',
      'Evaluation and guardrails',
      'Cost and latency optimisation',
    ],
    note: 'We start from a real bottleneck, not a model in search of a problem.',
  },
];

export function getService(slug: string): Service | undefined {
  return ALL_SERVICES.find((s) => s.slug === slug);
}

export function getServicesByCategory(category: string): Service[] {
  return ALL_SERVICES.filter((s) => s.category === category);
}

