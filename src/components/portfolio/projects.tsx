"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Trophy } from "lucide-react";
import { useTranslation } from "react-i18next";
import { AnimatedReveal } from "./animated-reveal";

type ProjectItem = {
  name: string;
  desc: string;
  stack: string;
  highlight: string;
  award?: string;
  github?: string;
};

export function ProjectsSection() {
  const { t } = useTranslation();
  const projects = t("projects.items", {
    returnObjects: true,
  }) as ProjectItem[];

  return (
    <AnimatedReveal className="section-frame" delay={0.15}>
      <section id="projects" className="p-7 md:p-10">
        <p className="section-kicker">{t("projects.kicker")}</p>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {projects.map((project, index) => {
            const cardClass =
              "group block rounded-xl border border-[var(--line-soft)] bg-[var(--surface)] p-5" +
              (project.github
                ? ""
                : " transition duration-300 ease-in-out hover:border-[var(--line-strong)]");

            const motionProps = {
              initial: { opacity: 0, y: 22 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, amount: 0.25 },
              transition: {
                duration: 0.35,
                delay: index * 0.08,
                ease: "easeInOut" as const,
              },
              whileHover: { scale: 1.015 },
            };

            const inner = (
              <>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-medium text-[var(--foreground)]">
                    {project.name}
                  </h3>
                  {project.github ? (
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-[var(--text-muted)] transition duration-300 ease-in-out group-hover:text-[var(--foreground)]" />
                  ) : null}
                </div>

                {project.award ? (
                  <span className="mt-2.5 inline-flex items-center gap-1.5 rounded-full border border-[var(--line-strong)] px-2.5 py-0.5 text-[10px] uppercase tracking-[0.1em] text-[var(--foreground)]">
                    <Trophy className="h-3 w-3" />
                    {project.award}
                  </span>
                ) : null}

                <p className="mt-3 text-sm text-[var(--text-secondary)]">
                  {project.desc}
                </p>
                <p className="mt-4 border-t border-dashed border-[var(--line-soft)] pt-4 text-xs uppercase tracking-[0.1em] text-[var(--text-muted)]">
                  {project.stack}
                </p>
                <p className="mt-3 text-sm text-[var(--text-secondary)]">
                  {project.highlight}
                </p>
              </>
            );

            return project.github ? (
              <motion.a
                key={project.name}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                {...motionProps}
                className={cardClass}
              >
                {inner}
              </motion.a>
            ) : (
              <motion.div key={project.name} {...motionProps} className={cardClass}>
                {inner}
              </motion.div>
            );
          })}
        </div>
      </section>
    </AnimatedReveal>
  );
}
