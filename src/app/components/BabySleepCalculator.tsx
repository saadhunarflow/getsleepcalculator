"use client";
import { useState } from "react";

// ── Data ──────────────────────────────────────────────────────────────────────
const BABY_STAGES = [
  {
    id: "newborn",
    label: "Newborn",
    range: "0–1 month",
    total: "14–17h",
    night: "8–9h",
    naps: "4–5 naps",
    napDuration: "30–45 min each",
    wakeWindow: "45–60 min",
    tip: "Newborns can't distinguish day from night yet. Focus on feeding on demand and keeping nighttime interactions quiet and dim to start building day/night awareness.",
  },
  {
    id: "1-2mo",
    label: "1–2 Months",
    range: "1–2 months",
    total: "14–16h",
    night: "8–9h",
    naps: "4–5 naps",
    napDuration: "30–60 min each",
    wakeWindow: "60–90 min",
    tip: "Begin a simple eat–play–sleep routine. Expose your baby to natural light in the morning to help establish circadian rhythms.",
  },
  {
    id: "2-3mo",
    label: "2–3 Months",
    range: "2–3 months",
    total: "13–15h",
    night: "9–10h",
    naps: "3–4 naps",
    napDuration: "30–60 min each",
    wakeWindow: "60–90 min",
    tip: "Night stretches are getting longer. A consistent bedtime between 7–8 PM helps anchor the circadian rhythm and usually results in longer overnight sleep.",
  },
  {
    id: "3-6mo",
    label: "3–6 Months",
    range: "3–6 months",
    total: "12–15h",
    night: "10–11h",
    naps: "3 naps",
    napDuration: "45–90 min each",
    wakeWindow: "90–120 min",
    tip: "This is the ideal time to introduce a bedtime routine (bath, feed, book, sleep). Sleep consolidation improves rapidly — many babies sleep 5–6 hour stretches.",
  },
  {
    id: "6-9mo",
    label: "6–9 Months",
    range: "6–9 months",
    total: "12–14h",
    night: "10–11h",
    naps: "2–3 naps",
    napDuration: "60–90 min each",
    wakeWindow: "2–3 hours",
    tip: "Watch for the 2-to-3 nap transition. If your baby is fighting the third nap regularly, it may be time to move to 2 naps with longer wake windows.",
  },
  {
    id: "9-12mo",
    label: "9–12 Months",
    range: "9–12 months",
    total: "12–14h",
    night: "10–11h",
    naps: "2 naps",
    napDuration: "60–90 min each",
    wakeWindow: "3 hours",
    tip: "Two naps (morning and afternoon) with ~3-hour wake windows is the sweet spot. Avoid late afternoon naps ending after 4–5 PM to protect nighttime sleep.",
  },
  {
    id: "12-18mo",
    label: "12–18 Months",
    range: "12–18 months",
    total: "11–14h",
    night: "10–11h",
    naps: "1–2 naps",
    napDuration: "60–90 min each",
    wakeWindow: "3–4 hours",
    tip: "The 2-to-1 nap transition typically happens between 15–18 months. Signs: resisting the first nap but still tired, or late nap pushing bedtime past 9 PM.",
  },
  {
    id: "18-24mo",
    label: "18–24 Months",
    range: "18–24 months",
    total: "11–14h",
    night: "10–12h",
    naps: "1 nap",
    napDuration: "60–90 min",
    wakeWindow: "4–5 hours",
    tip: "One midday nap of 1–1.5 hours is ideal. A consistent nap time (12–1 PM) and bedtime (7–8 PM) creates reliable, predictable sleep for both baby and parents.",
  },
  {
    id: "2-3yr",
    label: "2–3 Years",
    range: "2–3 years",
    total: "11–13h",
    night: "10–12h",
    naps: "0–1 nap",
    napDuration: "~60 min",
    wakeWindow: "5–6 hours",
    tip: "Some 2-year-olds drop naps; others need them until age 3+. If dropping the nap, offer a quiet rest period and move bedtime 30–45 minutes earlier to compensate.",
  },
] as const;

type StageId = typeof BABY_STAGES[number]["id"];

const STAT_ICONS: Record<string, string> = {
  total: "💤",
  night: "🌙",
  naps: "☀️",
  napDuration: "⏱️",
  wakeWindow: "👶",
};

// ── Component ─────────────────────────────────────────────────────────────────
export default function BabySleepCalculator() {
  const [selectedId, setSelectedId] = useState<StageId>("newborn");

  const stage = BABY_STAGES.find((s) => s.id === selectedId)!;

  const stats = [
    { key: "total",       label: "Total Sleep",     value: stage.total },
    { key: "night",       label: "Night Sleep",      value: stage.night },
    { key: "naps",        label: "Naps Per Day",     value: stage.naps },
    { key: "napDuration", label: "Nap Duration",     value: stage.napDuration },
    { key: "wakeWindow",  label: "Wake Window",      value: stage.wakeWindow },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Age selector */}
      <div
        className="rounded-3xl p-6 sm:p-8 mb-4"
        style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
      >
        <p
          className="text-xs font-semibold uppercase tracking-wider mb-3"
          style={{ color: "var(--accent-light)" }}
        >
          Select Baby&apos;s Age
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
          {BABY_STAGES.map((s) => (
            <button
              key={s.id}
              onClick={() => setSelectedId(s.id)}
              className="rounded-xl px-2 py-2 text-xs font-semibold transition-all"
              style={{
                background: selectedId === s.id ? "var(--accent)" : "var(--bg-card2)",
                color: selectedId === s.id ? "#fff" : "var(--text-muted)",
                border: selectedId === s.id ? "none" : "1px solid var(--border)",
              }}
            >
              <span className="block font-bold leading-tight">{s.label}</span>
              <span className="block opacity-70 text-[10px]">{s.range}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Results card */}
      <div
        className="rounded-3xl p-6 sm:p-8"
        style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
      >
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shrink-0"
            style={{ background: "rgba(108,99,255,0.15)" }}
          >
            👶
          </div>
          <div>
            <p className="font-extrabold text-lg" style={{ color: "var(--text-primary)" }}>
              {stage.label}
            </p>
            <p className="text-xs" style={{ color: "var(--text-muted)" }}>
              {stage.range}
            </p>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
          {stats.map((s) => (
            <div
              key={s.key}
              className="rounded-2xl p-4"
              style={{ background: "var(--bg-card2)", border: "1px solid var(--border)" }}
            >
              <p className="text-xs font-medium mb-1" style={{ color: "var(--text-muted)" }}>
                {STAT_ICONS[s.key]} {s.label}
              </p>
              <p className="font-extrabold text-base" style={{ color: "var(--text-primary)" }}>
                {s.value}
              </p>
            </div>
          ))}
        </div>

        {/* Tip */}
        <div
          className="rounded-2xl px-5 py-4 text-sm leading-relaxed"
          style={{ background: "rgba(108,99,255,0.08)", border: "1px solid rgba(108,99,255,0.2)" }}
        >
          <strong style={{ color: "var(--accent-light)" }}>💡 Tip: </strong>
          <span style={{ color: "var(--text-muted)" }}>{stage.tip}</span>
        </div>
      </div>
    </div>
  );
}
