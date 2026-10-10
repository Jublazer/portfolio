import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { Project, Service } from '@/data/types';
import { FILTER_LABELS } from '@/data/projects';
import { Badge } from './atoms';

const aspect = 'aspect-[16/10]';

export function ProjectCard({ project }: { project: Project }) {
  const cover = project.images[0];
  const isExternal = project.external && project.url;
  const href = isExternal ? project.url! : `/projects/${project.slug}`;
  const categoryLabel = FILTER_LABELS[project.category] ?? project.category;

  const content = (
    <>
      <div className={`relative overflow-hidden rounded-xl border border-line ${aspect}`}>
        <Image
          src={cover}
          alt={`${project.title} preview`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-1">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-base font-semibold text-ink">{project.title}</h3>
          <ArrowUpRight className="h-4 w-4 flex-none text-faint transition-colors group-hover:text-accent" />
        </div>
        <p className="text-sm leading-relaxed text-muted">{project.description}</p>
        <span className="mt-1 text-xs font-medium text-accent">{categoryLabel}</span>
      </div>
    </>
  );

  const classes =
    'group flex flex-col gap-4 rounded-2xl border border-line bg-surface p-4 transition-colors hover:border-accent/50';

  if (isExternal) {
    return (
      <a href={href} className={classes} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex h-full flex-col gap-3 rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-accent/50"
    >
      <h3 className="flex items-center justify-between text-lg font-semibold text-ink">
        {service.title}
        <ArrowUpRight className="h-4 w-4 flex-none text-faint transition-colors group-hover:text-accent" />
      </h3>
      <p className="text-sm leading-relaxed text-muted">{service.summary}</p>
      <div className="mt-auto flex flex-wrap gap-2 pt-3">
        {service.bullets.slice(0, 3).map((b) => (
          <Badge key={b}>{b}</Badge>
        ))}
      </div>
    </Link>
  );
}
