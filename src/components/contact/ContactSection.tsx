"use client";

import { useState } from "react";
import {
  CalendarCheck,
  Check,
  ChevronDown,
  Clock,
  Copy,
  ExternalLink,
  HelpCircle,
  Mail,
  MapPin,
  Navigation,
  Phone,
  Store,
  Truck,
  Car,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { site } from "@/lib/site";
import styles from "./ContactSection.module.css";
import { useLang } from "@/lib/i18n";

const officeFaqs = [
  {
    qSi: "කොළඹින් පිටත ඇති මගේ වෙළඳසැලට ඇවිත් install කරන්න ඔබේ technicians ලාට පුළුවන්ද?",
    aSi: "ඔව්! දිස්ත්‍රික්ක 25ටම (මහනුවර, ගාල්ල, කුරුණෑගල, යාපනය, රත්නපුර ඇතුළුව) අපේ technicians ඔබේ වෙළඳසැලටම ඇවිත්, touch screen, printer, scanner සියල්ල set up කර, ඔබේ cashier ලාට counter එකේදීම පුහුණුව දෙනවා.",
    q: "Can your technicians visit our shop for on-site installation outside Colombo?",
    a: "Yes! We provide island-wide technician deployment across all 25 districts of Sri Lanka (including Kandy, Galle, Kurunegala, Jaffna, and Ratnapura). We set up all touch terminals, receipt printers, barcode scanners, and provide hands-on cashier training right on your counter.",
  },
  {
    qSi: "මගේම barcodes අරන් ඇවිත් කොළඹ කාර්යාලයේ ඔබේ scanners වලින් test කරන්න පුළුවන්ද?",
    aSi: "ඇත්තෙන්ම! කියවීමට අමාරු barcodes, ගෙවී ගිය packaging හෝ prescription labels ගෙනැවිත්, මිලදී ගැනීමට පෙර සැබෑ POS screens වල අපේ scanners වලින් අත්හදා බලන්න. හරි scanner එක තෝරාගන්න ඒක ඔබට උදව් වෙනවා.",
    q: "Can I bring my own barcodes and test them on your scanners at the Colombo office?",
    a: "Absolutely! We encourage retail and pharmacy owners to bring difficult barcodes, weathered product packaging, or prescription labels to our Colombo office. You can test 1D laser scanners and 2D CMOS barcode scanners live on real POS screens before making a purchase decision.",
  },
  {
    qSi: "Hardware සමඟ ලැබෙන warranty සහ replacement support මොනවාද?",
    aSi: "හැම POS terminal, printer, cash drawer සහ scanner එකකටම JAAN Network (PVT) Ltd විසින් කෙලින්ම අවුරුදු 1 සිට 2ක warranty එකක් දෙනවා. ගැටලුවක් ආවොත් කොළඹ technical center එකෙන් වහාම පරීක්ෂා කර, අවශ්‍ය නම් තාවකාලික replacement එකක් දෙනවා, ඒ නිසා ඔබේ billing නතර වෙන්නේ නැහැ.",
    q: "What warranty and replacement support is provided with MariaPoS hardware?",
    a: "Every POS terminal, thermal printer, cash drawer, and barcode scanner carries a genuine 1 to 2-Year Hardware Warranty backed directly by JAAN Network (PVT) Ltd. If any device encounters an issue, our Colombo technical center provides immediate diagnosis and standby replacement units so your billing never stops.",
  },
  {
    qSi: "Bill එක සිංහල සහ දෙමළෙන් print කරන්න පුළුවන්ද?",
    aSi: "ඔව්! Certified 80mm thermal printers වල ඔබේ bill එකේ header, item නම් සහ footer සිංහල සහ දෙමළෙන් print කරන්න MariaPoS එකට පුළුවන්.",
    q: "Does MariaPoS support bilingual Sinhala and Tamil receipt printing?",
    a: "Yes! MariaPoS has native Unicode rendering support for Sinhala and Tamil bill headers, item descriptions, and footer notes on certified 80mm thermal receipt printers.",
  },
];

export function ContactSection() {
  const { t, lang } = useLang();
  const [mapMode, setMapMode] = useState<"m" | "k">("m"); // m = standard roadmap, k = satellite
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2200);
  };

  const mapEmbedUrl = `https://maps.google.com/maps?q=46%20Hudson%20Road,%20Colombo%2000300,%20Sri%20Lanka&t=${mapMode}&z=16&ie=UTF8&iwloc=&output=embed`;
  const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=46+Hudson+Road,+Colombo+00300,+Sri+Lanka`;
  const googleMapsViewUrl = `https://www.google.com/maps/search/?api=1&query=46+Hudson+Road+Colombo+00300+Sri+Lanka`;

  return (
    <section className={styles.section}>
      <div aria-hidden="true" className={styles.grid} />
      <div aria-hidden="true" className={styles.glow} />
      <div aria-hidden="true" className={styles.glowSecondary} />

      <div className={styles.inner}>
        {/* Page Hero Header */}
        <div data-reveal="up" className={styles.heroIntro}>
          <div className={styles.liveBeacon}>
            <span className={styles.beaconDot}>
              <span className={styles.beaconPing} />
            </span>
            <span className={styles.beaconText}>
              {t("Colombo Office Online • Direct Hardware Support Active", "කොළඹ Office Online • Direct Hardware Support Active")}
            </span>
          </div>

          <h1 className={styles.title}>
            {lang === "ta" ? (
              <>
                <span className={styles.highlightText}>MariaPoS</span> தொழில்நுட்பக் குழுவைத் தொடர்பு கொள்ளுங்கள்
              </>
            ) : lang === "si" ? (
              <>
                <span className={styles.highlightText}>MariaPoS</span> engineering team එකට කතා කරන්න
              </>
            ) : (
              <>
                Get in touch with the <span className={styles.highlightText}>MariaPoS</span> engineering team
              </>
            )}
          </h1>
          <p className={styles.subtitle}>
            {t(
              "Visit our Colombo 03 hardware showroom, speak directly with certified POS specialists, or request an on-site counter demo anywhere across Sri Lanka.",
              "කොළඹ 03 හි අපේ hardware showroom එකට එන්න, POS විශේෂඥයන් සමඟ කෙලින්ම කතා කරන්න, නැත්නම් ශ්‍රී ලංකාවේ ඕනෑම තැනක ඔබේ counter එකටම ඇවිත් demo එකක් කරන්න ඉල්ලන්න.",
            )}
          </p>

          <div className={styles.heroStatsBar}>
            <div className={styles.heroStatItem}>
              <span className={styles.heroStatVal}>{t("< 5 mins", "< විනාඩි 5")}</span>
              <span className={styles.heroStatLbl}>{t("WhatsApp Response Time", "WhatsApp පිළිතුරු දෙන කාලය")}</span>
            </div>
            <div className={styles.heroStatDivider} />
            <div className={styles.heroStatItem}>
              <span className={styles.heroStatVal}>{t("25 Districts", "දිස්ත්‍රික්ක 25ම")}</span>
              <span className={styles.heroStatLbl}>{t("Island-Wide On-Site Service", "මුළු රටටම On-Site Service")}</span>
            </div>
            <div className={styles.heroStatDivider} />
            <div className={styles.heroStatItem}>
              <span className={styles.heroStatVal}>46 Hudson Rd</span>
              <span className={styles.heroStatLbl}>{t("Colombo 03 Head Office", "කොළඹ 03 ප්‍රධාන කාර්යාලය")}</span>
            </div>
          </div>
        </div>

        {/* 4 Interactive Contact Channels Matrix */}
        <div className={styles.quickGrid}>
          {/* WhatsApp Card */}
          <div data-reveal="up" className={`${styles.card} ${styles.whatsAppCard}`}>
            <div className={styles.cardHeader}>
              <div className={`${styles.iconTile} ${styles.whatsAppTile}`}>
                <WhatsAppIcon size={24} />
              </div>
              <span className={styles.badgeSuccess}>{t("Fastest Response", "වේගවත්ම පිළිතුර")}</span>
            </div>
            <div className={styles.cardBody}>
              <span className={styles.cardTitle}>{t("WhatsApp Instant Chat", "WhatsApp Instant Chat")}</span>
              <p className={styles.cardDescription}>
                {t("Send counter photos, receive instant hardware quotations, and get remote screen assistance.", "Counter එකේ photos යවන්න, hardware quotation එකක් වහාම ලබාගන්න, අවශ්‍ය නම් remote ලෙස screen එකේ උදව් ලබාගන්න.")}
              </p>
              <div className={styles.numberRow}>
                <span className={styles.whatsAppValue}>{site.phone}</span>
                <button
                  type="button"
                  onClick={() => handleCopy(site.phone, "whatsapp")}
                  className={styles.copyBtn}
                  title={t("Copy number", "Number එක copy කරන්න")}
                >
                  {copiedField === "whatsapp" ? <Check size={14} color="#1faa55" /> : <Copy size={14} />}
                </button>
              </div>
            </div>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener"
              className={styles.cardActionPrimaryWhatsApp}
            >
              <WhatsAppIcon size={16} />
              <span>{t("Message on WhatsApp", "WhatsApp එකෙන් message කරන්න")}</span>
            </a>
          </div>

          {/* Direct Phone Call */}
          <div data-reveal="up" data-delay="80" className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.iconTile}>
                <Phone size={22} />
              </div>
              <span className={styles.badgeNeutral}>{t("Mon - Sat · 8:30am - 7:30pm", "සඳු - සෙන · පෙ.ව. 8:30 - ප.ව. 7:30")}</span>
            </div>
            <div className={styles.cardBody}>
              <span className={styles.cardTitle}>{t("Direct Phone Call", "කෙලින්ම Phone Call එකක්")}</span>
              <p className={styles.cardDescription}>
                {t("Speak directly with senior POS specialists in Sinhala, Tamil, or English for immediate counter guidance.", "ඔබේ counter එක ගැන වහාම මඟ පෙන්වීමක් ලබාගන්න. සිංහල, දෙමළ හෝ English වලින් POS විශේෂඥයන් සමඟ කෙලින්ම කතා කරන්න.")}
              </p>
              <div className={styles.numberRow}>
                <span className={styles.cardValue}>{site.phone}</span>
                <button
                  type="button"
                  onClick={() => handleCopy(site.phone, "phone")}
                  className={styles.copyBtn}
                  title={t("Copy number", "Number එක copy කරන්න")}
                >
                  {copiedField === "phone" ? <Check size={14} color="var(--red)" /> : <Copy size={14} />}
                </button>
              </div>
            </div>
            <a href={site.phoneHref} className={styles.cardActionSecondary}>
              <Phone size={15} />
              <span>{t("Call 076 593 3255", "076 593 3255 ට අමතන්න")}</span>
            </a>
          </div>

          {/* Official Email */}
          <div data-reveal="up" data-delay="160" className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.iconTile}>
                <Mail size={22} />
              </div>
              <span className={styles.badgeNeutral}>{t("Official & Invoices", "නිල සහ Invoices")}</span>
            </div>
            <div className={styles.cardBody}>
              <span className={styles.cardTitle}>{t("Sales & Tender Inquiries", "Sales සහ Tender විමසීම්")}</span>
              <p className={styles.cardDescription}>
                {t("Request formal pro-forma invoices, corporate multi-branch proposals, and hardware specification sheets.", "නිල quotation, ශාඛා කිහිපයකට proposals සහ hardware විස්තර (specification sheets) ඉල්ලන්න.")}
              </p>
              <div className={styles.numberRow}>
                <span className={styles.emailValue}>{site.email}</span>
                <button
                  type="button"
                  onClick={() => handleCopy(site.email, "email")}
                  className={styles.copyBtn}
                  title={t("Copy email", "Email එක copy කරන්න")}
                >
                  {copiedField === "email" ? <Check size={14} color="var(--red)" /> : <Copy size={14} />}
                </button>
              </div>
            </div>
            <a href={site.emailHref} className={styles.cardActionSecondary}>
              <Mail size={15} />
              <span>{t("Compose Email", "Email එකක් ලියන්න")}</span>
            </a>
          </div>

          {/* Colombo Head Office */}
          <div data-reveal="up" data-delay="240" className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.iconTile}>
                <MapPin size={22} />
              </div>
              <span className={styles.badgeNeutral}>{t("Showroom & Lounge", "Showroom සහ Lounge")}</span>
            </div>
            <div className={styles.cardBody}>
              <span className={styles.cardTitle}>{t("Colombo Head Office", "කොළඹ ප්‍රධාන කාර්යාලය")}</span>
              <p className={styles.cardDescription}>
                <strong>JAAN Network (PVT) Ltd</strong>
                <br />
                {site.address}
              </p>
              <div className={styles.officeHintRow}>
                <Car size={14} />
                <span>{t("Free client parking available on-site", "මෙහිම නොමිලේ client parking තියෙනවා")}</span>
              </div>
            </div>
            <a href="#location" className={styles.cardActionSecondary}>
              <Navigation size={15} />
              <span>{t("View Map & Directions", "Map සහ Directions බලන්න")}</span>
            </a>
          </div>
        </div>

        {/* Interactive Office Location & Map Section */}
        <div id="location" data-reveal="up" className={styles.mapShowcaseContainer}>
          <div className={styles.mapShowcaseHeader}>
            <div>
              <div className={styles.pillBadge}>
                <MapPin size={13} color="var(--red)" />
                <span>{t("Interactive Colombo Office Map", "Interactive කොළඹ කාර්යාල Map එක")}</span>
              </div>
              <h2 className={styles.mapShowcaseTitle}>{t("Visit our Colombo Office", "අපේ කොළඹ කාර්යාලයට එන්න")}</h2>
              <p className={styles.mapShowcaseSubtitle}>
                {t("Test real touchscreens, thermal printers, barcode scanners, and cash drawers before ordering.", "Order කරන්න කලින් සැබෑ touchscreens, printers, scanners සහ cash drawers අතට අරන් බලන්න.")}
              </p>
            </div>

            <div className={styles.mapControlsBar}>
              <div className={styles.mapModeToggle}>
                <button
                  type="button"
                  onClick={() => setMapMode("m")}
                  className={`${styles.modeBtn} ${mapMode === "m" ? styles.modeBtnActive : ""}`}
                >
                  {t("Roadmap", "Roadmap")}
                </button>
                <button
                  type="button"
                  onClick={() => setMapMode("k")}
                  className={`${styles.modeBtn} ${mapMode === "k" ? styles.modeBtnActive : ""}`}
                >
                  {t("Satellite", "Satellite")}
                </button>
              </div>

              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener"
                className={styles.mapDirectionsBtn}
              >
                <Navigation size={15} />
                <span>{t("Get Directions", "Directions ගන්න")}</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>

          <div className={styles.mapContentGrid}>
            {/* Interactive Embedded Map View */}
            <div className={styles.mapFrameWrapper}>
              <iframe
                title={t("MariaPoS Colombo Head Office Location", "MariaPoS කොළඹ ප්‍රධාන කාර්යාලයේ පිහිටීම")}
                src={mapEmbedUrl}
                className={styles.mapIframe}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Map Floating HUD Overlay */}
              <div className={styles.mapOverlayCard}>
                <div className={styles.mapPinBadge}>
                  <span className={styles.pulsingPin}>
                    <MapPin size={16} />
                  </span>
                  <div>
                    <strong>JAAN Network (PVT) Ltd</strong>
                    <p>46 Hudson Road, Colombo 00300, Sri Lanka</p>
                  </div>
                </div>

                <div className={styles.mapQuickActions}>
                  <a
                    href={googleMapsViewUrl}
                    target="_blank"
                    rel="noopener"
                    className={styles.mapHudLink}
                  >
                    <ExternalLink size={13} />
                    <span>{t("Open in Google Maps", "Google Maps වල open කරන්න")}</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy("46 Hudson Road, Colombo 00300, Sri Lanka", "address")}
                    className={styles.mapHudBtn}
                  >
                    {copiedField === "address" ? <Check size={13} color="#1faa55" /> : <Copy size={13} />}
                    <span>{copiedField === "address" ? t("Copied!", "Copy වුණා!") : t("Copy Address", "Address එක Copy කරන්න")}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Office Logistics & Visitor Guide */}
            <div className={styles.officeGuideBox}>
              <div className={styles.guideHeader}>
                <Clock size={18} color="var(--red)" />
                <span className={styles.guideHeading}>{t("Office & Showroom Hours", "කාර්යාලයේ සහ Showroom එකේ වේලාවන්")}</span>
              </div>

              <div className={styles.scheduleTable}>
                <div className={styles.scheduleRow}>
                  <span className={styles.dayCol}>{t("Monday – Friday", "සඳුදා – සිකුරාදා")}</span>
                  <span className={styles.timeCol}>{t("8:30 AM – 7:30 PM", "පෙ.ව. 8:30 – ප.ව. 7:30")}</span>
                  <span className={styles.statusColActive}>{t("Open", "විවෘතයි")}</span>
                </div>
                <div className={styles.scheduleRow}>
                  <span className={styles.dayCol}>{t("Saturday", "සෙනසුරාදා")}</span>
                  <span className={styles.timeCol}>{t("9:00 AM – 6:00 PM", "පෙ.ව. 9:00 – ප.ව. 6:00")}</span>
                  <span className={styles.statusColActive}>{t("Open", "විවෘතයි")}</span>
                </div>
                <div className={styles.scheduleRow}>
                  <span className={styles.dayCol}>{t("Sunday & Mercantile", "ඉරිදා සහ වාණිජ නිවාඩු")}</span>
                  <span className={styles.timeCol}>{t("On-Call Remote Support", "On-Call Remote Support")}</span>
                  <span className={styles.statusColMuted}>{t("On-Call", "On-Call")}</span>
                </div>
              </div>

              <div className={styles.guidePerks}>
                <div className={styles.guidePerkItem}>
                  <div className={styles.guidePerkIcon}>
                    <Car size={16} />
                  </div>
                  <div>
                    <strong>{t("Free On-Site Visitor Parking", "නොමිලේ On-Site Visitor Parking")}</strong>
                    <p>{t("Dedicated parking slots directly at the building entrance for demo visitors.", "Demo බලන්න එන අයට, ගොඩනැගිල්ලේ දොරටුවටම ආසන්නව වෙන් කළ parking ස්ථාන.")}</p>
                  </div>
                </div>

                <div className={styles.guidePerkItem}>
                  <div className={styles.guidePerkIcon}>
                    <Store size={16} />
                  </div>
                  <div>
                    <strong>{t("Live Retail & Pharmacy Hardware Bar", "Live Retail සහ Pharmacy Hardware Bar")}</strong>
                    <p>
                      {t(
                        "Touch screens, 80mm high-speed thermal printers, and 2D barcode scanners set up for hands-on trial.",
                        "Touch screens, 80mm thermal printers සහ 2D barcode scanners ඔබටම අත්හදා බලන්න set up කර ඇත.",
                      )}
                    </p>
                  </div>
                </div>

                <div className={styles.guidePerkItem}>
                  <div className={styles.guidePerkIcon}>
                    <Truck size={16} />
                  </div>
                  <div>
                    <strong>{t("Direct Dispatch to All 25 Districts", "දිස්ත්‍රික්ක 25ටම Direct Dispatch")}</strong>
                    <p>{t("Orders confirmed by 2:00 PM are dispatched same-day via express insured island-wide courier.", "ප.ව. 2:00ට පෙර තහවුරු කළ orders එදිනම, ආරක්ෂිත express courier එකෙන් මුළු රටටම යවනවා.")}</p>
                  </div>
                </div>
              </div>

              <div className={styles.guideActions}>
                <a href={site.phoneHref} className={styles.guideCallBtn}>
                  <Phone size={15} />
                  <span>{t("Call Colombo Office", "කොළඹ කාර්යාලයට අමතන්න")}</span>
                </a>
                <a
                  href={`${site.whatsappHref}?text=Hi%20MariaPoS%2C%20I%20would%20like%20to%20visit%20your%20Colombo%20office%20for%20a%20hardware%20demo.`}
                  target="_blank"
                  rel="noopener"
                  className={styles.guideBookBtn}
                >
                  <CalendarCheck size={15} />
                  <span>{t("Schedule Demo Visit", "Demo Visit එකක් schedule කරන්න")}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Customer FAQ Section */}
        <div data-reveal="up" className={styles.faqSection}>
          <div className={styles.faqHeader}>
            <HelpCircle size={20} color="var(--red)" />
            <h3 className={styles.faqTitle}>{t("Frequently Asked Questions", "නිතර අසන ප්‍රශ්න")}</h3>
            <p className={styles.faqSubtitle}>
              {t("Common questions about visiting our Colombo office and island-wide hardware setup.", "අපේ කොළඹ කාර්යාලයට පැමිණීම සහ මුළු රටටම hardware setup කිරීම ගැන නිතර අසන ප්‍රශ්න.")}
            </p>
          </div>

          <div className={styles.faqList}>
            {officeFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.q}
                  className={`${styles.faqCard} ${isOpen ? styles.faqCardOpen : ""}`}
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                >
                  <div className={styles.faqQuestionRow}>
                    <span className={styles.faqQuestionText}>{t(faq.q, faq.qSi)}</span>
                    <ChevronDown
                      size={18}
                      className={`${styles.faqChevron} ${isOpen ? styles.faqChevronRotate : ""}`}
                    />
                  </div>
                  {isOpen && <p className={styles.faqAnswerText}>{t(faq.a, faq.aSi)}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
