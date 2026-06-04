"use client";
import { useState } from "react";
import { TimePicker } from "@/app/components/TimePicker";

// ── Data ──────────────────────────────────────────────────────────────────────
const AGE_GROUPS = [
  {
    id: "toddler",
    label: "Toddler",
    range: "1–2 years",
    minH: 11,
    maxH: 14,
    hasNap: true,
    napHours: 1.5,
    tip: "Toddlers thrive on consistency. A predictable nap + bedtime routine is more important than exact timing.",
  },
  {
    id: "preschool",
    label: "Preschool",
    range: "3–5 years",
    minH: 10,
    maxH: 13,
    hasNap: true,
    napHours: 1,
    tip: "Most preschoolers still benefit from a 1-hour nap. Watch for signs of nap readiness: rubbing eyes, clinginess.",
  },
  {
    id: "early-school",
    label: "Early School",
    range: "6–8 years",
    minH: 9,
    maxH: 12,
    hasNap: false,
    napHours: 0,
    tip: "School-age children often resist bedtime. A screen-free wind-down routine 30 minutes before bed helps.",
  },
  {
    id: "school-age",
    label: "School Age",
    range: "9–11 years",
    minH: 9,
    maxH: 11,
    hasNap: false,
    napHours: 0,
    tip: "At this age, sleep directly impacts school performance, attention, and emotional regulation.",
  },
  {
    id: "preteen",
    label: "Preteen",
    range: "12–13 years",
    minH: 8,
    maxH: 10,
    hasNap: false,
    napHours: 0,
    tip: "Preteens begin experiencing a circadian shift toward later sleep. Keep bedtime consistent even on weekends.",
  },
] as const;

type AgeId = typeof AGE_GROUPS[number]["id"];

// ── Helpers ───────────────────────────────────────────────────────────────────
function toMins(hour: number, minute: number, ampm: "AM" | "PM"): number {
  let h = hour;
  if (ampm === "AM" && h === 12) h = 0;
  if (ampm === "PM" && h !== 12) h += 12;
  return h * 60 + minute;
}

function minsToDisplay(totalMins: number): string {
  const m = ((totalMins % 1440) + 1440) % 1440;
  const h = Math.floor(m / 60);
  const min = m % 60;
  const ampm = h >= 12 ? "PM" : "AM";
  const displayH = h % 12 || 12;
  return `${displayH}:${String(min).padStart(2, "0")} ${ampm}`;
}

function bedtimeFromWake(wakeMins: number, sleepHours: number): string {
  const sleepMins = Math.round(sleepHours * 60);
  return minsToDisplay(wakeMins - sleepMins - 14);
}

