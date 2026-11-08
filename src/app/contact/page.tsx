import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { EnquiryForm } from "@/components/contact/EnquiryForm";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Speak to Harbourview Credit about working capital finance. Sandton head office, +27 76 865 6996, or send a simulated enquiry through this prototype.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Discuss your funding needs."
        description="Send through the outline of your transaction — the buyer, the contract value and the payment terms — and the credit team will respond with the facility that applies."
        meta={[
          { label: "Head office", value: "Nelson Mandela Square, Sandton" },
          { label: "Telephone", value: company.contact.phone },
          { label: "Email", value: company.contact.email },
        ]}
      />

      <section className="bg-offwhite py-20 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.38fr_0.62fr] lg:gap-16">
            <Reveal>
              <div className="lg:sticky lg:top-28">
                <p className="eyebrow flex items-center gap-4">
                  <span className="h-px w-8 bg-current opacity-60" aria-hidden />
                  Sandton office
                </p>
                <h2 className="mt-6 text-[1.6rem] leading-[1.2]">
                  Direct lines to the team.
                </h2>

                <ul className="mt-8 space-y-6">
                  <li className="flex gap-4">
                    <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center border border-gold/50 text-navy">
                      <MapPin size={16} strokeWidth={1.5} />
                    </span>
                    <div>
                      <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-slate-ink/70">
                        Address
                      </p>
                      <p className="mt-1.5 text-[0.9rem] leading-relaxed text-navy">
                        {company.contact.addressLines.map((line) => (
                          <span key={line} className="block">
                            {line}
                          </span>
                        ))}
                      </p>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center border border-gold/50 text-navy">
                      <Phone size={16} strokeWidth={1.5} />
                    </span>
                    <div>
                      <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-slate-ink/70">
                        Telephone
                      </p>
                      <a
                        href={company.contact.phoneHref}
                        className="mt-1.5 block text-[0.9rem] text-navy transition-colors hover:text-gold"
                      >
                        {company.contact.phone}
                      </a>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center border border-gold/50 text-navy">
                      <Mail size={16} strokeWidth={1.5} />
                    </span>
                    <div>
                      <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-slate-ink/70">
                        Email
                      </p>
                      <a
                        href={`mailto:${company.contact.email}`}
                        className="mt-1.5 block text-[0.9rem] text-navy transition-colors hover:text-gold"
                      >
                        {company.contact.email}
                      </a>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center border border-gold/50 text-navy">
                      <Clock size={16} strokeWidth={1.5} />
                    </span>
                    <div>
                      <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-slate-ink/70">
                        Office hours
                      </p>
                      <p className="mt-1.5 text-[0.9rem] text-navy">
                        {company.contact.hours}
                      </p>
                    </div>
                  </li>
                </ul>

                <div className="mt-10 divide-y divide-navy/10 border-y border-navy/10">
                  {[company.primaryContact, company.secondaryContact].map(
                    (person) => (
                      <div key={person.email} className="py-4">
                        <p className="text-[0.88rem] font-medium text-navy">
                          {person.name}
                        </p>
                        <p className="text-[0.72rem] uppercase tracking-[0.12em] text-slate-ink">
                          {person.role}
                        </p>
                        <a
                          href={`mailto:${person.email}`}
                          className="mt-1 block text-[0.82rem] text-slate-ink transition-colors hover:text-gold"
                        >
                          {person.email}
                        </a>
                      </div>
                    ),
                  )}
                </div>

                <div className="mt-8 border border-navy/12 bg-white p-5">
                  <p className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-gold">
                    Apply for funding
                  </p>
                  <p className="mt-2 text-[0.8rem] leading-relaxed text-slate-ink">
                    {company.applyForFundingNote} Until the integration is live,
                    enquiries are handled directly by the credit team.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <EnquiryForm />
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
