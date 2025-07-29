"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PrivacyPage() {
  const [darkMode, setDarkMode] = useState(false)
  const [showStats, setShowStats] = useState(false)
  const [showHowToPlay, setShowHowToPlay] = useState(false)

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode")
    if (savedDarkMode) {
      setDarkMode(JSON.parse(savedDarkMode))
    }
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem("darkMode", JSON.stringify(newDarkMode))
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-900 dark:to-gray-800">
        <Header
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          showStats={showStats}
          setShowStats={setShowStats}
          showHowToPlay={showHowToPlay}
          setShowHowToPlay={setShowHowToPlay}
        />

        <main className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Privacy Policy</h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">Last updated: July 2025</p>
            </div>

            <div className="space-y-8">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Information We Collect</CardTitle>
                </CardHeader>
                <CardContent className="prose dark:prose-invert max-w-none">
                  <p>
                    Flagguesser is designed with privacy in mind. We collect minimal information to provide you with the
                    best flag guessing experience:
                  </p>
                  <ul>
                    <li>
                      <strong>Game Statistics:</strong> Your flag guessing progress, scores, and statistics are stored locally in
                      your browser's storage and are not transmitted to our servers.
                    </li>
                    <li>
                      <strong>Usage Analytics:</strong> We may collect anonymous usage data to understand how players
                      interact with the game and improve the experience. This includes page views, game interactions, and performance metrics.
                    </li>
                    <li>
                      <strong>Technical Information:</strong> Basic technical information like browser type, device information, and IP address may be collected for optimization and security purposes.
                    </li>
                    <li>
                      <strong>Contact Form Data:</strong> When you submit our contact form, we collect your name, email address, subject, and message to respond to your inquiry. This data is processed securely and not shared with third parties.
                    </li>
                    <li>
                      <strong>Cookies and Tracking:</strong> We use essential cookies for functionality and may use analytics cookies to improve our service. You can control cookie settings through your browser preferences.
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>How We Use Your Information</CardTitle>
                </CardHeader>
                <CardContent className="prose dark:prose-invert max-w-none">
                  <p>The limited information we collect is used to:</p>
                  <ul>
                    <li>Provide and maintain the Flagguesser daily flag guessing service</li>
                    <li>Improve game performance and user experience</li>
                    <li>Analyze usage patterns to enhance flag guessing features</li>
                    <li>Ensure the security and stability of our service</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Data Storage and Security</CardTitle>
                </CardHeader>
                <CardContent className="prose dark:prose-invert max-w-none">
                  <p>Your privacy and data security are important to us:</p>
                  <ul>
                    <li>
                      <strong>Local Storage:</strong> Game data is primarily stored locally on your device using browser
                      storage mechanisms.
                    </li>
                    <li>
                      <strong>No Personal Accounts:</strong> Flagguesser does not require account creation or personal
                      information.
                    </li>
                    <li>
                      <strong>Secure Transmission:</strong> Any data transmitted is encrypted using industry-standard
                      security protocols.
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Third-Party Services</CardTitle>
                </CardHeader>
                <CardContent className="prose dark:prose-invert max-w-none">
                  <p>Flagguesser may use third-party services for:</p>
                  <ul>
                    <li>
                      <strong>Flag Images:</strong> Flag images are sourced from reliable flag databases with proper
                      attribution and accuracy verification.
                    </li>
                    <li>
                      <strong>Hosting:</strong> Our website is hosted on Vercel, which may collect standard web server
                      logs.
                    </li>
                    <li>
                      <strong>Analytics:</strong> We may use privacy-focused analytics tools to understand usage
                      patterns.
                    </li>
                  </ul>
                  <p>These services have their own privacy policies, and we encourage you to review them.</p>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Your Rights and Choices</CardTitle>
                </CardHeader>
                <CardContent className="prose dark:prose-invert max-w-none">
                  <p>You have control over your data:</p>
                  <ul>
                    <li>
                      <strong>Clear Data:</strong> You can clear your game data at any time through your browser's
                      storage settings.
                    </li>
                    <li>
                      <strong>Opt-Out:</strong> You can disable JavaScript or use privacy-focused browsers to limit data
                      collection.
                    </li>
                    <li>
                      <strong>Data Access:</strong> You can request access to any personal data we hold about you.
                    </li>
                    <li>
                      <strong>Data Correction:</strong> You can request correction of inaccurate personal data.
                    </li>
                    <li>
                      <strong>Data Deletion:</strong> You can request deletion of your personal data, subject to legal requirements.
                    </li>
                    <li>
                      <strong>Contact Us:</strong> If you have questions about your data, contact us at our support email.
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Children's Privacy</CardTitle>
                </CardHeader>
                <CardContent className="prose dark:prose-invert max-w-none">
                  <p>
                    Flagguesser is suitable for all ages and does not knowingly collect personal information from
                    children under 13. The game is designed to be educational and safe for young learners interested in
                    geography and world flags.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Changes to This Policy</CardTitle>
                </CardHeader>
                <CardContent className="prose dark:prose-invert max-w-none">
                  <p>
                    We may update this Privacy Policy from time to time. Any changes will be posted on this page with an
                    updated revision date. We encourage you to review this policy periodically.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="prose dark:prose-invert max-w-none">
                  <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
                  <ul>
                    <li>Email: contact@webforce-studio.com</li>
                    <li>Website: flagguesser.fun</li>
                    <li>Response Time: We typically respond to privacy inquiries within 48 hours</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            {/* Call to Action */}
            <div className="text-center bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg p-8 text-white shadow-lg mt-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Play Flagguesser?</h2>
              <p className="text-xl mb-6 opacity-90">
                Your privacy is important to us. Start playing our secure, privacy-focused flag guessing game today!
              </p>
              <Link href="/">
                <Button className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                  Start Playing Today
                </Button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
