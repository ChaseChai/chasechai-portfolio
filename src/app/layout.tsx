import type { Metadata } from "next";
import { I18nProvider } from "@/components/providers/i18n-provider";
import { Inter, Noto_Sans_SC } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const notoSansSC = Noto_Sans_SC({
  variable: "--font-noto-sc",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Chase Chai | Portfolio",
  description:
    "Minimal line-art portfolio exploring AI, Web3, product thinking, and human-centered technology.",
  keywords: [
    "Chase Chai",
    "Portfolio",
    "AI",
    "Web3",
    "BUPT",
    "Next.js",
    "Tailwind CSS",
  ],
  openGraph: {
    title: "Chase Chai | Portfolio",
    description:
      "Minimal line-art portfolio exploring AI, Web3, product thinking, and human-centered technology.",
    url: "https://chasechai.com",
    siteName: "Chase Chai",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Chase Chai | Portfolio",
    description:
      "Minimal line-art portfolio exploring AI, Web3, product thinking, and human-centered technology.",
  },
};

// 在 hydration 之前同步应用主题与语言，避免首屏闪烁
const themeInitScript = `(function(){try{var t=localStorage.getItem("theme");var d=t?t==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;if(d){document.documentElement.classList.add("dark");}var l=document.cookie.match(/(?:^|;\\s*)language=(en|zh)/);if(!l){var s=localStorage.getItem("language");var lng=(s==="zh"||s==="en")?s:(navigator.language||"en").toLowerCase().indexOf("zh")===0?"zh":"en";document.documentElement.lang=lng==="zh"?"zh-CN":"en";}}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${notoSansSC.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full flex flex-col">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
