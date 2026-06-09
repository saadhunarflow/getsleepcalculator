import type { Metadata } from "next";
import SleepCalculator from "./components/SleepCalculator";
import SEOContent from "./components/SEOContent";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sleep Calculator – Best Bedtime & Wake-Up Time Calculator",
  description:
    "Find your perfect bedtime in seconds. Based on 90-minute sleep cycles — the same science sleep labs use. Free sleep calculator, no signup required.",
  alternates: { canonical: "https://getsleepcalculator.net/" },
  openGraph: {
    title: "Sleep Calculator – Best Bedtime & Wake-Up Time Calculator",
    description:
      "Find your perfect bedtime in seconds. Based on 90-minute sleep cycles — the same science sleep labs use. Free sleep calculator, no signup required.",
    url: "https://getsleepcalculator.net/",
    siteName: "Get Sleep Calculator",
    type: "website",
    images: [{ url: "https://getsleepcalculator.net/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sleep Calculator – Best Bedtime & Wake-Up Time Calculator",
    description:
      "Find your perfect bedtime in seconds. Based on 90-minute sleep cycles — the same science sleep labs use. Free sleep calculator, no signup required.",
  },
};

const schemaWebApp = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Sleep Calculator",
  url: "https://getsleepcalculator.net",
  applicationCategory: "HealthApplication",
  description:
    "Calculate the best bedtime or wake-up time based on natural 90-minute sleep cycles.",
  operatingSystem: "All",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How many sleep cycles should I get per night?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most adults do best with 5 complete sleep cycles per night, which works out to 7.5 hours of sleep (not counting the time to fall asleep). Four cycles (6 hours) is often enough for some people but leaves others running a sleep deficit. Six cycles (9 hours) is ideal if you are recovering from illness, intense exercise, or accumulated sleep debt.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if I wake up in the middle of a sleep cycle?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Waking up mid-cycle — particularly during Stage 3 deep sleep — causes sleep inertia, which is that heavy, foggy feeling that can last anywhere from a few minutes to over an hour. This is why some people feel terrible after 8 hours of sleep if their alarm fires at the wrong moment. Timing your alarm to the end of a cycle avoids this.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use a sleep calculator for naps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Naps follow the same cycle logic. A 20-minute nap keeps you in Stage 1 and 2 (light sleep), which is easier to wake from and does not cause grogginess. A 90-minute nap completes one full cycle, including deep sleep and REM, and is genuinely restorative. Naps between 30 and 60 minutes tend to cause the most grogginess because you wake up mid-cycle.",
      },
    },
    {
      "@type": "Question",
      name: "Does everyone have a 90-minute sleep cycle?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The 90-minute figure is an average. Individual cycle lengths range from about 80 to 100 minutes. Early cycles are often slightly shorter, later ones slightly longer. For most people, 90 minutes is close enough that using it as a baseline gives useful results.",
      },
    },
    {
      "@type": "Question",
      name: "Is 6 hours of sleep enough for adults?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For most adults, 6 hours is consistently less than the body needs. Research shows that people sleeping 6 hours a night for two weeks accumulate the same cognitive impairment as going completely without sleep for 24 hours. A small percentage of the population (roughly 1–3%) genuinely thrives on 6 hours due to a genetic variant, but it is rare.",
      },
    },
    {
      "@type": "Question",
      name: "What is sleep debt and can you pay it back?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sleep debt is the accumulated difference between how much sleep you needed and how much you got. You can recover from short-term sleep debt by sleeping longer over the following days. Chronic, long-term sleep debt is harder to fully reverse. The best approach is to prevent debt from accumulating rather than trying to pay it back in bulk.",
      },
    },
  ],
};

