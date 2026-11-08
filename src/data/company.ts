export const company = {
  name: "Harbourview Credit",
  legalName: "Harbourview Credit (Pty) Ltd",
  shortName: "Harbourview",
  positioning:
    "SME contract and working capital finance intermediary",
  tagline: "Bridging the gap between opportunity and working capital.",
  ncr: {
    label: "Registered credit provider",
    number: "NCRCP 23619",
    act: "National Credit Act, No. 34 of 2005",
  },
  contact: {
    addressLines: [
      "2nd Floor, West Tower",
      "Nelson Mandela Square, Maude Street",
      "Sandton, 2146",
      "Gauteng, South Africa",
    ],
    phone: "+27 76 865 6996",
    phoneHref: "tel:+27768656996",
    email: "info@harbourviewcredit.co.za",
    website: "www.harbourviewcredit.co.za",
    hours: "Monday to Friday, 08:00 – 17:00 (SAST)",
  },
  primaryContact: {
    name: "Khaya Zonke",
    role: "Managing Director",
    email: "khaya@harbourviewcredit.co.za",
  },
  secondaryContact: {
    name: "Lupo Futshane",
    role: "Director",
    email: "lupo@harbourviewcredit.co.za",
  },
  /**
   * Apply-for-funding destination.
   * Harbourview has identified Finfind as its white-label application provider.
   * Integration is pending confirmation, therefore the link is a placeholder
   * and remains configurable by the client.
   */
  applyForFundingUrl: "#apply-for-funding",
  applyForFundingNote:
    "Application integration pending – Finfind white-label confirmation required.",
  demoDisclaimer:
    "Demonstration prototype. No information entered on this site is transmitted, stored or processed.",
  nav: [
    { label: "About", href: "/about" },
    { label: "Financing Solutions", href: "/solutions" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Our Impact", href: "/impact" },
    { label: "Contact", href: "/contact" },
  ],
  leadership: [
    {
      name: "Khaya Zonke",
      role: "Managing Director & Founder",
      focus: "Operations, credit process, technology platforms and institutional growth.",
      summary:
        "An investment professional with experience across banking, infrastructure and private equity, responsible for the credit function, operating model and day-to-day execution of the Harbourview lending programme.",
      credentials: [
        "BCom (Economics and Finance), University of Cape Town",
        "Company Law I & II, University of the Witwatersrand",
        "CFA Certificate",
      ],
      photoNote: "Approved photograph to be supplied",
    },
    {
      name: "Lupo Futshane",
      role: "Director & Founder",
      focus: "Strategy, strategic partnerships, capital raising and institutional growth.",
      summary:
        "A finance and investment professional with more than two decades of experience in development finance, unlisted investment portfolio management and enterprise finance for SMEs across South Africa's public and private sectors.",
      credentials: [
        "BCom (Honours), University of Cape Town",
        "MPhil (Development Finance), University of Cape Town",
      ],
      photoNote: "Approved photograph to be supplied",
    },
  ],
  expertise: [
    {
      title: "Credit assessment",
      description:
        "Every facility is underwritten against the contract, the obligor and the borrower's demonstrated capacity to deliver — not against the borrower's balance sheet alone.",
    },
    {
      title: "Structured security",
      description:
        "Cession of contract proceeds, obligor payment undertakings and ring-fenced collection accounts are structured into every transaction.",
    },
    {
      title: "Regulatory compliance",
      description:
        "Unsecured lending is originated in line with the National Credit Act, with FICA and POPIA controls applied at onboarding and throughout the facility.",
    },
    {
      title: "SME development",
      description:
        "Financing is deliberately directed at township, rural, women-owned and youth-owned businesses that conventional lenders consistently decline.",
    },
  ],
} as const;

export type Company = typeof company;
