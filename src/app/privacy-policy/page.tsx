import Link from "next/link";
import { LegalPage, type LegalSection } from "@/components/legal/LegalPage";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How JAAN Network (PVT) Ltd. collects, uses, stores and protects personal data through the MariaPoS website, desktop POS software, cloud panel, SMS e-bills and Telegram alerts.",
  path: "/privacy-policy",
});

const sections: LegalSection[] = [
  {
    id: "scope",
    title: "Who we are and what this policy covers",
    content: (
      <>
        <p>
          MariaPoS is developed and operated by <strong>{site.company}</strong> (&quot;JAAN Network&quot;,
          &quot;we&quot;, &quot;us&quot;), {site.address}. This Privacy Policy explains how we handle personal data
          when you:
        </p>
        <ul>
          <li>visit this website or submit a trial, demo or contact form;</li>
          <li>install and use the MariaPoS desktop POS software (&quot;the Software&quot;);</li>
          <li>use the MariaPoS cloud panel, cloud sync, SMS e-bill or Telegram alert services; and</li>
          <li>purchase or renew a MariaPoS licence.</li>
        </ul>
        <p>
          We process personal data in line with the <strong>Personal Data Protection Act, No. 9 of 2022</strong> of Sri
          Lanka and other applicable laws.
        </p>
      </>
    ),
  },
  {
    id: "roles",
    title: "Your data vs. your customers' data",
    content: (
      <>
        <p>
          When you (the shop or business) use MariaPoS to record sales, customers, suppliers and staff, <strong>you
          are the controller</strong> of that business data. JAAN Network acts as a <strong>processor</strong> on your
          behalf only to provide cloud sync, the cloud panel, SMS e-bills and Telegram alerts. We do not sell, rent or
          use your business data or your customers&apos; data for our own marketing.
        </p>
        <p>
          You are responsible for having a lawful basis to collect your customers&apos; details (for example, their
          phone number for SMS receipts or loyalty points) and for informing them where required.
        </p>
      </>
    ),
  },
  {
    id: "collect",
    title: "Information we collect",
    content: (
      <>
        <h3>Information you give us</h3>
        <ul>
          <li>
            <strong>Trial, demo and contact forms:</strong> name, business name, business type, phone / WhatsApp
            number, email address, city and your message.
          </li>
          <li>
            <strong>Account and licence:</strong> cloud panel username, password (stored hashed), business details and
            licence plan.
          </li>
          <li>
            <strong>Payments:</strong> order details and payment status. Card payments are processed by our payment
            gateway (PayHere). We never receive or store your full card number.
          </li>
          <li>
            <strong>Support:</strong> messages, call notes and any screenshots or files you share with us.
          </li>
        </ul>
        <h3>Business data processed by the Software</h3>
        <ul>
          <li>
            Products, stock, sales, returns, shifts, till movements, expenses, suppliers, customers (name, phone,
            credit balance, loyalty points) and user accounts.
          </li>
          <li>
            This data is stored <strong>locally on your computer in an encrypted database</strong>. If cloud sync is
            enabled, a copy is transmitted over encrypted connections to our cloud servers.
          </li>
        </ul>
        <h3>Information collected automatically</h3>
        <ul>
          <li>
            <strong>Licence checks:</strong> when online, the Software contacts our licence server to confirm your
            licence status.
          </li>
          <li>
            <strong>Website:</strong> standard server logs (IP address, browser type, pages visited and time) used for
            security and to keep the site running.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "use",
    title: "How we use information",
    content: (
      <ul>
        <li>to provide, activate and renew your licence and the free trial;</li>
        <li>to sync your data, run the cloud panel and deliver SMS e-bills and Telegram alerts you have enabled;</li>
        <li>to respond to enquiries, book demos and provide technical support;</li>
        <li>to send service notices such as licence expiry reminders, SMS credit balance and important updates;</li>
        <li>to process payments and keep records required by law;</li>
        <li>to protect the security of our services and prevent fraud or misuse; and</li>
        <li>with your consent, to send you news and offers about MariaPoS. You can opt out at any time.</li>
      </ul>
    ),
  },
  {
    id: "sharing",
    title: "Service providers we share data with",
    content: (
      <>
        <p>We share only the data needed for each service, with providers bound to protect it:</p>
        <ul>
          <li>
            <strong>SMS gateway (SMSLenz):</strong> the customer&apos;s phone number and bill content, to deliver SMS
            e-bills.
          </li>
          <li>
            <strong>Telegram:</strong> sale notifications sent to the Telegram account you link in the cloud panel.
          </li>
          <li>
            <strong>Payment gateway (PayHere):</strong> the details needed to process your licence or SMS credit
            payment.
          </li>
          <li>
            <strong>Hosting providers:</strong> to store cloud panel and synced data.
          </li>
        </ul>
        <p>
          We may also disclose information if required by Sri Lankan law, a court order or a lawful request by a public
          authority, or to protect our rights and users&apos; safety. We do not sell personal data.
        </p>
      </>
    ),
  },
  {
    id: "security",
    title: "How we protect data",
    content: (
      <ul>
        <li>encrypted local database on the POS computer;</li>
        <li>encrypted (HTTPS) connections for cloud sync, licence checks and the cloud panel;</li>
        <li>role-based access, per-user permissions, manager PIN overrides and an audit log in the Software;</li>
        <li>hashed passwords and restricted staff access to our servers.</li>
      </ul>
    ),
  },
  {
    id: "retention",
    title: "How long we keep data",
    content: (
      <>
        <p>
          Business data synced to the cloud is kept while your licence is active. After your licence ends we keep it
          for up to 12 months so you can renew without losing data, unless you ask us to delete it sooner. Local data
          on your computer stays under your control.
        </p>
        <p>
          Enquiry and trial form details are kept for up to 24 months. Billing and payment records are kept for the
          period required by Sri Lankan tax and accounting laws.
        </p>
      </>
    ),
  },
  {
    id: "rights",
    title: "Your rights",
    content: (
      <>
        <p>Under the Personal Data Protection Act, you have the right to:</p>
        <ul>
          <li>access the personal data we hold about you;</li>
          <li>correct inaccurate or incomplete data;</li>
          <li>request erasure of your data, subject to legal record-keeping obligations;</li>
          <li>withdraw consent to marketing at any time; and</li>
          <li>object to or request review of processing.</li>
        </ul>
        <p>
          Email <a href={site.emailHref}>{site.email}</a> to make a request. We will respond within the time limits
          required by law. If your customers contact us about data you hold, we will refer them to you and assist you
          in responding.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies",
    content: (
      <p>
        This website uses only the cookies and browser storage needed for it to function. We do not use advertising
        cookies. If we add analytics in future, we will update this policy.
      </p>
    ),
  },
  {
    id: "children",
    title: "Children",
    content: <p>MariaPoS is a business product and is not directed at children under 18.</p>,
  },
  {
    id: "transfers",
    title: "International transfers",
    content: (
      <p>
        Some service providers (such as Telegram or hosting providers) may process data outside Sri Lanka. Where this
        happens, we take reasonable steps to ensure the data receives adequate protection as required by law.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    content: (
      <p>
        We may update this policy from time to time. The &quot;Last updated&quot; date shows the latest version.
        Significant changes will be announced on this website or inside the Software. See also our{" "}
        <Link href="/terms-and-conditions">Terms &amp; Conditions</Link> and{" "}
        <Link href="/refund-policy">Refund Policy</Link>.
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      path="/privacy-policy"
      updated="25 September 2026"
      summary={
        <>
          <strong>In short:</strong> your shop data lives in an encrypted database on your own computer. If you turn on
          cloud sync, SMS or Telegram, we process only what those services need. We never sell your data or your
          customers&apos; data.
        </>
      }
      sections={sections}
    />
  );
}
