"use client";

import { useState, FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";

/**
 * CONNECTING THIS FORM TO REAL EMAIL DELIVERY
 * ─────────────────────────────────────────────────────────────────────────
 * This form currently validates on the front end only and does not send
 * an email — it simply shows a success message so you can see the flow
 * working end-to-end.
 *
 * To make it actually send enquiries to your inbox, the simplest options
 * are:
 *   1. A form backend such as Formspree, Basin or Getform — sign up, get
 *      an endpoint URL, and replace the `handleSubmit` logic below with a
 *      `fetch(endpointUrl, { method: "POST", body: ... })` call.
 *   2. A Next.js Route Handler (create `src/app/api/contact/route.ts`)
 *      that uses an email-sending service such as Resend or SendGrid,
 *      then call `fetch("/api/contact", { method: "POST", ... })` here.
 * Either approach is a small, self-contained change — nothing else on
 * the site needs to be touched.
 */

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const initialState: FormState = { name: "", email: "", phone: "", message: "" };

export default function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(current: FormState): Partial<FormState> {
    const next: Partial<FormState> = {};
    if (!current.name.trim()) next.name = "Please enter your name.";
    if (!current.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(current.email)) {
      next.email = "Please enter a valid email address.";
    }
    if (!current.message.trim()) next.message = "Please tell us a little about what you need.";
    return next;
  }

  function handleChange(field: keyof FormState, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // See the comment at the top of this file to connect real email delivery.
      setSubmitted(true);
      setValues(initialState);
    }
  }

  if (submitted) {
    return (
      <div className="border border-sand/50 bg-graphite-alt p-8" role="status">
        <CheckCircle2 size={26} strokeWidth={1.5} className="text-sand" />
        <p className="mt-4 font-display text-lg font-semibold text-bone">
          Thank you — your message has been recorded.
        </p>
        <p className="mt-2 text-sm leading-relaxed text-mist">
          This form is currently a demonstration until email delivery is
          configured, so no message has actually been sent yet. Once
          delivery is connected, enquiries submitted here will reach the
          NXS Collective team directly.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm text-mist underline underline-offset-4 hover:text-bone"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm text-mist">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={values.name}
          onChange={(e) => handleChange("name", e.target.value)}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          className="w-full border border-hairline bg-graphite px-4 py-3 text-bone outline-none focus:border-silver/60"
        />
        {errors.name && (
          <p id="name-error" className="mt-2 text-xs text-red-400">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm text-mist">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={(e) => handleChange("email", e.target.value)}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          className="w-full border border-hairline bg-graphite px-4 py-3 text-bone outline-none focus:border-silver/60"
        />
        {errors.email && (
          <p id="email-error" className="mt-2 text-xs text-red-400">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="mb-2 block text-sm text-mist">
          Phone <span className="text-mist/60">(optional)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={values.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
          className="w-full border border-hairline bg-graphite px-4 py-3 text-bone outline-none focus:border-silver/60"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm text-mist">
          What are you currently experiencing, or what would you like help with?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={(e) => handleChange("message", e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="w-full border border-hairline bg-graphite px-4 py-3 text-bone outline-none focus:border-silver/60"
        />
        {errors.message && (
          <p id="message-error" className="mt-2 text-xs text-red-400">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center bg-bone px-7 py-3.5 text-sm font-medium tracking-wide text-ink transition-colors duration-300 hover:bg-sand"
      >
        Send Message
      </button>
    </form>
  );
}
