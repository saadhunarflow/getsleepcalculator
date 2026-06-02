import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Sleep Stages Explained – NREM, REM & Sleep Cycles",
  description:
    "Learn about the 4 stages of sleep: NREM Stage 1, 2, 3 (deep sleep), and REM. Understand how each stage contributes to physical recovery, memory, and mental health.",
  alternates: { canonical: "https://getsleepcalculator.net/sleep-stages/" },
  openGraph: {
    title: "Sleep Stages Explained – NREM, REM & Sleep Cycles",
    description: "A complete guide to the 4 stages of sleep — what happens in each stage and why they matter.",
    url: "https://getsleepcalculator.net/sleep-stages/",
    images: [{ url: "https://getsleepcalculator.net/og-image.png", width: 1200, height: 630 }],
  },
};

const schemaArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Sleep Stages Explained: NREM, REM, and Sleep Cycles",
  description: "A comprehensive guide to the 4 stages of sleep and how they work together in each 90-minute cycle.",
  url: "https://getsleepcalculator.net/sleep-stages",
  author: { "@type": "Organization", name: "Get Sleep Calculator" },
  publisher: { "@type": "Organization", name: "Get Sleep Calculator", url: "https://getsleepcalculator.net" },
};

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How many stages of sleep are there?",
      acceptedAnswer: { "@type": "Answer", text: "There are 4 stages of sleep: NREM Stage 1 (light sleep), NREM Stage 2 (core sleep), NREM Stage 3 (deep/slow-wave sleep), and REM (Rapid Eye Movement) sleep. These cycle through about every 90 minutes." },
    },
    {
      "@type": "Question",
      name: "What is the difference between NREM and REM sleep?",
      acceptedAnswer: { "@type": "Answer", text: "NREM (Non-Rapid Eye Movement) sleep covers Stages 1–3 and is primarily for physical restoration. REM sleep is where most dreaming occurs and is critical for memory consolidation, learning, and emotional regulation. Both are essential for overall health." },
    },
    {
      "@type": "Question",
      name: "How long is deep sleep per night?",
      acceptedAnswer: { "@type": "Answer", text: "Most adults spend 15–20% of total sleep in deep sleep (NREM Stage 3), which equals about 1–2 hours per night for a 7–9 hour sleep period. Deep sleep is most concentrated in the first half of the night." },
    },
    {
      "@type": "Question",
      name: "What happens if you don't get enough REM sleep?",
      acceptedAnswer: { "@type": "Answer", text: "REM sleep deprivation impairs memory consolidation, emotional regulation, and creative problem-solving. Studies show REM-deprived people are more emotionally reactive, have poorer learning retention, and show increased risk of mood disorders over time." },
    },
  ],
};

