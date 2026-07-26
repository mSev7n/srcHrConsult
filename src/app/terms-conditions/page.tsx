import type { Metadata } from "next";
import { Scale, ShieldOff, BadgeCheck } from "lucide-react";
import { SplitHero } from "@/components/ui/SplitHero";
import { FloatingStackVisual } from "@/components/ui/visuals/FloatingStackVisual";
import { Container } from "@/components/ui/Container";
import { InfoNote } from "@/components/ui/InfoNote";
import { PolicySection } from "@/components/ui/PolicySection";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "The terms governing your use of the Success Resource Consult website and advisory services.",
};

const LAST_UPDATED = "24 July 2026";

const heroVisualItems = [
  {
    icon: <ShieldOff className="size-5" strokeWidth={1.75} />,
    title: "No Guarantees",
    subtitle: "Decisions rest with institutions & authorities",
  },
  {
    icon: <Scale className="size-5" strokeWidth={1.75} />,
    title: "Fair Use",
    subtitle: "Clear terms, plainly stated",
  },
  {
    icon: <BadgeCheck className="size-5" strokeWidth={1.75} />,
    title: "Your Rights",
    subtitle: "Respected throughout",
  },
];

export default function TermsConditionsPage() {
  return (
    <>
      <SplitHero
        eyebrow="Legal"
        title="Terms & Conditions"
        description={`Last updated: ${LAST_UPDATED}`}
        visual={<FloatingStackVisual items={heroVisualItems} />}
        reverse
      />

      <section className="bg-paper py-16 sm:py-20">
        <Container className="max-w-3xl">
          <InfoNote title="A note before you read on">
            These Terms are provided as a general, good-faith description of
            how this website and its advisory services operate. They are a
            starting point, not a substitute for review by a qualified legal
            professional before relying on them for a live business.
          </InfoNote>

          <div className="mt-12 space-y-10">
            <PolicySection title="1. Acceptance of Terms">
              <p>
                By accessing or using {SITE.url} (the &ldquo;Site&rdquo;) or
                engaging Success Resource Consult (&ldquo;SRC&rdquo;,
                &ldquo;we&rdquo;, &ldquo;us&rdquo;) for advisory services,
                you agree to these Terms &amp; Conditions. If you do not
                agree, please do not use this Site or our services.
              </p>
            </PolicySection>

            <PolicySection title="2. Nature of Our Services">
              <p>
                SRC provides professional advisory services in
                international education, scholarships, career mobility,
                visa preparation, immigration consulting, and human
                resource consulting. Our role is to provide informed
                guidance, practical support, and professional preparation —
                not to make decisions that are legally reserved to third
                parties.
              </p>
              <p>Accordingly:</p>
              <ul>
                <li>
                  Admission, scholarship, and enrollment decisions are made
                  solely by educational institutions and scholarship
                  providers.
                </li>
                <li>
                  Visa and immigration decisions are made solely by the
                  relevant embassy, consulate, or immigration authority.
                </li>
                <li>
                  Employment decisions are made solely by employers.
                </li>
              </ul>
              <p>
                SRC does not guarantee any admission, scholarship, visa,
                immigration, or employment outcome. Our engagement is
                limited to providing guidance and preparation support.
              </p>
            </PolicySection>

            <PolicySection title="3. No Professional or Fiduciary Relationship">
              <p>
                Nothing on this Site or in our advisory services
                constitutes legal, immigration-law, financial, or
                investment advice. Where formal legal representation is
                required — for example, before an immigration authority —
                we encourage clients to seek services from an appropriately
                licensed professional.
              </p>
            </PolicySection>

            <PolicySection title="4. Use of This Site">
              <p>
                You agree to use this Site only for lawful purposes and in
                a way that does not infringe the rights of, or restrict or
                inhibit the use and enjoyment of, this Site by any third
                party. All content on this Site — including text, graphics,
                logos, and design — is the property of SRC or its licensors
                and may not be reproduced without permission.
              </p>
            </PolicySection>

            <PolicySection title="5. Forms & Communication">
              <p>
                Forms on this Site are delivered via third-party services
                (EmailJS and WhatsApp) rather than stored in a database. By
                submitting a form, you consent to your information being
                transmitted through these services so that our team can
                respond to you. See our{" "}
                <a href="/privacy-policy">Privacy Policy</a> for details.
              </p>
            </PolicySection>

            <PolicySection title="6. Third-Party Links">
              <p>
                This Site may contain links to third-party websites (such
                as social media platforms). We are not responsible for the
                content, accuracy, or practices of any linked third-party
                site.
              </p>
            </PolicySection>

            <PolicySection title="7. Limitation of Liability">
              <p>
                To the fullest extent permitted by law, SRC shall not be
                liable for any indirect, incidental, or consequential
                damages arising from your use of this Site or our advisory
                services, including any decision made by a third party
                (institution, employer, embassy, or immigration authority)
                in connection with an application you were guided on.
              </p>
            </PolicySection>

            <PolicySection title="8. Changes to These Terms">
              <p>
                We may update these Terms from time to time. The &ldquo;Last
                updated&rdquo; date at the top of this page reflects the
                most recent revision. Continued use of this Site after
                changes are posted constitutes acceptance of the revised
                Terms.
              </p>
            </PolicySection>

            <PolicySection title="9. Governing Law">
              <p>
                These Terms are governed by the laws of the Federal
                Republic of Nigeria, without regard to conflict of law
                principles.
              </p>
            </PolicySection>

            <PolicySection title="10. Contact Us">
              <p>
                Questions about these Terms can be sent to{" "}
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
