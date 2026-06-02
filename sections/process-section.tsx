import { SectionHeading } from "@/components/section-heading";
import { steps } from "@/lib/data";

export function ProcessSection() {
  return (
    <section id="process" className="menu-section">
      <div className="container-shell space-y-9 lg:-mt-4">
        <SectionHeading
          eyebrow="How It Works"
          title="A simple three-step process designed to turn your website into a stronger sales asset"
          align="center"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article key={step.title} className="card-surface flex min-h-[19rem] flex-col justify-center p-7 sm:p-8">
                <div className="mb-7 flex items-center justify-between">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-stone-100 text-primary">
                    <Icon className="h-7 w-7" />
                  </div>
                  <span className="text-xl font-bold text-slate-400">0{index + 1}</span>
                </div>
                <h3 className="text-2xl font-semibold text-slate-950">{step.title}</h3>
                <p className="mt-4 text-base leading-7 text-muted">{step.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
