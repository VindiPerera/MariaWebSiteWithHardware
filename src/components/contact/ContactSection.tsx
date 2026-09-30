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

const officeFaqs = [
  {
    q: "Can your technicians visit our shop for on-site installation outside Colombo?",
    a: "Yes! We provide island-wide technician deployment across all 25 districts of Sri Lanka (including Kandy, Galle, Kurunegala, Jaffna, and Ratnapura). We set up all touch terminals, receipt printers, barcode scanners, and provide hands-on cashier training right on your counter.",
  },
  {
    q: "Can I bring my own barcodes and test them on your scanners at the Colombo office?",
    a: "Absolutely! We encourage retail and pharmacy owners to bring difficult barcodes, weathered product packaging, or prescription labels to our Colombo Experience Center. You can test 1D laser scanners and 2D CMOS barcode scanners live on real POS screens before making a purchase decision.",
  },
  {
    q: "What warranty and replacement support is provided with MariaPoS hardware?",
    a: "Every POS terminal, thermal printer, cash drawer, and barcode scanner carries a genuine 1 to 2-Year Hardware Warranty backed directly by JAAN Network (PVT) Ltd. If any device encounters an issue, our Colombo technical center provides immediate diagnosis and standby replacement units so your billing never stops.",
  },
  {
    q: "Does MariaPoS support bilingual Sinhala and Tamil receipt printing?",
    a: "Yes! MariaPoS has native Unicode rendering support for Sinhala and Tamil bill headers, item descriptions, and footer notes on certified 80mm thermal receipt printers.",
  },
];

