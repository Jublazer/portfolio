import type { ReactNode } from 'react';
import { Container, Eyebrow } from './atoms';

/** Compact hero used at the top of inner pages. */
export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 flex justify-center"
      >
        <div className="h-80 w-[40rem] rounded-full bg-accent/10 blur-[110px]" />
      </div>
      <Container>
        <div className="flex max-w-3xl flex-col gap-5">
          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
          <h1 className="text-balance text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl">
            {title}
          </h1>
          {intro ? (
            <p className="text-pretty text-base leading-relaxed text-muted sm:text-lg">
              {intro}
            </p>
          ) : null}
          {children}
        </div>
      </Container>
    </section>
  );
}