const tools = [
  { href: "/bedtime-calculator/",        icon: "🛏️", title: "Bedtime Calculator",        desc: "What time should I go to bed?" },
  { href: "/wake-up-time-calculator/",    icon: "⏰", title: "Wake-Up Calculator",         desc: "What time should I wake up?" },
  { href: "/nap-calculator/",             icon: "😴", title: "Nap Calculator",             desc: "Perfect power nap timing" },
  { href: "/sleep-debt-calculator/",      icon: "💳", title: "Sleep Debt Calculator",      desc: "Track your weekly sleep debt" },
  { href: "/jet-lag-calculator/",         icon: "✈️", title: "Jet Lag Calculator",         desc: "Adjust your schedule after travel" },
  { href: "/rem-sleep-calculator/",       icon: "🧠", title: "REM Sleep Calculator",       desc: "Optimize your REM sleep" },
  { href: "/sleep-cycle-calculator/",     icon: "🔄", title: "Sleep Cycle Calculator",     desc: "Visualize your sleep cycles" },
  { href: "/chronotype-calculator/",      icon: "🦉", title: "Chronotype Calculator",      desc: "Are you a Lion, Bear, or Wolf?" },
  { href: "/sleep-schedule-builder/",     icon: "📅", title: "Sleep Schedule Builder",     desc: "Build your weekly sleep plan" },
  { href: "/how-much-sleep-did-i-get/",   icon: "📊", title: "How Much Sleep Did I Get?",  desc: "Calculate your exact sleep duration" },
  { href: "/sleep-calculator-by-age/",    icon: "👤", title: "Sleep Calculator by Age",   desc: "Sleep needs by age group" },
  { href: "/baby-sleep-calculator/",      icon: "👶", title: "Baby Sleep Calculator",     desc: "Sleep guide for babies 0–3 years" },
  { href: "/sleep-calculator-for-kids/",  icon: "🧒", title: "Sleep Calculator for Kids", desc: "Ideal bedtime for school-age kids" },
];

