import React from "react";

export interface AuthorBioProps {
  name?: string;
  title?: string;
  bio?: string;
  avatarInitials?: string;
}

const DEFAULT_AUTHOR: Required<AuthorBioProps> = {
  name: "Saad Zaib",
  title: "Full-Stack Developer & Creator",
  bio: "Full-stack software engineer and creator of Get Sleep Calculator. Built this platform by translating official NSF and CDC sleep guidelines into clean, privacy-first code to help users optimize their circadian health.",
  avatarInitials: "SZ",
};

export default function AuthorBio({
  name = DEFAULT_AUTHOR.name,
  title = DEFAULT_AUTHOR.title,
  bio = DEFAULT_AUTHOR.bio,
  avatarInitials = DEFAULT_AUTHOR.avatarInitials,
}: AuthorBioProps) {
  return (
    <div
      style={{
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        padding: "1.5rem 0",
        marginTop: "3rem",
        marginBottom: "2rem",
      }}
    >
      <div className="flex items-start gap-4">
        <div
          aria-hidden="true"
          style={{
            width: 56,
            height: 56,
            borderRadius: "50%",
            background: "linear-gradient(135deg, var(--accent) 0%, #a855f7 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 800,
            fontSize: 16,
            color: "#fff",
            flexShrink: 0,
          }}
        >
          {avatarInitials}
        </div>
        <div>
          <div style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 2, textTransform: "uppercase", letterSpacing: "0.05em" }}>
            Written by
          </div>
          <div style={{ fontWeight: 700, color: "var(--text-primary)", fontSize: 15, marginBottom: 2 }}>
            {name}
          </div>
          <div style={{ fontSize: 12, color: "var(--accent-light)", marginBottom: 8, fontWeight: 600 }}>
            {title}
          </div>
          <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.6, margin: 0 }}>
            {bio}
          </p>
        </div>
      </div>
    </div>
  );
}
