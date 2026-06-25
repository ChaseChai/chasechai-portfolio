import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  draft?: boolean;
  lang: string;
}

export interface Post extends PostMeta {
  content: string;
}

/**
 * Get all published posts for a given language.
 * Posts are sorted by date descending.
 */
export function getPosts(lang: string): PostMeta[] {
  const suffix = `.${lang}.mdx`;

  if (!fs.existsSync(POSTS_DIR)) return [];

  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(suffix));

  const posts = files
    .map((file) => {
      const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf-8");
      const { data } = matter(raw);
      const slug = file.replace(suffix, "");

      return {
        slug,
        title: data.title || slug,
        date: data.date || "",
        description: data.description || "",
        tags: data.tags || [],
        draft: data.draft === true,
        lang,
      } as PostMeta;
    })
    .filter((p) => !p.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

/**
 * Get a single post by slug and language.
 * Returns null if not found.
 */
export function getPost(slug: string, lang: string): Post | null {
  const filePath = path.join(POSTS_DIR, `${slug}.${lang}.mdx`);

  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title || slug,
    date: data.date || "",
    description: data.description || "",
    tags: data.tags || [],
    draft: data.draft === true,
    lang,
    content,
  };
}

/**
 * Get all unique slugs across both languages.
 */
export function getAllSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];

  const files = fs.readdirSync(POSTS_DIR);
  const slugSet = new Set<string>();

  for (const file of files) {
    const match = file.match(/^(.+)\.(en|zh)\.mdx$/);
    if (match) slugSet.add(match[1]);
  }

  return Array.from(slugSet);
}
