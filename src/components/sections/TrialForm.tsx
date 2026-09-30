"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { site } from "@/lib/site";
import styles from "./TrialCta.module.css";

export function TrialForm() {
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
          Thanks — we&apos;ll send your trial login and the Windows installer to {email}.
        </p>
      ) : (
        <>
          <span className={styles.formTitle}>Start your free trial</span>
          <input
            required
            name="business"
            aria-label="Business name"
            placeholder="Business name"
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
            placeholder="Phone (optional)"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={styles.input}
          />
          <button type="submit" className={styles.submit}>
            Start 7-Day Free Trial
            <ArrowRight size={18} />
          </button>
        </>
      )}
    </form>
  );
}
