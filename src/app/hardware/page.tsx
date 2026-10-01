import { Metadata } from "next";
import { HardwareCatalogSection } from "@/components/hardware/HardwareCatalogSection";
import { HardwareConfigurator } from "@/components/hardware/HardwareConfigurator";
import { FaqBlock } from "@/components/sections/FaqBlock";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { ShieldCheck, Truck, Wrench, CheckCircle2, Phone, Award } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { site } from "@/lib/site";
import styles from "./HardwarePage.module.css";

export const metadata: Metadata = pageMetadata({
  title: "POS Hardware Store Sri Lanka — Touch Screens, Receipt Printers, Scanners & Cash Drawers",
  description:
    "Explore 21+ official certified POS hardware devices: touch screen POS terminals (Intel i5), Xprinter thermal receipt & label printers, 1D/2D barcode scanners, cash drawers and bill counters. 1-year JAAN warranty and fast islandwide dispatch.",
  path: "/hardware",
  absoluteTitle: true,
  keywords: [
    "POS hardware Sri Lanka",
    "touch POS system price Sri Lanka",
    "thermal receipt printer Colombo",
    "Xprinter Sri Lanka",
    "barcode scanner price",
    "cash drawer Colombo",
    "bill counter machine Sri Lanka",
  ],
});

const hardwareFaqs = [
  {
    q: "Are these hardware devices compatible with MariaPoS?",
    a: "Yes. Every printer, scanner, touch till and cash drawer in our catalog is 100% pre-configured, tested and driver-verified to work seamlessly with MariaPoS Windows software. When you order from us, we pre-install drivers so it is true plug-and-play.",
  },
  {
    q: "How does the warranty work?",
    a: "All POS touch systems, receipt printers, barcode scanners and bill counters include a 1-Year Commercial Warranty provided directly by JAAN Network (PVT) Ltd. We provide immediate technical assistance and replacement parts from our Colombo service centre.",
  },
  {
    q: "Do you deliver across Sri Lanka?",
    a: "Yes. We provide fast islandwide courier and direct delivery across all 25 districts of Sri Lanka, including Colombo, Gampaha, Kandy, Galle, Matara, Kurunegala, Jaffna and Batticaloa. Same-day dispatch is available for in-stock items.",
  },
  {
    q: "Can I connect the cash drawer to the thermal printer?",
    a: "Yes. Our heavy-duty cash drawers (ACC1639) feature an RJ11/RJ12 5-pin printer interface. When connected to any Xprinter thermal receipt printer, the cash drawer automatically pops open whenever a bill is printed in MariaPoS.",
  },
  {
    q: "Can I buy hardware without buying the software?",
    a: "Yes. All hardware items are available for individual purchase. However, when bundled with MariaPoS 1-year, 2-year or 3-year software licenses, you receive exclusive combo package discounts and free remote driver installation.",
  },
  {
    q: "How do I place an order or request an official invoice quotation?",
    a: "Simply click 'Add to Quote' on any device or complete package, then click 'Confirm Order via WhatsApp' to message our Colombo sales desk instantly. You can also call us directly at 076 593 3255 for pro-forma invoices.",
  },
];

export default function HardwarePage() {
  return (
    <main id="top">
      <JsonLd data={breadcrumbSchema([{ name: "Hardware Store", path: "/hardware" }])} />

      {/* Hero Header */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div data-reveal="up" className={styles.heroContent}>
            <span className="eyebrow">
              <ShieldCheck size={14} />
              JAAN Certified POS Hardware
            </span>
            <h1 className={styles.heroTitle}>Official POS Hardware Store for Sri Lankan Retail Counters</h1>
            <p className={styles.heroLead}>
              Elevate your checkout counter with commercial-grade touch terminals, high-speed thermal printers, 1D/2D
              barcode scanners, and heavy-duty cash drawers. Tested and pre-configured for MariaPoS.
            </p>

            <div className={styles.heroBadges}>
              <div className={styles.heroBadge} style={{ borderColor: "rgba(245, 158, 11, 0.4)", background: "rgba(254, 243, 199, 0.6)", color: "#92400e" }}>
                <Award size={16} color="#d97706" />
                <span style={{ fontWeight: 600 }}>Authorized Xprinter Seller</span>
              </div>
              <div className={styles.heroBadge}>
                <Truck size={16} color="var(--red)" />
                <span>Fast Islandwide Delivery</span>
              </div>
              <div className={styles.heroBadge}>
                <ShieldCheck size={16} color="var(--red)" />
                <span>1-Year Direct Warranty</span>
              </div>
              <div className={styles.heroBadge}>
                <Wrench size={16} color="var(--red)" />
                <span>Pre-Configured Drivers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Catalog with filtering & categories */}
      <HardwareCatalogSection showTitle={false} />

      {/* Interactive Configurator */}
      <HardwareConfigurator />

      {/* FAQ */}
      <FaqBlock title="Hardware questions &amp; warranties, answered" faqs={hardwareFaqs} />

      {/* Direct Order CTA */}
      <section className={styles.orderCta}>
        <div className={styles.ctaCard}>
          <div className={styles.ctaText}>
            <h3 className={styles.ctaTitle}>Need a custom quote for multiple branches?</h3>
            <p className={styles.ctaSubtitle}>
              Speak directly with our Colombo hardware engineers. We provide on-site installation, staff training, and
              volume discounts.
            </p>
          </div>
          <div className={styles.ctaButtons}>
            <a href={site.phoneHref} className="btn-primary">
              <Phone size={16} />
              <span>Call: {site.phone}</span>
            </a>
            <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <WhatsAppIcon size={16} />
              <span>WhatsApp Inquiries</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
