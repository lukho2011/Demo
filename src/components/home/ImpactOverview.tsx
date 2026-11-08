import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ImpactCounter } from "@/components/impact/ImpactCounter";
import { impactTargets } from "@/data/impact";

export function ImpactOverview() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-white md:py-28">
      <div className="absolute inset-0 grid-lines opacity-60" aria-hidden />
      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[0.42fr_0.58fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow flex items-center gap-4 text-gold-soft">
              <span className="h-px w-8 bg-current opacity-60" aria-hidden />
              SME development
            </p>
            <h2 className="mt-6 text-[1.75rem] leading-[1.15] text-white sm:text-[2.15rem] lg:text-[2.45rem]">
              Capital that reaches the businesses banks overlook.
            </h2>
            <p className="mt-6 max-w-md text-[0.96rem] leading-[1.8] text-white/60">
              Harbourview&apos;s five-year developmental targets focus on
              township and rural SMEs, women-owned and youth-owned businesses,
              alongside the jobs those contracts sustain.
            </p>
            <Link
              href="/impact"
              className="group mt-9 inline-flex items-center gap-2 border-b border-white/25 pb-1 text-[0.74rem] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:border-gold hover:text-gold"
            >
              View our impact targets
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </Reveal>

          <div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-10">
              {impactTargets.map((metric, index) => (
                <Reveal key={metric.id} delay={index * 0.07}>
                  <div className="border-t border-white/15 pt-5">
                    <p className="font-display text-[2.4rem] font-semibold leading-none tracking-tight text-white sm:text-[3rem]">
                      <ImpactCounter
                        value={metric.value}
                        suffix={metric.suffix}
                      />
                    </p>
                    <p className="mt-3 text-[0.78rem] font-medium uppercase tracking-[0.12em] text-gold">
                      {metric.label}
                    </p>
                    <p className="mt-2 text-[0.78rem] leading-relaxed text-white/45">
                      {metric.detail}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="mt-10 border-t border-white/10 pt-5 text-[0.7rem] uppercase tracking-[0.14em] text-white/35">
              Projected targets, not achieved results
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
