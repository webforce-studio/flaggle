import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import { AboutPageStructuredData } from "./structured-data"

export const metadata: Metadata = {
  title: "About Monumentle - Daily Monument Guessing Game",
  description:
    "Learn about Monumentle, a daily puzzle game that tests your knowledge of world monuments and landmarks. Discover how our game works and the types of cultural sites featured.",
  keywords:
    "about monumentle, monument game, cultural landmarks, daily monument challenge, world heritage sites, landmark quiz",
  openGraph: {
    title: "About Monumentle - Daily Monument Guessing Game",
    description:
      "Discover how Monumentle works and the types of world monuments and landmarks featured in our daily guessing game.",
    url: "https://monumentle.fun/about",
  },
}

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 monument-title">
              About Monumentle
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              The ultimate daily monument guessing game for cultural enthusiasts worldwide
            </p>
            <Link href="/">
              <Button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 text-lg">
                Back to Monumentle
              </Button>
            </Link>
          </div>

          {/* Main Content */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg mb-12">
            <div className="text-center mb-8">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <Image src="/logo.png" alt="Monumentle Logo" fill className="object-contain" />
              </div>
            </div>

            <Separator className="mb-8" />

            <div className="space-y-8">
              <section>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">Our Mission</h2>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed text-center">
                  Monumentle combines the popular daily puzzle format with the fascinating world of iconic monuments and
                  landmarks. Test your knowledge of world heritage sites, learn about different cultures, and discover
                  new places every day.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">How It Works</h2>
                <div className="bg-amber-50 dark:bg-gray-700 rounded-lg p-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Every day, we present you with a new monument to identify. Start with a blurred image and use the
                    progressive hint system to narrow down your guesses. Each incorrect guess reveals more details and
                    provides distance clues to guide you toward the answer.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Whether you're a geography enthusiast or just curious about world landmarks, Monumentle offers an
                    engaging way to explore global heritage sites.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                  Featured Monument Types
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
                  Our database features monuments and landmarks from various categories:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    "Ancient Wonders",
                    "Religious Sites",
                    "Modern Landmarks",
                    "Castles & Palaces",
                    "Towers & Bridges",
                    "Cultural Icons",
                  ].map((category) => (
                    <div
                      key={category}
                      className="bg-white dark:bg-gray-600 border border-gray-200 dark:border-gray-500 p-4 rounded-lg text-center shadow-sm"
                    >
                      <div className="font-semibold text-gray-900 dark:text-white">{category}</div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-amber-50 dark:bg-gray-700 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Ready to Test Your Knowledge?</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Challenge yourself with today's monument puzzle and see how well you know world landmarks.
            </p>
            <Link href="/">
              <Button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 text-lg">
                Play Monumentle Now 🏛️
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <AboutPageStructuredData />
    </div>
  )
}
