import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Hero from './components/Hero';
import { Section } from './components/ui/Section';
import { SectionHeading, Bullet, Panel, Container } from './components/ui/atoms';
import { Reveal } from './components/ui/molecules';
import { ProjectCard, ServiceCard } from './components/ui/cards';
import { ALL_SERVICES } from '@/data/services';
import { ALL_PROJECTS } from '@/data/projects';
import { CTA, ABOUT_BODY, TOOL_SET } from '@/data/pages';
import { HERO_CARD_SECTIONS } from '@/data/constants';

const featuredProjects = ALL_PROJECTS.filter((p) => p.visible !== false).slice(0, 3);
const featuredServices = ALL_SERVICES.slice(0, 6);

export default function Home() {
  return (
    <>
      <Hero />

      {/* Marquee / trust strip */}
      <div className="border-y border-line bg-bg-soft py-4">
        <Container>
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs font-medium uppercase tracking-[0.18em] text-faint">
            {['Next.js', 'React Native', 'TypeScript', 'Figma', 'Tailwind', 'Framer Motion'].map(
              (t) => (
                <li key={t}>{t}</li>
              ),
            )}
          </ul>
        </Container>
      </div>

      {/* What we do */}
      <Section id="services">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="What we do"
              title="A studio built around craft and clarity"
              intro="Nine disciplines, one team. We move from strategy through design and engineering to a supported launch."
            />
            <Link
              href="/services"
              className="group inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-semibold text-accent hover:text-accent-strong"
            >
              All services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service, i) => (
              <Reveal as="div" key={service.slug} delay={i * 60}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Discipline deep-dives */}
      <Section tone="soft" id="disciplines">
        <div className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="How we work"
            title="Three lenses on every engagement"
            intro="Engineering, design, and strategy run as one loop — not three handoffs."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {HERO_CARD_SECTIONS.map((section, i) => (
              <Reveal as="div" key={section.title} delay={i * 80}>
                <Panel className="flex h-full flex-col gap-4">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-xl font-semibold text-ink">{section.title}</h3>
                  <p className="text-sm font-medium text-muted">{section.body}</p>
                  <p className="text-sm leading-relaxed text-faint">{section.detail}</p>
                  <ul className="mt-auto flex flex-col gap-2 pt-3">
                    {section.indicators.map((ind) => (
                      <Bullet key={ind}>{ind}</Bullet>
                    ))}
                  </ul>
                </Panel>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Featured work */}
      <Section id="work">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Selected work"
              title="Products we have shipped"
              intro="A snapshot of recent engagements across web, mobile, identity, and design."
            />
            <Link
              href="/projects"
              className="group inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-semibold text-accent hover:text-accent-strong"
            >
              All projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, i) => (
              <Reveal as="div" key={project.slug} delay={i * 70}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* About snapshot + stack */}
      <Section tone="soft" id="about">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="flex flex-col gap-6">
            <SectionHeading
              eyebrow="The studio"
              title="Senior-only, end to end"
              intro={ABOUT_BODY}
            />
            <Link
              href="/about"
              className="group inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-strong"
            >
              More about us
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
          <Panel className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-ink">{TOOL_SET.title}</h3>
            <ul className="flex flex-col gap-2.5">
              {TOOL_SET.items.map((item) => (
                <Bullet key={item}>{item}</Bullet>
              ))}
            </ul>
          </Panel>
        </div>
      </Section>

      {/* CTA */}
      <Section id="contact-cta">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-line bg-surface px-6 py-14 text-center sm:px-12">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 -top-24 flex justify-center"
            >
              <div className="h-64 w-[36rem] rounded-full bg-accent/10 blur-[100px]" />
            </div>
            <div className="relative flex flex-col items-center gap-6">
              <SectionHeading
                as="h2"
                align="center"
                title={CTA.heading}
                intro={CTA.body}
              />
              <Link href="/contact" className={CTA.buttonClass}>
                {CTA.button}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
