import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, MapPin } from "lucide-react";
import { LandingHero } from "@/components/landing/LandingHero";
import { FaqBlock } from "@/components/sections/FaqBlock";
import { TrialCta } from "@/components/sections/TrialCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { countries, getCountry } from "@/lib/geo";
import { cityList, countryFaqs, placeReasons } from "@/lib/geoContent";
import { getIndustry } from "@/lib/industries";
import { breadcrumbSchema, organizationId, pageMetadata } from "@/lib/seo";
import styles from "@/components/landing/Landing.module.css";

type Props = { params: Promise<{ country: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return countries.map(({ slug }) => ({ country: slug }));
}

export async function generateMetadata({ params }: Props) {
  const country = getCountry((await params).country);
  if (!country) return {};
  const n = country.name;
  return pageMetadata({
    title: `POS System in ${n} — POS & Billing Software for ${n} Shops`,
    description: `Best POS software for shops in ${n}: offline-first billing, ${country.currency} pricing, ${country.tax} reports, local payments like ${country.payments[0]}, FIFO stock and Telegram sales alerts. Available in ${cityList(country.cities, 3)} and across ${n}. Free 7-day trial.`,
    path: `/pos-system/${country.slug}`,
    keywords: [
      `POS system ${n}`,
      `POS software ${n}`,
      `POS system in ${n}`,
      `best POS system in ${n}`,
      `billing software ${n}`,
      `retail POS ${n}`,
      `inventory software ${n}`,
      `POS system price in ${n}`,
      ...country.cities.slice(0, 6).map((c) => `POS system ${c}`),
      ...(country.regions ?? []).slice(0, 10).map((reg) => `POS system ${reg.name}`),
    ],
  });
}

export default async function CountryPage({ params }: Props) {
  const country = getCountry((await params).country);
  if (!country) notFound();

  const path = `/pos-system/${country.slug}`;
  const focus = country.focus.map(getIndustry).filter((i) => i !== undefined);
  const neighbours = countries.filter((c) => c.continent === country.continent && c.slug !== country.slug);

  return (
    <main id="top">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "POS System Worldwide", path: "/pos-system" },
            { name: country.name, path },
          ]),
          {
            "@type": "Service",
            name: `POS system in ${country.name}`,
            serviceType: "Point of Sale software",
            provider: { "@id": organizationId },
            areaServed: { "@type": "Country", name: country.name, identifier: country.code },
          },
        ]}
      />
      <LandingHero
        eyebrow={`${country.continent} · ${country.currency}`}
        title={`POS system & billing software for shops in ${country.name}`}
        intro={`${country.note} MariaPoS gives ${country.name} retailers fast barcode billing, FIFO stock control, shift cash control and live sales alerts in one offline-first Windows POS, with no monthly fees.`}
        crumbs={[
          { name: "POS System Worldwide", path: "/pos-system" },
          { name: country.name, path },
        ]}
      />

      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <span className="eyebrow">Why MariaPoS in {country.name}</span>
          <h2 className={styles.h2}>A POS system that fits how {country.name} shops work</h2>
        </div>
        <div className={styles.cards3}>
          {placeReasons(country, country.name).map(({ title, body, icon: Icon }, i) => (
            <article key={title} data-reveal="up" data-delay={(i % 3) * 70} className={styles.card}>
              <span className={styles.cardIcon}>
                <Icon size={20} />
              </span>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardBody}>{body}</p>
            </article>
          ))}
        </div>
      </section>

      {country.regions && (
        <section className={styles.section}>
          <div className={styles.sectionHead}>
            <span className="eyebrow">Find your {country.regionLabel}</span>
            <h2 className={styles.h2}>
              POS system by {country.regionLabel} in {country.name}
            </h2>
          </div>
          <div className={styles.cards3}>
            {country.regions.map((reg) => (
              <Link key={reg.slug} href={`${path}/${reg.slug}`} className={styles.card}>
                <h3 className={styles.cardTitle}>POS system {reg.name}</h3>
                <p className={styles.cardBody}>{cityList(reg.cities, 4)}</p>
                <span className={styles.cardLink}>
                  View <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <span className="eyebrow">Local businesses</span>
          <h2 className={styles.h2}>Popular with these {country.name} businesses</h2>
        </div>
        <div className={styles.cards}>
          {focus.map(({ slug, short, icon: Icon, highlights }) => (
            <Link key={slug} href={`/industries/${slug}`} data-reveal="up" className={styles.card}>
              <span className={styles.cardIcon}>
                <Icon size={20} />
              </span>
              <h3 className={styles.cardTitle}>
                {short} POS in {country.name}
              </h3>
              <p className={styles.cardBody}>{highlights.map((h) => h.title).join(" · ")}</p>
              <span className={styles.cardLink}>
                Learn more <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <span className="eyebrow">Coverage</span>
          <h2 className={styles.h2}>Available across {country.name}</h2>
          <p className={styles.text}>Shops in these cities and everywhere else in {country.name} can start today:</p>
        </div>
        <div className={styles.tags}>
          {country.cities.map((city) => (
            <span key={city} className={styles.tag}>
              <MapPin size={12} color="var(--red)" /> POS system {city}
            </span>
          ))}
        </div>
      </section>

      <FaqBlock title={`POS system in ${country.name}: FAQ`} faqs={countryFaqs(country)} />

      {neighbours.length > 0 && (
        <section className={styles.section}>
          <div className={styles.sectionHead}>
            <h2 className={styles.h2}>MariaPoS elsewhere in {country.continent}</h2>
          </div>
          <div className={styles.tags}>
            {neighbours.map((c) => (
              <Link key={c.slug} href={`/pos-system/${c.slug}`} className={styles.tag}>
                POS system {c.name}
              </Link>
            ))}
          </div>
        </section>
      )}

      <TrialCta />
    </main>
  );
}
