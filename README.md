# Chase Chai Portfolio

Minimal, elegant, line-art portfolio built with Next.js, Tailwind CSS, and Framer Motion.

## Design Direction

1. Minimal / clean / rational visual language
2. Black-white-gray palette with restrained interaction accents
3. Line-art geometry and hairline borders
4. Generous whitespace and readable content rhythm
5. Calm motion: subtle reveal, hover lift, typing text, smooth scrolling

## Tech Stack

1. Next.js (App Router)
2. React + TypeScript
3. Tailwind CSS v4
4. Framer Motion
5. Lucide React (outline icons)

## Component Structure

Core entry:

1. src/app/layout.tsx: global metadata, font setup
2. src/app/page.tsx: homepage entry
3. src/app/globals.css: design system, line-art background, global utilities

Portfolio components:

1. src/components/portfolio/portfolio-page.tsx: page composition root
2. src/components/portfolio/navbar.tsx: anchor navigation + theme toggle
3. src/components/portfolio/hero.tsx: hero content + typing effect + animated line shapes
4. src/components/portfolio/about.tsx: about copy + animated timeline
5. src/components/portfolio/skills.tsx: categorized skills + progress visualization
6. src/components/portfolio/projects.tsx: project cards + hover motion
7. src/components/portfolio/thinking.tsx: essays/thinking cards
8. src/components/portfolio/contact.tsx: contact cards
9. src/components/portfolio/theme-toggle.tsx: dark mode switch
10. src/components/portfolio/custom-cursor.tsx: cursor follower (desktop pointer)
11. src/components/portfolio/animated-reveal.tsx: reusable scroll reveal wrapper

## Local Development

1. Install dependencies:
   npm install
2. Start dev server:
   npm run dev
3. Open:
   http://localhost:3000

Quality checks:

1. npm run lint
2. npm run build

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Go to Vercel, create a New Project, import the repository.
3. Framework Preset: Next.js (auto detected).
4. Build Command: npm run build
5. Output: default Next.js output
6. Deploy.

After deployment:

1. Bind custom domain in Vercel Project Settings.
2. Add DNS records at domain provider (Cloudflare or Aliyun).
3. Enable HTTPS (auto on Vercel).

## Extension Ideas

1. Blog system:
   - Add MDX-based blog in src/app/thinking/[slug]
   - Or connect a headless CMS (Contentlayer / Sanity / Notion API)
2. Project detail pages:
   - Route each project to a dedicated case-study page
3. Multilingual support:
   - Add Chinese/English i18n routes
4. Analytics:
   - Add Vercel Analytics or Plausible
5. Performance:
   - Dynamic import for heavy motion sections
   - Image optimization via next/image

## Positioning

This site is intentionally framed as:

"A future technology founder's personal space, not a student resume page."
