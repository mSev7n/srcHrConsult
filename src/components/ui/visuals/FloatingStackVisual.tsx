"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const ROTATIONS = [-6, 5, -3];
const POSITIONS = [
  { top: "2%", left: "0%" },
  { top: "32%", left: "36%" },
  { top: "64%", left: "4%" },
];

export function FloatingStackVisual({
  items,
}: {
  items: { icon: ReactNode; title: string; subtitle: string }[];
}) {
  return (
    <div className="relative mx-auto h-[380px] w-full max-w-sm sm:h-[420px]">
      <div className="absolute inset-6 rounded-[2rem] border border-white/10 bg-white/[0.02]" />

      {items.slice(0, 3).map((item, i) => (
        <motion.div
          key={item.title}
          className="absolute w-[220px]"
          style={POSITIONS[i]}
          initial={{ opacity: 0, y: 26, scale: 0.92 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration: 0.7,
            delay: 0.15 + i * 0.15,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [ROTATIONS[i], ROTATIONS[i] + 2, ROTATIONS[i]],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
            className="rounded-2xl border border-navy-900/[0.06] bg-white p-5 shadow-card"
          >
            <span className="flex size-10 items-center justify-center rounded-xl bg-navy-950 text-white">
              {item.icon}
            </span>
            <p className="mt-3 text-sm font-semibold text-navy-950">
              {item.title}
            </p>
            <p className="mt-0.5 text-xs leading-relaxed text-navy-500">
              {item.subtitle}
            </p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
