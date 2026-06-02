import Link from "next/link";

export default function SleepCycleContent() {
  const divider = (
    <div style={{ height: "1px", background: "var(--border)", margin: "2.5rem 0" }} />
  );

  return (
    <section style={{ maxWidth: "800px", margin: "0 auto 3rem", padding: "0 1rem" }}>

      <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--text-secondary)", borderLeft: "3px solid var(--accent)", paddingLeft: "1rem", fontStyle: "italic", marginBottom: "0.5rem" }}>
        A sleep cycle calculator maps out the complete architecture of your night — how many cycles you'll complete, when each stage occurs, and where your alarm will land within your last cycle. Understanding your cycles is the foundation of understanding why you feel rested on some mornings and terrible on others.
      </p>

      {divider}

      {/* What is a sleep cycle */}
      <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "1rem" }}>
        What Is a Sleep Cycle?
      </h2>
      <p style={{ fontSize: "0.92rem", lineHeight: 1.8, color: "var(--text-secondary)", marginBottom: "1rem" }}>
        A sleep cycle is one complete pass through all the stages of sleep — from the lightest stage down to the deepest, and back up through REM sleep. This process repeats roughly every 90 minutes throughout the night, though the exact proportions of each stage shift as your night progresses.
      </p>
      <p style={{ fontSize: "0.92rem", lineHeight: 1.8, color: "var(--text-secondary)", marginBottom: "1rem" }}>
        The average adult completes 4 to 6 sleep cycles per night. Each cycle ends in a brief, light waking (usually too brief to remember) before descending into the next cycle. This is why you might shift position or briefly stir without fully waking — your brain cycles to its lightest point and transitions.
      </p>

      {divider}

      {/* Stage by stage breakdown */}
      <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "1rem" }}>
        The 4 Stages of a Sleep Cycle — What Happens in Each
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "1rem" }}>
        {[
          {
            stage: "NREM Stage 1 — Light Sleep",
            time: "~5 minutes per cycle",
            color: "#6366f1",
            desc: "The transition from wakefulness to sleep. Muscle activity decreases, eye movements slow, and the brain produces theta waves. You can be woken easily and may not even realize you fell asleep. This is the stage where hypnic jerks (that sudden falling sensation) sometimes occur.",
            function: "Function: Sleep entry, muscle relaxation",
          },
          {
            stage: "NREM Stage 2 — Core Sleep",
            time: "~25–30 minutes per cycle",
            color: "#818cf8",
            desc: "The most dominant stage by total time — you spend about 50% of your night here. Sleep spindles and K-complexes appear in brain wave recordings. Body temperature drops, heart rate slows, and the brain begins the process of memory consolidation. It is easier to wake from than deep sleep but harder than Stage 1.",
            function: "Function: Memory consolidation, thermoregulation, motor skill learning",
          },
          {
            stage: "NREM Stage 3 — Deep Sleep (Slow-Wave Sleep)",
            time: "~20–45 min in early cycles, ~5–10 min in later cycles",
            color: "#312e81",
            desc: "The most difficult stage to wake from and the most physically restorative. The brain produces slow delta waves. Growth hormone is released, immune function is enhanced, and cellular repair occurs. Deep sleep is heavily concentrated in the first half of the night — this is why going to bed late cuts into it more than sleeping in does.",
            function: "Function: Physical repair, immune function, growth hormone release",
          },
          {
            stage: "REM Sleep — Rapid Eye Movement",
            time: "~15 min in early cycles, ~45 min in later cycles",
            color: "#a855f7",
            desc: "The brain is nearly as active as when awake. Eyes move rapidly under closed lids. This is the primary dreaming stage. The body is in a state of temporary muscle paralysis (atonia), which prevents you from acting out dreams. REM sleep is critical for emotional regulation, creative thinking, and complex memory consolidation.",
            function: "Function: Emotional processing, creativity, declarative memory, dreaming",
          },
        ].map(({ stage, time, color, desc, function: fn }) => (
          <div key={stage} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "1rem", padding: "1.25rem 1.5rem", borderLeft: `4px solid ${color}` }}>
            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.5rem" }}>
              <p style={{ fontWeight: 700, color: "var(--text-primary)", fontSize: "1rem" }}>{stage}</p>
              <span style={{ fontSize: "0.8rem", color, fontWeight: 600 }}>{time}</span>
            </div>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.7, color: "var(--text-muted)", marginBottom: "0.5rem" }}>{desc}</p>
            <p style={{ fontSize: "0.8rem", color: "var(--accent-light)", fontWeight: 600 }}>{fn}</p>
          </div>
        ))}
      </div>

      {divider}

      {/* How cycles change across the night */}
      <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "1rem" }}>
        How Sleep Cycles Change Across the Night
      </h2>
      <p style={{ fontSize: "0.92rem", lineHeight: 1.8, color: "var(--text-secondary)", marginBottom: "1rem" }}>
        One of the most important and underappreciated facts about sleep is that not all cycles are equal. The composition of each cycle shifts dramatically as your night progresses:
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "0.75rem", marginBottom: "1rem" }}>
        {[
          { label: "Cycles 1–2 (first 3h)", highlight: "Deep sleep dominant", desc: "Up to 45 minutes of NREM Stage 3 per cycle. Minimal REM. This is when physical repair and immune function peak." },
          { label: "Cycle 3 (hours 3–5)", highlight: "Transitional", desc: "Deep sleep begins to reduce. REM expands to ~35 minutes. Brain starts shifting toward processing and memory work." },
          { label: "Cycles 4–6 (last 3h)", highlight: "REM dominant", desc: "Deep sleep nearly disappears — often less than 10 minutes per cycle. REM expands to 45–60 minutes. Dreaming, emotional regulation, and creative consolidation happen here." },
        ].map(({ label, highlight, desc }) => (
          <div key={label} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "1rem", padding: "1rem" }}>
            <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.25rem" }}>{label}</p>
            <p style={{ fontWeight: 700, color: "var(--accent-light)", marginBottom: "0.5rem", fontSize: "0.9rem" }}>{highlight}</p>
            <p style={{ fontSize: "0.85rem", lineHeight: 1.6, color: "var(--text-muted)" }}>{desc}</p>
          </div>
        ))}
      </div>
      <div style={{ background: "rgba(108,99,255,0.07)", border: "1px solid rgba(108,99,255,0.2)", borderRadius: "1rem", padding: "1rem 1.25rem", fontSize: "0.88rem", color: "var(--text-secondary)" }}>
        <strong style={{ color: "var(--text-primary)" }}>What this means practically:</strong> Cutting your sleep short by 90 minutes doesn't just reduce sleep by 17% — it eliminates most of your REM sleep, which comes almost entirely in the final cycles. Sleeping 6 hours instead of 7.5 hours removes your last two full REM cycles.
      </div>

      {divider}

      {/* 90 min cycle myth */}
      <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "1rem" }}>
        Is the 90-Minute Sleep Cycle Really Accurate?
      </h2>
      <p style={{ fontSize: "0.92rem", lineHeight: 1.8, color: "var(--text-secondary)", marginBottom: "1rem" }}>
        The 90-minute figure is a population average, not a universal law. Individual sleep cycle lengths range from approximately 70 to 120 minutes, and even within the same person, cycles vary in length across the night and from one night to the next.
      </p>
      <p style={{ fontSize: "0.92rem", lineHeight: 1.8, color: "var(--text-secondary)", marginBottom: "1rem" }}>
        That said, 90 minutes works well as a planning tool for most people. If you consistently feel groggy despite waking at the suggested cycle-end times, try adjusting by ±15 minutes to find your personal cycle length. Many people find their natural cycle is 85 or 100 minutes rather than exactly 90.
      </p>
      <div style={{ background: "var(--bg-card2)", border: "1px solid var(--border)", borderRadius: "1rem", padding: "1rem 1.25rem", fontSize: "0.88rem", color: "var(--text-muted)" }}>
        <strong style={{ color: "var(--text-primary)" }}>Tip:</strong> The most accurate way to find your cycle length is to note the time you fall asleep and the time you naturally wake up without an alarm over several nights. Divide the total sleep time by the number of times you remember briefly stirring — each stir typically corresponds to a cycle-end.
      </div>

      {divider}

      {/* How many cycles do you need */}
      <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "1rem" }}>
        How Many Sleep Cycles Do You Actually Need?
      </h2>
      <div style={{ overflowX: "auto", borderRadius: "1rem", border: "1px solid var(--border)", marginBottom: "1rem" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.88rem" }}>
          <thead>
            <tr style={{ background: "var(--bg-card2)" }}>
              {["Cycles", "Total Sleep", "Best For", "Who It Works For"].map(h => (
                <th key={h} style={{ padding: "0.75rem 1rem", textAlign: "left", color: "var(--accent-light)", fontWeight: 600 }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              ["4 cycles", "6 hours", "Minimum viable", "Some adults short-term; not sustainable for most"],
              ["5 cycles", "7.5 hours", "Sweet spot", "Most adults — optimal balance of deep sleep and REM"],
              ["6 cycles", "9 hours", "Recovery / growth", "Teenagers, athletes, illness recovery, sleep debt payback"],
              ["7 cycles", "10.5 hours", "Extended recovery", "Severe sleep debt; not needed regularly for healthy adults"],
            ].map(([cycles, sleep, purpose, who], i) => (
              <tr key={cycles} style={{ borderTop: "1px solid var(--border)", background: i % 2 === 0 ? "transparent" : "var(--bg-card2)" }}>
                <td style={{ padding: "0.75rem 1rem", fontWeight: 700, color: i === 1 ? "var(--accent-light)" : "var(--text-primary)" }}>{cycles}</td>
                <td style={{ padding: "0.75rem 1rem", color: "var(--text-primary)" }}>{sleep}</td>
                <td style={{ padding: "0.75rem 1rem", color: "var(--text-muted)" }}>{purpose}</td>
                <td style={{ padding: "0.75rem 1rem", color: "var(--text-muted)" }}>{who}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {divider}

      {/* Related tools */}
      <h2 style={{ fontSize: "1.3rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "1rem" }}>
        Related Sleep Tools
      </h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginBottom: "2rem" }}>
        {[
          { href: "/bedtime-calculator/", label: "Bedtime Calculator" },
          { href: "/wake-up-time-calculator/", label: "Wake-Up Time Calculator" },
          { href: "/rem-sleep-calculator/", label: "REM Sleep Calculator" },
          { href: "/sleep-debt-calculator/", label: "Sleep Debt Calculator" },
          { href: "/nap-calculator/", label: "Nap Calculator" },
          { href: "/how-much-sleep-do-i-need/", label: "How Much Sleep Do I Need?" },
        ].map(({ href, label }) => (
          <Link key={href} href={href}
            style={{ padding: "0.5rem 1rem", background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "2rem", color: "var(--accent)", textDecoration: "none", fontSize: "0.9rem", fontWeight: 500 }}>
            {label}
          </Link>
        ))}
      </div>

      <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", textAlign: "center" }}>
        Sleep cycle visualization is based on average population data. Individual cycle lengths and stage durations vary. If you suspect a sleep disorder is disrupting your cycles, consult a sleep specialist.
      </p>
    </section>
  );
}
