import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sleep Debt Calculator – Track Your Cumulative Sleep Loss",
  description:
    "See exactly how many sleep hours you owe your body. Enter 7 nights of sleep and get your weekly deficit plus a science-backed recovery plan. Free, no account needed.",
  alternates: { canonical: "https://getsleepcalculator.net/sleep-debt-calculator/" },
  openGraph: {
    title: "Sleep Debt Calculator – How Much Sleep Do You Owe Your Body?",
    description:
      "Track your weekly sleep hours and see exactly how much sleep debt you've built up. Get tips to recover.",
    url: "https://getsleepcalculator.net/sleep-debt-calculator/",
    siteName: "Get Sleep Calculator",
    type: "website",
    images: [{ url: "https://getsleepcalculator.net/og-image.png", width: 1200, height: 630 }],
  },
};

export default function SleepDebtLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
