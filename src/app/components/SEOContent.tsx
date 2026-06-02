import Link from "next/link";

const ageData = [
  ["Newborns (0–3 months)", "14–17 hours"],
  ["Infants (4–12 months)", "12–16 hours"],
  ["Toddlers (1–2 years)", "11–14 hours"],
  ["Preschoolers (3–5 years)", "10–13 hours"],
  ["School-age (6–12 years)", "9–12 hours"],
  ["Teens (13–18 years)", "8–10 hours"],
  ["Adults (18–64 years)", "7–9 hours"],
  ["Older adults (65+)", "7–8 hours"],
];

const bedtimeData = [
  ["5:00 AM", "9:16 PM"],
  ["5:30 AM", "9:46 PM"],
  ["6:00 AM", "10:16 PM"],
  ["6:30 AM", "10:46 PM"],
  ["7:00 AM", "11:16 PM"],
  ["7:30 AM", "11:46 PM"],
  ["8:00 AM", "12:16 AM"],
];

const stageCards = [
  { stage: "Stage 1 — Light Sleep", desc: "You drift off. Muscles relax, heart rate slows. Lasts just a few minutes.", color: "#6366f1" },
  { stage: "Stage 2 — Light Sleep", desc: "Body temperature drops, brain activity slows. Asleep but easy to wake.", color: "#818cf8" },
  { stage: "Stage 3 — Deep Sleep", desc: "Most restorative stage. Body repairs tissue, strengthens immunity, consolidates memories. Waking here causes heavy grogginess.", color: "#4338ca" },
  { stage: "REM Sleep", desc: "Brain is active, dreaming occurs, emotional processing happens. REM periods grow longer as the night goes on.", color: "#a855f7" },
];

const threeThreeThree = [
  { num: "3h", label: "No caffeine 3 hours before bed", desc: "Caffeine blocks adenosine, the chemical that builds sleep pressure. Even if you fall asleep fine, an evening coffee often reduces time in deep sleep without you realizing it." },
  { num: "3h", label: "No large meals 3 hours before bed", desc: "Digestion raises core body temperature, which works against the natural temperature drop your body needs to initiate sleep. A light snack is fine — a heavy dinner is not." },
  { num: "30m", label: "No screens 30 minutes before bed", desc: "Blue light from phones delays melatonin production. More importantly, scrolling keeps your brain alert when it should be winding down." },
];

const usageTips = [
  { title: "Set a consistent wake-up time first", desc: "Most sleep scientists recommend anchoring your schedule around a fixed wake-up time, not a fixed bedtime. Your wake time regulates your circadian rhythm more reliably than when you get into bed." },
  { title: "Use bedtime options as a window, not an exact minute", desc: "If the calculator says 10:46 PM, getting into bed between 10:30 and 11:00 PM is fine. Your exact sleep onset varies nightly." },
  { title: "Account for your real fall-asleep time", desc: "The default 14 minutes is an average. If you typically take 30 minutes to fall asleep, adjust the settings accordingly." },
  { title: "Don\'t use the calculator to justify less sleep", desc: "A 6-hour window that ends on a cycle boundary is still less sleep than your body needs. Cycle timing matters, but total duration matters too." },
];

const chronotypes = [
  { icon: "🦁", type: "Lions (Early chronotype)", desc: "Wake up easily before 6 AM, peak energy in the morning, fade by evening.", color: "#f59e0b" },
  { icon: "🐻", type: "Bears (Intermediate)", desc: "Follow the solar cycle roughly. Most of the population falls here.", color: "#3b82f6" },
  { icon: "🐺", type: "Wolves (Late chronotype)", desc: "Struggle to wake before 8 or 9 AM, most productive in the evening.", color: "#8b5cf6" },
  { icon: "🐬", type: "Dolphins (Light sleeper)", desc: "Irregular sleep, prone to waking, often anxious about sleep quality.", color: "#06b6d4" },
];

const qualityTips = [
  { tip: "Keep the room cool", detail: "Your core body temperature needs to drop 1–2°F to initiate sleep. Most people sleep best between 65–68°F (18–20°C)." },
  { tip: "Block light completely", detail: "Even small amounts of light — a charging LED, streetlight through thin curtains — can suppress melatonin and reduce deep sleep." },
  { tip: "Limit alcohol close to bedtime", detail: "Alcohol helps some fall asleep faster but fragments sleep in the second half, significantly reducing REM sleep." },
  { tip: "Get morning light within an hour of waking", detail: "Natural light in the morning anchors your circadian rhythm. Even 10 minutes outside makes a difference." },
  { tip: "Don\'t go to bed unless you\'re sleepy", detail: "Lying in bed wide awake creates a mental association between bed and alertness. Wait until you feel genuinely drowsy." },
];

