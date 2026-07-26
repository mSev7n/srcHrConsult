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
}: {
  features: Feature[];
  columns?: 2 | 3;
}) {
  return (
    <RevealGroup className="flex flex-wrap justify-center gap-5">
      {features.map((feature) => (
        <motion.div
          key={feature.title}
          variants={revealItem}
          className={`card-pop group w-full ${WIDTH_2} ${
            columns === 3 ? WIDTH_3 : ""
          } rounded-3xl border border-navy-900/[0.07] bg-white p-7 shadow-soft hover:border-navy-500/40 hover:bg-navy-50/70`}
        >
          <div className="flex size-11 items-center justify-center rounded-xl bg-navy-950 text-white transition-all duration-500 ease-premium group-hover:scale-110 group-hover:bg-navy-600">
            {feature.icon}
          </div>
          <h3 className="mt-5 text-base font-semibold text-navy-950 transition-colors duration-500 ease-premium group-hover:text-navy-700">
            {feature.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-navy-600">
            {feature.description}
          </p>
        </motion.div>
      ))}
    </RevealGroup>
  );
}
