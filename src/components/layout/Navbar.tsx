"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { company } from "@/data/company";
import { cx } from "@/lib/utils";
import { Container } from "@/components/ui/Container";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="h-[3px] w-full bg-gold" aria-hidden />
      <div
        className={cx(
          "border-b transition-all duration-300",
          scrolled
            ? "border-navy/10 bg-white/95 shadow-[0_10px_40px_-30px_rgba(16,36,58,0.9)] backdrop-blur-md"
            : "border-transparent bg-white/85 backdrop-blur-md",
        )}
      >
        <Container>
          <div className="flex h-[74px] items-center justify-between gap-6">
            <Link
              href="/"
              aria-label={`${company.legalName} home`}
              className="flex items-center gap-3"
            >
              <span className="flex h-9 w-9 items-center justify-center border border-gold/70 font-display text-[0.95rem] font-semibold text-navy">
                H
              </span>
              <span className="leading-none">
                <span className="block font-display text-[0.95rem] font-semibold tracking-[0.16em] text-navy">
                  HARBOURVIEW
                </span>
                <span className="mt-1 block text-[0.6rem] font-medium uppercase tracking-[0.34em] text-slate-ink">
                  Credit
                </span>
              </span>
            </Link>

            <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
              {company.nav.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    data-active={active}
                    aria-current={active ? "page" : undefined}
                    className={cx(
                      "link-underline text-[0.82rem] font-medium tracking-[0.02em] transition-colors",
                      active ? "text-navy" : "text-slate-ink hover:text-navy",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden lg:block">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 border border-navy/20 px-5 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-navy transition-colors hover:border-navy hover:bg-navy hover:text-white"
              >
                Discuss funding
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              className="flex h-10 w-10 items-center justify-center border border-navy/15 text-navy lg:hidden"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </Container>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden"
          >
            <div className="bg-navy px-6 pb-10 pt-8 text-white shadow-2xl">
              <nav aria-label="Mobile" className="flex flex-col">
                {company.nav.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-baseline gap-4 border-b border-white/10 py-4 font-display text-lg text-white"
                  >
                    <span className="text-[0.62rem] font-semibold tracking-[0.2em] text-gold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {item.label}
                  </Link>
                ))}
              </nav>
              <Link
                href="/contact"
                className="mt-8 flex items-center justify-between bg-gold px-5 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-navy"
              >
                Discuss your funding needs
                <ArrowUpRight size={16} />
              </Link>
              <p className="mt-6 text-[0.7rem] leading-relaxed tracking-wide text-white/45">
                {company.ncr.label}: {company.ncr.number}
              </p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
