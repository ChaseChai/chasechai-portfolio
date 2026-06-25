import { getPosts } from "@/lib/posts";
import { PortfolioPage } from "@/components/portfolio/portfolio-page";

export default function Home() {
  // Fetch posts for both languages at build/request time
  const enPosts = getPosts("en");
  const zhPosts = getPosts("zh");

  // Merge and mark language, so the client component can filter by current lang
  const allPosts = [...enPosts, ...zhPosts].map((p) => ({
    slug: p.slug,
    title: p.title,
    description: p.description,
    tags: p.tags,
    date: p.date,
    lang: p.lang,
  }));

  return <PortfolioPage posts={allPosts} />;
}
