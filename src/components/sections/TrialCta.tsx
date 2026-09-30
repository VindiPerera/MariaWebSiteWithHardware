import { site } from "@/lib/site";
import { TrialForm } from "./TrialForm";
import styles from "./TrialCta.module.css";

export function TrialCta() {
  return (
    <section id="trial" className={styles.section}>
      <div data-reveal="scale" className={styles.card}>
        <div aria-hidden="true" className={styles.glow} />
        <div aria-hidden="true" className={styles.dots} />
        <div className={styles.copy}>
          <h2 className={styles.title}>Run your shop on MariaPoS for 7 days, free.</h2>
          <p className={styles.subtitle}>Full access, no credit card. One trial per business.</p>
          <div id="demo" className={styles.demo}>
            Prefer a walkthrough?{" "}
            <a href={site.demoHref} className={styles.demoLink}>
              Book a demo
            </a>
          </div>
        </div>
        <TrialForm />
      </div>
    </section>
  );
}
