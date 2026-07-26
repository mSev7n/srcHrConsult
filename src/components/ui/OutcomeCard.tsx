"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { revealItem } from "@/components/ui/Reveal";

export function OutcomeCard({
  icon,
  label,
}: {
  icon: ReactNode;
  label: string;
}) {
  return (
    <motion.div
      variants={revealItem}
      className="card-pop group flex flex-col items-center gap-3 rounded-2xl border border-navy-900/[0.08] bg-white px-4 py-8 text-center shadow-soft hover:border-navy-500/40 hover:bg-navy-50/70"
    >
      <span className="flex size-12 items-center justify-center rounded-full bg-navy-950/[0.05] text-navy-900 transition-all duration-500 ease-premium group-hover:scale-110 group-hover:bg-navy-950 group-hover:text-white">
        {icon}
      </span>
      <span className="text-sm font-medium text-navy-800 transition-colors duration-500 ease-premium group-hover:text-navy-950">
        {label}
      </span>
    </motion.div>
  );
}
