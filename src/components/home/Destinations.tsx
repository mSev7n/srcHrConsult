"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { RevealGroup, revealItem } from "@/components/ui/Reveal";

const destinations = [
  { flag: "🇨🇦", name: "Canada" },
  { flag: "🇺🇸", name: "United States" },
  { flag: "🇬🇧", name: "United Kingdom" },
  { flag: "🇳🇱", name: "Netherlands" },
  { flag: "🇩🇪", name: "Germany" },
  { flag: "🇮🇪", name: "Ireland" },
  { flag: "🇦🇺", name: "Australia" },
];

export function Destinations() {
  return (
    <section className="bg-navy-950 py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Featured Destinations"
          title="Opportunities across the world's leading education & career hubs"
          description="Discover academic institutions, scholarship programmes and career pathways in seven premier destinations."
          light
        />

        <RevealGroup
          className="mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 lg:mt-16 lg:grid-cols-4"
          stagger={0.06}
        >
          {destinations.map((dest) => (
            <motion.div
              key={dest.name}
              variants={revealItem}
              className="card-pop card-pop-dark group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-5 hover:border-white/25 hover:bg-white/[0.08]"
            >
              <span className="inline-block text-3xl leading-none transition-transform duration-500 ease-premium group-hover:scale-110">
                {dest.flag}
              </span>
              <span className="text-sm font-medium text-white/85 sm:text-base">
                {dest.name}
              </span>
            </motion.div>
          ))}
          <motion.a
            href="/study-abroad"
            variants={revealItem}
            className="card-pop card-pop-dark group flex items-center justify-center gap-2 rounded-2xl border border-dashed border-white/20 px-5 py-5 text-sm font-medium text-white/70 transition-all duration-500 ease-premium hover:border-white/40 hover:text-white"
          >
            View all pathways
          </motion.a>
        </RevealGroup>
      </Container>
    </section>
  );
}
