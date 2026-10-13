import { notFound } from "next/navigation";
import { IndustryDetailBody } from "@/components/industries/IndustryDetailBody";
import { JsonLd } from "@/components/seo/JsonLd";
import { getIndustry, industries } from "@/lib/industries";
import { breadcrumbSchema, organizationId, pageMetadata } from "@/lib/seo";

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
      <IndustryDetailBody slug={industry.slug} />
    </main>
  );
}
