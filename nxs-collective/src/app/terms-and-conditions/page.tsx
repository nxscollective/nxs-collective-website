import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import PageHero from "@/components/shared/PageHero";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions governing physiotherapy, sports therapy, personal training and Movement Healthcheck services at NXS Collective, Singapore.",
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        description="The terms governing your use of our services and website, and your booking with NXS Collective."
      />

      <section className="border-b border-hairline bg-graphite py-16 md:py-20">
        <Container>
          <p className="text-xs uppercase tracking-[0.2em] text-mist/50">
            Last updated: 16 July 2026
          </p>

          <div className="legal-prose">
            <h2>1. Acceptance of These Terms</h2>
            <p>
              These Terms &amp; Conditions (&quot;Terms&quot;) govern your
              access to and use of the services offered by{" "}
              <strong>NXS Collective Pte Ltd</strong> (&quot;NXS
              Collective&quot;, &quot;we&quot;, &quot;us&quot; or
              &quot;our&quot;), including physiotherapy, sports therapy,
              personal training and our Movement Healthcheck assessment, as
              well as your use of our website at nxscollective.net. By
              booking an appointment, attending a session, or using our
              website, you agree to be bound by these Terms. If you do not
              agree with any part of these Terms, please do not book or use
              our services.
            </p>

            <h2>2. Scope of Services</h2>
            <p>We offer the following services from our studio above Clarke Quay MRT, Singapore:</p>
            <ul>
              <li>
                <strong>Physiotherapy</strong> — assessment, diagnosis and
                treatment of musculoskeletal conditions, injuries and pain,
                delivered by our physiotherapy team.
              </li>
              <li>
                <strong>Sports Therapy</strong> — treatment and
                rehabilitation support aimed at sport-specific recovery,
                injury management and return-to-activity.
              </li>
              <li>
                <strong>Personal Training</strong> — one-on-one or small
                group strength, conditioning and movement training
                delivered by our coaching team.
              </li>
              <li>
                <strong>NXS Complete Movement Healthcheck</strong> — a
                combined movement and strength assessment service used to
                guide treatment or training recommendations.
              </li>
            </ul>
            <p>
              Our services are provided by qualified practitioners and
              coaches. The specific practitioner or coach assigned to your
              session may vary based on availability, the nature of your
              enquiry, and scheduling through our booking platform.
            </p>

            <h2>3. Bookings</h2>
            <p>
              Appointments may be booked through our Mindbody booking
              platform, via the booking links on our website, or by
              contacting us directly by WhatsApp or email. A booking is
              only confirmed once you receive a confirmation from us or
              through Mindbody. You are responsible for ensuring the
              accuracy of the information you provide when booking,
              including your selected service, preferred practitioner and
              contact details, as inaccurate information may affect our
              ability to reach you regarding your appointment.
            </p>

            <h2>4. Payments</h2>
            <p>
              Payment for services is due at the time of booking or at the
              time of your session, as communicated to you at the point of
              booking. We accept the payment methods made available through
              our booking platform or in-studio at the time of your visit.
              Prices for our services are as listed on our website or as
              otherwise communicated to you, and are subject to change from
              time to time; any price change will not affect a session that
              has already been booked and confirmed at a given price.
            </p>

            <h2>5. Cancellation Policy</h2>
            <p>
              We require at least <strong>8 hours&apos; notice</strong>{" "}
              prior to your scheduled appointment time if you need to
              cancel or reschedule. Cancellations or reschedule requests
              made with less than 8 hours&apos; notice, and appointments
              that are missed without notice (&quot;no-shows&quot;), may be
              treated as a completed session for billing purposes, at our
              discretion. We understand that emergencies do occur, and we
              assess late cancellations on a case-by-case basis where
              genuine emergency circumstances are involved.
            </p>

            <h2>6. Refund Policy</h2>
            <p>
              Fees paid for services rendered, and fees forfeited under our
              cancellation policy above, are <strong>non-refundable</strong>,
              except where a refund is required under applicable Singapore
              law, including the Consumer Protection (Fair Trading) Act
              2003. Nothing in this section limits any right or remedy you
              may have under mandatory provisions of Singapore consumer
              protection law that cannot be excluded by agreement.
            </p>

            <h2>7. Late Arrival Policy</h2>
            <p>
              If you arrive late for your appointment, your session may be
              shortened to end at the originally scheduled time, so as not
              to affect the appointments of clients booked after you. You
              will still be charged the full fee for the originally booked
              session. If your delay makes it impractical to safely or
              meaningfully deliver the session, we reserve the right to
              treat the appointment as a late cancellation under Section 5.
            </p>

            <h2>8. Client Responsibilities</h2>
            <p>As a client of NXS Collective, you agree to:</p>
            <ul>
              <li>
                Provide accurate and complete information about your
                medical history, current symptoms and any relevant
                conditions before and during treatment or training;
              </li>
              <li>
                Inform your practitioner or coach promptly of any pain,
                discomfort, or change in your condition during a session;
              </li>
              <li>
                Follow the guidance, precautions and home programmes
                provided by your practitioner or coach; and
              </li>
              <li>
                Arrive in appropriate attire and physical condition to
                safely participate in your scheduled service.
              </li>
            </ul>
            <p>
              We reserve the right to decline or discontinue a service
              where, in the reasonable clinical judgement of our team,
              proceeding would pose a safety risk to you or to others.
            </p>

            <h2>9. Medical Disclaimer</h2>
            <p>
              Information provided on our website, including any general
              educational content, is provided for general informational
              purposes only and does not constitute individual medical
              advice, diagnosis or treatment. It is not a substitute for an
              individual clinical assessment by one of our practitioners,
              or for advice from your physician or other qualified
              healthcare provider. Treatment and training recommendations
              will vary based on each client&apos;s condition, medical
              history, assessment findings and physical capacity, and are
              only provided following an appropriate in-person or
              consultation-based assessment.
            </p>
            <p>
              You should consult your physician before beginning any new
              exercise, treatment or training programme, particularly if
              you have a pre-existing medical condition, injury, or are
              pregnant. Participation in physical training and treatment
              carries inherent risk, and you participate in our services
              at your own risk, on the understanding that our practitioners
              and coaches will take reasonable professional care in
              assessing and managing that risk with you.
            </p>

            <h2>10. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by Singapore law, NXS
              Collective, its practitioners, coaches, employees and agents
              shall not be liable for any indirect, incidental, special or
              consequential loss or damage arising out of or in connection
              with your use of our services or website, except to the
              extent such loss or damage arises from our negligence, wilful
              default, or breach of a duty owed to you that cannot be
              excluded under applicable law. Nothing in these Terms
              excludes or limits liability for death or personal injury
              caused by our negligence, or for any other liability that
              cannot lawfully be excluded or limited under Singapore law.
            </p>

            <h2>11. Intellectual Property</h2>
            <p>
              All content on our website — including text, graphics,
              logos, images and the NXS Collective name and brand
              identity — is the property of NXS Collective Pte Ltd or its
              licensors, and is protected under Singapore and international
              intellectual property laws. You may not reproduce,
              distribute, modify, or create derivative works from any
              content on our website without our prior written consent,
              except for your own personal, non-commercial reference.
            </p>

            <h2>12. Governing Law</h2>
            <p>
              These Terms are governed by, and construed in accordance
              with, the laws of Singapore. Any dispute arising out of or in
              connection with these Terms, or your use of our services,
              shall be subject to the exclusive jurisdiction of the courts
              of Singapore.
            </p>

            <h2>13. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact
              us at:
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
          </div>
        </Container>
      </section>
    </>
  );
}
