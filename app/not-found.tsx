import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container, Eyebrow } from './components/ui/atoms';

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden py-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10rem] h-[28rem] w-[44rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />
      </div>
      <Container>
        <div className="mx-auto flex max-w-xl flex-col items-center gap-6 text-center">
          <Eyebrow>404</Eyebrow>
          <h1 className="text-balance text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            This page could not be found.
          </h1>
          <p className="text-pretty text-base leading-relaxed text-muted">
            The link may be broken, or the page may have been moved. Let&apos;s get you back to
            solid ground.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <Link href="/" className="button button--primary">
              Back to home
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/projects" className="button button--ghost">
              Browse projects
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
