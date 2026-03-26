"use client";

import { motion, useSpring } from "framer-motion";
import { useEffect } from "react";

export function CustomCursor() {
  const x = useSpring(0, { stiffness: 550, damping: 45, mass: 0.2 });
  const y = useSpring(0, { stiffness: 550, damping: 45, mass: 0.2 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      x.set(event.clientX - 8);
      y.set(event.clientY - 8);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  return (
    <motion.span
      aria-hidden
      className="custom-cursor pointer-events-none fixed left-0 top-0 z-50 h-4 w-4 rounded-full border border-[var(--line-strong)] mix-blend-difference"
      style={{ x, y }}
    />
  );
}
