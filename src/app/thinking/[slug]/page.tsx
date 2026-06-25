import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPost, getPosts } from "@/lib/posts";
import { ArrowLeft, Calendar, Tag } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ lang?: string }>;
}

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const [{ slug }, { lang }] = await Promise.all([params, searchParams]);
  const language = lang === "zh" ? "zh" : "en";
  const post = getPost(slug, language) || getPost(slug, "en");

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.title} — Chase Chai`,
    description: post.description,
  };
}

export default async function PostPage({ params, searchParams }: Props) {
  const [{ slug }, { lang }] = await Promise.all([params, searchParams]);
  const language = lang === "zh" ? "zh" : "en";

  // Try requested language, fall back to English
  let post = getPost(slug, language);
  let displayLang = language;

  if (!post) {
    post = getPost(slug, "en");
    displayLang = "en";
  }

  if (!post) {
    notFound();
  }

  const altLang = displayLang === "zh" ? "en" : "zh";
  const hasAltVersion = getPost(slug, altLang) !== null;

  // Simple MDX components to match the portfolio design
  const components = {
    h1: (props: React.ComponentProps<"h1">) => (
      <h1 className="mt-10 mb-4 text-2xl font-semibold text-[var(--foreground)]" {...props} />
    ),
    h2: (props: React.ComponentProps<"h2">) => (
      <h2 className="mt-8 mb-3 text-xl font-semibold text-[var(--foreground)]" {...props} />
    ),
    h3: (props: React.ComponentProps<"h3">) => (
      <h3 className="mt-6 mb-2 text-lg font-medium text-[var(--foreground)]" {...props} />
    ),
    p: (props: React.ComponentProps<"p">) => (
      <p className="my-4 leading-relaxed text-[var(--text-secondary)]" {...props} />
    ),
    ul: (props: React.ComponentProps<"ul">) => (
      <ul className="my-4 list-disc pl-6 space-y-1 text-[var(--text-secondary)]" {...props} />
    ),
    ol: (props: React.ComponentProps<"ol">) => (
      <ol className="my-4 list-decimal pl-6 space-y-1 text-[var(--text-secondary)]" {...props} />
    ),
    li: (props: React.ComponentProps<"li">) => (
      <li className="leading-relaxed" {...props} />
    ),
    blockquote: (props: React.ComponentProps<"blockquote">) => (
      <blockquote
        className="my-6 border-l-2 border-[var(--line-strong)] pl-4 italic text-[var(--text-muted)]"
        {...props}
      />
    ),
    code: (props: React.ComponentProps<"code">) => (
      <code
        className="rounded bg-[var(--line-soft)] px-1.5 py-0.5 text-sm text-[var(--foreground)]"
        {...props}
      />
    ),
    pre: (props: React.ComponentProps<"pre">) => (
      <pre
        className="my-6 overflow-x-auto rounded-xl border border-[var(--line-soft)] bg-[var(--surface)] p-5 text-sm leading-relaxed"
        {...props}
      />
    ),
    a: (props: React.ComponentProps<"a">) => (
      <a
        className="text-[var(--accent)] underline underline-offset-2 hover:opacity-80"
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      />
    ),
    hr: () => <hr className="my-8 border-[var(--line-soft)]" />,
  };

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="mx-auto w-[min(720px,92%)] py-10 md:py-16">
        {/* Back link */}
        <Link
          href="/#thinking"
          className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--foreground)]"
        >
          <ArrowLeft size={16} />
          {displayLang === "zh" ? "返回首页" : "Back to home"}
        </Link>

        {/* Article header */}
        <header className="mt-8 mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {post.tags.map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-1 rounded-full border border-[var(--line-soft)] px-3 py-1 text-xs text-[var(--text-muted)]"
              >
                <Tag size={12} />
                {t}
              </span>
            ))}
          </div>
          <h1 className="text-2xl md:text-3xl font-semibold leading-tight">
            {post.title}
          </h1>
          <div className="mt-3 flex items-center gap-1 text-sm text-[var(--text-muted)]">
            <Calendar size={14} />
            <time dateTime={post.date}>{post.date}</time>
          </div>

          {/* Language toggle */}
          {hasAltVersion && (
            <Link
              href={`/thinking/${slug}?lang=${altLang}`}
              className="mt-4 inline-block text-sm text-[var(--accent)] hover:underline"
            >
              {displayLang === "zh" ? "Read in English" : "阅读中文版"}
            </Link>
          )}
        </header>

        {/* Article body */}
        <article className="prose-custom">
          <MDXRemote source={post.content} components={components} />
        </article>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-[var(--line-soft)]">
          <Link
            href="/#thinking"
            className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--foreground)]"
          >
            <ArrowLeft size={16} />
            {displayLang === "zh" ? "返回首页" : "Back to home"}
          </Link>
        </footer>
      </div>
    </div>
  );
}
