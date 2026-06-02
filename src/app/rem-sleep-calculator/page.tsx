"use client";
import { useState } from "react";
import Link from "next/link";
import { TimePicker, to24h } from "../components/TimePicker";
import REMContent from "../components/REMContent";

const SLEEP_ONSET = 14;
const CYCLE = 90;

// REM % per cycle: increases in later cycles
const REM_PCT = [0.1, 0.15, 0.2, 0.25, 0.3];

function fmt12(totalMin: number) {
  const h = Math.floor(totalMin / 60) % 24;
  const m = totalMin % 60;
  const ampm = h < 12 ? "AM" : "PM";
  const hDisplay = h % 12 === 0 ? 12 : h % 12;
  return `${hDisplay}:${m.toString().padStart(2, "0")} ${ampm}`;
}

function timeToMin(t: string) {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
}

function REMTool() {
  // Bedtime picker state (default 10:30 PM)
  const [bedH, setBedH] = useState(10);
  const [bedM, setBedM] = useState(30);
  const [bedAmpm, setBedAmpm] = useState<"AM" | "PM">("PM");
  // Wake-up picker state (default 6:30 AM)
  const [wakeH, setWakeH] = useState(6);
  const [wakeM, setWakeM] = useState(30);
  const [wakeAmpm, setWakeAmpm] = useState<"AM" | "PM">("AM");
  const [result, setResult] = useState<null | { cycles: number; totalREM: number; cycleData: { num: number; rem: number; start: number; end: number }[] }>(null);

  function calculate() {
    const bedtime = to24h(bedH, bedM, bedAmpm);
    const wakeTime = to24h(wakeH, wakeM, wakeAmpm);
    let bedMin = timeToMin(bedtime);
    let wakeMin = timeToMin(wakeTime);
    if (wakeMin <= bedMin) wakeMin += 1440;

    const sleepStart = bedMin + SLEEP_ONSET;
    const totalSleep = wakeMin - sleepStart;
    const cycles = Math.min(6, Math.floor(totalSleep / CYCLE));

    const cycleData = [];
    for (let i = 0; i < cycles; i++) {
      const start = sleepStart + i * CYCLE;
      const end = start + CYCLE;
      const remPct = REM_PCT[Math.min(i, REM_PCT.length - 1)];
      const rem = Math.round(CYCLE * remPct);
      cycleData.push({ num: i + 1, rem, start, end });
    }

    const totalREM = cycleData.reduce((a, c) => a + c.rem, 0);
    setResult({ cycles, totalREM, cycleData });
  }

  const pctColor = (pct: number) => pct >= 20 ? "#22c55e" : pct >= 15 ? "#f59e0b" : "#ef4444";

  return (
    <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 16, padding: "2rem", maxWidth: 620, margin: "0 auto" }}>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div style={{ background: "var(--bg-primary)", borderRadius: 12, padding: "1rem", textAlign: "center" }}>
          <div style={{ color: "var(--text-primary)", fontWeight: 600, fontSize: 13, marginBottom: 12 }}>🛏️ Bedtime</div>
          <TimePicker
            hour={bedH} minute={bedM} ampm={bedAmpm}
            onHour={setBedH} onMinute={setBedM} onAmpm={setBedAmpm}
          />
        </div>
        <div style={{ background: "var(--bg-primary)", borderRadius: 12, padding: "1rem", textAlign: "center" }}>
          <div style={{ color: "var(--text-primary)", fontWeight: 600, fontSize: 13, marginBottom: 12 }}>⏰ Wake-Up Time</div>
          <TimePicker
            hour={wakeH} minute={wakeM} ampm={wakeAmpm}
            onHour={setWakeH} onMinute={setWakeM} onAmpm={setWakeAmpm}
          />
        </div>
      </div>

      <button onClick={calculate}
        style={{ width: "100%", padding: "14px", borderRadius: 12, border: "none", background: "var(--accent)", color: "#fff", fontWeight: 700, fontSize: 16, cursor: "pointer" }}>
        Calculate My REM Sleep
      </button>

      {result && (
        <div className="mt-6">
          <div className="grid grid-cols-3 gap-3 mb-4">
            <div style={{ background: "var(--bg-primary)", borderRadius: 12, padding: "1rem", textAlign: "center" }}>
              <div style={{ fontSize: 26, fontWeight: 800, color: "var(--accent-light)" }}>{result.totalREM} min</div>
              <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 4 }}>Total REM Sleep</div>
            </div>
            <div style={{ background: "var(--bg-primary)", borderRadius: 12, padding: "1rem", textAlign: "center" }}>
              <div style={{ fontSize: 26, fontWeight: 800, color: "var(--text-primary)" }}>{result.cycles}</div>
              <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 4 }}>Sleep Cycles</div>
            </div>
            <div style={{ background: "var(--bg-primary)", borderRadius: 12, padding: "1rem", textAlign: "center" }}>
              <div style={{ fontSize: 26, fontWeight: 800, color: pctColor(Math.round((result.totalREM / (result.cycles * CYCLE)) * 100)) }}>
                {Math.round((result.totalREM / (result.cycles * CYCLE)) * 100)}%
              </div>
              <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 4 }}>Avg REM per Cycle</div>
            </div>
          </div>

          <div style={{ background: "var(--bg-primary)", borderRadius: 12, padding: "1rem" }}>
            <div style={{ fontWeight: 600, fontSize: 13, color: "var(--text-primary)", marginBottom: 10 }}>REM Sleep Per Cycle</div>
            {result.cycleData.map((c) => {
              const pct = Math.round((c.rem / CYCLE) * 100);
              return (
                <div key={c.num} className="mb-3">
                  <div className="flex justify-between mb-1" style={{ fontSize: 12 }}>
                    <span style={{ color: "var(--text-muted)" }}>Cycle {c.num} ({fmt12(c.start)} → {fmt12(c.end)})</span>
                    <span style={{ color: pctColor(pct), fontWeight: 600 }}>{c.rem} min REM ({pct}%)</span>
                  </div>
                  <div style={{ background: "var(--bg-card)", borderRadius: 6, height: 8, overflow: "hidden" }}>
                    <div style={{ width: `${pct * 3}%`, height: "100%", background: pctColor(pct), borderRadius: 6, transition: "width 0.5s" }} />
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ marginTop: 12, padding: "1rem", borderRadius: 12, background: result.totalREM >= 90 ? "rgba(34,197,94,0.08)" : "rgba(245,158,11,0.08)", border: `1px solid ${result.totalREM >= 90 ? "rgba(34,197,94,0.2)" : "rgba(245,158,11,0.2)"}` }}>
            <div style={{ fontWeight: 700, fontSize: 13, color: result.totalREM >= 90 ? "#22c55e" : "#f59e0b", marginBottom: 4 }}>
              {result.totalREM >= 90 ? "✅ Healthy REM Amount!" : "⚠️ REM Could Be Better"}
            </div>
            <div style={{ fontSize: 13, color: "var(--text-muted)" }}>
              {result.totalREM >= 90
                ? `You're getting ${result.totalREM} min of REM sleep. Adults need 90–120 min per night. You're on track!`
                : `You're getting ${result.totalREM} min of REM sleep. Aim for at least 90 min by adding one more sleep cycle.`}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function REMSleepPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: "REM Sleep Calculator",
        url: "https://getsleepcalculator.net/rem-sleep-calculator",
        applicationCategory: "HealthApplication",
        operatingSystem: "Web Browser",
        description: "Calculate how much REM sleep you get each night based on your bedtime and wake-up time.",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        featureList: "REM sleep calculation, sleep cycle breakdown, REM percentage by age",
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://getsleepcalculator.net" },
          { "@type": "ListItem", position: 2, name: "REM Sleep Calculator", item: "https://getsleepcalculator.net/rem-sleep-calculator" },
        ],
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "How much REM sleep do adults need per night?", acceptedAnswer: { "@type": "Answer", text: "Adults need 90–120 minutes of REM sleep per night, which represents 20–25% of total sleep time. In a typical 8-hour night with 5 sleep cycles, REM sleep increases progressively with each cycle — the first cycle may have only 5–10 minutes of REM while the last cycle can contain 45–60 minutes. This is why cutting sleep short by even 1–2 hours dramatically reduces total REM." } },
          { "@type": "Question", name: "What happens if you don't get enough REM sleep?", acceptedAnswer: { "@type": "Answer", text: "Insufficient REM sleep impairs memory consolidation, emotional regulation, and creative problem-solving. The brain uses REM sleep to process emotional memories and reduce the emotional charge of difficult experiences. Chronic REM deprivation is linked to increased anxiety, depression risk, difficulty learning new skills, and impaired creativity. Alcohol and some medications (especially SSRIs and benzodiazepines) suppress REM sleep." } },
          { "@type": "Question", name: "When does most REM sleep occur?", acceptedAnswer: { "@type": "Answer", text: "Most REM sleep occurs in the second half of the night, during cycles 4 and 5. The first REM period typically begins 70–90 minutes after falling asleep and lasts only 5–10 minutes. With each successive cycle, REM periods get progressively longer. The final cycle before waking may contain 45–60 minutes of uninterrupted REM sleep. This is why the last 1–2 hours of sleep are disproportionately REM-rich." } },
          { "@type": "Question", name: "What is the difference between REM and deep sleep?", acceptedAnswer: { "@type": "Answer", text: "Deep sleep (NREM Stage 3) and REM sleep serve different functions. Deep sleep is physically restorative — it\'s when your body releases growth hormone, repairs muscle tissue, strengthens the immune system, and consolidates motor memories. REM sleep is neurologically restorative — it\'s when your brain processes emotional memories, forms creative connections, and consolidates declarative (fact-based) memories. Both are essential and cannot replace each other." } },
          { "@type": "Question", name: "Does alcohol affect REM sleep?", acceptedAnswer: { "@type": "Answer", text: "Yes, significantly. Alcohol suppresses REM sleep, particularly in the first half of the night. Even moderate alcohol consumption (1–2 drinks) reduces REM sleep by 9–24% in the first half of the night. As blood alcohol levels drop in the second half, the brain tries to \"rebound\" with extra REM sleep, often causing vivid dreams or nightmares and early waking. For optimal REM sleep, avoid alcohol within 3 hours of bedtime." } },
        ],
      })}} />

      <section style={{ background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(108,99,255,0.18) 0%, transparent 70%), var(--bg-primary)", padding: "4rem 0 3rem" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-4" style={{ background: "rgba(108,99,255,0.15)", border: "1px solid rgba(108,99,255,0.3)", color: "var(--accent-light)" }}>
            🧠 Dream Sleep Optimizer
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4" style={{ color: "var(--text-primary)" }}>
            REM Sleep Calculator
          </h1>
          <p className="text-lg mb-10" style={{ color: "var(--text-muted)", maxWidth: 520, margin: "0 auto 2.5rem" }}>
            Find out exactly how much REM sleep you get and whether it's enough for memory, mood, and recovery.
          </p>
          <REMTool />
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>Why REM Sleep Matters</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { icon: "🧠", title: "Memory Consolidation", desc: "REM sleep is when your brain processes and stores memories from the day — critical for learning." },
            { icon: "😊", title: "Emotional Regulation", desc: "Lack of REM leads to mood swings, anxiety, and difficulty managing emotions." },
            { icon: "💡", title: "Creativity & Problem Solving", desc: "REM sleep enhances abstract thinking and creative connections between ideas." },
            { icon: "🌙", title: "Increases in Later Cycles", desc: "Most REM happens in your last 2 sleep cycles — cutting sleep short dramatically reduces total REM." },
          ].map((c) => (
            <div key={c.title} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, padding: "1.25rem" }}>
              <div style={{ fontSize: 24, marginBottom: 8 }}>{c.icon}</div>
              <div style={{ fontWeight: 700, color: "var(--text-primary)", marginBottom: 6 }}>{c.title}</div>
              <div style={{ fontSize: 14, color: "var(--text-muted)" }}>{c.desc}</div>
            </div>
          ))}
        </div>

        <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, padding: "1.5rem" }}>
          <h3 style={{ fontWeight: 700, color: "var(--text-primary)", marginBottom: 12 }}>How Much REM Do You Need?</h3>
          <div className="flex flex-col gap-2">
            {[
              { age: "Adults (18–64)", rem: "90–120 min/night", pct: "20–25% of sleep" },
              { age: "Teenagers (14–17)", rem: "100–130 min/night", pct: "20–25% of sleep" },
              { age: "Older Adults (65+)", rem: "60–90 min/night", pct: "15–20% of sleep" },
            ].map((r) => (
              <div key={r.age} className="flex justify-between items-center py-2" style={{ borderBottom: "1px solid var(--border)", fontSize: 14 }}>
                <span style={{ color: "var(--text-secondary)" }}>{r.age}</span>
                <span style={{ color: "var(--accent-light)", fontWeight: 600 }}>{r.rem}</span>
                <span style={{ color: "var(--text-muted)", fontSize: 12 }}>{r.pct}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Long-Form Content */}
      <REMContent />

      <section className="max-w-3xl mx-auto px-4 pb-8">
        <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>Related Guides</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { href: "/sleep-stages/", title: "Sleep Stages Explained", desc: "Deep dive into all 5 sleep stages and what happens in your brain and body during each one." },
            { href: "/blog/why-you-wake-up-tired/", title: "Why You Wake Up Tired After 8 Hours", desc: "Low REM sleep is a key cause of morning fatigue — learn how to get more restorative sleep." },
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
              { href: "/sleep-cycle-calculator/", label: "Sleep Cycle Calculator" },
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
