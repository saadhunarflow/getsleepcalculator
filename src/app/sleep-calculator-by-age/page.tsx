import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, breadcrumbSchema } from "@/lib/seo";
import SleepByAgeCalculator from "@/app/components/SleepByAgeCalculator";

export const metadata: Metadata = {
  title: "Sleep Calculator by Age – How Much Sleep Do You Need?",
  description:
    "Find exactly how many hours of sleep you need based on your age. Based on NSF and CDC guidelines. Free sleep calculator by age — updated 2025.",
  alternates: { canonical: `${SITE_URL}/sleep-calculator-by-age/` },
  openGraph: {
    title: "Sleep Calculator by Age – How Much Sleep Do You Need?",
    description:
      "Find exactly how many hours of sleep you need based on your age. Based on NSF and CDC guidelines. Free sleep calculator by age — updated 2025.",
    url: `${SITE_URL}/sleep-calculator-by-age/`,
    siteName: "Get Sleep Calculator",
    type: "website",
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630 }],
  },
};

// ── Schemas ───────────────────────────────────────────────────────────────────
const schemaWebApp = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Sleep Calculator by Age",
  description:
    "Calculate recommended sleep hours and ideal bedtime based on age using NSF guidelines.",
  url: `${SITE_URL}/sleep-calculator-by-age/`,
  applicationCategory: "HealthApplication",
  operatingSystem: "Web Browser",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

