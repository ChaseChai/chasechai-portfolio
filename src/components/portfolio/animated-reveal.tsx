"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type AnimatedRevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export function AnimatedReveal({
  children,
  delay = 0,
  className = "",
}: AnimatedRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.32, delay, ease: "easeInOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
