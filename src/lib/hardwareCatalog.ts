export type HardwareCategory =
  | "all"
  | "touch-pos"
  | "printers"
  | "scanners"
  | "cash-drawers"
  | "bill-counters"
  | "consumables"
  | "bundles";

export type HardwareItem = {
  code: string;
  name: string;
  subtitle: string;
  category: Exclude<HardwareCategory, "all" | "bundles">;
  categoryLabel: string;
  price: number;
  inStock: boolean;
  warranty: string;
  specs: { label: string; value: string }[];
  description: string;
  features: string[];
  popular?: boolean;
  badge?: string;
  recommendedFor?: string[];
  slug: string;
};

export const hardwareCategories: { id: HardwareCategory; label: string; count?: number }[] = [
  { id: "all", label: "All Hardware" },
  { id: "touch-pos", label: "Touch POS Terminals" },
  { id: "printers", label: "Receipt & Label Printers" },
  { id: "scanners", label: "Barcode Scanners" },
  { id: "cash-drawers", label: "Cash Drawers" },
  { id: "bill-counters", label: "Bill Counters" },
  { id: "consumables", label: "Paper & Sticker Rolls" },
  { id: "bundles", label: "Complete POS Bundles" },
];

export const hardwareCatalog: HardwareItem[] = [
  // Page 1
  {
    code: "ACC1639",
    name: "Cash Drawer 5-Pin 8-Coin Heavy Duty",
    subtitle: "Automatic printer-driven steel cash drawer with key lock",
    category: "cash-drawers",
    categoryLabel: "Cash Drawers",
    price: 9450,
    inStock: false,
    warranty: "1 Year Commercial Warranty",
    specs: [
      { label: "Compartments", value: "5 Bill Slots / 8 Coin Cups" },
      { label: "Interface", value: "RJ11 / RJ12 5-Pin to Printer" },
      { label: "Material", value: "Heavy-gauge rolled steel & ABS" },
      { label: "Lock", value: "3-Position key lock (Open/Auto/Lock)" },
    ],
    description:
      "Heavy-duty cash drawer engineered for high-volume retail checkouts. Automatically triggers open upon receipt completion via RJ11 cable connected to your thermal printer. Includes removable coin tray and two front media slots for cheques and receipts.",
    features: [
      "Auto-pops open on invoice printing in MariaPoS",
      "5 adjustable bill clips with heavy-duty metal springs",
      "8 removable individual coin cups",
      "Dual emergency manual release keys included",
    ],
    recommendedFor: ["Supermarkets", "Retail Shops", "Pharmacies", "Bakeries"],
    slug: "cash-drawer-5pin-8coin",
  },
  {
    code: "PRI2124",
    name: "Xprinter 80T USB + LAN Thermal Receipt Printer",
    subtitle: "High-speed 200mm/s 80mm cube receipt printer with auto-cutter",
    category: "printers",
    categoryLabel: "Receipt Printers",
    price: 10200,
    inStock: false,
    warranty: "1 Year Replacement Warranty",
    specs: [
      { label: "Print Speed", value: "200 mm/sec High-Speed" },
      { label: "Paper Width", value: "80 mm Thermal Paper" },
      { label: "Interface", value: "USB + LAN (Ethernet)" },
      { label: "Cutter", value: "Auto-cutter (1.5M cuts life)" },
    ],
    description:
      "Reliable commercial 80mm receipt printer with dual USB and Ethernet LAN interfaces. Perfect for both front-counter cashier checkout and back-room kitchen ticket printing directly over local network.",
    features: [
      "Ultra-fast 200mm/s printing eliminates checkout queues",
      "Ethernet port allows sharing printer between multiple tills",
      "Direct plug-and-play support in MariaPoS Windows app",
      "Built-in cash drawer kick-out port (RJ11)",
    ],
    recommendedFor: ["Restaurants", "Supermarkets", "Department Stores", "Wholesale Tills"],
    slug: "xprinter-80t-usb-lan",
  },
  {
    code: "PRI2448",
    name: "Xprinter 80T USB + WiFi Thermal Receipt Printer",
    subtitle: "Wireless 80mm high-speed thermal receipt printer",
    category: "printers",
    categoryLabel: "Receipt Printers",
    price: 12900,
    inStock: false,
    warranty: "1 Year Commercial Warranty",
    specs: [
      { label: "Print Speed", value: "200 mm/sec" },
      { label: "Paper Width", value: "80 mm" },
      { label: "Interface", value: "USB + 2.4GHz WiFi Wireless" },
      { label: "Cutter", value: "Full / Partial Auto-Cutter" },
    ],
    description:
      "Cable-free counter design with high-speed WiFi connectivity. Connects directly to your local store WiFi network, enabling receipt printing without tangled cables on modern minimalist countertops.",
    features: [
      "Wireless WiFi connectivity eliminates long counter cables",
      "Multi-terminal printing from tablets, laptops and PCs",
      "High reliability auto-cutter mechanism",
      "Supports company logo printing on bill headers",
    ],
    recommendedFor: ["Cafes", "Boutiques", "Electronics Shops", "Modern Counters"],
    slug: "xprinter-80t-usb-wifi",
  },
  {
    code: "PRI2133",
    name: "Xprinter XP-246B USB Dual Mode Barcode & Receipt Printer",
    subtitle: "Versatile 2-in-1 adhesive barcode sticker and receipt printer",
    category: "printers",
    categoryLabel: "Barcode & Label Printers",
    price: 11800,
    inStock: false,
    warranty: "1 Year Warranty",
    specs: [
      { label: "Mode", value: "Dual Mode (Sticker Label + Receipt)" },
      { label: "Max Width", value: "60 mm Printable Width" },
      { label: "Resolution", value: "203 DPI Sharp Thermal" },
      { label: "Interface", value: "USB 2.0" },
    ],
    description:
      "Smart 2-in-1 desktop printer that can print adhesive price tags and product barcodes, as well as 58mm customer receipts. Essential for grocery, clothing and cosmetics stores that need to tag incoming wholesale stock.",
    features: [
      "Prints barcode price tags (EAN-13, Code 128) and text labels",
      "Switch effortlessly between sticker rolls and receipt paper",
      "Auto label gap calibration sensor",
      "Direct integration with MariaPoS label printing utility",
    ],
    recommendedFor: ["Clothing Stores", "Cosmetics", "Gift Shops", "Bookstores"],
    slug: "xprinter-xp-246b-usb-dual",
  },

  // Page 2
  {
    code: "PRI2178",
    name: "Xprinter XP-246B USB + Bluetooth Dual Mode Printer",
    subtitle: "Dual mode barcode label and receipt printer with Bluetooth",
    category: "printers",
    categoryLabel: "Barcode & Label Printers",
    price: 14750,
    inStock: false,
    warranty: "1 Year Warranty",
    specs: [
      { label: "Mode", value: "Barcode Sticker + Thermal Receipt" },
      { label: "Connectivity", value: "USB + Bluetooth Wireless" },
      { label: "Max Speed", value: "127 mm/sec" },
      { label: "Resolution", value: "203 DPI" },
    ],
    description:
      "Upgraded XP-246B featuring Bluetooth connectivity for wireless label printing from mobile phones, tablets, or Windows laptops. Print price stickers in warehouse aisles without carrying items to the counter.",
    features: [
      "Wireless Bluetooth pairing with phones, tablets and Windows PCs",
      "Dual mode printing for adhesive tags and continuous receipts",
      "Automatic temperature control prevents overheating",
      "Compact footprint fits crowded cashier counters",
    ],
    recommendedFor: ["Warehouse Stocking", "Retail Boutiques", "Supermarket Shelving"],
    slug: "xprinter-xp-246b-bluetooth-dual",
  },
  {
    code: "TON2290",
    name: "Xprinter XP-T361U USB Label & Thermal Receipt Printer",
    subtitle: "Heavy-duty 80mm commercial barcode sticker and receipt printer",
    category: "printers",
    categoryLabel: "Barcode & Label Printers",
    price: 15250,
    inStock: false,
    warranty: "1 Year Commercial Warranty",
    specs: [
      { label: "Print Width", value: "Up to 80 mm" },
      { label: "Print Speed", value: "152 mm/sec" },
      { label: "Interface", value: "High-Speed USB" },
      { label: "Sensor", value: "Reflective & Transmissive Gap Sensor" },
    ],
    description:
      "Commercial grade thermal label and receipt printer capable of handling wider label sizes up to 80mm. Built for continuous daily barcode printing for warehouses, pharmacy drug packaging, and supermarket shelf edge labels.",
    features: [
      "Prints wide shipping and shelf labels up to 80mm",
      "Fast 152mm/sec print engine handles high batch runs",
      "No ink, toner or ribbons needed — 100% direct thermal",
      "Durable print head rated for over 50km of paper",
    ],
    recommendedFor: ["Pharmacies", "Supermarkets", "Hardware Stores", "Distribution"],
    slug: "xprinter-xp-t361u-usb",
  },
  {
    code: "TON2291",
    name: "Xprinter XP-T361U USB & Bluetooth Label & Receipt Printer",
    subtitle: "Wide-format 80mm thermal label printer with dual USB + Bluetooth",
    category: "printers",
    categoryLabel: "Barcode & Label Printers",
    price: 19690,
    inStock: false,
    warranty: "1 Year Commercial Warranty",
    specs: [
      { label: "Print Width", value: "20 mm - 80 mm Adjustable" },
      { label: "Connectivity", value: "USB + Bluetooth 4.0 Dual Mode" },
      { label: "Resolution", value: "203 DPI" },
      { label: "Sensors", value: "Dual Gap & Black Mark Sensors" },
    ],
    description:
      "All-in-one wireless commercial label printer. Offers both wired USB for stationary desktop POS and Bluetooth wireless for mobile handheld label printing across store floors.",
    features: [
      "Dual wireless Bluetooth + high-speed wired USB",
      "Adjustable paper guides accept widths from 20mm to 80mm",
      "Tear-off bar for clean and effortless label separation",
      "Supports 1D barcodes and 2D QR codes with razor-sharp clarity",
    ],
    recommendedFor: ["Pharmacies", "Textile Retail", "Electronics Hubs", "Stockrooms"],
    slug: "xprinter-xp-t361u-bluetooth",
  },
  {
    code: "PRI3055",
    name: "Xprinter XP-365B USB & Bluetooth Label & Receipt Printer",
    subtitle: "High-speed 127mm/s clamshell barcode label printer",
    category: "printers",
    categoryLabel: "Barcode & Label Printers",
    price: 19450,
    inStock: false,
    warranty: "1 Year Replacement Warranty",
    specs: [
      { label: "Print Width", value: "20 mm - 82 mm" },
      { label: "Speed", value: "127 mm/sec" },
      { label: "Connectivity", value: "USB + Bluetooth" },
      { label: "Type", value: "Direct Thermal (No ribbon needed)" },
    ],
    description:
      "The undisputed industry workhorse for barcode sticker printing. Features a rugged clamshell chassis for quick roll changes, automatic label detection, and Bluetooth + USB connectivity.",
    features: [
      "Quick-load clamshell design reduces downtime",
      "Automatic paper positioning and gap detection",
      "Dual Bluetooth and USB interface",
      "Compatible with all standard retail sticker sizes",
    ],
    recommendedFor: ["Supermarket Stock Rooms", "Garment Tags", "Pharmacy Rx Labels"],
    slug: "xprinter-xp-365b-bluetooth",
  },

  // Page 3
  {
    code: "PRI2716",
    name: "Xprinter T451B Industrial Thermal Transfer / Direct Thermal",
    subtitle: "Heavy duty dual-technology printer for weatherproof & scratchproof labels",
    category: "printers",
    categoryLabel: "Barcode & Label Printers",
    price: 35500,
    inStock: false,
    warranty: "1 Year Comprehensive Warranty",
    specs: [
      { label: "Technology", value: "Thermal Transfer + Direct Thermal" },
      { label: "Ribbon Capacity", value: "300 meter ribbon capacity" },
      { label: "Print Speed", value: "127 mm/sec (5 inch/s)" },
      { label: "Resolution", value: "203 DPI Heavy Duty Engine" },
    ],
    description:
      "Industrial-grade barcode label printer that supports thermal transfer ribbons (Wax, Resin, Wax/Resin). Produces indestructible labels that resist water, oil, sunlight, and heavy abrasion.",
    features: [
      "Thermal transfer technology prints permanent labels that last years",
      "Accommodates massive 300-meter industrial ribbon rolls",
      "Can switch to direct thermal mode without ribbon anytime",
      "Ideal for serial number asset tagging and outdoor hardware parts",
    ],
    recommendedFor: ["Hardware Stores", "Auto Spare Parts", "Chemical & Paint", "Manufacturing"],
    slug: "xprinter-t451b-industrial",
  },
  {
    code: "TON2287",
    name: "Xprinter XP-P301A Portable Printer with Display",
    subtitle: "Compact 58mm mobile Bluetooth receipt printer with OLED screen",
    category: "printers",
    categoryLabel: "Receipt Printers",
    price: 18500,
    inStock: false,
    warranty: "1 Year Warranty",
    specs: [
      { label: "Width", value: "58 mm Mobile Thermal" },
      { label: "Display", value: "OLED Status Display" },
      { label: "Battery", value: "Rechargeable Lithium-ion 2000mAh" },
      { label: "Connectivity", value: "Bluetooth + USB-C" },
    ],
    description:
      "Ultra-compact pocket receipt printer with built-in OLED status screen displaying battery percentage, Bluetooth pairing, and paper status. Ideal for curbside pickup, van sales, and pop-up events.",
    features: [
      "OLED screen shows battery level, connection, and error alerts",
      "Pocket-sized and feather-light with included belt clip",
      "Type-C charging for easy power bank top-ups",
      "Fast instant wake-up upon receipt print command",
    ],
    recommendedFor: ["Van Sales", "Delivery Riders", "Pop-up Markets", "Event Ticketing"],
    slug: "xprinter-xp-p301a-portable",
  },
  {
    code: "PRI2352",
    name: "Xprinter XP-P801A Portable 80mm Printer",
    subtitle: "Heavy-duty 80mm mobile receipt printer with high-capacity battery",
    category: "printers",
    categoryLabel: "Receipt Printers",
    price: 16900,
    inStock: true,
    popular: true,
    badge: "In Stock · Fast Dispatch",
    warranty: "1 Year Commercial Warranty",
    specs: [
      { label: "Width", value: "80 mm Wide Receipt Format" },
      { label: "Battery", value: "2600 mAh High-Capacity Li-ion" },
      { label: "Interface", value: "Bluetooth + USB" },
      { label: "Paper Roll", value: "Up to 50 mm diameter roll" },
    ],
    description:
      "Full 80mm wide mobile receipt printer in stock now! Prints full-size professional tax bills and customer receipts on the go. High capacity 2600mAh battery delivers up to 14 hours of continuous sales operation.",
    features: [
      "IN STOCK for immediate delivery across Sri Lanka",
      "Wide 80mm receipt printing ensures clear, readable itemized bills",
      "Durable drop-resistant rubberized casing",
      "Seamless Bluetooth integration with MariaPoS Windows tablets and laptops",
    ],
    recommendedFor: ["Van Sales Distribution", "Boutique Retail", "Food Trucks", "Field Service"],
    slug: "xprinter-xp-p801a-portable-80mm",
  },
  {
    code: "PRI2914",
    name: "POS Touch 15.6 + 11.6 Dual Display System",
    subtitle: "Flagship dual-screen POS terminal (Intel i5 4th Gen, 8GB RAM, 256GB SSD)",
    category: "touch-pos",
    categoryLabel: "Touch POS Terminals",
    price: 123500,
    inStock: false,
    warranty: "1 Year Commercial On-Site Warranty",
    specs: [
      { label: "Main Screen", value: "15.6-inch Capacitive Multi-Touch Full HD" },
      { label: "Customer Screen", value: "11.6-inch Customer Color Display" },
      { label: "Processor", value: "Intel Core i5 (4th Gen) Quad Core" },
      { label: "Memory & Storage", value: "8 GB DDR3 RAM + 256 GB High-Speed SSD" },
      { label: "Ports", value: "6x USB, 1x LAN RJ45, 1x COM, 1x Audio, 1x VGA" },
    ],
    description:
      "The ultimate counter statement piece. Features a 15.6-inch ultra-responsive capacitive operator touchscreen plus an integrated 11.6-inch customer-facing display. Show real-time itemized bills, discounts, tax calculations, and promotional branding directly to shoppers as you scan.",
    features: [
      "Dual screen: 15.6-inch operator touch + 11.6-inch customer live bill display",
      "Intel Core i5 processing power runs MariaPoS and offline database with zero lag",
      "Sturdy heavy-weight aluminum die-cast base prevents tipping when tapping",
      "Pre-configured and tested with Windows 10/11 Pro and MariaPoS",
    ],
    recommendedFor: ["Flagship Supermarkets", "Fine Dining", "Department Stores", "Upscale Boutiques"],
    slug: "pos-touch-15-6-11-6-dual-display-i5",
  },

  // Page 4
  {
    code: "PRI2915",
    name: "POS Touch 15.6 Display System (i5 8GB 256GB WiFi)",
    subtitle: "Heavy-duty commercial 15.6\" true-flat touch terminal with built-in WiFi",
    category: "touch-pos",
    categoryLabel: "Touch POS Terminals",
    price: 110000,
    inStock: true,
    popular: true,
    badge: "Top Seller · In Stock",
    warranty: "1 Year Comprehensive Warranty",
    specs: [
      { label: "Touchscreen", value: "15.6-inch True-Flat 10-Point Capacitive Touch" },
      { label: "Processor", value: "Intel Core i5 (4th Gen) 3.2GHz Max" },
      { label: "Memory", value: "8 GB High-Speed RAM" },
      { label: "Storage", value: "256 GB Solid State Drive (SSD)" },
      { label: "Network", value: "Gigabit Ethernet LAN + Built-in Dual Band WiFi" },
    ],
    description:
      "Our best-selling POS terminal in stock now! Sleek bezelless 15.6-inch capacitive glass touch screen with IP54 spill and dust resistance. Powered by an Intel Core i5 processor with 8GB RAM and 256GB SSD, boots in under 12 seconds and handles thousands of daily transactions effortlessly.",
    features: [
      "IN STOCK for immediate islandwide installation & dispatch",
      "True-flat water & dust resistant front glass screen",
      "Built-in WiFi allows cable-free connection to MariaPoS cloud panel",
      "Integrated cable management concealed inside the base stand",
      "Ready to plug and bill with MariaPoS pre-tested driver stack",
    ],
    recommendedFor: ["Supermarkets", "Pharmacies", "Clothing Outlets", "Bakeries", "Hardware Stores"],
    slug: "pos-touch-15-6-display-i5-wifi",
  },
  {
    code: "CAS2131",
    name: "2108 UV Bill Counter Machine",
    subtitle: "High-speed currency note counting machine with UV counterfeit detection",
    category: "bill-counters",
    categoryLabel: "Bill Counters",
    price: 16650,
    inStock: false,
    warranty: "1 Year Warranty",
    specs: [
      { label: "Counting Speed", value: "Over 1,000 notes / min" },
      { label: "Detection", value: "Ultraviolet (UV) Counterfeit Detection" },
      { label: "Display", value: "External Customer Display Included" },
      { label: "Modes", value: "Batch, Add, and Self-Examination" },
    ],
    description:
      "Compact and rapid currency counter that eliminates manual counting errors at cashier shift end. Checks for counterfeit notes using UV sensors while counting over 1,000 notes per minute.",
    features: [
      "Counts up to 1,000 currency notes per minute accurately",
      "Automatic UV counterfeit note detection with alarm buzzer",
      "Batch counting mode presets bundle counts (e.g. 50, 100 notes)",
      "Includes external display so customers can observe the count",
    ],
    recommendedFor: ["Retail Cash Desks", "Fuel Stations", "Wholesale Distributors", "Supermarkets"],
    slug: "2108-uv-bill-counter-machine",
  },
  {
    code: "CAS2449",
    name: "P80 Bill Counter Machine Heavy Duty",
    subtitle: "Banking-grade currency counter with LCD display & multi-sensor UV/MG/IR detection",
    category: "bill-counters",
    categoryLabel: "Bill Counters",
    price: 71000,
    inStock: true,
    popular: true,
    badge: "In Stock · Banking Grade",
    warranty: "1 Year Comprehensive Warranty",
    specs: [
      { label: "Counting Speed", value: "1,200 notes / min" },
      { label: "Detection Tech", value: "UV + Magnetic (MG) + Infrared (IR) + Size Sensor" },
      { label: "Display", value: "Multi-Color HD TFT LCD Display" },
      { label: "Hopper Capacity", value: "300 Notes Large Top Hopper" },
    ],
    description:
      "Premium heavy-duty banknote counter in stock now. Designed for busy wholesale counters, supermarkets and cash management offices. Features multi-sensor counterfeit verification (UV, Magnetic ink, Infrared security thread) and brilliant color screen.",
    features: [
      "IN STOCK for immediate dispatch",
      "Triple counterfeit protection: UV, MG (Magnetic) and IR (Infrared)",
      "Auto-start, auto-stop and error clearing functions",
      "High capacity 300-note hopper with continuous feeder friction rollers",
      "Accurate counting of crumpled, worn and new currency notes",
    ],
    recommendedFor: ["Wholesale Cash Desks", "Supermarket Main Office", "Jewelry Stores", "Finance"],
    slug: "p80-bill-counter-machine",
  },
  {
    code: "SCA3064",
    name: "AQ2210 1D Wired Barcode Scanner with Stand",
    subtitle: "Ergonomic high-speed USB 1D laser barcode scanner",
    category: "scanners",
    categoryLabel: "Barcode Scanners",
    price: 3600,
    inStock: true,
    popular: true,
    badge: "Best Seller · In Stock",
    warranty: "1 Year Replacement Warranty",
    specs: [
      { label: "Scan Type", value: "1D Laser Barcode Scanner" },
      { label: "Scan Rate", value: "300 scans / second" },
      { label: "Interface", value: "USB Plug-and-Play (2.0m cable)" },
      { label: "Stand", value: "Hands-Free Auto-Sensing Stand Included" },
    ],
    description:
      "The most affordable and dependable 1D wired barcode scanner on the market. In stock now! Includes an adjustable hands-free desktop stand. Plug directly into any USB port and scan instant item codes into MariaPoS.",
    features: [
      "IN STOCK — Over 500 units deployed in Sri Lankan shops",
      "Plug-and-play USB connection: No drivers needed for Windows",
      "Continuous auto-sensing mode when mounted on the included stand",
      "Rugged drop-tested ABS housing resists 1.5m drops to concrete",
    ],
    recommendedFor: ["Grocery Shops", "Pharmacies", "General Retail", "Bookshops"],
    slug: "aq2210-1d-wired-barcode-scanner",
  },

  // Page 5
  {
    code: "SCA2125",
    name: "A7 2D Wired USB Barcode Scanner",
    subtitle: "High-speed 1D & 2D QR CMOS optical barcode scanner with USB cable",
    category: "scanners",
    categoryLabel: "Barcode Scanners",
    price: 4850,
    inStock: true,
    badge: "In Stock · Popular",
    warranty: "1 Year Commercial Warranty",
    specs: [
      { label: "Scan Types", value: "1D Barcodes + 2D QR Codes + DataMatrix" },
      { label: "Optical Sensor", value: "High-Speed CMOS Image Sensor" },
      { label: "Interface", value: "USB Plug and Play (2.0m Cable)" },
      { label: "Screen Reading", value: "Reads from mobile screens & printed labels" },
    ],
    description:
      "Reliable and responsive 2D wired optical barcode scanner designed for retail counters, pharmacies, and supermarket cashier lanes. Instantly decodes all standard 1D product barcodes as well as 2D QR codes directly from packaging or smartphone displays.",
    features: [
      "IN STOCK for immediate islandwide delivery",
      "Fast 2D CMOS sensor reads QR codes and 1D barcodes in any orientation",
      "Reads barcodes directly off phone screens (e-vouchers, member passes)",
      "Plug-and-play USB connection with no drivers needed for MariaPoS",
      "Ergonomic shock-resistant body withstands repeated daily counter use",
    ],
    recommendedFor: ["Retail Shops", "Pharmacies", "Supermarkets", "Fashion Outlets"],
    slug: "a7-2d-wired-barcode-scanner",
  },
  {
    code: "SCA2126",
    name: "A9 1D and 2D USB Barcode Scanner",
    subtitle: "CMOS 2D QR code & barcode optical scanner with USB cable",
    category: "scanners",
    categoryLabel: "Barcode Scanners",
    price: 5250,
    inStock: false,
    warranty: "1 Year Commercial Warranty",
    specs: [
      { label: "Scan Types", value: "1D Barcodes + 2D QR Codes + DataMatrix" },
      { label: "Optical Sensor", value: "640 x 480 CMOS Image Sensor" },
      { label: "Interface", value: "USB HID Keyboard Emulation" },
      { label: "Screen Reading", value: "Scans directly from mobile phone displays" },
    ],
    description:
      "Advanced 2D optical scanner capable of reading digital discount vouchers, customer membership QR codes from mobile phones, and standard product barcodes even if torn or faded.",
    features: [
      "Reads 1D barcodes and 2D QR codes with equal speed",
      "Effortlessly decodes barcodes displayed on phone screens",
      "Reads damaged, smudged, wrinkled or low-contrast barcodes",
      "Ergonomic pistol grip with smooth trigger rebound",
    ],
    recommendedFor: ["Pharmacies", "Modern Retail", "Supermarkets", "Voucher Scanning"],
    slug: "a9-1d-2d-usb-scanner",
  },
  {
    code: "SCA2128",
    name: "A8 Wired & Wireless 1D and 2D Barcode Scanner",
    subtitle: "Dual-mode 2.4GHz wireless and USB wired 2D barcode scanner with offline memory",
    category: "scanners",
    categoryLabel: "Barcode Scanners",
    price: 6950,
    inStock: false,
    warranty: "1 Year Warranty",
    specs: [
      { label: "Modes", value: "2.4G Wireless + USB Wired Dual Mode" },
      { label: "Range", value: "Up to 50 meters open air range" },
      { label: "Offline Memory", value: "Stores up to 10,000 barcodes offline" },
      { label: "Battery", value: "2000 mAh Rechargeable Battery" },
    ],
    description:
      "Freedom of movement across the retail floor. Scan heavy items directly in shopping carts or walk warehouse aisles doing FIFO inventory counts without carrying a computer.",
    features: [
      "Dual 2.4G wireless dongle + USB cable for simultaneous charge & scan",
      "Inventory batch mode stores thousands of barcodes in internal flash memory",
      "Long-distance wireless coverage up to 50 meters from counter",
      "Long battery runtime lasts over 3 days of standard retail scanning",
    ],
    recommendedFor: ["Supermarket Heavy Items", "Hardware Stores", "Warehouse Audits", "Textile"],
    slug: "a8-wired-wireless-2d-scanner",
  },
  {
    code: "SCA2127",
    name: "AQ6180 1D and 2D Desktop Barcode Scanner",
    subtitle: "Hands-free omnidirectional presentation scanner for high-speed cashier lanes",
    category: "scanners",
    categoryLabel: "Barcode Scanners",
    price: 9400,
    inStock: false,
    warranty: "1 Year Replacement Warranty",
    specs: [
      { label: "Scan Mode", value: "Hands-Free Omnidirectional Scan" },
      { label: "Sensor", value: "CMOS Image Sensor (1D & 2D QR)" },
      { label: "Interface", value: "USB Plug and Play" },
      { label: "Motion Tolerance", value: "Up to 2.5 meters/second sweep" },
    ],
    description:
      "Cashier checkout at lightning speed. Just slide or swipe items past the large optical window. Perfect for supermarkets and high-volume grocery counters where every second saved in queue matters.",
    features: [
      "Hands-free omnidirectional scanning: swipe items in any orientation",
      "Intelligent auto-wake sensor turns on LEDs when an item approaches",
      "Reads both printed barcodes and customer mobile phone QR codes",
      "Heavy anti-slip base remains firmly planted on the cashier counter",
    ],
    recommendedFor: ["Supermarket Cashier Lanes", "Express Checkout", "Busy Bakeries", "Pharmacies"],
    slug: "aq6180-desktop-barcode-scanner",
  },
  {
    code: "PAP2134",
    name: "40*30*800 Barcode Sticker Roll",
    subtitle: "Self-adhesive direct thermal barcode labels (800 stickers per roll)",
    category: "consumables",
    categoryLabel: "Consumables",
    price: 210,
    inStock: true,
    badge: "In Stock · Pack Discounts",
    warranty: "Quality Guarantee",
    specs: [
      { label: "Dimensions", value: "40 mm Width x 30 mm Height" },
      { label: "Quantity", value: "800 Stickers / Roll" },
      { label: "Core Size", value: "25 mm Standard Core" },
      { label: "Type", value: "Direct Thermal Self-Adhesive" },
    ],
    description:
      "Premium direct thermal barcode sticker rolls in stock now. High-tack permanent adhesive sticks firmly to plastic bags, bottles, cardboard boxes, and apparel tags.",
    features: [
      "IN STOCK for immediate islandwide bulk delivery",
      "Smudge-proof, oil-resistant and scratch-resistant thermal surface",
      "Sharp contrast ensures 100% instant first-pass barcode scans",
      "Clean perforation between labels for effortless dispensing",
    ],
    recommendedFor: ["Price Tagging", "Expiry Date Labels", "Barcode Stickers", "Inventory Bags"],
    slug: "barcode-sticker-roll-40x30",
  },

  // Page 6
  {
    code: "PAP2259",
    name: "Paper - 80*80 (76) - Thermal Paper Roll",
    subtitle: "Premium BPA-free 80mm high-density thermal receipt paper roll",
    category: "consumables",
    categoryLabel: "Consumables",
    price: 225,
    inStock: true,
    badge: "In Stock · Fresh Batch",
    warranty: "Quality Guarantee",
    specs: [
      { label: "Dimensions", value: "80 mm Width x 80 mm Roll Diameter" },
      { label: "Paper Grade", value: "55 GSM High-Density Pure Thermal" },
      { label: "Safety", value: "100% BPA Free" },
      { label: "Compatibility", value: "Fits all 80mm ESC/POS thermal printers" },
    ],
    description:
      "Fresh high-contrast thermal receipt paper in stock now. Produces dark, crisp black print without fading. Includes red end-of-roll warning stripe to alert cashiers before paper runs out.",
    features: [
      "IN STOCK for immediate dispatch by roll or carton",
      "High density paper prevents thermal printhead wear",
      "BPA-free formulation safe for daily cashier handling",
      "Visible red margin indicator alerts cashier when roll is nearly empty",
    ],
    recommendedFor: ["All 80mm Receipt Printers", "Restaurant Kitchens", "Supermarket Tills"],
    slug: "thermal-paper-roll-80x80",
  },
];

