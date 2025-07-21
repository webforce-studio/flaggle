import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Clock, Target, Lightbulb, Users, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "How to Play Flagguesser: Game Rules & Instructions | Daily Flag Guessing Game",
  description: "Learn how to play Flagguesser, the engaging flag guessing game. Master the rules, scoring system, and tips to become a geography expert through daily flag challenges.",
  keywords: "how to play Flagguesser, flag guessing game rules, Flagguesser instructions, guessing flags game, Flagguesser tips, geography game rules",
  openGraph: {
    title: "How to Play Flagguesser: Game Rules & Instructions",
    description: "Master the flag guessing game with our comprehensive guide. Learn rules, scoring, and tips to become a geography expert.",
    type: "website",
  },
}

export default function HowToPlayPage() {
  const gameFeatures = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Daily Challenges",
      description: "New flag every day to test your knowledge and learn something new.",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Quick Play",
      description: "Complete rounds in minutes - perfect for busy schedules and learning on the go.",
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Score Tracking",
      description: "Track your progress and compete with friends on the leaderboard.",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Smart Hints",
      description: "Get helpful clues when you're stuck, with hints that teach you geography facts.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Social Sharing",
      description: "Share your results and challenge friends to beat your score.",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Educational",
      description: "Learn about world cultures, flags, and geography while having fun.",
    },
  ]

  const tips = [
    "Study flag colors, patterns, and distinctive features of world flags",
    "Learn world capitals and major cities where flags represent countries",
    "Pay attention to cultural and historical context clues",
    "Practice regularly to improve your recognition skills",
    "Use hints strategically - they provide educational value",
    "Explore different continents to broaden your geographic knowledge",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 monument-title">
              How to Play Flagguesser: Master the Flag Guessing Game
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Unlock the world of flags with our comprehensive guide to playing Flagguesser. Learn the rules, 
              master the scoring system, and discover tips to become a geography expert through daily flag challenges.
            </p>
            <Link href="/">
              <Button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 text-lg">
                Start Playing Today
              </Button>
            </Link>
          </div>

          {/* What is Monumentle */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              What is Flagguesser?
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                <strong>Flagguesser</strong> is an engaging flag guessing game that challenges players to identify 
                world flags and learn world geography in a fun, interactive way. Whether you're testing your 
                knowledge or learning new facts, Flagguesser offers a unique blend of education and entertainment for all ages.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                The main goal is to <strong>guess the country</strong> based on flag clues, hints, and trivia. 
                The faster and more accurately you guess, the higher your score!
              </p>
            </div>
          </div>

          {/* Game Features */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Game Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gameFeatures.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow shadow-lg">
                  <CardHeader className="text-center">
                    <div className="text-amber-500 mb-2">{feature.icon}</div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-sm text-center">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Step-by-Step Gameplay */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Step-by-Step Gameplay
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    1. Start a New Game
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Visit Flagguesser daily to access the new flag challenge. Each day features a different 
                    world flag from around the world.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    2. Study the Clues
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Carefully examine the visual clues, flag details, and any provided hints. Look for 
                    distinctive features that can help you identify the flag and its country.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    3. Make Your Guess
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Type your answer in the provided input field. You can make multiple attempts, but faster 
                    and more accurate guesses earn higher scores.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    4. Learn and Improve
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    After each round, discover fascinating facts about the country, its history, and cultural 
                    significance. Use this knowledge to improve your future guesses.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Scoring System */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Scoring System
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Score Factors</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• <strong>Speed:</strong> Faster guesses earn higher points</li>
                  <li>• <strong>Accuracy:</strong> Correct answers on first try get bonus points</li>
                  <li>• <strong>Hints Used:</strong> Fewer hints mean higher scores</li>
                  <li>• <strong>Streak Bonus:</strong> Consecutive correct answers earn multipliers</li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Game Rules</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• One new flag challenge per day</li>
                  <li>• Multiple attempts allowed with score penalties</li>
                  <li>• Hints available but reduce final score</li>
                  <li>• No time limit, but speed affects scoring</li>
                  <li>• Play fair - no external research during guessing</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Pro Tips */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Pro Tips for Success
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Learning Strategy</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    {tips.slice(0, 3).map((tip, index) => (
                      <li key={index}>• {tip}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Advanced Techniques</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    {tips.slice(3).map((tip, index) => (
                      <li key={index}>• {tip}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg p-8 text-white shadow-lg">
            <h2 className="text-3xl font-bold mb-4">Ready to Test Your Flag Knowledge?</h2>
            <p className="text-xl mb-6 opacity-90">
              Start playing Flagguesser today and see how many world flags you can identify!
            </p>
            <Link href="/">
              <Button className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                Play Today's Challenge
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 