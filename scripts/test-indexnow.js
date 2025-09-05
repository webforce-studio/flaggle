#!/usr/bin/env node

/**
 * Test script for IndexNow integration
 * Usage: node scripts/test-indexnow.js
 */

const BASE_URL = 'https://www.flaggle.fun'

async function testIndexNow() {
  console.log('🧪 Testing IndexNow integration...\n')

  try {
    // Test 1: Key pages notification
    console.log('1️⃣ Testing key pages notification...')
    const keyPagesResponse = await fetch(`${BASE_URL}/api/indexnow/daily`)
    const keyPagesResult = await keyPagesResponse.json()
    
    if (keyPagesResult.success) {
      console.log('✅ Key pages notification successful')
      console.log(`   📊 Total URLs notified: ${keyPagesResult.results.summary.totalUrls}`)
    } else {
      console.log('❌ Key pages notification failed')
      console.log('   Error:', keyPagesResult.error)
    }

    console.log('\n2️⃣ Testing manual notification...')
    const testUrls = [
      `${BASE_URL}/`,
      `${BASE_URL}/sitemap.xml`,
      `${BASE_URL}/world-flags`
    ]

    const manualResponse = await fetch(`${BASE_URL}/api/indexnow/notify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ urls: testUrls })
    })

    const manualResult = await manualResponse.json()
    
    if (manualResult.success) {
      console.log('✅ Manual notification successful')
      console.log(`   📊 URLs notified: ${manualResult.count}`)
    } else {
      console.log('❌ Manual notification failed')
      console.log('   Error:', manualResult.error)
    }

    console.log('\n3️⃣ Testing GET method...')
    const getResponse = await fetch(`${BASE_URL}/api/indexnow/notify?urls=${encodeURIComponent(testUrls.join(','))}`)
    const getResult = await getResponse.json()
    
    if (getResult.success) {
      console.log('✅ GET method successful')
      console.log(`   📊 URLs notified: ${getResult.count}`)
    } else {
      console.log('❌ GET method failed')
      console.log('   Error:', getResult.error)
    }

    console.log('\n🎉 IndexNow integration test completed!')

  } catch (error) {
    console.error('❌ Test failed:', error.message)
  }
}

// Run the test
testIndexNow()
