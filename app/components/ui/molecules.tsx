'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useInView, useReducedMotion } from './hooks';

type Variant = 'primary' | 'ghost';

const base =
  'button group/btn inline-flex items-center justify-center gap-2 whitespace-nowrap';
const variants: Record<Variant, string> = {
  primary: 'button--primary',
  ghost: 'button--ghost',
};

function Inner({ children, trailingIcon = true }: { children: ReactNode; trailingIcon?: boolean }) {
  return (
    <>
      <span>{children}</span>
      {trailingIcon ? (
        <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
      ) : null}
    </>
  );
}

export function Button({
  children,
  href,
  variant = 'primary',
  trailingIcon = true,
  className = '',
}: {
  children: ReactNode;
  href: string;
  variant?: Variant;
  trailingIcon?: boolean;
  className?: string;
}) {
  const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:');
  const cls = `${base} ${variants[variant]} ${className}`;
  const inner = <Inner trailingIcon={trailingIcon}>{children}</Inner>;
  if (isExternal) {
    return (
      <a href={href} className={cls} target="_blank" rel="noreferrer">
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

export function LinkButton({
  children,
  href,
  variant = 'primary',
  className = '',
}: {
  children: ReactNode;
  href: string;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Button href={href} variant={variant} className={className} trailingIcon>
      {children}
    </Button>
  );
}

/** Reveals its children with a subtle upward fade once scrolled into view. */
export function Reveal({
  children,
  delay = 0,
  className = '',
  as: As = 'div',
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: 'div' | 'section' | 'li' | 'article';
}) {
  const reduced = useReducedMotion();
  const { ref, inView } = useInView<HTMLDivElement>();

  if (reduced) {
    return <As className={className}>{children}</As>;
  }

  return (
    <As
      ref={ref as never}
      className={`reveal ${inView ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </As>
  );
}
