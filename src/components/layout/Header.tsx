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
import { ThermalReceiptBill } from "@/components/common/ThermalReceiptBill";
import logo from "@/assets/images/logo-cropped.jpg";
import styles from "./Header.module.css";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "Hardware", href: "/hardware", badge: "Store" },
  { label: "Plans", href: "/pricing" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [billModalOpen, setBillModalOpen] = useState(false);
  const { openDrawer, totalCount } = useCart();

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
                  <span>{n.label}</span>
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
            {/* Sample Bill Quick Trigger */}
            <button
              type="button"
              className={styles.sampleBillBtn}
              onClick={() => setBillModalOpen(true)}
              aria-label="View Sri Lankan thermal receipt preview"
              title="Preview actual Sri Lankan printed thermal bill"
            >
              <Receipt size={16} />
              <span>Sample Bill</span>
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
              <span className={styles.cartText}>Cart</span>
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
              <span>WhatsApp</span>
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
                  <span className={styles.drawerLinkLabel}>{n.label}</span>
                  {n.badge && (
                    <span className={styles.drawerItemBadge}>{n.badge}</span>
                  )}
                  <ArrowRight size={16} className={styles.drawerLinkArrow} />
                </Link>
              );
            })}
          </div>

          <div className={styles.drawerExtras}>
            <button
              type="button"
              className={styles.drawerBillBtn}
              onClick={() => {
                setMenuOpen(false);
                setBillModalOpen(true);
              }}
            >
              <Receipt size={18} color="var(--red)" />
              <span>View Thermal Bill Sample</span>
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
              <span>Quote Cart ({totalCount} items)</span>
            </button>

            <a
              href={waGeneral}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.drawerWaBtn}
            >
              <MessageCircle size={18} />
              <span>Chat on WhatsApp (076 593 3255)</span>
            </a>

            <div className={styles.drawerTrustRow}>
              <span>Cash on Delivery</span>
              <span>·</span>
              <span>All 25 Districts</span>
              <span>·</span>
              <span>1-Yr Warranty</span>
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
                Every MariaPoS setup is configured to print clear, formatted
                receipts in English &amp; Sinhala with your shop name, tax
                number, and barcode.
              </p>
              <ThermalReceiptBill showControls={true} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
