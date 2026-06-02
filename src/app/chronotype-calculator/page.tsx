"use client";
import { useState } from "react";
import Link from "next/link";
import ChronotypeContent from "../components/ChronotypeContent";

const QUESTIONS = [
  {
    q: "On a free day (no alarm), what time do you naturally wake up?",
    options: [
      { label: "Before 6:00 AM", scores: { lion: 3, bear: 0, wolf: 0, dolphin: 1 } },
      { label: "6:00 – 7:30 AM", scores: { lion: 2, bear: 2, wolf: 0, dolphin: 1 } },
      { label: "7:30 – 9:00 AM", scores: { lion: 0, bear: 3, wolf: 1, dolphin: 1 } },
      { label: "After 9:00 AM", scores: { lion: 0, bear: 1, wolf: 3, dolphin: 1 } },
    ],
  },
  {
    q: "When do you feel most alert and productive?",
    options: [
      { label: "Early morning (6–9 AM)", scores: { lion: 3, bear: 0, wolf: 0, dolphin: 1 } },
      { label: "Late morning (9 AM–12 PM)", scores: { lion: 1, bear: 3, wolf: 0, dolphin: 1 } },
      { label: "Afternoon (2–5 PM)", scores: { lion: 0, bear: 1, wolf: 2, dolphin: 2 } },
      { label: "Evening/night (after 6 PM)", scores: { lion: 0, bear: 0, wolf: 3, dolphin: 2 } },
    ],
  },
  {
    q: "How do you feel within the first 30 minutes of waking up?",
    options: [
      { label: "Fully awake and ready to go", scores: { lion: 3, bear: 0, wolf: 0, dolphin: 0 } },
      { label: "Somewhat groggy, need coffee", scores: { lion: 0, bear: 3, wolf: 1, dolphin: 1 } },
      { label: "Very groggy, need 1–2 hours", scores: { lion: 0, bear: 1, wolf: 3, dolphin: 1 } },
      { label: "Already awake before alarm goes off", scores: { lion: 1, bear: 0, wolf: 0, dolphin: 3 } },
    ],
  },
  {
    q: "What time do you naturally feel sleepy at night?",
    options: [
      { label: "Before 9 PM", scores: { lion: 3, bear: 0, wolf: 0, dolphin: 1 } },
      { label: "9–11 PM", scores: { lion: 1, bear: 3, wolf: 0, dolphin: 1 } },
      { label: "11 PM – 1 AM", scores: { lion: 0, bear: 1, wolf: 3, dolphin: 1 } },
      { label: "After 1 AM", scores: { lion: 0, bear: 0, wolf: 3, dolphin: 1 } },
    ],
  },
  {
    q: "How would you describe your sleep quality?",
    options: [
      { label: "Very consistent — same time every night", scores: { lion: 2, bear: 2, wolf: 0, dolphin: 0 } },
      { label: "Mostly good with occasional disruptions", scores: { lion: 1, bear: 2, wolf: 1, dolphin: 1 } },
      { label: "Light sleeper — wake up often", scores: { lion: 0, bear: 0, wolf: 0, dolphin: 3 } },
      { label: "Irregular — varies a lot", scores: { lion: 0, bear: 1, wolf: 2, dolphin: 2 } },
    ],
  },
];

