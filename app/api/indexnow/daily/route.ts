import { NextResponse } from "next/server"
import { submitIndexNow } from "@/lib/indexnow"
import { getTodaysCountry } from "@/lib/data"

export async function GET() {
  try {
    const today = getTodaysCountry()
    const base = "https://flaggle.fun"
    const urls = [
      `${base}/`,
      `${base}/printable-flags`,
      `${base}/europe-flags`,
      `${base}/asia-flags`,
      `${base}/africa-flags`,
      `${base}/america-flags`,
      `${base}/flags/${today.id}`,
    ]

    const res = await submitIndexNow(urls)
    const text = await res.text()
    return NextResponse.json({ ok: res.ok, status: res.status, body: text, urls })
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e?.message || "Unknown error" }, { status: 500 })
  }
}


