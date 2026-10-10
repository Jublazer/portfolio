'use client';

import { useMemo, useState } from 'react';
import type { Project } from '@/data/types';
import { ProjectCard } from '../components/ui/cards';
import { Reveal } from '../components/ui/molecules';

export function ProjectFilter({
  projects,
  categories,
  labels,
}: {
  projects: Project[];
  categories: string[];
  labels: Record<string, string>;
}) {
  const [active, setActive] = useState('All');

  const filtered = useMemo(
    () => (active === 'All' ? projects : projects.filter((p) => p.category === active)),
    [active, projects],
  );

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            role="tab"
            aria-selected={active === c}
            onClick={() => setActive(c)}
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              active === c
                ? 'border-accent bg-accent/10 text-accent'
                : 'border-line bg-surface text-muted hover:border-accent/40 hover:text-ink'
            }`}
          >
            {labels[c] ?? c}
            <span className="text-xs text-faint">
              {c === 'All' ? projects.length : projects.filter((p) => p.category === c).length}
            </span>
          </button>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, i) => (
          <Reveal as="div" key={project.slug} delay={i * 60}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-sm text-faint">No projects in this category yet.</p>
      ) : null}
    </div>
  );
}
