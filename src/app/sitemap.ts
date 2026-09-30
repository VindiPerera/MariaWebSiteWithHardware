import type { MetadataRoute } from "next";
import { industries } from "@/lib/industries";
import { countries } from "@/lib/geo";
import { absoluteUrl } from "@/lib/seo";

type Entry = MetadataRoute.Sitemap[number];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const page = (path: string, priority: number, changeFrequency: Entry["changeFrequency"] = "monthly"): Entry => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency,
    priority,
  });

  return [
    page("/", 1, "weekly"),
    page("/hardware", 0.95, "weekly"),
    page("/features", 0.9, "weekly"),
    page("/pricing", 0.9, "weekly"),
    page("/product", 0.8),
    page("/industries", 0.8),
    page("/pos-system", 0.8),
    page("/contact", 0.7),
    page("/about", 0.6),
    ...industries.map((i) => page(`/industries/${i.slug}`, 0.7)),
    ...countries.map((c) => page(`/pos-system/${c.slug}`, 0.7)),
    ...countries.flatMap((c) => (c.regions ?? []).map((reg) => page(`/pos-system/${c.slug}/${reg.slug}`, 0.6))),
    page("/terms-and-conditions", 0.3, "yearly"),
    page("/privacy-policy", 0.3, "yearly"),
    page("/refund-policy", 0.3, "yearly"),
  ];
}
