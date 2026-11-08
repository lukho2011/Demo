"use client";

import { useMemo, useState } from "react";
import { Info, RotateCcw, TrendingUp } from "lucide-react";
import { calculateWorkingCapital, MOBILISATION_RATE } from "@/lib/calculations";
import { formatZAR } from "@/lib/utils";

const MAX = 10_000_000;
const STEP = 50_000;

export function FundingCalculator() {
  const [contractValue, setContractValue] = useState(2_500_000);
  const [availableCapital, setAvailableCapital] = useState(350_000);

  const result = useMemo(
    () => calculateWorkingCapital(contractValue, availableCapital),
    [contractValue, availableCapital],
  );

  const coverage = Math.round(result.coverageRatio * 100);

  return (
    <div className="border border-navy/12 bg-white">
      <div className="border-b border-navy/10 px-7 py-6">
        <div className="flex items-center justify-between gap-4">
          <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-slate-ink/70">
            Working capital illustration
          </p>
          <button
            type="button"
            onClick={() => {
              setContractValue(2_500_000);
              setAvailableCapital(350_000);
            }}
            className="flex items-center gap-1.5 text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-slate-ink transition-colors hover:text-navy"
          >
            <RotateCcw size={12} />
            Reset
          </button>
        </div>
      </div>

      <div className="grid gap-8 px-7 py-7 md:grid-cols-2 md:gap-10">
        <div className="space-y-8">
          <div>
            <div className="flex items-baseline justify-between gap-3">
              <label
                htmlFor="contract-value"
                className="text-[0.78rem] font-medium text-navy"
              >
                Contract value
              </label>
              <span className="font-display text-[0.95rem] font-semibold text-navy">
                {formatZAR(contractValue)}
              </span>
            </div>
            <input
              id="contract-value"
              type="range"
              min={0}
              max={MAX}
              step={STEP}
              value={contractValue}
              onChange={(event) => setContractValue(Number(event.target.value))}
              className="mt-4 w-full accent-[#c5a46d]"
              aria-describedby="contract-value-help"
            />
            <p id="contract-value-help" className="mt-2 text-[0.7rem] text-slate-ink">
              Total value of the awarded contract or purchase order.
            </p>
          </div>

          <div>
            <div className="flex items-baseline justify-between gap-3">
              <label
                htmlFor="available-capital"
                className="text-[0.78rem] font-medium text-navy"
              >
                Available working capital
              </label>
              <span className="font-display text-[0.95rem] font-semibold text-navy">
                {formatZAR(availableCapital)}
              </span>
            </div>
            <input
              id="available-capital"
              type="range"
              min={0}
              max={MAX}
              step={STEP}
              value={availableCapital}
              onChange={(event) => setAvailableCapital(Number(event.target.value))}
              className="mt-4 w-full accent-[#c5a46d]"
              aria-describedby="available-capital-help"
            />
            <p id="available-capital-help" className="mt-2 text-[0.7rem] text-slate-ink">
              Cash and unused facilities currently available to mobilise.
            </p>
          </div>

          <div className="border border-navy/10 bg-offwhite p-4">
            <div className="flex items-start gap-2.5 text-[0.72rem] leading-relaxed text-slate-ink">
              <Info size={14} className="mt-0.5 shrink-0 text-gold" />
              <p>
                Illustrative only. This calculator does not constitute a
                financing offer, an approved amount or an eligibility
                assessment.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-navy p-7 text-white">
          <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-white/40">
            Illustrative funding gap
          </p>
          <p className="mt-3 font-display text-[2.1rem] font-semibold leading-none tracking-tight text-white">
            {formatZAR(result.fundingGap)}
          </p>
          <p className="mt-3 text-[0.8rem] leading-relaxed text-white/55">
            Difference between the contract value and the capital you have
            available today.
          </p>

          <div className="mt-7">
            <div className="flex items-baseline justify-between text-[0.7rem] text-white/50">
              <span>Contract coverage</span>
              <span className="font-semibold text-gold">{coverage}%</span>
            </div>
            <div
              className="mt-2 h-1.5 w-full overflow-hidden bg-white/12"
              role="img"
              aria-label={`Available capital covers ${coverage} percent of the contract value`}
            >
              <div
                className="h-full bg-gold transition-[width] duration-500 ease-out"
                style={{ width: `${Math.max(coverage, 1)}%` }}
              />
            </div>
          </div>

          <div className="mt-7 space-y-4 border-t border-white/12 pt-6">
            <div className="flex items-baseline justify-between gap-4">
              <span className="text-[0.72rem] uppercase tracking-[0.12em] text-white/45">
                Mobilisation requirement ({Math.round(MOBILISATION_RATE * 100)}%)
              </span>
              <span className="text-[0.86rem] text-white/85">
                {formatZAR(result.mobilisationRequirement)}
              </span>
            </div>
            <div className="flex items-baseline justify-between gap-4">
              <span className="flex items-center gap-1.5 text-[0.72rem] uppercase tracking-[0.12em] text-white/45">
                <TrendingUp size={12} className="text-gold" />
                Shortfall to mobilise
              </span>
              <span className="text-[0.86rem] font-semibold text-gold">
                {formatZAR(result.mobilisationShortfall)}
              </span>
            </div>
          </div>

          <p className="mt-6 text-[0.68rem] leading-relaxed text-white/35">
            Estimates use simplified assumptions and exclude fees, interest and
            credit assessment outcomes.
          </p>
        </div>
      </div>
    </div>
  );
}
