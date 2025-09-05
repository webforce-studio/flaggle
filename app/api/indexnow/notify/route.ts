import { NextResponse } from "next/server"
import { submitIndexNow } from "@/lib/indexnow"

// POST /api/indexnow/notify
// Body: { urls: string[] }
// Notifies search engines about updated URLs via IndexNow
export async function POST(request: Request) {
  try {
    const { urls } = await request.json()
    
    if (!Array.isArray(urls) || urls.length === 0) {
      return NextResponse.json(
        { error: "urls must be a non-empty array" }, 
        { status: 400 }
      )
    }

    // Validate URLs are from our domain
    const validUrls = urls.filter(url => 
      typeof url === 'string' && 
      (url.startsWith('https://www.flaggle.fun/') || url.startsWith('https://flaggle.fun/'))
    )

    if (validUrls.length === 0) {
      return NextResponse.json(
        { error: "No valid URLs provided" }, 
        { status: 400 }
      )
    }

    const res = await submitIndexNow(validUrls)
    const text = await res.text()
    
    return NextResponse.json({ 
      success: res.ok, 
      status: res.status, 
      response: text,
      urls: validUrls,
      count: validUrls.length
    })
  } catch (e: any) {
    console.error('IndexNow notification error:', e)
    return NextResponse.json(
      { error: e?.message || "Unknown error" }, 
      { status: 500 }
    )
  }
}

// GET /api/indexnow/notify?urls=url1,url2,url3
// Alternative GET method for simple notifications
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const urlsParam = searchParams.get('urls')
    
    if (!urlsParam) {
      return NextResponse.json(
        { error: "urls parameter is required" }, 
        { status: 400 }
      )
    }

    const urls = urlsParam.split(',').map(url => url.trim()).filter(Boolean)
    
    if (urls.length === 0) {
      return NextResponse.json(
        { error: "No valid URLs provided" }, 
        { status: 400 }
      )
    }

    const res = await submitIndexNow(urls)
    const text = await res.text()
    
    return NextResponse.json({ 
      success: res.ok, 
      status: res.status, 
      response: text,
      urls,
      count: urls.length
    })
  } catch (e: any) {
    console.error('IndexNow notification error:', e)
    return NextResponse.json(
      { error: e?.message || "Unknown error" }, 
      { status: 500 }
    )
  }
}
