import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Terms of Service | Sleep Calculator",
  description:
    "Read our Terms of Service. Learn about the rules, disclaimers, and terms governing the use of Get Sleep Calculator.",
  alternates: { canonical: "https://getsleepcalculator.net/terms/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Terms of Service | Sleep Calculator",
    description:
      "Read our Terms of Service. Learn about the rules, disclaimers, and terms governing the use of Get Sleep Calculator.",
    url: "https://getsleepcalculator.net/terms/",
    siteName: "Get Sleep Calculator",
    type: "website",
  },
};

export default function TermsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Terms of Service", href: "/terms" }])) }} />
      <section style={{ background: "var(--bg-primary)", minHeight: "80vh" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
        <nav className="text-xs mb-6" style={{ color: "var(--text-muted)" }}>
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span className="mx-2">›</span>
          <span style={{ color: "var(--accent-light)" }}>Terms of Service</span>
        </nav>

        <h1
          className="text-3xl sm:text-4xl font-extrabold mb-2"
          style={{ color: "var(--text-primary)" }}
        >
          Terms of Service
        </h1>
        <p className="text-sm mb-10" style={{ color: "var(--text-muted)" }}>
          Last updated: June 9, 2026
        </p>

        <div className="space-y-10 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>

          {/* 1. Acceptance */}
          <div>
            <h2
              className="text-lg font-bold mb-3"
              style={{ color: "var(--text-primary)" }}
            >
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using{" "}
              <strong style={{ color: "var(--text-primary)" }}>
                GetSleepCalculator.net
              </strong>{" "}
              (&quot;the Site&quot;, &quot;we&quot;, &quot;our&quot;), you confirm that you have read,
              understood, and agree to be bound by these Terms of Service and our{" "}
              <Link
                href="/privacy-policy/"
                className="underline"
                style={{ color: "var(--accent-light)" }}
              >
                Privacy Policy
              </Link>
              . If you do not agree to these terms, please discontinue use of the
              Site immediately. We reserve the right to update these terms at any
              time; continued use after changes constitutes acceptance of the
              revised terms.
            </p>
          </div>

          {/* 2. Intellectual Property */}
          <div>
            <h2
              className="text-lg font-bold mb-3"
              style={{ color: "var(--text-primary)" }}
            >
              2. Intellectual Property &amp; Use License
            </h2>
            <p className="mb-3">
              All content on this Site — including but not limited to text, design,
              graphics, calculation logic, and code — is the exclusive intellectual
              property of GetSleepCalculator.net and is protected by applicable
              copyright and intellectual property laws.
            </p>
            <p className="mb-3">
              We grant you a limited, non-exclusive, non-transferable, revocable
              license to access and use the Site&apos;s tools for personal or
              commercial informational purposes. Under this license, you may
              not:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Scrape, crawl, or systematically extract content or data from the
                Site using automated tools, bots, or scripts without prior written
                permission.
              </li>
              <li>
                Decompile, reverse-engineer, disassemble, or attempt to derive the
                source code of any software underlying the Site.
              </li>
              <li>
                Reproduce, republish, or redistribute substantial portions of the
                Site&apos;s content without attribution and written consent.
              </li>
              <li>
                Use the Site in any manner that could disable, damage, or impair
                server infrastructure or interfere with other users&apos; access.
              </li>
            </ul>
          </div>

          {/* 3. AS IS Disclaimer */}
          <div>
            <div
              className="rounded-2xl p-5 text-sm leading-relaxed"
              style={{
                background: "rgba(245,158,11,0.08)",
                border: "1px solid rgba(245,158,11,0.2)",
                color: "var(--text-muted)",
              }}
            >
              <h2
                className="text-lg font-bold mb-3"
                style={{ color: "var(--text-primary)" }}
              >
                3. &quot;AS IS&quot; Calculator Disclaimer
              </h2>
              <p className="mb-3">
                All sleep calculation results provided by this Site — including
                bedtime suggestions, wake-up times, nap windows, sleep debt
                estimates, and cycle counts — are provided on an{" "}
                <strong style={{ color: "#f59e0b" }}>&quot;AS IS&quot;</strong> and{" "}
                <strong style={{ color: "#f59e0b" }}>&quot;AS AVAILABLE&quot;</strong>{" "}
                basis, without warranties of any kind, either express or implied.
              </p>
              <p className="mb-3">
                We make no warranty that the calculations are mechanically precise,
                medically accurate, or suitable for your specific health situation.
                Sleep needs vary significantly between individuals. Calculation
                results are based on generalised population averages from public
                guidelines published by the National Sleep Foundation (NSF) and the
                American Academy of Sleep Medicine (AASM), and do not account for
                individual medical conditions, medications, or sleep disorders.
              </p>
              <p>
                <strong style={{ color: "#f59e0b" }}>
                  Use of any tool on this Site is entirely at your own risk.
                </strong>{" "}
                These tools are for educational and informational purposes only and
                do not constitute medical advice. Consult a qualified healthcare
                provider or sleep specialist before making health decisions based
                on these results.
              </p>
            </div>
          </div>

          {/* 4. Limitation of Liability */}
          <div>
            <h2
              className="text-lg font-bold mb-3"
              style={{ color: "var(--text-primary)" }}
            >
              4. Limitation of Liability
            </h2>
            <p className="mb-3">
              To the fullest extent permitted by applicable law,
              GetSleepCalculator.net, its creators, contributors, and affiliates
              shall not be liable for any direct, indirect, incidental, special,
              consequential, or punitive damages arising out of or related to:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Your use of, or inability to use, any calculator or tool on the Site.</li>
              <li>
                Any reliance placed on calculation results for health, lifestyle, or
                medical decisions.
              </li>
              <li>
                Errors, omissions, interruptions, or delays in the availability of
                the Site or its features.
              </li>
              <li>
                Any third-party services, advertisements, or linked websites
                accessible through the Site.
              </li>
            </ul>
            <p className="mt-3">
              This limitation applies regardless of the theory of liability
              (contract, tort, negligence, strict liability, or otherwise) even if
              GetSleepCalculator.net has been advised of the possibility of such
              damages.
            </p>
          </div>

          {/* 5. Third-Party Services */}
          <div>
            <h2
              className="text-lg font-bold mb-3"
              style={{ color: "var(--text-primary)" }}
            >
              5. Third-Party Services
            </h2>
            <p>
              The Site may integrate third-party services including Google Analytics
              (GA4) for anonymous traffic measurement and Google AdSense for
              contextual advertising. Your interaction with these services is
              governed by the respective third-party terms and privacy policies. We
              are not responsible for the data practices of these third parties. You
              may opt out of personalised advertising at any time via{" "}
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
                style={{ color: "var(--accent-light)" }}
              >
                Google Ads Settings
              </a>
              .
            </p>
          </div>

          {/* 6. Governing Law */}
          <div>
            <h2
              className="text-lg font-bold mb-3"
              style={{ color: "var(--text-primary)" }}
            >
              6. Governing Law &amp; Disputes
            </h2>
            <p>
              These Terms of Service shall be governed by and construed in
              accordance with generally accepted principles of international digital
              and internet law, without regard to conflict-of-law provisions. Any
              dispute arising from your use of the Site that cannot be resolved
              informally shall first be submitted to good-faith negotiation. If
              unresolved, disputes will be subject to binding arbitration under
              mutually agreed neutral terms. Nothing in this section limits your
              statutory consumer rights under the laws of your country of residence.
            </p>
          </div>

          {/* 7. Changes */}
          <div>
            <h2
              className="text-lg font-bold mb-3"
              style={{ color: "var(--text-primary)" }}
            >
              7. Changes to These Terms
            </h2>
            <p>
              We may revise these Terms of Service at any time. When we do, we will
              update the &quot;Last Updated&quot; date at the top of this page. Your
              continued use of the Site after any changes constitutes your
              acceptance of the new terms. We encourage you to review this page
              periodically.
            </p>
          </div>

          {/* 8. Contact */}
          <div>
            <h2
              className="text-lg font-bold mb-3"
              style={{ color: "var(--text-primary)" }}
            >
              8. Contact
            </h2>
            <p>
              If you have questions or concerns about these Terms of Service, please
              reach out via our{" "}
              <Link
                href="/contact/"
                className="underline"
                style={{ color: "var(--accent-light)" }}
              >
                Contact page
              </Link>
              . We aim to respond within 48 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