const toolsList = [
  { href: "/bedtime-calculator/", label: "Bedtime Calculator", desc: "Enter your wake-up time, get optimal bedtimes." },
  { href: "/wake-up-time-calculator/", label: "Wake-Up Time Calculator", desc: "Enter your bedtime, get the best times to set your alarm." },
  { href: "/nap-calculator/", label: "Nap Calculator", desc: "Find out whether to take a 20-minute power nap or a full 90-minute cycle nap." },
  { href: "/sleep-debt-calculator/", label: "Sleep Debt Calculator", desc: "Track how much sleep you\'ve missed this week and what it costs you." },
  { href: "/rem-sleep-calculator/", label: "REM Sleep Calculator", desc: "Estimate how much REM sleep you\'re getting and whether it\'s enough." },
  { href: "/chronotype-calculator/", label: "Chronotype Calculator", desc: "Discover whether you\'re a Lion, Bear, Wolf, or Dolphin sleeper." },
  { href: "/jet-lag-calculator/", label: "Jet Lag Calculator", desc: "Adjust your schedule after long-haul travel." },
  { href: "/sleep-schedule-builder/", label: "Sleep Schedule Builder", desc: "Build a full weekly sleep plan that fits your lifestyle." },
];

const divider = <div style={{ borderTop: "1px solid var(--border)", margin: "0 0 3rem 0" }} />;

