/**
 * Illustrative working capital calculations.
 *
 * These functions support a demonstration calculator only. They do not
 * represent an offer of finance, an approved facility amount, a pricing
 * indication or an eligibility assessment.
 */

/** Share of contract value typically required to mobilise and deliver. */
export const MOBILISATION_RATE = 0.3;

export type WorkingCapitalResult = {
  contractValue: number;
  availableCapital: number;
  fundingGap: number;
  coverageRatio: number;
  mobilisationRequirement: number;
  mobilisationShortfall: number;
};

const sanitise = (value: number) =>
  Number.isFinite(value) && value > 0 ? value : 0;

export function calculateWorkingCapital(
  contractValue: number,
  availableCapital: number,
): WorkingCapitalResult {
  const contract = sanitise(contractValue);
  const available = sanitise(availableCapital);

  const fundingGap = Math.max(contract - available, 0);
  const coverageRatio = contract > 0 ? Math.min(available / contract, 1) : 0;
  const mobilisationRequirement = contract * MOBILISATION_RATE;
  const mobilisationShortfall = Math.max(
    mobilisationRequirement - available,
    0,
  );

  return {
    contractValue: contract,
    availableCapital: available,
    fundingGap,
    coverageRatio,
    mobilisationRequirement,
    mobilisationShortfall,
  };
}
