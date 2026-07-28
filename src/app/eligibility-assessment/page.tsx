import type { Metadata } from "next";
import { CheckCircle2, ClipboardCheck, UserCheck } from "lucide-react";
import { CinematicHero } from "@/components/ui/CinematicHero";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { EligibilityAssessmentForm } from "@/components/forms/EligibilityAssessmentForm";

const heroHighlights = [
  { value: "Free", label: "No Cost, No Obligation" },
  { value: <AnimatedCounter to={5} />, label: "Pathways Covered" },
  { icon: <UserCheck className="size-4" strokeWidth={1.75} />, label: "Personal Follow-Up" },
  { icon: <ClipboardCheck className="size-4" strokeWidth={1.75} />, label: "Just a Few Minutes" },
];

export const metadata: Metadata = {
  title: "Free Eligibility Assessment",
  description:
    "Complete a free eligibility assessment with Success Resource Consult and receive personalized guidance on study abroad, scholarships, visa or immigration options.",
};

const benefits = [
  "A quick, no-obligation review of your profile.",
  "Guidance on which of our services best fit your goals.",
  "A clearer picture of the destinations and pathways available to you.",
  "A direct follow-up from our advisory team.",
];

export default function EligibilityAssessmentPage() {
  return (
    <>
      <CinematicHero
        eyebrow="Free Eligibility Assessment"
        title="Find Out Where You Stand — At No Cost"
        description="Tell us a little about your background and goals, and our team will review your details and follow up with personalized guidance."
        highlights={heroHighlights}
        backgroundImage="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=2000"
      />

      <section className="bg-paper py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr]">
            <Reveal>
              <h2 className="text-lg font-semibold text-navy-950">
                What you&rsquo;ll get
              </h2>
              <div className="mt-6 space-y-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 size-5 shrink-0 text-navy-700"
                      strokeWidth={1.75}
                    />
                    <span className="text-sm leading-relaxed text-navy-700">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-xs leading-relaxed text-navy-500">
                This assessment is a starting point for an informed
                conversation — not an automated eligibility decision or a
                guarantee of admission, scholarship, visa, or immigration
                approval.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <EligibilityAssessmentForm />
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
