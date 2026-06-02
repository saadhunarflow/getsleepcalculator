"use client";
import Link from "next/link";
import { useState } from "react";
import { useTheme } from "./ThemeProvider";
import LanguageSwitcher from "./LanguageSwitcher";

const tools = [
  { label: "Bedtime Calculator", href: "/bedtime-calculator/" },
  { label: "Wake-Up Calculator", href: "/wake-up-time-calculator/" },
  { label: "Nap Calculator", href: "/nap-calculator/" },
];

const learnLinks = [
  { label: "How Much Sleep Do I Need?", href: "/how-much-sleep-do-i-need/" },
  { label: "Sleep Stages Explained", href: "/sleep-stages/" },
  { label: "Sleep Hygiene Tips", href: "/sleep-hygiene-tips/" },
  { label: "Circadian Rhythm", href: "/circadian-rhythm/" },
  { label: "Insomnia Guide", href: "/insomnia/" },
  { label: "FAQ", href: "/faq/" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const [learnOpen, setLearnOpen] = useState(false);
  const { theme, toggle } = useTheme();

  return (
    <header
      style={{
        background: "var(--bg-card)",
        borderBottom: "1px solid var(--border)",
        backdropFilter: "blur(12px)",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span style={{ fontSize: "1.6rem" }}>🌙</span>
            <span
              className="font-bold text-lg"
              style={{ color: "var(--text-primary)" }}
            >
              <span style={{ color: "var(--accent-light)" }}>Sleep</span>
              Calculator
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <div className="relative">
              <button
                onMouseEnter={() => setDropOpen(true)}
                onMouseLeave={() => setDropOpen(false)}
                className="flex items-center gap-1 text-sm font-medium transition-colors"
                style={{ color: "var(--text-muted)" }}
              >
                Tools
                <svg
                  width="12"
                  height="12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              {dropOpen && (
                <div
                  onMouseEnter={() => setDropOpen(true)}
                  onMouseLeave={() => setDropOpen(false)}
                  className="absolute top-full left-0 pt-2 w-56"
                >
                  <div
                    className="rounded-xl py-2 shadow-2xl"
                    style={{
                      background: "var(--bg-card2)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    {tools.map((t) => (
                      <Link
                        key={t.href}
                        href={t.href}
                        className="block px-4 py-2 text-sm transition-colors hover:bg-white/5"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {t.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            {/* Learn dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setLearnOpen(true)}
                onMouseLeave={() => setLearnOpen(false)}
                className="flex items-center gap-1 text-sm font-medium transition-colors"
                style={{ color: "var(--text-muted)" }}
              >
                Learn
                <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              {learnOpen && (
                <div
                  onMouseEnter={() => setLearnOpen(true)}
                  onMouseLeave={() => setLearnOpen(false)}
                  className="absolute top-full left-0 pt-2 w-56"
                >
                  <div className="rounded-xl py-2 shadow-2xl" style={{ background: "var(--bg-card2)", border: "1px solid var(--border)" }}>
                    {learnLinks.map((l) => (
                      <Link key={l.href} href={l.href}
                        className="block px-4 py-2 text-sm transition-colors hover:bg-white/5"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {l.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link href="/blog/" className="text-sm font-medium transition-colors hover:text-white" style={{ color: "var(--text-muted)" }}>Blog</Link>
            <Link href="/about/" className="text-sm font-medium transition-colors hover:text-white" style={{ color: "var(--text-muted)" }}>About</Link>
          </nav>

          {/* Theme toggle + Language Switcher + Mobile hamburger */}
          <div className="flex items-center gap-2">
            {/* Language Switcher */}
            <LanguageSwitcher />
            {/* Theme Toggle Button */}
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
              style={{
                background: "var(--bg-card2)",
                border: "1px solid var(--border)",
                color: "var(--text-muted)",
              }}
            >
              {theme === "dark" ? (
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              ) : (
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
                </svg>
              )}
            </button>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 rounded-lg"
              style={{ color: "var(--text-muted)" }}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M3 12h18M3 6h18M3 18h18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t"
          style={{ borderColor: "var(--border)", background: "var(--bg-card)" }}
        >
          <div className="px-4 py-4 space-y-1">
            <p
              className="text-xs font-semibold uppercase tracking-wider mb-3"
              style={{ color: "var(--accent-light)" }}
            >
              Tools
            </p>
            {tools.map((t) => (
              <Link
                key={t.href}
                href={t.href}
                className="block py-2 text-sm transition-colors hover:text-white"
                style={{ color: "var(--text-muted)" }}
                onClick={() => setMenuOpen(false)}
              >
                {t.label}
              </Link>
            ))}
            <div className="border-t my-3" style={{ borderColor: "var(--border)" }} />
            <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--accent-light)" }}>Learn</p>
            {learnLinks.map((l) => (
              <Link key={l.href} href={l.href}
                className="block py-2 text-sm transition-colors hover:text-white"
                style={{ color: "var(--text-muted)" }}
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <div className="border-t my-3" style={{ borderColor: "var(--border)" }} />
            <Link href="/blog/" className="block py-2 text-sm" style={{ color: "var(--text-muted)" }} onClick={() => setMenuOpen(false)}>Blog</Link>
            <Link href="/about/" className="block py-2 text-sm" style={{ color: "var(--text-muted)" }} onClick={() => setMenuOpen(false)}>About</Link>
            <Link href="/contact/" className="block py-2 text-sm" style={{ color: "var(--text-muted)" }} onClick={() => setMenuOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
}
