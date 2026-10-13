// Canonical origin used for metadata, sitemap and structured data. Set NEXT_PUBLIC_SITE_URL in production.
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://mariapos-hardware.jaan.lk").replace(/\/+$/, "");

export const site = {
  name: "MariaPoS & Hardware",
  shortName: "MariaPoS",
  url: siteUrl,
  company: "JAAN Network (PVT) Ltd.",
  tagline: "Offline-First Windows POS & Certified Hardware by JAAN Network (PVT) Ltd.",
  phone: "076 593 3255",
  phoneIntl: "+94765933255",
  phoneHref: "tel:+94765933255",
  whatsappNumber: "94765933255",
  whatsappHref: "https://wa.me/94765933255",
  email: "mariaPOS@gmail.com",
  emailHref: "mailto:mariaPOS@gmail.com",
  demoHref: "mailto:mariaPOS@gmail.com?subject=MariaPoS%20and%20Hardware%20Inquiry",
  facebookHref: "https://www.facebook.com/mariaposlk",
  address: "46 Hudson Road, Colombo, Sri Lanka",
  streetAddress: "46 Hudson Road",
  city: "Colombo",
  region: "Western Province",
  postalCode: "00300",
  country: "LK",
  geo: { latitude: 6.9022, longitude: 79.8533 },
  cloudPanelUrl: "https://maria-cloud.jaan.lk",
  trialDays: 7,
} as const;

/** Search phrases targeting both POS software and certified POS hardware. */
export const coreKeywords = [
  "POS system Sri Lanka",
  "POS hardware Sri Lanka",
  "touch screen POS terminal",
  "thermal receipt printer",
  "Xprinter receipt printer",
  "barcode scanner Sri Lanka",
  "cash drawer 5 pin",
  "bill counter machine",
  "retail POS software",
  "billing software",
  "point of sale system",
  "offline POS system",
  "Windows POS software",
  "retail POS with hardware",
  "inventory management software",
  "shop billing system",
  "cashier machine",
  "SMS bill receipt POS",
  "FIFO stock management software",
  "POS machine Sri Lanka",
  "cashier machine price in Sri Lanka",
  "billing system Sri Lanka",
  "billing machine for shop",
  "POS system Colombo",
  "POS system Kandy",
  "POS system Jaffna",
  "POS system Galle",
  "POS system Kurunegala",
  "POS system Batticaloa",
  "POS system Trincomalee",
  "POS system Vavuniya",
  "பில்லிங் மென்பொருள்",
  "POS இயந்திரம்",
  "බිල්පත් මෘදුකාංග",
  "POS යන්ත්‍ර",
  "MariaPoS",
  "JAAN Network",
];

export type NavLink = { label: string; href: string; badge?: string };

export const navLinks: NavLink[] = [
  { label: "Features", href: "/features" },
  { label: "Product", href: "/product" },
  { label: "Hardware", href: "/hardware" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export const legalLinks: NavLink[] = [
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Refund Policy", href: "/refund-policy" },
];

export const footerColumns: { title: string; links: NavLink[] }[] = [
  {
    title: "POS Hardware",
    links: [
      { label: "All Hardware Catalog", href: "/hardware" },
      { label: "Touch POS Terminals", href: "/hardware?cat=touch-pos" },
      { label: "Thermal Receipt Printers", href: "/hardware?cat=printers" },
      { label: "1D & 2D Barcode Scanners", href: "/hardware?cat=scanners" },
      { label: "Cash Drawers & Trays", href: "/hardware?cat=cash-drawers" },
      { label: "Currency Bill Counters", href: "/hardware?cat=bill-counters" },
      { label: "Paper & Sticker Rolls", href: "/hardware?cat=consumables" },
      { label: "Complete POS Bundles", href: "/hardware?cat=bundles" },
    ],
  },
  {
    title: "Software Features",
    links: [
      { label: "Fast POS Billing", href: "/features#billing-checkout" },
      { label: "FIFO Inventory & Batches", href: "/features#inventory-stock" },
      { label: "Shifts & Cash Till Control", href: "/features#shifts-cash" },
      { label: "13+ Analytics & Reports", href: "/features#reports-analytics" },
      { label: "SMS e-Bills & Push Alerts", href: "/features#cloud-alerts" },
      { label: "Cloud Back-Office Sync", href: "/features#cloud-sync" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Supermarket & Grocery POS", href: "/industries/supermarket-grocery" },
      { label: "Pharmacy & Dispensary POS", href: "/industries/pharmacy" },
      { label: "Hardware & Paint Shop POS", href: "/industries/hardware-store" },
      { label: "Clothing & Textile POS", href: "/industries/clothing-textile" },
      { label: "Bakery & Cafe Counters", href: "/industries/bakery-cafe" },
      { label: "All Supported Industries", href: "/industries" },
    ],
  },
  {
    title: "Company & Sales",
    links: [
      { label: "About JAAN Network", href: "/about" },
      { label: "Contact Colombo Office", href: "/contact" },
      { label: "Request Hardware Quotation", href: "/hardware" },
      { label: "Book a Counter Demo", href: "/contact#demo" },
      { label: "Free 7-Day Software Trial", href: "/pricing" },
      { label: "Hotline: 076 593 3255", href: "tel:+94765933255" },
    ],
  },
];
