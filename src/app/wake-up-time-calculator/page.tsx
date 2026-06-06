import type { Metadata } from "next";
import SleepCalculator from "@/app/components/SleepCalculator";
import WakeUpContent from "@/app/components/WakeUpContent";
import Link from "next/link";
import { breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Wake Up Time Calculator – What Time Should I Wake Up?",
  description:
    "Find the best wake-up time based on your bedtime and natural 90-min sleep cycles. Get 6 wake-up options with sleep quality ratings — wake up refreshed every morning.",
  alternates: { canonical: "https://getsleepcalculator.net/wake-up-time-calculator/" },
  openGraph: {
    title: "Wake Up Time Calculator – What Time Should I Wake Up?",
    description: "Enter your bedtime and find the best wake-up times based on 90-min natural sleep cycles.",
    url: "https://getsleepcalculator.net/wake-up-time-calculator/",
    images: [{ url: "https://getsleepcalculator.net/og-image.png", width: 1200, height: 630 }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Wake Up Time Calculator",
  url: "https://getsleepcalculator.net/wake-up-time-calculator",
  applicationCategory: "HealthApplication",
  description: "Calculate the best wake-up times based on your bedtime and natural 90-minute sleep cycles.",
  operatingSystem: "All",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

const faqs = [
  { q: "What is the best time to wake up?", a: "The best wake-up time is at the end of a complete sleep cycle — roughly every 90 minutes after you fall asleep. Waking at cycle end means you're in the lightest stage of sleep, so the transition to full alertness is quick and smooth. Use the calculator above to find your exact best times based on your bedtime." },
  { q: "If I go to bed at 10 PM, what time should I wake up?", a: "With a 10:00 PM bedtime and roughly 14 minutes to fall asleep: 4 cycles (6h) = 4:14 AM, 5 cycles (7.5h) = 5:44 AM, 6 cycles (9h) = 7:14 AM. For most adults, 5:44 AM or 7:14 AM are the best options depending on schedule." },
  { q: "If I go to bed at 11 PM, what time should I wake up?", a: "With an 11:00 PM bedtime: 4 cycles = 5:14 AM, 5 cycles = 6:44 AM, 6 cycles = 8:14 AM. For a standard morning schedule, 6:44 AM (5 cycles, 7.5 hours) is the sweet spot for most adults." },
  { q: "If I go to bed at midnight, what time should I wake up?", a: "With a 12:00 AM bedtime: 4 cycles = 6:14 AM, 5 cycles = 7:44 AM, 6 cycles = 9:14 AM. If you need to be up by 7 AM, consider an 11 PM bedtime instead to land cleanly on the 6:44 AM five-cycle mark." },
  { q: "Why do I still feel tired after 8 hours of sleep?", a: "8 hours of sleep doesn't always align with the end of a 90-minute cycle. You could be waking up partway through deep sleep, which causes sleep inertia — that heavy, foggy feeling. Try 7.5 hours (5 complete cycles) instead. Most people find it noticeably better than a slightly longer but poorly timed 8 hours." },
  { q: "Is it better to sleep less and wake at the end of a cycle?", a: "Generally yes. Completing 5 cycles (7.5 hours) and waking at the cycle boundary almost always feels better than 8 hours that ends mid-cycle. That said, total sleep duration still matters — don't drop below 6 hours (4 cycles) regularly just to hit a cycle endpoint." },
  { q: "Does hitting snooze make you more tired?", a: "Yes. When you hit snooze, your brain immediately begins descending into deeper sleep. Nine minutes later it's pulled out of that deeper stage, creating more sleep inertia than if you'd gotten up on the first alarm. Setting one alarm at the right cycle-end time and getting up immediately is consistently better than multiple snooze attempts." },
];

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function WakeUpCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Wake-Up Time Calculator", href: "/wake-up-time-calculator" }])) }} />

      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(108,99,255,0.15) 0%, transparent 70%), var(--bg-primary)",
          paddingTop: "3.5rem",
          paddingBottom: "3.5rem",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <nav className="text-xs mb-6" style={{ color: "var(--text-muted)" }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span style={{ color: "var(--accent-light)" }}>Wake-Up Time Calculator</span>
          </nav>

          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight mb-4" style={{ color: "var(--text-primary)" }}>
            Wake-Up Time Calculator
            <span className="block text-2xl sm:text-3xl mt-2 font-semibold" style={{ color: "var(--accent-light)" }}>
              What Time Should I Wake Up?
            </span>
          </h1>
          <p className="text-base max-w-xl mx-auto mb-10" style={{ color: "var(--text-muted)" }}>
            Enter your <strong style={{ color: "var(--text-primary)" }}>bedtime</strong> and we'll show the best
            wake-up times aligned with your natural 90-min sleep cycles — no more grogginess.
          </p>

          {/* Calculator — "bedtime" tab: enter bedtime → get wake-up times */}
          <SleepCalculator defaultTab="bedtime" />
        </div>
      </section>

      {/* Science section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
        <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>
          The Science Behind the Best Wake-Up Time
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            { icon: "🧠", t: "Sleep Architecture", d: "Each night your brain cycles through NREM stages (N1 light, N2 core, N3 deep) and REM sleep. A full cycle takes ~90 minutes. Waking at cycle end means you surface from the lightest sleep stage." },
            { icon: "⚡", t: "Sleep Inertia", d: "Grogginess after waking is called sleep inertia. It's caused by waking during deep N3 sleep. Aligning your alarm to cycle end (N1/N2) dramatically reduces this feeling." },
            { icon: "🔄", t: "REM Sleep Importance", d: "REM (Rapid Eye Movement) sleep happens mostly in later cycles. Getting 5–6 full cycles ensures maximum REM, which is critical for memory, creativity, and emotional regulation." },
            { icon: "📊", t: "Individual Variation", d: "Cycle length varies 80–120 minutes between individuals. The 90-minute average works for ~80% of people. If you still feel off, try adjusting by ±15 minutes from the suggested times." },
          ].map((item) => (
            <div key={item.t} className="rounded-2xl p-5" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
              <div className="text-2xl mb-3">{item.icon}</div>
              <h3 className="font-semibold mb-2" style={{ color: "var(--text-primary)" }}>{item.t}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reference table */}
      <section style={{ background: "var(--bg-card)", borderTop: "1px solid var(--border)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
          <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
            Wake-Up Time by Bedtime
          </h2>
          <p className="text-sm mb-8" style={{ color: "var(--text-muted)" }}>
            Based on 5 sleep cycles (7.5h recommended) + 14 min sleep onset
          </p>
          <div className="overflow-x-auto rounded-2xl" style={{ border: "1px solid var(--border)" }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: "var(--bg-card2)" }}>
                  {["Bedtime", "5 Cycles (7.5h) ⭐", "6 Cycles (9h)", "4 Cycles (6h)"].map((h) => (
                    <th key={h} className="px-5 py-3 text-left font-semibold" style={{ color: "var(--accent-light)" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["9:00 PM", "4:44 AM", "6:14 AM", "3:14 AM"],
                  ["10:00 PM", "5:44 AM", "7:14 AM", "4:14 AM"],
                  ["11:00 PM", "6:44 AM", "8:14 AM", "5:14 AM"],
                  ["12:00 AM", "7:44 AM", "9:14 AM", "6:14 AM"],
                  ["1:00 AM", "8:44 AM", "10:14 AM", "7:14 AM"],
                ].map(([bedTime, ...times], i) => (
                  <tr key={bedTime} style={{ background: i % 2 === 0 ? "transparent" : "var(--bg-card2)", borderTop: "1px solid var(--border)" }}>
                    <td className="px-5 py-3 font-bold" style={{ color: "var(--text-primary)" }}>{bedTime}</td>
                    {times.map((t, j) => (
                      <td key={j} className="px-5 py-3" style={{ color: j === 0 ? "var(--accent-light)" : "var(--text-muted)", fontWeight: j === 0 ? 600 : 400 }}>{t}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SEO Long-Form Content */}
      <WakeUpContent />

      {/* Related Guides */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-8">
        <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>Related Guides</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { href: "/blog/best-time-to-wake-up/", title: "The Best Time to Wake Up According to Sleep Science", desc: "Learn the science behind 90-minute cycles and how to pick your optimal alarm time." },
            { href: "/blog/why-you-wake-up-tired/", title: "Why You Wake Up Tired Even After 8 Hours of Sleep", desc: "8 hidden causes of morning fatigue — and how to fix them for good." },
          ].map((g) => (
            <Link key={g.href} href={g.href} style={{ textDecoration: "none" }}>
              <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, padding: "1.25rem" }}>
                <div style={{ fontWeight: 700, color: "var(--text-primary)", fontSize: 14, marginBottom: 6 }}>{g.title}</div>
                <div style={{ fontSize: 13, color: "var(--text-muted)" }}>{g.desc}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Freshness signal */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-4">
        <p className="text-xs" style={{ color: "var(--text-muted)" }}>Last reviewed: June 2025 — reflects current NSF and CDC sleep guidelines.</p>
      </div>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
        <h2 className="text-2xl font-bold mb-8" style={{ color: "var(--text-primary)" }}>Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <details key={q} className="rounded-2xl overflow-hidden" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
              <summary className="px-6 py-4 font-semibold cursor-pointer list-none flex justify-between items-center" style={{ color: "var(--text-primary)" }}>
                {q}
                <span style={{ color: "var(--accent-light)" }}>+</span>
              </summary>
              <p className="px-6 pb-5 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Related tools */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-14">
        <h2 className="text-xl font-bold mb-5" style={{ color: "var(--text-primary)" }}>Related Tools</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { href: "/bedtime-calculator/", icon: "🛏️", t: "Bedtime Calculator", d: "Enter wake time → get bedtimes" },
            { href: "/nap-calculator/", icon: "😴", t: "Nap Calculator", d: "Perfect power nap timing" },
            { href: "/sleep-debt-calculator/", icon: "📊", t: "Sleep Debt Calculator", d: "Track your weekly sleep debt" },
          ].map((item) => (
            <Link key={item.href} href={item.href}
              className="rounded-2xl p-5 flex gap-3 hover:scale-[1.02] transition-all"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
              <span className="text-2xl">{item.icon}</span>
              <div>
                <p className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>{item.t}</p>
                <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>{item.d}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
