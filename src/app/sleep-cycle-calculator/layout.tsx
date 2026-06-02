import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sleep Cycle Calculator – How Many Sleep Cycles Do You Get?",
  description:
    "See exactly how many 90-min sleep cycles you complete — with a stage-by-stage night breakdown. Enter any bedtime and wake time for instant results. Free visualizer.",
  alternates: { canonical: "https://getsleepcalculator.net/sleep-cycle-calculator/" },
  openGraph: {
    title: "Sleep Cycle Calculator – How Many Cycles Are You Getting?",
    description:
      "Enter your bedtime and wake time to see how many 90-minute sleep cycles you complete each night.",
    url: "https://getsleepcalculator.net/sleep-cycle-calculator/",
    siteName: "Get Sleep Calculator",
    type: "website",
    images: [{ url: "https://getsleepcalculator.net/og-image.png", width: 1200, height: 630 }],
  },
};

export default function SleepCycleLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
