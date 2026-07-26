"use client";

import { motion } from "framer-motion";

export function ProcessDotsVisual({
  steps,
}: {
  steps: { label: string; description: string }[];
}) {
  return (
    <div className="relative mx-auto max-w-sm py-2">
      <div className="absolute bottom-3 left-5 top-3 w-px bg-gradient-to-b from-white/30 via-white/10 to-transparent" />
      <div className="space-y-7">
        {steps.map((step, i) => (
          <motion.div
            key={step.label}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-start gap-4"
          >
            <span className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-navy-900 text-sm font-semibold text-white">
              {i + 1}
            </span>
            <div className="pt-1.5">
              <p className="text-sm font-semibold text-white">{step.label}</p>
              <p className="mt-1 text-xs leading-relaxed text-white/60">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
