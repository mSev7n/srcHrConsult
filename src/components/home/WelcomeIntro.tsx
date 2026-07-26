import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function WelcomeIntro() {
  return (
    <section className="bg-paper py-20 sm:py-24">
      <Container className="max-w-3xl text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-navy-900/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-navy-600">
            Who We Are
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-6 text-balance text-3xl font-semibold leading-[1.15] text-navy-950 sm:text-4xl">
            Empowering Dreams. Connecting Talent. Transforming Futures.
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-6 text-balance text-base leading-relaxed text-navy-600 sm:text-lg">
            Success Resource Consult (SRC) is a leading international
            education, career mobility, visa, and immigration consultancy
            committed to helping students, professionals, educators, and
            families access global opportunities through expert guidance,
            ethical practices, and personalized support.
          </p>
        </Reveal>
        <Reveal delay={0.24} className="mt-8">
          <Button href="/about" variant="ghost">
            Discover Our Story
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
