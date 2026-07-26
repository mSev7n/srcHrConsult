import type { Metadata } from "next";
import { Suspense } from "react";
import { CalendarCheck, MessageCircle, Phone, UserCheck } from "lucide-react";
import { SplitHero } from "@/components/ui/SplitHero";
import { ProcessDotsVisual } from "@/components/ui/visuals/ProcessDotsVisual";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { BookConsultationForm } from "@/components/forms/BookConsultationForm";
import { SITE } from "@/lib/constants";

const heroVisualSteps = [
  { label: "You Submit", description: "Share your preferred date, time and service." },
  { label: "We Confirm", description: "A real person reviews and confirms — no auto-booking." },
  { label: "We Meet", description: "Your consultation happens on schedule." },
];

export const metadata: Metadata = {
  title: "Book a Consultation",
  description:
    "Book a consultation with Success Resource Consult. Share your preferred date and time — our team will personally confirm your appointment.",
};

const nextSteps = [
  {
    icon: CalendarCheck,
    title: "You submit your request",
    description: "Share your preferred date, time and service — it takes under two minutes.",
  },
  {
    icon: UserCheck,
    title: "We personally confirm it",
    description:
      "This isn't an automated booking system — a member of our team reviews and confirms every appointment.",
  },
  {
    icon: MessageCircle,
    title: "We reach out to you",
    description: "We'll confirm your appointment by phone, email or WhatsApp.",
  },
];

export default function BookConsultationPage() {
  return (
    <>
      <SplitHero
        eyebrow="Book a Consultation"
        title="Every Global Journey Starts With a Conversation"
        description="Schedule a consultation with our experienced team to discuss your academic, career, visa, or immigration goals and receive guidance tailored to your circumstances."
        visual={<ProcessDotsVisual steps={heroVisualSteps} />}
        reverse
      />

      <section className="bg-paper py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr]">
            <Reveal>
              <BookConsultationSection />
            </Reveal>

            <Reveal delay={0.1}>
              <div className="lg:sticky lg:top-28">
                <h2 className="text-lg font-semibold text-navy-950">
                  What happens next
                </h2>
                <div className="mt-6 space-y-6">
                  {nextSteps.map((step) => (
                    <div key={step.title} className="flex items-start gap-4">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-navy-950 text-white">
                        <step.icon className="size-4" strokeWidth={1.75} />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-navy-950">
                          {step.title}
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-navy-600">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-2xl border border-navy-900/10 bg-white p-6 shadow-soft">
                  <p className="text-sm font-medium text-navy-800">
                    Prefer to speak directly?
                  </p>
                  <a
                    href={`tel:+${SITE.phoneIntl}`}
                    className="mt-3 flex items-center gap-2 text-sm text-navy-700 hover:text-navy-950"
                  >
                    <Phone className="size-4 shrink-0" strokeWidth={1.75} />
                    {SITE.phoneDisplay}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}

function BookConsultationSection() {
  return (
    <Suspense fallback={<div className="h-[520px] animate-pulse rounded-3xl bg-white" />}>
      <BookConsultationForm />
    </Suspense>
  );
}
