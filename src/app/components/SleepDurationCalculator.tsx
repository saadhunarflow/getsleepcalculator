"use client";
import { useState } from "react";
import { TimePicker } from "./TimePicker";

// ── Helpers ───────────────────────────────────────────────────────────────────
function toTotalMinutes(hour: number, minute: number, ampm: "AM" | "PM"): number {
  let h = hour;
  if (ampm === "AM" && h === 12) h = 0;
  if (ampm === "PM" && h !== 12) h += 12;
  return h * 60 + minute;
}

function formatDuration(totalMinutes: number): string {
  const h = Math.floor(totalMinutes / 60);
  const m = totalMinutes % 60;
  if (m === 0) return `${h} hour${h !== 1 ? "s" : ""}`;
  return `${h} hour${h !== 1 ? "s" : ""} ${m} minute${m !== 1 ? "s" : ""}`;
}

type QualityLabel = {
  text: string;
  color: string;
  bg: string;
};

function sleepQuality(totalMinutes: number): QualityLabel {
  const h = totalMinutes / 60;
  if (h < 5)   return { text: "Insufficient — significantly below recommended", color: "#f87171", bg: "rgba(248,113,113,0.12)" };
  if (h < 6)   return { text: "Below recommended",                              color: "#fb923c", bg: "rgba(251,146,60,0.12)"  };
  if (h < 7)   return { text: "Fair — slightly below recommended",              color: "#fbbf24", bg: "rgba(251,191,36,0.12)"  };
  if (h <= 9)  return { text: "Recommended — well rested",                      color: "#34d399", bg: "rgba(52,211,153,0.12)"  };
  return              { text: "Above average — may indicate oversleeping",       color: "#a78bfa", bg: "rgba(167,139,250,0.12)" };
}

function cycleStatus(remainderMins: number): string {
  if (remainderMins < 20) return "You woke near the end of a cycle — good timing.";
  if (remainderMins <= 70) return "You woke mid-cycle. This may explain any grogginess you feel.";
  return "You woke near the start of a new cycle.";
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function SleepDurationCalculator() {
  const [bedHour,   setBedHour]   = useState(10);
  const [bedMin,    setBedMin]    = useState(30);
  const [bedAmpm,   setBedAmpm]   = useState<"AM"|"PM">("PM");
  const [wakeHour,  setWakeHour]  = useState(6);
  const [wakeMin,   setWakeMin]   = useState(30);
  const [wakeAmpm,  setWakeAmpm]  = useState<"AM"|"PM">("AM");

  type Result = {
    totalMins: number;
    cycles: number;
    remainder: number;
    quality: QualityLabel;
    cycleMsg: string;
  } | { error: string } | null;

  const [result, setResult] = useState<Result>(null);

  function calculate() {
    const bedTotalMins  = toTotalMinutes(bedHour,  bedMin,  bedAmpm);
    const wakeTotalMins = toTotalMinutes(wakeHour, wakeMin, wakeAmpm);

    if (bedTotalMins === wakeTotalMins) {
      setResult({ error: "Please enter different times." });
      return;
    }

    // Handle overnight: if wake <= bed, add 24h to wake
    let durationMins = wakeTotalMins - bedTotalMins;
    if (durationMins <= 0) durationMins += 1440;

    if (durationMins > 14 * 60) {
      setResult({ error: "This seems unusually long. Please check your inputs." });
      return;
    }

    const cycles    = Math.floor(durationMins / 90);
    const remainder = durationMins % 90;
    setResult({
      totalMins: durationMins,
      cycles,
      remainder,
      quality:   sleepQuality(durationMins),
      cycleMsg:  cycleStatus(remainder),
    });
  }

  return (
    <div
      className="rounded-3xl p-6 sm:p-8 w-full max-w-2xl mx-auto"
      style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
    >
      {/* Inputs */}
      <div className="grid sm:grid-cols-2 gap-8 mb-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider mb-3 text-center" style={{ color: "var(--accent-light)" }}>
            🌙 Bedtime
          </p>
          <TimePicker
            hour={bedHour} minute={bedMin} ampm={bedAmpm}
            onHour={setBedHour} onMinute={setBedMin} onAmpm={setBedAmpm}
          />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider mb-3 text-center" style={{ color: "var(--accent-light)" }}>
            ☀️ Wake-Up Time
          </p>
          <TimePicker
            hour={wakeHour} minute={wakeMin} ampm={wakeAmpm}
            onHour={setWakeHour} onMinute={setWakeMin} onAmpm={setWakeAmpm}
          />
        </div>
      </div>

      <button
        onClick={calculate}
        className="w-full py-4 rounded-2xl font-bold text-base transition-all hover:opacity-90 active:scale-[0.98]"
        style={{ background: "var(--accent)", color: "#fff" }}
      >
        Calculate Sleep Duration →
      </button>

      {/* Result */}
      {result && (
        "error" in result ? (
          <div className="mt-6 rounded-2xl px-5 py-4 text-sm text-center font-semibold"
            style={{ background: "rgba(248,113,113,0.1)", border: "1px solid rgba(248,113,113,0.3)", color: "#f87171" }}>
            ⚠️ {result.error}
          </div>
        ) : (
          <div className="mt-8 space-y-4">
            {/* Duration + quality badge */}
            <div
              className="rounded-2xl p-6 text-center"
              style={{ background: result.quality.bg, border: `1.5px solid ${result.quality.color}44` }}
            >
              <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--text-muted)" }}>
                Total Sleep Duration
              </p>
              <p className="text-4xl font-extrabold mb-3" style={{ color: "var(--text-primary)" }}>
                {formatDuration(result.totalMins)}
              </p>
              <span
                className="inline-block text-sm font-bold px-4 py-1.5 rounded-full"
                style={{ background: result.quality.bg, color: result.quality.color, border: `1px solid ${result.quality.color}55` }}
              >
                {result.quality.text}
              </span>
            </div>

            {/* Cycles + cycle status */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div
                className="rounded-2xl p-5 text-center"
                style={{ background: "var(--bg-card2)", border: "1px solid var(--border)" }}
              >
                <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--text-muted)" }}>
                  Complete Sleep Cycles
                </p>
                <p className="text-4xl font-extrabold mb-1" style={{ color: "var(--accent-light)" }}>
                  {result.cycles}
                </p>
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>× 90 minutes each</p>
              </div>
              <div
                className="rounded-2xl p-5 text-center"
                style={{ background: "var(--bg-card2)", border: "1px solid var(--border)" }}
              >
                <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--text-muted)" }}>
                  Remaining After Last Cycle
                </p>
                <p className="text-4xl font-extrabold mb-1" style={{ color: "var(--text-primary)" }}>
                  {result.remainder}
                  <span className="text-lg font-semibold ml-1">min</span>
                </p>
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>of 90 min next cycle</p>
              </div>
            </div>

            {/* Cycle message */}
            <div
              className="rounded-2xl px-5 py-4 text-sm leading-relaxed"
              style={{ background: "rgba(108,99,255,0.08)", border: "1px solid rgba(108,99,255,0.2)" }}
            >
              <strong style={{ color: "var(--accent-light)" }}>💤 Cycle timing: </strong>
              <span style={{ color: "var(--text-muted)" }}>{result.cycleMsg}</span>
            </div>
          </div>
        )
      )}
    </div>
  );
}
