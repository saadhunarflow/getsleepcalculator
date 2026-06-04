"use client";
import { useState } from "react";
import { TimePicker } from "./TimePicker";

// ── Age group data (NSF / CDC) ────────────────────────────────────────────────
const AGE_GROUPS = [
  { id: "newborn",    label: "Newborn",     range: "0–3 months",  min: 14, max: 17 },
  { id: "infant",     label: "Infant",      range: "4–11 months", min: 12, max: 15 },
  { id: "toddler",    label: "Toddler",     range: "1–2 years",   min: 11, max: 14 },
  { id: "preschool",  label: "Preschool",   range: "3–5 years",   min: 10, max: 13 },
  { id: "school",     label: "School Age",  range: "6–12 years",  min:  9, max: 11 },
  { id: "teen",       label: "Teen",        range: "13–17 years", min:  8, max: 10 },
  { id: "youngAdult", label: "Young Adult", range: "18–25 years", min:  7, max:  9 },
  { id: "adult",      label: "Adult",       range: "26–64 years", min:  7, max:  9 },
  { id: "older",      label: "Older Adult", range: "65+ years",   min:  7, max:  8 },
] as const;

const GENDERS = ["Male", "Female", "Prefer not to say"] as const;
type Gender = typeof GENDERS[number];

// ── Helpers ───────────────────────────────────────────────────────────────────
function wakeToMinutes(hour: number, minute: number, ampm: "AM" | "PM"): number {
  let h = hour;
  if (ampm === "AM" && h === 12) h = 0;
  if (ampm === "PM" && h !== 12) h += 12;
  return h * 60 + minute;
}

function minutesToDisplay(totalMins: number): string {
  const m = ((totalMins % 1440) + 1440) % 1440;
  const h = Math.floor(m / 60);
  const min = m % 60;
  const ampm = h >= 12 ? "PM" : "AM";
  const displayH = h % 12 || 12;
  return `${displayH}:${String(min).padStart(2, "0")} ${ampm}`;
}

interface ResultOption {
  label: string;
  bedtime: string;
  totalHours: string;
  cycles: number;
  badge: "Below Recommended" | "Recommended" | "Optimal";
  badgeColor: string;
}

