import { ChevronDown } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { faqItems } from "@/lib/data";

export function FAQSection() {
  return (
    <section id="faq" className="section-padding bg-white/70">
      <div className="container-shell space-y-10">
        <SectionHeading
          eyebrow="Objections"
          title="Questions people usually ask before they decide"
          description="The answers stay simple, practical, and grounded in what actually matters."
          align="center"
        />

        <div className="mx-auto grid max-w-4xl gap-4">
          {faqItems.map((item) => (
            <details key={item.question} className="card-surface group p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
                <span className="text-lg font-semibold text-slate-950">{item.question}</span>
                <ChevronDown className="h-5 w-5 shrink-0 text-slate-500 transition group-open:rotate-180" />
              </summary>
              <p className="pt-4 text-base leading-7 text-muted">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