const TYPES = {
  lion: {
    name: "Lion 🦁",
    tagline: "Early Riser / Morning Dominant",
    color: "#f59e0b",
    pct: "15%",
    sleep: "9:00–10:00 PM",
    wake: "5:30–6:30 AM",
    peak: "Early morning (6–10 AM)",
    desc: "Lions wake up early with high energy and lead. You're most productive before noon and wind down early in the evening.",
    strengths: ["Highly disciplined", "Productive mornings", "Natural leaders", "Good planners"],
    tips: [
      "Schedule deep work and meetings before noon",
      "Avoid late-night social commitments — you'll suffer the next day",
      "Use afternoons for routine tasks and emails",
      "Exercise in the morning for best performance",
    ],
    famous: ["Tim Cook (Apple CEO)", "Michelle Obama", "Richard Branson"],
  },
  bear: {
    name: "Bear 🐻",
    tagline: "Solar-Aligned / Most Common",
    color: "#3b82f6",
    pct: "55%",
    sleep: "10:30–11:30 PM",
    wake: "7:00–8:00 AM",
    peak: "Mid-morning (10 AM–2 PM)",
    desc: "Bears follow the sun and are the most adaptable chronotype. You're most productive mid-morning to early afternoon.",
    strengths: ["Good social adaptability", "Steady energy levels", "Consistent sleep", "Works well in 9–5 environments"],
    tips: [
      "Do focused work between 10 AM and 2 PM",
      "Exercise in late morning or early afternoon",
      "Avoid heavy meals after 7 PM",
      "Use evenings for creative or lighter tasks",
    ],
    famous: ["Barack Obama", "Bill Gates", "Most of the population"],
  },
  wolf: {
    name: "Wolf 🐺",
    tagline: "Night Owl / Evening Dominant",
    color: "#8b5cf6",
    pct: "20%",
    sleep: "12:00–1:00 AM",
    wake: "8:00–9:00 AM",
    peak: "Evening (5–9 PM)",
    desc: "Wolves come alive at night and are most creative in the evening. The traditional 9–5 schedule often works against you.",
    strengths: ["Highly creative", "Energized in evenings", "Thrives in flexible schedules", "Risk-takers"],
    tips: [
      "Schedule creative work after 5 PM when possible",
      "Avoid early morning meetings — push them back when you can",
      "Use blue-light blocking glasses after 9 PM",
      "Exercise in late afternoon for best results",
    ],
    famous: ["Winston Churchill", "Marcel Proust", "Charles Darwin"],
  },
  dolphin: {
    name: "Dolphin 🐬",
    tagline: "Light Sleeper / Irregular",
    color: "#06b6d4",
    pct: "10%",
    sleep: "11:30 PM – 12:30 AM",
    wake: "6:30–7:30 AM",
    peak: "Midday (10 AM–2 PM)",
    desc: "Dolphins are light, irregular sleepers who are often perfectionists. You may struggle with sleep onset and wake up easily to noise.",
    strengths: ["Highly detail-oriented", "Perfectionists", "Intelligent and driven", "Alert to their environment"],
    tips: [
      "Prioritize sleep hygiene — consistent bedtime, cool dark room",
      "Avoid exercising within 4 hours of bedtime",
      "Try progressive muscle relaxation before sleep",
      "Limit caffeine strictly to before noon",
    ],
    famous: ["Darwin", "Various high-achievers with insomnia tendencies"],
  },
};

type TypeKey = keyof typeof TYPES;

