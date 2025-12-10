import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

export default function PrivacyPage() {
  return (
    <>
      <SEO
        title="Privacy Policy of Websoft Solution"
        description="Have a look at Privacy policy of Websoft Sollution Bhuj"
        // keywords={["keyword1", "keyword2"]}
      />

      <main className="px-8 lg:px-16 pt-16 pb-20 cursor-default">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Privacy Policy
          </h1>
          <p className="text-sm text-muted-foreground">
            Last updated: 10 December, 2025
          </p>
        </div>

        <section className="mb-6">
          <p>
            This Privacy Policy explains how Websoft collects, uses, discloses,
            and protects personal information when you use our internet, OTT,
            and TV pack services. It also explains your rights and how to
            contact us about privacy matters.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-foreground mb-2">
            Information We Collect
          </h2>
          <ul className="list-disc list-inside text-sm text-muted-foreground">
            <li>Account and contact details (name, address, email, phone).</li>
            <li>Payment and billing information used for subscriptions.</li>
            <li>
              Service usage data such as bandwidth, connection times, and
              session logs.
            </li>
            <li>
              Device identifiers, IP addresses, and technical diagnostic data.
            </li>
            <li>Support communications and customer service records.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-foreground mb-2">
            How We Use Your Information
          </h2>
          <ul className="list-disc list-inside text-sm text-muted-foreground">
            <li>To provide, maintain, and improve the Services.</li>
            <li>To process payments, invoices, and manage subscriptions.</li>
            <li>To respond to customer requests and provide support.</li>
            <li>
              To monitor, analyze and optimize network performance and service
              quality.
            </li>
            <li>
              To send important service messages, updates, and billing notices.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-foreground mb-2">
            Legal Basis for Processing
          </h2>
          <p className="text-sm text-muted-foreground">
            Where applicable, we process personal information based on the
            necessity for performance of a contract, our legitimate interests,
            legal obligations, or your consent.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-foreground mb-2">
            Cookies & Tracking
          </h2>
          <p className="text-sm text-muted-foreground">
            We and our partners use cookies and similar technologies to provide
            and analyze our Services. You can manage cookie preferences via
            browser settings; disabling cookies may affect some features.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-foreground mb-2">
            Third-Party Services
          </h2>
          <p className="text-sm text-muted-foreground">
            We may share data with trusted third-party providers for payments,
            analytics, content delivery, and customer support. These providers
            process data only for specified purposes and under contract.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-foreground mb-2">
            Security
          </h2>
          <p className="text-sm text-muted-foreground">
            We implement technical and organizational measures to protect data
            from unauthorized access, disclosure, or loss. While we strive to
            protect your data, no system is fully secure.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-foreground mb-2">
            Data Retention
          </h2>
          <p className="text-sm text-muted-foreground">
            We retain personal information as long as necessary to provide the
            Services, meet legal obligations, resolve disputes, and enforce our
            agreements. Specific retention periods depend on the data type and
            applicable law.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-foreground mb-2">
            Your Rights
          </h2>
          <ul className="list-disc list-inside text-sm text-muted-foreground">
            <li>
              Access: Request access to the personal information we hold about
              you.
            </li>
            <li>
              Correction: Ask us to correct inaccurate or incomplete data.
            </li>
            <li>
              Deletion: Request deletion of your personal data, where permitted.
            </li>
            <li>
              Objection: Object to or restrict certain processing activities.
            </li>
            <li>
              Data portability: Obtain a copy of your data in a commonly used
              format where applicable.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-foreground mb-2">
            Children
          </h2>
          <p className="text-sm text-muted-foreground">
            Our Services are not directed to children under 13. We do not
            knowingly collect personal information from children under 13. If
            you believe we have collected such information, please contact us so
            we can remove it.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-foreground mb-2">
            International Transfers
          </h2>
          <p className="text-sm text-muted-foreground">
            Personal information may be processed or stored in jurisdictions
            outside your country. When transferring data internationally, we use
            safeguards required by law to protect your information.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-foreground mb-2">
            Changes to This Policy
          </h2>
          <p className="text-sm text-muted-foreground">
            We may update this Privacy Policy to reflect changes in practices or
            legal requirements. Material changes will be communicated via our
            website or to your registered contact details.
          </p>
        </section>

        <div className="border-t border-border pt-6">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Contact
          </h3>
          <p className="text-sm text-muted-foreground">
            For privacy questions or to exercise your rights, contact us at{" "}
            <a
              href="mailto:connect@wssbhuj.in"
              className="text-primary underline"
            >
              connect@wssbhuj.in
            </a>
            .
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
