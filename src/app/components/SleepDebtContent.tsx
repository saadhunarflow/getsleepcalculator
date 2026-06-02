import Link from "next/link";

export default function SleepDebtContent() {
  const divider = (
    <div style={{ height: "1px", background: "var(--border)", margin: "2.5rem 0" }} />
  );

  return (
    <section style={{ maxWidth: "800px", margin: "0 auto 3rem", padding: "0 1rem" }}>

      <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--text-secondary)", borderLeft: "3px solid var(--accent)", paddingLeft: "1rem", fontStyle: "italic", marginBottom: "0.5rem" }}>
        Sleep debt is the gap between the sleep your body needs and the sleep it actually gets. Unlike financial debt, you can't clearly "pay it back" in one shot — but you can reduce it systematically. The calculator above shows you exactly where your current week stands.
      </p>

      {divider}

      {/* Signs you have sleep debt */}
      <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "1rem" }}>
        Signs You're Carrying Sleep Debt
      </h2>
      <p style={{ fontSize: "0.92rem", lineHeight: 1.8, color: "var(--text-secondary)", marginBottom: "1rem" }}>
        Sleep debt is insidious because the brain adapts to its impaired state. After several days of insufficient sleep, you may genuinely feel "fine" — but objective tests consistently show significant cognitive and physical deficits. This adaptation is why most people underestimate how sleep-deprived they are.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "0.75rem", marginBottom: "1rem" }}>
        {[
          { icon: "🧠", label: "Cognitive", signs: ["Trouble concentrating", "Poor decision-making", "Slower reaction time", "Reduced working memory"] },
          { icon: "😤", label: "Emotional", signs: ["Irritability", "Low stress tolerance", "Mood swings", "Anxiety or low mood"] },
          { icon: "🏃", label: "Physical", signs: ["Increased hunger / cravings", "Coordination problems", "Weakened immune response", "Elevated cortisol"] },
          { icon: "😴", label: "Sleep behavior", signs: ["Falling asleep within minutes of lying down", "Needing an alarm to wake up", "Sleeping in significantly on days off", "Needing coffee to function"] },
        ].map(({ icon, label, signs }) => (
          <div key={label} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "1rem", padding: "1rem" }}>
            <p style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>{icon}</p>
            <p style={{ fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.5rem", fontSize: "0.9rem" }}>{label}</p>
            {signs.map(s => (
              <div key={s} style={{ display: "flex", gap: "0.5rem", fontSize: "0.82rem", color: "var(--text-muted)", marginBottom: "0.3rem" }}>
                <span style={{ color: "#ef4444", flexShrink: 0 }}>—</span>{s}
              </div>
            ))}
          </div>
        ))}
      </div>

      {divider}

      {/* How much sleep debt is too much */}
      <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "1rem" }}>
        How Much Sleep Debt Is Too Much?
      </h2>
      <p style={{ fontSize: "0.92rem", lineHeight: 1.8, color: "var(--text-secondary)", marginBottom: "1rem" }}>
        Research from the University of Pennsylvania found that sleeping just 6 hours per night for two weeks produces cognitive impairment equivalent to going completely without sleep for 24 hours — yet the participants reported feeling only "slightly sleepy." The impairment was real; the self-awareness was not.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1rem" }}>
        {[
          { range: "0–1 hour weekly deficit", label: "Mild", desc: "Minimal cognitive impact. A single extra sleep session of 30–60 minutes can restore baseline.", color: "#22c55e" },
          { range: "1–5 hours weekly deficit", label: "Moderate", desc: "Noticeable fatigue, mood effects, and reduced cognitive performance. Requires 3–5 nights of extended sleep to recover.", color: "#f59e0b" },
          { range: "5–10 hours weekly deficit", label: "Significant", desc: "Chronic impairment to memory, concentration, emotional regulation, and immune function. Cannot be fully recovered in a weekend.", color: "#ef4444" },
          { range: "10+ hours weekly deficit", label: "Severe", desc: "Associated with long-term health risks including cardiovascular disease, metabolic disorders, and increased accident risk. Requires medical evaluation if persistent.", color: "#dc2626" },
        ].map(({ range, label, desc, color }) => (
          <div key={range} style={{ display: "flex", gap: "1rem", background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "1rem", padding: "1rem 1.25rem" }}>
            <div style={{ flexShrink: 0, minWidth: "80px" }}>
              <p style={{ fontWeight: 700, fontSize: "0.82rem", color }}>{label}</p>
              <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", lineHeight: 1.4 }}>{range}</p>
            </div>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.7, color: "var(--text-muted)" }}>{desc}</p>
          </div>
        ))}
      </div>

      {divider}

      {/* Can you pay it back */}
      <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "1rem" }}>
        Can You Pay Back Sleep Debt? What the Research Says
      </h2>
      <p style={{ fontSize: "0.92rem", lineHeight: 1.8, color: "var(--text-secondary)", marginBottom: "1rem" }}>
        Short answer: partially, and slowly. Research shows that short-term sleep debt (a few days of insufficient sleep) can be substantially recovered by sleeping longer over the following days. However, chronic sleep debt — accumulated over weeks or months — is harder to reverse and may leave permanent effects on some cognitive measures.
      </p>
      <p style={{ fontSize: "0.92rem", lineHeight: 1.8, color: "var(--text-secondary)", marginBottom: "1rem" }}>
        A 2019 study published in <em>Current Biology</em> found that weekend "catch-up sleep" partially offset the metabolic effects of weekday sleep restriction, but subjects who slept restricted hours all seven days showed the worst outcomes — suggesting that consistent short sleep is more damaging than variable sleep with recovery time.
      </p>
      <div style={{ background: "rgba(108,99,255,0.07)", border: "1px solid rgba(108,99,255,0.2)", borderRadius: "1rem", padding: "1.25rem", marginBottom: "1rem" }}>
        <p style={{ fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.5rem", fontSize: "0.95rem" }}>Practical recovery timeline:</p>
        {[
          "1–2 hours of debt: recoverable in 1–2 nights by adding 30–45 minutes of extra sleep",
          "3–7 hours of debt: requires 3–5 nights of extended sleep (add 1 hour per night)",
          "7–14 hours of debt: may take 1–2 weeks of consistently longer sleep to restore baseline function",
          "Chronic debt (months or years): requires sustained lifestyle change — there is no shortcut",
        ].map((item, i) => (
          <div key={i} style={{ display: "flex", gap: "0.75rem", fontSize: "0.88rem", color: "var(--text-muted)", marginBottom: "0.5rem" }}>
            <span style={{ color: "var(--accent-light)", fontWeight: 700, flexShrink: 0 }}>{i + 1}.</span>
            {item}
          </div>
        ))}
      </div>

      {divider}

      {/* Sleep debt and health */}
      <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "1rem" }}>
        Long-Term Effects of Unresolved Sleep Debt
      </h2>
      <p style={{ fontSize: "0.92rem", lineHeight: 1.8, color: "var(--text-secondary)", marginBottom: "1rem" }}>
        Chronic sleep debt — consistently getting less sleep than your body needs — is associated with a significant list of long-term health risks. These are not theoretical correlations; they appear in large longitudinal studies across diverse populations:
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem", marginBottom: "1rem" }}>
        {[
          { icon: "❤️", title: "Cardiovascular risk", desc: "Sleeping fewer than 6 hours per night is associated with a 20% higher risk of heart attack and a 48% higher risk of developing or dying from coronary heart disease." },
          { icon: "🍬", title: "Metabolic effects", desc: "Sleep deprivation reduces insulin sensitivity and raises ghrelin (hunger hormone) levels, increasing appetite and cravings for high-calorie food. Linked to higher obesity and type 2 diabetes risk." },
          { icon: "🛡️", title: "Immune function", desc: "After just one week of sleeping 6 hours, gene expression related to immune function is significantly altered. Sleep-deprived people are 4x more likely to catch a cold when exposed to the rhinovirus." },
          { icon: "🧠", title: "Cognitive decline", desc: "Chronic sleep debt is associated with accelerated cognitive aging and increased amyloid-beta accumulation — one of the protein hallmarks of Alzheimer's disease — in the brain." },
        ].map(({ icon, title, desc }) => (
          <div key={title} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "1rem", padding: "1.25rem" }}>
            <p style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{icon}</p>
            <p style={{ fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.4rem", fontSize: "0.95rem" }}>{title}</p>
            <p style={{ fontSize: "0.85rem", lineHeight: 1.6, color: "var(--text-muted)" }}>{desc}</p>
          </div>
        ))}
      </div>

      {divider}

      {/* Prevention */}
      <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "1rem" }}>
        How to Prevent Sleep Debt from Accumulating
      </h2>
      <p style={{ fontSize: "0.92rem", lineHeight: 1.8, color: "var(--text-secondary)", marginBottom: "1rem" }}>
        The most effective approach to sleep debt is prevention. Once you're in significant debt, recovery is slow. Building a consistent sleep schedule that delivers the hours you actually need is vastly more effective than cycling between deprivation and catch-up.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1rem" }}>
        {[
          { title: "Know your actual sleep need", desc: "Most adults need 7–9 hours. A simple test: on your next vacation, sleep without an alarm for several days. The hours you naturally stabilize at are your true need — not your habitual hours." },
          { title: "Protect your bedtime like an appointment", desc: "Schedule your bedtime before scheduling evening activities. Most sleep debt accumulates gradually through late nights, not dramatic events." },
          { title: "Maintain consistent timing on weekends", desc: "Staying up 2–3 hours later on Friday shifts your circadian rhythm, creates social jet lag, and makes Monday feel like the worst day of the week. A 1-hour variance is manageable; 2+ hours causes noticeable debt and rhythm disruption." },
          { title: "Address sleep disruptors directly", desc: "If you're consistently waking up at 3 AM, or taking more than 30 minutes to fall asleep, there's an underlying cause — stress, alcohol, sleep apnea, screen exposure — that no amount of earlier bedtimes will fully fix." },
        ].map(({ title, desc }) => (
          <div key={title} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "1rem", padding: "1.25rem 1.5rem" }}>
            <p style={{ fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.4rem", fontSize: "0.95rem" }}>{title}</p>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.7, color: "var(--text-muted)" }}>{desc}</p>
          </div>
        ))}
      </div>

      {divider}

      {/* FAQ */}
      <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "1rem" }}>
        Frequently Asked Questions About Sleep Debt
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
        {[
          { q: "Is sleep debt a real thing?", a: "Yes. Sleep debt is a well-documented phenomenon in sleep science. Controlled laboratory studies show measurable, dose-dependent declines in cognitive performance that correspond directly to the number of hours of sleep missed. The effects are real and consistent across populations." },
          { q: "How do I know how much sleep debt I have?", a: "Use the sleep debt calculator above. Enter your target sleep hours and how much you actually slept each night this week. The tool calculates your total deficit, average nightly sleep, and shows which specific days created the most debt." },
          { q: "Can one good night fix weeks of bad sleep?", a: "No. A single long night of recovery sleep can restore some alertness and reduce subjective sleepiness, but it cannot fully reverse the cognitive and physiological effects of chronic sleep debt. Research shows it takes multiple nights of extended sleep to restore baseline performance metrics." },
          { q: "Does everyone need the same amount of sleep?", a: "No. While 7–9 hours is the range recommended for most adults, individual needs vary. A small percentage of people have genetic variants that allow genuine function on 6 hours. Most people who think they function well on 6 hours are simply adapted to their impaired state and would perform better with more." },
        ].map(({ q, a }) => (
          <div key={q} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "1rem", padding: "1.25rem 1.5rem" }}>
            <p style={{ fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.5rem", fontSize: "0.95rem" }}>{q}</p>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.7, color: "var(--text-muted)", margin: 0 }}>{a}</p>
          </div>
        ))}
      </div>

      <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", textAlign: "center" }}>
        Sleep debt calculations are based on self-reported sleep hours vs. your stated target. For a clinical assessment of sleep disorders or chronic fatigue, consult a healthcare professional.
      </p>
    </section>
  );
}
