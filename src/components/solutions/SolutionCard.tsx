import Link from "next/link";
import { ArrowUpRight, HardHat, PackageCheck, ReceiptText } from "lucide-react";
import type { Solution, SolutionIcon } from "@/data/solutions";
import { cx } from "@/lib/utils";

const icons = {
  supply: PackageCheck,
  construction: HardHat,
  receivables: ReceiptText,
} satisfies Record<SolutionIcon, React.ComponentType<{ size?: number; strokeWidth?: number }>>;

type SolutionCardProps = {
  solution: Solution;
  href?: string;
  className?: string;
};

export function SolutionCard({ solution, href, className }: SolutionCardProps) {
  const Icon = icons[solution.icon];

  return (
    <Link
      href={href ?? `/solutions#${solution.id}`}
      className={cx(
        "group relative flex h-full flex-col border border-navy/12 bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:border-navy hover:bg-navy",
        className,
      )}
    >
      <div className="flex items-start justify-between">
        <span className="font-display text-[0.7rem] font-semibold tracking-[0.2em] text-gold">
          {solution.index}
        </span>
        <Icon
          size={22}
          strokeWidth={1.4}
          aria-hidden
        />
      </div>

      <h3 className="mt-8 text-[1.28rem] leading-snug text-navy transition-colors duration-500 group-hover:text-white">
        {solution.name}
      </h3>

      <p className="mt-4 flex-1 text-[0.92rem] leading-[1.75] text-slate-ink transition-colors duration-500 group-hover:text-white/65">
        {solution.summary}
      </p>

      <div className="mt-8 grid grid-cols-2 gap-4 border-t border-navy/10 pt-5 transition-colors duration-500 group-hover:border-white/15">
        <div>
          <span className="block text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-slate-ink/70 transition-colors duration-500 group-hover:text-white/40">
            Tenor
          </span>
          <span className="mt-1 block text-[0.82rem] text-navy transition-colors duration-500 group-hover:text-white/85">
            {solution.tenor}
          </span>
        </div>
        <div>
          <span className="block text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-slate-ink/70 transition-colors duration-500 group-hover:text-white/40">
            Facility
          </span>
          <span className="mt-1 block text-[0.82rem] text-navy transition-colors duration-500 group-hover:text-white/85">
            {solution.facilityRange.replace(" per transaction", "")}
          </span>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-navy transition-colors duration-500 group-hover:text-gold">
        View solution
        <ArrowUpRight
          size={14}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </div>
    </Link>
  );
}
