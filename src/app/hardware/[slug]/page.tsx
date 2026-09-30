import { Metadata } from "next";
import { notFound } from "next/navigation";
import { hardwareCatalog, formatLkr } from "@/lib/hardwareCatalog";
import { ProductDetailClient } from "./ProductDetailClient";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

function findProduct(slugOrCode: string) {
  const norm = slugOrCode.toLowerCase();
  return (
    hardwareCatalog.find((item) => item.slug.toLowerCase() === norm) ||
    hardwareCatalog.find((item) => item.code.toLowerCase() === norm)
  );
}

export async function generateStaticParams() {
  const params: { slug: string }[] = [];
  for (const item of hardwareCatalog) {
    params.push({ slug: item.slug });
    // Also support direct code parameter (e.g. PRI2915)
    params.push({ slug: item.code.toLowerCase() });
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = findProduct(slug);

  if (!product) {
    return { title: "Hardware Product Not Found" };
  }

  const title = `${product.name} (${product.code}) — ${formatLkr(product.price)} Sri Lanka`;
  const description = `${product.subtitle}. Buy official JAAN certified ${product.name} in Sri Lanka. 1-Year Commercial Warranty, Cash on Delivery, and fast islandwide dispatch.`;

  return pageMetadata({
    title,
    description,
    path: `/hardware/${product.slug}`,
    absoluteTitle: true,
    keywords: [
      product.name,
      product.code,
      product.categoryLabel,
      "POS hardware Sri Lanka",
      "buy POS in Sri Lanka",
      "Cash on Delivery POS hardware",
    ],
  });
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = findProduct(slug);

  if (!product) {
    notFound();
  }

  const breadcrumbs = [
    { name: "Hardware Store", path: "/hardware" },
    { name: product.categoryLabel, path: `/hardware?category=${product.category}` },
    { name: product.name, path: `/hardware/${product.slug}` },
  ];

  const productSchema = {
    "@type": "Product",
    name: product.name,
    description: product.description,
    sku: product.code,
    category: product.categoryLabel,
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: "LKR",
      availability: product.inStock
        ? "https://schema.org/InStock"
        : "https://schema.org/PreOrder",
      seller: {
        "@type": "Organization",
        name: site.company,
      },
    },
  };

  return (
    <main id="top">
      <JsonLd data={[breadcrumbSchema(breadcrumbs), productSchema]} />
      <ProductDetailClient product={product} />
    </main>
  );
}
