import type { Metadata, Viewport } from "next";
import { Figtree, JetBrains_Mono, Poppins } from "next/font/google";
import { AppClientWrapper } from "@/components/providers/AppClientWrapper";
import { JsonLd } from "@/components/seo/JsonLd";
import { coreKeywords, site } from "@/lib/site";
import { ogImage, organizationSchema, softwareSchema, websiteSchema } from "@/lib/seo";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["500", "600", "700", "800"], variable: "--font-poppins" });
const figtree = Figtree({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-figtree" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-jetbrains" });

const defaultTitle = "MariaPoS & Hardware — Certified Touch Terminals, Receipt Printers & Windows POS Software";
const defaultDescription =
  "Official Sri Lanka POS hardware and software store. Buy certified touch screen POS terminals, thermal receipt printers, 1D/2D barcode scanners, cash drawers and bill counters with offline-first MariaPoS billing software. Islandwide delivery & warranty.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: defaultTitle, template: "%s | MariaPoS & Hardware" },
  description: defaultDescription,
  applicationName: site.name,
  keywords: coreKeywords,
  authors: [{ name: site.company, url: site.url }],
  creator: site.company,
  publisher: site.company,
  category: "Business Software & Hardware",
  alternates: { canonical: "/" },
  formatDetection: { telephone: true, email: true, address: true },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_LK",
    url: "/",
    title: defaultTitle,
    description: defaultDescription,
    images: [ogImage],
  },
  twitter: { card: "summary_large_image", title: defaultTitle, description: defaultDescription, images: [ogImage.url] },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export const viewport: Viewport = {
  themeColor: "#c62828",
  width: "device-width",
  initialScale: 1,
};

const motionScript = `if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('motion')`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${figtree.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionScript }} />
        <JsonLd data={[organizationSchema, websiteSchema, softwareSchema]} />
      </head>
      <body>
        <AppClientWrapper>{children}</AppClientWrapper>
      </body>
    </html>
  );
}
