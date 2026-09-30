import { FeatureCatalog } from "@/components/features/FeatureCatalog";
import { FeatureSimulator } from "@/components/features/FeatureSimulator";
import { ConnectedSection } from "@/components/features/ConnectedSection";
import { FeatureMatrix } from "@/components/features/FeatureMatrix";
import { TrialCta } from "@/components/sections/TrialCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { featureCategories } from "@/lib/featureCatalog";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "POS Software Features — Billing, FIFO Inventory, Shifts, Reports, SMS & Telegram",
  description:
    "Full list of MariaPoS POS system features for retail stores worldwide: barcode billing, split payments, FIFO batch stock, GRN & supplier cheques, customer credit & loyalty, shift & till control, 13+ reports, SMS e-bills, Telegram alerts and cloud sync.",
  path: "/features",
  keywords: [
    "POS features",
    "POS software with inventory",
    "billing software with stock management",
    "POS with SMS receipts",
    "POS with loyalty points",
    "shift and till management software",
  ],
});

const catalogSchema = {
  "@type": "ItemList",
  name: "MariaPoS feature modules",
  itemListElement: featureCategories.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: c.title,
    description: c.summary,
  })),
};

export default function FeaturesPage() {
  return (
    <main id="top">
      <JsonLd data={[breadcrumbSchema([{ name: "Features", path: "/features" }]), catalogSchema]} />
      <FeatureCatalog />
      <FeatureSimulator />
      <ConnectedSection />
      <FeatureMatrix />
      <TrialCta />
    </main>
  );
}
