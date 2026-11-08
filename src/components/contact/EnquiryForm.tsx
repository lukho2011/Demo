"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { solutions } from "@/data/solutions";
import { company } from "@/data/company";
import { cx } from "@/lib/utils";

type Fields = {
  name: string;
  business: string;
  email: string;
  phone: string;
  interest: string;
  contractValue: string;
  message: string;
};

const initial: Fields = {
  name: "",
  business: "",
  email: "",
  phone: "",
  interest: solutions[0].id,
  contractValue: "",
  message: "",
};

type Errors = Partial<Record<keyof Fields, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

function validate(values: Fields): Errors {
  const errors: Errors = {};
  if (values.name.trim().length < 2) errors.name = "Please enter your full name.";
  if (values.business.trim().length < 2)
    errors.business = "Please enter your business name.";
  if (!emailPattern.test(values.email.trim()))
    errors.email = "Please enter a valid email address.";
  if (values.message.trim().length < 15)
    errors.message = "Please describe your requirement in at least 15 characters.";
  return errors;
}

const fieldClasses =
  "w-full border border-navy/15 bg-white px-4 py-3 text-[0.9rem] text-ink outline-none transition-colors placeholder:text-slate-ink/60 focus:border-navy";

export function EnquiryForm() {
  const [values, setValues] = useState<Fields>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const update = (key: keyof Fields, value: string) => {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    // Demo mode: nothing is transmitted or persisted.
    window.setTimeout(() => setStatus("success"), 800);
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="border border-navy/12 bg-white p-8 md:p-12"
        role="status"
        aria-live="polite"
      >
        <CheckCircle2 size={30} className="text-gold" />
        <h3 className="mt-6 text-[1.5rem] leading-snug">
          Thank you — your enquiry has been captured in demo mode.
        </h3>
        <p className="mt-4 max-w-lg text-[0.92rem] leading-[1.8] text-slate-ink">
          This prototype does not transmit or store information. In the live
          website, the credit team would respond to{" "}
          <span className="text-navy">{values.email}</span> within one business
          day to discuss the transaction.
        </p>
        <button
          type="button"
          onClick={() => {
            setValues(initial);
            setErrors({});
            setStatus("idle");
          }}
          className="mt-8 inline-flex items-center gap-2 border border-navy/20 px-5 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-navy transition-colors hover:border-navy hover:bg-navy hover:text-white"
        >
          Submit another enquiry
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="border border-navy/12 bg-white p-7 md:p-10"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="name" className="mb-2 block text-[0.72rem] font-medium uppercase tracking-[0.12em] text-slate-ink">
            Full name <span className="text-gold">*</span>
          </label>
          <input
            id="name"
            name="name"
            value={values.name}
            onChange={(event) => update("name", event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={cx(fieldClasses, errors.name && "border-red-500/70")}
            placeholder="Thandi Mokoena"
            autoComplete="name"
          />
          {errors.name ? (
            <p id="name-error" className="mt-1.5 text-[0.72rem] text-red-600">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="business" className="mb-2 block text-[0.72rem] font-medium uppercase tracking-[0.12em] text-slate-ink">
            Business name <span className="text-gold">*</span>
          </label>
          <input
            id="business"
            name="business"
            value={values.business}
            onChange={(event) => update("business", event.target.value)}
            aria-invalid={Boolean(errors.business)}
            aria-describedby={errors.business ? "business-error" : undefined}
            className={cx(fieldClasses, errors.business && "border-red-500/70")}
            placeholder="Mokoena Construction CC"
            autoComplete="organization"
          />
          {errors.business ? (
            <p id="business-error" className="mt-1.5 text-[0.72rem] text-red-600">
              {errors.business}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-[0.72rem] font-medium uppercase tracking-[0.12em] text-slate-ink">
            Email address <span className="text-gold">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={(event) => update("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={cx(fieldClasses, errors.email && "border-red-500/70")}
            placeholder="you@company.co.za"
            autoComplete="email"
          />
          {errors.email ? (
            <p id="email-error" className="mt-1.5 text-[0.72rem] text-red-600">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-[0.72rem] font-medium uppercase tracking-[0.12em] text-slate-ink">
            Contact number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={values.phone}
            onChange={(event) => update("phone", event.target.value)}
            className={fieldClasses}
            placeholder="+27 82 000 0000"
            autoComplete="tel"
          />
        </div>

        <div>
          <label htmlFor="interest" className="mb-2 block text-[0.72rem] font-medium uppercase tracking-[0.12em] text-slate-ink">
            Financing interest
          </label>
          <select
            id="interest"
            name="interest"
            value={values.interest}
            onChange={(event) => update("interest", event.target.value)}
            className={fieldClasses}
          >
            {solutions.map((solution) => (
              <option key={solution.id} value={solution.id}>
                {solution.name}
              </option>
            ))}
            <option value="unsure">Not sure yet</option>
          </select>
        </div>

        <div>
          <label htmlFor="contractValue" className="mb-2 block text-[0.72rem] font-medium uppercase tracking-[0.12em] text-slate-ink">
            Contract value
          </label>
          <input
            id="contractValue"
            name="contractValue"
            inputMode="numeric"
            value={values.contractValue}
            onChange={(event) => update("contractValue", event.target.value)}
            className={fieldClasses}
            placeholder="e.g. R 2 500 000"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-2 block text-[0.72rem] font-medium uppercase tracking-[0.12em] text-slate-ink">
            Tell us about the transaction <span className="text-gold">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={values.message}
            onChange={(event) => update("message", event.target.value)}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            className={cx(fieldClasses, "resize-none", errors.message && "border-red-500/70")}
            placeholder="Buyer or employer, contract duration, expected payment terms and the working capital required."
          />
          {errors.message ? (
            <p id="message-error" className="mt-1.5 text-[0.72rem] text-red-600">
              {errors.message}
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-7 flex flex-col gap-5 border-t border-navy/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-[0.7rem] leading-relaxed text-slate-ink">
          {company.demoDisclaimer} Fields marked * are required.
        </p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="group inline-flex items-center justify-center gap-2 bg-gold px-7 py-4 text-[0.74rem] font-semibold uppercase tracking-[0.14em] text-navy transition-colors hover:bg-[#d4b681] disabled:opacity-60"
        >
          {status === "submitting" ? (
            <>
              <Loader2 size={15} className="animate-spin" />
              Sending
            </>
          ) : (
            <>
              Submit enquiry
              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
