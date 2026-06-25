"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { AboutSection } from "./about";
import { ContactSection } from "./contact";
import { CustomCursor } from "./custom-cursor";
import { Hero } from "./hero";
import { Navbar } from "./navbar";
import { ProjectsSection } from "./projects";
import { SkillsSection } from "./skills";
import { ThinkingSection, type EssayItem } from "./thinking";

interface PortfolioPageProps {
  posts?: EssayItem[];
}

export function PortfolioPage({ posts = [] }: PortfolioPageProps) {
  const { i18n } = useTranslation();

  return (
    <div className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300 ease-in-out">
      <CustomCursor />
      <Navbar />
      <motion.main
        key={i18n.resolvedLanguage}
        initial={{ opacity: 0.25 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <Hero />

        <div className="mx-auto grid w-[min(1120px,92%)] gap-6 py-10 md:py-14">
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ThinkingSection posts={posts} />
          <ContactSection />
        </div>
      </motion.main>
    </div>
  );
}
