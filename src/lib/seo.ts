export const SITE_URL = "https://getsleepcalculator.net";

/** Generate BreadcrumbList JSON-LD schema */
export function breadcrumbSchema(crumbs: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: `${SITE_URL}${crumb.href}`,
    })),
  };
}

export const DEFAULT_SEO = {
  titleTemplate: '%s | Get Sleep Calculator',
  defaultTitle: 'Sleep Calculator – Find Your Perfect Bedtime & Wake-Up Time',
  description:
    'Free sleep calculator tool. Find the best bedtime or wake-up time based on sleep cycles. Includes nap calculator, sleep debt tracker, chronotype quiz & more.',
  canonical: 'https://getsleepcalculator.net',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://getsleepcalculator.net',
    siteName: 'Get Sleep Calculator',
    images: [
      {
        url: 'https://getsleepcalculator.net/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Get Sleep Calculator',
      },
    ],
  },
  twitter: {
    handle: '@getsleepcalc',
    site: '@getsleepcalc',
    cardType: 'summary_large_image',
  },
}

// Sleep cycle duration in minutes
export const SLEEP_CYCLE_MINUTES = 90

// Time to fall asleep (sleep onset latency)
export const SLEEP_ONSET_MINUTES = 14
