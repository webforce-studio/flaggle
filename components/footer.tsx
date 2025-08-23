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
                <img src="/logo.png" alt="Flagguesser" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl font-bold text-blue-400 font-varela">flaggle.fun</h3>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Daily flag guessing game. Test your knowledge of world countries and national flags. Identify countries from progressively revealed flag images.
            </p>
          </div>

          

          {/* Regional Flags */}
          <div>
            <h4 className="font-semibold text-amber-400 mb-4">Regional Flags</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/europe-flags" className="hover:text-amber-400 transition-colors">
                  Europe Flags
                </Link>
              </li>
              <li>
                <Link href="/africa-flags" className="hover:text-amber-400 transition-colors">
                  Africa Flags
                </Link>
              </li>
              <li>
                <Link href="/asia-flags" className="hover:text-amber-400 transition-colors">
                  Asia Flags
                </Link>
              </li>
              <li>
                <Link href="/america-flags" className="hover:text-amber-400 transition-colors">
                  Americas Flags
                </Link>
              </li>
              <li>
                <Link href="/oceania-flags" className="hover:text-amber-400 transition-colors">
                  Oceania Flags
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
                  href="https://www.numlink.fun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors"
                >
                  Numlink 🔢
                </a>
              </li>
              <li>
                <a
                  href="https://www.monumentle.fun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors"
                >
                  Monumentle 🗽
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
