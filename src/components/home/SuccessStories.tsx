import { GraduationCap, Award, Plane, Briefcase } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { RevealGroup, Reveal } from "@/components/ui/Reveal";
import { OutcomeCard } from "@/components/ui/OutcomeCard";
import { Button } from "@/components/ui/Button";

const iconProps = { className: "size-5", strokeWidth: 1.75 } as const;

const outcomes = [
  { icon: <GraduationCap {...iconProps} />, label: "Admissions Secured" },
  { icon: <Award {...iconProps} />, label: "Scholarships Awarded" },
  { icon: <Plane {...iconProps} />, label: "Visas Processed" },
  { icon: <Briefcase {...iconProps} />, label: "Careers Launched" },
];

export function SuccessStories() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(30,53,112,0.35)_0%,rgba(5,10,28,0)_60%)]" />
      <Container className="relative">
        <SectionHeader
          eyebrow="Success Stories"
          title="Real journeys, guided with care"
          description="Behind every application is a person taking a meaningful step toward their future. We're honoured to walk that path with our clients."
          light
        />

        <RevealGroup
          className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4"
          stagger={0.07}
        >
          {outcomes.map((outcome) => (
            <OutcomeCard
              key={outcome.label}
              icon={outcome.icon}
              label={outcome.label}
            />
          ))}
        </RevealGroup>

        <Reveal delay={0.2} className="mt-12 flex justify-center">
          <Button href="/success-stories" variant="outline-light">
            Read Success Stories
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
