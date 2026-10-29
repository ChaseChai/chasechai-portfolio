"use client";

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
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      // 减少动态效果时：直接静态展示第一句
      setText(lines[0] ?? "");
      return;
    }

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
  }, [charIndex, lineIndex, lines, reduceMotion]);

  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-[var(--line-soft)] py-24 transition-colors duration-300 ease-in-out md:py-32"
    >
      <div className="line-grid absolute inset-0" aria-hidden />
      <div
        aria-hidden
        className="float-a absolute -left-20 top-14 h-52 w-52 rounded-full border border-[var(--line-soft)]"
      />
      <div
        aria-hidden
        className="float-b absolute bottom-6 right-8 h-36 w-36 rounded-full border border-[var(--line-soft)]"
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
          {reduceMotion ? null : (
            <span className="typing-caret" aria-hidden>
              |
            </span>
          )}
        </p>
      </div>
    </section>
  );
}
