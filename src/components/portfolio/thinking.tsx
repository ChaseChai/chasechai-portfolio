"use client";

import { useTranslation } from "react-i18next";
import { AnimatedReveal } from "./animated-reveal";

type EssayItem = {
  title: string;
  excerpt: string;
  tag: string;
};

export function ThinkingSection() {
  const { t } = useTranslation();
  const essays = t("thinking.items", { returnObjects: true }) as EssayItem[];

  return (
    <AnimatedReveal className="section-frame" delay={0.2}>
      <section id="thinking" className="p-7 md:p-10">
        <p className="section-kicker">{t("thinking.kicker")}</p>
        <h2 className="section-title">{t("thinking.title")}</h2>

        <div className="mt-8 space-y-4">
          {essays.map((essay) => (
            <article
              key={essay.title}
              className="rounded-xl border border-[var(--line-soft)] bg-[var(--surface)] p-5 transition duration-300 ease-in-out hover:scale-[1.01] hover:border-[var(--line-strong)]"
            >
              <p className="text-xs uppercase tracking-[0.14em] text-[var(--text-muted)]">
                {essay.tag}
              </p>
              <h3 className="mt-2 text-lg text-[var(--foreground)]">
                {essay.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                {essay.excerpt}
              </p>
            </article>
          ))}
        </div>
      </section>
    </AnimatedReveal>
  );
}
