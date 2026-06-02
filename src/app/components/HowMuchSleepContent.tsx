import Link from "next/link";

export default function HowMuchSleepContent() {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-12">

      <p className="text-base leading-relaxed italic border-l-4 border-[var(--accent)] pl-4"
        style={{ color: "var(--text-secondary)" }}>
        Sleep needs vary by age, health, genetics, and lifestyle — but research is clear that the vast majority of adults who claim to "function fine on 5 hours" are experiencing measurable cognitive and health deficits they've simply adapted to not noticing.
      </p>

      {/* Is 6 hours enough */}
      <div>
        <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
          Is 6 Hours of Sleep Really Enough?
        </h2>
        <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
          Studies consistently show that sleeping 6 hours produces the same cognitive impairment as staying awake for 24 hours — but because the impairment builds gradually, people don't notice it. A 2003 study by Dinges et al. found that people chronically sleeping 6 hours per night performed at a level equivalent to someone who hadn't slept for two days, yet rated their own sleepiness as "moderate" — not severe.
        </p>
        <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
          True "short sleepers" — people who genetically need only 6 hours without impairment — exist, but represent an estimated 1–3% of the population. The gene variant involved (<em>DEC2</em>) is rare. Most people who think they're short sleepers have simply adapted to chronic sleep deprivation.
        </p>
        <div className="overflow-x-auto rounded-2xl border" style={{ borderColor: "var(--border)" }}>
          <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: "var(--bg-card2)" }}>
                {["Sleep Duration", "Reaction Time", "Cognitive Performance", "Subjective Sleepiness"].map(h => (
                  <th key={h} className="p-3 text-left font-semibold" style={{ color: "var(--accent-light)" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["9 hours", "Optimal", "Peak", "Low"],
                ["8 hours", "Normal", "Normal", "Low"],
                ["7 hours", "Slightly reduced", "Near-normal", "Low-moderate"],
                ["6 hours", "~40% slower", "Significantly impaired", "Moderate (but underestimated)"],
                ["5 hours", "~70% slower", "Severely impaired", "High"],
                ["4 hours", "Comparable to 24h awake", "Extremely impaired", "Variable"],
              ].map(([dur, rt, cog, subj], i) => (
                <tr key={dur} style={{ borderTop: "1px solid var(--border)", background: i % 2 === 0 ? "transparent" : "var(--bg-card2)" }}>
                  <td className="p-3 font-medium" style={{ color: "var(--text-primary)" }}>{dur}</td>
                  <td className="p-3" style={{ color: i >= 2 ? "#ef4444" : "var(--text-muted)" }}>{rt}</td>
                  <td className="p-3" style={{ color: i >= 2 ? "#ef4444" : "var(--text-muted)" }}>{cog}</td>
                  <td className="p-3" style={{ color: "var(--text-muted)" }}>{subj}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ height: "1px", background: "var(--border)" }} />

      {/* What affects sleep needs */}
      <div>
        <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
          Factors That Affect How Much Sleep You Personally Need
        </h2>
        <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
          The standard recommendations (7–9 hours for adults) are population averages. Several factors legitimately shift where you fall in that range:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { factor: "Age", detail: "Children and teenagers need more sleep than adults. Adults 65+ often sleep slightly less and experience lighter, more fragmented sleep — though they still need 7–8 hours." },
            { factor: "Physical activity", detail: "Athletes and people in physically demanding jobs require more sleep — particularly deep NREM sleep — for muscle repair, glycogen restoration, and growth hormone release." },
            { factor: "Illness and recovery", detail: "During illness, your immune system uses sleep as a repair window. Fever and infection increase sleep need and often produce the natural urge to sleep more — which should be honored." },
            { factor: "Mental workload", detail: "Cognitively demanding days, high stress, and intensive learning all increase REM sleep demand. Sleep after mental work consolidates learning and reduces emotional reactivity." },
            { factor: "Genetics", detail: "Sleep duration has a heritability of about 50%. Some people genuinely function well toward the lower end of recommendations; others need toward the high end. Experimentation over multiple weeks is the only way to find your personal optimum." },
            { factor: "Sleep debt", detail: "If you've been chronically undersleeping, your 'normal' will feel functional even when it isn't. Several weeks of full sleep are needed before your baseline improves enough to accurately assess your true needs." },
          ].map(({ factor, detail }) => (
            <div key={factor} className="rounded-2xl p-4 border" style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>
              <p className="font-bold text-sm mb-1" style={{ color: "var(--text-primary)" }}>{factor}</p>
              <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ height: "1px", background: "var(--border)" }} />

      {/* Minimum vs optimal */}
      <div>
        <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
          Minimum Sleep vs. Optimal Sleep: There's a Difference
        </h2>
        <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
          There are two different questions: "What's the minimum sleep I need to survive the next day?" and "What's the optimal sleep for my long-term health?" These have different answers.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div className="rounded-2xl p-4 border" style={{ background: "rgba(239,68,68,0.07)", borderColor: "rgba(239,68,68,0.2)" }}>
            <p className="font-bold text-sm mb-2" style={{ color: "#ef4444" }}>Minimum (survival mode)</p>
            <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
              5–6 hours: You can technically function. You'll get through the day. But performance is degraded, immune function is reduced, and long-term health consequences are accumulating silently. This is a debt you're paying with interest.
            </p>
          </div>
          <div className="rounded-2xl p-4 border" style={{ background: "rgba(34,197,94,0.07)", borderColor: "rgba(34,197,94,0.2)" }}>
            <p className="font-bold text-sm mb-2" style={{ color: "#22c55e" }}>Optimal (thriving mode)</p>
            <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
              7–9 hours: Full cognitive performance, emotional regulation, immune strength, metabolic health, and the cardiovascular benefits of regular deep and REM sleep. Research consistently shows that the longest-lived, healthiest populations cluster around 7–8 hours.
            </p>
          </div>
        </div>
        <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          The goal is not to find out how little sleep you can survive on — it's to establish how much sleep allows you to perform, feel, and age optimally. Those are different questions, and optimizing for the wrong one carries real long-term costs.
        </p>
      </div>

      <div style={{ height: "1px", background: "var(--border)" }} />

      {/* Napping */}
      <div>
        <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
          Can Napping Supplement Insufficient Nighttime Sleep?
        </h2>
        <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
          Short naps (10–20 minutes) can restore alertness and improve performance for a few hours. A 90-minute nap can include a full sleep cycle and provide more substantive cognitive restoration. However, napping doesn't fully replace what's lost by shortening nighttime sleep — particularly REM sleep, which is highly concentrated in the final morning hours and can't be fully recovered by daytime napping.
        </p>
        <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          If you consistently need naps to get through the day, this is a reliable signal that your nighttime sleep is insufficient — either in duration, quality, or timing. Treat the root cause rather than patching it indefinitely with naps.
        </p>
      </div>

      <div style={{ height: "1px", background: "var(--border)" }} />

      {/* Related tools */}
      <div>
        <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
          Related Sleep Tools
        </h2>
        <div className="flex flex-wrap gap-3">
          {[
            { href: "/", label: "Sleep Calculator" },
            { href: "/bedtime-calculator/", label: "Bedtime Calculator" },
            { href: "/sleep-debt-calculator/", label: "Sleep Debt Calculator" },
            { href: "/sleep-cycle-calculator/", label: "Sleep Cycle Calculator" },
            { href: "/rem-sleep-calculator/", label: "REM Sleep Calculator" },
            { href: "/nap-calculator/", label: "Nap Calculator" },
          ].map(({ href, label }) => (
            <Link key={href} href={href}
              className="px-4 py-2 rounded-full text-sm font-medium border transition-all hover:opacity-80"
              style={{ background: "var(--bg-card)", borderColor: "var(--border)", color: "var(--accent)", textDecoration: "none" }}>
              {label}
            </Link>
          ))}
        </div>
      </div>

      <p className="text-xs text-center" style={{ color: "var(--text-muted)" }}>
        Sleep duration recommendations are based on guidelines from the National Sleep Foundation and American Academy of Sleep Medicine. Individual sleep needs vary. Consult a physician if you experience chronic excessive daytime sleepiness or suspected sleep disorders.
      </p>
    </section>
  );
}
