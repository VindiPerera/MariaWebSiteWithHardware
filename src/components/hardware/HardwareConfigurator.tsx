"use client";

import React, { useState } from "react";
import { Check, Monitor, Printer, ScanBarcode, Wrench, Shield, ShoppingBag, ArrowRight, Sparkles } from "lucide-react";
import { formatLkr, hardwareCatalog } from "@/lib/hardwareCatalog";
import { useCart } from "@/lib/cartContext";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { site } from "@/lib/site";
import styles from "./HardwareConfigurator.module.css";
import { useLang } from "@/lib/i18n";

type TerminalOption = {
  id: string;
  name: string;
  code?: string;
  price: number;
  note: string;
};

type PrinterOption = {
  id: string;
  name: string;
  code?: string;
  price: number;
  note: string;
};

type ScannerOption = {
  id: string;
  name: string;
  code?: string;
  price: number;
  note: string;
};

type SoftwareOption = {
  id: string;
  name: string;
  priceLkr: number;
  usdPrice: string;
  badge?: string;
};

const terminalOptions: TerminalOption[] = [
  {
    id: "PRI2915",
    code: "PRI2915",
    name: "POS Touch 15.6\" i5 8GB 256GB WiFi",
    price: 110000,
    note: "In Stock · Best-selling single touch terminal",
  },
  {
    id: "PRI2914",
    code: "PRI2914",
    name: "POS Touch 15.6\" + 11.6\" Dual Display i5",
    price: 123500,
    note: "Dual screen with customer-facing display",
  },
  {
    id: "own-pc",
    name: "I have my own Windows PC / Laptop",
    price: 0,
    note: "Compatible with any Windows 10/11 device",
  },
];

const printerOptions: PrinterOption[] = [
  {
    id: "PRI2124",
    code: "PRI2124",
    name: "Xprinter 80T USB + LAN",
    price: 10200,
    note: "200mm/s auto-cutter receipt printer",
  },
  {
    id: "PRI2448",
    code: "PRI2448",
    name: "Xprinter 80T USB + WiFi",
    price: 12900,
    note: "Wireless receipt printing over WiFi",
  },
  {
    id: "PRI2133",
    code: "PRI2133",
    name: "XP-246B Dual Barcode + Receipt",
    price: 11800,
    note: "2-in-1 adhesive stickers and bill receipts",
  },
  {
    id: "PRI2352",
    code: "PRI2352",
    name: "XP-P801A Mobile 80mm Bluetooth",
    price: 16900,
    note: "In Stock · Battery powered for van sales",
  },
  {
    id: "none",
    name: "No printer needed",
    price: 0,
    note: "Use SMS e-bills directly to customers",
  },
];

const scannerOptions: ScannerOption[] = [
  {
    id: "SCA3064",
    code: "SCA3064",
    name: "AQ2210 1D Wired + Stand",
    price: 3600,
    note: "In Stock · High sensitivity USB laser scanner",
  },
  {
    id: "SCA2126",
    code: "SCA2126",
    name: "A9 1D & 2D QR Scanner",
    price: 5250,
    note: "Scans phone screens and damaged barcodes",
  },
  {
    id: "SCA2128",
    code: "SCA2128",
    name: "A8 Wireless 1D/2D Scanner",
    price: 6950,
    note: "50m wireless freedom with internal memory",
  },
  {
    id: "SCA2127",
    code: "SCA2127",
    name: "AQ6180 Desktop Omni-directional",
    price: 9400,
    note: "Hands-free swipe scanning for supermarkets",
  },
  {
    id: "none",
    name: "No barcode scanner",
    price: 0,
    note: "Bill by item code or touch product grid",
  },
];

const softwareOptions: SoftwareOption[] = [
  {
    id: "trial",
    name: "7-Day Free Trial",
    priceLkr: 0,
    usdPrice: "Free",
    badge: "Risk-Free Trial",
  },
  {
    id: "1y",
    name: "1-Year Full License",
    priceLkr: 45000,
    usdPrice: "$147.00",
  },
  {
    id: "2y",
    name: "2-Year Full License",
    priceLkr: 72000,
    usdPrice: "$235.20",
    badge: "Save 20%",
  },
  {
    id: "3y",
    name: "3-Year Full License",
    priceLkr: 88000,
    usdPrice: "$286.65",
    badge: "Best Value · Save 35%",
  },
];

