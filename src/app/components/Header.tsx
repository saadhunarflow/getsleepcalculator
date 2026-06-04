"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "./ThemeProvider";
import LanguageSwitcher from "./LanguageSwitcher";

const toolGroups = [
  {
    section: "Core Calculators",
    sectionKey: "CORE CALCULATORS",
    items: [
      { label: "Bedtime Calculator",       href: "/bedtime-calculator/",       icon: "🌙", desc: "Find the perfect time to go to bed" },
      { label: "Wake-Up Calculator",        href: "/wake-up-time-calculator/",  icon: "⏰", desc: "Find the best time to wake up" },
      { label: "Sleep Cycle Calculator",    href: "/sleep-cycle-calculator/",   icon: "🔄", desc: "Visualize your sleep cycles" },
      { label: "Nap Calculator",            href: "/nap-calculator/",           icon: "😴", desc: "Optimize your power nap timing" },
      { label: "How Much Sleep Did I Get?", href: "/how-much-sleep-did-i-get/", icon: "📊", desc: "Calculate your sleep duration" },
    ],
  },
  {
    section: "Track & Analyze",
    sectionKey: "TRACK & ANALYZE",
    items: [
      { label: "Sleep Debt Calculator", href: "/sleep-debt-calculator/", icon: "💳", desc: "Track your weekly sleep debt" },
      { label: "REM Sleep Calculator",  href: "/rem-sleep-calculator/",  icon: "🧠", desc: "Optimize your REM sleep" },
      { label: "Jet Lag Calculator",    href: "/jet-lag-calculator/",    icon: "✈️",  desc: "Adjust after travel or time zones" },
    ],
  },
  {
    section: "Discover",
    sectionKey: "DISCOVER",
    items: [
      { label: "Chronotype Calculator",     href: "/chronotype-calculator/",     icon: "🦉", desc: "Discover your sleep personality" },
      { label: "Sleep Schedule Builder",    href: "/sleep-schedule-builder/",    icon: "📅", desc: "Build your weekly sleep plan" },
      { label: "Sleep Calculator by Age",   href: "/sleep-calculator-by-age/",   icon: "👤", desc: "Sleep needs by age group" },
      { label: "Baby Sleep Calculator",     href: "/baby-sleep-calculator/",     icon: "👶", desc: "Sleep guide for babies 0-3 years" },
      { label: "Sleep Calculator for Kids", href: "/sleep-calculator-for-kids/", icon: "🧒", desc: "Ideal bedtime for school-age kids" },
    ],
  },
];

