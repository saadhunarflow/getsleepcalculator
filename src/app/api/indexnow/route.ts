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
  } catch {
    return NextResponse.json({ error: 'IndexNow ping failed' }, { status: 500 })
  }
}
