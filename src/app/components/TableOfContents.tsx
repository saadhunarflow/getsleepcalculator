"use client";
import React, { useState } from "react";

export interface TocItem {
  id: string;
  text: string;
  level: 2 | 3;
}

interface TableOfContentsProps {
  items: TocItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [open, setOpen] = useState(false);

  if (!items || items.length === 0) return null;

  return (
    <nav
      aria-label="Table of Contents"
      style={{
        border: "1px solid var(--border)",
        borderRadius: 12,
        marginBottom: "2rem",
        overflow: "hidden",
      }}
    >
      {/* Header — always visible, toggle on mobile */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        style={{
          width: "100%",
          background: "var(--bg-card)",
          border: "none",
          padding: "1rem 1.25rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <span style={{ fontWeight: 700, color: "var(--text-primary)", fontSize: 15 }}>
          📋 Contents
        </span>
        <span
          style={{
            color: "var(--text-muted)",
            fontSize: 12,
            fontWeight: 600,
            transition: "transform 0.2s",
            display: "inline-block",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
          aria-hidden="true"
        >
          ▼
        </span>
      </button>

      {/* Desktop: always shown; Mobile: shown when open */}
      <div
        className="toc-body"
        style={{
          padding: open ? "0.75rem 1.25rem 1rem" : undefined,
          display: open ? "block" : "none",
        }}
      >
        <style>{`
          @media (min-width: 640px) {
            .toc-body { display: block !important; padding: 0.75rem 1.25rem 1rem !important; }
          }
        `}</style>
        <ol style={{ margin: 0, padding: 0, listStyle: "none", counterReset: "toc-counter" }}>
          {items.map((item, idx) => (
            <li
              key={item.id}
              style={{
                paddingLeft: item.level === 3 ? "1.25rem" : 0,
                marginBottom: "0.35rem",
              }}
            >
              <a
                href={`#${item.id}`}
                style={{
                  color: item.level === 2 ? "var(--accent-light)" : "var(--text-muted)",
                  fontSize: item.level === 2 ? 14 : 13,
                  fontWeight: item.level === 2 ? 600 : 400,
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "baseline",
                  gap: "0.5rem",
                }}
              >
                <span style={{ color: "var(--text-muted)", fontSize: 11, minWidth: 18 }}>
                  {item.level === 2 ? `${idx + 1}.` : "›"}
                </span>
                {item.text}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
