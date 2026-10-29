"use client";

import { Code2, Cpu, Wrench } from "lucide-react";
import { useTranslation } from "react-i18next";
import { AnimatedReveal } from "./animated-reveal";

type SkillGroup = {
  title: string;
  items: Array<{ name: string }>;
};

const icons = [Code2, Cpu, Wrench];

export function SkillsSection() {
  const { t } = useTranslation();
  const skillGroups = t("skills.groups", {
    returnObjects: true,
  }) as SkillGroup[];

  return (
    <AnimatedReveal className="section-frame" delay={0.1}>
      <section id="skills" className="p-7 md:p-10">
        <p className="section-kicker">{t("skills.kicker")}</p>
        <h2 className="section-title">{t("skills.title")}</h2>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = icons[index];
            return (
              <article
                key={group.title}
                className="rounded-xl border border-[var(--line-soft)] bg-[var(--surface)] p-5 transition duration-300 ease-in-out hover:scale-[1.015] hover:border-[var(--line-strong)]"
              >
                <Icon className="h-5 w-5 text-[var(--text-muted)]" />
                <h3 className="mt-3 text-sm uppercase tracking-[0.12em] text-[var(--text-secondary)]">
                  {group.title}
                </h3>

                <ul className="mt-5 space-y-3">
                  {group.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-center gap-2 text-sm text-[var(--text-primary)]"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--line-strong)]" />
                      <span>{item.name}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>
    </AnimatedReveal>
  );
}
