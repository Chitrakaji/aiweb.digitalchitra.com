import { SectionHeading } from "@/components/section-heading";
import { steps } from "@/lib/data";

export function ProcessSection() {
  return (
    <section id="process" className="section-padding">
      <div className="container-shell space-y-10">
        <SectionHeading
          eyebrow="How It Works"
          title="A simple three-step process designed to turn your website into a stronger sales asset"
          align="center"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article key={step.title} className="card-surface p-6 sm:p-8">
                <div className="mb-5 flex items-center justify-between">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-semibold text-slate-400">0{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-950">{step.title}</h3>
                <p className="mt-3 text-base leading-7 text-muted">{step.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