const learnLinks = [
  { label: "How Much Sleep Do I Need?", href: "/how-much-sleep-do-i-need/" },
  { label: "Sleep Stages Explained", href: "/sleep-stages/" },
  { label: "Sleep Hygiene Tips", href: "/sleep-hygiene-tips/" },
  { label: "Circadian Rhythm", href: "/circadian-rhythm/" },
  { label: "Insomnia Guide", href: "/insomnia/" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const [learnOpen, setLearnOpen] = useState(false);
  const [mobileToolsOpen, setMobileToolsOpen] = useState(false);
  const [mobileLearnOpen, setMobileLearnOpen] = useState(false);
  const { theme, toggle } = useTheme();

  const headerRef     = useRef<HTMLElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Escape key closes mega menu and learn dropdown
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setDropOpen(false);
        setLearnOpen(false);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  // Outside click closes mega menu and learn dropdown
  useEffect(() => {
    function onPointerDown(e: PointerEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setDropOpen(false);
        setLearnOpen(false);
      }
    }
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  function openMega() {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setDropOpen(true);
  }
  function scheduleMegaClose() {
    closeTimerRef.current = setTimeout(() => setDropOpen(false), 150);
  }

  return (
    <header
      ref={headerRef}
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
            <button
              aria-expanded={dropOpen}
              aria-haspopup="true"
              aria-label="Tools menu"
              onMouseEnter={openMega}
              onMouseLeave={scheduleMegaClose}
              onClick={() => setDropOpen((v) => !v)}
              className="flex items-center gap-1 text-sm font-medium transition-colors"
              style={{ color: dropOpen ? "var(--accent-light)" : "var(--text-muted)" }}
            >
              Tools
              <svg
                width="12" height="12" fill="none"
                stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                style={{ transform: dropOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
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

      {/* ── Desktop Mega Menu ── */}
      {dropOpen && (
        <div
          aria-label="Tools mega menu"
          onMouseEnter={openMega}
          onMouseLeave={scheduleMegaClose}
          className="hidden md:block"
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "var(--bg-card)",
            borderTop: "2px solid var(--accent)",
            borderBottom: "1px solid var(--border)",
            boxShadow: "0 24px 64px rgba(0,0,0,0.4)",
          }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
            {/* 3-column grid */}
            <div className="grid grid-cols-3 gap-8">
              {toolGroups.map((group) => (
                <div key={group.section}>
                  <p
                    className="text-xs font-bold uppercase tracking-widest mb-4 pb-2"
                    style={{ color: "var(--accent-light)", borderBottom: "1px solid var(--border)" }}
                  >
                    {group.sectionKey}
                  </p>
                  <ul className="space-y-0.5">
                    {group.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="flex items-start gap-3 px-3 py-2.5 rounded-xl transition-all hover:bg-white/5"
                          onClick={() => setDropOpen(false)}
                        >
                          <span className="text-xl shrink-0 mt-0.5">{item.icon}</span>
                          <div>
                            <p className="text-sm font-semibold leading-tight" style={{ color: "var(--text-primary)" }}>
                              {item.label}
                            </p>
                            <p className="text-xs mt-0.5 leading-snug" style={{ color: "var(--text-muted)" }}>
                              {item.desc}
                            </p>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            {/* Bottom bar */}
            <div
              className="mt-6 pt-4 flex items-center justify-between text-xs"
              style={{ borderTop: "1px solid var(--border)", color: "var(--text-muted)" }}
            >
              <span>🔬 All tools are free and science-based</span>
              <Link
                href="/#all-tools"
                className="font-semibold transition-colors hover:text-white"
                style={{ color: "var(--accent-light)" }}
                onClick={() => setDropOpen(false)}
              >
                View all tools →
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* ── Mobile Menu ── */}
      {menuOpen && (
        <div
          className="md:hidden border-t"
          style={{ borderColor: "var(--border)", background: "var(--bg-card)" }}
        >
          <div className="px-4 py-2">

            {/* Tools accordion */}
            <div style={{ borderBottom: "1px solid var(--border)" }}>
              <button
                onClick={() => setMobileToolsOpen((v) => !v)}
                className="w-full flex items-center justify-between py-3 text-sm font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                <span>Tools</span>
                <svg
                  width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                  style={{ transform: mobileToolsOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              {mobileToolsOpen && (
                <div className="pb-3">
                  {toolGroups.map((group) => (
                    <div key={group.section} className="mt-1">
                      <p className="text-xs font-semibold uppercase tracking-wider py-2" style={{ color: "var(--accent-light)" }}>
                        {group.section}
                      </p>
                      {group.items.map((t) => (
                        <Link
                          key={t.href}
                          href={t.href}
                          className="flex items-center gap-2 text-sm transition-colors hover:text-white"
                          style={{ color: "var(--text-muted)", minHeight: "44px", paddingTop: "6px", paddingBottom: "6px" }}
                          onClick={() => setMenuOpen(false)}
                        >
                          <span>{t.icon}</span>{t.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Learn accordion */}
            <div style={{ borderBottom: "1px solid var(--border)" }}>
              <button
                onClick={() => setMobileLearnOpen((v) => !v)}
                className="w-full flex items-center justify-between py-3 text-sm font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                <span>Learn</span>
                <svg
                  width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                  style={{ transform: mobileLearnOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              {mobileLearnOpen && (
                <div className="pb-3">
                  {learnLinks.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="flex items-center text-sm transition-colors hover:text-white"
                      style={{ color: "var(--text-muted)", minHeight: "44px", paddingTop: "6px", paddingBottom: "6px" }}
                      onClick={() => setMenuOpen(false)}
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/blog/"    className="flex items-center text-sm transition-colors hover:text-white" style={{ color: "var(--text-muted)", minHeight: "44px", paddingTop: "6px", paddingBottom: "6px" }} onClick={() => setMenuOpen(false)}>Blog</Link>
            <Link href="/about/"   className="flex items-center text-sm transition-colors hover:text-white" style={{ color: "var(--text-muted)", minHeight: "44px", paddingTop: "6px", paddingBottom: "6px" }} onClick={() => setMenuOpen(false)}>About</Link>
            <Link href="/contact/" className="flex items-center text-sm transition-colors hover:text-white" style={{ color: "var(--text-muted)", minHeight: "44px", paddingTop: "6px", paddingBottom: "6px" }} onClick={() => setMenuOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
}
