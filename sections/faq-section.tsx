import { ChevronDown } from "lucide-react";
import { faqItems } from "@/lib/data";

export function FAQSection() {
  return (
    <section id="faq" className="menu-section">
      <div className="container-shell space-y-8 lg:-mt-4">
        <div className="mx-auto max-w-4xl space-y-3 text-center">
          <span className="section-label">Objections</span>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-slate-950 sm:text-[2.65rem]">
            Questions people usually ask before they decide
          </h2>
          <p className="text-balance text-base leading-7 text-muted">
            The answers stay simple, practical, and grounded in what actually matters.
          </p>
        </div>

        <div className="mx-auto grid w-full max-w-5xl gap-4">
          {faqItems.map((item) => (
            <details key={item.question} className="card-surface group p-5 sm:p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
                <span className="text-lg font-semibold text-slate-950 sm:text-xl">{item.question}</span>
                <ChevronDown className="h-6 w-6 shrink-0 text-slate-500 transition group-open:rotate-180" />
              </summary>
              <p className="max-w-4xl pt-4 text-base leading-7 text-muted">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
