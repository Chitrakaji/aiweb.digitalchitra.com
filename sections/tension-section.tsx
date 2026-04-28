import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { agitationPoints, painPoints } from "@/lib/data";

export function TensionSection() {
  return (
    <>
      <section className="section-padding pt-0">
        <div className="container-shell">
          <div className="card-surface overflow-hidden p-8 sm:p-10">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <SectionHeading
                eyebrow="The Problem"
                title="You already have a website… but it’s not bringing you business."
                description="You are getting attention, but not enough action. That gap is where leads disappear."
              />

              <div className="grid gap-3 sm:grid-cols-2">
                {painPoints.map((point, index) => (
                  <div
                    key={point}
                    className={`rounded-3xl px-5 py-5 text-lg font-semibold ${
                      index < 3
                        ? "border border-slate-200 bg-slate-50 text-slate-800"
                        : "border border-rose-100 bg-rose-50 text-slate-900"
                    }`}
                  >
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white/70">
        <div className="container-shell grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Why It Hurts"
              title="The website may look fine on the surface, but the system behind it is leaking opportunity."
              description="When structure, speed, messaging, and trust are weak, even good traffic struggles to convert."
            />

            <div className="grid gap-4">
              {agitationPoints.map((item) => (
                <div key={item} className="flex items-start gap-4 rounded-3xl border border-slate-200 bg-white px-5 py-5">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
                  <p className="text-base leading-7 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="card-surface flex items-center p-8 sm:p-10">
            <blockquote className="space-y-5">
              <Quote className="h-10 w-10 text-primary" />
              <p className="text-balance text-3xl font-bold tracking-tight text-slate-950">
                “Maybe my website is the problem…”
              </p>
              <p className="max-w-md text-base leading-7 text-muted">
                That instinct is often right. The issue is rarely traffic alone. It is usually what happens
                after the click.
              </p>
            </blockquote>
          </aside>
        </div>
      </section>
    </>
  );
}
