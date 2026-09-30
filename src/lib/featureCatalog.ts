import {
  BarChart3,
  Boxes,
  Cloud,
  CreditCard,
  Printer,
  Receipt,
  Settings2,
  ShieldCheck,
  ShoppingCart,
  Truck,
  Users,
  Wallet,
  type LucideIcon,
} from "lucide-react";

export type CatalogFeature = {
  name: string;
  /** What the feature does. */
  what: string;
  /** Why it matters to the shop. */
  why: string;
};

export type FeatureCategory = {
  id: string;
  title: string;
  icon: LucideIcon;
  summary: string;
  features: CatalogFeature[];
};

// Mirrors the modules in the MariaPoS desktop app and the MariaPoS cloud panel.
export const featureCategories: FeatureCategory[] = [
  {
    id: "billing-checkout",
    title: "POS Billing & Checkout",
    icon: ShoppingCart,
    summary: "The counter screen your cashiers use all day, built so a queue never waits on the software.",
    features: [
      {
        name: "Barcode & name search billing",
        what: "Scan a barcode with any USB scanner or type part of the product name to add it to the bill instantly.",
        why: "Faster checkout at peak hours and fewer wrong items keyed in by hand.",
      },
      {
        name: "Keyboard shortcuts F1–F12",
        what: "Every common action has a key: product search (F2), wholesale/retail toggle (F5), customer phone (F6), promo code (F7), bill discount (F8) and complete sale.",
        why: "Experienced cashiers bill without touching the mouse, so each customer takes seconds.",
      },
      {
        name: "Touch-screen numeric keypad",
        what: "A large on-screen keypad for quantity, price and cash-tendered entry on touch monitors.",
        why: "Works just as well on a touch POS terminal as on a normal PC with a keyboard.",
      },
      {
        name: "Retail & wholesale pricing",
        what: "Each product carries a retail and a wholesale price. Switch the whole bill to wholesale with one key.",
        why: "Serve walk-in shoppers and bulk buyers from the same counter without a second system.",
      },
      {
        name: "Weighted & loose items",
        what: "Sell by KG, g, L, ml, metre, dozen, pack and more, with decimal quantities.",
        why: "Rice, vegetables, cables, fabric and loose goods are billed exactly by weight or length.",
      },
      {
        name: "Item & bill discounts",
        what: "Apply a discount to a single line or the whole bill, as a percentage or fixed amount, with permission control.",
        why: "Run offers at the counter while owners decide exactly who is allowed to give discounts.",
      },
      {
        name: "Promo codes",
        what: "Create promotion codes that cashiers enter at checkout to apply a validated discount.",
        why: "Run campaigns, festival offers and social-media coupons with a record of every redemption.",
      },
      {
        name: "Price check",
        what: "Look up any product's price and stock by scan or search without starting a bill.",
        why: "Answer customer price questions instantly without disturbing the current sale.",
      },
      {
        name: "Sales history & bill reprint",
        what: "Search past bills by invoice, date or customer and reprint any receipt. Cashiers only see their own sales.",
        why: "Resolve customer queries and warranty claims in seconds.",
      },
    ],
  },
  {
    id: "payments",
    title: "Payments",
    icon: CreditCard,
    summary: "Accept the way your customers actually pay, with every tender method and dollar traced.",
    features: [
      {
        name: "Cash, card, bank transfer & cheque",
        what: "Record the payment method on every bill. Bank transfers capture a reference number; cheques capture number, bank and date.",
        why: "Your payment-method report always matches the bank statement and the drawer.",
      },
      {
        name: "Split payments",
        what: "Pay one bill with a mix of methods, for example part cash and part card.",
        why: "No more voiding and re-billing when a customer wants to pay two ways.",
      },
      {
        name: "Automatic change calculation",
        what: "Enter the cash tendered and MariaPoS shows the exact balance to return.",
        why: "Removes counting mistakes at a busy till.",
      },
      {
        name: "Credit (pay later) bills",
        what: "Sell on credit to registered customers, with the balance added to their account.",
        why: "Keep trusted regulars buying without paper credit books.",
      },
    ],
  },
  {
    id: "customers-loyalty",
    title: "Customers, Credit & Loyalty",
    icon: Users,
    summary: "Know who buys from you, what they owe, and reward them for coming back.",
    features: [
      {
        name: "Customer profiles",
        what: "Save customers by name and phone. Type the number at checkout (F6) to attach them to the bill.",
        why: "Build a customer list you can call, message and reward.",
      },
      {
        name: "Credit bills & receivables",
        what: "Track every unpaid bill, partial payments and outstanding balance per customer, settled from the POS or cloud panel.",
        why: "Stop losing money to forgotten credit and see exactly who owes what.",
      },
      {
        name: "Loyalty points",
        what: "Customers earn points on purchases and redeem them as a discount at the counter, with the balance shown on screen.",
        why: "Turns one-time shoppers into regulars without printing loyalty cards.",
      },
      {
        name: "Customer reports",
        what: "Top customers, purchase frequency and spending history.",
        why: "Focus offers on the customers who bring in the most revenue.",
      },
    ],
  },
  {
    id: "inventory-stock",
    title: "Inventory & FIFO Stock",
    icon: Boxes,
    summary: "Stock that matches the shelf and a cost figure you can trust.",
    features: [
      {
        name: "FIFO batch tracking",
        what: "Each goods receipt creates a batch with its own cost. Sales consume the oldest batch first.",
        why: "Accurate profit on every sale, even when supplier prices change, and older stock moves first.",
      },
      {
        name: "Products, categories & units",
        what: "Unlimited products with barcode, category, unit, cost, retail and wholesale price, and product image.",
        why: "A clean, searchable catalogue that the whole shop works from.",
      },
      {
        name: "Tax classes",
        what: "Define tax classes and assign them to products so tax is calculated and reported correctly.",
        why: "Ready figures for your tax filings from the tax summary report.",
      },
      {
        name: "Stock adjustments & shrinkage",
        what: "Adjust stock with a reason. Removals can be tagged as wastage, damage or theft.",
        why: "The shrinkage report shows real losses separately from simple corrections.",
      },
      {
        name: "Low-stock alerts",
        what: "Set a minimum stock level per product and get alerted at login when items run low.",
        why: "Reorder before shelves go empty, not after customers walk out.",
      },
      {
        name: "Barcode label printing",
        what: "Generate and print barcode labels for products that arrive without one.",
        why: "Every item becomes scannable, including loose and home-packed goods.",
      },
    ],
  },
  {
    id: "suppliers-purchasing",
    title: "Suppliers & Purchasing",
    icon: Truck,
    summary: "Every delivery, payable and cheque tracked from receipt to settlement.",
    features: [
      {
        name: "Supplier directory",
        what: "Keep supplier contacts, terms and full transaction history in one place.",
        why: "Know who you buy from and on what terms without digging through files.",
      },
      {
        name: "GRN / goods receiving",
        what: "Record deliveries with quantities and cost price. Stock is added as a new FIFO batch automatically.",
        why: "Stock and cost update the moment goods arrive, with a record for every delivery.",
      },
      {
        name: "Supplier payables",
        what: "Track what you owe each supplier, settle bills fully or partly by cash, transfer or cheque.",
        why: "Pay suppliers on time and avoid double payments.",
      },
      {
        name: "Cheque maturity reminders",
        what: "Post-dated cheques are listed with due dates and flagged when they are about to mature or overdue.",
        why: "No bounced or forgotten cheques, protecting vendor relationships and cash flow.",
      },
      {
        name: "Supplier statements",
        what: "A full ledger per supplier showing purchases, payments and balance, exportable to PDF.",
        why: "Reconcile with suppliers in minutes.",
      },
    ],
  },
  {
    id: "returns-refunds",
    title: "Returns & Refunds",
    icon: Receipt,
    summary: "Handle returns properly so stock and cash both stay right.",
    features: [
      {
        name: "Invoice-based returns",
        what: "Find the original bill by invoice number and return all or part of it.",
        why: "Only genuine purchases are returned, at the price actually paid.",
      },
      {
        name: "Batch-accurate restocking",
        what: "Returned items go back into the correct cost batch.",
        why: "Stock values and profit stay accurate after a return.",
      },
      {
        name: "Cash refund or credit adjustment",
        what: "Refund in cash (recorded against the shift) or reduce the customer's credit balance.",
        why: "The till count and customer ledger both reflect the return automatically.",
      },
    ],
  },
  {
    id: "shifts-cash",
    title: "Shifts, Till & Cash Control",
    icon: Wallet,
    summary: "Every cashier, every shift, every dollar in the drawer accounted for.",
    features: [
      {
        name: "Shift open & close",
        what: "Cashiers open a shift with an opening float and close it with a counted cash amount.",
        why: "Each shift is a clear, separate record of who handled the money.",
      },
      {
        name: "Expected vs counted cash",
        what: "MariaPoS calculates expected cash (float + cash sales − cash returns ± till movements) and records any short or excess.",
        why: "Cash differences are spotted the same day and tied to the responsible shift.",
      },
      {
        name: "Till cash-in & cash-out",
        what: "Record cash added to or taken from the drawer with a reason.",
        why: "Every drawer movement is explained, so the count always balances.",
      },
      {
        name: "Cash drawer kick & No-Sale",
        what: "The drawer opens automatically on cash sales and can be opened for a logged No-Sale.",
        why: "Staff cannot open the drawer without a trace.",
      },
      {
        name: "Shift & cashier reports",
        what: "Per-shift and per-cashier sales, payment breakdown and cash variance history.",
        why: "Compare cashier performance and spot repeated shortages.",
      },
    ],
  },
  {
    id: "expenses",
    title: "Expense Tracking",
    icon: Wallet,
    summary: "Know your real profit, not just your sales.",
    features: [
      {
        name: "One-time expenses",
        what: "Record electricity, transport, repairs and other costs with categories and dates.",
        why: "All running costs are in one place instead of scattered receipts.",
      },
      {
        name: "Recurring & date-range expenses",
        what: "Set rent, salaries and subscriptions as weekly, monthly or yearly plans, or spread a cost over a custom date range.",
        why: "Profit & loss reflects real monthly costs automatically.",
      },
      {
        name: "Expense categories & reports",
        what: "Custom categories and an expenses report by period and category.",
        why: "See where money goes and where to cut.",
      },
    ],
  },
  {
    id: "reports-analytics",
    title: "Reports & Analytics",
    icon: BarChart3,
    summary: "13+ reports that answer the questions owners actually ask, all exportable to PDF and Excel.",
    features: [
      {
        name: "Dashboard",
        what: "Today's sales, profit, bill count, sales trend, top products and payment mix at a glance.",
        why: "Understand the day in ten seconds.",
      },
      {
        name: "Sales & product sales reports",
        what: "Sales by date range, by product and by category, with quantities and revenue.",
        why: "Know what sells, what doesn't and when.",
      },
      {
        name: "Profit & Loss",
        what: "Revenue, FIFO cost of goods, gross profit, expenses and net profit for any period.",
        why: "A true P&L without waiting for the accountant.",
      },
      {
        name: "Inventory valuation & stock status",
        what: "Stock on hand, stock value at cost and low or out-of-stock items.",
        why: "Know how much money is sitting on your shelves.",
      },
      {
        name: "Payment methods, tax summary & shrinkage",
        what: "Takings by payment method, tax collected by class, and losses from wastage, damage and theft.",
        why: "Reconcile banks, prepare tax filings and control losses.",
      },
      {
        name: "Shift, cashier, customer & supplier reports",
        what: "Performance and ledgers for every person and partner the business deals with.",
        why: "Accountability across staff, customers and suppliers.",
      },
      {
        name: "PDF & Excel export",
        what: "Export any report to PDF or Excel with one click.",
        why: "Share with partners, banks or your accountant instantly.",
      },
    ],
  },
  {
    id: "cloud-alerts",
    title: "Cloud Panel, SMS & Telegram",
    icon: Cloud,
    summary: "Run the shop from your phone while the counter keeps billing offline.",
    features: [
      {
        name: "Two-way cloud sync",
        what: "Sales, stock, customers and suppliers sync to the MariaPoS cloud panel in the background whenever internet is available.",
        why: "Your data is backed up off-site and visible from anywhere.",
      },
      {
        name: "Web back-office (cloud panel)",
        what: "Log in from any browser to view reports, manage products, suppliers, GRNs, stock adjustments, customers, receivables, payables and expenses.",
        why: "Manage the business from home or another branch without going to the counter.",
      },
      {
        name: "SMS e-bill receipts",
        what: "Send the bill to the customer's phone by SMS with invoice number, items, totals and balance. Uses a prepaid SMS wallet with the balance shown to the cashier.",
        why: "Customers keep a receipt that never fades, and you save on thermal paper.",
      },
      {
        name: "Telegram sales alerts",
        what: "Link your Telegram account in the cloud panel to receive every new sale with its items as it happens.",
        why: "Owners see live activity from every branch, even when away from the shop.",
      },
    ],
  },
  {
    id: "security-users",
    title: "Users, Security & Audit",
    icon: ShieldCheck,
    summary: "Give every staff member exactly the access they need, and nothing more.",
    features: [
      {
        name: "Admin & cashier roles",
        what: "Admins see everything. Cashiers get a counter-focused view without profits or settings.",
        why: "Sensitive business numbers stay with the owner.",
      },
      {
        name: "Granular permissions",
        what: "Switch individual rights on or off per user: item discounts, bill discounts, price editing, returns, credit, reports, inventory, customers, expenses and users.",
        why: "Fit the software to how your shop is run, not the other way round.",
      },
      {
        name: "Manager PIN override",
        what: "Restricted actions can be approved on the spot by a manager entering their PIN.",
        why: "Keep control without slowing the queue.",
      },
      {
        name: "Audit log",
        what: "Important actions are recorded with user and time.",
        why: "Know who changed what, and when.",
      },
      {
        name: "Encrypted local database & auto-logout",
        what: "Shop data is stored in an encrypted database on your PC, and idle sessions log out automatically.",
        why: "Your business data is protected even if the computer is left unattended.",
      },
    ],
  },
  {
    id: "hardware-printing",
    title: "Hardware & Printing",
    icon: Printer,
    summary: "Works with the counter equipment standard retail stores already use.",
    features: [
      {
        name: "Thermal receipt printers",
        what: "Prints to 58 mm and 80 mm thermal printers, with your logo, address and footer message.",
        why: "Professional, branded receipts on standard low-cost printers.",
      },
      {
        name: "USB barcode scanners",
        what: "Any keyboard-mode USB or wireless barcode scanner works out of the box.",
        why: "No special drivers or configuration.",
      },
      {
        name: "Cash drawers & label printers",
        what: "Printer-driven cash drawers open automatically; barcode labels print on label printers.",
        why: "A complete counter setup from one software.",
      },
      {
        name: "Touch & standard screens",
        what: "Runs on Windows 10 and 11 PCs, laptops and all-in-one touch POS terminals, scaling to any resolution.",
        why: "Use the hardware you have today and upgrade later.",
      },
    ],
  },
  {
    id: "settings-customisation",
    title: "Settings & Customisation",
    icon: Settings2,
    summary: "Make MariaPoS look and work like your shop.",
    features: [
      {
        name: "Bill layout settings",
        what: "Set shop name, logo, address, phone, bill header and footer text.",
        why: "Every receipt carries your brand.",
      },
      {
        name: "Themes & appearance",
        what: "Choose accent, background and text colours for the POS screens.",
        why: "A comfortable screen for cashiers who use it all day.",
      },
      {
        name: "Currency & regional settings",
        what: "Set your currency symbol (such as $, £, €, or local currency), code, decimal places and receipt width for your shop.",
        why: "Figures appear the way your customers and accountant expect.",
      },
      {
        name: "Licence management",
        what: "Activate, view and renew your licence from inside the app, with reminders before expiry.",
        why: "No surprise lockouts and renewal takes minutes.",
      },
    ],
  },
];

export const featureCount = featureCategories.reduce((sum, c) => sum + c.features.length, 0);
