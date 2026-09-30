import Link from "next/link";
import { LegalPage, type LegalSection } from "@/components/legal/LegalPage";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Terms & Conditions",
  description:
    "Terms and conditions for using the MariaPoS website, POS software licence, free trial, cloud panel, SMS e-bills and Telegram alerts provided by JAAN Network (PVT) Ltd., Sri Lanka.",
  path: "/terms-and-conditions",
});

const sections: LegalSection[] = [
  {
    id: "acceptance",
    title: "Acceptance of these terms",
    content: (
      <p>
        These Terms &amp; Conditions (&quot;Terms&quot;) are an agreement between you (the business or person using
        MariaPoS) and <strong>{site.company}</strong>, {site.address} (&quot;JAAN Network&quot;, &quot;we&quot;,
        &quot;us&quot;). By visiting this website, starting a trial, installing the MariaPoS software, or purchasing a
        licence, you agree to these Terms, our <Link href="/privacy-policy">Privacy Policy</Link> and our{" "}
        <Link href="/refund-policy">Refund Policy</Link>. If you are accepting on behalf of a business, you confirm you
        are authorised to do so.
      </p>
    ),
  },
  {
    id: "definitions",
    title: "Definitions",
    content: (
      <ul>
        <li>
          <strong>Software:</strong> the MariaPoS desktop point-of-sale application for Windows, including updates.
        </li>
        <li>
          <strong>Cloud Services:</strong> the MariaPoS cloud panel, cloud sync, licence server, SMS e-bill service and
          Telegram alerts.
        </li>
        <li>
          <strong>Licence:</strong> the right to use the Software and Cloud Services for the term of the plan you
          purchased.
        </li>
        <li>
          <strong>Your Data:</strong> products, sales, customers, suppliers, staff and other information you enter.
        </li>
      </ul>
    ),
  },
  {
    id: "trial",
    title: "Free trial",
    content: (
      <p>
        We offer a one-time free trial of {site.trialDays} days per business with full access. When the trial ends,
        you need to activate a licence to keep using MariaPoS. Data entered during the trial is kept on your computer
        and carries over when you activate a licence. We may refuse or end trials that we reasonably believe are being
        misused, for example repeated trials by the same business.
      </p>
    ),
  },
  {
    id: "licence",
    title: "Licence grant",
    content: (
      <>
        <p>
          On payment, we grant you a non-exclusive, non-transferable licence to use the Software and Cloud Services for
          your own business, for the term and number of installations or branches in your plan.
        </p>
        <p>You must not:</p>
        <ul>
          <li>copy, resell, rent, sublicense or share your licence or cloud panel credentials with another business;</li>
          <li>reverse-engineer, decompile or modify the Software, or bypass licence checks;</li>
          <li>use MariaPoS for unlawful purposes, or to send spam or unsolicited SMS messages; or</li>
          <li>interfere with or overload our servers or the Cloud Services.</li>
        </ul>
        <p>The Software is licensed, not sold. All intellectual property in MariaPoS remains with JAAN Network.</p>
      </>
    ),
  },
  {
    id: "fees",
    title: "Fees, payment and renewal",
    content: (
      <>
        <p>
          Licence prices are shown on our <Link href="/pricing">pricing page</Link>. Payments are made in advance
          through our payment gateway (PayHere) or another method we accept. Prices may change, but a change never
          affects a licence term you have already paid for.
        </p>
        <p>
          Licences are for a fixed term and <strong>do not renew automatically</strong>. We remind you before expiry.
          If a licence expires, you need to renew it to keep using MariaPoS; Your Data on your computer is not deleted.
        </p>
      </>
    ),
  },
  {
    id: "sms",
    title: "SMS credits and third-party services",
    content: (
      <>
        <p>
          SMS e-bills use prepaid SMS credits from your SMS wallet. SMS credits are not unlimited and are consumed per
          message. Delivery depends on the SMS gateway and mobile networks, and we cannot guarantee delivery of every
          message.
        </p>
        <p>
          Telegram alerts depend on Telegram&apos;s service. Your use of these third-party services is also subject to
          their own terms. You must only send SMS e-bills to customers who have provided their number for that purpose.
        </p>
      </>
    ),
  },
  {
    id: "data",
    title: "Your data and backups",
    content: (
      <>
        <p>
          You own Your Data. You give us permission to host, process and transmit it only as needed to provide the
          Cloud Services, as described in our <Link href="/privacy-policy">Privacy Policy</Link>.
        </p>
        <p>
          The Software stores data on your computer. You are responsible for the security of your computer and for
          keeping regular backups. Cloud sync provides an additional copy but is not a substitute for your own backups.
        </p>
      </>
    ),
  },
  {
    id: "compliance",
    title: "Your responsibilities",
    content: (
      <ul>
        <li>entering correct prices, tax settings and product information;</li>
        <li>
          meeting your own legal, tax (including VAT where applicable) and record-keeping obligations. Reports produced
          by MariaPoS are tools to help you, not professional tax or accounting advice;
        </li>
        <li>managing your staff&apos;s user accounts, passwords and permissions; and</li>
        <li>using compatible hardware and a supported version of Windows.</li>
      </ul>
    ),
  },
  {
    id: "support",
    title: "Updates and support",
    content: (
      <p>
        Your licence includes software updates and technical support by phone, WhatsApp and email during the licence
        term. We aim to respond promptly but do not guarantee specific response times unless agreed in writing. We may
        add, change or remove features to improve MariaPoS, without materially reducing the core billing functions of
        your licence during its term.
      </p>
    ),
  },
  {
    id: "availability",
    title: "Availability",
    content: (
      <p>
        The Software is designed to keep billing offline. The Cloud Services may occasionally be unavailable for
        maintenance or reasons outside our control. We will make reasonable efforts to minimise interruptions.
      </p>
    ),
  },
  {
    id: "warranty",
    title: "Warranty disclaimer",
    content: (
      <p>
        We will provide the Software and Cloud Services with reasonable skill and care. Apart from that and any rights
        you have by law, MariaPoS is provided &quot;as is&quot;, and we do not warrant that it will be error-free or
        uninterrupted, or that it will meet every requirement of your business.
      </p>
    ),
  },
  {
    id: "liability",
    title: "Limitation of liability",
    content: (
      <p>
        To the extent permitted by law, JAAN Network is not liable for indirect or consequential loss, loss of profit,
        revenue or data, or business interruption. Our total liability for any claim relating to MariaPoS is limited to
        the amount you paid for your licence in the 12 months before the claim. Nothing in these Terms limits liability
        that cannot be limited under Sri Lankan law.
      </p>
    ),
  },
  {
    id: "termination",
    title: "Suspension and termination",
    content: (
      <p>
        We may suspend or terminate your licence if you seriously breach these Terms (for example, licence sharing,
        SMS spam or tampering with licence checks) and, where the breach can be fixed, do not fix it within 14 days of
        notice. On termination, Your Data stays on your computer and our Privacy Policy explains how long cloud data is
        kept.
      </p>
    ),
  },
  {
    id: "law",
    title: "Governing law and disputes",
    content: (
      <p>
        These Terms are governed by the laws of the Democratic Socialist Republic of Sri Lanka. We encourage you to
        contact us first so we can resolve any issue informally. Any dispute that cannot be resolved this way is
        subject to the exclusive jurisdiction of the courts of Colombo, Sri Lanka.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to these terms",
    content: (
      <p>
        We may update these Terms from time to time. The &quot;Last updated&quot; date shows the current version.
        Material changes will be announced on this website or in the Software, and continued use after that means you
        accept the updated Terms.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      path="/terms-and-conditions"
      updated="25 September 2026"
      summary={
        <>
          <strong>In short:</strong> you buy a fixed-term licence to use MariaPoS in your business. You own your data,
          licences never auto-renew, don&apos;t share or crack the licence, and keep your own backups. Sri Lankan law
          applies.
        </>
      }
      sections={sections}
    />
  );
}
