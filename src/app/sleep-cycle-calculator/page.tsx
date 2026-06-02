"use client";
import { useState } from "react";
import Link from "next/link";
import { TimePicker, to24h } from "../components/TimePicker";
import SleepCycleContent from "../components/SleepCycleContent";

const SLEEP_ONSET = 14;
const CYCLE = 90;

function timeToMin(t: string) {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
}

function fmt12(totalMin: number) {
  const norm = ((totalMin % 1440) + 1440) % 1440;
  const h = Math.floor(norm / 60);
  const m = norm % 60;
  const ampm = h < 12 ? "AM" : "PM";
  const hd = h % 12 === 0 ? 12 : h % 12;
  return `${hd}:${m.toString().padStart(2, "0")} ${ampm}`;
}

const STAGE_COLORS: Record<string, string> = {
  "NREM 1": "#6366f1",
  "NREM 2": "#818cf8",
  "NREM 3": "#312e81",
  "REM": "#a855f7",
};

// Each cycle pattern (minutes per stage within one 90-min cycle)
// Early cycles: more deep sleep, later cycles: more REM
function getCycleStages(cycleNum: number) {
  if (cycleNum <= 2) {
    return [
      { stage: "NREM 1", dur: 5 },
      { stage: "NREM 2", dur: 25 },
      { stage: "NREM 3", dur: 45 },
      { stage: "REM", dur: 15 },
    ];
  } else if (cycleNum === 3) {
    return [
      { stage: "NREM 1", dur: 5 },
      { stage: "NREM 2", dur: 25 },
      { stage: "NREM 3", dur: 25 },
      { stage: "REM", dur: 35 },
    ];
  } else {
    return [
      { stage: "NREM 1", dur: 5 },
      { stage: "NREM 2", dur: 30 },
      { stage: "NREM 3", dur: 10 },
      { stage: "REM", dur: 45 },
    ];
  }
}

