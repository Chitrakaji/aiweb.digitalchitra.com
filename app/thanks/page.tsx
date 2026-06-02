import Link from "next/link";
import { siteConfig } from "@/lib/site";

export default function ThanksPage() {
  return (
    <main className="menu-section">
      <div className="container-shell">
        <div className="card-surface mx-auto max-w-3xl p-8 text-center sm:p-10">
          <span className="section-label">Thank You</span>
          <h1 className="mt-5 text-balance text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Your request has been sent.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted sm:text-lg">
            Check your inbox for the confirmation email. We will follow up with the next step for your website
            consultation call.
          </p>
          <Link
            href={siteConfig.siteUrl}
            className="mt-7 inline-flex rounded-full bg-[#24bfab] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[rgb(81_0_10_/_25%)]"
          >
            Return back to website
          </Link>
        </div>
      </div>
    </main>
  );
}
