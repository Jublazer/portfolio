import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { getService, ALL_SERVICES } from '@/data/services';
import { Section } from '../../components/ui/Section';
import { Container, Panel, Badge } from '../../components/ui/atoms';
import { PageHero } from '../../components/ui/PageHero';

export function generateStaticParams() {
  return ALL_SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const service = getService(slug);
    if (!service) return { title: 'Service not found' };
    return {
      title: service.title,
      description: service.summary,
      openGraph: { title: service.title, description: service.summary },
    };
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = service.relatedCategory
    ? ALL_SERVICES.find((s) => s.category === service.relatedCategory)
    : undefined;

  return (
    <>
      <PageHero eyebrow="Service" title={service.title} intro={service.summary}>
        <Link
          href="/services"
          className="group mt-2 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-faint hover:text-accent"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
          All services
        </Link>
      </PageHero>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          {/* Problem / value / offer */}
          <div className="flex flex-col gap-8">
            <DetailBlock label="The problem" body={service.problem} />
            <DetailBlock label="What you get" body={service.value} />
            <DetailBlock label="How we deliver" body={service.offer} />
            {service.note ? (
              <p className="rounded-xl border border-line bg-bg-soft p-4 text-sm text-muted">
                {service.note}
              </p>
            ) : null}
          </div>

          {/* Scope checklist */}
          <Panel className="flex h-fit flex-col gap-5 lg:sticky lg:top-24">
            <h2 className="text-lg font-semibold text-ink">What&apos;s included</h2>
            <ul className="flex flex-col gap-3">
              {service.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-muted">
                  <span
                    className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-accent/15 text-accent"
                    aria-hidden
                  >
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="button button--primary mt-2 w-full">
              Start a project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Panel>
        </div>
      </Section>

      {related ? (
        <Section tone="soft">
          <Container>
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  Pairs well with
                </p>
                <h2 className="mt-1 text-xl font-semibold text-ink">{related.title}</h2>
                <p className="mt-1 max-w-xl text-sm text-muted">{related.summary}</p>
              </div>
              <Link
                href={`/services/${related.slug}`}
                className="group inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-semibold text-accent hover:text-accent-strong"
              >
                Explore
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </Container>
        </Section>
      ) : null}
    </>
  );
}

function DetailBlock({ label, body }: { label: string; body: string }) {
  return (
    <div className="flex flex-col gap-2">
      <Badge tone="accent">{label}</Badge>
      <p className="text-pretty text-base leading-relaxed text-muted">{body}</p>
    </div>
  );
}
