import Link from "next/link";

export default function BedtimeContent() {
  const divider = (
    <div style={{ height: "1px", background: "var(--border)", margin: "2.5rem 0" }} />
  );

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-14">

      {/* Intro */}
      <p className="text-base leading-relaxed mb-2 pl-4 italic"
        style={{ color: "var(--text-secondary)", borderLeft: "3px solid var(--accent)" }}>
        A bedtime calculator tells you exactly what time to get into bed based on when you need to wake up. It works by counting backward from your alarm time in 90-minute sleep cycle blocks — then adding roughly 14 minutes for how long the average person takes to fall asleep. The result is a set of bedtime windows that land you at the natural end of a sleep cycle, so you wake up feeling clear-headed instead of groggy.
      </p>

      {divider}

      {/* What Is */}
      <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
        What Is a Bedtime Calculator?
      </h2>
      <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
        A bedtime calculator is a free sleep tool that finds the right time for you to go to sleep, based entirely on your wake-up time and the science of how sleep cycles work. Instead of guessing at "eight hours," it shows you the specific times that align with your body's natural rhythm.
      </p>
      <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
        The tool is built around one well-established sleep science principle: your brain moves through repeating 90-minute cycles throughout the night. Each cycle ends in a lighter stage of sleep, which is the easiest point to wake from. If your alarm fires in the middle of a deep sleep stage, your body resists waking — producing that heavy, foggy feeling called <strong style={{ color: "var(--text-primary)" }}>sleep inertia</strong>. Timing your bedtime so your alarm lands at the end of a full cycle can make a significant difference in how you feel every morning.
      </p>
      <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
        The bedtime calculator does this math instantly. All you need is your wake-up time.
      </p>

      {divider}

      {/* How to Use */}
      <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
        How to Use the Bedtime Calculator — Free and No Sign-Up Required
      </h2>
      <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
        Using the bedtime calculator takes about ten seconds. Here's how it works:
      </p>
      <div className="space-y-4 mb-6">
        {[
          { step: "Step 1", title: "Enter your wake-up time", desc: "Type in or select the time your alarm is set for, or the time you need to be up tomorrow morning." },
          { step: "Step 2", title: "The calculator works backward in 90-minute cycles", desc: "It automatically adds a 14-minute sleep onset buffer (the time it takes most adults to actually fall asleep after lying down) and then counts backward in 90-minute blocks." },
          { step: "Step 3", title: "Review your bedtime options", desc: "You'll see two to four recommended bedtimes, each one representing a different number of complete sleep cycles." },
          { step: "Step 4", title: "Pick the bedtime that fits your evening", desc: "You don't need to hit it to the minute. Lying down within 15 to 20 minutes of your chosen time is close enough." },
        ].map(({ step, title, desc }) => (
          <div key={step} className="flex gap-4 rounded-2xl p-5" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
            <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold"
              style={{ background: "var(--accent)", color: "#fff" }}>
              {step.split(" ")[1]}
            </div>
            <div>
              <p className="font-semibold text-sm mb-1" style={{ color: "var(--text-primary)" }}>{title}</p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="rounded-2xl p-5 space-y-2" style={{ background: "var(--bg-card2)", border: "1px solid var(--border)" }}>
        {[
          { cycles: "6 cycles = 9 hours", note: "ideal if you're recovering from illness, intense physical training, or significant sleep debt" },
          { cycles: "5 cycles = 7.5 hours", note: "the most commonly recommended amount for adults; the sweet spot for most people", highlight: true },
          { cycles: "4 cycles = 6 hours", note: "sufficient for some adults but not enough for most; use this as a minimum, not a goal" },
          { cycles: "3 cycles = 4.5 hours", note: "only appropriate in rare situations; not recommended as a regular pattern" },
        ].map(({ cycles, note, highlight }) => (
          <div key={cycles} className="flex gap-3 items-start text-sm">
            <span style={{ color: highlight ? "var(--accent-light)" : "var(--text-muted)", fontWeight: highlight ? 700 : 500 }}>
              {highlight ? "⭐" : "•"}
            </span>
            <span>
              <strong style={{ color: highlight ? "var(--accent-light)" : "var(--text-primary)" }}>{cycles}</strong>
              <span style={{ color: "var(--text-muted)" }}> — {note}</span>
            </span>
          </div>
        ))}
      </div>
      <p className="text-xs mt-4" style={{ color: "var(--text-muted)" }}>The calculator is completely free with no account needed.</p>

      {divider}

      {/* App tips */}
      <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
        How to Use a Bedtime Calculator App
      </h2>
      <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>
        If you're using the bedtime calculator on your phone, the steps are the same. Tap your wake-up time using the time-picker, hit calculate, and the recommended bedtimes appear immediately. A few tips that make the tool more accurate for your situation:
      </p>
      <div className="space-y-4">
        {[
          { title: "Adjust for your real fall-asleep time", desc: "If you typically lie in bed for 30 minutes before falling asleep (rather than the average 14), account for that in the settings. Using your actual sleep onset time gives you a more precise bedtime window." },
          { title: "Use it the night before, not right at bedtime", desc: "Planning your sleep schedule a few hours in advance means you can actually act on the result — adjusting your evening wind-down routine so you're in bed at the right time." },
          { title: "Try it for a week consistently", desc: "One night of aligned sleep cycles makes a noticeable difference. A week of consistently waking at the right point in your cycle creates a much more sustainable shift in how rested you feel." },
          { title: "Use it alongside the nap calculator", desc: "If you plan to take a daytime nap, a nap changes how tired you'll be by bedtime. Our Nap Calculator helps you account for that." },
        ].map(({ title, desc }) => (
          <div key={title} className="rounded-2xl p-5" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
            <p className="font-semibold text-sm mb-1" style={{ color: "var(--text-primary)" }}>{title}</p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{desc}</p>
          </div>
        ))}
      </div>

      {divider}

      {/* Best time science */}
      <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
        What Is the Scientifically Best Time to Sleep and Wake Up?
      </h2>
      <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
        There is no single "best" bedtime that works for every person. But research points consistently in one direction: sleeping in alignment with your <strong style={{ color: "var(--text-primary)" }}>circadian rhythm</strong> produces better sleep quality than sleeping against it.
      </p>
      <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
        Your circadian rhythm is your body's internal 24-hour clock. It's regulated by light exposure — primarily sunlight — and controls the release of hormones that govern when you feel sleepy and when you feel alert. The key hormone here is <strong style={{ color: "var(--text-primary)" }}>melatonin</strong>, which your brain begins producing as light fades and signals your body to prepare for sleep.
      </p>
      <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>
        For most people with a standard schedule, the circadian rhythm naturally promotes sleep between 10 PM and midnight and supports waking between 6 AM and 8 AM. Research from a 2023 Stanford study found that earlier sleep timing is associated with a lower likelihood of mental and physical health disorders — though this doesn't mean a 5 AM wake-up is right for everyone.
      </p>
      <p className="text-sm font-semibold mb-3" style={{ color: "var(--text-primary)" }}>What the science does agree on consistently:</p>
      <div className="space-y-3">
        {[
          { title: "Consistency matters more than the exact hour", desc: "Going to sleep and waking up at the same time every day — including weekends — keeps your circadian rhythm anchored. A stable rhythm means you fall asleep faster, sleep more deeply, and wake up more easily over time." },
          { title: "Sleeping when it's dark supports deeper sleep", desc: "Your brain is wired to sleep when light disappears. Evening artificial light — especially from screens — delays melatonin production and pushes your natural sleep window later than your schedule may allow." },
          { title: "Waking with natural light is ideal", desc: "Light in the first hour of your day resets your circadian clock for the next 24 hours. It's one of the most reliable ways to stabilize your sleep timing without medication." },
        ].map(({ title, desc }) => (
          <div key={title} className="flex gap-3 rounded-2xl p-4" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
            <span style={{ color: "var(--accent-light)", flexShrink: 0 }}>✓</span>
            <div>
              <span className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>{title}. </span>
              <span className="text-sm" style={{ color: "var(--text-muted)" }}>{desc}</span>
            </div>
          </div>
        ))}
      </div>

      {divider}

      {/* Age table */}
      <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
        Bedtime Calculator by Age — Sleep Needs Across Your Lifetime
      </h2>
      <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
        Sleep needs change across your lifetime, and the bedtime calculator can be adjusted to reflect your age. Here's how much sleep each age group needs according to guidelines from the American Academy of Sleep Medicine (AASM) and the CDC:
      </p>
      <div className="overflow-x-auto rounded-2xl mb-5" style={{ border: "1px solid var(--border)" }}>
        <table className="w-full text-sm">
          <thead>
            <tr style={{ background: "var(--bg-card2)" }}>
              {["Age Group", "Recommended Sleep Duration"].map((h) => (
                <th key={h} className="px-5 py-3 text-left font-semibold" style={{ color: "var(--accent-light)" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              ["Infants (4–12 months)", "12–16 hours (including naps)"],
              ["Toddlers (1–2 years)", "11–14 hours (including naps)"],
              ["Preschoolers (3–5 years)", "10–13 hours (including naps)"],
              ["School-age children (6–12 years)", "9–12 hours"],
              ["Teenagers (13–18 years)", "8–10 hours"],
              ["Adults (18–64 years)", "7–9 hours"],
              ["Older adults (65+)", "7–8 hours"],
            ].map(([age, duration], i) => (
              <tr key={age} style={{ background: i % 2 === 0 ? "transparent" : "var(--bg-card2)", borderTop: "1px solid var(--border)" }}>
                <td className="px-5 py-3 font-medium" style={{ color: "var(--text-primary)" }}>{age}</td>
                <td className="px-5 py-3" style={{ color: "var(--text-muted)" }}>{duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--text-secondary)" }}>
        The bedtime windows shift depending on the age group. An adult needing 7.5 hours with a 6:30 AM wake-up should be in bed around 10:46 PM. A ten-year-old needing 10 hours with a 7:00 AM school start should be in bed by 8:46 PM.
      </p>
      <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
        Sleep cycle length also changes with age. Children spend a higher proportion of their sleep in deep (slow-wave) sleep compared to adults. Teenagers experience a biological shift — a genuine, neurological delay in their circadian rhythm — that makes it harder for them to fall asleep before 11 PM and equally hard to wake before 8 AM. This isn't a behavior problem; it's a documented change in the circadian clock during adolescence.
      </p>

      {divider}

      {/* Kids tables */}
      <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
        Bedtime Calculator for Kids — What Time Should Children Go to Bed?
      </h2>
      <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
        Getting the right bedtime for a child matters more than most parents realize. Sleep is when children's bodies release growth hormone, consolidate what they learned that day, and regulate the emotional responses that make mornings and after-school hours go smoothly. Not enough sleep — even by 45 minutes — shows up in mood, attention, and behavior the next day.
      </p>

      <div className="grid sm:grid-cols-2 gap-6 mb-6">
        {[
          {
            wakeTime: "If Your Child Wakes at 6:30 AM",
            rows: [
              ["3–5 years", "6:17 PM – 7:17 PM"],
              ["6–8 years", "7:17 PM – 8:17 PM"],
              ["9–12 years", "8:17 PM – 9:17 PM"],
              ["13–18 years", "9:17 PM – 10:17 PM"],
            ],
          },
          {
            wakeTime: "If Your Child Wakes at 7:00 AM",
            rows: [
              ["3–5 years", "6:46 PM – 7:46 PM"],
              ["6–8 years", "7:46 PM – 8:46 PM"],
              ["9–12 years", "8:46 PM – 9:46 PM"],
              ["13–18 years", "9:46 PM – 10:46 PM"],
            ],
          },
        ].map(({ wakeTime, rows }) => (
          <div key={wakeTime} className="overflow-x-auto rounded-2xl" style={{ border: "1px solid var(--border)" }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: "var(--bg-card2)" }}>
                  <th className="px-4 py-3 text-left font-semibold" colSpan={2} style={{ color: "var(--accent-light)" }}>{wakeTime}</th>
                </tr>
                <tr style={{ background: "var(--bg-card2)", borderTop: "1px solid var(--border)" }}>
                  <th className="px-4 py-2 text-left text-xs font-medium" style={{ color: "var(--text-muted)" }}>Age</th>
                  <th className="px-4 py-2 text-left text-xs font-medium" style={{ color: "var(--text-muted)" }}>Recommended Bedtime</th>
                </tr>
              </thead>
              <tbody>
                {rows.map(([age, time], i) => (
                  <tr key={age} style={{ background: i % 2 === 0 ? "transparent" : "var(--bg-card2)", borderTop: "1px solid var(--border)" }}>
                    <td className="px-4 py-3 font-medium" style={{ color: "var(--text-primary)" }}>{age}</td>
                    <td className="px-4 py-3" style={{ color: "var(--accent-light)" }}>{time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
      <p className="text-xs mb-5" style={{ color: "var(--text-muted)" }}>Times are approximate and account for a 14-minute sleep onset buffer.</p>
      <div className="space-y-3">
        {[
          { title: "Start winding down 30 minutes before bed", desc: "Dim lights, stop screens, and move to quieter activities. A consistent pre-sleep routine — bath, book, bed — signals the brain to begin producing melatonin." },
          { title: "Keep the same bedtime on weekends", desc: "Staying up late on Friday and Saturday pushes your child's internal clock later, making Monday mornings harder. Social jet lag affects children just as noticeably as adults." },
          { title: "Keep the bedroom cool and dark", desc: "Children sleep best in a room between 65–70°F (18–21°C). Blackout curtains make a significant difference, particularly in summer when sunset is late." },
        ].map(({ title, desc }) => (
          <div key={title} className="flex gap-3 rounded-2xl p-4" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
            <span style={{ color: "var(--accent-light)", flexShrink: 0 }}>💡</span>
            <div>
              <span className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>{title}. </span>
              <span className="text-sm" style={{ color: "var(--text-muted)" }}>{desc}</span>
            </div>
          </div>
        ))}
      </div>

      {divider}

      {/* Grogginess */}
      <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
        Why You Wake Up Groggy Even After a Full Night's Sleep
      </h2>
      <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
        Waking up groggy after what felt like enough sleep is one of the most common complaints people have — and it almost always comes down to one of two things: waking mid-cycle, or accumulated sleep debt.
      </p>
      <div className="space-y-4 mb-5">
        <div className="rounded-2xl p-5" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
          <p className="font-semibold text-sm mb-2" style={{ color: "var(--text-primary)" }}>Waking mid-cycle (sleep inertia)</p>
          <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
            Happens when your alarm goes off while your brain is still in Stage 2 or Stage 3 sleep. These deeper stages are the hardest to pull out of. You may have slept eight hours, but if that eighth hour ended mid-cycle, your brain hasn't had a chance to transition back to light sleep before waking. The result is a disoriented, heavy feeling that can persist for 30 minutes to an hour. The bedtime calculator is specifically designed to prevent this.
          </p>
        </div>
        <div className="rounded-2xl p-5" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
          <p className="font-semibold text-sm mb-2" style={{ color: "var(--text-primary)" }}>Sleep debt</p>
          <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
            The accumulated shortfall between the sleep you needed and the sleep you got. Even small deficits — 45 minutes less than you need, every night for a week — build up into a significant debt that no single night can fully repay. If you've been short on sleep for several days, you'll likely feel tired even after a well-timed night. Use our{" "}
            <Link href="/sleep-debt-calculator/" className="underline" style={{ color: "var(--accent-light)" }}>Sleep Debt Calculator</Link>{" "}
            to find out how much you've accumulated.
          </p>
        </div>
      </div>
      <p className="text-sm font-semibold mb-3" style={{ color: "var(--text-primary)" }}>Other common causes of morning grogginess:</p>
      <ul className="space-y-2 text-sm" style={{ color: "var(--text-muted)" }}>
        {[
          "Alcohol the night before — reduces REM sleep and fragments the second half of your night",
          "A bedroom that's too warm — prevents the core body temperature drop your body needs to stay in deep sleep",
          "Inconsistent sleep times — disrupts your circadian rhythm so your body is never fully certain when to sleep deeply",
          "Sleep apnea or other sleep disorders — fragmented sleep even when total hours look adequate",
        ].map((item) => (
          <li key={item} className="flex gap-2">
            <span style={{ color: "var(--accent)", flexShrink: 0 }}>—</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {divider}

      {/* Deep sleep */}
      <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
        What Is the Ideal Bedtime for Getting Enough Deep Sleep?
      </h2>
      <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
        Deep sleep — Stage 3, also called slow-wave sleep — is most concentrated in the <strong style={{ color: "var(--text-primary)" }}>first half of the night</strong>. The first two to three sleep cycles tend to have longer deep sleep phases and shorter REM phases. As the night goes on, this reverses: later cycles have less deep sleep and longer REM periods.
      </p>
      <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>
        This means that going to bed at your actual intended time matters more than sleeping in late to compensate. Delaying your bedtime doesn't just reduce total sleep — it cuts specifically into your early deep sleep phases, which are responsible for physical repair, immune function, and memory consolidation.
      </p>
      <p className="text-sm font-semibold mb-3" style={{ color: "var(--text-primary)" }}>If you're consistently getting less deep sleep than you need:</p>
      <div className="space-y-3">
        {[
          { title: "Go to bed earlier rather than sleeping later", desc: "Late-night sleep is heavier in REM, not deep sleep. The early portion of the night is where deep sleep happens." },
          { title: "Reduce alcohol in the evening", desc: "Even moderate alcohol consumption suppresses slow-wave sleep and reduces its restorative effects." },
          { title: "Exercise regularly, but not too close to bedtime", desc: "Physical activity increases deep sleep, but exercising within 2–3 hours of bed can delay sleep onset." },
        ].map(({ title, desc }) => (
          <div key={title} className="flex gap-3 rounded-2xl p-4" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
            <span style={{ color: "var(--accent-light)", flexShrink: 0 }}>✓</span>
            <div>
              <span className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>{title}. </span>
              <span className="text-sm" style={{ color: "var(--text-muted)" }}>{desc}</span>
            </div>
          </div>
        ))}
      </div>
      <p className="text-sm mt-4" style={{ color: "var(--text-secondary)" }}>
        Our{" "}
        <Link href="/rem-sleep-calculator/" className="underline" style={{ color: "var(--accent-light)" }}>REM Sleep Calculator</Link>{" "}
        can help you estimate how much REM sleep you're likely getting based on your current schedule.
      </p>

      {divider}

      {/* Consistency over time */}
      <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
        How a Consistent Bedtime Affects Your Sleep Quality Over Time
      </h2>
      <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
        Using the bedtime calculator once gives you a good target for tonight. Using it consistently — and actually following the same schedule every night — produces compounding improvements over time.
      </p>
      <div className="space-y-4 mb-5">
        {[
          { period: "Week 1", desc: "Your circadian rhythm begins to anchor. You may still need a few minutes to wind down at your new bedtime, but your body starts expecting sleep at that time and melatonin production becomes more predictable." },
          { period: "Week 2–3", desc: "Sleep onset shortens. You start falling asleep faster because your body temperature drops and melatonin levels rise reliably at your new bedtime. Wake-ups during the night become less frequent." },
          { period: "Month 1+", desc: "You may begin waking naturally just before your alarm. This is a reliable sign that your sleep schedule is aligned with your circadian rhythm. Your body knows the wake-up time is coming and prepares by transitioning into lighter sleep phases before the alarm fires." },
        ].map(({ period, desc }) => (
          <div key={period} className="flex gap-4 rounded-2xl p-5" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
            <div className="flex-shrink-0 px-3 py-1 rounded-full text-xs font-bold h-fit"
              style={{ background: "rgba(108,99,255,0.15)", color: "var(--accent-light)" }}>
              {period}
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{desc}</p>
          </div>
        ))}
      </div>
      <div className="rounded-2xl p-5" style={{ background: "rgba(255,100,100,0.07)", border: "1px solid rgba(255,100,100,0.2)" }}>
        <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          <strong style={{ color: "var(--text-primary)" }}>⚠️ The most common mistake:</strong> maintaining a consistent weekday schedule and then staying up two to three hours later on weekends. Even two nights of late sleep can shift your circadian rhythm by up to 2 hours — a pattern called <strong style={{ color: "var(--text-primary)" }}>social jet lag</strong>. You pay for it every Monday morning.
        </p>
      </div>

      {divider}

      {/* Free vs paid */}
      <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
        Should I Use the Free Bedtime Calculator or a Paid Sleep App?
      </h2>
      <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
        The free bedtime calculator on this site gives you the same core calculation as paid apps like RISE, Oura, or Sleep Cycle — because the underlying math is the same. All of them use the 90-minute cycle model and a sleep onset buffer to suggest bedtimes.
      </p>
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div className="rounded-2xl p-5" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
          <p className="font-semibold text-sm mb-3" style={{ color: "var(--accent-light)" }}>Free Calculator (This Site)</p>
          <ul className="space-y-2 text-sm" style={{ color: "var(--text-muted)" }}>
            {["Plan your sleep schedule", "Find bedtime based on cycles", "Quick reference tables", "No account or install needed"].map(f => (
              <li key={f} className="flex gap-2"><span style={{ color: "var(--accent-light)" }}>✓</span>{f}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl p-5" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
          <p className="font-semibold text-sm mb-3" style={{ color: "var(--text-primary)" }}>Paid Apps (RISE, Oura, etc.)</p>
          <ul className="space-y-2 text-sm" style={{ color: "var(--text-muted)" }}>
            {["Passive sleep tracking", "Microphone / accelerometer data", "Adaptive smart alarms", "Heart rate variability (with wearable)"].map(f => (
              <li key={f} className="flex gap-2"><span style={{ color: "var(--text-muted)" }}>+</span>{f}</li>
            ))}
          </ul>
        </div>
      </div>
      <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
        For most people starting to pay attention to their sleep schedule, the free tool is the right starting point. You can always add tracking later once you've established a routine worth tracking.
      </p>

      {divider}

      {/* Other tools */}
      <h2 className="text-2xl font-bold mb-5" style={{ color: "var(--text-primary)" }}>
        Other Sleep Tools You Might Find Useful
      </h2>
      <div className="grid sm:grid-cols-2 gap-3 mb-6">
        {[
          { href: "/", label: "Sleep Calculator", desc: "The main calculator for both bedtime and wake-up planning" },
          { href: "/wake-up-time-calculator/", label: "Wake-Up Time Calculator", desc: "Enter your bedtime, find the best times to set your alarm" },
          { href: "/sleep-debt-calculator/", label: "Sleep Debt Calculator", desc: "Track how many hours of sleep you've missed this week" },
          { href: "/nap-calculator/", label: "Nap Calculator", desc: "Plan a nap that refreshes you without disrupting tonight's sleep" },
          { href: "/chronotype-calculator/", label: "Chronotype Calculator", desc: "Find out if your natural sleep timing is early, average, or late" },
          { href: "/sleep-schedule-builder/", label: "Sleep Schedule Builder", desc: "Build a full weekly plan around your work and life commitments" },
          { href: "/rem-sleep-calculator/", label: "REM Sleep Calculator", desc: "Estimate how much REM sleep your current schedule provides" },
          { href: "/jet-lag-calculator/", label: "Jet Lag Calculator", desc: "Recalibrate your bedtime after long-haul travel" },
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

      {/* Disclaimer */}
      <p className="text-xs text-center" style={{ color: "var(--text-muted)" }}>
        Bedtime recommendations are based on the 90-minute sleep cycle model used in published sleep research. All tools on this site are free with no account required. Individual sleep needs vary — if you experience ongoing sleep difficulties or excessive daytime tiredness, consult a healthcare professional.
      </p>
    </section>
  );
}
