"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { resources } from "./resources";

function detectLanguage(): "en" | "zh" {
  if (typeof window === "undefined") {
    return "en";
  }

  // 优先级：cookie（与 SSR 首屏脚本一致）→ localStorage → 浏览器语言
  const cookieMatch = document.cookie.match(/(?:^|;\s*)language=(en|zh)/);
  if (cookieMatch) {
    return cookieMatch[1] as "en" | "zh";
  }

  try {
    const saved = localStorage.getItem("language");
    if (saved === "zh" || saved === "en") {
      return saved;
    }
  } catch {
    // localStorage 不可用时忽略
  }

  return window.navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en";
}

if (!i18n.isInitialized) {
  void i18n.use(initReactI18next).init({
    resources,
    lng: detectLanguage(),
    fallbackLng: "en",
    // 资源已内联打包，关闭异步初始化 → 模块加载时同步完成，
    // 首次 render 即输出正确语言，避免「先英文后切换」的闪烁
    initImmediate: false,
    interpolation: {
      escapeValue: false,
    },
    returnNull: false,
  });
}

export default i18n;
