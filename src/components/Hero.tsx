import { Button } from "@/components/ui/button";
import { portfolioData } from "@/data/portfolio";
import Link from "next/link";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-32">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 dark:border-zinc-800 dark:bg-zinc-900/50">
            <span className="mr-2 text-lg">👋</span>
            <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
              Welcome to my portfolio
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-6xl">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {portfolioData.personal.name}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-xl text-zinc-600 dark:text-zinc-400">
            {portfolioData.personal.title}
          </p>

          {/* Description */}
          <p className="mt-6 max-w-2xl mx-auto text-lg text-zinc-600 dark:text-zinc-300">
            {portfolioData.personal.bio}
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="#projects">
              <Button size="lg" className="w-full sm:w-auto">
                View My Work
              </Button>
            </Link>
            <Link href="#contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Get In Touch
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            <div>
              <div className="text-3xl font-bold text-zinc-900 dark:text-white">
                3+
              </div>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Years of Experience
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-zinc-900 dark:text-white">
                10+
              </div>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Projects Completed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
