import { NextResponse } from "next/server"
import { submitIndexNow } from "@/lib/indexnow"

// POST /api/indexnow
// Body: { urls: string[] }
export async function POST(request: Request) {
  try {
    const { urls } = await request.json()
    const res = await submitIndexNow(urls)
    const text = await res.text()
    return NextResponse.json({ ok: res.ok, status: res.status, body: text })
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e?.message || "Unknown error" }, { status: 500 })
  }
}


