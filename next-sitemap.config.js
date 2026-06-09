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
  '/why-am-i-so-tired',
  '/sleep-inertia',
];

const UTILITY_PATHS = [
  '/about',
  '/contact',
  '/privacy-policy',
  '/terms',
];

const BLOG_POST_LASTMOD = {
  '/blog/best-time-to-wake-up':                                 '2026-05-26',
  '/blog/how-to-fall-asleep-faster':                            '2026-06-10',
  '/blog/how-to-fix-sleep-schedule':                            '2026-05-24',
  '/blog/if-i-sleep-at-10-what-time-should-i-wake-up':         '2026-06-05',
  '/blog/if-i-sleep-at-11-what-time-should-i-wake-up':         '2026-06-10',
  '/blog/if-i-sleep-at-9pm-what-time-should-i-wake-up':        '2026-06-10',
  '/blog/if-i-go-to-sleep-at-midnight-what-time-should-i-wake-up': '2026-06-10',
  '/blog/if-i-sleep-at-1am-what-time-should-i-wake-up':        '2026-06-10',
  '/blog/what-time-should-i-sleep-to-wake-up-at-5am':          '2026-06-10',
  '/blog/what-time-should-i-sleep-to-wake-up-at-6am':          '2026-06-10',
  '/blog/what-time-should-i-sleep-to-wake-up-at-7am':          '2026-06-10',
  '/blog/is-4-hours-of-sleep-enough':                           '2026-06-10',
  '/blog/is-5-hours-of-sleep-enough':                           '2026-06-10',
  '/blog/is-6-hours-of-sleep-enough':                           '2026-06-10',
  '/blog/is-7-hours-of-sleep-enough':                           '2026-06-10',
  '/blog/is-9-hours-of-sleep-enough':                           '2026-06-10',
  '/blog/celebrity-sleep-schedules':                            '2026-06-10',
  '/blog/sleep-deprivation-effects':                            '2026-05-25',
  '/blog/why-you-wake-up-tired':                                '2026-05-27',
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
  transform: async (config, url) => {
    const path = url === '/' ? '/' : url.replace(/\/+$/, '');

    // Homepage
    if (path === '/') {
      return { loc: url, changefreq: 'daily', priority: 1.0, lastmod: '2026-06-10' };
    }

    // Blog index
    if (path === '/blog') {
      return { loc: url, changefreq: 'weekly', priority: 0.7, lastmod: '2026-06-10' };
    }

    // Blog posts
    if (BLOG_POST_LASTMOD[path]) {
      return { loc: url, changefreq: 'monthly', priority: 0.7, lastmod: BLOG_POST_LASTMOD[path] };
    }

    // Tool pages
    if (TOOL_PATHS.includes(path)) {
      return { loc: url, changefreq: 'weekly', priority: 0.9, lastmod: '2026-06-10' };
    }

    // Guide / learn pages
    if (GUIDE_PATHS.includes(path)) {
      return { loc: url, changefreq: 'monthly', priority: 0.8, lastmod: '2026-06-10' };
    }

    // Utility / info pages
    if (UTILITY_LASTMOD[path]) {
      return { loc: url, changefreq: 'monthly', priority: 0.4, lastmod: UTILITY_LASTMOD[path] };
    }

    // Fallback
    return { loc: url, changefreq: 'monthly', priority: 0.6, lastmod: '2026-06-10' };
  },
};
