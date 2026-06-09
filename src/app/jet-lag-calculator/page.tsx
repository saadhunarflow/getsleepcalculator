"use client";
import { useState } from "react";
import Link from "next/link";
import JetLagContent from "../components/JetLagContent";
import { faqSchema } from "@/lib/seo";

const TIMEZONES = [
  { label: "UTC-12 (Baker Island)", value: -12 },
  { label: "UTC-11 (American Samoa)", value: -11 },
  { label: "UTC-10 (Hawaii)", value: -10 },
  { label: "UTC-9 (Alaska)", value: -9 },
  { label: "UTC-8 (Los Angeles, Vancouver)", value: -8 },
  { label: "UTC-7 (Denver, Phoenix)", value: -7 },
  { label: "UTC-6 (Chicago, Mexico City)", value: -6 },
  { label: "UTC-5 (New York, Toronto)", value: -5 },
  { label: "UTC-4 (Halifax, Caracas)", value: -4 },
  { label: "UTC-3 (São Paulo, Buenos Aires)", value: -3 },
  { label: "UTC-2 (Mid-Atlantic)", value: -2 },
  { label: "UTC-1 (Azores)", value: -1 },
  { label: "UTC+0 (London, Dublin, Lisbon)", value: 0 },
  { label: "UTC+1 (Paris, Berlin, Madrid)", value: 1 },
  { label: "UTC+2 (Cairo, Athens, Kyiv)", value: 2 },
  { label: "UTC+3 (Moscow, Istanbul, Riyadh)", value: 3 },
  { label: "UTC+4 (Dubai, Baku)", value: 4 },
  { label: "UTC+5 (Karachi, Tashkent)", value: 5 },
  { label: "UTC+5:30 (Mumbai, Delhi, Colombo)", value: 5.5 },
  { label: "UTC+6 (Dhaka, Almaty)", value: 6 },
  { label: "UTC+7 (Bangkok, Jakarta)", value: 7 },
  { label: "UTC+8 (Beijing, Singapore, Perth)", value: 8 },
  { label: "UTC+9 (Tokyo, Seoul)", value: 9 },
  { label: "UTC+10 (Sydney, Melbourne)", value: 10 },
  { label: "UTC+11 (Solomon Islands)", value: 11 },
  { label: "UTC+12 (Auckland, Fiji)", value: 12 },
];

function fmt12(h: number) {
  const hh = Math.floor(h) % 24;
  const mm = Math.round((h - Math.floor(h)) * 60);
  const ampm = hh < 12 ? "AM" : "PM";
  const hDisplay = hh % 12 === 0 ? 12 : hh % 12;
  return `${hDisplay}:${mm.toString().padStart(2, "0")} ${ampm}`;
}

