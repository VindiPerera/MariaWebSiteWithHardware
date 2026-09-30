import { ContactSection } from "@/components/contact/ContactSection";
import { TrialCta } from "@/components/sections/TrialCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact MariaPoS — POS System Sales & Global Support",
  description:
    "Contact the MariaPoS team at JAAN Network. Call or WhatsApp 076 593 3255 for a live POS demo, pricing, hardware advice and 24/7 technical support.",
  path: "/contact",
  absoluteTitle: true,
  keywords: ["POS system support", "POS software demo", "contact POS company", "POS technical support"],
});

export default function ContactPage() {
  return (
    <main id="top">
      <JsonLd data={breadcrumbSchema([{ name: "Contact", path: "/contact" }])} />
      <ContactSection />
      <TrialCta />
    </main>
  );
}
