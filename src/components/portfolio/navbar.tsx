"use client";

import { useTranslation } from "react-i18next";
import { LanguageToggle } from "./language-toggle";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
  "about",
  "skills",
  "projects",
  "thinking",
  "contact",
] as const;

export function Navbar() {
  const { t } = useTranslation();

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line-soft)] bg-[color:color-mix(in_oklab,var(--surface)_84%,transparent)] backdrop-blur-lg transition-colors duration-300 ease-in-out">
      <div className="mx-auto flex w-[min(1120px,92%)] items-center justify-between py-3">
        <a
          href="#hero"
          className="text-sm tracking-[0.2em] text-[var(--text-muted)] transition duration-300 ease-in-out hover:text-[var(--foreground)]"
        >
          CHASE.CHAI
        </a>
        <div className="flex items-center gap-4">
          <nav aria-label="主导航" className="hidden md:block">
            <ul className="flex items-center gap-4 text-sm text-[var(--text-muted)]">
              {navItems.map((key) => (
                <li key={key}>
                  <a
                    href={`#${key}`}
                    className="rounded-full border border-transparent px-3 py-1 transition duration-300 ease-in-out hover:border-[var(--line-strong)] hover:bg-[color:color-mix(in_oklab,var(--surface)_70%,transparent)] hover:text-[var(--foreground)]"
                  >
                    {t(`nav.${key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
