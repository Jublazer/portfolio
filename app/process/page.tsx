import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Section } from '../components/ui/Section';
import { Container, SectionHeading } from '../components/ui/atoms';
import { PageHero } from '../components/ui/PageHero';
import { Reveal } from '../components/ui/molecules';
import { iconFor } from '../components/ui/icons';
import { PROCESS_STEPS, CONTENT_MATRIX } from '@/data/pages';

export const metadata: Metadata = {
  title: 'Process',
  description:
    'A five-step engagement model: research and scope, design, development, launch, and review — each with clear acceptance criteria.',
};

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Process"
        title="A clear path from idea to launch"
        intro="Every engagement follows the same disciplined sequence, so you always know what happens next and what “done” means."
      />

      <Section>
        <div className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="The five steps"
            title="How an engagement runs"
            intro="Each step has a defined output. Nothing advances until the previous step is signed off."
          />

          <ol className="relative flex flex-col gap-6">
            {PROCESS_STEPS.map((step, i) => {
              const Icon = iconFor(step.icon);
              return (
                <Reveal as="li" key={step.number} delay={i * 70}>
                  <div className="flex gap-5 rounded-2xl border border-line bg-surface p-6 sm:p-8">
                    <div className="flex flex-col items-center gap-3">
                      <span className="text-sm font-bold text-accent">{step.number}</span>
                      <span className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-accent/10 text-accent">
                        <Icon className="h-5 w-5" />
                      </span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-xl font-semibold text-ink">{step.title}</h3>
                      <p className="text-sm leading-relaxed text-muted">{step.description}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </Section>

      {/* Content matrix */}
      <Section tone="soft">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <SectionHeading
            eyebrow="The contract"
            title={CONTENT_MATRIX.heading}
            intro={CONTENT_MATRIX.body}
          />
          <div className="flex flex-col gap-4 rounded-2xl border border-line bg-surface p-8">
            <ul className="flex flex-col gap-3">
              {CONTENT_MATRIX.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted">
                  <span
                    className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-accent/15 text-xs font-bold text-accent"
                    aria-hidden
                  >
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <Container>
          <div className="flex flex-col items-center gap-6 rounded-3xl border border-line bg-surface px-6 py-14 text-center">
            <h2 className="max-w-2xl text-balance text-3xl font-bold text-ink">
              Ready to put this process to work?
            </h2>
            <p className="max-w-xl text-sm text-muted">
              Tell us about your project and we will get back to you within one business day.
            </p>
            <Link href="/contact" className="button button--primary">
              Start a project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
