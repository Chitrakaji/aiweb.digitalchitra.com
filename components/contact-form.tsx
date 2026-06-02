"use client";

import { useState } from "react";

const initialState = {
  firstName: "",
  email: "",
  businessName: "",
  messageWebsiteProblem: "",
  whatsappNumber: ""
};

const FLODESK_ACTION = "https://form.flodesk.com/forms/6a1ec45db2ee5c130e6121d1/submit";
const THANK_YOU_URL = "https://branding.digitalchitra.com/thanks";

export function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<{
    type: "idle" | "loading" | "success" | "error";
    message?: string;
  }>({ type: "idle" });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus({ type: "loading" });

    try {
      const formData = new FormData();
      formData.append("firstName", form.firstName);
      formData.append("email", form.email);
      formData.append("fields.businessName", form.businessName);
      formData.append("fields.messageWebsiteProblem", form.messageWebsiteProblem);
      formData.append("fields.whatsappNumber", form.whatsappNumber);
      formData.append("confirm_email_address", "");

      await fetch(FLODESK_ACTION, {
        method: "POST",
        mode: "no-cors",
        body: formData
      });

      setStatus({
        type: "success",
        message: "Redirecting you to the thank-you page..."
      });

      window.location.assign(THANK_YOU_URL);
    } catch {
      setStatus({
        type: "error",
        message: "Unable to submit right now. Please try again or use WhatsApp instead."
      });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="card-surface space-y-4 p-6 sm:p-8" aria-label="Contact form">
      <div className="space-y-1">
        <h3 className="text-2xl font-bold text-slate-950 sm:text-3xl">Book a Free Call</h3>
        <p className="text-sm leading-6 text-muted sm:text-base">
          Share a few details about your business and current website. We&apos;ll review the conversion gaps and
          the fastest next step.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-semibold text-slate-900">
          Name
          <input
            required
            aria-label="Your name"
            value={form.firstName}
            onChange={(event) => setForm((current) => ({ ...current, firstName: event.target.value }))}
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-primary"
            placeholder="First name"
          />
        </label>

        <label className="space-y-2 text-sm font-semibold text-slate-900">
          Email
          <input
            required
            type="email"
            aria-label="Your email"
            value={form.email}
            onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-primary"
            placeholder="you@business.com"
          />
        </label>
      </div>

      <label className="space-y-2 text-sm font-semibold text-slate-900">
        Business Name
        <input
          aria-label="Business name"
          value={form.businessName}
          onChange={(event) => setForm((current) => ({ ...current, businessName: event.target.value }))}
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-primary"
          placeholder="Business or website"
          required
        />
      </label>

      <label className="space-y-2 text-sm font-semibold text-slate-900">
        Message / Website Problem
        <textarea
          required
          rows={5}
          aria-label="Your message"
          value={form.messageWebsiteProblem}
          onChange={(event) =>
            setForm((current) => ({ ...current, messageWebsiteProblem: event.target.value }))
          }
          className="w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-primary"
          placeholder="Tell us what your website is not doing well right now."
        />
      </label>

      <label className="space-y-2 text-sm font-semibold text-slate-900">
        WhatsApp Number
        <input
          required
          aria-label="WhatsApp number"
          value={form.whatsappNumber}
          onChange={(event) => setForm((current) => ({ ...current, whatsappNumber: event.target.value }))}
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-primary"
          placeholder="+977 98XXXXXXXX"
        />
      </label>

      <button
        type="submit"
        disabled={status.type === "loading"}
        className="inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-primary-deep disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status.type === "loading" ? "Sending..." : "Book a Free Call"}
      </button>

      {status.message ? (
        <p
          role="status"
          className={`text-sm ${status.type === "success" ? "text-emerald-600" : "text-rose-600"}`}
        >
          {status.message}
        </p>
      ) : null}
    </form>
  );
}
