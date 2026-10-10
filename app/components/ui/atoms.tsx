import type { ReactNode } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

/** Page-width wrapper with consistent horizontal gutters. */
export function Container({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`container-px mx-auto w-full max-w-6xl ${className}`}>{children}</div>
  );
}

/** Small overline label used above headings. */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
      <span className="h-px w-6 bg-accent/60" aria-hidden />
      {children}
    </span>
  );
}

/** Section heading block: eyebrow + title + optional intro. */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  as: As = 'h2',
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: 'left' | 'center';
  as?: 'h1' | 'h2' | 'h3';
}) {
  const alignment =
    align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left';
  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignment}`}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <As className="text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        {title}
      </As>
      {intro ? (
        <p className="text-pretty text-base leading-relaxed text-muted">{intro}</p>
      ) : null}
    </div>
  );
}

/** Neutral pill label. */
export function Badge({
  children,
  tone = 'default',
}: {
  children: ReactNode;
  tone?: 'default' | 'accent';
}) {
  const tones =
    tone === 'accent'
      ? 'border-accent/40 bg-accent/10 text-accent'
      : 'border-line bg-surface-2 text-muted';
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${tones}`}
    >
      {children}
    </span>
  );
}

/** Rounded surface card. */
export function Panel({
  children,
  className = '',
  as: As = 'div',
}: {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'article' | 'li' | 'section';
}) {
  return (
    <As
      className={`rounded-2xl border border-line bg-surface p-6 sm:p-8 ${className}`}
    >
      {children}
    </As>
  );
}

/** A check-marked list item. */
export function Bullet({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-sm leading-relaxed text-muted">
      <span
        className="mt-1 inline-flex h-4 w-4 flex-none items-center justify-center rounded-full bg-accent/15 text-accent"
        aria-hidden
      >
        <svg viewBox="0 0 20 20" fill="currentColor" className="h-3 w-3">
          <path
            fillRule="evenodd"
            d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.3 3.3 6.8-6.8a1 1 0 0 1 1.4 0Z"
            clipRule="evenodd"
          />
        </svg>
      </span>
      <span>{children}</span>
    </li>
  );
}

/** Text link with an animated arrow. */
export function TextLink({
  href,
  children,
  external = false,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  const isExternal = external || href.startsWith('http') || href.startsWith('mailto:');
  const classes =
    'group inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-strong';
  const content = (
    <>
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </>
  );
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
