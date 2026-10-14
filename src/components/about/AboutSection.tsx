"use client";

import { Building2, Sparkles, UserRound } from "lucide-react";
import { site } from "@/lib/site";
import styles from "./AboutSection.module.css";
import { useLang } from "@/lib/i18n";

export function AboutSection() {
  const { t, lang } = useLang();
  return (
    <section className={styles.section}>
      <div aria-hidden="true" className={styles.grid} />
      <div className={styles.inner}>
        <div data-reveal="up" className={`section-intro ${styles.intro}`}>
          <span className="eyebrow">{t("About Us", "අප ගැන")}</span>
          <h1 className="section-title">{t("Built in Colombo, for shops across Sri Lanka.", "ශ්‍රී ලංකාවේ වෙළඳසැල් වෙනුවෙන්, කොළඹදී හදපු POS.")}</h1>
          <p className="lead">
            {t(
              "MariaPoS is an offline-first Windows point-of-sale system designed for supermarkets, pharmacies, hardware stores and retail shops that need fast billing, accurate FIFO stock and reliable service — with or without the internet.",
              "MariaPoS යනු supermarket, pharmacy, hardware ඇතුළු වෙළඳසැල් වලට වේගවත් bill කිරීමක්, නිවැරදි stock ගණනක් සහ විශ්වාසදායක සේවයක් ලබා දෙන POS system එකකි. Internet තිබුණත් නැතත් එය නොනැවතී වැඩ කරන නිසා, ඔබේ ව්‍යාපාරය කිසිදා නවතින්නේ නැහැ.",
            )}
          </p>
        </div>

        <div className={styles.storyGrid}>
          <div data-reveal="up" data-delay="0" className={styles.storyCard}>
            <span className="icon-tile">
              <Building2 size={22} />
            </span>
            <h3 className={styles.storyTitle}>{t("Who we are", "අපි කවුද")}</h3>
            <p className={styles.storyText}>
              {lang === "ta"
                ? `MariaPoS-ஐ ${site.address} முகவரியிலுள்ள ${site.company} உருவாக்கி, ஆதரவும் வழங்குகிறது. மென்பொருளை உருவாக்கியவர்களிடமிருந்தே நேரடியாக ஆதரவு கிடைக்கிறது; இடைத்தரகர்கள் இல்லை.`
                : lang === "si"
                ? `MariaPoS හදන්නෙත් support කරන්නෙත් ${site.address} හි පිහිටි ${site.company} විසින්. අතරමැදියන් නැතුව, software එක හැදූ අයගෙන්ම කෙලින්ම සහාය ලැබෙනවා.`
                : `MariaPoS is developed and supported by ${site.company}, based at ${site.address}. We build and support the software directly — no resellers in between.`}
            </p>
          </div>

          <div data-reveal="up" data-delay="100" className={styles.storyCard}>
            <span className="icon-tile">
              <Sparkles size={22} />
            </span>
            <h3 className={styles.storyTitle}>{t("What we do", "අපි කරන්නේ මොනවාද")}</h3>
            <p className={styles.storyText}>
              {t(
                "A single offline-first POS built for real shop counters: barcode billing, FIFO batch inventory, shift & till control, SMS e-bill receipts, push sales alerts and two-way cloud sync.",
                "ඔබේ වෙළඳසැල් counter එකටම හදපු POS එකක්: barcode එකෙන් වේගයෙන් bill කිරීම, stock නිවැරදිව තබාගැනීම, cashier ගේ මුදල් පාලනය, SMS bills, phone එකට sales alerts සහ cloud backup.",
              )}
            </p>
          </div>

          <div data-reveal="up" data-delay="200" className={styles.storyCard}>
            <span className="icon-tile">
              <UserRound size={22} />
            </span>
            <h3 className={styles.storyTitle}>{t("How we support you", "අපි ඔබට support කරන්නේ කොහොමද")}</h3>
            <p className={styles.storyText}>
              {t(
                "Every license includes direct phone, WhatsApp and email support from our own team — the people who build MariaPoS are the same people who answer when you call.",
                "හැම licence එකකටම අපේම team එකෙන් phone, WhatsApp සහ email support ලැබෙනවා. MariaPoS හදන අයම තමයි ඔබ call කරද්දී උත්තර දෙන්නේ.",
              )}
            </p>
          </div>
        </div>

        <div data-reveal="up" className={styles.peopleGrid}>
          <div className={styles.personCard}>
            <span className={styles.avatar}>TB</span>
            <div>
              <div className={styles.personName}>Thejan Bathiya</div>
              <div className={styles.personRole}>{t("Powered by", "බලගැන්වූයේ")}</div>
            </div>
            <p className={styles.personText}>
              {t(
                "MariaPoS is powered by Thejan Bathiya — the concept, product direction and engineering behind the system shop owners use every day to bill, track stock and close their till.",
                "MariaPoS බලගන්වන්නේ Thejan Bathiya විසින්. වෙළඳසැල් හිමියන් දිනපතා bill කරන්න, stock බලාගන්න සහ දවස අවසන් කරන්න භාවිතා කරන system එකේ අදහස, දිශානතිය සහ තාක්ෂණය ඔහුගෙන්.",
              )}
            </p>
          </div>

          <div className={`${styles.personCard} ${styles.personCardLight}`}>
            <span className={styles.avatar}>JN</span>
            <div>
              <div className={styles.personName}>{site.company}</div>
              <div className={styles.personRoleLight}>{t("Company", "සමාගම")}</div>
            </div>
            <p className={styles.personTextLight}>
              {lang === "ta"
                ? `MariaPoS-ஐ ${site.company} தொடக்கம் முதல் இறுதி வரை பொறுப்பேற்கிறது: உருவாக்கம், விற்பனை, நிறுவல் முதல் இலங்கையிலுள்ள ஒவ்வொரு வாடிக்கையாளருக்கும் தொடர்ந்து வழங்கும் ஆதரவு வரை.`
                : lang === "si"
                ? `${site.company} MariaPoS මුල සිට අග දක්වාම භාර ගනී: නිර්මාණයේ සිට විකිණීම, install කිරීම සහ ශ්‍රී ලංකාවේ හැම customer කෙනෙකුටම දිගටම දෙන support එක දක්වාම.`
                : `${site.company} owns and operates MariaPoS end-to-end — from development to sales, installation and ongoing support for every customer in Sri Lanka.`}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
