import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, breadcrumbSchema } from "@/lib/seo";
import SleepDurationCalculator from "@/app/components/SleepDurationCalculator";

export const metadata: Metadata = {
  title: "How Much Sleep Did I Get? — Sleep Duration Calculator",
  description:
    "Enter your bedtime and wake-up time to instantly calculate how many hours you slept, how many complete sleep cycles you completed, and whether you got enough sleep.",
  alternates: { canonical: `${SITE_URL}/how-much-sleep-did-i-get/` },
  openGraph: {
    title: "How Much Sleep Did I Get? — Sleep Duration Calculator",
    description:
      "Enter your bedtime and wake-up time to instantly calculate how many hours you slept, how many complete sleep cycles you completed, and whether you got enough sleep.",
    url: `${SITE_URL}/how-much-sleep-did-i-get/`,
    siteName: "Get Sleep Calculator",
    type: "website",
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630 }],
  },
};

// ── Schemas ───────────────────────────────────────────────────────────────────
const schemaWebApp = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "How Much Sleep Did I Get Calculator",
  description:
    "Calculate your total sleep duration, complete cycles, and sleep quality by entering your bedtime and wake-up time.",
  url: `${SITE_URL}/how-much-sleep-did-i-get/`,
  applicationCategory: "HealthApplication",
  operatingSystem: "Web Browser",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

const faqs = [
  {
    q: "If I sleep at 10 PM and wake up at 6 AM, how many hours did I sleep?",
    a: "10 PM to 6 AM is exactly 8 hours of sleep — covering approximately 5 complete 90-minute sleep cycles with 30 minutes remaining. This is within the recommended 7–9 hours for adults.",
  },
  {
    q: "How many sleep cycles is 7 hours?",
    a: "7 hours equals 420 minutes, which gives 4 complete 90-minute cycles with 60 minutes remaining. You would wake up mid-cycle, which can cause grogginess. 7.5 hours (5 complete cycles) is a better target.",
  },
  {
    q: "Is 6 hours of sleep enough?",
    a: "6 hours falls below the NSF recommended minimum of 7 hours for adults. While some people function on 6 hours short-term, chronic 6-hour sleep is associated with cognitive impairment and increased health risk.",
  },
  {
    q: "Why do I feel worse after 8 hours than 7.5 hours?",
    a: "8 hours (480 min) ends 30 minutes into a new sleep cycle — during a deeper stage. 7.5 hours (450 min) ends exactly at the completion of 5 full cycles, at the lightest sleep point. Cycle timing matters as much as total duration.",
  },
  {
    q: "How many hours of sleep did I get if I slept from midnight to 7 AM?",
    a: "Midnight to 7 AM is 7 hours — covering 4 complete sleep cycles with 60 minutes remaining. You would be waking mid-cycle. Sleeping until 7:30 AM would complete a 5th cycle and likely feel more refreshing.",
  },
];

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const recommendedHoursTable = [
  { group: "Teen",         range: "13–17 years", recommended: "8–10 hrs", minimum: "7 hrs" },
  { group: "Young Adult",  range: "18–25 years", recommended: "7–9 hrs",  minimum: "6 hrs" },
  { group: "Adult",        range: "26–64 years", recommended: "7–9 hrs",  minimum: "6 hrs" },
  { group: "Older Adult",  range: "65+ years",   recommended: "7–8 hrs",  minimum: "5–6 hrs" },
];

export default function HowMuchSleepDidIGetPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebApp) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", href: "/" },
              { name: "How Much Sleep Did I Get", href: "/how-much-sleep-did-i-get" },
            ])
          ),
        }}
      />

      {/* ── Hero ── */}
      <section
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(108,99,255,0.15) 0%, transparent 70%), var(--bg-primary)",
          paddingTop: "3.5rem",
          paddingBottom: "3.5rem",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <nav className="text-xs mb-6" style={{ color: "var(--text-muted)" }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span style={{ color: "var(--accent-light)" }}>How Much Sleep Did I Get?</span>
          </nav>

          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight mb-4" style={{ color: "var(--text-primary)" }}>
            How Much Sleep Did I Get?
            <span className="block text-2xl sm:text-3xl mt-2 font-semibold" style={{ color: "var(--accent-light)" }}>
              Sleep Duration Calculator
            </span>
          </h1>
          <p className="text-base max-w-2xl mx-auto mb-8" style={{ color: "var(--text-muted)" }}>
            Enter your bedtime and wake-up time to see your total sleep duration, how many complete 90-minute
            sleep cycles you completed, and whether your sleep quality was sufficient.
          </p>

          <SleepDurationCalculator />
        </div>
      </section>

      {/* ── Supporting Content ── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-14">

        {/* How duration is calculated */}
        <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
          How Is Sleep Duration Calculated?
        </h2>
        <div className="space-y-4 mb-10 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
          <p>
            <strong style={{ color: "var(--text-primary)" }}>Time in bed vs. actual sleep time. </strong>
            Total time in bed and total sleep time are not the same. The average adult takes about 14 minutes to fall
            asleep (sleep onset latency). This calculator measures time from bedtime to wake time — for a more precise
            figure, subtract 14 minutes to estimate actual sleep. Devices like fitness trackers attempt to measure
            true sleep time but have limited accuracy for staging.
          </p>
          <p>
            <strong style={{ color: "var(--text-primary)" }}>Why cycle timing matters more than total hours. </strong>
            Your brain moves through NREM and REM stages in repeating 90-minute blocks. Waking at the end of a complete
            cycle — when you&apos;re in the lightest sleep state — feels dramatically better than waking 30 minutes
            into the next cycle in deep slow-wave sleep. This is why 7.5 hours (5 complete cycles) often feels more
            refreshing than 8 hours (5 cycles + 30 minutes into a 6th).
          </p>
        </div>

        {/* What do complete cycles mean */}
        <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
          What Do Complete Sleep Cycles Mean?
        </h2>
        <div className="space-y-4 mb-10 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
          <p>
            <strong style={{ color: "var(--text-primary)" }}>What a 90-minute cycle contains. </strong>
            Each sleep cycle passes through four stages: NREM Stage 1 (light, transitional), NREM Stage 2 (core sleep,
            where sleep spindles fire), NREM Stage 3 (deep slow-wave sleep — the most physically restorative), and REM
            sleep (the dreaming stage critical for memory and emotional regulation). Early cycles in the night are heavy
            with deep sleep; later cycles are heavy with REM. Use our{" "}
            <Link href="/sleep-cycle-calculator/" style={{ color: "var(--accent-light)", textDecoration: "underline" }}>
              Sleep Cycle Calculator
            </Link>{" "}
            to visualize your full sleep architecture.
          </p>
          <p>
            <strong style={{ color: "var(--text-primary)" }}>Why waking mid-cycle causes grogginess. </strong>
            Waking during NREM Stage 3 (deep sleep) triggers sleep inertia — a state of impaired alertness, motor
            performance, and cognitive function that can last 15–60 minutes. When your alarm fires 30–45 minutes into
            a new cycle, you are frequently in Stage 3. This is why 7.5 hours (5 complete cycles at a natural light-sleep
            boundary) often feels sharper than 8 hours. The difference is not the total sleep — it&apos;s when in the
            cycle you were interrupted.
          </p>
        </div>

        {/* Recommended hours table */}
        <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
          How Much Sleep Is Actually Enough?
        </h2>
        <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-muted)" }}>
          The table below shows NSF-recommended sleep hours by age group. For a full interactive breakdown by age,
          see the{" "}
          <Link href="/sleep-calculator-by-age/" style={{ color: "var(--accent-light)", textDecoration: "underline" }}>
            Sleep Calculator by Age
          </Link>
          .
        </p>
        <div className="overflow-x-auto rounded-2xl mb-12" style={{ border: "1px solid var(--border)" }}>
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: "var(--bg-card)", borderBottom: "2px solid var(--border)" }}>
                {["Age Group", "Age Range", "Recommended Hours", "Minimum Acceptable"].map((h) => (
                  <th key={h} className="px-4 py-3 text-left font-semibold" style={{ color: "var(--accent-light)" }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {recommendedHoursTable.map((row, i) => (
                <tr
                  key={row.group}
                  style={{
                    borderBottom: "1px solid var(--border)",
                    background: i % 2 === 0 ? "transparent" : "rgba(108,99,255,0.03)",
                  }}
                >
                  <td className="px-4 py-3 font-semibold" style={{ color: "var(--text-primary)" }}>{row.group}</td>
                  <td className="px-4 py-3" style={{ color: "var(--text-muted)" }}>{row.range}</td>
                  <td className="px-4 py-3 font-bold" style={{ color: "var(--accent-light)" }}>{row.recommended}</td>
                  <td className="px-4 py-3" style={{ color: "var(--text-muted)" }}>{row.minimum}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* What to do if not enough sleep */}
        <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
          What to Do If You Did Not Get Enough Sleep
        </h2>
        <ul className="space-y-4 mb-10 text-sm" style={{ color: "var(--text-muted)" }}>
          {[
            {
              tip: "Calculate your sleep debt and plan recovery.",
              detail: "Missing an hour per night for a week builds 7 hours of sleep debt. Use the ",
              link: { href: "/sleep-debt-calculator/", label: "Sleep Debt Calculator" },
              after: " to measure your deficit and set a recovery timeline.",
            },
            {
              tip: "Avoid oversleeping to \"catch up\" on weekends.",
              detail:
                "Sleeping 3–4 extra hours on Saturday delays your circadian rhythm, making Sunday night harder and Monday worse. Recovery sleep is most effective in 30–60 minute increments over several nights, not one massive rebound.",
            },
            {
              tip: "Take a 20-minute nap before 3 PM if needed.",
              detail: "A power nap (15–20 minutes) boosts alertness and reduces cortisol without entering deep sleep. Use the ",
              link: { href: "/nap-calculator/", label: "Nap Calculator" },
              after: " to find the best nap window and wake-up time.",
            },
            {
              tip: "Prioritize the next night — set a consistent bedtime.",
              detail:
                "One bad night doesn't require dramatic action. Set a firm bedtime tonight, keep your wake time fixed, and avoid screens for 60 minutes before bed. Recovery from a single poor night is complete after one or two full nights.",
            },
          ].map((item, i) => (
            <li key={i} className="flex gap-3 items-start">
              <span
                className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white mt-0.5"
                style={{ background: "var(--accent)" }}
              >
                {i + 1}
              </span>
              <p>
                <strong style={{ color: "var(--text-primary)" }}>{item.tip}</strong>{" "}
                {item.detail}
                {"link" in item && item.link && (
                  <Link href={item.link.href} style={{ color: "var(--accent-light)", textDecoration: "underline" }}>
                    {item.link.label}
                  </Link>
                )}
                {"after" in item && item.after}
              </p>
            </li>
          ))}
        </ul>

        {/* Why waking mid-cycle feels bad */}
        <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
          Why Waking Mid-Cycle Feels So Bad
        </h2>
        <div className="space-y-4 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
          <p>
            <strong style={{ color: "var(--text-primary)" }}>Sleep inertia and deep sleep. </strong>
            Sleep inertia is the feeling of cognitive fog, disorientation, and physical sluggishness after waking.
            It is caused by adenosine — a sleep-pressure chemical — that hasn&apos;t fully cleared, combined with the
            abrupt interruption of slow-wave sleep. The severity scales directly with how deep into a sleep stage
            you were: waking at the end of a cycle (Stage 1 or 2) produces minimal inertia; waking from Stage 3
            can impair reaction time for 20–60 minutes.
          </p>
          <p>
            <strong style={{ color: "var(--text-primary)" }}>How to time your alarm to a cycle end. </strong>
            Instead of setting your alarm for a round number of hours, use your bedtime to calculate when a complete
            cycle ends. For example, if you go to bed at 11:00 PM: complete cycles end at 12:30 AM, 2:00 AM, 3:30 AM,
            5:00 AM, 6:30 AM, 8:00 AM. Setting your alarm for 6:30 AM (5 cycles, 7.5 hours) will feel sharper than
            7:00 AM (5 cycles + 30 min into a 6th). Use the{" "}
            <Link href="/bedtime-calculator/" style={{ color: "var(--accent-light)", textDecoration: "underline" }}>
              Bedtime Calculator
            </Link>{" "}
            to plan backward from any wake time.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: "var(--bg-card)", borderTop: "1px solid var(--border)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
          <h2 className="text-2xl font-bold mb-8" style={{ color: "var(--text-primary)" }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <details
                key={q}
                className="rounded-2xl overflow-hidden"
                style={{ background: "var(--bg-primary)", border: "1px solid var(--border)" }}
              >
                <summary
                  className="px-6 py-4 font-semibold cursor-pointer list-none flex justify-between items-start gap-4"
                  style={{ color: "var(--text-primary)" }}
                >
                  <span>{q}</span>
                  <span className="shrink-0" style={{ color: "var(--accent-light)" }}>+</span>
                </summary>
                <p className="px-6 pb-5 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Tools ── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
        <h2 className="text-xl font-bold mb-5" style={{ color: "var(--text-primary)" }}>Related Tools</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { href: "/bedtime-calculator/",       icon: "🌙", t: "Bedtime Calculator",       d: "Find the perfect bedtime based on 90-min sleep cycles" },
            { href: "/sleep-debt-calculator/",    icon: "💤", t: "Sleep Debt Calculator",    d: "Calculate how much sleep you owe your body" },
            { href: "/sleep-calculator-by-age/",  icon: "📊", t: "Sleep Calculator by Age",  d: "Find recommended hours for your age group" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-2xl p-5 flex gap-3 hover:scale-[1.02] transition-all"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
            >
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
