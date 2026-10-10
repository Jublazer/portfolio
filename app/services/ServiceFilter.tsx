'use client';

import { useMemo, useState } from 'react';
import type { ServiceCategory, Service } from '@/data/types';
import { ServiceCard } from '../components/ui/cards';
import { Reveal } from '../components/ui/molecules';

export function ServiceFilter({
  categories,
  services,
}: {
  categories: ServiceCategory[];
  services: Service[];
}) {
  const [active, setActive] = useState<string>('all');

  const filtered = useMemo(
    () => (active === 'all' ? services : services.filter((s) => s.category === active)),
    [active, services],
  );

  const activeCategory = categories.find((c) => c.slug === active);

  return (
    <div className="flex flex-col gap-8">
      {/* Filter chips */}
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter services">
        <FilterChip
          label="All"
          count={services.length}
          active={active === 'all'}
          onClick={() => setActive('all')}
        />
        {categories.map((c) => (
          <FilterChip
            key={c.slug}
            label={c.label}
            count={services.filter((s) => s.category === c.slug).length}
            active={active === c.slug}
            onClick={() => setActive(c.slug)}
          />
        ))}
      </div>

      {/* Category blurb */}
      {activeCategory ? (
        <p className="max-w-2xl text-sm text-muted">{activeCategory.description}</p>
      ) : null}

      {/* Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((service, i) => (
          <Reveal as="div" key={service.slug} delay={i * 50}>
            <ServiceCard service={service} />
          </Reveal>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-sm text-faint">No services in this category yet.</p>
      ) : null}
    </div>
  );
}

function FilterChip({
  label,
  count,
  active,
  onClick,
}: {
  label: string;
  count: number;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
        active
          ? 'border-accent bg-accent/10 text-accent'
          : 'border-line bg-surface text-muted hover:border-accent/40 hover:text-ink'
      }`}
    >
      {label}
      <span className="text-xs text-faint">{count}</span>
    </button>
  );
}
