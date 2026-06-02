import { Gift } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { bonuses, includedItems } from "@/lib/data";

export function IncludedSection() {
  return (
    <section className="section-padding bg-white/70">
      <div className="container-shell grid gap-6 lg:grid-cols-[1fr_0.85fr]">
        <div className="space-y-5">
          <SectionHeading
            eyebrow="What's Included"
            title="Everything is built to support conversions, clarity, and action"
            description="The website should feel simple for the visitor and strategic behind the scenes."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {includedItems.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="card-surface flex items-center gap-4 p-5">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="font-semibold text-slate-900">{item.title}</p>
                </div>
              );
            })}
          </div>
        </div>

        <aside className="card-surface p-5 sm:p-6">
          <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-stone-100 text-primary">
            <Gift className="h-5 w-5" />
          </div>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Bonuses</p>
          <h3 className="mt-3 text-2xl font-bold text-slate-950">Extra value beyond the build</h3>
          <div className="mt-4 space-y-3">
            {bonuses.map((bonus) => (
              <div key={bonus} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                <p className="font-medium text-slate-800">{bonus}</p>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
