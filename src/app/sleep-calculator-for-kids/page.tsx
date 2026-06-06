import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, breadcrumbSchema } from "@/lib/seo";
import KidsSleepCalculator from "@/app/components/tools/KidsSleepCalculator";

export const metadata: Metadata = {
  title: "Sleep Calculator for Kids — How Much Sleep Does My Child Need?",
  description:
    "Free sleep calculator for kids by age. Find the ideal bedtime and wake-up time for your child based on school start time and age-specific sleep needs. Based on NSF and AAP guidelines.",
  alternates: { canonical: `${SITE_URL}/sleep-calculator-for-kids/` },
  openGraph: {
    title: "Sleep Calculator for Kids — How Much Sleep Does My Child Need?",
    description:
      "Free sleep calculator for kids by age. Find the ideal bedtime and wake-up time for your child based on school start time and age-specific sleep needs. Based on NSF and AAP guidelines.",
    url: `${SITE_URL}/sleep-calculator-for-kids/`,
    siteName: "Get Sleep Calculator",
    type: "website",
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630 }],
  },
};

// ── Schemas ───────────────────────────────────────────────────────────────────
const schemaWebApp = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Sleep Calculator for Kids",
  description:
    "Calculate ideal bedtime for children by age group based on school wake time and NSF sleep guidelines.",
  url: `${SITE_URL}/sleep-calculator-for-kids/`,
  applicationCategory: "HealthApplication",
  operatingSystem: "Web Browser",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

