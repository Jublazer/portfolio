import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Container, Badge, Bullet } from './ui/atoms';
import { BRAND, HERO_CARD_SECTIONS } from '@/data/constants';

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Ambient accent glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-12rem] h-[32rem] w-[52rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(244,192,37,0.08),transparent_60%)]" />
      </div>

      <Container>
        <div className="flex flex-col items-center gap-6 py-20 text-center sm:py-28">
          <Badge tone="accent">{BRAND.tagline}</Badge>

          <h1 className="max-w-4xl text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-6xl md:text-7xl">
            Let&apos;s create{" "}
            <span className="bg-gradient-to-r from-accent to-accent-strong bg-clip-text text-transparent">
              digital experiences
            </span>{" "}
            that hold attention.
          </h1>

          <p className="max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
            I&apos;m {BRAND.name} — a technology and creative studio building web and mobile
            products, design systems, and brand identities engineered for speed, accessibility,
            and visual discipline.
          </p>

          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <Link href="/projects" className="button button--primary">
              View my work
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/contact" className="button button--ghost">
              Work with me
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Discipline cards */}
          <div className="mt-10 grid w-full gap-4 text-left md:grid-cols-3">
            {HERO_CARD_SECTIONS.map((section, i) => (
              <div
                key={section.title}
                className="flex flex-col gap-4 rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-accent/50"
              >
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
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
