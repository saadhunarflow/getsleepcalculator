import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sleep Schedule Builder – Create Your Personalized Weekly Sleep Plan",
  description:
    "Build your personalized 7-day sleep schedule in under 60 seconds. Consistent sleep times have more impact on sleep quality than any supplement. Free, no sign-up.",
  alternates: { canonical: "https://getsleepcalculator.net/sleep-schedule-builder/" },
  openGraph: {
    title: "Sleep Schedule Builder – Your 7-Day Sleep Plan",
    description:
      "Create a personalized weekly sleep schedule aligned with your chronotype. Consistency is the #1 sleep improvement habit.",
    url: "https://getsleepcalculator.net/sleep-schedule-builder/",
    siteName: "Get Sleep Calculator",
    type: "website",
    images: [{ url: "https://getsleepcalculator.net/og-image.png", width: 1200, height: 630 }],
  },
};

export default function ScheduleBuilderLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
