import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, TriangleAlert } from "lucide-react";
import { LandingHero } from "@/components/landing/LandingHero";
import { IndustryShowcase } from "@/components/industries/IndustryShowcase";
import { FaqBlock } from "@/components/sections/FaqBlock";
import { TrialCta } from "@/components/sections/TrialCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { getIndustry, industries } from "@/lib/industries";
import { featureCount } from "@/lib/featureCatalog";
import { breadcrumbSchema, organizationId, pageMetadata } from "@/lib/seo";
import styles from "@/components/landing/Landing.module.css";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return industries.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const industry = getIndustry((await params).slug);
  if (!industry) return {};
  return pageMetadata({
    title: `${industry.keyword} — Billing & Inventory Software`,
    description: `${industry.intro} 7-day free trial.`.slice(0, 300),
    path: `/industries/${industry.slug}`,
    keywords: [industry.keyword, ...industry.keywords],
  });
}

export default async function IndustryPage({ params }: Props) {
  const industry = getIndustry((await params).slug);
  if (!industry) notFound();

  const path = `/industries/${industry.slug}`;
  const others = industries.filter((i) => i.slug !== industry.slug).slice(0, 6);

  return (
    <main id="top">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Industries", path: "/industries" },
            { name: industry.name, path },
          ]),
          {
            "@type": "Service",
            name: industry.keyword,
            serviceType: "Point of Sale software",
            provider: { "@id": organizationId },
            areaServed: { "@type": "AdministrativeArea", name: "Worldwide" },
            description: industry.intro,
          },
        ]}
      />
      <LandingHero
        eyebrow={industry.keyword}
        title={industry.headline}
        intro={industry.intro}
        crumbs={[
          { name: "Industries", path: "/industries" },
          { name: industry.name, path },
        ]}
      />

      <IndustryShowcase slug={industry.slug} name={industry.name} short={industry.short} />

      <section className={styles.section}>
        <div className={styles.split}>
          <div className={styles.sectionHead}>
            <span className="eyebrow">The challenge</span>
            <h2 className={styles.h2}>What {industry.name.toLowerCase()} deal with every day</h2>
            <p className={styles.text}>
              Generic billing software treats every shop the same. MariaPoS is built around the real problems at a Sri
              Lankan counter, and every feature is included in one licence.
            </p>
          </div>
          <ul className={styles.challenges} data-reveal="up">
            <li className={styles.challengesTitle}>Common problems</li>
            {industry.challenges.map((c) => (
              <li key={c}>
                <TriangleAlert size={16} />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <span className="eyebrow">How MariaPoS helps</span>
          <h2 className={styles.h2}>MariaPoS features that matter most for {industry.short.toLowerCase()}</h2>
        </div>
        <div className={styles.cards3}>
          {industry.highlights.map((h, i) => (
            <article key={h.title} data-reveal="up" data-delay={(i % 3) * 70} className={styles.card}>
              <CheckCircle2 size={22} color="var(--red)" />
              <h3 className={styles.cardTitle}>{h.title}</h3>
              <p className={styles.cardBody}>{h.body}</p>
            </article>
          ))}
          <Link href="/features" data-reveal="up" className={styles.card}>
            <h3 className={styles.cardTitle}>Plus {featureCount - industry.highlights.length} more features</h3>
            <p className={styles.cardBody}>
              Shifts & till control, supplier GRN, 13+ reports, SMS e-bills, Telegram alerts and cloud sync.
            </p>
            <span className={styles.cardLink}>
              See all features <ArrowRight size={14} />
            </span>
          </Link>
        </div>
      </section>

      <FaqBlock title={`${industry.keyword}: common questions`} faqs={industry.faqs} />

      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <h2 className={styles.h2}>MariaPoS for other businesses</h2>
        </div>
        <div className={styles.tags}>
          {others.map((o) => (
            <Link key={o.slug} href={`/industries/${o.slug}`} className={styles.tag}>
              {o.keyword}
            </Link>
          ))}
        </div>
      </section>

      <TrialCta />
    </main>
  );
}
