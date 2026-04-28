import { SectionHeading } from "@/components/section-heading";
import { services } from "@/lib/data";

export function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-white/70">
      <div className="container-shell space-y-10">
        <SectionHeading
          eyebrow="What We Do"
          title="We help business owners turn their website into a 24/7 sales machine"
          description="Every piece of the site is designed to reduce confusion, build confidence, and increase inquiries."
          align="center"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="card-surface reveal-up p-6 sm:p-8"
                style={{ animationDelay: `${index * 110}ms` }}
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-slate-950">{service.title}</h3>
                <p className="mt-3 text-base leading-7 text-muted">{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
