import Link from "next/link";

export default function REMContent() {
  const divider = (
    <div style={{ height: "1px", background: "var(--border)", margin: "2.5rem 0" }} />
  );

  return (
    <section style={{ maxWidth: "800px", margin: "0 auto 3rem", padding: "0 1rem" }}>

      <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--text-secondary)", borderLeft: "3px solid var(--accent)", paddingLeft: "1rem", fontStyle: "italic", marginBottom: "0.5rem" }}>
        A REM sleep calculator estimates how much rapid eye movement sleep you're getting based on your bedtime, wake-up time, and how sleep cycles are structured. REM is the most cognitively active stage of sleep — and the most commonly sacrificed when people cut corners on sleep hours.
      </p>

      {divider}

      {/* What is REM */}
      <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "1rem" }}>
        What Is REM Sleep and Why Does It Matter?
      </h2>
      <p style={{ fontSize: "0.92rem", lineHeight: 1.8, color: "var(--text-secondary)", marginBottom: "1rem" }}>
        REM sleep — Rapid Eye Movement sleep — is the stage where your brain becomes almost as active as when you're fully awake. Your eyes move rapidly under closed lids, your muscles enter a state of temporary paralysis (called atonia, which prevents you from acting out dreams), and the most vivid dreaming occurs.
      </p>
      <p style={{ fontSize: "0.92rem", lineHeight: 1.8, color: "var(--text-secondary)", marginBottom: "1rem" }}>
        REM isn't just the "dreaming stage" — it performs critical maintenance functions that no other sleep stage can replicate:
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "0.75rem", marginBottom: "1rem" }}>
        {[
          { icon: "🧠", title: "Emotional memory processing", desc: "REM strips the emotional charge from difficult memories while preserving the information. People deprived of REM show heightened emotional reactivity to negative stimuli." },
          { icon: "💡", title: "Creative problem solving", desc: "REM sleep is when the brain forms novel connections between unrelated ideas. Many creative insights and 'eureka moments' happen after a REM-rich night." },
          { icon: "📚", title: "Complex memory consolidation", desc: "Procedural and associative learning — skills, patterns, language — are specifically consolidated during REM. Cutting short your sleep reduces how much of yesterday's learning you retain." },
          { icon: "🌡️", title: "Thermoregulation reset", desc: "During REM, your body temporarily loses its ability to regulate temperature. This resets your thermal system, which supports the metabolic processes of the next day." },
        ].map(({ icon, title, desc }) => (
          <div key={title} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "1rem", padding: "1.25rem" }}>
            <p style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>{icon}</p>
            <p style={{ fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.4rem", fontSize: "0.9rem" }}>{title}</p>
            <p style={{ fontSize: "0.85rem", lineHeight: 1.6, color: "var(--text-muted)" }}>{desc}</p>
          </div>
        ))}
      </div>

      {divider}

      {/* How much REM is normal */}
      <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "1rem" }}>
        How Much REM Sleep Is Normal? REM by Age
      </h2>
      <p style={{ fontSize: "0.92rem", lineHeight: 1.8, color: "var(--text-secondary)", marginBottom: "1rem" }}>
        The proportion of sleep spent in REM changes dramatically across your lifespan. Newborns spend nearly 50% of their sleep in REM — believed to support rapid brain development. This proportion declines steadily through childhood and stabilizes in adulthood.
      </p>
      <div style={{ overflowX: "auto", borderRadius: "1rem", border: "1px solid var(--border)", marginBottom: "1rem" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.88rem" }}>
          <thead>
            <tr style={{ background: "var(--bg-card2)" }}>
              {["Age Group", "Total Sleep Needed", "% in REM", "Est. REM Hours"].map(h => (
                <th key={h} style={{ padding: "0.75rem 1rem", textAlign: "left", color: "var(--accent-light)", fontWeight: 600 }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              ["Newborns (0–3 months)", "14–17 hours", "~50%", "7–8.5 hours"],
              ["Infants (4–12 months)", "12–16 hours", "~40%", "5–6.5 hours"],
              ["Toddlers (1–3 years)", "11–14 hours", "~30–35%", "3.5–5 hours"],
              ["School-age (6–12 years)", "9–12 hours", "~25%", "2.5–3 hours"],
              ["Teenagers (13–18 years)", "8–10 hours", "~20–25%", "1.8–2.5 hours"],
              ["Adults (18–64 years)", "7–9 hours", "~20–25%", "1.5–2.25 hours"],
              ["Older adults (65+)", "7–8 hours", "~15–20%", "1.1–1.6 hours"],
            ].map(([age, sleep, pct, est], i) => (
              <tr key={age} style={{ borderTop: "1px solid var(--border)", background: i % 2 === 0 ? "transparent" : "var(--bg-card2)" }}>
                <td style={{ padding: "0.75rem 1rem", color: "var(--text-primary)", fontWeight: 500 }}>{age}</td>
                <td style={{ padding: "0.75rem 1rem", color: "var(--text-muted)" }}>{sleep}</td>
                <td style={{ padding: "0.75rem 1rem", color: "var(--text-muted)" }}>{pct}</td>
                <td style={{ padding: "0.75rem 1rem", color: "var(--accent-light)", fontWeight: 600 }}>{est}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "1rem" }}>
        For a healthy adult sleeping 7.5 hours, roughly 90–110 minutes should be REM sleep — concentrated almost entirely in the last 3 hours of the night.
      </p>

      {divider}

      {/* Why REM is at the end */}
      <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "1rem" }}>
        Why REM Sleep Is Concentrated at the End of the Night
      </h2>
      <p style={{ fontSize: "0.92rem", lineHeight: 1.8, color: "var(--text-secondary)", marginBottom: "1rem" }}>
        REM sleep doesn't appear in equal amounts throughout the night. In your first one or two sleep cycles, REM periods are brief — often only 5 to 15 minutes. In your final cycles (cycles 4–6), REM can extend to 45–60 minutes per cycle.
      </p>
      <p style={{ fontSize: "0.92rem", lineHeight: 1.8, color: "var(--text-secondary)", marginBottom: "1rem" }}>
        This means that cutting your sleep short by 90 minutes doesn't just reduce total sleep by 17% — it eliminates one or two full REM cycles, reducing your total REM time by 50–60%. This is why even mild sleep restriction has such pronounced effects on mood, emotional regulation, and creativity.
      </p>
      <div style={{ background: "rgba(239,68,68,0.07)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: "1rem", padding: "1rem 1.25rem", marginBottom: "1rem" }}>
        <p style={{ fontWeight: 700, color: "#ef4444", marginBottom: "0.5rem", fontSize: "0.9rem" }}>⚠️ The REM theft problem:</p>
        <p style={{ fontSize: "0.88rem", lineHeight: 1.7, color: "var(--text-muted)" }}>
          Setting an alarm 1–2 hours earlier than your natural wake time cuts specifically into your final REM cycles. This is why "I only got 6 hours but they were good hours" is often not accurate — 6 hours of sleep is structurally different from 7.5 hours, not just shorter.
        </p>
      </div>

      {divider}

      {/* REM rebound */}
      <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "1rem" }}>
        What Is REM Rebound?
      </h2>
      <p style={{ fontSize: "0.92rem", lineHeight: 1.8, color: "var(--text-secondary)", marginBottom: "1rem" }}>
        REM rebound is your brain's compensatory response to REM deprivation. After a period of insufficient REM sleep — whether due to sleep restriction, alcohol, medications, or sleep disorders — your brain dramatically increases the proportion of REM sleep on subsequent nights.
      </p>
      <p style={{ fontSize: "0.92rem", lineHeight: 1.8, color: "var(--text-secondary)", marginBottom: "1rem" }}>
        REM rebound nights are often characterized by intensely vivid, emotionally charged dreams. If you've had a few nights of poor sleep followed by a long recovery sleep and noticed unusually vivid dreams, you experienced REM rebound. This is the brain repaying its REM debt.
      </p>
      <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "1rem", padding: "1rem 1.25rem", fontSize: "0.88rem", color: "var(--text-muted)" }}>
        <strong style={{ color: "var(--text-primary)" }}>Common causes of REM suppression:</strong>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.4rem", marginTop: "0.75rem" }}>
          {["Alcohol (even moderate amounts)", "Many antidepressants (SSRIs)", "Sleep restriction / short sleep", "Benzodiazepines and sleep aids", "Cannabis use", "Sleep apnea"].map(cause => (
            <div key={cause} style={{ display: "flex", gap: "0.5rem" }}>
              <span style={{ color: "#ef4444", flexShrink: 0 }}>—</span>{cause}
            </div>
          ))}
        </div>
      </div>

      {divider}

      {/* Signs of REM deprivation */}
      <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "1rem" }}>
        Signs You're Not Getting Enough REM Sleep
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1rem" }}>
        {[
          { sign: "Persistent emotional reactivity", desc: "Feeling more irritable, anxious, or emotionally volatile than usual — especially in response to moderate stressors that you'd normally handle well." },
          { sign: "Reduced creativity and mental flexibility", desc: "Difficulty seeing problems from new angles, connecting unrelated ideas, or coming up with novel solutions. REM is when associative thinking is consolidated." },
          { sign: "Poor retention of complex learning", desc: "Things you studied, practiced, or worked on feel less accessible. REM consolidates the 'how' of skills and the 'why' behind patterns." },
          { sign: "Dreaming less or not remembering dreams", desc: "People who rarely remember dreams are often waking before their final REM cycles complete. Longer, more vivid dreams late in the night are a sign of adequate REM." },
        ].map(({ sign, desc }) => (
          <div key={sign} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "1rem", padding: "1rem 1.25rem" }}>
            <p style={{ fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.4rem", fontSize: "0.9rem" }}>{sign}</p>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "var(--text-muted)" }}>{desc}</p>
          </div>
        ))}
      </div>

      {divider}

      {/* How to increase REM */}
      <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "1rem" }}>
        How to Get More REM Sleep
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1rem" }}>
        {[
          { title: "Sleep longer — specifically, don't cut the last cycle", desc: "The single most effective way to increase REM sleep. Adding 90 minutes to your sleep time doesn't add 90 minutes of mixed sleep — it adds almost entirely a full REM-dominant cycle." },
          { title: "Avoid alcohol, especially in the second half of the night", desc: "Alcohol is one of the most potent REM suppressors available. Even two drinks significantly reduce REM sleep, particularly in the early-morning hours when REM is most abundant." },
          { title: "Maintain a consistent sleep schedule", desc: "Your circadian rhythm regulates when REM occurs. Irregular sleep timing disrupts this scheduling, fragmenting and reducing REM even when total sleep hours are adequate." },
          { title: "Reduce cannabis use before bed", desc: "THC suppresses REM sleep. Habitual cannabis users often report not dreaming — a reliable marker of REM suppression. Sleep quality typically improves after discontinuation." },
        ].map(({ title, desc }) => (
          <div key={title} style={{ display: "flex", gap: "0.75rem", background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "1rem", padding: "1rem 1.25rem" }}>
            <span style={{ color: "var(--accent-light)", flexShrink: 0, marginTop: "2px" }}>✓</span>
            <div>
              <p style={{ fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.3rem", fontSize: "0.9rem" }}>{title}</p>
              <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "var(--text-muted)" }}>{desc}</p>
            </div>
          </div>
        ))}
      </div>

      {divider}

      {/* Related tools */}
      <h2 style={{ fontSize: "1.3rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "1rem" }}>
        Related Sleep Tools
      </h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginBottom: "2rem" }}>
        {[
          { href: "/sleep-cycle-calculator/", label: "Sleep Cycle Calculator" },
          { href: "/bedtime-calculator/", label: "Bedtime Calculator" },
          { href: "/wake-up-time-calculator/", label: "Wake-Up Time Calculator" },
          { href: "/sleep-debt-calculator/", label: "Sleep Debt Calculator" },
          { href: "/nap-calculator/", label: "Nap Calculator" },
        ].map(({ href, label }) => (
          <Link key={href} href={href}
            style={{ padding: "0.5rem 1rem", background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "2rem", color: "var(--accent)", textDecoration: "none", fontSize: "0.9rem", fontWeight: 500 }}>
            {label}
          </Link>
        ))}
      </div>

      <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", textAlign: "center" }}>
        REM estimates are based on population-average cycle compositions. Actual REM amounts vary based on age, medications, alcohol consumption, and individual sleep architecture. For clinical sleep assessment, consult a sleep specialist.
      </p>
    </section>
  );
}