/** Sinhala + English text for configurator option names and notes (product model names stay English). */
const optionSi: Record<string, string> = {
  "I have my own Windows PC / Laptop": "මට මගේම Windows PC / Laptop එකක් තියෙනවා",
  "No printer needed": "Printer එකක් ඕන නෑ",
  "No barcode scanner": "Barcode scanner එකක් ඕන නෑ",
  "7-Day Free Trial": "දින 7ක Free Trial",
  "1-Year Full License": "අවුරුදු 1ක Full License",
  "2-Year Full License": "අවුරුදු 2ක Full License",
  "3-Year Full License": "අවුරුදු 3ක Full License",
  "Risk-Free Trial": "අවදානම් රහිත Trial",
  "Save 20%": "20%ක් ඉතිරි",
  "Best Value · Save 35%": "Best Value · 35%ක් ඉතිරි",
  "In Stock · Best-selling single touch terminal": "Stock එකේ ඇත · වැඩිපුරම විකිණෙන single touch terminal",
  "Dual screen with customer-facing display": "Customer ට පෙනෙන display එකත් සහිත dual screen",
  "Compatible with any Windows 10/11 device": "ඕනෑම Windows 10/11 device එකක් සමඟ ගැලපෙනවා",
  "200mm/s auto-cutter receipt printer": "200mm/s auto-cutter receipt printer",
  "Wireless receipt printing over WiFi": "WiFi හරහා wireless receipt printing",
  "2-in-1 adhesive stickers and bill receipts": "Adhesive stickers සහ bill receipts, දෙකම එකම printer එකෙන්",
  "In Stock · Battery powered for van sales": "Stock එකේ ඇත · Van sales සඳහා battery එකෙන් දුවනවා",
  "Use SMS e-bills directly to customers": "Customers ලාට කෙලින්ම SMS e-bills යවන්න",
  "In Stock · High sensitivity USB laser scanner": "Stock එකේ ඇත · High sensitivity USB laser scanner",
  "Scans phone screens and damaged barcodes": "Phone screens සහ හානි වුණු barcodes පවා scan කරනවා",
  "50m wireless freedom with internal memory": "Internal memory සහිත 50m wireless පරාසය",
  "Hands-free swipe scanning for supermarkets": "Supermarkets සඳහා hands-free swipe scanning",
  "Bill by item code or touch product grid": "Item code එකෙන් හෝ touch product grid එකෙන් bill කරන්න",
  "Single payment · All features included": "එක් ගෙවීමක් · සියලුම features ඇතුළත්",
};

