"use client";

import { useEffect, useRef } from "react";

/**
 * 跟随鼠标的定制光标，用 rAF + 线性插值实现跟手感，
 * 替代原 framer-motion useSpring（视觉几乎一致，体积为零）。
 */
export function CustomCursor() {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const pos = { x: -100, y: -100 };
    const target = { x: -100, y: -100 };
    let frame = 0;

    const handleMouseMove = (event: MouseEvent) => {
      target.x = event.clientX - 8;
      target.y = event.clientY - 8;
    };

    const render = () => {
      pos.x += (target.x - pos.x) * 0.18;
      pos.y += (target.y - pos.y) * 0.18;
      el.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
      frame = window.requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    frame = window.requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <span
      ref={ref}
      aria-hidden
      className="custom-cursor pointer-events-none fixed left-0 top-0 z-50 h-4 w-4 rounded-full border border-[var(--line-strong)] mix-blend-difference"
    />
  );
}
