"use client";

import { ArrowUpRight, Trophy } from "lucide-react";
import { useTranslation } from "react-i18next";
import { AnimatedReveal } from "./animated-reveal";

type ProjectItem = {
  name: string;
  meta?: string;
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
          {projects.map((project) => {
            const cardContent = (
              <>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-medium text-[var(--foreground)]">
                      {project.name}
                    </h3>
                    {project.meta ? (
                      <p className="mt-1 text-[11px] uppercase tracking-[0.1em] text-[var(--text-muted)]">
                        {project.meta}
                      </p>
                    ) : null}
                  </div>
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

            const cardClass =
              "group block rounded-xl border border-[var(--line-soft)] bg-[var(--surface)] p-5 transition duration-300 ease-in-out hover:scale-[1.015] hover:border-[var(--line-strong)]";

            return project.github ? (
              <a
                key={project.name}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={cardClass}
              >
                {cardContent}
              </a>
            ) : (
              <div key={project.name} className={cardClass}>
                {cardContent}
              </div>
            );
          })}
        </div>
      </section>
    </AnimatedReveal>
  );
}
