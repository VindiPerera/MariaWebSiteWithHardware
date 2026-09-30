import { site } from "./site";

export type PlanId = "trial" | "1y" | "2y" | "3y";

/** Licence prices, shared by the pricing page and the sign-up form. */
export const licensePrices: Record<Exclude<PlanId, "trial">, string> = {
  "1y": "$147.00",
  "2y": "$235.20",
  "3y": "$286.65",
};

/** Plans offered at sign-up. IDs must match config/signup.php in the cloud panel. */
export const signupPlans: { id: PlanId; name: string; price: string; note: string }[] = [
  { id: "trial", name: `${site.trialDays}-day free trial`, price: "Free", note: "Full access, no card needed" },
  { id: "1y", name: "1-Year License", price: licensePrices["1y"], note: "Single payment" },
  { id: "2y", name: "2-Year License", price: licensePrices["2y"], note: "Save 20%" },
  { id: "3y", name: "3-Year License", price: licensePrices["3y"], note: "Best value · save 35%" },
];

export const isPlanId = (value: string | null | undefined): value is PlanId =>
  signupPlans.some((p) => p.id === value);
