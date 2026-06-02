import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "REM Sleep Calculator – How Much REM Sleep Are You Getting?",
  description:
    "Find out if you're getting the 90–120 minutes of REM your brain needs. Enter your bedtime and wake time for a cycle-by-cycle REM breakdown. Free, instant results.",
  alternates: { canonical: "https://getsleepcalculator.net/rem-sleep-calculator/" },
  openGraph: {
    title: "REM Sleep Calculator – Are You Getting Enough REM?",
    description:
      "Find out how much REM sleep your schedule provides and what you can do to protect this critical sleep stage.",
    url: "https://getsleepcalculator.net/rem-sleep-calculator/",
    siteName: "Get Sleep Calculator",
    type: "website",
    images: [{ url: "https://getsleepcalculator.net/og-image.png", width: 1200, height: 630 }],
  },
};

export default function REMLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
