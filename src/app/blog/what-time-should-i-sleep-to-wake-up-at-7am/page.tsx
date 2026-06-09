import type { Metadata } from "next";
import Link from "next/link";
import AuthorBio from "@/app/components/AuthorBio";
import RelatedArticles from "@/app/components/RelatedArticles";
import TableOfContents from "@/app/components/TableOfContents";
import { breadcrumbSchema, faqSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "What Time Should I Sleep to Wake Up at 7 AM? (Sleep Cycle Chart)",
  description:
    "To wake up at 7 AM feeling refreshed, go to bed at 11:16 PM (5 cycles, 7.5h) or 9:46 PM (6 cycles, 9h). Based on 90-minute sleep cycles with full bedtime chart.",
  alternates: { canonical: "https://getsleepcalculator.net/blog/what-time-should-i-sleep-to-wake-up-at-7am/" },
  openGraph: {
    title: "What Time Should I Sleep to Wake Up at 7 AM?",
    description: "To wake at 7 AM refreshed, go to bed at 11:16 PM (recommended, 5 cycles) or 9:46 PM (6 cycles). Sleep cycle chart included.",
    url: "https://getsleepcalculator.net/blog/what-time-should-i-sleep-to-wake-up-at-7am/",
    type: "article",
    images: [{ url: "https://getsleepcalculator.net/og-image.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
};

export default function WakeUpAt7AMPost() {
  const bedtimes = [
    { bed: "9:46 PM",  sleep: "9h 0min",  cycles: "6 cycles", rec: "Extended recovery, teens, athletes" },
    { bed: "11:16 PM", sleep: "7h 30min", cycles: "5 cycles", rec: "Most adults — RECOMMENDED", highlight: true },
    { bed: "12:46 AM", sleep: "6h 0min",  cycles: "4 cycles", rec: "Minimum — only if necessary" },
    { bed: "2:16 AM",  sleep: "4h 30min", cycles: "3 cycles", rec: "Emergency only — not sustainable" },
  ];

  const chartRows = [
    { wake: "5:00 AM", five: "9:16 PM",  six: "7:46 PM" },
    { wake: "6:00 AM", five: "10:16 PM", six: "8:46 PM" },
    { wake: "7:00 AM", five: "11:16 PM", six: "9:46 PM", highlight: true },
    { wake: "8:00 AM", five: "12:16 AM", six: "10:46 PM" },
    { wake: "9:00 AM", five: "1:16 AM",  six: "11:46 PM" },
    { wake: "10:00 AM",five: "2:16 AM",  six: "12:46 AM" },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BlogPosting",
        headline: "What Time Should I Sleep to Wake Up at 7 AM?",
        description: "The optimal bedtimes for a 7 AM wake-up based on 90-minute sleep cycles.",
        url: "https://getsleepcalculator.net/blog/what-time-should-i-sleep-to-wake-up-at-7am/",
        datePublished: "2026-06-10", dateModified: "2026-06-10",
        author: { "@type": "Person", name: "Saad Zaib", url: "https://getsleepcalculator.net/about/" },
        publisher: { "@type": "Organization", name: "Get Sleep Calculator", url: "https://getsleepcalculator.net", logo: { "@type": "ImageObject", url: "https://getsleepcalculator.net/og-image.png" } },
        image: "https://getsleepcalculator.net/og-image.png",
        mainEntityOfPage: { "@type": "WebPage", "@id": "https://getsleepcalculator.net/blog/what-time-should-i-sleep-to-wake-up-at-7am/" },
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: "Home", href: "/" },
        { name: "Blog", href: "/blog/" },
        { name: "What Time Should I Sleep to Wake Up at 7 AM?", href: "/blog/what-time-should-i-sleep-to-wake-up-at-7am/" },
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema([
        { question: "What time should I sleep to wake up at 7 AM?", answer: "To wake up at 7 AM feeling refreshed, go to bed at 11:16 PM (5 complete sleep cycles, 7.5 hours — recommended for most adults) or 9:46 PM (6 cycles, 9 hours). These bedtimes account for the average 14-minute sleep onset latency and align your 7 AM alarm with a natural cycle endpoint, minimizing morning grogginess." },
        { question: "What time should I go to sleep if I wake up at 7 AM?", answer: "For 5 complete cycles (7.5h, optimal): go to bed at 11:16 PM. For 6 cycles (9h): bed at 9:46 PM. For 4 cycles (6h minimum): bed at 12:46 AM. Avoid a midnight (12:00 AM) bedtime for a 7 AM alarm — that's 6 hours 46 minutes, which falls mid-cycle and causes sleep inertia." },
        { question: "If I sleep at 11 PM what time should I wake up?", answer: "From an 11 PM bedtime, the best wake-up times are 6:44 AM (5 cycles, 7.5h) or 8:14 AM (6 cycles, 9h). Not 7 AM exactly — that's 7 hours 46 minutes from 11 PM, which falls between cycle endpoints. The nearest endpoint to 7 AM is 6:44 AM." },
        { question: "What is the best bedtime for waking up at 7 AM refreshed?", answer: "The scientifically optimal bedtime for a 7 AM wake is 11:16 PM. This aligns with the natural melatonin peak for most adults (around 10–11 PM), provides exactly 5 complete 90-minute sleep cycles, and positions the 7 AM alarm at the lightest point between cycle 5 and 6. Most adults who follow this schedule report waking feeling genuinely rested." },
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
              What Time Should I Sleep to Wake Up at 7 AM?
            </h1>
            <p className="text-lg" style={{ color: "var(--text-muted)", lineHeight: 1.7 }}>
              To wake up at 7 AM feeling refreshed, go to bed at <strong style={{ color: "var(--text-primary)" }}>11:16 PM</strong> (5 cycles, 7.5 hours, recommended) or <strong style={{ color: "var(--text-primary)" }}>9:46 PM</strong> (6 cycles, 9 hours). These bedtimes align your alarm with the natural end of a 90-minute sleep cycle.
            </p>
          </div>
        </section>

        <section className="max-w-2xl mx-auto px-4 py-12">
          <TableOfContents items={[
            { id: "bedtimes", text: "Best Bedtimes to Wake at 7 AM", level: 2 },
            { id: "cycle-math", text: "The Sleep Cycle Math", level: 2 },
            { id: "chart", text: "Full Wake-Time Bedtime Chart", level: 2 },
            { id: "midnight-mistake", text: "The Midnight Mistake (Why It Doesn't Work)", level: 2 },
            { id: "tips", text: "Tips for a 7 AM Wake-Up", level: 2 },
            { id: "faq", text: "Frequently Asked Questions", level: 2 },
          ]} />

          <div style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.9 }} className="flex flex-col gap-8">

            <div style={{ background: "rgba(108,99,255,0.08)", border: "1px solid rgba(108,99,255,0.2)", borderRadius: 12, padding: "1.25rem" }}>
              <strong style={{ color: "var(--accent-light)" }}>Quick answer:</strong> Wake at 7:00 AM − 14 min onset − 450 min (5 cycles) = <strong style={{ color: "var(--text-primary)" }}>bed at 11:16 PM</strong>. Or bed at 9:46 PM for 6 cycles, 12:46 AM for 4 cycles, 2:16 AM for 3 cycles.
            </div>

            <div>
              <h2 id="bedtimes" style={{ fontSize: 22, fontWeight: 800, color: "var(--text-primary)", marginBottom: 12 }}>Best Bedtimes to Wake at 7 AM</h2>
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
                Use our <Link href="/bedtime-calculator/" style={{ color: "var(--accent-light)", textDecoration: "underline" }}>Bedtime Calculator</Link> for any wake time, or the <Link href="/wake-up-time-calculator/" style={{ color: "var(--accent-light)", textDecoration: "underline" }}>Wake-Up Calculator</Link> to find when to set your alarm for any bedtime.
              </p>
            </div>

            <div>
              <h2 id="cycle-math" style={{ fontSize: 22, fontWeight: 800, color: "var(--text-primary)", marginBottom: 12 }}>The Sleep Cycle Math</h2>
              <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.8, marginBottom: 10 }}>
                Sleep occurs in 90-minute cycles. To wake at the end of cycle 5 (7 AM), count backwards five 90-minute blocks from 7:00 AM, then subtract 14 minutes for sleep onset latency:
              </p>
              <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, padding: "1rem" }}>
                <p style={{ fontSize: 13, color: "var(--text-muted)", fontFamily: "monospace", lineHeight: 2, margin: 0 }}>
                  7:00 AM − 90 min (cycle 5) = 5:30 AM<br />
                  5:30 AM − 90 min (cycle 4) = 4:00 AM<br />
                  4:00 AM − 90 min (cycle 3) = 2:30 AM<br />
                  2:30 AM − 90 min (cycle 2) = 1:00 AM<br />
                  1:00 AM − 90 min (cycle 1) = 11:30 PM (sleep onset)<br />
                  11:30 PM − 14 min (onset latency) = <strong>11:16 PM (bedtime)</strong>
                </p>
              </div>
              <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.8, marginTop: 10 }}>
                Waking mid-cycle causes <Link href="/sleep-inertia/" style={{ color: "var(--accent-light)", textDecoration: "underline" }}>sleep inertia</Link> — intense grogginess lasting 30–90 minutes when the alarm fires during deep NREM sleep.
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

            <div style={{ background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: 12, padding: "1.25rem" }}>
              <h2 id="midnight-mistake" style={{ fontSize: 20, fontWeight: 800, color: "var(--text-primary)", marginBottom: 10 }}>The Midnight Mistake</h2>
              <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.8 }}>
                Sleeping at midnight and waking at 7 AM is one of the most common schedules — and one of the most problematic. Midnight → 7 AM = 7 hours of time in bed, but after 14-minute onset, only 6 hours 46 minutes of actual sleep — or about 4.5 cycles. You wake mid-cycle 5, right in the densest deep sleep of the night.
              </p>
              <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.8, marginTop: 8 }}>
                The fix is simple: shift bedtime to 11:16 PM (45 minutes earlier) to complete a clean 5-cycle wake at 7 AM. Or shift to 12:46 AM for a 4-cycle wake — still mid-low, but better than the raw mid-cycle landing at midnight.
              </p>
            </div>

            <div>
              <h2 id="tips" style={{ fontSize: 22, fontWeight: 800, color: "var(--text-primary)", marginBottom: 12 }}>Tips for a 7 AM Wake-Up</h2>
              <div className="flex flex-col gap-3">
                {[
                  { icon: "🌙", tip: "Wind down at 10:15 PM for an 11:16 PM bedtime", detail: "Begin dimming lights, stopping screens, and lowering room temperature at 10:15 PM. This gives your body a full hour to ramp up melatonin production before you need to be asleep." },
                  { icon: "⏰", tip: "Set a single 7:00 AM alarm — skip the snooze", detail: "Snoozing drops you into NREM Stage 2 for 9 minutes — not enough to be restorative, but enough to trigger sleep inertia when the second alarm fires. A single clean alarm at the cycle endpoint is always better." },
                  { icon: "☀️", tip: "Get 10 minutes of bright light within 5 minutes of waking", detail: "Natural light at 7 AM triggers cortisol's natural peak and suppresses melatonin. Open blinds immediately or step outside briefly — this is the single most effective circadian anchor for a 7 AM wake time." },
                  { icon: "🛏️", tip: "Use your bed only for sleep (not screens or work)", detail: "Bed-activity association is a core CBT-I principle. When your brain associates the bedroom with screens and work, it stays aroused at 11:16 PM instead of initiating the sleep cascade. Keep the bedroom dark, cool, and screen-free." },
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
                  { href: "/sleep-schedule-builder/", label: "Sleep Schedule Builder" },
                ].map((l) => (
                  <Link key={l.href} href={l.href} style={{ padding: "6px 14px", borderRadius: 6, border: "1px solid rgba(108,99,255,0.3)", background: "var(--bg-primary)", color: "var(--accent-light)", fontSize: 13, textDecoration: "none" }}>{l.label}</Link>
                ))}
              </div>
            </div>

            <div>
              <h2 id="faq" style={{ fontSize: 22, fontWeight: 800, color: "var(--text-primary)", marginBottom: 12 }}>Frequently Asked Questions</h2>
              <div className="flex flex-col gap-3">
                {[
                  { q: "What time should I sleep to wake up at 7 AM?", a: "Go to bed at 11:16 PM for 5 complete sleep cycles (7.5 hours, recommended for most adults) or 9:46 PM for 6 cycles (9 hours). These times account for 14-minute sleep onset and align your 7 AM alarm with a natural cycle boundary." },
                  { q: "Is 11 PM a good bedtime for 7 AM wake-up?", a: "Close, but 11:16 PM is more accurate than exactly 11 PM. An 11 PM bedtime with a 7 AM alarm gives 7 hours 46 minutes of total time — just past the 5-cycle endpoint at 6:44 AM. If you consistently set your alarm at 7 AM from an 11 PM sleep, you're waking 16 minutes into cycle 6, which is actually in lighter sleep and generally manageable." },
                  { q: "What time should I sleep to wake up at 7 AM without an alarm?", a: "Train your body to wake naturally by going to bed at exactly 11:16 PM for 10–14 consecutive days. After consistent conditioning, your cortisol spike and circadian rhythm will wake you naturally at the cycle endpoint around 7 AM without needing an alarm." },
                  { q: "If I need to be up at 7 AM how many hours should I sleep?", a: "Seven and a half hours (5 cycles) is optimal — meaning in bed by 11:16 PM. Some adults function well on 6 hours (4 cycles, bed at 12:46 AM) but the NSF recommends a minimum of 7 hours. Going below 6 hours causes measurable cognitive decline even if you feel adapted to it." },
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
            { href: "/blog/if-i-sleep-at-11-what-time-should-i-wake-up/", title: "If I Sleep at 11 PM, What Time Should I Wake Up?", excerpt: "Best wake-up times for an 11 PM bedtime — 6:44 AM or 8:14 AM.", readTime: "6 min", category: "Sleep Cycles" },
            { href: "/bedtime-calculator/", title: "Bedtime Calculator", excerpt: "Enter any wake time and instantly get your cycle-aligned bedtimes.", readTime: "Tool", category: "Calculator" },
          ]} />
        </section>
      </article>
    </>
  );
}
