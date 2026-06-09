/**
 * IndexNow ping script — submit all site URLs to Bing/Yandex after each deploy.
 * Run: node scripts/indexnow-ping.mjs
 */
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const KEY      = 'b8f2e1a4c7d3f9e6b2a8c4d1f7e3a9c6';
const HOST     = 'getsleepcalculator.net';
const KEY_LOC  = `https://${HOST}/${KEY}.txt`;
const ENDPOINT = 'https://api.indexnow.org/indexnow';

// Read URLs from the built sitemap
const sitemapPath = join(__dirname, '..', 'out', 'sitemap-0.xml');
let xml;
try {
  xml = readFileSync(sitemapPath, 'utf8');
} catch {
  console.error('❌ sitemap-0.xml not found in /out. Run `npm run build` first.');
  process.exit(1);
}

const matches = xml.match(/<loc>(.*?)<\/loc>/g) || [];
const urls    = matches.map(m => m.replace(/<\/?loc>/g, '').trim());

if (urls.length === 0) {
  console.error('❌ No URLs found in sitemap.');
  process.exit(1);
}

console.log(`\n📡 Submitting ${urls.length} URLs to IndexNow (Bing)...\n`);
urls.forEach((u, i) => console.log(`  ${i + 1}. ${u}`));

const res = await fetch(ENDPOINT, {
  method:  'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({
    host:        HOST,
    key:         KEY,
    keyLocation: KEY_LOC,
    urlList:     urls,
  }),
});

console.log(`\nStatus: ${res.status} ${res.statusText}`);

if (res.status === 200) {
  console.log('✅ IndexNow ping successful! Bing will crawl these pages shortly.');
} else if (res.status === 202) {
  console.log('✅ Accepted — Bing queued the URLs for crawling.');
} else if (res.status === 400) {
  console.error('❌ Bad request — check the key or URL format.');
} else if (res.status === 403) {
  console.error('❌ Forbidden — key file at ' + KEY_LOC + ' is not accessible.');
} else if (res.status === 422) {
  console.error('❌ Unprocessable — URLs do not belong to the declared host.');
} else if (res.status === 429) {
  console.warn('⚠️  Too many requests — wait a few minutes and try again.');
} else {
  console.error('❌ Unexpected response:', await res.text());
}
