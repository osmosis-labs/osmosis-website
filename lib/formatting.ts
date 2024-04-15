export function format(
  variant: "price" | "rate",
  value: number = 0,
  additionalOptions?: Intl.NumberFormatOptions,
) {
  const priceOps: Intl.NumberFormatOptions = {
    style: "currency",
    currency: "USD",
  };

  const formatter = Intl.NumberFormat("en-US", {
    maximumFractionDigits: 3,
    signDisplay: "never",
    ...(variant === "price" && priceOps),
    ...additionalOptions,
  });

  return `${formatter.format(value)}${variant === "rate" ? "%" : ""}`;
}
