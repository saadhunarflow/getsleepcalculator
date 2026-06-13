import Link from "next/link";

const toolLinks = [
  { label: "Sleep Calculator",          href: "/" },
  { label: "Bedtime Calculator",        href: "/bedtime-calculator/" },
  { label: "Wake-Up Calculator",         href: "/wake-up-time-calculator/" },
  { label: "Sleep Cycle Calculator",     href: "/sleep-cycle-calculator/" },
  { label: "Nap Calculator",             href: "/nap-calculator/" },
  { label: "How Much Sleep Did I Get?",  href: "/how-much-sleep-did-i-get/" },
  { label: "Sleep Debt Calculator",      href: "/sleep-debt-calculator/" },
  { label: "REM Sleep Calculator",       href: "/rem-sleep-calculator/" },
  { label: "Jet Lag Calculator",         href: "/jet-lag-calculator/" },
  { label: "Chronotype Calculator",      href: "/chronotype-calculator/" },
  { label: "Sleep Schedule Builder",     href: "/sleep-schedule-builder/" },
  { label: "Sleep Calculator by Age",    href: "/sleep-calculator-by-age/" },
  { label: "Baby Sleep Calculator",      href: "/baby-sleep-calculator/" },
  { label: "Sleep Calculator for Kids",  href: "/sleep-calculator-for-kids/" },
];

const learnLinks = [
  { label: "How Much Sleep Do I Need?", href: "/how-much-sleep-do-i-need/" },
  { label: "Sleep Stages Explained", href: "/sleep-stages/" },
  { label: "Sleep Hygiene Tips", href: "/sleep-hygiene-tips/" },
  { label: "Circadian Rhythm", href: "/circadian-rhythm/" },
  { label: "Insomnia Guide", href: "/insomnia/" },
  { label: "FAQ", href: "/faq/" },
];

const companyLinks = [
  { label: "Blog", href: "/blog/" },
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
  { label: "Privacy Policy", href: "/privacy-policy/" },
  { label: "Terms of Service", href: "/terms/" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--bg-card)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span style={{ fontSize: "1.5rem" }}>🌙</span>
              <span className="font-bold text-lg" style={{ color: "var(--text-primary)" }}>
                <span style={{ color: "var(--accent-light)" }}>Sleep</span>Calculator.net
              </span>
            </Link>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Science-based sleep tools to help you wake up refreshed. Based on 90-min natural sleep cycles.
            </p>
            <div className="mt-4 space-y-1">
              {companyLinks.map((l) => (
                <Link key={l.href} href={l.href}
                  className="block text-xs transition-colors hover:text-white"
                  style={{ color: "var(--text-muted)" }}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: "var(--accent-light)" }}>
              Tools
            </h3>
            <ul className="space-y-2">
              {toolLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm transition-colors hover:text-white" style={{ color: "var(--text-muted)" }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn */}
          <div className="col-span-2 md:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: "var(--accent-light)" }}>
              Learn
            </h3>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
              {learnLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm transition-colors hover:text-white" style={{ color: "var(--text-muted)" }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
        >
          <p>© {new Date().getFullYear()} getsleepcalculator.net — All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy/" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms/" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/about/" className="hover:text-white transition-colors">About</Link>
            <Link href="/contact/" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
        <p
          className="mt-4 text-center text-xs"
          style={{ color: "var(--text-muted)", opacity: 0.7, lineHeight: 1.6 }}
        >
          This site provides general sleep education based on published NSF, CDC, and AASM guidelines. It is not a substitute for professional medical advice, diagnosis, or treatment.
        </p>
      </div>
    </footer>
  );
}
