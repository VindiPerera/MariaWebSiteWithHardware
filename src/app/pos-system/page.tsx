import Link from "next/link";
import { ArrowRight, Download, GraduationCap, Headphones } from "lucide-react";
import { LandingHero } from "@/components/landing/LandingHero";
import { FaqBlock } from "@/components/sections/FaqBlock";
import { ServiceAreas } from "@/components/sections/ServiceAreas";
import { TrialCta } from "@/components/sections/TrialCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { countries } from "@/lib/geo";
import { industries } from "@/lib/industries";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import styles from "@/components/landing/Landing.module.css";

const regionCount = countries.reduce((sum, c) => sum + (c.regions?.length ?? 0), 0);

export const metadata = pageMetadata({
  title: "POS System Worldwide — POS Software for Shops in Every Country",
  description: `MariaPoS is offline-first POS and billing software for shops in ${countries.length}+ countries: USA, UK, Canada, Australia, India, Bangladesh, Pakistan, UAE, Saudi Arabia, Malaysia, Nigeria, Kenya, Sri Lanka and more. One-time licence, no monthly fees. Free 7-day trial.`,
  path: "/pos-system",
  keywords: [
    "POS system",
    "best POS system for small business",
    "POS software without monthly fee",
    "offline POS software",
    "POS system for retail store",
    ...countries.slice(0, 20).map((c) => `POS system ${c.name}`),
  ],
});

const steps = [
  {
    title: "Download & start your trial",
    body: `Install MariaPoS on any Windows 10 or 11 PC and use every feature free for ${site.trialDays} days.`,
    icon: Download,
  },
  {
    title: "Set up remotely with our help",
    body: "Add products, users, currency, taxes and bill settings. Our team helps over WhatsApp, email and phone.",
    icon: Headphones,
  },
  {
    title: "Go live the same day",
    body: "Cashiers learn to bill in one shift. Choose a 1, 2 or 3-year licence when you are ready.",
    icon: GraduationCap,
  },
];

const faqs = [
  {
    q: "Which countries can use MariaPoS?",
    a: "Any country. MariaPoS is a Windows download with configurable currency, tax classes and receipt layout, and setup and support are provided remotely.",
  },
  {
    q: "Is there a monthly fee?",
    a: "No. MariaPoS is a one-time payment for a 1, 2 or 3-year licence with every feature included, and it never renews automatically.",
  },
  {
    q: "Does MariaPoS work without internet?",
    a: "Yes. Billing, stock and shifts run fully offline, and data syncs to the cloud panel whenever a connection is available.",
  },
  {
    q: "Which language is the software in?",
    a: "The MariaPoS interface is in English.",
  },
];

export default function PosSystemWorldwidePage() {
  return (
    <main id="top">
      <JsonLd data={breadcrumbSchema([{ name: "POS System Worldwide", path: "/pos-system" }])} />
      <LandingHero
        eyebrow={`${countries.length} countries · ${regionCount} states & regions`}
        title="POS system & billing software for shops worldwide"
        intro="From New York to Dhaka, Dubai to Lagos, MariaPoS gives independent retailers fast billing, accurate FIFO stock and full cash control, with local currency and tax settings and no monthly fees."
        crumbs={[{ name: "POS System Worldwide", path: "/pos-system" }]}
      />

      <ServiceAreas title="Find MariaPoS in your country" />

      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <span className="eyebrow">Getting started</span>
          <h2 className={styles.h2}>Start using MariaPoS anywhere in three steps</h2>
        </div>
        <div className={styles.cards3}>
          {steps.map(({ title, body, icon: Icon }, i) => (
            <article key={title} data-reveal="up" data-delay={i * 70} className={styles.card}>
              <span className={styles.cardIcon}>
                <Icon size={20} />
              </span>
              <h3 className={styles.cardTitle}>
                {i + 1}. {title}
              </h3>
              <p className={styles.cardBody}>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <h2 className={styles.h2}>POS systems by business type</h2>
        </div>
        <div className={styles.tags}>
          {industries.map((i) => (
            <Link key={i.slug} href={`/industries/${i.slug}`} className={styles.tag}>
              {i.short} POS
            </Link>
          ))}
          <Link href="/features" className={styles.tag}>
            All features <ArrowRight size={12} />
          </Link>
        </div>
      </section>

      <FaqBlock title="POS system FAQ" faqs={faqs} />
      <TrialCta />
    </main>
  );
}
