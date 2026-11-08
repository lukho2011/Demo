export type ImpactMetric = {
  id: string;
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  detail: string;
};

/** Five-year developmental targets — projected, not achieved results. */
export const impactTargets: ImpactMetric[] = [
  {
    id: "smes",
    value: 500,
    suffix: "+",
    label: "SMEs funded",
    detail: "Over the first five years of the lending programme.",
  },
  {
    id: "women",
    value: 60,
    suffix: "%",
    label: "Women-owned target",
    detail: "Share of facilities directed to women-owned businesses.",
  },
  {
    id: "youth",
    value: 40,
    suffix: "%",
    label: "Youth-owned target",
    detail: "Share of facilities directed to businesses owned by under-35s.",
  },
  {
    id: "jobs",
    value: 2500,
    suffix: "+",
    label: "Jobs to be created",
    detail: "Direct jobs supported across funded SME borrowers.",
  },
];

export type ProvinceTarget = {
  province: string;
  smes: number;
  women: number;
  youth: number;
  jobs: number;
  note: string;
};

export const provinceTargets: ProvinceTarget[] = [
  {
    province: "Gauteng",
    smes: 200,
    women: 120,
    youth: 80,
    jobs: 1000,
    note: "Anchor province",
  },
  {
    province: "Eastern Cape",
    smes: 180,
    women: 108,
    youth: 72,
    jobs: 900,
    note: "Rural and infrastructure focus",
  },
  {
    province: "Mpumalanga",
    smes: 80,
    women: 48,
    youth: 32,
    jobs: 400,
    note: "Growth province",
  },
  {
    province: "Other provinces",
    smes: 40,
    women: 24,
    youth: 16,
    jobs: 200,
    note: "Selective origination",
  },
];

export const marketContext = [
  {
    value: 85,
    suffix: "%",
    label: "of SME applications are rejected by formal lenders",
    source: "Finfind, 2025",
  },
  {
    value: 12,
    suffix: "%",
    label: "of South African small businesses have access to formal funding",
    source: "Industry research, 2024",
  },
  {
    value: 13,
    suffix: "%",
    label: "of total bank credit reaches SMEs",
    source: "SA bank lending data, 2024",
  },
  {
    value: 56,
    suffix: "%",
    label: "of South African SMEs struggle with working capital",
    source: "Industry research, 2025",
  },
];

export const impactPriorities = [
  {
    title: "Township and rural contractors",
    description:
      "Subcontractors holding awarded government and municipal contracts who cannot mobilise without working capital and have no property to pledge.",
  },
  {
    title: "Women-owned businesses",
    description:
      "Facilities underwritten on contracts and cash flows rather than balance sheets, addressing the credit gap reported by women-led SMEs.",
  },
  {
    title: "Youth-owned businesses",
    description:
      "Under-35 founders with active contracts but limited credit history, who conventional scoring models systematically exclude.",
  },
  {
    title: "Rural government suppliers",
    description:
      "Businesses supplying cleaning, catering and maintenance services that wait 90 days or more for municipal payment.",
  },
];

export const achievedStatus = {
  heading: "Reported results",
  body:
    "Verified impact figures will be published here as the lending programme is deployed. Actual results are subject to confirmation and independent review.",
  note: "Placeholder – figures pending confirmation",
};
