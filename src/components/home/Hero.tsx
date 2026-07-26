"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const planeParallaxY = useTransform(scrollYProgress, [0, 1], [0, -260]);
  const planeParallaxOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const cloudsParallaxY = useTransform(scrollYProgress, [0, 1], [0, 240]);
  const cloudsParallaxOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[100svh] min-h-[680px] w-full overflow-hidden bg-navy-950"
    >
      {/* Backdrop gradient — the shared "sky" both images dissolve into */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #030a20 0%, #071736 32%, #0d2647 62%, #133455 100%)",
        }}
      />

      {/* Plane layer — big and cinematic up top, fading out before it reaches the headline */}
      <motion.div
        className="absolute inset-x-0 top-0 z-[5] h-[54%] will-change-transform"
        initial={{ opacity: 0, y: 36, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.1, delay: 0.28, ease: EASE }}
        aria-hidden
      >
        <motion.div
          className="relative h-full w-full"
          style={{ y: planeParallaxY, opacity: planeParallaxOpacity }}
        >
          <Image
            src="/images/hero-plane.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            quality={85}
            className="object-cover object-[62%_18%] sm:object-[66%_14%]"
            style={{
              maskImage:
                "linear-gradient(to bottom, black 0%, black 50%, transparent 88%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 0%, black 50%, transparent 88%)",
            }}
          />
        </motion.div>
      </motion.div>

      {/* Clouds layer */}
      <motion.div
        className="absolute inset-x-0 bottom-0 z-[6] h-[52%] will-change-transform"
        initial={{ opacity: 0, y: 36, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.1, delay: 0.12, ease: EASE }}
        aria-hidden
      >
        <motion.div
          className="relative h-full w-full"
          style={{ y: cloudsParallaxY, opacity: cloudsParallaxOpacity }}
        >
          <Image
            src="/images/hero-clouds.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            quality={85}
            className="object-cover object-bottom"
            style={{
              maskImage:
                "linear-gradient(to bottom, transparent 0%, black 38%, black 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, black 38%, black 100%)",
            }}
          />
        </motion.div>
      </motion.div>

      {/* Scrim — sits above both images so the headline stays legible against either */}
      <div
        className="pointer-events-none absolute inset-0 z-[15]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(3,8,20,0) 0%, rgba(3,8,20,0.35) 28%, rgba(3,8,20,0.5) 46%, rgba(3,8,20,0.42) 62%, rgba(3,8,20,0.1) 80%, rgba(3,8,20,0) 100%)",
        }}
      />

      {/* Content */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-20 flex h-full flex-col"
      >
        <Container className="flex h-full flex-col items-center justify-center pb-16 pt-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 backdrop-blur-sm"
          >
            <ShieldCheck className="size-3.5 text-white/70" strokeWidth={2} />
            <span className="text-xs font-medium uppercase tracking-[0.14em] text-white/70">
              Trusted Advisory Since {SITE.founded}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.66, ease: EASE }}
            className="mt-6 max-w-4xl text-balance text-4xl font-semibold leading-[1.1] text-white drop-shadow-[0_4px_24px_rgba(2,6,20,0.5)] sm:text-5xl lg:text-[3.4rem]"
          >
            Empowering Global Dreams Through Education, Careers &amp;
            Immigration
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.78, ease: EASE }}
            className="mt-6 max-w-2xl text-balance text-base leading-relaxed text-white/70 sm:text-lg"
          >
            Your trusted partner for international education, scholarships,
            global careers, visa advisory and immigration consulting —
            guiding informed decisions since 2011.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: EASE }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          >
            <Button href="/book-consultation" size="lg">
              Book a Consultation
            </Button>
            <Button href="/eligibility-assessment" variant="outline-light" size="lg">
              Free Eligibility Assessment
            </Button>
          </motion.div>
        </Container>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3, ease: EASE }}
          className="absolute inset-x-0 bottom-6 flex flex-col items-center gap-2 text-white/50"
        >
          <span className="text-[11px] font-medium uppercase tracking-[0.2em]">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="size-4" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
