import { LandingHero } from "@/components/landing/LandingHero";
import { IndustryCatalog } from "@/components/industries/IndustryCatalog";
import { TrialCta } from "@/components/sections/TrialCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { industries } from "@/lib/industries";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "POS System by Industry — Supermarket, Pharmacy, Hardware, Clothing & More",
  description:
    "MariaPoS POS software for every type of retail shop: supermarkets, grocery, pharmacies, hardware stores, clothing & textile, bookshops, mobile shops, cosmetics, bakeries, wholesalers and spare parts.",
  path: "/industries",
  keywords: industries.map((i) => i.keyword),
});

export default function IndustriesPage() {
  return (
    <main id="top">
      <JsonLd data={breadcrumbSchema([{ name: "Industries", path: "/industries" }])} />
      <LandingHero
        eyebrow="Specialized Retail Engineering"
        title="A POS system tailored for every kind of retail counter"
        intro="MariaPoS includes every feature in a single licence, but each trade operates with distinct workflows. Discover how it accelerates your counter."
        crumbs={[{ name: "Industries", path: "/industries" }]}
      />

      <IndustryCatalog />

      <TrialCta />
    </main>
  );
}
