import { beforeAfterCards, stats, testimonials } from "@/lib/data";

export function ProofSection() {
  return (
    <section id="proof" className="menu-section">
      <div className="container-shell space-y-4 lg:-mt-5">
        <div className="mx-auto max-w-4xl space-y-2.5 text-center">
          <span className="section-label">Social Proof</span>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-slate-950 sm:text-[2.25rem]">
            A high-converting website creates a visible shift in how the business shows up
          </h2>
          <p className="text-balance text-sm leading-6 text-muted sm:text-base">
            Use these sections as strong placeholders for future case studies, proof points, and client wins.
          </p>
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="card-surface px-4 py-3 text-center sm:px-5">
              <p className="text-3xl font-black tracking-tight text-primary">{stat.value}</p>
              <p className="mt-1 text-sm leading-5 text-muted">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-3 lg:grid-cols-2">
          {beforeAfterCards.map((item) => (
            <div key={item.before} className="card-surface p-3 sm:p-4">
              <div className="grid gap-3 md:grid-cols-2">
                <div className="rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-700">Before</p>
                  <p className="mt-1.5 text-sm leading-6 text-slate-800">{item.before}</p>
                </div>
                <div className="rounded-2xl border border-stone-300 bg-white px-4 py-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">After</p>
                  <p className="mt-1.5 text-sm leading-6 text-slate-800">{item.after}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {testimonials.map((item) => (
            <blockquote key={item.quote} className="card-surface p-3.5 sm:p-4">
              <p className="text-sm leading-5 text-slate-700">&quot;{item.quote}&quot;</p>
              <footer className="mt-2.5">
                <p className="text-sm font-semibold text-slate-950">{item.name}</p>
                <p className="text-xs text-muted">{item.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
