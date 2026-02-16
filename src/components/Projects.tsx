import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { portfolioData } from "@/data/portfolio";
import Link from "next/link";

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Showcasing some of my best work
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {portfolioData.projects.map((project, index) => (
            <Card
              key={index}
              className="border-zinc-200 bg-white dark:border-zinc-800 dark:bg-black/50 overflow-hidden flex flex-col hover:shadow-xl transition-shadow hover:-translate-y-1 duration-300"
            >
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-zinc-600 dark:text-zinc-300 text-sm mb-4 flex-1">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 mb-2 uppercase">
                    Technologies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-6 text-sm">
                  <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 mb-2 uppercase">
                    Highlights
                  </p>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="text-zinc-600 dark:text-zinc-400 flex items-start gap-2"
                      >
                        <span className="text-base">→</span>
                        <span className="text-xs">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Link */}
                <Link href={project.link} target="_blank">
                  <Button variant="outline" size="sm" className="w-full">
                    View Project
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
