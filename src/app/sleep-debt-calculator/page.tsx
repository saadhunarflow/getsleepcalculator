"use client";
import { useState } from "react";
import Link from "next/link";
import SleepDebtContent from "@/app/components/SleepDebtContent";

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

function SleepDebtTool() {
  const [target, setTarget] = useState(8);
  const [hours, setHours] = useState<number[]>([7, 6.5, 7, 6, 7, 8, 8]);
  const [result, setResult] = useState<null | { debt: number; avg: number; perDay: number[] }>(null);

  function calculate() {
    const perDay = hours.map((h) => target - h);
    const debt = perDay.reduce((a, b) => a + b, 0);
    const avg = hours.reduce((a, b) => a + b, 0) / 7;
    setResult({ debt, avg, perDay });
  }

  function setHour(i: number, val: string) {
    const v = Math.min(16, Math.max(0, parseFloat(val) || 0));
    setHours((prev) => prev.map((h, idx) => (idx === i ? v : h)));
  }

  const debtColor = (d: number) => d > 0 ? "#ef4444" : d < 0 ? "#22c55e" : "var(--text-muted)";
  const barWidth = (h: number) => Math.min(100, (h / 12) * 100);

  return (
    <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 16, padding: "2rem", maxWidth: 620, margin: "0 auto" }}>
      <div className="mb-6">
        <label style={{ color: "var(--text-primary)", fontWeight: 600, fontSize: 14 }}>Target Sleep Goal (hours/night)</label>
        <div className="flex gap-2 mt-2 flex-wrap">
          {[7, 7.5, 8, 8.5, 9].map((t) => (
            <button key={t} onClick={() => setTarget(t)}
              style={{
                padding: "6px 16px", borderRadius: 8, border: "1px solid var(--border)", fontSize: 14, fontWeight: 600, cursor: "pointer",
                background: target === t ? "var(--accent)" : "var(--bg-primary)",
                color: target === t ? "#fff" : "var(--text-primary)",
              }}>
              {t}h
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <label style={{ color: "var(--text-primary)", fontWeight: 600, fontSize: 14 }} className="block mb-3">
          How many hours did you sleep each night?
        </label>
        <div className="flex flex-col gap-3">
          {DAYS.map((day, i) => (
            <div key={day} className="flex items-center gap-3">
              <span style={{ color: "var(--text-muted)", fontSize: 13, minWidth: 90 }}>{day}</span>
              <div style={{ flex: 1, background: "var(--bg-primary)", borderRadius: 6, height: 8, overflow: "hidden" }}>
                <div style={{ width: `${barWidth(hours[i])}%`, height: "100%", background: hours[i] >= target ? "#22c55e" : "#f59e0b", borderRadius: 6, transition: "width 0.3s" }} />
              </div>
              <input
                type="number" min={0} max={16} step={0.5} value={hours[i]}
                onChange={(e) => setHour(i, e.target.value)}
                style={{
                  width: 64, padding: "4px 8px", borderRadius: 8, border: "1px solid var(--border)",
                  background: "var(--bg-primary)", color: "var(--text-primary)", fontSize: 14, textAlign: "center"
                }}
              />
              <span style={{ color: "var(--text-muted)", fontSize: 12 }}>hrs</span>
            </div>
          ))}
        </div>
      </div>

      <button onClick={calculate}
        style={{ width: "100%", padding: "14px", borderRadius: 12, border: "none", background: "var(--accent)", color: "#fff", fontWeight: 700, fontSize: 16, cursor: "pointer" }}>
        Calculate Sleep Debt
      </button>

      {result && (
        <div className="mt-6">
          <div className="grid grid-cols-3 gap-3 mb-4">
            <div style={{ background: "var(--bg-primary)", borderRadius: 12, padding: "1rem", textAlign: "center" }}>
              <div style={{ fontSize: 24, fontWeight: 800, color: result.debt > 0 ? "#ef4444" : "#22c55e" }}>
                {result.debt > 0 ? "+" : ""}{result.debt.toFixed(1)}h
              </div>
              <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 4 }}>Weekly Sleep Debt</div>
            </div>
            <div style={{ background: "var(--bg-primary)", borderRadius: 12, padding: "1rem", textAlign: "center" }}>
              <div style={{ fontSize: 24, fontWeight: 800, color: "var(--accent-light)" }}>{result.avg.toFixed(1)}h</div>
              <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 4 }}>Avg Per Night</div>
            </div>
            <div style={{ background: "var(--bg-primary)", borderRadius: 12, padding: "1rem", textAlign: "center" }}>
              <div style={{ fontSize: 24, fontWeight: 800, color: "var(--text-primary)" }}>{target}h</div>
              <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 4 }}>Your Goal</div>
            </div>
          </div>

          <div style={{ background: "var(--bg-primary)", borderRadius: 12, padding: "1rem" }}>
            <div style={{ fontWeight: 600, fontSize: 13, color: "var(--text-primary)", marginBottom: 8 }}>Daily Deficit / Surplus</div>
            {DAYS.map((day, i) => (
              <div key={day} className="flex justify-between items-center py-1" style={{ borderBottom: "1px solid var(--border)", fontSize: 13 }}>
                <span style={{ color: "var(--text-muted)" }}>{day}</span>
                <span style={{ fontWeight: 600, color: debtColor(result.perDay[i]) }}>
                  {result.perDay[i] > 0 ? "-" : result.perDay[i] < 0 ? "+" : "✓"}{Math.abs(result.perDay[i]).toFixed(1)}h
                  {result.perDay[i] < 0 ? " surplus" : result.perDay[i] === 0 ? " perfect" : " deficit"}
                </span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 16, padding: "1rem", borderRadius: 12, background: result.debt > 4 ? "rgba(239,68,68,0.08)" : result.debt > 0 ? "rgba(245,158,11,0.08)" : "rgba(34,197,94,0.08)", border: `1px solid ${result.debt > 4 ? "rgba(239,68,68,0.2)" : result.debt > 0 ? "rgba(245,158,11,0.2)" : "rgba(34,197,94,0.2)"}` }}>
            <div style={{ fontWeight: 700, fontSize: 14, color: result.debt > 4 ? "#ef4444" : result.debt > 0 ? "#f59e0b" : "#22c55e", marginBottom: 4 }}>
              {result.debt > 4 ? "⚠️ Significant Sleep Debt" : result.debt > 0 ? "😴 Moderate Sleep Debt" : "✅ Great Sleep Balance!"}
            </div>
            <div style={{ fontSize: 13, color: "var(--text-muted)" }}>
              {result.debt > 4
                ? `You're ${result.debt.toFixed(1)} hours in debt this week. This can't be fully recovered in one night — aim for 1–2 extra hours per night over the next week.`
                : result.debt > 0
                ? `You have a ${result.debt.toFixed(1)}h deficit. Add 30–60 min extra sleep on weekends to recover.`
                : `Excellent! You're meeting or exceeding your sleep goal. Keep this routine going.`}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function SleepDebtPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: "Sleep Debt Calculator",
        url: "https://getsleepcalculator.net/sleep-debt-calculator",
        applicationCategory: "HealthApplication",
        operatingSystem: "Web Browser",
        description: "Calculate your weekly sleep debt by tracking how many hours you slept each night versus your sleep goal.",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        featureList: "Weekly sleep debt tracking, sleep goal comparison, recovery recommendations",
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://getsleepcalculator.net" },
          { "@type": "ListItem", position: 2, name: "Sleep Debt Calculator", item: "https://getsleepcalculator.net/sleep-debt-calculator" },
        ],
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "What is sleep debt?", acceptedAnswer: { "@type": "Answer", text: "Sleep debt is the cumulative difference between the amount of sleep your body needs and the amount you actually get. If you need 8 hours but consistently sleep 6.5 hours, you accumulate 1.5 hours of sleep debt per night — 10.5 hours per week. Short-term debt can be recovered; chronic debt spanning months or years causes lasting physiological harm." } },
          { "@type": "Question", name: "Can you fully recover from sleep debt?", acceptedAnswer: { "@type": "Answer", text: "Short-term sleep debt (a few days of poor sleep) can be largely recovered with 2–3 nights of full-length sleep. Chronic sleep debt accumulated over months or years is harder to fully reverse. Research by the CDC and sleep researchers shows that cognitive impairment from chronic deprivation persists even after recovery nights, and some physiological damage (metabolic, hormonal) accumulates over time." } },
          { "@type": "Question", name: "How much sleep debt is too much?", acceptedAnswer: { "@type": "Answer", text: "A sleep debt of 5–10 hours per week is associated with measurable cognitive impairment, increased accident risk, and metabolic dysfunction. Two weeks of sleeping 6 hours per night produces cognitive deficits equivalent to 48 hours of total sleep deprivation (Van Dongen et al., 2003). Even 1–2 hours of nightly deficit over weeks has documented health consequences." } },
          { "@type": "Question", name: "How do I pay back sleep debt?", acceptedAnswer: { "@type": "Answer", text: "Add 30–60 minutes of extra sleep per night rather than trying to catch up all at once. Maintain a consistent wake time while allowing yourself to sleep slightly longer. Avoid making up large amounts on weekends only — sleeping in 3+ hours disrupts your circadian rhythm. Short 20-minute power naps can help offset acute deficit without interfering with nighttime sleep." } },
          { "@type": "Question", name: "Does napping help reduce sleep debt?", acceptedAnswer: { "@type": "Answer", text: "Napping can reduce acute sleepiness and improve short-term cognitive performance, but it does not fully eliminate sleep debt or restore what was missed during the night\'s deep and REM sleep stages. A 20-minute power nap improves alertness without entering deep sleep. A 90-minute full cycle nap is the most restorative option but should not replace nighttime sleep habitually." } },
        ],
      })}} />

      <section style={{ background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(108,99,255,0.18) 0%, transparent 70%), var(--bg-primary)", padding: "4rem 0 3rem" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-4" style={{ background: "rgba(108,99,255,0.15)", border: "1px solid rgba(108,99,255,0.3)", color: "var(--accent-light)" }}>
            📊 Weekly Sleep Tracker
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4" style={{ color: "var(--text-primary)" }}>
            Sleep Debt Calculator
          </h1>
          <p className="text-lg mb-10" style={{ color: "var(--text-muted)", maxWidth: 500, margin: "0 auto 2.5rem" }}>
            Track how much sleep you've lost this week — and learn how to recover it safely.
          </p>
          <SleepDebtTool />
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>What Is Sleep Debt?</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { title: "Short-term debt", desc: "Missing 1–2 hours for a few nights. Recoverable with a full weekend of rest." },
            { title: "Chronic debt", desc: "Consistently sleeping 6h when you need 8h. Accumulates over months and causes serious health effects." },
            { title: "Recovery time", desc: "You can't recover sleep debt in one night. Research shows it takes 3–4 nights of extra sleep to restore baseline." },
            { title: "Weekend catch-up", desc: "Sleeping extra on weekends helps but disrupts your circadian rhythm — a consistent schedule is better." },
          ].map((c) => (
            <div key={c.title} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, padding: "1.25rem" }}>
              <div style={{ fontWeight: 700, color: "var(--text-primary)", marginBottom: 6 }}>{c.title}</div>
              <div style={{ fontSize: 14, color: "var(--text-muted)" }}>{c.desc}</div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>How to Recover Sleep Debt</h2>
        <ol className="flex flex-col gap-3">
          {[
            "Add 30–60 min of extra sleep per night — don't try to recover it all at once",
            "Maintain a consistent bedtime even on weekends",
            "Avoid caffeine after 2 PM while recovering",
            "Use short 20-min power naps if you're severely sleep-deprived",
            "Once recovered, stick to a consistent 7–9 hour schedule",
          ].map((step, i) => (
            <li key={i} className="flex gap-3 items-start" style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 10, padding: "0.875rem 1rem" }}>
              <span style={{ background: "var(--accent)", color: "#fff", borderRadius: "50%", width: 24, height: 24, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, flexShrink: 0 }}>{i + 1}</span>
              <span style={{ color: "var(--text-secondary)", fontSize: 14 }}>{step}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* SEO Long-Form Content */}
      <SleepDebtContent />

      <section className="max-w-3xl mx-auto px-4 pb-8">
        <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>Related Guides</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { href: "/blog/sleep-deprivation-effects/", title: "What Happens to Your Body After One Sleepless Night", desc: "The hour-by-hour timeline of how sleep deprivation affects your brain, immune system, and hormones." },
            { href: "/blog/how-to-fall-asleep-faster/", title: "How to Fall Asleep Faster: 12 Science-Backed Tips", desc: "Evidence-based techniques to improve sleep quality and start reducing your nightly sleep deficit." },
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
              { href: "/wake-up-time-calculator/", label: "Wake-Up Calculator" },
              { href: "/nap-calculator/", label: "Nap Calculator" },
              { href: "/sleep-cycle-calculator/", label: "Sleep Cycle Calculator" },
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
