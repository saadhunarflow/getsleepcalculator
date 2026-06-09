import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sleep Blog – Science-Based Sleep Tips & Guides | Get Sleep Calculator",
  description: "Expert sleep articles covering sleep science, insomnia fixes, sleep hygiene, circadian rhythms, and more. Evidence-based advice to help you sleep better tonight.",
  alternates: { canonical: "https://getsleepcalculator.net/blog/" },
  openGraph: {
    title: "Sleep Blog – Science-Based Sleep Tips & Guides | Get Sleep Calculator",
    description: "Expert sleep articles covering sleep science, insomnia fixes, sleep hygiene, circadian rhythms, and more. Evidence-based advice to help you sleep better tonight.",
    url: "https://getsleepcalculator.net/blog/",
    siteName: "Get Sleep Calculator",
    type: "website",
    images: [{ url: "https://getsleepcalculator.net/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sleep Blog – Science-Based Sleep Tips & Guides",
    description: "Expert sleep articles covering sleep science, insomnia fixes, sleep hygiene, and more.",
  },
};

const posts = [
  {
    slug: "celebrity-sleep-schedules",
    title: "Celebrity Sleep Schedules: How Much Do Famous People Sleep? (2026)",
    excerpt: "Elon Musk sleeps 6 hours, LeBron James sleeps 12, Jeff Bezos insists on 8. What celebrity sleep habits reveal about the sleep–success connection.",
    category: "Sleep Science",
    categoryColor: "#8b5cf6",
    date: "June 10, 2026",
    readTime: "8 min read",
    emoji: "⭐",
  },
  {
    slug: "if-i-sleep-at-10-what-time-should-i-wake-up",
    title: "If I Sleep at 10 PM, What Time Should I Wake Up? (Sleep Cycle Chart)",
    excerpt: "Find the exact best times to wake up if you go to bed at 10 PM. Based on 90-minute sleep cycles — includes a full chart for 9 PM to 2 AM bedtimes.",
    category: "Sleep Cycles",
    categoryColor: "#06b6d4",
    date: "June 5, 2026",
    readTime: "7 min read",
    emoji: "🌙",
  },
  {
    slug: "if-i-sleep-at-11-what-time-should-i-wake-up",
    title: "If I Sleep at 11 PM, What Time Should I Wake Up?",
    excerpt: "The best wake-up times for an 11 PM bedtime are 6:44 AM (5 cycles) or 8:14 AM (6 cycles). Full sleep cycle chart included.",
    category: "Sleep Cycles",
    categoryColor: "#06b6d4",
    date: "June 10, 2026",
    readTime: "6 min read",
    emoji: "🌙",
  },
  {
    slug: "if-i-sleep-at-9pm-what-time-should-i-wake-up",
    title: "If I Sleep at 9 PM, What Time Should I Wake Up?",
    excerpt: "The best wake-up times for a 9 PM bedtime are 4:44 AM (5 cycles) or 6:14 AM (6 cycles). Ideal for early risers and Lion chronotypes.",
    category: "Sleep Cycles",
    categoryColor: "#06b6d4",
    date: "June 10, 2026",
    readTime: "6 min read",
    emoji: "🌅",
  },
  {
    slug: "if-i-go-to-sleep-at-midnight-what-time-should-i-wake-up",
    title: "If I Go to Sleep at Midnight, What Time Should I Wake Up?",
    excerpt: "Sleeping at midnight? The best wake-up times are 7:44 AM (5 cycles) or 9:14 AM (6 cycles). Full sleep cycle chart for night owls.",
    category: "Sleep Cycles",
    categoryColor: "#06b6d4",
    date: "June 10, 2026",
    readTime: "6 min read",
    emoji: "🦉",
  },
  {
    slug: "if-i-sleep-at-1am-what-time-should-i-wake-up",
    title: "If I Sleep at 1 AM, What Time Should I Wake Up?",
    excerpt: "The best wake-up times for a 1 AM bedtime are 8:44 AM (5 cycles) or 10:14 AM (6 cycles). Full sleep cycle chart for night owls.",
    category: "Sleep Cycles",
    categoryColor: "#06b6d4",
    date: "June 10, 2026",
    readTime: "6 min read",
    emoji: "🌃",
  },
  {
    slug: "what-time-should-i-sleep-to-wake-up-at-5am",
    title: "What Time Should I Sleep to Wake Up at 5 AM?",
    excerpt: "To wake at 5 AM refreshed, go to bed at 9:16 PM (5 cycles, recommended) or 10:46 PM (4 cycles). Full bedtime chart for early risers.",
    category: "Sleep Cycles",
    categoryColor: "#06b6d4",
    date: "June 10, 2026",
    readTime: "5 min read",
    emoji: "🌄",
  },
  {
    slug: "what-time-should-i-sleep-to-wake-up-at-6am",
    title: "What Time Should I Sleep to Wake Up at 6 AM?",
    excerpt: "To wake at 6 AM refreshed, go to bed at 10:16 PM (5 cycles, recommended) or 8:46 PM (6 cycles). Full bedtime chart included.",
    category: "Sleep Cycles",
    categoryColor: "#06b6d4",
    date: "June 10, 2026",
    readTime: "5 min read",
    emoji: "⏰",
  },
  {
    slug: "what-time-should-i-sleep-to-wake-up-at-7am",
    title: "What Time Should I Sleep to Wake Up at 7 AM?",
    excerpt: "To wake at 7 AM refreshed, go to bed at 11:16 PM (5 cycles, recommended). Why midnight → 7 AM is a mid-cycle mistake — and how to fix it.",
    category: "Sleep Cycles",
    categoryColor: "#06b6d4",
    date: "June 10, 2026",
    readTime: "5 min read",
    emoji: "🌞",
  },
  {
    slug: "is-4-hours-of-sleep-enough",
    title: "Is 4 Hours of Sleep Enough? What Happens to Your Body",
    excerpt: "Four hours of sleep causes cognitive impairment equivalent to being legally drunk. Here's exactly what happens — and who the rare exceptions really are.",
    category: "Sleep Science",
    categoryColor: "#8b5cf6",
    date: "June 10, 2026",
    readTime: "6 min read",
    emoji: "🚨",
  },
  {
    slug: "is-6-hours-of-sleep-enough",
    title: "Is 6 Hours of Sleep Enough? (For Adults, Students & Teens)",
    excerpt: "The science is clear: 6 hours falls below NSF minimum for most adults. Here's exactly what happens to your brain and body — and who might be the exception.",
    category: "Sleep Science",
    categoryColor: "#8b5cf6",
    date: "June 10, 2026",
    readTime: "6 min read",
    emoji: "⏱️",
  },
  {
    slug: "is-5-hours-of-sleep-enough",
    title: "Is 5 Hours of Sleep Enough? What Science Says",
    excerpt: "Five hours causes measurable cognitive impairment equivalent to missing a full night — here's what happens after one night, one week, and chronically.",
    category: "Sleep Science",
    categoryColor: "#8b5cf6",
    date: "June 10, 2026",
    readTime: "5 min read",
    emoji: "😰",
  },
  {
    slug: "is-7-hours-of-sleep-enough",
    title: "Is 7 Hours of Sleep Enough? The Borderline Answer",
    excerpt: "Seven hours sits at the NSF minimum — it may be enough for some adults but not most. Here's how to know if it works for your biology.",
    category: "Sleep Science",
    categoryColor: "#8b5cf6",
    date: "June 10, 2026",
    readTime: "5 min read",
    emoji: "🤔",
  },
  {
    slug: "is-9-hours-of-sleep-enough",
    title: "Is 9 Hours of Sleep Enough? (Or Too Much?)",
    excerpt: "Nine hours is ideal for teens and athletes, within range for some adults, and potentially a warning sign for others. Find out which group you're in.",
    category: "Sleep Science",
    categoryColor: "#8b5cf6",
    date: "June 10, 2026",
    readTime: "5 min read",
    emoji: "😴",
  },
  {
    slug: "how-to-fall-asleep-faster",
    title: "How to Sleep Fast: 12 Science-Backed Tips to Fall Asleep Quickly",
    excerpt: "Learn how to sleep fast with 12 proven techniques. Fall asleep in under 10 minutes using methods backed by CBT-I research and sleep labs.",
    category: "Sleep Tips",
    categoryColor: "#6366f1",
    date: "May 28, 2026",
    readTime: "7 min read",
    emoji: "😴",
  },
  {
    slug: "why-you-wake-up-tired",
    title: "Why You Wake Up Tired (Even After 8 Hours of Sleep)",
    excerpt: "Waking up exhausted despite a full night's sleep? Here are the 8 most common reasons — and exactly how to fix each one.",
    category: "Sleep Science",
    categoryColor: "#8b5cf6",
    date: "May 27, 2026",
    readTime: "8 min read",
    emoji: "😫",
  },
  {
    slug: "best-time-to-wake-up",
    title: "The Best Time to Wake Up According to Sleep Science",
    excerpt: "The best wake-up time isn't about the hour on the clock — it's about where you are in your sleep cycle. Here's how to find yours.",
    category: "Sleep Cycles",
    categoryColor: "#06b6d4",
    date: "May 26, 2026",
    readTime: "6 min read",
    emoji: "⏰",
  },
  {
    slug: "sleep-deprivation-effects",
    title: "What Happens to Your Body After One Sleepless Night",
    excerpt: "Missing just one night of sleep triggers measurable changes in your brain, immune system, and metabolism. The science is more alarming than you think.",
    category: "Sleep Science",
    categoryColor: "#8b5cf6",
    date: "May 25, 2026",
    readTime: "9 min read",
    emoji: "🧠",
  },
  {
    slug: "how-to-fix-sleep-schedule",
    title: "How to Fix Your Sleep Schedule in 7 Days",
    excerpt: "Whether you're a night owl trying to become a morning person, or you've wrecked your schedule with late nights — this step-by-step plan works.",
    category: "Sleep Tips",
    categoryColor: "#6366f1",
    date: "May 24, 2026",
    readTime: "7 min read",
    emoji: "📅",
  },
];

const categories = ["All", "Sleep Tips", "Sleep Science", "Sleep Cycles"];

export default function BlogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Blog",
        name: "Get Sleep Calculator Blog",
        url: "https://getsleepcalculator.net/blog",
        description: "Science-based sleep articles and guides to help you sleep better.",
        publisher: {
          "@type": "Organization",
          name: "Get Sleep Calculator",
          url: "https://getsleepcalculator.net",
        },
        blogPost: posts.map((p) => ({
          "@type": "BlogPosting",
          headline: p.title,
          url: `https://getsleepcalculator.net/blog/${p.slug}/`,
          description: p.excerpt,
          datePublished: p.date,
          author: {
            "@type": "Person",
            name: "Saad Zaib",
            url: "https://getsleepcalculator.net/about/",
            sameAs: ["https://hunarflow.com"],
          },
        })),
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://getsleepcalculator.net" },
          { "@type": "ListItem", position: 2, name: "Blog", item: "https://getsleepcalculator.net/blog" },
        ],
      })}} />

      {/* Hero */}
      <section style={{ background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(108,99,255,0.18) 0%, transparent 70%), var(--bg-primary)", padding: "4rem 0 3rem" }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-4" style={{ background: "rgba(108,99,255,0.15)", border: "1px solid rgba(108,99,255,0.3)", color: "var(--accent-light)" }}>
            📝 Sleep Science & Tips
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4" style={{ color: "var(--text-primary)" }}>
            Sleep Blog
          </h1>
          <p className="text-lg" style={{ color: "var(--text-muted)", maxWidth: 520, margin: "0 auto" }}>
            Evidence-based sleep guides, tips, and research — written to help you actually sleep better.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-2 gap-6">
          {posts.map((post, i) => (
            <Link key={post.slug} href={`/blog/${post.slug}/`} style={{ textDecoration: "none" }}>
              <article
                style={{
                  background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 16,
                  padding: "1.5rem", height: "100%", display: "flex", flexDirection: "column",
                  transition: "border-color 0.2s, transform 0.2s", cursor: "pointer",
                }}
                className="hover:border-accent-light group"
              >
                {i === 0 && (
                  <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold mb-3" style={{ background: "rgba(108,99,255,0.15)", color: "var(--accent-light)", width: "fit-content" }}>
                    ⭐ Featured
                  </div>
                )}
                <div className="text-4xl mb-4">{post.emoji}</div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: `${post.categoryColor}22`, color: post.categoryColor }}>
                    {post.category}
                  </span>
                </div>
                <h2 className="text-lg font-bold mb-3 leading-snug" style={{ color: "var(--text-primary)" }}>
                  {post.title}
                </h2>
                <p className="text-sm flex-1 mb-4" style={{ color: "var(--text-muted)", lineHeight: 1.7 }}>
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto pt-3" style={{ borderTop: "1px solid var(--border)" }}>
                  <div className="flex items-center gap-3">
                  <span style={{ fontSize: 12, color: "var(--text-muted)" }}>Last updated: {post.date}</span>
                    <span style={{ fontSize: 12, color: "var(--text-muted)" }}>·</span>
                    <span style={{ fontSize: 12, color: "var(--text-muted)" }}>{post.readTime}</span>
                  </div>
                  <span style={{ fontSize: 13, color: "var(--accent-light)", fontWeight: 600 }}>Read →</span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--bg-card)", borderTop: "1px solid var(--border)", padding: "3rem 0" }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>Ready to Sleep Better Tonight?</h2>
          <p className="text-sm mb-6" style={{ color: "var(--text-muted)" }}>Use our free tools to calculate your perfect sleep schedule.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/" style={{ padding: "10px 24px", borderRadius: 10, border: "none", background: "var(--accent)", color: "#fff", fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
              Sleep Calculator
            </Link>
            <Link href="/bedtime-calculator/" style={{ padding: "10px 24px", borderRadius: 10, border: "1px solid var(--border)", background: "var(--bg-primary)", color: "var(--text-primary)", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>
              Bedtime Calculator
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
