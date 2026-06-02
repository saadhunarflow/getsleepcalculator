import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Sleep Hygiene Tips – 20 Science-Backed Ways to Sleep Better",
  description:
    "Improve your sleep with 20 proven sleep hygiene tips — from bedroom environment and light exposure to diet, exercise timing, and bedtime routines. Start sleeping better tonight.",
  alternates: { canonical: "https://getsleepcalculator.net/sleep-hygiene-tips/" },
  openGraph: {
    title: "Sleep Hygiene Tips – 20 Science-Backed Ways to Sleep Better",
    description: "20 evidence-based sleep hygiene tips to fall asleep faster and wake up refreshed.",
    url: "https://getsleepcalculator.net/sleep-hygiene-tips/",
    images: [{ url: "https://getsleepcalculator.net/og-image.png", width: 1200, height: 630 }],
  },
};

const schemaArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "20 Science-Backed Sleep Hygiene Tips for Better Sleep",
  description: "Evidence-based sleep hygiene practices to improve sleep quality, fall asleep faster, and wake up refreshed.",
  url: "https://getsleepcalculator.net/sleep-hygiene-tips",
  author: { "@type": "Organization", name: "Get Sleep Calculator" },
  publisher: { "@type": "Organization", name: "Get Sleep Calculator", url: "https://getsleepcalculator.net" },
};

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is sleep hygiene?",
      acceptedAnswer: { "@type": "Answer", text: "Sleep hygiene refers to a set of behavioral and environmental practices designed to promote consistent, uninterrupted sleep. Good sleep hygiene includes maintaining a consistent sleep schedule, optimizing your bedroom environment, managing light and temperature, and avoiding substances that interfere with sleep." },
    },
    {
      "@type": "Question",
      name: "What is the most important sleep hygiene tip?",
      acceptedAnswer: { "@type": "Answer", text: "Maintaining a consistent wake-up time is widely considered the single most impactful sleep hygiene practice. A fixed wake time anchors your circadian rhythm regardless of when you fell asleep, making it progressively easier to fall asleep at the same time each night." },
    },
    {
      "@type": "Question",
      name: "How long does it take to improve sleep hygiene?",
      acceptedAnswer: { "@type": "Answer", text: "Most people notice significant improvement within 2–4 weeks of consistently applying good sleep hygiene practices. The circadian rhythm adapts within 1–2 weeks of a fixed wake time. Full optimization may take 4–8 weeks, especially if recovering from chronic sleep deprivation." },
    },
  ],
};

