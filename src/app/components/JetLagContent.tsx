import Link from "next/link";

export default function JetLagContent() {
  const divider = (
    <div style={{ height: "1px", background: "var(--border)", margin: "2.5rem 0" }} />
  );

  return (
    <section style={{ maxWidth: "800px", margin: "0 auto 3rem", padding: "0 1rem" }}>

      <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--text-secondary)", borderLeft: "3px solid var(--accent)", paddingLeft: "1rem", fontStyle: "italic", marginBottom: "0.5rem" }}>
        A jet lag calculator estimates how many days your body will need to adjust after crossing multiple time zones, and gives you targeted recommendations for melatonin timing, light exposure, and meal scheduling to accelerate recovery. Jet lag is a genuine circadian rhythm disorder — not just tiredness from a long flight.
      </p>

      {divider}

      {/* What is jet lag */}
      <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "1rem" }}>
        What Is Jet Lag and What Actually Causes It?
      </h2>
      <p style={{ fontSize: "0.92rem", lineHeight: 1.8, color: "var(--text-secondary)", marginBottom: "1rem" }}>
        Jet lag happens when your internal circadian clock is misaligned with the local time at your destination. Your body clock doesn't teleport — it shifts gradually, about 1–1.5 hours per day. If you fly from New York to London (a 5-hour eastward jump), your clock still thinks it's 2 AM when London clocks say 7 AM. For the next several days, your sleep, digestion, alertness, and hormones all operate on an internal schedule that's out of sync with your environment.
      </p>
      <p style={{ fontSize: "0.92rem", lineHeight: 1.8, color: "var(--text-secondary)", marginBottom: "1rem" }}>
        Jet lag is classified as a circadian rhythm sleep disorder by the American Academy of Sleep Medicine. It affects not just how you feel but also cognitive performance, immune function, digestion, and athletic performance — which is why sports teams and international business travelers invest significantly in jet lag management.
      </p>

      {divider}

      {/* East vs West */}
      <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "1rem" }}>
        Eastward vs. Westward Travel: Why Direction Matters
      </h2>
      <p style={{ fontSize: "0.92rem", lineHeight: 1.8, color: "var(--text-secondary)", marginBottom: "1rem" }}>
        The direction you fly has a major impact on how severe your jet lag will be. This is because the human circadian clock naturally runs slightly longer than 24 hours (~24.2 hours), making it easier to delay sleep (stay up later) than to advance it (fall asleep earlier).
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
        <div style={{ background: "rgba(239,68,68,0.07)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: "1rem", padding: "1.25rem" }}>
          <p style={{ fontWeight: 700, color: "#ef4444", marginBottom: "0.75rem", fontSize: "1rem" }}>Flying East ✈️ →</p>
          <ul style={{ margin: 0, paddingLeft: "1.25rem" }}>
            {["Requires advancing your clock (going to sleep earlier)", "Harder for most people — clock naturally drifts later", "Recovery: ~1 day per time zone crossed", "Insomnia in the early morning hours is the main symptom"].map(i => <li key={i} style={{ fontSize: "0.87rem", lineHeight: 1.7, color: "var(--text-muted)", marginBottom: "0.3rem" }}>{i}</li>)}
          </ul>
        </div>
        <div style={{ background: "rgba(34,197,94,0.07)", border: "1px solid rgba(34,197,94,0.2)", borderRadius: "1rem", padding: "1.25rem" }}>
          <p style={{ fontWeight: 700, color: "#22c55e", marginBottom: "0.75rem", fontSize: "1rem" }}>Flying West ← ✈️</p>
          <ul style={{ margin: 0, paddingLeft: "1.25rem" }}>
            {["Requires delaying your clock (staying up later)", "Easier — matches natural clock drift direction", "Recovery: ~0.75 days per time zone crossed", "Sleepiness in the evening and early waking are symptoms"].map(i => <li key={i} style={{ fontSize: "0.87rem", lineHeight: 1.7, color: "var(--text-muted)", marginBottom: "0.3rem" }}>{i}</li>)}
          </ul>
        </div>
      </div>

      {divider}

      {/* Recovery table */}
      <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "1rem" }}>
        How Many Days Does Jet Lag Last? Recovery by Time Zones Crossed
      </h2>
      <div style={{ overflowX: "auto", borderRadius: "1rem", border: "1px solid var(--border)", marginBottom: "1rem" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.88rem" }}>
          <thead>
            <tr style={{ background: "var(--bg-card2)" }}>
              {["Time Zones Crossed", "Eastward Recovery", "Westward Recovery", "Severity"].map(h => (
                <th key={h} style={{ padding: "0.75rem 1rem", textAlign: "left", color: "var(--accent-light)", fontWeight: 600 }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              ["1–2 time zones", "1–2 days", "1 day", "Mild"],
              ["3–4 time zones", "3–4 days", "2–3 days", "Moderate"],
              ["5–6 time zones", "5–6 days", "4–5 days", "Significant"],
              ["7–9 time zones", "7–9 days", "5–7 days", "Severe"],
              ["10–12 time zones", "10–12 days", "7–9 days", "Very Severe"],
            ].map(([zones, east, west, sev], i) => (
              <tr key={zones} style={{ borderTop: "1px solid var(--border)", background: i % 2 === 0 ? "transparent" : "var(--bg-card2)" }}>
                <td style={{ padding: "0.75rem 1rem", color: "var(--text-primary)", fontWeight: 500 }}>{zones}</td>
                <td style={{ padding: "0.75rem 1rem", color: "#ef4444" }}>{east}</td>
                <td style={{ padding: "0.75rem 1rem", color: "#22c55e" }}>{west}</td>
                <td style={{ padding: "0.75rem 1rem", color: "var(--text-muted)" }}>{sev}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "1rem" }}>
        These are estimates based on an average adjustment rate of ~1 hour per day eastward, 1.5 hours per day westward. Individual variation, age, and sleep debt at departure significantly affect actual recovery time.
      </p>

      {divider}

      {/* Strategies */}
      <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "1rem" }}>
        Evidence-Based Strategies to Recover from Jet Lag Faster
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1rem" }}>
        {[
          { title: "Time your light exposure correctly", detail: "Light is the most powerful circadian resetter. For eastward travel: seek bright light in the morning at your destination. For westward travel: seek light in the evening. Avoid bright light at the wrong times — it shifts your clock in the wrong direction and extends recovery." },
          { title: "Use melatonin strategically — timing matters more than dose", detail: "0.5–3 mg melatonin taken 30–60 minutes before your target bedtime at the new destination helps advance your clock for eastward travel. Don't take it at random times — the timing relative to your current rhythm is what creates the shift. Low doses (0.5 mg) are often as effective as high doses (5 mg) with fewer side effects." },
          { title: "Arrive with a sleep surplus, not a deficit", detail: "Sleep deprivation dramatically worsens jet lag. In the days before a major international trip, bank extra sleep. Arriving rested means your circadian system is better positioned to adjust quickly and your immune system is stronger — important since travel exposes you to new pathogens." },
          { title: "Anchor to local meal timing immediately", detail: "Eating at local meal times (rather than when you're hungry based on home time) is a secondary zeitgeber — a time cue that helps reset peripheral body clocks in your gut, liver, and metabolic system. Don't skip breakfast at your destination even if you're not hungry." },
          { title: "Pre-shift your schedule before departure", detail: "If you have 3–4 days before a major trip, start shifting your bedtime toward the destination time zone. Go to bed 1 hour earlier per day for eastward travel; 1 hour later for westward. This reduces the adjustment burden once you arrive." },
        ].map(({ title, detail }) => (
          <div key={title} style={{ display: "flex", gap: "0.75rem", background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "1rem", padding: "1rem 1.25rem" }}>
            <span style={{ color: "var(--accent-light)", flexShrink: 0, marginTop: "2px" }}>✓</span>
            <div>
              <p style={{ fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.3rem", fontSize: "0.9rem" }}>{title}</p>
              <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "var(--text-muted)" }}>{detail}</p>
            </div>
          </div>
        ))}
      </div>

      {divider}

      {/* When to avoid naps */}
      <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "1rem" }}>
        Should You Nap After a Long-Haul Flight?
      </h2>
      <p style={{ fontSize: "0.92rem", lineHeight: 1.8, color: "var(--text-secondary)", marginBottom: "1rem" }}>
        The answer depends on arrival time and how misaligned you are with local time. Here's a practical guide:
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0.75rem", marginBottom: "1rem" }}>
        {[
          { scenario: "Arrived before 3 PM local time", rec: "Stay awake until 9–10 PM local. The temporary discomfort accelerates clock adjustment. A short 20-min nap is okay if needed to function.", color: "#22c55e" },
          { scenario: "Arrived between 3–6 PM local time", rec: "A 20-minute nap can prevent over-fatigue before evening. Do NOT sleep longer or later — you'll destroy your first night at the destination.", color: "#f59e0b" },
          { scenario: "Arrived after 6 PM local time", rec: "Skip the nap. Get to your accommodation, do a brief wind-down, and sleep at 9–10 PM local time. Your body needs that first full-night anchor.", color: "#ef4444" },
          { scenario: "Red-eye flight landing at morning", rec: "If you can't function without sleep, nap for exactly 90 minutes (one full sleep cycle) before 2 PM. Avoid sleeping longer, which will lock in the wrong time zone.", color: "#8b5cf6" },
        ].map(({ scenario, rec, color }) => (
          <div key={scenario} style={{ background: "var(--bg-card)", border: `1px solid ${color}30`, borderRadius: "1rem", padding: "1.1rem" }}>
            <p style={{ fontWeight: 700, color, marginBottom: "0.5rem", fontSize: "0.88rem" }}>{scenario}</p>
            <p style={{ fontSize: "0.86rem", lineHeight: 1.6, color: "var(--text-muted)" }}>{rec}</p>
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
          { href: "/bedtime-calculator/", label: "Bedtime Calculator" },
          { href: "/nap-calculator/", label: "Nap Calculator" },
          { href: "/sleep-debt-calculator/", label: "Sleep Debt Calculator" },
          { href: "/chronotype-calculator/", label: "Chronotype Quiz" },
          { href: "/sleep-schedule-builder/", label: "Sleep Schedule Builder" },
        ].map(({ href, label }) => (
          <Link key={href} href={href}
            style={{ padding: "0.5rem 1rem", background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "2rem", color: "var(--accent)", textDecoration: "none", fontSize: "0.9rem", fontWeight: 500 }}>
            {label}
          </Link>
        ))}
      </div>

      <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", textAlign: "center" }}>
        Jet lag recovery estimates are based on average circadian adjustment rates. Individual responses vary based on age, chronotype, sleep debt, and prior travel history. For frequent international travelers experiencing persistent sleep disruption, consult a sleep specialist.
      </p>
    </section>
  );
}
