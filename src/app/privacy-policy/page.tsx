import type { Metadata } from "next";
import { ShieldCheck, Lock, Eye, FileText } from "lucide-react";
import { SplitHero } from "@/components/ui/SplitHero";
import { EmblemVisual } from "@/components/ui/visuals/EmblemVisual";
import { Container } from "@/components/ui/Container";
import { InfoNote } from "@/components/ui/InfoNote";
import { PolicySection } from "@/components/ui/PolicySection";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Success Resource Consult collects, uses and protects your information.",
};

const LAST_UPDATED = "24 July 2026";

const heroRing = [
  { icon: <Lock className="size-4" strokeWidth={1.75} />, label: "Secure" },
  { icon: <Eye className="size-4" strokeWidth={1.75} />, label: "Transparent" },
  { icon: <FileText className="size-4" strokeWidth={1.75} />, label: "No Database" },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <SplitHero
        eyebrow="Legal"
        title="Privacy Policy"
        description={`Last updated: ${LAST_UPDATED}`}
        visual={
          <EmblemVisual
            icon={<ShieldCheck className="size-7" strokeWidth={1.75} />}
            label="Your Privacy"
            items={heroRing}
          />
        }
      />

      <section className="bg-paper py-16 sm:py-20">
        <Container className="max-w-3xl">
          <InfoNote title="A note before you read on">
            This policy is provided as a general, good-faith description of
            how this website handles information, based on how it is built.
            It is a starting point, not a substitute for review by a
            qualified legal professional familiar with Nigerian and
            international data protection law before relying on it for a
            live business.
          </InfoNote>

          <div className="mt-12 space-y-10">
            <PolicySection title="1. Who We Are">
              <p>
                Success Resource Consult (&ldquo;SRC&rdquo;, &ldquo;we&rdquo;,
                &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is an international
                education, career mobility, visa, immigration, and human
                resource consultancy. This Privacy Policy explains how we
                collect, use, and protect information when you visit{" "}
                {SITE.url} (the &ldquo;Site&rdquo;) or contact us through it.
              </p>
            </PolicySection>

            <PolicySection title="2. Information We Collect">
              <p>
                This Site does not require you to create an account, and we
                do not operate a customer database or store payment
                information. We collect information only when you
                voluntarily provide it, such as when you:
              </p>
              <ul>
                <li>Submit a contact, consultation, or eligibility assessment form.</li>
                <li>Subscribe to our newsletter.</li>
                <li>Message us directly via WhatsApp, phone, or email.</li>
              </ul>
              <p>
                This may include your name, email address, phone number,
                preferred destination or service of interest, academic or
                professional background, and any message you choose to
                share with us.
              </p>
            </PolicySection>

            <PolicySection title="3. How We Use Your Information">
              <p>We use the information you provide to:</p>
              <ul>
                <li>Respond to your enquiry and provide the advisory services you requested.</li>
                <li>Schedule and confirm consultations.</li>
                <li>Send updates you have specifically subscribed to, such as scholarship or visa news.</li>
                <li>Improve our services and this Site.</li>
              </ul>
              <p>We do not sell or rent your personal information to third parties.</p>
            </PolicySection>

            <PolicySection title="4. Third-Party Services We Use">
              <p>
                Because this Site has no backend server or database, form
                submissions are delivered directly through trusted
                third-party services, each governed by its own privacy
                policy:
              </p>
              <ul>
                <li>
                  <strong>EmailJS</strong> — delivers form submissions to our
                  email inbox.
                </li>
                <li>
                  <strong>WhatsApp (Meta)</strong> — when you submit a form
                  or use our floating chat button, a pre-filled WhatsApp
                  message may open for you to send directly to our team.
                </li>
                <li>
                  <strong>Analytics tools</strong> (such as Google Analytics
                  or Meta Pixel), where enabled, help us understand how
                  visitors use this Site so we can improve it. These tools
                  may use cookies or similar technologies.
                </li>
              </ul>
            </PolicySection>

            <PolicySection title="5. Data Retention">
              <p>
                We retain information you share with us for as long as
                necessary to respond to your enquiry, provide our services,
                and comply with our legal obligations. You may request
                deletion of your information at any time — see &ldquo;Your
                Rights&rdquo; below.
              </p>
            </PolicySection>

            <PolicySection title="6. Your Rights">
              <p>
                Depending on your location, you may have the right to
                access, correct, or request deletion of your personal
                information. To make such a request, please contact us at{" "}
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
              </p>
            </PolicySection>

            <PolicySection title="7. Children's Privacy">
              <p>
                This Site is not directed at children under 16. We do not
                knowingly collect personal information from children.
              </p>
            </PolicySection>

            <PolicySection title="8. Changes to This Policy">
              <p>
                We may update this Privacy Policy from time to time. The
                &ldquo;Last updated&rdquo; date at the top of this page
                reflects the most recent revision.
              </p>
            </PolicySection>

            <PolicySection title="9. Contact Us">
              <p>
                If you have questions about this Privacy Policy, please
                contact us at{" "}
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or{" "}
                <a href={`tel:+${SITE.phoneIntl}`}>{SITE.phoneDisplay}</a>.
              </p>
            </PolicySection>
          </div>
        </Container>
      </section>
    </>
  );
}
