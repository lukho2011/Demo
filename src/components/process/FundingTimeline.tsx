"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronRight } from "lucide-react";
import { processStages } from "@/data/process";
import { cx } from "@/lib/utils";

export function FundingTimeline() {
  const [activeId, setActiveId] = useState(processStages[0].id);
  const active = processStages.find((stage) => stage.id === activeId)!;
  const activeIndex = processStages.findIndex((stage) => stage.id === activeId);

  return (
    <div>
      <div className="relative mb-12 hidden items-center lg:flex">
        <div className="absolute left-0 right-0 top-[15px] h-px bg-navy/12" aria-hidden />
        <div
          className="absolute left-0 top-[15px] h-px bg-gold transition-all duration-500"
          style={{ width: `${(activeIndex / (processStages.length - 1)) * 100}%` }}
          aria-hidden
        />
        <ol className="relative flex w-full justify-between">
          {processStages.map((stage, index) => {
            const isComplete = index <= activeIndex;
            const isActive = stage.id === activeId;
            return (
              <li key={stage.id}>
                <button
                  type="button"
                  onClick={() => setActiveId(stage.id)}
                  aria-current={isActive}
                  className="group flex flex-col items-start gap-3 bg-transparent pr-6 text-left"
                >
                  <span
                    className={cx(
                      "flex h-8 w-8 items-center justify-center border text-[0.62rem] font-semibold transition-all duration-300",
                      isActive
                        ? "border-navy bg-navy text-gold"
                        : isComplete
                          ? "border-gold bg-white text-navy"
                          : "border-navy/20 bg-white text-slate-ink group-hover:border-navy/50",
                    )}
                  >
                    {isComplete && !isActive ? <Check size={12} /> : stage.index}
                  </span>
                  <span
                    className={cx(
                      "max-w-[9.5rem] text-[0.74rem] font-medium leading-snug transition-colors",
                      isActive ? "text-navy" : "text-slate-ink group-hover:text-navy",
                    )}
                  >
                    {stage.title}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.36fr_0.64fr] lg:gap-12">
        <div className="flex flex-col divide-y divide-navy/10 border-y border-navy/12 lg:hidden">
          {processStages.map((stage) => {
            const isActive = stage.id === activeId;
            return (
              <button
                key={stage.id}
                type="button"
                onClick={() => setActiveId(stage.id)}
                aria-current={isActive}
                className={cx(
                  "flex items-center justify-between gap-4 px-4 py-4 text-left transition-colors",
                  isActive ? "bg-navy text-white" : "text-navy",
                )}
              >
                <span className="flex items-center gap-3">
                  <span className="text-[0.62rem] font-semibold tracking-[0.16em] text-gold">
                    {stage.index}
                  </span>
                  <span className="text-[0.86rem] font-medium">{stage.title}</span>
                </span>
                <ChevronRight
                  size={14}
                  className={isActive ? "text-gold" : "text-navy/25"}
                />
              </button>
            );
          })}
        </div>

        <div className="hidden lg:block">
          <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-slate-ink/70">
            Select a stage
          </p>
          <ul className="mt-5 space-y-1">
            {processStages.map((stage) => {
              const isActive = stage.id === activeId;
              return (
                <li key={stage.id}>
                  <button
                    type="button"
                    onClick={() => setActiveId(stage.id)}
                    aria-current={isActive}
                    className={cx(
                      "flex w-full items-baseline justify-between gap-4 border-l-2 py-3 pl-5 pr-3 text-left transition-all duration-300",
                      isActive
                        ? "border-gold bg-white text-navy shadow-[0_18px_40px_-38px_rgba(16,36,58,0.9)]"
                        : "border-transparent text-slate-ink hover:border-navy/20 hover:text-navy",
                    )}
                  >
                    <span className="text-[0.88rem] font-medium">{stage.title}</span>
                    <span className="shrink-0 text-[0.68rem] uppercase tracking-[0.12em] text-slate-ink/70">
                      {stage.duration}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="border border-navy/12 bg-white p-7 md:p-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-gold">
                  Stage {active.index}
                </span>
                <span className="border border-navy/15 px-3 py-1 text-[0.66rem] uppercase tracking-[0.12em] text-slate-ink">
                  {active.duration}
                </span>
              </div>
              <h3 className="mt-4 text-[1.5rem] leading-snug">{active.title}</h3>
              <p className="mt-4 text-[0.95rem] leading-[1.8] text-ink/75">
                {active.detail}
              </p>

              <div className="mt-8 border-t border-navy/10 pt-6">
                <p className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-slate-ink/70">
                  Typically required
                </p>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {active.requirements.map((requirement) => (
                    <li
                      key={requirement}
                      className="flex items-start gap-2.5 text-[0.84rem] leading-relaxed text-ink/75"
                    >
                      <Check size={13} className="mt-1 shrink-0 text-gold" />
                      {requirement}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
