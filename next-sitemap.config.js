/** @type {import('next-sitemap').IConfig} */

const TOOL_PATHS = [
  '/bedtime-calculator',
  '/wake-up-time-calculator',
  '/nap-calculator',
  '/rem-sleep-calculator',
  '/sleep-cycle-calculator',
  '/sleep-debt-calculator',
  '/sleep-schedule-builder',
  '/chronotype-calculator',
  '/jet-lag-calculator',
  '/sleep-calculator-by-age',
  '/sleep-calculator-for-kids',
  '/baby-sleep-calculator',
  '/how-much-sleep-did-i-get',
];

const GUIDE_PATHS = [
  '/how-much-sleep-do-i-need',
  '/sleep-stages',
  '/sleep-hygiene-tips',
  '/circadian-rhythm',
  '/insomnia',
  '/faq',
];

const UTILITY_PATHS = [
  '/about',
  '/contact',
  '/privacy-policy',
  '/terms',
];

const BLOG_POST_LASTMOD = {
  '/blog/best-time-to-wake-up':                        '2026-05-26',
  '/blog/how-to-fall-asleep-faster':                   '2026-05-28',
  '/blog/how-to-fix-sleep-schedule':                   '2026-05-24',
  '/blog/if-i-sleep-at-10-what-time-should-i-wake-up': '2026-06-05',
  '/blog/sleep-deprivation-effects':                   '2026-05-25',
  '/blog/why-you-wake-up-tired':                       '2026-05-27',
};

const UTILITY_LASTMOD = {
  '/about':          '2026-06-09',
  '/contact':        '2026-06-06',
  '/privacy-policy': '2026-05-28',
  '/terms':          '2026-06-09',
};

module.exports = {
  siteUrl: 'https://getsleepcalculator.net',
  generateRobotsTxt: false,
  sitemapSize: 5000,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
  },
  transform: async (config, url) => {
    // next-sitemap passes paths without trailing slash (e.g. /bedtime-calculator)
    // Strip any trailing slash just in case, then match
    const path = url === '/' ? '/' : url.replace(/\/+$/, '');

    // Homepage
    if (path === '/') {
      return { loc: url, changefreq: 'daily', priority: 1.0, lastmod: '2026-06-09' };
    }

    // Blog index
    if (path === '/blog') {
      return { loc: url, changefreq: 'weekly', priority: 0.6, lastmod: '2026-06-09' };
    }

    // Blog posts
    if (BLOG_POST_LASTMOD[path]) {
      return { loc: url, changefreq: 'monthly', priority: 0.6, lastmod: BLOG_POST_LASTMOD[path] };
    }

    // Tool pages
    if (TOOL_PATHS.includes(path)) {
      return { loc: url, changefreq: 'weekly', priority: 0.8, lastmod: '2026-06-06' };
    }

    // Guide / learn pages
    if (GUIDE_PATHS.includes(path)) {
      return { loc: url, changefreq: 'monthly', priority: 0.7, lastmod: '2026-06-06' };
    }

    // Utility / info pages
    if (UTILITY_LASTMOD[path]) {
      return { loc: url, changefreq: 'monthly', priority: 0.4, lastmod: UTILITY_LASTMOD[path] };
    }

    // Fallback
    return { loc: url, changefreq: 'monthly', priority: 0.5, lastmod: '2026-06-06' };
  },
};
