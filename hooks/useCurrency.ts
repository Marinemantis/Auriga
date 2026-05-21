"use client";
import { useState, useEffect } from "react";

const COUNTRY_CURRENCY: Record<string, string> = {
  GB: "GBP", AU: "AUD", CA: "CAD", NZ: "NZD",
  DE: "EUR", FR: "EUR", IT: "EUR", ES: "EUR", NL: "EUR",
  CH: "CHF", SE: "SEK", NO: "NOK", DK: "DKK",
  AE: "AED", SA: "SAR", QA: "QAR", KW: "KWD",
  IN: "INR", PK: "PKR", BD: "BDT",
  CN: "CNY", JP: "JPY", KR: "KRW", SG: "SGD", HK: "HKD",
  RU: "RUB", BR: "BRL", ZA: "ZAR", MX: "MXN",
};

export interface CurrencyState {
  currency: string;
  rate: number;
  symbol: string;
  ready: boolean;
}

const SYMBOL: Record<string, string> = {
  USD: "$", GBP: "£", EUR: "€", AUD: "A$", CAD: "C$",
  NZD: "NZ$", CHF: "CHF ", SEK: "kr", NOK: "kr", DKK: "kr",
  AED: "AED ", SAR: "SAR ", QAR: "QAR ", KWD: "KWD ",
  INR: "₹", PKR: "₨", CNY: "¥", JPY: "¥", KRW: "₩",
  SGD: "S$", HKD: "HK$", RUB: "₽", BRL: "R$", ZAR: "R",
  MXN: "MX$", BDT: "৳",
};

export function useCurrency(): CurrencyState {
  const [state, setState] = useState<CurrencyState>({
    currency: "USD", rate: 1, symbol: "$", ready: false,
  });

  useEffect(() => {
    let cancelled = false;
    async function detect() {
      try {
        const geo = await fetch("https://ipwho.is/").then(r => r.json());
        const currency = COUNTRY_CURRENCY[geo.country_code] ?? "USD";
        if (currency === "USD") {
          setState({ currency: "USD", rate: 1, symbol: "$", ready: true });
          return;
        }
        const fx = await fetch(
          `https://api.frankfurter.app/latest?from=USD&to=${currency}`
        ).then(r => r.json());
        const rate = fx.rates?.[currency] ?? 1;
        if (!cancelled) {
          setState({ currency, rate, symbol: SYMBOL[currency] ?? currency + " ", ready: true });
        }
      } catch {
        if (!cancelled) setState(s => ({ ...s, ready: true }));
      }
    }
    detect();
    return () => { cancelled = true; };
  }, []);

  return state;
}