function JetLagTool() {
  const [fromTz, setFromTz] = useState(0);
  const [toTz, setToTz] = useState(5.5);
  const [direction, setDirection] = useState<"east" | "west">("east");
  const [result, setResult] = useState<null | { diff: number; days: number; schedule: string[] }>(null);

  function calculate() {
    const diff = Math.abs(toTz - fromTz);
    // Rule: ~1 day recovery per time zone crossed, east harder than west
    const days = Math.ceil(direction === "east" ? diff * 1.2 : diff * 0.8);
    const schedule: string[] = [];

    // Generate a 5-day adaptation schedule
    const targetBed = 23; // 11 PM local destination
    const targetWake = 7; // 7 AM local destination
    for (let i = 1; i <= Math.min(days, 5); i++) {
      const progress = i / days;
      const bedH = targetBed;
      const wakeH = targetWake;
      schedule.push(
        `Day ${i}: Sleep ${fmt12(bedH)} · Wake ${fmt12(wakeH)} · ${Math.round(progress * 100)}% adjusted`
      );
    }

    setResult({ diff, days, schedule });
  }

  return (
    <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 16, padding: "2rem", maxWidth: 620, margin: "0 auto" }}>
      <div className="grid sm:grid-cols-2 gap-4 mb-5">
        <div>
          <label style={{ color: "var(--text-primary)", fontWeight: 600, fontSize: 13 }} className="block mb-2">From Timezone (Home)</label>
          <select value={fromTz} onChange={(e) => setFromTz(parseFloat(e.target.value))}
            style={{ width: "100%", padding: "10px 12px", borderRadius: 10, border: "1px solid var(--border)", background: "var(--bg-primary)", color: "var(--text-primary)", fontSize: 13 }}>
            {TIMEZONES.map((tz) => <option key={tz.value} value={tz.value}>{tz.label}</option>)}
          </select>
        </div>
        <div>
          <label style={{ color: "var(--text-primary)", fontWeight: 600, fontSize: 13 }} className="block mb-2">To Timezone (Destination)</label>
          <select value={toTz} onChange={(e) => setToTz(parseFloat(e.target.value))}
            style={{ width: "100%", padding: "10px 12px", borderRadius: 10, border: "1px solid var(--border)", background: "var(--bg-primary)", color: "var(--text-primary)", fontSize: 13 }}>
            {TIMEZONES.map((tz) => <option key={tz.value} value={tz.value}>{tz.label}</option>)}
          </select>
        </div>
      </div>

      <div className="mb-5">
        <label style={{ color: "var(--text-primary)", fontWeight: 600, fontSize: 13 }} className="block mb-2">Travel Direction</label>
        <div className="flex gap-3">
          {(["east", "west"] as const).map((d) => (
            <button key={d} onClick={() => setDirection(d)}
              style={{ flex: 1, padding: "10px", borderRadius: 10, border: "1px solid var(--border)", fontWeight: 600, fontSize: 14, cursor: "pointer",
                background: direction === d ? "var(--accent)" : "var(--bg-primary)", color: direction === d ? "#fff" : "var(--text-primary)" }}>
              {d === "east" ? "✈️ Traveling East" : "✈️ Traveling West"}
            </button>
          ))}
        </div>
        <p style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 6 }}>Eastward travel causes harder jet lag than westward travel.</p>
      </div>

      <button onClick={calculate}
        style={{ width: "100%", padding: "14px", borderRadius: 12, border: "none", background: "var(--accent)", color: "#fff", fontWeight: 700, fontSize: 16, cursor: "pointer" }}>
        Calculate Jet Lag Recovery
      </button>

      {result && (
        <div className="mt-6">
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div style={{ background: "var(--bg-primary)", borderRadius: 12, padding: "1rem", textAlign: "center" }}>
              <div style={{ fontSize: 28, fontWeight: 800, color: "var(--accent-light)" }}>{result.diff}h</div>
              <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 4 }}>Time Zone Difference</div>
            </div>
            <div style={{ background: "var(--bg-primary)", borderRadius: 12, padding: "1rem", textAlign: "center" }}>
              <div style={{ fontSize: 28, fontWeight: 800, color: result.days > 5 ? "#ef4444" : "#f59e0b" }}>{result.days} days</div>
              <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 4 }}>Est. Recovery Time</div>
            </div>
          </div>

          <div style={{ background: "var(--bg-primary)", borderRadius: 12, padding: "1rem", marginBottom: 12 }}>
            <div style={{ fontWeight: 600, fontSize: 13, color: "var(--text-primary)", marginBottom: 10 }}>Recovery Schedule (Destination Local Time)</div>
            {result.schedule.map((s, i) => (
              <div key={i} style={{ padding: "8px 0", borderBottom: i < result.schedule.length - 1 ? "1px solid var(--border)" : "none", fontSize: 13, color: "var(--text-secondary)" }}>{s}</div>
            ))}
          </div>

          <div style={{ background: "rgba(108,99,255,0.08)", border: "1px solid rgba(108,99,255,0.2)", borderRadius: 12, padding: "1rem" }}>
            <div style={{ fontWeight: 700, fontSize: 13, color: "var(--accent-light)", marginBottom: 6 }}>💡 Quick Tips</div>
            <ul style={{ fontSize: 13, color: "var(--text-muted)", paddingLeft: 16, lineHeight: 1.8 }}>
              <li>Get bright light exposure in the morning at your destination</li>
              <li>Avoid alcohol and caffeine during the flight</li>
              <li>Stay hydrated — drink 250ml water per hour of flight</li>
              {direction === "east" ? <li>Try melatonin (0.5–3mg) at destination bedtime for 3–4 nights</li> : <li>Avoid naps longer than 20 min during daytime at destination</li>}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default function JetLagPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: "Jet Lag Calculator",
        url: "https://getsleepcalculator.net/jet-lag-calculator",
        applicationCategory: "HealthApplication",
        description: "Calculate your jet lag recovery time and get a personalized sleep schedule to adjust after travel.",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://getsleepcalculator.net" },
          { "@type": "ListItem", position: 2, name: "Jet Lag Calculator", item: "https://getsleepcalculator.net/jet-lag-calculator" },
        ],
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema([
        { question: "What is jet lag and what causes it?", answer: "Jet lag happens when your internal circadian clock is misaligned with the local time at your destination. Your body clock shifts gradually about 1\u20131.5 hours per day. Flying across multiple time zones causes your sleep, alertness, and hormones to operate on a schedule out of sync with your environment." },
        { question: "Why is eastward travel harder than westward travel?", answer: "The human circadian clock naturally runs slightly longer than 24 hours (~24.2 hours), making it easier to delay sleep (stay up later) than to advance it. Eastward travel requires advancing your clock against its natural drift, causing more severe jet lag than westward travel." },
        { question: "How many days does jet lag last?", answer: "Expect approximately 1 day of recovery per time zone crossed when traveling east, and 0.75 days per time zone when traveling west. Crossing 3\u20134 time zones eastward takes about 3\u20134 days; crossing 5\u20136 time zones may take 5\u20136 days to fully recover." },
        { question: "Should you nap after a long-haul flight?", answer: "It depends on arrival time. If you arrive before 3 PM local time, stay awake until 9\u201310 PM; a 20-minute nap is acceptable if needed. Between 3\u20136 PM, a short nap can help. After 6 PM, skip the nap and sleep at your destination bedtime to anchor your first night." },
        { question: "What is the fastest way to recover from jet lag?", answer: "Get bright morning light at your destination, the most powerful circadian resetter. Use low-dose melatonin (0.5\u20133 mg) before your target bedtime for eastward travel, anchor to local meal times immediately, and arrive well-rested. Pre-shifting your schedule 1 hour per day before departure also reduces adjustment time." },
      ]))}} />

      <section style={{ background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(108,99,255,0.18) 0%, transparent 70%), var(--bg-primary)", padding: "4rem 0 3rem" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-4" style={{ background: "rgba(108,99,255,0.15)", border: "1px solid rgba(108,99,255,0.3)", color: "var(--accent-light)" }}>
            ✈️ Travel Sleep Optimizer
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4" style={{ color: "var(--text-primary)" }}>
            Jet Lag Calculator
          </h1>
          <p className="text-lg mb-10" style={{ color: "var(--text-muted)", maxWidth: 520, margin: "0 auto 2.5rem" }}>
            Find out how long your jet lag will last and get a personalized recovery schedule.
          </p>
          <JetLagTool />
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>Why Is Eastward Travel Harder?</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { icon: "🌅", title: "Eastward = Phase Advance", desc: "Your body must sleep and wake earlier than it's used to — like forcing yourself to sleep when you're not tired." },
            { icon: "🌇", title: "Westward = Phase Delay", desc: "Your body stays up later than normal — easier because we naturally drift to a 24.5h day." },
            { icon: "⏱️", title: "1 Day Per Time Zone", desc: "General rule: expect 1 day of recovery for each time zone crossed (eastward up to 1.5 days/zone)." },
            { icon: "☀️", title: "Light Is Your Reset Button", desc: "Morning sunlight at your destination is the most powerful way to reset your circadian clock." },
          ].map((c) => (
            <div key={c.title} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, padding: "1.25rem" }}>
              <div style={{ fontSize: 24, marginBottom: 8 }}>{c.icon}</div>
              <div style={{ fontWeight: 700, color: "var(--text-primary)", marginBottom: 6 }}>{c.title}</div>
              <div style={{ fontSize: 14, color: "var(--text-muted)" }}>{c.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SEO Long-Form Content */}
      <JetLagContent />

      <section className="max-w-3xl mx-auto px-4 pb-8">
        <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>Related Guides</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { href: "/blog/how-to-fix-sleep-schedule/", title: "How to Fix Your Sleep Schedule in 7 Days", desc: "Use the same circadian rhythm techniques to rebuild your sleep schedule after travel disruption." },
            { href: "/sleep-schedule-builder/", title: "Sleep Schedule Builder", desc: "Create a consistent 7-day schedule to anchor your circadian rhythm post-travel." },
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
      <section className="max-w-3xl mx-auto px-4 pb-8">
        <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>Related Guides</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { href: "/blog/how-to-fix-sleep-schedule/", title: "How to Fix Your Sleep Schedule in 7 Days", desc: "Use the same circadian rhythm techniques to rebuild your sleep schedule after travel disruption." },
            { href: "/sleep-schedule-builder/", title: "Sleep Schedule Builder", desc: "Create a consistent 7-day schedule to anchor your circadian rhythm post-travel." },
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
      <section style={{ background: "var(--bg-card)", borderTop: "1px solid var(--border)", padding: "3rem 0" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>More Sleep Tools</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { href: "/bedtime-calculator/", label: "Bedtime Calculator" },
              { href: "/nap-calculator/", label: "Nap Calculator" },
              { href: "/sleep-debt-calculator/", label: "Sleep Debt Calculator" },
              { href: "/sleep-cycle-calculator/", label: "Sleep Cycle Calculator" },
            ].map((l) => (
              <Link key={l.href} href={l.href} style={{ padding: "8px 20px", borderRadius: 8, border: "1px solid var(--border)", background: "var(--bg-primary)", color: "var(--text-primary)", fontSize: 14, textDecoration: "none" }}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
