"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
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
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line-soft)] bg-[color:color-mix(in_oklab,var(--surface)_84%,transparent)] backdrop-blur-lg transition-colors duration-300 ease-in-out">
      <div className="mx-auto flex w-[min(1120px,92%)] items-center justify-between py-3">
        <a
          href="#hero"
          className="text-sm tracking-[0.2em] text-[var(--text-muted)] transition duration-300 ease-in-out hover:text-[var(--foreground)]"
        >
          CHASE.CHAI
        </a>
        <div className="flex items-center gap-2 md:gap-4">
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
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "关闭菜单" : "打开菜单"}
            className="grid h-9 w-9 place-items-center rounded-full border border-[var(--line-soft)] bg-[var(--surface)] transition duration-300 ease-in-out hover:border-[var(--line-strong)] md:hidden"
          >
            {open ? (
              <X className="h-4 w-4 text-[var(--foreground)]" />
            ) : (
              <Menu className="h-4 w-4 text-[var(--foreground)]" />
            )}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="移动端导航"
          className="border-t border-[var(--line-soft)] md:hidden"
        >
          <ul className="mx-auto grid w-[min(1120px,92%)] gap-1 py-3">
            {navItems.map((key) => (
              <li key={key}>
                <a
                  href={`#${key}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm text-[var(--text-muted)] transition duration-300 ease-in-out hover:bg-[color:color-mix(in_oklab,var(--surface)_70%,transparent)] hover:text-[var(--foreground)]"
                >
                  {t(`nav.${key}`)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
