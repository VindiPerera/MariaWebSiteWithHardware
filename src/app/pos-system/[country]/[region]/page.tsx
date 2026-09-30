import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, MapPin } from "lucide-react";
import { LandingHero } from "@/components/landing/LandingHero";
import { FaqBlock } from "@/components/sections/FaqBlock";
import { TrialCta } from "@/components/sections/TrialCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { allRegionParams, getCountry, getRegion } from "@/lib/geo";
import { cityList, placeReasons, regionFaqs } from "@/lib/geoContent";
import { getIndustry } from "@/lib/industries";
import { breadcrumbSchema, organizationId, pageMetadata } from "@/lib/seo";
import styles from "@/components/landing/Landing.module.css";

const plural = (word: string) => (word.endsWith("y") ? `${word.slice(0, -1)}ies` : `${word}s`);

type Props = { params: Promise<{ country: string; region: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return allRegionParams();
}

async function resolve(params: Props["params"]) {
  const { country: countrySlug, region: regionSlug } = await params;
  const country = getCountry(countrySlug);
  const region = country && getRegion(country, regionSlug);
  return country && region ? { country, region } : null;
}

export async function generateMetadata({ params }: Props) {
  const found = await resolve(params);
  if (!found) return {};
  const { country, region } = found;
  return pageMetadata({
    title: `POS System in ${region.name} — ${cityList(region.cities.filter((c) => c !== region.name), 3)}`,
    description: `POS software for shops in ${region.name}: ${cityList(region.cities, 5)}. Offline-first billing, ${country.tax} reports, local payments like ${country.payments[0]}, FIFO stock and live sales alerts. No monthly fees. Free 7-day trial.`,
    path: `/pos-system/${country.slug}/${region.slug}`,
    keywords: [
      `POS system ${region.name}`,
      `POS software ${region.name}`,
      `POS system in ${region.name}`,
      `billing software ${region.name}`,
      `retail POS ${region.name}`,
      ...region.cities.flatMap((c) => [`POS system ${c}`, `POS software ${c}`]),
      `POS system ${country.name}`,
    ],
  });
}

export default async function RegionPage({ params }: Props) {
  const found = await resolve(params);
  if (!found) notFound();
  const { country, region } = found;

  const countryPath = `/pos-system/${country.slug}`;
  const path = `${countryPath}/${region.slug}`;
  const focus = (region.focus ?? country.focus).map(getIndustry).filter((i) => i !== undefined);
  const siblings = (country.regions ?? []).filter((reg) => reg.slug !== region.slug);
  const intro =
    region.note ??
    `From ${cityList(region.cities, 3)}, shops across ${region.name} need a POS that bills fast, keeps stock accurate and works even when the internet doesn't.`;

  return (
    <main id="top">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "POS System Worldwide", path: "/pos-system" },
            { name: country.name, path: countryPath },
            { name: region.name, path },
          ]),
          {
            "@type": "Service",
            name: `POS system in ${region.name}, ${country.name}`,
            serviceType: "Point of Sale software",
            provider: { "@id": organizationId },
            areaServed: [
              {
                "@type": "AdministrativeArea",
                name: region.name,
                containedInPlace: { "@type": "Country", name: country.name, identifier: country.code },
              },
              ...region.cities.map((city) => ({ "@type": "City", name: city })),
            ],
          },
        ]}
      />
      <LandingHero
        eyebrow={`${country.name} · ${country.regionLabel ?? "region"}`}
        title={`POS system & billing software for shops in ${region.name}`}
        intro={`${intro} MariaPoS gives ${region.name} retailers barcode billing, FIFO stock, shift cash control and live sales alerts in one offline-first Windows POS.`}
        crumbs={[
          { name: "POS System Worldwide", path: "/pos-system" },
          { name: country.name, path: countryPath },
          { name: region.name, path },
        ]}
      />

      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <span className="eyebrow">Why MariaPoS in {region.name}</span>
          <h2 className={styles.h2}>Why {region.name} shops choose MariaPoS</h2>
        </div>
        <div className={styles.cards3}>
          {placeReasons(country, region.name).map(({ title, body, icon: Icon }, i) => (
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

      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <span className="eyebrow">Coverage</span>
          <h2 className={styles.h2}>POS software for {cityList(region.cities, 3)} and nearby</h2>
          <p className={styles.text}>MariaPoS is available to shops across {region.name}, including:</p>
        </div>
        <div className={styles.tags}>
          {region.cities.map((city) => (
            <span key={city} className={styles.tag}>
              <MapPin size={12} color="var(--red)" /> POS system {city}
            </span>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <span className="eyebrow">Local businesses</span>
          <h2 className={styles.h2}>Built for {region.name} retail</h2>
        </div>
        <div className={styles.cards}>
          {focus.map(({ slug, short, icon: Icon, highlights }) => (
            <Link key={slug} href={`/industries/${slug}`} className={styles.card}>
              <span className={styles.cardIcon}>
                <Icon size={20} />
              </span>
              <h3 className={styles.cardTitle}>
                {short} POS in {region.name}
              </h3>
              <p className={styles.cardBody}>{highlights.map((h) => h.title).join(" · ")}</p>
              <span className={styles.cardLink}>
                Learn more <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <FaqBlock title={`POS system in ${region.name}: FAQ`} faqs={regionFaqs(country, region)} />

      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <h2 className={styles.h2}>
            Other {plural(country.regionLabel ?? "region")} in {country.name}
          </h2>
        </div>
        <div className={styles.tags}>
          <Link href={countryPath} className={styles.tag}>
            POS system {country.name} <ArrowRight size={12} />
          </Link>
          {siblings.map((reg) => (
            <Link key={reg.slug} href={`${countryPath}/${reg.slug}`} className={styles.tag}>
              POS system {reg.name}
            </Link>
          ))}
        </div>
      </section>

      <TrialCta />
    </main>
  );
}
