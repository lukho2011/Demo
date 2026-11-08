export const formatZAR = (value: number): string =>
  new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
    maximumFractionDigits: 0,
    currencyDisplay: "symbol",
  })
    .format(Number.isFinite(value) ? value : 0)
    .replace("ZAR", "R");

export const formatNumber = (value: number): string =>
  new Intl.NumberFormat("en-ZA", { maximumFractionDigits: 0 }).format(value);

export const cx = (...values: Array<string | false | null | undefined>) =>
  values.filter(Boolean).join(" ");

export const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);
