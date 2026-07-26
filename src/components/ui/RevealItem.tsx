"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { revealItem } from "@/components/ui/Reveal";

export function RevealSpan({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <motion.span variants={revealItem} className={className}>
      {children}
    </motion.span>
  );
}

export function RevealDiv({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <motion.div variants={revealItem} className={className}>
      {children}
    </motion.div>
  );
}