function SleepCycleTool() {
  const [mode, setMode] = useState<"bedtime" | "wakeup">("bedtime");
  const [inputH, setInputH] = useState(10);
  const [inputM, setInputM] = useState(30);
  const [inputAmpm, setInputAmpm] = useState<"AM" | "PM">("PM");
  const [cycles, setCycles] = useState(5);
  const [result, setResult] = useState<null | { wakeTime: number; bedTime: number; cycleList: { num: number; stages: { stage: string; dur: number; start: number }[]; start: number; end: number }[] }>(null);

  function calculate() {
    const inputTime = to24h(inputH, inputM, inputAmpm);
    const inputMin = timeToMin(inputTime);
    let bedTime: number, wakeTime: number;

    if (mode === "bedtime") {
      bedTime = inputMin;
      wakeTime = bedTime + SLEEP_ONSET + cycles * CYCLE;
    } else {
      wakeTime = inputMin;
      bedTime = wakeTime - SLEEP_ONSET - cycles * CYCLE;
    }

    const sleepStart = bedTime + SLEEP_ONSET;
    const cycleList = [];
    for (let i = 0; i < cycles; i++) {
      const cycleStart = sleepStart + i * CYCLE;
      const stages = getCycleStages(i + 1);
      let offset = 0;
      const stagesWithStart = stages.map((s) => {
        const r = { ...s, start: cycleStart + offset };
        offset += s.dur;
        return r;
      });
      cycleList.push({ num: i + 1, stages: stagesWithStart, start: cycleStart, end: cycleStart + CYCLE });
    }

    setResult({ wakeTime, bedTime, cycleList });
  }

  const totalMin = result ? cycles * CYCLE : 1;

  return (
    <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 16, padding: "2rem", maxWidth: 680, margin: "0 auto" }}>
      {/* Mode toggle */}
      <div className="flex gap-2 mb-5">
        {(["bedtime", "wakeup"] as const).map((m) => (
          <button key={m} onClick={() => setMode(m)}
            style={{ flex: 1, padding: "10px", borderRadius: 10, border: "1px solid var(--border)", fontWeight: 600, fontSize: 14, cursor: "pointer",
              background: mode === m ? "var(--accent)" : "var(--bg-primary)", color: mode === m ? "#fff" : "var(--text-primary)" }}>
            {m === "bedtime" ? "🛏️ I know my Bedtime" : "⏰ I know my Wake-Up Time"}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-5">
        <div style={{ background: "var(--bg-primary)", borderRadius: 12, padding: "1rem", textAlign: "center" }}>
          <label style={{ color: "var(--text-primary)", fontWeight: 600, fontSize: 13, display: "block", marginBottom: 12 }}>
            {mode === "bedtime" ? "🛏️ Bedtime" : "⏰ Wake-Up Time"}
          </label>
          <TimePicker
            hour={inputH} minute={inputM} ampm={inputAmpm}
            onHour={setInputH} onMinute={setInputM} onAmpm={setInputAmpm}
          />
        </div>
        <div>
          <label style={{ color: "var(--text-primary)", fontWeight: 600, fontSize: 13 }} className="block mb-2">Number of Cycles</label>
          <div className="flex gap-2">
            {[4, 5, 6].map((n) => (
              <button key={n} onClick={() => setCycles(n)}
                style={{ flex: 1, padding: "10px", borderRadius: 10, border: "1px solid var(--border)", fontWeight: 700, fontSize: 15, cursor: "pointer",
                  background: cycles === n ? "var(--accent)" : "var(--bg-primary)", color: cycles === n ? "#fff" : "var(--text-primary)" }}>
                {n}
              </button>
            ))}
          </div>
          <p style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 4 }}>{cycles * 1.5}h total sleep</p>
        </div>
      </div>

      <button onClick={calculate}
        style={{ width: "100%", padding: "14px", borderRadius: 12, border: "none", background: "var(--accent)", color: "#fff", fontWeight: 700, fontSize: 16, cursor: "pointer" }}>
        Visualize My Sleep Cycles
      </button>

      {result && (
        <div className="mt-6">
          <div className="grid grid-cols-2 gap-3 mb-5">
            <div style={{ background: "var(--bg-primary)", borderRadius: 12, padding: "1rem", textAlign: "center" }}>
              <div style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 4 }}>Bedtime</div>
              <div style={{ fontSize: 22, fontWeight: 800, color: "var(--accent-light)" }}>{fmt12(result.bedTime)}</div>
            </div>
            <div style={{ background: "var(--bg-primary)", borderRadius: 12, padding: "1rem", textAlign: "center" }}>
              <div style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 4 }}>Wake Up</div>
              <div style={{ fontSize: 22, fontWeight: 800, color: "var(--accent-light)" }}>{fmt12(result.wakeTime)}</div>
            </div>
          </div>

          {/* Visual timeline */}
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontWeight: 600, fontSize: 13, color: "var(--text-primary)", marginBottom: 8 }}>Sleep Stage Timeline</div>
            <div style={{ display: "flex", height: 40, borderRadius: 8, overflow: "hidden", gap: 1 }}>
              {result.cycleList.map((cyc) =>
                cyc.stages.map((s, si) => (
                  <div key={`${cyc.num}-${si}`}
                    title={`Cycle ${cyc.num}: ${s.stage} (${s.dur} min)`}
                    style={{
                      flex: s.dur,
                      background: STAGE_COLORS[s.stage] || "#6b7280",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 9, color: "#fff", fontWeight: 700, overflow: "hidden",
                    }}>
                    {s.dur >= 20 ? s.stage.replace("NREM ", "N") : ""}
                  </div>
                ))
              )}
            </div>
            {/* Legend */}
            <div className="flex gap-4 mt-2 flex-wrap">
              {Object.entries(STAGE_COLORS).map(([s, c]) => (
                <div key={s} className="flex items-center gap-1">
                  <div style={{ width: 12, height: 12, borderRadius: 3, background: c }} />
                  <span style={{ fontSize: 11, color: "var(--text-muted)" }}>{s}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cycle breakdown */}
          <div style={{ background: "var(--bg-primary)", borderRadius: 12, padding: "1rem" }}>
            <div style={{ fontWeight: 600, fontSize: 13, color: "var(--text-primary)", marginBottom: 10 }}>Cycle Breakdown</div>
            {result.cycleList.map((c) => (
              <div key={c.num} style={{ marginBottom: 12 }}>
                <div style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 4, fontWeight: 600 }}>
                  Cycle {c.num} · {fmt12(c.start)} → {fmt12(c.end)}
                </div>
                <div style={{ display: "flex", height: 14, borderRadius: 4, overflow: "hidden", gap: 1 }}>
                  {c.stages.map((s, si) => (
                    <div key={si} style={{ flex: s.dur, background: STAGE_COLORS[s.stage] }} title={`${s.stage}: ${s.dur} min`} />
                  ))}
                </div>
                <div className="flex gap-2 mt-1 flex-wrap">
                  {c.stages.map((s, si) => (
                    <span key={si} style={{ fontSize: 10, color: "var(--text-muted)" }}>{s.stage}: {s.dur}m</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function SleepCyclePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: "Sleep Cycle Calculator",
        url: "https://getsleepcalculator.net/sleep-cycle-calculator",
        applicationCategory: "HealthApplication",
        operatingSystem: "Web Browser",
        description: "Visualize your sleep cycles and stages throughout the night. See exactly when NREM, deep sleep, and REM sleep occur.",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        featureList: "Sleep cycle visualization, stage breakdown by cycle, NREM and REM tracking",
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://getsleepcalculator.net" },
          { "@type": "ListItem", position: 2, name: "Sleep Cycle Calculator", item: "https://getsleepcalculator.net/sleep-cycle-calculator" },
        ],
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "How long is one sleep cycle?", acceptedAnswer: { "@type": "Answer", text: "One complete sleep cycle lasts approximately 90 minutes on average, progressing through NREM Stage 1 (5–10 min), NREM Stage 2 (20–25 min), NREM Stage 3 deep sleep (20–40 min), and REM sleep (10–60 min depending on cycle number). Early cycles in the night have more deep sleep; later cycles have more REM. A full night of 7.5–9 hours contains 5–6 complete cycles." } },
          { "@type": "Question", name: "How many sleep cycles do you need?", acceptedAnswer: { "@type": "Answer", text: "Most adults need 5 complete sleep cycles per night for optimal functioning, which amounts to 7.5 hours of sleep (plus 14 minutes of sleep onset time). Five cycles provides adequate time in all sleep stages: sufficient deep sleep in cycles 1–3 for physical restoration and adequate REM sleep in cycles 4–5 for cognitive and emotional processing. Fewer than 4 cycles (under 6 hours) consistently impairs performance." } },
          { "@type": "Question", name: "What is the best time to wake up based on sleep cycles?", acceptedAnswer: { "@type": "Answer", text: "The best time to wake up is at the end of a complete 90-minute sleep cycle, not in the middle of deep sleep. Waking during deep sleep (NREM Stage 3) causes sleep inertia — the groggy, disoriented feeling that can last 30–90 minutes. If you need to wake at 7:00 AM, count back in 90-minute increments: ideal bedtimes are 11:30 PM (4.5h), 10:00 PM (6h for 4 cycles), 10:00 PM would give 5 cycles with a 10:16 PM bedtime (including 14 min onset)." } },
          { "@type": "Question", name: "What happens in each sleep stage?", acceptedAnswer: { "@type": "Answer", text: "Stage 1 (N1): Light sleep, easily awakened, hypnic jerks common. Lasts 5–10 minutes. Stage 2 (N2): Heart rate slows, temperature drops, sleep spindles protect sleep from interruption. Stage 3 (N3): Deep or slow-wave sleep. Growth hormone release, immune strengthening, physical repair. Hardest to wake from. REM: Brain becomes highly active, dreaming occurs, emotional memory processing, creativity, motor learning consolidation. Eye movements rapid under closed lids." } },
          { "@type": "Question", name: "Does waking up between sleep cycles really reduce grogginess?", acceptedAnswer: { "@type": "Answer", text: "Yes, timing your wake-up to align with the end of a 90-minute cycle significantly reduces sleep inertia. When you wake from light sleep (N1 or N2, which occur at cycle transitions), you feel more alert immediately. Waking from deep sleep (N3) triggers sleep inertia — a state of impaired cognitive performance that can persist for 30–90 minutes. Studies show that timed wake-ups improve mood, cognitive performance, and subjective alertness compared to mid-cycle interruptions." } },
        ],
      })}} />

      <section style={{ background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(108,99,255,0.18) 0%, transparent 70%), var(--bg-primary)", padding: "4rem 0 3rem" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-4" style={{ background: "rgba(108,99,255,0.15)", border: "1px solid rgba(108,99,255,0.3)", color: "var(--accent-light)" }}>
            🔄 Sleep Stage Visualizer
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4" style={{ color: "var(--text-primary)" }}>
            Sleep Cycle Calculator
          </h1>
          <p className="text-lg mb-10" style={{ color: "var(--text-muted)", maxWidth: 520, margin: "0 auto 2.5rem" }}>
            Visualize your complete sleep architecture — see exactly when deep sleep and REM occur each night.
          </p>
          <SleepCycleTool />
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>The 4 Stages of Sleep</h2>
        <div className="flex flex-col gap-4">
          {[
            { stage: "NREM Stage 1", color: STAGE_COLORS["NREM 1"], dur: "1–5 min", desc: "Light sleep — easily woken, muscle twitches. Transition between wakefulness and sleep." },
            { stage: "NREM Stage 2", color: STAGE_COLORS["NREM 2"], dur: "10–25 min", desc: "Body temperature drops, heart rate slows. Sleep spindles protect sleep from disturbances." },
            { stage: "NREM Stage 3", color: STAGE_COLORS["NREM 3"], dur: "20–40 min", desc: "Deep/slow-wave sleep. Body repairs tissue, strengthens immune system. Hardest to wake from." },
            { stage: "REM Sleep", color: STAGE_COLORS["REM"], dur: "10–60 min", desc: "Brain activity surges, vivid dreams occur. Critical for memory, learning, and emotional health." },
          ].map((s) => (
            <div key={s.stage} className="flex gap-4 items-start" style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, padding: "1.25rem" }}>
              <div style={{ width: 16, height: 16, borderRadius: 4, background: s.color, flexShrink: 0, marginTop: 2 }} />
              <div>
                <div style={{ fontWeight: 700, color: "var(--text-primary)" }}>{s.stage} <span style={{ fontWeight: 400, color: "var(--text-muted)", fontSize: 13 }}>· {s.dur}/cycle</span></div>
                <div style={{ fontSize: 14, color: "var(--text-muted)", marginTop: 4 }}>{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SEO Long-Form Content */}
      <SleepCycleContent />

      <section className="max-w-3xl mx-auto px-4 pb-8">
        <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>Related Guides</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { href: "/sleep-stages/", title: "Sleep Stages Explained", desc: "Understand what happens in N1, N2, N3, and REM sleep and why each stage matters." },
            { href: "/blog/best-time-to-wake-up/", title: "The Best Time to Wake Up According to Sleep Science", desc: "Use 90-minute cycles to find your optimal wake-up time and avoid morning grogginess." },
          ].map((g) => (
            <Link key={g.href} href={g.href} style={{ textDecoration: "none" }}>
              <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, padding: "1.25rem" }}>
                <div style={{ fontWeight: 700, color: "var(--text-primary)", fontSize: 14, marginBottom: 6 }}>{g.title}</div>
                <div style={{ fontSize: 13, color: "var(--text-muted)" }}>{g.desc}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section style={{ background: "var(--bg-card)", borderTop: "1px solid var(--border)", padding: "3rem 0" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>More Sleep Tools</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { href: "/bedtime-calculator/", label: "Bedtime Calculator" },
              { href: "/rem-sleep-calculator/", label: "REM Calculator" },
              { href: "/sleep-debt-calculator/", label: "Sleep Debt Calculator" },
              { href: "/nap-calculator/", label: "Nap Calculator" },
            ].map((l) => (
              <Link key={l.href} href={l.href} style={{ padding: "8px 20px", borderRadius: 8, border: "1px solid var(--border)", background: "var(--bg-primary)", color: "var(--text-primary)", fontSize: 14, textDecoration: "none" }}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
