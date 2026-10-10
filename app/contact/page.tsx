import type { Metadata } from 'next';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Section } from '../components/ui/Section';
import { Badge } from '../components/ui/atoms';
import { PageHero } from '../components/ui/PageHero';
import { CONTACT } from '@/data/constants';
import { ContactForm } from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Start a project with Timmitech. Tell us what you are building and we will get back to you within one business day.',
};

const details = [
  { icon: Mail, label: 'Email', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  {
    icon: Phone,
    label: 'Phone',
    value: CONTACT.phone,
    href: `tel:${CONTACT.phone.replace(/[^+\d]/g, '')}`,
  },
  { icon: MapPin, label: 'Studio', value: CONTACT.address },
  { icon: Clock, label: 'Hours', value: CONTACT.hours },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let’s build something considered"
        intro="Tell us about your project, your timeline, and what success looks like. We reply to every serious enquiry within one business day."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          {/* Form */}
          <ContactForm />

          {/* Details */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4 rounded-2xl border border-line bg-surface p-6">
              <Badge tone="accent">Direct</Badge>
              <ul className="flex flex-col gap-5">
                {details.map(({ icon: Icon, label, value, href }) => (
                  <li key={label} className="flex items-start gap-3">
                    <span className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold uppercase tracking-[0.15em] text-faint">
                        {label}
                      </span>
                      {href ? (
                        <a
                          href={href}
                          className="text-sm font-medium text-ink transition-colors hover:text-accent"
                        >
                          {value}
                        </a>
                      ) : (
                        <span className="text-sm font-medium text-ink">{value}</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-line bg-bg-soft p-6">
              <h2 className="text-base font-semibold text-ink">What happens next</h2>
              <ol className="mt-4 flex flex-col gap-3 text-sm text-muted">
                <li className="flex gap-3">
                  <span className="font-bold text-accent">1.</span> We read your brief and reply
                  within one business day.
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-accent">2.</span> A short call to align on scope,
                  timeline, and budget.
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-accent">3.</span> You receive a written proposal
                  with milestones and pricing.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
