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
          <h1 className="section-title">{t("Built in Colombo, for shops across Sri Lanka.", "කොළඹදී හදපු, ශ්‍රී ලංකාව පුරා ඇති වෙළඳසැල් වෙනුවෙන්.")}</h1>
          <p className="lead">
            {t(
              "MariaPoS is an offline-first Windows point-of-sale system designed for supermarkets, pharmacies, hardware stores and retail shops that need fast billing, accurate FIFO stock and reliable service — with or without the internet.",
              "MariaPoS යනු වේගවත් billing, නිවැරදි FIFO stock සහ විශ්වාසවන්ත සේවයක් අවශ්‍ය supermarkets, pharmacies, hardware stores සහ retail වෙළඳසැල් සඳහා නිර්මාණය කළ offline-first Windows POS system එකකි. Internet තිබුණත් නැතත් එය නොනැවතී ක්‍රියාත්මක වේ.",
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
                ? `MariaPoS-ஐ ${site.address} முகவரியில் உள்ள ${site.company} உருவாக்கி, ஆதரவும் வழங்குகிறது. Software-ஐ நாங்களே உருவாக்கி, நாங்களே support செய்கிறோம். இடையில் resellers யாரும் இல்லை.`
                : lang === "si"
                ? `MariaPoS develop කර support කරන්නේ ${site.address} හි පිහිටි ${site.company} විසින්. Software එක අපිම හදලා, අපිම support කරනවා, අතරමැදි resellers නැහැ.`
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
                "සැබෑ වෙළඳසැල් counters සඳහාම හදපු offline-first POS එකක්: barcode billing, FIFO batch inventory, shift සහ till control, SMS e-bill receipts, push sales alerts සහ two-way cloud sync.",
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
                "හැම license එකකටම අපේම team එකෙන් කෙලින්ම phone, WhatsApp සහ email support ඇතුළත්. MariaPoS හදන අයම තමයි ඔබ call කරද්දී උත්තර දෙන්නේ.",
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
                "MariaPoS බලගන්වන්නේ Thejan Bathiya විසින්. වෙළඳසැල් අයිතිකරුවන් දිනපතා bill කරන්න, stock track කරන්න සහ till එක close කරන්න පාවිච්චි කරන system එකේ සංකල්පය, product direction එක සහ engineering එක ඔහුගේ.",
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
                ? `MariaPoS-ஐ ${site.company} தொடக்கம் முதல் இறுதி வரை நிர்வகிக்கிறது. Development, sales, installation முதல் இலங்கையில் உள்ள ஒவ்வொரு customer-க்கும் வழங்கும் தொடர்ச்சியான support வரை எல்லாமே இவர்களே.`
                : lang === "si"
                ? `${site.company} විසින් MariaPoS මුල සිට අග දක්වාම හිමිකරගෙන ක්‍රියාත්මක කරයි. Development සිට sales, installation සහ ශ්‍රී ලංකාවේ හැම customer කෙනෙකුටම දෙන ongoing support දක්වාම.`
                : `${site.company} owns and operates MariaPoS end-to-end — from development to sales, installation and ongoing support for every customer in Sri Lanka.`}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
