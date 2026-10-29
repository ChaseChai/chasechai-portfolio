"use client";

import i18n from "@/i18n/client";
import type { ReactNode } from "react";
import { useEffect } from "react";

type I18nProviderProps = {
  children: ReactNode;
};

const ONE_YEAR = 60 * 60 * 24 * 365;

function persistLanguage(language: "en" | "zh") {
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  localStorage.setItem("language", language);
  document.cookie = `language=${language};path=/;max-age=${ONE_YEAR};samesite=lax`;
}

export function I18nProvider({ children }: I18nProviderProps) {
  useEffect(() => {
    // 初始语言已在 i18n/client.ts 中同步确定，这里只做持久化与 DOM 同步
    persistLanguage(i18n.resolvedLanguage === "zh" ? "zh" : "en");

    const handleLanguageChanged = (language: string) => {
      persistLanguage(language === "zh" ? "zh" : "en");
    };

    i18n.on("languageChanged", handleLanguageChanged);
    return () => {
      i18n.off("languageChanged", handleLanguageChanged);
    };
  }, []);

  return <>{children}</>;
}
