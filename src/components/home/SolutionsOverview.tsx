import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SolutionCard } from "@/components/solutions/SolutionCard";
import { RevealGroup, RevealItem, Reveal } from "@/components/ui/Reveal";
import { solutions } from "@/data/solutions";

export function SolutionsOverview() {
  return (
    <section className="border-t border-navy/10 bg-white py-20 md:py-28">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="eyebrow flex items-center gap-4">
              <span className="h-px w-8 bg-current opacity-60" aria-hidden />
              Financing solutions
            </p>
            <h2 className="mt-6 max-w-xl text-[1.75rem] leading-[1.15] sm:text-[2.15rem] lg:text-[2.5rem]">
              Three facilities, one objective: release cash locked in the
              contract.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <Link
              href="/solutions"
              className="group inline-flex items-center gap-2 border-b border-navy/20 pb-1 text-[0.74rem] font-semibold uppercase tracking-[0.16em] text-navy transition-colors hover:border-gold hover:text-gold"
            >
              Compare solutions
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </Reveal>
        </div>

        <RevealGroup className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => (
            <RevealItem key={solution.id} className="h-full">
              <SolutionCard solution={solution} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
