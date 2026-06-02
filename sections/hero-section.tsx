import { ArrowRight, CheckCircle2, MessageCircle, PhoneCall } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { siteConfig, trustSignals } from "@/lib/site";

export function HeroSection() {
  return (
    <section id="top" className="menu-section overflow-hidden">
      <div className="container-shell grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="reveal-up space-y-7">
          <div className="space-y-4">
            <span className="section-label">Website Revenue System</span>
            <h1 className="text-balance text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-[3.85rem]">
              Your Website Should Bring You Customers - Not Just Sit There
            </h1>
            <p className="text-balance max-w-3xl text-lg leading-8 text-muted sm:text-xl">
              Turn your website into a high-converting sales system that generates consistent leads and
              revenue - without guessing what works.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={siteConfig.bookingUrl} ariaLabel="Book a free call" className="px-7 py-3.5 text-base">
              <PhoneCall className="mr-2 h-5 w-5" />
              Book a Free Call
            </ButtonLink>
            <ButtonLink
              href={siteConfig.whatsappUrl}
              variant="secondary"
              ariaLabel="Message on WhatsApp"
              className="px-7 py-3.5 text-base"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Message on WhatsApp
            </ButtonLink>
          </div>

          <ul className="grid gap-3 text-sm font-semibold text-slate-900 sm:grid-cols-3">
            {trustSignals.map((signal) => (
              <li key={signal} className="flex min-h-16 items-center gap-3 rounded-3xl border border-slate-200 bg-white/80 px-5 py-4">
                <CheckCircle2 className="h-4.5 w-4.5 text-primary" />
                <span>{signal}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal-up relative [animation-delay:120ms]">
          <div className="absolute inset-x-8 top-0 h-28 rounded-full bg-stone-100 blur-3xl" />
          <div className="card-surface relative overflow-hidden p-5 sm:p-6">
            <div className="rounded-[1.5rem] border border-stone-200 bg-[linear-gradient(180deg,#f7f7f5_0%,#ffffff_100%)] p-5 sm:p-6">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-base font-semibold text-primary">Conversion Snapshot</p>
                  <p className="text-sm text-muted">From brochure site to lead system</p>
                </div>
                <div className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                  CRO Focused
                </div>
              </div>

              <div className="grid gap-4">
                {[
                  {
                    title: "Clear positioning",
                    copy: "Visitors understand your value within seconds."
                  },
                  {
                    title: "Stronger conversion path",
                    copy: "Each section moves attention toward contact and action."
                  },
                  {
                    title: "Revenue-first structure",
                    copy: "Design, copy, and trust signals support real business growth."
                  }
                ].map((item) => (
                  <div key={item.title} className="rounded-3xl border border-white bg-white p-5 shadow-sm">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-base font-semibold text-slate-950">{item.title}</p>
                        <p className="mt-1 text-sm leading-6 text-muted">{item.copy}</p>
                      </div>
                      <ArrowRight className="h-5 w-5 shrink-0 text-primary" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
