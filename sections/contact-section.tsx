import { ContactForm } from "@/components/contact-form";

export function ContactSection() {
  return (
    <section id="contact" className="menu-section">
      <div className="container-shell grid gap-7 lg:-mt-5 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
        <div className="max-w-lg space-y-3">
          <span className="section-label">Contact</span>
          <h2 className="text-balance text-4xl font-bold tracking-tight text-slate-950 sm:text-[2.95rem]">
            Ready to turn your website into a revenue system?
          </h2>
          <p className="text-balance text-base leading-7 text-muted sm:text-lg">
            Share what is happening with your current website. We will look at the conversion gaps and the
            fastest path to more qualified inquiries.
          </p>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
