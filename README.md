# Emmy's Advanced Portfolio

An advanced, modern portfolio website built with **Next.js**, **Tailwind CSS**, **shadcn/ui**, and **Framer Motion**. Features beautiful animations, dark mode support, and a professional design.

## 🚀 Features

- ✨ **Advanced Animations** - Smooth transitions and interactive elements using Framer Motion
- 🌓 **Dark Mode** - Full light/dark mode support with theme persistence
- 📱 **Responsive Design** - Mobile-first approach with seamless responsiveness
- 🎨 **Modern UI** - Built with shadcn/ui components and Tailwind CSS
- ⚡ **Performance** - Optimized with Next.js and modern best practices
- 🎯 **SEO Ready** - Proper metadata and structured content
- 📊 **Interactive Sections** - Hero, About, Projects, Skills, Contact

## 📂 Project Structure

```
src/
├── app/
│   ├── globals.css           # Global styles and animations
│   ├── layout.tsx            # Root layout with theme provider
│   └── page.tsx              # Home page
├── components/
│   ├── navbar.tsx            # Navigation bar
│   ├── theme-toggle.tsx      # Dark mode toggle
│   ├── providers/
│   │   └── theme-provider.tsx # Theme context provider
│   └── sections/
│       ├── hero.tsx          # Hero section
│       ├── about.tsx         # About section
│       ├── projects.tsx      # Projects showcase
│       ├── skills.tsx        # Skills section
│       ├── contact.tsx       # Contact form
│       └── footer.tsx        # Footer
├── config/
│   └── portfolio.ts          # Portfolio data and configuration
└── lib/
    └── animations.ts         # Framer Motion animation variants
```

## 🛠️ Technologies Used

- **Framework**: Next.js 16+ with App Router
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Motion**: Framer Motion
- **Icons**: Lucide React
- **Intersection**: react-intersection-observer for scroll animations
- **Language**: TypeScript

## 🚀 Getting Started

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:3000`

### Build for Production

```bash
# Build the project
npm run build

# Start production server
npm run start
```

## 🎨 Customization

### Portfolio Data

Edit `src/config/portfolio.ts` to update:
- Personal information
- Project details
- Skills and experience
- Contact information
- Color scheme

### Theme Colors

The portfolio uses a professional color scheme:
- **Primary**: Indigo (#6366f1)
- **Secondary**: Pink (#ec4899)
- **Accent**: Cyan (#06b6d4)

Modify the `THEME_COLORS` in `src/config/portfolio.ts` to change colors.

### Animations

Customize animations in `src/lib/animations.ts`. All animations use Framer Motion variants for consistent, reusable animations.

## 🌓 Dark Mode

Dark mode is automatically applied based on:
1. Saved user preference (localStorage)
2. System preference (prefers-color-scheme)
3. Manual toggle via theme button

The theme provider synchronizes all components and persists the user's choice.

## 📋 Features Breakdown

### Navigation
- Fixed navbar with smooth scroll
- Mobile-responsive menu
- Theme toggle button
- Scroll-aware background effects

### Hero Section
- Large headline with gradient text
- Animated background decorative elements
- CTA buttons with hover effects
- Social media links
- Floating stat cards
- Scroll indicator

### About Section
- Professional description
- Key highlights with animated checkmarks
- Statistics with counter animations
- Scroll-triggered animations

### Projects Section
- Project grid with image overlays
- Hover effects and transitions
- Technology tags
- GitHub and live demo links
- Smooth animations on scroll

### Skills Section
- Categorized skill display
- Animated skill bars
- Percentage indicators
- Professional proficiency levels
- Learning & growth section

### Contact Section
- Contact information cards
- Interactive contact form
- Form submission feedback
- Social links

### Footer
- Quick navigation links
- Social media links
- Copyright information
- Animated heart icon

## 🎯 Performance Optimizations

- Next.js Image optimization
- Code splitting and lazy loading
- CSS-in-JS with Tailwind
- Optimized animations with Framer Motion
- SEO-friendly structure

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Deploy to Other Platforms

The project is compatible with any hosting platform that supports Next.js:
- Netlify
- GitHub Pages
- AWS Amplify
- Firebase Hosting
- Any Node.js server

## 📖 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [shadcn/ui Documentation](https://ui.shadcn.com/)

## 📄 License

This project is open source and available under the MIT License.

---

Built with ❤️ using modern web technologies.
