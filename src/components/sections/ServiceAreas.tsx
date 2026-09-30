import Link from "next/link";
import { Globe2 } from "lucide-react";
import { continents, countries } from "@/lib/geo";
import styles from "./ServiceAreas.module.css";

type Props = {
  /** Slug of the current country page, left out of the list. */
  exclude?: string;
  title?: string;
};

/** Worldwide directory of country landing pages, grouped by continent. */
export function ServiceAreas({ exclude, title = "POS system for shops worldwide" }: Props) {
  return (
    <section className={styles.section} aria-labelledby="service-areas-title">
      <div data-reveal="up" className={styles.head}>
        <span className="eyebrow">Worldwide</span>
        <h2 id="service-areas-title" className={styles.title}>
          {title}
        </h2>
        <p className={styles.lead}>
          MariaPoS is a Windows download with remote setup and support, so shops in any country can start today. Find
          MariaPoS in your country:
        </p>
      </div>

      <div className={styles.provinces}>
        {continents.map((continent) => (
          <div key={continent} className={styles.province}>
            <h3 className={styles.provinceName}>{continent}</h3>
            <ul className={styles.cities}>
              {countries
                .filter((c) => c.continent === continent && c.slug !== exclude)
                .map((c) => (
                  <li key={c.slug}>
                    <Link href={`/pos-system/${c.slug}`} className={styles.city}>
                      <Globe2 size={13} />
                      POS system {c.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
