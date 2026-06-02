import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbSchema } from "@/lib/seo";
import HowMuchSleepContent from "@/app/components/HowMuchSleepContent";

export const metadata: Metadata = {
  title: "How Much Sleep Do I Need? (By Age, 2026 Guidelines)",
  description:
    "How much sleep do you need by age? NSF-recommended sleep hours for newborns to seniors. Learn signs of sleep deprivation, factors that affect sleep needs, and how to optimize your sleep.",
  alternates: { canonical: "https://getsleepcalculator.net/how-much-sleep-do-i-need/" },
  openGraph: {
    title: "How Much Sleep Do I Need? (By Age, 2026 Guidelines)",
    description: "NSF-recommended sleep hours for every age group — from newborns to adults 65+. Plus signs of sleep deprivation and expert tips.",
    url: "https://getsleepcalculator.net/how-much-sleep-do-i-need/",
    images: [{ url: "https://getsleepcalculator.net/og-image.png", width: 1200, height: 630 }],
  },
};

const schemaArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How Much Sleep Do I Need? Sleep Requirements by Age",
  description: "Science-based sleep hour recommendations for every age group, signs of sleep deprivation, and optimization tips.",
  url: "https://getsleepcalculator.net/how-much-sleep-do-i-need",
  author: { "@type": "Organization", name: "Get Sleep Calculator" },
  publisher: { "@type": "Organization", name: "Get Sleep Calculator", url: "https://getsleepcalculator.net" },
  mainEntityOfPage: "https://getsleepcalculator.net/how-much-sleep-do-i-need",
};

const ageGroups = [
  { age: "Newborns", range: "0–3 months", recommended: "14–17 hrs", acceptable: "11–19 hrs", icon: "👶" },
  { age: "Infants", range: "4–11 months", recommended: "12–15 hrs", acceptable: "10–18 hrs", icon: "🍼" },
  { age: "Toddlers", range: "1–2 years", recommended: "11–14 hrs", acceptable: "9–16 hrs", icon: "🧒" },
  { age: "Preschool", range: "3–5 years", recommended: "10–13 hrs", acceptable: "8–14 hrs", icon: "🎒" },
  { age: "School Age", range: "6–13 years", recommended: "9–11 hrs", acceptable: "7–12 hrs", icon: "📚" },
  { age: "Teenagers", range: "14–17 years", recommended: "8–10 hrs", acceptable: "7–11 hrs", icon: "🎧" },
  { age: "Young Adults", range: "18–25 years", recommended: "7–9 hrs", acceptable: "6–11 hrs", icon: "🎓" },
  { age: "Adults", range: "26–64 years", recommended: "7–9 hrs", acceptable: "6–10 hrs", icon: "💼" },
  { age: "Older Adults", range: "65+ years", recommended: "7–8 hrs", acceptable: "5–9 hrs", icon: "🌿" },
];

const deprivationSigns = [
  { icon: "😴", title: "Constant Fatigue", desc: "Feeling tired regardless of how long you stayed in bed is a key sign of chronic sleep deprivation." },
  { icon: "😤", title: "Mood Swings & Irritability", desc: "Even one night of poor sleep affects the amygdala (emotional center), making you 60% more reactive to negative stimuli." },
  { icon: "🧠", title: "Cognitive Fog", desc: "Difficulty concentrating, forgetting things, or slow decision-making — all worsen with less than 6 hours per night." },
  { icon: "🍔", title: "Increased Appetite", desc: "Sleep deprivation raises ghrelin (hunger hormone) and lowers leptin (fullness hormone), leading to overeating." },
  { icon: "🤧", title: "Getting Sick More Often", desc: "Less than 7 hours triples your risk of catching a cold according to UCSF research." },
  { icon: "⚡", title: "Microsleeps", desc: "Involuntary 1–30 second 'blackouts' while awake. Dangerous while driving. A strong signal you need more sleep." },
];

