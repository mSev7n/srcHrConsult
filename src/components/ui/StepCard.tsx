"use client";

import { motion } from "framer-motion";
import { revealItem } from "@/components/ui/Reveal";

export type Step = {
  title: string;
  description: string;
};

export function StepCard({ index, step }: { index: number; step: Step }) {
  return (
    <motion.div
      variants={revealItem}
      className="card-pop group rounded-2xl border border-navy-900/[0.07] bg-white p-6 shadow-soft hover:border-navy-500/40 hover:bg-navy-50/70"
    >
      <span className="flex size-9 items-center justify-center rounded-full bg-navy-950 text-sm font-semibold text-white transition-all duration-500 ease-premium group-hover:scale-110 group-hover:bg-navy-600">
        {index}
      </span>
      <h3 className="mt-4 text-base font-semibold text-navy-950 transition-colors duration-500 ease-premium group-hover:text-navy-700">
        {step.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-navy-600">
        {step.description}
      </p>
    </motion.div>
  );
}
