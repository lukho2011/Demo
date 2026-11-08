import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { CtaBand } from "@/components/layout/CtaBand";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SolutionSelector } from "@/components/solutions/SolutionSelector";
import { FundingCalculator } from "@/components/solutions/FundingCalculator";
import { solutions } from "@/data/solutions";
import { cx } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Financing Solutions",
  description:
    "Supply chain finance, construction contract finance and receivables purchase for South African SMEs. Facility tenors from 14 days to 3 years, sized from R50 000 to R5 million.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Financing solutions"
        title="Three facilities covering the full working capital lifecycle."
        description="Whether you hold a purchase order, an awarded construction contract or a verified invoice, the objective is the same: convert a confirmed obligation into deliverable cash."
        image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1900&q=80"
        imageAlt="Construction workers on site reviewing a project"
        meta={[
          { label: "Tenors", value: "14 days – 3 years" },
          { label: "Facility sizes", value: "R50 000 – R5 million" },
          { label: "Security", value: "Cession & payment undertaking" },
        ]}
      />

      <nav
        aria-label="Solutions on this page"
        className="border-b border-navy/10 bg-white"
      >
        <Container>
          <ul className="flex flex-col divide-y divide-navy/10 sm:flex-row sm:divide-x sm:divide-y-0">
            {solutions.map((solution) => (
              <li key={solution.id} className="flex-1">
                <a
                  href={`#${solution.id}`}
                  className="group flex items-baseline gap-3 px-1 py-5 text-[0.82rem] font-medium text-navy transition-colors hover:text-gold sm:px-6"
                >
                  <span className="text-[0.62rem] font-semibold tracking-[0.18em] text-gold">
                    {solution.index}
                  </span>
                  {solution.name}
                  <ArrowRight
                    size={13}
                    className="ml-auto opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </nav>

      {solutions.map((solution, index) => (
        <section
          key={solution.id}
          id={solution.id}
          className={cx(
            "scroll-mt-24 border-b border-navy/10 py-20 md:py-24",
            index % 2 === 0 ? "bg-offwhite" : "bg-white",
          )}
        >
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.44fr_0.56fr] lg:gap-16">
              <Reveal>
                <div className="lg:sticky lg:top-28">
                  <div className="flex items-center gap-4">
                    <span className="font-display text-[0.7rem] font-semibold tracking-[0.22em] text-gold">
                      {solution.index}
                    </span>
                    <span className="h-px w-10 bg-gold/50" aria-hidden />
                    <span className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-slate-ink">
                      {solution.shortName}
                    </span>
                  </div>
                  <h2 className="mt-5 text-[1.75rem] leading-[1.15] sm:text-[2.1rem]">
                    {solution.name}
                  </h2>
                  <p className="mt-3 font-display text-[1.05rem] text-gold">
                    {solution.headline}
                  </p>
                  <p className="mt-6 text-[0.95rem] leading-[1.8] text-slate-ink">
                    {solution.summary}
                  </p>

                  <dl className="mt-9 divide-y divide-navy/10 border-y border-navy/10">
                    {[
                      ["Tenor", solution.tenor],
                      ["Indicative facility", solution.facilityRange],
                      ["Suited to", solution.targetCustomer],
                      ["Security", solution.security],
                    ].map(([label, value]) => (
                      <div key={label} className="py-4">
                        <dt className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-slate-ink/70">
                          {label}
                        </dt>
                        <dd className="mt-1.5 text-[0.85rem] leading-relaxed text-navy">
                          {value}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <div className="mt-8">
                    <Button href="/contact" variant="outline">
                      Enquire about this facility
                      <ArrowRight size={14} />
                    </Button>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="space-y-10">
                  <div>
                    <h3 className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-slate-ink">
                      How it works
                    </h3>
                    <ol className="mt-5 space-y-5">
                      {solution.howItWorks.map((step, stepIndex) => (
                        <li key={step} className="flex gap-5">
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-gold/50 font-display text-[0.7rem] font-semibold text-navy">
                            {String(stepIndex + 1).padStart(2, "0")}
                          </span>
                          <p className="pt-1.5 text-[0.9rem] leading-[1.75] text-ink/80">
                            {step}
                          </p>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div className="grid gap-8 sm:grid-cols-2">
                    <div>
                      <h3 className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-slate-ink">
                        Typical use cases
                      </h3>
                      <ul className="mt-5 space-y-3">
                        {solution.useCases.map((useCase) => (
                          <li
                            key={useCase}
                            className="flex items-start gap-2.5 text-[0.86rem] leading-relaxed text-ink/75"
                          >
                            <Check size={13} className="mt-1 shrink-0 text-gold" />
                            {useCase}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-slate-ink">
                        Documentation
                      </h3>
                      <ul className="mt-5 space-y-3">
                        {solution.documentation.map((document) => (
                          <li
                            key={document}
                            className="flex items-start gap-2.5 text-[0.86rem] leading-relaxed text-ink/75"
                          >
                            <span
                              className="mt-2 h-1 w-1 shrink-0 bg-navy/40"
                              aria-hidden
                            />
                            {document}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="border border-navy/12 bg-white p-6">
                    <p className="text-[0.78rem] leading-relaxed text-slate-ink">
                      All facilities are subject to credit assessment,
                      affordability and approval. Fees are disclosed upfront in
                      the pre-agreement statement and quotation.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </Container>
        </section>
      ))}

      <section className="bg-white py-20 md:py-28">
        <Container>
          <Reveal>
            <SolutionSelector />
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-navy/10 bg-offwhite py-20 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.4fr_0.6fr] lg:gap-16">
            <Reveal>
              <p className="eyebrow flex items-center gap-4">
                <span className="h-px w-8 bg-current opacity-60" aria-hidden />
                Illustrative tool
              </p>
              <h2 className="mt-6 text-[1.75rem] leading-[1.15] sm:text-[2.1rem]">
                Size the gap before you apply.
              </h2>
              <p className="mt-6 max-w-md text-[0.95rem] leading-[1.8] text-slate-ink">
                A quick illustration of the difference between contract value and
                available working capital. It is not an eligibility test and does
                not produce an approved amount.
              </p>
              <Link
                href="/how-it-works"
                className="group mt-8 inline-flex items-center gap-2 border-b border-navy/20 pb-1 text-[0.74rem] font-semibold uppercase tracking-[0.16em] text-navy transition-colors hover:border-gold hover:text-gold"
              >
                See what happens after you apply
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </Reveal>
            <Reveal delay={0.1}>
              <FundingCalculator />
            </Reveal>
          </div>
        </Container>
      </section>

      <CtaBand
        eyebrow="Enquire"
        title="Tell us which facility fits your contract."
        description="Share the buyer, contract value and payment terms — the credit team will respond with the structure that applies."
      />
    </>
  );
}
