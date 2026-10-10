import type {
  ProcessStep,
  AboutSnapshot,
  Principles,
  HeroSubheading,
  CallToAction,
  ToolSet,
  TrustStatement,
} from './types';

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Research and scope',
    description:
      'We establish goals, constraints, and a decision procedure for keeping the work on track.',
    icon: 'compass',
  },
  {
    number: '02',
    title: 'Design system and experience',
    description:
      'We build the interface, icons, motion language, and layout rules your product will live inside.',
    icon: 'pen-tool',
  },
  {
    number: '03',
    title: 'Development and testing',
    description:
      'We ship incrementally, measure what matters, and fix issues before they reach your users.',
    icon: 'cpu',
  },
  {
    number: '04',
    title: 'Launch and iteration',
    description:
      'We set up monitoring, analytics, and a 30-day validation window to review and refine.',
    icon: 'rocket',
  },
  {
    number: '05',
    title: 'Review and scale',
    description:
      'We study the first weeks of real usage and recommend the next features to prioritise.',
    icon: 'users',
  },
];

export const ABOUT_SNAPSHOT: AboutSnapshot = {
  heading: 'Technology & creative studio',
  body: 'We build web and mobile products, design systems, and brand identities',
  detail:
    'that are engineered to a single standard of speed, accessibility, and visual discipline.',
};

export const PRINCIPLES: Principles = {
  heading: 'Our principles',
  items: [
    {
      icon: 'sparkles',
      title: 'Speed is a feature',
      description:
        'Every slow, janky, or unclear detail is removed before it ships.',
    },
    {
      icon: 'badge-check',
      title: 'Accessibility is default',
      description:
        'We build to WCAG standards so the work works for everyone, from day one.',
    },
    {
      icon: 'layers',
      title: 'Design systems compound',
      description:
        'Reusable components and tokens turn future work into a fraction of the effort.',
    },
    {
      icon: 'route',
      title: 'Decision-driven code',
      description:
        'We write code that explains itself, so your team can maintain it without a consultant.',
    },
  ],
};

export const HERO_SUBHEADINGS: HeroSubheading[] = [
  { label: 'Web Development', phrases: ['Next.js', 'React', 'TypeScript', 'Node.js'] },
  { label: 'Mobile Development', phrases: ['iOS', 'Android', 'React Native', 'Flutter'] },
  { label: 'UI/UX Design', phrases: ['Design Systems', 'User Research', 'Figma', 'Prototyping'] },
  { label: 'Brand Identity', phrases: ['Logo', 'Art Direction', 'Typography', 'Colour'] },
  { label: 'Creative Design', phrases: ['Motion', 'Illustration', 'UI Animation', 'Direction'] },
];

export const CTA: CallToAction = {
  heading: 'Ready to start a project?',
  body: 'Tell us about your project and we will get back to you within one business day.',
  button: 'Start Your Project',
  buttonClass: 'button button--primary',
};

export const CONTENT_MATRIX = {
  heading: 'The full contract',
  body: 'Every engagement is defined as a clear scope, milestones, and acceptance criteria before development begins.',
  items: [
    'Services selected from the list above',
    'A written brief with deliverables and deadlines',
    'Vertical slices delivered for review',
    'A supported launch path into production',
  ],
};

export const ABOUT_BODY =
  'We are a small, senior-only team of engineers and designers who care about the gap between what a product looks like and what it does. ' +
  'Each engagement is led by a principal who stays senior to the end, so you never hand your product to an unmanaged handoff.';

export const TOOL_SET: ToolSet = {
  title: 'Engineering stack',
  items: [
    'Next.js 15 and React 19',
    'TypeScript across the full stack',
    'Tailwind CSS for styling',
    'Framer Motion for interface animation',
    'Clarity and precision in every commit',
  ],
};

export const TRUST_STATEMENTS: TrustStatement[] = [
  {
    heading: 'We treat every project as a protocol, not a pretty picture.',
    body: 'Speed, accessibility, and design-system discipline are non-negotiable boundaries.',
  },
  {
    heading: 'We do not believe in "devs who design".',
    body: 'Every visual decision is traced to a research question or a measured user need.',
  },
];

export const PROJECT_INTRO = {
  heading: 'Selected work',
  body: 'Each of these projects was pursued as a single seat, a small team, or a scoped workshop.',
};

export const SERVICES_INTRO = {
  heading: 'What we can take on',
  body: 'Nine service pillars. You can pick one, several, or ask us to scope a custom engagement.',
};
