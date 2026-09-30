import Image, { type StaticImageData } from "next/image";
import { Hand, Printer, ScanBarcode, Tag, type LucideIcon } from "lucide-react";
import hwA from "@/assets/images/hw-a.jpeg";
import hwB from "@/assets/images/hw-b.jpeg";
import hwC from "@/assets/images/hw-c.jpeg";
import styles from "./HardwareSection.module.css";

const devices: { title: string; body: string; icon: LucideIcon }[] = [
  {
    title: "Touch & standard screens",
    body: "Large tap targets for touch tills. Full keyboard shortcuts and mouse support on regular monitors.",
    icon: Hand,
  },
  { title: "Barcode scanners", body: "Plug in a USB scanner and scan straight into the cart or product search.", icon: ScanBarcode },
  { title: "Bill printing", body: "Print receipts on ESC/POS thermal printers at checkout.", icon: Printer },
  { title: "Barcode label printing", body: "Print barcode labels for products that arrive without one.", icon: Tag },
];

const gallery: { img: StaticImageData; alt: string; pos: string; bg: string; title: string; caption: string }[] = [
  {
    img: hwB,
    alt: "MariaPoS staff member at a touch-screen till with receipt printer",
    pos: "60% 35%",
    bg: "#eeeeee",
    title: "Touch-screen tills",
    caption: "Large tap targets for fast checkout without a keyboard.",
  },
  {
    img: hwA,
    alt: "MariaPoS on a desktop monitor with a phone showing an SMS receipt and a receipt printer",
    pos: "68% 55%",
    bg: "#f4f4f4",
    title: "Bill on paper, receipt on their phone",
    caption: "Print the bill and send the SMS receipt in the same checkout.",
  },
];

export function HardwareSection() {
  return (
    <section id="hardware" className={styles.section}>
      <div data-reveal="up" className="section-intro">
        <span className="eyebrow">Hardware</span>
        <h2 className="section-title">Works with the hardware already on your counter</h2>
        <p className={`lead ${styles.intro}`}>
          Tap on a touch screen or click with a mouse. Scan barcodes, print bills and print barcode labels from the same
          till.
        </p>
      </div>

      <div data-reveal="scale" className={styles.banner}>
        <Image
          src={hwC}
          alt="Cashier using MariaPoS on a touch screen with a barcode scanner and receipt printer"
          fill
          sizes="(max-width: 1240px) 100vw, 1192px"
          style={{ objectFit: "cover", objectPosition: "50% 45%" }}
          priority
        />
        <div data-float="5600" data-amp="6" className={`${styles.badge} ${styles.badgeLeft}`}>
          <span className={styles.badgeIcon}>
            <ScanBarcode size={16} color="var(--red)" />
          </span>
          Barcode scanned · 04325
        </div>
        <div data-float="6400" data-amp="6" className={`${styles.badge} ${styles.badgeRight}`}>
          <span className={styles.badgeIcon}>
            <Printer size={16} color="var(--red)" />
          </span>
          Bill printed
        </div>
      </div>

      <div className={styles.devices}>
        {devices.map(({ title, body, icon: Icon }, i) => (
          <div key={title} data-reveal="up" data-delay={i * 80} className={styles.device}>
            <span className={styles.deviceIcon}>
              <Icon size={22} color="#ffffff" />
            </span>
            <span className={styles.deviceTitle}>{title}</span>
            <span className={styles.deviceBody}>{body}</span>
          </div>
        ))}
      </div>

      <div className={styles.gallery}>
        {gallery.map((item, i) => (
          <figure key={item.title} data-reveal="up" data-delay={i * 100} className={styles.figure}>
            <div className={styles.figureMedia} style={{ background: item.bg }}>
              <Image
                src={item.img}
                alt={item.alt}
                fill
                sizes="(max-width: 900px) 100vw, 600px"
                className={styles.figureImage}
                style={{ objectPosition: item.pos }}
              />
            </div>
            <figcaption className={styles.caption}>
              <span className={styles.captionTitle}>{item.title}</span>
              <span className={styles.captionText}>{item.caption}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
