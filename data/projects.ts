import type { Project } from './types';

export const ALL_PROJECTS: Project[] = [
  {
    slug: 'edo-indigenous-forum-abuja',
    category: 'branding-identity',
    title: 'EdO Indigenous Forum Abuja',
    description:
      'A member-led cultural organisation with a site that reads as trustworthy and laid-back at the same time.',
    images: ['/assets/projects/p1.png'],
    external: true,
    visible: true,
  },
  {
    slug: 'health-haus-ltd',
    category: 'web-development',
    title: 'Health Haus Ltd',
    description:
      'A private medical company managing a paid follow-up and booking portal for their members.',
    images: ['/assets/projects/p2.png'],
    url: '',
    external: false,
    visible: true,
  },
  {
    slug: 'bidah-fresh-farm',
    category: 'web-development',
    title: 'Bidah Fresh Farm',
    description:
      'A fresh-produce supplier connecting directly to a small customer base.',
    images: ['/assets/projects/p3.png'],
    external: true,
    visible: true,
  },
  {
    slug: 'dimplespay-agent',
    category: 'uiux-design',
    title: 'DimplesPay Agent',
    description:
      'Mobile interface and storefront for a POS agent living in a rural community.',
    images: ['/assets/projects/u4.png'],
    url: '',
    external: false,
    visible: true,
  },
  {
    slug: 'expo-press',
    category: 'uiux-design',
    title: 'ExPo Press',
    description:
      'A newsletter reader experience with a strong sense of rhythm and type.',
    images: ['/assets/projects/u1.png', '/assets/projects/u2.png', '/assets/projects/u3.png'],
    visible: true,
  },
  {
    slug: 'beyond-the-curve',
    category: 'web-development',
    title: 'Beyond the Curve',
    description:
      'A small design agency needing a first, clean web presence.',
    images: ['/assets/projects/p4.png'],
    external: true,
    visible: true,
  },
];

export function getProject(slug: string): Project | undefined {
  return ALL_PROJECTS.find((p) => p.slug === slug);
}

export function getProjectsByCategory(category: string): Project[] {
  return ALL_PROJECTS.filter((p) => p.category === category);
}

export function getProjectsBySlugs(slugs: string[]): Project[] {
  return ALL_PROJECTS.filter((p) => slugs.includes(p.slug));
}

export const FILTER_LABELS: Record<string, string> = {
  All: 'All Projects',
  'web-development': 'Web Development',
  'mobile-development': 'Mobile Development',
  'uiux-design': 'UI/UX Design',
  'branding-identity': 'Brand Identity',
};
