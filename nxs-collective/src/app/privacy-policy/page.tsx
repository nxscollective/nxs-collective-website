import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import PageHero from "@/components/shared/PageHero";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How NXS Collective Pte Ltd collects, uses, discloses and protects personal data in accordance with Singapore's Personal Data Protection Act.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="How NXS Collective Pte Ltd collects, uses, discloses and safeguards your personal data."
      />

      <section className="border-b border-hairline bg-graphite py-16 md:py-20">
        <Container>
          <p className="text-xs uppercase tracking-[0.2em] text-mist/50">
            Last updated: 16 July 2026
          </p>

          <div className="legal-prose">
            <h2>1. About This Policy</h2>
            <p>
              This Privacy Policy explains how <strong>NXS Collective Pte
              Ltd</strong> (&quot;NXS Collective&quot;, &quot;we&quot;,
              &quot;us&quot; or &quot;our&quot;) collects, uses, discloses
              and protects personal data in connection with our
              physiotherapy, sports therapy and personal training services,
              our website at nxscollective.net, and our interactions with
              clients, prospective clients and website visitors. It applies
              wherever you provide personal data to us, whether in person at
              our studio, over WhatsApp, by email, through our website, or
              through our third-party booking platform.
            </p>
            <p>
              By using our website, submitting an enquiry, or booking an
              appointment with us, you acknowledge that you have read and
              understood this Policy. If you do not agree with how we
              handle your personal data as described here, please do not
              submit personal data to us, and contact us using the details
              in Section 12 so we can address your concerns.
            </p>

            <h2>2. Our Commitment to the PDPA</h2>
            <p>
              We are committed to protecting personal data in accordance
              with the Personal Data Protection Act 2012 (&quot;PDPA&quot;)
              of Singapore and its accompanying regulations. We collect,
              use and disclose personal data only for purposes that a
              reasonable person would consider appropriate in the
              circumstances, and only to the extent necessary for those
              purposes. Where the PDPA requires your consent before we
              collect, use or disclose your personal data, we will obtain
              that consent, or rely on a permitted exception under the
              PDPA where applicable (for example, where the data is
              necessary to respond to an emergency that threatens your
              life, health or safety).
            </p>

            <h2>3. Information We Collect</h2>
            <p>
              We collect personal data directly from you, and in some
              cases through our booking platform or your interactions with
              our website. The categories of personal data we collect
              include:
            </p>
            <ul>
              <li>
                <strong>Name</strong> — to identify you, address you
                correctly, and maintain accurate client records.
              </li>
              <li>
                <strong>Email address</strong> — to send booking
                confirmations, respond to enquiries, and share appointment
                or account-related communications.
              </li>
              <li>
                <strong>Phone number</strong> — to confirm bookings, send
                appointment reminders, and contact you regarding your
                session (including via WhatsApp, where you have chosen to
                message us on that channel).
              </li>
              <li>
                <strong>Booking information</strong> — including your
                selected service (physiotherapy, sports therapy, personal
                training or Movement Healthcheck), appointment date and
                time, assigned practitioner, and appointment history,
                collected through our Mindbody booking platform.
              </li>
              <li>
                <strong>Information voluntarily provided through
                enquiries</strong> — such as details you share with us
                about your condition, goals, availability or preferences
                when you contact us through our website enquiry form,
                email or WhatsApp.
              </li>
            </ul>
            <p>
              Where you attend an in-person consultation or treatment
              session, our clinicians may also record clinical and health
              information as part of your treatment record. That
              information is handled as part of the clinical relationship
              between you and your treating practitioner, and is subject to
              the same PDPA protections described in this Policy.
            </p>

            <h2>4. How We Use Your Information</h2>
            <p>We use the personal data described above to:</p>
            <ul>
              <li>Schedule, confirm, reschedule and manage your appointments;</li>
              <li>Communicate with you about your bookings, enquiries and account;</li>
              <li>Provide physiotherapy, sports therapy and personal training services safely and effectively;</li>
              <li>Process payments for services rendered;</li>
              <li>Respond to enquiries submitted through our website, email or WhatsApp;</li>
              <li>Send administrative messages, such as appointment reminders or changes to our operating hours;</li>
              <li>Understand how visitors use our website, so we can improve its content and performance; and</li>
              <li>Comply with our legal and regulatory obligations.</li>
            </ul>
            <p>
              We do not sell personal data to third parties, and we do not
              use your personal data for marketing communications unless
              you have separately consented to receive them.
            </p>

            <h2>5. Mindbody Booking Platform</h2>
            <p>
              We use Mindbody, a third-party booking and scheduling
              platform, to manage appointments. When you book an
              appointment with us — whether directly through Mindbody or
              through a booking link on our website — the booking
              information you provide (such as your name, contact details
              and selected service) is collected and stored by Mindbody on
              our behalf, and is accessible to our staff for the purpose of
              managing your appointment. Mindbody processes this
              information subject to its own privacy policy and terms of
              service, which govern how Mindbody itself handles data on its
              platform. We encourage you to review Mindbody&apos;s privacy
              policy if you would like to understand its data handling
              practices in full.
            </p>

            <h2>6. Google Analytics 4</h2>
            <p>
              Our website uses Google Analytics 4 (&quot;GA4&quot;), a web
              analytics service provided by Google, to help us understand
              how visitors use our website. GA4 collects information such
              as the pages you visit, the device and browser you use,
              approximate location (derived from IP address), and how you
              arrived at our website. This information is collected in
              aggregate and is used to help us improve our website content,
              structure and performance — it is not used to identify you
              personally.
            </p>
            <p>
              Google may process this data in accordance with its own
              privacy policy, and may combine it with other data it holds
              where you have a Google account and applicable settings
              permit this. You can learn more about how Google collects
              and processes data at Google&apos;s{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy &amp; Terms
              </a>{" "}
              page, and you can opt out of Google Analytics tracking across
              websites by installing the{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Analytics Opt-out Browser Add-on
              </a>
              .
            </p>

            <h2>7. Cookies</h2>
            <p>
              Cookies are small text files placed on your device when you
              visit a website. Our website uses cookies set by Google
              Analytics 4 to distinguish between visitors and measure how
              our website is used, as described in Section 6 above. These
              cookies do not, by themselves, identify you personally.
            </p>
            <p>
              Most web browsers allow you to control cookies through their
              settings, including blocking or deleting cookies already
              stored on your device. Please note that disabling cookies may
              affect certain website functionality, and Google Analytics
              cookies specifically will no longer be able to measure your
              visit if disabled.
            </p>

            <h2>8. Website Analytics</h2>
            <p>
              Beyond GA4 specifically, we may from time to time use
              aggregated website usage data — such as which pages are most
              visited, or which devices our visitors typically use — to
              inform decisions about our website content and our services.
              This analysis is conducted on an aggregated and, wherever
              possible, anonymised basis, and is not used to build
              individual profiles of website visitors for marketing
              purposes.
            </p>

            <h2>9. Third-Party Service Providers</h2>
            <p>
              We share personal data with third-party service providers
              only to the extent necessary for them to perform services on
              our behalf, including:
            </p>
            <ul>
              <li>Mindbody, for appointment booking and scheduling (see Section 5);</li>
              <li>Google, for website analytics through Google Analytics 4 (see Section 6);</li>
              <li>Our email service provider, for delivering enquiry and booking-related correspondence; and</li>
              <li>Payment processors, where applicable, for processing payment for services rendered.</li>
            </ul>
            <p>
              We require our third-party service providers to handle
              personal data in a manner consistent with the PDPA, and we do
              not authorise them to use personal data we share with them
              for any purpose other than providing services to us.
            </p>

            <h2>10. Data Security</h2>
            <p>
              We take reasonable technical and organisational measures to
              protect personal data in our possession or under our control
              from unauthorised access, collection, use, disclosure,
              copying, modification, disposal or similar risks. These
              measures include restricting access to personal data to staff
              who need it to perform their duties, using reputable
              third-party platforms (such as Mindbody) that maintain their
              own security safeguards, and reviewing our data handling
              practices from time to time. No method of transmission or
              storage is completely secure, and while we strive to protect
              your personal data, we cannot guarantee its absolute
              security.
            </p>

            <h2>11. Data Retention</h2>
            <p>
              We retain personal data only for as long as necessary to
              fulfil the purposes for which it was collected, or as
              required by applicable law — for example, to maintain
              treatment records, satisfy accounting or tax obligations, or
              resolve disputes. Once personal data is no longer necessary
              for these purposes, we will either destroy it or anonymise it
              in accordance with the PDPA, unless we are otherwise required
              or permitted by law to retain it for a longer period.
            </p>

            <h2>12. Your Rights</h2>
            <p>Subject to applicable exceptions under the PDPA, you have the right to:</p>
            <ul>
              <li>Request access to the personal data we hold about you;</li>
              <li>Request correction of personal data that is inaccurate or incomplete;</li>
              <li>Withdraw consent to our collection, use or disclosure of your personal data, subject to legal or contractual restrictions and reasonable notice; and</li>
              <li>Request information about how your personal data has been or may have been used or disclosed within a year before your request.</li>
            </ul>
            <p>
              Please note that withdrawing consent may affect our ability
              to provide certain services to you — for example, we may be
              unable to schedule or manage your appointments if we cannot
              retain your booking information. Where you withdraw consent,
              we will inform you of the likely consequences before giving
              effect to your request.
            </p>

            <h2>13. Contact Us</h2>
            <p>
              If you have questions, concerns, or requests relating to this
              Privacy Policy or how we handle your personal data, please
              contact us at:
            </p>
            <p>
              <strong>NXS Collective Pte Ltd</strong>
              <br />
              {siteConfig.contact.address}
              <br />
              Email:{" "}
              <a href={`mailto:${siteConfig.contact.email}`}>
                {siteConfig.contact.email}
              </a>
            </p>
            <p>
              We will respond to reasonable requests concerning your
              personal data within a reasonable timeframe, in accordance
              with the PDPA.
            </p>

            <h2>14. Updates to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to
              reflect changes in our practices, our services, or applicable
              law. Where we make material changes, we will update the
              &quot;Last updated&quot; date at the top of this page. We
              encourage you to review this Policy periodically to stay
              informed of how we protect your personal data. Your
              continued use of our website or services after any changes
              take effect constitutes acceptance of the updated Policy.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
