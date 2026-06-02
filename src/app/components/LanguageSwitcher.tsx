"use client";
import { useState, useEffect, useRef } from "react";

const languages = [
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "ar", label: "العربية", flag: "🇸🇦" },
  { code: "zh-CN", label: "中文 (简体)", flag: "🇨🇳" },
  { code: "zh-TW", label: "中文 (繁體)", flag: "🇹🇼" },
  { code: "hi", label: "हिंदी", flag: "🇮🇳" },
  { code: "pt", label: "Português", flag: "🇧🇷" },
  { code: "ru", label: "Русский", flag: "🇷🇺" },
  { code: "ja", label: "日本語", flag: "🇯🇵" },
  { code: "ko", label: "한국어", flag: "🇰🇷" },
  { code: "it", label: "Italiano", flag: "🇮🇹" },
  { code: "nl", label: "Nederlands", flag: "🇳🇱" },
  { code: "tr", label: "Türkçe", flag: "🇹🇷" },
  { code: "pl", label: "Polski", flag: "🇵🇱" },
  { code: "sv", label: "Svenska", flag: "🇸🇪" },
  { code: "id", label: "Indonesia", flag: "🇮🇩" },
  { code: "ms", label: "Melayu", flag: "🇲🇾" },
  { code: "ur", label: "اردو", flag: "🇵🇰" },
  { code: "bn", label: "বাংলা", flag: "🇧🇩" },
  { code: "vi", label: "Tiếng Việt", flag: "🇻🇳" },
  { code: "th", label: "ภาษาไทย", flag: "🇹🇭" },
  { code: "fa", label: "فارسی", flag: "🇮🇷" },
  { code: "uk", label: "Українська", flag: "🇺🇦" },
  { code: "ro", label: "Română", flag: "🇷🇴" },
  { code: "el", label: "Ελληνικά", flag: "🇬🇷" },
  { code: "cs", label: "Čeština", flag: "🇨🇿" },
  { code: "hu", label: "Magyar", flag: "🇭🇺" },
  { code: "fi", label: "Suomi", flag: "🇫🇮" },
];

declare global {
  interface Window {
    google: {
      translate: {
        TranslateElement: new (opts: object, id: string) => void;
      };
    };
    googleTranslateElementInit: () => void;
  }
}

function triggerGoogleTranslate(langCode: string) {
  if (langCode === "en") {
    // Reset to original
    const iframe = document.querySelector<HTMLIFrameElement>(".goog-te-banner-frame");
    if (iframe) {
      const innerDoc = iframe.contentDocument || iframe.contentWindow?.document;
      const restoreBtn = innerDoc?.querySelector<HTMLElement>(".goog-close-link");
      restoreBtn?.click();
    }
    // Also try cookie-based reset
    document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=." + window.location.hostname;
    window.location.reload();
    return;
  }
  // Find the Google Translate hidden select and trigger it
  const select = document.querySelector<HTMLSelectElement>(".goog-te-combo");
  if (select) {
    select.value = langCode;
    select.dispatchEvent(new Event("change"));
  } else {
    // Fallback: set cookie and reload
    document.cookie = `googtrans=/en/${langCode}`;
    document.cookie = `googtrans=/en/${langCode}; domain=.${window.location.hostname}`;
    window.location.reload();
  }
}

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(languages[0]);
  const [search, setSearch] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Detect current language from Google Translate cookie
  useEffect(() => {
    const match = document.cookie.match(/googtrans=\/en\/([^;]+)/);
    if (match) {
      const found = languages.find((l) => l.code === match[1]);
      if (found) setCurrent(found);
    }
  }, []);

  const filtered = languages.filter(
    (l) =>
      l.label.toLowerCase().includes(search.toLowerCase()) ||
      l.code.toLowerCase().includes(search.toLowerCase())
  );

  function select(lang: typeof languages[0]) {
    setCurrent(lang);
    setOpen(false);
    setSearch("");
    triggerGoogleTranslate(lang.code);
  }

  return (
    <div ref={ref} style={{ position: "relative" }} translate="no" className="notranslate">
      {/* Trigger button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Select language"
        title="Translate page"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          padding: "6px 10px",
          borderRadius: 10,
          border: "1px solid var(--border)",
          background: "var(--bg-card2)",
          color: "var(--text-muted)",
          fontSize: 13,
          cursor: "pointer",
          fontWeight: 500,
          transition: "all 0.15s",
          whiteSpace: "nowrap",
        }}
      >
        <span style={{ fontSize: 16 }}>{current.flag}</span>
        <span className="hidden sm:inline">{current.code === "en" ? "EN" : current.code.split("-")[0].toUpperCase()}</span>
        <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" style={{ opacity: 0.6 }}>
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {/* Dropdown */}
      {open && (
        <div
          translate="no"
          style={{
            position: "absolute",
            top: "calc(100% + 8px)",
            right: 0,
            width: 220,
            maxHeight: 340,
            overflowY: "auto",
            background: "var(--bg-card2)",
            border: "1px solid var(--border)",
            borderRadius: 14,
            boxShadow: "0 16px 48px rgba(0,0,0,0.35)",
            zIndex: 100,
          }}
        >
          {/* Search */}
          <div style={{ padding: "10px 10px 6px" }}>
            <input
              autoFocus
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search language..."
              style={{
                width: "100%",
                padding: "6px 10px",
                borderRadius: 8,
                border: "1px solid var(--border)",
                background: "var(--bg-primary)",
                color: "var(--text-primary)",
                fontSize: 13,
                outline: "none",
                boxSizing: "border-box",
              }}
            />
          </div>
          {/* Language list */}
          <div style={{ padding: "4px 0 8px" }}>
            {filtered.length === 0 && (
              <div style={{ padding: "10px 14px", fontSize: 13, color: "var(--text-muted)" }}>No results</div>
            )}
            {filtered.map((lang) => (
              <button
                key={lang.code}
                onClick={() => select(lang)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  width: "100%",
                  padding: "8px 14px",
                  background: current.code === lang.code ? "rgba(108,99,255,0.15)" : "transparent",
                  border: "none",
                  color: current.code === lang.code ? "var(--accent-light)" : "var(--text-muted)",
                  fontSize: 13,
                  cursor: "pointer",
                  textAlign: "left",
                  fontWeight: current.code === lang.code ? 600 : 400,
                  transition: "background 0.1s",
                }}
                onMouseEnter={(e) => {
                  if (current.code !== lang.code)
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
                }}
                onMouseLeave={(e) => {
                  if (current.code !== lang.code)
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
              >
                <span style={{ fontSize: 18, lineHeight: 1 }}>{lang.flag}</span>
                <span>{lang.label}</span>
                {current.code === lang.code && (
                  <span style={{ marginLeft: "auto", fontSize: 11 }}>✓</span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
