"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export function LanguageToggle() {
  const { i18n, t } = useTranslation();
  const language = i18n.resolvedLanguage === "zh" ? "zh" : "en";

  const switchLanguage = (next: "zh" | "en") => {
    if (next !== language) {
      void i18n.changeLanguage(next);
    }
  };

  return (
    <div
      aria-label={t("nav.languageLabel")}
      className="relative flex items-center rounded-full border border-[var(--line-soft)] bg-[var(--surface)] p-0.5"
      role="group"
    >
      <motion.span
        layout
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute top-0.5 bottom-0.5 w-[calc(50%-2px)] rounded-full border border-[var(--line-strong)] bg-[color:color-mix(in_oklab,var(--surface)_65%,transparent)]"
        style={{ left: language === "en" ? "2px" : "calc(50%)" }}
      />
      <button
        type="button"
        onClick={() => switchLanguage("en")}
        className="relative z-10 rounded-full px-3 py-1 text-xs transition duration-300 ease-in-out"
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => switchLanguage("zh")}
        className="relative z-10 rounded-full px-3 py-1 text-xs transition duration-300 ease-in-out"
      >
        中文
      </button>
    </div>
  );
}
