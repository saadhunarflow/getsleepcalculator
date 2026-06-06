import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, breadcrumbSchema } from "@/lib/seo";
import BabySleepCalculator from "@/app/components/BabySleepCalculator";

export const metadata: Metadata = {
  title: "Baby Sleep Calculator – How Much Should My Baby Sleep?",
  description:
    "Free baby sleep calculator by age. Find out exactly how much sleep your baby, newborn, or toddler needs — with nap breakdown and night sleep targets. Based on NSF guidelines.",
  alternates: { canonical: `${SITE_URL}/baby-sleep-calculator/` },
  openGraph: {
    title: "Baby Sleep Calculator – How Much Should My Baby Sleep?",
    description:
      "Free baby sleep calculator by age. Find out exactly how much sleep your baby, newborn, or toddler needs — with nap breakdown and night sleep targets.",
    url: `${SITE_URL}/baby-sleep-calculator/`,
    siteName: "Get Sleep Calculator",
    type: "website",
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630 }],
  },
};

// ── Schemas ───────────────────────────────────────────────────────────────────
const schemaWebApp = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Baby Sleep Calculator",
  description:
    "Calculate how much sleep your baby needs by age, including nap breakdown and night sleep targets.",
  url: `${SITE_URL}/baby-sleep-calculator/`,
  applicationCategory: "HealthApplication",
  operatingSystem: "Web Browser",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

