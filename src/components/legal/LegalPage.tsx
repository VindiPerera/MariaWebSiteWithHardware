import Link from "next/link";
import type { ReactNode } from "react";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo";
import { legalLinks, site } from "@/lib/site";
import styles from "./LegalPage.module.css";

export type LegalSection = { id: string; title: string; content: ReactNode };

type Props = {
  title: string;
  path: string;
  updated: string;
  summary: ReactNode;
  sections: LegalSection[];
};

export function LegalPage({ title, path, updated, summary, sections }: Props) {
  return (
    <main id="top" className={styles.page}>
      <JsonLd data={breadcrumbSchema([{ name: title, path }])} />
      <header className={styles.header}>
        <nav aria-label="Breadcrumb" className={styles.crumbs}>
          <Link href="/">Home</Link> <span>/</span> <span aria-current="page">{title}</span>
        </nav>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.updated}>
          Last updated: <time>{updated}</time> · {site.company}
        </p>
        <div className={styles.summary}>{summary}</div>
      </header>

      <div className={styles.layout}>
        <aside className={styles.aside}>
          <nav aria-label="On this page" className={styles.toc}>
            <span className={styles.tocTitle}>On this page</span>
            <ol>
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`}>{s.title}</a>
                </li>
              ))}
            </ol>
          </nav>
          <nav aria-label="Legal documents" className={styles.toc}>
            <span className={styles.tocTitle}>Legal</span>
            <ul>
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} aria-current={l.href === path ? "page" : undefined}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <article className={styles.content}>
          {sections.map((s, i) => (
            <section key={s.id} id={s.id} className={styles.section}>
              <h2>
                <span className={styles.num}>{i + 1}.</span> {s.title}
              </h2>
              {s.content}
            </section>
          ))}

          <section className={styles.contact}>
            <h2>Contact us</h2>
            <p>
              {site.company}
              <br />
              {site.address}
              <br />
              Email: <a href={site.emailHref}>{site.email}</a>
              <br />
              Phone / WhatsApp: <a href={site.phoneHref}>{site.phone}</a>
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}
