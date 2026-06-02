import type { Metadata } from "next";
import { SITE_URL, breadcrumbSchema } from "@/lib/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Insomnia: Causes, Types & Proven Treatments (CBT-I Guide)",
  description:
    "Comprehensive guide to insomnia: types, causes, symptoms, and the most effective treatments including Cognitive Behavioral Therapy for Insomnia (CBT-I).",
  alternates: { canonical: `${SITE_URL}/insomnia/` },
  openGraph: {
    title: "Insomnia: Causes, Types & Proven Treatments (CBT-I Guide)",
    description:
      "Everything about insomnia — what it is, why it happens, and how to treat it using CBT-I, sleep restriction therapy, and stimulus control.",
    url: `${SITE_URL}/insomnia`,
    type: "article",
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630 }],
  },
};

const faqItems = [
  {
    q: "What is insomnia?",
    a: "Insomnia is a sleep disorder characterized by difficulty falling asleep, staying asleep, or waking too early, occurring at least 3 nights per week for 3 months or more (chronic insomnia). It causes significant daytime impairment and is the most common sleep disorder, affecting 10–30% of adults.",
  },
  {
    q: "What is the difference between insomnia and sleep deprivation?",
    a: "Sleep deprivation occurs when you don't have enough time or opportunity to sleep (e.g., working long hours). Insomnia is when you have adequate time and opportunity to sleep but still cannot sleep. People with insomnia often have more arousal and hyperactivity in the brain, not a lack of sleep pressure.",
  },
  {
    q: "What is CBT-I?",
    a: "Cognitive Behavioral Therapy for Insomnia (CBT-I) is a structured program that addresses the thoughts and behaviors that cause or worsen insomnia. It is recommended as the first-line treatment by the American College of Physicians, American Academy of Sleep Medicine, and NIH — more effective than sleep medications long-term.",
  },
  {
    q: "What is sleep restriction therapy?",
    a: "Sleep restriction therapy (SRT) is a CBT-I technique that temporarily limits time in bed to match actual sleep time, building sleep drive. For example, if you sleep 5 hours but spend 8 hours in bed, you'd start with a 5.5-hour sleep window. As efficiency improves (>85%), the window is extended by 15–30 minutes per week.",
  },
  {
    q: "Can insomnia be cured?",
    a: "Yes. Chronic insomnia is highly treatable. CBT-I achieves long-term remission in 70–80% of patients and is superior to sleep medications because it addresses underlying causes rather than symptoms. Even severe cases often improve significantly within 4–8 weeks of CBT-I.",
  },
  {
    q: "Are sleep medications safe for insomnia?",
    a: "Prescription sleep medications (benzodiazepines, Z-drugs like zolpidem) are approved for short-term use only. Long-term use carries risks of dependence, tolerance, rebound insomnia, cognitive impairment, and falls in older adults. Clinical guidelines recommend CBT-I over medications as the first-line treatment.",
  },
  {
    q: "What causes insomnia?",
    a: "The 3P model explains insomnia: Predisposing factors (genetics, anxiety tendency, hyperarousal), Precipitating factors (stressful life events, illness, medication), and Perpetuating factors (poor sleep habits, excessive time in bed, worry about sleep). The perpetuating factors are what maintain chronic insomnia and what CBT-I targets.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Insomnia: Causes, Types & Proven Treatments (CBT-I Guide)",
  description:
    "A comprehensive guide to insomnia: types, causes, symptoms, and the most effective evidence-based treatments including Cognitive Behavioral Therapy for Insomnia.",
  url: `${SITE_URL}/insomnia`,
  author: { "@type": "Organization", name: "Get Sleep Calculator", url: SITE_URL },
  publisher: { "@type": "Organization", name: "Get Sleep Calculator", url: SITE_URL },
  mainEntityOfPage: `${SITE_URL}/insomnia`,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const insomniaTypes = [
  {
    name: "Acute Insomnia",
    duration: "Days to weeks",
    cause: "Stress, travel, life events",
    treatment: "Usually self-resolving; good sleep hygiene",
    color: "#22d3a0",
  },
  {
    name: "Chronic Insomnia",
    duration: "3+ nights/week for 3+ months",
    cause: "Perpetuating behaviors, anxiety, hyperarousal",
    treatment: "CBT-I (first-line); medications short-term",
    color: "#f87171",
  },
  {
    name: "Onset Insomnia",
    duration: "Ongoing pattern",
    cause: "Racing thoughts, anxiety, circadian delay",
    treatment: "Stimulus control, sleep restriction",
    color: "#fbbf24",
  },
  {
    name: "Maintenance Insomnia",
    duration: "Ongoing pattern",
    cause: "Hyperarousal, apnea, pain, mood disorders",
    treatment: "CBT-I, treat underlying conditions",
    color: "#a78bfa",
  },
];

const cbtComponents = [
  {
    name: "Sleep Restriction Therapy",
    abbr: "SRT",
    icon: "⏰",
    description:
      "Temporarily limits time in bed to match actual sleep time, building homeostatic sleep pressure. Creates efficient, consolidated sleep within 2–4 weeks.",
    effectiveness: "High",
  },
  {
    name: "Stimulus Control",
    abbr: "SC",
    icon: "🛏️",
    description:
      "Re-associates the bed with sleepiness, not wakefulness. Rules: only use bed for sleep and sex, get up if awake >20 min, get out of bed at the same time daily.",
    effectiveness: "Very High",
  },
  {
    name: "Cognitive Restructuring",
    abbr: "CR",
    icon: "🧠",
    description:
      "Identifies and challenges unhelpful beliefs about sleep ('I must get 8 hours or I'll fail tomorrow'). Reduces sleep-related anxiety and nocturnal arousal.",
    effectiveness: "High",
  },
  {
    name: "Sleep Hygiene Education",
    abbr: "SHE",
    icon: "📋",
    description:
      "Covers caffeine cutoffs, light exposure, bedroom environment, exercise timing. Necessary but not sufficient — most effective combined with SRT and SC.",
    effectiveness: "Moderate",
  },
  {
    name: "Relaxation Training",
    abbr: "RT",
    icon: "🧘",
    description:
      "Progressive muscle relaxation, diaphragmatic breathing, body scan meditation. Reduces physiological arousal and quiet racing thoughts at bedtime.",
    effectiveness: "Moderate",
  },
  {
    name: "Sleep Compression",
    abbr: "SCm",
    icon: "📉",
    description:
      "A gentler version of sleep restriction for older adults or those who can't tolerate full restriction. Gradually reduces time in bed over weeks instead of abruptly.",
    effectiveness: "Moderate-High",
  },
];

const symptoms = [
  { symptom: "Difficulty falling asleep (>30 min)", category: "Onset" },
  { symptom: "Waking during the night (multiple times)", category: "Maintenance" },
  { symptom: "Waking too early, unable to return to sleep", category: "Terminal" },
  { symptom: "Non-restorative sleep (wake feeling unrefreshed)", category: "Quality" },
  { symptom: "Daytime fatigue, low energy", category: "Daytime" },
  { symptom: "Difficulty concentrating, memory problems", category: "Cognitive" },
  { symptom: "Irritability, mood changes, anxiety", category: "Mood" },
  { symptom: "Worry or anxiety specifically about sleep", category: "Behavioral" },
];

export default function InsomniaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Insomnia Guide", href: "/insomnia" },
        ])) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main style={{ padding: "2rem 1rem 4rem" }}>
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" style={{ maxWidth: "800px", margin: "0 auto 1.5rem", fontSize: "0.88rem", color: "var(--text-muted)" }}>
          <Link href="/" style={{ color: "var(--accent)", textDecoration: "none" }}>Home</Link>
          <span style={{ margin: "0 0.4rem" }}>›</span>
          <span>Insomnia</span>
        </nav>

        {/* Hero */}
        <section style={{ maxWidth: "800px", margin: "0 auto 2.5rem" }}>
          <div style={{ display: "inline-block", background: "rgba(248,113,113,0.1)", color: "#f87171", fontSize: "0.82rem", fontWeight: 700, padding: "0.3rem 0.85rem", borderRadius: "2rem", marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            Sleep Disorder
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 800, color: "var(--text-primary)", lineHeight: 1.2, marginBottom: "1rem" }}>
            Insomnia: Causes, Types & Proven Treatments
          </h1>
          <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: 1.8 }}>
            Insomnia affects 1 in 3 adults. The good news: it&apos;s highly treatable. Cognitive Behavioral Therapy for Insomnia (CBT-I) is more effective than sleeping pills — and the results last.
          </p>

          {/* Stats row */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginTop: "1.5rem" }}>
            {[
              { stat: "30%", label: "of adults have insomnia symptoms" },
              { stat: "10%", label: "have chronic insomnia disorder" },
              { stat: "80%", label: "CBT-I long-term remission rate" },
              { stat: "4–8 wks", label: "typical CBT-I treatment duration" },
            ].map((s) => (
              <div key={s.label} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "0.75rem", padding: "1rem 1.25rem", minWidth: "140px" }}>
                <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--accent)" }}>{s.stat}</div>
                <div style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Insomnia vs Sleep Deprivation */}
        <section style={{ maxWidth: "800px", margin: "0 auto 3rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "1rem" }}>
            Insomnia vs. Sleep Deprivation
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            {[
              {
                title: "Insomnia",
                color: "#f87171",
                items: [
                  "Adequate time & opportunity to sleep",
                  "Still cannot fall or stay asleep",
                  "Hyperarousal in brain (overactive at night)",
                  "Often tired but can't sleep (\"tired but wired\")",
                  "Sleep window restriction may help",
                ],
              },
              {
                title: "Sleep Deprivation",
                color: "#22d3a0",
                items: [
                  "Not enough time allocated for sleep",
                  "Would sleep given the opportunity",
                  "Accumulated sleep debt / pressure",
                  "Falls asleep quickly when given chance",
                  "More time in bed solves the problem",
                ],
              },
            ].map((col) => (
              <div key={col.title} style={{ background: "var(--bg-card)", border: `1.5px solid ${col.color}33`, borderRadius: "1rem", padding: "1.25rem" }}>
                <div style={{ fontWeight: 700, color: col.color, fontSize: "1.1rem", marginBottom: "0.75rem" }}>{col.title}</div>
                <ul style={{ margin: 0, paddingLeft: "1.2rem", color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.8 }}>
                  {col.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Types */}
        <section style={{ maxWidth: "800px", margin: "0 auto 3rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "1rem" }}>
            Types of Insomnia
          </h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid var(--border)" }}>
                  {["Type", "Duration", "Common Causes", "Treatment"].map((h) => (
                    <th key={h} style={{ padding: "0.75rem 1rem", textAlign: "left", color: "var(--text-muted)", fontWeight: 600, whiteSpace: "nowrap" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {insomniaTypes.map((row, i) => (
                  <tr key={row.name} style={{ borderBottom: "1px solid var(--border)", background: i % 2 === 0 ? "transparent" : "rgba(108,99,255,0.03)" }}>
                    <td style={{ padding: "0.75rem 1rem", fontWeight: 700, color: row.color }}>{row.name}</td>
                    <td style={{ padding: "0.75rem 1rem", color: "var(--text-muted)" }}>{row.duration}</td>
                    <td style={{ padding: "0.75rem 1rem", color: "var(--text-primary)" }}>{row.cause}</td>
                    <td style={{ padding: "0.75rem 1rem", color: "var(--text-muted)" }}>{row.treatment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Symptoms */}
        <section style={{ maxWidth: "800px", margin: "0 auto 3rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "1rem" }}>
            Symptoms of Insomnia
          </h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "1rem", fontSize: "0.95rem" }}>
            Per DSM-5, insomnia requires at least one of the following sleep complaints plus <Link href="/blog/sleep-deprivation-effects/" style={{ color: "var(--accent-light)", textDecoration: "underline" }}>significant daytime impairment</Link>, occurring at least 3 nights/week for 3+ months:
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "0.6rem" }}>
            {symptoms.map(({ symptom, category }) => (
              <div key={symptom} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "0.75rem", padding: "0.75rem 1rem" }}>
                <span style={{ color: "var(--accent)", fontWeight: 700, flexShrink: 0 }}>✓</span>
                <div>
                  <div style={{ color: "var(--text-primary)", fontSize: "0.9rem" }}>{symptom}</div>
                  <div style={{ color: "var(--text-muted)", fontSize: "0.78rem", marginTop: "0.1rem" }}>{category}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* The 3P Model */}
        <section style={{ maxWidth: "800px", margin: "0 auto 3rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "1rem" }}>
            Why Insomnia Becomes Chronic: The 3P Model
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Dr. Arthur Spielman&apos;s 3P model explains how insomnia develops and becomes chronic. CBT-I specifically targets the <strong style={{ color: "var(--text-primary)" }}>perpetuating factors</strong>.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
            {[
              { p: "Predisposing", color: "#a78bfa", icon: "🧬", items: ["Genetic hyperarousal tendency", "Anxiety-prone personality", "Female sex (2× higher risk)", "Family history of insomnia"] },
              { p: "Precipitating", color: "#fbbf24", icon: "⚡", items: ["Stressful life events", "Medical illness or pain", "Medication changes", "Major schedule disruption"] },
              { p: "Perpetuating", color: "#f87171", icon: "🔄", items: ["Spending too much time in bed", "Irregular sleep schedule", "Napping to compensate", "Worry and anxiety about sleep"] },
            ].map(({ p, color, icon, items }) => (
              <div key={p} style={{ background: "var(--bg-card)", border: `1.5px solid ${color}33`, borderRadius: "1rem", padding: "1.25rem" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.4rem" }}>{icon}</div>
                <div style={{ fontWeight: 800, color, marginBottom: "0.75rem", fontSize: "1rem" }}>{p} (P{["Predisposing", "Precipitating", "Perpetuating"].indexOf(p) + 1})</div>
                <ul style={{ margin: 0, paddingLeft: "1.1rem", color: "var(--text-muted)", fontSize: "0.87rem", lineHeight: 1.8 }}>
                  {items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CBT-I Components */}
        <section style={{ maxWidth: "800px", margin: "0 auto 3rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.5rem" }}>
            CBT-I: The Gold Standard Treatment
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
            Cognitive Behavioral Therapy for Insomnia (CBT-I) is a multi-component therapy recommended as first-line treatment by all major sleep medicine organizations. It outperforms sleep medications in long-term outcomes.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
            {cbtComponents.map((c) => (
              <div key={c.name} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "1rem", padding: "1.25rem 1.5rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{ fontSize: "1.6rem", flexShrink: 0 }}>{c.icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.3rem", flexWrap: "wrap", gap: "0.5rem" }}>
                    <span style={{ fontWeight: 700, color: "var(--text-primary)" }}>{c.name} <span style={{ color: "var(--text-muted)", fontWeight: 400, fontSize: "0.85rem" }}>({c.abbr})</span></span>
                    <span style={{
                      fontSize: "0.75rem", fontWeight: 700, padding: "0.15rem 0.6rem", borderRadius: "1rem",
                      background: c.effectiveness === "Very High" ? "rgba(34,211,160,0.15)" : c.effectiveness === "High" ? "rgba(108,99,255,0.15)" : "rgba(245,158,11,0.15)",
                      color: c.effectiveness === "Very High" ? "#22d3a0" : c.effectiveness === "High" ? "var(--accent)" : "#f59e0b",
                    }}>
                      {c.effectiveness} effectiveness
                    </span>
                  </div>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{c.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Digital CBT-I resources */}
        <section style={{ maxWidth: "800px", margin: "0 auto 3rem" }}>
          <div style={{ background: "rgba(108,99,255,0.07)", border: "1px solid rgba(108,99,255,0.2)", borderRadius: "1rem", padding: "1.5rem" }}>
            <h3 style={{ fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.5rem", fontSize: "1.1rem" }}>
              💡 Getting CBT-I Without a Therapist
            </h3>
            <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: 1.7, margin: 0 }}>
              Digital CBT-I programs (dCBT-I) have strong evidence — <strong style={{ color: "var(--text-primary)" }}>Sleepio</strong>, <strong style={{ color: "var(--text-primary)" }}>CBTI Coach</strong> (free app by VA), and <strong style={{ color: "var(--text-primary)" }}>SHUTi</strong> have all been validated in clinical trials. A self-help CBT-I workbook like &quot;Overcoming Insomnia&quot; by Edinger & Carney is also effective. Consult a healthcare provider if you suspect a comorbid condition like sleep apnea or depression.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ maxWidth: "800px", margin: "0 auto 3rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "1.25rem" }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {faqItems.map(({ q, a }) => (
              <div key={q} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "1rem", padding: "1.25rem 1.5rem" }}>
                <h3 style={{ fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.5rem", fontSize: "1rem" }}>{q}</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: 1.7, margin: 0 }}>{a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related */}
        <section style={{ maxWidth: "800px", margin: "0 auto 3rem" }}>
          <h2 style={{ fontSize: "1.3rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "1rem" }}>Related Articles & Tools</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            {[
              { href: "/sleep-hygiene-tips/", label: "Sleep Hygiene Tips" },
              { href: "/sleep-stages/", label: "Sleep Stages Explained" },
              { href: "/circadian-rhythm/", label: "Circadian Rhythm Guide" },
              { href: "/how-much-sleep-do-i-need/", label: "How Much Sleep?" },
              { href: "/faq/", label: "Sleep FAQ" },
              { href: "/", label: "Sleep Calculator" },
            ].map(({ href, label }) => (
              <Link key={href} href={href} style={{ padding: "0.5rem 1rem", background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "2rem", color: "var(--accent)", textDecoration: "none", fontSize: "0.9rem", fontWeight: 500 }}>
                {label}
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center", background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "1.25rem", padding: "2.5rem 2rem" }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.5rem" }}>
            Start with your sleep schedule
          </h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "1.25rem" }}>
            A consistent wake time is a cornerstone of CBT-I. Use our sleep calculator to find your optimal <Link href="/sleep-schedule-builder/" style={{ color: "var(--accent-light)", textDecoration: "underline" }}>sleep schedule</Link>, or first check your <Link href="/sleep-debt-calculator/" style={{ color: "var(--accent-light)", textDecoration: "underline" }}>sleep debt</Link>.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/" style={{ display: "inline-block", padding: "0.85rem 2rem", background: "var(--accent)", color: "#fff", borderRadius: "0.75rem", textDecoration: "none", fontWeight: 700, fontSize: "1rem" }}>
              Sleep Calculator →
            </Link>
            <Link href="/sleep-hygiene-tips/" style={{ display: "inline-block", padding: "0.85rem 2rem", background: "transparent", color: "var(--accent)", border: "2px solid var(--accent)", borderRadius: "0.75rem", textDecoration: "none", fontWeight: 700, fontSize: "1rem" }}>
              Sleep Hygiene Tips →
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
