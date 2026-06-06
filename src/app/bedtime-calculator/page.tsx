import type { Metadata } from "next";
import SleepCalculator from "@/app/components/SleepCalculator";
import BedtimeContent from "@/app/components/BedtimeContent";
import Link from "next/link";
import { breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Bedtime Calculator — What Time Should You Go to Bed Tonight?",
  description:
    "Free bedtime calculator: enter your wake-up time and get the exact time to go to bed based on 90-minute sleep cycles. No sign-up. Works for adults, teens, and kids.",
  alternates: { canonical: "https://getsleepcalculator.net/bedtime-calculator/" },
  openGraph: {
    title: "Bedtime Calculator — What Time Should You Go to Bed Tonight?",
    description: "Enter your wake-up time and get the exact bedtime based on 90-minute sleep cycles. Free, no account required.",
    url: "https://getsleepcalculator.net/bedtime-calculator/",
    images: [{ url: "https://getsleepcalculator.net/og-image.png", width: 1200, height: 630 }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Bedtime Calculator",
  url: "https://getsleepcalculator.net/bedtime-calculator",
  applicationCategory: "HealthApplication",
  description: "Calculate the perfect bedtime based on your desired wake-up time and natural 90-minute sleep cycles.",
  operatingSystem: "All",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

const faqs = [
  { q: "What time should I go to bed if I wake up at 6 AM?", a: "For a 6:00 AM wake-up, your best bedtimes based on complete sleep cycles are: 10:16 PM (5 cycles, 7.5 hours — most recommended for adults), 11:46 PM (4 cycles, 6 hours — minimum for most adults), and 8:46 PM (6 cycles, 9 hours — ideal for recovery or catching up on sleep debt). All times account for approximately 14 minutes to fall asleep." },
  { q: "What time should I go to bed if I wake up at 7 AM?", a: "For a 7:00 AM wake-up: 11:16 PM (5 cycles, 7.5 hours), 12:46 AM (4 cycles, 6 hours), or 9:46 PM (6 cycles, 9 hours)." },
  { q: "What time should I go to bed if I wake up at 5 AM?", a: "For a 5:00 AM wake-up: 9:16 PM (5 cycles, 7.5 hours), 10:46 PM (4 cycles, 6 hours), or 7:46 PM (6 cycles, 9 hours)." },
  { q: "Is 7.5 hours of sleep better than 8 hours?", a: "It depends on where you wake up in your cycle. Eight hours of sleep that ends mid-cycle can leave you feeling worse than 7.5 hours that ends at the natural cycle boundary. The total duration matters, but so does the timing. For most adults, 7.5 hours timed well beats 8 hours timed badly." },
  { q: "What if I can't fall asleep at my recommended bedtime?", a: "If you're not sleepy at your calculated bedtime, don't force it. Lying in bed awake trains your brain to associate bed with wakefulness, which makes future nights harder. Instead, stay up doing something calm and low-stimulation until you feel genuinely drowsy. Keep your wake-up time fixed regardless — this builds sleep pressure faster and moves your natural sleep onset earlier over the next few nights." },
  { q: "How accurate is the bedtime calculator?", a: "The 90-minute cycle length is an average across the population. Your personal cycle may be slightly shorter or longer — typically anywhere from 80 to 100 minutes. If you consistently feel groggy even when waking at the suggested times, try adjusting the sleep onset time or cycle length in the calculator settings. Individual variation is normal." },
  { q: "Can I use this as a rise bedtime calculator?", a: "Yes — the tool functions the same way as any rise/wake-time sleep calculator. Whether you call it a bedtime calculator, a rise calculator, or a sleep cycle planner, the math is identical: cycle backward from your wake-up time, add sleep onset time, and you get your optimal bedtime. The Wake-Up Calculator on this site works in the opposite direction if you know your bedtime and want to find the best alarm time." },
  { q: "Does the bedtime calculator work for shift workers?", a: "Yes, with one adjustment: use your actual planned wake-up time regardless of whether it's day or night. The cycle math works the same. The larger challenge for shift workers is that their circadian rhythm may be misaligned with their required schedule. Our Circadian Rhythm Guide covers strategies for managing shift work sleep specifically." },
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

export default function BedtimeCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Bedtime Calculator", href: "/bedtime-calculator" }])) }} />

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
            <span style={{ color: "var(--accent-light)" }}>Bedtime Calculator</span>
          </nav>

          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight mb-4" style={{ color: "var(--text-primary)" }}>
            Bedtime Calculator
            <span className="block text-2xl sm:text-3xl mt-2 font-semibold" style={{ color: "var(--accent-light)" }}>
              What Time Should I Go to Bed?
            </span>
          </h1>
          <p className="text-base max-w-xl mx-auto mb-10" style={{ color: "var(--text-muted)" }}>
            Enter your required <strong style={{ color: "var(--text-primary)" }}>wake-up time</strong> and we'll calculate
            the ideal bedtimes based on 90-minute sleep cycles so you wake up naturally refreshed.
          </p>

          {/* Calculator — "wakeup" tab default: enter wake time → get bedtimes */}
          <SleepCalculator defaultTab="wakeup" />
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
        <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>
          How the Bedtime Calculator Works
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            { icon: "🔬", t: "Based on Sleep Cycles", d: "A complete sleep cycle lasts ~90 minutes and includes NREM stages 1–3 and REM sleep. We calculate backwards from your wake-up time in 90-min blocks." },
            { icon: "⏱️", t: "Includes Sleep Onset Time", d: "The average person takes ~14 minutes to fall asleep. Our calculator adds this buffer so the recommended bedtime is when you should get into bed, not when sleep starts." },
            { icon: "⭐", t: "Recommended Times", d: "5 complete cycles (7.5 hours) is the sweet spot for most adults — enough REM sleep, full memory consolidation, without grogginess." },
            { icon: "🚫", t: "Avoid Mid-Cycle Wake-Ups", d: "Waking in deep sleep (NREM Stage 3) causes sleep inertia — the heavy, groggy feeling. Our times align your alarm with the end of a light sleep stage." },
          ].map((item) => (
            <div key={item.t} className="rounded-2xl p-5" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
              <div className="text-2xl mb-3">{item.icon}</div>
              <h3 className="font-semibold mb-2" style={{ color: "var(--text-primary)" }}>{item.t}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick reference table */}
      <section style={{ background: "var(--bg-card)", borderTop: "1px solid var(--border)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
          <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
            Bedtime Cheat Sheet by Wake-Up Time
          </h2>
          <p className="text-sm mb-8" style={{ color: "var(--text-muted)" }}>
            All times include a 14-minute sleep onset buffer. 5 cycles (7.5h) is the sweet spot for most adults.
          </p>
          <div className="overflow-x-auto rounded-2xl" style={{ border: "1px solid var(--border)" }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: "var(--bg-card2)" }}>
                  {["Wake-Up Time", "4 Cycles (6h)", "5 Cycles (7.5h) ⭐", "6 Cycles (9h)"].map((h) => (
                    <th key={h} className="px-5 py-3 text-left font-semibold" style={{ color: "var(--accent-light)" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["5:00 AM", "10:46 PM", "9:16 PM", "7:46 PM"],
                  ["5:30 AM", "11:16 PM", "9:46 PM", "8:16 PM"],
                  ["6:00 AM", "11:46 PM", "10:16 PM", "8:46 PM"],
                  ["6:30 AM", "12:16 AM", "10:46 PM", "9:16 PM"],
                  ["7:00 AM", "12:46 AM", "11:16 PM", "9:46 PM"],
                  ["7:30 AM", "1:16 AM",  "11:46 PM", "10:16 PM"],
                  ["8:00 AM", "1:46 AM",  "12:16 AM", "10:46 PM"],
                  ["8:30 AM", "2:16 AM",  "12:46 AM", "11:16 PM"],
                ].map(([wakeUp, col1, col2, col3], i) => (
                  <tr key={wakeUp} style={{ background: i % 2 === 0 ? "transparent" : "var(--bg-card2)", borderTop: "1px solid var(--border)" }}>
                    <td className="px-5 py-3 font-bold" style={{ color: "var(--text-primary)" }}>{wakeUp}</td>
                    <td className="px-5 py-3" style={{ color: "var(--text-muted)" }}>{col1}</td>
                    <td className="px-5 py-3 font-semibold" style={{ color: "var(--accent-light)" }}>{col2}</td>
                    <td className="px-5 py-3" style={{ color: "var(--text-muted)" }}>{col3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SEO Long-Form Content */}
      <BedtimeContent />

      {/* Related Guides */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-8">
        <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>Related Guides</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { href: "/blog/how-to-fall-asleep-faster/", title: "How to Fall Asleep Faster: 12 Science-Backed Tips", desc: "Evidence-based techniques to fall asleep quicker and make the most of your bedtime." },
            { href: "/blog/how-to-fix-sleep-schedule/", title: "How to Fix Your Sleep Schedule in 7 Days", desc: "A step-by-step 7-day protocol to reset your bedtime and wake time for consistent sleep." },
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
        <h2 className="text-xl font-bold mb-5" style={{ color: "var(--text-primary)" }}>Related Sleep Tools</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { href: "/wake-up-time-calculator/", icon: "⏰", t: "Wake-Up Calculator", d: "Enter bedtime → get best alarm times" },
            { href: "/nap-calculator/", icon: "😴", t: "Nap Calculator", d: "Plan a nap without disrupting tonight's sleep" },
            { href: "/sleep-cycle-calculator/", icon: "🔄", t: "Sleep Cycle Calculator", d: "Visualize your full sleep night" },
            { href: "/sleep-debt-calculator/", icon: "📉", t: "Sleep Debt Calculator", d: "Track missed hours this week" },
            { href: "/chronotype-calculator/", icon: "🦩", t: "Chronotype Calculator", d: "Find your natural sleep timing" },
            { href: "/rem-sleep-calculator/", icon: "🧠", t: "REM Sleep Calculator", d: "Estimate your REM sleep per night" },
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
