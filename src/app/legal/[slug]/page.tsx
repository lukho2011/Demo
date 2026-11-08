import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { company } from "@/data/company";

type LegalDoc = {
  title: string;
  eyebrow: string;
  intro: string;
  sections: { heading: string; body: string }[];
};

const documents: Record<string, LegalDoc> = {
  privacy: {
    title: "Privacy policy",
    eyebrow: "Legal",
    intro:
      "This placeholder sets out how Harbourview Credit intends to handle personal information collected through this website. Final wording is subject to legal review and client approval before publication.",
    sections: [
      {
        heading: "Information collected",
        body: "Contact details and transaction information submitted through the enquiry form. On the live website, information is collected only for the purpose of responding to your enquiry.",
      },
      {
        heading: "Use of information",
        body: "Information is used to assess mandate fit and to respond to enquiries. It is not sold, rented or shared with third parties for marketing purposes.",
      },
      {
        heading: "Retention",
        body: "Information is retained only for as long as required for the purpose for which it was collected, or as required by law, including National Credit Act record-keeping obligations.",
      },
      {
        heading: "Your rights",
        body: "You may request access to, correction of, or deletion of your personal information by contacting the information officer at the address below.",
      },
    ],
  },
  popia: {
    title: "POPIA notice",
    eyebrow: "Legal",
    intro:
      "Harbourview Credit processes personal information in accordance with the Protection of Personal Information Act, 4 of 2013. This notice is a placeholder pending final approval.",
    sections: [
      {
        heading: "Responsible party",
        body: `${company.legalName}, 2nd Floor, West Tower, Nelson Mandela Square, Maude Street, Sandton, 2146.`,
      },
      {
        heading: "Lawful basis",
        body: "Personal information is processed on the basis of consent, contractual necessity and legitimate interest in the assessment of credit applications.",
      },
      {
        heading: "Special personal information",
        body: "No special personal information is requested through this website. Financial information submitted as part of an application is handled under strict confidentiality.",
      },
      {
        heading: "Cross-border transfer",
        body: "No personal information is transferred outside South Africa without an adequate level of protection as required by POPIA.",
      },
    ],
  },
  terms: {
    title: "Terms & conditions",
    eyebrow: "Legal",
    intro:
      "These terms govern use of this website. They are placeholder content and do not constitute a final legal agreement.",
    sections: [
      {
        heading: "No offer of credit",
        body: "Nothing on this website constitutes an offer of credit, a quotation, or a representation that finance will be approved. All facilities are subject to credit assessment, affordability assessment and approval.",
      },
      {
        heading: "Illustrative tools",
        body: "The working capital calculator is an illustration only. It does not produce an approved amount or an eligibility outcome.",
      },
      {
        heading: "Intellectual property",
        body: "All content, branding and design on this website are the property of Harbourview Credit and may not be reproduced without written consent.",
      },
      {
        heading: "Governing law",
        body: "Use of this website is governed by the laws of the Republic of South Africa.",
      },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(documents).map((slug) => ({ slug }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const document = documents[slug];
  if (!document) return { title: "Not found" };
  return {
    title: document.title,
    description: document.intro,
    robots: { index: false, follow: false },
  };
}

export default async function LegalPage({ params }: PageProps) {
  const { slug } = await params;
  const document = documents[slug];
  if (!document) notFound();

  return (
    <>
      <PageHeader
        eyebrow={document.eyebrow}
        title={document.title}
        description={document.intro}
      />

      <section className="bg-offwhite py-20 md:py-24">
        <Container size="narrow">
          <Reveal>
            <p className="border-l-2 border-gold bg-white px-5 py-4 text-[0.78rem] leading-relaxed text-slate-ink">
              Placeholder content for demonstration purposes. Final wording must
              be reviewed and approved by Harbourview Credit and its legal
              advisers before publication.
            </p>
          </Reveal>

          <div className="mt-12 space-y-10">
            {document.sections.map((section, index) => (
              <Reveal key={section.heading} delay={index * 0.05}>
                <article className="border-t border-navy/10 pt-6">
                  <h2 className="text-[1.1rem]">{section.heading}</h2>
                  <p className="mt-3 text-[0.92rem] leading-[1.85] text-slate-ink">
                    {section.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-14 border border-navy/12 bg-white p-6">
              <p className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-gold">
                Information officer
              </p>
              <p className="mt-2 text-[0.86rem] leading-relaxed text-slate-ink">
                {company.legalName} · {company.contact.addressLines.join(", ")} ·{" "}
                {company.contact.email} · {company.contact.phone}
              </p>
              <p className="mt-2 text-[0.72rem] uppercase tracking-[0.12em] text-slate-ink/60">
                {company.ncr.label}: {company.ncr.number}
              </p>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