const faqs = [
  {
    q: "What time should a 7-year-old go to bed?",
    a: "A 7-year-old needs 9–12 hours of sleep. If they wake at 7:00 AM for school, ideal bedtime is between 7:00–9:00 PM, with 8:00 PM being the most recommended target.",
  },
  {
    q: "What time should a 10-year-old go to bed?",
    a: "A 10-year-old needs 9–11 hours. For a 7:00 AM wake time, bedtime should be between 8:00–10:00 PM. Most sleep experts recommend 9:00 PM as the target.",
  },
  {
    q: "How much sleep does a 5-year-old need?",
    a: "Preschoolers aged 3–5 need 10–13 hours total. A 5-year-old who no longer naps should get 10–13 hours of night sleep. For a 7:00 AM wake time, bedtime around 7:00–8:00 PM is ideal.",
  },
  {
    q: "Is 8 hours enough for a 12-year-old?",
    a: "8 hours is the minimum recommended for preteens aged 12–13. However, 9–10 hours is optimal for this age group. Most preteens are significantly sleep-deprived due to screens and social pressures.",
  },
  {
    q: "Should kids nap after age 5?",
    a: "Most children naturally drop naps between ages 3–5. After age 5, regular daytime naps may indicate insufficient nighttime sleep. An occasional short rest (20–30 min) is fine but should not become habitual.",
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

const ageTableData = [
  { group: "Toddler",      range: "1–2 years",   recommended: "11–14h", naps: "1 nap (~1.5h)",  benefit: "Language development and memory consolidation" },
  { group: "Preschool",    range: "3–5 years",   recommended: "10–13h", naps: "0–1 nap (~1h)",  benefit: "Emotional regulation and learning readiness" },
  { group: "Early School", range: "6–8 years",   recommended: "9–12h",  naps: "None",           benefit: "Academic performance and attention span" },
  { group: "School Age",   range: "9–11 years",  recommended: "9–11h",  naps: "None",           benefit: "Memory retention and mood stability" },
  { group: "Preteen",      range: "12–13 years", recommended: "8–10h",  naps: "None",           benefit: "Hormonal balance and cognitive development" },
];

export default function SleepCalculatorForKidsPage() {
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
              { name: "Sleep Calculator for Kids", href: "/sleep-calculator-for-kids" },
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
            <span style={{ color: "var(--accent-light)" }}>Sleep Calculator for Kids</span>
          </nav>

          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight mb-4" style={{ color: "var(--text-primary)" }}>
            Sleep Calculator for Kids
            <span className="block text-2xl sm:text-3xl mt-2 font-semibold" style={{ color: "var(--accent-light)" }}>
              How Much Sleep Does My Child Need?
            </span>
          </h1>
          <p className="text-base max-w-2xl mx-auto mb-4" style={{ color: "var(--text-muted)" }}>
            Select your child&apos;s age group and school wake-up time to instantly get their ideal bedtime, earliest
            and latest acceptable bedtime, and whether a nap affects their night sleep needs. Based on{" "}
            <strong style={{ color: "var(--text-primary)" }}>NSF and AAP guidelines</strong>. For babies under 1 year,
            see our{" "}
            <Link href="/baby-sleep-calculator/" style={{ color: "var(--accent-light)", textDecoration: "underline" }}>
              Baby Sleep Calculator
            </Link>
            .
          </p>

          <div className="mt-8">
            <KidsSleepCalculator />
          </div>
        </div>
      </section>

      {/* ── Supporting Content ── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-14">

        <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
          How Much Sleep Do Kids Need by Age?
        </h2>
        <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>
          Children&apos;s sleep needs decline gradually from toddlerhood through the preteen years, but they remain
          substantially higher than adult requirements throughout childhood. The table below is sourced from the{" "}
          <strong style={{ color: "var(--text-primary)" }}>American Academy of Pediatrics (AAP)</strong> and the{" "}
          <strong style={{ color: "var(--text-primary)" }}>National Sleep Foundation</strong>. For teen and adult
          sleep needs, see our{" "}
          <Link href="/sleep-calculator-by-age/" style={{ color: "var(--accent-light)", textDecoration: "underline" }}>
            Sleep Calculator by Age
          </Link>
          .
        </p>

        <div className="overflow-x-auto rounded-2xl mb-12" style={{ border: "1px solid var(--border)" }}>
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: "var(--bg-card)", borderBottom: "2px solid var(--border)" }}>
                {["Age Group", "Age Range", "Recommended Sleep", "Naps", "Key Benefit"].map((h) => (
                  <th key={h} className="px-4 py-3 text-left font-semibold" style={{ color: "var(--accent-light)" }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ageTableData.map((row, i) => (
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
                  <td className="px-4 py-3" style={{ color: "var(--text-muted)" }}>{row.naps}</td>
                  <td className="px-4 py-3" style={{ color: "var(--text-muted)" }}>{row.benefit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Why children need more sleep */}
        <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
          Why Children Need More Sleep Than Adults
        </h2>
        <div className="space-y-5 mb-10 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
          <p>
            <strong style={{ color: "var(--text-primary)" }}>Brain development and neural pruning during deep sleep. </strong>
            During deep slow-wave sleep (NREM Stage 3), the brain actively prunes redundant neural connections and
            strengthens the pathways used during learning. In children, this process is operating at its peak rate.
            Studies show that even one night of insufficient sleep measurably reduces children&apos;s next-day cognitive
            performance, attention span, and emotional control.
          </p>
          <p>
            <strong style={{ color: "var(--text-primary)" }}>Growth hormone is released almost entirely during sleep. </strong>
            The pituitary gland releases 70–80% of daily growth hormone (GH) during the first slow-wave sleep cycle.
            In children and adolescents, GH drives skeletal growth, muscle development, and tissue repair. Consistently
            short sleep doesn&apos;t just affect alertness — it directly suppresses the hormonal activity that drives
            physical development.
          </p>
          <p>
            <strong style={{ color: "var(--text-primary)" }}>Memory consolidation for learning directly impacts school performance. </strong>
            REM sleep — which children get more of than adults — is the primary stage for declarative memory consolidation
            (facts, vocabulary, concepts learned during the school day). Research from Harvard Medical School found that
            students who slept adequately after learning new material retained 40% more than sleep-deprived peers.
            This is why bedtime is directly correlated with academic performance in children.
          </p>
        </div>

        {/* Signs of insufficient sleep */}
        <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
          Signs Your Child Is Not Getting Enough Sleep
        </h2>
        <ul className="space-y-3 mb-10 text-sm" style={{ color: "var(--text-muted)" }}>
          {[
            { icon: "😴", sign: "Difficulty waking up in the morning", detail: "Needing multiple alarms, crying or strong resistance to waking, falling back asleep immediately." },
            { icon: "🚌", sign: "Falling asleep in the car or bus", detail: "Any child falling asleep during a short ride is showing significant sleep debt — the drive is a passive stimulus that removes the barrier to sleep." },
            { icon: "😤", sign: "Hyperactivity or difficulty controlling emotions", detail: "Counterintuitively, overtired children often appear hyper rather than tired. Emotional meltdowns, impulsivity, and tantrums are classic signs of insufficient sleep." },
            { icon: "📚", sign: "Poor attention or memory at school", detail: "Teachers often notice difficulty staying on task, forgetting instructions, and slower processing — all direct effects of sleep deprivation on the prefrontal cortex." },
            { icon: "🤧", sign: "Frequent illness", detail: "Sleep is when the immune system produces cytokines and antibodies. Children sleeping less than recommended fall ill significantly more often and recover more slowly." },
            { icon: "🍽️", sign: "Falling asleep before or during dinner", detail: "A child who can&apos;t stay awake through an evening meal is severely sleep-deprived. This is especially common in children with early school start times." },
          ].map((item) => (
            <li key={item.sign} className="flex gap-3 items-start rounded-2xl p-4"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
              <span className="text-xl shrink-0">{item.icon}</span>
              <div>
                <p className="font-semibold" style={{ color: "var(--text-primary)" }}>{item.sign}</p>
                <p className="text-xs mt-1">{item.detail}</p>
              </div>
            </li>
          ))}
        </ul>

        {/* Building a sleep routine */}
        <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>
          How to Build a Healthy Sleep Routine for Kids
        </h2>
        <div className="space-y-6 mb-10">

          <div>
            <h3 className="text-lg font-bold mb-2" style={{ color: "var(--text-primary)" }}>Set a Consistent Bedtime</h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              The single most important factor in children&apos;s sleep quality is bedtime consistency — same time every
              night, including weekends. A fixed bedtime anchors the circadian rhythm so the child naturally becomes
              drowsy at the right time. Weekend sleep-ins of more than 60 minutes cause Monday morning struggle. Use our{" "}
              <Link href="/sleep-schedule-builder/" style={{ color: "var(--accent-light)", textDecoration: "underline" }}>
                Sleep Schedule Builder
              </Link>{" "}
              to create a structured weekly routine.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-2" style={{ color: "var(--text-primary)" }}>Create a Wind-Down Routine</h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              A screen-free 30-minute wind-down — bath, quiet reading, gentle conversation — reliably reduces the time
              children take to fall asleep. Screens emit blue light that delays melatonin onset by 60–90 minutes in
              children, making a strict no-screens-before-bed rule one of the highest-impact changes parents can make.
              See our full{" "}
              <Link href="/sleep-hygiene-tips/" style={{ color: "var(--accent-light)", textDecoration: "underline" }}>
                sleep hygiene tips
              </Link>{" "}
              for a complete checklist.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-2" style={{ color: "var(--text-primary)" }}>Make the Room Sleep-Friendly</h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Blackout curtains eliminate early-morning light that triggers early waking. A cool room (65–68°F / 18–20°C)
              supports the body temperature drop that triggers deep sleep. White noise at a consistent 65 dB masks
              household sounds that interrupt light sleep transitions — particularly effective for toddlers and preschoolers
              who surface frequently between cycles.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-2" style={{ color: "var(--text-primary)" }}>Limit Caffeine</h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Many children consume significant caffeine through soda, chocolate milk, energy drinks, and iced tea without
              parents realizing it. Caffeine has a half-life of 5–7 hours — an afternoon soda at 3 PM is still 50% active
              at 10 PM. A strict cut-off at noon for any caffeinated food or drink eliminates one of the most overlooked
              causes of children&apos;s sleep difficulty. For children who nap, also see our{" "}
              <Link href="/nap-calculator/" style={{ color: "var(--accent-light)", textDecoration: "underline" }}>
                Nap Calculator
              </Link>{" "}
              for timing guidance.
            </p>
          </div>
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
            { href: "/baby-sleep-calculator/",   icon: "👶", t: "Baby Sleep Calculator",   d: "Sleep needs for newborns through age 3" },
            { href: "/sleep-calculator-by-age/", icon: "📊", t: "Sleep Calculator by Age", d: "Sleep needs from teens through older adults" },
            { href: "/sleep-schedule-builder/",  icon: "📅", t: "Sleep Schedule Builder",  d: "Build a consistent sleep routine for your family" },
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
