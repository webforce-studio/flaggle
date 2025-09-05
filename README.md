# 🏳️ Flaggle - Daily Flag Guessing Game

[![Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/webforce-studio/flaggle)

**Flaggle** is a daily flag guessing game where players identify world countries from progressively revealed flag images. Test your knowledge of world flags with countries from all continents!

## ✨ Features

- 🎮 **Daily Challenge**: New country every day
- 🌍 **150+ World Countries**: UN member states and territories
- 🏳️ **Progressive Reveal**: Flag images become clearer with each guess
- 📍 **Distance Hints**: Learn geography with proximity indicators
- 🏆 **Achievement System**: Streak tracking and milestones
- 📊 **Admin Dashboard**: Manage countries and view statistics
- 🍪 **Privacy Compliant**: GDPR/CCPA cookie consent with Google Analytics
- 🌙 **Dark/Light Theme**: Responsive design for all devices
- 🚀 **SEO Optimized**: Structured data and meta tags

## 🎯 How to Play

1. **Guess the Country**: You have 6 attempts to identify the mystery country
2. **Progressive Hints**: Each wrong guess reveals more of the flag
3. **Distance Clues**: Get proximity hints to learn global geography
4. **Build Streaks**: Maintain winning streaks for achievements
5. **Share Results**: Share your daily results on social media

## 🏗️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Radix UI
- **Database**: File-based persistence (PostgreSQL ready)
- **Analytics**: Google Analytics 4 with Consent Mode v2
- **Deployment**: Vercel (auto-deploy enabled)
- **Package Manager**: pnpm

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/webforce-studio/flaggle.git
cd flaggle

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env.local
# Add your Google Analytics ID: NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Run the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app in action!

## 🌐 Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/webforce-studio/flaggle)

1. **Connect GitHub**: Link your GitHub repository to Vercel
2. **Add Environment Variables**:
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID`: Your Google Analytics measurement ID
3. **Deploy**: Vercel will automatically build and deploy your app
4. **Auto-Deploy**: Future pushes to `main` will automatically trigger deployments

### Environment Variables

```bash
# Required for Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

## 🎮 Country Collection

Our collection includes UN member states starting with A, B, and C:

**A**: Afghanistan, Albania, Algeria, Andorra, Angola, Antigua and Barbuda, Argentina, Armenia, Australia, Austria, Azerbaijan
**B**: Bahamas, Bahrain, Bangladesh, Barbados, Belarus, Belgium, Belize, Benin, Bhutan, Bolivia, Bosnia and Herzegovina, Botswana, Brazil, Brunei, Bulgaria, Burkina Faso, Burundi
**C**: Cambodia, Cameroon, Canada, Cape Verde, Central African Republic, Chad, Chile, China, Colombia, Comoros, Congo, Costa Rica, Croatia, Cuba, Cyprus, Czech Republic

## 🛠️ Development

### Project Structure

```
flaggle/
├── app/                 # Next.js App Router pages
├── components/          # Reusable React components
├── lib/                # Utilities and data management
├── public/             # Static assets
├── styles/             # Global styles
└── data/               # Country data and CSV files
```

### Key Files

- `lib/country-database.ts`: Country data and interfaces
- `app/page.tsx`: Main game component
- `app/admin/`: Admin dashboard for country management
- `components/cookie-consent.tsx`: GDPR-compliant cookie banner
- `components/google-analytics.tsx`: GA4 integration

### Adding New Countries

1. **Edit Country Database**: Add new entries to `lib/country-database.ts`
2. **Flag Requirements**: High-quality flag images from flagcdn.com
3. **Data Fields**: Name, code, flag URL, region, capital, population, coordinates
4. **Admin Interface**: Use `/admin/dashboard` to manage countries

## 📊 Analytics & Privacy

- **Google Analytics 4**: Comprehensive game analytics
- **Custom Events**: Country guesses, completions, streaks
- **Cookie Consent**: Granular privacy controls
- **GDPR Compliant**: Explicit consent required
- **Privacy First**: No tracking without user permission

## 🤝 Contributing

We welcome contributions! Please:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎯 Roadmap

- [ ] **Multiplayer Mode**: Compete with friends
- [ ] **Weekly Challenges**: Special themed weeks
- [ ] **Achievement Badges**: Visual progress indicators
- [ ] **Country Stories**: Rich historical content
- [ ] **User Accounts**: Personal statistics and history
- [ ] **Mobile App**: Native iOS/Android versions

## 🙋‍♂️ Support

- **Issues**: [GitHub Issues](https://github.com/webforce-studio/flaggle/issues)
- **Discussions**: [GitHub Discussions](https://github.com/webforce-studio/flaggle/discussions)
- **Email**: contact@flaggle.fun

## 🌟 Acknowledgments

- **Flag Images**: Sourced from flagcdn.com with proper attribution
- **Geographic Data**: Various open-source geographic databases
- **Inspiration**: The original Wordle game by Josh Wardle
- **UI Components**: Radix UI and Tailwind CSS communities

---

**Made with ❤️ for geography enthusiasts and flag lovers worldwide**

[🌐 Play Flaggle](https://flaggle.fun) | [📱 Share on Twitter](https://twitter.com/intent/tweet?text=I%20just%20played%20Flaggle%2C%20the%20daily%20flag%20guessing%20game!%20%F0%9F%8F%B3%EF%B8%8F%20Test%20your%20knowledge%20of%20world%20flags%3A%20https%3A//flaggle.fun) | [⭐ Star on GitHub](https://github.com/webforce-studio/flaggle) # Force rebuild Fri Sep  5 23:55:14 CEST 2025
