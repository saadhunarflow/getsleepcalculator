import type { Metadata } from "next";
import { SITE_URL, breadcrumbSchema } from "@/lib/seo";
import NapCalculator from "@/app/components/NapCalculator";
import NapContent from "@/app/components/NapContent";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nap Calculator – Best Nap Duration & Ideal Wake-Up Time",
  description:
    "Use our free nap calculator to find the perfect nap length. Power nap (20 min), short nap (30 min), or full cycle (90 min) — wake up refreshed, not groggy.",
  alternates: { canonical: `${SITE_URL}/nap-calculator/` },
  openGraph: {
    title: "Nap Calculator – Best Nap Duration & Ideal Wake-Up Time",
    description:
      "Find your perfect nap length and exact wake-up time. Based on sleep science — avoid sleep inertia and wake up refreshed.",
    url: `${SITE_URL}/nap-calculator`,
    type: "website",
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630 }],
  },
};

const faqItems = [
  {
    q: "How long should a nap be?",
    a: "The ideal nap length depends on your goal. A 10–20 minute power nap boosts alertness without grogginess. A 30-minute nap enhances creativity. A 90-minute full cycle nap includes REM sleep and is best for memory consolidation. Avoid 45–60 minute naps as you may wake during deep sleep (N3), causing sleep inertia.",
  },
  {
    q: "What is sleep inertia and how do I avoid it?",
    a: "Sleep inertia is the groggy, disoriented feeling you get when waking from deep sleep (N3). To avoid it, keep naps under 30 minutes or do a full 90-minute cycle. You can also try a 'coffee nap' — drink coffee right before napping, so caffeine kicks in as you wake up 20 minutes later.",
  },
  {
    q: "What is the best time of day to nap?",
    a: "The ideal nap window is between 1:00 PM and 3:00 PM. This aligns with a natural dip in your circadian rhythm (post-lunch alertness drop). Napping after 3–4 PM can interfere with your nighttime sleep.",
  },
  {
    q: "What is a power nap?",
    a: "A power nap is a short 15–20 minute nap that keeps you in light sleep stages (N1 and N2). It boosts alertness, motor performance, and mood without causing sleep inertia, making it the most popular nap type for productivity.",
  },
  {
    q: "Can napping replace lost sleep?",
    a: "Napping can partially offset sleep debt but cannot fully replace a complete night's sleep. A 90-minute nap that includes REM sleep can help with memory and emotional processing, but chronic sleep deprivation still accumulates and requires multiple full nights to recover.",
  },
  {
    q: "What is a coffee nap?",
    a: "A coffee nap involves drinking a cup of coffee and immediately taking a 20-minute nap. Caffeine takes about 20–30 minutes to kick in, so you wake up just as it starts working — combining two alertness boosts. Studies show this is more effective than either coffee or napping alone.",
  },
];

