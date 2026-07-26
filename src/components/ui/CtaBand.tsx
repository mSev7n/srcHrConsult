import { Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SITE } from "@/lib/constants";

export function CtaBand({
  eyebrow = "Begin Your Journey with Confidence",
  title,
  description,
  primaryLabel = "Book a Consultation",
  primaryHref = "/book-consultation",
  secondaryLabel = "Free Eligibility Assessment",
  secondaryHref = "/eligibility-assessment",
  showPhone = true,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  showPhone?: boolean;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_100%_at_50%_100%,rgba(30,53,112,0.4)_0%,rgba(5,10,28,0)_60%)]" />
      <div className="pointer-events-none absolute -left-32 top-1/2 size-80 -translate-y-1/2 rounded-full bg-navy-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-1/2 size-80 -translate-y-1/2 rounded-full bg-navy-500/15 blur-3xl" />

      <Container className="relative max-w-3xl text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
            {eyebrow}
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-6 text-balance text-3xl font-semibold leading-[1.15] text-white sm:text-4xl">
            {title}
          </h2>
        </Reveal>
        {description && (
          <Reveal delay={0.14}>
            <p className="mx-auto mt-5 max-w-xl text-balance text-base leading-relaxed text-white/70 sm:text-lg">
              {description}
            </p>
          </Reveal>
        )}

        <Reveal
          delay={0.22}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button href={primaryHref} variant="secondary" size="lg">
            {primaryLabel}
          </Button>
          {secondaryLabel && secondaryHref && (
            <Button href={secondaryHref} variant="outline-light" size="lg">
              {secondaryLabel}
            </Button>
          )}
        </Reveal>

        {showPhone && (
          <Reveal delay={0.3}>
            <a
              href={`tel:+${SITE.phoneIntl}`}
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-white/60 transition-colors hover:text-white"
            >
              <Phone className="size-4" strokeWidth={1.75} />
              {SITE.phoneDisplay}
            </a>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
