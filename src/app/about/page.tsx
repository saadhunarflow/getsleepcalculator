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
  description: "Free science-based sleep calculator tools helping people find their ideal bedtime and wake-up time.",
  logo: "https://getsleepcalculator.net/og-image.png",
  contactPoint: { "@type": "ContactPoint", contactType: "customer support", url: "https://getsleepcalculator.net/contact" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Is Get Sleep Calculator free?", acceptedAnswer: { "@type": "Answer", text: "Yes — all 13 tools are completely free, no signup required, no premium tiers." } },
    { "@type": "Question", name: "How accurate is the sleep calculator?", acceptedAnswer: { "@type": "Answer", text: "The calculator uses the NSF-standard 90-minute cycle length and 14-minute average sleep latency. Individual results may vary." } },
    { "@type": "Question", name: "Who created Get Sleep Calculator?", acceptedAnswer: { "@type": "Answer", text: "Get Sleep Calculator was built by a software developer based in Pakistan. All content is based on peer-reviewed research from NSF, CDC, and AASM." } },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section style={{ background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(108,99,255,0.15) 0%, transparent 70%), var(--bg-primary)", paddingTop: "3.5rem", paddingBottom: "3.5rem" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <nav className="text-xs mb-6" style={{ color: "var(--text-muted)" }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span style={{ color: "var(--accent-light)" }}>About</span>
          </nav>
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-6 tracking-tight" style={{ color: "var(--text-primary)" }}>About Get Sleep Calculator</h1>
          <p className="text-lg sm:text-xl leading-relaxed max-w-2xl font-medium" style={{ color: "var(--text-muted)" }}>
            A free, science-backed sleep tool built by a developer who was tired of waking up exhausted — and decided to do something about it.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="space-y-14">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-5" style={{ color: "var(--text-primary)" }}>Why I Built This</h2>
            <div className="space-y-4 text-base sm:text-lg leading-loose" style={{ color: "var(--text-muted)" }}>
              <p>I&apos;m a software developer based in Pakistan. A few years ago, I was struggling with something that millions of people deal with silently: waking up completely drained despite sleeping a reasonable number of hours. Nine hours one night, feel groggy. Six hours another, feel worse. Nothing worked consistently.</p>
              <p>So I did what developers do — I researched the problem. I spent weeks reading academic papers, sleep lab findings, and public health guidelines. What I found changed everything. The issue was not just the <em>number</em> of hours slept. It was the <em>timing</em> within my sleep cycle. Human sleep moves through 90-minute cycles of light sleep, deep sleep, and REM. If your alarm fires mid-cycle — especially during deep sleep — you get hit with sleep inertia lasting up to an hour. But if your alarm fires at the end of a complete cycle, you wake naturally from light sleep and feel genuinely refreshed.</p>
              <p>I started calculating my bedtimes manually — working backwards from my wake-up time in 90-minute blocks, adding 14 minutes for the average sleep onset time. It worked. I started waking up feeling like a different person. But the manual math was tedious every night. I searched for a tool to do it for me and found only ad-laden, paywalled apps requiring accounts to answer a simple question.</p>
              <p>That frustration became this site. GetSleepCalculator.net started as a personal project over a weekend in Pakistan, turned into something I wanted to share globally. It grew from one calculator to 13 free tools, and will stay completely free — no ads on calculator results, no account required.</p>
            </div>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-5" style={{ color: "var(--text-primary)" }}>Our Mission</h2>
            <p className="text-base sm:text-lg leading-loose mb-4" style={{ color: "var(--text-muted)" }}>The mission is simple: make sleep science accessible and free for everyone. Sleep is one of the most researched areas of human health, yet most people have never been taught how their sleep actually works. Most tools that could help are locked behind subscriptions or buried in ads. That should not be the case.</p>
            <p className="text-base sm:text-lg leading-loose" style={{ color: "var(--text-muted)" }}>All 13 tools are entirely free — no account required, no credit card, no premium tier. That is a permanent commitment. Sleep science should be available to a student in Karachi the same way it is to an executive in New York.</p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-5" style={{ color: "var(--text-primary)" }}>How We Ensure Accuracy</h2>
            <div className="space-y-4 text-base sm:text-lg leading-loose" style={{ color: "var(--text-muted)" }}>
              <p>Every calculation on this site is grounded in the same research that sleep labs use. Our methodology relies on three primary sources: the <a href="https://www.thensf.org" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent-light)", textDecoration: "underline" }}>National Sleep Foundation (NSF)</a>, the Centers for Disease Control and Prevention (CDC), and the American Academy of Sleep Medicine (AASM). These organizations publish the consensus guidelines that doctors and sleep researchers use worldwide.</p>
              <p>Our core calculation methodology: take your target wake time, subtract 14 minutes (the NSF-documented average sleep latency), then count backward in 90-minute increments. Each result is a natural cycle boundary — the point where sleep is lightest and waking feels easiest. We review and update content when new guidelines are published.</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-5" style={{ color: "var(--text-primary)" }}>What Makes This Different</h2>
            <p className="text-base sm:text-lg leading-loose mb-6" style={{ color: "var(--text-muted)" }}>There are plenty of sleep apps. Here is what sets Get Sleep Calculator apart:</p>
            <ul className="space-y-4">
              {[
                { icon: "🧰", t: "13 free sleep tools in one place", d: "Bedtime, wake-up, nap, sleep debt, sleep cycles, REM, chronotype, jet lag, schedule builder, and more — all under one roof." },
                { icon: "👶", t: "Age-specific recommendations (NSF guidelines)", d: "Our calculators for kids, babies, and adults use NSF age-group sleep recommendations — not a one-size-fits-all number." },
                { icon: "🚫", t: "No ads on calculator results", d: "The results pages are clean. No banners, no pop-ups, no promoted content interrupting your sleep data." },
                { icon: "🔓", t: "No account required", d: "Open the calculator, enter your time, get your results. No registration form, no email verification, no password." },
                { icon: "📱", t: "Mobile-friendly, instant results", d: "Every tool works on any device — phone, tablet, or desktop — and results appear instantly with no loading spinner." },
              ].map((item) => (
                <li key={item.t} className="flex gap-4 items-start rounded-2xl p-5" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
                  <span className="text-2xl shrink-0 mt-0.5">{item.icon}</span>
                  <div>
                    <p className="font-bold text-base mb-1" style={{ color: "var(--text-primary)" }}>{item.t}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{item.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-5" style={{ color: "var(--text-primary)" }}>The Science Behind Sleep Cycles</h2>
            <div className="space-y-4 text-base sm:text-lg leading-loose" style={{ color: "var(--text-muted)" }}>
              <p>Sleep is not one continuous state. Each night, your brain cycles through four distinct stages: NREM Stage 1 (light sleep, lasting a few minutes), NREM Stage 2 (core sleep, the largest portion of each cycle), NREM Stage 3 (deep slow-wave sleep, most physically restorative), and REM sleep (where most dreaming and memory consolidation happen). One complete pass through all four stages takes approximately 90 minutes — and this repeats 4 to 6 times per night.</p>
              <p>Two things make cycle alignment so important. First, deep sleep (NREM Stage 3) is hardest to wake from — forcing yourself awake during this stage triggers sleep inertia that can impair cognitive function for up to 90 minutes. Second, REM sleep is concentrated in later cycles, so people who consistently cut their sleep short are disproportionately losing the most cognitively valuable part of their night. By timing your alarm to a cycle boundary — where sleep is lightest, right after REM — you wake naturally and feel energized, regardless of whether you got 6 or 9 hours total.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--bg-card)", borderTop: "1px solid var(--border)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <div className="rounded-2xl p-6 text-sm leading-relaxed" style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.2)", color: "var(--text-muted)" }}>
            <strong style={{ color: "#f59e0b" }}>⚠️ Medical Disclaimer: </strong>
            The tools and content on GetSleepCalculator.net are for informational and educational purposes only. They are not a substitute for professional medical advice, diagnosis, or treatment. If you have persistent sleep problems, please consult a qualified healthcare provider or sleep specialist.
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <div className="rounded-3xl p-10 text-center" style={{ background: "linear-gradient(135deg, rgba(108,99,255,0.2), rgba(167,139,250,0.1))", border: "1px solid rgba(108,99,255,0.3)" }}>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>Questions or Feedback?</h2>
          <p className="text-base sm:text-lg mb-8 max-w-xl mx-auto" style={{ color: "var(--text-muted)" }}>If you have a suggestion, found a bug, or want to share how the calculator helped you — I would love to hear it.</p>
          <Link href="/contact/" className="inline-block px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-all text-lg shadow-lg" style={{ background: "var(--accent)", color: "#fff" }}>Get in Touch →</Link>
        </div>
      </section>
    </>
  );
}
