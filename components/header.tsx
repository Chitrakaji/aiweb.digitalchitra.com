import Image from "next/image";
import { Menu, MessageCircle, PhoneCall } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { siteConfig } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-white/85 backdrop-blur-xl">
      <div className="container-shell flex items-center justify-between gap-4 py-3">
        <a href="#top" className="flex items-center gap-3" aria-label="Go to homepage top">
          <Image
            src="/digital-chitra-logo-new.png"
            alt={`${siteConfig.name} logo`}
            width={1848}
            height={741}
            priority
            className="h-11 w-auto object-contain sm:h-[50px]"
          />
        </a>

        <nav className="hidden items-center gap-5 md:flex" aria-label="Primary navigation">
          {siteConfig.navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-base font-semibold text-slate-950 transition hover:text-primary">
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
            Book a Free Call
          </ButtonLink>
        </div>

        <a
          href="#contact"
          aria-label="Jump to contact section"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 text-slate-950 md:hidden"
        >
          <Menu className="h-7 w-7" />
        </a>
      </div>
    </header>
  );
}
