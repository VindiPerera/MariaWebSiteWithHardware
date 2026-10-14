"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowRight,
  ChevronDown,
  FileText,
  Menu,
  MessageCircle,
  Phone,
  Receipt,
  ShoppingBag,
  Sparkles,
  X,
  Zap,
} from "lucide-react";
import { waGeneral } from "@/lib/shop";
import { site } from "@/lib/site";
import { useCart } from "@/lib/cartContext";
import { useLang } from "@/lib/i18n";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { ThermalReceiptBill } from "@/components/common/ThermalReceiptBill";
import logo from "@/assets/images/logo-cropped.jpg";
import styles from "./Header.module.css";

const navItems = [
  { label: "Home", si: "මුල් පිටුව", href: "/" },
  { label: "Features", si: "විශේෂාංග", href: "/features" },
  { label: "Hardware", si: "Hardware", href: "/hardware", badge: "Store" },
  { label: "Plans", si: "මිල ගණන්", href: "/pricing" },
  { label: "Industries", si: "ව්‍යාපාර", href: "/industries" },
  { label: "About", si: "අප ගැන", href: "/about" },
  { label: "Contact", si: "අමතන්න", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [billModalOpen, setBillModalOpen] = useState(false);
  const { openDrawer, totalCount } = useCart();
  const { t } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Lock page scroll while the mobile menu or bill modal is open
  useEffect(() => {
    document.body.style.overflow = menuOpen || billModalOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, billModalOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
      >
        <div className={styles.navContainer}>
          {/* Brand Logo */}
          <Link href="/" aria-label="MariaPoS home" className={styles.brand}>
            <Image
              src={logo}
              alt="MariaPoS — Made to Bill"
              className={styles.logo}
              priority
            />
            <span className={styles.brandTag}>
              <span className={styles.brandDot} />
              Sri Lanka
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className={styles.desktopNav} aria-label="Primary navigation">
            {navItems.map((n) => {
              const active = isActive(n.href);
              return (
                <Link
                  key={n.href}
                  href={n.href}
                  className={`${styles.navLink} ${
                    active ? styles.navLinkActive : ""
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  <span>{t(n.label, n.si)}</span>
                  {n.badge && (
                    <span className={styles.navItemBadge}>{n.badge}</span>
                  )}
                  {active && <span className={styles.activePillGlow} />}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Cluster */}
          <div className={styles.actionCluster}>
            <LanguageSwitcher />

            {/* Sample Bill Quick Trigger */}
            <button
              type="button"
              className={styles.sampleBillBtn}
              onClick={() => setBillModalOpen(true)}
              aria-label="View Sri Lankan thermal receipt preview"
              title="Preview actual Sri Lankan printed thermal bill"
            >
              <Receipt size={16} />
              <span>{t("Sample Bill", "Sample Bill බලන්න")}</span>
            </button>

            {/* Quote Cart Button */}
            <button
              type="button"
              className={styles.cartButton}
              onClick={openDrawer}
              aria-label={`View Quote Cart with ${totalCount} items`}
              title="View your equipment quote cart"
            >
              <ShoppingBag size={17} />
              <span className={styles.cartText}>{t("Cart", "Cart")}</span>
              {totalCount > 0 && (
                <span className={styles.cartBadge}>{totalCount}</span>
              )}
            </button>

            {/* Direct WhatsApp CTA Button */}
            <a
              href={waGeneral}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappCta}
            >
              <span className={styles.pulsePing} />
              <MessageCircle size={17} />
              <span className={styles.whatsappText}>WhatsApp</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className={styles.hamburgerBtn}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Modern Minimalist Mobile Drawer */}
      <div
        className={`${styles.mobileDrawer} ${
          menuOpen ? styles.mobileDrawerOpen : ""
        }`}
        aria-hidden={!menuOpen}
      >
        <div className={styles.drawerInner}>
          <div className={styles.drawerTop}>
            <Image
              src={logo}
              alt="MariaPoS"
              className={styles.drawerLogo}
            />
            <button
              type="button"
              className={styles.drawerCloseBtn}
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          <div className={styles.drawerNavLinks}>
            {navItems.map((n) => {
              const active = isActive(n.href);
              return (
                <Link
                  key={n.href}
                  href={n.href}
                  className={`${styles.drawerLink} ${
                    active ? styles.drawerLinkActive : ""
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  <span className={styles.drawerLinkLabel}>{t(n.label, n.si)}</span>
                  {n.badge && (
                    <span className={styles.drawerItemBadge}>{n.badge}</span>
                  )}
                  <ArrowRight size={16} className={styles.drawerLinkArrow} />
                </Link>
              );
            })}
          </div>

          <div className={styles.drawerExtras}>
            <LanguageSwitcher />

            <button
              type="button"
              className={styles.drawerBillBtn}
              onClick={() => {
                setMenuOpen(false);
                setBillModalOpen(true);
              }}
            >
              <Receipt size={18} color="var(--red)" />
              <span>{t("View Thermal Bill Sample", "Thermal Bill Sample එක බලන්න")}</span>
            </button>

            <button
              type="button"
              className={styles.drawerCartBtn}
              onClick={() => {
                setMenuOpen(false);
                openDrawer();
              }}
            >
              <ShoppingBag size={18} />
              <span>{t(`Quote Cart (${totalCount} items)`, `Quote Cart (අයිතම ${totalCount})`, `Quote Cart (${totalCount} items)`)}</span>
            </button>

            <a
              href={waGeneral}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.drawerWaBtn}
            >
              <MessageCircle size={18} />
              <span>{t("Chat on WhatsApp (076 593 3255)", "WhatsApp එකෙන් කතා කරන්න (076 593 3255)")}</span>
            </a>

            <div className={styles.drawerTrustRow}>
              <span>{t("Cash on Delivery", "Cash on Delivery")}</span>
              <span>·</span>
              <span>{t("All 25 Districts", "දිස්ත්‍රික්ක 25ම")}</span>
              <span>·</span>
              <span>{t("1-Yr Warranty", "අවුරුදු 1ක Warranty")}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Sample Bill Modal */}
      {billModalOpen && (
        <div
          className={styles.modalOverlay}
          onClick={() => setBillModalOpen(false)}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalHeader}>
              <div className={styles.modalTitleBlock}>
                <span className={styles.modalEyebrow}>
                  <Receipt size={14} color="var(--red)" />
                  Real POS Output
                </span>
                <h3 className={styles.modalTitle}>
                  80mm Sri Lankan Thermal Bill
                </h3>
              </div>
              <button
                type="button"
                className={styles.modalCloseBtn}
                onClick={() => setBillModalOpen(false)}
                aria-label="Close bill preview"
              >
                <X size={20} />
              </button>
            </div>

            <div className={styles.modalBody}>
              <p className={styles.modalLead}>
                Every MariaPoS setup is configured to print crisp, formatted
                receipts with your custom shop logo, item breakdown, and
                scannable return barcodes on standard 58mm and 80mm thermal printers.
              </p>
              <ThermalReceiptBill showControls={true} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
