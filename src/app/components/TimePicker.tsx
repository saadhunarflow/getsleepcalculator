"use client";
import { useState, useEffect } from "react";

// ─── Utilities ───────────────────────────────────────────────────────────────
export function to24h(hour: number, minute: number, ampm: "AM" | "PM"): string {
  let h = hour;
  if (ampm === "AM" && h === 12) h = 0;
  if (ampm === "PM" && h !== 12) h += 12;
  return `${String(h).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
}

export function parse24h(str: string): { hour: number; minute: number; ampm: "AM" | "PM" } {
  const [h, m] = str.split(":").map(Number);
  const ampm: "AM" | "PM" = h >= 12 ? "PM" : "AM";
  const hour = h % 12 || 12;
  return { hour, minute: m, ampm };
}

// ─── Segment (up/down digit) ─────────────────────────────────────────────────
interface SegmentProps {
  value: string;
  label: string;
  min: number;
  max: number;
  onUp: () => void;
  onDown: () => void;
  onCommit: (v: number) => void;
  size?: "md" | "sm";
}

function Segment({ value, label, min, max, onUp, onDown, onCommit, size = "md" }: SegmentProps) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(value);

  useEffect(() => {
    if (!editing) setDraft(value);
  }, [value, editing]);

  function commit(raw: string) {
    const n = parseInt(raw, 10);
    if (!isNaN(n) && n >= min && n <= max) onCommit(n);
    setEditing(false);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") { commit(draft); return; }
    if (e.key === "Escape") { setEditing(false); return; }
    if (e.key === "ArrowUp") { e.preventDefault(); onUp(); return; }
    if (e.key === "ArrowDown") { e.preventDefault(); onDown(); return; }
  }

  function handleWheel(e: React.WheelEvent) {
    e.preventDefault();
    e.deltaY < 0 ? onUp() : onDown();
  }

  const boxSm = size === "sm";
  const boxCls = boxSm ? "w-10 h-10 text-xl" : "w-16 h-16 text-3xl";
  const arrowCls = boxSm ? "w-8 h-6" : "w-12 h-8";

  return (
    <div className="flex flex-col items-center select-none">
      <button
        onClick={onUp}
        className={`${arrowCls} flex items-center justify-center rounded-lg transition-all hover:scale-110 active:scale-95`}
        style={{ color: "var(--accent-light)", background: "var(--bg-card2)" }}
        aria-label={`Increase ${label}`}
        tabIndex={-1}
      >
        <svg width={boxSm ? 11 : 14} height={boxSm ? 11 : 14} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path d="M18 15l-6-6-6 6" />
        </svg>
      </button>

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
            className={`${boxCls} rounded-2xl font-extrabold text-center outline-none`}
            style={{
              background: "var(--bg-primary)",
              border: "2px solid var(--accent-light)",
              color: "var(--text-primary)",
              MozAppearance: "textfield",
            } as React.CSSProperties}
          />
        ) : (
          <button
            onClick={() => { setDraft(value); setEditing(true); }}
            title={`Click to type ${label}`}
            className={`${boxCls} flex items-center justify-center rounded-2xl font-extrabold transition-all hover:scale-105 active:scale-95 cursor-text`}
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

      <button
        onClick={onDown}
        className={`${arrowCls} flex items-center justify-center rounded-lg transition-all hover:scale-110 active:scale-95`}
        style={{ color: "var(--accent-light)", background: "var(--bg-card2)" }}
        aria-label={`Decrease ${label}`}
        tabIndex={-1}
      >
        <svg width={boxSm ? 11 : 14} height={boxSm ? 11 : 14} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      <span className="text-xs mt-1 font-medium" style={{ color: "var(--text-muted)" }}>{label}</span>
    </div>
  );
}

// ─── Full-size TimePicker ─────────────────────────────────────────────────────
export interface TimePickerProps {
  hour: number;
  minute: number;
  ampm: "AM" | "PM";
  onHour: (v: number) => void;
  onMinute: (v: number) => void;
  onAmpm: (v: "AM" | "PM") => void;
}

export function TimePicker({ hour, minute, ampm, onHour, onMinute, onAmpm }: TimePickerProps) {
  return (
    <div className="flex items-center gap-2 justify-center">
      <Segment
        value={String(hour).padStart(2, "0")}
        label="HOUR"
        min={1} max={12}
        onUp={() => onHour(hour === 12 ? 1 : hour + 1)}
        onDown={() => onHour(hour === 1 ? 12 : hour - 1)}
        onCommit={onHour}
        size="md"
      />
      <span className="text-4xl font-extrabold pb-6" style={{ color: "var(--accent-light)" }}>:</span>
      <Segment
        value={String(minute).padStart(2, "0")}
        label="MIN"
        min={0} max={59}
        onUp={() => onMinute(minute === 59 ? 0 : minute + 1)}
        onDown={() => onMinute(minute === 0 ? 59 : minute - 1)}
        onCommit={onMinute}
        size="md"
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
            }}
          >
            {v}
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── Compact TimePicker (for form-heavy pages) ────────────────────────────────
export function TimePickerCompact({ hour, minute, ampm, onHour, onMinute, onAmpm }: TimePickerProps) {
  return (
    <div className="flex items-center gap-1.5 justify-center">
      <Segment
        value={String(hour).padStart(2, "0")}
        label="HR"
        min={1} max={12}
        onUp={() => onHour(hour === 12 ? 1 : hour + 1)}
        onDown={() => onHour(hour === 1 ? 12 : hour - 1)}
        onCommit={onHour}
        size="sm"
      />
      <span className="text-2xl font-extrabold pb-5" style={{ color: "var(--accent-light)" }}>:</span>
      <Segment
        value={String(minute).padStart(2, "0")}
        label="MIN"
        min={0} max={59}
        onUp={() => onMinute(minute === 59 ? 0 : minute + 1)}
        onDown={() => onMinute(minute === 0 ? 59 : minute - 1)}
        onCommit={onMinute}
        size="sm"
      />
      <div className="flex flex-col gap-1 ml-1 mb-5">
        {(["AM", "PM"] as const).map((v) => (
          <button
            key={v}
            onClick={() => onAmpm(v)}
            className="w-10 h-5 rounded-lg text-xs font-bold transition-all duration-150"
            style={{
              background: ampm === v ? "var(--accent)" : "var(--bg-card2)",
              color: ampm === v ? "#fff" : "var(--text-muted)",
              border: ampm === v ? "none" : "1px solid var(--border)",
            }}
          >
            {v}
          </button>
        ))}
      </div>
    </div>
  );
}
