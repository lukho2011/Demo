import type { Metadata } from "next";
import { Clock, FileCheck2, ShieldCheck } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { CtaBand } from "@/components/layout/CtaBand";
import { Container } from "@/components/ui/Container";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { FundingTimeline } from "@/components/process/FundingTimeline";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Harbourview Credit's six-stage funding journey: enquiry, screening, credit assessment, approval, disbursement and monitoring.",
};

const assurances = [
  {
    icon: Clock,
    title: "Indicative timelines",
    body: "Screening feedback within three business days; a funded facility typically within two to three weeks of a complete application, depending on verification.",
  },
  {
    icon: FileCheck2,
    title: "Documentation-led",
    body: "No facility progresses until the invoice, order or contract, KYC documents and financial information are on file and independently verified.",
  },
  {
    icon: ShieldCheck,
    title: "Disclosed upfront",
    body: "Every fee is set out in the pre-agreement statement and quotation before you sign, in line with the National Credit Act.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader
        eyebrow="How it works"
        title="From first enquiry to final settlement."
        description="A defined six-stage credit process, with the buyer, the contract and the borrower's delivery capacity verified before funds are released."
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1900&q=80"
        imageAlt="Financial professionals reviewing documentation around a table"
        meta={[
          { label: "Stages", value: "Six, clearly defined" },
          { label: "Screening response", value: "1 – 3 business days" },
          { label: "Typical funding", value: "10 – 15 business days" },
        ]}
      />

      <section className="bg-offwhite py-20 md:py-24">
        <Container>
          <Reveal>
            <p className="eyebrow flex items-center gap-4">
              <span className="h-px w-8 bg-current opacity-60" aria-hidden />
              The funding journey
            </p>
            <h2 className="mt-6 max-w-2xl text-[1.7rem] leading-[1.18] sm:text-[2.1rem]">
              Select a stage to see what happens and what is required.
            </h2>
          </Reveal>

          <div className="mt-14">
            <FundingTimeline />
          </div>
        </Container>
      </section>

      <section className="border-t border-navy/10 bg-white py-20 md:py-24">
        <Container>
          <RevealGroup className="grid gap-6 md:grid-cols-3">
            {assurances.map((item) => (
              <RevealItem key={item.title}>
                <div className="h-full border border-navy/12 bg-offwhite p-8">
                  <item.icon size={20} strokeWidth={1.4} className="text-gold" />
                  <h3 className="mt-6 text-[1rem]">{item.title}</h3>
                  <p className="mt-3 text-[0.88rem] leading-[1.8] text-slate-ink">
                    {item.body}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.1}>
            <div className="mt-14 border-l-2 border-gold bg-offwhite p-8 md:p-10">
              <h3 className="text-[1.15rem]">What we need from you first</h3>
              <p className="mt-3 max-w-3xl text-[0.9rem] leading-[1.8] text-slate-ink">
                A one-page description of the transaction is enough to start:
                who the buyer or employer is, the value and duration of the
                contract, the payment terms, and the working capital you need to
                deliver. Everything else can follow once the transaction passes
                screening.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <CtaBand
        eyebrow="Start the process"
        title="Send through the transaction outline."
        description="Screening is quick and costs nothing. If it is outside our mandate, we will tell you within days rather than weeks."
      />
    </>
  );
}