const napTypes = [
  {
    name: "Micro Nap",
    duration: "5–10 min",
    stages: "N1 only",
    best: "Quick alertness reset",
    risk: "Minimal",
    color: "#22d3a0",
  },
  {
    name: "Power Nap",
    duration: "15–20 min",
    stages: "N1–N2",
    best: "Productivity & motor skills",
    risk: "Low (avoid deep sleep)",
    color: "#6c63ff",
  },
  {
    name: "Short Nap",
    duration: "30 min",
    stages: "N1–N2",
    best: "Creativity & memory",
    risk: "Low-moderate",
    color: "#a78bfa",
  },
  {
    name: "Full Cycle Nap",
    duration: "90 min",
    stages: "N1→N2→N3→REM",
    best: "Deep rest & REM benefits",
    risk: "Low if complete cycle",
    color: "#f59e0b",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const toolSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Nap Calculator",
  description:
    "Free nap calculator that tells you the best nap duration and ideal wake-up time based on sleep science.",
  url: `${SITE_URL}/nap-calculator`,
  applicationCategory: "HealthApplication",
  operatingSystem: "Any",
  isAccessibleForFree: true,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default function NapCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Nap Calculator", href: "/nap-calculator" },
        ])) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }}
      />

      <main style={{ padding: "2rem 1rem 4rem" }}>
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" style={{ maxWidth: "800px", margin: "0 auto 1.5rem", fontSize: "0.88rem", color: "var(--text-muted)" }}>
          <Link href="/" style={{ color: "var(--accent)", textDecoration: "none" }}>Home</Link>
          <span style={{ margin: "0 0.4rem" }}>›</span>
          <span>Nap Calculator</span>
        </nav>

        {/* Hero */}
        <section style={{ maxWidth: "800px", margin: "0 auto 2.5rem", textAlign: "center" }}>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 800, color: "var(--text-primary)", lineHeight: 1.2, marginBottom: "0.75rem" }}>
            Nap Calculator
          </h1>
          <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", maxWidth: "560px", margin: "0 auto" }}>
            Find the perfect nap length and exact wake-up time. Wake up refreshed — not groggy.
          </p>
        </section>

        {/* Calculator */}
        <section style={{ maxWidth: "800px", margin: "0 auto 3rem" }}>
          <NapCalculator />
        </section>

        {/* Nap Types Reference Table */}
        <section style={{ maxWidth: "800px", margin: "0 auto 3rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "1rem" }}>
            Nap Duration Comparison
          </h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid var(--border)" }}>
                  {["Nap Type", "Duration", "Sleep Stages", "Best For", "Sleep Inertia Risk"].map((h) => (
                    <th key={h} style={{ padding: "0.75rem 1rem", textAlign: "left", color: "var(--text-muted)", fontWeight: 600, whiteSpace: "nowrap" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {napTypes.map((row, i) => (
                  <tr key={row.name} style={{ borderBottom: "1px solid var(--border)", background: i % 2 === 0 ? "transparent" : "rgba(108,99,255,0.03)" }}>
                    <td style={{ padding: "0.75rem 1rem", fontWeight: 700, color: row.color }}>{row.name}</td>
                    <td style={{ padding: "0.75rem 1rem", color: "var(--text-primary)" }}>{row.duration}</td>
                    <td style={{ padding: "0.75rem 1rem", color: "var(--text-muted)", fontFamily: "monospace" }}>{row.stages}</td>
                    <td style={{ padding: "0.75rem 1rem", color: "var(--text-primary)" }}>{row.best}</td>
                    <td style={{ padding: "0.75rem 1rem", color: "var(--text-muted)" }}>{row.risk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ color: "var(--text-muted)", fontSize: "0.82rem", marginTop: "0.5rem" }}>
            Avoid napping for 45–60 minutes — you may wake up mid-deep-sleep, causing the worst sleep inertia.
          </p>
        </section>

        {/* Science Section */}
        <section style={{ maxWidth: "800px", margin: "0 auto 3rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "1rem" }}>
            The Science of Napping
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
            {[
              { icon: "🧠", title: "Memory Consolidation", text: "A 90-min nap with REM sleep has been shown to improve declarative memory by up to 30% — equivalent to a full night's sleep for learning retention." },
              { icon: "⚡", title: "Alertness & Performance", text: "NASA pilots who took 26-minute naps showed 34% improvement in alertness and 16% better performance compared to non-napping controls." },
              { icon: "😴", title: "Why 20 Min Works Best", text: "At 20 minutes you're still in N2 (light sleep). Your brain gets restorative rest without entering N3 (deep sleep), so you wake up alert, not groggy." },
              { icon: "☕", title: "The Coffee Nap", text: "Caffeine takes 20–30 min to absorb. Drink coffee, sleep 20 min, wake up to a double alertness boost — rated more effective than either alone in studies." },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: "1rem",
                  padding: "1.25rem",
                }}
              >
                <div style={{ fontSize: "1.8rem", marginBottom: "0.5rem" }}>{card.icon}</div>
                <h3 style={{ fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.4rem", fontSize: "1rem" }}>{card.title}</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", lineHeight: 1.6 }}>{card.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SEO Long-Form Content */}
        <NapContent />

        {/* Related Guides */}
        <section className="max-w-3xl mx-auto px-4 pb-8">
          <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>Related Guides</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { href: "/blog/sleep-deprivation-effects/", title: "What Happens After One Sleepless Night", desc: "The hour-by-hour science of what sleep deprivation does to your brain and body." },
              { href: "/blog/best-time-to-wake-up/", title: "The Best Time to Wake Up According to Sleep Science", desc: "Use sleep cycles to find your optimal wake-up time and avoid post-nap grogginess." },
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

        {/* FAQ */}
        <section style={{ maxWidth: "800px", margin: "0 auto 3rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "1.25rem" }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {faqItems.map(({ q, a }) => (
              <div
                key={q}
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: "1rem",
                  padding: "1.25rem 1.5rem",
                }}
              >
                <h3 style={{ fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.5rem", fontSize: "1rem" }}>{q}</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: 1.7, margin: 0 }}>{a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Tools */}
        <section style={{ maxWidth: "800px", margin: "0 auto 3rem" }}>
          <h2 style={{ fontSize: "1.3rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "1rem" }}>
            Related Sleep Tools
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            {[
              { href: "/", label: "Sleep Calculator" },
              { href: "/bedtime-calculator/", label: "Bedtime Calculator" },
              { href: "/wake-up-time-calculator/", label: "Wake-Up Calculator" },
              { href: "/how-much-sleep-do-i-need/", label: "How Much Sleep?" },
              { href: "/sleep-stages/", label: "Sleep Stages" },
              { href: "/sleep-hygiene-tips/", label: "Sleep Hygiene Tips" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                style={{
                  padding: "0.5rem 1rem",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: "2rem",
                  color: "var(--accent)",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  transition: "border-color 0.2s",
                }}
              >
                {label}
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            textAlign: "center",
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            borderRadius: "1.25rem",
            padding: "2.5rem 2rem",
          }}
        >
          <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.5rem" }}>
            Need to fix your full sleep schedule?
          </h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "1.25rem" }}>
            Use our main sleep calculator to find the optimal bedtime or wake-up time based on complete sleep cycles.
          </p>
          <Link
            href="/"
            style={{
              display: "inline-block",
              padding: "0.85rem 2rem",
              background: "var(--accent)",
              color: "#fff",
              borderRadius: "0.75rem",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "1rem",
            }}
          >
            Try Sleep Calculator →
          </Link>
        </section>
      </main>
    </>
  );
}
