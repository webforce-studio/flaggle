import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GeographyQuizStructuredData } from "./structured-data"

export const metadata: Metadata = {
  title: "Learn World Geography with Monumentle | Interactive Geography Quiz Game",
  description:
    "Master world geography through our engaging monument guessing game. Each day features a new landmark challenge that teaches you about countries, cultures, and world heritage sites.",
  keywords: "geography quiz game, learn world geography online, Monumentle geography, educational monument game, improve geography skills, world landmarks quiz",
  openGraph: {
    title: "Learn World Geography with Monumentle",
    description: "Master world geography through interactive monument challenges. Discover countries, cultures, and world heritage sites.",
    type: "website",
  },
}

export default function GeographyQuizPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 monument-title">
              Master World Geography Through Interactive Monument Challenges
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Transform your geography knowledge with our engaging monument guessing game. Each day features a new 
              landmark challenge that teaches you about countries, cultures, and world heritage sites in an interactive way.
            </p>
            <Link href="/">
              <Button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 text-lg">
                Start Learning Geography Today
              </Button>
            </Link>
          </div>

          {/* How Monumentle Teaches Geography */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              How Monumentle Revolutionizes Geography Learning
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              Monumentle offers a revolutionary approach to learning world geography. Instead of traditional quizzes, 
              our interactive monument guessing game helps you discover new places and cultures through visual learning 
              and engaging challenges.
            </p>
            <ul className="list-disc list-inside text-lg text-gray-600 dark:text-gray-300 mb-6">
              <li>
                <b>Discover Countries & Capitals:</b> Identify monuments located in different countries and learn 
                their capital cities through contextual clues.
              </li>
              <li>
                <b>Explore Continents & Regions:</b> Learn about the diverse landscapes, cultures, and historical 
                significance of each continent through landmark recognition.
              </li>
              <li>
                <b>Understand Cultural Heritage:</b> Recognize monuments that represent unique cultural regions, 
                architectural styles, and historical periods from around the world.
              </li>
              <li>
                <b>Master Geographic Features:</b> Learn about mountains, rivers, coastlines, and other geographic 
                features through the locations of famous landmarks.
              </li>
            </ul>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              By visually recognizing famous monuments and understanding their cultural context, you'll naturally 
              improve your geographic knowledge and develop a deeper appreciation for the world's diverse heritage.
            </p>
          </div>

          {/* Educational Content */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Why Choose Monumentle for Geography Learning?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Interactive Visual Learning</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Learn through visual recognition of world monuments</li>
                  <li>• Associate landmarks with their geographic locations and cultural context</li>
                  <li>• Enhance memory retention through visual cues and storytelling</li>
                  <li>• Build mental maps of the world through landmark connections</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Progressive Learning System</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Daily challenges that build knowledge incrementally</li>
                  <li>• Consistent learning that reinforces geographic concepts</li>
                  <li>• Discover new monuments and cultures every day</li>
                  <li>• Track your progress and see your geography skills improve</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-gray-700 dark:to-gray-600 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Perfect For:</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Students</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Supplement classroom lessons with real-world examples and interactive learning
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Quiz Enthusiasts</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Test your global knowledge in a competitive format with daily challenges
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Educators & Parents</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Make learning geography engaging and memorable for learners of all ages
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg p-8 text-white shadow-lg mt-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Master World Geography?</h2>
            <p className="text-xl mb-6 opacity-90">
              Start learning geography through interactive monument challenges today!
            </p>
            <Link href="/">
              <Button className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                Start Learning Geography
              </Button>
            </Link>
          </div>
          
          {/* Add this right before the closing </div> */}
          <GeographyQuizStructuredData />
        </div>
      </div>
    </div>
  )
}
