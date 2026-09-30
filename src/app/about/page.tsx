import { AboutSection } from "@/components/about/AboutSection";
import { TrialCta } from "@/components/sections/TrialCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About MariaPoS — JAAN Network (PVT) Ltd.",
  description:
    "MariaPoS is built and supported by JAAN Network (PVT) Ltd. in Colombo, Sri Lanka, powered by Thejan Bathiya. Learn who builds and supports the POS system you use every day.",
  path: "/about",
  absoluteTitle: true,
  keywords: ["about MariaPoS", "JAAN Network", "Thejan Bathiya", "POS company Sri Lanka"],
});

export default function AboutPage() {
  return (
    <main id="top">
      <JsonLd data={breadcrumbSchema([{ name: "About", path: "/about" }])} />
      <AboutSection />
      <TrialCta />
    </main>
  );
}
