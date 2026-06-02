import { Header } from "@/components/header";
import { ContactSection } from "@/sections/contact-section";
import { CTASection } from "@/sections/cta-section";
import { FAQSection } from "@/sections/faq-section";
import { FooterMenuSection } from "@/sections/footer-menu-section";
import { HeroSection } from "@/sections/hero-section";
import { IncludedSection } from "@/sections/included-section";
import { ProcessSection } from "@/sections/process-section";
import { ProofSection } from "@/sections/proof-section";
import { ServicesSection } from "@/sections/services-section";
import { SolutionSection } from "@/sections/solution-section";
import { TensionSection } from "@/sections/tension-section";
import { ValueSections } from "@/sections/value-sections";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TensionSection />
        <SolutionSection />
        <ServicesSection />
        <ProcessSection />
        <ValueSections />
        <IncludedSection />
        <ProofSection />
        <ContactSection />
        <FAQSection />
        <CTASection />
        <FooterMenuSection />
      </main>
    </>
  );
}