function ChronotypeTool() {
  const [answers, setAnswers] = useState<number[]>(Array(QUESTIONS.length).fill(-1));
  const [result, setResult] = useState<null | TypeKey>(null);
  const [step, setStep] = useState(0);

  function answer(optIdx: number) {
    const newAnswers = [...answers];
    newAnswers[step] = optIdx;
    setAnswers(newAnswers);
    if (step < QUESTIONS.length - 1) {
      setStep(step + 1);
    }
  }

  function calculate() {
    const totals: Record<TypeKey, number> = { lion: 0, bear: 0, wolf: 0, dolphin: 0 };
    answers.forEach((optIdx, qIdx) => {
      if (optIdx < 0) return;
      const scores = QUESTIONS[qIdx].options[optIdx].scores;
      (Object.keys(scores) as TypeKey[]).forEach((k) => {
        totals[k] += scores[k];
      });
    });
    const winner = (Object.keys(totals) as TypeKey[]).reduce((a, b) => totals[a] > totals[b] ? a : b);
    setResult(winner);
  }

  function reset() {
    setAnswers(Array(QUESTIONS.length).fill(-1));
    setResult(null);
    setStep(0);
  }

  const allAnswered = answers.every((a) => a >= 0);
  const t = result ? TYPES[result] : null;

  return (
    <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 16, padding: "2rem", maxWidth: 640, margin: "0 auto" }}>
      {!result ? (
        <>
          {/* Progress */}
          <div className="flex gap-1 mb-6">
            {QUESTIONS.map((_, i) => (
              <div key={i} style={{ flex: 1, height: 4, borderRadius: 4, background: i < step ? "var(--accent)" : i === step ? "var(--accent-light)" : "var(--border)", transition: "background 0.3s" }} />
            ))}
          </div>

          <div style={{ marginBottom: 8, fontSize: 12, color: "var(--text-muted)" }}>Question {step + 1} of {QUESTIONS.length}</div>
          <div style={{ fontWeight: 700, fontSize: 18, color: "var(--text-primary)", marginBottom: 20, lineHeight: 1.4 }}>
            {QUESTIONS[step].q}
          </div>

          <div className="flex flex-col gap-3 mb-6">
            {QUESTIONS[step].options.map((opt, i) => (
              <button key={i} onClick={() => answer(i)}
                style={{
                  padding: "14px 18px", borderRadius: 12, border: `1px solid ${answers[step] === i ? "var(--accent)" : "var(--border)"}`,
                  background: answers[step] === i ? "rgba(108,99,255,0.12)" : "var(--bg-primary)",
                  color: "var(--text-primary)", fontWeight: 500, fontSize: 14, cursor: "pointer", textAlign: "left", transition: "all 0.2s",
                }}>
                {opt.label}
              </button>
            ))}
          </div>

          <div className="flex gap-3">
            {step > 0 && (
              <button onClick={() => setStep(step - 1)}
                style={{ flex: 1, padding: "12px", borderRadius: 10, border: "1px solid var(--border)", background: "var(--bg-primary)", color: "var(--text-primary)", fontWeight: 600, cursor: "pointer" }}>
                ← Back
              </button>
            )}
            {allAnswered && (
              <button onClick={calculate}
                style={{ flex: 2, padding: "12px", borderRadius: 10, border: "none", background: "var(--accent)", color: "#fff", fontWeight: 700, fontSize: 16, cursor: "pointer" }}>
                See My Chronotype →
              </button>
            )}
          </div>
        </>
      ) : t ? (
        <div>
          <div className="text-center mb-6">
            <div style={{ fontSize: 56, marginBottom: 8 }}>{t.name.split(" ")[1]}</div>
            <div style={{ fontSize: 28, fontWeight: 800, color: t.color }}>{t.name.split(" ")[0]}</div>
            <div style={{ fontSize: 14, color: "var(--text-muted)", marginTop: 4 }}>{t.tagline} · {t.pct} of people</div>
          </div>

          <div style={{ background: "var(--bg-primary)", borderRadius: 12, padding: "1.25rem", marginBottom: 16 }}>
            <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.7 }}>{t.desc}</p>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-4">
            <div style={{ background: "var(--bg-primary)", borderRadius: 10, padding: "1rem", textAlign: "center" }}>
              <div style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 4 }}>Ideal Bedtime</div>
              <div style={{ fontWeight: 700, color: t.color }}>{t.sleep}</div>
            </div>
            <div style={{ background: "var(--bg-primary)", borderRadius: 10, padding: "1rem", textAlign: "center" }}>
              <div style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 4 }}>Ideal Wake Time</div>
              <div style={{ fontWeight: 700, color: t.color }}>{t.wake}</div>
            </div>
          </div>

          <div style={{ background: "var(--bg-primary)", borderRadius: 12, padding: "1rem", marginBottom: 12 }}>
            <div style={{ fontWeight: 600, fontSize: 13, color: "var(--text-primary)", marginBottom: 8 }}>💡 Tips For {t.name.split(" ")[0]}s</div>
            {t.tips.map((tip, i) => (
              <div key={i} className="flex gap-2 items-start mb-2" style={{ fontSize: 13, color: "var(--text-muted)" }}>
                <span style={{ color: t.color, fontWeight: 700, flexShrink: 0 }}>→</span> {tip}
              </div>
            ))}
          </div>

          <button onClick={reset}
            style={{ width: "100%", padding: "12px", borderRadius: 10, border: "1px solid var(--border)", background: "var(--bg-primary)", color: "var(--text-primary)", fontWeight: 600, cursor: "pointer" }}>
            Retake Quiz
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default function ChronotypePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: "Chronotype Calculator",
        url: "https://getsleepcalculator.net/chronotype-calculator",
        applicationCategory: "HealthApplication",
        operatingSystem: "Web Browser",
        description: "Discover your chronotype with our 5-question quiz. Are you a Lion, Bear, Wolf, or Dolphin? Get personalized sleep and productivity tips.",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        featureList: "Chronotype quiz, Lion Bear Wolf Dolphin types, personalized sleep schedule recommendations",
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://getsleepcalculator.net" },
          { "@type": "ListItem", position: 2, name: "Chronotype Calculator", item: "https://getsleepcalculator.net/chronotype-calculator" },
        ],
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "What is a chronotype?", acceptedAnswer: { "@type": "Answer", text: "A chronotype is your genetically-determined biological preference for sleeping and waking at certain times. It reflects the natural timing of your circadian rhythm — the internal 24-hour body clock that regulates sleep-wake cycles, hormone release, body temperature, and alertness levels. Chronotypes range from extreme morning types (\'larks\') to extreme evening types (\'owls\'), with most people falling somewhere in between." } },
          { "@type": "Question", name: "What are the 4 chronotypes?", acceptedAnswer: { "@type": "Answer", text: "Dr. Michael Breus categorizes chronotypes into 4 animals: Lion (early risers, productive mornings, sleep 10PM–6AM, ~15% of people), Bear (follows the solar cycle, mid-morning peak, sleep 11PM–7AM, ~50% of people), Wolf (night owls, creative evenings, sleep 12AM–8AM, ~15% of people), and Dolphin (light sleepers with irregular patterns, often anxious about sleep, ~10% of people). Most traditional work schedules are designed for Bears." } },
          { "@type": "Question", name: "Can your chronotype change over time?", acceptedAnswer: { "@type": "Answer", text: "Yes. Chronotypes shift predictably with age. Children tend to be morning types. Teenagers shift dramatically toward evening types during puberty (a biological process, not just preference). Adults gradually shift back toward morning types after age 20. This shift accelerates after 50, making most older adults early risers. Lifestyle factors like light exposure, work schedules, and social timing can temporarily mask your natural chronotype." } },
          { "@type": "Question", name: "Is being a night owl unhealthy?", acceptedAnswer: { "@type": "Answer", text: "Being a natural evening chronotype is not unhealthy in itself — the problem is \'social jet lag\': the chronic mismatch between your biological clock and early societal schedules (work, school). Evening types forced to maintain early schedules accumulate chronic sleep deprivation. Studies show evening types have higher rates of depression, metabolic syndrome, and cognitive impairment — primarily due to social jet lag, not the chronotype itself. Aligning your schedule to your chronotype where possible dramatically improves health." } },
          { "@type": "Question", name: "How do I use my chronotype to sleep better?", acceptedAnswer: { "@type": "Answer", text: "Match your sleep timing to your chronotype rather than fighting it. Lions should aim for a 10PM–6AM schedule and protect morning deep work time. Bears work best with 11PM–7AM sleep and schedule demanding tasks for mid-morning. Wolves perform best with a midnight–8AM schedule and shouldn\'t schedule critical tasks before 10AM. Dolphins benefit from strict sleep hygiene routines and should limit stimulation 2 hours before their (ideally consistent) bedtime." } },
        ],
      })}} />

      <section style={{ background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(108,99,255,0.18) 0%, transparent 70%), var(--bg-primary)", padding: "4rem 0 3rem" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-4" style={{ background: "rgba(108,99,255,0.15)", border: "1px solid rgba(108,99,255,0.3)", color: "var(--accent-light)" }}>
            🦁 5-Question Quiz
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4" style={{ color: "var(--text-primary)" }}>
            Chronotype Calculator
          </h1>
          <p className="text-lg mb-10" style={{ color: "var(--text-muted)", maxWidth: 520, margin: "0 auto 2.5rem" }}>
            Are you a Lion, Bear, Wolf, or Dolphin? Discover your sleep personality and optimize your daily schedule.
          </p>
          <ChronotypeTool />
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>The 4 Chronotypes Explained</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {(Object.values(TYPES) as typeof TYPES[TypeKey][]).map((t) => (
            <div key={t.name} style={{ background: "var(--bg-card)", border: `1px solid var(--border)`, borderLeft: `4px solid ${t.color}`, borderRadius: 12, padding: "1.25rem" }}>
              <div style={{ fontWeight: 700, color: t.color, fontSize: 18, marginBottom: 4 }}>{t.name}</div>
              <div style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 8 }}>{t.tagline} · {t.pct} of people</div>
              <div style={{ fontSize: 14, color: "var(--text-secondary)" }}>{t.desc}</div>
              <div className="flex gap-3 mt-3">
                <div style={{ fontSize: 11, color: "var(--text-muted)" }}>😴 {t.sleep}</div>
                <div style={{ fontSize: 11, color: "var(--text-muted)" }}>⏰ {t.wake}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SEO Long-Form Content */}
      <ChronotypeContent />

      <section className="max-w-3xl mx-auto px-4 pb-8">
        <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>Related Guides</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { href: "/sleep-schedule-builder/", title: "Sleep Schedule Builder", desc: "Build a consistent 7-day sleep schedule aligned with your chronotype for better rest." },
            { href: "/circadian-rhythm/", title: "Circadian Rhythm Guide", desc: "Understand how your internal clock works and how to align your life with your natural rhythms." },
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
      <section style={{ background: "var(--bg-card)", borderTop: "1px solid var(--border)", padding: "3rem 0" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>More Sleep Tools</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { href: "/sleep-schedule-builder/", label: "Sleep Schedule Builder" },
              { href: "/bedtime-calculator/", label: "Bedtime Calculator" },
              { href: "/sleep-debt-calculator/", label: "Sleep Debt Calculator" },
              { href: "/circadian-rhythm/", label: "Circadian Rhythm Guide" },
            ].map((l) => (
              <Link key={l.href} href={l.href} style={{ padding: "8px 20px", borderRadius: 8, border: "1px solid var(--border)", background: "var(--bg-primary)", color: "var(--text-primary)", fontSize: 14, textDecoration: "none" }}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
