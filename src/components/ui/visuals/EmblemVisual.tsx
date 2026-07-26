"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const RADIUS = 40;

export function EmblemVisual({
  icon,
  label,
  items,
}: {
  icon: ReactNode;
  label: string;
  items: { icon: ReactNode; label: string }[];
}) {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-xs">
      <motion.div
        initial={{ opacity: 0, scale: 0.85, rotate: -8 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-[12%] rounded-full border border-white/15 bg-white/[0.04]"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-1/2 top-1/2 flex size-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-1.5 rounded-full bg-white text-center shadow-glow-navy"
      >
        <span className="text-navy-950">{icon}</span>
        <span className="px-3 text-[10px] font-semibold uppercase tracking-wide text-navy-600">
          {label}
        </span>
      </motion.div>

      {items.map((item, i) => {
        const angle = (360 / items.length) * i - 90;
        const rad = (angle * Math.PI) / 180;
        const left = 50 + RADIUS * Math.cos(rad);
        const top = 50 + RADIUS * Math.sin(rad);
        return (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.3 + i * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="absolute flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-sm"
            style={{ left: `${left}%`, top: `${top}%` }}
            title={item.label}
          >
            {item.icon}
          </motion.div>
        );
      })}
    </div>
  );
}
