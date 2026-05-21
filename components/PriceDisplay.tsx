"use client";
import { useCurrency } from "@/hooks/useCurrency";

interface Props {
  usd: number;
  className?: string;
  prefix?: string;
  suffix?: string;
}

export default function PriceDisplay({ usd, className, prefix = "From ", suffix = " pp" }: Props) {
  const { rate, symbol, currency, ready } = useCurrency();

  if (!ready) {
    return (
      <span className={className}>
        {prefix}${usd.toLocaleString()}{suffix}
      </span>
    );
  }

  const converted = Math.round((usd * rate) / 10) * 10;
  const formatted = currency === "JPY" || currency === "KRW"
    ? converted.toLocaleString()
    : converted.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 });

  return (
    <span className={className}>
      {prefix}{symbol}{formatted}{suffix}
    </span>
  );
}
