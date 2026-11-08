import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { company } from "@/data/company";

export function CompanyIntroduction() {
  return (
    <section className="bg-offwhite py-20 md:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
          <Reveal className="relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-navy">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
                alt="Corporate office building facade"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-gold">
                  Head office
                </p>
                <p className="mt-2 font-display text-[1.05rem] text-white">
                  Nelson Mandela Square, Sandton
                </p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 hidden h-28 w-28 border-b border-r border-gold/60 lg:block" aria-hidden />
          </Reveal>

          <div className="lg:pt-6">
            <Reveal>
              <p className="eyebrow flex items-center gap-4">
                <span className="h-px w-8 bg-current opacity-60" aria-hidden />
                The company
              </p>
              <h2 className="mt-6 max-w-xl text-[1.75rem] leading-[1.15] sm:text-[2.15rem] lg:text-[2.5rem]">
                A specialist intermediary for SMEs that banks
                <span className="text-gold"> routinely decline.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mt-7 space-y-5 text-[0.98rem] leading-[1.85] text-slate-ink">
                <p>
                  Harbourview Credit provides structured working capital finance
                  to South African SMEs, closing the gap between delivering a
                  contract and being paid for it.
                </p>
                <p>
                  We underwrite the transaction rather than the balance sheet:
                  the buyer, the contract terms and the borrower&apos;s
                  demonstrated ability to deliver. That allows us to fund
                  businesses with active contracts but no property to pledge and
                  no three-year audit history.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-7 border-t border-navy/10 pt-8 sm:grid-cols-3">
                {[
                  ["Products", "Three"],
                  ["Facility range", "R50k – R5m"],
                  ["Registered", company.ncr.number],
                ].map(([label, value]) => (
                  <div key={label}>
                    <dt className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-slate-ink/70">
                      {label}
                    </dt>
                    <dd className="mt-2 font-display text-[1.05rem] font-semibold text-navy">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={0.2}>
              <Link
                href="/about"
                className="group mt-10 inline-flex items-center gap-2 border-b border-navy/20 pb-1 text-[0.74rem] font-semibold uppercase tracking-[0.16em] text-navy transition-colors hover:border-gold hover:text-gold"
              >
                About Harbourview
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