const stages = [
  {
    number: "1",
    name: "NREM Stage 1",
    subtitle: "Light Sleep",
    duration: "1–7 minutes",
    percent: "5%",
    color: "#6c63ff",
    icon: "🌙",
    description:
      "The transition from wakefulness to sleep. Brain activity slows from waking alpha waves to slower theta waves. Muscles may twitch (hypnic jerks). You are easily awakened and may not feel like you were asleep at all.",
    bullets: [
      "Eye movements slow and become rolling",
      "Heart rate and breathing begin to slow",
      "Body temperature starts dropping",
      "Hypnic jerks (sudden muscle twitches) are common",
      "This is when you experience that 'falling' sensation",
    ],
    importance: "Serves as the gateway into deeper sleep. Very brief but necessary transition stage.",
  },
  {
    number: "2",
    name: "NREM Stage 2",
    subtitle: "Core Sleep",
    duration: "10–25 minutes",
    percent: "45–55%",
    color: "#a78bfa",
    icon: "💤",
    description:
      "The dominant sleep stage — you spend more time here than any other. Brain produces 'sleep spindles' (bursts of activity) and 'K-complexes' (large waves), both believed to protect sleep and consolidate memories.",
    bullets: [
      "Sleep spindles fire — believed to aid memory consolidation",
      "Body temperature continues to drop",
      "Heart rate slows further",
      "No eye movements",
      "Harder to wake than Stage 1",
    ],
    importance: "Critical for motor skill learning, procedural memory, and emotional memory processing.",
  },
  {
    number: "3",
    name: "NREM Stage 3",
    subtitle: "Deep Sleep (Slow-Wave Sleep)",
    duration: "20–40 minutes",
    percent: "15–20%",
    color: "#38bdf8",
    icon: "🌊",
    description:
      "The most physically restorative stage. Delta (slow) waves dominate. This is when your body performs critical repair work. Growth hormone is secreted, immune function is strengthened, and cellular repair occurs. Very difficult to wake someone from this stage.",
    bullets: [
      "Growth hormone released — critical for muscle/tissue repair",
      "Immune system actively strengthened",
      "Blood pressure drops significantly",
      "Brain clears metabolic waste (glymphatic system active)",
      "Memory consolidation from hippocampus to neocortex",
    ],
    importance: "Essential for physical health, immune function, and declarative memory. Decreases with age.",
  },
  {
    number: "REM",
    name: "REM Sleep",
    subtitle: "Rapid Eye Movement",
    duration: "10–60 minutes",
    percent: "20–25%",
    color: "#f472b6",
    icon: "👁️",
    description:
      "The dreaming stage. Brain activity resembles wakefulness. Eyes move rapidly beneath closed lids. Voluntary muscles are temporarily paralyzed (atonia) — likely to prevent acting out dreams. REM periods lengthen across the night; most REM occurs in the last 2 hours of sleep.",
    bullets: [
      "Eyes move rapidly (Rapid Eye Movement)",
      "Vivid dreaming primarily occurs here",
      "Brain nearly as active as when awake",
      "Body temporarily paralyzed (sleep atonia)",
      "Emotional memory processing and regulation",
    ],
    importance: "Critical for emotional regulation, creativity, learning consolidation, and mental health.",
  },
];

const faqs = [
  { q: "How many stages of sleep are there?", a: "There are 4 stages of sleep: NREM Stage 1 (light sleep), NREM Stage 2 (core sleep), NREM Stage 3 (deep/slow-wave sleep), and REM (Rapid Eye Movement) sleep. These cycle through about every 90 minutes." },
  { q: "What is the difference between NREM and REM sleep?", a: "NREM (Non-Rapid Eye Movement) sleep covers Stages 1–3 and is primarily for physical restoration. REM sleep is where most dreaming occurs and is critical for memory consolidation, learning, and emotional regulation. Both are essential for overall health." },
  { q: "How long is deep sleep per night?", a: "Most adults spend 15–20% of total sleep in deep sleep (NREM Stage 3), which equals about 1–2 hours per night for a 7–9 hour sleep period. Deep sleep is most concentrated in the first half of the night." },
  { q: "What happens if you don't get enough REM sleep?", a: "REM sleep deprivation impairs memory consolidation, emotional regulation, and creative problem-solving. Studies show REM-deprived people are more emotionally reactive, have poorer learning retention, and show increased risk of mood disorders over time." },
];

