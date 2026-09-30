import { Showcase } from "@/components/product/Showcase";
import { TrialCta } from "@/components/sections/TrialCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Product Tour — POS Billing Screen, Reports, SMS e-Bills & Hardware",
  description:
    "Take a tour of MariaPoS: the POS billing screen, reports dashboard, SMS e-bills and supported hardware including barcode scanners, thermal receipt printers, cash drawers and touch POS terminals.",
  path: "/product",
  keywords: ["POS software screenshots", "POS hardware compatibility", "touch POS system", "thermal receipt printer POS"],
});

export default function ProductPage() {
  return (
    <main id="top">
      <JsonLd data={breadcrumbSchema([{ name: "Product", path: "/product" }])} />
      <Showcase />
      <TrialCta />
    </main>
  );
}
