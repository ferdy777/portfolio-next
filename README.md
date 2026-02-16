# Professional Portfolio Website

A modern, responsive portfolio website built with **Next.js 16**, **Tailwind CSS**, and **shadcn/ui** components. Designed for senior software engineers to showcase their work, skills, and experience.

## ✨ Features

- **Modern Design**: Clean, professional interface with a dark/light mode toggle
- **Responsive Layout**: Fully optimized for mobile, tablet, and desktop devices
- **Component-Based Architecture**: Built with reusable shadcn/ui components
- **SEO Optimized**: Comprehensive metadata and Open Graph support
- **Performance**: Fast loading with Next.js 16 and Turbopack
- **Type-Safe**: Full TypeScript support
- **Dark Mode**: Seamless dark/light mode support with Tailwind CSS

## 🚀 Sections

1. **Navigation**: Sticky header with smooth scroll navigation
2. **Hero Section**: Eye-catching introduction with stats
3. **Skills & Expertise**: Organized skill categories with badges
4. **Professional Experience**: Timeline of roles with achievements
5. **Featured Projects**: Showcase of best work with technologies
6. **Contact**: Multiple contact options and contact form
7. **Footer**: Quick links and social connections

## 🛠️ Tech Stack

- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui
- **Language**: TypeScript
- **Font**: Geist (Google Fonts)

## 📋 Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

1. **Install dependencies**:

```bash
npm install
```

2. **Start development server**:

```bash
npm run dev
```

3. **Open in browser**:
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Main portfolio page
├── components/
│   ├── Navigation.tsx        # Header navigation
│   ├── Hero.tsx              # Hero section
│   ├── Skills.tsx            # Skills showcase
│   ├── Experience.tsx        # Work experience
│   ├── Projects.tsx          # Featured projects
│   ├── Contact.tsx           # Contact section
│   ├── Footer.tsx            # Footer
│   └── ui/                   # shadcn/ui components
└── data/
    └── portfolio.ts          # Portfolio content data
```

## ✏️ Customization

### Update Portfolio Content

Edit `src/data/portfolio.ts` to update:

- Personal information (name, title, bio, contact details)
- Skills by category
- Work experience and achievements
- Featured projects
- Education and certifications

Example:

```typescript
export const portfolioData = {
  personal: {
    name: "Your Name",
    title: "Your Title",
    bio: "Your bio...",
    email: "your.email@example.com",
    // ... more fields
  },
  // ... other sections
};
```

### Customize Styling

- **Colors**: Modify Tailwind CSS variables in `src/app/globals.css`
- **Fonts**: Change font imports in `src/app/layout.tsx`
- **Components**: All shadcn/ui components are in `src/components/ui/`

### Add New Components

1. Create new component in `src/components/`
2. Import in `src/app/page.tsx`
3. Add to the layout

## 🎨 Component Library (shadcn/ui)

The project includes these shadcn components:

- Button
- Card
- Badge
- Dialog
- Hover Card
- Separator

To add more components:

```bash
npx shadcn@latest add [component-name]
```

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🌙 Dark Mode

Dark mode is automatically supported via Tailwind CSS dark mode class. Users can switch themes:

- Add a theme toggle in the Navigation component
- Uses `dark` class on HTML element

## 📊 SEO

The portfolio includes:

- Proper HTML metadata
- Open Graph tags for social sharing
- Twitter card support
- Structured markup
- Sitemap and robots.txt (ready to add)

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push to GitHub
2. Connect repository to Vercel
3. Vercel auto-deploys on push

### Deploy to Other Platforms

The app builds to static files, compatible with any host:

```bash
npm run build
```

Output goes to `.next/` directory.

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📝 Environment Variables

Create `.env.local` for any environment-specific variables:

```
# .env.local
NEXT_PUBLIC_SITE_URL=https://yourwebsite.com
```

## 🎯 Best Practices

1. **Keep Content Updated**: Regularly update `src/data/portfolio.ts` with recent work
2. **Optimize Images**: Use Next.js Image component for all images
3. **Test Responsiveness**: Check on multiple devices
4. **Track Analytics**: Add Google Analytics or Vercel Analytics
5. **Monitor Performance**: Use Vercel Analytics and Web Vitals

## 📧 Contact Form Integration

To enable the contact form:

1. Integrate with email service (Resend, SendGrid, Nodemailer)
2. Create API route: `src/app/api/contact/route.ts`
3. Update form submission in `src/components/Contact.tsx`

## 🐛 Troubleshooting

### Build Errors

- Clear `.next` folder: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`

### Styling Issues

- Restart dev server
- Clear browser cache (Cmd+Shift+R on Mac)
- Check Tailwind CSS configuration

## 📖 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

Created with care for showcasing professional portfolios.

---

**Ready to showcase your work?** Start by updating your information in `src/data/portfolio.ts`!
