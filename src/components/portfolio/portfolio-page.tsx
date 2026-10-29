"use client";

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
  return (
    <div className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300 ease-in-out">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />

        <div className="mx-auto grid w-[min(1120px,92%)] gap-6 py-10 md:py-14">
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ThinkingSection posts={posts} />
          <ContactSection />
        </div>
      </main>
    </div>
  );
}
