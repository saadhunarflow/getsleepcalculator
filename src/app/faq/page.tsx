import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Sleep Calculator FAQ – Common Sleep Questions Answered",
  description:
    "Answers to the most common sleep questions: how many sleep cycles per night, best time to wake up, how to fix your sleep schedule, REM sleep, sleep debt, and more.",
  alternates: { canonical: "https://getsleepcalculator.net/faq/" },
  openGraph: {
    title: "Sleep Calculator FAQ – Common Sleep Questions Answered",
    description: "Answers to the most common sleep questions: how many sleep cycles per night, best time to wake up, how to fix your sleep schedule, REM sleep, sleep debt, and more.",
    url: "https://getsleepcalculator.net/faq/",
    images: [{ url: "https://getsleepcalculator.net/og-image.png", width: 1200, height: 630 }],
  },
};

const faqs = [
  {
    category: "Sleep Calculator",
    items: [
      { q: "How does the sleep calculator work?", a: "The sleep calculator works backwards from your desired wake-up time in 90-minute blocks (one full sleep cycle), then adds ~14 minutes for the average time it takes to fall asleep. The result is the ideal time to get into bed so you wake up at the lightest part of your sleep cycle." },
      { q: "How long is one sleep cycle?", a: "One complete sleep cycle lasts approximately 90 minutes for most adults. It progresses through NREM Stage 1 (light sleep), Stage 2 (core sleep), Stage 3 (deep/slow-wave sleep), and then REM (Rapid Eye Movement) sleep. Cycle length can range from 80–120 minutes between individuals." },
      { q: "How many sleep cycles per night is ideal?", a: "Most sleep experts recommend 5 complete cycles per night, which equals 7.5 hours of sleep. This ensures adequate time in both deep NREM sleep (critical for physical repair) and REM sleep (critical for memory, learning, and mood). 6 cycles (9h) is also excellent if your schedule allows." },
      { q: "What is the best time to wake up?", a: "The best wake-up time is at the natural end of a sleep cycle — when you are in the lightest stage of sleep (NREM Stage 1). This minimizes sleep inertia (grogginess). Use our calculator to pinpoint cycle-aligned wake times for your specific bedtime." },
      { q: "Why do I feel worse after 8 hours than 7.5 hours?", a: "8 hours (480 minutes) does not divide evenly into 90-minute cycles — it ends mid-cycle in a deeper sleep stage. 7.5 hours (5 complete cycles) ends at the lightest stage. This is why 7.5 hours often feels more refreshing than 8." },
    ],
  },
  {
    category: "Sleep Science",
    items: [
      { q: "What is REM sleep?", a: "REM (Rapid Eye Movement) sleep is the stage where most vivid dreaming occurs. Your eyes move rapidly, your brain is nearly as active as when awake, and your body is temporarily paralyzed. REM is critical for emotional memory consolidation, creativity, and mood regulation. It makes up ~20–25% of total sleep time." },
      { q: "What is deep sleep and why does it matter?", a: "Deep sleep (NREM Stage 3, also called slow-wave sleep) is the most physically restorative stage. During deep sleep: growth hormone is released for tissue repair, the immune system is strengthened, and memories are consolidated from short-term to long-term storage. Most deep sleep occurs in the first half of the night." },
      { q: "What is sleep debt?", a: "Sleep debt is the cumulative difference between the sleep you need and the sleep you actually get. Losing just 1 hour per night for a week creates a 7-hour sleep debt. It cannot be fully recovered in one night — studies show it takes several days of adequate sleep to restore full cognitive performance." },
      { q: "How long does it take to fall asleep normally?", a: "Healthy adults typically take 10–20 minutes to fall asleep. This is called sleep onset latency. Falling asleep in under 5 minutes usually indicates severe sleep deprivation. Taking over 30 minutes regularly may suggest insomnia. Our calculator uses 14 minutes as the average." },
    ],
  },
  {
    category: "Improving Your Sleep",
    items: [
      { q: "How do I fix my sleep schedule?", a: "The most effective method is to set a consistent wake-up time and stick to it — even on weekends. Your wake time anchors your circadian rhythm. After 1–2 weeks, your body will naturally become sleepy at the right bedtime. Avoid shifting your schedule by more than 1 hour on weekends." },
      { q: "How long should a power nap be?", a: "A power nap should be 10–20 minutes. This keeps you in light NREM sleep (Stage 1–2) and you wake up alert. A 30-minute nap risks entering deep sleep, causing grogginess. A 90-minute nap completes a full cycle and can be genuinely restorative — but avoid napping after 3 PM as it can affect nighttime sleep." },
      { q: "Does sleeping more on weekends help?", a: "Partially. Research shows you can partially recover from short-term sleep debt with weekend sleep — but not fully. Chronic sleep restriction causes lasting neurological changes that a single weekend cannot reverse. More importantly, sleeping much later on weekends (social jet lag) shifts your circadian rhythm, making Monday mornings harder." },
      { q: "What is a chronotype?", a: "Your chronotype is your natural biological tendency to be alert and sleepy at certain times. Early chronotypes ('morning larks' or Lions) naturally wake early and sleep early. Late chronotypes ('night owls' or Wolves) are most alert late at night. Chronotype is largely genetic and shifts with age — teenagers naturally shift later, older adults shift earlier." },
      { q: "How does caffeine affect sleep?", a: "Caffeine blocks adenosine receptors in the brain — adenosine is the chemical that builds up during the day and makes you sleepy. Caffeine has a half-life of 5–7 hours, meaning half of your afternoon coffee is still in your system at midnight. For most people, avoiding caffeine after 2 PM significantly improves sleep quality." },
    ],
  },
];

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.flatMap((cat) =>
    cat.items.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    }))
  ),
};

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", href: "/" }, { name: "FAQ", href: "/faq" }])) }} />

      <section
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(108,99,255,0.15) 0%, transparent 70%), var(--bg-primary)",
          paddingTop: "3.5rem",
          paddingBottom: "2rem",
        }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <nav className="text-xs mb-6" style={{ color: "var(--text-muted)" }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span style={{ color: "var(--accent-light)" }}>FAQ</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: "var(--text-primary)" }}>
            Frequently Asked Questions
          </h1>
          <p className="text-base" style={{ color: "var(--text-muted)" }}>
            Everything you need to know about sleep cycles, sleep science, and how to use our calculator.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-12">
        {faqs.map((cat) => (
          <div key={cat.category}>
            <h2 className="text-xl font-bold mb-5 flex items-center gap-3" style={{ color: "var(--text-primary)" }}>
              <span className="w-1 h-6 rounded-full inline-block" style={{ background: "var(--accent)" }} />
              {cat.category}
            </h2>
            <div className="space-y-3">
              {cat.items.map(({ q, a }) => (
                <details key={q} className="rounded-2xl overflow-hidden group"
                  style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
                  <summary className="px-6 py-4 font-semibold cursor-pointer list-none flex justify-between items-start gap-4"
                    style={{ color: "var(--text-primary)" }}>
                    <span>{q}</span>
                    <span className="shrink-0 text-lg mt-0.5" style={{ color: "var(--accent-light)" }}>+</span>
                  </summary>
                  <p className="px-6 pb-5 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{a}</p>
                </details>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-14">
        <div className="rounded-3xl p-8 text-center"
          style={{ background: "linear-gradient(135deg, rgba(108,99,255,0.2), rgba(167,139,250,0.1))", border: "1px solid rgba(108,99,255,0.3)" }}>
          <h2 className="text-xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>
            Ready to Optimize Your Sleep?
          </h2>
          <p className="text-sm mb-6" style={{ color: "var(--text-muted)" }}>
            Use our free sleep calculator to find your perfect bedtime or wake-up time.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/" className="px-8 py-3 rounded-xl font-bold hover:opacity-90 transition-all"
              style={{ background: "var(--accent)", color: "#fff" }}>
              Sleep Calculator →
            </Link>
            <Link href="/how-much-sleep-do-i-need/" className="px-8 py-3 rounded-xl font-bold hover:opacity-90 transition-all"
              style={{ background: "var(--bg-card)", color: "var(--text-primary)", border: "1px solid var(--border)" }}>
              Sleep Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
