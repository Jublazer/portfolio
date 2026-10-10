import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { getProject, ALL_PROJECTS, FILTER_LABELS } from '@/data/projects';
import { Section } from '../../components/ui/Section';
import { Container, Badge } from '../../components/ui/atoms';
import { PageHero } from '../../components/ui/PageHero';

export function generateStaticParams() {
  return ALL_PROJECTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const project = getProject(slug);
    if (!project) return { title: 'Project not found' };
    return {
      title: project.title,
      description: project.description,
      openGraph: {
        title: project.title,
        description: project.description,
        images: project.images.slice(0, 1),
      },
    };
  });
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const isExternal = project.external && project.url;

  return (
    <>
      <PageHero
        eyebrow={FILTER_LABELS[project.category] ?? project.category}
        title={project.title}
        intro={project.description}
      >
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-faint hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            All projects
          </Link>
          {isExternal ? (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="button button--primary px-5 py-2 text-sm"
            >
              Visit live site
              <ArrowUpRight className="h-4 w-4" />
            </a>
          ) : null}
        </div>
      </PageHero>

      <Section>
        <Container>
          <div className="flex flex-col gap-6">
            {project.images.map((src, i) => (
              <div
                key={src}
                className="overflow-hidden rounded-2xl border border-line bg-surface"
              >
                <Image
                  src={src}
                  alt={`${project.title} screen ${i + 1}`}
                  width={1440}
                  height={900}
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  className="h-auto w-full object-cover object-top"
                />
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="soft">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-line bg-surface p-8 sm:flex-row sm:items-center">
            <div className="flex flex-col gap-2">
              <Badge tone="accent">Have a project like this?</Badge>
              <h2 className="text-2xl font-bold text-ink">Let&apos;s build yours next</h2>
              <p className="max-w-xl text-sm text-muted">
                Tell us what you are working on and we will get back to you within one
                business day.
              </p>
            </div>
            <Link href="/contact" className="button button--primary whitespace-nowrap">
              Start a project
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
