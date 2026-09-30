import Link from "next/link";
import { ArrowUpRight, Building2, Store, Users } from "lucide-react";
import { industries } from "@/lib/industries";
import styles from "./WhoItsFor.module.css";

const sizes = [
  {
    title: "Single-counter shops",
    body: "A neighbourhood grocery, pharmacy or boutique with one PC and one cashier. Set up in an afternoon.",
    icon: Store,
  },
  {
    title: "Multi-till stores",
    body: "Supermarkets and busy retailers with several counters, shift-based cashiers and a manager.",
    icon: Users,
  },
  {
    title: "Multi-branch businesses",
    body: "Owners with more than one outlet who need combined reports, cloud sync and live sales alerts.",
    icon: Building2,
  },
];

export function WhoItsFor() {
  return (
    <section id="who-its-for" className={styles.section} aria-labelledby="who-title">
      <div data-reveal="up" className="section-intro">
        <span className="eyebrow">Who can use MariaPoS</span>
        <h2 id="who-title" className="section-title">
          Built for modern retail, from a single counter to multi-store chains
        </h2>
        <p className="lead">
          If you sell products over a counter, MariaPoS fits. These are the kinds of businesses it is built for,
          each with its own guide.
        </p>
      </div>

      <div className={styles.industries}>
        {industries.map(({ slug, short, icon: Icon, intro }, i) => (
          <Link
            key={slug}
            href={`/industries/${slug}`}
            data-reveal="up"
            data-delay={(i % 5) * 60}
            className={styles.industry}
          >
            <span className={styles.industryIcon}>
              <Icon size={22} />
            </span>
            <span className={styles.industryName}>{short}</span>
            <span className={styles.industryIntro}>{intro.split(". ")[0]}.</span>
            <ArrowUpRight size={16} className={styles.arrow} />
          </Link>
        ))}
      </div>

      <div className={styles.sizes}>
        {sizes.map(({ title, body, icon: Icon }, i) => (
          <div key={title} data-reveal="up" data-delay={i * 80} className={styles.size}>
            <Icon size={22} color="var(--red)" />
            <h3 className={styles.sizeTitle}>{title}</h3>
            <p className={styles.sizeBody}>{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
