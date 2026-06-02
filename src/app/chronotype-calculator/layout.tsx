import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chronotype Quiz – Are You a Lion, Bear, Wolf, or Dolphin?",
  description:
    "5 questions reveal your biological sleep type — Lion, Bear, Wolf, or Dolphin. Get your optimal sleep window and peak productivity hours. Free quiz, instant results.",
  alternates: { canonical: "https://getsleepcalculator.net/chronotype-calculator/" },
  openGraph: {
    title: "Chronotype Quiz – Discover Your Biological Sleep Type",
    description:
      "Are you a Lion, Bear, Wolf, or Dolphin? Take our chronotype quiz and find your optimal sleep and wake times.",
    url: "https://getsleepcalculator.net/chronotype-calculator/",
    siteName: "Get Sleep Calculator",
    type: "website",
    images: [{ url: "https://getsleepcalculator.net/og-image.png", width: 1200, height: 630 }],
  },
};

export default function ChronotypeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
