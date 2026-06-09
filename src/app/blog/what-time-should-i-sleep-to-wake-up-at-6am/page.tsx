import type { Metadata } from "next";
import Link from "next/link";
import AuthorBio from "@/app/components/AuthorBio";
import RelatedArticles from "@/app/components/RelatedArticles";
import TableOfContents from "@/app/components/TableOfContents";
import { breadcrumbSchema, faqSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "What Time Should I Sleep to Wake Up at 6 AM? (Sleep Cycle Chart)",
  description:
    "To wake up at 6 AM feeling refreshed, go to bed at 10:16 PM (5 cycles, 7.5h) or 8:46 PM (6 cycles, 9h). Based on 90-minute sleep cycles with full bedtime chart.",
  alternates: { canonical: "https://getsleepcalculator.net/blog/what-time-should-i-sleep-to-wake-up-at-6am/" },
  openGraph: {
    title: "What Time Should I Sleep to Wake Up at 6 AM?",
    description: "To wake at 6 AM refreshed, go to bed at 10:16 PM (recommended, 5 cycles) or 8:46 PM (6 cycles). Sleep cycle chart included.",
    url: "https://getsleepcalculator.net/blog/what-time-should-i-sleep-to-wake-up-at-6am/",
    type: "article",
    images: [{ url: "https://getsleepcalculator.net/og-image.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
};

export default function WakeUpAt6AMPost() {
  const bedtimes = [
    { bed: "8:46 PM",  sleep: "9h 0min",  cycles: "6 cycles", rec: "Extended recovery, teens, athletes" },
    { bed: "10:16 PM", sleep: "7h 30min", cycles: "5 cycles", rec: "Most adults — RECOMMENDED", highlight: true },
    { bed: "11:46 PM", sleep: "6h 0min",  cycles: "4 cycles", rec: "Minimum — only if necessary" },
    { bed: "1:16 AM",  sleep: "4h 30min", cycles: "3 cycles", rec: "Emergency only — not sustainable" },
  ];

  const chartRows = [
    { wake: "4:00 AM", five: "8:16 PM",  six: "6:46 PM" },
    { wake: "5:00 AM", five: "9:16 PM",  six: "7:46 PM" },
    { wake: "6:00 AM", five: "10:16 PM", six: "8:46 PM", highlight: true },
    { wake: "7:00 AM", five: "11:16 PM", six: "9:46 PM" },
    { wake: "8:00 AM", five: "12:16 AM", six: "10:46 PM" },
    { wake: "9:00 AM", five: "1:16 AM",  six: "11:46 PM" },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BlogPosting",
        headline: "What Time Should I Sleep to Wake Up at 6 AM?",
        description: "The optimal bedtimes for a 6 AM wake-up based on 90-minute sleep cycles.",
        url: "https://getsleepcalculator.net/blog/what-time-should-i-sleep-to-wake-up-at-6am/",
        datePublished: "2026-06-10", dateModified: "2026-06-10",
        author: { "@type": "Person", name: "Saad Zaib", url: "https://getsleepcalculator.net/about/" },
        publisher: { "@type": "Organization", name: "Get Sleep Calculator", url: "https://getsleepcalculator.net", logo: { "@type": "ImageObject", url: "https://getsleepcalculator.net/og-image.png" } },
        image: "https://getsleepcalculator.net/og-image.png",
        mainEntityOfPage: { "@type": "WebPage", "@id": "https://getsleepcalculator.net/blog/what-time-should-i-sleep-to-wake-up-at-6am/" },
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: "Home", href: "/" },
        { name: "Blog", href: "/blog/" },
        { name: "What Time Should I Sleep to Wake Up at 6 AM?", href: "/blog/what-time-should-i-sleep-to-wake-up-at-6am/" },
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema([
        { question: "What time should I sleep to wake up at 6 AM?", answer: "To wake up at 6 AM feeling refreshed, go to bed at 10:16 PM (5 complete sleep cycles, 7.5 hours — recommended) or 8:46 PM (6 cycles, 9 hours). These bedtimes account for the average 14-minute sleep onset latency and place your wake at the natural end of a 90-minute cycle, minimizing grogginess." },
        { question: "What time should I go to sleep if I need to wake up at 6 AM?", answer: "For 5 complete cycles (7.5h, optimal for most adults): go to bed at 10:16 PM. For 6 cycles (9h, good for teens and athletes): bed at 8:46 PM. For 4 cycles (6h, minimum viable): bed at 11:46 PM. Avoid midnight or 12:30 AM bedtimes for a 6 AM alarm — these land mid-cycle and cause significant morning grogginess." },
        { question: "If I go to sleep at 10 PM what time should I wake up?", answer: "From a 10 PM bedtime, the best wake-up times are 5:44 AM (5 cycles, 7.5h) or 7:14 AM (6 cycles, 9h). Not 6 AM exactly — that's 7 hours 46 minutes from a 10 PM bedtime, which is mid-cycle. The nearest cycle endpoint to 6 AM is 5:44 AM." },
        { question: "Is 10:16 PM a good bedtime?", answer: "Yes — 10:16 PM is an excellent bedtime for most adults aiming for a 6 AM wake. It aligns well with the average adult's melatonin onset (around 9–10 PM) and provides 5 complete sleep cycles. It's also close to the 10–11 PM 'optimal sleep window' recommended by sleep researchers for most chronotypes." },
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
              What Time Should I Sleep to Wake Up at 6 AM?
            </h1>
            <p className="text-lg" style={{ color: "var(--text-muted)", lineHeight: 1.7 }}>
              To wake up at 6 AM feeling refreshed, go to bed at <strong style={{ color: "var(--text-primary)" }}>10:16 PM</strong> (5 cycles, 7.5 hours, recommended) or <strong style={{ color: "var(--text-primary)" }}>8:46 PM</strong> (6 cycles, 9 hours). These bedtimes align your wake with the natural end of a 90-minute sleep cycle.
            </p>
          </div>
        </section>

        <section className="max-w-2xl mx-auto px-4 py-12">
          <TableOfContents items={[
            { id: "bedtimes", text: "Best Bedtimes to Wake at 6 AM", level: 2 },
            { id: "cycle-math", text: "The Sleep Cycle Math", level: 2 },
            { id: "chart", text: "Full Wake-Time Bedtime Chart", level: 2 },
            { id: "tips", text: "Tips for a 6 AM Wake-Up", level: 2 },
            { id: "faq", text: "Frequently Asked Questions", level: 2 },
          ]} />

          <div style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.9 }} className="flex flex-col gap-8">

            <div style={{ background: "rgba(108,99,255,0.08)", border: "1px solid rgba(108,99,255,0.2)", borderRadius: 12, padding: "1.25rem" }}>
              <strong style={{ color: "var(--accent-light)" }}>Quick answer:</strong> Wake at 6:00 AM − 14 min onset − 450 min (5 cycles) = <strong style={{ color: "var(--text-primary)" }}>bed at 10:16 PM</strong>. Or bed at 8:46 PM for 6 cycles, 11:46 PM for 4 cycles, 1:16 AM for 3 cycles.
            </div>

            <div>
              <h2 id="bedtimes" style={{ fontSize: 22, fontWeight: 800, color: "var(--text-primary)", marginBottom: 12 }}>Best Bedtimes to Wake at 6 AM</h2>
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
                Needing a custom time? Use our <Link href="/bedtime-calculator/" style={{ color: "var(--accent-light)", textDecoration: "underline" }}>Bedtime Calculator</Link> to enter any wake time and get your personalized cycle-aligned bedtimes.
              </p>
            </div>

            <div>
              <h2 id="cycle-math" style={{ fontSize: 22, fontWeight: 800, color: "var(--text-primary)", marginBottom: 12 }}>The Sleep Cycle Math</h2>
              <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.8, marginBottom: 10 }}>
                Each sleep cycle lasts 90 minutes. The boundary between cycles is the lightest point of sleep — the ideal moment for an alarm. Waking mid-cycle, especially during deep NREM Stage 3, causes <Link href="/sleep-inertia/" style={{ color: "var(--accent-light)", textDecoration: "underline" }}>sleep inertia</Link> — the intense grogginess that can last 30–90 minutes.
              </p>
              <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, padding: "1rem" }}>
                <p style={{ fontSize: 13, color: "var(--text-muted)", fontFamily: "monospace", lineHeight: 2, margin: 0 }}>
                  6:00 AM − 90 min (cycle 5) = 4:30 AM<br />
                  4:30 AM − 90 min (cycle 4) = 3:00 AM<br />
                  3:00 AM − 90 min (cycle 3) = 1:30 AM<br />
                  1:30 AM − 90 min (cycle 2) = 12:00 AM<br />
                  12:00 AM − 90 min (cycle 1) = 10:30 PM (sleep onset)<br />
                  10:30 PM − 14 min (onset latency) = <strong>10:16 PM (bedtime)</strong>
                </p>
              </div>
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
              <h2 id="tips" style={{ fontSize: 22, fontWeight: 800, color: "var(--text-primary)", marginBottom: 12 }}>Tips for a 6 AM Wake-Up</h2>
              <div className="flex flex-col gap-3">
                {[
                  { icon: "🌙", tip: "Start your wind-down at 9:15 PM", detail: "For a 10:16 PM bedtime, begin dimming lights and avoiding screens at 9:15 PM. This gives melatonin a full hour to rise before you need to be asleep." },
                  { icon: "⏰", tip: "Set your alarm at 6:00 AM — not 6:15 or 6:30", detail: "6 AM is your cycle endpoint. Snoozing to 6:15 or 6:30 drops you back into light NREM — you won't reach deeper sleep but you will disrupt the clean waking. Skip the snooze." },
                  { icon: "☀️", tip: "Open blinds or use a dawn simulator", detail: "A dawn simulator that gradually brightens 30 minutes before 6 AM primes your cortisol response and makes waking feel natural rather than abrupt." },
                  { icon: "📅", tip: "Consistent 10:16 PM bedtime, not just on weekdays", detail: "Weekend sleep deviation of even 1 hour shifts your circadian rhythm enough to cause Monday-morning grogginess. The 10:16 PM → 6 AM schedule works best as a 7-day routine." },
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
                  { q: "What time should I sleep to wake up at 6 AM?", a: "Go to bed at 10:16 PM for 5 complete cycles (7.5 hours, recommended for most adults) or 8:46 PM for 6 cycles (9 hours, ideal for teens and athletes). These times account for 14-minute sleep onset and align your 6 AM alarm with a cycle endpoint." },
                  { q: "If I sleep at 11 PM can I wake up at 6 AM refreshed?", a: "11 PM to 6 AM is 7 hours — approximately 4.6 cycles after onset. You won't land cleanly at a cycle endpoint. The nearest endpoint from an 11 PM bedtime is 6:44 AM (5 cycles). If 6 AM is a hard requirement, shift your bedtime to 10:16 PM for a clean 5-cycle wake." },
                  { q: "What is the best time to go to sleep and wake up at 6 AM?", a: "The scientifically optimal schedule for a 6 AM wake is: bed at 10:16 PM (aligns with natural melatonin peak around 10 PM, provides 5 complete cycles). This schedule matches human circadian biology for most adults and gives the cleanest, most refreshed 6 AM waking." },
                  { q: "How many hours of sleep do I need to wake at 6 AM feeling rested?", a: "Seven and a half hours (5 complete cycles) is optimal for most adults. That means going to bed at 10:16 PM for a 6 AM wake. Some individuals feel fully rested on 6 hours (4 cycles, bed at 11:46 PM) — but this is below the NSF minimum recommendation of 7 hours." },
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
            { href: "/blog/what-time-should-i-sleep-to-wake-up-at-5am/", title: "What Time Should I Sleep to Wake Up at 5 AM?", excerpt: "Optimal bedtimes for a 5 AM wake-up based on 90-minute sleep cycles.", readTime: "5 min", category: "Sleep Cycles" },
            { href: "/blog/what-time-should-i-sleep-to-wake-up-at-7am/", title: "What Time Should I Sleep to Wake Up at 7 AM?", excerpt: "Optimal bedtimes for a 7 AM wake-up based on 90-minute sleep cycles.", readTime: "5 min", category: "Sleep Cycles" },
            { href: "/bedtime-calculator/", title: "Bedtime Calculator", excerpt: "Enter any wake time and instantly get your cycle-aligned bedtimes.", readTime: "Tool", category: "Calculator" },
          ]} />
        </section>
      </article>
    </>
  );
}
