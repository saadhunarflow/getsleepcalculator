import Link from "next/link";

export default function NapContent() {
  const divider = (
    <div style={{ height: "1px", background: "var(--border)", margin: "2.5rem 0" }} />
  );

  return (
    <section style={{ maxWidth: "800px", margin: "0 auto 3rem", padding: "0 1rem" }}>

      {/* Intro */}
      <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--text-secondary)", borderLeft: "3px solid var(--accent)", paddingLeft: "1rem", fontStyle: "italic", marginBottom: "0.5rem" }}>
        A nap calculator tells you exactly when to wake up from a nap based on how long you want to sleep and when you lie down. It prevents you from waking up mid-cycle — the most common reason naps leave you feeling worse than before you closed your eyes.
      </p>

      {divider}

      {/* What makes a good nap */}
      <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "1rem" }}>
        What Makes a Nap Good vs. Bad?
      </h2>
      <p style={{ fontSize: "0.92rem", lineHeight: 1.8, color: "var(--text-secondary)", marginBottom: "1rem" }}>
        Whether a nap leaves you refreshed or groggy comes down almost entirely to one thing: which sleep stage you're in when you wake up. Your brain doesn't stay in the same stage throughout a nap. Within minutes of falling asleep, you move from light sleep (N1) into consolidated light sleep (N2), and then — if you nap long enough — into deep slow-wave sleep (N3).
      </p>
      <p style={{ fontSize: "0.92rem", lineHeight: 1.8, color: "var(--text-secondary)", marginBottom: "1rem" }}>
        N3 is where the problem happens. It's the most difficult stage to wake from. If your alarm fires during N3, your brain resists waking, produces heavy sleep inertia, and you emerge feeling worse than before the nap. This is exactly why a 45-minute nap often feels more punishing than a 20-minute one — you've entered deep sleep but haven't completed a full cycle to emerge from it.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem", marginBottom: "1rem" }}>
        {[
          { label: "Good nap lengths", items: ["10–20 minutes (power nap)", "90 minutes (full cycle)"], good: true },
          { label: "Nap lengths to avoid", items: ["30–60 minutes (risk of N3 waking)", "After 3 PM (disrupts night sleep)"], good: false },
        ].map(({ label, items, good }) => (
          <div key={label} style={{ background: "var(--bg-card)", border: `1px solid ${good ? "rgba(108,255,140,0.2)" : "rgba(255,100,100,0.2)"}`, borderRadius: "1rem", padding: "1.25rem" }}>
            <p style={{ fontWeight: 700, color: good ? "var(--accent-light)" : "#ff6464", marginBottom: "0.75rem", fontSize: "0.95rem" }}>{label}</p>
            {items.map(item => (
              <div key={item} style={{ display: "flex", gap: "0.5rem", fontSize: "0.88rem", color: "var(--text-muted)", marginBottom: "0.4rem" }}>
                <span style={{ color: good ? "var(--accent-light)" : "#ff6464", flexShrink: 0 }}>{good ? "✓" : "✗"}</span>
                {item}
              </div>
            ))}
          </div>
        ))}
      </div>

      {divider}

      {/* Each nap type deep dive */}
      <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "1rem" }}>
        How Long Should a Nap Be? The Science for Each Duration
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "1rem" }}>
        {[
          {
            duration: "10–20 Minutes — The Power Nap",
            ideal: "Best for: quick energy boost, alertness, focus",
            desc: "The power nap is the most well-researched nap duration. You stay entirely in N1 and N2 sleep — the lightest stages. Your brain consolidates recent memories, clears adenosine (the chemical that creates sleepiness), and restores alertness without ever entering deep sleep. You wake up feeling sharp, not groggy. A NASA study on military pilots showed 26-minute naps improved alertness by 34% and performance by 16%.",
          },
          {
            duration: "30 Minutes — The Gray Zone",
            ideal: "Use with caution",
            desc: "At 30 minutes, you're right at the edge of N2 and the beginning of N3. Some people stay in N2 and wake up feeling fine; others drop into N3 and experience 20–30 minutes of grogginess. If you consistently feel bad after 30-minute naps, shorten to 20 minutes or extend all the way to 90.",
          },
          {
            duration: "60 Minutes — The Deep Sleep Nap",
            ideal: "Best for: learning retention, physical recovery",
            desc: "A 60-minute nap will almost certainly include N3 deep sleep. Deep sleep is when your brain performs memory consolidation and your body repairs muscle tissue. The benefit is real — but so is the sleep inertia risk. Expect 15–30 minutes of grogginess after waking. Best reserved for days when you have time to fully wake up before needing to perform.",
          },
          {
            duration: "90 Minutes — The Full Cycle Nap",
            ideal: "Best for: creativity, emotional processing, catching sleep debt",
            desc: "90 minutes completes one full sleep cycle, including N1, N2, N3, and REM sleep. REM is when your brain processes emotions, forms creative connections, and consolidates complex learning. A 90-minute nap is the most restorative daytime nap possible — functionally similar to the last sleep cycle of a full night. Sleep inertia is minimal because you wake at the natural cycle end, in light sleep.",
          },
        ].map(({ duration, ideal, desc }) => (
          <div key={duration} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "1rem", padding: "1.25rem 1.5rem" }}>
            <p style={{ fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.25rem", fontSize: "1rem" }}>{duration}</p>
            <p style={{ color: "var(--accent-light)", fontSize: "0.82rem", fontWeight: 600, marginBottom: "0.6rem" }}>{ideal}</p>
            <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", lineHeight: 1.7 }}>{desc}</p>
          </div>
        ))}
      </div>

      {divider}

      {/* Best time to nap */}
      <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "1rem" }}>
        Best Time of Day to Take a Nap
      </h2>
      <p style={{ fontSize: "0.92rem", lineHeight: 1.8, color: "var(--text-secondary)", marginBottom: "1rem" }}>
        The time of day you nap matters as much as the duration. Your circadian rhythm creates two natural windows of low alertness — and napping in the right window means you'll fall asleep faster and feel better when you wake up.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1rem" }}>
        {[
          { time: "1:00 PM – 3:00 PM", label: "Ideal nap window", desc: "This is the post-lunch dip — a natural drop in alertness driven by your circadian rhythm, not just food. Your body temperature dips slightly, melatonin rises briefly, and falling asleep is much easier. Napping here has minimal impact on your nighttime sleep.", highlight: true },
          { time: "3:00 PM – 4:00 PM", label: "Acceptable with caution", desc: "Still workable for a short 20-minute nap, but start pushing later and you risk reducing nighttime sleep pressure, making it harder to fall asleep at your usual bedtime.", highlight: false },
          { time: "After 4:00 PM", label: "Avoid if possible", desc: "Late afternoon and evening naps directly compete with your nighttime sleep drive. Even a 20-minute nap at 5 PM can delay sleep onset by 1–2 hours and reduce deep sleep in the first half of your night.", highlight: false },
        ].map(({ time, label, desc, highlight }) => (
          <div key={time} style={{ display: "flex", gap: "1rem", background: "var(--bg-card)", border: `1px solid ${highlight ? "rgba(108,255,140,0.2)" : "var(--border)"}`, borderRadius: "1rem", padding: "1rem 1.25rem" }}>
            <div style={{ flexShrink: 0, minWidth: "110px" }}>
              <p style={{ fontWeight: 700, fontSize: "0.85rem", color: highlight ? "var(--accent-light)" : "var(--text-primary)" }}>{time}</p>
              <p style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{label}</p>
            </div>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.7, color: "var(--text-muted)" }}>{desc}</p>
          </div>
        ))}
      </div>

      {divider}

      {/* Coffee nap deep dive */}
      <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "1rem" }}>
        The Coffee Nap — Why It Works Better Than Either Alone
      </h2>
      <p style={{ fontSize: "0.92rem", lineHeight: 1.8, color: "var(--text-secondary)", marginBottom: "1rem" }}>
        A coffee nap is exactly what it sounds like: drink a cup of coffee, then immediately take a 20-minute nap. It sounds counterintuitive, but the timing creates a compound effect that outperforms either coffee or a nap alone.
      </p>
      <p style={{ fontSize: "0.92rem", lineHeight: 1.8, color: "var(--text-secondary)", marginBottom: "1rem" }}>
        Here's why it works: caffeine takes 20–30 minutes to cross the blood-brain barrier and begin blocking adenosine receptors (the receptors that create sleepiness). During those 20 minutes, your 20-minute nap is already clearing adenosine from those same receptors. When you wake up, caffeine arrives at receptors that are already partially clear — delivering a larger, faster alertness boost than caffeine alone.
      </p>
      <div style={{ background: "var(--bg-card2)", border: "1px solid var(--border)", borderRadius: "1rem", padding: "1.25rem 1.5rem" }}>
        <p style={{ fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.75rem", fontSize: "0.95rem" }}>How to do a coffee nap:</p>
        {["Drink a standard cup of coffee (80–100mg caffeine) quickly — don't sip it slowly", "Lie down immediately in a dark, quiet space", "Set an alarm for exactly 20 minutes", "Get up when the alarm fires — don't try to sleep longer", "Give yourself 5–10 minutes and you'll notice the compound alertness effect"].map((step, i) => (
          <div key={step} style={{ display: "flex", gap: "0.75rem", fontSize: "0.88rem", color: "var(--text-muted)", marginBottom: "0.5rem" }}>
            <span style={{ color: "var(--accent-light)", fontWeight: 700, flexShrink: 0 }}>{i + 1}.</span>
            {step}
          </div>
        ))}
      </div>

      {divider}

      {/* Does napping affect night sleep */}
      <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "1rem" }}>
        Does Napping Affect Your Night Sleep?
      </h2>
      <p style={{ fontSize: "0.92rem", lineHeight: 1.8, color: "var(--text-secondary)", marginBottom: "1rem" }}>
        It depends entirely on the timing and duration of the nap. A 20-minute nap before 3 PM has a minimal effect on nighttime sleep for most people. A 90-minute nap after 4 PM will reduce your sleep drive enough to delay sleep onset significantly and cut into the early deep sleep phases of your night.
      </p>
      <p style={{ fontSize: "0.92rem", lineHeight: 1.8, color: "var(--text-secondary)", marginBottom: "1rem" }}>
        Sleep pressure (the urge to sleep) builds throughout the day via adenosine accumulation. A nap — any nap — reduces that pressure. The longer the nap, the more pressure it eliminates. If you remove too much sleep pressure in the afternoon, your body won't be ready to sleep at your usual bedtime.
      </p>
      <div style={{ background: "rgba(108,99,255,0.07)", border: "1px solid rgba(108,99,255,0.2)", borderRadius: "1rem", padding: "1rem 1.25rem", fontSize: "0.88rem", color: "var(--text-secondary)" }}>
        <strong style={{ color: "var(--text-primary)" }}>Rule of thumb:</strong> If you're having trouble sleeping at night, stop napping after 2 PM. If you regularly sleep well, a 20-minute nap before 3 PM is unlikely to cause problems.
      </div>

      {divider}

      {/* Napping for specific situations */}
      <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "1rem" }}>
        Napping for Specific Situations
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
        {[
          { icon: "📚", title: "Before learning or studying", desc: "A 90-minute nap before an intensive learning session has been shown to improve memory encoding — your brain essentially clears its temporary memory buffer, making room for new information." },
          { icon: "🏃", title: "Athletic recovery", desc: "A 20–30 minute post-training nap can reduce muscle soreness and improve reaction time for afternoon or evening training sessions. Avoid long naps that push into the evening." },
          { icon: "✈️", title: "Before a long drive or night shift", desc: "A pre-drive nap of 20–45 minutes significantly reduces microsleeps and reaction time impairment. For night shift workers, a 90-minute nap before the shift begins is the most effective strategy." },
          { icon: "😓", title: "When catching up on sleep debt", desc: "A 90-minute nap with REM sleep can partially offset the effects of a short night. It won't fully repay sleep debt, but it can restore cognitive function enough to function safely." },
        ].map((card) => (
          <div key={card.title} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "1rem", padding: "1.25rem" }}>
            <div style={{ fontSize: "1.8rem", marginBottom: "0.5rem" }}>{card.icon}</div>
            <p style={{ fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.4rem", fontSize: "0.95rem" }}>{card.title}</p>
            <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", lineHeight: 1.6 }}>{card.desc}</p>
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
          { href: "/wake-up-time-calculator/", label: "Wake-Up Time Calculator" },
          { href: "/sleep-debt-calculator/", label: "Sleep Debt Calculator" },
          { href: "/sleep-cycle-calculator/", label: "Sleep Cycle Calculator" },
          { href: "/sleep-schedule-builder/", label: "Sleep Schedule Builder" },
          { href: "/how-much-sleep-do-i-need/", label: "How Much Sleep Do I Need?" },
        ].map(({ href, label }) => (
          <Link key={href} href={href}
            style={{ padding: "0.5rem 1rem", background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "2rem", color: "var(--accent)", textDecoration: "none", fontSize: "0.9rem", fontWeight: 500 }}>
            {label}
          </Link>
        ))}
      </div>

      <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", textAlign: "center" }}>
        Nap timing recommendations are based on published sleep science research. Individual responses to napping vary. If you experience excessive daytime sleepiness that interferes with functioning, consult a healthcare professional.
      </p>
    </section>
  );
}
