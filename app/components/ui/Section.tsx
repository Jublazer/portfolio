import type { ReactNode } from 'react';
import { Container } from './atoms';

/** A full-width section with consistent vertical rhythm. */
export function Section({
  children,
  id,
  className = '',
  containerClassName = '',
  tone = 'default',
}: {
  children: ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
  tone?: 'default' | 'soft';
}) {
  const tones = {
    default: 'bg-bg',
    soft: 'bg-bg-soft',
  };
  return (
    <section id={id} className={`py-20 sm:py-28 ${tones[tone]} ${className}`}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
