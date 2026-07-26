"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const POSITIONS = [
  { top: "4%", left: "6%" },
  { top: "0%", left: "50%" },
  { top: "28%", left: "64%" },
  { top: "48%", left: "10%" },
  { top: "64%", left: "40%" },
  { top: "82%", left: "2%" },
];

export function BadgeGridVisual({
  items,
}: {
  items: { icon: ReactNode; label: string }[];
}) {
  return (
    <div className="relative mx-auto h-[380px] w-full max-w-md sm:h-[420px]">
      {items.slice(0, 6).map((item, i) => (
        <motion.div
          key={item.label}
          className="absolute"
          style={POSITIONS[i % POSITIONS.length]}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration: 0.6,
            delay: 0.1 + i * 0.09,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4.5 + (i % 3),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
            className="flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] py-2.5 pl-2.5 pr-4 backdrop-blur-sm"
          >
            <span className="flex size-7 items-center justify-center rounded-full bg-white text-navy-950">
              {item.icon}
            </span>
            <span className="whitespace-nowrap text-xs font-medium text-white/90">
              {item.label}
            </span>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
