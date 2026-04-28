import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";
import { beforeAfterCards, stats, testimonials } from "@/lib/data";

export function ProofSection() {
  return (
    <section id="proof" className="section-padding">
      <div className="container-shell space-y-10">
        <SectionHeading
          eyebrow="Social Proof"
          title="A high-converting website creates a visible shift in how the business shows up"
          description="Use these sections as strong placeholders for future case studies, proof points, and client wins."
          align="center"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="card-surface p-6 text-center sm:p-8">
              <p className="text-4xl font-black tracking-tight text-primary">{stat.value}</p>
              <p className="mt-3 text-sm leading-6 text-muted">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="grid gap-6">
            {beforeAfterCards.map((item) => (
              <div key={item.before} className="card-surface p-6 sm:p-8">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-3xl border border-rose-100 bg-rose-50 px-5 py-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rose-500">Before</p>
                    <p className="mt-3 text-base leading-7 text-slate-800">{item.before}</p>
                  </div>
                  <div className="rounded-3xl border border-emerald-100 bg-emerald-50 px-5 py-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-600">After</p>
                    <p className="mt-3 text-base leading-7 text-slate-800">{item.after}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="grid gap-6 md:grid-cols-2">
              {testimonials.map((item) => (
                <blockquote key={item.quote} className="card-surface p-6">
                  <p className="text-base leading-7 text-slate-700">“{item.quote}”</p>
                  <footer className="mt-6">
                    <p className="font-semibold text-slate-950">{item.name}</p>
                    <p className="text-sm text-muted">{item.role}</p>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>

          <div id="contact">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
