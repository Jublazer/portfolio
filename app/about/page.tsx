import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Section } from '../components/ui/Section';
import { Container, SectionHeading, Panel, Bullet } from '../components/ui/atoms';
import { PageHero } from '../components/ui/PageHero';
import { Reveal } from '../components/ui/molecules';
import { iconFor } from '../components/ui/icons';
import { ABOUT_BODY, PRINCIPLES, TOOL_SET, TRUST_STATEMENTS } from '@/data/pages';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Timmitech is a senior-only studio of engineers and designers who care about the gap between what a product looks like and what it does.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A senior-only studio, end to end"
        intro={ABOUT_BODY}
      />

      {/* Principles */}
      <Section>
        <div className="flex flex-col gap-10">
          <SectionHeading
            eyebrow={PRINCIPLES.heading}
            title="The rules we work by"
            intro="Four principles that shape every decision, from the first sketch to the last commit."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {PRINCIPLES.items.map((item, i) => {
              const Icon = iconFor(item.icon);
              return (
                <Reveal as="div" key={item.title} delay={i * 70}>
                  <Panel className="flex h-full flex-col gap-4">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-muted">{item.description}</p>
                  </Panel>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Stack */}
      <Section tone="soft">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <SectionHeading
            eyebrow="How we build"
            title={TOOL_SET.title}
            intro="A focused, modern stack chosen for speed, type-safety, and long-term maintainability — not for novelty."
          />
          <Panel className="flex flex-col gap-4">
            <ul className="flex flex-col gap-3">
              {TOOL_SET.items.map((item) => (
                <Bullet key={item}>{item}</Bullet>
              ))}
            </ul>
          </Panel>
        </div>
      </Section>

      {/* Trust statements */}
      <Section>
        <Container>
          <div className="grid gap-4 md:grid-cols-2">
            {TRUST_STATEMENTS.map((s, i) => (
              <Reveal as="div" key={s.heading} delay={i * 80}>
                <figure className="flex h-full flex-col gap-3 rounded-2xl border border-line bg-surface p-8">
                  <blockquote className="text-lg font-semibold leading-snug text-ink">
                    “{s.heading}”
                  </blockquote>
                  <figcaption className="text-sm text-muted">{s.body}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section tone="soft">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-line bg-surface p-8 sm:flex-row sm:items-center">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold text-ink">Want to work with us?</h2>
              <p className="max-w-xl text-sm text-muted">
                See exactly how we take a project from idea to launch.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/process" className="button button--ghost">
                See our process
              </Link>
              <Link href="/contact" className="button button--primary">
                Start a project
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
