"use client";
import { useState, useRef } from "react";

// ─── Types ───────────────────────────────────────────────────────────────────
interface NapOption {
  label: string;
  duration: number; // minutes
  description: string;
  benefit: string;
  stages: string;
  color: string;
  bg: string;
  badge: string;
  recommended?: boolean;
}

interface NapResult extends NapOption {
  wakeTime: string;
}

// ─── Nap Types ───────────────────────────────────────────────────────────────
const NAP_OPTIONS: NapOption[] = [
  {
    label: "Micro Nap",
    duration: 10,
    description: "10 minutes",
    benefit: "Quick alertness boost, reduces fatigue",
    stages: "Stage 1 (N1) only",
    color: "#22d3a0",
    bg: "rgba(34,211,160,0.1)",
    badge: "Fastest",
  },
  {
    label: "Power Nap",
    duration: 20,
    description: "20 minutes",
    benefit: "Improved motor skills, mood, and memory",
    stages: "Stage 1–2 (N1–N2)",
    color: "#6c63ff",
    bg: "rgba(108,99,255,0.12)",
    badge: "Most Popular",
    recommended: true,
  },
  {
    label: "Short Nap",
    duration: 30,
    description: "30 minutes",
    benefit: "Better creativity and working memory",
    stages: "Stage 1–2 (N1–N2)",
    color: "#a78bfa",
    bg: "rgba(167,139,250,0.1)",
    badge: "Refreshing",
  },
  {
    label: "Full Cycle Nap",
    duration: 90,
    description: "90 minutes",
    benefit: "Complete sleep cycle — includes REM",
    stages: "N1 → N2 → N3 → REM",
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.1)",
    badge: "Deep Rest",
  },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────
function formatTime(date: Date): string {
  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}

function addMinutes(date: Date, mins: number): Date {
  return new Date(date.getTime() + mins * 60000);
}

function parseTimeString(h: number, m: number, ampm: "AM" | "PM"): Date {
  let hour = h;
  if (ampm === "AM" && hour === 12) hour = 0;
  if (ampm === "PM" && hour !== 12) hour += 12;
  const d = new Date();
  d.setHours(hour, m, 0, 0);
  return d;
}

function isGoodNapWindow(date: Date): { ok: boolean; warning?: string } {
  const h = date.getHours();
  if (h >= 14 && h <= 16) return { ok: true };
  if (h >= 16 && h < 18)
    return { ok: true, warning: "Late afternoon nap may affect tonight's sleep." };
  if (h >= 18)
    return {
      ok: false,
      warning: "Napping after 6 PM can disrupt nighttime sleep. Consider a full night's sleep instead.",
    };
  if (h < 10)
    return {
      ok: true,
      warning: "Morning naps tend to be lighter (more REM). Best nap window is 1–3 PM.",
    };
  return { ok: true };
}