export function HardwareConfigurator() {
  const tr = (s: string) => t(s, optionSi[s]);
  const { t } = useLang();
  const { addItem, openDrawer } = useCart();
  const [selectedTerminal, setSelectedTerminal] = useState<string>("PRI2915");
  const [selectedPrinter, setSelectedPrinter] = useState<string>("PRI2124");
  const [selectedScanner, setSelectedScanner] = useState<string>("SCA3064");
  const [addCashDrawer, setAddCashDrawer] = useState<boolean>(true);
  const [addBillCounter, setAddBillCounter] = useState<boolean>(false);
  const [addPaperRolls, setAddPaperRolls] = useState<boolean>(true);
  const [addBarcodeStickers, setAddBarcodeStickers] = useState<boolean>(false);
  const [selectedSoftware, setSelectedSoftware] = useState<string>("1y");

  // Calculations
  const terminal = terminalOptions.find((t) => t.id === selectedTerminal);
  const printer = printerOptions.find((p) => p.id === selectedPrinter);
  const scanner = scannerOptions.find((s) => s.id === selectedScanner);
  const software = softwareOptions.find((sw) => sw.id === selectedSoftware);

  const drawerPrice = addCashDrawer ? 9450 : 0;
  const billCounterPrice = addBillCounter ? 71000 : 0;
  const paperRollsPrice = addPaperRolls ? 2250 : 0; // 10 rolls
  const barcodeStickersPrice = addBarcodeStickers ? 1050 : 0; // 5 rolls

  const hardwareTotal =
    (terminal?.price ?? 0) +
    (printer?.price ?? 0) +
    (scanner?.price ?? 0) +
    drawerPrice +
    billCounterPrice +
    paperRollsPrice +
    barcodeStickersPrice;

  const grandTotalLkr = hardwareTotal + (software?.priceLkr ?? 0);

  const handleAddAllToCart = () => {
    // Add chosen hardware items
    if (terminal?.code) {
      const item = hardwareCatalog.find((h) => h.code === terminal.code);
      if (item) addItem(item);
    }
    if (printer?.code) {
      const item = hardwareCatalog.find((h) => h.code === printer.code);
      if (item) addItem(item);
    }
    if (scanner?.code) {
      const item = hardwareCatalog.find((h) => h.code === scanner.code);
      if (item) addItem(item);
    }
    if (addCashDrawer) {
      const item = hardwareCatalog.find((h) => h.code === "ACC1639");
      if (item) addItem(item);
    }
    if (addBillCounter) {
      const item = hardwareCatalog.find((h) => h.code === "CAS2449");
      if (item) addItem(item);
    }
    if (addPaperRolls) {
      const item = hardwareCatalog.find((h) => h.code === "PAP2259");
      if (item) addItem(item, 10);
    }
    if (addBarcodeStickers) {
      const item = hardwareCatalog.find((h) => h.code === "PAP2134");
      if (item) addItem(item, 5);
    }

    openDrawer();
  };

  const getWhatsappConfigText = () => {
    let msg = `*🛒 Custom POS Counter Configuration Inquiry*\n\n`;
    msg += `• *Screen/Terminal:* ${terminal?.name} (${formatLkr(terminal?.price ?? 0)})\n`;
    msg += `• *Receipt/Label Printer:* ${printer?.name} (${formatLkr(printer?.price ?? 0)})\n`;
    msg += `• *Barcode Scanner:* ${scanner?.name} (${formatLkr(scanner?.price ?? 0)})\n`;
    if (addCashDrawer) msg += `• *Cash Drawer:* Heavy Duty 5-Pin ACC1639 (Rs. 9,450.00)\n`;
    if (addBillCounter) msg += `• *Bill Counter:* P80 Heavy Duty CAS2449 (Rs. 71,000.00)\n`;
    if (addPaperRolls) msg += `• *Paper Rolls:* 10x 80mm Thermal Rolls (Rs. 2,250.00)\n`;
    if (addBarcodeStickers) msg += `• *Barcode Rolls:* 5x 40*30 Stickers (Rs. 1,050.00)\n`;
    msg += `• *Software License:* ${software?.name} (${software?.usdPrice})\n`;
    msg += `------------------------------------\n`;
    msg += `*Estimated Package: ${formatLkr(grandTotalLkr)}*\n\n`;
    msg += `Please send me an official invoice quotation and islandwide delivery time.`;

    return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="configurator" className={styles.section}>
      <div className={styles.inner}>
        <div data-reveal="up" className="section-intro">
          <span className="eyebrow">
            <Wrench size={13} />
            {t("POS Counter Configurator", "POS Counter Configurator")}
          </span>
          <h2 className="section-title">{t("Build your counter setup in 60 seconds", "තත්පර 60කින් ඔබේ counter setup එක හදාගන්න")}</h2>
          <p className="lead">
            {t("Select your screen, printer, scanner and accessories. See live pricing in LKR with software bundle options.", "ඔබේ screen එක, printer එක, scanner එක සහ accessories තෝරන්න. Software bundle options එක්ක LKR වලින් live pricing බලන්න.")}
          </p>
        </div>

        <div className={styles.layout}>
          {/* Options Column */}
          <div className={styles.stepsCol}>
            {/* Step 1: Terminal */}
            <div data-reveal="up" className={styles.stepCard}>
              <div className={styles.stepHeader}>
                <span className={styles.stepNumber}>1</span>
                <div>
                  <h3 className={styles.stepTitle}>{t("Select POS Screen & Terminal", "POS Screen සහ Terminal එක තෝරන්න")}</h3>
                  <p className={styles.stepSubtitle}>{t("Touch terminals or bring your own Windows machine", "Touch terminals හෝ ඔබේම Windows machine එක")}</p>
                </div>
              </div>
              <div className={styles.optionsGrid}>
                {terminalOptions.map((opt) => {
                  const isSel = selectedTerminal === opt.id;
                  return (
                    <div
                      key={opt.id}
                      className={`${styles.optionItem} ${isSel ? styles.optionSelected : ""}`}
                      onClick={() => setSelectedTerminal(opt.id)}
                    >
                      <div className={styles.optionRadio}>
                        {isSel && <div className={styles.radioDot} />}
                      </div>
                      <div className={styles.optionContent}>
                        <div className={styles.optionName}>{tr(opt.name)}</div>
                        <div className={styles.optionNote}>{tr(opt.note)}</div>
                      </div>
                      <div className={styles.optionPrice}>
                        {opt.price === 0 ? t("Free", "නොමිලේ") : formatLkr(opt.price)}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Printer */}
            <div data-reveal="up" className={styles.stepCard}>
              <div className={styles.stepHeader}>
                <span className={styles.stepNumber}>2</span>
                <div>
                  <h3 className={styles.stepTitle}>{t("Select Receipt or Label Printer", "Receipt හෝ Label Printer එක තෝරන්න")}</h3>
                  <p className={styles.stepSubtitle}>{t("High-speed auto-cut thermal printers with ESC/POS drivers", "ESC/POS drivers සහිත high-speed auto-cut thermal printers")}</p>
                </div>
              </div>
              <div className={styles.optionsGrid}>
                {printerOptions.map((opt) => {
                  const isSel = selectedPrinter === opt.id;
                  return (
                    <div
                      key={opt.id}
                      className={`${styles.optionItem} ${isSel ? styles.optionSelected : ""}`}
                      onClick={() => setSelectedPrinter(opt.id)}
                    >
                      <div className={styles.optionRadio}>
                        {isSel && <div className={styles.radioDot} />}
                      </div>
                      <div className={styles.optionContent}>
                        <div className={styles.optionName}>{tr(opt.name)}</div>
                        <div className={styles.optionNote}>{tr(opt.note)}</div>
                      </div>
                      <div className={styles.optionPrice}>
                        {opt.price === 0 ? "—" : formatLkr(opt.price)}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Scanner */}
            <div data-reveal="up" className={styles.stepCard}>
              <div className={styles.stepHeader}>
                <span className={styles.stepNumber}>3</span>
                <div>
                  <h3 className={styles.stepTitle}>{t("Select Barcode Scanner", "Barcode Scanner එක තෝරන්න")}</h3>
                  <p className={styles.stepSubtitle}>{t("1D laser, 2D QR mobile reader, or hands-free supermarket scanner", "1D laser, 2D QR mobile reader, හෝ hands-free supermarket scanner")}</p>
                </div>
              </div>
              <div className={styles.optionsGrid}>
                {scannerOptions.map((opt) => {
                  const isSel = selectedScanner === opt.id;
                  return (
                    <div
                      key={opt.id}
                      className={`${styles.optionItem} ${isSel ? styles.optionSelected : ""}`}
                      onClick={() => setSelectedScanner(opt.id)}
                    >
                      <div className={styles.optionRadio}>
                        {isSel && <div className={styles.radioDot} />}
                      </div>
                      <div className={styles.optionContent}>
                        <div className={styles.optionName}>{tr(opt.name)}</div>
                        <div className={styles.optionNote}>{tr(opt.note)}</div>
                      </div>
                      <div className={styles.optionPrice}>
                        {opt.price === 0 ? "—" : formatLkr(opt.price)}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Accessories Checkboxes */}
            <div data-reveal="up" className={styles.stepCard}>
              <div className={styles.stepHeader}>
                <span className={styles.stepNumber}>4</span>
                <div>
                  <h3 className={styles.stepTitle}>{t("Counter Accessories & Consumables", "Counter Accessories සහ Consumables")}</h3>
                  <p className={styles.stepSubtitle}>{t("Auto-kick cash drawers, bill counters, and paper rolls", "Auto-kick cash drawers, bill counters සහ paper rolls")}</p>
                </div>
              </div>
              <div className={styles.checkboxGrid}>
                <label className={`${styles.checkItem} ${addCashDrawer ? styles.checkItemActive : ""}`}>
                  <input
                    type="checkbox"
                    checked={addCashDrawer}
                    onChange={(e) => setAddCashDrawer(e.target.checked)}
                    className={styles.hiddenCheckbox}
                  />
                  <div className={styles.checkboxBox}>{addCashDrawer && <Check size={14} color="#ffffff" />}</div>
                  <div className={styles.checkContent}>
                    <strong>Cash Drawer 5-Pin 8-Coin (ACC1639)</strong>
                    <span>{t("Heavy duty rolled steel, auto-pops on invoice", "Heavy duty rolled steel, invoice එක print වුණාම automatically open වෙනවා")}</span>
                  </div>
                  <span className={styles.checkPrice}>+ Rs. 9,450.00</span>
                </label>

                <label className={`${styles.checkItem} ${addBillCounter ? styles.checkItemActive : ""}`}>
                  <input
                    type="checkbox"
                    checked={addBillCounter}
                    onChange={(e) => setAddBillCounter(e.target.checked)}
                    className={styles.hiddenCheckbox}
                  />
                  <div className={styles.checkboxBox}>{addBillCounter && <Check size={14} color="#ffffff" />}</div>
                  <div className={styles.checkContent}>
                    <strong>P80 Heavy Duty Bill Counter (CAS2449)</strong>
                    <span>{t("Banking-grade UV/MG counterfeit detection (In Stock)", "Banking-grade UV/MG counterfeit (ව්‍යාජ) detection (Stock එකේ ඇත)")}</span>
                  </div>
                  <span className={styles.checkPrice}>+ Rs. 71,000.00</span>
                </label>

                <label className={`${styles.checkItem} ${addPaperRolls ? styles.checkItemActive : ""}`}>
                  <input
                    type="checkbox"
                    checked={addPaperRolls}
                    onChange={(e) => setAddPaperRolls(e.target.checked)}
                    className={styles.hiddenCheckbox}
                  />
                  <div className={styles.checkboxBox}>{addPaperRolls && <Check size={14} color="#ffffff" />}</div>
                  <div className={styles.checkContent}>
                    <strong>10x Thermal Receipt Rolls (80*80mm)</strong>
                    <span>{t("High sensitivity, dark print BPA-free paper", "High sensitivity, තද print එකක් දෙන BPA-free paper")}</span>
                  </div>
                  <span className={styles.checkPrice}>+ Rs. 2,250.00</span>
                </label>

                <label className={`${styles.checkItem} ${addBarcodeStickers ? styles.checkItemActive : ""}`}>
                  <input
                    type="checkbox"
                    checked={addBarcodeStickers}
                    onChange={(e) => setAddBarcodeStickers(e.target.checked)}
                    className={styles.hiddenCheckbox}
                  />
                  <div className={styles.checkboxBox}>{addBarcodeStickers && <Check size={14} color="#ffffff" />}</div>
                  <div className={styles.checkContent}>
                    <strong>5x Barcode Sticker Rolls (40*30mm)</strong>
                    <span>{t("4,000 self-adhesive labels for price tagging", "මිල ලකුණු කිරීමට self-adhesive labels 4,000ක්")}</span>
                  </div>
                  <span className={styles.checkPrice}>+ Rs. 1,050.00</span>
                </label>
              </div>
            </div>

            {/* Step 5: Software Plan */}
            <div data-reveal="up" className={styles.stepCard}>
              <div className={styles.stepHeader}>
                <span className={styles.stepNumber}>5</span>
                <div>
                  <h3 className={styles.stepTitle}>{t("Choose MariaPoS Software License", "MariaPoS Software License එක තෝරන්න")}</h3>
                  <p className={styles.stepSubtitle}>{t("Offline-first POS, FIFO inventory, Telegram alerts & SMS e-bills", "Offline-first POS, FIFO inventory, Telegram alerts සහ SMS e-bills")}</p>
                </div>
              </div>
              <div className={styles.optionsGrid}>
                {softwareOptions.map((opt) => {
                  const isSel = selectedSoftware === opt.id;
                  return (
                    <div
                      key={opt.id}
                      className={`${styles.optionItem} ${isSel ? styles.optionSelected : ""}`}
                      onClick={() => setSelectedSoftware(opt.id)}
                    >
                      <div className={styles.optionRadio}>
                        {isSel && <div className={styles.radioDot} />}
                      </div>
                      <div className={styles.optionContent}>
                        <div className={styles.optionName}>
                          {tr(opt.name)}
                          {opt.badge && <span className={styles.softwareBadge}>{tr(opt.badge)}</span>}
                        </div>
                        <div className={styles.optionNote}>{tr("Single payment · All features included")}</div>
                      </div>
                      <div className={styles.optionPrice}>
                        {opt.priceLkr === 0 ? t("Free", "නොමිලේ") : opt.usdPrice}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Sticky Summary Column */}
          <div className={styles.summaryCol}>
            <div className={styles.summaryCard}>
              <div className={styles.summaryHeader}>
                <span className={styles.summaryEyebrow}>{t("Configuration Summary", "Configuration සාරාංශය")}</span>
                <h3 className={styles.summaryTitle}>{t("Your Custom POS Counter", "ඔබේ Custom POS Counter එක")}</h3>
              </div>

              <div className={styles.summaryBreakdown}>
                <div className={styles.summaryRow}>
                  <span className={styles.sumLabel}>{t("Terminal:", "Terminal:")}</span>
                  <strong className={styles.sumVal}>{terminal ? tr(terminal.name) : ""}</strong>
                </div>
                <div className={styles.summaryRow}>
                  <span className={styles.sumLabel}>{t("Printer:", "Printer:")}</span>
                  <strong className={styles.sumVal}>{printer ? tr(printer.name) : ""}</strong>
                </div>
                <div className={styles.summaryRow}>
                  <span className={styles.sumLabel}>{t("Scanner:", "Scanner:")}</span>
                  <strong className={styles.sumVal}>{scanner ? tr(scanner.name) : ""}</strong>
                </div>
                {addCashDrawer && (
                  <div className={styles.summaryRow}>
                    <span className={styles.sumLabel}>{t("Cash Drawer:", "Cash Drawer:")}</span>
                    <strong className={styles.sumVal}>ACC1639 (Rs. 9,450.00)</strong>
                  </div>
                )}
                {addBillCounter && (
                  <div className={styles.summaryRow}>
                    <span className={styles.sumLabel}>{t("Bill Counter:", "Bill Counter:")}</span>
                    <strong className={styles.sumVal}>P80 Machine (Rs. 71,000.00)</strong>
                  </div>
                )}
                {addPaperRolls && (
                  <div className={styles.summaryRow}>
                    <span className={styles.sumLabel}>{t("Consumables:", "Consumables:")}</span>
                    <strong className={styles.sumVal}>10x Thermal Paper (Rs. 2,250.00)</strong>
                  </div>
                )}
                {addBarcodeStickers && (
                  <div className={styles.summaryRow}>
                    <span className={styles.sumLabel}>{t("Labels:", "Labels:")}</span>
                    <strong className={styles.sumVal}>5x Sticker Rolls (Rs. 1,050.00)</strong>
                  </div>
                )}
                <div className={styles.summaryRow}>
                  <span className={styles.sumLabel}>{t("Software:", "Software:")}</span>
                  <strong className={styles.sumVal}>{software ? tr(software.name) : ""}</strong>
                </div>
              </div>

              <div className={styles.divider} />

              <div className={styles.grandTotalRow}>
                <div>
                  <span className={styles.totalPrompt}>{t("Estimated Investment", "ඇස්තමේන්තුගත ආයෝජනය")}</span>
                  <span className={styles.warrantyNote}>{t("Includes 1-Yr Warranty & Setup", "අවුරුදු 1ක Warranty සහ Setup ඇතුළත්")}</span>
                </div>
                <strong className={styles.grandPrice}>{formatLkr(grandTotalLkr)}</strong>
              </div>

              <div className={styles.summaryActions}>
                <a
                  href={getWhatsappConfigText()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  <WhatsAppIcon size={18} />
                  <span>{t("Order this Setup on WhatsApp", "මේ Setup එක WhatsApp එකෙන් Order කරන්න")}</span>
                </a>

                <button
                  type="button"
                  className="btn-primary"
                  onClick={handleAddAllToCart}
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  <ShoppingBag size={18} />
                  <span>{t("Add Devices to Hardware Quote", "Devices Hardware Quote එකට Add කරන්න")}</span>
                </button>
              </div>

              <div className={styles.commitments}>
                <div className={styles.commitItem}>
                  <Shield size={14} color="#16a34a" />
                  <span>{t("Tested & Driver-Configured by JAAN Network", "JAAN Network විසින් Test කර Driver-Configure කරලා")}</span>
                </div>
                <div className={styles.commitItem}>
                  <Sparkles size={14} color="var(--red)" />
                  <span>{t("Islandwide Secure Doorstep Delivery", "මුළු රටටම ආරක්ෂිත Doorstep Delivery")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
