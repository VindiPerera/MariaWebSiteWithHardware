import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { site } from "@/lib/site";
import styles from "./Landing.module.css";

type Props = {
  eyebrow: string;
  title: string;
  intro: string;
  crumbs: { name: string; path: string }[];
};

export function LandingHero({ eyebrow, title, intro, crumbs }: Props) {
  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <nav aria-label="Breadcrumb">
          <ol className={styles.crumbs}>
            <li>
              <Link href="/">Home</Link>
            </li>
            {crumbs.map((c, i) => (
              <li key={c.path}>
                {i === crumbs.length - 1 ? <span aria-current="page">{c.name}</span> : <Link href={c.path}>{c.name}</Link>}
              </li>
            ))}
          </ol>
        </nav>
        <span className="eyebrow">{eyebrow}</span>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.intro}>{intro}</p>
        <div className={styles.actions}>
          <a href="#trial" className={styles.primary}>
            Start {site.trialDays}-day free trial <ArrowRight size={16} />
          </a>
          <a href={site.phoneHref} className={styles.secondary}>
            <Phone size={16} color="var(--red)" /> Call {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
