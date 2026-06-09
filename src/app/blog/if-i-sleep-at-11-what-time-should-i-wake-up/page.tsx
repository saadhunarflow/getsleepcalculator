import type { Metadata } from "next";
import Link from "next/link";
import AuthorBio from "@/app/components/AuthorBio";
import RelatedArticles from "@/app/components/RelatedArticles";
import TableOfContents from "@/app/components/TableOfContents";
import { breadcrumbSchema, faqSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "If I Sleep at 11 PM, What Time Should I Wake Up? (Sleep Cycle Chart)",
  description:
    "If you go to sleep at 11 PM, the best times to wake up are 6:44 AM (5 cycles, 7.5h) or 8:14 AM (6 cycles, 9h). Based on 90-minute sleep cycles with full chart.",
  alternates: { canonical: "https://getsleepcalculator.net/blog/if-i-sleep-at-11-what-time-should-i-wake-up/" },
  openGraph: {
    title: "If I Sleep at 11 PM, What Time Should I Wake Up? (Sleep Cycle Chart)",
    description: "If you go to sleep at 11 PM, the best times to wake up are 6:44 AM (5 cycles) or 8:14 AM (6 cycles). Full sleep cycle chart included.",
    url: "https://getsleepcalculator.net/blog/if-i-sleep-at-11-what-time-should-i-wake-up/",
    type: "article",
    images: [{ url: "https://getsleepcalculator.net/og-image.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
};

export default function SleepAt11PMPost() {
  const cycles = [
    { time: "5:14 AM", sleep: "6h 0min",   cycles: "4 cycles", rec: "Early risers, short sleepers" },
    { time: "6:44 AM", sleep: "7h 30min",  cycles: "5 cycles", rec: "Most adults — RECOMMENDED", highlight: true },
    { time: "8:14 AM", sleep: "9h 0min",   cycles: "6 cycles", rec: "Recovery, teens, heavy training" },
    { time: "9:44 AM", sleep: "10h 30min", cycles: "7 cycles", rec: "High recovery needs" },
  ];

  const chartRows = [
    { bed: "9:00 PM",  five: "4:44 AM",  six: "6:14 AM" },
    { bed: "9:30 PM",  five: "5:14 AM",  six: "6:44 AM" },
    { bed: "10:00 PM", five: "5:44 AM",  six: "7:14 AM" },
    { bed: "10:30 PM", five: "6:14 AM",  six: "7:44 AM" },
    { bed: "11:00 PM", five: "6:44 AM",  six: "8:14 AM", highlight: true },
    { bed: "11:30 PM", five: "7:14 AM",  six: "8:44 AM" },
    { bed: "12:00 AM", five: "7:44 AM",  six: "9:14 AM" },
    { bed: "1:00 AM",  five: "8:44 AM",  six: "10:14 AM" },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BlogPosting",
        headline: "If I Sleep at 11 PM, What Time Should I Wake Up?",
        description: "Best wake-up times for an 11 PM bedtime based on 90-minute sleep cycles.",
        url: "https://getsleepcalculator.net/blog/if-i-sleep-at-11-what-time-should-i-wake-up/",
        datePublished: "2026-06-10", dateModified: "2026-06-10",
        author: { "@type": "Person", name: "Saad Zaib", url: "https://getsleepcalculator.net/about/" },
        publisher: { "@type": "Organization", name: "Get Sleep Calculator", url: "https://getsleepcalculator.net", logo: { "@type": "ImageObject", url: "https://getsleepcalculator.net/og-image.png" } },
        image: "https://getsleepcalculator.net/og-image.png",
        mainEntityOfPage: { "@type": "WebPage", "@id": "https://getsleepcalculator.net/blog/if-i-sleep-at-11-what-time-should-i-wake-up/" },
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Blog", href: "/blog/" }, { name: "If I Sleep at 11 PM, What Time Should I Wake Up?", href: "/blog/if-i-sleep-at-11-what-time-should-i-wake-up/" }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema([
        { question: "If I sleep at 11 PM what time should I wake up?", answer: "The best wake-up times for an 11 PM bedtime are 6:44 AM (7.5 hours, 5 complete sleep cycles) or 8:14 AM (9 hours, 6 cycles). These align with the end of a 90-minute sleep cycle so you wake during light sleep, avoiding grogginess. The 6:44 AM option is recommended for most adults needing 7–9 hours." },
        { question: "Is 11 PM a good bedtime?", answer: "Eleven PM is a reasonable bedtime for adults, though it's slightly later than the optimal 10–10:30 PM window for most people's melatonin rhythms. If you need to wake by 7 AM, an 11 PM bedtime gives you a 5-cycle wake option at 6:44 AM — only 16 minutes before 7 AM, which is still near a cycle endpoint and manageable." },
        { question: "If I sleep at 11 PM and wake at 7 AM, how many cycles is that?", answer: "11 PM to 7 AM is 8 hours. Subtracting 14 minutes of sleep onset latency leaves 7 hours 46 minutes of actual sleep — approximately 5 complete cycles (7.5h) with 16 minutes remaining. This is close to a cycle endpoint and most adults will wake feeling relatively alert, though 6:44 AM (exact 5-cycle end) is slightly better." },
        { question: "If I sleep at 11 PM what time should I wake up for 7 hours of sleep?", answer: "For exactly 7 hours of sleep from an 11 PM bedtime, you'd wake at 6 AM. However, 6 AM falls mid-cycle (7h is not a multiple of 1.5h after accounting for sleep onset). The nearest cycle endpoint is 6:44 AM (5 cycles, 7.5h) — waking here will feel significantly better than a strict 7-hour alarm at 6 AM." },
      ]))}} />

      <article>
        <section style={{ background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(108,99,255,0.18) 0%, transparent 70%), var(--bg-primary)", padding: "4rem 0 3rem" }}>
          <div className="max-w-2xl mx-auto px-4">
            <Link href="/blog/" style={{ fontSize: 13, color: "var(--accent-light)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 4, marginBottom: 24 }}>← Back to Blog</Link>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: "rgba(99,102,241,0.15)", color: "#818cf8" }}>Sleep Cycles</span>
              <span style={{ fontSize: 12, color: "var(--text-muted)" }}>June 10, 2026 · 6 min read</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight" style={{ color: "var(--text-primary)" }}>
              If I Sleep at 11 PM, What Time Should I Wake Up?
            </h1>
            <p className="text-lg" style={{ color: "var(--text-muted)", lineHeight: 1.7 }}>
              If you go to sleep at 11 PM, the best times to wake up are <strong style={{ color: "var(--text-primary)" }}>6:44 AM</strong> (5 cycles, 7.5 hours) or <strong style={{ color: "var(--text-primary)" }}>8:14 AM</strong> (6 cycles, 9 hours). These times land at the natural end of a 90-minute sleep cycle — when sleep is lightest and waking feels effortless.
            </p>
          </div>
        </section>

        <section className="max-w-2xl mx-auto px-4 py-12">
          <TableOfContents items={[
            { id: "wake-times", text: "Best Wake-Up Times for 11 PM Bedtime", level: 2 },
            { id: "cycle-math", text: "The Sleep Cycle Math (How It's Calculated)", level: 2 },
            { id: "chart", text: "Full Bedtime Wake-Up Chart", level: 2 },
            { id: "tips", text: "Tips to Wake Up Refreshed", level: 2 },
            { id: "faq", text: "Frequently Asked Questions", level: 2 },
          ]} />

          <div style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.9 }} className="flex flex-col gap-8">

            <div style={{ background: "rgba(108,99,255,0.08)", border: "1px solid rgba(108,99,255,0.2)", borderRadius: 12, padding: "1.25rem" }}>
              <strong style={{ color: "var(--accent-light)" }}>Quick answer:</strong> Sleep at 11 PM + 14 min fall-asleep = sleep onset 11:14 PM. Add 90-min cycles: <strong style={{ color: "var(--text-primary)" }}>5:14 AM (4 cycles) · 6:44 AM (5 cycles) · 8:14 AM (6 cycles) · 9:44 AM (7 cycles).</strong> Most adults should target <strong style={{ color: "var(--text-primary)" }}>6:44 AM</strong>.
            </div>

            <div>
              <h2 id="wake-times" style={{ fontSize: 22, fontWeight: 800, color: "var(--text-primary)", marginBottom: 12 }}>Best Wake-Up Times for an 11 PM Bedtime</h2>
              <div className="overflow-x-auto rounded-2xl mb-4" style={{ border: "1px solid var(--border)" }}>
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ background: "var(--bg-card)", borderBottom: "2px solid var(--border)" }}>
                      {["Wake-Up Time", "Total Sleep", "Cycles", "Recommended For"].map((h) => (
                        <th key={h} className="px-4 py-3 text-left font-semibold" style={{ color: "var(--accent-light)" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {cycles.map((row, i) => (
                      <tr key={row.time} style={{ borderBottom: "1px solid var(--border)", background: i % 2 === 0 ? "transparent" : "rgba(108,99,255,0.03)" }}>
                        <td className="px-4 py-3 font-bold" style={{ color: row.highlight ? "var(--accent-light)" : "var(--text-primary)" }}>{row.time}</td>
                        <td className="px-4 py-3" style={{ color: "var(--text-muted)" }}>{row.sleep}</td>
                        <td className="px-4 py-3" style={{ color: "var(--text-muted)" }}>{row.cycles}</td>
                        <td className="px-4 py-3 font-medium" style={{ color: row.highlight ? "var(--accent-light)" : "var(--text-muted)" }}>{row.highlight ? <strong>{row.rec}</strong> : row.rec}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.75 }}>
                Not sleeping at exactly 11 PM? Use our <Link href="/wake-up-time-calculator/" style={{ color: "var(--accent-light)", textDecoration: "underline" }}>Wake-Up Calculator</Link> or <Link href="/bedtime-calculator/" style={{ color: "var(--accent-light)", textDecoration: "underline" }}>Bedtime Calculator</Link> to get personalized cycle-aligned times instantly.
              </p>
            </div>

            <div>
              <h2 id="cycle-math" style={{ fontSize: 22, fontWeight: 800, color: "var(--text-primary)", marginBottom: 12 }}>The Sleep Cycle Math</h2>
              <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.8, marginBottom: 10 }}>
                Sleep occurs in repeating 90-minute cycles, each containing NREM Stage 1 (light), NREM Stage 2 (onset), NREM Stage 3 (deep slow-wave), and REM sleep. The boundary between cycles is the lightest point of sleep — the ideal moment for an alarm. Waking in the middle of deep NREM Stage 3 causes <Link href="/sleep-inertia/" style={{ color: "var(--accent-light)", textDecoration: "underline" }}>sleep inertia</Link> — 30–90 minutes of intense grogginess.
              </p>
              <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.8 }}>
                The 14-minute buffer accounts for average sleep onset latency (time from lights off to actual sleep). If you go to bed at 11 PM, you typically fall asleep by 11:14 PM. Counting five 90-minute cycles from 11:14 PM = 6:44 AM exactly. Alarm at 6:44 AM fires right at a cycle endpoint — minimal grogginess, maximum alertness.
              </p>
            </div>

            <div>
              <h2 id="chart" style={{ fontSize: 22, fontWeight: 800, color: "var(--text-primary)", marginBottom: 12 }}>Full Bedtime Wake-Up Chart</h2>
              <div className="overflow-x-auto rounded-2xl mb-4" style={{ border: "1px solid var(--border)" }}>
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ background: "var(--bg-card)", borderBottom: "2px solid var(--border)" }}>
                      {["Bedtime", "5 Cycles (7.5h)", "6 Cycles (9h)"].map((h) => (
                        <th key={h} className="px-4 py-3 text-left font-semibold" style={{ color: "var(--accent-light)" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {chartRows.map((row, i) => (
                      <tr key={row.bed} style={{ borderBottom: "1px solid var(--border)", background: row.highlight ? "rgba(108,99,255,0.06)" : i % 2 === 0 ? "transparent" : "rgba(108,99,255,0.02)" }}>
                        <td className="px-4 py-3 font-bold" style={{ color: row.highlight ? "var(--accent-light)" : "var(--text-primary)" }}>{row.bed}</td>
                        <td className="px-4 py-3 font-semibold" style={{ color: row.highlight ? "var(--accent-light)" : "var(--text-primary)" }}>{row.five}</td>
                        <td className="px-4 py-3" style={{ color: "var(--text-muted)" }}>{row.six}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 id="tips" style={{ fontSize: 22, fontWeight: 800, color: "var(--text-primary)", marginBottom: 12 }}>Tips to Wake Up Refreshed at 6:44 AM</h2>
              <div className="flex flex-col gap-3">
                {[
                  { icon: "⏰", tip: "Set alarm to 6:44 AM exactly", detail: "Not 7:00 AM. The 16-minute difference between 6:44 and 7:00 AM places you mid-cycle at 7 AM, where deep sleep is at its densest. The 6:44 AM alarm catches you at the lightest point." },
                  { icon: "☀️", tip: "Get bright light within 5 minutes of waking", detail: "Morning sunlight (or a 10,000 lux lamp) suppresses melatonin and accelerates alertness onset. Even on cloudy days, outdoor light provides significantly more lux than indoor lighting." },
                  { icon: "📅", tip: "Keep the same 6:44 AM wake time every day", detail: "Circadian rhythms are anchored by consistent wake times. Sleeping in on weekends resets your clock and makes the next 11 PM bedtime harder to fall asleep at." },
                  { icon: "🌡️", tip: "Drop your room temperature to 65–68°F", detail: "Core body temperature naturally drops to initiate sleep. A cool room (18–20°C) accelerates this and improves deep sleep quality — meaning you get more done in fewer cycles." },
                ].map((item) => (
                  <div key={item.tip} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, padding: "1.25rem" }}>
                    <div className="flex gap-3 items-start">
                      <span style={{ fontSize: 20, flexShrink: 0 }}>{item.icon}</span>
                      <div>
                        <p style={{ fontWeight: 700, color: "var(--text-primary)", fontSize: 14, marginBottom: 4 }}>{item.tip}</p>
                        <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.75 }}>{item.detail}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: "rgba(108,99,255,0.06)", border: "1px solid rgba(108,99,255,0.25)", borderRadius: 12, padding: "1.25rem" }}>
              <p style={{ fontWeight: 700, color: "var(--accent-light)", marginBottom: 10, fontSize: 14 }}>🛠 Related Calculators</p>
              <div className="flex flex-wrap gap-2">
                {[
                  { href: "/wake-up-time-calculator/", label: "Wake-Up Calculator" },
                  { href: "/bedtime-calculator/", label: "Bedtime Calculator" },
                  { href: "/sleep-cycle-calculator/", label: "Sleep Cycle Visualizer" },
                  { href: "/sleep-debt-calculator/", label: "Sleep Debt Calculator" },
                ].map((l) => (
                  <Link key={l.href} href={l.href} style={{ padding: "6px 14px", borderRadius: 6, border: "1px solid rgba(108,99,255,0.3)", background: "var(--bg-primary)", color: "var(--accent-light)", fontSize: 13, textDecoration: "none" }}>{l.label}</Link>
                ))}
              </div>
            </div>

            <div>
              <h2 id="faq" style={{ fontSize: 22, fontWeight: 800, color: "var(--text-primary)", marginBottom: 12 }}>Frequently Asked Questions</h2>
              <div className="flex flex-col gap-3">
                {[
                  { q: "If I sleep at 11 PM what time should I wake up?", a: "The best wake-up times for an 11 PM bedtime are 6:44 AM (7.5 hours, 5 complete sleep cycles) or 8:14 AM (9 hours, 6 cycles). These align with the end of a 90-minute sleep cycle so you wake during light sleep, avoiding grogginess." },
                  { q: "Is 11 PM a good bedtime for adults?", a: "It's acceptable but slightly later than optimal. Most adults' melatonin peaks around 9–10 PM. An 11 PM bedtime can work well if you need to wake between 6:30–7 AM, as the 6:44 AM cycle endpoint is close enough to common work schedules." },
                  { q: "If I sleep at 11 and wake at 7, is that enough sleep?", a: "11 PM to 7 AM is 8 hours in bed. After accounting for 14 minutes of sleep onset, that's 7 hours 46 minutes of actual sleep — approximately 5 complete cycles. You wake 16 minutes past the cycle endpoint, still in a light sleep phase. Most adults feel rested at this schedule." },
                  { q: "What if I can't fall asleep until later than 11 PM?", a: "If you consistently can't fall asleep until midnight or 1 AM despite a 11 PM bedtime, you may be a Wolf chronotype (natural night owl). Check our Chronotype Calculator — you may need to align your sleep schedule with your biology rather than fight it." },
                ].map(({ q, a }) => (
                  <details key={q} className="rounded-2xl overflow-hidden" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
                    <summary className="px-5 py-4 font-semibold cursor-pointer list-none flex justify-between items-start gap-4" style={{ color: "var(--text-primary)", fontSize: 14 }}>
                      <span>{q}</span>
                      <span className="shrink-0" style={{ color: "var(--accent-light)" }}>+</span>
                    </summary>
                    <p className="px-5 pb-5 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>

          <AuthorBio />
          <RelatedArticles posts={[
            { href: "/blog/if-i-sleep-at-10-what-time-should-i-wake-up/", title: "If I Sleep at 10 PM, What Time Should I Wake Up?", excerpt: "Best wake-up times for a 10 PM bedtime based on 90-minute sleep cycles.", readTime: "7 min", category: "Sleep Cycles" },
            { href: "/blog/if-i-go-to-sleep-at-midnight-what-time-should-i-wake-up/", title: "If I Sleep at Midnight, What Time Should I Wake Up?", excerpt: "Best wake-up times for a midnight bedtime based on 90-minute sleep cycles.", readTime: "6 min", category: "Sleep Cycles" },
            { href: "/sleep-cycle-calculator/", title: "Sleep Cycle Calculator", excerpt: "Visualize your sleep cycles and find exactly when to set your alarm.", readTime: "Tool", category: "Calculator" },
          ]} />
        </section>
      </article>
    </>
  );
}
