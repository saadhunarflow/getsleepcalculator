import type { Metadata } from "next";
import Link from "next/link";
import AuthorBio from "@/app/components/AuthorBio";
import RelatedArticles from "@/app/components/RelatedArticles";
import TableOfContents from "@/app/components/TableOfContents";
import { breadcrumbSchema, faqSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "What Time Should I Sleep to Wake Up at 5 AM? (Sleep Cycle Chart)",
  description:
    "To wake up at 5 AM feeling refreshed, go to bed at 9:16 PM (5 cycles, 7.5h) or 10:46 PM (4 cycles, 6h). Based on 90-minute sleep cycles with full bedtime chart.",
  alternates: { canonical: "https://getsleepcalculator.net/blog/what-time-should-i-sleep-to-wake-up-at-5am/" },
  openGraph: {
    title: "What Time Should I Sleep to Wake Up at 5 AM?",
    description: "To wake at 5 AM refreshed, go to bed at 9:16 PM (recommended, 5 cycles) or 10:46 PM (4 cycles). Sleep cycle chart included.",
    url: "https://getsleepcalculator.net/blog/what-time-should-i-sleep-to-wake-up-at-5am/",
    type: "article",
    images: [{ url: "https://getsleepcalculator.net/og-image.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
};

export default function WakeUpAt5AMPost() {
  const bedtimes = [
    { bed: "7:46 PM",  sleep: "9h 0min",   cycles: "6 cycles", rec: "Extended recovery, teens" },
    { bed: "9:16 PM",  sleep: "7h 30min",  cycles: "5 cycles", rec: "Most adults — RECOMMENDED", highlight: true },
    { bed: "10:46 PM", sleep: "6h 0min",   cycles: "4 cycles", rec: "Minimum — only if necessary" },
    { bed: "12:16 AM", sleep: "4h 30min",  cycles: "3 cycles", rec: "Emergency only — not sustainable" },
  ];

  const chartRows = [
    { wake: "4:00 AM", five: "8:16 PM",  six: "6:46 PM" },
    { wake: "5:00 AM", five: "9:16 PM",  six: "7:46 PM", highlight: true },
    { wake: "6:00 AM", five: "10:16 PM", six: "8:46 PM" },
    { wake: "7:00 AM", five: "11:16 PM", six: "9:46 PM" },
    { wake: "8:00 AM", five: "12:16 AM", six: "10:46 PM" },
    { wake: "9:00 AM", five: "1:16 AM",  six: "11:46 PM" },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BlogPosting",
        headline: "What Time Should I Sleep to Wake Up at 5 AM?",
        description: "The optimal bedtimes for a 5 AM wake-up based on 90-minute sleep cycles.",
        url: "https://getsleepcalculator.net/blog/what-time-should-i-sleep-to-wake-up-at-5am/",
        datePublished: "2026-06-10", dateModified: "2026-06-10",
        author: { "@type": "Person", name: "Saad Zaib", url: "https://getsleepcalculator.net/about/" },
        publisher: { "@type": "Organization", name: "Get Sleep Calculator", url: "https://getsleepcalculator.net", logo: { "@type": "ImageObject", url: "https://getsleepcalculator.net/og-image.png" } },
        image: "https://getsleepcalculator.net/og-image.png",
        mainEntityOfPage: { "@type": "WebPage", "@id": "https://getsleepcalculator.net/blog/what-time-should-i-sleep-to-wake-up-at-5am/" },
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: "Home", href: "/" },
        { name: "Blog", href: "/blog/" },
        { name: "What Time Should I Sleep to Wake Up at 5 AM?", href: "/blog/what-time-should-i-sleep-to-wake-up-at-5am/" },
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema([
        { question: "What time should I sleep to wake up at 5 AM?", answer: "To wake up at 5 AM feeling refreshed, go to bed at 9:16 PM (5 complete sleep cycles, 7.5 hours) or 7:46 PM (6 cycles, 9 hours). These bedtimes align your 5 AM wake with the natural end of a 90-minute sleep cycle, minimizing grogginess. The 9:16 PM bedtime is recommended for most adults needing 7–9 hours of sleep." },
        { question: "What time should I go to sleep if I wake up at 5 AM for work?", answer: "For a 5 AM work alarm, go to bed at 9:16 PM (5 cycles, 7.5h) for the best balance. This gives you full sleep while maintaining a 7–8 PM wind-down window. If 9:16 PM is too early, 10:46 PM (4 cycles, 6h) is your next cycle-aligned option — though only 6 hours is below the recommended 7-hour minimum." },
        { question: "Is 5 AM a healthy wake time?", answer: "Yes — 5 AM is aligned with natural circadian rhythms for Lion chronotypes (natural early risers). Research shows early risers tend to have lower rates of depression and anxiety, though this is partly because society's schedules favor morning people. If you're a Wolf chronotype (natural night owl), 5 AM wake times will always feel difficult regardless of bedtime." },
        { question: "If I wake up at 5 AM what time should I go to bed?", answer: "For 5 complete sleep cycles (7.5 hours, recommended): go to bed at 9:16 PM. For 6 cycles (9h): bed at 7:46 PM. For 4 cycles (6h, minimum): bed at 10:46 PM. These times account for the average 14-minute sleep onset latency, placing your actual sleep onset at a cycle-aligned starting point." },
      ]))}} />

      <article>
        <section style={{ background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(108,99,255,0.18) 0%, transparent 70%), var(--bg-primary)", padding: "4rem 0 3rem" }}>
          <div className="max-w-2xl mx-auto px-4">
            <Link href="/blog/" style={{ fontSize: 13, color: "var(--accent-light)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 4, marginBottom: 24 }}>← Back to Blog</Link>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: "rgba(99,102,241,0.15)", color: "#818cf8" }}>Sleep Cycles</span>
              <span style={{ fontSize: 12, color: "var(--text-muted)" }}>June 10, 2026 · 5 min read</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight" style={{ color: "var(--text-primary)" }}>
              What Time Should I Sleep to Wake Up at 5 AM?
            </h1>
            <p className="text-lg" style={{ color: "var(--text-muted)", lineHeight: 1.7 }}>
              To wake up at 5 AM feeling refreshed, go to bed at <strong style={{ color: "var(--text-primary)" }}>9:16 PM</strong> (5 cycles, 7.5 hours, recommended) or <strong style={{ color: "var(--text-primary)" }}>7:46 PM</strong> (6 cycles, 9 hours). These bedtimes align your wake with the natural end of a 90-minute sleep cycle.
            </p>
          </div>
        </section>

        <section className="max-w-2xl mx-auto px-4 py-12">
          <TableOfContents items={[
            { id: "bedtimes", text: "Best Bedtimes to Wake at 5 AM", level: 2 },
            { id: "cycle-math", text: "The Sleep Cycle Math (How It's Calculated)", level: 2 },
            { id: "chart", text: "Full Wake-Time Bedtime Chart", level: 2 },
            { id: "tips", text: "Tips for Early 5 AM Wake-Ups", level: 2 },
            { id: "faq", text: "Frequently Asked Questions", level: 2 },
          ]} />

          <div style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.9 }} className="flex flex-col gap-8">

            <div style={{ background: "rgba(108,99,255,0.08)", border: "1px solid rgba(108,99,255,0.2)", borderRadius: 12, padding: "1.25rem" }}>
              <strong style={{ color: "var(--accent-light)" }}>Quick answer:</strong> Wake at 5:00 AM − 14 min onset − 450 min (5 cycles) = <strong style={{ color: "var(--text-primary)" }}>bed at 9:16 PM</strong>. Or bed at 7:46 PM for 6 cycles, 10:46 PM for 4 cycles, 12:16 AM for 3 cycles.
            </div>

            <div>
              <h2 id="bedtimes" style={{ fontSize: 22, fontWeight: 800, color: "var(--text-primary)", marginBottom: 12 }}>Best Bedtimes to Wake at 5 AM</h2>
              <div className="overflow-x-auto rounded-2xl mb-4" style={{ border: "1px solid var(--border)" }}>
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ background: "var(--bg-card)", borderBottom: "2px solid var(--border)" }}>
                      {["Bedtime", "Total Sleep", "Cycles", "Recommended For"].map((h) => (
                        <th key={h} className="px-4 py-3 text-left font-semibold" style={{ color: "var(--accent-light)" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {bedtimes.map((row, i) => (
                      <tr key={row.bed} style={{ borderBottom: "1px solid var(--border)", background: i % 2 === 0 ? "transparent" : "rgba(108,99,255,0.03)" }}>
                        <td className="px-4 py-3 font-bold" style={{ color: row.highlight ? "var(--accent-light)" : "var(--text-primary)" }}>{row.bed}</td>
                        <td className="px-4 py-3" style={{ color: "var(--text-muted)" }}>{row.sleep}</td>
                        <td className="px-4 py-3" style={{ color: "var(--text-muted)" }}>{row.cycles}</td>
                        <td className="px-4 py-3 font-medium" style={{ color: row.highlight ? "var(--accent-light)" : "var(--text-muted)" }}>{row.highlight ? <strong>{row.rec}</strong> : row.rec}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.75 }}>
                Needing a different wake time? Use our <Link href="/bedtime-calculator/" style={{ color: "var(--accent-light)", textDecoration: "underline" }}>Bedtime Calculator</Link> to enter any wake time and get your exact cycle-aligned bedtimes instantly.
              </p>
            </div>

            <div>
              <h2 id="cycle-math" style={{ fontSize: 22, fontWeight: 800, color: "var(--text-primary)", marginBottom: 12 }}>The Sleep Cycle Math</h2>
              <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.8, marginBottom: 10 }}>
                Sleep cycles last 90 minutes each. To wake at the end of a cycle (lightest sleep, easiest waking), count backwards from 5:00 AM in 90-minute increments, then subtract 14 minutes for the average sleep onset latency:
              </p>
              <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, padding: "1rem" }}>
                <p style={{ fontSize: 13, color: "var(--text-muted)", fontFamily: "monospace", lineHeight: 2, margin: 0 }}>
                  5:00 AM − 90 min (cycle 5) = 3:30 AM<br />
                  3:30 AM − 90 min (cycle 4) = 2:00 AM<br />
                  2:00 AM − 90 min (cycle 3) = 12:30 AM<br />
                  12:30 AM − 90 min (cycle 2) = 11:00 PM<br />
                  11:00 PM − 90 min (cycle 1) = 9:30 PM (sleep onset)<br />
                  9:30 PM − 14 min (onset latency) = <strong>9:16 PM (bedtime)</strong>
                </p>
              </div>
              <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.8, marginTop: 10 }}>
                Waking mid-cycle causes <Link href="/sleep-inertia/" style={{ color: "var(--accent-light)", textDecoration: "underline" }}>sleep inertia</Link> — the groggy, disoriented feeling that can last 30–90 minutes when an alarm fires during deep NREM Stage 3.
              </p>
            </div>

            <div>
              <h2 id="chart" style={{ fontSize: 22, fontWeight: 800, color: "var(--text-primary)", marginBottom: 12 }}>Full Wake-Time Bedtime Chart</h2>
              <div className="overflow-x-auto rounded-2xl mb-4" style={{ border: "1px solid var(--border)" }}>
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ background: "var(--bg-card)", borderBottom: "2px solid var(--border)" }}>
                      {["Wake-Up Time", "Bedtime (5 Cycles, 7.5h)", "Bedtime (6 Cycles, 9h)"].map((h) => (
                        <th key={h} className="px-4 py-3 text-left font-semibold" style={{ color: "var(--accent-light)" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {chartRows.map((row, i) => (
                      <tr key={row.wake} style={{ borderBottom: "1px solid var(--border)", background: row.highlight ? "rgba(108,99,255,0.06)" : i % 2 === 0 ? "transparent" : "rgba(108,99,255,0.02)" }}>
                        <td className="px-4 py-3 font-bold" style={{ color: row.highlight ? "var(--accent-light)" : "var(--text-primary)" }}>{row.wake}</td>
                        <td className="px-4 py-3 font-semibold" style={{ color: row.highlight ? "var(--accent-light)" : "var(--text-primary)" }}>{row.five}</td>
                        <td className="px-4 py-3" style={{ color: "var(--text-muted)" }}>{row.six}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 id="tips" style={{ fontSize: 22, fontWeight: 800, color: "var(--text-primary)", marginBottom: 12 }}>Tips for Early 5 AM Wake-Ups</h2>
              <div className="flex flex-col gap-3">
                {[
                  { icon: "🌅", tip: "Start wind-down at 8:15 PM", detail: "For a 9:16 PM bedtime, begin dimming lights and stopping screens at 8:15 PM — a full hour before bed. Melatonin onset requires darkness; starting early makes the 9:16 PM bedtime feel natural, not forced." },
                  { icon: "☀️", tip: "Get sunlight immediately upon waking at 5 AM", detail: "Morning light at 5 AM is dim in most regions, so use a 10,000-lux SAD lamp for 20 minutes while having breakfast. This sets your circadian anchor and makes the next evening's 9:16 PM sleepiness arrive on schedule." },
                  { icon: "🚫", tip: "No caffeine after 11 AM", detail: "Caffeine's half-life is 5–6 hours. Coffee at noon is still half-active at 5–6 PM, making your 9:16 PM bedtime harder. For an early riser on a 5 AM schedule, the caffeine cutoff is strict." },
                  { icon: "📅", tip: "Keep the 5 AM wake time on weekends", detail: "Sleeping in on weekends shifts your circadian rhythm 1–2 hours later — making Monday's 5 AM alarm torture. The consistency of the wake time is what makes early rising sustainable long-term." },
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
                  { href: "/bedtime-calculator/", label: "Bedtime Calculator" },
                  { href: "/wake-up-time-calculator/", label: "Wake-Up Calculator" },
                  { href: "/sleep-cycle-calculator/", label: "Sleep Cycle Visualizer" },
                  { href: "/chronotype-calculator/", label: "Chronotype Calculator" },
                ].map((l) => (
                  <Link key={l.href} href={l.href} style={{ padding: "6px 14px", borderRadius: 6, border: "1px solid rgba(108,99,255,0.3)", background: "var(--bg-primary)", color: "var(--accent-light)", fontSize: 13, textDecoration: "none" }}>{l.label}</Link>
                ))}
              </div>
            </div>

            <div>
              <h2 id="faq" style={{ fontSize: 22, fontWeight: 800, color: "var(--text-primary)", marginBottom: 12 }}>Frequently Asked Questions</h2>
              <div className="flex flex-col gap-3">
                {[
                  { q: "What time should I sleep to wake up at 5 AM?", a: "Go to bed at 9:16 PM for 5 complete sleep cycles (7.5 hours, recommended) or 7:46 PM for 6 cycles (9 hours). These times account for 14 minutes of sleep onset latency and place your 5 AM wake at the natural end of a sleep cycle." },
                  { q: "What time should I go to bed if I wake up at 5 AM for the gym?", a: "For a 5 AM gym schedule, 9:16 PM is ideal. Athletes may benefit from 7:46 PM (9 hours) — extended sleep improves muscle recovery, HGH secretion, and next-day performance. Avoid the common mistake of sleeping at 11 PM or midnight before a 5 AM alarm — that's mid-cycle waking territory." },
                  { q: "Is waking up at 5 AM healthy?", a: "For Lion chronotypes (natural early risers), yes — 5 AM is well within their natural wake window and associated with high energy and mood. For Wolf chronotypes, 5 AM waking is biologically misaligned and creates chronic sleep deprivation regardless of bedtime. Use our Chronotype Calculator to find your natural type." },
                  { q: "If I sleep at 10 PM what time should I wake up to feel rested?", a: "From a 10 PM bedtime, the best wake times are 5:44 AM (5 cycles) or 7:14 AM (6 cycles). These times align with cycle endpoints — not 6 AM or 7 AM exactly, which land mid-cycle from a 10 PM start." },
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
            { href: "/blog/what-time-should-i-sleep-to-wake-up-at-6am/", title: "What Time Should I Sleep to Wake Up at 6 AM?", excerpt: "Optimal bedtimes for a 6 AM wake-up based on 90-minute sleep cycles.", readTime: "5 min", category: "Sleep Cycles" },
            { href: "/blog/what-time-should-i-sleep-to-wake-up-at-7am/", title: "What Time Should I Sleep to Wake Up at 7 AM?", excerpt: "Optimal bedtimes for a 7 AM wake-up based on 90-minute sleep cycles.", readTime: "5 min", category: "Sleep Cycles" },
            { href: "/bedtime-calculator/", title: "Bedtime Calculator", excerpt: "Enter any wake time and instantly get your cycle-aligned bedtimes.", readTime: "Tool", category: "Calculator" },
          ]} />
        </section>
      </article>
    </>
  );
}
