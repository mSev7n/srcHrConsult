import type { Metadata } from "next";
import { Suspense } from "react";
import { Phone } from "lucide-react";
import { CinematicHero } from "@/components/ui/CinematicHero";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { BookConsultationForm } from "@/components/forms/BookConsultationForm";
import { SITE } from "@/lib/constants";

const heroHighlights = [
  { value: "Free", label: "No Cost to Book" },
  { value: <AnimatedCounter to={3} />, label: "Simple Steps" },
  { label: "Personal Confirmation" },
  { label: "No Auto-Booking" },
];

export const metadata: Metadata = {
  title: "Book a Consultation",
  description:
    "Book a consultation with Success Resource Consult. Share your preferred date and time — our team will personally confirm your appointment.",
};

const nextSteps = [
  {
    title: "You submit your request",
    description: "Share your preferred date, time and service — it takes under two minutes.",
  },
  {
    title: "We personally confirm it",
    description:
      "This isn't an automated booking system — a member of our team reviews and confirms every appointment.",
  },
  {
    title: "We reach out to you",
    description: "We'll confirm your appointment by phone, email or WhatsApp.",
  },
];

export default function BookConsultationPage() {
  return (
    <>
      <CinematicHero
        eyebrow="Book a Consultation"
        title="Every Global Journey Starts With a Conversation"
        description="Schedule a consultation with our experienced team to discuss your academic, career, visa, or immigration goals and receive guidance tailored to your circumstances."
        highlights={heroHighlights}
        backgroundImage="https://images.unsplash.com/photo-1560439514-4e9645039924?auto=format&fit=crop&q=80&w=2000"
      />

      <section className="bg-paper py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr]">
            <Reveal>
              <BookConsultationSection />
            </Reveal>

            <Reveal delay={0.1}>
              <div className="lg:sticky lg:top-28 space-y-6">

                <div className="rounded-3xl border border-navy-900/[0.07] bg-white p-8 shadow-soft">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-navy-500">
                    What happens next
                  </p>
                  <h2 className="mt-2 text-lg font-semibold text-navy-950">
                    Simple, personal process
                  </h2>
                  <div className="mt-7 space-y-6">
                    {nextSteps.map((step, i) => (
                      <div key={step.title} className="flex items-start gap-4">
                        <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-navy-950 text-sm font-semibold text-white">
                          {i + 1}
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
                </div>

                <div className="rounded-3xl border border-navy-900/10 bg-navy-950 p-7">
                  <p className="text-sm font-semibold text-white">
                    Prefer to speak directly?
                  </p>
                  <p className="mt-1 text-xs text-white/55">We are happy to hear from you.</p>
                  <a
                    href={`tel:+${SITE.phoneIntl}`}
                    className="mt-4 flex items-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
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
