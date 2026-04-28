import { Check, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { benefits, urgencyPoints } from "@/lib/data";

export function ValueSections() {
  return (
    <>
      <section className="section-padding bg-white/70">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Benefits"
              title="A better website should create better business momentum"
              description="The goal is not more pages. The goal is more clarity, more trust, and more qualified inquiries."
            />

            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3 rounded-3xl border border-slate-200 bg-white px-5 py-4">
                  <Check className="mt-0.5 h-5 w-5 text-primary" />
                  <span className="text-base text-slate-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card-surface p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Risk Reversal</p>
            <h3 className="mt-4 text-balance text-3xl font-bold tracking-tight text-slate-950">
              You’re not paying for just a website. You’re investing in a system designed to generate
              results.
            </h3>
            <p className="mt-4 text-base leading-7 text-muted">
              The value is in how well the experience turns attention into trust and trust into action.
            </p>

            <div className="mt-8 rounded-[1.75rem] border border-blue-100 bg-blue-50/70 p-5">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 h-6 w-6 text-primary" />
                <p className="text-sm leading-7 text-slate-700">
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
          <div className="card-surface flex flex-col gap-5 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <div className="space-y-3">
              <span className="section-label">Urgency</span>
              <h2 className="text-balance text-3xl font-bold tracking-tight text-slate-950">
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
