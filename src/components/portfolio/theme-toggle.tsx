"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export function ThemeToggle() {
  const { i18n } = useTranslation();
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // 内联 script 已在 hydration 前设置好 dark class，这里读取真实状态
    setDark(document.documentElement.classList.contains("dark"));
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark, mounted]);

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
      {mounted ? (
        dark ? (
          <Sun className="h-4 w-4 text-[var(--foreground)] transition duration-300 ease-in-out group-hover:rotate-12" />
        ) : (
          <Moon className="h-4 w-4 text-[var(--foreground)] transition duration-300 ease-in-out group-hover:-rotate-12" />
        )
      ) : (
        <span className="h-4 w-4" aria-hidden />
      )}
    </button>
  );
}
