'use client';

import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const FORMSUBMIT_ENDPOINT = 'https://formsubmit.co/2e17edefe1a54ac395473d40fea26166';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const inputBase =
  'w-full rounded-xl border border-line bg-bg-soft px-4 py-3 text-sm text-ink placeholder:text-faint transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent';

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const update = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setError(null);

    try {
      const response = await fetch(FORMSUBMIT_ENDPOINT, {
        method: 'POST',
        body: new FormData(e.currentTarget),
        headers: { Accept: 'application/json' },
      });

      if (!response.ok) {
        throw new Error(`Something went wrong (status ${response.status}).`);
      }

      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 rounded-2xl border border-line bg-surface p-6 sm:p-8"
      noValidate
    >
      <div className="flex flex-col gap-1">
        <h2 className="text-xl font-bold text-ink">Send us a brief</h2>
        <p className="text-sm text-muted">
          Fields marked with an asterisk are required.
        </p>
      </div>

      {status === 'success' && (
        <div
          role="status"
          className="flex items-start gap-3 rounded-xl border border-success/40 bg-success/10 p-4 text-sm text-success"
        >
          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none" />
          <p>Thank you — your message has been sent. We&apos;ll be in touch within one business day.</p>
        </div>
      )}

      {status === 'error' && (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-xl border border-danger/40 bg-danger/10 p-4 text-sm text-danger"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 flex-none" />
          <p>{error}</p>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium text-ink">
            Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={update}
            placeholder="Your name"
            className={inputBase}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-ink">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={update}
            placeholder="you@company.com"
            className={inputBase}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium text-ink">
          Project brief *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={update}
          placeholder="What are you building, and what does success look like?"
          className={`${inputBase} resize-y`}
        />
      </div>

      {/* FormSubmit configuration */}
      <input type="hidden" name="_captcha" value="true" />
      <input type="hidden" name="_subject" value="New enquiry from the Timmitech website" />
      <input type="hidden" name="_template" value="table" />

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="button button--primary w-full disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            Send message
            <Send className="h-4 w-4" />
          </>
        )}
      </button>

      <p className="text-xs leading-relaxed text-faint">
        By submitting this form you agree to our{' '}
        <a href="/privacy" className="underline hover:text-accent">
          privacy policy
        </a>
        . We never share your details.
      </p>
    </form>
  );
}
