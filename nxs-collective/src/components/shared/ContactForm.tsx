"use client";

import { useState, FormEvent } from "react";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { trackAnalyticsEvent } from "@/lib/analytics";

const SERVICE_OPTIONS = ["Physiotherapy", "Sports Therapy", "Personal Training"] as const;

interface FormState {
  name: string;
  email: string;
  phone: string;
  services: string[];
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  services?: string;
  message?: string;
}

const initialState: FormState = { name: "", email: "", phone: "", services: [], message: "" };

type SubmitState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  function validate(current: FormState): FormErrors {
    const next: FormErrors = {};
    if (!current.name.trim()) next.name = "Please enter your name.";
    if (!current.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(current.email)) {
      next.email = "Please enter a valid email address.";
    }
    if (!current.phone.trim()) next.phone = "Please enter your phone number.";
    if (current.services.length === 0) next.services = "Select at least one service.";
    if (!current.message.trim()) next.message = "Please tell us a little about what you need.";
    return next;
  }

  function handleChange(field: "name" | "email" | "phone" | "message", value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  function toggleService(service: string) {
    setValues((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setSubmitState("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        setSubmitState("error");
        setErrorMessage(
          data?.error || "We couldn't send your message. Please try again or contact us directly."
        );
        return;
      }

      trackAnalyticsEvent("contact_form_submit", {
        services: values.services.join(", "),
        page_path: window.location.pathname,
      });
      setSubmitState("success");
      setValues(initialState);
    } catch {
      setSubmitState("error");
      setErrorMessage(
        "We couldn't reach our server. Please check your connection and try again, or contact us directly."
      );
    }
  }

  if (submitState === "success") {
    return (
      <div className="border border-sand/50 bg-graphite-alt p-8" role="status">
        <CheckCircle2 size={26} strokeWidth={1.5} className="text-sand" />
        <p className="mt-4 font-display text-lg font-semibold text-bone">
          Thank you — your message has been sent.
        </p>
        <p className="mt-2 text-sm leading-relaxed text-mist">
          Our team will get back to you shortly. If your enquiry is urgent,
          you&apos;re welcome to WhatsApp or call us directly.
        </p>
        <button
          type="button"
          onClick={() => setSubmitState("idle")}
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
          Full Name
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
          Email Address
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
          Phone Number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={values.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? "phone-error" : undefined}
          className="w-full border border-hairline bg-graphite px-4 py-3 text-bone outline-none focus:border-silver/60"
        />
        {errors.phone && (
          <p id="phone-error" className="mt-2 text-xs text-red-400">
            {errors.phone}
          </p>
        )}
      </div>

      <fieldset>
        <legend className="mb-2.5 text-sm text-mist">Services Interested In</legend>
        <div className="flex flex-col gap-2.5" role="group" aria-describedby={errors.services ? "services-error" : undefined}>
          {SERVICE_OPTIONS.map((service) => {
            const checked = values.services.includes(service);
            return (
              <label
                key={service}
                className="flex cursor-pointer items-center gap-3 border border-hairline bg-graphite px-4 py-3 text-sm text-bone transition-colors hover:border-silver/50"
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => toggleService(service)}
                  className="h-4 w-4 shrink-0 accent-sand"
                />
                {service}
              </label>
            );
          })}
        </div>
        {errors.services && (
          <p id="services-error" className="mt-2 text-xs text-red-400">
            {errors.services}
          </p>
        )}
      </fieldset>

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

      {submitState === "error" && (
        <div role="alert" className="flex items-start gap-2.5 border border-red-400/40 bg-red-400/5 p-4 text-sm text-red-300">
          <AlertCircle size={17} strokeWidth={1.75} className="mt-0.5 shrink-0" />
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={submitState === "submitting"}
        className="mt-2 inline-flex items-center justify-center bg-bone px-7 py-3.5 text-sm font-medium tracking-wide text-ink transition-colors duration-300 hover:bg-sand disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitState === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
