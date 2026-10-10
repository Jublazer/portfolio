import type { Metadata } from 'next';
import { ALL_PROJECTS, FILTER_LABELS } from '@/data/projects';
import { Section } from '../components/ui/Section';
import { PageHero } from '../components/ui/PageHero';
import { ProjectFilter } from './ProjectFilter';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Selected work across web, mobile, UI/UX, and brand identity — from member portals to cultural organisations and design studios.',
};

const categories = ['All', 'web-development', 'mobile-development', 'uiux-design', 'branding-identity'];

export default function ProjectsPage() {
  const visible = ALL_PROJECTS.filter((p) => p.visible !== false);
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Work that ships and lasts"
        intro="A selection of products, identities, and interfaces we have designed and built for clients across industries."
      />
      <Section>
        <ProjectFilter
          projects={visible}
          categories={categories}
          labels={FILTER_LABELS}
        />
      </Section>
    </>
  );
}