const categories = [
  {
    title: "Sleep Schedule",
    icon: "📅",
    color: "#6c63ff",
    tips: [
      {
        num: 1,
        title: "Fix Your Wake-Up Time",
        desc: "Set the same alarm every morning — including weekends. Your wake time anchors your entire circadian rhythm. This is the single highest-impact sleep habit change you can make. After 2 weeks, you will naturally feel sleepy at the right bedtime.",
        impact: "Highest",
      },
      {
        num: 2,
        title: "Go to Bed Only When Sleepy",
        desc: "Don't go to bed at a fixed time — go when you are genuinely sleepy. Lying in bed awake builds anxiety about sleep. If you've been in bed 20 minutes without sleeping, get up and do something calm until you feel sleepy.",
        impact: "High",
      },
      {
        num: 3,
        title: "Limit Weekend Sleep-In to 1 Hour",
        desc: "Sleeping in more than 1 hour past your usual time on weekends causes 'social jet lag' — your circadian rhythm shifts later, making Sunday night's sleep harder and Monday mornings worse. A 1-hour maximum maintains rhythm without total restriction.",
        impact: "High",
      },
    ],
  },
  {
    title: "Bedroom Environment",
    icon: "🛏️",
    color: "#38bdf8",
    tips: [
      {
        num: 4,
        title: "Keep Your Bedroom Cool",
        desc: "The ideal sleep temperature is 65–68°F (18–20°C). Your core body temperature needs to drop 2–3°F to initiate sleep. A cool room accelerates this process. Heat is one of the most common causes of frequent nighttime waking.",
        impact: "High",
      },
      {
        num: 5,
        title: "Make It Completely Dark",
        desc: "Even small amounts of light suppress melatonin. Use blackout curtains or a sleep mask. Cover or remove LED indicators on electronics — even a small LED on a TV can reduce melatonin production. Light enters the brain through closed eyelids.",
        impact: "High",
      },
      {
        num: 6,
        title: "Eliminate Noise or Use White Noise",
        desc: "Abrupt sounds are more disruptive than continuous noise. Earplugs or white/pink noise machines mask sudden sounds. A fan works equally well and has the bonus of cooling the room.",
        impact: "Medium",
      },
      {
        num: 7,
        title: "Reserve Your Bed for Sleep Only",
        desc: "Working, watching TV, or scrolling in bed trains your brain to associate the bedroom with wakefulness. Use the bed only for sleep (and intimacy). Within weeks, getting into bed becomes a reliable sleep cue.",
        impact: "High",
      },
    ],
  },
  {
    title: "Light & Circadian Rhythm",
    icon: "☀️",
    color: "#f59e0b",
    tips: [
      {
        num: 8,
        title: "Get Bright Light in the Morning",
        desc: "Expose yourself to bright natural light within 30–60 minutes of waking. This sets your circadian clock's 'start time' each day. Even on cloudy days, outdoor light is 10–50x brighter than indoor lighting. This is the fastest way to fix a delayed sleep phase.",
        impact: "Highest",
      },
      {
        num: 9,
        title: "Dim Lights 2 Hours Before Bed",
        desc: "Bright light (especially blue wavelengths) suppresses melatonin — your sleep hormone. Dim overhead lights and switch to warmer, lower-intensity lighting 2 hours before your target bedtime. This allows melatonin to rise naturally.",
        impact: "High",
      },
      {
        num: 10,
        title: "Use Night Mode on Screens",
        desc: "Blue light from phones and screens is particularly disruptive to melatonin. Enable Night Shift (iOS) or Night Light (Android/Windows) — these shift display colors warmer. Even better: stop screen use 1 hour before bed. Blue-light glasses have mixed evidence.",
        impact: "Medium",
      },
    ],
  },
  {
    title: "Diet & Substances",
    icon: "☕",
    color: "#f472b6",
    tips: [
      {
        num: 11,
        title: "Cut Caffeine After 2 PM",
        desc: "Caffeine has a half-life of 5–7 hours. Your afternoon coffee is still 50% active at midnight. An espresso at 3 PM is 25% active at 3 AM. Switch to decaf after 2 PM (or noon if you're caffeine-sensitive). This alone dramatically improves deep sleep quality.",
        impact: "Highest",
      },
      {
        num: 12,
        title: "Avoid Alcohol as a Sleep Aid",
        desc: "Alcohol helps you fall asleep but fragments sleep quality. It suppresses REM sleep in the first half of the night and causes rebound wakefulness in the second half. Even 1–2 drinks reduce sleep quality measurably. The morning grogginess after 'sleeping in' after drinking is real.",
        impact: "High",
      },
      {
        num: 13,
        title: "Avoid Heavy Meals Within 3 Hours of Bed",
        desc: "Large meals close to bedtime raise core body temperature and trigger active digestion — both counteract sleep onset. A light snack (tryptophan-rich foods like turkey, dairy, or nuts) 1 hour before bed is acceptable and may mildly support sleep.",
        impact: "Medium",
      },
    ],
  },
  {
    title: "Physical Activity",
    icon: "🏃",
    color: "#34d399",
    tips: [
      {
        num: 14,
        title: "Exercise Regularly (but Not Too Late)",
        desc: "Regular aerobic exercise is one of the most potent natural sleep aids. It increases deep sleep duration, reduces sleep onset time, and improves sleep continuity. However, vigorous exercise within 3 hours of bedtime raises core temperature and heart rate — best to exercise in the morning or afternoon.",
        impact: "High",
      },
      {
        num: 15,
        title: "Walk After Dinner",
        desc: "A 10–20 minute walk after the evening meal aids digestion, lowers blood sugar, and provides a natural evening wind-down. Light activity in the evening (walks, yoga, stretching) is beneficial — unlike intense workouts.",
        impact: "Medium",
      },
    ],
  },
  {
    title: "Wind-Down Routine",
    icon: "🌙",
    color: "#a78bfa",
    tips: [
      {
        num: 16,
        title: "Create a 30-Minute Wind-Down Ritual",
        desc: "A consistent pre-sleep routine signals your brain that sleep is coming. Examples: warm shower, reading (physical book), gentle stretching, herbal tea, journaling. Consistency matters more than the specific activities. Do the same sequence every night.",
        impact: "High",
      },
      {
        num: 17,
        title: "Take a Warm Shower 1–2 Hours Before Bed",
        desc: "Counterintuitively, a warm shower before bed improves sleep. When you exit, your body rapidly loses heat — this accelerated cooling mimics the natural temperature drop that triggers sleep. Meta-analyses show a 10-minute warm shower 1–2 hours before bed cuts sleep onset time by ~10 minutes.",
        impact: "Medium",
      },
      {
        num: 18,
        title: "Write Tomorrow's To-Do List",
        desc: "Unfinished tasks and worries are a leading cause of lying-awake thinking. Studies show that writing a specific to-do list for the next day (not a list of what you did, but what you need to do) before bed significantly reduces sleep onset time by 'offloading' worry to paper.",
        impact: "Medium",
      },
    ],
  },
  {
    title: "Mental Habits",
    icon: "🧠",
    color: "#fb923c",
    tips: [
      {
        num: 19,
        title: "Don't Clock-Watch",
        desc: "Watching the clock when you can't sleep dramatically increases anxiety about not sleeping (orthosomnia). Turn your clock away from view. The anxiety from watching time is more disruptive than the wakefulness itself.",
        impact: "Medium",
      },
      {
        num: 20,
        title: "Practice 4-7-8 Breathing If You Can't Sleep",
        desc: "Inhale for 4 seconds, hold for 7 seconds, exhale for 8 seconds. This activates the parasympathetic nervous system, lowering heart rate and cortisol. Repeat 4 cycles. Clinical evidence supports this for reducing anxiety-related sleep onset difficulty.",
        impact: "Medium",
      },
    ],
  },
];

