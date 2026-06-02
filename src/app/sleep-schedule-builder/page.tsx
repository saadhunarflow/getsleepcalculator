"use client";
import { useState } from "react";
import Link from "next/link";
import { TimePickerCompact, to24h } from "../components/TimePicker";
import ScheduleBuilderContent from "../components/ScheduleBuilderContent";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const FULL_DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

function timeToMin(t: string) {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
}

function fmt12(totalMin: number) {
  const norm = ((totalMin % 1440) + 1440) % 1440;
  const h = Math.floor(norm / 60);
  const m = norm % 60;
  const ampm = h < 12 ? "AM" : "PM";
  const hd = h % 12 === 0 ? 12 : h % 12;
  return `${hd}:${m.toString().padStart(2, "0")} ${ampm}`;
}

function fmt24(totalMin: number) {
  const norm = ((totalMin % 1440) + 1440) % 1440;
  const h = Math.floor(norm / 60);
  const m = norm % 60;
  return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`;
}

type DaySchedule = { wake: string; bed: string; isWorkday: boolean; customWake?: string; customBed?: string };

function ScheduleBuilder() {
  const [goalSleep, setGoalSleep] = useState(8);
  // Workday pickers (default 7:00 AM wake, 11:00 PM bed)
  const [wwH, setWwH] = useState(7); const [wwM, setWwM] = useState(0); const [wwA, setWwA] = useState<"AM"|"PM">("AM");
  const [wbH, setWbH] = useState(11); const [wbM, setWbM] = useState(0); const [wbA, setWbA] = useState<"AM"|"PM">("PM");
  // Weekend pickers (default 8:00 AM wake, 11:30 PM bed)
  const [ewH, setEwH] = useState(8); const [ewM, setEwM] = useState(0); const [ewA, setEwA] = useState<"AM"|"PM">("AM");
  const [ebH, setEbH] = useState(11); const [ebM, setEbM] = useState(30); const [ebA, setEbA] = useState<"AM"|"PM">("PM");
  const [generated, setGenerated] = useState<DaySchedule[] | null>(null);

  // Mon=0..Fri=4 workdays, Sat=5,Sun=6 weekend
  function generate() {
    const workWake = to24h(wwH, wwM, wwA);
    const workBed = to24h(wbH, wbM, wbA);
    const weekendWake = to24h(ewH, ewM, ewA);
    const weekendBed = to24h(ebH, ebM, ebA);
    const schedule: DaySchedule[] = DAYS.map((_, i) => {
      const isWork = i < 5;
      const wakeMin = timeToMin(isWork ? workWake : weekendWake);
      const bedMin = wakeMin - goalSleep * 60;
      return {
        wake: isWork ? workWake : weekendWake,
        bed: fmt24(bedMin),
        isWorkday: isWork,
      };
    });
    setGenerated(schedule);
  }

  function sleepHours(s: DaySchedule) {
    const wm = timeToMin(s.wake);
    const bm = timeToMin(s.bed);
    const diff = ((wm - bm) + 1440) % 1440;
    return (diff / 60).toFixed(1);
  }

  const barH = (s: DaySchedule) => {
    const h = parseFloat(sleepHours(s));
    return Math.min(100, (h / 10) * 100);
  };

  const barColor = (h: number) => h >= goalSleep ? "#22c55e" : h >= goalSleep - 1 ? "#f59e0b" : "#ef4444";

  const avgSleep = generated ? (generated.reduce((a, s) => a + parseFloat(sleepHours(s)), 0) / 7).toFixed(1) : null;

  return (
    <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 16, padding: "2rem", maxWidth: 680, margin: "0 auto" }}>
      {/* Sleep goal */}
      <div className="mb-5">
        <label style={{ color: "var(--text-primary)", fontWeight: 600, fontSize: 14 }} className="block mb-2">Sleep Goal Per Night</label>
        <div className="flex gap-2 flex-wrap">
          {[7, 7.5, 8, 8.5, 9].map((g) => (
            <button key={g} onClick={() => setGoalSleep(g)}
              style={{ padding: "8px 18px", borderRadius: 8, border: "1px solid var(--border)", fontWeight: 700, fontSize: 14, cursor: "pointer",
                background: goalSleep === g ? "var(--accent)" : "var(--bg-primary)", color: goalSleep === g ? "#fff" : "var(--text-primary)" }}>
              {g}h
            </button>
          ))}
        </div>
      </div>

      {/* Workday settings */}
      <div style={{ background: "var(--bg-primary)", borderRadius: 12, padding: "1.25rem", marginBottom: 12 }}>
        <div style={{ fontWeight: 600, color: "var(--text-primary)", marginBottom: 12, fontSize: 14 }}>💼 Workdays (Mon–Fri)</div>
        <div className="grid grid-cols-2 gap-4">
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 8 }}>⏰ Wake-Up Time</div>
            <TimePickerCompact hour={wwH} minute={wwM} ampm={wwA} onHour={setWwH} onMinute={setWwM} onAmpm={setWwA} />
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 8 }}>🛏️ Target Bedtime</div>
            <TimePickerCompact hour={wbH} minute={wbM} ampm={wbA} onHour={setWbH} onMinute={setWbM} onAmpm={setWbA} />
          </div>
        </div>
      </div>

      {/* Weekend settings */}
      <div style={{ background: "var(--bg-primary)", borderRadius: 12, padding: "1.25rem", marginBottom: 16 }}>
        <div style={{ fontWeight: 600, color: "var(--text-primary)", marginBottom: 12, fontSize: 14 }}>🌅 Weekend (Sat–Sun)</div>
        <div className="grid grid-cols-2 gap-4">
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 8 }}>⏰ Wake-Up Time</div>
            <TimePickerCompact hour={ewH} minute={ewM} ampm={ewA} onHour={setEwH} onMinute={setEwM} onAmpm={setEwA} />
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 8 }}>🛏️ Target Bedtime</div>
            <TimePickerCompact hour={ebH} minute={ebM} ampm={ebA} onHour={setEbH} onMinute={setEbM} onAmpm={setEbA} />
          </div>
        </div>
      </div>

      <button onClick={generate}
        style={{ width: "100%", padding: "14px", borderRadius: 12, border: "none", background: "var(--accent)", color: "#fff", fontWeight: 700, fontSize: 16, cursor: "pointer" }}>
        Build My Weekly Schedule
      </button>

      {generated && (
        <div className="mt-6">
          {avgSleep && (
            <div className="grid grid-cols-3 gap-3 mb-5">
              <div style={{ background: "var(--bg-primary)", borderRadius: 12, padding: "1rem", textAlign: "center" }}>
                <div style={{ fontSize: 22, fontWeight: 800, color: "var(--accent-light)" }}>{avgSleep}h</div>
                <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 4 }}>Avg Per Night</div>
              </div>
              <div style={{ background: "var(--bg-primary)", borderRadius: 12, padding: "1rem", textAlign: "center" }}>
                <div style={{ fontSize: 22, fontWeight: 800, color: goalSleep <= parseFloat(avgSleep) ? "#22c55e" : "#ef4444" }}>{goalSleep}h</div>
                <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 4 }}>Your Goal</div>
              </div>
              <div style={{ background: "var(--bg-primary)", borderRadius: 12, padding: "1rem", textAlign: "center" }}>
                <div style={{ fontSize: 22, fontWeight: 800, color: "var(--text-primary)" }}>{(parseFloat(avgSleep) * 7).toFixed(0)}h</div>
                <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 4 }}>Weekly Total</div>
              </div>
            </div>
          )}

          {/* Visual bar chart */}
          <div style={{ background: "var(--bg-primary)", borderRadius: 12, padding: "1.25rem", marginBottom: 12 }}>
            <div style={{ fontWeight: 600, fontSize: 13, color: "var(--text-primary)", marginBottom: 12 }}>Weekly Sleep Bar Chart</div>
            <div className="flex gap-2 items-end" style={{ height: 80 }}>
              {generated.map((s, i) => {
                const h = parseFloat(sleepHours(s));
                return (
                  <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                    <div style={{ fontSize: 9, color: "var(--text-muted)", fontWeight: 600 }}>{h}h</div>
                    <div style={{ width: "100%", height: `${barH(s)}%`, minHeight: 8, background: barColor(h), borderRadius: "4px 4px 0 0", transition: "height 0.5s" }} />
                    <div style={{ fontSize: 11, color: s.isWorkday ? "var(--text-muted)" : "var(--accent-light)", fontWeight: 600 }}>{DAYS[i]}</div>
                  </div>
                );
              })}
            </div>
            <div style={{ width: "100%", height: 1, background: "var(--border)", marginTop: 4 }} />
          </div>

          {/* Schedule table */}
          <div style={{ background: "var(--bg-primary)", borderRadius: 12, overflow: "hidden" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", padding: "8px 16px", background: "var(--bg-card)", fontSize: 11, fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase" }}>
              <span>Day</span><span>Bedtime</span><span>Wake Up</span><span>Hours</span>
            </div>
            {generated.map((s, i) => {
              const h = parseFloat(sleepHours(s));
              return (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", padding: "10px 16px", borderTop: "1px solid var(--border)", fontSize: 13, alignItems: "center" }}>
                  <span style={{ color: s.isWorkday ? "var(--text-primary)" : "var(--accent-light)", fontWeight: 600 }}>{FULL_DAYS[i]}</span>
                  <span style={{ color: "var(--text-secondary)" }}>{fmt12(timeToMin(s.bed))}</span>
                  <span style={{ color: "var(--text-secondary)" }}>{fmt12(timeToMin(s.wake))}</span>
                  <span style={{ fontWeight: 700, color: barColor(h) }}>{h}h</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default function SleepSchedulePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: "Sleep Schedule Builder",
        url: "https://getsleepcalculator.net/sleep-schedule-builder",
        applicationCategory: "HealthApplication",
        operatingSystem: "Web Browser",
        description: "Build a consistent 7-day sleep schedule based on your wake-up times and sleep goals. Get a personalized bedtime plan for every day of the week.",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        featureList: "7-day sleep schedule, personalized bedtime planner, wake time consistency tracker",
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://getsleepcalculator.net" },
          { "@type": "ListItem", position: 2, name: "Sleep Schedule Builder", item: "https://getsleepcalculator.net/sleep-schedule-builder" },
        ],
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "What is the best sleep schedule?", acceptedAnswer: { "@type": "Answer", text: "The best sleep schedule is one that (1) gives you 7.5–9 hours of sleep, (2) aligns with your natural chronotype (morning type vs. evening type), (3) is consistent 7 days a week within a 30-minute window, and (4) starts and ends at times your work and social life can sustain. Consistency matters more than perfect timing. A \'slightly non-ideal\' schedule you can maintain beats a perfect schedule you can\'t stick to." } },
          { "@type": "Question", name: "How do I build a consistent sleep schedule?", acceptedAnswer: { "@type": "Answer", text: "Start with your required wake time and work backward. Decide your wake time first (the anchor), then calculate your bedtime based on needed sleep hours. Keep this wake time every day for 2 weeks, even on weekends. Use the first week to let your body clock adjust — you may feel tired initially. Avoid naps over 20 minutes during the adjustment period. Once your schedule is anchored, you\'ll naturally feel sleepy at your target bedtime." } },
          { "@type": "Question", name: "How long does it take to fix a sleep schedule?", acceptedAnswer: { "@type": "Answer", text: "Most people notice significant improvement in 7–10 days with a consistent wake time. Full adjustment of the circadian rhythm to a new schedule typically takes 2–3 weeks. If shifting your bedtime by more than 2 hours, move in 30-minute increments every 3 days rather than jumping all at once. Morning light exposure and avoiding evening bright light dramatically speed up the transition." } },
          { "@type": "Question", name: "Is it bad to sleep different hours on weekends?", acceptedAnswer: { "@type": "Answer", text: "Yes. Sleeping more than 1 hour later on weekends than weekdays causes \'social jet lag\' — the equivalent of traveling across time zones every weekend. Research links social jet lag to impaired cognitive function, increased obesity risk, poor mood, and higher rates of metabolic disease. Even if you feel you\'re \'catching up\' on weekends, the circadian disruption costs more than it recovers. Keep your wake time within 30–45 minutes on weekends." } },
          { "@type": "Question", name: "What time should I go to bed based on wake-up time?", acceptedAnswer: { "@type": "Answer", text: "Calculate backward from your wake time in 90-minute sleep cycles, adding 14 minutes for sleep onset. For a 7:00 AM wake time: 5 cycles = sleep at 10:46 PM (optimal), 4 cycles = 12:16 AM. For a 6:00 AM wake time: 5 cycles = 9:46 PM, 4 cycles = 11:16 AM. The goal is to wake up at the end of a complete cycle when sleep is lightest, minimizing grogginess." } },
        ],
      })}} />

      <section style={{ background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(108,99,255,0.18) 0%, transparent 70%), var(--bg-primary)", padding: "4rem 0 3rem" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-4" style={{ background: "rgba(108,99,255,0.15)", border: "1px solid rgba(108,99,255,0.3)", color: "var(--accent-light)" }}>
            📅 7-Day Planner
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4" style={{ color: "var(--text-primary)" }}>
            Sleep Schedule Builder
          </h1>
          <p className="text-lg mb-10" style={{ color: "var(--text-muted)", maxWidth: 520, margin: "0 auto 2.5rem" }}>
            Create your personalized weekly sleep plan — consistent sleep times are the #1 factor in sleep quality.
          </p>
          <ScheduleBuilder />
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>Why a Consistent Schedule Matters</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { icon: "🔁", title: "Trains Your Body Clock", desc: "Going to bed at the same time daily anchors your circadian rhythm, making it easier to fall asleep and wake up naturally." },
            { icon: "😴", title: "Improves Sleep Quality", desc: "Consistent sleepers report 20–30% better sleep quality and spend more time in deep and REM sleep stages." },
            { icon: "⚡", title: "Boosts Daytime Energy", desc: "A regular schedule eliminates social jet lag — the grogginess caused by shifting sleep times on weekends." },
            { icon: "🧠", title: "Protects Mental Health", desc: "Irregular sleep schedules are linked to higher rates of depression, anxiety, and cognitive decline." },
          ].map((c) => (
            <div key={c.title} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, padding: "1.25rem" }}>
              <div style={{ fontSize: 24, marginBottom: 8 }}>{c.icon}</div>
              <div style={{ fontWeight: 700, color: "var(--text-primary)", marginBottom: 6 }}>{c.title}</div>
              <div style={{ fontSize: 14, color: "var(--text-muted)" }}>{c.desc}</div>
            </div>
          ))}
        </div>

        <div style={{ background: "rgba(108,99,255,0.08)", border: "1px solid rgba(108,99,255,0.2)", borderRadius: 12, padding: "1.5rem" }}>
          <h3 style={{ fontWeight: 700, color: "var(--accent-light)", marginBottom: 10 }}>🎯 The ±30 Minute Rule</h3>
          <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.7 }}>
            Sleep experts recommend keeping your wake-up time within <strong style={{ color: "var(--text-primary)" }}>30 minutes</strong> every day — even on weekends. This single habit has more impact on sleep quality than any supplement or gadget.
          </p>
        </div>
      </section>

      {/* SEO Long-Form Content */}
      <ScheduleBuilderContent />

      <section className="max-w-3xl mx-auto px-4 pb-8">
        <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>Related Guides</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { href: "/blog/how-to-fix-sleep-schedule/", title: "How to Fix Your Sleep Schedule in 7 Days", desc: "Step-by-step 7-day protocol to reset your circadian rhythm using anchor times and morning light." },
            { href: "/chronotype-calculator/", title: "Chronotype Calculator", desc: "Discover if you\'re a Lion, Bear, Wolf, or Dolphin — and find the ideal schedule for your type." },
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
              { href: "/chronotype-calculator/", label: "Chronotype Quiz" },
              { href: "/sleep-debt-calculator/", label: "Sleep Debt Calculator" },
              { href: "/nap-calculator/", label: "Nap Calculator" },
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
