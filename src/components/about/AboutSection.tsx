import { Building2, Sparkles, UserRound } from "lucide-react";
import { site } from "@/lib/site";
import styles from "./AboutSection.module.css";

export function AboutSection() {
  return (
    <section className={styles.section}>
      <div aria-hidden="true" className={styles.grid} />
      <div className={styles.inner}>
        <div data-reveal="up" className={`section-intro ${styles.intro}`}>
          <span className="eyebrow">About Us</span>
          <h1 className="section-title">Built in Colombo, for shops across Sri Lanka.</h1>
          <p className="lead">
            MariaPoS is an offline-first Windows point-of-sale system designed for supermarkets, pharmacies, hardware
            stores and retail shops that need fast billing, accurate FIFO stock and reliable service — with or
            without the internet.
          </p>
        </div>

        <div className={styles.storyGrid}>
          <div data-reveal="up" data-delay="0" className={styles.storyCard}>
            <span className="icon-tile">
              <Building2 size={22} />
            </span>
            <h3 className={styles.storyTitle}>Who we are</h3>
            <p className={styles.storyText}>
              MariaPoS is developed and supported by {site.company}, based at {site.address}. We build and support
              the software directly — no resellers in between.
            </p>
          </div>

          <div data-reveal="up" data-delay="100" className={styles.storyCard}>
            <span className="icon-tile">
              <Sparkles size={22} />
            </span>
            <h3 className={styles.storyTitle}>What we do</h3>
            <p className={styles.storyText}>
              A single offline-first POS built for real shop counters: barcode billing, FIFO batch inventory, shift
              &amp; till control, SMS e-bill receipts, Telegram sales alerts and two-way cloud sync.
            </p>
          </div>

          <div data-reveal="up" data-delay="200" className={styles.storyCard}>
            <span className="icon-tile">
              <UserRound size={22} />
            </span>
            <h3 className={styles.storyTitle}>How we support you</h3>
            <p className={styles.storyText}>
              Every license includes direct phone, WhatsApp and email support from our own team — the people who
              build MariaPoS are the same people who answer when you call.
            </p>
          </div>
        </div>

        <div data-reveal="up" className={styles.peopleGrid}>
          <div className={styles.personCard}>
            <span className={styles.avatar}>TB</span>
            <div>
              <div className={styles.personName}>Thejan Bathiya</div>
              <div className={styles.personRole}>Powered by</div>
            </div>
            <p className={styles.personText}>
              MariaPoS is powered by Thejan Bathiya — the concept, product direction and engineering behind the
              system shop owners use every day to bill, track stock and close their till.
            </p>
          </div>

          <div className={`${styles.personCard} ${styles.personCardLight}`}>
            <span className={styles.avatar}>JN</span>
            <div>
              <div className={styles.personName}>{site.company}</div>
              <div className={styles.personRoleLight}>Company</div>
            </div>
            <p className={styles.personTextLight}>
              {site.company} owns and operates MariaPoS end-to-end — from development to sales, installation and
              ongoing support for every customer in Sri Lanka.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
