import { cx } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
};

const sizes = {
  default: "max-w-[1180px]",
  narrow: "max-w-[820px]",
  wide: "max-w-[1360px]",
};

export function Container({
  children,
  className,
  size = "default",
}: ContainerProps) {
  return (
    <div className={cx("mx-auto w-full px-6 md:px-10", sizes[size], className)}>
      {children}
    </div>
  );
}