function qualityLabel(
  hour: number
): { text: string; color: string; bg: string } {
  if (hour < 18.5) return { text: "Too early", color: "#a78bfa", bg: "rgba(167,139,250,0.12)" };
  if (hour <= 21)  return { text: "Ideal",     color: "#34d399", bg: "rgba(52,211,153,0.12)"  };
  return                   { text: "Too late",  color: "#f87171", bg: "rgba(248,113,113,0.12)" };
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function KidsSleepCalculator() {
  const [ageId,     setAgeId]     = useState<AgeId>("early-school");
  const [wakeHour,  setWakeHour]  = useState(7);
  const [wakeMin,   setWakeMin]   = useState(0);
  const [wakeAmpm,  setWakeAmpm]  = useState<"AM" | "PM">("AM");
  const [includeNap, setIncludeNap] = useState(false);
  const [result,    setResult]    = useState<{
    ideal: string;
    earliest: string;
    latest: string;
    idealHour: number;
    quality: { text: string; color: string; bg: string };
    tip: string;
    minH: number;
    maxH: number;
    effectiveMin: number;
    effectiveMax: number;
  } | null>(null);

  const group = AGE_GROUPS.find((g) => g.id === ageId)!;

  function calculate() {
    const wakeMins = toMins(wakeHour, wakeMin, wakeAmpm);
    const napH = group.hasNap && includeNap ? group.napHours : 0;

    const effectiveMin = group.minH - napH;
    const effectiveMax = group.maxH - napH;
    const midH = (effectiveMin + effectiveMax) / 2;

    const idealBedtimeMins = ((wakeMins - Math.round(midH * 60) - 14) + 1440 * 2) % 1440;
    const idealHourDecimal = idealBedtimeMins / 60;

    setResult({
      ideal: bedtimeFromWake(wakeMins, midH),
      earliest: bedtimeFromWake(wakeMins, effectiveMax),
      latest: bedtimeFromWake(wakeMins, effectiveMin),
      idealHour: idealHourDecimal,
      quality: qualityLabel(idealHourDecimal),
      tip: group.tip,
      minH: group.minH,
      maxH: group.maxH,
      effectiveMin,
      effectiveMax,
    });
  }

  return (
    <div
      className="rounded-3xl p-6 sm:p-8 w-full max-w-2xl mx-auto"
      style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
    >
      {/* Age selector */}
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--accent-light)" }}>
          Child&apos;s Age Group
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
          {AGE_GROUPS.map((g) => (
            <button
              key={g.id}
              onClick={() => { setAgeId(g.id); setIncludeNap(false); setResult(null); }}
              className="rounded-xl px-2 py-2 text-xs font-semibold transition-all"
              style={{
                background: ageId === g.id ? "var(--accent)" : "var(--bg-card2)",
                color: ageId === g.id ? "#fff" : "var(--text-muted)",
                border: ageId === g.id ? "none" : "1px solid var(--border)",
              }}
            >
              <span className="block font-bold leading-tight">{g.label}</span>
              <span className="block opacity-70 text-[10px]">{g.range}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Recommended hours chip */}
      <div
        className="rounded-xl px-4 py-3 mb-6 flex items-center gap-3 text-sm"
        style={{ background: "rgba(108,99,255,0.1)", border: "1px solid rgba(108,99,255,0.25)" }}
      >
        <span className="text-xl">💤</span>
        <span>
          <strong style={{ color: "var(--text-primary)" }}>{group.minH}–{group.maxH} hours</strong>
          <span style={{ color: "var(--text-muted)" }}> total recommended for {group.label} ({group.range})</span>
        </span>
      </div>

      {/* Wake-up time */}
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-wider mb-1 text-center" style={{ color: "var(--accent-light)" }}>
          Wake-Up / School Time
        </p>
        <p className="text-xs text-center mb-3" style={{ color: "var(--text-muted)" }}>
          What time does your child wake up or go to school?
        </p>
        <TimePicker
          hour={wakeHour} minute={wakeMin} ampm={wakeAmpm}
          onHour={setWakeHour} onMinute={setWakeMin} onAmpm={setWakeAmpm}
        />
      </div>

      {/* Nap toggle — only for Toddler and Preschool */}
      {group.hasNap && (
        <div className="mb-6 flex items-center justify-between rounded-2xl px-5 py-4"
          style={{ background: "var(--bg-card2)", border: "1px solid var(--border)" }}>
          <div>
            <p className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>Include daytime nap?</p>
            <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
              Nap reduces required night sleep (~{group.napHours === 1.5 ? "1.5 hrs" : "1 hr"})
            </p>
          </div>
          <div className="flex gap-2">
            {(["Yes", "No"] as const).map((v) => (
              <button
                key={v}
                onClick={() => { setIncludeNap(v === "Yes"); setResult(null); }}
                className="rounded-xl px-4 py-2 text-xs font-semibold transition-all"
                style={{
                  background: (v === "Yes") === includeNap ? "var(--accent)" : "var(--bg-primary)",
                  color: (v === "Yes") === includeNap ? "#fff" : "var(--text-muted)",
                  border: (v === "Yes") === includeNap ? "none" : "1px solid var(--border)",
                }}
              >
                {v}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Calculate */}
      <button
        onClick={calculate}
        className="w-full py-4 rounded-2xl font-bold text-base transition-all hover:opacity-90 active:scale-[0.98]"
        style={{ background: "var(--accent)", color: "#fff" }}
      >
        Calculate Bedtime →
      </button>

      {/* Results */}
      {result && (
        <div className="mt-8 space-y-4">
          {/* Ideal bedtime + quality */}
          <div
            className="rounded-2xl p-6 text-center"
            style={{ background: result.quality.bg, border: `1.5px solid ${result.quality.color}44` }}
          >
            <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--text-muted)" }}>
              Ideal Bedtime
            </p>
            <p className="text-4xl font-extrabold mb-3" style={{ color: "var(--text-primary)" }}>
              {result.ideal}
            </p>
            <span
              className="inline-block text-sm font-bold px-4 py-1.5 rounded-full"
              style={{ background: result.quality.bg, color: result.quality.color, border: `1px solid ${result.quality.color}55` }}
            >
              {result.quality.text}
            </span>
            {includeNap && group.hasNap && (
              <p className="text-xs mt-3" style={{ color: "var(--text-muted)" }}>
                Night sleep target with nap: {result.effectiveMin.toFixed(1)}–{result.effectiveMax.toFixed(1)} hrs
              </p>
            )}
          </div>

          {/* Earliest / Latest */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl p-5 text-center"
              style={{ background: "var(--bg-card2)", border: "1px solid var(--border)" }}>
              <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--text-muted)" }}>
                Earliest Acceptable
              </p>
              <p className="text-2xl font-extrabold" style={{ color: "var(--text-primary)" }}>{result.earliest}</p>
              <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>{result.effectiveMax} hrs sleep</p>
            </div>
            <div className="rounded-2xl p-5 text-center"
              style={{ background: "var(--bg-card2)", border: "1px solid var(--border)" }}>
              <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--text-muted)" }}>
                Latest Acceptable
              </p>
              <p className="text-2xl font-extrabold" style={{ color: "var(--text-primary)" }}>{result.latest}</p>
              <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>{result.effectiveMin} hrs sleep</p>
            </div>
          </div>

          {/* Tip */}
          <div
            className="rounded-2xl px-5 py-4 text-sm leading-relaxed"
            style={{ background: "rgba(108,99,255,0.08)", border: "1px solid rgba(108,99,255,0.2)" }}
          >
            <strong style={{ color: "var(--accent-light)" }}>💡 Tip: </strong>
            <span style={{ color: "var(--text-muted)" }}>{result.tip}</span>
          </div>

          <p className="text-xs text-center" style={{ color: "var(--text-muted)" }}>
            Includes a 14-minute fall-asleep buffer. Ideal bedtime uses midpoint of recommended sleep range.
          </p>
        </div>
      )}
    </div>
  );
}