// ─── Segment Picker (reusable) ────────────────────────────────────────────────
function Segment({
  value,
  min,
  max,
  onChange,
  pad = 2,
}: {
  value: number;
  min: number;
  max: number;
  onChange: (v: number) => void;
  pad?: number;
}) {
  const ref = useRef<HTMLInputElement>(null);

  function clamp(v: number) {
    if (v < min) return max;
    if (v > max) return min;
    return v;
  }

  function handleKey(e: React.KeyboardEvent) {
    if (e.key === "ArrowUp") { e.preventDefault(); onChange(clamp(value + 1)); }
    if (e.key === "ArrowDown") { e.preventDefault(); onChange(clamp(value - 1)); }
  }

  function handleWheel(e: React.WheelEvent) {
    e.preventDefault();
    onChange(clamp(value + (e.deltaY < 0 ? 1 : -1)));
  }

  return (
    <input
      ref={ref}
      type="text"
      inputMode="numeric"
      value={String(value).padStart(pad, "0")}
      readOnly
      onKeyDown={handleKey}
      onWheel={handleWheel}
      style={{
        width: "2.8rem",
        textAlign: "center",
        background: "var(--bg-primary)",
        border: "2px solid var(--border)",
        borderRadius: "0.5rem",
        color: "var(--text-primary)",
        fontSize: "1.5rem",
        fontWeight: 700,
        padding: "0.4rem 0",
        outline: "none",
        cursor: "ns-resize",
        userSelect: "none",
      }}
      onFocus={(e) =>
        (e.currentTarget.style.borderColor = "var(--accent)")
      }
      onBlur={(e) =>
        (e.currentTarget.style.borderColor = "var(--border)")
      }
    />
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function NapCalculator() {
  const now = new Date();
  const nowH = now.getHours();
  const nowM = now.getMinutes();
  const initAmpm: "AM" | "PM" = nowH >= 12 ? "PM" : "AM";
  const initH = nowH > 12 ? nowH - 12 : nowH === 0 ? 12 : nowH;

  const [hour, setHour] = useState(initH);
  const [minute, setMinute] = useState(nowM);
  const [ampm, setAmpm] = useState<"AM" | "PM">(initAmpm);
  const [useNow, setUseNow] = useState(true);
  const [results, setResults] = useState<NapResult[]>([]);
  const [calculated, setCalculated] = useState(false);

  function calculate() {
    const startTime = useNow ? new Date() : parseTimeString(hour, minute, ampm);
    const napResults: NapResult[] = NAP_OPTIONS.map((opt) => ({
      ...opt,
      wakeTime: formatTime(addMinutes(startTime, opt.duration)),
    }));
    setResults(napResults);
    setCalculated(true);
  }

  function handleUseNow() {
    const n = new Date();
    const h = n.getHours();
    const m = n.getMinutes();
    setHour(h > 12 ? h - 12 : h === 0 ? 12 : h);
    setMinute(m);
    setAmpm(h >= 12 ? "PM" : "AM");
    setUseNow(true);
    setCalculated(false);
  }

  const startTime = useNow ? new Date() : parseTimeString(hour, minute, ampm);
  const napWindow = isGoodNapWindow(startTime);

  return (
    <div
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        borderRadius: "1.25rem",
        padding: "2rem",
        maxWidth: "640px",
        margin: "0 auto",
      }}
    >
      <h2
        style={{
          fontSize: "1.4rem",
          fontWeight: 700,
          color: "var(--text-primary)",
          marginBottom: "0.4rem",
        }}
      >
        When do you want to nap?
      </h2>
      <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem", fontSize: "0.95rem" }}>
        Enter your nap start time to see ideal wake-up times.
      </p>

      {/* Time Mode Toggle */}
      <div style={{ display: "flex", gap: "0.75rem", marginBottom: "1.25rem" }}>
        <button
          onClick={handleUseNow}
          style={{
            padding: "0.5rem 1.25rem",
            borderRadius: "2rem",
            border: "2px solid",
            borderColor: useNow ? "var(--accent)" : "var(--border)",
            background: useNow ? "var(--accent)" : "transparent",
            color: useNow ? "#fff" : "var(--text-muted)",
            fontWeight: 600,
            cursor: "pointer",
            fontSize: "0.9rem",
            transition: "all 0.2s",
          }}
        >
          Nap Now
        </button>
        <button
          onClick={() => { setUseNow(false); setCalculated(false); }}
          style={{
            padding: "0.5rem 1.25rem",
            borderRadius: "2rem",
            border: "2px solid",
            borderColor: !useNow ? "var(--accent)" : "var(--border)",
            background: !useNow ? "var(--accent)" : "transparent",
            color: !useNow ? "#fff" : "var(--text-muted)",
            fontWeight: 600,
            cursor: "pointer",
            fontSize: "0.9rem",
            transition: "all 0.2s",
          }}
        >
          Pick a Time
        </button>
      </div>

      {/* Time Picker */}
      {!useNow && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            marginBottom: "1.25rem",
            flexWrap: "wrap",
          }}
        >
          <Segment value={hour} min={1} max={12} onChange={(v) => { setHour(v); setCalculated(false); }} />
          <span style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-muted)" }}>:</span>
          <Segment value={minute} min={0} max={59} onChange={(v) => { setMinute(v); setCalculated(false); }} />
          <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
            {(["AM", "PM"] as const).map((p) => (
              <button
                key={p}
                onClick={() => { setAmpm(p); setCalculated(false); }}
                style={{
                  padding: "0.25rem 0.7rem",
                  borderRadius: "0.4rem",
                  border: "2px solid",
                  borderColor: ampm === p ? "var(--accent)" : "var(--border)",
                  background: ampm === p ? "var(--accent)" : "transparent",
                  color: ampm === p ? "#fff" : "var(--text-muted)",
                  fontWeight: 700,
                  cursor: "pointer",
                  fontSize: "0.85rem",
                }}
              >
                {p}
              </button>
            ))}
          </div>
          <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
            (↑↓ arrows or scroll)
          </span>
        </div>
      )}

      {/* Nap window warning */}
      {!napWindow.ok || napWindow.warning ? (
        <div
          style={{
            background: napWindow.ok ? "rgba(245,158,11,0.1)" : "rgba(248,113,113,0.1)",
            border: `1px solid ${napWindow.ok ? "rgba(245,158,11,0.3)" : "rgba(248,113,113,0.3)"}`,
            borderRadius: "0.75rem",
            padding: "0.75rem 1rem",
            marginBottom: "1.25rem",
            color: napWindow.ok ? "#f59e0b" : "#f87171",
            fontSize: "0.9rem",
          }}
        >
          ⚠️ {napWindow.warning}
        </div>
      ) : null}

      {/* Calculate Button */}
      <button
        onClick={calculate}
        style={{
          width: "100%",
          padding: "0.85rem",
          borderRadius: "0.75rem",
          border: "none",
          background: "var(--accent)",
          color: "#fff",
          fontSize: "1.05rem",
          fontWeight: 700,
          cursor: "pointer",
          marginBottom: "1.5rem",
          transition: "opacity 0.2s",
        }}
        onMouseOver={(e) => (e.currentTarget.style.opacity = "0.9")}
        onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
      >
        Calculate Nap Times
      </button>

      {/* Results */}
      {calculated && results.length > 0 && (
        <div>
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "1rem" }}>
            Starting nap at <strong style={{ color: "var(--text-primary)" }}>{formatTime(startTime)}</strong>, set your alarm for:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {results.map((r) => (
              <div
                key={r.label}
                style={{
                  background: r.bg,
                  border: `1.5px solid ${r.recommended ? r.color : "var(--border)"}`,
                  borderRadius: "1rem",
                  padding: "1rem 1.25rem",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                  position: "relative",
                }}
              >
                {r.recommended && (
                  <span
                    style={{
                      position: "absolute",
                      top: "-0.6rem",
                      left: "1rem",
                      background: r.color,
                      color: "#fff",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      padding: "0.15rem 0.6rem",
                      borderRadius: "1rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    ⭐ Recommended
                  </span>
                )}
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      marginBottom: "0.2rem",
                    }}
                  >
                    <span
                      style={{ fontWeight: 700, fontSize: "1.05rem", color: "var(--text-primary)" }}
                    >
                      {r.label}
                    </span>
                    <span
                      style={{
                        background: r.color + "22",
                        color: r.color,
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        padding: "0.1rem 0.5rem",
                        borderRadius: "1rem",
                      }}
                    >
                      {r.badge}
                    </span>
                  </div>
                  <div style={{ color: "var(--text-muted)", fontSize: "0.82rem" }}>
                    {r.description} · {r.stages}
                  </div>
                  <div style={{ color: "var(--text-muted)", fontSize: "0.82rem", marginTop: "0.1rem" }}>
                    ✓ {r.benefit}
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "1.6rem",
                    fontWeight: 800,
                    color: r.color,
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {r.wakeTime}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: "1.25rem",
              padding: "0.75rem 1rem",
              background: "rgba(108,99,255,0.07)",
              border: "1px solid rgba(108,99,255,0.2)",
              borderRadius: "0.75rem",
              color: "var(--text-muted)",
              fontSize: "0.85rem",
            }}
          >
            💡 <strong>Tip:</strong> Avoid napping after 3 PM to protect your nighttime sleep. The power nap (20 min) gives the best alertness boost without sleep inertia.
          </div>
        </div>
      )}
    </div>
  );
}
