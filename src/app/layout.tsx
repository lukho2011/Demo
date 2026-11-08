import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { company } from "@/data/company";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.harbourviewcredit.co.za"),
  title: {
    default: `${company.legalName} — Structured SME Working Capital Finance`,
    template: `%s — ${company.name}`,
  },
  description:
    "Harbourview Credit provides structured working capital finance to South African SMEs — supply chain finance, construction contract finance and receivables purchase.",
  keywords: [
    "SME finance South Africa",
    "working capital finance",
    "supply chain finance",
    "construction contract finance",
    "receivables purchase",
    "invoice finance",
    "Sandton credit provider",
  ],
  openGraph: {
    title: `${company.legalName} — Structured SME Working Capital Finance`,
    description:
      "Bridging the gap between opportunity and working capital for South African SMEs.",
    type: "website",
    locale: "en_ZA",
    siteName: company.name,
  },
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-ZA">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-navy focus:px-5 focus:py-3 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="pt-[77px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
