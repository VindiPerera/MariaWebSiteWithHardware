import type { Metadata } from "next";
import { coreKeywords, site } from "./site";

type PageSeo = {
  title: string;
  description: string;
  /** Route path starting with "/", used for the canonical URL. */
  path: string;
  keywords?: string[];
  /** Use the title as-is instead of applying the "%s — MariaPoS" template. */
  absoluteTitle?: boolean;
};

export const ogImage = { url: "/opengraph-image", width: 1200, height: 630, alt: "MariaPoS — High-Velocity POS & FIFO Inventory System" };

/** Per-page metadata with canonical URL, Open Graph and Twitter cards. */
export function pageMetadata({ title, description, path, keywords = [], absoluteTitle }: PageSeo): Metadata {
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords: [...keywords, ...coreKeywords],
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: "en",
      url: path,
      title,
      description,
      images: [ogImage],
    },
    twitter: { card: "summary_large_image", title, description, images: [ogImage.url] },
  };
}

export const absoluteUrl = (path: string) => `${site.url}${path === "/" ? "" : path}`;

export const organizationId = `${site.url}/#organization`;

export const organizationSchema = {
  "@type": ["Organization", "LocalBusiness"],
  "@id": organizationId,
  name: site.company,
  alternateName: ["JAAN Network", site.name],
  url: site.url,
  logo: absoluteUrl("/icon.png"),
  image: absoluteUrl("/opengraph-image"),
  email: site.email,
  telephone: site.phoneIntl,
  sameAs: [site.facebookHref],
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.streetAddress,
    addressLocality: site.city,
    addressRegion: site.region,
    postalCode: site.postalCode,
    addressCountry: site.country,
  },
  geo: { "@type": "GeoCoordinates", latitude: site.geo.latitude, longitude: site.geo.longitude },
  areaServed: { "@type": "AdministrativeArea", name: "Worldwide" },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: site.phoneIntl,
      contactType: "sales",
      availableLanguage: ["English"],
    },
    {
      "@type": "ContactPoint",
      telephone: site.phoneIntl,
      contactType: "technical support",
      availableLanguage: ["English"],
    },
  ],
};

export const softwareSchema = {
  "@type": "SoftwareApplication",
  "@id": `${site.url}/#software`,
  name: site.name,
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "Point of Sale (POS) Software",
  operatingSystem: "Windows 10, Windows 11",
  description:
    "Offline-first Windows POS and inventory system for retail and wholesale businesses: barcode billing, FIFO batch stock, shifts and till control, supplier GRN, customer credit, loyalty, SMS e-bills, Telegram sales alerts and cloud sync.",
  url: site.url,
  publisher: { "@id": organizationId },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: "95.55",
    highPrice: "286.65",
    offerCount: 3,
    availability: "https://schema.org/InStock",
  },
  featureList: [
    "Barcode & keyboard-shortcut billing",
    "Works 100% offline",
    "FIFO batch inventory",
    "Shift & till management",
    "Supplier GRN and cheque reminders",
    "Customer credit and loyalty points",
    "SMS e-bill receipts",
    "Telegram sales alerts",
    "Cloud sync and web back-office",
    "13+ business reports with PDF & Excel export",
  ],
};

export const websiteSchema = {
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  url: site.url,
  name: site.name,
  inLanguage: "en-LK",
  publisher: { "@id": organizationId },
};

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}
