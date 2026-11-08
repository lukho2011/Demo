import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { company } from "@/data/company";

type CtaBandProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
};

export function CtaBand({
  eyebrow = "Next step",
  title = "Let's fund your next contract.",
  description = "Talk to us about turning your invoices, purchase orders and contracts into working capital.",
}: CtaBandProps) {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div className="absolute inset-0 grid-lines opacity-60" aria-hidden />
      <div
        className="absolute -right-24 -top-32 h-[420px] w-[420px] rounded-full bg-gold/10 blur-3xl"
        aria-hidden
      />
      <Container className="relative">
        <div className="grid gap-10 py-16 md:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <Reveal>
            <p className="eyebrow flex items-center gap-4">
              <span className="h-px w-8 bg-current opacity-60" aria-hidden />
              {eyebrow}
            </p>
            <h2 className="mt-6 max-w-xl text-[1.9rem] leading-[1.15] text-white sm:text-[2.3rem] lg:text-[2.7rem]">
              {title}
            </h2>
            <p className="mt-5 max-w-lg text-[0.98rem] leading-[1.8] text-white/65">
              {description}
            </p>
          </Reveal>

          <Reveal delay={0.1} className="lg:justify-self-end">
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-stretch">
              <Button href="/contact" variant="primary">
                Discuss your funding needs
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Button>
              <Button href={company.applyForFundingUrl} variant="light">
                Apply for funding
                <ArrowUpRight size={15} />
              </Button>
            </div>
            <p className="mt-4 max-w-xs text-[0.68rem] leading-relaxed text-white/35">
              {company.applyForFundingNote}
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
