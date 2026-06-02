import Link from "next/link";

export default function ScheduleBuilderContent() {
  const divider = (
    <div style={{ height: "1px", background: "var(--border)", margin: "2.5rem 0" }} />
  );

  return (
    <section style={{ maxWidth: "800px", margin: "0 auto 3rem", padding: "0 1rem" }}>

      <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--text-secondary)", borderLeft: "3px solid var(--accent)", paddingLeft: "1rem", fontStyle: "italic", marginBottom: "0.5rem" }}>
        A sleep schedule builder helps you map out consistent bedtimes and wake times for every day of the week, aligned with your chronotype, work schedule, and sleep needs. Consistency is the single most powerful lever in sleep science — more impactful than any supplement or device.
      </p>

      {divider}

      {/* Why schedule matters */}
      <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "1rem" }}>
        Why a Sleep Schedule Matters More Than Total Hours
      </h2>
      <p style={{ fontSize: "0.92rem", lineHeight: 1.8, color: "var(--text-secondary)", marginBottom: "1rem" }}>
        Most people think sleep quantity is everything. But research consistently shows that <em>when</em> you sleep matters as much as how long you sleep. Two people sleeping the same number of hours can have dramatically different outcomes based on whether their sleep timing is consistent or erratic.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0.75rem", marginBottom: "1rem" }}>
        {[
          { icon: "⏰", title: "Circadian anchoring", desc: "A fixed wake time anchors your circadian clock. This regulates when melatonin rises, when cortisol peaks, and when you get hungry — all of which feed back into sleep quality." },
          { icon: "😴", title: "Sleep pressure buildup", desc: "Waking at the same time every day ensures your adenosine (sleep pressure) accumulates consistently, making it reliably easier to fall asleep at the same bedtime each night." },
          { icon: "🧠", title: "Cognitive performance", desc: "Consistent sleepers outperform irregular sleepers on cognitive tests even when total sleep hours are equal. Timing predictability allows the brain to optimize sleep stage sequencing." },
          { icon: "❤️", title: "Metabolic and cardiac health", desc: "Irregular sleep schedules are independently associated with higher rates of obesity, insulin resistance, and cardiovascular disease — beyond what sleep duration alone predicts." },
        ].map(({ icon, title, desc }) => (
          <div key={title} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "1rem", padding: "1.25rem" }}>
            <p style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>{icon}</p>
            <p style={{ fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.4rem", fontSize: "0.9rem" }}>{title}</p>
            <p style={{ fontSize: "0.85rem", lineHeight: 1.6, color: "var(--text-muted)" }}>{desc}</p>
          </div>
        ))}
      </div>

      {divider}

      {/* How to build a sleep schedule */}
      <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "1rem" }}>
        How to Build a Sleep Schedule in 5 Steps
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1rem" }}>
        {[
          { step: "1", title: "Determine your fixed wake time", detail: "Choose the earliest time you must wake on any day of the week — typically your earliest work or school day. This becomes your anchor. You'll apply it every day, including weekends, within a 30-minute window." },
          { step: "2", title: "Work backward to your bedtime", detail: "From your wake time, subtract your target sleep duration (7.5–9 hours for most adults). Account for 15–20 minutes of sleep onset time — most people don't fall asleep the instant they lie down. This gives your target \"lights out\" time." },
          { step: "3", title: "Establish a wind-down window", detail: "Schedule 30–60 minutes before bedtime as a decompression period: no screens, no work, no intense exercise. This is the most underrated sleep intervention — a consistent pre-sleep ritual helps your nervous system shift gears. Reading, stretching, or a warm shower all work." },
          { step: "4", title: "Identify schedule conflicts and plan for them", detail: "Social events, late nights, travel — disruptions will happen. Plan your response in advance: you can stay up late occasionally, but your wake time should stay fixed to prevent your rhythm from drifting. Use short naps if you're temporarily sleep-deprived." },
          { step: "5", title: "Adjust gradually if shifting to a new schedule", detail: "Don't jump 3 hours earlier overnight. Shift by 15–30 minutes every 2–3 days. Aggressive shifts cause more disruption than the original misaligned schedule. Pair the shift with morning bright light exposure to accelerate circadian adjustment." },
        ].map(({ step, title, detail }) => (
          <div key={step} style={{ display: "flex", gap: "1rem", background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "1rem", padding: "1.1rem 1.25rem" }}>
            <div style={{ width: "2rem", height: "2rem", borderRadius: "50%", background: "var(--accent)", color: "#fff", fontWeight: 700, fontSize: "0.9rem", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>{step}</div>
            <div>
              <p style={{ fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.3rem", fontSize: "0.9rem" }}>{title}</p>
              <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "var(--text-muted)" }}>{detail}</p>
            </div>
          </div>
        ))}
      </div>

      {divider}

      {/* Sample schedules */}
      <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "1rem" }}>
        Sample Sleep Schedules by Chronotype and Lifestyle
      </h2>
      <div style={{ overflowX: "auto", borderRadius: "1rem", border: "1px solid var(--border)", marginBottom: "1rem" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.88rem" }}>
          <thead>
            <tr style={{ background: "var(--bg-card2)" }}>
              {["Profile", "Bedtime", "Wake Time", "Wind-Down Starts", "Sleep Duration"].map(h => (
                <th key={h} style={{ padding: "0.75rem 1rem", textAlign: "left", color: "var(--accent-light)", fontWeight: 600 }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              ["Early riser / Lion", "9:30 PM", "5:30 AM", "9:00 PM", "8 hours"],
              ["Standard 9-to-5 / Bear", "10:30 PM", "6:30 AM", "9:45 PM", "8 hours"],
              ["Flexible remote worker / Bear-Wolf", "11:30 PM", "7:30 AM", "10:45 PM", "8 hours"],
              ["Night owl / Wolf (adjusted)", "12:00 AM", "8:00 AM", "11:15 PM", "8 hours"],
              ["Parent with young child", "9:00 PM", "5:30 AM", "8:30 PM", "8.5 hours"],
              ["Student on early schedule", "10:00 PM", "6:00 AM", "9:15 PM", "8 hours"],
            ].map(([profile, bed, wake, wind, dur], i) => (
              <tr key={profile} style={{ borderTop: "1px solid var(--border)", background: i % 2 === 0 ? "transparent" : "var(--bg-card2)" }}>
                <td style={{ padding: "0.75rem 1rem", color: "var(--text-primary)", fontWeight: 500 }}>{profile}</td>
                <td style={{ padding: "0.75rem 1rem", color: "var(--text-muted)" }}>{bed}</td>
                <td style={{ padding: "0.75rem 1rem", color: "var(--text-muted)" }}>{wake}</td>
                <td style={{ padding: "0.75rem 1rem", color: "var(--text-muted)" }}>{wind}</td>
                <td style={{ padding: "0.75rem 1rem", color: "var(--accent-light)", fontWeight: 600 }}>{dur}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {divider}

      {/* Weekend sleep */}
      <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "1rem" }}>
        The Weekend Problem: Why "Catching Up" on Sleep Backfires
      </h2>
      <p style={{ fontSize: "0.92rem", lineHeight: 1.8, color: "var(--text-secondary)", marginBottom: "1rem" }}>
        Sleeping until 10 AM on Saturdays feels restorative — and in some ways it is, reducing acute sleepiness. But it also delays your circadian clock by several hours, making Sunday night sleep harder to initiate and setting you up for Monday fatigue. Research calls this "social jet lag."
      </p>
      <div style={{ background: "rgba(239,68,68,0.07)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: "1rem", padding: "1rem 1.25rem", marginBottom: "1rem" }}>
        <p style={{ fontWeight: 700, color: "#ef4444", marginBottom: "0.5rem", fontSize: "0.9rem" }}>⚠️ The cost of weekend oversleeping:</p>
        <ul style={{ margin: 0, paddingLeft: "1.25rem" }}>
          {[
            "Delays melatonin onset on Sunday night — making it harder to fall asleep at your workday bedtime",
            "Can shift your clock by 1–2 hours, creating a mini-jet-lag every Monday",
            "Doesn't fully repay cognitive debt — reaction time and complex reasoning remain impaired even after recovery sleep",
            "Breaks the adenosine cycle, making it harder to feel sleepy at your normal bedtime",
          ].map(item => <li key={item} style={{ fontSize: "0.88rem", lineHeight: 1.7, color: "var(--text-muted)", marginBottom: "0.3rem" }}>{item}</li>)}
        </ul>
      </div>
      <p style={{ fontSize: "0.92rem", lineHeight: 1.8, color: "var(--text-secondary)", marginBottom: "1rem" }}>
        <strong style={{ color: "var(--text-primary)" }}>The better approach:</strong> Keep wake time within 30 minutes of your weekday time even on weekends. If you're sleep-deprived, go to bed 1 hour earlier rather than sleeping later. A 20-minute nap in the early afternoon can supplement recovery without disrupting your clock.
      </p>

      {divider}

      {/* Related tools */}
      <h2 style={{ fontSize: "1.3rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "1rem" }}>
        Related Sleep Tools
      </h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginBottom: "2rem" }}>
        {[
          { href: "/bedtime-calculator/", label: "Bedtime Calculator" },
          { href: "/chronotype-calculator/", label: "Chronotype Quiz" },
          { href: "/sleep-debt-calculator/", label: "Sleep Debt Calculator" },
          { href: "/nap-calculator/", label: "Nap Calculator" },
          { href: "/how-much-sleep-do-i-need/", label: "How Much Sleep Do I Need" },
        ].map(({ href, label }) => (
          <Link key={href} href={href}
            style={{ padding: "0.5rem 1rem", background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "2rem", color: "var(--accent)", textDecoration: "none", fontSize: "0.9rem", fontWeight: 500 }}>
            {label}
          </Link>
        ))}
      </div>

      <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", textAlign: "center" }}>
        Sleep schedule recommendations are based on general sleep science guidelines. Individual needs vary. If you experience chronic insomnia or excessive daytime sleepiness, consult a sleep specialist.
      </p>
    </section>
  );
}
