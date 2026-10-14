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
    qSi: "මේ hardware MariaPoS එක්ක නිවැරදිව වැඩ කරනවද?",
    aSi: "ඔව්. අපේ catalog එකේ හැම printer, scanner, touch till සහ cash drawer එකක්ම MariaPoS එක්ක වැඩ කරන බව අපි කලින්ම පරීක්ෂා කර ඇත. Order කළාම අවශ්‍ය සියල්ල අපි install කර එවන නිසා, ලැබුණු දවසේම plug in කර bill කරන්න පටන් ගත හැක.",
    q: "Are these hardware devices compatible with MariaPoS?",
    a: "Yes. Every printer, scanner, touch till and cash drawer in our catalog is 100% pre-configured, tested and driver-verified to work seamlessly with MariaPoS Windows software. When you order from us, we pre-install drivers so it is true plug-and-play.",
  },
  {
    qSi: "Warranty එක ලැබෙන්නේ කොහොමද?",
    aSi: "POS touch systems, receipt printers, barcode scanners සහ bill counters සියල්ලටම JAAN Network (PVT) Ltd කෙලින්ම දෙන අවුරුදු 1ක warranty එකක් තියෙනවා. ගැටලුවක් ආවොත් කොළඹ service centre එකෙන් වහාම උදව් සහ අලුත් parts ලැබෙනවා, ඒ නිසා ඔබේ වැඩ නතර වෙන්නේ නැහැ.",
    q: "How does the warranty work?",
    a: "All POS touch systems, receipt printers, barcode scanners and bill counters include a 1-Year Commercial Warranty provided directly by JAAN Network (PVT) Ltd. We provide immediate technical assistance and replacement parts from our Colombo service centre.",
  },
  {
    qSi: "මුළු රටටම deliver කරනවද?",
    aSi: "ඔව්. කොළඹ, ගම්පහ, මහනුවර, ගාල්ල, මාතර, කුරුණෑගල, යාපනය, මඩකලපුව ඇතුළු දිස්ත්‍රික්ක 25ටම courier මගින් ඔබේ දොරටුවටම ඉක්මනින් එවනවා. Stock එකේ ඇති භාණ්ඩ එදිනම යවන්නත් පුළුවන්.",
    q: "Do you deliver across Sri Lanka?",
    a: "Yes. We provide fast islandwide courier and direct delivery across all 25 districts of Sri Lanka, including Colombo, Gampaha, Kandy, Galle, Matara, Kurunegala, Jaffna and Batticaloa. Same-day dispatch is available for in-stock items.",
  },
  {
    qSi: "Cash drawer එක receipt printer එකට සම්බන්ධ කරන්න පුළුවන්ද?",
    aSi: "පුළුවන්. අපේ ශක්තිමත් cash drawers (ACC1639) printer එකට කෙලින්ම සම්බන්ධ වෙනවා. Xprinter receipt printer එකකට සම්බන්ධ කළාම, MariaPoS එකෙන් bill එකක් print වෙන හැම වතාවකම drawer එක ඉබේම විවෘත වෙනවා, ඒ නිසා ඔබට අතින් විවෘත කරන්න අවශ්‍ය නැහැ.",
    q: "Can I connect the cash drawer to the thermal printer?",
    a: "Yes. Our heavy-duty cash drawers (ACC1639) feature an RJ11/RJ12 5-pin printer interface. When connected to any Xprinter thermal receipt printer, the cash drawer automatically pops open whenever a bill is printed in MariaPoS.",
  },
  {
    qSi: "Software නැතුව hardware විතරක් ගන්න පුළුවන්ද?",
    aSi: "පුළුවන්. හැම item එකක්ම වෙන වෙනම මිලදී ගත හැක. නමුත් MariaPoS අවුරුදු 1, 2 හෝ 3 licence එකක් සමඟ එකට ගත්තොත් විශේෂ combo වට්ටම් සහ නොමිලේ remote setup එකත් ලැබෙනවා.",
    q: "Can I buy hardware without buying the software?",
    a: "Yes. All hardware items are available for individual purchase. However, when bundled with MariaPoS 1-year, 2-year or 3-year software licenses, you receive exclusive combo package discounts and free remote driver installation.",
  },
  {
    qSi: "Order කරන්නේ හෝ quotation එකක් ගන්නේ කොහොමද?",
    aSi: "ඔබට අවශ්‍ය device එක හෝ package එකේ 'Quote එකට එකතු කරන්න' ඔබන්න, ඊට පස්සේ 'WhatsApp එකෙන් Order එක තහවුරු කරන්න' ඔබන්න. එවිට අපේ කොළඹ sales team එකට කෙලින්ම message එකක් යනවා. Invoice එකක් අවශ්‍ය නම් 076 593 3255 ට කතා කරන්නත් පුළුවන්.",
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

            <h1 className={styles.heroTitle}><T en="Official POS Hardware Store for Sri Lankan Retail Counters" si="ශ්‍රී ලංකාවේ වෙළඳසැල් සඳහා විශ්වාසදායක POS Hardware" /></h1>
            <p className={styles.heroLead}>
              <T
                en="Elevate your checkout counter with commercial-grade touch terminals, high-speed thermal printers, 1D/2D barcode scanners, and heavy-duty cash drawers. Tested and pre-configured for MariaPoS."
                si="වේගවත් checkout එකකට අවශ්‍ය touch screen, receipt printer, barcode scanner සහ cash drawer එකම තැනකින්. හැම item එකක්ම MariaPoS සමඟ වැඩ කරන බව කලින්ම පරීක්ෂා කර ඇති නිසා, ලැබුණු දවසේම පාවිච්චි කරන්න පුළුවන්."
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
      <FaqBlock title="Hardware questions & warranties, answered" titleSi="Hardware සහ warranty ගැන ඔබේ ප්‍රශ්න" faqs={hardwareFaqs} />

      {/* Direct Order CTA */}
      <section className={styles.orderCta}>
        <div className={styles.ctaCard}>
          <div className={styles.ctaText}>
            <h3 className={styles.ctaTitle}><T en="Need a custom quote for multiple branches?" si="ශාඛා කිහිපයකට එකවර quote එකක් අවශ්‍යද?" /></h3>
            <p className={styles.ctaSubtitle}>
              <T
                en="Speak directly with our Colombo hardware engineers. We provide on-site installation, staff training, and volume discounts."
                si="අපේ කොළඹ hardware engineers සමඟ කෙලින්ම කතා කරන්න. ඔබේ වෙළඳසැලටම ඇවිත් install කිරීම, කාර්ය මණ්ඩලයට පුහුණුව සහ වැඩි ප්‍රමාණයකට වට්ටම් අපි ලබා දෙනවා."
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
