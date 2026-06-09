import type { Metadata } from "next";
import Link from "next/link";
import AuthorBio from "@/app/components/AuthorBio";
import RelatedArticles from "@/app/components/RelatedArticles";
import TableOfContents from "@/app/components/TableOfContents";
import { breadcrumbSchema, faqSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Why Am I So Tired All the Time? 8 Science-Backed Reasons | Get Sleep Calculator",
  description:
    "Why am I so tired all the time — even after sleeping? Discover 8 common causes of chronic fatigue, why you feel tired in the morning, and how to fix low energy for good.",
  alternates: { canonical: "https://getsleepcalculator.net/why-am-i-so-tired/" },
  openGraph: {
    title: "Why Am I So Tired All the Time? 8 Science-Backed Reasons | Get Sleep Calculator",
    description:
      "Why am I so tired all the time — even after sleeping? Discover 8 common causes of chronic fatigue, why you feel tired in the morning, and how to fix low energy for good.",
    url: "https://getsleepcalculator.net/why-am-i-so-tired/",
    type: "article",
    images: [{ url: "https://getsleepcalculator.net/og-image.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
};

const reasons = [
  {
    num: "01",
    id: "sleep-debt",
    title: "You Have Accumulated Sleep Debt",
    body: "Sleep debt is the most common — and most overlooked — cause of chronic tiredness. Every night you sleep less than your body needs, a deficit accumulates. After just one week of sleeping 6 hours instead of 8, your cognitive performance drops to the same level as someone who has been awake for 24 hours straight. The dangerous part: your brain adapts to feeling tired, making you believe you've adjusted — when you haven't.",
    link: { href: "/sleep-debt-calculator/", label: "Calculate your sleep debt →" },
  },
  {
    num: "02",
    id: "sleep-inertia",
    title: "You're Waking Up Mid-Sleep Cycle (Sleep Inertia)",
    body: "If you wake up at the wrong point in your 90-minute sleep cycle — in the middle of deep (N3) sleep — your brain is flooded with the chemical adenosine before it has cleared. This is called sleep inertia: the grogginess, disorientation, and fatigue that can last 30–90 minutes after waking. It explains why you feel more tired after 8 hours than after 7.5, if your alarm cuts a cycle short.",
    link: { href: "/sleep-cycle-calculator/", label: "Find your wake-up at a cycle end →" },
  },
  {
    num: "03",
    id: "wrong-chronotype",
    title: "You're Living Against Your Chronotype",
    body: "Your chronotype is your biological preference for sleeping early or late. About 20% of people are Wolf types (natural night owls) who function best waking at 8–10 AM. If you're forcing a 6 AM wake-up when your biology is set for 8 AM, you're chronically sleep-depriving yourself regardless of how many hours you get. This 'social jet lag' causes the same fatigue symptoms as actual sleep deprivation.",
    link: { href: "/chronotype-calculator/", label: "Find your chronotype →" },
  },
  {
    num: "04",
    id: "poor-sleep-quality",
    title: "You're Getting Hours But Not Quality Sleep",
    body: "Eight hours of fragmented, light sleep provides far less restoration than six hours of uninterrupted deep and REM sleep. Factors that destroy sleep quality include: alcohol within 3 hours of bedtime (blocks REM entirely), a room temperature above 70°F, sleep apnea (causes micro-arousals you don't remember), and blue light exposure within 60 minutes of sleep — which delays melatonin onset by 1–3 hours.",
    link: { href: "/rem-sleep-calculator/", label: "Optimize your REM sleep →" },
  },
  {
    num: "05",
    id: "circadian-disruption",
    title: "Your Circadian Rhythm Is Misaligned",
    body: "Your circadian rhythm controls energy levels, hormone release, and body temperature across 24 hours. When it's disrupted — by irregular sleep schedules, shift work, or jet lag — your body releases cortisol (the alertness hormone) and melatonin at the wrong times. You feel exhausted when you should be awake, and wired when you should be asleep. Even a 30-minute difference in daily wake time can shift your circadian baseline significantly.",
    link: { href: "/circadian-rhythm/", label: "Learn about circadian rhythms →" },
  },
  {
    num: "06",
    id: "tiredness-after-eating",
    title: "You're Experiencing Postprandial Dip (Tired After Eating)",
    body: "If you're tired especially after lunch or after eating, this is the postprandial dip — a natural circadian drop in alertness that occurs between 1–3 PM regardless of what you ate. Eating large meals accelerates this by directing blood flow to digestion and releasing serotonin. High-carbohydrate meals worsen it. A 10–20 minute power nap during this window is scientifically validated to restore alertness better than caffeine.",
    link: { href: "/nap-calculator/", label: "Calculate the perfect nap →" },
  },
  {
    num: "07",
    id: "tiredness-but-cant-sleep",
    title: "You're Tired But Can't Sleep (Hyperarousal)",
    body: "Feeling exhausted but unable to fall asleep is a hallmark of hyperarousal — your nervous system is stuck in a state of high alertness even when sleep-deprived. Common causes: chronic stress keeping cortisol elevated at night, anxiety causing pre-sleep rumination, or paradoxically, lying in bed too long while awake (training your brain that bed = wakefulness). This pattern is the most common presentation of sleep-onset insomnia.",
    link: { href: "/insomnia/", label: "Understand insomnia →" },
  },
  {
    num: "08",
    id: "medical-causes",
    title: "An Underlying Medical Cause",
    body: "Persistent fatigue despite adequate sleep can signal a medical issue. The most common sleep-related conditions include: obstructive sleep apnea (30% of adults, causes hundreds of micro-arousals per night), thyroid disorders (hypothyroidism causes profound fatigue), iron-deficiency anemia (especially in women), depression, and diabetes. If you've addressed the sleep factors above and still feel constantly tired, consult a doctor and ask specifically about a sleep study.",
    link: null,
  },
];

export default function WhyAmISoTiredPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Why Am I So Tired All the Time? 8 Science-Backed Reasons",
            description:
              "Discover why you feel so tired all the time — even after sleeping. 8 evidence-based causes of chronic fatigue explained with actionable fixes.",
            url: "https://getsleepcalculator.net/why-am-i-so-tired/",
            datePublished: "2026-06-10",
            dateModified: "2026-06-10",
            author: {
              "@type": "Person",
              name: "Saad Zaib",
              url: "https://getsleepcalculator.net/about/",
            },
            publisher: {
              "@type": "Organization",
              name: "Get Sleep Calculator",
              url: "https://getsleepcalculator.net",
              logo: { "@type": "ImageObject", url: "https://getsleepcalculator.net/og-image.png" },
            },
            image: "https://getsleepcalculator.net/og-image.png",
            mainEntityOfPage: { "@type": "WebPage", "@id": "https://getsleepcalculator.net/why-am-i-so-tired/" },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", href: "/" },
              { name: "Why Am I So Tired?", href: "/why-am-i-so-tired/" },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            faqSchema([
              {
                question: "Why am I so tired all the time even when I get enough sleep?",
                answer:
                  "Feeling tired despite adequate sleep usually means one of three things: you're waking up mid-sleep-cycle (sleep inertia), your sleep quality is poor (fragmented, too warm, or alcohol-disrupted), or your circadian rhythm is misaligned. The quantity of sleep matters less than the quality and timing.",
              },
              {
                question: "Why am I so tired in the morning?",
                answer:
                  "Morning fatigue is most often caused by sleep inertia — waking during deep sleep rather than at the end of a 90-minute sleep cycle. Your alarm interrupting a sleep cycle floods the brain with adenosine (the sleep chemical) before it's been cleared. Try setting your alarm to wake at a multiple of 90 minutes from when you fall asleep.",
              },
              {
                question: "Why am I so tired after 8 hours of sleep?",
                answer:
                  "Feeling tired after 8 hours of sleep is a classic sign of waking at the wrong sleep cycle stage. If 8 hours doesn't land on a complete cycle (multiples of 90 minutes from when you actually fell asleep, accounting for ~14 minutes to fall asleep), your alarm interrupts deep sleep, causing pronounced grogginess. Try 7.5 hours (5 cycles) or 9 hours (6 cycles) instead.",
              },
              {
                question: "Why am I so tired but can't sleep?",
                answer:
                  "Being tired but unable to sleep is called hyperarousal — your nervous system is stuck in an alert state. Common causes: chronic stress elevating cortisol at night, anxiety-driven pre-sleep rumination, or having trained your brain to associate bed with wakefulness by spending too much awake time in bed. This is the defining symptom of sleep-onset insomnia.",
              },
              {
                question: "Why am I so tired and have no energy to do anything?",
                answer:
                  "Extreme fatigue with no energy often results from accumulated sleep debt, circadian rhythm disruption, or an underlying medical issue such as sleep apnea, hypothyroidism, or anemia. If you consistently sleep 7–9 hours and still feel exhausted, tracking your sleep debt and consulting a doctor about a sleep study is recommended.",
              },
              {
                question: "What are warning signs of fatigue?",
                answer:
                  "Four key warning signs of dangerous fatigue: 1) Microsleeps — involuntary 1–30 second blackouts while awake (extremely dangerous when driving), 2) Inability to concentrate on tasks you normally find easy, 3) Emotional dysregulation — overreacting to minor stressors, 4) Physical clumsiness — dropping objects, misjudging distances. These indicate severe sleep deprivation requiring immediate attention.",
              },
            ])
          ),
        }}
      />

      <article>
        {/* Hero */}
        <section
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(108,99,255,0.18) 0%, transparent 70%), var(--bg-primary)",
            padding: "4rem 0 3rem",
          }}
        >
          <div className="max-w-2xl mx-auto px-4">
            <nav className="text-xs mb-6" style={{ color: "var(--text-muted)" }}>
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">›</span>
              <span style={{ color: "var(--accent-light)" }}>Why Am I So Tired?</span>
            </nav>
            <div className="flex items-center gap-2 mb-3">
              <span
                className="text-xs font-semibold px-2 py-0.5 rounded-full"
                style={{ background: "rgba(99,102,241,0.15)", color: "#818cf8" }}
              >
                Sleep Science
              </span>
              <span style={{ fontSize: 12, color: "var(--text-muted)" }}>Last updated: June 10, 2026</span>
              <span style={{ fontSize: 12, color: "var(--text-muted)" }}>· 8 min read</span>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <span style={{ fontSize: 12, color: "var(--text-muted)" }}>
                ✍️ By <strong style={{ color: "var(--text-secondary)" }}>Saad Zaib</strong> · Full-Stack Developer &amp; Sleep Research
              </span>
            </div>
            <h1
              className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight"
              style={{ color: "var(--text-primary)" }}
            >
              Why Am I So Tired All the Time? 8 Science-Backed Reasons
            </h1>
            <p className="text-lg" style={{ color: "var(--text-muted)", lineHeight: 1.7 }}>
              Feeling exhausted — even after a full night of sleep — is one of the most common complaints in modern life. The cause is almost never just &quot;you need more sleep.&quot; Here are the 8 real reasons why you&apos;re always tired, and exactly how to fix each one.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="max-w-2xl mx-auto px-4 py-12">
          <TableOfContents
            items={[
              { id: "sleep-debt", text: "Accumulated Sleep Debt", level: 2 },
              { id: "sleep-inertia", text: "Waking Mid-Sleep Cycle (Sleep Inertia)", level: 2 },
              { id: "wrong-chronotype", text: "Living Against Your Chronotype", level: 2 },
              { id: "poor-sleep-quality", text: "Poor Sleep Quality (Not Just Hours)", level: 2 },
              { id: "circadian-disruption", text: "Circadian Rhythm Misalignment", level: 2 },
              { id: "tiredness-after-eating", text: "Tired After Eating (Postprandial Dip)", level: 2 },
              { id: "tiredness-but-cant-sleep", text: "Tired But Can't Sleep (Hyperarousal)", level: 2 },
              { id: "medical-causes", text: "Underlying Medical Causes", level: 2 },
              { id: "bottom-line", text: "Bottom Line", level: 2 },
            ]}
          />

          <div style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.9 }} className="flex flex-col gap-8">
            <div
              style={{
                background: "rgba(108,99,255,0.08)",
                border: "1px solid rgba(108,99,255,0.2)",
                borderRadius: 12,
                padding: "1.25rem",
              }}
            >
              <strong style={{ color: "var(--accent-light)" }}>Key takeaway:</strong> Chronic tiredness is rarely about sleeping &quot;more.&quot; It&apos;s almost always about sleeping <em>smarter</em> — at the right time, in the right cycles, at the right depth. Each of the 8 causes below has a specific fix.
            </div>

            <div>
              <h2
                style={{
                  fontSize: 22,
                  fontWeight: 800,
                  color: "var(--text-primary)",
                  marginBottom: 16,
                }}
              >
                The 8 Reasons You&apos;re Always Tired
              </h2>

              {reasons.map((r) => (
                <div
                  key={r.num}
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    borderRadius: 12,
                    padding: "1.25rem",
                    marginBottom: 12,
                  }}
                >
                  <div className="flex gap-3 items-start">
                    <span
                      style={{
                        background: "var(--accent)",
                        color: "#fff",
                        borderRadius: 8,
                        padding: "2px 8px",
                        fontSize: 11,
                        fontWeight: 800,
                        flexShrink: 0,
                        marginTop: 2,
                      }}
                    >
                      {r.num}
                    </span>
                    <div>
                      <h2
                        id={r.id}
                        style={{ fontWeight: 700, color: "var(--text-primary)", fontSize: 16, margin: "0 0 6px 0" }}
                      >
                        {r.title}
                      </h2>
                      <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.75, margin: "0 0 10px 0" }}>
                        {r.body}
                      </p>
                      {r.link && (
                        <Link
                          href={r.link.href}
                          style={{
                            fontSize: 13,
                            color: "var(--accent-light)",
                            textDecoration: "none",
                            fontWeight: 600,
                          }}
                        >
                          {r.link.label}
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Related calculators callout */}
            <div
              style={{
                background: "rgba(108,99,255,0.06)",
                border: "1px solid rgba(108,99,255,0.25)",
                borderRadius: 12,
                padding: "1.25rem",
              }}
            >
              <p style={{ fontWeight: 700, color: "var(--accent-light)", marginBottom: 10, fontSize: 14 }}>
                🛠 Fix Your Tiredness — Free Tools
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  { href: "/sleep-debt-calculator/", label: "Sleep Debt Calculator" },
                  { href: "/sleep-cycle-calculator/", label: "Sleep Cycle Calculator" },
                  { href: "/chronotype-calculator/", label: "Chronotype Quiz" },
                  { href: "/nap-calculator/", label: "Nap Calculator" },
                  { href: "/bedtime-calculator/", label: "Bedtime Calculator" },
                ].map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    style={{
                      padding: "6px 14px",
                      borderRadius: 6,
                      border: "1px solid rgba(108,99,255,0.3)",
                      background: "var(--bg-primary)",
                      color: "var(--accent-light)",
                      fontSize: 13,
                      textDecoration: "none",
                    }}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Bottom line */}
            <div
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: 12,
                padding: "1.5rem",
              }}
            >
              <h2
                id="bottom-line"
                style={{ fontWeight: 700, color: "var(--text-primary)", marginBottom: 8, fontSize: 20 }}
              >
                Bottom Line
              </h2>
              <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.75 }}>
                Feeling tired all the time is almost always fixable without medication. Start by calculating your{" "}
                <Link href="/sleep-debt-calculator/" style={{ color: "var(--accent-light)" }}>
                  sleep debt
                </Link>
                , then check whether you&apos;re waking at the end of a{" "}
                <Link href="/sleep-cycle-calculator/" style={{ color: "var(--accent-light)" }}>
                  90-minute sleep cycle
                </Link>
                . If those are both fine, investigate your{" "}
                <Link href="/chronotype-calculator/" style={{ color: "var(--accent-light)" }}>
                  chronotype
                </Link>{" "}
                — you may simply be living on the wrong schedule for your biology. Persistent fatigue despite 7–9 hours of quality sleep warrants a medical evaluation.
              </p>
            </div>

            {/* FAQ Section */}
            <div>
              <h2 style={{ fontSize: 20, fontWeight: 800, color: "var(--text-primary)", marginBottom: 12 }}>
                Frequently Asked Questions
              </h2>
              <div className="flex flex-col gap-3">
                {[
                  {
                    q: "Why am I so tired after 8 hours of sleep?",
                    a: "Waking at the wrong point in your 90-minute sleep cycle causes this. If 8 hours doesn't align with a cycle endpoint (accounting for ~14 minutes to fall asleep), your alarm cuts into deep sleep and causes sleep inertia. Try 7.5 hours (5 complete cycles) instead and see if you wake feeling more refreshed.",
                  },
                  {
                    q: "Why am I so tired in the morning?",
                    a: "Morning grogginess is sleep inertia — the brain is flooded with adenosine when woken during deep sleep. The fix: align your alarm with the end of a sleep cycle using a sleep calculator, and get bright light exposure within 10 minutes of waking to clear adenosine faster.",
                  },
                  {
                    q: "Why am I so tired but can't sleep?",
                    a: "This is hyperarousal — your nervous system is stuck in fight-or-flight mode even when exhausted. Common causes are chronic stress, anxiety, or spending too much awake time in bed. The evidence-based fix is stimulus control therapy: get out of bed if you're awake more than 20 minutes and only return when genuinely sleepy.",
                  },
                  {
                    q: "Is being tired all the time a sign of depression?",
                    a: "Persistent, unexplained fatigue combined with low mood, loss of interest in activities, and difficulty concentrating can be symptoms of depression or dysthymia. Depression profoundly disrupts sleep architecture — specifically reducing deep sleep and increasing early-morning waking. If fatigue is accompanied by mood symptoms, consult a healthcare provider.",
                  },
                ].map((item) => (
                  <details
                    key={item.q}
                    className="rounded-2xl overflow-hidden"
                    style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
                  >
                    <summary
                      className="px-5 py-4 font-semibold cursor-pointer list-none flex justify-between items-center"
                      style={{ color: "var(--text-primary)", fontSize: 14 }}
                    >
                      {item.q}
                      <span style={{ color: "var(--accent-light)", flexShrink: 0, marginLeft: 8 }}>+</span>
                    </summary>
                    <p
                      className="px-5 pb-4 text-sm leading-relaxed"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>

          <AuthorBio />
          <RelatedArticles
            posts={[
              {
                href: "/blog/why-you-wake-up-tired/",
                title: "Why You Wake Up Tired Even After 8 Hours of Sleep",
                excerpt: "8 hidden causes of morning fatigue — and exactly how to fix each one.",
                readTime: "8 min",
                category: "Sleep Science",
              },
              {
                href: "/sleep-inertia/",
                title: "Sleep Inertia: Why You Feel Groggy After Waking",
                excerpt: "What sleep inertia is, why it happens, and how to wake up alert using sleep cycle timing.",
                readTime: "6 min",
                category: "Sleep Science",
              },
              {
                href: "/blog/how-to-fall-asleep-faster/",
                title: "How to Sleep Fast: 12 Science-Backed Tips",
                excerpt: "Cut sleep onset time from 30+ minutes to under 10 using evidence-based techniques.",
                readTime: "7 min",
                category: "Sleep Tips",
              },
            ]}
          />
        </section>
      </article>
    </>
  );
}
