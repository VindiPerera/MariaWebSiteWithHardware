import { Metadata } from "next";
import { HardwareCatalogSection } from "@/components/hardware/HardwareCatalogSection";
import { HardwareConfigurator } from "@/components/hardware/HardwareConfigurator";
import { FaqBlock } from "@/components/sections/FaqBlock";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { ShieldCheck, Truck, Wrench, CheckCircle2, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { AuthorizedXprinterBadge } from "@/components/common/AuthorizedXprinterBadge";
import { site } from "@/lib/site";
import styles from "./HardwarePage.module.css";
import { T } from "@/lib/i18n";

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
    qSi: "මේ hardware devices MariaPoS එක්ක ගැලපෙනවද?",
    aSi: "ඔව්. අපේ catalog එකේ හැම printer, scanner, touch till සහ cash drawer එකක්ම MariaPoS Windows software එක්ක නිවැරදිව වැඩ කරන්න 100% pre-configure, test සහ driver-verify කරලා තියෙනවා. අපෙන් order කළාම drivers කලින්ම install කරලා එවන නිසා ඇත්තටම plug-and-play.",
    q: "Are these hardware devices compatible with MariaPoS?",
    a: "Yes. Every printer, scanner, touch till and cash drawer in our catalog is 100% pre-configured, tested and driver-verified to work seamlessly with MariaPoS Windows software. When you order from us, we pre-install drivers so it is true plug-and-play.",
  },
  {
    qSi: "Warranty එක වැඩ කරන්නේ කොහොමද?",
    aSi: "සියලුම POS touch systems, receipt printers, barcode scanners සහ bill counters වලට JAAN Network (PVT) Ltd කෙලින්ම දෙන අවුරුදු 1ක Commercial Warranty එකක් තියෙනවා. කොළඹ service centre එකෙන් වහාම technical සහාය සහ replacement parts ලබා දෙනවා.",
    q: "How does the warranty work?",
    a: "All POS touch systems, receipt printers, barcode scanners and bill counters include a 1-Year Commercial Warranty provided directly by JAAN Network (PVT) Ltd. We provide immediate technical assistance and replacement parts from our Colombo service centre.",
  },
  {
    qSi: "ශ්‍රී ලංකාව පුරා deliver කරනවද?",
    aSi: "ඔව්. කොළඹ, ගම්පහ, මහනුවර, ගාල්ල, මාතර, කුරුණෑගල, යාපනය සහ මඩකලපුව ඇතුළු ශ්‍රී ලංකාවේ දිස්ත්‍රික්ක 25ටම ඉක්මන් courier සහ direct delivery සපයනවා. Stock එකේ ඇති items සඳහා එදිනම dispatch කිරීමේ පහසුකමත් තියෙනවා.",
    q: "Do you deliver across Sri Lanka?",
    a: "Yes. We provide fast islandwide courier and direct delivery across all 25 districts of Sri Lanka, including Colombo, Gampaha, Kandy, Galle, Matara, Kurunegala, Jaffna and Batticaloa. Same-day dispatch is available for in-stock items.",
  },
  {
    qSi: "Cash drawer එක thermal printer එකට connect කරන්න පුළුවන්ද?",
    aSi: "පුළුවන්. අපේ heavy-duty cash drawers (ACC1639) වල RJ11/RJ12 5-pin printer interface එකක් තියෙනවා. ඕනෑම Xprinter thermal receipt printer එකකට connect කළාම, MariaPoS එකේ bill එකක් print වෙන හැම වෙලාවකම cash drawer එක automatically open වෙනවා.",
    q: "Can I connect the cash drawer to the thermal printer?",
    a: "Yes. Our heavy-duty cash drawers (ACC1639) feature an RJ11/RJ12 5-pin printer interface. When connected to any Xprinter thermal receipt printer, the cash drawer automatically pops open whenever a bill is printed in MariaPoS.",
  },
  {
    qSi: "Software නොගෙන hardware විතරක් ගන්න පුළුවන්ද?",
    aSi: "පුළුවන්. හැම hardware item එකක්ම වෙන වෙනම මිලදී ගන්න පුළුවන්. නමුත් MariaPoS අවුරුදු 1, 2 හෝ 3 software licence එකත් එක්ක bundle කරද්දී, විශේෂ combo package discounts සහ නොමිලේ remote driver installation ලැබෙනවා.",
    q: "Can I buy hardware without buying the software?",
    a: "Yes. All hardware items are available for individual purchase. However, when bundled with MariaPoS 1-year, 2-year or 3-year software licenses, you receive exclusive combo package discounts and free remote driver installation.",
  },
  {
    qSi: "Order එකක් දාන්නේ හෝ නිල invoice quotation එකක් ඉල්ලන්නේ කොහොමද?",
    aSi: "ඕනෑම device එකක් හෝ සම්පූර්ණ package එකක 'Add to Quote' click කරලා, ඊට පස්සේ 'Confirm Order via WhatsApp' click කර අපේ කොළඹ sales desk එකට එකවරම message කරන්න. Pro-forma invoices සඳහා 076 593 3255 ට කෙලින්ම call කරන්නත් පුළුවන්.",
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
            {/* Featured Official Authorized Seller Trust Pill */}
            <div style={{ marginBottom: "4px" }}>
              <AuthorizedXprinterBadge href="#hardware-catalog" />
            </div>

            <h1 className={styles.heroTitle}><T en="Official POS Hardware Store for Sri Lankan Retail Counters" si="ශ්‍රී ලාංකික Retail Counters සඳහා නිල POS Hardware Store එක" /></h1>
            <p className={styles.heroLead}>
              <T
                en="Elevate your checkout counter with commercial-grade touch terminals, high-speed thermal printers, 1D/2D barcode scanners, and heavy-duty cash drawers. Tested and pre-configured for MariaPoS."
                si="Commercial-grade touch terminals, high-speed thermal printers, 1D/2D barcode scanners සහ heavy-duty cash drawers වලින් ඔබේ checkout counter එක තවත් දියුණු කරන්න. MariaPoS සඳහා test කර pre-configure කරලා."
              />
            </p>

            <div className={styles.heroBadges}>
              <div className={styles.heroBadge}>
                <ShieldCheck size={16} color="var(--red)" />
                <span><T en="JAAN Certified Hardware" si="JAAN Certified Hardware" /></span>
              </div>
              <div className={styles.heroBadge}>
                <Truck size={16} color="var(--red)" />
                <span><T en="Fast Islandwide Delivery" si="මුළු රටටම ඉක්මන් Delivery" /></span>
              </div>
              <div className={styles.heroBadge}>
                <ShieldCheck size={16} color="var(--red)" />
                <span><T en="1-Year Direct Warranty" si="අවුරුදු 1ක Direct Warranty" /></span>
              </div>
              <div className={styles.heroBadge}>
                <Wrench size={16} color="var(--red)" />
                <span><T en="Pre-Configured Drivers" si="Pre-Configured Drivers" /></span>
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
      <FaqBlock title="Hardware questions & warranties, answered" titleSi="Hardware සහ warranty ගැන ප්‍රශ්න වලට පිළිතුරු" faqs={hardwareFaqs} />

      {/* Direct Order CTA */}
      <section className={styles.orderCta}>
        <div className={styles.ctaCard}>
          <div className={styles.ctaText}>
            <h3 className={styles.ctaTitle}><T en="Need a custom quote for multiple branches?" si="Branches කිහිපයක් සඳහා custom quote එකක් ඕනද?" /></h3>
            <p className={styles.ctaSubtitle}>
              <T
                en="Speak directly with our Colombo hardware engineers. We provide on-site installation, staff training, and volume discounts."
                si="අපේ කොළඹ hardware engineers ලා එක්ක කෙලින්ම කතා කරන්න. On-site installation, staff training සහ volume discounts අපි සපයනවා."
              />
            </p>
          </div>
          <div className={styles.ctaButtons}>
            <a href={site.phoneHref} className="btn-primary">
              <Phone size={16} />
              <span><T en="Call" si="අමතන්න" />: {site.phone}</span>
            </a>
            <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <WhatsAppIcon size={16} />
              <span><T en="WhatsApp Inquiries" si="WhatsApp විමසීම්" /></span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
