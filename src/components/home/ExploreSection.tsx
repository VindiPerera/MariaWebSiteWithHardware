import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import hwA from "@/assets/images/hw-a.jpeg";
import hwB from "@/assets/images/hw-b.jpeg";
import hwC from "@/assets/images/hw-c.jpeg";
import posBilling from "@/assets/images/pos-billing.png";
import styles from "./ExploreSection.module.css";

const cards: { title: string; sub: string; href: string; img: StaticImageData; alt: string; pos: string }[] = [
  {
    title: "Features",
    sub: "SMS, Telegram, cloud sync & more",
    href: "/features",
    img: hwA,
    alt: "MariaPoS on a monitor with phone and receipt printer",
    pos: "70% 50%",
  },
  {
    title: "Product",
    sub: "Billing and reports screens",
    href: "/product",
    img: posBilling,
    alt: "MariaPoS billing screen",
    pos: "0% 0%",
  },
  {
    title: "Hardware",
    sub: "Screens, scanners, printers",
    href: "/hardware",
    img: hwC,
    alt: "Cashier at a MariaPoS touch-screen till",
    pos: "55% 50%",
  },
  {
    title: "Pricing",
    sub: "From $95.55 per year",
    href: "/pricing",
    img: hwB,
    alt: "MariaPoS staff at the counter",
    pos: "60% 30%",
  },
];

export function ExploreSection() {
  return (
    <section data-screen-label="Explore" className={styles.section} aria-labelledby="explore-title">
      <h2 id="explore-title" data-reveal="up" className={styles.title}>
        Explore MariaPoS
      </h2>

      <div className={styles.grid}>
        {cards.map((card, i) => (
          <Link key={card.href} href={card.href} data-reveal="up" data-delay={i * 80} className={styles.card}>
            <div className={styles.media}>
              <Image
                src={card.img}
                alt={card.alt}
                fill
                sizes="(max-width: 599px) 100vw, (max-width: 999px) 50vw, 300px"
                style={{ objectFit: "cover", objectPosition: card.pos }}
              />
            </div>
            <div className={styles.body}>
              <span className={styles.text}>
                <span className={styles.cardTitle}>{card.title}</span>
                <span className={styles.cardSub}>{card.sub}</span>
              </span>
              <span className={styles.arrow} aria-hidden="true">
                <ArrowUpRight size={16} color="#ffffff" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
