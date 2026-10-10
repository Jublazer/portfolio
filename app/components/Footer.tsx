'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { FOOTER_LINKS, BRAND, CONTACT } from '@/data/constants';
import { useCurrentYear } from './ui/hooks';
import logo from '../../public/assets/TimmiLogoYellow.png';

export default function Footer() {
  const year = useCurrentYear();
  const displayYear = year ?? BRAND.currentYearStart;

  return (
    <footer className="border-t border-line bg-bg-soft">
      <div className="container-px mx-auto w-full max-w-6xl py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand + blurb */}
          <div className="flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-2.5" aria-label={`${BRAND.name} home`}>
              <Image src={logo} width={34} height={34} alt={`${BRAND.name} logo`} />
              <span className="text-lg font-bold tracking-tight text-ink">{BRAND.name}</span>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              {BRAND.tagline}. We build web and mobile products, design systems, and brand
              identities engineered for speed, accessibility, and visual discipline.
            </p>
            <Link
              href="/contact"
              className="button button--primary w-fit px-5 py-2.5 text-sm"
            >
              Start a project
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Sitemap */}
          <nav aria-label="Footer" className="flex flex-col gap-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-faint">
              Explore
            </h3>
            <ul className="flex flex-col gap-2.5">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-faint">
              Get in touch
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm text-muted">
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="transition-colors hover:text-accent"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a href={`tel:${CONTACT.phone.replace(/[^+\d]/g, '')}`} className="transition-colors hover:text-accent">
                  {CONTACT.phone}
                </a>
              </li>
              <li className="leading-relaxed">{CONTACT.address}</li>
              <li className="text-faint">{CONTACT.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 hairline" />

        <div className="flex flex-col items-start justify-between gap-3 pt-6 text-xs text-faint sm:flex-row sm:items-center">
          <p>
            © {displayYear} {BRAND.name}. All rights reserved.
          </p>
          <p>
            Built with Next.js, React, and TypeScript.
          </p>
        </div>
      </div>
    </footer>
  );
}
