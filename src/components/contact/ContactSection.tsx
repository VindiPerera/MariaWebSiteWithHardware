"use client";

import { useState, type FormEvent } from "react";
import { CalendarCheck, CheckCircle2, Mail, MapPin, MessageSquare, Monitor, Phone, Send, Sparkles } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { site } from "@/lib/site";
import styles from "./ContactSection.module.css";

const businessTypes = [
  "Grocery & Supermarket",
  "Pharmacy & Healthcare",
  "Retail & Apparel",
  "Restaurant & Café",
  "Wholesale & Distribution",
  "Hardware & Electrical",
];

export function ContactSection() {
  const [formSent, setFormSent] = useState(false);
  const [businessType, setBusinessType] = useState(businessTypes[0]);
  const [channel, setChannel] = useState<"whatsapp" | "call" | "email">("whatsapp");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const name = data.get("name")?.toString().trim() ?? "";
    const business = data.get("business")?.toString().trim() ?? "";
    const phone = data.get("phone")?.toString().trim() ?? "";
    const email = data.get("email")?.toString().trim() ?? "";

    const channelLabel = channel === "whatsapp" ? "WhatsApp Message" : channel === "call" ? "Phone Call" : "Email";

    const lines = [
      "Hi MariaPoS, I'd like to book a demo.",
      "",
      `Name: ${name}`,
      `Business/Shop: ${business}`,
      `Phone/WhatsApp: ${phone}`,
      `Email: ${email}`,
      `Shop category: ${businessType}`,
      `Preferred callback: ${channelLabel}`,
    ];

    const message = encodeURIComponent(lines.join("\n"));
    window.open(`${site.whatsappHref}?text=${message}`, "_blank", "noopener");

    setFormSent(true);
  };

  return (
    <section className={styles.section}>
      <div aria-hidden="true" className={styles.grid} />
      <div aria-hidden="true" className={styles.glow} />

      <div className={styles.inner}>
        <div data-reveal="up" className="section-intro">
          <span className="eyebrow">Direct Contact &amp; Support</span>
          <h1 className={styles.title}>Talk directly with the MariaPoS team</h1>
          <p className={styles.subtitle}>
            Have questions about barcode scanners, multi-branch cloud sync, or setting up your till? We&apos;re here to help you get running in minutes.
          </p>
        </div>

        {/* Quick Contact Cards */}
        <div className={styles.quickGrid}>
          <a href={site.phoneHref} data-reveal="up" className={`${styles.card} ${styles.linkCard}`}>
            <span className="icon-tile">
              <Phone size={22} />
            </span>
            <span className={styles.cardTitle}>Direct Phone Call</span>
            <span className={styles.cardValue}>{site.phone}</span>
            <span className={styles.cardHint}>Immediate assistance 9am - 8pm</span>
          </a>

          <a
            href={site.whatsappHref}
            target="_blank"
            rel="noopener"
            data-reveal="up"
            data-delay="80"
            className={`${styles.card} ${styles.linkCard} ${styles.whatsAppCard}`}
          >
            <span className={`icon-tile ${styles.whatsAppTile}`}>
              <WhatsAppIcon size={22} />
            </span>
            <span className={styles.cardTitle}>WhatsApp Instant Chat</span>
            <span className={`${styles.cardValue} ${styles.whatsAppValue}`}>{site.phone}</span>
            <span className={styles.cardHint}>Fastest response &amp; screenshot help</span>
          </a>

          <a href={site.emailHref} data-reveal="up" data-delay="160" className={`${styles.card} ${styles.linkCard}`}>
            <span className="icon-tile">
              <Mail size={22} />
            </span>
            <span className={styles.cardTitle}>Official Email</span>
            <span className={styles.cardValue}>{site.email}</span>
            <span className={styles.cardHint}>Invoices, licenses &amp; inquiries</span>
          </a>

          <div data-reveal="up" data-delay="240" className={styles.card}>
            <span className="icon-tile">
              <MapPin size={22} />
            </span>
            <span className={styles.cardTitle}>Head Office</span>
            <span className={styles.cardText}>
              JAAN Network (PVT) Ltd
              <br />
              {site.address}
            </span>
          </div>
        </div>

        {/* Interactive Booking / Callback Form */}
        <div id="demo" data-reveal="up" data-delay="200" className={styles.formContainer}>
          <div className={styles.formCopy}>
            <div className={styles.badge}>
              <Sparkles size={14} color="var(--red)" />
              <span>Free Consultation &amp; Demo</span>
            </div>
            <h2 className={styles.formHeading}>Request a tailored counter walkthrough</h2>
            <p className={styles.formLead}>
              We will show you exactly how FIFO stock deduction, SMS receipts, and shift closing will work for your specific retail or pharmacy shop.
            </p>

            <div className={styles.formPerks}>
              <div className={styles.formPerk}>
                <CheckCircle2 size={16} color="var(--red)" />
                <span>15-minute live screen sharing or phone demo</span>
              </div>
              <div className={styles.formPerk}>
                <CheckCircle2 size={16} color="var(--red)" />
                <span>Advice on barcode printers &amp; scanners</span>
              </div>
              <div className={styles.formPerk}>
                <CheckCircle2 size={16} color="var(--red)" />
                <span>7-day unrestricted trial license file included</span>
              </div>
            </div>
          </div>

          <div className={styles.formWrapper}>
            {formSent ? (
              <div className={styles.thankYouBox}>
                <CheckCircle2 size={42} color="#1faa55" />
                <h3 className={styles.thankTitle}>Demo Request Received!</h3>
                <p className={styles.thankText}>
                  Our senior POS specialist will contact you via your selected channel shortly. Need immediate answers?
                </p>
                <a href={site.whatsappHref} target="_blank" rel="noopener" className={styles.whatsAppJumpBtn}>
                  <WhatsAppIcon size={18} />
                  <span>Chat on WhatsApp Now</span>
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formRow}>
                  <div className={styles.field}>
                    <label className={styles.label}>Your Name</label>
                    <input required type="text" placeholder="e.g. Ruwan Silva" className={styles.input} />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>Business / Shop Name</label>
                    <input required type="text" placeholder="e.g. Silva Super City" className={styles.input} />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.field}>
                    <label className={styles.label}>Phone / WhatsApp Number</label>
                    <input required type="tel" placeholder="e.g. 077 123 4567" className={styles.input} />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>Email Address</label>
                    <input required type="email" placeholder="e.g. ruwan@gmail.com" className={styles.input} />
                  </div>
                </div>

                <div className={styles.field}>
                  <label className={styles.label}>Your Shop Category</label>
                  <select
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value)}
                    className={styles.select}
                  >
                    {businessTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div className={styles.field}>
                  <label className={styles.label}>Preferred Callback Method</label>
                  <div className={styles.channelGroup}>
                    <button
                      type="button"
                      onClick={() => setChannel("whatsapp")}
                      className={`${styles.channelBtn} ${channel === "whatsapp" ? styles.channelActive : ""}`}
                    >
                      WhatsApp Message
                    </button>
                    <button
                      type="button"
                      onClick={() => setChannel("call")}
                      className={`${styles.channelBtn} ${channel === "call" ? styles.channelActive : ""}`}
                    >
                      Phone Call
                    </button>
                    <button
                      type="button"
                      onClick={() => setChannel("email")}
                      className={`${styles.channelBtn} ${channel === "email" ? styles.channelActive : ""}`}
                    >
                      Email
                    </button>
                  </div>
                </div>

                <button type="submit" className={styles.submitBtn}>
                  <Send size={16} />
                  <span>Book Demo / Request Call</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
