import { Plus } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/seo";
import styles from "./FaqBlock.module.css";

type Props = {
  title: string;
  eyebrow?: string;
  faqs: { q: string; a: string }[];
};

/** Server-rendered FAQ (native <details>) with FAQPage structured data. */
export function FaqBlock({ title, eyebrow = "FAQ", faqs }: Props) {
  return (
    <section className={styles.section} aria-label={title}>
      <JsonLd data={faqSchema(faqs)} />
      <div data-reveal="up" className={styles.heading}>
        <span className="eyebrow">{eyebrow}</span>
        <h2 className={styles.title}>{title}</h2>
      </div>
      <div data-reveal="up" className={styles.list}>
        {faqs.map(({ q, a }, i) => (
          <details key={q} className={styles.item} open={i === 0}>
            <summary className={styles.question}>
              <h3>{q}</h3>
              <Plus size={18} className={styles.sign} />
            </summary>
            <p className={styles.answer}>{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
