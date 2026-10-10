import type { Metadata } from 'next';
import { Section } from '../components/ui/Section';
import { SectionHeading, Panel } from '../components/ui/atoms';
import { PageHero } from '../components/ui/PageHero';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Timmitech collects, uses, and protects the information you share through this website.',
};

const sections = [
  {
    title: 'What we collect',
    body: 'When you submit the contact form we collect your name, email address, and message. This is used only to reply to your enquiry.',
  },
  {
    title: 'How we use it',
    body: 'Your details are used solely to respond to your enquiry and to send a proposal if you ask for one. We do not sell or rent your information.',
  },
  {
    title: 'Third-party services',
    body: 'The contact form is processed through FormSubmit, which forwards your message to our team. Their handling of data is governed by their own privacy policy.',
  },
  {
    title: 'Cookies',
    body: 'This site does not use advertising or tracking cookies. Any analytics we add in future will be privacy-preserving and aggregate.',
  },
  {
    title: 'Data retention',
    body: 'Enquiry emails are retained only as long as needed to respond and to keep records of active projects. You may ask us to delete your data at any time.',
  },
  {
    title: 'Your rights',
    body: 'You can request access to, correction of, or deletion of your personal data at any time by emailing us. We will respond promptly.',
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="Privacy policy"
        intro="This is a plain-language summary of how we handle the information you share with us through this website."
      />
      <Section>
        <div className="grid gap-8 lg:grid-cols-[1fr_1.6fr]">
          <SectionHeading
            title="In short"
            intro="We collect only what we need to reply to you, we never sell it, and you can ask us to delete it whenever you like."
          />
          <div className="flex flex-col gap-4">
            {sections.map((s) => (
              <Panel key={s.title} className="flex flex-col gap-2">
                <h2 className="text-lg font-semibold text-ink">{s.title}</h2>
                <p className="text-sm leading-relaxed text-muted">{s.body}</p>
              </Panel>
            ))}
            <p className="pt-2 text-xs text-faint">
              Last updated: January 2026. If anything here changes, we will update this page.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
