import React from "react";
import Link from "next/link";

export interface RelatedPost {
  href: string;
  title: string;
  excerpt: string;
  readTime: string;
  category: string;
}

interface RelatedArticlesProps {
  posts: RelatedPost[];
}

export default function RelatedArticles({ posts }: RelatedArticlesProps) {
  if (!posts || posts.length === 0) return null;

  return (
    <section
      style={{
        borderTop: "1px solid var(--border)",
        paddingTop: "2rem",
        marginTop: "2rem",
      }}
    >
      <h2
        style={{
          fontSize: 20,
          fontWeight: 800,
          color: "var(--text-primary)",
          marginBottom: "1.25rem",
        }}
      >
        Related Articles
      </h2>
      <div className="grid sm:grid-cols-3 gap-4">
        {posts.map((post) => (
          <Link
            key={post.href}
            href={post.href}
            style={{ textDecoration: "none", display: "block" }}
          >
            <article
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: 12,
                padding: "1.25rem",
                height: "100%",
                transition: "border-color 0.2s",
              }}
              className="hover:border-accent"
            >
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: "var(--accent-light)",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  marginBottom: 8,
                }}
              >
                {post.category}
              </div>
              <h3
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: 8,
                  lineHeight: 1.4,
                }}
              >
                {post.title}
              </h3>
              <p
                style={{
                  fontSize: 13,
                  color: "var(--text-muted)",
                  lineHeight: 1.6,
                  marginBottom: 12,
                }}
              >
                {post.excerpt}
              </p>
              <span
                style={{
                  fontSize: 12,
                  color: "var(--text-muted)",
                  fontWeight: 600,
                }}
              >
                {post.readTime} read →
              </span>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
