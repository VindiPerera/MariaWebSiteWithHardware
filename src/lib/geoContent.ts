import { Coins, Package, Receipt, Send, Wallet, WifiOff, type LucideIcon } from "lucide-react";
import type { Country, Region } from "./geo";
import { site } from "./site";

export type Reason = { title: string; body: string; icon: LucideIcon };

const list = (items: string[]) =>
  items.length <= 1 ? items.join("") : `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;

/** "Los Angeles, San Francisco and San Diego" style list of the first n cities. */
export const cityList = (cities: string[], n = 3) => list(cities.slice(0, n));

export function placeReasons(country: Country, place: string): Reason[] {
  return [
    {
      title: "Keeps billing when the internet drops",
      body: `Every ${place} counter keeps billing, returning and closing shifts fully offline. Data syncs to the cloud when the connection is back.`,
      icon: WifiOff,
    },
    {
      title: `Priced and reported in ${country.currency}`,
      body: `Set your currency symbol (${country.currencySymbol}), decimals and receipt layout so every bill and report matches how ${country.name} customers and accountants read money.`,
      icon: Coins,
    },
    {
      title: `${country.tax.charAt(0).toUpperCase()}${country.tax.slice(1)} ready`,
      body: `Create tax classes for your products and get a tax summary report for ${country.tax} filings, exportable to PDF and Excel.`,
      icon: Receipt,
    },
    {
      title: "Local payment methods",
      body: `Take cash and cards, split a bill across methods, and record ${list(country.payments)} payments with their reference number.`,
      icon: Wallet,
    },
    {
      title: "FIFO stock and supplier control",
      body: "Batch-level cost, low-stock alerts, goods receiving, supplier payables and cheque reminders in one ledger.",
      icon: Package,
    },
    {
      title: "Live alerts & cloud panel",
      body: "See every sale on Telegram and manage reports, products and credit from any browser, wherever you are.",
      icon: Send,
    },
  ];
}

export function countryFaqs(country: Country) {
  return [
    {
      q: `Can I use MariaPoS in ${country.name}?`,
      a: `Yes. MariaPoS is a Windows download, so shops anywhere in ${country.name}, including ${cityList(country.cities, 4)}, can install it and start a free ${site.trialDays}-day trial today.`,
    },
    {
      q: `Does MariaPoS support ${country.currency} and ${country.tax}?`,
      a: `Yes. You set the currency symbol (${country.currencySymbol}) and decimal places, and create tax classes for ${country.tax}. The tax summary report shows tax collected for any period.`,
    },
    {
      q: `Can I record ${list(country.payments.slice(0, 2))} payments?`,
      a: "Yes. Besides cash, MariaPoS records card, bank transfer and cheque payments with reference numbers, supports split payments, and tracks customer credit.",
    },
    {
      q: `How much does a POS system cost in ${country.name}?`,
      a: "MariaPoS is a one-time payment for a 1, 2 or 3-year licence with every feature included. There are no monthly fees, no per-transaction charges and no payment-processor lock-in. See the pricing page for current prices.",
    },
    {
      q: `How do I get support in ${country.name}?`,
      a: `Our team supports customers remotely by WhatsApp, email and phone (${site.phone}). Installation and setup can be done remotely.`,
    },
    {
      q: "Are SMS e-bill receipts available?",
      a: `SMS e-bills are available in Sri Lanka. Contact us to check SMS availability for ${country.name}. Printed receipts, Telegram alerts and every other feature work everywhere.`,
    },
  ];
}

export function regionFaqs(country: Country, region: Region) {
  const place = `${region.name}, ${country.name}`;
  return [
    {
      q: `Is MariaPoS available in ${region.name}?`,
      a: `Yes. Shops in ${cityList(region.cities, 4)} and across ${place} can download MariaPoS and try every feature free for ${site.trialDays} days.`,
    },
    {
      q: `What is the best POS system for small shops in ${region.name}?`,
      a: `The best POS for a ${region.name} shop is fast at the counter, keeps working offline, handles ${country.tax} and local payments like ${country.payments[0]}, and doesn't lock you into monthly fees. MariaPoS is built around exactly those needs.`,
    },
    {
      q: `Does MariaPoS need internet in ${region.cities[0]}?`,
      a: "No. Billing, stock and shifts run fully offline, and data syncs to the cloud panel whenever a connection is available.",
    },
    {
      q: `How much does POS software cost in ${region.name}?`,
      a: "MariaPoS is a single payment for a 1, 2 or 3-year licence with every feature included and no monthly subscription. See the pricing page for current prices.",
    },
  ];
}
