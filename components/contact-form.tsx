"use client";

import { useState } from "react";

const initialState = {
  name: "",
  email: "",
  business: "",
  message: ""
};

export function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error" | "loading";
    message?: string;
  }>({ type: "idle" });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus({ type: "loading" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const data = (await response.json()) as { error?: string; message?: string };

      if (!response.ok) {
        setStatus({
          type: "error",
          message: data.error ?? "Please try again."
        });
        return;
      }

      setStatus({
        type: "success",
        message: data.message ?? "Message sent successfully."
      });
      setForm(initialState);
    } catch {
      setStatus({
        type: "error",
        message: "Unable to send right now. Please try WhatsApp instead."
      });
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="card-surface space-y-4 p-6 sm:p-8"
      aria-label="Contact form"
    >
      <div className="space-y-1">
        <h3 className="text-xl font-semibold text-slate-950">Start the conversation</h3>
        <p className="text-sm text-muted">
          Tell us a little about your website and where conversions are getting stuck.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-slate-900">
          Name
          <input
            required
            aria-label="Your name"
            value={form.name}
            onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-primary"
            placeholder="Your name"
          />
        </label>

        <label className="space-y-2 text-sm font-medium text-slate-900">
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

      <label className="space-y-2 text-sm font-medium text-slate-900">
        Business
        <input
          aria-label="Business name"
          value={form.business}
          onChange={(event) => setForm((current) => ({ ...current, business: event.target.value }))}
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-primary"
          placeholder="Business or website"
        />
      </label>

      <label className="space-y-2 text-sm font-medium text-slate-900">
        Message
        <textarea
          required
          aria-label="Your message"
          rows={5}
          value={form.message}
          onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
          className="w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-primary"
          placeholder="What is your website not doing well right now?"
        />
      </label>

      <button
        type="submit"
        disabled={status.type === "loading"}
        className="inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-deep disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status.type === "loading" ? "Sending..." : "Send Message"}
      </button>

      {status.message ? (
        <p
          className={`text-sm ${status.type === "success" ? "text-emerald-600" : "text-rose-600"}`}
          role="status"
        >
          {status.message}
        </p>
      ) : null}
    </form>
  );
}
