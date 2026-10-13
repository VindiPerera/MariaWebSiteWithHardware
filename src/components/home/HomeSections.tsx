"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Banknote,
  CalendarCheck,
  ChartColumn,
  Cloud,
  Headset,
  Laptop,
  Layers,
  MessageCircle,
  MessageSquareText,
  MousePointerClick,
  PackageCheck,
  Printer,
  ScanBarcode,
  ShieldCheck,
  Sparkles,
  Truck,
  WifiOff,
  Zap,
} from "lucide-react";
import posBilling from "@/assets/images/pos-billing.png";
import { featuredHero, featuredProducts, formatLkr, hardwareProductCount, industryChips, waGeneral } from "@/lib/shop";
import { site } from "@/lib/site";
import { ProductCard } from "./ProductCard";
import { AuthorizedXprinterBanner } from "./AuthorizedXprinterBanner";
import styles from "./Home.module.css";
import { useLang } from "@/lib/i18n";


export function HomeHero() {
  const { t } = useLang();
  const { terminal, printer, scanner, drawer } = featuredHero;
  return (
    <section className={styles.hero}>
      <div className={styles.heroGrid}>
        <div className={styles.heroCopy}>
          <div className={styles.eyebrow}>{t("POS software + hardware · Sri Lanka", "POS software + hardware · ශ්‍රී ලංකාව")}</div>
          <h1 className={styles.heroTitle}>{t("A complete POS setup for your shop.", "ඔබේ වෙළඳසැලටම සම්පූර්ණ POS setup එකක්.")}</h1>
          <p className={styles.heroLead}>
            {t(
              "MariaPoS billing software with the touch screen, printer, scanner and cash drawer to run it. Order on WhatsApp and pay cash when it arrives.",
              "MariaPoS billing software එක, ඒක දුවන්න touch screen, printer, scanner සහ cash drawer එකත් එක්ක. WhatsApp එකෙන් order කරලා, ලැබුණාම cash ගෙවන්න.",
            )}
          </p>
          <div className={styles.actions}>
            <a href={waGeneral} target="_blank" rel="noopener" className={styles.waButtonShadow}>
              <MessageCircle size={20} />
              {t("Order on WhatsApp", "WhatsApp එකෙන් Order කරන්න")}
            </a>
            <Link href="/pricing" className={styles.greyButton}>
              {t("View plans", "Plans බලන්න")}
              <ArrowRight size={18} />
            </Link>
          </div>
          <div className={styles.chips}>
            <span className={styles.chip}>
              <Banknote size={14} color="var(--red)" />
              {t("Cash on Delivery", "Cash on Delivery")}
            </span>
            <span className={styles.chip}>
              <Truck size={14} color="var(--red)" />
              {t("All 25 districts", "දිස්ත්‍රික්ක 25ම")}
            </span>
            <span className={styles.chip}>
              <ShieldCheck size={14} color="var(--red)" />
              {t("1-Year Warranty", "අවුරුදු 1ක Warranty")}
            </span>
            <span className={styles.authHeroChip}>
              <Award size={14} color="#d97706" />
              {t("Authorized Xprinter Seller", "Authorized Xprinter Seller")}
            </span>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <Link href={terminal.href} className={styles.heroMain}>
            <Image
              src={terminal.img}
              alt="POS Touch 15.6 inch display system"
              className={styles.heroMainImg}
              sizes="(max-width: 899px) 90vw, 560px"
              preload
            />
            <div className={styles.heroTag}>
              <span className={styles.heroTagName}>POS Touch 15.6&quot;</span>
              <span className={styles.heroTagPrice}>{formatLkr(terminal.price)}</span>
            </div>
          </Link>
          {[
            { p: printer, alt: "Receipt printer" },
            { p: scanner, alt: "Barcode scanner" },
            { p: drawer, alt: "Cash drawer" },
          ].map(({ p, alt }) => (
            <Link key={p.code} href={p.href} className={styles.heroTile}>
              <Image src={p.img} alt={alt} className={styles.heroTileImg} sizes="180px" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

const industrySi: Record<string, string> = {
  "Supermarkets & groceries": "Supermarkets සහ groceries",
  "Pharmacies": "Pharmacies",
  "Hardware stores": "Hardware stores",
  "Clothing & fashion": "Clothing සහ fashion",
  "Bookshops & stationery": "Bookshops සහ stationery",
  "Electronics & mobile": "Electronics සහ mobile",
  "Cosmetics & beauty": "Cosmetics සහ beauty",
  "Bakeries & cafés": "Bakeries සහ cafés",
  "Wholesale & distribution": "Wholesale සහ distribution",
  "Auto parts": "Auto parts",
};

const trustItems = [
  { icon: Award, title: "Authorized Xprinter Seller", text: "100% genuine units & 1-yr replacement warranty", si: "Authorized Xprinter Seller", textSi: "100% genuine units සහ අවුරුදු 1ක replacement warranty" },
  { icon: Banknote, title: "Cash on Delivery", text: "Pay the courier when it arrives", si: "Cash on Delivery", textSi: "ලැබුණාම courier එකට ගෙවන්න" },
  { icon: Truck, title: "Island-wide delivery", text: "All 25 districts", si: "මුළු රටටම delivery", textSi: "දිස්ත්‍රික්ක 25ම" },
  { icon: CalendarCheck, title: "7-day free trial", text: "Full software, no payment", si: "දින 7ක free trial", textSi: "Full software එක, ගෙවීමක් නෑ" },
  { icon: Headset, title: "Local support", text: "Colombo team, on WhatsApp", si: "Local support", textSi: "කොළඹ team එක, WhatsApp එකෙන්" },
];

export function TrustStrip() {
  const { t } = useLang();
  return (
    <section className={styles.sectionBottom}>
      <div className={styles.container}>
        <div className={styles.trustGrid}>
          {trustItems.map(({ icon: Icon, title, text, si, textSi }) => (
            <div key={title} className={styles.trustItem}>
              <Icon size={22} color="var(--red)" />
              <div>
                <div className={styles.trustTitle}>{t(title, si)}</div>
                <div className={styles.trustText}>{t(text, textSi)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BuyingPaths() {
  const { t } = useLang();
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <div className={styles.eyebrow}>{t("Three ways to buy", "ගන්න ක්‍රම තුනක්")}</div>
          <h2 className={styles.h2}>{t("Buy what you need. Nothing more.", "ඕන දේ විතරක් ගන්න. වැඩිපුර නෑ.")}</h2>
          <p className={styles.lead}>
            {t(
              "Already have a computer? Get the software. Already have software? Get the hardware. Starting fresh? Get the full set.",
              "Computer එකක් දැනටමත් තියෙනවද? Software එක විතරක් ගන්න. Software තියෙනවද? Hardware ගන්න. අලුතින් පටන් ගන්නවද? Full set එකම ගන්න.",
            )}
          </p>
        </div>
        <div className={styles.pathGrid}>
          <Link href="/pricing" className={styles.pathCard}>
            <Laptop size={28} color="var(--red)" />
            <div className={styles.pathNum}>01</div>
            <div className={styles.pathTitle}>{t("Software only", "Software විතරයි")}</div>
            <p className={styles.body}>{t("MariaPoS licence for your Windows PC. 1, 2 or 3 years.", "ඔබේ Windows PC එකට MariaPoS licence එක. අවුරුදු 1, 2 හෝ 3.")}</p>
            <span className={styles.pathLink}>
              {t("See plans", "Plans බලන්න")}
              <ArrowRight size={16} />
            </span>
          </Link>
          <Link href="/hardware" className={styles.pathCard}>
            <Printer size={28} color="var(--red)" />
            <div className={styles.pathNum}>02</div>
            <div className={styles.pathTitle}>{t("Hardware only", "Hardware විතරයි")}</div>
            <p className={styles.body}>{t("Printers, scanners, cash drawers and touch POS systems. From Rs. 210.", "Printers, scanners, cash drawers සහ touch POS systems. Rs. 210 සිට.")}</p>
            <span className={styles.pathLink}>
              {t("Explore catalog", "Catalog බලන්න")}
              <ArrowRight size={16} />
            </span>
          </Link>
          <Link href="/contact" className={styles.pathCardDark}>
            <div className={styles.pathTop}>
              <PackageCheck size={28} color="#ff8a80" />
              <span className={styles.pathBadge}>{t("Expert Setup", "Expert Setup")}</span>
            </div>
            <div className={styles.pathNum}>03</div>
            <div className={styles.pathTitle}>{t("Counter Demo & Setup", "Counter Demo සහ Setup")}</div>
            <p className={styles.body}>
              {t(
                "Visit our Colombo Experience Center or request a tailored counter walkthrough.",
                "අපේ කොළඹ Experience Center එකට එන්න, නැත්නම් ඔබේ counter එකට ගැලපෙන walkthrough එකක් ඉල්ලන්න.",
              )}
            </p>
            <span className={styles.pathLink}>
              {t("Contact team", "Team එකට කතා කරන්න")}
              <ArrowRight size={16} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export function FeaturedHardware() {
  const { t } = useLang();
  return (
    <section className={`${styles.section} ${styles.band}`}>
      <div className={styles.container}>
        <div className={styles.rowHead}>
          <div className={styles.rowHeadText}>
            <div className={styles.eyebrow}>{t("Hardware", "Hardware")}</div>
            <h2 className={styles.h2}>{t("Tested with MariaPoS.", "MariaPoS එක්ක test කරපු.")}</h2>
          </div>
          <Link href="/hardware" className={styles.allLink}>
            {t(`All ${hardwareProductCount} products`, `Products ${hardwareProductCount}ම බලන්න`)}
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* High-Impact Authorized Xprinter Seller Banner */}
        <AuthorizedXprinterBanner />

        <div className={styles.scroller}>
          {featuredProducts.map((p) => (
            <div key={p.code} className={styles.scrollItem}>
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const smallFeatures = [
  { icon: Layers, title: "FIFO stock", text: "Every batch tracked at its own cost, sold oldest first.", si: "FIFO stock", textSi: "හැම batch එකක්ම එහි මිලට track වෙනවා, පරණම එක මුලින්ම විකිණෙනවා." },
  { icon: MessageSquareText, title: "SMS e-bill receipts", text: "Send the bill to the customer's phone. Save paper.", si: "SMS e-bill receipts", textSi: "Bill එක customer ගේ phone එකටම යවන්න. කඩදාසි ඉතිරියි." },
  { icon: ChartColumn, title: "Reports", text: "Sales, profit & loss, stock value. Export to PDF or Excel.", si: "Reports", textSi: "Sales, profit & loss, stock value. PDF හෝ Excel වලට export කරන්න." },
  { icon: Cloud, title: "Cloud panel", text: "Check today's sales from anywhere, on your phone.", si: "Cloud panel", textSi: "අද sales ඕනෑම තැනක ඉඳන් phone එකෙන් බලන්න." },
];

export function SoftwareBento() {
  const { t } = useLang();
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <div className={styles.eyebrow}>{t("Software", "Software")}</div>
          <h2 className={styles.h2}>{t("Billing that keeps up with a busy counter.", "කාර්යබහුල counter එකක වේගයටම Billing.")}</h2>
          <p className={styles.lead}>
            {t(
              "Windows software built for Sri Lankan retail. Here are six things shop owners use every day.",
              "ශ්‍රී ලාංකික retail වලට හදපු Windows software එකක්. වෙළඳසැල් අයිතිකරුවන් හැමදාම පාවිච්චි කරන දේවල් හයක් මෙන්න.",
            )}
          </p>
        </div>
        <div className={styles.bento}>
          <div className={styles.bentoLarge}>
            <ScanBarcode size={26} color="var(--red)" />
            <div className={styles.bentoTitle}>{t("Fast billing", "වේගවත් billing")}</div>
            <p className={styles.body}>
              {t(
                "Scan or search by name, use F1–F12 shortcuts or the touch keypad. Retail and wholesale prices.",
                "Scan කරන්න, නමින් search කරන්න, F1–F12 shortcuts හෝ touch keypad එක පාවිච්චි කරන්න. Retail සහ wholesale මිල ගණන්.",
              )}
            </p>
            <div className={styles.screenFrame}>
              <div className={styles.screen}>
                <Image
                  src={posBilling}
                  alt="MariaPoS billing screen"
                  fill
                  sizes="(max-width: 899px) 90vw, 400px"
                  style={{ objectFit: "cover", objectPosition: "0% 0%" }}
                />
              </div>
            </div>
          </div>
          {smallFeatures.map(({ icon: Icon, title, text, si, textSi }) => (
            <div key={title} className={styles.bentoCard}>
              <Icon size={26} color="var(--red)" />
              <div className={styles.bentoTitle}>{t(title, si)}</div>
              <p className={styles.body}>{t(text, textSi)}</p>
            </div>
          ))}
          <div className={styles.bentoWide}>
            <div className={styles.bentoWideText}>
              <WifiOff size={26} color="#ff8a80" />
              <div>
                <div className={styles.bentoTitle}>{t("Offline-first", "Offline-first")}</div>
                <p className={styles.body}>
                  {t(
                    "Keep billing during power or internet cuts. It syncs when you're back online.",
                    "Current හෝ internet නැති වෙලාවලත් billing කරගෙන යන්න. Online ආපු ගමන් sync වෙනවා.",
                  )}
                </p>
              </div>
            </div>
            <Link href="/features" className={styles.whiteButton}>
              {t("All features", "සියලුම Features")}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function IndustriesRow() {
  const { t } = useLang();
  return (
    <section className={styles.sectionBottom}>
      <div className={styles.industries}>
        <div className={styles.eyebrowMuted}>{t("Used by shops like yours", "ඔබ වගේ වෙළඳසැල් පාවිච්චි කරනවා")}</div>
        <div className={styles.industryRow}>
          {industryChips.map(({ name, icon: Icon, href }) => (
            <Link key={href} href={href} className={styles.industryChip}>
              <Icon size={17} color="var(--red)" />
              {t(name, industrySi[name])}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  { icon: MousePointerClick, color: "#a1a1aa", title: "Choose", text: "Pick a plan or a product on this site.", si: "තෝරන්න", textSi: "මේ site එකෙන් plan එකක් හෝ product එකක් තෝරන්න." },
  {
    icon: MessageCircle,
    color: "var(--wa)",
    title: "Message us on WhatsApp",
    text: "Tap Order. The message is ready. Add your delivery address and send.",
    si: "WhatsApp එකෙන් message කරන්න",
    textSi: "Order tap කරන්න. Message එක ready. Delivery address එක දාලා send කරන්න.",
  },
  {
    icon: Banknote,
    color: "#a1a1aa",
    title: "Pay cash on delivery",
    text: "We deliver to your door in any district. Pay the courier when it arrives.",
    si: "Cash on delivery ගෙවන්න",
    textSi: "ඕනෑම දිස්ත්‍රික්කයක ඔබේ දොරටුවටම deliver කරනවා. ලැබුණාම courier එකට ගෙවන්න.",
  },
];

export function HowOrdering() {
  const { t } = useLang();
  return (
    <section className={`${styles.section} ${styles.band}`}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <div className={styles.eyebrow}>{t("How ordering works", "Order කරන හැටි")}</div>
          <h2 className={styles.h2}>{t("Three steps. No card needed.", "පියවර තුනයි. Card එකක් ඕන නෑ.")}</h2>
        </div>
        <div className={styles.steps}>
          {steps.map(({ icon: Icon, color, title, text, si, textSi }, i) => (
            <div key={title} className={styles.step}>
              <div className={styles.pathTop}>
                <span className={styles.stepNum}>{String(i + 1).padStart(2, "0")}</span>
                <Icon size={22} color={color} />
              </div>
              <div className={styles.bentoTitle}>{t(title, si)}</div>
              <p className={styles.body}>{t(text, textSi)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaBand() {
  const { t } = useLang();
  return (
    <section className={styles.sectionBottom}>
      <div className={styles.container}>
        <div className={styles.ctaBand}>
          <div className={styles.ctaText}>
            <h2 className={styles.h2}>{t("Tell us about your shop.", "ඔබේ වෙළඳසැල ගැන කියන්න.")}</h2>
            <p className={styles.lead}>{t("We'll suggest the right setup and send you a price on WhatsApp.", "ගැලපෙන setup එක අපි suggest කරලා, WhatsApp එකෙන් මිල එවනවා.")}</p>
          </div>
          <div className={styles.ctaActions}>
            <a href={waGeneral} target="_blank" rel="noopener" className={styles.waButton}>
              <MessageCircle size={20} />
              {t("Chat on WhatsApp", "WhatsApp එකෙන් කතා කරන්න")}
            </a>
            <a href={site.phoneHref} className={styles.ctaPhone}>
              {t("or call", "හෝ අමතන්න")} {site.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
