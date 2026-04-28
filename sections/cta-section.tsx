import { ArrowRight, MessageCircle, PhoneCall } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { siteConfig } from "@/lib/site";

export function CTASection() {
  return (
    <section className="section-padding">
      <div className="container-shell">
        <div className="card-surface overflow-hidden p-8 sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="space-y-5">
              <span className="section-label">Final CTA</span>
              <h2 className="text-balance text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                If your website is not bringing you customers… it’s time to fix it.
              </h2>
              <p className="max-w-2xl text-base leading-7 text-muted sm:text-lg">
                Stop sending attention to a site that does not convert. Build something that helps your
                business grow.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={siteConfig.bookingUrl} ariaLabel="Book a free call">
                <PhoneCall className="mr-2 h-4 w-4" />
                Book Call
              </ButtonLink>
              <ButtonLink href={siteConfig.whatsappUrl} variant="secondary" ariaLabel="Message on WhatsApp">
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp
              </ButtonLink>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-2 text-sm font-medium text-primary">
            <ArrowRight className="h-4 w-4" />
            Limited availability to keep every project hands-on and high quality.
          </div>
        </div>
      </div>
    </section>
  );
}
