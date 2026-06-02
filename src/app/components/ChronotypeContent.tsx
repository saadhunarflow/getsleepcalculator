import Link from "next/link";

export default function ChronotypeContent() {
  const divider = (
    <div style={{ height: "1px", background: "var(--border)", margin: "2.5rem 0" }} />
  );

  return (
    <section style={{ maxWidth: "800px", margin: "0 auto 3rem", padding: "0 1rem" }}>

      <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--text-secondary)", borderLeft: "3px solid var(--accent)", paddingLeft: "1rem", fontStyle: "italic", marginBottom: "0.5rem" }}>
        A chronotype quiz helps you identify your biological sleep preference — whether you're naturally a morning person, a night owl, or somewhere in between. Your chronotype isn't a personality quirk; it's determined by your genetics, age, and the timing of your internal body clock (circadian rhythm).
      </p>

      {divider}

      {/* What is a chronotype */}
      <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "1rem" }}>
        What Is a Chronotype?
      </h2>
      <p style={{ fontSize: "0.92rem", lineHeight: 1.8, color: "var(--text-secondary)", marginBottom: "1rem" }}>
        Your chronotype is the natural timing preference for when you feel alert, when you feel sleepy, when your body temperature peaks, when hormones like cortisol and melatonin are released, and when your cognitive performance is at its highest.
      </p>
      <p style={{ fontSize: "0.92rem", lineHeight: 1.8, color: "var(--text-secondary)", marginBottom: "1rem" }}>
        Chronotype is heavily influenced by genetics — specific variants in clock genes like <em>PER3</em>, <em>CLOCK</em>, and <em>CRY1</em> shift the circadian system earlier or later. Age also plays a major role: children tend to be early types, teenagers shift dramatically toward late types (one of the most powerful biological changes of adolescence), and adults gradually shift back toward earlier timing as they age past 20.
      </p>

      {divider}

      {/* The 4 chronotypes */}
      <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "1rem" }}>
        The Four Chronotypes: Lion, Bear, Wolf, and Dolphin
      </h2>
      <p style={{ fontSize: "0.92rem", lineHeight: 1.8, color: "var(--text-secondary)", marginBottom: "1.25rem" }}>
        While chronotype is traditionally described as a spectrum from "morning type" to "evening type," sleep researcher Dr. Michael Breus popularized a four-animal framework that captures both timing and sleep structure. Here's what each chronotype looks like in practice:
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "1rem" }}>
        {[
          { icon: "🦁", name: "Lion (Early Chronotype)", population: "~15%", bedtime: "9–10 PM", wake: "5–6 AM", peak: "Early morning (8–12 PM)", desc: "Lions wake before their alarm, feel energized immediately, do their best thinking in the morning, and fade by mid-afternoon. They struggle to stay up past 10 PM and tend to feel deeply rested with 7 hours. Productive, ambitious, but socially misaligned with night-owl culture." },
          { icon: "🐻", name: "Bear (Intermediate Chronotype)", population: "~50%", bedtime: "10–11 PM", wake: "7–8 AM", peak: "Mid-morning to early afternoon (10 AM–2 PM)", desc: "Bears follow the solar cycle most closely. They feel groggy for 20–30 minutes after waking, reach peak performance mid-morning, experience a post-lunch energy dip, and get their social groove back in the evening. Bears need 7–9 hours and represent the largest portion of the population." },
          { icon: "🐺", name: "Wolf (Late Chronotype)", population: "~20%", bedtime: "12–1 AM", wake: "8–9 AM", peak: "Late afternoon to evening (5–8 PM)", desc: "Wolves can't fall asleep early, struggle intensely in the morning, and hit their stride intellectually and socially in the late afternoon and evening. Society's 9-to-5 schedule is profoundly misaligned with this chronotype. Wolves are often mislabeled as 'lazy' or 'undisciplined' when they're simply biologically different." },
          { icon: "🐬", name: "Dolphin (Irregular / Light Sleeper)", population: "~10%", bedtime: "Variable", wake: "Variable", peak: "Mid-morning (around 10 AM)", desc: "Dolphins are light, easily disrupted sleepers who often have difficulty falling and staying asleep. Unlike the other chronotypes, Dolphins don't have a strong preference for morning or evening — their main characteristic is that they never feel fully rested. Often associated with anxiety and hyperarousal of the nervous system." },
        ].map(({ icon, name, population, bedtime, wake, peak, desc }) => (
          <div key={name} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "1rem", padding: "1.25rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem", flexWrap: "wrap", gap: "0.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ fontSize: "1.5rem" }}>{icon}</span>
                <span style={{ fontWeight: 700, color: "var(--text-primary)", fontSize: "1rem" }}>{name}</span>
              </div>
              <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", background: "var(--bg-card2)", padding: "0.25rem 0.6rem", borderRadius: "2rem", border: "1px solid var(--border)" }}>{population} of population</span>
            </div>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "0.75rem" }}>
              <span style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>🌙 Bedtime: <strong style={{ color: "var(--text-primary)" }}>{bedtime}</strong></span>
              <span style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>☀️ Wake: <strong style={{ color: "var(--text-primary)" }}>{wake}</strong></span>
              <span style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>⚡ Peak: <strong style={{ color: "var(--accent-light)" }}>{peak}</strong></span>
            </div>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "var(--text-muted)" }}>{desc}</p>
          </div>
        ))}
      </div>

      {divider}

      {/* Social jet lag */}
      <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "1rem" }}>
        Social Jet Lag: What Happens When Your Chronotype and Schedule Don't Match
      </h2>
      <p style={{ fontSize: "0.92rem", lineHeight: 1.8, color: "var(--text-secondary)", marginBottom: "1rem" }}>
        Social jet lag is the discrepancy between your biological sleep timing and the sleep timing that society imposes (school start times, work hours, social commitments). Sleep researcher Till Roenneberg coined the term, noting that most people behave like they fly from New York to London every Monday and back every Friday.
      </p>
      <div style={{ overflowX: "auto", borderRadius: "1rem", border: "1px solid var(--border)", marginBottom: "1rem" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.88rem" }}>
          <thead>
            <tr style={{ background: "var(--bg-card2)" }}>
              {["", "Biological preference", "Forced weekday schedule", "Social jet lag"].map(h => (
                <th key={h} style={{ padding: "0.75rem 1rem", textAlign: "left", color: "var(--accent-light)", fontWeight: 600 }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              ["Lion", "Sleep 10 PM – 6 AM", "8 AM start is ideal", "Minimal"],
              ["Bear", "Sleep 11 PM – 7:30 AM", "9 AM start is manageable", "Low–moderate"],
              ["Wolf", "Sleep 1 AM – 9 AM", "8 AM start requires 5 AM wake", "Severe (3–4 hours)"],
              ["Dolphin", "Irregular, light", "Any fixed schedule causes stress", "Chronic disruption"],
            ].map(([type, bio, sched, lag], i) => (
              <tr key={type} style={{ borderTop: "1px solid var(--border)", background: i % 2 === 0 ? "transparent" : "var(--bg-card2)" }}>
                <td style={{ padding: "0.75rem 1rem", color: "var(--text-primary)", fontWeight: 600 }}>{type}</td>
                <td style={{ padding: "0.75rem 1rem", color: "var(--text-muted)" }}>{bio}</td>
                <td style={{ padding: "0.75rem 1rem", color: "var(--text-muted)" }}>{sched}</td>
                <td style={{ padding: "0.75rem 1rem", color: lag.includes("Severe") || lag.includes("Chronic") ? "#ef4444" : "var(--text-muted)", fontWeight: lag.includes("Severe") || lag.includes("Chronic") ? 600 : 400 }}>{lag}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={{ fontSize: "0.88rem", lineHeight: 1.8, color: "var(--text-secondary)", marginBottom: "1rem" }}>
        Chronic social jet lag is associated with higher rates of obesity, depression, cardiovascular disease, and metabolic syndrome — independent of total sleep duration. It's not just about being tired; misaligned circadian timing disrupts the hormonal, metabolic, and immune processes that sleep is supposed to regulate.
      </p>

      {divider}

      {/* Optimize by chronotype */}
      <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "1rem" }}>
        How to Optimize Your Schedule Based on Your Chronotype
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: "0.75rem", marginBottom: "1rem" }}>
        {[
          { type: "🦁 If you're a Lion", tips: ["Schedule deep work for 8–11 AM", "Use afternoon for meetings and admin", "Avoid evening caffeine after 2 PM", "Don't fight your 9:30 PM sleepiness"] },
          { type: "🐻 If you're a Bear", tips: ["Start focused work at 10 AM after slow ramp-up", "Protect 1–2 PM dip for a 20-min nap or walk", "Social and creative tasks peak 2–6 PM", "Wind down firmly by 10:30 PM"] },
          { type: "🐺 If you're a Wolf", tips: ["Negotiate for flex hours or remote work", "Block 5–8 PM for your most critical work", "Avoid morning meetings when possible", "Use bright light therapy in the morning to shift earlier if needed"] },
          { type: "🐬 If you're a Dolphin", tips: ["Establish rigid sleep rituals to calm the nervous system", "Avoid screens 1–2 hours before bed", "Use white noise or a cool room to reduce arousal", "Consider CBT-I (Cognitive Behavioral Therapy for Insomnia)"] },
        ].map(({ type, tips }) => (
          <div key={type} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "1rem", padding: "1.25rem" }}>
            <p style={{ fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.75rem", fontSize: "0.95rem" }}>{type}</p>
            <ul style={{ margin: 0, paddingLeft: "1.25rem" }}>
              {tips.map(t => <li key={t} style={{ fontSize: "0.87rem", lineHeight: 1.7, color: "var(--text-muted)" }}>{t}</li>)}
            </ul>
          </div>
        ))}
      </div>

      {divider}

      {/* Can you change chronotype */}
      <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "1rem" }}>
        Can You Change Your Chronotype?
      </h2>
      <p style={{ fontSize: "0.92rem", lineHeight: 1.8, color: "var(--text-secondary)", marginBottom: "1rem" }}>
        Your core chronotype is largely genetically fixed and can't be fully changed. However, you can shift it by 1–2 hours with consistent effort:
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1rem" }}>
        {[
          { method: "Morning bright light exposure", detail: "Getting 10–30 minutes of bright outdoor light within 30 minutes of waking advances your circadian clock. This is the most powerful tool for shifting to an earlier chronotype." },
          { method: "Consistent sleep and wake times, including weekends", detail: "\"Sleeping in\" on weekends re-anchors your clock to a later time. Keeping wake time within 30 minutes 7 days a week is essential for shifting your rhythm." },
          { method: "Exercise timing", detail: "Morning exercise advances your clock; evening exercise delays it. Match exercise timing to your target chronotype." },
          { method: "Meal timing", detail: "Eating breakfast early and dinner early reinforces an earlier circadian rhythm. Skipping breakfast or eating dinner late maintains a later rhythm." },
        ].map(({ method, detail }) => (
          <div key={method} style={{ display: "flex", gap: "0.75rem", background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "1rem", padding: "1rem 1.25rem" }}>
            <span style={{ color: "var(--accent-light)", flexShrink: 0, marginTop: "2px" }}>→</span>
            <div>
              <p style={{ fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.25rem", fontSize: "0.9rem" }}>{method}</p>
              <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "var(--text-muted)" }}>{detail}</p>
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
          { href: "/sleep-schedule-builder/", label: "Sleep Schedule Builder" },
          { href: "/bedtime-calculator/", label: "Bedtime Calculator" },
          { href: "/wake-up-time-calculator/", label: "Wake-Up Time Calculator" },
          { href: "/jet-lag-calculator/", label: "Jet Lag Calculator" },
          { href: "/how-much-sleep-do-i-need/", label: "How Much Sleep Do I Need" },
        ].map(({ href, label }) => (
          <Link key={href} href={href}
            style={{ padding: "0.5rem 1rem", background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "2rem", color: "var(--accent)", textDecoration: "none", fontSize: "0.9rem", fontWeight: 500 }}>
            {label}
          </Link>
        ))}
      </div>

      <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", textAlign: "center" }}>
        Chronotype classifications are based on validated sleep research frameworks. Individual variation is significant. For sleep disorders or clinical assessment, consult a board-certified sleep physician.
      </p>
    </section>
  );
}