const impactColors: Record<string, { bg: string; text: string }> = {
  Highest: { bg: "rgba(52,211,153,0.15)", text: "#34d399" },
  High:    { bg: "rgba(108,99,255,0.15)", text: "#a78bfa" },
  Medium:  { bg: "rgba(245,158,11,0.15)", text: "#f59e0b" },
};

const faqs = [
  { q: "What is sleep hygiene?", a: "Sleep hygiene refers to a set of behavioral and environmental practices designed to promote consistent, uninterrupted sleep. Good sleep hygiene includes maintaining a consistent sleep schedule, optimizing your bedroom environment, managing light and temperature, and avoiding substances that interfere with sleep." },
  { q: "What is the most important sleep hygiene tip?", a: "Maintaining a consistent wake-up time is widely considered the single most impactful sleep hygiene practice. A fixed wake time anchors your circadian rhythm regardless of when you fell asleep, making it progressively easier to fall asleep at the same time each night." },
  { q: "How long does it take to improve sleep hygiene?", a: "Most people notice significant improvement within 2–4 weeks of consistently applying good sleep hygiene practices. The circadian rhythm adapts within 1–2 weeks of a fixed wake time. Full optimization may take 4–8 weeks, especially if recovering from chronic sleep deprivation." },
];

export default function SleepHygieneTipsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Sleep Hygiene Tips", href: "/sleep-hygiene-tips" }])) }} />

      {/* Hero */}
      <section
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(108,99,255,0.15) 0%, transparent 70%), var(--bg-primary)",
          paddingTop: "3.5rem",
          paddingBottom: "3.5rem",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <nav className="text-xs mb-6" style={{ color: "var(--text-muted)" }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span style={{ color: "var(--accent-light)" }}>Sleep Hygiene Tips</span>
          </nav>
          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight mb-5" style={{ color: "var(--text-primary)" }}>
            20 Sleep Hygiene Tips
            <span className="block text-2xl sm:text-3xl mt-2 font-semibold" style={{ color: "var(--accent-light)" }}>
              Science-Backed Ways to Sleep Better
            </span>
          </h1>
          <p className="text-base leading-relaxed max-w-2xl mb-6" style={{ color: "var(--text-muted)" }}>
            Sleep hygiene is the collection of habits and environmental factors that determine <Link href="/blog/how-to-fall-asleep-faster/" style={{ color: "var(--accent-light)", textDecoration: "underline" }}>your sleep quality</Link>.
            These 20 tips are based on peer-reviewed research — not generic advice.
          </p>
          <div className="flex flex-wrap gap-3">
            {["☀️ Circadian Science", "🔬 Evidence-Based", "✅ Actionable Tonight"].map((t) => (
              <span key={t} className="px-4 py-1.5 rounded-full text-xs font-semibold"
                style={{ background: "rgba(108,99,255,0.15)", border: "1px solid rgba(108,99,255,0.3)", color: "var(--accent-light)" }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Quick impact summary */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { icon: "🎯", label: "Highest Impact", count: "3 tips", desc: "Fix wake time, morning light, no late caffeine", color: "#34d399" },
            { icon: "⚡", label: "High Impact", count: "8 tips", desc: "Bedroom dark/cool, no alcohol, exercise, wind-down", color: "#a78bfa" },
            { icon: "✨", label: "Medium Impact", count: "9 tips", desc: "White noise, warm shower, no clock-watching...", color: "#f59e0b" },
          ].map((s) => (
            <div key={s.label} className="rounded-2xl p-5 text-center"
              style={{ background: "var(--bg-card)", border: `1px solid ${s.color}33` }}>
              <div className="text-2xl mb-2">{s.icon}</div>
              <p className="font-bold text-sm mb-1" style={{ color: s.color }}>{s.label}</p>
              <p className="font-extrabold text-2xl mb-2" style={{ color: "var(--text-primary)" }}>{s.count}</p>
              <p className="text-xs" style={{ color: "var(--text-muted)" }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tips by category */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-14 space-y-12">
        {categories.map((cat) => (
          <div key={cat.title}>
            <h2 className="text-xl font-bold mb-5 flex items-center gap-3" style={{ color: "var(--text-primary)" }}>
              <span className="text-2xl">{cat.icon}</span>
              <span style={{ borderBottom: `2px solid ${cat.color}`, paddingBottom: "2px" }}>{cat.title}</span>
            </h2>
            <div className="space-y-4">
              {cat.tips.map((tip) => (
                <div key={tip.num} className="rounded-2xl p-5"
                  style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderLeft: `3px solid ${cat.color}` }}>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="font-bold text-sm flex items-center gap-2" style={{ color: "var(--text-primary)" }}>
                      <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-extrabold shrink-0"
                        style={{ background: cat.color, color: "#fff" }}>
                        {tip.num}
                      </span>
                      {tip.title}
                    </h3>
                    <span className="shrink-0 px-2 py-0.5 rounded-full text-xs font-semibold"
                      style={{ background: impactColors[tip.impact].bg, color: impactColors[tip.impact].text }}>
                      {tip.impact}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{tip.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* FAQ */}
      <section style={{ background: "var(--bg-card)", borderTop: "1px solid var(--border)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
          <h2 className="text-2xl font-bold mb-8" style={{ color: "var(--text-primary)" }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <details key={q} className="rounded-2xl overflow-hidden"
                style={{ background: "var(--bg-primary)", border: "1px solid var(--border)" }}>
                <summary className="px-6 py-4 font-semibold cursor-pointer list-none flex justify-between items-start gap-4"
                  style={{ color: "var(--text-primary)" }}>
                  <span>{q}</span>
                  <span className="shrink-0" style={{ color: "var(--accent-light)" }}>+</span>
                </summary>
                <p className="px-6 pb-5 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
        <div className="rounded-3xl p-8 text-center"
          style={{ background: "linear-gradient(135deg, rgba(108,99,255,0.2), rgba(167,139,250,0.1))", border: "1px solid rgba(108,99,255,0.3)" }}>
          <h2 className="text-2xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>
            Now Find Your Perfect Sleep Schedule
          </h2>
          <p className="text-sm mb-6" style={{ color: "var(--text-muted)" }}>
            Apply these tips, then use our calculator to find the ideal <Link href="/bedtime-calculator/" style={{ color: "var(--accent-light)", textDecoration: "underline" }}>bedtime</Link> or wake-up time aligned to your <Link href="/sleep-schedule-builder/" style={{ color: "var(--accent-light)", textDecoration: "underline" }}>sleep schedule</Link>.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/" className="px-8 py-3 rounded-xl font-bold hover:opacity-90 transition-all"
              style={{ background: "var(--accent)", color: "#fff" }}>
              Sleep Calculator →
            </Link>
            <Link href="/sleep-stages/" className="px-8 py-3 rounded-xl font-bold hover:opacity-90 transition-all"
              style={{ background: "var(--bg-card)", color: "var(--text-primary)", border: "1px solid var(--border)" }}>
              Learn Sleep Stages
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
