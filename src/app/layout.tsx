import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider";
import ScrollToTop from "./components/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sleep Calculator – Best Bedtime & Wake-Up Time Calculator",
  description:
    "Free sleep calculator. Find the perfect bedtime or wake-up time based on 90-min sleep cycles. Includes nap calculator, sleep debt tracker, chronotype quiz & more.",
  metadataBase: new URL("https://getsleepcalculator.net"),
  verification: {
    google: "TczOU_qInNGIdHbsr8BFIgaRUjuNETLz1F39VpwAJeg",
  },
  openGraph: {
    title: "Sleep Calculator – Find Your Perfect Bedtime",
    description:
      "Calculate the best time to sleep or wake up based on natural 90-min sleep cycles.",
    url: "https://getsleepcalculator.net",
    siteName: "Get Sleep Calculator",
    type: "website",
    images: [
      {
        url: "https://getsleepcalculator.net/og-image.png",
        width: 1200,
        height: 630,
        alt: "Get Sleep Calculator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@getsleepcalc",
    creator: "@getsleepcalc",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable}`} suppressHydrationWarning data-theme="dark">
      <head>
        <style>{`
          /* Hide Google Translate top banner & attribution bar */
          .goog-te-banner-frame, #goog-gt-tt, .goog-te-balloon-frame {
            display: none !important;
          }
          body { top: 0 !important; }
          .skiptranslate > iframe { height: 0 !important; border: none !important; }
          .goog-logo-link { display: none !important; }
          .goog-te-gadget { font-size: 0 !important; }
          /* Hide the hidden translate widget itself */
          #google_translate_element { display: none !important; }
        `}</style>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Get Sleep Calculator",
              url: "https://getsleepcalculator.net",
              description:
                "Free sleep calculators: bedtime calculator, wake-up time, nap calculator, sleep debt tracker, chronotype quiz, and more.",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate:
                    "https://getsleepcalculator.net/?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Get Sleep Calculator",
              url: "https://getsleepcalculator.net",
              logo: "https://getsleepcalculator.net/og-image.png",
              sameAs: ["https://twitter.com/getsleepcalc"],
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
        {/* Google Translate hidden widget */}
        <div id="google_translate_element" aria-hidden="true" />
        <Script
          id="google-translate-init"
          strategy="afterInteractive"
          src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        />
        <Script
          id="google-translate-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              function googleTranslateElementInit() {
                new google.translate.TranslateElement(
                  { pageLanguage: 'en', autoDisplay: false },
                  'google_translate_element'
                );
              }
            `,
          }}
        />
        {/* Google Analytics 4 */}
        <Script
          id="ga4-gtag-js"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-YHPRM5XESF"
        />
        <Script
          id="ga4-gtag-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-YHPRM5XESF');
            `,
          }}
        />
      </body>
    </html>
  );
}
