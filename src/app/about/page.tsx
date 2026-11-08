import type { Metadata } from "next";
import { Building2, Compass, Target, UserRound } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { CtaBand } from "@/components/layout/CtaBand";
import { Container } from "@/components/ui/Container";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Harbourview Credit is a Sandton-based SME contract and working capital finance intermediary, registered as a credit provider under the National Credit Act.",
};

const principles = [
  {
    icon: Target,
    label: "Our mission",
    body: "To finance the contracts South African SMEs have already won, so that working capital — not access to credit — stops determining which businesses grow.",
  },
  {
    icon: Compass,
    label: "Our vision",
    body: "A credit market where township, rural, women-owned and youth-owned businesses are assessed on what they can deliver, not only on what they already own.",
  },
  {
    icon: Building2,
    label: "Why we exist",
    body: "Conventional lenders decline the majority of SME applications because they cannot pledge property or produce three years of audited accounts. We underwrite the transaction instead.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Harbourview"
        title="A structured finance intermediary built for the SME contract economy."
        description="Harbourview Credit provides working capital finance against invoices, purchase orders and awarded contracts — with institutional underwriting discipline applied to transactions the banks routinely decline."
        image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1900&q=80"
        imageAlt="Professional team working in a corporate office environment"
        meta={[
          { label: "Registered entity", value: company.legalName },
          { label: "Credit provider", value: company.ncr.number },
          { label: "Head office", value: "Sandton, Gauteng" },
        ]}
      />

      <section className="bg-offwhite py-20 md:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <Reveal>
              <p className="eyebrow flex items-center gap-4">
                <span className="h-px w-8 bg-current opacity-60" aria-hidden />
                Company overview
              </p>
              <h2 className="mt-6 text-[1.7rem] leading-[1.18] sm:text-[2.1rem]">
                Specialists in the gap between delivery and payment.
              </h2>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="space-y-5 text-[0.98rem] leading-[1.85] text-slate-ink">
                <p>
                  Harbourview Credit (Pty) Ltd is a South African SME contract
                  and working capital finance intermediary. We fund three
                  situations: confirmed purchase orders, awarded construction
                  contracts, and verified receivables owed by creditworthy
                  buyers.
                </p>
                <p>
                  Every transaction is secured against the contract that funds
                  it — through cession of proceeds, an obligor payment
                  undertaking and a ring-fenced collection account. Funding is
                  released against verified documentation, and settlement is
                  collected directly rather than left to informal follow-up.
                </p>
                <p>
                  We are a registered credit provider under the{" "}
                  {company.ncr.act}, with KYC, FICA and POPIA controls applied at
                  onboarding and throughout the life of each facility.
                </p>
              </div>
            </Reveal>
          </div>

          <RevealGroup className="mt-16 grid gap-6 md:grid-cols-3">
            {principles.map((principle) => (
              <RevealItem key={principle.label}>
                <div className="h-full border border-navy/12 bg-white p-8">
                  <principle.icon size={20} strokeWidth={1.4} className="text-gold" />
                  <h3 className="mt-6 text-[0.95rem] font-semibold uppercase tracking-[0.14em] text-navy">
                    {principle.label}
                  </h3>
                  <p className="mt-4 text-[0.9rem] leading-[1.8] text-slate-ink">
                    {principle.body}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <section className="border-t border-navy/10 bg-white py-20 md:py-28">
        <Container>
          <Reveal>
            <p className="eyebrow flex items-center gap-4">
              <span className="h-px w-8 bg-current opacity-60" aria-hidden />
              Leadership
            </p>
            <h2 className="mt-6 max-w-2xl text-[1.7rem] leading-[1.18] sm:text-[2.1rem]">
              Founders who have underwritten, structured and managed credit
              across the public and private sectors.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {company.leadership.map((leader, index) => (
              <Reveal key={leader.name} delay={index * 0.08}>
                <article className="flex h-full flex-col border border-navy/12 bg-offwhite p-8 md:p-10">
                  <div className="flex items-start gap-6">
                    <div className="flex h-20 w-20 shrink-0 flex-col items-center justify-center border border-navy/15 bg-white text-center">
                      <UserRound size={22} strokeWidth={1.3} className="text-navy/30" />
                      <span className="mt-1.5 px-1 text-[0.5rem] uppercase leading-tight tracking-[0.1em] text-slate-ink/70">
                        Photo
                      </span>
                    </div>
                    <div>
                      <h3 className="text-[1.2rem]">{leader.name}</h3>
                      <p className="mt-1 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-gold">
                        {leader.role}
                      </p>
                      <p className="mt-3 text-[0.82rem] leading-relaxed text-slate-ink">
                        {leader.focus}
                      </p>
                    </div>
                  </div>

                  <p className="mt-7 text-[0.9rem] leading-[1.8] text-slate-ink">
                    {leader.summary}
                  </p>

                  <ul className="mt-7 space-y-2 border-t border-navy/10 pt-5">
                    {leader.credentials.map((credential) => (
                      <li
                        key={credential}
                        className="text-[0.8rem] leading-relaxed text-ink/70"
                      >
                        {credential}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-auto pt-6 text-[0.68rem] uppercase tracking-[0.12em] text-slate-ink/60">
                    {leader.photoNote}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-navy/10 bg-offwhite py-20 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.4fr_0.6fr] lg:gap-16">
            <Reveal>
              <p className="eyebrow flex items-center gap-4">
                <span className="h-px w-8 bg-current opacity-60" aria-hidden />
                Company expertise
              </p>
              <h2 className="mt-6 text-[1.7rem] leading-[1.18] sm:text-[2.1rem]">
                What we bring to each transaction.
              </h2>
            </Reveal>

            <RevealGroup className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {company.expertise.map((item, index) => (
                <RevealItem key={item.title}>
                  <div className="border-t border-navy/12 pt-5">
                    <span className="font-display text-[0.66rem] font-semibold tracking-[0.2em] text-gold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-3 text-[1rem]">{item.title}</h3>
                    <p className="mt-2.5 text-[0.88rem] leading-[1.75] text-slate-ink">
                      {item.description}
                    </p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </Container>
      </section>

      <section className="bg-navy py-20 text-white md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.45fr_0.55fr] lg:gap-16">
            <Reveal>
              <p className="eyebrow flex items-center gap-4 text-gold-soft">
                <span className="h-px w-8 bg-current opacity-60" aria-hidden />
                Regulatory standing
              </p>
              <h2 className="mt-6 text-[1.7rem] leading-[1.18] text-white sm:text-[2.1rem]">
                {company.ncr.number} — {company.ncr.act}.
              </h2>
              <p className="mt-6 max-w-md text-[0.94rem] leading-[1.8] text-white/60">
                Harbourview Credit is registered as a credit provider with the
                National Credit Regulator. Lending is subject to credit
                assessment, affordability and approval, and all fees are
                disclosed in the pre-agreement statement and quotation.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <ul className="divide-y divide-white/10 border-y border-white/12">
                {[
                  "Quarterly compliance reporting to the National Credit Regulator",
                  "KYC and FICA verification on borrowers, directors and beneficial owners",
                  "POPIA-aligned handling of personal information",
                  "Credit bureau assessment of borrowers and obligors before approval",
                  "Independent verification of every invoice, order and contract",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-4 py-4 text-[0.88rem] leading-relaxed text-white/70"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 bg-gold" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      <CtaBand
        eyebrow="Work with us"
        title="Bring us the contract, not the balance sheet."
        description="Send through the transaction outline and our credit team will tell you quickly whether it fits our mandate."
      />
    </>
  );
}
