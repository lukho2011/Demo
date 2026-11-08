import Image from "next/image";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { company } from "@/data/company";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1900&q=80"
          alt="Construction site with cranes and structural steelwork"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/92 to-navy/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/60" />
        <div className="absolute inset-0 grid-lines opacity-70" aria-hidden />
      </div>

      <Container className="relative">
        <div className="grid gap-14 py-16 md:py-22 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-10 lg:py-28">
          <div>
            <Reveal>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-gold">
                <span className="h-px w-8 bg-gold/70" aria-hidden />
                <span>{company.ncr.label}</span>
                <span className="text-white/30">/</span>
                <span className="text-white/60">{company.ncr.number}</span>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-7 max-w-[19ch] text-[2.35rem] font-semibold leading-[1.06] tracking-[-0.025em] text-white sm:text-[3rem] lg:text-[3.85rem]">
                Bridging the gap between opportunity and{" "}
                <span className="relative whitespace-nowrap">
                  <span className="relative z-10">working capital.</span>
                  <span
                    className="absolute inset-x-0 bottom-[0.12em] z-0 h-[0.28em] bg-gold/35"
                    aria-hidden
                  />
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-7 max-w-xl text-[1.02rem] leading-[1.8] text-white/70">
                Structured working capital solutions that help South African
                SMEs fulfil contracts, finance operations and unlock business
                growth.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button href="/solutions" variant="primary">
                  Explore our solutions
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Button>
                <Button href="/contact" variant="light">
                  Discuss your funding needs
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.3} className="lg:justify-self-end">
            <div className="w-full max-w-md border border-white/12 bg-navy/55 p-8 backdrop-blur-md lg:max-w-sm">
              <div className="flex items-center gap-3 text-gold">
                <ShieldCheck size={17} />
                <span className="text-[0.66rem] font-semibold uppercase tracking-[0.2em]">
                  Institutional discipline
                </span>
              </div>
              <p className="mt-5 font-display text-[1.05rem] leading-relaxed text-white">
                Every facility is secured against the contract that funds it.
              </p>
              <div className="mt-7 space-y-4 border-t border-white/10 pt-6">
                {[
                  ["Facility tenors", "14 days – 3 years"],
                  ["Facility sizes", "R50 000 – R5 million"],
                  ["Origination", "Sandton, Gauteng"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-baseline justify-between gap-6"
                  >
                    <span className="text-[0.72rem] uppercase tracking-[0.14em] text-white/40">
                      {label}
                    </span>
                    <span className="text-right text-[0.86rem] text-white/85">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
