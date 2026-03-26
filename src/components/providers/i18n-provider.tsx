"use client";

import i18n from "@/i18n/client";
import type { ReactNode } from "react";
import { useEffect } from "react";

type I18nProviderProps = {
  children: ReactNode;
};

function resolveInitialLanguage() {
  if (typeof window === "undefined") {
    return "en";
  }

  const saved = localStorage.getItem("language");
  if (saved === "zh" || saved === "en") {
    return saved;
  }

  return window.navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en";
}

export function I18nProvider({ children }: I18nProviderProps) {
  useEffect(() => {
    const initialLanguage = resolveInitialLanguage();
    void i18n.changeLanguage(initialLanguage);
    localStorage.setItem("language", initialLanguage);
    document.documentElement.lang = initialLanguage === "zh" ? "zh-CN" : "en";

    const handleLanguageChanged = (language: string) => {
      document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
      localStorage.setItem("language", language);
    };

    i18n.on("languageChanged", handleLanguageChanged);
    return () => {
      i18n.off("languageChanged", handleLanguageChanged);
    };
  }, []);

  return <>{children}</>;
}
