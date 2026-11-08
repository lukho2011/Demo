import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck, FileSignature, Scale } from "lucide-react";
import { Hero } from "@/components/home/Hero";
import { CompanyIntroduction } from "@/components/home/CompanyIntroduction";
import { SolutionsOverview } from "@/components/home/SolutionsOverview";
import { ImpactOverview } from "@/components/home/ImpactOverview";
import { SolutionSelector } from "@/components/solutions/SolutionSelector";
import { FundingCalculator } from "@/components/solutions/FundingCalculator";
import { CtaBand } from "@/components/layout/CtaBand";
import { Container } from "@/components/ui/Container";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Structured SME Working Capital Finance",
  description:
    "Harbourview Credit finances invoices, purchase orders and awarded contracts for South African SMEs — supply chain finance, construction contract finance and receivables purchase.",
};

const pillars = [
  {
    icon: Scale,
    title: "Regulated lending",
    body: `Registered credit provider ${company.ncr.number} under the ${company.ncr.act}. Fees disclosed upfront in the pre-agreement statement.`,
  },
  {
    icon: FileSignature,
    title: "Structured security",
    body: "Cession of contract proceeds, obligor payment undertakings and ring-fenced collection accounts on every facility.",
  },
  {
    icon: BadgeCheck,
    title: "Disciplined underwriting",
    body: "The obligor, the contract and the borrower's delivery capacity are verified independently before any disbursement.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <CompanyIntroduction />
      <SolutionsOverview />

      <section className="border-t border-navy/10 bg-offwhite py-20 md:py-28">
        <Container>
          <Reveal>
            <SolutionSelector />
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-navy/10 bg-white py-20 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.4fr_0.6fr] lg:gap-16">
            <Reveal>
              <p className="eyebrow flex items-center gap-4">
                <span className="h-px w-8 bg-current opacity-60" aria-hidden />
                Illustrative tool
              </p>
              <h2 className="mt-6 text-[1.75rem] leading-[1.15] sm:text-[2.15rem] lg:text-[2.4rem]">
                Understand the size of your gap.
              </h2>
              <p className="mt-6 max-w-md text-[0.96rem] leading-[1.8] text-slate-ink">
                Most contracts are not lost at tender stage — they are lost at
                mobilisation. Set the contract value against the capital you have
                available and see the gap that a structured facility is designed
                to bridge.
              </p>
              <p className="mt-6 max-w-md border-l-2 border-gold/60 pl-4 text-[0.8rem] leading-relaxed text-slate-ink">
                Illustration only. Actual facilities are sized after credit
                assessment and are never guaranteed by this tool.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <FundingCalculator />
            </Reveal>
          </div>
        </Container>
      </section>

      <ImpactOverview />

      <section className="bg-offwhite py-20 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.38fr_0.62fr] lg:gap-16">
            <Reveal>
              <p className="eyebrow flex items-center gap-4">
                <span className="h-px w-8 bg-current opacity-60" aria-hidden />
                Why Harbourview
              </p>
              <h2 className="mt-6 text-[1.75rem] leading-[1.15] sm:text-[2.15rem] lg:text-[2.4rem]">
                Institutional discipline, applied to SME transactions.
              </h2>
              <Link
                href="/how-it-works"
                className="group mt-9 inline-flex items-center gap-2 border-b border-navy/20 pb-1 text-[0.74rem] font-semibold uppercase tracking-[0.16em] text-navy transition-colors hover:border-gold hover:text-gold"
              >
                See the six-stage process
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </Reveal>

            <RevealGroup className="space-y-0">
              {pillars.map((pillar) => (
                <RevealItem key={pillar.title}>
                  <div className="flex gap-6 border-t border-navy/10 py-7 last:border-b">
                    <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center border border-gold/50 text-navy">
                      <pillar.icon size={18} strokeWidth={1.5} />
                    </span>
                    <div>
                      <h3 className="text-[1.05rem]">{pillar.title}</h3>
                      <p className="mt-2 max-w-lg text-[0.9rem] leading-[1.75] text-slate-ink">
                        {pillar.body}
                      </p>
                    </div>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
