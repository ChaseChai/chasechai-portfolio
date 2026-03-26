"use client";

import { GitBranch, Mail, MessageSquare } from "lucide-react";
import { useTranslation } from "react-i18next";
import { AnimatedReveal } from "./animated-reveal";

export function ContactSection() {
  const { t } = useTranslation();
  const contacts = [
    {
      icon: Mail,
      label: t("contact.email"),
      value: "chasechai01@gmail.com",
      href: "mailto:chasechai01@gmail.com",
    },
    {
      icon: GitBranch,
      label: t("contact.github"),
      value: "github.com/ChaseChai",
      href: "https://github.com/ChaseChai",
    },
    {
      icon: MessageSquare,
      label: t("contact.social"),
      value: t("contact.socialText"),
      href: "https://github.com/ChaseChai",
    },
  ];

  return (
    <AnimatedReveal className="section-frame" delay={0.25}>
      <section id="contact" className="p-7 md:p-10">
        <p className="section-kicker">{t("contact.kicker")}</p>
        <h2 className="section-title">{t("contact.title")}</h2>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {contacts.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className="rounded-xl border border-[var(--line-soft)] bg-[var(--surface)] p-5 transition duration-300 ease-in-out hover:scale-[1.015] hover:border-[var(--line-strong)]"
              >
                <Icon className="h-5 w-5 text-[var(--text-muted)]" />
                <p className="mt-3 text-xs uppercase tracking-[0.14em] text-[var(--text-muted)]">
                  {item.label}
                </p>
                <p className="mt-1 text-sm text-[var(--text-secondary)]">
                  {item.value}
                </p>
              </a>
            );
          })}
        </div>
      </section>
    </AnimatedReveal>
  );
}
