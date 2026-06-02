import { SectionHeading } from "@/components/section-heading";
import { services } from "@/lib/data";

export function ServicesSection() {
  return (
    <section id="services" className="menu-section">
      <div className="container-shell space-y-9 lg:-mt-4">
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
                className="card-surface reveal-up flex min-h-[19rem] flex-col justify-center p-7 sm:p-8"
                style={{ animationDelay: `${index * 110}ms` }}
              >
                <div className="mb-7 inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-slate-950 text-white">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-950">{service.title}</h3>
                <p className="mt-4 text-base leading-7 text-muted">{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
