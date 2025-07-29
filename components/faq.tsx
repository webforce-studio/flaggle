"use client"

import { Globe, GraduationCap, Pencil, Clock, BookOpen, Building, Palette, Star, HelpCircle } from "lucide-react"

const FAQ_DATA = [
  {
    question: "How do I play Flagguesser?",
    answer: "You are shown a flag each day and must guess which country it belongs to. Enter your guess, and receive feedback after each attempt. The goal is to guess correctly in as few tries as possible.",
    icon: Globe
  },
  {
    question: "How many guesses do I get per day?",
    answer: "You get 6 guesses per day. Each guess provides feedback on how close you are to the correct country, helping you narrow down your next guess.",
    icon: Clock
  },
  {
    question: "What kind of feedback do I get?",
    answer: "After each guess, you'll see the distance to the correct country and whether you're getting closer or farther away. This helps you learn geography while playing.",
    icon: Pencil
  },
  {
    question: "How does the distance calculation work?",
    answer: "The game calculates the actual geographic distance between your guessed country and the correct country, giving you real-world geography insights.",
    icon: Globe
  },
  {
    question: "What geography skills will I develop?",
    answer: "You'll improve your knowledge of world flags, country locations, capitals, and develop a better understanding of global geography through daily practice.",
    icon: BookOpen
  },
  {
    question: "Which countries are included?",
    answer: "The game includes countries from all continents, featuring diverse flags from around the world to provide a comprehensive geography learning experience.",
    icon: Building
  },
  {
    question: "What cultural knowledge will I gain?",
    answer: "Beyond flags, you'll learn about country capitals, regions, and develop a deeper appreciation for the cultural diversity represented by world flags.",
    icon: Palette
  },
  {
    question: "Are there different difficulty levels?",
    answer: "The game adapts to your skill level through the streak system. As you build winning streaks, you'll unlock achievements and develop stronger geography skills.",
    icon: Star
  }
]

export function FAQ() {
  // FAQ Structured Data for SEO
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_DATA.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  }

  return (
    <>
      {/* FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />
      
      <div className="w-full mt-12 mb-8">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <HelpCircle className="w-8 h-8 text-orange-500" />
          <h2 className="text-4xl font-bold text-orange-500">Frequently Asked Questions</h2>
        </div>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
          Everything you need to know about our interactive world geography quiz and flag identification game
        </p>
      </div>

      {/* Two-column layout with subtle background */}
      <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
          {FAQ_DATA.map((item, idx) => {
            const IconComponent = item.icon
            return (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <IconComponent className="w-6 h-6 text-orange-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-orange-400 mb-2">{item.question}</h3>
                  <p className="text-slate-300 leading-relaxed">{item.answer}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
    </>
  )
} 