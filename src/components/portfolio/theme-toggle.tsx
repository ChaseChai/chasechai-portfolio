"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export function ThemeToggle() {
  const { i18n } = useTranslation();
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  const toggle = () => {
    setDark((prev) => !prev);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={
        i18n.resolvedLanguage === "zh" ? "切换明暗模式" : "Toggle color mode"
      }
      className="group grid h-9 w-9 place-items-center rounded-full border border-[var(--line-soft)] bg-[var(--surface)] transition duration-300 ease-in-out hover:-translate-y-0.5 hover:border-[var(--line-strong)]"
    >
      {dark ? (
        <Sun className="h-4 w-4 text-[var(--foreground)] transition duration-300 ease-in-out group-hover:rotate-12" />
      ) : (
        <Moon className="h-4 w-4 text-[var(--foreground)] transition duration-300 ease-in-out group-hover:-rotate-12" />
      )}
    </button>
  );
}
