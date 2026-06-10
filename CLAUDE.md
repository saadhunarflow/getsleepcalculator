# CLAUDE.md — getsleepcalculator.net Agent Instructions

> This file is read automatically by Claude Code on every session start.
> Do NOT delete or rename this file.

---

## 1. Project Identity

- **Site:** getsleepcalculator.net
- **Purpose:** Sleep cycle calculator — helps users find optimal bedtimes and wake times
- **Framework:** Next.js 14+ with App Router
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS
- **Package manager:** npm
- **Deployment:** Vercel
- **Sitemap tool:** next-sitemap (config at `next-sitemap.config.js`)
- **Key config files:** `next.config.ts`, `tsconfig.json`, `postcss.config.mjs`, `eslint.config.mjs`

---

## 2. Absolute Rules — Never Break These

### 2.1 File Verification Before Any Edit
- **Always read a file before editing it.**
- If you have not read a file in this session, say: `"I need to read [filename] first."`
- Never write code for a file you have not seen.

### 2.2 No Assumed File Content
- Never assume what is inside: `next.config.ts`, `robots.txt`, `sitemap.ts`, `layout.tsx`, `middleware.ts`, or any component.
- If content is needed and not provided, ask: `"Please paste the current content of [file]."`

### 2.3 No Invented Package Versions
- Never write `package@x.y.z` unless the user has shared `package.json`.
- Write package names only: `next-sitemap`, not `next-sitemap@3.1.52`.

### 2.4 Confirm Before Overwriting
- Before replacing any existing file content say: `"This will overwrite your current [file]. Confirm? (yes/no)"`
- Never delete or replace without explicit user confirmation.

### 2.5 Flag Uncertainty Explicitly
- If unsure about any Next.js API, Bing behavior, or SEO fact, say exactly:
  `"I am not 100% certain — verify at: [official docs URL]"`
- Never fabricate documentation links. Use real URLs only:
  - Next.js docs: https://nextjs.org/docs
  - Bing Webmaster: https://www.bing.com/webmasters/about
  - IndexNow: https://www.indexnow.org/documentation
  - Google Search Central: https://developers.google.com/search

### 2.6 No Hallucinated SEO Statistics
- Never invent ranking data, search volumes, or CTR percentages.
- If referencing a stat, it must come from the user's data or a known public source.

---

## 3. Architecture & Folder Structure

```
src/
├── app/                    ← App Router pages & layouts
│   ├── layout.tsx          ← Root layout (global metadata here)
│   ├── page.tsx            ← Homepage (sleep calculator tool)
│   ├── sitemap.ts          ← Dynamic sitemap generation
│   ├── robots.ts           ← robots.txt generation (if used)
│   └── [slug]/
│       └── page.tsx        ← Blog/content pages
├── components/             ← Reusable UI components
│   ├── calculator/         ← Sleep calculator specific components
│   └── ui/                 ← Generic UI components
├── lib/
│   ├── sleepCalculator.ts  ← Core sleep cycle logic (pure functions)
│   ├── metadata.ts         ← Shared metadata helpers
│   └── structuredData.ts   ← JSON-LD schema builders
└── types/
    └── sleep.ts            ← TypeScript interfaces

public/
├── b8f2e1a4c7d3f9e6b2a8c4d1f7e3a9c6.txt  ← IndexNow key file
└── [other static assets]

scripts/                    ← Build/utility scripts
.claude/                    ← Claude Code configuration
```

---

## 4. Known Issues & Their Status

### ISSUE-001: Bing Crawl — "Discovered but not crawled"
- **Status:** robots.txt fix deployed (Bingbot now explicitly allowed)
- **Root cause was:** `Disallow: /*?*` in global rules — now removed
- **Remaining actions:**
  1. Verify `public/b8f2e1a4c7d3f9e6b2a8c4d1f7e3a9c6.txt` exists with key content only
  2. Submit sitemap in Bing Webmaster Tools → Sitemaps section
  3. Click "Request indexing" in Bing Webmaster → URL Inspection

### ISSUE-002: IndexNow Not Active
- **Key value:** `b8f2e1a4c7d3f9e6b2a8c4d1f7e3a9c6`
- **Key file needed:** `public/b8f2e1a4c7d3f9e6b2a8c4d1f7e3a9c6.txt`
- **File content** (exactly one line, nothing else):
  ```
  b8f2e1a4c7d3f9e6b2a8c4d1f7e3a9c6
  ```
- **API route needed:** `src/app/api/indexnow/route.ts`
- **Env variable needed:** `INDEXNOW_KEY=b8f2e1a4c7d3f9e6b2a8c4d1f7e3a9c6`

