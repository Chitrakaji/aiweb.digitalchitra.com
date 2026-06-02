import { Check, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { benefits, urgencyPoints } from "@/lib/data";

export function ValueSections() {
  return (
    <>
      <section className="section-padding bg-white/70">
        <div className="container-shell grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="space-y-4">
            <SectionHeading
              eyebrow="Benefits"
              title="A better website should create better business momentum"
              description="The goal is not more pages. The goal is more clarity, more trust, and more qualified inquiries."
            />

            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3">
                  <Check className="mt-0.5 h-5 w-5 text-primary" />
                  <span className="text-sm text-slate-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card-surface p-5 sm:p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Risk Reversal</p>
            <h3 className="mt-3 text-balance text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
              You&apos;re not paying for just a website. You&apos;re investing in a system designed to generate
              results.
            </h3>
            <p className="mt-3 text-sm leading-6 text-muted">
              The value is in how well the experience turns attention into trust and trust into action.
            </p>

            <div className="mt-5 rounded-2xl border border-stone-200 bg-stone-50 p-4">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 h-6 w-6 text-primary" />
                <p className="text-sm leading-6 text-slate-700">
                  Every recommendation is built around business goals, not filler design choices or vanity
                  metrics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-shell">
          <div className="card-surface flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div className="space-y-2.5">
              <span className="section-label">Urgency</span>
              <h2 className="text-balance text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                Limited availability to ensure quality work.
              </h2>
            </div>
            <div className="space-y-2 text-sm text-muted">
              {urgencyPoints.map((point) => (
                <p key={point}>{point}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
