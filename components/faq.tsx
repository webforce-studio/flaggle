"use client"

import { Globe, GraduationCap, Pencil, Clock, BookOpen, Building, Palette, Star, HelpCircle } from "lucide-react"

const FAQ_DATA = [
  {
    question: "How to play the flag game?",
    answer: "flaggle.fun is a daily flag guessing game where you identify world countries from progressively revealed flag images. You get 6 attempts to guess the correct country, with each wrong guess revealing more of the flag and providing geographic hints.",
    icon: Globe
  },
  {
    question: "What is the flag game called?",
    answer: "This flag guessing game is called flaggle.fun - a fun alternative to Flagle. It's a daily puzzle game that combines entertainment with geography education, featuring flags from 195+ countries worldwide.",
    icon: HelpCircle
  },
  {
    question: "What color is 75% of all flags?",
    answer: "Red appears on approximately 75% of all world flags, making it the most common flag color. This is followed by white and blue, which also appear frequently in national flag designs.",
    icon: Palette
  },
  {
    question: "Are there 254 flags in the world?",
    answer: "There are 195 officially recognized sovereign country flags in the world. The number 254 might include territories, dependencies, and regional flags. flaggle.fun focuses on the official country flags for the best learning experience.",
    icon: Building
  },
  {
    question: "Is flaggle.fun free to play?",
    answer: "Yes! flaggle.fun is completely free to play with no ads or premium features. Enjoy unlimited access to daily flag challenges, regional quizzes, and educational content about world geography.",
    icon: Star
  },
  {
    question: "What's the difference between Flagle and flaggle.fun?",
    answer: "flaggle.fun is a more engaging and educational alternative to Flagle. Both offer a daily challenge; in addition, flaggle.fun provides regional flag quizzes, detailed country pages (history, map, printable flags), and a more interactive learning experience.",
    icon: Clock
  },
  {
    question: "How does flaggle.fun help learn geography?",
    answer: "Beyond flag recognition, flaggle.fun teaches country locations, capital cities, regional geography, and cultural knowledge. Each game provides educational insights about the featured country's geography and culture.",
    icon: BookOpen
  },
  {
    question: "Can I play flaggle.fun in the classroom?",
    answer: "Absolutely! flaggle.fun is perfect for classroom use. Teachers can use it for geography lessons, cultural studies, and interactive learning. The regional flag sections (Europe, Asia, Africa, Americas) are great for focused study.",
    icon: GraduationCap
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
          Everything you need to know about flaggle.fun - the most engaging flag guessing game and Flagle alternative
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