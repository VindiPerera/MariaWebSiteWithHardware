import Link from "next/link";
import { LegalPage, type LegalSection } from "@/components/legal/LegalPage";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Refund Policy",
  description:
    "MariaPoS refund and cancellation policy: free 7-day trial, when licence payments and SMS credits can be refunded, and how to request a refund from JAAN Network (PVT) Ltd.",
  path: "/refund-policy",
});

const sections: LegalSection[] = [
  {
    id: "trial",
    title: "Try before you buy",
    content: (
      <p>
        Every business can use MariaPoS with <strong>full access for {site.trialDays} days, free</strong>, with no
        credit card required. We ask that you use the trial to confirm MariaPoS suits your shop, hardware and workflow
        before purchasing a licence.
      </p>
    ),
  },
  {
    id: "eligible",
    title: "When you can get a full refund",
    content: (
      <>
        <p>
          You are entitled to a <strong>full refund of a licence payment</strong> if you request it within{" "}
          <strong>14 days of the payment date</strong> and one of the following applies:
        </p>
        <ul>
          <li>you were charged twice for the same order, or charged an incorrect amount;</li>
          <li>we were unable to deliver or activate your licence within 3 business days of payment;</li>
          <li>
            a defect in MariaPoS stops you from billing and our support team cannot fix it or provide a workaround
            within 7 days of you reporting it.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "not-eligible",
    title: "When refunds are not available",
    content: (
      <ul>
        <li>after 14 days from the payment date, except where required by law;</li>
        <li>for change of mind after the licence has been activated, since the free trial is available first;</li>
        <li>for the unused portion of a licence term if you stop using the Software early;</li>
        <li>
          for problems caused by third-party hardware, Windows, internet or power issues, or by use that breaks our{" "}
          <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>;
        </li>
        <li>if the licence was suspended for misuse, sharing or a breach of the Terms.</li>
      </ul>
    ),
  },
  {
    id: "sms",
    title: "SMS credits",
    content: (
      <p>
        SMS credits are prepaid and consumed as e-bills are sent. <strong>Used SMS credits are not refundable.</strong>{" "}
        Unused SMS credits can be refunded only if the top-up was made in error and you contact us within 7 days of the
        purchase. Otherwise, unused credits stay in your SMS wallet while your licence is active.
      </p>
    ),
  },
  {
    id: "upgrades",
    title: "Plan changes and renewals",
    content: (
      <>
        <p>
          MariaPoS licences are one-time payments for a fixed term (1, 2 or 3 years) and{" "}
          <strong>do not renew automatically</strong>, so there is nothing to cancel. We remind you before your licence
          expires, and you choose whether to renew.
        </p>
        <p>
          If you want to move from a shorter to a longer plan shortly after purchase, contact us and we will help with
          the difference where possible.
        </p>
      </>
    ),
  },
  {
    id: "how",
    title: "How to request a refund",
    content: (
      <>
        <p>
          Email <a href={`${site.emailHref}?subject=MariaPoS%20refund%20request`}>{site.email}</a> or WhatsApp{" "}
          <a href={site.whatsappHref}>{site.phone}</a> with:
        </p>
        <ul>
          <li>your business name and registered phone number or cloud panel username;</li>
          <li>the payment date, amount and order / transaction reference; and</li>
          <li>the reason for the request, with screenshots if it relates to a technical problem.</li>
        </ul>
        <p>We will acknowledge your request within 2 business days and give a decision within 5 business days.</p>
      </>
    ),
  },
  {
    id: "processing",
    title: "How refunds are paid",
    content: (
      <p>
        Approved refunds are paid to the <strong>original payment method</strong> through our payment gateway
        (PayHere) or, where that is not possible, by bank transfer to an account in the payer&apos;s name. Refunds are
        usually processed within 14 business days of approval; the time for the money to appear depends on your bank
        or card issuer. When a licence is refunded, it is deactivated. Your local data stays on your computer.
      </p>
    ),
  },
  {
    id: "rights",
    title: "Your legal rights",
    content: (
      <p>
        This policy does not affect any rights you have under the Consumer Affairs Authority Act, No. 9 of 2003 or
        other applicable Sri Lankan law.
      </p>
    ),
  },
];

export default function RefundPolicyPage() {
  return (
    <LegalPage
      title="Refund Policy"
      path="/refund-policy"
      updated="25 September 2026"
      summary={
        <>
          <strong>In short:</strong> try MariaPoS free for {site.trialDays} days first. Licence payments can be
          refunded within 14 days for duplicate or incorrect charges, failed activation, or a defect we can&apos;t fix.
          Used SMS credits are not refundable. Licences never auto-renew.
        </>
      }
      sections={sections}
    />
  );
}
