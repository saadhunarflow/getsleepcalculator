import type { Metadata } from "next";
import { SITE_URL, breadcrumbSchema } from "@/lib/seo";
import Link from "next/link";
import TableOfContents, { TocItem } from "@/app/components/TableOfContents";

export const metadata: Metadata = {
  title: "Circadian Rhythm – What It Is, How It Works & How to Fix It",
  description:
    "Learn what your circadian rhythm is, how the 24-hour internal clock controls sleep and wakefulness, and proven ways to reset and optimize it.",
  alternates: { canonical: `${SITE_URL}/circadian-rhythm/` },
  openGraph: {
    title: "Circadian Rhythm – What It Is, How It Works & How to Fix It",
    description:
      "Your circadian rhythm is a 24-hour internal clock driven by light and melatonin. Learn how it works and how to optimize it for better sleep.",
    url: `${SITE_URL}/circadian-rhythm`,
    type: "article",
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630 }],
  },
};

const faqItems = [
  {
    q: "What is the circadian rhythm?",
    a: "The circadian rhythm is your body's internal 24-hour biological clock that regulates the sleep-wake cycle, hormone release, body temperature, metabolism, and other physiological processes. It's primarily synchronized by light exposure, particularly blue light from sunlight.",
  },
  {
    q: "What controls the circadian rhythm?",
    a: "The circadian rhythm is controlled by the suprachiasmatic nucleus (SCN), a cluster of about 20,000 neurons in the hypothalamus. The SCN receives light signals directly from the retina via the retinohypothalamic tract and uses this information to orchestrate timing signals throughout the body.",
  },
  {
    q: "What happens when your circadian rhythm is disrupted?",
    a: "Circadian disruption can cause insomnia, excessive daytime sleepiness, impaired cognitive function, mood disorders, weakened immune response, metabolic issues, and increased risk of obesity, diabetes, and cardiovascular disease. Shift work and jet lag are common causes of disruption.",
  },
  {
    q: "How long does it take to reset your circadian rhythm?",
    a: "Most people can shift their circadian rhythm by 1–2 hours per day with consistent light exposure timing and schedule changes. A full reset from severe jet lag or shift work may take 5–14 days depending on the magnitude of the shift and consistency of the new schedule.",
  },
  {
    q: "Does melatonin help reset circadian rhythm?",
    a: "Yes. Taking low-dose melatonin (0.5–1 mg) 2–3 hours before your desired bedtime can help shift your circadian rhythm. Melatonin is most effective as a timing signal, not a sedative. High doses (3–10 mg) are not more effective and may cause next-day grogginess.",
  },
  {
    q: "What is circadian rhythm disorder?",
    a: "Circadian rhythm sleep-wake disorders (CRSDs) include Delayed Sleep Phase Disorder (DSPD), Advanced Sleep Phase Disorder (ASPD), Non-24 Sleep-Wake Disorder (common in blind individuals), and Shift Work Disorder. These are conditions where the internal clock is misaligned with the external environment.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Circadian Rhythm – What It Is, How It Works & How to Fix It",
  description:
    "A comprehensive guide to the circadian rhythm: the 24-hour biological clock that controls sleep, hormones, and metabolism.",
  url: `${SITE_URL}/circadian-rhythm`,
  author: { "@type": "Organization", name: "Get Sleep Calculator", url: SITE_URL },
  publisher: { "@type": "Organization", name: "Get Sleep Calculator", url: SITE_URL },
  mainEntityOfPage: `${SITE_URL}/circadian-rhythm`,
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

const timeline = [
  { time: "6:00–7:00 AM", event: "Cortisol surge", detail: "Body temperature rises, blood pressure increases. Ideal wake-up window." },
  { time: "9:00–10:00 AM", event: "Peak alertness", detail: "Short-term memory and cognitive performance peak. Best time for focused work." },
  { time: "12:00–1:00 PM", event: "Midday dip", detail: "Alertness drops slightly. Light meals help avoid post-lunch sluggishness." },
  { time: "1:00–3:00 PM", event: "Nap window", detail: "Natural circadian dip. Ideal 20-min nap window if needed." },
  { time: "3:00–5:00 PM", event: "Reaction time peak", detail: "Best cardiovascular performance, muscle strength, and coordination." },
  { time: "7:00–9:00 PM", event: "Melatonin onset", detail: "Darkness triggers melatonin release. Avoid bright blue light." },
  { time: "10:00 PM–2:00 AM", event: "Deep sleep window", detail: "N3 slow-wave sleep dominates. Growth hormone released. Cell repair occurs." },
  { time: "4:00–6:00 AM", event: "Core temp minimum", detail: "Lowest body temperature. REM sleep peaks. Vivid dreaming is common." },
];

const disruptors = [
  { icon: "💡", name: "Artificial Light at Night", impact: "High", detail: "Blue light from screens suppresses melatonin by up to 3 hours. Use night mode or blue-light glasses after 9 PM." },
  { icon: "✈️", name: "Jet Lag", impact: "High", detail: "Crossing 3+ time zones misaligns your internal clock with local time. Eastward travel is harder than westward." },
  { icon: "🌙", name: "Shift Work", impact: "Very High", detail: "Rotating or night shifts chronically misalign the clock. Associated with 29% higher risk of metabolic syndrome." },
  { icon: "🍺", name: "Alcohol", impact: "Moderate", detail: "Alcohol sedates but fragments sleep architecture, suppresses REM, and disrupts temperature regulation." },
  { icon: "☕", name: "Late Caffeine", impact: "Moderate", detail: "Caffeine blocks adenosine receptors. Half-life is 5–7 hours. Coffee at 3 PM can still affect sleep at 11 PM." },
  { icon: "🍕", name: "Late-Night Eating", impact: "Moderate", detail: "Eating close to bedtime raises core temperature and delays melatonin onset, signaling 'daytime' to your clock." },
];

const resetTips = [
  { step: "1", title: "Get Bright Light in the Morning", detail: "10–30 minutes of direct sunlight within 1 hour of waking is the most powerful circadian anchor. On cloudy days, use a 10,000 lux light therapy box." },
  { step: "2", title: "Keep a Consistent Wake Time", detail: "Your wake time is more important than your bedtime for circadian stability. Even on weekends, vary by no more than 1 hour." },
  { step: "3", title: "Avoid Blue Light After Dark", detail: "Dim your screens 2 hours before bed or use blue-light blocking glasses. Switch to warm (amber/red) lighting in the evening." },
  { step: "4", title: "Use Melatonin Strategically", detail: "0.5–1 mg of melatonin taken 2–3 hours before your desired sleep time can shift your rhythm earlier. Use only for resets, not as a nightly sedative." },
  { step: "5", title: "Eat Meals at Consistent Times", detail: "Peripheral clocks in your gut, liver, and fat cells are entrained by meal timing. Eating at regular times reinforces your central circadian signal." },
  { step: "6", title: "Exercise at the Right Time", detail: "Morning or early afternoon exercise advances the clock (good for night owls). Late evening exercise (after 8 PM) can delay sleep onset by raising body temperature." },
];

export default function CircadianRhythmPage() {

const tocItems: TocItem[] = [
  { id: "what-is", text: "What Is the Circadian Rhythm?", level: 2 },
  { id: "24-hour-timeline", text: "Your Circadian Rhythm: A 24-Hour Timeline", level: 2 },
  { id: "disruptors", text: "What Disrupts Your Circadian Rhythm?", level: 2 },
  { id: "how-to-reset", text: "How to Reset Your Circadian Rhythm", level: 2 },
  { id: "chronotypes", text: "Chronotypes: Why Some People Are Night Owls", level: 2 },
  { id: "faq", text: "Frequently Asked Questions", level: 2 },
];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Circadian Rhythm", href: "/circadian-rhythm" },
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
          <span>Circadian Rhythm</span>
        </nav>

        {/* Hero */}
        <section style={{ maxWidth: "800px", margin: "0 auto 2.5rem" }}>
          <div style={{ display: "inline-block", background: "rgba(108,99,255,0.1)", color: "var(--accent)", fontSize: "0.82rem", fontWeight: 700, padding: "0.3rem 0.85rem", borderRadius: "2rem", marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            Sleep Science
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 800, color: "var(--text-primary)", lineHeight: 1.2, marginBottom: "1rem" }}>
            Circadian Rhythm: Your 24-Hour Biological Clock
          </h1>
          <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: 1.8 }}>
            Every cell in your body runs on a ~24-hour timer. Your circadian rhythm governs when you feel sleepy, when you&apos;re most alert, when hormones peak, and even when your body repairs itself. Understanding it is the foundation of better sleep.
          </p>
          <p style={{ fontSize: "0.8rem", marginTop: "1rem", color: "var(--text-muted)" }}>Last updated: June 2026</p>
        </section>

        {/* Table of Contents */}
        <section style={{ maxWidth: "800px", margin: "0 auto 2rem" }}>
          <TableOfContents items={tocItems} />
        </section>

        {/* What is Circadian Rhythm */}
        <section style={{ maxWidth: "800px", margin: "0 auto 3rem" }}>
          <h2 id="what-is" style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "1rem" }}>
            What Is the Circadian Rhythm?
          </h2>
          <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "0.97rem" }}>
            <p style={{ marginBottom: "1rem" }}>
              The term &quot;circadian&quot; comes from the Latin <em>circa diem</em> — &quot;about a day.&quot; Your circadian rhythm is an internal biological clock that runs on roughly a 24-hour cycle, controlled by a region of the brain called the <strong style={{ color: "var(--text-primary)" }}>suprachiasmatic nucleus (SCN)</strong> in the hypothalamus.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              The SCN receives direct input from photoreceptive cells in your retina — specifically, <strong style={{ color: "var(--text-primary)" }}>intrinsically photosensitive retinal ganglion cells (ipRGCs)</strong> that are particularly sensitive to blue-wavelength light (around 480 nm). This light signal tells your brain &quot;it&apos;s daytime&quot; and suppresses melatonin production from the pineal gland.
            </p>
            <p>
              In 2017, the Nobel Prize in Physiology or Medicine was awarded to Jeffrey Hall, Michael Rosbash, and Michael Young for discovering the molecular mechanisms that control circadian rhythms — validating decades of sleep science research.
            </p>
          </div>
        </section>

        {/* 24-Hour Timeline */}
        <section style={{ maxWidth: "800px", margin: "0 auto 3rem" }}>
          <h2 id="24-hour-timeline" style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "1rem" }}>
            Your Circadian Rhythm: A 24-Hour Timeline
          </h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem", fontSize: "0.95rem" }}>
            Based on an average <Link href="/sleep-schedule-builder/" style={{ color: "var(--accent-light)", textDecoration: "underline" }}>sleep schedule</Link> of 11 PM–7 AM:
          </p>
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", left: "5.5rem", top: 0, bottom: 0, width: "2px", background: "var(--border)" }} />
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {timeline.map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "1.5rem", position: "relative", paddingBottom: "1.25rem" }}>
                  <div style={{ minWidth: "5rem", textAlign: "right", color: "var(--accent)", fontWeight: 700, fontSize: "0.8rem", paddingTop: "0.2rem" }}>
                    {item.time.split("–")[0]}
                  </div>
                  <div style={{ position: "relative" }}>
                    <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "var(--accent)", border: "2px solid var(--bg-primary)", marginTop: "0.3rem", flexShrink: 0 }} />
                  </div>
                  <div style={{ paddingBottom: "0.5rem" }}>
                    <div style={{ fontWeight: 700, color: "var(--text-primary)", fontSize: "0.95rem", marginBottom: "0.15rem" }}>{item.event}</div>
                    <div style={{ color: "var(--text-muted)", fontSize: "0.87rem", lineHeight: 1.5 }}>{item.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Circadian Disruptors */}
        <section style={{ maxWidth: "800px", margin: "0 auto 3rem" }}>
          <h2 id="disruptors" style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "1rem" }}>
            What Disrupts Your Circadian Rhythm?
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem" }}>
            {disruptors.map((d) => (
              <div key={d.name} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "1rem", padding: "1.25rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span style={{ fontSize: "1.4rem" }}>{d.icon}</span>
                    <span style={{ fontWeight: 700, color: "var(--text-primary)", fontSize: "0.95rem" }}>{d.name}</span>
                  </div>
                  <span style={{
                    fontSize: "0.72rem", fontWeight: 700, padding: "0.15rem 0.5rem", borderRadius: "1rem",
                    background: d.impact === "Very High" ? "rgba(248,113,113,0.15)" : d.impact === "High" ? "rgba(251,191,36,0.15)" : "rgba(52,211,153,0.15)",
                    color: d.impact === "Very High" ? "#f87171" : d.impact === "High" ? "#fbbf24" : "#34d399",
                  }}>
                    {d.impact}
                  </span>
                </div>
                <p style={{ color: "var(--text-muted)", fontSize: "0.87rem", lineHeight: 1.6, margin: 0 }}>{d.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How to Reset */}
        <section style={{ maxWidth: "800px", margin: "0 auto 3rem" }}>
          <h2 id="how-to-reset" style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "1rem" }}>
            How to Reset Your Circadian Rhythm
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
            {resetTips.map((tip) => (
              <div key={tip.step} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "1rem", padding: "1.25rem 1.5rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{ minWidth: "2rem", height: "2rem", background: "var(--accent)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: "0.9rem", flexShrink: 0 }}>
                  {tip.step}
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.3rem" }}>{tip.title}</div>
                  <div style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.6 }}>{tip.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Chronotypes */}
        <section style={{ maxWidth: "800px", margin: "0 auto 3rem" }}>
          <h2 id="chronotypes" style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "1rem" }}>
            Chronotypes: Why Some People Are Night Owls
          </h2>
          <p style={{ color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "1rem", fontSize: "0.97rem" }}>
            Not everyone&apos;s circadian rhythm runs at the same phase. Your <Link href="/chronotype-calculator/" style={{ color: "var(--accent-light)", textDecoration: "underline" }}><strong style={{ color: "var(--text-primary)" }}>chronotype</strong></Link> is your genetically influenced tendency toward being a morning person (lark) or evening person (owl). About 40% of people are morning types, 30% evening types, and 30% intermediate.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1rem" }}>
            {[
              { emoji: "🐦", name: "Morning Lark", peak: "Peak: 9 AM–12 PM", sleep: "Bed: 9–10 PM", color: "#f59e0b" },
              { emoji: "🦁", name: "Intermediate", peak: "Peak: 10 AM–2 PM", sleep: "Bed: 11 PM–12 AM", color: "#22d3a0" },
              { emoji: "🦉", name: "Night Owl", peak: "Peak: 12 PM–6 PM", sleep: "Bed: 1–3 AM", color: "#6c63ff" },
            ].map((ct) => (
              <div key={ct.name} style={{ background: "var(--bg-card)", border: `1.5px solid ${ct.color}33`, borderRadius: "1rem", padding: "1.25rem", textAlign: "center" }}>
                <div style={{ fontSize: "2rem", marginBottom: "0.4rem" }}>{ct.emoji}</div>
                <div style={{ fontWeight: 700, color: ct.color, marginBottom: "0.5rem" }}>{ct.name}</div>
                <div style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>{ct.peak}</div>
                <div style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>{ct.sleep}</div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section style={{ maxWidth: "800px", margin: "0 auto 3rem" }}>
          <h2 id="faq" style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "1.25rem" }}>
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

        {/* Related Tools */}
        <section style={{ maxWidth: "800px", margin: "0 auto 3rem" }}>
          <h2 style={{ fontSize: "1.3rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "1rem" }}>Related Tools</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
            {[
              { href: "/sleep-schedule-builder/", icon: "📅", t: "Sleep Schedule Builder", d: "Align your daily schedule to your circadian rhythm" },
              { href: "/chronotype-calculator/", icon: "🦦", t: "Chronotype Calculator", d: "Discover if you're a morning lark or night owl" },
              { href: "/bedtime-calculator/", icon: "🌙", t: "Bedtime Calculator", d: "Find your ideal bedtime based on sleep cycles" },
            ].map((item) => (
              <Link key={item.href} href={item.href}
                style={{ display: "block", background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "1rem", padding: "1.25rem", textDecoration: "none", transition: "transform 0.15s" }}
              >
                <span style={{ fontSize: "1.6rem", display: "block", marginBottom: "0.4rem" }}>{item.icon}</span>
                <p style={{ fontWeight: 700, color: "var(--text-primary)", fontSize: "0.95rem", margin: "0 0 0.25rem" }}>{item.t}</p>
                <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", margin: 0 }}>{item.d}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Related Articles & Tools */}
        <section style={{ maxWidth: "800px", margin: "0 auto 3rem" }}>
          <h2 style={{ fontSize: "1.3rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "1rem" }}>
            Related Articles & Tools
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            {[
              { href: "/sleep-stages/", label: "Sleep Stages Explained" },
              { href: "/sleep-hygiene-tips/", label: "Sleep Hygiene Tips" },
              { href: "/how-much-sleep-do-i-need/", label: "How Much Sleep Do I Need?" },
              { href: "/nap-calculator/", label: "Nap Calculator" },
              { href: "/", label: "Sleep Calculator" },
              { href: "/faq/", label: "Sleep FAQ" },
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
            Align your sleep with your circadian rhythm
          </h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "1.25rem" }}>
            Use our sleep calculator to find the ideal bedtime or wake-up time based on complete 90-minute sleep cycles, or follow our <Link href="/blog/how-to-fix-sleep-schedule/" style={{ color: "var(--accent-light)", textDecoration: "underline" }}>7-day guide to fix your sleep schedule</Link>.
          </p>
          <Link href="/" style={{ display: "inline-block", padding: "0.85rem 2rem", background: "var(--accent)", color: "#fff", borderRadius: "0.75rem", textDecoration: "none", fontWeight: 700, fontSize: "1rem" }}>
            Calculate My Sleep Cycles →
          </Link>
        </section>
      </main>
    </>
  );
}
