"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

export function Hero() {
  const { t } = useTranslation();
  const lines = useMemo(
    () => t("hero.typedLines", { returnObjects: true }) as string[],
    [t],
  );
  const [text, setText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = lines[lineIndex];
    if (charIndex < current.length) {
      const timer = window.setTimeout(() => {
        setText(current.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 35);
      return () => window.clearTimeout(timer);
    }

    const pause = window.setTimeout(() => {
      setCharIndex(0);
      setText("");
      setLineIndex((prev) => (prev + 1) % lines.length);
    }, 1600);

    return () => window.clearTimeout(pause);
  }, [charIndex, lineIndex, lines]);

  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-[var(--line-soft)] py-24 transition-colors duration-300 ease-in-out md:py-32"
    >
      <div className="line-grid absolute inset-0" aria-hidden />
      <motion.div
        aria-hidden
        className="absolute -left-20 top-14 h-52 w-52 rounded-full border border-[var(--line-soft)]"
        animate={{ x: [0, 40, -15, 0], y: [0, -20, 10, 0] }}
        transition={{
          duration: 14,
          ease: "linear",
          repeat: Number.POSITIVE_INFINITY,
        }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-6 right-8 h-36 w-36 rounded-full border border-[var(--line-soft)]"
        animate={{ x: [0, -35, 10, 0], y: [0, 25, -10, 0] }}
        transition={{
          duration: 11,
          ease: "linear",
          repeat: Number.POSITIVE_INFINITY,
        }}
      />

      <div className="relative mx-auto w-[min(1120px,92%)]">
        <p className="mb-6 text-xs uppercase tracking-[0.25em] text-[var(--text-muted)]">
          {t("hero.kicker")}
        </p>
        <h1 className="max-w-4xl text-balance text-4xl font-semibold leading-tight text-[var(--foreground)] md:text-6xl">
          {t("hero.name")}
          <span className="block font-light text-[var(--text-muted)]">
            {t("hero.subtitle")}
          </span>
        </h1>

        <p className="mt-8 min-h-8 text-lg text-[var(--text-secondary)] md:text-xl">
          {text}
          <span className="typing-caret" aria-hidden>
            |
          </span>
        </p>
      </div>
    </section>
  );
}
