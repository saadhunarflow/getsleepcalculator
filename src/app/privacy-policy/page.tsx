import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Privacy Policy | Sleep Calculator",
  description: "Read our privacy policy. We are a privacy-first platform; all sleep calculations are processed locally on your device with zero server-side data collection.",
  alternates: { canonical: "https://getsleepcalculator.net/privacy-policy/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Privacy Policy | Sleep Calculator",
    description: "Read our privacy policy. We are a privacy-first platform; all sleep calculations are processed locally on your device with zero server-side data collection.",
    url: "https://getsleepcalculator.net/privacy-policy/",
    siteName: "Get Sleep Calculator",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Privacy Policy", href: "/privacy-policy" }])) }} />
      <section
      style={{
        background: "var(--bg-primary)",
        minHeight: "80vh",
      }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
        <nav className="text-xs mb-6" style={{ color: "var(--text-muted)" }}>
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span className="mx-2">›</span>
          <span style={{ color: "var(--accent-light)" }}>Privacy Policy</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-extrabold mb-2" style={{ color: "var(--text-primary)" }}>
          Privacy Policy
        </h1>
        <p className="text-sm mb-10" style={{ color: "var(--text-muted)" }}>
          Last updated: May 28, 2026
        </p>

        <div className="rounded-2xl p-5 mb-10 text-sm leading-relaxed" style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.25)", color: "var(--text-muted)" }}>
          <p className="font-bold mb-1" style={{ color: "#10b981" }}>🔒 Zero-Data Collection Policy</p>
          <p>All sleep calculator inputs — including bedtimes, wake times, age, and nap durations — are processed <strong style={{ color: "var(--text-primary)" }}>entirely on your device</strong>. No calculation data is ever transmitted to, stored on, or accessed by our servers. Your sleep data stays yours, locally, always.</p>
        </div>

        <div className="space-y-10 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>

          <div>
            <h2 className="text-lg font-bold mb-3" style={{ color: "var(--text-primary)" }}>1. Introduction</h2>
            <p>
              Welcome to <strong style={{ color: "var(--text-primary)" }}>GetSleepCalculator.net</strong> (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;).
              This Privacy Policy explains how we collect, use, and protect information when you visit our website.
              By using our site, you agree to the practices described in this policy.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-3" style={{ color: "var(--text-primary)" }}>2. Information We Collect</h2>
            <p className="mb-3">We collect two types of information:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong style={{ color: "var(--text-primary)" }}>Usage Data (automatic):</strong> When you visit our site,
                we automatically collect standard log data including your IP address, browser type, pages visited,
                referring URL, and time spent on pages. This is collected via Google Analytics.
              </li>
              <li>
                <strong style={{ color: "var(--text-primary)" }}>Calculator Inputs:</strong> Times and values you enter
                into our sleep calculators are processed entirely in your browser and are{" "}
                <strong style={{ color: "var(--text-primary)" }}>never stored, transmitted, or saved</strong> on our servers.
              </li>
              <li>
                <strong style={{ color: "var(--text-primary)" }}>Cookies:</strong> We use cookies from Google AdSense and
                Google Analytics to serve relevant ads and analyze site traffic. You can disable cookies in your browser settings.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-3" style={{ color: "var(--text-primary)" }}>3. How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>To analyze site usage and improve our tools</li>
              <li>To serve relevant advertisements via Google AdSense</li>
              <li>To understand which features are most helpful to users</li>
              <li>To maintain the security and performance of the site</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-3" style={{ color: "var(--text-primary)" }}>4. Google AdSense & Advertising</h2>
            <p className="mb-3">
              We use <strong style={{ color: "var(--text-primary)" }}>Google AdSense</strong> to display advertisements on this site.
              Google uses cookies (including the DoubleClick cookie) to serve ads based on your prior visits to this and other websites.
            </p>
            <p className="mb-3">
              Google&apos;s use of advertising cookies enables it and its partners to serve ads based on your visit to our site
              and/or other sites on the internet. You may opt out of personalized advertising by visiting{" "}
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
                style={{ color: "var(--accent-light)" }}
              >
                Google Ads Settings
              </a>.
            </p>
            <p>
              For more information about how Google uses your data when you use our site, visit{" "}
              <a
                href="https://policies.google.com/technologies/partner-sites"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
                style={{ color: "var(--accent-light)" }}
              >
                How Google uses data when you use our partners&apos; sites or apps
              </a>.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-3" style={{ color: "var(--text-primary)" }}>5. Google Analytics (GA4)</h2>
            <p>
              We use <strong style={{ color: "var(--text-primary)" }}>Google Analytics 4 (GA4)</strong> to collect anonymized information about how visitors use our site.
              GA4 uses cookies to collect data about your visits. This data is used to compile
              reports on website activity. GA4 collects information anonymously — it reports website
              trends without identifying individual visitors. You can opt out of Google Analytics by installing the{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
                style={{ color: "var(--accent-light)" }}
              >
                Google Analytics Opt-out Browser Add-on
              </a>.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-3" style={{ color: "var(--text-primary)" }}>6. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices
              or content of those sites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-3" style={{ color: "var(--text-primary)" }}>7. Children&apos;s Privacy</h2>
            <p>
              Our services are not directed to children under the age of 13. We do not knowingly collect personal
              information from children under 13. If you believe a child has provided us with personal information,
              please contact us and we will delete it.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-3" style={{ color: "var(--text-primary)" }}>8. Data Security</h2>
            <p>
              We implement appropriate security measures to protect against unauthorized access to data.
              Since our calculators process all computations locally in your browser, no sensitive personal
              data is transmitted to our servers.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-3" style={{ color: "var(--text-primary)" }}>9. Your Rights</h2>
            <p className="mb-3">Depending on your location, you may have rights including:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>The right to access data we hold about you</li>
              <li>The right to request deletion of your data</li>
              <li>The right to opt out of targeted advertising</li>
              <li>The right to withdraw consent at any time</li>
            </ul>
            <p className="mt-3">
              To exercise these rights, please contact us at the email address on our{" "}
              <Link href="/contact/" className="underline" style={{ color: "var(--accent-light)" }}>
                Contact page
              </Link>.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-3" style={{ color: "var(--text-primary)" }}>10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of changes by updating
              the &quot;Last Updated&quot; date at the top of this page. Continued use of the site after changes
              constitutes acceptance of the revised policy.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-3" style={{ color: "var(--text-primary)" }}>11. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please visit our{" "}
              <Link href="/contact/" className="underline" style={{ color: "var(--accent-light)" }}>
                Contact page
              </Link>{" "}
              or email us directly. We aim to respond within 48 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
