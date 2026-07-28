"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export type HeroHighlight = {
  icon?: ReactNode;
  value?: ReactNode;
  label: string;
};

export function CinematicHero({
  eyebrow,
  title,
  description,
  children,
  highlights,
  backgroundImage,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
  highlights?: HeroHighlight[];
  backgroundImage?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-950 pt-32 sm:pt-40">
      {backgroundImage ? (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt=""
            fill
            priority
            className="object-cover opacity-40 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-transparent" />
          <div className="absolute inset-0 bg-navy-900/40 mix-blend-multiply" />
        </div>
      ) : (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(180deg, #030a20 0%, #0a1a38 55%, #0f2246 100%)",
          }}
        />
      )}
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

      <motion.div
        className="pointer-events-none absolute -right-40 -top-40 size-[420px] rounded-full bg-navy-600/25 blur-[100px]"
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -left-32 bottom-0 size-96 rounded-full bg-navy-500/20 blur-[90px]"
        animate={{ x: [0, -20, 0], y: [0, -15, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <Container className="relative max-w-3xl pb-16 text-center sm:pb-20">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white/75 backdrop-blur-sm">
            {eyebrow}
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.1] text-white drop-shadow-[0_4px_24px_rgba(2,6,20,0.5)] sm:text-5xl">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={0.16}>
            <p className="mx-auto mt-6 max-w-2xl text-balance text-base leading-relaxed text-white/70 sm:text-lg">
              {description}
            </p>
          </Reveal>
        )}
        {children && (
          <Reveal
            delay={0.24}
            className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            {children}
          </Reveal>
        )}
      </Container>

      {highlights && highlights.length > 0 && (
        <Reveal delay={0.34} y={24} className="relative">
          <div className="border-t border-white/10 bg-white/[0.03] backdrop-blur-sm">
            <Container>
              <div className="flex flex-wrap items-stretch justify-center divide-white/10 sm:divide-x">
                {highlights.slice(0, 4).map((h, i) => (
                  <div
                    key={h.label}
                    className={`flex flex-col items-center justify-center gap-1.5 px-3 py-7 text-center w-1/2 sm:w-auto sm:flex-1 ${
                      i % 2 === 1 ? 'border-l border-white/10 sm:border-l-0' : ''
                    } ${i > 1 ? 'border-t border-white/10 sm:border-t-0' : ''}`}
                  >
                    {h.icon && (
                      <span className="mb-1 flex size-9 items-center justify-center rounded-full bg-white/10 text-white">
                        {h.icon}
                      </span>
                    )}
                    {h.value && (
                      <span className="text-2xl font-semibold text-white sm:text-3xl">
                        {h.value}
                      </span>
                    )}
                    <span
                      className={`text-xs font-medium uppercase tracking-wide text-white/55 ${
                        !h.value && !h.icon ? "text-sm normal-case text-white/85" : ""
                      }`}
                    >
                      {h.label}
                    </span>
                  </div>
                ))}
              </div>
            </Container>
          </div>
        </Reveal>
      )}
    </section>
  );
}
