import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-slate-800 text-slate-300 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="relative w-10 h-10">
                <Image src="/flagguesser.png" alt="Flagguesser" fill className="object-contain" />
              </div>
              <h3 className="text-xl font-bold text-blue-400 font-varela">Flagguesser</h3>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Daily flag guessing game. Test your knowledge of world countries and national flags. Identify countries from progressively revealed flag images.
            </p>
          </div>

          {/* Game Links */}
          <div>
            <h4 className="font-semibold text-amber-400 mb-4">Game</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-amber-400 transition-colors">
                  Play Today
                </Link>
              </li>
              <li>
                <Link href="/how-to-play" className="hover:text-amber-400 transition-colors">
                  How to Play
                </Link>
              </li>
              <li>
                <Link href="/geography-quiz" className="hover:text-amber-400 transition-colors">
                  Geography Quiz
                </Link>
              </li>
              <li>
                <Link href="/world-flags" className="hover:text-amber-400 transition-colors">
                  World Flags
                </Link>
              </li>
            </ul>
          </div>

          {/* More Games */}
          <div>
            <h4 className="font-semibold text-amber-400 mb-4">More Games</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.daily-challenge.fun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors font-medium"
                >
                  Daily Challenge Hub 🎮
                </a>
              </li>
              <li>
                <a
                  href="https://www.supercardle.fun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors"
                >
                  Supercardle 🏎️
                </a>
              </li>
              <li>
                <a
                  href="https://www.classic-snake.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors"
                >
                  Classic Snake 🐍
                </a>
              </li>
            </ul>
          </div>

          {/* Friends */}
          <div>
            <h4 className="font-semibold text-amber-400 mb-4">Friends</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://browse-ai.tools"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors"
                >
                  Browse AI Tools 🤖
                </a>
              </li>
              <li>
                <a
                  href="https://www.stop-watch.online"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors"
                >
                  Stopwatch Online ⏱️
                </a>
              </li>
              <li>
                <a
                  href="https://www.flip-a-coin.online"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors"
                >
                  Flip A Coin Online 🪙
                </a>
              </li>
              <li>
                <a
                  href="https://www.wheel-spinner.online"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors"
                >
                  Wheel Spinner Online 🎡
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm text-slate-400">© 2025 Webforce Studio. All rights reserved.</p>
            <p className="text-xs text-slate-500 mt-2">Exploring world flags through daily geography challenges</p>
          </div>
          
          {/* Legal Links - Bottom Right */}
          <div className="flex gap-6 text-sm">
            <Link href="/contact" className="hover:text-amber-400 transition-colors">
              Contact Us
            </Link>
            <Link href="/privacy" className="hover:text-amber-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-amber-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
