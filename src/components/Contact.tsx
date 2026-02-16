import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { portfolioData } from "@/data/portfolio";
import Link from "next/link";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-50 dark:bg-zinc-900/50"
    >
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
            Let&apos;s Work Together
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            I&apos;m always interested in hearing about new projects and
            opportunities.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact Information */}
          <Card className="border-zinc-200 bg-white dark:border-zinc-800 dark:bg-black/50 p-8">
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-6">
              Get in Touch
            </h3>

            <div className="space-y-6">
              {portfolioData.personal.email && (
                <div>
                  <p className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 mb-2">
                    Email
                  </p>
                  <Link
                    href={`mailto:${portfolioData.personal.email}`}
                    className="text-lg font-medium text-zinc-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-all"
                  >
                    {portfolioData.personal.email}
                  </Link>
                </div>
              )}

              {portfolioData.personal.phone && (
                <div>
                  <p className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 mb-2">
                    Phone
                  </p>
                  <Link
                    href={`tel:${portfolioData.personal.phone}`}
                    className="text-lg font-medium text-zinc-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {portfolioData.personal.phone}
                  </Link>
                </div>
              )}

              {portfolioData.personal.location && (
                <div>
                  <p className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 mb-2">
                    Location
                  </p>
                  <p className="text-lg font-medium text-zinc-900 dark:text-white">
                    {portfolioData.personal.location}
                  </p>
                </div>
              )}
            </div>

            {/* Social Links */}
            <div className="mt-8 pt-8 border-t border-zinc-200 dark:border-zinc-800">
              <p className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 mb-4">
                Connect on Social
              </p>
              <div className="flex gap-4">
                <Link
                  href={portfolioData.personal.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-zinc-100 text-zinc-600 hover:bg-blue-600 hover:text-white transition-colors dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-blue-600"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </Link>
                <Link
                  href={portfolioData.personal.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-zinc-100 text-zinc-600 hover:bg-blue-600 hover:text-white transition-colors dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-blue-600"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.39v-1.2h-2.84v8.37h2.84v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.84M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </Link>
                <Link
                  href={portfolioData.personal.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-zinc-100 text-zinc-600 hover:bg-blue-600 hover:text-white transition-colors dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-blue-600"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7" />
                  </svg>
                </Link>
              </div>
            </div>
          </Card>

          {/* Quick Contact Form */}
          <Card className="border-zinc-200 bg-white dark:border-zinc-800 dark:bg-black/50 p-8">
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-6">
              Send a Message
            </h3>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-zinc-900 dark:text-white mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border border-zinc-200 bg-white text-zinc-900 placeholder-zinc-400 transition-colors hover:border-zinc-300 focus:border-blue-600 focus:outline-none dark:border-zinc-800 dark:bg-black/50 dark:text-white dark:placeholder-zinc-600 dark:hover:border-zinc-700 dark:focus:border-blue-600"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-900 dark:text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg border border-zinc-200 bg-white text-zinc-900 placeholder-zinc-400 transition-colors hover:border-zinc-300 focus:border-blue-600 focus:outline-none dark:border-zinc-800 dark:bg-black/50 dark:text-white dark:placeholder-zinc-600 dark:hover:border-zinc-700 dark:focus:border-blue-600"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-900 dark:text-white mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-zinc-200 bg-white text-zinc-900 placeholder-zinc-400 transition-colors hover:border-zinc-300 focus:border-blue-600 focus:outline-none dark:border-zinc-800 dark:bg-black/50 dark:text-white dark:placeholder-zinc-600 dark:hover:border-zinc-700 dark:focus:border-blue-600 resize-none"
                  placeholder="Your message..."
                />
              </div>

              <Button className="w-full">Send Message</Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
