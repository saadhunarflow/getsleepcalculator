import type { Metadata } from "next";
import Link from "next/link";
import AuthorBio from "@/app/components/AuthorBio";
import RelatedArticles from "@/app/components/RelatedArticles";
import TableOfContents from "@/app/components/TableOfContents";
import { breadcrumbSchema, faqSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Celebrity Sleep Schedules: How Much Do Famous People Sleep? (2026)",
  description:
    "How much do Elon Musk, Jeff Bezos, LeBron James, and other famous people sleep? Data-backed look at celebrity sleep schedules and what science says about them.",
  alternates: { canonical: "https://getsleepcalculator.net/blog/celebrity-sleep-schedules/" },
  openGraph: {
    title: "Celebrity Sleep Schedules: How Much Do Famous People Sleep?",
    description: "Elon Musk sleeps 6 hours, LeBron James sleeps 12, Jeff Bezos gets 8. What do celebrity sleep habits reveal about the sleep–success connection?",
    url: "https://getsleepcalculator.net/blog/celebrity-sleep-schedules/",
    type: "article",
    images: [{ url: "https://getsleepcalculator.net/og-image.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
};

export default function CelebritySleepSchedules() {
  const celebrities = [
    { name: "Jeff Bezos", role: "Amazon Founder", sleep: "8 hours", bed: "~10 PM", wake: "~6 AM", rating: "✅ Optimal", color: "#22c55e", quote: "I need eight hours. I think better, I have more energy, my mood is better.", note: "Bezos has publicly stated that 8 hours makes him a better decision-maker. He prioritizes sleep over early morning meetings." },
    { name: "LeBron James", role: "NBA Superstar", sleep: "12 hours", bed: "~10 PM", wake: "~10 AM", rating: "✅ Optimal for athletes", color: "#22c55e", quote: "Sleep is the best recovery tool. I sleep 12 hours a night plus naps.", note: "Elite athletes have higher sleep demands for muscle repair, HGH secretion, and glycogen restoration. LeBron's 12-hour schedule is scientifically sound." },
    { name: "Roger Federer", role: "Tennis Champion", sleep: "11–12 hours", bed: "~9:30 PM", wake: "~9 AM", rating: "✅ Optimal for athletes", color: "#22c55e", quote: "If I don't sleep eleven to twelve hours per day, I'm not right.", note: "Like LeBron, Federer's extended sleep reflects legitimate athletic recovery requirements, not indulgence." },
    { name: "Barack Obama", role: "44th US President", sleep: "6 hours", bed: "~1 AM", wake: "~7 AM", rating: "⚠️ Below optimal", color: "#f59e0b", quote: "I rarely get more than six hours — I don't function well on much less.", note: "Obama's schedule is a common executive pattern. Research suggests leaders making this trade-off pay a cognitive cost that goes unnoticed by those around them." },
    { name: "Elon Musk", role: "Tesla / SpaceX CEO", sleep: "6 hours", bed: "~2–3 AM", wake: "~8–9 AM", rating: "⚠️ Below optimal", color: "#f59e0b", quote: "I find if I don't get six hours I'm quite grumpy. I need more than six to be at peak performance.", note: "Musk himself has said 6 hours is below his performance peak. His schedule has shifted in recent years — early interviews mentioned 6h, more recently he has cited 8h as his goal." },
    { name: "Tim Cook", role: "Apple CEO", sleep: "7–8 hours", bed: "~9:30 PM", wake: "~5 AM", rating: "✅ Optimal", color: "#22c55e", quote: "I'm an early riser. Mornings give me quiet time to catch up before the world starts.", note: "Cook's 7–8 hour schedule, combined with his disciplined 9:30 PM bedtime, is among the most scientifically optimal executive sleep patterns." },
    { name: "Serena Williams", role: "Tennis Legend", sleep: "9–10 hours", bed: "~9 PM", wake: "~6–7 AM", rating: "✅ Optimal for athletes", color: "#22c55e", quote: "Sleep is crucial. I sleep nine to ten hours most nights.", note: "Athletes competing at this level require extended sleep for tissue repair and REM consolidation of complex motor skills." },
    { name: "Margaret Thatcher", role: "Former UK PM", sleep: "4 hours", bed: "~2 AM", wake: "~6 AM", rating: "🔴 Dangerously low", color: "#ef4444", quote: "Sleep is for wimps.", note: "Thatcher's legendary sleep deprivation is now studied as a cautionary example. She developed dementia in later life — chronic sleep deprivation is a known risk factor for Alzheimer's (beta-amyloid accumulation)." },
    { name: "Arianna Huffington", role: "Thrive Global CEO", sleep: "8–9 hours", bed: "~10:30 PM", wake: "~7 AM", rating: "✅ Optimal", color: "#22c55e", quote: "I had to collapse and break my cheekbone before I woke up to the importance of sleep.", note: "Huffington famously collapsed from exhaustion in 2007 and became one of the most vocal advocates for sleep. Her schedule is now a model for the reformed executive." },
    { name: "Winston Churchill", role: "WWII Prime Minister", sleep: "8 hours (biphasic)", bed: "~3 AM", wake: "~11 AM", rating: "✅ Adequate (biphasic)", color: "#22c55e", quote: "Never stand when you can sit. Never sit when you can lie down. Sleep whenever you get a chance.", note: "Churchill slept in two phases: a main sleep from 3–11 AM plus a mandatory 1.5-hour afternoon nap. His total was ~8 hours, just unconventionally distributed." },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BlogPosting",
        headline: "Celebrity Sleep Schedules: How Much Do Famous People Sleep?",
        description: "Data-backed look at how much famous people sleep — from Elon Musk to LeBron James — and what science says about their habits.",
        url: "https://getsleepcalculator.net/blog/celebrity-sleep-schedules/",
        datePublished: "2026-06-10", dateModified: "2026-06-10",
        author: { "@type": "Person", name: "Saad Zaib", url: "https://getsleepcalculator.net/about/" },
        publisher: { "@type": "Organization", name: "Get Sleep Calculator", url: "https://getsleepcalculator.net", logo: { "@type": "ImageObject", url: "https://getsleepcalculator.net/og-image.png" } },
        image: "https://getsleepcalculator.net/og-image.png",
        mainEntityOfPage: { "@type": "WebPage", "@id": "https://getsleepcalculator.net/blog/celebrity-sleep-schedules/" },
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: "Home", href: "/" },
        { name: "Blog", href: "/blog/" },
        { name: "Celebrity Sleep Schedules", href: "/blog/celebrity-sleep-schedules/" },
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema([
        { question: "How many hours does Elon Musk sleep?", answer: "Elon Musk has stated he sleeps approximately 6 hours per night, typically going to bed around 2–3 AM and waking around 8–9 AM. He has acknowledged this is below his peak performance level, saying he feels 'quite grumpy' on less than 6 hours but that more than 6 doesn't improve his energy. Sleep scientists would classify 6 hours as insufficient for most adults — cognitive testing consistently shows impairment at this level." },
        { question: "How much does Jeff Bezos sleep?", answer: "Jeff Bezos sleeps 8 hours per night and has spoken publicly about prioritizing sleep as a competitive advantage. He goes to bed around 10 PM and wakes around 6 AM. Bezos has said: 'I need eight hours. I think better, I have more energy, my mood is better.' His schedule is among the most scientifically optimal of any major CEO." },
        { question: "How many hours does LeBron James sleep?", answer: "LeBron James sleeps approximately 12 hours per night plus additional naps, making him one of the most extreme sleep investors among public figures. This is legitimate for professional athletes — muscle repair, human growth hormone secretion, and motor skill consolidation all require extended sleep. His trainer has confirmed this is a non-negotiable part of his performance protocol." },
        { question: "Do successful people sleep less?", answer: "The common narrative that successful people sleep 4–5 hours is largely a myth driven by survivorship bias. When you examine the full population of successful leaders, the majority sleep 7–8 hours. The ones who famously slept 4 hours (like Thatcher or Edison) are outliers, and many paid serious health costs. High-performing CEOs like Bezos, Tim Cook, and Arianna Huffington actively prioritize 7–9 hours." },
      ]))}} />

      <article>
        <section style={{ background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(108,99,255,0.18) 0%, transparent 70%), var(--bg-primary)", padding: "4rem 0 3rem" }}>
          <div className="max-w-2xl mx-auto px-4">
            <Link href="/blog/" style={{ fontSize: 13, color: "var(--accent-light)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 4, marginBottom: 24 }}>← Back to Blog</Link>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: "rgba(99,102,241,0.15)", color: "#818cf8" }}>Sleep Science</span>
              <span style={{ fontSize: 12, color: "var(--text-muted)" }}>June 10, 2026 · 8 min read</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight" style={{ color: "var(--text-primary)" }}>
              Celebrity Sleep Schedules: How Much Do Famous People Sleep?
            </h1>
            <p className="text-lg" style={{ color: "var(--text-muted)", lineHeight: 1.7 }}>
              Jeff Bezos insists on 8 hours. LeBron James sleeps 12. Elon Musk gets 6 — and admits it's below his performance peak. Here's what celebrity sleep habits actually reveal about the sleep–success connection, and what science says about each schedule.
            </p>
          </div>
        </section>

        <section className="max-w-2xl mx-auto px-4 py-12">
          <TableOfContents items={[
            { id: "schedules", text: "Celebrity Sleep Schedules (Detailed)", level: 2 },
            { id: "myth", text: "The 'Successful People Sleep Less' Myth", level: 2 },
            { id: "athletes", text: "Why Athletes Sleep So Much More", level: 2 },
            { id: "takeaways", text: "What You Should Actually Take Away", level: 2 },
            { id: "faq", text: "Frequently Asked Questions", level: 2 },
          ]} />

          <div style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.9 }} className="flex flex-col gap-8">

            <div style={{ background: "rgba(108,99,255,0.08)", border: "1px solid rgba(108,99,255,0.2)", borderRadius: 12, padding: "1.25rem" }}>
              <strong style={{ color: "var(--accent-light)" }}>Key finding:</strong> When you look at the full picture, <strong style={{ color: "var(--text-primary)" }}>most high-performing people sleep 7–9 hours</strong>. The "I only need 4 hours" narrative is driven by survivorship bias — we celebrate the outliers, not the majority who sleep adequately.
            </div>

            <div>
              <h2 id="schedules" style={{ fontSize: 22, fontWeight: 800, color: "var(--text-primary)", marginBottom: 12 }}>Celebrity Sleep Schedules (Detailed)</h2>
              <div className="flex flex-col gap-4">
                {celebrities.map((person) => (
                  <div key={person.name} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 16, padding: "1.5rem" }}>
                    <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
                      <div>
                        <p style={{ fontWeight: 800, color: "var(--text-primary)", fontSize: 16, margin: 0 }}>{person.name}</p>
                        <p style={{ fontSize: 12, color: "var(--text-muted)", margin: 0 }}>{person.role}</p>
                      </div>
                      <span style={{ fontSize: 12, color: person.color, fontWeight: 700, background: `${person.color}18`, padding: "2px 10px", borderRadius: 20, border: `1px solid ${person.color}40`, whiteSpace: "nowrap" }}>{person.rating}</span>
                    </div>
                    <div className="grid grid-cols-3 gap-3 mb-3">
                      {[
                        { label: "Sleep", value: person.sleep },
                        { label: "Bedtime", value: person.bed },
                        { label: "Wake", value: person.wake },
                      ].map((stat) => (
                        <div key={stat.label} style={{ background: "var(--bg-primary)", borderRadius: 8, padding: "0.5rem", textAlign: "center" }}>
                          <p style={{ fontSize: 10, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em", margin: 0 }}>{stat.label}</p>
                          <p style={{ fontSize: 14, fontWeight: 700, color: "var(--text-primary)", margin: 0 }}>{stat.value}</p>
                        </div>
                      ))}
                    </div>
                    <blockquote style={{ borderLeft: "3px solid var(--accent)", paddingLeft: 12, margin: "0 0 10px 0", fontSize: 13, color: "var(--text-muted)", fontStyle: "italic" }}>
                      "{person.quote}"
                    </blockquote>
                    <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>{person.note}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 id="myth" style={{ fontSize: 22, fontWeight: 800, color: "var(--text-primary)", marginBottom: 12 }}>The "Successful People Sleep Less" Myth</h2>
              <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.8, marginBottom: 10 }}>
                The idea that successful people sleep 4–5 hours is one of the most damaging myths in modern culture. It stems from survivorship bias: we hear about the rare leaders who claimed to sleep little. We don't hear about the many who slept properly.
              </p>
              <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.8, marginBottom: 10 }}>
                Matthew Walker, PhD (author of <em>Why We Sleep</em>) has documented the pattern clearly: when you survey CEOs, athletes, and top performers systematically (not just the ones who make headlines), <strong style={{ color: "var(--text-primary)" }}>the overwhelming majority sleep 7–9 hours</strong>. Jeff Bezos, Tim Cook, Sheryl Sandberg, Arianna Huffington, Bill Gates — all report 7+ hours.
              </p>
              <div style={{ background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: 12, padding: "1.25rem" }}>
                <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.8, margin: 0 }}>
                  <strong style={{ color: "#f87171" }}>The Edison effect:</strong> Thomas Edison famously slept 4 hours — but he also took multiple naps during the day and was documented sleeping at his desk for hours at a time. His public "4 hours" claim obscured a much higher actual total sleep time.
                </p>
              </div>
            </div>

            <div>
              <h2 id="athletes" style={{ fontSize: 22, fontWeight: 800, color: "var(--text-primary)", marginBottom: 12 }}>Why Athletes Sleep So Much More</h2>
              <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.8, marginBottom: 10 }}>
                The gap between executive sleep (7–8h) and athlete sleep (9–12h) is real and scientifically justified:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { icon: "💪", title: "Muscle Protein Synthesis", body: "80% of muscle repair happens during NREM Stage 3 (deep sleep). More training = more damage = more sleep needed for full repair." },
                  { icon: "🧪", title: "Growth Hormone Secretion", body: "Human growth hormone (HGH) is released primarily during the first NREM Stage 3 period. Athletes need maximum deep sleep for optimal HGH release." },
                  { icon: "⚡", title: "Glycogen Restoration", body: "Muscle glycogen (energy stores) replenishes most efficiently during sleep. Athletes who short-sleep start their next session glycogen-depleted." },
                  { icon: "🎯", title: "Motor Skill Consolidation", body: "REM sleep in cycles 4–6 (hours 6–9) consolidates complex motor patterns. Athletes cutting sleep to 7 hours miss the most performance-relevant REM." },
                ].map((card) => (
                  <div key={card.title} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, padding: "1rem" }}>
                    <div className="flex gap-2 items-start">
                      <span style={{ fontSize: 18, flexShrink: 0 }}>{card.icon}</span>
                      <div>
                        <p style={{ fontWeight: 700, color: "var(--text-primary)", fontSize: 13, marginBottom: 4 }}>{card.title}</p>
                        <p style={{ fontSize: 12, color: "var(--text-muted)", lineHeight: 1.7 }}>{card.body}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.25)", borderRadius: 12, padding: "1.5rem" }}>
              <h2 id="takeaways" style={{ fontSize: 20, fontWeight: 800, color: "var(--text-primary)", marginBottom: 12 }}>What You Should Actually Take Away</h2>
              <div className="flex flex-col gap-3">
                {[
                  "Don't emulate the sleep habits of sleep-deprived celebrities — emulate the ones who prioritize sleep (Bezos, Cook, Federer, LeBron).",
                  "Seven to nine hours is the research consensus for adults — this is what most high performers actually achieve, not the 4–6 hour myth.",
                  "Athletes legitimately need more sleep because their physical demands require extended repair time — this isn't laziness.",
                  "The 'I only need 4 hours' claim is almost always either false, compensated by napping, or coming at a long-term health cost.",
                  "Consistency matters more than the famous person's number. Find your own optimal by tracking sleep with our Sleep Debt Calculator.",
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span style={{ width: 24, height: 24, borderRadius: "50%", background: "rgba(34,197,94,0.2)", color: "#4ade80", fontWeight: 700, fontSize: 12, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>{i + 1}</span>
                    <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.75, margin: 0 }}>{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: "rgba(108,99,255,0.06)", border: "1px solid rgba(108,99,255,0.25)", borderRadius: 12, padding: "1.25rem" }}>
              <p style={{ fontWeight: 700, color: "var(--accent-light)", marginBottom: 10, fontSize: 14 }}>🛠 Find Your Optimal Sleep</p>
              <div className="flex flex-wrap gap-2">
                {[
                  { href: "/how-much-sleep-do-i-need/", label: "How Much Sleep Do I Need?" },
                  { href: "/sleep-debt-calculator/", label: "Sleep Debt Calculator" },
                  { href: "/chronotype-calculator/", label: "Chronotype Calculator" },
                  { href: "/sleep-schedule-builder/", label: "Sleep Schedule Builder" },
                ].map((l) => (
                  <Link key={l.href} href={l.href} style={{ padding: "6px 14px", borderRadius: 6, border: "1px solid rgba(108,99,255,0.3)", background: "var(--bg-primary)", color: "var(--accent-light)", fontSize: 13, textDecoration: "none" }}>{l.label}</Link>
                ))}
              </div>
            </div>

            <div>
              <h2 id="faq" style={{ fontSize: 22, fontWeight: 800, color: "var(--text-primary)", marginBottom: 12 }}>Frequently Asked Questions</h2>
              <div className="flex flex-col gap-3">
                {[
                  { q: "How many hours does Elon Musk sleep?", a: "Elon Musk sleeps approximately 6 hours per night, typically going to bed around 2–3 AM. He has acknowledged that more than 6 hours doesn't increase his energy, though he's also stated 6 hours is below his performance peak. Sleep scientists would categorize this as mild chronic sleep deprivation for most people — though a small percentage carry genes allowing fewer hours." },
                  { q: "How much does Jeff Bezos sleep?", a: "Jeff Bezos sleeps 8 hours per night, going to bed around 10 PM and waking around 6 AM. He has been outspoken about sleep being a competitive advantage, saying it makes him think better and have more energy. His 8-hour schedule is scientifically optimal and aligns with NSF recommendations." },
                  { q: "Why does LeBron James sleep so much?", a: "LeBron James sleeps 12+ hours because elite athletes have dramatically higher sleep requirements than non-athletes. His training load requires extended muscle repair (NREM Stage 3), growth hormone secretion, and REM consolidation of complex motor skills. This is backed by research — Stanford studies show sleep extension significantly improves athletic performance." },
                  { q: "Do most successful people really sleep less?", a: "No — this is a myth. When you study successful people systematically (not just famous outliers), the majority sleep 7–9 hours. Bezos, Cook, Huffington, Federer, Serena Williams all prioritize full sleep. The 4–6 hour narrative is survivorship bias amplified by cultural glorification of overwork." },
                ].map(({ q, a }) => (
                  <details key={q} className="rounded-2xl overflow-hidden" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
                    <summary className="px-5 py-4 font-semibold cursor-pointer list-none flex justify-between items-start gap-4" style={{ color: "var(--text-primary)", fontSize: 14 }}>
                      <span>{q}</span>
                      <span className="shrink-0" style={{ color: "var(--accent-light)" }}>+</span>
                    </summary>
                    <p className="px-5 pb-5 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>

          <AuthorBio />
          <RelatedArticles posts={[
            { href: "/how-much-sleep-do-i-need/", title: "How Much Sleep Do I Need?", excerpt: "NSF recommendations by age, gender, and lifestyle — find your personal optimal.", readTime: "Guide", category: "Sleep Science" },
            { href: "/blog/is-6-hours-of-sleep-enough/", title: "Is 6 Hours of Sleep Enough?", excerpt: "The science on what actually happens when you sleep Elon Musk's schedule.", readTime: "6 min", category: "Sleep Science" },
            { href: "/chronotype-calculator/", title: "Chronotype Calculator", excerpt: "Are you a Lion, Bear, Wolf, or Dolphin? Find your biological sleep type.", readTime: "Tool", category: "Calculator" },
          ]} />
        </section>
      </article>
    </>
  );
}
