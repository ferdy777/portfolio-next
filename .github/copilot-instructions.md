# Professional Portfolio - Setup & Development Guide

## Project Overview

This is a professional portfolio website built with Next.js 16, Tailwind CSS v4, and shadcn/ui components. It's designed specifically for senior software engineers to showcase their work, experience, and skills.

## ✅ Completed Setup Steps

### 1. Project Initialized

- ✓ Next.js 16 project created with App Router
- ✓ TypeScript configured
- ✓ Tailwind CSS v4 integrated
- ✓ ESLint configured

### 2. Dependencies Installed

- ✓ Core dependencies: next, react, react-dom
- ✓ Styling: tailwindcss, @tailwindcss/postcss
- ✓ UI Components: shadcn/ui with 6 essential components
  - Button
  - Card
  - Badge
  - Dialog
  - Hover Card
  - Separator

### 3. Project Structure Created

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx (with SEO metadata)
│   └── page.tsx (main portfolio page)
├── components/
│   ├── Navigation.tsx (sticky header)
│   ├── Hero.tsx (hero section with stats)
│   ├── Skills.tsx (skills showcase)
│   ├── Experience.tsx (work experience)
│   ├── Projects.tsx (featured projects)
│   ├── Contact.tsx (contact section)
│   ├── Footer.tsx (footer)
│   └── ui/ (shadcn components)
└── data/
    └── portfolio.ts (portfolio content data)
```

### 4. Components Built

- ✓ Navigation: Sticky header with smooth scroll navigation
- ✓ Hero: Eye-catching introduction with statistics
- ✓ Skills: Organized skill categories with color-coded badges
- ✓ Experience: Professional experience with achievements
- ✓ Projects: Featured projects with technologies
- ✓ Contact: Contact form and social links
- ✓ Footer: Quick links and copyright

### 5. Build Status

- ✓ Project builds successfully without errors
- ✓ Development server running on port 3000
- ✓ Hot reload working
- ✓ No TypeScript errors

## 🚀 Running the Project

### Start Development Server

```bash
npm run dev
```

Access at `http://localhost:3000`

### Build for Production

```bash
npm run build
npm start
```

### Lint Code

```bash
npm run lint
```

## 📝 Customization Guide

### 1. Update Personal Information

Edit `src/data/portfolio.ts`:

```typescript
export const portfolioData = {
  personal: {
    name: "Your Name",
    title: "Your Job Title",
    bio: "Your professional bio",
    email: "your.email@example.com",
    phone: "+1 (555) 123-4567",
    location: "Your Location",
    website: "https://yourwebsite.com",
    social: {
      github: "https://github.com/yourprofile",
      linkedin: "https://linkedin.com/in/yourprofile",
      twitter: "https://twitter.com/yourprofile",
    },
  },
  // ... rest of data
};
```

### 2. Update Skills

In `src/data/portfolio.ts`, modify the `skills` object:

```typescript
skills: {
  languages: ["TypeScript", "JavaScript", "Python", ...],
  frontend: ["React", "Next.js", "Vue.js", ...],
  backend: ["Node.js", "Express", "Django", ...],
  devops: ["Docker", "Kubernetes", "AWS", ...],
  tools: ["Git", "VS Code", "Figma", ...],
}
```

### 3. Update Work Experience

Add/edit entries in `portfolioData.experience`:

```typescript
{
  title: "Senior Software Engineer",
  company: "Company Name",
  period: "2021 - Present",
  description: "Description of role",
  achievements: [
    "Achievement 1",
    "Achievement 2",
    "Achievement 3",
  ],
}
```

### 4. Add Projects

Edit `portfolioData.projects`:

```typescript
{
  title: "Project Title",
  description: "Project description",
  technologies: ["Tech1", "Tech2", "Tech3"],
  link: "https://github.com/project",
  highlights: [
    "Highlight 1",
    "Highlight 2",
  ],
}
```

### 5. Update Education

Modify `portfolioData.education`:

```typescript
{
  degree: "Bachelor of Science in Computer Science",
  institution: "University Name",
  year: "2017",
  details: "GPA: 3.8/4.0",
}
```

## 🎨 Styling Customization

### Colors

Primary colors are defined in `src/app/globals.css`:

- Modify CSS custom properties (--color-primary, --color-secondary, etc.)
- Changes affect both light and dark modes

### Fonts

Font imports in `src/app/layout.tsx`:

- Currently using Geist Sans and Geist Mono
- Change to any Google Font

### Dark Mode

Dark mode is automatically supported:

- CSS uses `dark:` utility classes
- Browser respects system dark mode preference
- Add theme toggle in Navigation component if desired

## 📦 Adding More Components

Install additional shadcn components:

```bash
npx shadcn@latest add [component-name]
```

Available components: tooltip, dropdown-menu, tabs, avatar, textarea, input, select, etc.

## 🚢 Deployment Options

### Vercel (Recommended)

1. Push code to GitHub/GitLab
2. Connect repository to Vercel
3. Auto-deploys on push

### Other Platforms

The build output is static files in `.next/`:

- Netlify
- GitHub Pages
- Firebase Hosting
- AWS S3 + CloudFront
- Any static host

## 📊 SEO Configuration

Update metadata in `src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your Name - Your Title",
  description: "Your professional description",
  openGraph: {
    url: "https://yourwebsite.com",
    title: "Your Name - Your Title",
    description: "Your description",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Name",
  },
};
```

## 📧 Contact Form Integration

Current contact form is a UI placeholder. To enable:

1. Install email service:

```bash
npm install resend
```

2. Create API route `src/app/api/contact/route.ts`

3. Update `src/components/Contact.tsx` form submission

## 🐛 Troubleshooting

| Issue                  | Solution                                                                   |
| ---------------------- | -------------------------------------------------------------------------- |
| Build fails            | Clear `.next/`, reinstall deps: `rm -rf .next node_modules && npm install` |
| Styling not working    | Restart dev server, clear browser cache                                    |
| Hot reload not working | Check if dev server is running on port 3000                                |
| Type errors            | Run `npm run build` to see full TypeScript errors                          |

## 📖 Useful Resources

- [Next.js 16 Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

## 🔑 Key Features Implemented

✓ Responsive design (mobile, tablet, desktop)
✓ Dark/light mode support
✓ SEO optimized (metadata, Open Graph, Twitter cards)
✓ Fast performance (Next.js 16 with Turbopack)
✓ Type-safe (Full TypeScript)
✓ Component library (shadcn/ui)
✓ Smooth scrolling navigation
✓ Professional styling (Tailwind CSS)
✓ Contact form (ready for API integration)
✓ Social media links
✓ Skills showcase with categories
✓ Work experience timeline
✓ Featured projects section
✓ Education section
✓ Certifications display

## 🎯 Next Steps

1. **Update portfolio.ts** with your actual information
2. **Add profile image** (create public/profile.jpg)
3. **Test on multiple devices** (mobile, tablet, desktop)
4. **Integrate contact form** with email service
5. **Deploy** to Vercel or hosting platform
6. **Add analytics** (Google Analytics, Vercel Analytics)
7. **Configure domain** (yourname.com)

## 📝 Notes

- All components use TypeScript for type safety
- Color scheme uses Tailwind CSS default colors (customizable)
- Icons are inline SVGs in Navigation and Footer
- Forms are styled but need backend integration
- No authentication needed for static portfolio

---

**Last Updated**: February 16, 2026
**Status**: ✅ All setup complete and running