### ISSUE-003: Sitemap Verification
- Sitemap URLs declared in robots.txt:
  - `https://getsleepcalculator.net/sitemap.xml`
  - `https://getsleepcalculator.net/sitemap-0.xml`
- Before editing sitemap config, read `next-sitemap.config.js` first

---

## 5. SEO Standards (Mandatory on Every Page)

### 5.1 Metadata API Pattern (App Router)
```typescript
// Every page.tsx must export metadata or generateMetadata
export const metadata: Metadata = {
  title: 'Page Title Here | Sleep Calculator',  // 50-60 chars
  description: 'Primary keyword in first 20 words. 140-155 chars total.',
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://getsleepcalculator.net/[path]',
  },
  openGraph: {
    title: 'Page Title Here',
    description: 'OG description',
    url: 'https://getsleepcalculator.net/[path]',
    siteName: 'Sleep Calculator',
    type: 'website',
  },
}
```

### 5.2 Root Layout metadataBase (must exist in app/layout.tsx)
```typescript
export const metadata: Metadata = {
  metadataBase: new URL('https://getsleepcalculator.net'),
  // ... other fields
}
```

### 5.3 JSON-LD Structured Data
- Homepage: `WebApplication` schema + `FAQPage` schema
- Blog posts: `Article` schema
- All JSON-LD must be in `<script type="application/ld+json">` inside page component
- Use `src/lib/structuredData.ts` for reusable schema builders

### 5.4 Target Keywords (use naturally, never stuff)
- `sleep calculator`
- `what time should I go to sleep`
- `sleep cycle calculator`
- `best time to wake up`
- `how many hours of sleep do I need`
- `bedtime calculator`

---

## 6. Code Quality Standards

### 6.1 Component Rules
```typescript
// Server Component (default — no directive needed)
// Use for: pages, layouts, static content, metadata

'use client'
// Use for: useState, useEffect, onClick, browser APIs, calculator logic UI
```

### 6.2 TypeScript Rules
- Strict mode is ON — never use `any`
- All functions must have explicit return types
- Sleep calculator interfaces must live in `src/types/sleep.ts`
- Example interface:
```typescript
interface SleepCycle {
  bedtime: Date
  wakeTime: Date
  cycles: number
  totalHours: number
  quality: 'optimal' | 'acceptable' | 'poor'
}
```

### 6.3 Image Rules
```typescript
// ALWAYS use next/image — never <img> tag
import Image from 'next/image'
<Image src="/hero.webp" alt="descriptive alt text" width={800} height={400} priority />
```

### 6.4 Font Rules
```typescript
// ALWAYS use next/font — never external CSS @import
import { Inter } from 'next/font/google'
```

### 6.5 Core Web Vitals Checklist
- LCP: Hero images must have `priority` prop on next/image
- CLS: Always set explicit `width` and `height` on all images
- INP: Calculator state updates must be debounced if firing on every keystroke
- No layout shifts from font loading — use `display: 'swap'` in next/font

---

## 7. IndexNow Implementation (Priority Task)

When asked to implement IndexNow, create this exact file:

```typescript
// src/app/api/indexnow/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { urls } = await request.json()

    if (!urls || !Array.isArray(urls)) {
      return NextResponse.json({ error: 'urls array required' }, { status: 400 })
    }

    const key = process.env.INDEXNOW_KEY
    if (!key) {
      return NextResponse.json({ error: 'INDEXNOW_KEY not set' }, { status: 500 })
    }

    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        host: 'getsleepcalculator.net',
        key,
        keyLocation: `https://getsleepcalculator.net/${key}.txt`,
        urlList: urls,
      }),
    })

    return NextResponse.json({ status: response.status, ok: response.ok })
  } catch (error) {
    return NextResponse.json({ error: 'IndexNow ping failed' }, { status: 500 })
  }
}
```

---

## 8. Response Format Rules for Claude Code

When making any code change:
1. **State** which file is being edited and why (one line)
2. **Show** only the changed section — not the full file unless explicitly asked
3. **Explain** what each change does (one line per change)
4. **List** any other files that also need updating before writing code

When asked an SEO question:
1. Direct answer first (1-2 sentences)
2. Supporting detail after
3. No invented statistics

When uncertain:
- Say: `"I don't have enough information about [X]. Please share [specific file or data needed]."`
- Never guess or fill in blanks from assumptions

---

## 9. Robots.txt — Current Correct State

The fixed robots.txt should contain:
```
User-agent: *
Allow: /
Disallow: /api/

User-agent: Bingbot
Allow: /

User-agent: Googlebot
Allow: /

