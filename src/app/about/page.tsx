import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About – Get Sleep Calculator",
  description:
    "GetSleepCalculator.net provides free, science-based sleep tools — bedtime calculator, nap calculator, sleep debt tracker, and more — built on peer-reviewed sleep research.",
  alternates: { canonical: "https://getsleepcalculator.net/about/" },
  openGraph: {
    title: "About – Get Sleep Calculator",
    description: "GetSleepCalculator.net provides free, science-based sleep tools — bedtime calculator, nap calculator, sleep debt tracker, and more — built on peer-reviewed sleep research.",
    url: "https://getsleepcalculator.net/about/",
    images: [{ url: "https://getsleepcalculator.net/og-image.png", width: 1200, height: 630 }],
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Get Sleep Calculator",
  url: "https://getsleepcalculator.net",
  description:
    "Free science-based sleep calculator tools helping people find their ideal bedtime and wake-up time based on natural 90-minute sleep cycles.",
  logo: "https://getsleepcalculator.net/og-image.png",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    url: "https://getsleepcalculator.net/contact",
  },
};

const tools = [
  { href: "/bedtime-calculator/", icon: "🛏️", title: "Bedtime Calculator", desc: "Find the perfect bedtime from your wake-up time" },
  { href: "/wake-up-time-calculator/", icon: "⏰", title: "Wake-Up Calculator", desc: "Find the best wake-up time from your bedtime" },
  { href: "/nap-calculator/", icon: "😴", title: "Nap Calculator", desc: "Power nap and full-cycle nap timing" },
  { href: "/sleep-debt-calculator/", icon: "📊", title: "Sleep Debt Calculator", desc: "Track your weekly accumulated sleep debt" },
  { href: "/sleep-cycle-calculator/", icon: "🔄", title: "Sleep Cycle Calculator", desc: "Visualize your full sleep architecture" },
  { href: "/chronotype-calculator/", icon: "🦁", title: "Chronotype Calculator", desc: "Discover if you are a Lion, Bear, Wolf, or Dolphin" },
];

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }} />

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
            <span style={{ color: "var(--accent-light)" }}>About</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: "var(--text-primary)" }}>
            About GetSleepCalculator.net
          </h1>
          <p className="text-base leading-relaxed max-w-2xl" style={{ color: "var(--text-muted)" }}>
            We build free, science-based sleep tools to help people understand their sleep and wake up feeling
            genuinely refreshed — not just &quot;rested enough.&quot;
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid sm:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>Our Mission</h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
              Sleep is the single most important factor in physical health, cognitive performance, and emotional
              wellbeing — yet most people have never been taught the basic science of how sleep works.
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
              <strong style={{ color: "var(--text-primary)" }}>GetSleepCalculator.net</strong> exists to close
              that gap. Every tool on this site is built on peer-reviewed research from the{" "}
              <strong style={{ color: "var(--text-primary)" }}>National Sleep Foundation (NSF)</strong>,
              the <strong style={{ color: "var(--text-primary)" }}>American Academy of Sleep Medicine (AASM)</strong>,
              and leading sleep researchers including Matthew Walker and Dr. Russell Foster.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Our tools are 100% free, require no signup, and process all calculations locally in your browser —
              your data never leaves your device.
            </p>
          </div>
          <div className="rounded-3xl p-8 text-center"
            style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
            <div className="text-5xl mb-4">🌙</div>
            <p className="text-3xl font-extrabold mb-1" style={{ color: "var(--accent-light)" }}>90 min</p>
            <p className="text-sm mb-4" style={{ color: "var(--text-muted)" }}>The science behind every tool</p>
            <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
              All our calculators are built around the 90-minute sleep cycle — the fundamental unit of human sleep
              architecture, consistent across all research since Nathaniel Kleitman&apos;s 1953 discovery of REM sleep.
            </p>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section style={{ background: "var(--bg-card)", borderTop: "1px solid var(--border)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
          <h2 className="text-2xl font-bold mb-8" style={{ color: "var(--text-primary)" }}>How Our Tools Work</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: "🔬", t: "Science-Based", d: "Every recommendation is grounded in peer-reviewed sleep research. We cite our sources and update content when new findings emerge." },
              { icon: "🔒", t: "Privacy First", d: "All calculations happen in your browser. We don't store, sell, or process any personal data. What you enter stays on your device." },
              { icon: "✅", t: "Accuracy", d: "Our calculators use the 90-minute cycle standard + 14-minute sleep onset average, consistent with NSF and AASM guidelines." },
            ].map((item) => (
              <div key={item.t} className="rounded-2xl p-5"
                style={{ background: "var(--bg-primary)", border: "1px solid var(--border)" }}>
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold mb-2 text-sm" style={{ color: "var(--text-primary)" }}>{item.t}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools overview */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
        <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>Our Tools</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {tools.map((tool) => (
            <Link key={tool.href} href={tool.href}
              className="rounded-2xl p-5 flex gap-4 hover:scale-[1.01] transition-all"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
              <span className="text-3xl shrink-0">{tool.icon}</span>
              <div>
                <p className="font-semibold text-sm mb-1" style={{ color: "var(--text-primary)" }}>{tool.title}</p>
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>{tool.desc}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link href="/" className="text-sm underline" style={{ color: "var(--accent-light)" }}>
            View all sleep tools →
          </Link>
        </div>
      </section>

      {/* Disclaimer */}
      <section style={{ background: "var(--bg-card)", borderTop: "1px solid var(--border)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <div className="rounded-2xl p-5 text-xs leading-relaxed"
            style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.2)", color: "var(--text-muted)" }}>
            <strong style={{ color: "#f59e0b" }}>⚠️ Medical Disclaimer: </strong>
            The tools and content on GetSleepCalculator.net are for informational and educational purposes only.
            They are not a substitute for professional medical advice, diagnosis, or treatment. If you have
            persistent sleep problems, please consult a qualified healthcare provider or sleep specialist.
            Conditions like sleep apnea, insomnia disorder, and narcolepsy require clinical evaluation.
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
        <div className="rounded-3xl p-8 text-center"
          style={{ background: "linear-gradient(135deg, rgba(108,99,255,0.2), rgba(167,139,250,0.1))", border: "1px solid rgba(108,99,255,0.3)" }}>
          <h2 className="text-xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>Questions or Feedback?</h2>
          <p className="text-sm mb-6" style={{ color: "var(--text-muted)" }}>
            We welcome feedback, corrections, and feature suggestions.
          </p>
          <Link href="/contact/" className="px-8 py-3 rounded-xl font-bold hover:opacity-90 transition-all"
            style={{ background: "var(--accent)", color: "#fff" }}>
            Contact Us →
          </Link>
        </div>
      </section>
    </>
  );
}
