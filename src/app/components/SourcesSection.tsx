interface Source {
  num: number;
  author: string;
  title: string;
  year?: string;
  url?: string;
  note?: string;
}

interface SourcesSectionProps {
  sources: Source[];
}

export default function SourcesSection({ sources }: SourcesSectionProps) {
  return (
    <div
      style={{
        borderTop: "1px solid var(--border)",
        marginTop: "2.5rem",
        paddingTop: "1.5rem",
        marginBottom: "2rem",
      }}
    >
      <p
        style={{
          fontSize: 11,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          color: "var(--text-muted)",
          marginBottom: "0.75rem",
        }}
      >
        Sources &amp; References
      </p>
      <ol style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {sources.map((s) => (
          <li
            key={s.num}
            style={{
              display: "flex",
              gap: "0.5rem",
              fontSize: 12,
              color: "var(--text-muted)",
              lineHeight: 1.6,
              marginBottom: "0.4rem",
            }}
          >
            <span style={{ flexShrink: 0, fontWeight: 600, color: "var(--accent-light)", minWidth: 16 }}>
              {s.num}.
            </span>
            <span>
              {s.author}.{s.year ? ` (${s.year}).` : ""}{" "}
              <em>{s.title}</em>
              {s.note ? `. ${s.note}` : ""}
              {s.url ? (
                <>
                  {". "}
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "var(--accent-light)", textDecoration: "underline", wordBreak: "break-all" }}
                  >
                    {s.url.replace(/^https?:\/\//, "")}
                  </a>
                </>
              ) : null}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
