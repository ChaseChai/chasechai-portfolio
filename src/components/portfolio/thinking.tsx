"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { AnimatedReveal } from "./animated-reveal";

export interface EssayItem {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  date: string;
  lang: string;
}

interface ThinkingSectionProps {
  posts: EssayItem[];
}

export function ThinkingSection({ posts }: ThinkingSectionProps) {
  const { t, i18n } = useTranslation();

  // Filter posts by current language, fall back to any
  const currentLang = i18n.language?.startsWith("zh") ? "zh" : "en";
  const filteredPosts = posts.filter((p) => p.lang === currentLang);

  if (filteredPosts.length === 0) return null;

  return (
    <AnimatedReveal className="section-frame" delay={0.2}>
      <section id="thinking" className="p-7 md:p-10">
        <p className="section-kicker">{t("thinking.kicker")}</p>
        <h2 className="section-title">{t("thinking.title")}</h2>

        <div className="mt-8 space-y-4">
          {filteredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/thinking/${post.slug}?lang=${currentLang}`}
              className="block"
            >
              <article className="rounded-xl border border-[var(--line-soft)] bg-[var(--surface)] p-5 transition duration-300 ease-in-out hover:scale-[1.01] hover:border-[var(--line-strong)]">
                <p className="text-xs uppercase tracking-[0.14em] text-[var(--text-muted)]">
                  {post.tags.join("  ·  ")}
                </p>
                <h3 className="mt-2 text-lg text-[var(--foreground)]">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--text-secondary)]">
                  {post.description}
                </p>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </AnimatedReveal>
  );
}
