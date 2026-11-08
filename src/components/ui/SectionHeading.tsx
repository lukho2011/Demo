import { cx } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
  children?: React.ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className,
  children,
}: SectionHeadingProps) {
  return (
    <div
      className={cx(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <div
          className={cx(
            "eyebrow mb-5",
            tone === "dark" && "text-gold-soft",
            align === "left" && "flex items-center gap-4",
          )}
        >
          {align === "left" && (
            <span className="h-px w-8 bg-current opacity-60" aria-hidden />
          )}
          <span>{eyebrow}</span>
        </div>
      ) : null}
      <h2
        className={cx(
          "text-[1.75rem] leading-[1.15] sm:text-[2.15rem] lg:text-[2.6rem]",
          tone === "dark" && "text-white",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cx(
            "mt-6 text-[1.02rem] leading-[1.75] text-slate-ink",
            tone === "dark" && "text-white/70",
          )}
        >
          {description}
        </p>
      ) : null}
      {children}
    </div>
  );
}
