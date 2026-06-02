import { siteConfig } from "@/lib/site";

export function FooterMenuSection() {
  return (
    <footer className="pb-8 pt-2">
      <div className="container-shell">
        <nav
          aria-label="Footer section navigation"
          className="card-surface flex flex-wrap items-center justify-center gap-3 p-4"
        >
          <a
            href="#top"
            className="rounded-full border border-stone-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:border-primary hover:text-primary"
          >
            Home
          </a>
          {siteConfig.navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full border border-stone-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:border-primary hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
