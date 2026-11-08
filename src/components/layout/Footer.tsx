import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { company } from "@/data/company";
import { solutions } from "@/data/solutions";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto w-full max-w-[1180px] px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center border border-gold/70 font-display text-[0.95rem] font-semibold text-white">
                H
              </span>
              <span className="leading-none">
                <span className="block font-display text-[0.95rem] font-semibold tracking-[0.16em]">
                  HARBOURVIEW
                </span>
                <span className="mt-1 block text-[0.6rem] font-medium uppercase tracking-[0.34em] text-white/50">
                  Credit
                </span>
              </span>
            </div>
            <p className="mt-6 max-w-xs text-[0.9rem] leading-relaxed text-white/60">
              Structured working capital finance for South African SMEs
              delivering contracts, purchase orders and verified receivables.
            </p>
            <p className="mt-6 text-[0.72rem] uppercase tracking-[0.16em] text-gold">
              {company.ncr.label}
            </p>
            <p className="text-[0.85rem] text-white/70">
              {company.ncr.number} · {company.ncr.act}
            </p>
          </div>

          <div>
            <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-white/40">
              Company
            </h3>
            <ul className="mt-5 space-y-3 text-[0.9rem]">
              {company.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/70 transition-colors hover:text-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-white/40">
              Solutions
            </h3>
            <ul className="mt-5 space-y-3 text-[0.9rem]">
              {solutions.map((solution) => (
                <li key={solution.id}>
                  <Link
                    href={`/solutions#${solution.id}`}
                    className="text-white/70 transition-colors hover:text-gold"
                  >
                    {solution.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-white/40">
              Sandton office
            </h3>
            <ul className="mt-5 space-y-4 text-[0.9rem] text-white/70">
              <li className="flex gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
                <span>
                  {company.contact.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </li>
              <li className="flex gap-3">
                <Phone size={16} className="mt-0.5 shrink-0 text-gold" />
                <a
                  href={company.contact.phoneHref}
                  className="transition-colors hover:text-gold"
                >
                  {company.contact.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail size={16} className="mt-0.5 shrink-0 text-gold" />
                <a
                  href={`mailto:${company.contact.email}`}
                  className="transition-colors hover:text-gold"
                >
                  {company.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-6 text-[0.75rem] text-white/45 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <Link href="/legal/privacy" className="transition-colors hover:text-gold">
                Privacy policy
              </Link>
              <Link href="/legal/popia" className="transition-colors hover:text-gold">
                POPIA notice
              </Link>
              <Link href="/legal/terms" className="transition-colors hover:text-gold">
                Terms &amp; conditions
              </Link>
            </div>
            <p>
              © {year} {company.legalName}. All rights reserved.
            </p>
          </div>
          <p className="mt-6 max-w-3xl text-[0.72rem] leading-relaxed text-white/35">
            {company.demoDisclaimer} Harbourview Credit is a registered credit
            provider; all lending is subject to credit assessment, affordability
            and approval. Nothing on this website constitutes an offer of credit.
          </p>
        </div>
      </div>
    </footer>
  );
}
