import { NextResponse } from "next/server"
import { getTodaysCountry } from "@/lib/data"
import { notifyKeyPages, notifyFlagPage, notifyRegionalPages } from "@/lib/indexnow-utils"

export async function GET() {
  try {
    const today = getTodaysCountry()
    
    // Notify about key pages
    const keyPagesResult = await notifyKeyPages()
    
    // Notify about today's flag
    const flagResult = await notifyFlagPage(today.id)
    
    // Notify about regional pages
    const regionalResult = await notifyRegionalPages()
    
    const allResults = {
      keyPages: keyPagesResult,
      todaysFlag: flagResult,
      regionalPages: regionalResult,
      summary: {
        totalUrls: keyPagesResult.count + flagResult.count + regionalResult.count,
        allSuccessful: keyPagesResult.success && flagResult.success && regionalResult.success
      }
    }

    return NextResponse.json({
      success: allResults.summary.allSuccessful,
      results: allResults,
      timestamp: new Date().toISOString()
    })
  } catch (e: any) {
    console.error('Daily IndexNow notification failed:', e)
    return NextResponse.json({ 
      success: false, 
      error: e?.message || "Unknown error" 
    }, { status: 500 })
  }
}


