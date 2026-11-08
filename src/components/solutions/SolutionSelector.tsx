"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { solutions } from "@/data/solutions";
import { cx } from "@/lib/utils";

export function SolutionSelector() {
  const [activeId, setActiveId] = useState(solutions[0].id);
  const active = solutions.find((solution) => solution.id === activeId)!;

  return (
    <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:gap-14">
      <div>
        <p className="eyebrow eyebrow-dark">Find your facility</p>
        <h3 className="mt-4 max-w-sm text-[1.6rem] leading-snug">
          Where are you in the contract cycle?
        </h3>
        <div
          className="mt-8 flex flex-col divide-y divide-navy/10 border border-navy/12 bg-white"
          role="tablist"
          aria-label="Select your financing situation"
        >
          {solutions.map((solution) => {
            const isActive = solution.id === activeId;
            return (
              <button
                key={solution.id}
                role="tab"
                id={`selector-tab-${solution.id}`}
                aria-selected={isActive}
                aria-controls={`selector-panel-${solution.id}`}
                onClick={() => setActiveId(solution.id)}
                className={cx(
                  "group flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-300",
                  isActive
                    ? "bg-navy text-white"
                    : "text-navy hover:bg-offwhite",
                )}
              >
                <span className="flex items-center gap-4">
                  <span className="font-display text-[0.68rem] font-semibold tracking-[0.18em] text-gold">
                    {solution.index}
                  </span>
                  <span className="text-[0.92rem] font-medium">
                    {solution.selectorTrigger}
                  </span>
                </span>
                <ArrowRight
                  size={15}
                  className={cx(
                    "shrink-0 transition-transform duration-300",
                    isActive
                      ? "translate-x-0 text-gold"
                      : "-translate-x-1 text-navy/30 group-hover:translate-x-0",
                  )}
                />
              </button>
            );
          })}
        </div>
        <p className="mt-6 text-[0.78rem] leading-relaxed text-slate-ink">
          Not sure which applies?{" "}
          <Link
            href="/contact"
            className="border-b border-gold/60 pb-0.5 text-navy transition-colors hover:text-gold"
          >
            Speak to the credit team
          </Link>
          .
        </p>
      </div>

      <div className="relative border border-navy/12 bg-white p-8 md:p-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            id={`selector-panel-${active.id}`}
            role="tabpanel"
            aria-labelledby={`selector-tab-${active.id}`}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-baseline justify-between gap-6">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-slate-ink/70">
                Recommended facility
              </p>
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-gold">
                {active.tenor}
              </span>
            </div>

            <h4 className="mt-3 text-[1.5rem] leading-snug">{active.name}</h4>
            <p className="mt-4 text-[0.94rem] leading-[1.75] text-slate-ink">
              {active.summary}
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-slate-ink/70">
                  Suited to
                </p>
                <p className="mt-2 text-[0.85rem] leading-relaxed text-navy">
                  {active.targetCustomer}
                </p>
              </div>
              <div>
                <p className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-slate-ink/70">
                  Indicative facility
                </p>
                <p className="mt-2 text-[0.85rem] leading-relaxed text-navy">
                  {active.facilityRange}
                </p>
              </div>
            </div>

            <div className="mt-8 border-t border-navy/10 pt-6">
              <p className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-slate-ink/70">
                How the facility works
              </p>
              <ol className="mt-4 space-y-3">
                {active.howItWorks.map((step, index) => (
                  <li key={step} className="flex gap-3 text-[0.86rem] leading-relaxed text-ink/80">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border border-gold/50 text-[0.6rem] font-semibold text-navy">
                      {index + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link
                href={`/solutions#${active.id}`}
                className="group inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-navy"
              >
                Full product detail
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
              <span className="flex items-center gap-2 text-[0.72rem] text-slate-ink">
                <Check size={13} className="text-gold" />
                Subject to credit assessment
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
