"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TermsPage() {
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
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Terms of Service</h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">Last updated: January 2025</p>
            </div>

            <div className="space-y-8">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Acceptance of Terms</CardTitle>
                </CardHeader>
                <CardContent className="prose dark:prose-invert max-w-none">
                  <p>
                    By accessing and using Monumentle ("the Service"), you accept and agree to be bound by the terms and
                    provision of this agreement. If you do not agree to abide by the above, please do not use this
                    service.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Description of Service</CardTitle>
                </CardHeader>
                <CardContent className="prose dark:prose-invert max-w-none">
                  <p>
                    Monumentle is a free, educational web-based game that challenges players to identify world monuments
                    and landmarks. The service includes:
                  </p>
                  <ul>
                    <li>Daily monument guessing challenges with 150+ world landmarks</li>
                    <li>Educational content about world heritage sites and cultural geography</li>
                    <li>Interactive geography quizzes and learning materials</li>
                    <li>Progress tracking and statistics</li>
                    <li>Contact form for support and feedback</li>
                    <li>Accessibility features for inclusive learning</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>User Conduct</CardTitle>
                </CardHeader>
                <CardContent className="prose dark:prose-invert max-w-none">
                  <p>You agree to use Monumentle responsibly and agree not to:</p>
                  <ul>
                    <li>
                      Use the service for any unlawful purpose or in violation of any local, state, national, or
                      international law
                    </li>
                    <li>Attempt to gain unauthorized access to the service, other accounts, or computer systems</li>
                    <li>Interfere with or disrupt the service or servers connected to the service</li>
                    <li>Use automated scripts, bots, or other automated means to access the service</li>
                    <li>Reproduce, duplicate, copy, sell, or exploit any portion of the service without permission</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Intellectual Property</CardTitle>
                </CardHeader>
                <CardContent className="prose dark:prose-invert max-w-none">
                  <p>
                    The Monumentle service and its original content, features, and functionality are owned by Webforce
                    Studio and are protected by international copyright, trademark, patent, trade secret, and other
                    intellectual property laws.
                  </p>
                  <p>
                    Monument images used in the game are sourced from Unsplash and Pexels under their respective
                    licenses and are properly attributed to their original photographers.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Educational Use</CardTitle>
                </CardHeader>
                <CardContent className="prose dark:prose-invert max-w-none">
                  <p>
                    Monumentle is designed as an educational tool to promote learning about world geography, history,
                    and cultural heritage. We encourage the use of this service in educational settings, including:
                  </p>
                  <ul>
                    <li>Classroom activities and assignments</li>
                    <li>Homeschooling curricula</li>
                    <li>Educational research and study</li>
                    <li>Cultural awareness programs</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Disclaimer of Warranties</CardTitle>
                </CardHeader>
                <CardContent className="prose dark:prose-invert max-w-none">
                  <p>
                    The information on this service is provided on an "as is" basis. To the fullest extent permitted by
                    law, this Company:
                  </p>
                  <ul>
                    <li>Excludes all representations and warranties relating to this service and its contents</li>
                    <li>Does not warrant that the service will be constantly available, or available at all</li>
                    <li>Makes no warranty regarding the accuracy of historical or geographical information</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Limitation of Liability</CardTitle>
                </CardHeader>
                <CardContent className="prose dark:prose-invert max-w-none">
                  <p>
                    In no event shall Webforce Studio, nor its directors, employees, partners, agents, suppliers, or
                    affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages,
                    including without limitation, loss of profits, data, use, goodwill, or other intangible losses,
                    resulting from your use of the service.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Termination</CardTitle>
                </CardHeader>
                <CardContent className="prose dark:prose-invert max-w-none">
                  <p>
                    We may terminate or suspend your access to the service immediately, without prior notice or
                    liability, for any reason whatsoever, including without limitation if you breach the Terms.
                  </p>
                  <p>Upon termination, your right to use the service will cease immediately.</p>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Changes to Terms</CardTitle>
                </CardHeader>
                <CardContent className="prose dark:prose-invert max-w-none">
                  <p>
                    We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a
                    revision is material, we will try to provide at least 30 days notice prior to any new terms taking
                    effect.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="prose dark:prose-invert max-w-none">
                  <p>If you have any questions about these Terms of Service, please contact us:</p>
                  <ul>
                    <li>Email: contact@webforce-studio.com</li>
                    <li>Website: monumentle.fun</li>
                    <li>Response Time: We typically respond to legal inquiries within 48 hours</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            {/* Call to Action */}
            <div className="text-center bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg p-8 text-white shadow-lg mt-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Start Playing?</h2>
              <p className="text-xl mb-6 opacity-90">
                Accept our terms and start enjoying the educational monument game today!
              </p>
              <Link href="/">
                <Button className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                  Accept & Start Playing
                </Button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