export default function HowMuchSleepPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", href: "/" }, { name: "How Much Sleep Do I Need?", href: "/how-much-sleep-do-i-need" }])) }} />

      {/* Hero */}
      <section
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(108,99,255,0.15) 0%, transparent 70%), var(--bg-primary)",
          paddingTop: "3.5rem",
          paddingBottom: "3.5rem",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <nav className="text-xs mb-6" style={{ color: "var(--text-muted)" }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span style={{ color: "var(--accent-light)" }}>How Much Sleep Do I Need?</span>
          </nav>

          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight mb-5" style={{ color: "var(--text-primary)" }}>
            How Much Sleep Do I Need?
          </h1>
          <p className="text-base sm:text-lg leading-relaxed mb-6" style={{ color: "var(--text-muted)" }}>
            The short answer: <strong style={{ color: "var(--text-primary)" }}>7–9 hours</strong> for most adults.
            But sleep needs vary significantly by age, activity level, and health status.
            Here&apos;s the complete, science-backed breakdown based on{" "}
            <strong style={{ color: "var(--text-primary)" }}>National Sleep Foundation (NSF)</strong> guidelines.
          </p>

          {/* Key fact chips */}
          <div className="flex flex-wrap gap-3">
            {[
              "🔬 Based on NSF Research",
              "📅 Updated 2026",
              "👥 All Age Groups Covered",
            ].map((f) => (
              <span key={f} className="px-4 py-1.5 rounded-full text-xs font-semibold"
                style={{ background: "rgba(108,99,255,0.15)", border: "1px solid rgba(108,99,255,0.3)", color: "var(--accent-light)" }}>
                {f}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Age Table */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
        <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
          Recommended Sleep Hours by Age
        </h2>
        <p className="text-sm mb-8" style={{ color: "var(--text-muted)" }}>
          Source: National Sleep Foundation (NSF) — the world&apos;s leading sleep research organization
        </p>

        <div className="space-y-3">
          {ageGroups.map((g) => (
            <div key={g.age} className="rounded-2xl px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-3"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
              <div className="text-3xl w-10 shrink-0">{g.icon}</div>
              <div className="flex-1">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="font-bold" style={{ color: "var(--text-primary)" }}>{g.age}</span>
                  <span className="text-sm" style={{ color: "var(--text-muted)" }}>{g.range}</span>
                </div>
              </div>
              <div className="flex flex-col sm:items-end gap-1">
                <span className="text-sm font-bold" style={{ color: "var(--accent-light)" }}>
                  ⭐ {g.recommended}
                </span>
                <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                  Acceptable: {g.acceptable}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs mt-5 leading-relaxed" style={{ color: "var(--text-muted)" }}>
          * &quot;Recommended&quot; = ideal range for the majority. &quot;Acceptable&quot; = appropriate for some individuals.
          &quot;Not recommended&quot; = below/above the acceptable range and associated with health risks.
        </p>
      </section>

      {/* Adults deep dive */}
      <section style={{ background: "var(--bg-card)", borderTop: "1px solid var(--border)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>
            How Much Sleep Do Adults Need?
          </h2>
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {[
              { label: "Minimum", value: "6h", note: "May be acceptable for a few", color: "var(--low)" },
              { label: "Recommended", value: "7–9h", note: "Ideal for most adults", color: "var(--good)" },
              { label: "Maximum", value: "10h", note: "More may signal illness", color: "var(--fair)" },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl p-5 text-center"
                style={{ background: "var(--bg-primary)", border: `2px solid ${item.color}22` }}>
                <p className="text-3xl font-extrabold mb-1" style={{ color: item.color }}>{item.value}</p>
                <p className="font-semibold text-sm mb-1" style={{ color: "var(--text-primary)" }}>{item.label}</p>
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>{item.note}</p>
              </div>
            ))}
          </div>
          <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
            About <strong style={{ color: "var(--text-primary)" }}>1 in 3 adults</strong> regularly get less than 7 hours of sleep — the CDC calls insufficient sleep a{" "}
            <em>public health epidemic</em>. <Link href="/blog/why-you-wake-up-tired/" style={{ color: "var(--accent-light)", textDecoration: "underline" }}>Chronic sleep restriction</Link> below 7 hours is linked to increased risk of obesity,
            diabetes, hypertension, heart disease, stroke, and all-cause mortality.
          </p>
          <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
            Interestingly, consistently sleeping <em>more than 9 hours</em> (in adults without illness) is also
            associated with health risks — it may indicate an underlying condition. The 7–9 hour window is the
            science-backed sweet spot.
          </p>
        </div>
      </section>

      {/* Sleep deprivation signs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
        <h2 className="text-2xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>
          Signs You&apos;re Not Getting Enough Sleep
        </h2>
        <p className="text-sm mb-8" style={{ color: "var(--text-muted)" }}>
          Sleep deprivation is cumulative — it builds up as &quot;<Link href="/sleep-debt-calculator/" style={{ color: "var(--accent-light)", textDecoration: "underline" }}>sleep debt</Link>&quot; and affects every body system.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {deprivationSigns.map((s) => (
            <div key={s.title} className="rounded-2xl p-5"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
              <div className="text-3xl mb-3">{s.icon}</div>
              <h3 className="font-semibold mb-2 text-sm" style={{ color: "var(--text-primary)" }}>{s.title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Factors affecting sleep */}
      <section style={{ background: "var(--bg-card)", borderTop: "1px solid var(--border)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>
            Factors That Affect How Much Sleep You Need
          </h2>
          <div className="space-y-4">
            {[
              { title: "Age", content: "Sleep needs decrease progressively from birth to adulthood. Infants need up to 17 hours; adults plateau at 7–9 hours. After 65, sleep efficiency decreases (more time in bed needed for the same restorative sleep)." },
              { title: "Physical Activity Level", content: "Athletes and highly active individuals often benefit from 8–10 hours. Exercise increases slow-wave (deep) sleep, which is when physical repair occurs. More activity = more repair time needed." },
              { title: "Genetics & Sleep Debt", content: "Approximately 3% of people carry a gene (DEC2 mutation) that allows them to function normally on 6 hours. For everyone else, consistently sleeping under 7 hours builds sleep debt that impairs performance even if you feel fine." },
              { title: "Health Status", content: "Illness, recovery from surgery, pregnancy, and mental health conditions (especially depression and anxiety) all increase sleep requirements. During a fever, your immune system actively uses sleep time for recovery." },
              { title: "Stress & Mental Load", content: "High psychological stress increases time spent in lighter sleep stages and reduces restorative deep sleep, meaning you may need more total sleep time to feel rested." },
            ].map((item) => (
              <details key={item.title} className="rounded-2xl overflow-hidden"
                style={{ background: "var(--bg-primary)", border: "1px solid var(--border)" }}>
                <summary className="px-6 py-4 font-semibold cursor-pointer list-none flex justify-between items-center"
                  style={{ color: "var(--text-primary)" }}>
                  {item.title}
                  <span style={{ color: "var(--accent-light)" }}>+</span>
                </summary>
                <p className="px-6 pb-5 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{item.content}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Long-Form Content */}
      <HowMuchSleepContent />

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
        <div className="rounded-3xl p-8 text-center"
          style={{ background: "linear-gradient(135deg, rgba(108,99,255,0.2), rgba(167,139,250,0.1))", border: "1px solid rgba(108,99,255,0.3)" }}>
          <h2 className="text-2xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>
            Find Your Perfect Sleep Schedule
          </h2>
          <p className="mb-6 text-sm" style={{ color: "var(--text-muted)" }}>
            Now that you know how much sleep you need — use our <Link href="/bedtime-calculator/" style={{ color: "var(--accent-light)", textDecoration: "underline" }}>bedtime calculator</Link> to find the exact timing.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/" className="px-8 py-3 rounded-xl font-bold transition-all hover:opacity-90"
              style={{ background: "var(--accent)", color: "#fff" }}>
              Sleep Calculator →
            </Link>
            <Link href="/bedtime-calculator/" className="px-8 py-3 rounded-xl font-bold transition-all hover:opacity-90"
              style={{ background: "var(--bg-card)", color: "var(--text-primary)", border: "1px solid var(--border)" }}>
              Bedtime Calculator
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
