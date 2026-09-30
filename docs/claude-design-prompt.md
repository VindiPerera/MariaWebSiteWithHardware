Design a complete, modern and minimalistic marketing + shop website for **MariaPoS** by JAAN Network (PVT) Ltd., a Windows POS software company in Sri Lanka that now also sells POS hardware. The site is **for Sri Lankan customers only**.

## Attachments
- **MariaPoS logo(s)**: use these exactly as provided. Do not redraw or recolour them.
- **Hardware catalogue PDF**: the single source of truth for every hardware product. Take product names, photos, specs and prices (LKR) from it. Do not invent products or specs. If a value is missing, show a clearly marked placeholder like `Rs. —`.

## Brand and visual style
Keep the existing MariaPoS colour theme, fonts and personality, but make the layout far more modern and minimal. Use generous white space, a strong type hierarchy, few borders, soft shadows, large rounded corners (16–24px) and restrained motion.

Colour tokens (use these exact values):
- `--red: #c62828` is the primary brand colour and primary buttons
- `--red-dark: #8b0000` is for hover/pressed states and deep accents
- `--red-light: #ef5350` and `--coral: #ff8a80` are for soft highlights, tags and gradients (use sparingly)
- `--ink: #1a1a1a` is for text and dark sections
- Background is `#ffffff`. Use near-white neutrals (e.g. `#fafafa`, `#f4f4f5`) for section banding.
- `--whatsapp: #1faa55` / `--whatsapp-dark: #178f47` are **only** for WhatsApp buy/contact buttons

Fonts:
- Display/headings: **Poppins** (500/600/700)
- Body: **Figtree** (400/500/600)
- Small labels, eyebrows, specs and prices: **JetBrains Mono** (uppercase eyebrows, letter-spacing 0.08em)

Max content width is 1240px. Design mobile-first: most Sri Lankan visitors arrive on phones from WhatsApp and Facebook. Every page must look excellent at 375px and at desktop width. Deliver both.

## Sri Lanka commerce rules (show these everywhere a product or plan is shown)
- **Cash on Delivery accepted**
- **Island-wide delivery** (all 25 districts)
- Prices in **LKR** (format `Rs. 45,000`)
- **Buying happens on WhatsApp.** There is no cart, checkout or card payment. Every "Buy" / "Order" button opens WhatsApp (`https://wa.me/94765933255`) with a pre-filled message naming the exact product or plan, e.g. *"Hi MariaPoS, I'd like to order: Thermal Receipt Printer 80mm (Rs. 18,500). Delivery to: ___"*.
- Show these as small consistent trust badges/chips with icons (COD · Island-wide delivery · Warranty · Local support). Keep them quiet, not shouty.

## Site map and pages

### 1. Home
- Hero: clear headline about a complete POS setup (software + hardware) for Sri Lankan shops, a product visual (POS screen + hardware composition), a primary CTA "Order on WhatsApp" and a secondary CTA "View plans".
- Trust strip: COD, island-wide delivery, 7-day free software trial, local support.
- The three buying paths as three large cards: **Software only**, **Hardware only**, **Software + Hardware (Full set)**, each linking to Plans.
- Featured hardware: a horizontal row of 4–6 products linking to their product pages.
- Software highlights: 6 key features in a clean bento grid (billing, FIFO stock, SMS e-bill receipts, reports, cloud panel, offline-first).
- Industries served (supermarkets, pharmacies, hardware stores, clothing, bookshops, electronics, cosmetics, bakeries/cafés, wholesale, auto parts), shown as a compact chip/icon row.
- How ordering works in 3 steps: choose → message us on WhatsApp → pay cash on delivery.
- FAQ preview and a final WhatsApp CTA band.

### 2. Hardware (all products on one page)
- Show every product from the PDF on one page, clearly organised.
- Sticky category filter chips (e.g. POS terminals / touch screens, receipt printers, barcode scanners, cash drawers, label printers, accessories). Use the categories actually present in the PDF.
- Product card: image on a neutral background, name, 2–3 key specs in mono, LKR price, COD + delivery chips, and two actions: "View details" (to the product page) and a small WhatsApp "Order" button.
- Responsive grid: 1 column on mobile, 2 on tablet, 3–4 on desktop. Include empty and filtered states.

### 3. Hardware product page (template, one per product)
Show the template filled with one real product from the PDF, plus one mobile version.
- Breadcrumb (Home / Hardware / Category / Product)
- Image gallery (main image + thumbnails)
- Name, short description, LKR price, stock/availability note
- Big green **"Order on WhatsApp"** button with the pre-filled product message, plus a secondary "Ask a question" WhatsApp link
- Commerce info block: Cash on Delivery, Island-wide delivery (typical delivery time placeholder), warranty (placeholder), works with MariaPoS
- Full specifications table (from the PDF)
- "What's in the box"
- "Works best with": related hardware and a nudge to the Full set bundle
- Sticky bottom bar on mobile with the price and WhatsApp Order button