function calcResults(
  wakeHour: number,
  wakeMinute: number,
  wakeAmpm: "AM" | "PM",
  minH: number,
  maxH: number
): ResultOption[] {
  const mid = (minH + maxH) / 2;
  const idealCycles = Math.round((mid * 60) / 90);
  const wakeMins = wakeToMinutes(wakeHour, wakeMinute, wakeAmpm);

  const options: Array<{ cycles: number; badge: ResultOption["badge"]; badgeColor: string; label: string }> = [
    { cycles: idealCycles - 1, badge: "Below Recommended", badgeColor: "#f59e0b", label: "Minimum" },
    { cycles: idealCycles,     badge: "Recommended",       badgeColor: "#6c63ff", label: "Recommended" },
    { cycles: idealCycles + 1, badge: "Optimal",           badgeColor: "#34d399", label: "Optimal" },
  ];

  return options.map((o) => {
    const sleepMinutes = o.cycles * 90;
    const bedtimeMins = wakeMins - sleepMinutes - 14;
    const hours = sleepMinutes / 60;
    const wholeH = Math.floor(hours);
    const halfH = hours % 1 === 0.5 ? "½" : "";
    return {
      label: o.label,
      bedtime: minutesToDisplay(bedtimeMins),
      totalHours: halfH ? `${wholeH}${halfH}` : `${wholeH}`,
      cycles: o.cycles,
      badge: o.badge,
      badgeColor: o.badgeColor,
    };
  });
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function SleepByAgeCalculator() {
  const [ageId, setAgeId] = useState<string>("adult");
  const [gender, setGender] = useState<Gender>("Prefer not to say");
  const [wakeHour, setWakeHour] = useState(7);
  const [wakeMinute, setWakeMinute] = useState(0);
  const [wakeAmpm, setWakeAmpm] = useState<"AM" | "PM">("AM");
  const [results, setResults] = useState<ResultOption[] | null>(null);

  const selectedGroup = AGE_GROUPS.find((g) => g.id === ageId)!;

  function handleCalculate() {
    const res = calcResults(wakeHour, wakeMinute, wakeAmpm, selectedGroup.min, selectedGroup.max);
    setResults(res);
  }

  return (
    <div
      className="rounded-3xl p-6 sm:p-8 w-full max-w-2xl mx-auto"
      style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
    >
      {/* Age Group */}
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--accent-light)" }}>
          Select Age Group
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
          {AGE_GROUPS.map((g) => (
            <button
              key={g.id}
              onClick={() => { setAgeId(g.id); setResults(null); }}
              className="rounded-xl px-2 py-2 text-xs font-semibold transition-all"
              style={{
                background: ageId === g.id ? "var(--accent)" : "var(--bg-card2)",
                color: ageId === g.id ? "#fff" : "var(--text-muted)",
                border: ageId === g.id ? "none" : "1px solid var(--border)",
              }}
            >
              <span className="block font-bold">{g.label}</span>
              <span className="block opacity-70 text-[10px]">{g.range}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Recommended hours display */}
      <div
        className="rounded-xl px-4 py-3 mb-6 flex items-center gap-3 text-sm"
        style={{ background: "rgba(108,99,255,0.1)", border: "1px solid rgba(108,99,255,0.25)" }}
      >
        <span className="text-xl">💤</span>
        <div>
          <span style={{ color: "var(--text-primary)", fontWeight: 700 }}>
            {selectedGroup.min}–{selectedGroup.max} hours
          </span>
          <span style={{ color: "var(--text-muted)" }}>
            {" "}recommended for {selectedGroup.label} ({selectedGroup.range})
          </span>
        </div>
      </div>

      {/* Wake time */}
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-wider mb-3 text-center" style={{ color: "var(--accent-light)" }}>
          Wake-Up Time
        </p>
        <TimePicker
          hour={wakeHour}
          minute={wakeMinute}
          ampm={wakeAmpm}
          onHour={setWakeHour}
          onMinute={setWakeMinute}
          onAmpm={setWakeAmpm}
        />
      </div>

      {/* Gender (optional) */}
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--accent-light)" }}>
          Gender <span className="font-normal normal-case" style={{ color: "var(--text-muted)" }}>(optional)</span>
        </p>
        <div className="flex gap-2 flex-wrap">
          {GENDERS.map((g) => (
            <button
              key={g}
              onClick={() => setGender(g)}
              className="rounded-xl px-4 py-2 text-xs font-semibold transition-all"
              style={{
                background: gender === g ? "var(--accent)" : "var(--bg-card2)",
                color: gender === g ? "#fff" : "var(--text-muted)",
                border: gender === g ? "none" : "1px solid var(--border)",
              }}
            >
              {g}
            </button>
          ))}
        </div>
        {gender === "Female" && (
          <p className="text-xs mt-2" style={{ color: "var(--text-muted)" }}>
            ℹ️ Research suggests women need ~20 min more sleep on average. Results show standard NSF guidelines.
          </p>
        )}
      </div>

      {/* Calculate button */}
      <button
        onClick={handleCalculate}
        className="w-full py-4 rounded-2xl font-bold text-base transition-all hover:opacity-90 active:scale-[0.98]"
        style={{ background: "var(--accent)", color: "#fff" }}
      >
        Calculate Bedtimes →
      </button>

      {/* Results */}
      {results && (
        <div className="mt-8">
          <p className="text-sm font-semibold mb-4 text-center" style={{ color: "var(--text-muted)" }}>
            To wake at{" "}
            <strong style={{ color: "var(--text-primary)" }}>
              {wakeHour}:{String(wakeMinute).padStart(2, "0")} {wakeAmpm}
            </strong>
            , go to bed at:
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {results.map((r) => (
              <div
                key={r.label}
                className="rounded-2xl p-5 text-center"
                style={{
                  background: r.badge === "Recommended" ? "rgba(108,99,255,0.12)" : "var(--bg-card2)",
                  border: `1.5px solid ${r.badge === "Recommended" ? "rgba(108,99,255,0.4)" : "var(--border)"}`,
                }}
              >
                <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "var(--text-muted)" }}>
                  {r.label}
                </p>
                <p className="text-3xl font-extrabold mb-1" style={{ color: "var(--text-primary)" }}>
                  {r.bedtime}
                </p>
                <p className="text-sm mb-3" style={{ color: "var(--text-muted)" }}>
                  {r.totalHours} hrs · {r.cycles} cycles
                </p>
                <span
                  className="inline-block text-xs font-bold px-3 py-1 rounded-full"
                  style={{ background: `${r.badgeColor}22`, color: r.badgeColor }}
                >
                  {r.badge}
                </span>
              </div>
            ))}
          </div>
          <p className="text-xs mt-4 text-center" style={{ color: "var(--text-muted)" }}>
            Bedtimes include a 14-minute fall-asleep buffer. Each sleep cycle is 90 minutes.
          </p>
        </div>
      )}
    </div>
  );
}
