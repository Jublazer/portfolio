import type { Metadata } from 'next';
import { SERVICE_CATEGORIES, ALL_SERVICES } from '@/data/services';
import { Section } from '../components/ui/Section';
import { PageHero } from '../components/ui/PageHero';
import { ServiceCard } from '../components/ui/cards';
import { ServiceFilter } from './ServiceFilter';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Nine disciplines, one team: web and mobile development, UI/UX design, brand identity, creative design, marketing, strategy, cloud, and AI.',
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Nine disciplines, one senior team"
        intro="From strategy and design through engineering to a supported launch — every service is delivered with the same craft, clarity, and accountability."
      />

      <Section>
        <ServiceFilter categories={SERVICE_CATEGORIES} services={ALL_SERVICES} />
      </Section>

      {/* Fallback static grid (for no-JS / SEO crawl) */}
      <noscript>
        <Section tone="soft">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ALL_SERVICES.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Section>
      </noscript>
    </>
  );
}