const faqs = [
  {
    q: "How much should a newborn sleep?",
    a: "Newborns need 14–17 hours of total sleep per day, split across 4–5 naps. They cannot yet distinguish day from night — this develops around 3–4 months.",
  },
  {
    q: "When do babies start sleeping through the night?",
    a: "Most babies begin sleeping longer stretches (5–6 hours) between 3–6 months as their circadian rhythm develops. Full night sleep (10–12 hours) typically emerges by 6–9 months.",
  },
  {
    q: "How many naps should a 6-month-old take?",
    a: "A 6–9 month old typically takes 2–3 naps per day totaling 3–4 hours, with 10–11 hours of night sleep.",
  },
  {
    q: "When should I drop to one nap?",
    a: "Most toddlers transition to one nap between 15–18 months. Signs include resisting the second nap but still needing daytime sleep.",
  },
  {
    q: "Is it normal for babies to wake up at night?",
    a: "Yes — babies have shorter sleep cycles (50–60 min) and wake briefly between cycles. The goal is teaching them to self-settle, not eliminating wake-ups entirely.",
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
  { age: "Newborn (0–1 mo)",    total: "14–17h", night: "8–9h",   naps: "4–5" },
  { age: "1–2 Months",          total: "14–16h", night: "8–9h",   naps: "4–5" },
  { age: "2–3 Months",          total: "13–15h", night: "9–10h",  naps: "3–4" },
  { age: "3–6 Months",          total: "12–15h", night: "10–11h", naps: "3"   },
  { age: "6–9 Months",          total: "12–14h", night: "10–11h", naps: "2–3" },
  { age: "9–12 Months",         total: "12–14h", night: "10–11h", naps: "2"   },
  { age: "12–18 Months",        total: "11–14h", night: "10–11h", naps: "1–2" },
  { age: "18–24 Months",        total: "11–14h", night: "10–12h", naps: "1"   },
  { age: "2–3 Years (Toddler)", total: "11–13h", night: "10–12h", naps: "0–1" },
];

export default function BabySleepCalculatorPage() {
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
              { name: "Baby Sleep Calculator", href: "/baby-sleep-calculator" },
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
            <span style={{ color: "var(--accent-light)" }}>Baby Sleep Calculator</span>
          </nav>

          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight mb-4" style={{ color: "var(--text-primary)" }}>
            Baby Sleep Calculator
            <span className="block text-2xl sm:text-3xl mt-2 font-semibold" style={{ color: "var(--accent-light)" }}>
              How Much Should My Baby Sleep?
            </span>
          </h1>
          <p className="text-base max-w-2xl mx-auto mb-4" style={{ color: "var(--text-muted)" }}>
            Select your baby&apos;s age and instantly see total sleep needs, night sleep targets, number of naps,
            nap durations, and wake windows — based on{" "}
            <strong style={{ color: "var(--text-primary)" }}>NSF and American Academy of Pediatrics (AAP)</strong> guidelines.
            For older children and adults, see the{" "}
            <Link href="/sleep-calculator-by-age/" style={{ color: "var(--accent-light)", textDecoration: "underline" }}>
              Sleep Calculator by Age
            </Link>
            .
          </p>

          {/* Calculator */}
          <div className="mt-8">
            <BabySleepCalculator />
          </div>
        </div>
      </section>

      {/* ── Supporting Content ── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-14">

        <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
          How Much Sleep Does a Baby Need?
        </h2>
        <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>
          Sleep needs change dramatically in the first three years of life. A newborn sleeps nearly 16 hours a day in
          short bursts, while a toddler consolidates most sleep into a single overnight period plus one nap. The table
          below summarizes total sleep, night sleep, and daytime naps by age — sourced from the{" "}
          <strong style={{ color: "var(--text-primary)" }}>National Sleep Foundation (nsf.org)</strong> and the{" "}
          <strong style={{ color: "var(--text-primary)" }}>American Academy of Pediatrics (AAP)</strong>. For adult
          sleep needs, see{" "}
          <Link href="/how-much-sleep-do-i-need/" style={{ color: "var(--accent-light)", textDecoration: "underline" }}>
            How Much Sleep Do I Need?
          </Link>
        </p>

        {/* Table */}
        <div className="overflow-x-auto rounded-2xl mb-12" style={{ border: "1px solid var(--border)" }}>
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: "var(--bg-card)", borderBottom: "2px solid var(--border)" }}>
                {["Age", "Total Sleep", "Night Sleep", "Naps Per Day"].map((h) => (
                  <th key={h} className="px-4 py-3 text-left font-semibold" style={{ color: "var(--accent-light)" }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ageTable.map((row, i) => (
                <tr
                  key={row.age}
                  style={{
                    borderBottom: "1px solid var(--border)",
                    background: i % 2 === 0 ? "transparent" : "rgba(108,99,255,0.03)",
                  }}
                >
                  <td className="px-4 py-3 font-semibold" style={{ color: "var(--text-primary)" }}>{row.age}</td>
                  <td className="px-4 py-3 font-bold" style={{ color: "var(--accent-light)" }}>{row.total}</td>
                  <td className="px-4 py-3" style={{ color: "var(--text-muted)" }}>{row.night}</td>
                  <td className="px-4 py-3" style={{ color: "var(--text-muted)" }}>{row.naps}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Baby sleep cycles */}
        <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
          Understanding Baby Sleep Cycles
        </h2>
        <div className="space-y-4 mb-10 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
          <p>
            <strong style={{ color: "var(--text-primary)" }}>Baby sleep cycles are much shorter than adult cycles. </strong>
            While adults cycle through sleep stages in roughly 90-minute blocks (see our{" "}
            <Link href="/nap-calculator/" style={{ color: "var(--accent-light)", textDecoration: "underline" }}>
              nap calculator
            </Link>{" "}
            for cycle-based nap planning), babies complete a full sleep cycle in just 50–60 minutes. This is normal and
            developmental — the proportion of active (REM-like) sleep in infants is extremely high, supporting the
            rapid brain growth happening in the first year of life.
          </p>
          <p>
            <strong style={{ color: "var(--text-primary)" }}>Why babies wake frequently between cycles. </strong>
            At the end of each 50–60 minute cycle, babies naturally surface to a lighter sleep state. Adults generally
            transition through this boundary unconsciously, but babies — especially under 4–6 months — haven&apos;t
            yet developed the ability to self-settle back into the next cycle. This is why many babies wake every
            45–60 minutes during naps or multiple times overnight. The goal of sleep training (when parents choose it)
            is to help babies learn to connect cycles independently, not to suppress normal waking biology.
          </p>
        </div>

        {/* Wake windows */}
        <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
          Wake Windows Explained
        </h2>
        <div className="space-y-4 mb-10 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
          <p>
            <strong style={{ color: "var(--text-primary)" }}>What is a wake window? </strong>
            A wake window is the maximum amount of time a baby can comfortably stay awake between sleeps before becoming
            overtired. For a newborn this is just 45–60 minutes; by 12 months it extends to around 3 hours. Wake windows
            are not rigid rules — they&apos;re a guide to help you time naps so your baby goes down drowsy but not overtired.
            Combining wake windows with your baby&apos;s sleepy cues (rubbing eyes, yawning, glazed look) gives the most
            accurate picture of the ideal nap window.
          </p>
          <p>
            <strong style={{ color: "var(--text-primary)" }}>Why following wake windows prevents overtiredness. </strong>
            When a baby stays awake beyond their wake window, cortisol (the stress hormone) rises to keep them alert.
            This is counterintuitive — an overtired baby is harder to put down, wakes more at night, and takes shorter
            naps. Staying within the age-appropriate wake window and using a consistent nap schedule (build one with our{" "}
            <Link href="/sleep-schedule-builder/" style={{ color: "var(--accent-light)", textDecoration: "underline" }}>
              Sleep Schedule Builder
            </Link>
            ) is one of the most effective interventions for improving infant sleep.
          </p>
        </div>

        {/* Tips */}
        <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
          Tips for Better Baby Sleep
        </h2>
        <ul className="space-y-4 mb-10 text-sm" style={{ color: "var(--text-muted)" }}>
          {[
            {
              tip: "Build a consistent bedtime routine.",
              detail:
                "A predictable 20–30 minute sequence (bath → feed → book → dark room → sleep) signals the brain that sleep is coming. Consistency matters more than the specific activities. Most babies respond within 3–5 nights of a new routine.",
            },
            {
              tip: "Use a dark room and white noise.",
              detail:
                "Blackout curtains and a white noise machine running at 65–70 dB (a fan or dedicated device) mask household sounds and create a consistent sleep environment. Darkness suppresses cortisol and supports melatonin onset — even during daytime naps.",
            },
            {
              tip: "Watch for sleepy cues — not just the clock.",
              detail:
                "Age-appropriate wake windows give you a timing window, but your baby's sleepy cues refine it. Yawning, eye-rubbing, staring, and slowing activity are all signals to begin wind-down. Act on the first yawn — waiting for the second means you've likely missed the window.",
            },
            {
              tip: "Avoid overtiredness.",
              detail:
                "An overtired baby fights sleep hardest. If your baby is fussing intensely, arching back, or has been awake 30+ minutes beyond their wake window, try a short walk or motion nap to prevent the cortisol spiral — then reset the schedule the next day.",
            },
            {
              tip: "Follow AAP safe sleep guidelines.",
              detail:
                "Always place babies on their back on a firm, flat surface with no loose bedding, bumpers, or soft objects in the sleep space. Room-sharing (not bed-sharing) for the first 6–12 months is recommended by the AAP and reduces SIDS risk by up to 50%.",
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
              </p>
            </li>
          ))}
        </ul>
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
            { href: "/nap-calculator/",            icon: "😴", t: "Nap Calculator",            d: "Find the best nap duration and wake-up time" },
            { href: "/sleep-calculator-by-age/",   icon: "📊", t: "Sleep Calculator by Age",   d: "Sleep requirements from childhood to older adults" },
            { href: "/sleep-schedule-builder/",    icon: "📅", t: "Sleep Schedule Builder",    d: "Build a consistent daily sleep schedule" },
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
