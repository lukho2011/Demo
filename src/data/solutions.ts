export type SolutionIcon = "supply" | "construction" | "receivables";

export type Solution = {
  id: "supply-chain" | "construction" | "receivables";
  index: string;
  name: string;
  shortName: string;
  icon: SolutionIcon;
  headline: string;
  summary: string;
  targetCustomer: string;
  tenor: string;
  facilityRange: string;
  security: string;
  howItWorks: string[];
  useCases: string[];
  documentation: string[];
  selectorTrigger: string;
};

export const solutions: Solution[] = [
  {
    id: "supply-chain",
    index: "01",
    name: "Supply Chain Finance",
    shortName: "Supply Chain",
    icon: "supply",
    headline: "Finance the order, not the wait.",
    summary:
      "Short-tenor funding against confirmed purchase orders and awarded supply contracts, so stock and services can be delivered before the buyer pays.",
    targetCustomer:
      "Suppliers and distributors holding confirmed purchase orders or awarded supply contracts from creditworthy buyers.",
    tenor: "30 – 180 days",
    facilityRange: "R50 000 – R5 million",
    security:
      "Cession of contract proceeds to Harbourview, buyer payment undertaking and, where applicable, retention of title until delivery is confirmed.",
    howItWorks: [
      "Confirm the purchase order or award letter and the buyer's payment terms.",
      "Harbourview verifies the order, the supplier quotations and the buyer's standing.",
      "The facility is approved and disbursed to fund goods or delivery.",
      "The buyer settles into a Harbourview-controlled collection account at maturity.",
    ],
    useCases: [
      "Fulfilling a municipal or SOE supply order without depleting cash reserves.",
      "Funding supplier deposits and imports ahead of a confirmed delivery date.",
      "Bridging 30 – 90 day payment terms on recurring supply contracts.",
    ],
    documentation: [
      "Purchase order or award letter",
      "Supplier or input quotations",
      "Company registration and FICA documentation",
      "Three months of bank statements",
    ],
    selectorTrigger: "I have a purchase order",
  },
  {
    id: "construction",
    index: "02",
    name: "Construction Contract Finance",
    shortName: "Construction",
    icon: "construction",
    headline: "Mobilise the contract you have already won.",
    summary:
      "Revolving working capital facilities structured against the duration and value of an awarded construction contract, drawn as the project progresses.",
    targetCustomer:
      "General and specialist contractors with awarded construction contracts and the capacity to execute them.",
    tenor: "3 months – 3 years",
    facilityRange: "R250 000 – R5 million",
    security:
      "Cession of progress payments, employer payment undertaking and personal suretyship, with funding aligned to certified milestones.",
    howItWorks: [
      "Harbourview assesses the employer, the contract terms and the contractor's ability to deliver.",
      "A revolving facility is structured against the contract value and programme.",
      "Drawdowns fund labour, materials and plant as milestones are reached.",
      "Repayment follows the employer's certification and payment cycle.",
    ],
    useCases: [
      "Mobilising labour, plant and materials for a newly awarded road or building contract.",
      "Bridging the gap between certified progress claims and employer payment.",
      "Sustaining monthly site costs across a multi-year infrastructure programme.",
    ],
    documentation: [
      "Award letter or signed contract",
      "Progress certificates and claims history",
      "Contractor's all-risk insurance cover",
      "Annual financial statements and management accounts",
    ],
    selectorTrigger: "I have a construction contract",
  },
  {
    id: "receivables",
    index: "03",
    name: "Receivables Purchase",
    shortName: "Receivables",
    icon: "receivables",
    headline: "Convert delivered work into available cash.",
    summary:
      "Outright purchase of verified SME receivables at a discount, releasing the majority of invoice value immediately instead of waiting for the buyer's payment run.",
    targetCustomer:
      "SMEs holding verified invoices against government, state-owned entities, JSE-listed companies and large private corporates.",
    tenor: "14 – 60 days",
    facilityRange: "R50 000 – R5 million per transaction",
    security:
      "Legal assignment of the receivable to Harbourview, with written obligor acknowledgement of cession obtained before funding.",
    howItWorks: [
      "The borrower presents a verified invoice against an approved obligor.",
      "Harbourview independently verifies the invoice, the purchase order and obligor standing.",
      "The advance is disbursed once documentation is complete.",
      "The obligor settles the invoice and the residual balance is remitted to the borrower.",
    ],
    useCases: [
      "Government and SOE invoices with 30 – 90 day settlement cycles.",
      "Funding payroll and the next project while awaiting an approved claim.",
      "Improving cash conversion without adding long-term debt to the balance sheet.",
    ],
    documentation: [
      "Verified invoice and delivery documentation",
      "Purchase order or works order reference",
      "Obligor acknowledgement of cession",
      "Company registration and FICA documentation",
    ],
    selectorTrigger: "I have an outstanding invoice",
  },
];

export const solutionById = (id: Solution["id"]) =>
  solutions.find((solution) => solution.id === id);

export const selectorOptions = solutions.map((solution) => ({
  id: solution.id,
  trigger: solution.selectorTrigger,
  name: solution.name,
  shortName: solution.shortName,
}));
