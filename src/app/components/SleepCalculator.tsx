"use client";
import { useState, useEffect, useCallback } from "react";

// ─── Constants ───────────────────────────────────────────────────────────────
const CYCLE_MINUTES = 90;
const ONSET_MINUTES = 14;

// ─── Types ───────────────────────────────────────────────────────────────────
interface CycleResult {
  time: string;
  cycles: number;
  totalHours: number;
  quality: "poor" | "fair" | "good" | "great" | "perfect";
  label: string;
  recommended: boolean;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────
function formatTime(date: Date): string {
  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}

function getQuality(cycles: number): CycleResult["quality"] {
  if (cycles <= 1) return "poor";
  if (cycles <= 3) return "fair";
  if (cycles === 4) return "good";
  if (cycles === 5) return "great";
  return "perfect";
}

function getQualityLabel(cycles: number): string {
  if (cycles <= 1) return "Very Short";
  if (cycles === 2) return "Short";
  if (cycles === 3) return "Fair";
  if (cycles === 4) return "Good";
  if (cycles === 5) return "Recommended ⭐";
  return "Optimal ⭐";
}

function qualityColor(q: CycleResult["quality"]): string {
  return { poor: "#f87171", fair: "#fbbf24", good: "#34d399", great: "#22d3a0", perfect: "#a78bfa" }[q];
}

function qualityBg(q: CycleResult["quality"]): string {
  return { poor: "rgba(248,113,113,0.12)", fair: "rgba(251,191,36,0.12)", good: "rgba(52,211,153,0.12)", great: "rgba(34,211,160,0.12)", perfect: "rgba(167,139,250,0.12)" }[q];
}

// Convert 12h picker state → "HH:MM" 24h string
function to24h(hour: number, minute: number, ampm: "AM" | "PM"): string {
  let h = hour;
  if (ampm === "AM" && h === 12) h = 0;
  if (ampm === "PM" && h !== 12) h += 12;
  return `${String(h).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
}

function calcWakeUpTimes(str: string): CycleResult[] {
  const [h, m] = str.split(":").map(Number);
  const base = new Date();
  base.setHours(h, m, 0, 0);
  const asleepAt = new Date(base.getTime() + ONSET_MINUTES * 60000);
  return [6, 5, 4, 3, 2, 1].map((cycles) => {
    const wake = new Date(asleepAt.getTime() + cycles * CYCLE_MINUTES * 60000);
    return { time: formatTime(wake), cycles, totalHours: (cycles * CYCLE_MINUTES) / 60, quality: getQuality(cycles), label: getQualityLabel(cycles), recommended: cycles === 5 || cycles === 6 };
  });
}

function calcBedtimes(str: string): CycleResult[] {
  const [h, m] = str.split(":").map(Number);
  const base = new Date();
  base.setHours(h, m, 0, 0);
  return [6, 5, 4, 3, 2, 1].map((cycles) => {
    const bed = new Date(base.getTime() - cycles * CYCLE_MINUTES * 60000 - ONSET_MINUTES * 60000);
    return { time: formatTime(bed), cycles, totalHours: (cycles * CYCLE_MINUTES) / 60, quality: getQuality(cycles), label: getQualityLabel(cycles), recommended: cycles === 5 || cycles === 6 };
  });
}

// ─── Custom Time Picker ──────────────────────────────────────────────────────
interface TimePickerProps {
  hour: number;
  minute: number;
  ampm: "AM" | "PM";
  onHour: (v: number) => void;
  onMinute: (v: number) => void;
  onAmpm: (v: "AM" | "PM") => void;
}

interface SegmentProps {
  value: string;
  label: string;
  min: number;
  max: number;
  onUp: () => void;
  onDown: () => void;
  onCommit: (v: number) => void;
}

function Segment({ value, label, min, max, onUp, onDown, onCommit }: SegmentProps) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(value);

  // Keep draft in sync when not editing
  useEffect(() => {
    if (!editing) setDraft(value);
  }, [value, editing]);

  function commit(raw: string) {
    const n = parseInt(raw, 10);
    if (!isNaN(n) && n >= min && n <= max) {
      onCommit(n);
    }
    setEditing(false);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") { commit(draft); return; }
    if (e.key === "Escape") { setEditing(false); return; }
    if (e.key === "ArrowUp") { e.preventDefault(); onUp(); return; }
    if (e.key === "ArrowDown") { e.preventDefault(); onDown(); return; }
  }

  // Scroll wheel support
  function handleWheel(e: React.WheelEvent) {
    e.preventDefault();
    e.deltaY < 0 ? onUp() : onDown();
  }

  return (
    <div className="flex flex-col items-center select-none">
      {/* Up arrow */}
      <button
        onClick={onUp}
        className="w-12 h-8 flex items-center justify-center rounded-lg transition-all hover:scale-110 active:scale-95"
        style={{ color: "var(--accent-light)", background: "var(--bg-card2)" }}
        aria-label={`Increase ${label}`}
        tabIndex={-1}
      >
        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path d="M18 15l-6-6-6 6" />
        </svg>
      </button>

      {/* Value display / editable input */}
      <div className="my-1" onWheel={handleWheel}>
        {editing ? (
          <input
            type="number"
            value={draft}
            min={min}
            max={max}
            autoFocus
            onChange={(e) => setDraft(e.target.value)}
            onBlur={() => commit(draft)}
            onKeyDown={handleKeyDown}
            className="w-16 h-16 rounded-2xl text-3xl font-extrabold text-center outline-none"
            style={{
              background: "var(--bg-primary)",
              border: "2px solid var(--accent-light)",
              color: "var(--text-primary)",
              boxShadow: "0 0 0 3px var(--accent-glow)",
              /* hide number spinners */
              MozAppearance: "textfield",
            } as React.CSSProperties}
          />
        ) : (
          <button
            onClick={() => { setDraft(value); setEditing(true); }}
            title={`Click to type ${label}`}
            className="w-16 h-16 flex items-center justify-center rounded-2xl text-3xl font-extrabold transition-all hover:border-(--accent-light) hover:scale-105 active:scale-95 cursor-text"
            style={{
              background: "var(--bg-primary)",
              border: "2px solid var(--accent)",
              color: "var(--text-primary)",
            }}
          >
            {value}
          </button>
        )}
      </div>

      {/* Down arrow */}
      <button
        onClick={onDown}
        className="w-12 h-8 flex items-center justify-center rounded-lg transition-all hover:scale-110 active:scale-95"
        style={{ color: "var(--accent-light)", background: "var(--bg-card2)" }}
        aria-label={`Decrease ${label}`}
        tabIndex={-1}
      >
        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      <span className="text-xs mt-1 font-medium" style={{ color: "var(--text-muted)" }}>{label}</span>
    </div>
  );
}

function TimePicker({ hour, minute, ampm, onHour, onMinute, onAmpm }: TimePickerProps) {
  return (
    <div className="flex items-center gap-2 justify-center">
      <Segment
        value={String(hour).padStart(2, "0")}
        label="HOUR"
        min={1} max={12}
        onUp={() => onHour(hour === 12 ? 1 : hour + 1)}
        onDown={() => onHour(hour === 1 ? 12 : hour - 1)}
        onCommit={onHour}
      />
      <span className="text-4xl font-extrabold pb-6" style={{ color: "var(--accent-light)" }}>:</span>
      <Segment
        value={String(minute).padStart(2, "0")}
        label="MIN"
        min={0} max={59}
        onUp={() => onMinute(minute === 59 ? 0 : minute + 1)}
        onDown={() => onMinute(minute === 0 ? 59 : minute - 1)}
        onCommit={onMinute}
      />
      <div className="flex flex-col gap-2 ml-2 mb-4">
        {(["AM", "PM"] as const).map((v) => (
          <button
            key={v}
            onClick={() => onAmpm(v)}
            className="w-14 h-8 rounded-xl text-sm font-bold transition-all duration-150"
            style={{
              background: ampm === v ? "var(--accent)" : "var(--bg-card2)",
              color: ampm === v ? "#fff" : "var(--text-muted)",
              border: ampm === v ? "none" : "1px solid var(--border)",
              boxShadow: ampm === v ? "0 2px 12px var(--accent-glow)" : "none",
            }}
          >
            {v}
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────
type TabType = "bedtime" | "wakeup" | "now";

export default function SleepCalculator({ defaultTab = "wakeup" }: { defaultTab?: TabType }) {
  const [tab, setTab] = useState<TabType>(defaultTab);
  const [hour, setHour] = useState(7);
  const [minute, setMinute] = useState(0);
  const [ampm, setAmpm] = useState<"AM" | "PM">("AM");
  const [results, setResults] = useState<CycleResult[]>([]);
  const [calculated, setCalculated] = useState(false);

  // Set current time on mount
  useEffect(() => {
    const now = new Date();
    let h = now.getHours();
    const m = now.getMinutes();
    const ap: "AM" | "PM" = h >= 12 ? "PM" : "AM";
    h = h % 12 || 12;
    setHour(h);
    setMinute(m);
    setAmpm(ap);
  }, []);

  const calculate = useCallback(() => {
    const str = to24h(hour, minute, ampm);
    const res = tab === "wakeup" ? calcBedtimes(str) : tab === "bedtime" ? calcWakeUpTimes(str) : calcWakeUpTimes(to24h(new Date().getHours() % 12 || 12, new Date().getMinutes(), new Date().getHours() >= 12 ? "PM" : "AM"));
    setResults(res);
    setCalculated(true);
  }, [tab, hour, minute, ampm]);

  useEffect(() => {
    setCalculated(false);
    setResults([]);
  }, [tab]);

  const tabs = [
    { id: "wakeup" as TabType, icon: "⏰", title: "Wake up at...", desc: "When do you need to wake up?" },
    { id: "bedtime" as TabType, icon: "🛏️", title: "Go to bed at...", desc: "When are you going to sleep?" },
    { id: "now" as TabType, icon: "💤", title: "Sleep Now", desc: "Calculate from this moment" },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Tabs */}
      <div className="flex rounded-2xl p-1 mb-8 gap-1" style={{ background: "var(--bg-card2)" }}>
        {tabs.map((t) => {
          const active = tab === t.id;
          return (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className="flex-1 flex flex-col items-center py-3 px-2 rounded-xl text-center transition-all duration-200"
              style={{
                background: active ? "var(--accent)" : "transparent",
                color: active ? "#fff" : "var(--text-muted)",
                transform: active ? "scale(1.02)" : "scale(1)",
                boxShadow: active ? "0 4px 20px var(--accent-glow)" : "none",
              }}
            >
              <span className="text-xl mb-1">{t.icon}</span>
              <span className="text-xs font-semibold leading-tight">{t.title}</span>
            </button>
          );
        })}
      </div>

      {/* Input Card */}
      <div className="rounded-2xl p-6 sm:p-8 mb-6" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
        <p className="text-sm mb-6 text-center" style={{ color: "var(--text-muted)" }}>
          {tabs.find((t) => t.id === tab)?.desc}
        </p>

        {tab !== "now" ? (
          <div className="flex flex-col items-center gap-6">
            <TimePicker hour={hour} minute={minute} ampm={ampm} onHour={setHour} onMinute={setMinute} onAmpm={setAmpm} />
            <button
              onClick={calculate}
              className="w-full sm:w-auto px-12 py-4 rounded-xl font-bold text-base transition-all duration-200 hover:opacity-90 active:scale-95"
              style={{ background: "linear-gradient(135deg, var(--accent), #a78bfa)", color: "#fff", boxShadow: "0 4px 24px var(--accent-glow)" }}
            >
              Calculate →
            </button>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-4xl font-bold mb-2" style={{ color: "var(--accent-light)" }}>
              <CurrentTime />
            </p>
            <p className="text-sm mb-6" style={{ color: "var(--text-muted)" }}>
              If you fall asleep right now...
            </p>
            <button
              onClick={calculate}
              className="px-10 py-4 rounded-xl font-bold text-base transition-all duration-200 hover:opacity-90 active:scale-95 glow-btn"
              style={{ background: "linear-gradient(135deg, var(--accent), #a78bfa)", color: "#fff" }}
            >
              💤 Calculate Sleep Times
            </button>
          </div>
        )}
      </div>

      {/* Results */}
      {calculated && results.length > 0 && (
        <div className="animate-fade-in-up">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1" style={{ background: "var(--border)" }} />
            <p className="text-sm font-semibold px-3" style={{ color: "var(--text-muted)" }}>
              {tab === "wakeup" ? "🌙 Best times to go to sleep" : "☀️ You should wake up at"}
            </p>
            <div className="h-px flex-1" style={{ background: "var(--border)" }} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {results.map((r) => (
              <div
                key={r.cycles}
                className="rounded-xl px-5 py-4 flex items-center justify-between transition-all duration-200 hover:scale-[1.02]"
                style={{
                  background: r.recommended ? "linear-gradient(135deg, rgba(108,99,255,0.2), rgba(167,139,250,0.1))" : qualityBg(r.quality),
                  border: `1px solid ${r.recommended ? "var(--accent)" : "var(--border)"}`,
                  boxShadow: r.recommended ? "0 4px 20px var(--accent-glow)" : "none",
                }}
              >
                <div>
                  <p className="text-2xl font-bold" style={{ color: r.recommended ? "var(--accent-light)" : "var(--text-primary)" }}>
                    {r.time}
                  </p>
                  <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
                    {r.cycles} cycle{r.cycles > 1 ? "s" : ""} · {r.totalHours}h sleep
                  </p>
                </div>
                <span className="text-xs font-semibold px-2 py-1 rounded-full" style={{ background: qualityBg(r.quality), color: qualityColor(r.quality) }}>
                  {r.label}
                </span>
              </div>
            ))}
          </div>

          <p className="text-xs text-center mt-5 leading-relaxed" style={{ color: "var(--text-muted)" }}>
            ⏱ Includes ~{ONSET_MINUTES} min average time to fall asleep. Based on 90-min natural sleep cycles.
          </p>
        </div>
      )}
    </div>
  );
}

// Live clock
function CurrentTime() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const update = () => setTime(new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true }));
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);
  return <>{time}</>;
}

