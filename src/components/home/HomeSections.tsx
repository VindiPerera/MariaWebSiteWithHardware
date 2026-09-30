import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
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
import { ThermalReceiptBill } from "@/components/common/ThermalReceiptBill";
import { ProductCard } from "./ProductCard";
import styles from "./Home.module.css";


export function HomeHero() {
  const { terminal, printer, scanner, drawer } = featuredHero;
  return (
    <section className={styles.hero}>
      <div className={styles.heroGrid}>
        <div className={styles.heroCopy}>
          <div className={styles.eyebrow}>POS software + hardware · Sri Lanka</div>
          <h1 className={styles.heroTitle}>A complete POS setup for your shop.</h1>
          <p className={styles.heroLead}>
            MariaPoS billing software with the touch screen, printer, scanner and cash drawer to run it. Order on WhatsApp
            and pay cash when it arrives.
          </p>
          <div className={styles.actions}>
            <a href={waGeneral} target="_blank" rel="noopener" className={styles.waButtonShadow}>
              <MessageCircle size={20} />
              Order on WhatsApp
            </a>
            <Link href="/pricing" className={styles.greyButton}>
              View plans
              <ArrowRight size={18} />
            </Link>
          </div>
          <div className={styles.chips}>
            <span className={styles.chip}>
              <Banknote size={14} color="var(--red)" />
              Cash on Delivery
            </span>
            <span className={styles.chip}>
              <Truck size={14} color="var(--red)" />
              All 25 districts
            </span>
            <span className={styles.chip}>
              <ShieldCheck size={14} color="var(--red)" />
              Warranty
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

const trustItems = [
  { icon: Banknote, title: "Cash on Delivery", text: "Pay the courier when it arrives" },
  { icon: Truck, title: "Island-wide delivery", text: "All 25 districts" },
  { icon: CalendarCheck, title: "7-day free trial", text: "Full software, no payment" },
  { icon: Headset, title: "Local support", text: "Colombo team, on WhatsApp" },
];

export function TrustStrip() {
  return (
    <section className={styles.sectionBottom}>
      <div className={styles.container}>
        <div className={styles.trustGrid}>
          {trustItems.map(({ icon: Icon, title, text }) => (
            <div key={title} className={styles.trustItem}>
              <Icon size={22} color="var(--red)" />
              <div>
                <div className={styles.trustTitle}>{title}</div>
                <div className={styles.trustText}>{text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BuyingPaths() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <div className={styles.eyebrow}>Three ways to buy</div>
          <h2 className={styles.h2}>Buy what you need. Nothing more.</h2>
          <p className={styles.lead}>
            Already have a computer? Get the software. Already have software? Get the hardware. Starting fresh? Get the
            full set.
          </p>
        </div>
        <div className={styles.pathGrid}>
          <Link href="/pricing#software" className={styles.pathCard}>
            <Laptop size={28} color="var(--red)" />
            <div className={styles.pathNum}>01</div>
            <div className={styles.pathTitle}>Software only</div>
            <p className={styles.body}>MariaPoS licence for your Windows PC. 1, 2 or 3 years.</p>
            <span className={styles.pathLink}>
              See plan
              <ArrowRight size={16} />
            </span>
          </Link>
          <Link href="/hardware" className={styles.pathCard}>
            <Printer size={28} color="var(--red)" />
            <div className={styles.pathNum}>02</div>
            <div className={styles.pathTitle}>Hardware only</div>
            <p className={styles.body}>Printers, scanners, cash drawers and touch POS systems. From Rs. 210.</p>
            <span className={styles.pathLink}>
              See plan
              <ArrowRight size={16} />
            </span>
          </Link>
          <Link href="/pricing#fullset" className={styles.pathCardDark}>
            <div className={styles.pathTop}>
              <PackageCheck size={28} color="#ff8a80" />
              <span className={styles.pathBadge}>Best value</span>
            </div>
            <div className={styles.pathNum}>03</div>
            <div className={styles.pathTitle}>Software + Hardware</div>
            <p className={styles.body}>
              The full counter set: touch POS, printer, scanner, cash drawer, licence and setup.
            </p>
            <span className={styles.pathLink}>
              See full set
              <ArrowRight size={16} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export function FeaturedHardware() {
  return (
    <section className={`${styles.section} ${styles.band}`}>
      <div className={styles.container}>
        <div className={styles.rowHead}>
          <div className={styles.rowHeadText}>
            <div className={styles.eyebrow}>Hardware</div>
            <h2 className={styles.h2}>Tested with MariaPoS.</h2>
          </div>
          <Link href="/hardware" className={styles.allLink}>
            All {hardwareProductCount} products
            <ArrowRight size={18} />
          </Link>
        </div>
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
  { icon: Layers, title: "FIFO stock", text: "Every batch tracked at its own cost, sold oldest first." },
  { icon: MessageSquareText, title: "SMS e-bill receipts", text: "Send the bill to the customer's phone. Save paper." },
  { icon: ChartColumn, title: "Reports", text: "Sales, profit & loss, stock value. Export to PDF or Excel." },
  { icon: Cloud, title: "Cloud panel", text: "Check today's sales from anywhere, on your phone." },
];

export function SoftwareBento() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <div className={styles.eyebrow}>Software</div>
          <h2 className={styles.h2}>Billing that keeps up with a busy counter.</h2>
          <p className={styles.lead}>
            Windows software built for Sri Lankan retail. Here are six things shop owners use every day.
          </p>
        </div>
        <div className={styles.bento}>
          <div className={styles.bentoLarge}>
            <ScanBarcode size={26} color="var(--red)" />
            <div className={styles.bentoTitle}>Fast billing</div>
            <p className={styles.body}>
              Scan or search by name, use F1–F12 shortcuts or the touch keypad. Retail and wholesale prices.
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
          {smallFeatures.map(({ icon: Icon, title, text }) => (
            <div key={title} className={styles.bentoCard}>
              <Icon size={26} color="var(--red)" />
              <div className={styles.bentoTitle}>{title}</div>
              <p className={styles.body}>{text}</p>
            </div>
          ))}
          <div className={styles.bentoWide}>
            <div className={styles.bentoWideText}>
              <WifiOff size={26} color="#ff8a80" />
              <div>
                <div className={styles.bentoTitle}>Offline-first</div>
                <p className={styles.body}>
                  Keep billing during power or internet cuts. It syncs when you&apos;re back online.
                </p>
              </div>
            </div>
            <Link href="/features" className={styles.whiteButton}>
              All features
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ThermalBillEngineSection() {
  return (
    <section className={`${styles.section} ${styles.band}`}>
      <div className={styles.container}>
        <div className={styles.billEngineGrid}>
          <div className={styles.billEngineCopy}>
            <span className="eyebrow">
              <Printer size={14} color="var(--red)" />
              Thermal Print Engine
            </span>
            <h2 className={styles.h2}>
              Lightning-fast 80mm bills, tailored for Sri Lankan counters.
            </h2>
            <p className={styles.lead}>
              Formatted for high-speed 80mm and 58mm thermal printers with automatic cash drawer kick.
              Prints Sinhala &amp; English shop headers, itemized discounts, and scannable barcodes in under 1.2 seconds.
            </p>

            <div className={styles.billFeatureCards}>
              <div className={styles.billFeatureItem}>
                <div className={styles.billFeatureIcon}>
                  <Sparkles size={18} color="var(--red)" />
                </div>
                <div>
                  <strong>Sinhala &amp; English bilingual receipts</strong>
                  <span>Supports &quot;ස්තූතියි නැවත එන්න&quot; and custom store policy headers.</span>
                </div>
              </div>

              <div className={styles.billFeatureItem}>
                <div className={styles.billFeatureIcon}>
                  <Zap size={18} color="#1faa55" />
                </div>
                <div>
                  <strong>Instant cash drawer pulse</strong>
                  <span>Kicks the heavy-duty cash drawer open the exact instant the bill completes.</span>
                </div>
              </div>

              <div className={styles.billFeatureItem}>
                <div className={styles.billFeatureIcon}>
                  <PackageCheck size={18} color="#0284c7" />
                </div>
                <div>
                  <strong>Offline instant reprint</strong>
                  <span>Power cut or paper jam? Reprint any past receipt in one keystroke without data loss.</span>
                </div>
              </div>
            </div>

            <div className={styles.billActionRow}>
              <Link href="/pricing#fullset" className={styles.primaryRedButton}>
                <span>Get Full Setup with Printer</span>
                <ArrowRight size={16} />
              </Link>
              <a
                href={waGeneral}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.waButton}
              >
                <MessageCircle size={18} />
                <span>Ask on WhatsApp</span>
              </a>
            </div>
          </div>

          <div className={styles.billEngineVisual}>
            <div className={styles.billWrapperCard}>
              <ThermalReceiptBill showControls={true} compact={false} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export function IndustriesRow() {
  return (
    <section className={styles.sectionBottom}>
      <div className={styles.industries}>
        <div className={styles.eyebrowMuted}>Used by shops like yours</div>
        <div className={styles.industryRow}>
          {industryChips.map(({ name, icon: Icon, href }) => (
            <Link key={href} href={href} className={styles.industryChip}>
              <Icon size={17} color="var(--red)" />
              {name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  { icon: MousePointerClick, color: "#a1a1aa", title: "Choose", text: "Pick a plan or a product on this site." },
  {
    icon: MessageCircle,
    color: "var(--wa)",
    title: "Message us on WhatsApp",
    text: "Tap Order. The message is ready. Add your delivery address and send.",
  },
  {
    icon: Banknote,
    color: "#a1a1aa",
    title: "Pay cash on delivery",
    text: "We deliver to your door in any district. Pay the courier when it arrives.",
  },
];

export function HowOrdering() {
  return (
    <section className={`${styles.section} ${styles.band}`}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <div className={styles.eyebrow}>How ordering works</div>
          <h2 className={styles.h2}>Three steps. No card needed.</h2>
        </div>
        <div className={styles.steps}>
          {steps.map(({ icon: Icon, color, title, text }, i) => (
            <div key={title} className={styles.step}>
              <div className={styles.pathTop}>
                <span className={styles.stepNum}>{String(i + 1).padStart(2, "0")}</span>
                <Icon size={22} color={color} />
              </div>
              <div className={styles.bentoTitle}>{title}</div>
              <p className={styles.body}>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className={styles.sectionBottom}>
      <div className={styles.container}>
        <div className={styles.ctaBand}>
          <div className={styles.ctaText}>
            <h2 className={styles.h2}>Tell us about your shop.</h2>
            <p className={styles.lead}>We&apos;ll suggest the right setup and send you a price on WhatsApp.</p>
          </div>
          <div className={styles.ctaActions}>
            <a href={waGeneral} target="_blank" rel="noopener" className={styles.waButton}>
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>
            <a href={site.phoneHref} className={styles.ctaPhone}>
              or call {site.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
