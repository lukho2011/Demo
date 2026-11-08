import Link from "next/link";
import { cx } from "@/lib/utils";

type Variant = "primary" | "outline" | "light" | "quiet";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: Variant;
  className?: string;
  external?: boolean;
  disabled?: boolean;
  "aria-label"?: string;
};

const base =
  "group inline-flex items-center justify-center gap-2.5 px-7 py-4 text-[0.78rem] font-semibold uppercase tracking-[0.14em] transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-gold text-navy hover:bg-[#d4b681] hover:shadow-[0_18px_40px_-22px_rgba(197,164,109,0.9)]",
  outline:
    "border border-navy/25 text-navy hover:border-navy hover:bg-navy hover:text-white",
  light:
    "border border-white/30 text-white hover:border-gold hover:bg-white hover:text-navy",
  quiet:
    "bg-navy text-white hover:bg-navy-800",
};

export function Button({
  children,
  href,
  onClick,
  type = "button",
  variant = "primary",
  className,
  external,
  disabled,
  ...rest
}: ButtonProps) {
  const classes = cx(base, variants[variant], className);

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          {...rest}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
}
