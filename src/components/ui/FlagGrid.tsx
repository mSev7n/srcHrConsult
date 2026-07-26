"use client";

import { motion } from "framer-motion";
import { RevealGroup, revealItem } from "@/components/ui/Reveal";

export function FlagGrid({
  items,
}: {
  items: { flag: string; name: string }[];
}) {
  return (
    <RevealGroup
      className="mx-auto flex max-w-4xl flex-wrap justify-center gap-4"
      stagger={0.06}
    >
      {items.map((item) => (
        <motion.div
          key={item.name}
          variants={revealItem}
          className="card-pop group flex w-[calc(50%-8px)] items-center gap-3 rounded-2xl border border-navy-900/[0.08] bg-white px-5 py-5 shadow-soft hover:border-navy-500/40 hover:bg-navy-50/70 sm:w-[calc((100%-32px)/3)] lg:w-[calc((100%-48px)/4)]"
        >
          <span className="inline-block text-2xl leading-none transition-transform duration-500 ease-premium group-hover:scale-110">
            {item.flag}
          </span>
          <span className="text-sm font-medium text-navy-800 transition-colors duration-500 ease-premium group-hover:text-navy-600 sm:text-base">
            {item.name}
          </span>
        </motion.div>
      ))}
    </RevealGroup>
  );
}
