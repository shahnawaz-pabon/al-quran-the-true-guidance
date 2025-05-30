# Al Quran - The True Guidance

## 📖 Overview

It's a modern web application built with Next.js that allows users to browse and read the Holy Quran with translations in multiple languages. The application features a clean interface with dark/light mode support and responsive design.

## 🚀 Features

- **Multilingual Support**: English and Arabic interfaces
- **Surah Browser**: View all 114 surahs with details
- **Verse Display**: Read individual verses with translations
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Dark/Light Mode**: Automatic theme switching based on system preferences
- **Interactive Sidebar**: Easy navigation with collapsible sections
- **Search Functionality**: Find surahs quickly

## 🛠 Technologies Used

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Internationalization**: [next-intl](https://next-intl-docs.vercel.app/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **State Management**: React Context API
- **Type Safety**: TypeScript

## 📂 Project Structure

```
al-quran-the-true-guidance/
├── public/
│   ├── locales/          # Translation files
│   │   ├── en.json
│   │   └── ar.json
│   └── fonts/            # Arabic font files
├── src/
│   ├── app/
│   │   ├── [locale]/     # Localized routes
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   └── surah/
│   │   │       └── [number]/
│   │   │           └── page.tsx
│   ├── components/       # Reusable components
│   ├── data/             # Quran data files
│   ├── hooks/            # Custom hooks
│   ├── i18n/             # Localization configuration
│   ├── lib/              # Utility functions
│   ├── styles/           # Global styles
│   ├── types/            # TypeScript types
│   └── middleware.ts     # Internationalization middleware
└── next.config.js        # Next.js configuration
```

## 🏁 Getting Started

### Prerequisites

- Node.js v18+
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/shahnawaz-pabon/al-quran-the-true-guidance.git
   cd al-quran-the-true-guidance
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

### Running the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
# or
yarn build
```

Then start the production server:
```bash
npm run start
# or
yarn start
```

## 🌍 Supported Languages

- English (`/en`)
- Arabic (`/ar`)

## 🎨 Theming

The application supports both light and dark modes, automatically adapting to system preferences. Users can manually toggle between themes using the theme switcher in the navigation bar.

## 📚 Data Sources

- Quran text and translations are loaded from local JSON files
- Surah metadata includes:
  - Arabic names
  - English names
  - Revelation type (Meccan/Medinan)
  - Number of verses

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## ✉️ Contact

Project Maintainer - **MD. SHAHNAWAZ HOSSAN**

Project Link: [https://github.com/shahnawaz-pabon/al-quran-the-true-guidance](https://github.com/shahnawaz-pabon/al-quran-the-true-guidance)

---

Made with ❤️ and Next.js