export function ContactSection() {
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
              Colombo Tech Hub Online &bull; Direct Hardware Support Active
            </span>
          </div>

          <h1 className={styles.title}>
            Get in touch with the <span className={styles.highlightText}>MariaPoS</span> engineering team
          </h1>
          <p className={styles.subtitle}>
            Visit our Colombo 03 hardware showroom, speak directly with certified POS specialists, or request an
            on-site counter demo anywhere across Sri Lanka.
          </p>

          <div className={styles.heroStatsBar}>
            <div className={styles.heroStatItem}>
              <span className={styles.heroStatVal}>&lt; 5 mins</span>
              <span className={styles.heroStatLbl}>WhatsApp Response Time</span>
            </div>
            <div className={styles.heroStatDivider} />
            <div className={styles.heroStatItem}>
              <span className={styles.heroStatVal}>25 Districts</span>
              <span className={styles.heroStatLbl}>Island-Wide On-Site Service</span>
            </div>
            <div className={styles.heroStatDivider} />
            <div className={styles.heroStatItem}>
              <span className={styles.heroStatVal}>46 Hudson Rd</span>
              <span className={styles.heroStatLbl}>Colombo 03 Experience Hub</span>
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
              <span className={styles.badgeSuccess}>Fastest Response</span>
            </div>
            <div className={styles.cardBody}>
              <span className={styles.cardTitle}>WhatsApp Instant Chat</span>
              <p className={styles.cardDescription}>
                Send counter photos, receive instant hardware quotations, and get remote screen assistance.
              </p>
              <div className={styles.numberRow}>
                <span className={styles.whatsAppValue}>{site.phone}</span>
                <button
                  type="button"
                  onClick={() => handleCopy(site.phone, "whatsapp")}
                  className={styles.copyBtn}
                  title="Copy number"
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
              <span>Message on WhatsApp</span>
            </a>
          </div>

          {/* Direct Phone Call */}
          <div data-reveal="up" data-delay="80" className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.iconTile}>
                <Phone size={22} />
              </div>
              <span className={styles.badgeNeutral}>Mon - Sat · 8:30am - 7:30pm</span>
            </div>
            <div className={styles.cardBody}>
              <span className={styles.cardTitle}>Direct Phone Call</span>
              <p className={styles.cardDescription}>
                Speak directly with senior POS specialists in Sinhala, Tamil, or English for immediate counter guidance.
              </p>
              <div className={styles.numberRow}>
                <span className={styles.cardValue}>{site.phone}</span>
                <button
                  type="button"
                  onClick={() => handleCopy(site.phone, "phone")}
                  className={styles.copyBtn}
                  title="Copy number"
                >
                  {copiedField === "phone" ? <Check size={14} color="var(--red)" /> : <Copy size={14} />}
                </button>
              </div>
            </div>
            <a href={site.phoneHref} className={styles.cardActionSecondary}>
              <Phone size={15} />
              <span>Call 076 593 3255</span>
            </a>
          </div>

          {/* Official Email */}
          <div data-reveal="up" data-delay="160" className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.iconTile}>
                <Mail size={22} />
              </div>
              <span className={styles.badgeNeutral}>Official &amp; Invoices</span>
            </div>
            <div className={styles.cardBody}>
              <span className={styles.cardTitle}>Sales &amp; Tender Inquiries</span>
              <p className={styles.cardDescription}>
                Request formal pro-forma invoices, corporate multi-branch proposals, and hardware specification sheets.
              </p>
              <div className={styles.numberRow}>
                <span className={styles.emailValue}>{site.email}</span>
                <button
                  type="button"
                  onClick={() => handleCopy(site.email, "email")}
                  className={styles.copyBtn}
                  title="Copy email"
                >
                  {copiedField === "email" ? <Check size={14} color="var(--red)" /> : <Copy size={14} />}
                </button>
              </div>
            </div>
            <a href={site.emailHref} className={styles.cardActionSecondary}>
              <Mail size={15} />
              <span>Compose Email</span>
            </a>
          </div>

          {/* Colombo Head Office */}
          <div data-reveal="up" data-delay="240" className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.iconTile}>
                <MapPin size={22} />
              </div>
              <span className={styles.badgeNeutral}>Showroom &amp; Lounge</span>
            </div>
            <div className={styles.cardBody}>
              <span className={styles.cardTitle}>Colombo Head Office</span>
              <p className={styles.cardDescription}>
                <strong>JAAN Network (PVT) Ltd</strong>
                <br />
                {site.address}
              </p>
              <div className={styles.officeHintRow}>
                <Car size={14} />
                <span>Free client parking available on-site</span>
              </div>
            </div>
            <a href="#location" className={styles.cardActionSecondary}>
              <Navigation size={15} />
              <span>View Map &amp; Directions</span>
            </a>
          </div>
        </div>

        {/* Interactive Office Location & Map Section */}
        <div id="location" data-reveal="up" className={styles.mapShowcaseContainer}>
          <div className={styles.mapShowcaseHeader}>
            <div>
              <div className={styles.pillBadge}>
                <MapPin size={13} color="var(--red)" />
                <span>Interactive Colombo Office Map</span>
              </div>
              <h2 className={styles.mapShowcaseTitle}>Visit our Colombo Experience Center</h2>
              <p className={styles.mapShowcaseSubtitle}>
                Test real touchscreens, thermal printers, barcode scanners, and cash drawers before ordering.
              </p>
            </div>

            <div className={styles.mapControlsBar}>
              <div className={styles.mapModeToggle}>
                <button
                  type="button"
                  onClick={() => setMapMode("m")}
                  className={`${styles.modeBtn} ${mapMode === "m" ? styles.modeBtnActive : ""}`}
                >
                  Roadmap
                </button>
                <button
                  type="button"
                  onClick={() => setMapMode("k")}
                  className={`${styles.modeBtn} ${mapMode === "k" ? styles.modeBtnActive : ""}`}
                >
                  Satellite
                </button>
              </div>

              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener"
                className={styles.mapDirectionsBtn}
              >
                <Navigation size={15} />
                <span>Get Directions</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>

          <div className={styles.mapContentGrid}>
            {/* Interactive Embedded Map View */}
            <div className={styles.mapFrameWrapper}>
              <iframe
                title="MariaPoS Colombo Head Office Location"
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
                    <span>Open in Google Maps</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy("46 Hudson Road, Colombo 00300, Sri Lanka", "address")}
                    className={styles.mapHudBtn}
                  >
                    {copiedField === "address" ? <Check size={13} color="#1faa55" /> : <Copy size={13} />}
                    <span>{copiedField === "address" ? "Copied!" : "Copy Address"}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Office Logistics & Visitor Guide */}
            <div className={styles.officeGuideBox}>
              <div className={styles.guideHeader}>
                <Clock size={18} color="var(--red)" />
                <span className={styles.guideHeading}>Office &amp; Showroom Hours</span>
              </div>

              <div className={styles.scheduleTable}>
                <div className={styles.scheduleRow}>
                  <span className={styles.dayCol}>Monday – Friday</span>
                  <span className={styles.timeCol}>8:30 AM – 7:30 PM</span>
                  <span className={styles.statusColActive}>Open</span>
                </div>
                <div className={styles.scheduleRow}>
                  <span className={styles.dayCol}>Saturday</span>
                  <span className={styles.timeCol}>9:00 AM – 6:00 PM</span>
                  <span className={styles.statusColActive}>Open</span>
                </div>
                <div className={styles.scheduleRow}>
                  <span className={styles.dayCol}>Sunday &amp; Mercantile</span>
                  <span className={styles.timeCol}>On-Call Remote Support</span>
                  <span className={styles.statusColMuted}>On-Call</span>
                </div>
              </div>

              <div className={styles.guidePerks}>
                <div className={styles.guidePerkItem}>
                  <div className={styles.guidePerkIcon}>
                    <Car size={16} />
                  </div>
                  <div>
                    <strong>Free On-Site Visitor Parking</strong>
                    <p>Dedicated parking slots directly at the building entrance for demo visitors.</p>
                  </div>
                </div>

                <div className={styles.guidePerkItem}>
                  <div className={styles.guidePerkIcon}>
                    <Store size={16} />
                  </div>
                  <div>
                    <strong>Live Retail &amp; Pharmacy Hardware Bar</strong>
                    <p>
                      Touch screens, 80mm high-speed thermal printers, and 2D barcode scanners set up for hands-on trial.
                    </p>
                  </div>
                </div>

                <div className={styles.guidePerkItem}>
                  <div className={styles.guidePerkIcon}>
                    <Truck size={16} />
                  </div>
                  <div>
                    <strong>Direct Dispatch Hub to All 25 Districts</strong>
                    <p>Orders confirmed by 2:00 PM are dispatched same-day via express insured island-wide courier.</p>
                  </div>
                </div>
              </div>

              <div className={styles.guideActions}>
                <a href={site.phoneHref} className={styles.guideCallBtn}>
                  <Phone size={15} />
                  <span>Call Colombo Office</span>
                </a>
                <a
                  href={`${site.whatsappHref}?text=Hi%20MariaPoS%2C%20I%20would%20like%20to%20visit%20your%20Colombo%20office%20for%20a%20hardware%20demo.`}
                  target="_blank"
                  rel="noopener"
                  className={styles.guideBookBtn}
                >
                  <CalendarCheck size={15} />
                  <span>Schedule Demo Visit</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Customer FAQ Section */}
        <div data-reveal="up" className={styles.faqSection}>
          <div className={styles.faqHeader}>
            <HelpCircle size={20} color="var(--red)" />
            <h3 className={styles.faqTitle}>Frequently Asked Questions</h3>
            <p className={styles.faqSubtitle}>
              Common questions about visiting our Colombo office and island-wide hardware setup.
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
                    <span className={styles.faqQuestionText}>{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className={`${styles.faqChevron} ${isOpen ? styles.faqChevronRotate : ""}`}
                    />
                  </div>
                  {isOpen && <p className={styles.faqAnswerText}>{faq.a}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
