"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { RevealGroup, revealItem } from "@/components/ui/Reveal";

export type Feature = {
  icon: ReactNode;
  title: string;
  description: string;
};

const WIDTH_2 = "sm:w-[calc(50%-10px)]";
const WIDTH_3 = "lg:w-[calc((100%-40px)/3)]";

export function FeatureGrid({
  features,
  columns = 3,
  tone = "light",
}: {
  features: Feature[];
  columns?: 2 | 3;
  tone?: "light" | "dark";
}) {
  return (
    <RevealGroup className="flex flex-wrap justify-center gap-5">
      {features.map((feature) => (
        <motion.div
          key={feature.title}
          variants={revealItem}
          className={`card-pop group flex flex-col items-center text-center w-full ${WIDTH_2} ${
            columns === 3 ? WIDTH_3 : ""
          } rounded-3xl border p-7 shadow-soft ${
            tone === "dark"
              ? "border-white/10 bg-white/[0.04] hover:border-white/25 hover:bg-white/[0.08]"
              : "border-navy-900/[0.07] bg-white hover:border-navy-500/40 hover:bg-navy-50/70"
          }`}
        >
          <div className={`flex size-11 items-center justify-center rounded-xl transition-all duration-500 ease-premium group-hover:scale-110 ${
            tone === "dark" ? "bg-white/10 text-white group-hover:bg-white/20" : "bg-navy-950 text-white group-hover:bg-navy-600"
          }`}>
            {feature.icon}
          </div>
          <h3 className={`mt-5 text-base font-semibold transition-colors duration-500 ease-premium ${
            tone === "dark" ? "text-white group-hover:text-white/80" : "text-navy-950 group-hover:text-navy-700"
          }`}>
            {feature.title}
          </h3>
          <p className={`mt-2 text-sm leading-relaxed ${
            tone === "dark" ? "text-white/65" : "text-navy-600"
          }`}>
            {feature.description}
          </p>
        </motion.div>
      ))}
    </RevealGroup>
  );
}
