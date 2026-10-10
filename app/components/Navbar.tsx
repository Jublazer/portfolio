'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';
import { NAV_LINKS, BRAND } from '@/data/constants';
import { useScrollHeader } from './ui/hooks';
import logo from '../../public/assets/TimmiLogoYellow.png';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrollHeader(24);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'border-b border-line bg-bg/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="container-px mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4">
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-2.5"
          onClick={() => setOpen(false)}
          aria-label={`${BRAND.name} home`}
        >
          <Image src={logo} width={32} height={32} alt={`${BRAND.name} logo`} priority />
          <span className="text-base font-bold tracking-tight text-ink">{BRAND.name}</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                  isActive(link.href) ? 'text-accent' : 'text-muted hover:text-ink'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link href="/contact" className="button button--primary px-5 py-2 text-sm">
            Start a project
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line text-ink md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile panel */}
      <div
        className={`overflow-hidden border-line bg-bg/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 md:hidden ${
          open ? 'max-h-[80vh] border-b opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="container-px flex flex-col gap-1 py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                  isActive(link.href)
                    ? 'bg-surface-2 text-accent'
                    : 'text-muted hover:bg-surface-2 hover:text-ink'
                }`}
              >
                {link.label}
                <ArrowRight className="h-4 w-4 opacity-40" />
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="button button--primary w-full"
            >
              Start a project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