### 4. Software features
Keep **all** existing feature content, but give it a new UI. Use a clean, scannable layout: a sticky left category nav on desktop (horizontal scroll chips on mobile), and each category as a section with feature rows (icon, name, one-line description). Categories and features:
- **POS Billing & Checkout**: barcode & name search billing, keyboard shortcuts F1–F12, touch-screen numeric keypad, retail & wholesale pricing, weighted & loose items, item & bill discounts, promo codes, price check, sales history & bill reprint
- **Payments**: cash, card, bank transfer & cheque; split payments; automatic change calculation; credit (pay later) bills
- **Customers, Credit & Loyalty**: customer profiles, credit bills & receivables, loyalty points, customer reports
- **Inventory & FIFO Stock**: FIFO batch tracking; products, categories & units; tax classes; stock adjustments & shrinkage; low-stock alerts; barcode label printing
- **Suppliers & Purchasing**: supplier directory, GRN / goods receiving, supplier payables, cheque maturity reminders, supplier statements
- **Returns & Refunds**: invoice-based returns, batch-accurate restocking, cash refund or credit adjustment
- **Shifts, Till & Cash Control**: shift open & close, expected vs counted cash, till cash-in & cash-out, cash drawer kick & No-Sale, shift & cashier reports
- **Expense Tracking**: one-time expenses, recurring & date-range expenses, expense categories & reports
- **Reports & Analytics**: dashboard, sales & product sales reports, profit & loss, inventory valuation & stock status, payment methods / tax summary / shrinkage, shift / cashier / customer / supplier reports, PDF & Excel export
- **Cloud Panel, SMS & Telegram**: two-way cloud sync, web back-office (cloud panel), SMS e-bill receipts, Telegram sales alerts
- **Users, Security & Audit**: admin & cashier roles, granular permissions, manager PIN override, audit log, encrypted local database & auto-logout
- **Hardware & Printing**: thermal receipt printers, USB barcode scanners, cash drawers & label printers, touch & standard screens. Link these to the Hardware page.
- **Settings & Customisation**: bill layout settings, themes & appearance, currency & regional settings

Include 1–2 product UI screenshots (POS billing screen, reports) framed in a minimal device mockup.

### 5. Plans and pricing
Three plan types, shown side by side (stacked on mobile), with the Full set visually highlighted as "Best value / Recommended":
1. **Software only**: MariaPoS licence (1-year / 2-year / 3-year options via a toggle or segmented control), with a 7-day free trial link. Prices in LKR as placeholders.
2. **Hardware only**: choose any hardware. Links to the Hardware page, with a "from Rs. —" price.
3. **Software + Hardware (Full set)**: complete counter setup (e.g. POS PC/touch screen + receipt printer + barcode scanner + cash drawer + MariaPoS licence + installation/setup), with a bundle price and a savings callout.

Each card has an included-items checklist, COD + island-wide delivery chips, and a green **"Buy on WhatsApp"** button with a pre-filled message naming the plan. Below the cards: a comparison table (what's included in each), then a pricing FAQ (delivery time, COD, warranty, installation, trial, renewals).

### 6. Other pages (same visual system, simpler layouts)
- **Industries** list + industry detail template
- **About** (JAAN Network, Colombo)
- **Contact**: WhatsApp (primary), phone 076 593 3255, email mariaPOS@gmail.com, address 46 Hudson Road, Colombo 00300, Facebook, map
- **Sign in / Sign up** (for the cloud panel / free trial): minimal centred card forms
- **Legal**: Terms & Conditions, Privacy Policy, Refund Policy as a readable long-form text template

## Global components
- **Header**: logo, nav (Home, Features, Hardware, Plans, Industries, About, Contact) and a green "WhatsApp" button. Transparent over the hero, turning solid white with a subtle shadow on scroll. Clean full-screen mobile menu.
- **Footer**: logo, short tagline, link columns (Products, Software, Hardware categories, Company, Legal), contact details, COD + island-wide delivery badges, Facebook, and © JAAN Network (PVT) Ltd.
- **Floating WhatsApp button** (bottom-right) on every page.
- Reusable components: product card, plan card, trust chips, spec table, FAQ accordion, section header (mono eyebrow + Poppins title + short lead), primary/secondary/WhatsApp buttons (default, hover, pressed, disabled).

## Tone and copy
Simple, confident, local English that is short and clear, aimed at Sri Lankan shop owners. Use Sri Lankan context (districts, LKR, COD). No jargon and no exaggerated claims.

## Deliverables
1. Desktop and mobile designs for: Home, Hardware (all products), Hardware product page, Features, Plans & pricing, Contact.
2. Simple templates for: Industries, About, Sign in/up, Legal.
3. A small design-system page: colours, type scale, spacing, radii, buttons, chips, cards, form inputs, icons (use a clean line-icon set such as Lucide).

Keep it minimal: every section should have one clear job and one clear action, and the green WhatsApp action should always be easy to find.
