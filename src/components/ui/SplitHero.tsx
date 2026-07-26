import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function SplitHero({
  eyebrow,
  title,
  description,
  children,
  visual,
  reverse = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
  visual: ReactNode;
  reverse?: boolean;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-950 pb-16 pt-32 sm:pb-20 sm:pt-40">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #030a20 0%, #0a1a38 55%, #0f2246 100%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.14) 1px, transparent 1.5px)",
          backgroundSize: "26px 26px",
          maskImage: "linear-gradient(to bottom, black 0%, transparent 85%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, transparent 85%)",
        }}
      />
      <div className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full bg-navy-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 size-80 rounded-full bg-navy-500/15 blur-3xl" />

      <Container className="relative">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div
            className={`text-center lg:text-left ${
              reverse ? "order-1 lg:order-2" : "order-1"
            }`}
          >
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white/75 backdrop-blur-sm">
                {eyebrow}
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.1] text-white sm:text-5xl">
                {title}
              </h1>
            </Reveal>
            {description && (
              <Reveal delay={0.16}>
                <p className="mx-auto mt-6 max-w-xl text-balance text-base leading-relaxed text-white/70 sm:text-lg lg:mx-0">
                  {description}
                </p>
              </Reveal>
            )}
            {children && (
              <Reveal
                delay={0.24}
                className="mt-9 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
              >
                {children}
              </Reveal>
            )}
          </div>

          <div className={reverse ? "order-2 lg:order-1" : "order-2"}>
            {visual}
          </div>
        </div>
      </Container>
    </section>
  );
}
