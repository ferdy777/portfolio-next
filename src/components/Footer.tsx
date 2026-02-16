import Link from "next/link";
import { portfolioData } from "@/data/portfolio";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-black">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="animate-fade-in animate-delay-100">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 transition-transform duration-300 hover:scale-110">
                <span className="text-sm font-bold text-white">G</span>
              </div>
              <span className="font-semibold text-zinc-900 dark:text-white">
                {portfolioData.personal.name}
              </span>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {portfolioData.personal.title}
            </p>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in animate-delay-200">
            <h4 className="font-semibold text-zinc-900 dark:text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#about"
                  className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors dark:text-zinc-400 dark:hover:text-zinc-100"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#experience"
                  className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors dark:text-zinc-400 dark:hover:text-zinc-100"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors dark:text-zinc-400 dark:hover:text-zinc-100"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors dark:text-zinc-400 dark:hover:text-zinc-100"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="animate-fade-in animate-delay-300">
            <h4 className="font-semibold text-zinc-900 dark:text-white mb-4">
              Follow
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href={portfolioData.personal.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors dark:text-zinc-400 dark:hover:text-zinc-100"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  href={portfolioData.personal.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors dark:text-zinc-400 dark:hover:text-zinc-100"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href={portfolioData.personal.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors dark:text-zinc-400 dark:hover:text-zinc-100"
                >
                  Twitter
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="animate-fade-in animate-delay-400">
            <h4 className="font-semibold text-zinc-900 dark:text-white mb-4">
              Contact
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href={`mailto:${portfolioData.personal.email}`}
                  className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors dark:text-zinc-400 dark:hover:text-zinc-100 break-all"
                >
                  {portfolioData.personal.email}
                </Link>
              </li>
              <li>
                <Link
                  href={`tel:${portfolioData.personal.phone}`}
                  className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors dark:text-zinc-400 dark:hover:text-zinc-100"
                >
                  {portfolioData.personal.phone}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-zinc-200 dark:border-zinc-800" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            © {currentYear} {portfolioData.personal.name}. All rights reserved.
          </p>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Designed & Built with Next.js, Tailwind CSS & shadcn/ui
          </p>
        </div>
      </div>
    </footer>
  );
}