export type PosBundle = {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  totalPriceLkr: number;
  regularPriceLkr: number;
  softwareLicense: string;
  items: { code: string; name: string; qty: number }[];
  highlight: string;
  recommendedFor: string;
};

export const posBundles: PosBundle[] = [
  {
    id: "bundle-starter",
    name: "Starter Retail Counter Pack",
    badge: "Most Popular Combo",
    tagline: "Complete hardware + software setup ready to plug in and bill",
    totalPriceLkr: 169900,
    regularPriceLkr: 185000,
    softwareLicense: "1-Year MariaPoS Full License ($147 Included)",
    items: [
      { code: "PRI2915", name: "POS Touch 15.6\" i5 8GB 256GB WiFi System", qty: 1 },
      { code: "PRI2124", name: "Xprinter 80T USB+LAN Receipt Printer", qty: 1 },
      { code: "SCA3064", name: "AQ2210 1D Wired Barcode Scanner + Stand", qty: 1 },
      { code: "ACC1639", name: "Heavy Duty 5-Pin Cash Drawer", qty: 1 },
      { code: "PAP2259", name: "80x80mm Thermal Receipt Paper Rolls", qty: 10 },
    ],
    highlight: "Saves Rs. 15,100 + Free Remote Installation & Staff Training",
    recommendedFor: "Grocery stores, pharmacies, boutique retail, and bakery shops starting out.",
  },
  {
    id: "bundle-supermarket",
    name: "Supermarket High-Speed Dual-Screen Pack",
    badge: "Flagship Heavy Duty",
    tagline: "Dual screen customer experience with hands-free desktop scanning & bill counter",
    totalPriceLkr: 279500,
    regularPriceLkr: 308000,
    softwareLicense: "2-Year MariaPoS Full License ($235.20 Included)",
    items: [
      { code: "PRI2914", name: "POS Touch 15.6\" + 11.6\" Dual Display i5 System", qty: 1 },
      { code: "SCA2127", name: "AQ6180 Desktop Omnidirectional Hands-Free Scanner", qty: 1 },
      { code: "PRI2124", name: "Xprinter 80T USB+LAN Receipt Printer", qty: 1 },
      { code: "ACC1639", name: "Heavy Duty 5-Pin Cash Drawer", qty: 1 },
      { code: "CAS2449", name: "P80 Banking-Grade Bill Counter Machine", qty: 1 },
      { code: "PAP2259", name: "80x80mm Thermal Paper Rolls", qty: 20 },
    ],
    highlight: "Saves Rs. 28,500 + Priority On-Site Onboarding in Western Province",
    recommendedFor: "High-volume supermarkets, busy retail hubs, wholesalers, and marts.",
  },
  {
    id: "bundle-mobile",
    name: "Van Sales & Mobile Delivery POS Pack",
    badge: "On-The-Road Ready",
    tagline: "Portable Bluetooth billing pack for delivery trucks and field reps",
    totalPriceLkr: 72500,
    regularPriceLkr: 79900,
    softwareLicense: "1-Year MariaPoS Full License ($147 Included)",
    items: [
      { code: "PRI2352", name: "Xprinter XP-P801A Portable 80mm Bluetooth Printer", qty: 1 },
      { code: "SCA2128", name: "A8 Wireless 1D/2D Barcode Scanner", qty: 1 },
      { code: "PAP2259", name: "80x80mm Thermal Receipt Paper Rolls", qty: 10 },
    ],
    highlight: "Saves Rs. 7,400 + Connect to any laptop/tablet or mobile device",
    recommendedFor: "Distribution vans, delivery drivers, pop-up stalls, and field sales teams.",
  },
];

export function formatLkr(amount: number): string {
  return "Rs. " + amount.toLocaleString("en-LK", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
