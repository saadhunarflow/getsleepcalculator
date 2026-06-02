import Link from "next/link";

export default function WakeUpContent() {
  const divider = (
    <div style={{ height: "1px", background: "var(--border)", margin: "2.5rem 0" }} />
  );

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-14">

      {/* Intro */}
      <p className="text-base leading-relaxed mb-2 pl-4 italic"
        style={{ color: "var(--text-secondary)", borderLeft: "3px solid var(--accent)" }}>
        A wake-up time calculator does the opposite of a bedtime calculator: you enter the time you plan to go to sleep, and it tells you the best times to set your alarm. It works by counting forward in 90-minute sleep cycle blocks, adding a 14-minute sleep onset buffer, so your alarm lands at the end of a full cycle rather than in the middle of deep sleep.
      </p>

      {divider}

      {/* What Is */}
      <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
        What Is a Wake-Up Time Calculator?
      </h2>
      <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
        A wake-up time calculator is a free tool that finds the optimal alarm times based on your bedtime and the natural structure of sleep. It solves one of the most common sleep problems: picking an alarm time that forces you awake in the middle of deep sleep, leaving you groggy even when you got enough hours.
      </p>
      <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
        The tool is based on one key principle from sleep science: your brain doesn't sleep continuously — it moves through repeating <strong style={{ color: "var(--text-primary)" }}>90-minute cycles</strong>, each ending in a lighter stage. The end of each cycle is when your body is closest to being naturally awake. An alarm that fires at this point feels completely different from one that fires 30 minutes into a deep sleep phase.
      </p>
      <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
        Enter your bedtime above, and the calculator shows you 4 to 6 alarm options — one for each number of complete cycles — with the recommended amount clearly highlighted.
      </p>

      {divider}

      {/* How to Use */}
      <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
        How to Use the Wake-Up Time Calculator
      </h2>
      <div className="space-y-4 mb-4">
        {[
          { n: "1", title: "Enter the time you plan to get into bed", desc: "Use the time picker to select your bedtime — the time you'll actually lie down, not when you intend to be asleep." },
          { n: "2", title: "The calculator adds your sleep onset time", desc: "Most adults take about 14 minutes to fall asleep after getting into bed. The calculator adds this buffer automatically, so the cycle counting starts from when you're actually asleep." },
          { n: "3", title: "Review your wake-up options", desc: "You'll see multiple alarm times, each corresponding to a different number of completed sleep cycles — from 3 cycles (4.5 hours) to 6 cycles (9 hours)." },
          { n: "4", title: "Set your alarm to the time that fits your schedule", desc: "Choose the option closest to when you need to be up. If two options are close to your ideal time, pick the later one to get more rest." },
        ].map(({ n, title, desc }) => (
          <div key={n} className="flex gap-4 rounded-2xl p-5" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
            <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
              style={{ background: "var(--accent)", color: "#fff" }}>{n}</div>
            <div>
              <p className="font-semibold text-sm mb-1" style={{ color: "var(--text-primary)" }}>{title}</p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="rounded-2xl p-4 text-sm" style={{ background: "var(--bg-card2)", border: "1px solid var(--border)", color: "var(--text-muted)" }}>
        <strong style={{ color: "var(--text-primary)" }}>Tip:</strong> If you know you take longer than 14 minutes to fall asleep — say, closer to 30 minutes — mentally shift each suggested wake time 15 minutes later to stay accurate.
      </div>

      {divider}

      {/* Extended wake-up table */}
      <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
        Wake-Up Times by Bedtime — Quick Reference Table
      </h2>
      <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
        All times include the 14-minute sleep onset buffer. The <strong style={{ color: "var(--accent-light)" }}>5 cycles (7.5h)</strong> column is what most adults find ideal.
      </p>
      <div className="overflow-x-auto rounded-2xl mb-4" style={{ border: "1px solid var(--border)" }}>
        <table className="w-full text-sm">
          <thead>
            <tr style={{ background: "var(--bg-card2)" }}>
              {["Bedtime", "4 Cycles (6h)", "5 Cycles (7.5h) ⭐", "6 Cycles (9h)"].map((h) => (
                <th key={h} className="px-5 py-3 text-left font-semibold" style={{ color: "var(--accent-light)" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              ["9:00 PM",  "3:14 AM", "4:44 AM",  "6:14 AM"],
              ["9:30 PM",  "3:44 AM", "5:14 AM",  "6:44 AM"],
              ["10:00 PM", "4:14 AM", "5:44 AM",  "7:14 AM"],
              ["10:30 PM", "4:44 AM", "6:14 AM",  "7:44 AM"],
              ["11:00 PM", "5:14 AM", "6:44 AM",  "8:14 AM"],
              ["11:30 PM", "5:44 AM", "7:14 AM",  "8:44 AM"],
              ["12:00 AM", "6:14 AM", "7:44 AM",  "9:14 AM"],
              ["12:30 AM", "6:44 AM", "8:14 AM",  "9:44 AM"],
              ["1:00 AM",  "7:14 AM", "8:44 AM", "10:14 AM"],
            ].map(([bed, c4, c5, c6], i) => (
              <tr key={bed} style={{ background: i % 2 === 0 ? "transparent" : "var(--bg-card2)", borderTop: "1px solid var(--border)" }}>
                <td className="px-5 py-3 font-bold" style={{ color: "var(--text-primary)" }}>{bed}</td>
                <td className="px-5 py-3" style={{ color: "var(--text-muted)" }}>{c4}</td>
                <td className="px-5 py-3 font-semibold" style={{ color: "var(--accent-light)" }}>{c5}</td>
                <td className="px-5 py-3" style={{ color: "var(--text-muted)" }}>{c6}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs" style={{ color: "var(--text-muted)" }}>
        For a personalized result with your exact bedtime and fall-asleep time, use the calculator at the top of this page.
      </p>

      {divider}

      {/* Why cycle-end waking matters */}
      <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
        Why Waking at the End of a Sleep Cycle Makes Such a Difference
      </h2>
      <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>
        Most people think of sleep as a single block — you close your eyes, sleep happens, you wake up. In reality, your brain is cycling between distinct stages all night, and <em>when</em> your alarm fires within that cycle is as important as how many total hours you get.
      </p>
      <div className="grid sm:grid-cols-2 gap-4 mb-5">
        {[
          { title: "Waking at cycle end (light sleep)", points: ["Transition to wakefulness is smooth", "Alertness comes within minutes", "Mood and cognitive function are intact", "Even 6 hours can feel sufficient"], good: true },
          { title: "Waking mid-cycle (deep sleep)", points: ["Heavy, disoriented feeling for 30–60 min", "Reduced cognitive function for hours", "Irritability and poor focus", "Even 8 hours can feel inadequate"], good: false },
        ].map(({ title, points, good }) => (
          <div key={title} className="rounded-2xl p-5" style={{ background: "var(--bg-card)", border: `1px solid ${good ? "rgba(108,255,140,0.2)" : "rgba(255,100,100,0.2)"}` }}>
            <p className="font-semibold text-sm mb-3" style={{ color: good ? "var(--accent-light)" : "#ff6464" }}>{title}</p>
            <ul className="space-y-1">
              {points.map(p => (
                <li key={p} className="flex gap-2 text-sm" style={{ color: "var(--text-muted)" }}>
                  <span style={{ color: good ? "var(--accent-light)" : "#ff6464", flexShrink: 0 }}>{good ? "✓" : "✗"}</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
        This is why someone who slept 7.5 hours and timed it correctly can outperform someone who slept 8.5 hours but woke mid-cycle. Total sleep matters — but so does where in the cycle your alarm fires.
      </p>

      {divider}

      {/* Natural waking */}
      <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
        What It Means When You Wake Up Before Your Alarm
      </h2>
      <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
        Waking up naturally, a few minutes before your alarm goes off, is one of the clearest signs that your sleep schedule is properly aligned with your circadian rhythm. Your brain anticipates the wake-up time and begins transitioning from deeper sleep to lighter stages in preparation — a process called <strong style={{ color: "var(--text-primary)" }}>anticipatory arousal</strong>.
      </p>
      <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
        This tends to happen when you've maintained the same wake-up time consistently for at least one to two weeks. Your internal clock essentially learns the schedule and begins preparing for it automatically. When it does happen, you typically feel alert immediately — no grogginess, no need to hit snooze.
      </p>
      <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
        If you're waking up significantly before your alarm and feel rested, your body may need slightly less sleep than you're giving it. Try shifting your bedtime 15–30 minutes later and see whether the natural wake-up time shifts accordingly.
      </p>

      {divider}

      {/* Best wake time for productivity */}
      <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
        Best Wake-Up Time for Energy and Productivity
      </h2>
      <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>
        Research consistently shows that early morning wake-ups — when combined with adequate total sleep — are associated with higher reported energy, better mood, and improved cognitive performance throughout the day. But "early" is relative to your <Link href="/chronotype-calculator/" className="underline" style={{ color: "var(--accent-light)" }}>chronotype</Link>.
      </p>
      <div className="space-y-3 mb-5">
        {[
          { label: "Early chronotype (morning types)", time: "5:00 AM – 6:30 AM", desc: "Natural wake window; circadian rhythm supports high alertness from early morning." },
          { label: "Intermediate chronotype (most people)", time: "6:30 AM – 7:30 AM", desc: "Optimal window for most adults on a standard daytime schedule." },
          { label: "Late chronotype (evening types)", time: "8:00 AM – 9:30 AM", desc: "Forced early wake-ups work against their biology. Late chronotypes perform better when allowed to wake naturally later." },
        ].map(({ label, time, desc }) => (
          <div key={label} className="flex gap-4 rounded-2xl p-4" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
            <div className="flex-shrink-0 text-right" style={{ minWidth: "90px" }}>
              <p className="text-xs font-bold" style={{ color: "var(--accent-light)" }}>{time}</p>
            </div>
            <div>
              <p className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>{label}</p>
              <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>{desc}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
        The single most important factor isn't the exact wake-up time — it's <strong style={{ color: "var(--text-primary)" }}>consistency</strong>. Waking at the same time every day, even on weekends, anchors your circadian rhythm and produces noticeably better energy and mood within two to three weeks.
      </p>

      {divider}

      {/* Snooze button */}
      <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
        Why the Snooze Button Makes Morning Grogginess Worse
      </h2>
      <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
        When your alarm goes off and you hit snooze, your brain doesn't pick up where it left off in a light sleep stage. Instead, it begins descending back into deeper sleep within minutes. When the snooze alarm fires 9 minutes later, you're being pulled out of deep sleep — exactly the scenario you were trying to avoid.
      </p>
      <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
        Research shows that repeated snoozing creates a cycle of interrupted sleep that increases total sleep inertia compared to simply getting up on the first alarm. The extra 9 minutes is not restorative — it actively makes you feel worse.
      </p>
      <div className="rounded-2xl p-5" style={{ background: "var(--bg-card2)", border: "1px solid var(--border)" }}>
        <p className="font-semibold text-sm mb-2" style={{ color: "var(--text-primary)" }}>A better alternative to snoozing:</p>
        <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
          If you consistently want to snooze, your alarm is set too early for the number of sleep cycles you're completing. Use this calculator to find a wake-up time that naturally aligns with the end of your last cycle — and set only one alarm for that time.
        </p>
      </div>

      {divider}

      {/* Related tools */}
      <h2 className="text-2xl font-bold mb-5" style={{ color: "var(--text-primary)" }}>
        Related Sleep Tools
      </h2>
      <div className="grid sm:grid-cols-2 gap-3">
        {[
          { href: "/bedtime-calculator/", label: "Bedtime Calculator", desc: "Know your wake time — find the right bedtime" },
          { href: "/sleep-debt-calculator/", label: "Sleep Debt Calculator", desc: "Track how many hours you're short this week" },
          { href: "/nap-calculator/", label: "Nap Calculator", desc: "Plan a nap that won't disrupt tonight's sleep" },
          { href: "/chronotype-calculator/", label: "Chronotype Calculator", desc: "Find your natural wake-up window" },
          { href: "/sleep-schedule-builder/", label: "Sleep Schedule Builder", desc: "Build a consistent weekly sleep routine" },
          { href: "/rem-sleep-calculator/", label: "REM Sleep Calculator", desc: "Estimate REM sleep from your current schedule" },
        ].map(({ href, label, desc }) => (
          <Link key={href} href={href}
            className="flex gap-3 rounded-2xl p-4 hover:scale-[1.01] transition-all"
            style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
            <span style={{ color: "var(--accent-light)", flexShrink: 0, marginTop: "2px" }}>→</span>
            <div>
              <p className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>{label}</p>
              <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>{desc}</p>
            </div>
          </Link>
        ))}
      </div>

      <div style={{ height: "1px", background: "var(--border)", margin: "2rem 0" }} />
      <p className="text-xs text-center" style={{ color: "var(--text-muted)" }}>
        Wake-up times are calculated using the 90-minute sleep cycle model and a 14-minute average sleep onset period. Individual results vary. If you experience persistent sleep difficulties, consult a healthcare professional.
      </p>
    </section>
  );
}
