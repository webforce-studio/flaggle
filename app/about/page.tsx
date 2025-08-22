import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import { AboutPageStructuredData } from "./structured-data"

export const metadata: Metadata = {
  title: "About Flaggle - Daily Flag Guessing Game",
  description:
    "Learn about Flaggle, the daily flag guessing game. Discover how it works, what makes it fun, and how it helps you learn world geography.",
  keywords:
    "about flaggle, flag guessing game, daily flag game, flag quiz, world flags",
  openGraph: {
    title: "About Flaggle - Daily Flag Guessing Game",
    description:
      "Discover how Flaggle works and why it's the most engaging daily flag guessing game.",
    url: "https://www.flaggle.fun/about",
  },
  alternates: { canonical: "/about" },
}

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 monument-title">
              About Flaggle
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              The daily flag guessing game for geography lovers worldwide
            </p>
            <Link href="/">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 text-lg">
                Back to Flaggle
              </Button>
            </Link>
          </div>

          {/* Main Content */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg mb-12">
            <div className="text-center mb-8">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <Image src="/logo.png" alt="Flaggle Logo" fill className="object-contain" />
              </div>
            </div>

            <Separator className="mb-8" />

            <div className="space-y-8">
              <section>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">Our Mission</h2>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed text-center">
                  Flaggle combines the popular daily puzzle format with the fascinating world of national flags.
                  Test your knowledge of world countries, learn flag histories and meanings, and discover new places every day.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">How It Works</h2>
                <div className="bg-amber-50 dark:bg-gray-700 rounded-lg p-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Every day, we present a mystery flag to identify. Start with a partially hidden flag and use the
                    progressive reveal system to narrow down your guesses. Each incorrect guess reveals more of the flag
                    and provides distance/proximity hints to guide you toward the correct country.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Whether you're a geography enthusiast or just curious about world countries, Flaggle offers an
                    engaging way to learn flags, pronunciations, and cultural context.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">What You’ll Learn</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
                  Each country page includes flag history, symbolism, printable resources, and a map location.
                </p>
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