const facts = [
  { icon: "🔬", value: "90 min", label: "Avg sleep cycle length" },
  { icon: "⏱️", value: "14 min", label: "Avg time to fall asleep" },
  { icon: "🔁", value: "5 cycles", label: "Ideal cycles per night" },
  { icon: "💤", value: "7.5h", label: "Recommended sleep time" },
];

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebApp) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      {/* Hero */}
      <section
        className="relative overflow-hidden stars-bg"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(108,99,255,0.18) 0%, transparent 70%), var(--bg-primary)",
          paddingTop: "4rem",
          paddingBottom: "4rem",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6"
            style={{
              background: "rgba(108,99,255,0.15)",
              border: "1px solid rgba(108,99,255,0.3)",
              color: "var(--accent-light)",
            }}
          >
            🌙 Science-based · Free · No signup required
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Sleep Calculator — Find Your Perfect Bedtime &amp; Wake-Up Time
          </h1>

          <p
            className="text-base sm:text-lg max-w-xl mx-auto mb-10"
            style={{ color: "var(--text-muted)" }}
          >
            Find the perfect bedtime or wake-up time based on your natural{" "}
            <strong style={{ color: "var(--text-primary)" }}>
              90-minute sleep cycles
            </strong>
            . Stop waking up groggy — wake up at the right moment.
          </p>

          <SleepCalculator />
        </div>
      </section>

      {/* Stats Bar */}
      <section
        style={{
          background: "var(--bg-card)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {facts.map((f) => (
              <div key={f.label} className="text-center">
                <div className="text-2xl mb-1">{f.icon}</div>
                <div
                  className="text-xl font-bold"
                  style={{ color: "var(--accent-light)" }}
                >
                  {f.value}
                </div>
                <div className="text-xs" style={{ color: "var(--text-muted)" }}>
                  {f.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals Bar */}
      <section
        style={{
          background: "rgba(34,211,160,0.06)",
          borderTop: "1px solid rgba(34,211,160,0.2)",
          borderBottom: "1px solid rgba(34,211,160,0.2)",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs" style={{ color: "var(--text-muted)" }}>
            <span className="flex items-center gap-1.5">
              <span style={{ color: "#22d3a0" }}>✓</span>
              <strong style={{ color: "var(--text-secondary)" }}>NSF Guidelines</strong> — Based on National Sleep Foundation research
            </span>
            <span style={{ color: "var(--border)" }}>|</span>
            <span className="flex items-center gap-1.5">
              <span style={{ color: "#22d3a0" }}>✓</span>
              <strong style={{ color: "var(--text-secondary)" }}>AASM Standards</strong> — American Academy of Sleep Medicine
            </span>
            <span style={{ color: "var(--border)" }}>|</span>
            <span className="flex items-center gap-1.5">
              <span style={{ color: "#22d3a0" }}>✓</span>
              <strong style={{ color: "var(--text-secondary)" }}>Evidence-Based</strong> — Peer-reviewed sleep science
            </span>
            <span style={{ color: "var(--border)" }}>|</span>
            <span className="flex items-center gap-1.5">
              <span style={{ color: "#22d3a0" }}>✓</span>
              <strong style={{ color: "var(--text-secondary)" }}>Free Forever</strong> — no sign-up
            </span>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <h2
          className="text-2xl sm:text-3xl font-bold text-center mb-2"
          style={{ color: "var(--text-primary)" }}
        >
          How Does the Sleep Calculator Work?
        </h2>
        <p
          className="text-center mb-10 text-sm"
          style={{ color: "var(--text-muted)" }}
        >
          Based on decades of sleep science research
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              step: "1",
              icon: "⏰",
              title: "Enter Your Time",
              desc: "Tell us when you need to wake up — or when you plan to go to bed.",
            },
            {
              step: "2",
              icon: "🔬",
              title: "We Calculate Cycles",
              desc: "Our algorithm works in 90-min sleep cycles plus 14 min to fall asleep.",
            },
            {
              step: "3",
              icon: "✨",
              title: "Wake Up Refreshed",
              desc: "Choose a recommended time to complete full cycles and avoid grogginess.",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="rounded-2xl p-6 text-center"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
              }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-4"
                style={{ background: "var(--accent)", color: "#fff" }}
              >
                {item.step}
              </div>
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3
                className="font-bold mb-2"
                style={{ color: "var(--text-primary)" }}
              >
                {item.title}
              </h3>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* All Tools */}
      <section
        id="all-tools"
        style={{
          background: "var(--bg-card)",
          borderTop: "1px solid var(--border)",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <h2
            className="text-2xl sm:text-3xl font-bold text-center mb-2"
            style={{ color: "var(--text-primary)" }}
          >
            Free Sleep Calculator Tools
          </h2>
          <p
            className="text-center mb-10 text-sm"
            style={{ color: "var(--text-muted)" }}
          >
            Every tool you need for better sleep — all free
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {tools.map((t) => (
              <Link
                key={t.href}
                href={t.href}
                className="group flex items-start gap-4 rounded-2xl p-5 transition-all duration-200 hover:scale-[1.02]"
                style={{
                  background: "var(--bg-primary)",
                  border: "1px solid var(--border)",
                }}
              >
                <span className="text-3xl mt-0.5">{t.icon}</span>
                <div>
                  <h3
                    className="font-semibold mb-1 group-hover:text-[#a78bfa] transition-colors"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {t.title}
                  </h3>
                  <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                    {t.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Long-Form Content */}
      <SEOContent />

      {/* Related Guides */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold" style={{ color: "var(--text-primary)" }}>Related Sleep Guides</h2>
          <Link href="/blog/" className="text-sm font-semibold" style={{ color: "var(--accent-light)", textDecoration: "none" }}>View all guides →</Link>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { href: "/blog/how-to-fall-asleep-faster/", title: "How to Fall Asleep Faster: 12 Science-Backed Tips", desc: "Reduce your sleep onset time and improve sleep quality with these evidence-based techniques." },
            { href: "/blog/best-time-to-wake-up/", title: "The Best Time to Wake Up According to Sleep Science", desc: "Use 90-minute sleep cycles to find your optimal wake-up time and avoid morning grogginess." },
            { href: "/blog/if-i-sleep-at-10-what-time-should-i-wake-up/", title: "If I Sleep at 10 PM, What Time Should I Wake Up? (Sleep Cycle Chart)", desc: "Find the exact best times to wake up if you go to bed at 10 PM. Based on 90-minute sleep cycles — includes a full chart for 9 PM to 2 AM bedtimes." },
            { href: "/blog/why-you-wake-up-tired/", title: "Why You Wake Up Tired (Even After 8 Hours of Sleep)", desc: "Waking up exhausted despite a full night's sleep? Here are the 8 most common reasons — and exactly how to fix each one." },
            { href: "/blog/sleep-deprivation-effects/", title: "What Happens to Your Body After One Sleepless Night", desc: "Missing just one night of sleep triggers measurable changes in your brain, immune system, and metabolism. The science is more alarming than you think." },
            { href: "/blog/how-to-fix-sleep-schedule/", title: "How to Fix Your Sleep Schedule in 7 Days", desc: "Whether you're a night owl trying to become a morning person, or you've wrecked your schedule with late nights — this step-by-step plan works." },
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
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <h2
          className="text-2xl sm:text-3xl font-bold text-center mb-10"
          style={{ color: "var(--text-primary)" }}
        >
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {schemaFAQ.mainEntity.map((q) => (
            <details
              key={q.name}
              className="rounded-2xl overflow-hidden"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
              }}
            >
              <summary
                className="px-6 py-4 font-semibold cursor-pointer list-none flex justify-between items-center"
                style={{ color: "var(--text-primary)" }}
              >
                {q.name}
                <span className="text-lg" style={{ color: "var(--accent-light)" }}>
                  +
                </span>
              </summary>
              <p
                className="px-6 pb-5 text-sm leading-relaxed"
                style={{ color: "var(--text-muted)" }}
              >
                {q.acceptedAnswer.text}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">

        {/* Sleep By Age Quick Reference Table */}
        <div className="mb-12 rounded-3xl overflow-hidden" style={{ border: "1px solid var(--border)", background: "var(--bg-card)" }}>
          <div className="px-6 py-5 border-b" style={{ borderColor: "var(--border)", background: "rgba(108,99,255,0.08)" }}>
            <h2 className="text-xl sm:text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
              How Much Sleep Do You Need by Age?
            </h2>
            <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
              Recommended daily sleep hours per the National Sleep Foundation &amp; American Academy of Sleep Medicine
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: "rgba(108,99,255,0.06)", borderBottom: "1px solid var(--border)" }}>
                  <th className="px-5 py-3 text-left font-semibold" style={{ color: "var(--text-secondary)" }}>Age Group</th>
                  <th className="px-5 py-3 text-left font-semibold" style={{ color: "var(--text-secondary)" }}>Age Range</th>
                  <th className="px-5 py-3 text-left font-semibold" style={{ color: "var(--accent-light)" }}>Recommended Hours</th>
                  <th className="px-5 py-3 text-left font-semibold" style={{ color: "var(--text-secondary)" }}>Sleep Cycles</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { group: "Newborn", range: "0–3 months", hours: "14–17 hours", cycles: "9–11 cycles" },
                  { group: "Infant", range: "4–11 months", hours: "12–15 hours", cycles: "8–10 cycles" },
                  { group: "Toddler", range: "1–2 years", hours: "11–14 hours", cycles: "7–9 cycles" },
                  { group: "Preschool", range: "3–5 years", hours: "10–13 hours", cycles: "6–8 cycles" },
                  { group: "School Age", range: "6–13 years", hours: "9–11 hours", cycles: "6–7 cycles" },
                  { group: "Teenager", range: "14–17 years", hours: "8–10 hours", cycles: "5–6 cycles" },
                  { group: "Young Adult", range: "18–25 years", hours: "7–9 hours", cycles: "5–6 cycles" },
                  { group: "Adult", range: "26–64 years", hours: "7–9 hours", cycles: "5–6 cycles" },
                  { group: "Older Adult", range: "65+ years", hours: "7–8 hours", cycles: "4–5 cycles" },
                ].map((row, i) => (
                  <tr key={row.group} style={{ borderBottom: "1px solid var(--border)", background: i % 2 === 0 ? "transparent" : "rgba(108,99,255,0.03)" }}>
                    <td className="px-5 py-3 font-medium" style={{ color: "var(--text-primary)" }}>{row.group}</td>
                    <td className="px-5 py-3" style={{ color: "var(--text-muted)" }}>{row.range}</td>
                    <td className="px-5 py-3 font-semibold" style={{ color: "var(--accent-light)" }}>{row.hours}</td>
                    <td className="px-5 py-3 text-xs" style={{ color: "var(--text-muted)" }}>{row.cycles}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-5 py-3 text-xs" style={{ color: "var(--text-muted)", borderTop: "1px solid var(--border)" }}>
            Source: <Link href="/how-much-sleep-do-i-need/" style={{ color: "var(--accent-light)", textDecoration: "none" }}>National Sleep Foundation &amp; AASM guidelines</Link> · <Link href="/sleep-calculator-by-age/" style={{ color: "var(--accent-light)", textDecoration: "none" }}>Sleep Calculator by Age</Link>. Individual needs vary. Consult a doctor if you have persistent sleep issues.
          </div>
        </div>

        {/* Learn / Sleep Guide section */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2" style={{ color: "var(--text-primary)" }}>
            Sleep Science & Guides
          </h2>
          <p className="text-center text-sm mb-8" style={{ color: "var(--text-muted)" }}>
            Evidence-based articles to understand your sleep better
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { href: "/how-much-sleep-do-i-need/", icon: "📊", title: "How Much Sleep Do I Need?", desc: "NSF-recommended sleep hours by age — from newborns to 65+" },
              { href: "/sleep-stages/", icon: "🌊", title: "Sleep Stages Explained", desc: "NREM Stage 1, 2, 3 and REM — what happens in each stage" },
              { href: "/sleep-hygiene-tips/", icon: "✅", title: "Sleep Hygiene Tips", desc: "20 science-backed habits for better sleep quality" },
              { href: "/circadian-rhythm/", icon: "⏰", title: "Circadian Rhythm Guide", desc: "How your internal clock controls sleep and wakefulness" },
              { href: "/insomnia/", icon: "😟", title: "Insomnia Guide", desc: "Causes, types, and evidence-based treatments for insomnia" },
              { href: "/faq/", icon: "❓", title: "Sleep FAQ", desc: "Answers to the most common sleep science questions" },
            ].map((item) => (
              <Link key={item.href} href={item.href}
                className="group flex items-start gap-4 rounded-2xl p-5 transition-all duration-200 hover:scale-[1.02]"
                style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
                <span className="text-3xl mt-0.5">{item.icon}</span>
                <div>
                  <h3 className="font-semibold mb-1 group-hover:text-[#a78bfa] transition-colors" style={{ color: "var(--text-primary)" }}>
                    {item.title}
                  </h3>
                  <p className="text-sm" style={{ color: "var(--text-muted)" }}>{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div
          className="rounded-3xl p-8 sm:p-12 text-center"
          style={{
            background: "linear-gradient(135deg, rgba(108,99,255,0.2) 0%, rgba(167,139,250,0.1) 100%)",
            border: "1px solid rgba(108,99,255,0.3)",
          }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>
            How Much Sleep Do You Actually Need?
          </h2>
          <p className="mb-6 text-sm sm:text-base" style={{ color: "var(--text-muted)" }}>
            Age, activity level, and health all affect your ideal sleep duration. Read our science-backed guide.
          </p>
          <Link href="/how-much-sleep-do-i-need/"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-bold transition-all hover:opacity-90"
            style={{ background: "var(--accent)", color: "#fff" }}>
            Read the Sleep Guide →
          </Link>
        </div>
      </section>
    </>
  );
}

