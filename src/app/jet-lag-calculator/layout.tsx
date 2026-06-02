import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jet Lag Calculator – How Long Will Your Jet Lag Last?",
  description:
    "How long will your jet lag last? Enter origin, destination, and travel direction for a day-by-day recovery plan with melatonin and light exposure timing. Free tool.",
  alternates: { canonical: "https://getsleepcalculator.net/jet-lag-calculator/" },
  openGraph: {
    title: "Jet Lag Calculator – Estimate Your Recovery Time",
    description:
      "Find out how many days jet lag will last after your flight and get science-backed tips to recover faster.",
    url: "https://getsleepcalculator.net/jet-lag-calculator/",
    siteName: "Get Sleep Calculator",
    type: "website",
    images: [{ url: "https://getsleepcalculator.net/og-image.png", width: 1200, height: 630 }],
  },
};

export default function JetLagLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
