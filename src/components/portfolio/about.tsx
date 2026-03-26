"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { AnimatedReveal } from "./animated-reveal";

type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

export function AboutSection() {
  const { t } = useTranslation();
  const timeline = t("about.timeline", {
    returnObjects: true,
  }) as TimelineItem[];

  return (
    <AnimatedReveal className="section-frame" delay={0.05}>
      <section
        id="about"
        className="grid gap-8 p-7 md:grid-cols-[1.1fr_1fr] md:p-10"
      >
        <div>
          <p className="section-kicker">{t("about.kicker")}</p>
          <h2 className="section-title">{t("about.title")}</h2>
          <p className="mt-4 text-[var(--text-secondary)]">
            {t("about.description")}
          </p>
        </div>

        <div className="relative pl-6">
          <span className="absolute left-1 top-1 h-[calc(100%-0.5rem)] w-px bg-[var(--line-strong)]" />
          <ul className="space-y-6">
            {timeline.map((item, index) => (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.08,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <span className="absolute -left-[1.52rem] top-[0.35rem] h-2.5 w-2.5 rounded-full border border-[var(--line-strong)] bg-[var(--surface)]" />
                <p className="text-xs uppercase tracking-[0.16em] text-[var(--text-muted)]">
                  {item.year}
                </p>
                <p className="mt-1 font-medium text-[var(--foreground)]">
                  {item.title}
                </p>
                <p className="mt-1 text-sm text-[var(--text-secondary)]">
                  {item.description}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>
    </AnimatedReveal>
  );
}
