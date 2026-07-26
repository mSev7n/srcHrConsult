"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal, RevealGroup, revealItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

const points = [
  "Established in 2011 — over a decade of trusted advisory",
  "Ethical and transparent advisory services",
  "Personalized guidance tailored to your goals",
  "Experienced support from consultation to application",
  "Commitment to professionalism and client satisfaction",
  "Expanding international education & employer partnerships",
];

export function WhyChooseUs() {
  return (
    <section className="bg-paper py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center lg:gap-12">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-navy-900/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-navy-600">
                Why Choose SRC
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 text-balance text-3xl font-semibold leading-[1.15] text-navy-950 sm:text-4xl lg:text-[2.5rem]">
                Success measured in informed decisions, not just applications
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-navy-600 sm:text-lg">
                Choosing the right consultancy is an important decision. At
                SRC, we build every relationship on trust, professionalism
                and guidance you can rely on.
              </p>
            </Reveal>

            <RevealGroup className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2" stagger={0.06}>
              {points.map((point) => (
                <motion.div
                  key={point}
                  variants={revealItem}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    className="mt-0.5 size-5 shrink-0 text-navy-700"
                    strokeWidth={1.75}
                  />
                  <span className="text-sm leading-relaxed text-navy-700 sm:text-[15px]">
                    {point}
                  </span>
                </motion.div>
              ))}
            </RevealGroup>

            <Reveal delay={0.3} className="mt-10">
              <Button href="/about">Learn More About SRC</Button>
            </Reveal>
          </div>

          <Reveal delay={0.1} y={40} className="relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-navy-950 shadow-glow-navy">
              <Image
                src="/images/hero-clouds.webp"
                alt="Layered clouds over a calm horizon, representing clarity and guidance"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/0 to-navy-950/20" />
              <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">
                <p className="text-sm font-medium text-white">
                  &ldquo;Every successful international journey begins with
                  informed planning.&rdquo;
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.14em] text-white/60">
                  Success Resource Consult
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
