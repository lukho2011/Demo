import type { Metadata } from "next";
import { Info } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { CtaBand } from "@/components/layout/CtaBand";
import { Container } from "@/components/ui/Container";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { ImpactCounter } from "@/components/impact/ImpactCounter";
import {
  achievedStatus,
  impactPriorities,
  impactTargets,
  marketContext,
  provinceTargets,
} from "@/data/impact";
import { formatNumber } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Our Impact",
  description:
    "Harbourview Credit's five-year SME development targets: 500+ SMEs funded, 60% women-owned, 40% youth-owned and 2,500+ jobs created across South African provinces.",
};

const totals = provinceTargets.reduce(
  (accumulator, province) => ({
    smes: accumulator.smes + province.smes,
    women: accumulator.women + province.women,
    youth: accumulator.youth + province.youth,
    jobs: accumulator.jobs + province.jobs,
  }),
  { smes: 0, women: 0, youth: 0, jobs: 0 },
);

export default function ImpactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our impact"
        title="SME development is the mandate, not a by-product."
        description="Harbourview's lending programme is directed at the businesses most exposed to the working capital gap: township and rural contractors, women-owned and youth-owned enterprises."
        image="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1900&q=80"
        imageAlt="Infrastructure construction site in South Africa"
        meta={[
          { label: "Target horizon", value: "Five years" },
          { label: "SMEs targeted", value: "500+" },
          { label: "Jobs targeted", value: "2,500+" },
        ]}
      />

      <section className="bg-offwhite py-20 md:py-24">
        <Container>
          <Reveal>
            <p className="eyebrow flex items-center gap-4">
              <span className="h-px w-8 bg-current opacity-60" aria-hidden />
              The gap
            </p>
            <h2 className="mt-6 max-w-2xl text-[1.7rem] leading-[1.18] sm:text-[2.1rem]">
              Access to working capital remains the binding constraint for South
              African SMEs.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {marketContext.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 0.06}>
                <div className="border-t border-navy/15 pt-6">
                  <p className="font-display text-[2.4rem] font-semibold leading-none tracking-tight text-navy">
                    <ImpactCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-4 text-[0.86rem] leading-relaxed text-ink/75">
                    {stat.label}
                  </p>
                  <p className="mt-3 text-[0.66rem] uppercase tracking-[0.12em] text-slate-ink/70">
                    {stat.source}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy py-20 text-white md:py-24">
        <Container>
          <Reveal>
            <p className="eyebrow flex items-center gap-4 text-gold-soft">
              <span className="h-px w-8 bg-current opacity-60" aria-hidden />
              Five-year targets
            </p>
            <h2 className="mt-6 max-w-2xl text-[1.7rem] leading-[1.18] text-white sm:text-[2.1rem]">
              Projected developmental targets.
            </h2>
            <p className="mt-5 max-w-xl text-[0.94rem] leading-[1.8] text-white/60">
              The figures below are targets for the lending programme, not
              achieved results. Verified outcomes will be published as the
              portfolio is deployed.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {impactTargets.map((metric, index) => (
              <Reveal key={metric.id} delay={index * 0.06}>
                <div className="border-t border-white/15 pt-6">
                  <p className="font-display text-[2.5rem] font-semibold leading-none tracking-tight text-white">
                    <ImpactCounter value={metric.value} suffix={metric.suffix} />
                  </p>
                  <p className="mt-4 text-[0.78rem] font-medium uppercase tracking-[0.12em] text-gold">
                    {metric.label}
                  </p>
                  <p className="mt-2 text-[0.78rem] leading-relaxed text-white/45">
                    {metric.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-navy/10 bg-white py-20 md:py-24">
        <Container>
          <Reveal>
            <p className="eyebrow flex items-center gap-4">
              <span className="h-px w-8 bg-current opacity-60" aria-hidden />
              Geographic allocation
            </p>
            <h2 className="mt-6 max-w-2xl text-[1.7rem] leading-[1.18] sm:text-[2.1rem]">
              Targets by province.
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-12 overflow-x-auto">
              <table className="w-full min-w-[720px] border-collapse text-left">
                <caption className="sr-only">
                  Projected five-year SME development targets by province
                </caption>
                <thead>
                  <tr className="border-b border-navy/15">
                    {["Province", "SMEs", "Women", "Youth", "Jobs", "Focus"].map(
                      (heading) => (
                        <th
                          key={heading}
                          scope="col"
                          className="pb-4 pr-6 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-slate-ink"
                        >
                          {heading}
                        </th>
                      ),
                    )}
                  </tr>
                </thead>
                <tbody>
                  {provinceTargets.map((province) => (
                    <tr
                      key={province.province}
                      className="border-b border-navy/10 transition-colors hover:bg-offwhite"
                    >
                      <th
                        scope="row"
                        className="py-5 pr-6 text-[0.9rem] font-medium text-navy"
                      >
                        {province.province}
                      </th>
                      <td className="py-5 pr-6 text-[0.88rem] text-ink/75">
                        {formatNumber(province.smes)}
                      </td>
                      <td className="py-5 pr-6 text-[0.88rem] text-ink/75">
                        <span className="flex items-center gap-3">
                          {formatNumber(province.women)}
                          <span className="hidden h-1 w-16 bg-navy/10 sm:block">
                            <span
                              className="block h-full bg-gold"
                              style={{
                                width: `${(province.women / province.smes) * 100}%`,
                              }}
                            />
                          </span>
                        </span>
                      </td>
                      <td className="py-5 pr-6 text-[0.88rem] text-ink/75">
                        <span className="flex items-center gap-3">
                          {formatNumber(province.youth)}
                          <span className="hidden h-1 w-16 bg-navy/10 sm:block">
                            <span
                              className="block h-full bg-navy/40"
                              style={{
                                width: `${(province.youth / province.smes) * 100}%`,
                              }}
                            />
                          </span>
                        </span>
                      </td>
                      <td className="py-5 pr-6 text-[0.88rem] text-ink/75">
                        {formatNumber(province.jobs)}
                      </td>
                      <td className="py-5 pr-6 text-[0.8rem] text-slate-ink">
                        {province.note}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td className="pt-5 pr-6 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-navy">
                      Total
                    </td>
                    <td className="pt-5 pr-6 text-[0.88rem] font-semibold text-navy">
                      {formatNumber(totals.smes)}
                    </td>
                    <td className="pt-5 pr-6 text-[0.88rem] font-semibold text-navy">
                      {formatNumber(totals.women)}
                    </td>
                    <td className="pt-5 pr-6 text-[0.88rem] font-semibold text-navy">
                      {formatNumber(totals.youth)}
                    </td>
                    <td className="pt-5 pr-6 text-[0.88rem] font-semibold text-navy">
                      {formatNumber(totals.jobs)}
                    </td>
                    <td className="pt-5 pr-6 text-[0.72rem] text-slate-ink">
                      Projected
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-8 flex items-start gap-2.5 text-[0.78rem] leading-relaxed text-slate-ink">
              <Info size={14} className="mt-0.5 shrink-0 text-gold" />
              Province allocations are planning targets and may be reallocated
              as origination develops.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-navy/10 bg-offwhite py-20 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.42fr_0.58fr] lg:gap-16">
            <Reveal>
              <p className="eyebrow flex items-center gap-4">
                <span className="h-px w-8 bg-current opacity-60" aria-hidden />
                Who we reach
              </p>
              <h2 className="mt-6 text-[1.7rem] leading-[1.18] sm:text-[2.1rem]">
                The borrowers conventional credit scores exclude.
              </h2>
              <div className="mt-8 border border-navy/12 bg-white p-6">
                <p className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-gold">
                  {achievedStatus.heading}
                </p>
                <p className="mt-3 text-[0.86rem] leading-[1.75] text-slate-ink">
                  {achievedStatus.body}
                </p>
                <p className="mt-4 text-[0.68rem] uppercase tracking-[0.12em] text-slate-ink/60">
                  {achievedStatus.note}
                </p>
              </div>
            </Reveal>

            <RevealGroup className="grid gap-6 sm:grid-cols-2">
              {impactPriorities.map((priority, index) => (
                <RevealItem key={priority.title}>
                  <div className="h-full border border-navy/12 bg-white p-7">
                    <span className="font-display text-[0.64rem] font-semibold tracking-[0.2em] text-gold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-4 text-[1rem] leading-snug">
                      {priority.title}
                    </h3>
                    <p className="mt-3 text-[0.86rem] leading-[1.75] text-slate-ink">
                      {priority.description}
                    </p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </Container>
      </section>

      <CtaBand
        eyebrow="Partner with us"
        title="Fund the businesses that create the jobs."
        description="If you are an intermediary, development finance partner or corporate buyer, speak to us about directing capital into SME contract delivery."
      />
    </>
  );
}
