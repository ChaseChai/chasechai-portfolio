"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { AnimatedReveal } from "./animated-reveal";

type ProjectItem = {
  name: string;
  desc: string;
  stack: string;
  highlight: string;
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
        <h2 className="section-title">{t("projects.title")}</h2>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.35,
                delay: index * 0.08,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.015 }}
              className="group rounded-xl border border-[var(--line-soft)] bg-[var(--surface)] p-5"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-medium text-[var(--foreground)]">
                  {project.name}
                </h3>
                <ArrowUpRight className="h-4 w-4 text-[var(--text-muted)] transition duration-300 ease-in-out group-hover:text-[var(--foreground)]" />
              </div>
              <p className="mt-3 text-sm text-[var(--text-secondary)]">
                {project.desc}
              </p>
              <p className="mt-4 border-t border-dashed border-[var(--line-soft)] pt-4 text-xs uppercase tracking-[0.1em] text-[var(--text-muted)]">
                {project.stack}
              </p>
              <p className="mt-3 text-sm text-[var(--text-secondary)]">
                {project.highlight}
              </p>
            </motion.article>
          ))}
        </div>
      </section>
    </AnimatedReveal>
  );
}