Sitemap: https://getsleepcalculator.net/sitemap.xml
Sitemap: https://getsleepcalculator.net/sitemap-0.xml
```

**DO NOT** re-add `Disallow: /*?*` — this was the confirmed Bing crawl blocker.

---

## 10. Environment Variables Required

```bash
# .env.local
INDEXNOW_KEY=b8f2e1a4c7d3f9e6b2a8c4d1f7e3a9c6

# Add to Vercel dashboard too:
# Settings → Environment Variables → Production
```

---

## 11. Quick Reference — What NOT to Do

| Never do this | Do this instead |
|---|---|
| Edit a file without reading it first | Read file → then edit |
| Use `<img>` tag | Use `next/image` |
| Use `any` type | Define proper interface |
| Add `Disallow: /*?*` to robots.txt | Leave it out entirely |
| Import fonts from Google CDN directly | Use `next/font/google` |
| Use `next/head` for metadata | Use Metadata API (App Router) |
| Invent npm package versions | Use package name only |
| Guess file contents | Ask user to paste current content |

---

## 12. PRESERVE-FIRST PROTOCOL (Most Important Section)

### This project has existing SEO work — treat everything as production.

**Before touching ANY existing file, run this mental checklist:**

```
CHECKLIST — answer all 4 before writing a single line of code:

[ ] Have I READ the current file content in this session?
[ ] Do I know EXACTLY which lines need to change?
[ ] Will my change BREAK or REMOVE anything already working?
[ ] Has the user said YES to this specific change?

If any answer is NO — STOP and ask first.
```

---

### 12.1 Protected Files — Never Modify Without Explicit Permission

These files contain existing SEO work. Read them, report what is there, ask before changing:

| File | Why Protected |
|---|---|
| `src/app/layout.tsx` | Global metadata, existing SEO tags, fonts |
| `src/app/page.tsx` | Homepage content, existing structured data |
| `public/robots.txt` | Already fixed — do NOT re-add `Disallow: /*?*` |
| `next-sitemap.config.js` | Sitemap configuration already set up |
| `next.config.ts` | Build config — wrong change = broken deployment |
| Any `page.tsx` in `src/app/` | May have existing metadata and content |
| Any component in `src/components/` | May have working calculator logic |

---

### 12.2 The Audit-First Workflow

When the user asks to implement or improve anything SEO-related, follow this exact order:

```
STEP 1 — AUDIT (always first)
Read the relevant file(s).
Report: "I found the following existing SEO setup: [list what exists]"

STEP 2 — GAP ANALYSIS
Say: "These things already exist ✓ and these are missing ✗"
Never overwrite what already exists and works.

STEP 3 — PROPOSE (never auto-implement)
Say: "I recommend adding/changing only: [specific list]"
Wait for user approval.

STEP 4 — SURGICAL EDIT ONLY
Change only the exact lines needed.
Never rewrite a whole file to fix one thing.

STEP 5 — CONFIRM AFTER
Say: "I changed [X]. Everything else in the file is untouched."
```

---

### 12.3 Additive vs Destructive Changes

```
ADDITIVE (safe — can proceed):
✓ Creating a NEW file that does not exist yet
✓ Adding a NEW function to an existing file (at the end)
✓ Adding a new page route that does not exist
✓ Creating public/[indexnow-key].txt
✓ Creating src/app/api/indexnow/route.ts (new file)

DESTRUCTIVE (requires explicit YES from user):
✗ Replacing metadata in an existing page.tsx
✗ Rewriting layout.tsx
✗ Changing next-sitemap.config.js settings
✗ Modifying any existing component logic
✗ Changing next.config.ts
✗ Editing robots.txt (already correctly fixed)
```

---

### 12.4 Exact Words to Use Before Destructive Changes

If a change modifies existing content, Claude Code must say this exact sentence:

> "This file already has existing content. I will only change [specific thing].
> Everything else — including your existing SEO metadata, content, and structure — will remain untouched.
> Shall I proceed? (yes/no)"

Only after user writes **"yes"** should the edit happen.

---

### 12.5 If User Gives a Vague Instruction

Examples of vague instructions and how to handle them:

| User says | Wrong response | Correct response |
|---|---|---|
| "Fix my SEO" | Start editing files | "Please specify which page or issue. I'll audit that file first." |
| "Improve the metadata" | Rewrite metadata | "I'll read the current metadata first and show you what exists." |
| "Add structured data" | Write new JSON-LD | "Let me check if structured data already exists in this file." |
| "Update the sitemap" | Edit next-sitemap.config.js | "I'll read next-sitemap.config.js first and show you the current config." |
| "Implement IndexNow" | Only create the new API route and key file — these are NEW files, safe to create |

---

### 12.6 Git Safety Reminder

Before any session with significant changes, remind the user:

> "Before we make changes, ensure your current work is committed to git:
> `git add . && git commit -m 'backup before claude session'`
> This gives you a rollback point if anything goes wrong."

Say this ONCE per session at the start, not repeatedly.