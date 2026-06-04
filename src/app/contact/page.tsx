import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact – Get Sleep Calculator",
  description: "Contact GetSleepCalculator.net for questions, feedback, corrections, or partnership inquiries.",
  alternates: { canonical: "https://getsleepcalculator.net/contact/" },
  robots: { index: false, follow: true },
};

export default function ContactPage() {
  return (
    <section
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(108,99,255,0.12) 0%, transparent 70%), var(--bg-primary)",
        minHeight: "80vh",
        paddingTop: "3.5rem",
        paddingBottom: "4rem",
      }}
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <nav className="text-xs mb-6" style={{ color: "var(--text-muted)" }}>
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span className="mx-2">›</span>
          <span style={{ color: "var(--accent-light)" }}>Contact</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-extrabold mb-3" style={{ color: "var(--text-primary)" }}>
          Contact Us
        </h1>
        <p className="text-sm mb-10" style={{ color: "var(--text-muted)" }}>
          Have a question, suggestion, or found a bug? We&apos;d love to hear from you. We typically respond within 24–48 hours.
        </p>

        {/* Contact form */}
        <div className="rounded-3xl p-6 sm:p-8"
          style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
          <form
            action="https://formsubmit.co/contact@getsleepcalculator.net"
            method="POST"
            className="space-y-5"
          >
            {/* Honeypot anti-spam */}
            <input type="text" name="_honey" style={{ display: "none" }} />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New message from GetSleepCalculator.net" />
            <input type="hidden" name="_next" value="https://getsleepcalculator.net/contact?sent=1" />

            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
                Your Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="John Doe"
                className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all"
                style={{
                  background: "var(--bg-primary)",
                  border: "1px solid var(--border)",
                  color: "var(--text-primary)",
                }}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all"
                style={{
                  background: "var(--bg-primary)",
                  border: "1px solid var(--border)",
                  color: "var(--text-primary)",
                }}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
                Subject
              </label>
              <select
                name="subject"
                className="w-full rounded-xl px-4 py-3 text-sm outline-none"
                style={{
                  background: "var(--bg-primary)",
                  border: "1px solid var(--border)",
                  color: "var(--text-muted)",
                }}
              >
                <option value="general">General Question</option>
                <option value="bug">Bug Report</option>
                <option value="suggestion">Feature Suggestion</option>
                <option value="content">Content Correction</option>
                <option value="partnership">Partnership / Advertising</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Write your message here..."
                className="w-full rounded-xl px-4 py-3 text-sm outline-none resize-none"
                style={{
                  background: "var(--bg-primary)",
                  border: "1px solid var(--border)",
                  color: "var(--text-primary)",
                }}
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl font-bold text-sm hover:opacity-90 transition-all"
              style={{ background: "var(--accent)", color: "#fff" }}
            >
              Send Message →
            </button>
          </form>
        </div>

        {/* Alternative contact info */}
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          {[
            { icon: "⚡", title: "Response Time", desc: "We aim to reply within 24–48 hours on weekdays." },
            { icon: "🔒", title: "Privacy", desc: "Your message is only used to respond to your inquiry." },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl p-4 flex gap-3"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
              <span className="text-xl">{item.icon}</span>
              <div>
                <p className="font-semibold text-sm mb-1" style={{ color: "var(--text-primary)" }}>{item.title}</p>
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-center mt-8" style={{ color: "var(--text-muted)" }}>
          Please read our{" "}
          <Link href="/privacy-policy/" className="underline" style={{ color: "var(--accent-light)" }}>
            Privacy Policy
          </Link>{" "}
          to understand how your information is handled.
        </p>
      </div>
    </section>
  );
}
