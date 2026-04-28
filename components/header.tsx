import { Menu, MessageCircle, PhoneCall } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { siteConfig } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-white/85 backdrop-blur-xl">
      <div className="container-shell flex items-center justify-between gap-4 py-4">
        <a href="#top" className="flex items-center gap-3" aria-label="Go to homepage top">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold text-white">
            AG
          </span>
          <span className="hidden sm:block">
            <span className="block text-sm font-semibold text-slate-950">{siteConfig.name}</span>
            <span className="block text-xs text-muted">Digital Marketing Consultant</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary navigation">
          {siteConfig.navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-muted transition hover:text-slate-950">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ButtonLink href={siteConfig.whatsappUrl} variant="secondary" ariaLabel="Message on WhatsApp">
            <MessageCircle className="mr-2 h-4 w-4" />
            WhatsApp
          </ButtonLink>
          <ButtonLink href={siteConfig.bookingUrl} ariaLabel="Book a free call">
            <PhoneCall className="mr-2 h-4 w-4" />
            Book Call
          </ButtonLink>
        </div>

        <a
          href="#contact"
          aria-label="Jump to contact section"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-700 md:hidden"
        >
          <Menu className="h-5 w-5" />
        </a>
      </div>
    </header>
  );
}
