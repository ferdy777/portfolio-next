import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Navbar } from "@/components/navbar"; // import Navbar here

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Emmy - Full Stack Developer & Creative Problem Solver",
  description:
    "Advanced portfolio showcasing projects, skills, and experience in full-stack web development",
  keywords: ["Portfolio", "Developer", "Full Stack", "React", "Next.js"],
  authors: [{ name: "Emmy" }],
  openGraph: {
    type: "website",
    title: "Emmy - Full Stack Developer",
    description: "Building beautiful and functional web experiences",
    url: "https://emmy-portfolio.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Blocking script to prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme') || 'system';
                  const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
                  if (isDark) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50`}
      >
        {/* ThemeProvider wraps everything including Navbar */}
        <ThemeProvider>
          {/* Navbar must be inside the ThemeProvider so useTheme works */}
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