export default function SleepStagesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Sleep Stages", href: "/sleep-stages" }])) }} />

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
            <span style={{ color: "var(--accent-light)" }}>Sleep Stages</span>
          </nav>
          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight mb-5" style={{ color: "var(--text-primary)" }}>
            Sleep Stages Explained
          </h1>
          <p className="text-base sm:text-lg leading-relaxed max-w-2xl" style={{ color: "var(--text-muted)" }}>
            Every night your brain cycles through{" "}
            <strong style={{ color: "var(--text-primary)" }}>4 distinct sleep stages</strong> — each with a
            unique biological purpose. Understanding them is the key to <Link href="/blog/why-you-wake-up-tired/" style={{ color: "var(--accent-light)", textDecoration: "underline" }}>waking up truly refreshed</Link>.
          </p>
        </div>
      </section>

      {/* Cycle overview */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>
          The 90-Minute Sleep Cycle
        </h2>
        <div className="rounded-3xl p-6 sm:p-8 mb-8" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
          <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-muted)" }}>
            Sleep doesn&apos;t happen in a straight line — it cycles. Each cycle lasts approximately{" "}
            <strong style={{ color: "var(--text-primary)" }}><Link href="/sleep-cycle-calculator/" style={{ color: "var(--text-primary)" }}>90 minutes</Link></strong> and repeats 4–6 times per night.
            The composition changes as the night progresses: early cycles have more deep sleep (Stage 3), while
            later cycles have more <Link href="/rem-sleep-calculator/" style={{ color: "var(--accent-light)", textDecoration: "underline" }}>REM sleep</Link>.
          </p>
          {/* Visual cycle bar */}
          <div className="rounded-2xl overflow-hidden h-10 flex mb-3" style={{ border: "1px solid var(--border)" }}>
            {[
              { w: "5%", bg: "#6c63ff", label: "N1" },
              { w: "50%", bg: "#a78bfa", label: "N2" },
              { w: "20%", bg: "#38bdf8", label: "N3" },
              { w: "25%", bg: "#f472b6", label: "REM" },
            ].map((s) => (
              <div key={s.label} className="flex items-center justify-center text-xs font-bold text-white"
                style={{ width: s.w, background: s.bg }}>
                {s.label}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 text-xs" style={{ color: "var(--text-muted)" }}>
            {[
              { color: "#6c63ff", label: "Stage 1 — 5%" },
              { color: "#a78bfa", label: "Stage 2 — 50%" },
              { color: "#38bdf8", label: "Stage 3 (Deep) — 20%" },
              { color: "#f472b6", label: "REM — 25%" },
            ].map((s) => (
              <span key={s.label} className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-sm inline-block" style={{ background: s.color }} />
                {s.label}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-2xl px-5 py-4 text-sm" style={{ background: "rgba(108,99,255,0.1)", border: "1px solid rgba(108,99,255,0.25)" }}>
          <strong style={{ color: "var(--accent-light)" }}>Key insight:</strong>{" "}
          <span style={{ color: "var(--text-muted)" }}>
            You experience the most deep sleep in cycles 1–2 (first half of the night) and the most REM sleep in
            cycles 4–6 (second half). This is why sleeping a full 7–9 hours matters — cutting sleep short
            disproportionately eliminates REM sleep.
          </span>
        </div>
      </section>

      {/* Stages detail */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-14 space-y-6">
        <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
          The 4 Stages of Sleep in Detail
        </h2>
        {stages.map((stage) => (
          <div key={stage.number} className="rounded-3xl overflow-hidden"
            style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
            {/* Header bar */}
            <div className="px-6 py-4 flex flex-wrap items-center gap-4"
              style={{ borderBottom: "1px solid var(--border)", borderLeft: `4px solid ${stage.color}` }}>
              <span className="text-2xl">{stage.icon}</span>
              <div className="flex-1">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-bold text-lg" style={{ color: "var(--text-primary)" }}>{stage.name}</h3>
                  <span className="text-sm font-semibold px-2 py-0.5 rounded-full"
                    style={{ background: `${stage.color}22`, color: stage.color }}>
                    {stage.subtitle}
                  </span>
                </div>
              </div>
              <div className="flex gap-6 text-sm">
                <div className="text-center">
                  <p className="font-bold" style={{ color: stage.color }}>{stage.duration}</p>
                  <p className="text-xs" style={{ color: "var(--text-muted)" }}>per cycle</p>
                </div>
                <div className="text-center">
                  <p className="font-bold" style={{ color: stage.color }}>{stage.percent}</p>
                  <p className="text-xs" style={{ color: "var(--text-muted)" }}>of night</p>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="p-6">
              <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-muted)" }}>
                {stage.description}
              </p>
              <div className="grid sm:grid-cols-2 gap-3 mb-5">
                {stage.bullets.map((b) => (
                  <div key={b} className="flex items-start gap-2 text-sm" style={{ color: "var(--text-muted)" }}>
                    <span className="mt-0.5 shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{ background: `${stage.color}22`, color: stage.color }}>
                      ✓
                    </span>
                    {b}
                  </div>
                ))}
              </div>
              <div className="rounded-xl px-4 py-3 text-xs" style={{ background: "var(--bg-card2)" }}>
                <strong style={{ color: stage.color }}>Why it matters: </strong>
                <span style={{ color: "var(--text-muted)" }}>{stage.importance}</span>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* How cycles change through the night */}
      <section style={{ background: "var(--bg-card)", borderTop: "1px solid var(--border)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>
            How Sleep Cycles Change Through the Night
          </h2>
          <div className="space-y-4">
            {[
              { cycle: "Cycles 1–2 (First 3 hours)", deep: "High", rem: "Low", key: "Deep sleep dominates — physical repair, immune boost, growth hormone peak" },
              { cycle: "Cycles 3–4 (Middle 3 hours)", deep: "Medium", rem: "Medium", key: "Balanced transition — both deep sleep and REM are present" },
              { cycle: "Cycles 5–6 (Last 3 hours)", deep: "Low", rem: "High", key: "REM dominates — memory consolidation, emotional processing, vivid dreaming" },
            ].map((row) => (
              <div key={row.cycle} className="rounded-2xl px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-4"
                style={{ background: "var(--bg-primary)", border: "1px solid var(--border)" }}>
                <div className="font-semibold text-sm min-w-52" style={{ color: "var(--text-primary)" }}>{row.cycle}</div>
                <div className="flex gap-4 flex-wrap text-xs">
                  <span className="px-3 py-1 rounded-full font-medium" style={{ background: "rgba(56,189,248,0.15)", color: "#38bdf8" }}>
                    Deep: {row.deep}
                  </span>
                  <span className="px-3 py-1 rounded-full font-medium" style={{ background: "rgba(244,114,182,0.15)", color: "#f472b6" }}>
                    REM: {row.rem}
                  </span>
                </div>
                <p className="text-xs flex-1" style={{ color: "var(--text-muted)" }}>{row.key}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl px-5 py-4 text-sm"
            style={{ background: "rgba(244,114,182,0.08)", border: "1px solid rgba(244,114,182,0.2)" }}>
            <strong style={{ color: "#f472b6" }}>⚠️ Alarm warning: </strong>
            <span style={{ color: "var(--text-muted)" }}>
              Setting an alarm 1–2 hours early cuts your REM sleep in half — the very stage most people
              are already deficient in. Use our{" "}
              <Link href="/" className="underline" style={{ color: "var(--accent-light)" }}>sleep calculator</Link>{" "}
              to find a wake time that aligns with the end of a cycle.
            </span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
        <h2 className="text-2xl font-bold mb-8" style={{ color: "var(--text-primary)" }}>
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <details key={q} className="rounded-2xl overflow-hidden"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
              <summary className="px-6 py-4 font-semibold cursor-pointer list-none flex justify-between items-start gap-4"
                style={{ color: "var(--text-primary)" }}>
                <span>{q}</span>
                <span className="shrink-0" style={{ color: "var(--accent-light)" }}>+</span>
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
            { href: "/", icon: "🌙", t: "Sleep Calculator", d: "Find your ideal bedtime or wake time" },
            { href: "/sleep-cycle-calculator/", icon: "🔄", t: "Sleep Cycle Calculator", d: "Visualize your full sleep night" },
            { href: "/how-much-sleep-do-i-need/", icon: "📊", t: "Sleep Requirements", d: "How much sleep do you need by age?" },
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