const faqs = [
  {
    q: "How much sleep does a 30-year-old need?",
    a: "Adults aged 26–64 need 7–9 hours per night according to the NSF. 7.5 hours (5 complete 90-minute cycles) is the most commonly recommended target.",
  },
  {
    q: "How much sleep does a teenager need?",
    a: "Teens aged 13–17 need 8–10 hours. Most teens are chronically sleep-deprived due to early school start times and screen use.",
  },
  {
    q: "Do women need more sleep than men?",
    a: "Research suggests women need 20 minutes more sleep on average than men, due to multitasking brain use and hormonal factors.",
  },
  {
    q: "How much sleep does a 60-year-old need?",
    a: "Adults 65+ need 7–8 hours. Sleep quality often decreases with age even if duration is adequate.",
  },
  {
    q: "Is 6 hours of sleep enough for an adult?",
    a: "No. The NSF states adults need 7–9 hours. Consistently sleeping 6 hours is associated with impaired cognition, weakened immunity, and increased disease risk.",
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

const ageTable = [
  { group: "Newborn",      range: "0–3 months",  hours: "14–17 hrs", reason: "Rapid brain and nervous system development" },
  { group: "Infant",       range: "4–11 months", hours: "12–15 hrs", reason: "Motor skill and cognitive development" },
  { group: "Toddler",      range: "1–2 years",   hours: "11–14 hrs", reason: "Language acquisition and memory formation" },
  { group: "Preschool",    range: "3–5 years",   hours: "10–13 hrs", reason: "Emotional regulation and learning consolidation" },
  { group: "School Age",   range: "6–12 years",  hours: "9–11 hrs",  reason: "Academic learning and physical growth" },
  { group: "Teen",         range: "13–17 years", hours: "8–10 hrs",  reason: "Hormonal changes and prefrontal development" },
  { group: "Young Adult",  range: "18–25 years", hours: "7–9 hrs",   reason: "Brain maturation continues until age ~25" },
  { group: "Adult",        range: "26–64 years", hours: "7–9 hrs",   reason: "Cellular repair, memory, immune maintenance" },
  { group: "Older Adult",  range: "65+ years",   hours: "7–8 hrs",   reason: "Reduced deep sleep efficiency, but same need" },
];

export default function SleepCalculatorByAgePage() {
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
              { name: "Sleep Calculator by Age", href: "/sleep-calculator-by-age" },
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
            <span style={{ color: "var(--accent-light)" }}>Sleep Calculator by Age</span>
          </nav>

          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight mb-4" style={{ color: "var(--text-primary)" }}>
            Sleep Calculator by Age
            <span className="block text-2xl sm:text-3xl mt-2 font-semibold" style={{ color: "var(--accent-light)" }}>
              How Much Sleep Do You Need?
            </span>
          </h1>
          <p className="text-base max-w-2xl mx-auto mb-4" style={{ color: "var(--text-muted)" }}>
            Select your age group, enter your wake-up time, and instantly get your recommended sleep hours and
            three bedtime options — based on{" "}
            <strong style={{ color: "var(--text-primary)" }}>NSF and CDC guidelines</strong> and natural 90-minute
            sleep cycles. See{" "}
            <Link href="/how-much-sleep-do-i-need/" style={{ color: "var(--accent-light)", textDecoration: "underline" }}>
              full sleep requirements by age
            </Link>
            .
          </p>

          {/* Calculator */}
          <div className="mt-8">
            <SleepByAgeCalculator />
          </div>
        </div>
      </section>

      {/* ── Supporting Content ── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
        <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
          How Much Sleep Do You Need by Age?
        </h2>
        <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>
          Sleep requirements change significantly across the lifespan. Newborns need up to 17 hours a day
          for brain development, while healthy adults settle into a 7–9 hour window. As we age further,
          total sleep time decreases slightly and sleep architecture shifts — but the need for quality,
          uninterrupted sleep remains just as critical. The table below is sourced from the{" "}
          <strong style={{ color: "var(--text-primary)" }}>National Sleep Foundation (nsf.org)</strong> and{" "}
          <strong style={{ color: "var(--text-primary)" }}>CDC</strong>.
        </p>

        {/* Age table */}
        <div className="overflow-x-auto rounded-2xl mb-10" style={{ border: "1px solid var(--border)" }}>
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: "var(--bg-card)", borderBottom: "2px solid var(--border)" }}>
                {["Age Group", "Age Range", "Recommended Hours", "Key Reason"].map((h) => (
                  <th key={h} className="px-4 py-3 text-left font-semibold" style={{ color: "var(--accent-light)" }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ageTable.map((row, i) => (
                <tr
                  key={row.group}
                  style={{
                    borderBottom: "1px solid var(--border)",
                    background: i % 2 === 0 ? "transparent" : "rgba(108,99,255,0.03)",
                  }}
                >
                  <td className="px-4 py-3 font-semibold" style={{ color: "var(--text-primary)" }}>{row.group}</td>
                  <td className="px-4 py-3" style={{ color: "var(--text-muted)" }}>{row.range}</td>
                  <td className="px-4 py-3 font-bold" style={{ color: "var(--accent-light)" }}>{row.hours}</td>
                  <td className="px-4 py-3" style={{ color: "var(--text-muted)" }}>{row.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Why age affects sleep */}
        <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
          Why Age Affects Sleep Needs
        </h2>

        <div className="space-y-5 mb-10 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
          <p>
            <strong style={{ color: "var(--text-primary)" }}>Brain development in children and teens: </strong>
            The sleeping brain is not passive — it&apos;s doing critical work. In children and teenagers, sleep
            is when synaptic pruning, myelination, and memory consolidation occur at peak rates. Growth hormone
            is almost entirely secreted during slow-wave (deep) sleep. This is why chronically sleep-deprived
            children show measurable deficits in learning, emotional regulation, and physical development.
          </p>
          <p>
            <strong style={{ color: "var(--text-primary)" }}>Hormonal changes in adults: </strong>
            For adults, sleep is integral to hormonal regulation — including cortisol, insulin, leptin, and
            testosterone. Studies show that consistently sleeping fewer than 7 hours reduces testosterone levels
            by the equivalent of 10 years of aging. Sleep also regulates the hunger hormones ghrelin and leptin,
            which is why chronic sleep deprivation is a significant risk factor for obesity and metabolic syndrome.
          </p>
          <p>
            <strong style={{ color: "var(--text-primary)" }}>Sleep architecture changes in older adults: </strong>
            After age 60, the proportion of deep sleep (NREM Stage 3) decreases, and sleep becomes lighter and
            more fragmented. Older adults often wake more frequently and spend less time in REM sleep. While the
            body&apos;s need for sleep doesn&apos;t dramatically decrease, the ability to achieve consolidated,
            deep sleep does — making sleep environment, schedule consistency, and sleep hygiene increasingly
            important as we age.
          </p>
        </div>

        {/* Gender */}
        <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
          Does Gender Affect Sleep?
        </h2>
        <div className="space-y-5 mb-10 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
          <p>
            <strong style={{ color: "var(--text-primary)" }}>Women and sleep duration: </strong>
            Research from Duke University and the Sleep Research Society consistently shows that women need
            approximately 20 minutes more sleep per night than men on average. This is partly attributed to
            the fact that women&apos;s brains multitask more intensively during the day, requiring more
            recovery sleep. Women also tend to spend more time in slow-wave and REM sleep, suggesting their
            brains are doing more cognitive repair work nightly.
          </p>
          <p>
            <strong style={{ color: "var(--text-primary)" }}>Hormonal cycles, pregnancy, and menopause: </strong>
            Women&apos;s sleep needs fluctuate significantly across life stages. During the luteal phase of
            the menstrual cycle, body temperature rises slightly, disrupting sleep quality. Pregnancy —
            especially the first and third trimesters — substantially increases sleep requirements and disrupts
            architecture. Menopause brings hot flashes, night sweats, and elevated cortisol that fragment sleep,
            often requiring behavioral interventions like{" "}
            <Link href="/sleep-hygiene-tips/" style={{ color: "var(--accent-light)", textDecoration: "underline" }}>
              sleep hygiene optimization
            </Link>{" "}
            and consistent sleep schedules.
          </p>
        </div>

        {/* Tips */}
        <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
          Tips to Get the Right Amount of Sleep for Your Age
        </h2>
        <ul className="space-y-4 mb-10 text-sm" style={{ color: "var(--text-muted)" }}>
          {[
            {
              tip: "Anchor your wake time, not your bedtime.",
              detail:
                "A fixed wake-up time (including weekends) is the single most powerful lever for circadian rhythm stability. Use our " ,
              link: { href: "/sleep-schedule-builder/", label: "Sleep Schedule Builder" },
              after: " to build a consistent routine aligned to your age group.",
            },
            {
              tip: "Match your sleep window to your age group's recommended range.",
              detail:
                "If you're an adult who gets 6 hours on weekdays and 10 on weekends, your average may look fine — but the inconsistency causes social jet lag. Aim to stay in the 7–9 hour band every night, not just on average.",
            },
            {
              tip: "Teens and children: protect morning sleep.",
              detail:
                "For teens (8–10 hrs needed), early school start times are the primary cause of sleep deprivation. Wherever possible, shift bedtime earlier rather than allowing later wake times. Avoid screens for 1 hour before bed — blue light disrupts melatonin onset, which is already delayed in teenagers.",
            },
            {
              tip: "Older adults: prioritize sleep efficiency over duration.",
              detail:
                "If you're 65+ and spending 9 hours in bed but sleeping 6, the solution isn't more time in bed — it's improving sleep efficiency. Keep a consistent schedule, avoid long naps after 3 PM, and consider " ,
              link2: { href: "/insomnia/", label: "CBT-I techniques" },
              after2: " if insomnia is chronic.",
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
                {"link2" in item && item.link2 && (
                  <Link href={item.link2.href} style={{ color: "var(--accent-light)", textDecoration: "underline" }}>
                    {item.link2.label}
                  </Link>
                )}
                {"after2" in item && item.after2}
              </p>
            </li>
          ))}
        </ul>

        {/* Internal link to bedtime calculator */}
        <div
          className="rounded-2xl px-5 py-4 mb-10 text-sm"
          style={{ background: "rgba(108,99,255,0.08)", border: "1px solid rgba(108,99,255,0.2)" }}
        >
          <strong style={{ color: "var(--accent-light)" }}>Pro tip: </strong>
          <span style={{ color: "var(--text-muted)" }}>
            Once you know your ideal hours, use our{" "}
            <Link href="/bedtime-calculator/" style={{ color: "var(--accent-light)", textDecoration: "underline" }}>
              Bedtime Calculator
            </Link>{" "}
            to get the exact time to get into bed based on your wake-up time and complete 90-minute sleep cycles.
          </span>
        </div>
      </section>

      {/* Freshness signal */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-4">
        <p className="text-xs" style={{ color: "var(--text-muted)" }}>Last reviewed: June 2025 — reflects current NSF and CDC sleep guidelines.</p>
      </div>

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
            { href: "/bedtime-calculator/",      icon: "🌙", t: "Bedtime Calculator",      d: "Find the perfect bedtime based on 90-min sleep cycles" },
            { href: "/sleep-debt-calculator/",   icon: "💤", t: "Sleep Debt Calculator",   d: "Calculate how much sleep you owe your body" },
            { href: "/sleep-schedule-builder/",  icon: "📅", t: "Sleep Schedule Builder",  d: "Build a consistent sleep routine for your age group" },
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
