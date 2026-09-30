import {
  Apple,
  BookOpen,
  Car,
  Coffee,
  Hammer,
  Pill,
  Shirt,
  Smartphone,
  Sparkles,
  Warehouse,
  type LucideIcon,
} from "lucide-react";

export type Industry = {
  slug: string;
  name: string;
  /** Short label for cards and menus. */
  short: string;
  icon: LucideIcon;
  /** Primary search phrase the page targets. */
  keyword: string;
  keywords: string[];
  headline: string;
  intro: string;
  challenges: string[];
  highlights: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
};

export const industries: Industry[] = [
  {
    slug: "supermarket-grocery",
    name: "Supermarkets & Grocery Shops",
    short: "Supermarket & grocery",
    icon: Apple,
    keyword: "Supermarket POS system",
    keywords: ["grocery POS system", "supermarket billing software", "mini market POS", "grocery store billing system", "retail shop POS"],
    headline: "The supermarket & grocery POS system built for busy retail queues",
    intro:
      "From corner groceries to multi-till supermarkets, MariaPoS bills fast by barcode or by weight, keeps FIFO stock accurate across thousands of items, and runs 100% offline without network lag.",
    challenges: [
      "Long queues at peak hours and weekends",
      "Thousands of products, many without barcodes or sold loose",
      "Stock and cost confusion when supplier prices keep changing",
      "Cash shortages that can't be traced to a shift",
    ],
    highlights: [
      { title: "Fast barcode & shortcut billing", body: "USB scanner billing with F-key shortcuts keeps each customer to seconds." },
      { title: "Sell by weight", body: "Rice, dhal, sugar, vegetables and loose goods billed by KG or g with decimal quantities." },
      { title: "FIFO batches", body: "Every GRN becomes a cost batch, so profit stays accurate when wholesale prices move." },
      { title: "Barcode labels", body: "Print labels for home-packed and loose items so everything scans." },
      { title: "Loyalty & SMS bills", body: "Reward regulars with points and send receipts to their phone." },
    ],
    faqs: [
      { q: "Can MariaPoS bill items by weight?", a: "Yes. Products can use KG, g, L, ml and other units, and quantities can be entered with decimals at the counter." },
      { q: "Can I run more than one till?", a: "Yes. Each till runs MariaPoS and syncs to the same cloud panel, so the owner sees combined sales." },
      { q: "Does it work during internet outages?", a: "Yes. Billing, stock and shifts run fully offline and sync automatically when the connection returns." },
    ],
  },
  {
    slug: "pharmacy",
    name: "Pharmacies & Healthcare Shops",
    short: "Pharmacy",
    icon: Pill,
    keyword: "Pharmacy POS system",
    keywords: ["pharmacy billing software", "medical shop POS", "pharmacy inventory software", "chemist billing system"],
    headline: "Pharmacy POS & inventory software for modern pharmacies",
    intro:
      "Pharmacies stock thousands of small, fast-moving items bought from many distributors on credit. MariaPoS keeps every batch, supplier cheque and cashier shift under control while billing quickly at the counter.",
    challenges: [
      "Many distributors, credit terms and post-dated cheques",
      "Frequent price changes from suppliers",
      "Items sold by strip, card or pack",
      "Staff handling cash across long opening hours",
    ],
    highlights: [
      { title: "FIFO batch stock", body: "Older stock is consumed first and every batch keeps its own cost price." },
      { title: "Supplier payables & cheques", body: "Track what you owe each distributor and get reminded before cheques mature." },
      { title: "Flexible units", body: "Sell by pack, card, bottle or piece with the right price for each." },
      { title: "Shift control", body: "Opening float, blind count and short/excess recorded per pharmacist or cashier." },
      { title: "Customer history", body: "Attach customers by phone to see their purchase history and credit." },
    ],
    faqs: [
      { q: "Can I track distributor credit and cheques?", a: "Yes. Supplier payables, part-payments and post-dated cheques are tracked with maturity reminders at login." },
      { q: "Can cashiers be stopped from giving discounts?", a: "Yes. Item discounts, bill discounts and price edits are separate permissions you can switch off per user." },
      { q: "Can I see stock value at cost?", a: "Yes. The inventory report shows stock on hand and its value using FIFO batch costs." },
    ],
  },
  {
    slug: "hardware-store",
    name: "Hardware & Building Material Stores",
    short: "Hardware store",
    icon: Hammer,
    keyword: "Hardware store POS system",
    keywords: ["hardware store billing software", "hardware shop software", "building materials POS"],
    headline: "Hardware shop POS system that handles metres, boxes and trade customers",
    intro:
      "Hardware stores sell by the piece, metre, box and bag, to walk-in customers and contractors on credit. MariaPoS handles every unit, retail and wholesale price, and customer credit without a separate book.",
    challenges: [
      "Items sold by length, weight and pack",
      "Different prices for contractors and walk-ins",
      "Large credit balances with trade customers",
      "Thousands of small parts without barcodes",
    ],
    highlights: [
      { title: "Any unit", body: "Metre, feet, KG, box, pack and piece with decimal quantities." },
      { title: "Wholesale price toggle", body: "Switch a bill to wholesale pricing with F5 for contractors and resellers." },
      { title: "Customer credit", body: "Credit bills, part payments and outstanding balances per customer." },
      { title: "Barcode label printing", body: "Label bins and parts so they can be scanned at the counter." },
      { title: "Cheque payments", body: "Accept cheques with number, bank and date recorded on the bill." },
    ],
    faqs: [
      { q: "Can I sell cable or pipe by the metre?", a: "Yes. Set the product unit to m, ft or cm and enter decimal quantities at checkout." },
      { q: "Can I give contractors a different price?", a: "Yes. Every product has retail and wholesale prices and the bill can switch between them." },
      { q: "Does it track credit customers?", a: "Yes. Credit bills, settlements and balances are tracked per customer in the POS and cloud panel." },
    ],
  },
  {
    slug: "clothing-textile",
    name: "Clothing, Textile & Fashion Stores",
    short: "Clothing & textile",
    icon: Shirt,
    keyword: "Clothing store POS system",
    keywords: ["textile shop billing software", "fashion store POS", "boutique POS system"],
    headline: "POS system for clothing, textile and fashion shops",
    intro:
      "Seasonal rushes bring peak crowds and heavy discounting. MariaPoS lets you run promo codes, loyalty and returns cleanly while keeping every cashier's till accountable.",
    challenges: [
      "Peak seasonal shopping and holiday rush",
      "Discounts and offers that are hard to control",
      "Exchanges and returns",
      "Fabric sold by the metre",
    ],
    highlights: [
      { title: "Promo codes & discounts", body: "Run festival offers with validated promo codes and permission-controlled discounts." },
      { title: "Returns & exchanges", body: "Invoice-based returns that restock items and adjust cash or credit." },
      { title: "Loyalty points", body: "Customers earn and redeem points, bringing them back next season." },
      { title: "Sell fabric by length", body: "Bill fabric by metre or yard with decimal quantities." },
      { title: "SMS e-bills", body: "Send receipts by SMS so customers keep proof for exchanges." },
    ],
    faqs: [
      { q: "Can I run festival discount campaigns?", a: "Yes. Create promo codes and apply item or bill discounts, with control over which staff can use them." },
      { q: "How are exchanges handled?", a: "Return the item against the original invoice, which restocks it, then bill the replacement item." },
      { q: "Can customers get their bill by SMS?", a: "Yes. SMS e-bills are sent from a prepaid SMS wallet at checkout." },
    ],
  },
  {
    slug: "bookshop-stationery",
    name: "Bookshops & Stationery Stores",
    short: "Bookshop & stationery",
    icon: BookOpen,
    keyword: "Bookshop POS system",
    keywords: ["stationery shop billing software", "bookshop billing system", "school supplies POS"],
    headline: "Bookshop & stationery POS for the back-to-school rush",
    intro:
      "January brings the busiest weeks of the year for bookshops. MariaPoS keeps queues moving, tracks thousands of small SKUs and shows exactly what sold so you can reorder in time.",
    challenges: ["School-season queues", "Thousands of small, low-value items", "Items without barcodes", "Stock running out at peak season"],
    highlights: [
      { title: "Barcode & name search", body: "Scan ISBNs and barcodes or search by name in the same box." },
      { title: "Label printing", body: "Print barcode labels for pens, books and items without one." },
      { title: "Low-stock alerts", body: "Know what to reorder before the school season peak." },
      { title: "Product sales report", body: "See best-selling items by period and plan next year's stock." },
    ],
    faqs: [
      { q: "Can I scan book ISBN barcodes?", a: "Yes. Any barcode your scanner reads can be saved on the product and scanned at checkout." },
      { q: "Can I print barcode labels?", a: "Yes. MariaPoS generates and prints barcode labels for your products." },
    ],
  },
  {
    slug: "electronics-mobile",
    name: "Mobile Phone & Electronics Shops",
    short: "Mobile & electronics",
    icon: Smartphone,
    keyword: "Mobile shop POS system",
    keywords: ["phone shop billing software", "electronics store POS", "mobile accessories shop software"],
    headline: "POS for mobile phone, accessories and electronics shops",
    intro:
      "High-value items, card and bank-transfer payments, and customers who come back with warranty questions. MariaPoS records every payment method and keeps the full bill history searchable.",
    challenges: ["High-value items and cash risk", "Mixed card, cash and transfer payments", "Warranty and return queries", "Cashier discount abuse"],
    highlights: [
      { title: "Split payments", body: "Take part cash, part card or transfer on one bill with references recorded." },
      { title: "Sales history & reprint", body: "Find any past bill by invoice or customer and reprint it for warranty claims." },
      { title: "Discount permissions & PIN override", body: "Only approved staff can reduce prices, with manager PIN approval at the counter." },
      { title: "Telegram alerts", body: "Get every sale on your phone the moment it happens." },
    ],
    faqs: [
      { q: "Can I find old bills for warranty claims?", a: "Yes. Sales history lets you search by invoice, date or customer and reprint the bill." },
      { q: "Can I record bank transfer references?", a: "Yes. Bank transfer payments capture a reference number on the bill." },
    ],
  },
  {
    slug: "cosmetics-beauty",
    name: "Cosmetics & Beauty Stores",
    short: "Cosmetics & beauty",
    icon: Sparkles,
    keyword: "Cosmetics shop POS system",
    keywords: ["beauty shop billing software", "cosmetics store POS"],
    headline: "Cosmetics & beauty store POS with loyalty built in",
    intro: "Beauty retail runs on repeat customers. MariaPoS brings loyalty points, customer history and SMS receipts to every sale.",
    challenges: ["Repeat customers who expect rewards", "Many small, high-margin items", "Theft and shrinkage"],
    highlights: [
      { title: "Loyalty points", body: "Customers earn points per dollar spent and redeem them at the counter." },
      { title: "Shrinkage report", body: "Tag removals as damage or theft and see real losses by period." },
      { title: "Customer profiles", body: "Attach customers by phone and see what they buy." },
      { title: "Promo codes", body: "Run social-media offers with trackable codes." },
    ],
    faqs: [{ q: "Does MariaPoS include loyalty points?", a: "Yes. Loyalty is built in: set the earn rate in settings and customers redeem points as a discount." }],
  },
  {
    slug: "bakery-cafe",
    name: "Bakeries, Cafés & Takeaways",
    short: "Bakery & café",
    icon: Coffee,
    keyword: "Bakery POS system",
    keywords: ["cafe billing software", "bakery billing system", "takeaway POS"],
    headline: "Counter POS for bakeries, cafés and takeaways",
    intro: "Quick-service counters need speed above all. MariaPoS bills with a keypad or touch screen, tracks daily cash per shift and shows your busiest hours.",
    challenges: ["Rush-hour queues", "Many cash transactions", "Items sold by piece and weight", "Knowing peak hours for staffing"],
    highlights: [
      { title: "Touch keypad", body: "Large on-screen keypad for touch terminals." },
      { title: "Shift cash control", body: "Expected vs counted cash at every shift close." },
      { title: "Sales trend reports", body: "See busy days and hours to plan baking and staffing." },
      { title: "Expense tracking", body: "Record flour, gas and salaries to see true profit." },
    ],
    faqs: [
      { q: "Is MariaPoS suitable for table service?", a: "MariaPoS is designed for counter-service billing such as bakeries, takeaways and self-service cafés. If you need table service, contact us to discuss your setup." },
    ],
  },
  {
    slug: "wholesale-distribution",
    name: "Wholesalers & Distributors",
    short: "Wholesale & distribution",
    icon: Warehouse,
    keyword: "Wholesale billing software",
    keywords: ["distribution software", "wholesale POS system", "wholesale shop billing"],
    headline: "Wholesale billing & stock software for distributors",
    intro: "Large orders, trade credit and cheques are daily business for wholesalers. MariaPoS handles wholesale pricing, receivables and payables from one ledger.",
    challenges: ["Credit sales to shops", "Post-dated cheques in and out", "Accurate cost on bulk stock", "Supplier and customer statements"],
    highlights: [
      { title: "Wholesale pricing", body: "A dedicated wholesale price per product and one-key switching." },
      { title: "Receivables & payables", body: "Track what customers owe you and what you owe suppliers." },
      { title: "Cheque tracking", body: "Record cheque details and get maturity reminders." },
      { title: "Statements & P&L", body: "Supplier statements, customer reports and FIFO-based profit." },
    ],
    faqs: [{ q: "Can I sell on credit to other shops?", a: "Yes. Credit bills, part payments and outstanding balances are tracked per customer." }],
  },
  {
    slug: "auto-parts",
    name: "Auto Parts & Spare Parts Shops",
    short: "Auto & spare parts",
    icon: Car,
    keyword: "Spare parts shop POS system",
    keywords: ["auto parts billing software", "vehicle spare parts shop software"],
    headline: "POS for auto parts and spare parts shops",
    intro: "Thousands of part numbers, garages on credit and supplier cheques. MariaPoS brings searchable stock, credit and supplier control to the parts counter.",
    challenges: ["Large catalogue of part numbers", "Garage and mechanic credit accounts", "Imported stock with changing costs"],
    highlights: [
      { title: "Fast search", body: "Search by part name or number, or scan the barcode." },
      { title: "FIFO costing", body: "Each shipment keeps its own landed cost for accurate margin." },
      { title: "Credit customers", body: "Garages and mechanics on credit with full statements." },
      { title: "Wholesale price", body: "Trade prices for garages, retail for walk-ins." },
    ],
    faqs: [{ q: "Can I track stock value when import costs change?", a: "Yes. FIFO batches keep each shipment's cost, so stock value and profit stay accurate." }],
  },
];

export const getIndustry = (slug: string) => industries.find((i) => i.slug === slug);