const h2Style: React.CSSProperties = { fontSize: "1.25rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "1rem", lineHeight: 1.3 };
const pStyle: React.CSSProperties = { color: "var(--text-muted)", marginBottom: "1rem", lineHeight: 1.85 };
const tableThStyle: React.CSSProperties = { padding: "10px 14px", textAlign: "left", color: "var(--text-primary)", fontWeight: 700, borderBottom: "2px solid var(--border)", background: "var(--bg-card)" };

export default function SEOContent() {
  return (
    <section style={{ background: "var(--bg-primary)", borderTop: "1px solid var(--border)" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16" style={{ fontSize: 15 }}>

        {/* Intro */}
        <p style={{ ...pStyle, borderLeft: "3px solid var(--accent)", paddingLeft: "1rem", fontStyle: "italic", marginBottom: "3rem" }}>
          A sleep calculator helps you figure out exactly when to go to bed or wake up so you feel rested — not groggy. It works by aligning your sleep timing with your body's natural 90-minute sleep cycles, so you wake up at the lightest point in your cycle instead of being jolted out of deep sleep.
        </p>

        {/* What Is a Sleep Calculator */}
        <div style={{ marginBottom: "3rem" }}>
          <h2 style={h2Style}>What Is a Sleep Calculator?</h2>
          <p style={pStyle}>A sleep calculator is a simple tool that tells you the best times to fall asleep or wake up based on how human sleep actually works. Your body does not sleep in one long stretch — it moves through repeating cycles, each lasting about 90 minutes. Waking up naturally at the end of a full cycle means you feel alert and refreshed. Waking up in the middle of one — especially during deep sleep — is why you sometimes feel worse after a full eight hours than after seven.</p>
          <p style={pStyle}>The calculator takes your target time (either when you need to wake up or when you plan to go to bed), adds roughly 14 minutes for the average time it takes to fall asleep, and then lists every bedtime or wake-up window that lines up with a complete cycle.</p>
        </div>

        {divider}

        {/* How Does It Work */}
        <div style={{ marginBottom: "3rem" }}>
          <h2 style={h2Style}>How Does a Sleep Calculator Work?</h2>
          <p style={pStyle}>Sleep calculators are built around one core idea: sleep cycles. A single cycle lasts approximately 90 minutes and passes through four stages:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
            {stageCards.map((s) => (
              <div key={s.stage} style={{ background: "var(--bg-card)", border: `1px solid ${s.color}55`, borderLeft: `3px solid ${s.color}`, borderRadius: 10, padding: "0.875rem 1rem" }}>
                <div style={{ fontWeight: 700, fontSize: 13, color: s.color, marginBottom: 4 }}>{s.stage}</div>
                <div style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.7 }}>{s.desc}</div>
              </div>
            ))}
          </div>
          <p style={pStyle}>A healthy night typically includes 5 to 6 complete cycles, adding up to 7.5 to 9 hours of sleep. The calculator works like this:</p>
          <ol style={{ paddingLeft: "1.25rem", color: "var(--text-muted)", fontSize: 14, lineHeight: 2.1 }}>
            <li>You enter the time you need to wake up.</li>
            <li>The tool works backward in 90-minute blocks.</li>
            <li>It adds 14 minutes (average time to fall asleep).</li>
            <li>It returns two to four bedtime options — each landing you at the end of a full cycle.</li>
          </ol>
        </div>

        {divider}

        {/* How Many Hours */}
        <div style={{ marginBottom: "3rem" }}>
          <h2 style={h2Style}>How Many Hours of Sleep Do You Actually Need?</h2>
          <p style={pStyle}>The amount of sleep you need changes across your lifetime. Here's a quick breakdown based on recommendations from the CDC and National Sleep Foundation:</p>
          <div style={{ overflowX: "auto", marginBottom: "1rem" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead>
                <tr>
                  <th style={tableThStyle}>Age Group</th>
                  <th style={tableThStyle}>Recommended Sleep</th>
                </tr>
              </thead>
              <tbody>
                {ageData.map(([age, hrs], i) => (
                  <tr key={age} style={{ background: i % 2 === 0 ? "var(--bg-primary)" : "var(--bg-card)" }}>
                    <td style={{ padding: "9px 14px", color: "var(--text-muted)", borderBottom: "1px solid var(--border)" }}>{age}</td>
                    <td style={{ padding: "9px 14px", color: "var(--accent-light)", fontWeight: 600, borderBottom: "1px solid var(--border)" }}>{hrs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ ...pStyle, fontSize: 13 }}>These are general ranges. The best way to know your personal need is to notice how you feel after several nights of uninterrupted sleep — without an alarm. That's your natural sleep duration.</p>
        </div>

        {divider}

        {/* 3-3-3 Rule */}
        <div style={{ marginBottom: "3rem" }}>
          <h2 style={h2Style}>What Is the 3-3-3 Rule for Sleep?</h2>
          <p style={pStyle}>The 3-3-3 rule for sleep is a simple pre-bed guideline to help you wind down faster and sleep more deeply:</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {threeThreeThree.map((r, i) => (
              <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", background: "var(--bg-card)", borderRadius: 10, padding: "0.875rem 1rem", border: "1px solid var(--border)" }}>
                <div style={{ minWidth: 40, height: 40, borderRadius: "50%", background: "var(--accent)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 12, flexShrink: 0 }}>{r.num}</div>
                <div>
                  <div style={{ fontWeight: 700, color: "var(--text-primary)", fontSize: 14, marginBottom: 3 }}>{r.label}</div>
                  <div style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.7 }}>{r.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {divider}

        {/* 9:30 PM to 4:30 AM */}
        <div style={{ marginBottom: "3rem" }}>
          <h2 style={h2Style}>Is 9:30 PM to 4:30 AM Enough Sleep?</h2>
          <p style={pStyle}>9:30 PM to 4:30 AM is exactly 7 hours of sleep. For most adults, this falls within the recommended range of 7 to 9 hours — so yes, it can be enough sleep, depending on the person. Here's how that maps to sleep cycles:</p>
          <div style={{ overflowX: "auto", marginBottom: "1rem" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead>
                <tr>
                  <th style={tableThStyle}>Duration</th>
                  <th style={tableThStyle}>Cycles</th>
                  <th style={tableThStyle}>Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["7 hours", "~4.67 cycles", "Acceptable for many adults"],
                  ["7.5 hours", "5 complete cycles", "Sweet spot for feeling refreshed ⭐"],
                ].map(([dur, cyc, note], i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "var(--bg-primary)" : "var(--bg-card)" }}>
                    <td style={{ padding: "9px 14px", color: "var(--text-muted)", borderBottom: "1px solid var(--border)" }}>{dur}</td>
                    <td style={{ padding: "9px 14px", color: "var(--accent-light)", fontWeight: 600, borderBottom: "1px solid var(--border)" }}>{cyc}</td>
                    <td style={{ padding: "9px 14px", color: "var(--text-muted)", borderBottom: "1px solid var(--border)" }}>{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ ...pStyle, fontSize: 13 }}>The bigger question is whether your schedule is consistent. Going to bed and waking up at the same times every day — even on weekends — has a larger impact on sleep quality than squeezing in extra minutes here and there.</p>
        </div>

        {divider}

        {/* Does Closing Eyes Count */}
        <div style={{ marginBottom: "3rem" }}>
          <h2 style={h2Style}>Does Closing Your Eyes Count as Sleep?</h2>
          <p style={pStyle}>No — closing your eyes does not count as sleep. Sleep is a specific biological state measured by brain activity, and it looks very different from simply lying still with your eyes shut. When you close your eyes and rest, your brain remains in an active, alert pattern similar to wakefulness.</p>
          <p style={pStyle}>True sleep — even the lightest Stage 1 — involves measurable changes in brain waves (shifting to theta waves), a drop in muscle activity, a slowing heart rate, and a reduction in your ability to respond to the environment. That said, lying still with eyes closed does have real benefits: it reduces sensory input, lowers mental load, and slows heart rate slightly.</p>
          <div style={{ background: "rgba(108,99,255,0.08)", border: "1px solid rgba(108,99,255,0.25)", borderRadius: 10, padding: "1rem 1.25rem", fontSize: 14 }}>
            <strong style={{ color: "var(--accent-light)" }}>Sleep tip: </strong>
            <span style={{ color: "var(--text-muted)" }}>If you're lying in bed, eyes closed, but feeling wide awake for more than 20 minutes, sleep specialists recommend getting up and doing something calm in dim light rather than forcing it. Lying awake in bed trains your brain to associate the bed with wakefulness.</span>
          </div>
        </div>

        {divider}

        {/* What Time Should You Go to Bed */}
        <div style={{ marginBottom: "3rem" }}>
          <h2 style={h2Style}>What Time Should You Go to Bed?</h2>
          <p style={pStyle}>Your ideal bedtime depends on two things: when you need to wake up, and how many sleep cycles you want to complete. For most adults aiming for 7.5 hours (five complete cycles):</p>
          <div style={{ overflowX: "auto", marginBottom: "1rem" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead>
                <tr>
                  <th style={tableThStyle}>Wake-Up Time</th>
                  <th style={tableThStyle}>Ideal Bedtime (5 cycles)</th>
                </tr>
              </thead>
              <tbody>
                {bedtimeData.map(([wake, bed], i) => (
                  <tr key={wake} style={{ background: i % 2 === 0 ? "var(--bg-primary)" : "var(--bg-card)" }}>
                    <td style={{ padding: "9px 14px", color: "var(--text-muted)", borderBottom: "1px solid var(--border)" }}>{wake}</td>
                    <td style={{ padding: "9px 14px", color: "var(--accent-light)", fontWeight: 600, borderBottom: "1px solid var(--border)" }}>{bed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ ...pStyle, fontSize: 13 }}>These times account for the ~14 minutes it takes the average person to fall asleep after getting into bed. Your personal fall-asleep time may be shorter or longer — you can adjust this in our <Link href="/sleep-cycle-calculator/" style={{ color: "var(--accent-light)", textDecoration: "underline" }}>Sleep Cycle Calculator</Link>.</p>
        </div>

        {divider}

        {/* Signs Not Getting Enough Sleep */}
        <div style={{ marginBottom: "3rem" }}>
          <h2 style={h2Style}>What Are the Signs You're Not Getting Enough Sleep?</h2>
          <p style={pStyle}>Sleep debt builds up quietly. Most people adapt to feeling slightly tired and stop noticing it. Here are the most reliable signs:</p>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div style={{ background: "var(--bg-card)", borderRadius: 10, padding: "1rem", border: "1px solid var(--border)" }}>
              <div style={{ fontWeight: 700, color: "var(--text-primary)", marginBottom: 8, fontSize: 14 }}>During the day</div>
              <ul style={{ paddingLeft: "1.1rem", color: "var(--text-muted)", fontSize: 13, lineHeight: 2 }}>
                <li>You need an alarm and hit snooze more than once</li>
                <li>You feel mentally slow or forgetful before noon</li>
                <li>You fall asleep within minutes of sitting quietly</li>
                <li>You rely on caffeine to feel functional</li>
                <li>Irritability — one of the earliest signs</li>
              </ul>
            </div>
            <div style={{ background: "var(--bg-card)", borderRadius: 10, padding: "1rem", border: "1px solid var(--border)" }}>
              <div style={{ fontWeight: 700, color: "var(--text-primary)", marginBottom: 8, fontSize: 14 }}>Longer-term patterns</div>
              <ul style={{ paddingLeft: "1.1rem", color: "var(--text-muted)", fontSize: 13, lineHeight: 2 }}>
                <li>You sleep significantly longer on weekends</li>
                <li>You get sick more often than you used to</li>
                <li>Your appetite has increased unexpectedly</li>
                <li>Trouble concentrating at work or school</li>
              </ul>
            </div>
          </div>
          <p style={{ ...pStyle, fontSize: 13 }}>If you regularly sleep more than two hours longer on weekends, your body is telling you it's not getting enough during the week. <Link href="/sleep-debt-calculator/" style={{ color: "var(--accent-light)", textDecoration: "underline" }}>Our Sleep Debt Calculator</Link> can help you measure how much you've accumulated.</p>
        </div>

        {divider}

        {/* How to Use Effectively */}
        <div style={{ marginBottom: "3rem" }}>
          <h2 style={h2Style}>How to Use a Sleep Calculator Effectively</h2>
          <p style={pStyle}>The calculator gives you target times — but the results only work if your sleep habits support them:</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {usageTips.map((tip, i) => (
              <div key={i} style={{ display: "flex", gap: "0.875rem", background: "var(--bg-card)", borderRadius: 10, padding: "0.875rem 1rem", border: "1px solid var(--border)" }}>
                <div style={{ width: 26, height: 26, borderRadius: "50%", background: "rgba(108,99,255,0.2)", color: "var(--accent-light)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 12, flexShrink: 0 }}>{i + 1}</div>
                <div>
                  <div style={{ fontWeight: 700, color: "var(--text-primary)", fontSize: 14, marginBottom: 3 }}>{tip.title}</div>
                  <div style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.7 }}>{tip.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {divider}

        {/* Chronotype */}
        <div style={{ marginBottom: "3rem" }}>
          <h2 style={h2Style}>What Is Chronotype and Why Does It Affect Your Sleep Schedule?</h2>
          <p style={pStyle}>Your chronotype is your body's natural tendency toward being a morning person or a night person. It's largely genetic and influences when your body naturally wants to sleep and wake.</p>
          <div className="grid sm:grid-cols-2 gap-3 mb-4">
            {chronotypes.map((c) => (
              <div key={c.type} style={{ background: "var(--bg-card)", borderRadius: 10, padding: "0.875rem", border: `1px solid ${c.color}44`, display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                <span style={{ fontSize: 22 }}>{c.icon}</span>
                <div>
                  <div style={{ fontWeight: 700, color: c.color, fontSize: 13, marginBottom: 3 }}>{c.type}</div>
                  <div style={{ fontSize: 12, color: "var(--text-muted)", lineHeight: 1.6 }}>{c.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <p style={{ ...pStyle, fontSize: 13 }}>If your required sleep schedule conflicts with your chronotype, no amount of willpower fully compensates. <Link href="/chronotype-calculator/" style={{ color: "var(--accent-light)", textDecoration: "underline" }}>Take our Chronotype Calculator</Link> to find yours.</p>
        </div>

        {divider}

        {/* Improve Sleep Quality */}
        <div style={{ marginBottom: "3rem" }}>
          <h2 style={h2Style}>How to Improve Sleep Quality (Beyond Just the Timing)</h2>
          <p style={pStyle}>Getting the timing right is one piece of the puzzle. Sleep quality — how deep and uninterrupted your sleep is — matters just as much as duration. A few habits that research consistently backs:</p>
          <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            {qualityTips.map((item, i) => (
              <li key={i} style={{ display: "flex", gap: "0.75rem", background: "var(--bg-card)", borderRadius: 10, padding: "0.75rem 1rem", border: "1px solid var(--border)", fontSize: 13 }}>
                <span style={{ color: "var(--accent-light)", fontWeight: 800, flexShrink: 0, marginTop: 1 }}>✓</span>
                <span><strong style={{ color: "var(--text-primary)" }}>{item.tip}. </strong><span style={{ color: "var(--text-muted)" }}>{item.detail}</span></span>
              </li>
            ))}
          </ul>
          <p style={{ ...pStyle, fontSize: 13, marginTop: "1rem" }}>For a complete list, read our <Link href="/sleep-hygiene-tips/" style={{ color: "var(--accent-light)", textDecoration: "underline" }}>Sleep Hygiene Guide with 20 science-backed habits</Link>.</p>
        </div>

        {divider}

        {/* All Tools */}
        <div>
          <h2 style={h2Style}>Sleep Calculator Tools on This Site</h2>
          <p style={pStyle}>We've built a full set of free tools to cover every part of your sleep schedule:</p>
          <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {toolsList.map((t) => (
              <li key={t.href} style={{ fontSize: 14 }}>
                <Link href={t.href} style={{ color: "var(--accent-light)", fontWeight: 600, textDecoration: "none" }}>
                  {t.label}
                </Link>
                <span style={{ color: "var(--text-muted)" }}> — {t.desc}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
