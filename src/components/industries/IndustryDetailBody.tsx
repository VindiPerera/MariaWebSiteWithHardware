"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, TriangleAlert } from "lucide-react";
import { LandingHero } from "@/components/landing/LandingHero";
import { IndustryShowcase } from "@/components/industries/IndustryShowcase";
import { FaqBlock } from "@/components/sections/FaqBlock";
import { TrialCta } from "@/components/sections/TrialCta";
import { featureCount } from "@/lib/featureCatalog";
import { useLang } from "@/lib/i18n";
import { getIndustry, industries } from "@/lib/industries";
import { industriesSi } from "@/lib/industriesSi";
import styles from "@/components/landing/Landing.module.css";

/** Body of /industries/[slug]; client-side so the Sinhala + English text can follow the language dropdown. */
export function IndustryDetailBody({ slug }: { slug: string }) {
  const { t, lang } = useLang();
  const industry = getIndustry(slug);
  if (!industry) return null;

  const si = industriesSi[slug];
  const name = t(industry.name, si?.name);
  const short = t(industry.short, si?.short);
  const path = `/industries/${industry.slug}`;
  const others = industries.filter((i) => i.slug !== industry.slug).slice(0, 6);

  return (
    <>
      <LandingHero
        eyebrow={industry.keyword}
        title={industry.headline}
        titleSi={si?.headline}
        intro={industry.intro}
        introSi={si?.intro}
        crumbs={[
          { name: t("Industries", "Industries"), path: "/industries" },
          { name, path },
        ]}
      />

      <IndustryShowcase slug={industry.slug} name={name} short={short} />

      <section className={styles.section}>
        <div className={styles.split}>
          <div className={styles.sectionHead}>
            <span className="eyebrow">{t("The challenge", "ගැටලුව")}</span>
            <h2 className={styles.h2}>
              {lang === "si"
                ? `${name} දිනපතා මුහුණ දෙන දේවල්`
                : lang === "ta"
                  ? `${name} தினமும் எதிர்கொள்ளும் சவால்கள்`
                  : `What ${industry.name.toLowerCase()} deal with every day`}
            </h2>
            <p className={styles.text}>
              {t(
                "Generic billing software treats every shop the same. MariaPoS is built around the real problems at a Sri Lankan counter, and every feature is included in one licence.",
                "සාමාන්‍ය billing software හැම වෙළඳසැලක්ම එක විදිහට සලකනවා. MariaPoS හදලා තියෙන්නේ ශ්‍රී ලාංකික counter එකක සැබෑ ගැටලු වටා, සියලුම features එක licence එකකට ඇතුළත්.",
              )}
            </p>
          </div>
          <ul className={styles.challenges} data-reveal="up">
            <li className={styles.challengesTitle}>{t("Common problems", "සාමාන්‍ය ගැටලු")}</li>
            {industry.challenges.map((c, ci) => (
              <li key={c}>
                <TriangleAlert size={16} />
                <span>{t(c, si?.challenges[ci])}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <span className="eyebrow">{t("How MariaPoS helps", "MariaPoS උදව් වෙන්නේ කොහොමද")}</span>
          <h2 className={styles.h2}>
            {lang === "si"
              ? `${short} සඳහා වඩාත්ම වැදගත් MariaPoS features`
              : lang === "ta"
                ? `${short}-க்கு மிக முக்கியமான MariaPoS features`
                : `MariaPoS features that matter most for ${industry.short.toLowerCase()}`}
          </h2>
        </div>
        <div className={styles.cards3}>
          {industry.highlights.map((h, i) => {
            const row = si?.highlights[i];
            return (
              <article key={h.title} data-reveal="up" data-delay={(i % 3) * 70} className={styles.card}>
                <CheckCircle2 size={22} color="var(--red)" />
                <h3 className={styles.cardTitle}>{t(h.title, row?.[0])}</h3>
                <p className={styles.cardBody}>{t(h.body, row?.[1])}</p>
              </article>
            );
          })}
          <Link href="/features" data-reveal="up" className={styles.card}>
            <h3 className={styles.cardTitle}>
              {lang === "si"
                ? `තවත් features ${featureCount - industry.highlights.length}ක්`
                : lang === "ta"
                  ? `மேலும் ${featureCount - industry.highlights.length} features`
                  : `Plus ${featureCount - industry.highlights.length} more features`}
            </h3>
            <p className={styles.cardBody}>
              {t(
                "Shifts & till control, supplier GRN, 13+ reports, SMS e-bills, Telegram alerts and cloud sync.",
                "Shifts සහ till control, supplier GRN, reports 13+, SMS e-bills, Telegram alerts සහ cloud sync.",
              )}
            </p>
            <span className={styles.cardLink}>
              {t("See all features", "සියලුම features බලන්න")} <ArrowRight size={14} />
            </span>
          </Link>
        </div>
      </section>

      <FaqBlock
        title={`${industry.keyword}: common questions`}
        titleSi={`${industry.keyword}: නිතර අසන ප්‍රශ්න`}
        faqs={industry.faqs.map((f, i) => ({
          ...f,
          qSi: industriesSi[slug]?.faqs[i]?.[0],
          aSi: industriesSi[slug]?.faqs[i]?.[1],
        }))}
      />

      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <h2 className={styles.h2}>{t("MariaPoS for other businesses", "වෙනත් ව්‍යාපාර සඳහා MariaPoS")}</h2>
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
    </>
  );
}
