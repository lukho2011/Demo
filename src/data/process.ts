export type ProcessStage = {
  id: string;
  index: string;
  title: string;
  duration: string;
  summary: string;
  detail: string;
  requirements: string[];
};

export const processStages: ProcessStage[] = [
  {
    id: "enquiry",
    index: "01",
    title: "Application & enquiry",
    duration: "Day 1",
    summary:
      "A structured conversation about the contract, the buyer and the cash flow gap.",
    detail:
      "The process opens with an enquiry describing the transaction: the counterparty, the contract or order value, expected payment terms and the working capital required. No credit decision is taken at this stage — the objective is to establish whether the transaction fits Harbourview's mandate.",
    requirements: [
      "Short outline of the transaction",
      "Value and expected payment terms",
      "Working capital requirement",
    ],
  },
  {
    id: "screening",
    index: "02",
    title: "Initial screening",
    duration: "Day 1 – 3",
    summary:
      "A first-pass assessment of mandate fit, obligor quality and deal bankability.",
    detail:
      "Harbourview screens the transaction against its underwriting criteria: the creditworthiness of the buyer or employer, the borrower's demonstrated ability to deliver, and whether the pricing works from a risk-return perspective. Transactions outside mandate are declined early to avoid unnecessary documentation.",
    requirements: [
      "Confirmation of the buyer or employer",
      "Borrower track record and capacity",
      "Indicative margin after facility costs",
    ],
  },
  {
    id: "assessment",
    index: "03",
    title: "Documentation & credit assessment",
    duration: "Day 3 – 10",
    summary:
      "Full KYC, financial review and independent verification of the underlying contract.",
    detail:
      "The credit team completes KYC and FICA verification, reviews financial statements and bank statements, conducts credit bureau checks on both borrower and obligor, and independently verifies the invoice, purchase order or contract. No facility progresses until all required documentation is on file.",
    requirements: [
      "Company registration and director FICA documents",
      "Latest financial statements and management accounts",
      "Three months of bank statements",
      "Purchase order, award letter or verified invoice",
    ],
  },
  {
    id: "approval",
    index: "04",
    title: "Approval & legal agreements",
    duration: "Day 10 – 15",
    summary:
      "Credit committee decision, then the legal architecture that protects both parties.",
    detail:
      "Facilities are approved under a defined delegation of authority. The legal pack then records the cession of contract proceeds, the obligor's payment undertaking, suretyship and the ring-fenced collection account. Fees are disclosed upfront in the pre-agreement statement, in line with the National Credit Act.",
    requirements: [
      "Signed facility agreement",
      "Cession and payment undertaking",
      "Obligor acknowledgement of cession",
      "Pre-agreement statement and quotation",
    ],
  },
  {
    id: "disbursement",
    index: "05",
    title: "Disbursement",
    duration: "Day 15 onward",
    summary:
      "Funds are released against verified documentation and contract milestones.",
    detail:
      "Once conditions precedent are satisfied, funds are disbursed to the borrower or directly to suppliers, depending on the structure. For contract finance, drawdowns are released against certified progress and approved expenditure rather than in a single lump sum.",
    requirements: [
      "Conditions precedent satisfied",
      "Verified supplier or milestone documentation",
      "Collection account confirmed and active",
    ],
  },
  {
    id: "monitoring",
    index: "06",
    title: "Monitoring & repayment",
    duration: "Facility term",
    summary:
      "Settlement is directed to Harbourview and monitored through to maturity.",
    detail:
      "The obligor settles into a Harbourview-controlled collection account, eliminating co-mingling of proceeds. Pre-maturity notifications, milestone reporting and monthly portfolio reviews to the credit committee ensure the facility is repaid on schedule and the relationship can be extended to the next contract.",
    requirements: [
      "Obligor settlement to collection account",
      "Progress or delivery confirmation",
      "Facility review for follow-on contracts",
    ],
  },
];
