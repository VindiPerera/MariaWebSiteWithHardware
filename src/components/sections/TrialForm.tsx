"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { site } from "@/lib/site";
import styles from "./TrialCta.module.css";
import { useLang } from "@/lib/i18n";

export function TrialForm() {
  const { t } = useLang();
  const [submitted, setSubmitted] = useState(false);
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // There is no trial backend yet, so the request is handed to the sales team over WhatsApp.
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    const msg = `*MariaPoS 7-Day Free Trial*\n\n*Business name:* ${businessName}\n*Email:* ${email}\n*Phone:* ${phone || "-"}`;
    window.open(`https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {submitted ? (
        <p className={styles.thanks}>
          {t(
            `Thanks — we'll send your trial login and the Windows installer to ${email}.`,
            `ස්තූතියි — ඔබේ trial login එකයි Windows installer එකයි ${email} වෙත එවනවා.`,
            `நன்றி — உங்கள் trial login-ஐயும் Windows installer-ஐயும் ${email} முகவரிக்கு அனுப்புகிறோம்.`,
          )}
        </p>
      ) : (
        <>
          <span className={styles.formTitle}>{t("Start your free trial", "ඔබේ free trial එක පටන් ගන්න")}</span>
          <input
            required
            name="business"
            aria-label={t("Business name", "ව්‍යාපාරයේ නම")}
            placeholder={t("Business name", "ව්‍යාපාරයේ නම")}
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            className={styles.input}
          />
          <input
            required
            type="email"
            name="email"
            aria-label="Email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
          />
          <input
            type="tel"
            name="phone"
            aria-label="Phone"
            placeholder={t("Phone (optional)", "Phone (අවශ්‍ය නම් පමණක්)")}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={styles.input}
          />
          <button type="submit" className={styles.submit}>
            {t("Start 7-Day Free Trial", "දින 7ක Free Trial එක පටන් ගන්න")}
            <ArrowRight size={18} />
          </button>
        </>
      )}
    </form>
  );
}
