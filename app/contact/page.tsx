import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MessageSquare, HelpCircle, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Flaggle | Support, Feedback, and Partnerships",
  description:
    "Contact Flaggle for support, feedback, partnerships, and educational use. We reply within 24–48 hours. Flag guessing game and printable flags hub.",
  alternates: { canonical: "/contact" },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-900 dark:to-gray-800">

        <main className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Contact Us</h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Have questions, suggestions, or feedback about Flaggle? We'd love to hear from you!
              </p>
            </div>

            <div className="max-w-2xl mx-auto space-y-8">
              {/* Contact Information */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-amber-600" />
                    Get in Touch
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Email Us</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">
                      For general inquiries, feedback, or support questions:
                    </p>
                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                      <span className="text-amber-600 font-medium select-none">
                        contact
                        <span className="hidden">[at]</span>
                        @
                        <span className="hidden">[dot]</span>
                        webforce-studio
                        <span className="hidden">[dot]</span>
                        .com
                      </span>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                        (Copy and paste this address into your email client)
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Response Time</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      We typically respond to all inquiries within 24-48 hours during business days.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">What We Can Help With</h3>
                    <ul className="text-gray-600 dark:text-gray-300 space-y-1">
                      <li>• General questions about Flaggle</li>
                      <li>• Bug reports and technical issues</li>
                      <li>• Feature suggestions and feedback</li>
                      <li>• Educational use inquiries</li>
                      <li>• Privacy and legal questions</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ Section */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <HelpCircle className="h-5 w-5 text-amber-600" />
                    Frequently Asked Questions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">How often are new flags added?</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      We regularly add new countries to keep the game fresh and educational. Our database now includes over 150 world countries.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Can I suggest a country?</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Absolutely! We love suggestions for new countries to include in the game. Send us your ideas via email.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Is Flaggle free to play?</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Yes! Flaggle is completely free to play.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Can I use Flaggle in my classroom?</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Yes! Flaggle is designed as an educational tool and is perfect for geography lessons and cultural studies.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* About Section */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-amber-600" />
                    About Flaggle
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-300">
                    Flaggle is an educational geography game that challenges players to identify world flags and countries.
                    Our mission is to make learning about world geography engaging and accessible to everyone.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    With over 150 countries from all continents, we provide a comprehensive learning experience that combines
                    visual recognition, geographical knowledge, and cultural education.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
  )
}
